                      name: Ut.name,
                      rolePersona: String(zf(Ut, f) || "").slice(0, 500),
                      style: String(Ut.style || "").slice(0, 200),
                      boundUserName: ws,
                      boundUserPersona: Ls,
                      isBilingual: Ut.isBilingual === !0,
                      knowsUserIdentity: Ut.knowsUserIdentity === !0,
                    };
                  }),
                Dt = Array.from(
                  new Set(
                    [
                      ie == null ? void 0 : ie.name,
                      ae == null ? void 0 : ae.name,
                    ]
                      .map((Ut) => String(Ut || "").trim())
                      .filter(Boolean),
                  ),
                ),
                Mt = await h(
                  ys(kt.content),
                  ie || { name: "用户" },
                  Number((ie == null ? void 0 : ie.followers) || 0),
                  kt.mediaType,
                  kt.mediaPrompt,
                  (kt.mediaType === "image" && (kt.cover || kt.mediaUrl)) ||
                    null,
                  { residentCommenters: Ct, bannedUserNames: Dt },
                );
              if (Mt) {
                const Ut = WJ(Mt.comments, ve, f),
                  ws = Ut.reduce((Ot, rs) => {
                    var gs;
                    return (
                      Ot +
                      1 +
                      (((gs = rs.replies) == null ? void 0 : gs.length) || 0)
                    );
                  }, 0);
                (E((Ot) =>
                  Ot.map((rs) =>
                    rs.id === kt.id
                      ? {
                          ...rs,
                          stats: {
                            ...rs.stats,
                            likes:
                              (rs.stats.likes || 0) + (Mt.stats.likes || 0),
                            comments: ws || Mt.stats.comments || 0,
                            shares: Mt.stats.shares || 0,
                            favorites: Mt.stats.favorites || 0,
                            views:
                              (rs.stats.views || 0) +
                              Math.floor(
                                (Mt.stats.likes || 0) *
                                  (10 + Math.random() * 20),
                              ),
                          },
                          comments: Ut,
                        }
                      : rs,
                  ),
                ),
                  Mt.stats.newFollowers > 0 &&
                    ur({
                      followers: (ie.followers || 0) + Mt.stats.newFollowers,
                    }));
                const Ls = YJ(Ut, Mt.stats, kt, Date.now());
                if (
                  (Ls.length > 0 && P((Ot) => [...Ls, ...Ot]),
                  Math.random() > 0.6 && ve.length > 0)
                ) {
                  const Ot = ve[Math.floor(Math.random() * ve.length)];
                  let rs = "看了你的新作品，很有意思！互关一下？";
                  if (kt.mediaType === "image")
                    rs = "这张照片拍得真不错，构图很有感觉！📸";
                  else {
                    const gs = ys(kt.content);
                    gs.includes("猫") || gs.includes("狗")
                      ? (rs = "哇，太可爱了吧！我也想养宠物了 🐱")
                      : (gs.includes("吃") || gs.includes("美食")) &&
                        (rs = "看着好饿... 这是哪家店呀？😋");
                  }
                  setTimeout(() => {
                    const gs = {
                      id: Date.now(),
                      type: "text",
                      isMe: !1,
                      text: rs,
                      timestamp: Date.now(),
                    };
                    Fe((Is) => ({
                      ...Is,
                      [Ot.id]: [...(Is[Ot.id] || []), gs],
                    }));
                    const ps = {
                      id: Date.now(),
                      type: "message",
                      user: { name: Ot.name, avatar: Ot.avatar },
                      content: rs,
                      timestamp: Date.now(),
                      read: !1,
                    };
                    P((Is) => [ps, ...Is]);
                  }, 8e3);
                }
              }
            } catch {}
          }, 6e3));
      },
      ti = l.useCallback(
        (kt, Tt) => {
          if (!Tt || !Array.isArray(kt) || kt.length === 0) return;
          const Yt = Date.now(),
            de = Tt.id,
            Me = Tt.cover || Tt.mediaUrl || null,
            et = kt.filter((Mt) => {
              if (!Mt || !Mt.user) return !1;
              const Ut = Mt.user.id;
              return !(
                (ie == null ? void 0 : ie.id) != null &&
                Ut != null &&
                String(Ut) === String(ie.id)
              );
            });
          if (et.length === 0) return;
          const Dt = et
            .slice(0, 24)
            .map((Mt, Ut) => ({
              id: `${Yt}-cr-${Ut}-${Math.random().toString(36).slice(2, 8)}`,
              type: "comment",
              user: {
                id: Mt.user.id,
                name: Mt.user.name,
                avatar: Mt.user.avatar,
                douyinId: Mt.user.douyinId,
                contactId: Mt.user.contactId,
              },
              content: yC(Mt.content),
              timestamp: Yt - Ut * 90,
              read: !1,
              videoId: de,
              videoCover: Me,
            }));
          P((Mt) => [...Dt, ...Mt]);
        },
        [ie == null ? void 0 : ie.id],
      ),
      pi = l.useCallback((kt, Tt, Yt) => {
        const de = String(Yt || "").trim();
        if (!kt || !de) return !1;
        let Me = !1;
        return (
          Fe((et) => {
            const Ct = et && typeof et == "object" ? et : {},
              Dt = Array.isArray(Ct[kt]) ? Ct[kt] : [],
              Mt = Dt.filter(
                (Ls) => Ls && !Ls.isMe && (Ls.type === "text" || !Ls.type),
              ).length,
              Ut =
                !!Ze.current[kt] ||
                (Ue.current || []).some((Ls) => String(Ls) === String(kt)) ||
                (me.current || []).some((Ls) => String(Ls) === String(kt));
            if (Mt >= 1 && !Ut) return et;
            Me = !0;
            const ws = {
              id: Date.now() + Math.floor(Math.random() * 1e3),
              type: "text",
              isMe: !1,
              text: de,
              timestamp: Date.now(),
            };
            return { ...Ct, [kt]: [...Dt, ws] };
          }),
          Me &&
            tt((et) => ({
              ...et,
              [kt]: {
                name: String((Tt == null ? void 0 : Tt.name) || kt).slice(
                  0,
                  40,
                ),
                avatar: (Tt == null ? void 0 : Tt.avatar) || "",
              },
            })),
          Me
        );
      }, []),
      ii = l.useCallback(
        async ({
          aiReplies: kt,
          commentText: Tt,
          videoCaption: Yt,
          videoAuthorId: de,
        }) => {
          if (Math.random() > 0.26) return;
          const Me = ve || [],
            et = new Set(
              Me.map((Is) => String(Is == null ? void 0 : Is.id)).filter(
                Boolean,
              ),
            ),
            Ct = (Is) => {
              const As = String(Is || "").trim();
              return As.length < 2 ||
                As.length > 16 ||
                /[0-9]{3,}/.test(As) ||
                /^\d+$/.test(As) ||
                Me.some((Ks) => Ks && String(Ks.name) === As)
                ? !1
                : /[\u4e00-\u9fa5]{2}/.test(As);
            },
            Dt = (Is) => {
              if (!(Is != null && Is.user)) return !1;
              const As = Is.user.id != null ? String(Is.user.id) : "",
                Ks = String(Is.user.name || "").trim();
              return !Ks ||
                !As ||
                ((ie == null ? void 0 : ie.id) != null &&
                  As === String(ie.id)) ||
                (de != null && String(de) !== "" && As === String(de)) ||
                et.has(As)
                ? !1
                : As.startsWith("temp_user_")
                  ? Ct(Ks) || /^[A-Za-z0-9]{6,22}$/.test(Ks)
                  : !!(
                      As.startsWith("dy_passer_") ||
                      (/^[A-Za-z0-9]{8,18}$/.test(Ks) &&
                        !Me.some((on) => on && String(on.name) === Ks)) ||
                      Ct(Ks)
                    );
            },
            Mt = (Array.isArray(kt) ? kt : []).filter(Dt);
          let Ut, ws;
          if (Mt.length > 0) {
            const Is = Mt[Math.floor(Math.random() * Mt.length)];
            ((Ut = String(Is.user.id)),
              (ws = { name: Is.user.name, avatar: Is.user.avatar || "" }));
          } else {
            const Is = [
                "路过的风",
                "吃瓜摸到一半",
                "潜水党上岸",
                "理性讨论别扛",
                "只是路过",
                "躺平看戏中",
              ],
              As = `${Is[Math.floor(Math.random() * Is.length)]}·私信`;
            ((Ut = `dy_passer_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`),
              (ws = {
                name: As,
                avatar: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${encodeURIComponent(As)}`,
              }));
          }
          const Ls =
              Qe.current && typeof Qe.current == "object" ? Qe.current : {},
            rs = (Array.isArray(Ls[Ut]) ? Ls[Ut] : []).filter(
              (Is) => Is && !Is.isMe && (Is.type === "text" || !Is.type),
            ).length,
            gs =
              !!Ze.current[Ut] ||
              (Ue.current || []).some((Is) => String(Is) === String(Ut)) ||
              (me.current || []).some((Is) => String(Is) === String(Ut));
          if (rs >= 1 && !gs) return;
          const ps =
            (await A({
              passerDisplayName: ws.name,
              commentSnippet: String(Tt || "").slice(0, 400),
              videoSnippet: String(Yt || "").slice(0, 400),
            })) || "刷评论区刷到你了，私你一句哈。";
          pi(Ut, ws, ps);
        },
        [pi, A, ve, ie == null ? void 0 : ie.id],
      ),
      Br = {
        videos:
          F === "recommend" ? k : F === "works" ? M : F === "npc_works" ? T : S,
        allVideos: k,
        myVideos: M,
        searchVideos: S,
        setSearchVideos: j,
        npcVideoList: T,
        setNpcVideoList: I,
        hotSearches: L,
        setVideos: C,
        playMode: F,
        setPlayMode: D,
        activeVideoIndex: z,
        setActiveVideoIndex: O,
        lastRecommendIndex: Z,
        isPlaying: q,
        setIsPlaying: V,
        suspendFeedBgm: ne,
        setSuspendFeedBgm: le,
        currentUser: ie,
        setCurrentUser: X,
        following: je,
        friends: ye,
        updateUserProfile: ur,
        loadMoreVideos: xt,
        toggleLike: zt,
        updateVideoById: ms,
        toggleFollow: Cs,
        urgeUpdate: Rn,
        isCommentSectionOpen: H,
        setIsCommentSectionOpen: Y,
        commentingVideoId: U,
        openCommentSection: Qn,
        closeCommentSection: Ya,
        isShareOpen: pe,
        sharingVideoId: Te,
        openShare: Fr,
        closeShare: kr,
        deleteVideoById: Oa,
        settings: we,
        updateSettings: Jt,
        npcs: ve,
        addNpc: Vt,
        updateNpc: qt,
        deleteNpc: Lt,
        npcVideos: Ae,
        npcLikedVideos: ct,
        setNpcLikedVideosFor: st,
        npcFollowingLists: fs,
        setNpcFollowingListFor: $t,
        generateNpcHistory: pt,
        worldPresets: Pt,
        addWorldPreset: Qt,
        deleteWorldPreset: js,
        userPersona: ae,
        updateUserPersona: cs,
        userPresets: It,
        addUserPreset: Ne,
        deleteUserPreset: Je,
        clearAllData: St,
        isLoadingMore: re,
        lastVideoGenerationError: ge,
        postVideo: mi,
        notifications: $,
        setNotifications: P,
        enqueueCommentReplyNotifications: ti,
        offerRandomPasserDmAfterComment: ii,
        strangerChatPeers: $e,
        nearbyTruthProfiles: Xe,
        nearbyPublicCardsById: Pe,
        mergeNearbyPublicCards: Le,
        getNearbyPublicCard: _e,
        nearbyAffectionByPeer: Ie,
        nearbyAfterReplyPending: Re,
        nearbyNeedBeforeSendRating: at,
        getNearbyAffection: lt,
        recordNearbyBeforeSendRating: Ht,
        recordNearbyAfterReplyRating: is,
        nearbyTruthUnlocked: it,
        ensureNearbyChatRatingBaseline: os,
        summarizeNearbyChatHistory: Nt,
        searchAndGenerateVideos: qe,
        refreshHotSearchesFromNpcs: dt,
        privateChats: Se,
        privateChatTyping: fe,
        sendPrivateMessage: Be,
        receivePrivateMessage: Ke,
        upsertStrangerChatPeer: bt,
        setNearbyTruthProfile: ns,
        getNearbyTruthProfile: Ge,
        deletePrivateMessage: as,
        updatePrivateMessage: vs,
        triggerPrivateReply: ts,
        injectDouyinMemory: At,
        getNpcProfile: us,
        registerSearchUserStubs: rn,
        addFollowFromFriendsPanel: Rs,
        flushPendingFollowsFromFriends: Rt,
        followContactFromAddressBook: Es,
        unfollowContactFromAddressBook: nn,
        addFriendByDouyinId: Hs,
        processDouyinChatAcceptFriends: cn,
        recentShareTargets: oe,
        recordShareTarget: fn,
        getRoleBoundUser: i,
        contacts: f,
        chats: o,
        getAuthorAvatar: ra,
        getAuthorBackground: _a,
        bgmLibrary: _s,
        setBgmLibrary: qs,
        exclusiveBgmLibraries: xs,
        setExclusiveBgmLibraries: ot,
        coverLibraries: Bs,
        setCoverLibraries: Js,
        videoCoverAssignments: Xs,
        setVideoCoverAssignments: gn,
        getCoverForVideo: (kt, Tt, Yt) => {
          const de = Bs[kt];
          if (!de || !Array.isArray(de) || de.length === 0) return null;
          const Me = Xs[kt] || {},
            et = Me[Tt] !== void 0 ? Me[Tt] : (Yt ?? 0) % de.length,
            Ct = de[et];
          return (Ct == null ? void 0 : Ct.dataUrl) || null;
        },
        ensureCoverAssignments: (kt, Tt) => {
          const Yt = Bs[kt];
          if (!Yt || !Array.isArray(Yt) || Yt.length === 0) return;
          const de = (Tt || []).filter(Boolean).map(String);
          de.length > 0 && (wt.current = { ...(wt.current || {}), [kt]: de });
          const Me = (Mt, Ut) => {
              const ws = Mt.length;
              if (ws === 0) return Mt;
              const Ls = ((Ut % ws) + ws) % ws;
              return Mt.slice(Ls).concat(Mt.slice(0, Ls));
            },
            et = Array.from({ length: Yt.length }, (Mt, Ut) => Ut),
            Ct = {},
            Dt = Math.ceil(de.length / Yt.length);
          for (let Mt = 0; Mt < Dt; Mt++) {
            const Ut = Mt === 0 ? et : Me(et, Mt),
              ws = Mt * Yt.length,
              Ls = Math.min(ws + Yt.length, de.length);
            for (let Ot = ws; Ot < Ls; Ot++) Ct[de[Ot]] = Ut[Ot - ws];
          }
          gn((Mt) => ({ ...Mt, [kt]: Ct }));
        },
      };
    return e.jsx(vC.Provider, { value: Br, children: t });
  },
  Kk = ({ size: t = 15, className: s = "" }) =>
    e.jsxs("svg", {
      width: t,
      height: t,
      viewBox: "0 0 24 24",
      className: `shrink-0 ${s}`,
      "aria-hidden": !0,
      children: [
        e.jsx("path", {
          fill: "#03CCD9",
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M11.078 2.25c-.917 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 0 1-1.347.369l-.729-.57a1.38 1.38 0 0 0-1.753-.131l-1.897 1.38a1.381 1.381 0 0 0-.583 1.649l.241 1.015a.798.798 0 0 1-.5.81l-.916.53c-.512.297-.856.88-.856 1.548v1.723c0 .669.345 1.252.856 1.548l.916.53a.798.798 0 0 1 .5.81l-.241 1.015a1.383 1.383 0 0 0 .583 1.649l1.897 1.38c.53.387 1.22.438 1.753.131l.729-.57a.798.798 0 0 1 1.347.369l.091.549c.151.906.933 1.567 1.85 1.567h2.769c.917 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 0 1 1.347-.369l.729.57c.532.307 1.223.256 1.753-.131l1.897-1.38a1.381 1.381 0 0 0 .583-1.649l-.241-1.015a.798.798 0 0 1 .5-.81l.916-.53c.511-.296.856-.879.856-1.548v-1.723c0-.668-.345-1.251-.856-1.548l-.916-.53a.798.798 0 0 1-.5-.81l.241-1.015a1.382 1.382 0 0 0-.583-1.649l-1.897-1.38a1.38 1.38 0 0 0-1.753-.131l-.729.57a.798.798 0 0 1-1.347-.369l-.091-.549c-.151-.906-.934-1.567-1.85-1.567h-2.769Zm4.172 9.75a3.25 3.25 0 1 1 -6.5 0 3.25 3.25 0 0 1 6.5 0Z",
        }),
        e.jsx("circle", { cx: "12", cy: "12", r: "3.2", fill: "#03CCD9" }),
        e.jsx("path", {
          d: "M8.15 12.05 10.82 14.72 15.9 8.9",
          fill: "none",
          stroke: "white",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      ],
    }),
  Vd = (t) =>
    t == null
      ? ""
      : typeof t == "string"
        ? t
        : String(
            typeof t == "object"
              ? t.text ||
                  t.foreign ||
                  t.en ||
                  t.zh ||
                  t.cn ||
                  t.translation ||
                  ""
              : t,
          ),
  qk = (t, s) => {
    if (!t) return "";
    if (t.sourceType === "contact" && t.contactId && Array.isArray(s)) {
      const n = s.find((r) => r && String(r.id) === String(t.contactId)),
        a = n && String(n.setting ?? "").trim();
      if (a) return a;
    }
    return String(t.bio ?? "").trim();
  },
  Qk = (t, s, n, a, r) => {
    var d, u, f, p, m, h, g, x, y;
    let i = "",
      o = "";
    if (!t) return { boundUserName: i, boundUserPersona: o };
    if (t.sourceType === "contact" && t.contactId) {
      const v = (s || []).find(
          (_) => _ && String(_.id) === String(t.contactId),
        ),
        b = v && typeof r == "function" ? r(v) : {};
      i = String(
        (b == null ? void 0 : b.name) ||
          (v == null ? void 0 : v.name) ||
          (v == null ? void 0 : v.nickname) ||
          "",
      ).trim();
      const N =
          (v == null ? void 0 : v.boundUserPresetId) &&
          (n || []).find(
            (_) =>
              String(_ == null ? void 0 : _.id) === String(v.boundUserPresetId),
          ),
        w = [];
      return (
        (d = N == null ? void 0 : N.douyinPersona) != null && d.trim()
          ? w.push(
              `【观众·抖音人设（绑定预设）】${String(N.douyinPersona).trim()}`,
            )
          : (u = a == null ? void 0 : a.douyinPersona) != null &&
            u.trim() &&
            w.push(
              `【观众·抖音人设（全局）】${String(a.douyinPersona).trim()}`,
            ),
        (f = b == null ? void 0 : b.settings) != null && f.trim()
          ? w.push(
              `【观众·聊天/绑定人设（Chat 设定）】${String(b.settings).trim()}`,
            )
          : (p = N == null ? void 0 : N.settings) != null &&
            p.trim() &&
            w.push(`【观众·绑定预设·设定】${String(N.settings).trim()}`),
        (o = w
          .join(
            `
`,
          )
          .slice(0, 850)),
        !o.trim() &&
          (m = a == null ? void 0 : a.douyinPersona) != null &&
          m.trim() &&
          (o =
            `【观众·抖音人设（全局）】${String(a.douyinPersona).trim()}`.slice(
              0,
              850,
            )),
        { boundUserName: i, boundUserPersona: o }
      );
    }
    const c = (n || []).find((v) => {
      var b;
      return (
        String(v == null ? void 0 : v.id) ===
        String((b = t.boundUserPresets) == null ? void 0 : b[0])
      );
    });
    if (c) {
      i = String(c.userName || c.name || "").trim();
      const v = [];
      ((h = c.douyinPersona) != null && h.trim()
        ? v.push(
            `【观众·抖音人设（绑定预设）】${String(c.douyinPersona).trim()}`,
          )
        : (g = a == null ? void 0 : a.douyinPersona) != null &&
          g.trim() &&
          v.push(`【观众·抖音人设（全局）】${String(a.douyinPersona).trim()}`),
        (x = c.settings) != null &&
          x.trim() &&
          v.push(
            `【观众·聊天/绑定人设（Chat 设定）】${String(c.settings).trim()}`,
          ),
        (o = v
          .join(
            `
`,
          )
          .slice(0, 850)));
    } else
      (y = a == null ? void 0 : a.douyinPersona) != null &&
        y.trim() &&
        (o = `【观众·抖音人设（全局）】${String(a.douyinPersona).trim()}`.slice(
          0,
          850,
        ));
    return { boundUserName: i, boundUserPersona: o };
  },
  ny = (t, s, n, a) => {
    const r = String((a == null ? void 0 : a.douyinPersona) || "").trim();
    if (!t) return r.slice(0, 850);
    if (t.sourceType === "contact" && t.contactId) {
      const o = (s || []).find(
          (d) => d && String(d.id) === String(t.contactId),
        ),
        c =
          (o == null ? void 0 : o.boundUserPresetId) &&
          (n || []).find(
            (d) =>
              String(d == null ? void 0 : d.id) === String(o.boundUserPresetId),
          );
      return String((c == null ? void 0 : c.douyinPersona) || r || "")
        .trim()
        .slice(0, 850);
    }
    const i = (n || []).find((o) => {
      var c;
      return (
        String(o == null ? void 0 : o.id) ===
        String((c = t.boundUserPresets) == null ? void 0 : c[0])
      );
    });
    return String((i == null ? void 0 : i.douyinPersona) || r || "")
      .trim()
      .slice(0, 850);
  },
  KJ = ({ video: t, onClose: s, onViewProfile: n }) => {
    var Pe, ut, _t;
    const {
        currentUser: a,
        updateVideoById: r,
        npcs: i,
        userPersona: o,
        userPresets: c,
        contacts: d,
        getRoleBoundUser: u,
        getNpcProfile: f,
        chats: p = [],
        isLoadingMore: m,
        injectDouyinMemory: h,
        following: g = [],
        friends: x = [],
        enqueueCommentReplyNotifications: y,
        offerRandomPasserDmAfterComment: v,
      } = ei(),
      {
        generateComments: b,
        generateCommentInteractions: N,
        generateCommentAtMentionInteractions: w,
      } = l2(),
      [_, A] = l.useState(t.comments || []),
      [k, C] = l.useState(!1),
      [M, E] = l.useState(""),
      [S, j] = l.useState(!1),
      [T, I] = l.useState(null),
      [L, B] = l.useState(new Set()),
      [F, D] = l.useState(new Set()),
      [$, P] = l.useState(!1),
      [z, O] = l.useState(!1),
      [Z, K] = l.useState(""),
      q = l.useRef(null),
      V = (Ee) => {
        D((fe) => {
          const He = new Set(fe);
          return (He.has(Ee) ? He.delete(Ee) : He.add(Ee), He);
        });
      },
      ne = l.useRef(!1);
    (l.useEffect(() => {
      ne.current = !1;
    }, [t.id]),
      l.useEffect(() => {
        $ || (t.comments && t.comments.length > 0 && (A(t.comments), C(!1)));
      }, [t.id, t.comments, $]));
    const le = l.useMemo(
        () =>
          (i || [])
            .filter((Ee) => Ee && Ee.canComment === !0)
            .slice(0, 12)
            .map((Ee) => {
              let fe = "",
                He = "";
              const Ie = ny(Ee, d, c, o);
              if (Ee.knowsUserIdentity === !0) {
                const Ce = Qk(Ee, d, c, o, u);
                ((fe = Ce.boundUserName), (He = Ce.boundUserPersona));
              }
              return {
                name: Ee.name,
                rolePersona: String(qk(Ee, d) || Ee.bio || "").slice(0, 600),
                style: String(Ee.style || "").slice(0, 200),
                boundUserName: fe,
                boundUserPersona: He,
                publicUserPersona: Ie,
                isBilingual: Ee.isBilingual === !0,
                knowsUserIdentity: Ee.knowsUserIdentity === !0,
              };
            }),
        [i, d, u, c, o],
      ),
      ie = l.useMemo(() => new Set((g || []).map(String)), [g]),
      X = l.useMemo(() => new Set((x || []).map(String)), [x]),
      je = (Ee) =>
        Ee
          ? [Ee.id, Ee.douyinId, Ee.contactId]
              .filter(Boolean)
              .map(String)
              .some((He) => ie.has(He))
          : !1,
      xe = (Ee) =>
        Ee
          ? [Ee.id, Ee.douyinId, Ee.contactId]
              .filter(Boolean)
              .map(String)
              .some((He) => X.has(He))
          : !1,
      ye = l.useMemo(
        () => (i || []).filter((Ee) => Ee && Ee.name && je(Ee)),
        [i, ie],
      ),
      R = l.useMemo(() => {
        const Ee = new Set(),
          fe = (He) => {
            const Ie = String(He || "").trim();
            Ie && Ee.add(Ie);
          };
        return (
          fe(a == null ? void 0 : a.name),
          fe(o == null ? void 0 : o.name),
          (d || []).forEach((He) => {
            const Ie = He && typeof u == "function" ? u(He) : null;
            fe(Ie == null ? void 0 : Ie.name);
          }),
          Array.from(Ee)
        );
      }, [a == null ? void 0 : a.name, o == null ? void 0 : o.name, d, u]),
      oe = (Ee, fe) => {
        if (fe && !String(fe).startsWith("temp_user_")) return fe;
        const He = (i || []).find((Ie) => Ie.name === Ee);
        return He ? He.id : fe || `temp_user_${Ee}`;
      },
      ee = (Ee) => {
        if (Ee == null) return null;
        const fe = i || [];
        if (typeof Ee == "string") {
          const Ce = Ee.trim();
          return (
            (Ce &&
              fe.find(
                (Re) =>
                  Re &&
                  (Re.id === Ce ||
                    Re.douyinId === Ce ||
                    Re.contactId === Ce ||
                    Re.name === Ce),
              )) ||
            null
          );
        }
        const He = [Ee.id, Ee.douyinId, Ee.contactId].filter(Boolean),
          Ie =
            He.length > 0
              ? fe.find(
                  (Ce) =>
                    Ce &&
                    He.some(
                      (Re) =>
                        Ce.id === Re ||
                        Ce.douyinId === Re ||
                        Ce.contactId === Re,
                    ),
                )
              : null;
        if (Ie) return Ie;
        if (Ee.name) {
          const Ce = fe.find((Re) => Re && Re.name === Ee.name);
          if (Ce) return Ce;
        }
        return null;
      },
      H = (Ee) => {
        const fe = ee(Ee);
        return fe != null && fe.id
          ? fe.id
          : typeof Ee == "string"
            ? oe(Ee, `temp_user_${Ee}`)
            : oe(Ee == null ? void 0 : Ee.name, Ee == null ? void 0 : Ee.id);
      },
      Y = (Ee) => {
        const fe = Ee || {},
          He = [fe.id, fe.douyinId, fe.contactId].filter(Boolean),
          Ie =
            He.length > 0
              ? (i || []).find(
                  (De) =>
                    De &&
                    He.some(
                      (at) =>
                        De.id === at ||
                        De.douyinId === at ||
                        De.contactId === at,
                    ),
                )
              : null,
          Ce =
            !Ie && fe.name
              ? (i || []).find((De) => De && De.name === fe.name)
              : null,
          Re = Ie || Ce;
        return (Re == null ? void 0 : Re.avatar) || fe.avatar || "";
      },
      U = (Ee) => {
        if (!n) return;
        const fe = Ee;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            n(fe);
          });
        });
      },
      ce = (Ee) =>
        Ee == null
          ? ""
          : typeof Ee == "string"
            ? Ee
            : Ee.text || Ee.foreign || Ee.en || Ee.zh || Ee.cn || "" || "",
      pe =
        ce(t.content || t.caption || "")
          .split(/[\s,，。！？!?\n]+/)[0]
          .substring(0, 10) || "热门视频",
      se = (Ee) =>
        Ee == null || typeof Ee == "string" || typeof Ee != "object"
          ? Ee
          : { ...Ee },
      Te = (Ee) =>
        !!Ee &&
        !!(t != null && t.author) &&
        (Ee.id === t.author.id ||
          (t.author.douyinId && Ee.douyinId === t.author.douyinId) ||
          (t.author.douyinId && Ee.id === t.author.douyinId)),
      ke = (Ee) =>
        Ee == null
          ? "网友"
          : typeof Ee == "string"
            ? Ee.trim() || "网友"
            : (Ee.name != null ? String(Ee.name).trim() : "") || "网友",
      W = (Ee) => {
        var He;
        const fe = ee(Ee);
        return fe != null && fe.name
          ? fe.name
          : (Ee != null &&
              typeof Ee == "object" &&
              Te(Ee) &&
              ((He = t == null ? void 0 : t.author) == null
                ? void 0
                : He.name)) ||
              ke(Ee);
      },
      ue = (Ee, fe, He, Ie) => {
        var Ce;
        return (Ie == null ? void 0 : Ie.replyToUser) != null
          ? W(Ie.replyToUser)
          : He <= 0
            ? W(Ee == null ? void 0 : Ee.user)
            : W((Ce = fe[He - 1]) == null ? void 0 : Ce.user);
      },
      re = (Ee) => {
        const fe = String(Ee ?? "").trim();
        if (!fe) return null;
        const He = fe.replace(/\D/g, "");
        if (!He) return null;
        const Ie = parseInt(He, 10);
        return Number.isFinite(Ie) && Ie > 0 ? Ie : null;
      },
      he = (Ee) => {
        const fe = String(
          (Ee == null ? void 0 : Ee.replyToType) ||
            (Ee == null ? void 0 : Ee.reply_to_type) ||
            "",
        )
          .trim()
          .toLowerCase()
          .replace(/\s+|_/g, "");
        return fe
          ? fe === "threadfloor" || fe === "floor"
            ? "thread_floor"
            : fe === "threadparent" || fe === "parent"
              ? "thread_parent"
              : fe
          : "viewer";
      },
      ge = (Ee, fe, He) => {
        var at;
        const Ie = Array.isArray(fe) ? fe : [],
          Ce = Array.isArray(He) ? He : [],
          Re = re(Ee);
        if (Re != null && Ie[Re - 1]) return Ie[Re - 1];
        const De = String(Ee ?? "").trim();
        if (De.length >= 2)
          for (let ft = 0; ft < Ce.length; ft++) {
            const vt = String(
              W((at = Ce[ft]) == null ? void 0 : at.user) || "",
            ).trim();
            if (
              !(vt.length < 2) &&
              (De === vt || De.includes(vt) || vt.includes(De)) &&
              Ie[ft]
            )
              return Ie[ft];
          }
        return null;
      },
      J = (Ee, fe) => {
        const He = [],
          Ie = new Set(),
          Ce = /@([^\s@，,。、！!？?]+)/g;
        let Re;
        for (; (Re = Ce.exec(String(Ee || ""))); ) {
          const De = Re[1],
            at = (fe || []).find((ft) => ft && String(ft.name) === De);
          at && !Ie.has(at.id) && (He.push(at), Ie.add(at.id));
        }
        return He;
      },
      G = (Ee, fe = 2600) => {
        const He = [];
        for (const Ie of Ee || []) {
          const Ce = W(Ie.user),
            Re = Vd(Ie.content).slice(0, 140);
          Re && He.push(`${Ce}: ${Re}`);
          const De = Array.isArray(Ie.replies) ? Ie.replies : [],
            at = Math.min(De.length, 32);
          for (let ft = 0; ft < at; ft++) {
            const vt = De[ft],
              Oe = W(vt == null ? void 0 : vt.user),
              Qe = Vd(vt == null ? void 0 : vt.content).slice(0, 130);
            Qe && He.push(`  └${ft + 1} ${Oe}: ${Qe}`);
          }
        }
        return He.join(
          `
`,
        ).slice(0, fe);
      },
      we = l.useMemo(() => {
        const Ee = (Z || "").trim().toLowerCase(),
          fe = ye || [];
        return Ee
          ? fe
              .filter((He) => String(He.name).toLowerCase().includes(Ee))
              .slice(0, 12)
          : fe.slice(0, 12);
      }, [ye, Z]),
      Q = (Ee, fe) => {
        const Ie = String(Ee)
          .slice(0, fe)
          .match(/@([^\s@]*)$/);
        Ie ? (K(Ie[1] || ""), O(!0)) : (O(!1), K(""));
      },
      ve = (Ee) => {
        const fe = q.current,
          He = M,
          Ie =
            fe && typeof fe.selectionStart == "number"
              ? fe.selectionStart
              : He.length,
          Ce = He.slice(0, Ie),
          Re = He.slice(Ie),
          De = Ce.match(/@([^\s@]*)$/);
        let at, ft;
        if (De) {
          const vt = Ce.length - De[0].length;
          ((at = He.slice(0, vt) + "@" + Ee.name + " " + Re),
            (ft = vt + Ee.name.length + 2));
        } else
          ((at = Ce + "@" + Ee.name + " " + Re),
            (ft = Ce.length + Ee.name.length + 2));
        (E(at),
          O(!1),
          K(""),
          requestAnimationFrame(() => {
            q.current &&
              (q.current.focus(), q.current.setSelectionRange(ft, ft));
          }));
      };
    (l.useEffect(() => {
      (async () => {
        var He, Ie, Ce;
        if (m) return;
        const fe =
          ((He = t.author) == null ? void 0 : He.id) ===
          (a == null ? void 0 : a.id);
        if (!(t.comments && t.comments.length > 0)) {
          if (fe) {
            C(!0);
            return;
          }
          if (!ne.current) {
            ((ne.current = !0), C(!0));
            try {
              let Re;
              try {
                const Ye = (Ie = t.author) == null ? void 0 : Ie.id;
                if (Ye && typeof f == "function") {
                  const Ze = await f(Ye, !0);
                  Ze &&
                    (Re = {
                      name:
                        Ze.name ||
                        ((Ce = t.author) == null ? void 0 : Ce.name) ||
                        "",
                      rolePersona: Ze.bio || "",
                      style: Ze.style || "",
                    });
                }
              } catch {}
              let De = await b(t.content, {
                residentCommenters: le,
                videoAuthorPersona: Re,
                commentCountRange: [8, 18],
                bannedUserNames: R,
              });
              (!De || De.length === 0) &&
                (De = [
                  {
                    user: "明天见",
                    content:
                      "完全理解女主 被喜欢的人看到难堪的一面是很尴尬的 😭",
                    likes: 17e3,
                    avatarStyle: "adventurer",
                    timestamp: Date.now() - 72e5,
                    location: "山东",
                    replyCount: 13,
                  },
                  {
                    user: "L-12.13",
                    content: "直到见到他那一刻心太疼了再也掩饰不了了",
                    likes: 21e3,
                    avatarStyle: "micah",
                    timestamp: Date.now() - 18e6,
                    location: "广东",
                    replyCount: 11,
                  },
                  {
                    user: "一饵啾",
                    content:
                      "我不断用发疯掩饰自己的崩溃，可为什么我自己都不能接受的模样，却被你看到，突然觉得自己很可笑。😭😭😭",
                    likes: 1798,
                    avatarStyle: "miniavs",
                    timestamp: Date.now() - 2592e5,
                    location: "江苏",
                    replyCount: 3,
                  },
                  {
                    user: "1223°",
                    content: "@S- 就是这个片段！看的时候真的觉得她美得不可方物",
                    likes: 520,
                    avatarStyle: "lorelei",
                    timestamp: Date.now() - 18e5,
                    location: "北京",
                    replyCount: 0,
                  },
                ]);
              const at = (Ye, Ze) => {
                  const Ue = (i || []).find((me) => me.name === Ye);
                  return Ue && Ue.avatar
                    ? Ue.avatar
                    : `https://api.dicebear.com/7.x/${Ze || "avataaars"}/svg?seed=${Ye}`;
                },
                ft = De.map((Ye, Ze) => {
                  const Ue = (i || []).find((Wt) => Wt.name === Ye.user),
                    me = Ue ? Ue.id : `temp_user_${Ye.user}`,
                    jt = {
                      name: Ye.user,
                      avatar: at(Ye.user, Ye.avatarStyle),
                      id: me,
                    },
                    Gt = Array.isArray(Ye.replies) ? Ye.replies : [],
                    Pt = [];
                  return (
                    Gt.forEach((Wt, ct) => {
                      const Kt = {
                          name: Wt.user || "网友",
                          avatar: at(Wt.user, Wt.avatarStyle),
                          id: `temp_reply_${Ze}_${ct}`,
                        },
                        fs = ct === 0 ? jt : Pt[ct - 1].user;
                      Pt.push({
                        id: Date.now() + Ze + (ct + 1) * 1e4,
                        user: Kt,
                        replyToUser: fs,
                        content: Wt.content || "",
                        likes: Wt.likes || 0,
                        timestamp:
                          Wt.timestamp ||
                          Date.now() - Math.floor(Math.random() * 18e5),
                        location: Wt.location || "未知",
                        isLiked: !1,
                      });
                    }),
                    {
                      id: Date.now() + Ze,
                      user: jt,
                      content: Ye.content,
                      likes: Ye.likes || 0,
                      timestamp:
                        Ye.timestamp ||
                        Date.now() - Math.floor(Math.random() * 1e7),
                      location: Ye.location || "未知",
                      replyCount: Ye.replyCount ?? Pt.length,
                      isLiked: !1,
                      pinned: !!Ye.pinned,
                      replies: Pt,
                    }
                  );
                });
              A(ft);
              const vt = t.stats || {},
                Oe = (vt.likes ?? 0) > 0 || (vt.favorites ?? 0) > 0,
                Qe = {
                  ...vt,
                  comments: ft.length,
                  likes: Oe
                    ? (vt.likes ?? 0)
                    : Math.floor(Math.random() * 400) + 80,
                  favorites: Oe
                    ? (vt.favorites ?? 0)
                    : Math.floor(Math.random() * 70) + 10,
                };
              r(t.id, { comments: ft, stats: Qe });
            } catch {
            } finally {
              ((ne.current = !1), C(!1));
            }
          }
        }
      })();
    }, [
      t.id,
      m,
      (Pe = t.author) == null ? void 0 : Pe.id,
      a == null ? void 0 : a.id,
    ]),
      l.useEffect(() => {
        var fe;
        if (
          ((fe = t.author) == null ? void 0 : fe.id) !==
            (a == null ? void 0 : a.id) ||
          (t.comments && t.comments.length > 0)
        )
          return;
        const Ee = setTimeout(() => C(!1), 28e3);
        return () => clearTimeout(Ee);
      }, [
        t.id,
        (ut = t.author) == null ? void 0 : ut.id,
        a == null ? void 0 : a.id,
        (_t = t.comments) == null ? void 0 : _t.length,
      ]),
      l.useEffect(() => {
        S && q.current && q.current.focus();
      }, [S]));
    const Ve = async () => {
        var ft, vt, Oe, Qe, Ye, Ze, Ue, me, jt, Gt, Pt, Wt, ct, Kt;
        if (!M.trim() || $) return;
        (O(!1), K(""), P(!0));
        const Ee = M,
          fe = Date.now(),
          He = { name: a.name, avatar: a.avatar, id: a.id || "me" },
          Ie = He,
          Ce = {
            id: Date.now(),
            user: He,
            content: T ? `回复 @${T.userName}: ${Ee}` : Ee,
            likes: 0,
            timestamp: Date.now(),
            isLiked: !1,
            replies: [],
          },
          Re = (fs, gt) => String(fs) === String(gt);
        let De = _;
        (T
          ? (De = _.map((fs) => {
              if (!Re(fs.id, T.parentCommentId)) return fs;
              const gt = Array.isArray(fs.replies) ? fs.replies : [];
              return {
                ...fs,
                replies: [
                  ...gt,
                  {
                    id: fe,
                    user: He,
                    replyToUser:
                      (T == null ? void 0 : T.replyToUser) ?? fs.user,
                    content: Ee,
                    likes: 0,
                    timestamp: fe,
                    location: "",
                    isLiked: !1,
                  },
                ],
                replyCount: (fs.replyCount || gt.length) + 1,
              };
            }))
          : (De = [Ce, ..._]),
          A(De),
          E(""));
        const at = T;
        (I(null),
          j(!1),
          (at == null ? void 0 : at.parentCommentId) != null &&
            B((fs) => {
              const gt = new Set(fs);
              return (gt.add(at.parentCommentId), gt);
            }),
          r(t.id, {
            comments: De,
            stats: {
              ...t.stats,
              comments:
                (((ft = t.stats) == null ? void 0 : ft.comments) ?? 0) + 1,
            },
          }));
        try {
          const fs = (vt = t.author) == null ? void 0 : vt.id;
          let gt = {
            name: ((Oe = t.author) == null ? void 0 : Oe.name) || "作者",
            rolePersona: "",
            style: "",
            knowsUserIdentity:
              ((Qe = t == null ? void 0 : t.author) == null
                ? void 0
                : Qe.knowsUserIdentity) === !0,
            isBilingual:
              ((Ye = t == null ? void 0 : t.author) == null
                ? void 0
                : Ye.isBilingual) === !0,
            boundUserPersona: "",
            linkedMemories: "",
            publicUserPersona: "",
          };
          if (fs && typeof f == "function") {
            const wt = await f(fs, !0);
            wt &&
              (gt = {
                name: wt.name || gt.name,
                rolePersona: wt.bio || "",
                style: wt.style || "",
                knowsUserIdentity: wt.knowsUserIdentity === !0,
                isBilingual: wt.isBilingual === !0,
                boundUserPersona: "",
                linkedMemories: "",
                publicUserPersona: "",
              });
          }
          const ae = (i || []).find(
              (wt) => String(wt == null ? void 0 : wt.id) === String(fs),
            ),
            nt = {
              id: fs || ((Ze = t.author) == null ? void 0 : Ze.id),
              douyinId: (Ue = t.author) == null ? void 0 : Ue.douyinId,
              name:
                (gt == null ? void 0 : gt.name) ||
                ((me = t.author) == null ? void 0 : me.name) ||
                "作者",
              avatar:
                (ae == null ? void 0 : ae.avatar) ||
                ((jt = t.author) == null ? void 0 : jt.avatar) ||
                "",
            },
            It = (wt) => {
              if (wt == null) return wt;
              if (typeof wt == "string")
                return wt
                  .replace(/\[[^\]]+\]/g, "")
                  .replace(/［[^］]+］/g, "")
                  .replace(/\s{2,}/g, " ")
                  .trim();
              if (typeof wt == "object") {
                const xs = { ...wt };
                for (const ot of Object.keys(xs))
                  typeof xs[ot] == "string" &&
                    (xs[ot] = xs[ot]
                      .replace(/\[[^\]]+\]/g, "")
                      .replace(/［[^］]+］/g, "")
                      .replace(/\s{2,}/g, " ")
                      .trim());
                return xs;
              }
              return wt;
            },
            Xt = (wt) => {
              const xs = String(wt || "").trim();
              return xs &&
                xs === String((nt == null ? void 0 : nt.name) || "").trim()
                ? Math.random().toString(36).slice(2, 14)
                : xs;
            },
            bs =
              (ae == null ? void 0 : ae.knowsUserIdentity) === !0 ||
              (ae == null &&
                ((Gt = t == null ? void 0 : t.author) == null
                  ? void 0
                  : Gt.knowsUserIdentity) === !0);
          try {
            if (((gt.publicUserPersona = ny(ae, d, c, o)), bs)) {
              const wt =
                  (Pt = ae == null ? void 0 : ae.boundUserPresets) == null
                    ? void 0
                    : Pt[0],
                xs = (c || []).find(
                  ($t) => String($t == null ? void 0 : $t.id) === String(wt),
                ),
                ot = String(
                  (xs == null ? void 0 : xs.douyinPersona) || "",
                ).trim(),
                st = String(
                  (o == null ? void 0 : o.douyinPersona) || "",
                ).trim();
              gt.boundUserPersona = ot || st || "";
            } else gt.boundUserPersona = "";
          } catch {}
          try {
            if (
              bs &&
              (ae == null ? void 0 : ae.linkMemory) === !0 &&
              Array.isArray(ae == null ? void 0 : ae.linkedChatIds) &&
              ae.linkedChatIds.length > 0
            ) {
              const wt = (await be.get("chat_app_douyin_memories")) || {},
                xs = ae.linkedChatIds.flatMap((ot) => wt[ot] || []);
              (xs.sort((ot, st) => (st.at || 0) - (ot.at || 0)),
                (gt.linkedMemories = xs
                  .slice(0, 6)
                  .map((ot) => `- ${ot.npcName || gt.name}: ${ot.summary}`)
                  .join(`
`)));
            }
          } catch {}
          ((gt.knowsUserIdentity = bs), bs || (gt.linkedMemories = ""));
          const ss = J(Ee, ye),
            _s = (wt, xs) => {
              const ot = (i || []).find((st) => st.name === wt);
              return ot != null && ot.avatar
                ? ot.avatar
                : `https://api.dicebear.com/7.x/${xs || "micah"}/svg?seed=${wt}`;
            },
            qs = (wt, xs) => ({
              id: Date.now() + xs + Math.random(),
              user: nt,
              replyToUser: Ie,
              content: It((wt == null ? void 0 : wt.content) || ""),
              likes: (wt == null ? void 0 : wt.likes) || 0,
              timestamp: Date.now() - Math.floor(Math.random() * 18e5),
              location: (wt == null ? void 0 : wt.location) || "未知",
              isLiked: !1,
            }),
            Bs = (wt, xs) => {
              var $t;
              const st =
                Xt(wt == null ? void 0 : wt.user) ||
                Math.random().toString(36).slice(2, 14);
              return {
                id: Date.now() + xs + Math.random(),
                user: {
                  name: st,
                  avatar: _s(st, wt == null ? void 0 : wt.avatarStyle),
                  id:
                    (($t = (i || []).find((Ft) => Ft.name === st)) == null
                      ? void 0
                      : $t.id) || `temp_user_${st}`,
                },
                replyToUser: Ie,
                content: It((wt == null ? void 0 : wt.content) || ""),
                likes: (wt == null ? void 0 : wt.likes) || 0,
                timestamp: Date.now() - Math.floor(Math.random() * 18e5),
                location: (wt == null ? void 0 : wt.location) || "未知",
                isLiked: !1,
              };
            };
          let Js = { replies: [], newComments: [] };
          if (ss.length > 0) {
            const wt = G(De, 2800),
              xs =
                (bs &&
                  String(
                    (o == null ? void 0 : o.name) ||
                      (a == null ? void 0 : a.name) ||
                      "网友",
                  ).trim()) ||
                "网友",
              ot = await Promise.all(
                ss.map(async (it) => {
                  const Ht = xe(it),
                    is = it.knowsUserIdentity === !0;
                  let os = null;
                  try {
                    it.id &&
                      typeof f == "function" &&
                      (os = await f(it.id, !0));
                  } catch {}
                  let as = "";
                  try {
                    if (
                      is &&
                      (it == null ? void 0 : it.linkMemory) === !0 &&
                      Array.isArray(it == null ? void 0 : it.linkedChatIds) &&
                      it.linkedChatIds.length > 0
                    ) {
                      const pt =
                          (await be.get("chat_app_douyin_memories")) || {},
                        qe = it.linkedChatIds.flatMap((dt) => pt[dt] || []);
                      (qe.sort((dt, xt) => (xt.at || 0) - (dt.at || 0)),
                        (as = qe
                          .slice(0, 5)
                          .map(
                            (dt) => `- ${dt.npcName || it.name}: ${dt.summary}`,
                          ).join(`
`)));
                    }
                  } catch {}
                  let vs = "",
                    ts = "";
                  if (is)
                    try {
                      const pt = Qk(it, d, c, o, u);
                      ((vs = pt.boundUserPersona), (ts = pt.boundUserName));
                    } catch {}
                  const ys = ny(it, d, c, o),
                    Vs = qk(it, d);
                  return {
                    name: (os == null ? void 0 : os.name) || it.name,
                    relationshipLabel: Ht
                      ? "互关好友"
                      : "你关注了对方（单向关注）",
                    rolePersona: String(
                      Vs || (os == null ? void 0 : os.bio) || "",
                    ).slice(0, 850),
                    style: String(
                      (os == null ? void 0 : os.style) || it.style || "",
                    ).slice(0, 200),
                    knowsUserIdentity: is,
                    isBilingual:
                      (os == null ? void 0 : os.isBilingual) === !0 ||
                      it.isBilingual === !0,
                    boundUserPersona: vs,
                    boundUserName: ts,
                    publicUserPersona: ys,
                    linkedMemories: as,
                  };
                }),
              ),
              st = ot.some((it) => it.isBilingual === !0);
            let $t = "",
              Ft = null;
            if (
              (at == null ? void 0 : at.parentCommentId) != null &&
              ((Ft = De.find((it) => Re(it.id, at.parentCommentId))), Ft)
            ) {
              const it = [];
              it.push(
                "【本楼时间线｜含你刚发的一条与此前楼中楼；模型须据此接话勿断片】",
              );
              const Ht = Vd(t.content || t.caption || "").slice(0, 480);
              (Ht && it.push(`【视频文案/内容摘要（续聊须与之一致）】${Ht}`),
                it.push(`父评 ${W(Ft.user)}：${Vd(Ft.content).slice(0, 320)}`),
                (Array.isArray(Ft.replies) ? Ft.replies : []).forEach(
                  (os, as) => {
                    it.push(
                      `  楼#${as + 1} ${W(os.user)}：${Vd(os.content).slice(0, 280)}`,
                    );
                  },
                ),
                ($t = it
                  .join(
                    `
`,
                  )
                  .slice(0, 4500)));
            }
            const es =
                Ft != null && Ft.user
                  ? {
                      id: Ft.user.id,
                      name: Ft.user.name,
                      avatar: Ft.user.avatar,
                      douyinId: Ft.user.douyinId,
                      contactId: Ft.user.contactId,
                    }
                  : null,
              At = Array.isArray(Ft == null ? void 0 : Ft.replies)
                ? Ft.replies
                : [],
              Jt = At.map((it) =>
                it != null && it.user
                  ? {
                      id: it.user.id,
                      name: it.user.name,
                      avatar: it.user.avatar,
                      douyinId: it.user.douyinId,
                      contactId: it.user.contactId,
                    }
                  : null,
              ),
              Vt = new Set(ss.map((it) => String(it.id))),
              qt = (it) => {
                const Ht = he(it),
                  is = String(
                    (it == null ? void 0 : it.replyToRef) ??
                      (it == null ? void 0 : it.reply_to_ref) ??
                      "",
                  ).trim();
                if (Ht === "author") return nt;
                if (Ht === "mention") {
                  if (is) {
                    const os = ss.find((as) => {
                      const vs = String(
                        (as == null ? void 0 : as.name) || "",
                      ).trim();
                      return vs
                        ? vs === is || is.includes(vs) || vs.includes(is)
                        : !1;
                    });
                    if (os)
                      return {
                        id: os.id,
                        name: os.name,
                        avatar: os.avatar,
                        douyinId: os.douyinId,
                        contactId: os.contactId,
                      };
                  }
                  return Ie;
                }
                if (Ht === "thread_parent") return es || Ie;
                if (Ht === "thread_floor") {
                  const os = ge(is, Jt, At);
                  return os || es || Ie;
                }
                return Ie;
              },
              Lt = (it, Ht) => {
                var pt;
                const is = qt(it),
                  os = String((it == null ? void 0 : it.user) || "").trim(),
                  as = String((nt == null ? void 0 : nt.name) || "").trim(),
                  vs = (i || []).find((qe) => qe && String(qe.name) === os);
                if (
                  (as && os === as) ||
                  (vs &&
                    (nt == null ? void 0 : nt.id) &&
                    String(vs.id) === String(nt.id))
                )
                  return {
                    id: Date.now() + Ht + Math.random(),
                    user: nt,
                    replyToUser: is,
                    content: It((it == null ? void 0 : it.content) || ""),
                    likes:
                      (it == null ? void 0 : it.likes) ??
                      Math.floor(Math.random() * 24),
                    timestamp: Date.now() - Math.floor(Math.random() * 12e5),
                    location: (it == null ? void 0 : it.location) || "未知",
                    isLiked: !1,
                  };
                if (vs && Vt.has(String(vs.id)))
                  return {
                    id: Date.now() + Ht + Math.random(),
                    user: {
                      id: vs.id,
                      douyinId: vs.douyinId,
                      name: vs.name,
                      avatar:
                        vs.avatar ||
                        _s(os, it == null ? void 0 : it.avatarStyle),
                    },
                    replyToUser: is,
                    content: It((it == null ? void 0 : it.content) || ""),
                    likes:
                      (it == null ? void 0 : it.likes) ??
                      Math.floor(Math.random() * 16),
                    timestamp: Date.now() - Math.floor(Math.random() * 12e5),
                    location: (it == null ? void 0 : it.location) || "未知",
                    isLiked: !1,
                  };
                const Vs =
                  Xt(it == null ? void 0 : it.user) ||
                  Math.random().toString(36).slice(2, 14);
                return {
                  id: Date.now() + Ht + Math.random(),
                  user: {
                    name: Vs,
                    avatar: _s(Vs, it == null ? void 0 : it.avatarStyle),
                    id:
                      ((pt = (i || []).find((qe) => qe.name === Vs)) == null
                        ? void 0
                        : pt.id) || `temp_user_${Vs}`,
                  },
                  replyToUser: is,
                  content: It((it == null ? void 0 : it.content) || ""),
                  likes:
                    (it == null ? void 0 : it.likes) ??
                    Math.floor(Math.random() * 18),
                  timestamp: Date.now() - Math.floor(Math.random() * 12e5),
                  location: (it == null ? void 0 : it.location) || "未知",
                  isLiked: !1,
                };
              },
              Qt = [ce(t.content), ce(t.caption)].filter(Boolean).join(`
`);
            Js = await w({
              videoContent: Qt || t.content || t.caption || "",
              author: { name: gt.name, id: nt.id },
              userCommentDisplayName: xs,
              userText: Ee,
              otherCommentsDigest: wt,
              threadContext: $t,
              replyScene: at ? "thread_reply" : "root_comment",
              mentioned: ot,
              bilingual: st,
              residentCommenters: le,
              bannedUserNames: R,
            });
            const js = Array.isArray(Js.replies) ? Js.replies : [],
              cs = [];
            let Ne = 0;
            const Je = new Set();
            for (const it of js) {
              const Ht = String((it == null ? void 0 : it.user) || "").trim(),
                is = ss.find((os) => String(os.name) === Ht);
              if (is && he(it) === "viewer") {
                const os = String(is.id);
                if (Je.has(os)) continue;
                Je.add(os);
              }
              cs.push(Lt(it, Ne++));
            }
            const St = new Set(ss.map((it) => String(it.id))),
              Be = String((nt == null ? void 0 : nt.id) || ""),
              Ke = new Set(),
              Nt = new Set();
            if (Ft != null && Ft.user) {
              Ft.user.id != null && Ke.add(String(Ft.user.id));
              const it = String(Ft.user.name || "").trim();
              it && Nt.add(it);
            }
            (Array.isArray(Ft == null ? void 0 : Ft.replies)
              ? Ft.replies
              : []
            ).forEach((it) => {
              var is, os;
              ((is = it == null ? void 0 : it.user) == null ? void 0 : is.id) !=
                null && Ke.add(String(it.user.id));
              const Ht = String(
                ((os = it == null ? void 0 : it.user) == null
                  ? void 0
                  : os.name) || "",
              ).trim();
              Ht && Nt.add(Ht);
            });
            const bt = (it) => {
                const Ht = String(it || "").trim();
                return !Ht || /^\d+$/.test(Ht)
                  ? !1
                  : /^[A-Za-z0-9]{6,20}$/.test(Ht) &&
                      !(i || []).some((is) => is && String(is.name) === Ht);
              },
              ns = (it) => {
                const Ht = String(it || "").trim();
                return !Ht ||
                  Ht.length < 2 ||
                  Ht.length > 16 ||
                  /^\d+$/.test(Ht) ||
                  /[0-9]{3,}/.test(Ht) ||
                  (i || []).some((is) => is && String(is.name) === Ht)
                  ? !1
                  : /[\u4e00-\u9fa5]{2}/.test(Ht);
              },
              Ge = (it) => bt(it) || ns(it),
              Le = cs.filter((it) => {
                var as, vs;
                const Ht = String(
                    ((as = it == null ? void 0 : it.user) == null
                      ? void 0
                      : as.name) || "",
                  ).trim(),
                  is =
                    ((vs = it == null ? void 0 : it.user) == null
                      ? void 0
                      : vs.id) != null
                      ? String(it.user.id)
                      : "";
                if (!Ht) return !1;
                const os = (i || []).find((ts) => ts && String(ts.name) === Ht);
                return os
                  ? !!(
                      St.has(String(os.id)) ||
                      (Be && String(os.id) === Be) ||
                      (is && Ke.has(is))
                    )
                  : Ge(Ht)
                    ? !0
                    : Nt.has(Ht);
              });
            for (const it of ss)
              Le.some((Ht) => {
                var is;
                return (
                  String((is = Ht.user) == null ? void 0 : is.name) ===
                  String(it.name)
                );
              }) ||
                Le.push({
                  id: Date.now() + Ne++ + Math.random(),
                  user: {
                    id: it.id,
                    douyinId: it.douyinId,
                    name: it.name,
                    avatar: it.avatar || _s(it.name, "micah"),
                  },
                  replyToUser: Ie,
                  content: "来啦来啦，看到你艾特我啦～",
                  likes: 2,
                  timestamp: Date.now() - Math.floor(Math.random() * 4e5),
                  location: "未知",
                  isLiked: !1,
                });
            const _e = [
              "笑死，这层还能续这么久？",
              "典中典，你们继续吵我先吃瓜。",
              "楼主别太认真，看看得了。",
              "这也能杠？互联网算是玩明白了。",
              "别洗了行吗，看着都累。",
              "站个队：我偏不信楼上说的。",
              "和稀泥一句：两边都有理好吧。",
              "纯路人，但这波我站层里火药味更大的那边。",
            ];
            let yt = Le.filter((it) => {
                var Ht;
                return Ge((Ht = it.user) == null ? void 0 : Ht.name);
              }).length,
              rt = 0;
            const ze = [
                "吃瓜摸到一半",
                "路过的风",
                "躺平看戏中",
                "不想站队",
                "楼上说得对一半",
                "理性讨论别扛",
                "潜水党上岸",
                "今日份离谱",
                "专治杠精",
                "佛系路人",
                "只是路过",
                "看完整楼了",
                "这届网友行",
                "沉默的大多数",
                "逆风输出中",
              ],
              lt = [
                "",
                "·再接",
                "·补一句",
                "·插一嘴",
                "·另说",
                "·杠一句",
                "·圆场",
                "·围观",
              ];
            for (; yt < 4 && rt < 8; ) {
              const Ht = `${ze[(yt + rt * 2) % ze.length]}${lt[rt] || ""}`;
              (Le.push({
                id: Date.now() + Ne++ + Math.random(),
                user: {
                  id: `temp_user_${Ht}`,
                  name: Ht,
                  avatar: _s(Ht, "pixel-art"),
                },
                replyToUser: Ie,
                content: _e[yt % _e.length],
                likes: Math.floor(Math.random() * 20),
                timestamp: Date.now() - Math.floor(Math.random() * 5e5),
                location: ["河北", "广东", "上海", "四川"][yt % 4],
                isLiked: !1,
              }),
                yt++,
                rt++);
            }
            Js = { ...Js, replies: js, _builtReplies: Le };
          } else
            Js = await N({
              videoContent: t.content || t.caption || "",
              author: gt,
              user: {},
              action: at ? "reply" : "new_comment",
              targetComment: at
                ? { userName: "", content: at.targetContent || "" }
                : void 0,
              userText: Ee,
              bilingual: (gt == null ? void 0 : gt.isBilingual) === !0,
              knowsUserIdentity: bs,
              boundUserPersona:
                (bs && (gt == null ? void 0 : gt.boundUserPersona)) || "",
              linkedMemories:
                (bs && (gt == null ? void 0 : gt.linkedMemories)) || "",
              publicUserPersona:
                (gt == null ? void 0 : gt.publicUserPersona) || "",
              residentCommenters: le,
              bannedUserNames: R,
            });
          const Xs = (wt) => /姐妹|宝子|家人们|你不是一个人/.test(Vd(wt)),
            gn = () => {
              if (ss.length > 0 && Array.isArray(Js._builtReplies))
                return Js._builtReplies.slice(0, 40);
              const wt = (Array.isArray(Js.replies) ? Js.replies : []).slice(
                0,
                3,
              );
              let xs = wt.findIndex((Ft) => Ft && !Xs(Ft.content));
              xs < 0 && (xs = 0);
              const ot = wt[xs] || {
                  content: "收到啦",
                  likes: 0,
                  location: "未知",
                },
                st = qs(ot, 0),
                $t = wt
                  .filter((Ft, es) => es !== xs)
                  .map((Ft, es) => Bs(Ft || {}, es + 1));
              return [st, ...$t].slice(0, 3);
            },
            sn = [],
            ln = gn();
          let rn = De;
          (at
            ? (rn = rn.map((wt) => {
                if (!Re(wt.id, at.parentCommentId)) return wt;
                const xs = Array.isArray(wt.replies) ? wt.replies : [];
                return {
                  ...wt,
                  replies: [...xs, ...ln],
                  replyCount: (wt.replyCount || xs.length) + ln.length,
                };
              }))
            : (rn = rn.map((wt) => {
                if (!Re(wt.id, Ce.id)) return wt;
                const xs = Array.isArray(wt.replies) ? wt.replies : [];
                return {
                  ...wt,
                  replies: [...xs, ...ln],
                  replyCount: xs.length + ln.length,
                };
              })),
            sn.length > 0 && (rn = [...rn, ...sn]),
            typeof h == "function" &&
              (ss.length === 0 &&
                (Wt = t.author) != null &&
                Wt.id &&
                h(
                  t.author.id,
                  t.author.name,
                  "comment_reply",
                  "在评论区/楼中楼回复了",
                ).catch(() => {}),
              ss.length > 0 &&
                ss.forEach((wt) => {
                  h(
                    wt.id,
                    wt.name,
                    "comment_at_reply",
                    "在评论区回应了用户的@",
                  ).catch(() => {});
                }),
              ((ct = t.author) == null ? void 0 : ct.id) ===
                (a == null ? void 0 : a.id) &&
                [
                  ...(Js.newComments || []).map((xs) => ({
                    user: xs.user,
                    content: xs.content,
                  })),
                  ...(Js.replies || []).map((xs) => ({
                    user: xs.user,
                    content: xs.content,
                  })),
                ].forEach(({ user: xs, content: ot }) => {
                  const st = (i || []).find(($t) => $t.name === xs);
                  (st == null ? void 0 : st.linkMemory) === !0 &&
                    h(
                      st.id,
                      st.name,
                      "comment_on_user_post",
                      (ot || "").slice(0, 200),
                    ).catch(() => {});
                })),
            A(rn),
            r(t.id, {
              comments: rn,
              stats: { ...t.stats, comments: rn.length },
            }),
            typeof y == "function" && ln.length > 0 && y(ln, t),
            typeof v == "function" &&
              ln.length > 0 &&
              v({
                aiReplies: ln,
                commentText: Ee,
                videoCaption: t.content || t.caption || "",
                videoAuthorId: (Kt = t.author) == null ? void 0 : Kt.id,
              }).catch(() => {}));
        } finally {
          P(!1);
        }
      },
      Ae = (Ee) => {
        (I({
          parentCommentId: Ee.id,
          targetContent: Ee.content || "",
          replyToUser: Ee.user,
        }),
          j(!0));
      },
      te = (Ee, fe) => {
        (I({
          parentCommentId: Ee.id,
          targetContent: fe.content || "",
          replyToUser: fe.user,
        }),
          j(!0));
      },
      Se = (Ee) => {
        const fe = _.map((He) =>
          He.id === Ee
            ? {
                ...He,
                isLiked: !He.isLiked,
                likes: He.isLiked ? He.likes - 1 : He.likes + 1,
              }
            : He,
        );
        (A(fe),
          r(t.id, {
            comments: fe,
            stats: { ...t.stats, comments: fe.length },
          }));
      },
      Fe = (Ee) => {
        const He = Date.now() - Ee;
        if (He < 6e4) return "刚刚";
        if (He < 36e5) return `${Math.floor(He / 6e4)}分钟前`;
        if (He < 864e5) return `${Math.floor(He / 36e5)}小时前`;
        const Ie = new Date(Ee),
          Ce = Ie.getMonth() + 1,
          Re = Ie.getDate();
        return `${Ce}-${Re}`;
      },
      $e = (Ee) => (Ee >= 1e4 ? (Ee / 1e4).toFixed(1) + "万" : Ee),
      tt = () => {
        S && (j(!1), I(null));
      },
      Xe = (Ee) =>
        Ee
          ? String(Ee)
              .split(/(@[^\s\u200b]+)/g)
              .map((Ie, Ce) =>
                Ie.startsWith("@")
                  ? e.jsx(
                      "span",
                      { className: "text-[#2b5ae1] font-medium", children: Ie },
                      Ce,
                    )
                  : e.jsx("span", { children: Ie }, Ce),
              )
          : null,
      ht = (Ee, fe) => {
        if (!Ee) return null;
        Ee = se(Ee);
        const He = fe == null ? void 0 : fe.translationKey,
          Ie = He ? F.has(He) : !1,
          Ce = fe == null ? void 0 : fe.onToggleTranslate,
          Re = !!Ce,
          De = (fe == null ? void 0 : fe.buttonInline) !== !1,
          at = () =>
            De && Re
              ? e.jsx("button", {
                  type: "button",
                  onClick: (Oe) => {
                    (Oe.stopPropagation(), Ce());
                  },
                  className:
                    "text-[12px] text-[#2b5ae1] font-medium hover:underline",
                  children: Ie ? "收起翻译" : "翻译",
                })
              : null;
        if (typeof Ee == "string")
          return Re
            ? e.jsxs("div", {
                className: "space-y-1",
                children: [
                  e.jsx("div", { className: "break-words", children: Xe(Ee) }),
                  at(),
                  Ie &&
                    e.jsx("div", {
                      className: "text-[12px] text-gray-500 break-words mt-0.5",
                      children: "暂无翻译",
                    }),
                ],
              })
            : Xe(Ee);
        const ft = Ee.text || Ee.foreign || Ee.en || "",
          vt = Ee.zh || Ee.cn || Ee.translation || "";
        return !vt && !Re
          ? Xe(ft)
          : vt
            ? Re
              ? e.jsxs("div", {
                  className: "space-y-1",
                  children: [
                    e.jsx("div", {
                      className: "break-words",
                      children: Xe(ft),
                    }),
                    at(),
                    Ie &&
                      e.jsx("div", {
                        className:
                          "text-[12px] text-gray-500 break-words mt-0.5",
                        children: Xe(vt),
                      }),
                  ],
                })
              : e.jsxs("div", {
                  className: "space-y-1",
                  children: [
                    e.jsx("div", {
                      className: "break-words",
                      children: Xe(ft),
                    }),
                    e.jsx("div", {
                      className: "text-[12px] text-gray-500 break-words mt-0.5",
                      children: Xe(vt),
                    }),
                  ],
                })
            : e.jsxs("div", {
                className: "space-y-1",
                children: [
                  e.jsx("div", { className: "break-words", children: Xe(ft) }),
                  at(),
                  Ie &&
                    e.jsx("div", {
                      className: "text-[12px] text-gray-500 break-words mt-0.5",
                      children: "暂无翻译",
                    }),
                ],
              });
      };
    return e.jsxs("div", {
      className:
        "absolute inset-0 z-[100] flex flex-col justify-end bg-black/50 backdrop-blur-sm animate-fade-in",
      children: [
        e.jsx("div", { className: "flex-1", onClick: s }),
        e.jsxs("div", {
          className:
            "bg-[#f8f8f8] w-full h-[70%] rounded-t-2xl flex flex-col animate-slide-up relative shadow-2xl",
          children: [
            e.jsxs("div", {
              className: "flex flex-col px-4 pt-3 pb-2 bg-white rounded-t-2xl",
              children: [
                e.jsxs("div", {
                  className: "flex items-center justify-between mb-2",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center space-x-1 text-sm",
                      children: [
                        e.jsx("span", {
                          className: "text-gray-500",
                          children: "大家都在搜：",
                        }),
                        e.jsxs("span", {
                          className:
                            "text-[#03CCD9] font-medium flex items-center",
                          children: [
                            pe,
                            " ",
                            e.jsx(pr, {
                              size: 12,
                              className: "ml-1 text-[#03CCD9]",
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      onClick: s,
                      className:
                        "w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer",
                      role: "button",
                      "aria-label": "关闭",
                      children: e.jsx(Ts, {
                        size: 14,
                        className: "text-gray-500",
                      }),
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "text-center text-[13px] font-bold text-gray-900",
                  children: _.length > 0 ? `${_.length} 条评论` : "评论",
                }),
              ],
            }),
            e.jsx("div", {
              className: "flex-1 overflow-y-auto p-4 space-y-5 bg-white",
              onClick: tt,
              children: k
                ? e.jsx("div", {
                    className:
                      "flex items-center justify-center h-full text-gray-400 text-sm",
                    children: "正在加载评论...",
                  })
                : _.length === 0
                  ? e.jsxs("div", {
                      className:
                        "flex flex-col items-center justify-center h-full text-gray-400 space-y-2",
                      children: [
                        e.jsx("div", {
                          className: "text-4xl opacity-50",
                          children: "📝",
                        }),
                        e.jsx("div", {
                          className: "text-sm",
                          children: "暂无评论，快来抢沙发",
                        }),
                      ],
                    })
                  : _.filter((Ee) => !Ee.pinned).map((Ee) =>
                      e.jsxs(
                        "div",
                        {
                          className: "flex space-x-3",
                          children: [
                            e.jsx("div", {
                              className: "flex-shrink-0 cursor-pointer",
                              onClick: (fe) => {
                                fe.stopPropagation();
                                const He = H(Ee.user);
                                U(He);
                              },
                              children: e.jsx("div", {
                                className:
                                  "w-8 h-8 rounded-full bg-gray-200 overflow-hidden border border-gray-100",
                                children: Y(Ee.user)
                                  ? e.jsx("img", {
                                      src: Y(Ee.user),
                                      alt: "",
                                      className: "w-full h-full object-cover",
                                    })
                                  : e.jsx("div", {
                                      className:
                                        "w-full h-full flex items-center justify-center text-gray-400 bg-gray-300",
                                      children: e.jsx(wr, {
                                        size: 14,
                                        strokeWidth: 2,
                                      }),
                                    }),
                              }),
                            }),
                            e.jsxs("div", {
                              className: "flex-1 min-w-0 pt-0.5",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "flex items-center gap-2 mb-1 flex-wrap",
                                  children: [
                                    e.jsx("span", {
                                      className:
                                        "text-[#161823] text-[14px] font-semibold",
                                      children: W(Ee.user),
                                    }),
                                    Te(Ee.user) &&
                                      e.jsx("span", {
                                        title: "作者",
                                        "aria-label": "作者",
                                        children: e.jsx(Kk, { size: 15 }),
                                      }),
                                  ],
                                }),
                                e.jsx("div", {
                                  className:
                                    "text-[#161823] text-[14px] leading-normal mb-1.5 break-words",
                                  children: ht(Ee.content, {
                                    translationKey: `c-${Ee.id}`,
                                    onToggleTranslate: () => V(`c-${Ee.id}`),
                                    buttonInline: !1,
                                  }),
                                }),
                                e.jsxs("div", {
                                  className: "flex flex-col space-y-2",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center text-gray-400 text-[13px] flex-wrap gap-x-0",
                                      children: [
                                        e.jsx("span", {
                                          children: Fe(Ee.timestamp),
                                        }),
                                        Ee.location &&
                                          e.jsxs("span", {
                                            className: "ml-1",
                                            children: ["· ", Ee.location],
                                          }),
                                        e.jsx("span", {
                                          className:
                                            "font-medium text-gray-500 cursor-pointer ml-4",
                                          onClick: (fe) => {
                                            (fe.stopPropagation(), Ae(Ee));
                                          },
                                          children: "回复",
                                        }),
                                        e.jsx("span", {
                                          className:
                                            "font-medium text-gray-500 cursor-pointer ml-4",
                                          onClick: (fe) => {
                                            (fe.stopPropagation(),
                                              V(`c-${Ee.id}`));
                                          },
                                          children: F.has(`c-${Ee.id}`)
                                            ? "收起翻译"
                                            : "翻译",
                                        }),
                                      ],
                                    }),
                                    Ee.replies &&
                                      Ee.replies.length > 0 &&
                                      e.jsxs("div", {
                                        className: "mt-2 space-y-3",
                                        children: [
                                          (L.has(Ee.id)
                                            ? Ee.replies
                                            : Ee.replies.slice(0, 2)
                                          ).map((fe, He) =>
                                            e.jsxs(
                                              "div",
                                              {
                                                className: "flex space-x-2",
                                                children: [
                                                  e.jsx("div", {
                                                    className:
                                                      "w-6 h-6 rounded-full bg-gray-200 overflow-hidden flex-shrink-0 cursor-pointer",
                                                    onClick: (Ie) => {
                                                      Ie.stopPropagation();
                                                      const Ce = H(fe.user);
                                                      U(Ce);
                                                    },
                                                    children: Y(fe.user)
                                                      ? e.jsx("img", {
                                                          src: Y(fe.user),
                                                          alt: "",
                                                          className:
                                                            "w-full h-full object-cover",
                                                        })
                                                      : e.jsx("div", {
                                                          className:
                                                            "w-full h-full flex items-center justify-center text-gray-400 bg-gray-300",
                                                          children: e.jsx(wr, {
                                                            size: 12,
                                                            strokeWidth: 2,
                                                          }),
                                                        }),
                                                  }),
                                                  e.jsxs("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: [
                                                      e.jsxs("div", {
                                                        className:
                                                          "flex items-center flex-wrap gap-x-1.5 gap-y-0.5 mb-1",
                                                        children: [
                                                          e.jsx("span", {
                                                            className:
                                                              "text-[#161823] text-[13px] font-semibold",
                                                            children: W(
                                                              fe.user,
                                                            ),
                                                          }),
                                                          Te(fe.user) &&
                                                            e.jsx("span", {
                                                              title: "作者",
                                                              "aria-label":
                                                                "作者",
                                                              children: e.jsx(
                                                                Kk,
                                                                { size: 14 },
                                                              ),
                                                            }),
                                                          e.jsxs("span", {
                                                            className:
                                                              "text-gray-400 text-[12px] font-normal inline-flex items-center gap-0.5",
                                                            children: [
                                                              e.jsx("span", {
                                                                className:
                                                                  "text-[10px]",
                                                                "aria-hidden":
                                                                  !0,
                                                                children: "▶",
                                                              }),
                                                              e.jsx("span", {
                                                                children: ue(
                                                                  Ee,
                                                                  Ee.replies,
                                                                  He,
                                                                  fe,
                                                                ),
                                                              }),
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                      e.jsx("div", {
                                                        className:
                                                          "text-[#161823] text-[14px] leading-normal break-words",
                                                        children: ht(
                                                          fe.content,
                                                          {
                                                            translationKey: `r-${Ee.id}-${fe.id}`,
                                                            onToggleTranslate:
                                                              () =>
                                                                V(
                                                                  `r-${Ee.id}-${fe.id}`,
                                                                ),
                                                            buttonInline: !1,
                                                          },
                                                        ),
                                                      }),
                                                      e.jsxs("div", {
                                                        className:
                                                          "flex items-center text-gray-400 text-[12px] mt-1 flex-wrap gap-x-0",
                                                        children: [
                                                          e.jsx("span", {
                                                            children: Fe(
                                                              fe.timestamp,
                                                            ),
                                                          }),
                                                          fe.location &&
                                                            e.jsxs("span", {
                                                              className: "ml-1",
                                                              children: [
                                                                "· ",
                                                                fe.location,
                                                              ],
                                                            }),
                                                          e.jsx("span", {
                                                            className:
                                                              "font-medium text-gray-500 cursor-pointer ml-4",
                                                            onClick: (Ie) => {
                                                              (Ie.stopPropagation(),
                                                                te(Ee, fe));
                                                            },
                                                            children: "回复",
                                                          }),
                                                          e.jsx("span", {
                                                            className:
                                                              "font-medium text-gray-500 cursor-pointer ml-4",
                                                            onClick: (Ie) => {
                                                              (Ie.stopPropagation(),
                                                                V(
                                                                  `r-${Ee.id}-${fe.id}`,
                                                                ));
                                                            },
                                                            children: F.has(
                                                              `r-${Ee.id}-${fe.id}`,
                                                            )
                                                              ? "收起翻译"
                                                              : "翻译",
                                                          }),
                                                          e.jsxs("span", {
                                                            className:
                                                              "ml-3 flex items-center gap-1",
                                                            children: [
                                                              e.jsx(zn, {
                                                                size: 12,
                                                                className:
                                                                  fe.isLiked
                                                                    ? "fill-[#fe2c55] text-[#fe2c55]"
                                                                    : "",
                                                              }),
                                                              fe.likes > 0 &&
                                                                fe.likes,
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              fe.id,
                                            ),
                                          ),
                                          Ee.replies.length > 1 &&
                                            e.jsxs("div", {
                                              className:
                                                "flex items-center space-x-1 text-gray-500 text-[13px] font-medium cursor-pointer w-fit",
                                              onClick: (fe) => {
                                                fe.stopPropagation();
                                                const He = new Set(L);
                                                (He.has(Ee.id)
                                                  ? He.delete(Ee.id)
                                                  : He.add(Ee.id),
                                                  B(He));
                                              },
                                              children: [
                                                e.jsx("div", {
                                                  className:
                                                    "w-6 h-[1px] bg-gray-300 mr-1",
                                                }),
                                                e.jsx("span", {
                                                  children: L.has(Ee.id)
                                                    ? "收起"
                                                    : "展开更多回复",
                                                }),
                                                e.jsx("svg", {
                                                  width: "10",
                                                  height: "10",
                                                  viewBox: "0 0 24 24",
                                                  fill: "none",
                                                  stroke: "currentColor",
                                                  strokeWidth: "3",
                                                  strokeLinecap: "round",
                                                  strokeLinejoin: "round",
                                                  className: `mt-[1px] transition-transform ${L.has(Ee.id) ? "rotate-180" : ""}`,
                                                  children: e.jsx("path", {
                                                    d: "M6 9l6 6 6-6",
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
                            e.jsxs("div", {
                              className:
                                "flex flex-col items-center space-y-1 pt-1 w-10",
                              children: [
                                e.jsx(zn, {
                                  size: 18,
                                  className: `transition-colors ${Ee.isLiked ? "fill-[#fe2c55] text-[#fe2c55]" : "text-gray-300"}`,
                                  onClick: () => Se(Ee.id),
                                }),
                                e.jsx("span", {
                                  className: "text-xs text-gray-500",
                                  children: Ee.likes > 0 ? $e(Ee.likes) : "",
                                }),
                              ],
                            }),
                          ],
                        },
                        Ee.id,
                      ),
                    ),
            }),
            e.jsx("div", {
              className: "bg-white border-t border-gray-100 px-4 py-3 pb-8",
              children: S
                ? e.jsxs("div", {
                    className: "flex flex-col space-y-3",
                    onClick: (Ee) => Ee.stopPropagation(),
                    children: [
                      e.jsx("div", {
                        className: "flex items-end space-x-3",
                        children: e.jsxs("div", {
                          className:
                            "flex-1 bg-gray-100 rounded-2xl p-3 min-h-[72px] relative group",
                          children: [
                            z &&
                              we.length > 0 &&
                              e.jsx("div", {
                                className:
                                  "absolute left-0 right-0 bottom-full mb-1 max-h-40 overflow-y-auto rounded-xl bg-white shadow-lg border border-gray-100 z-30",
                                children: we.map((Ee) =>
                                  e.jsxs(
                                    "button",
                                    {
                                      type: "button",
                                      className:
                                        "w-full text-left px-3 py-2.5 text-sm hover:bg-gray-50 flex items-center justify-between gap-2 border-b border-gray-50 last:border-0",
                                      onClick: () => ve(Ee),
                                      children: [
                                        e.jsx("span", {
                                          className:
                                            "font-medium text-gray-900 truncate",
                                          children: Ee.name,
                                        }),
                                        e.jsx("span", {
                                          className:
                                            "text-[11px] text-gray-400 shrink-0",
                                          children: xe(Ee) ? "互关" : "已关注",
                                        }),
                                      ],
                                    },
                                    Ee.id,
                                  ),
                                ),
                              }),
                            e.jsxs("div", {
                              className:
                                "absolute inset-0 p-3 text-sm leading-relaxed whitespace-pre-wrap break-words pointer-events-none text-transparent z-0",
                              children: [
                                M.split(/(@[^\s\u200b]+)/g).map((Ee, fe) =>
                                  e.jsx(
                                    "span",
                                    {
                                      className: Ee.startsWith("@")
                                        ? "text-[#2b5ae1]"
                                        : "text-gray-900",
                                      children: Ee,
                                    },
                                    fe,
                                  ),
                                ),
                                M.endsWith(`
`) && e.jsx("br", {}),
                              ],
                            }),
                            e.jsx("textarea", {
                              ref: q,
                              value: M,
                              onChange: (Ee) => {
                                const fe = Ee.target.value;
                                (E(fe), Q(fe, Ee.target.selectionStart));
                              },
                              onSelect: (Ee) => {
                                const fe = Ee.target;
                                Q(fe.value, fe.selectionStart);
                              },
                              onKeyUp: (Ee) => {
                                const fe = Ee.target;
                                Q(fe.value, fe.selectionStart);
                              },
                              placeholder: T
                                ? "回复该评论（可 @ 互关或已关注的人）"
                                : "发条评论…输入 @ 可提醒互关或已关注的人",
                              className:
                                "w-full h-full bg-transparent text-transparent caret-gray-900 text-sm placeholder-gray-400 outline-none resize-none leading-relaxed relative z-10 font-inherit",
                              rows: 2,
                              style: { fontFamily: "inherit" },
                            }),
                          ],
                        }),
                      }),
                      e.jsxs("div", {
                        className: "flex items-center justify-between gap-2",
                        children: [
                          e.jsx("button", {
                            type: "button",
                            className: `p-2 rounded-full transition-colors ${ye.length > 0 ? "text-[#2b5ae1] hover:bg-[#2b5ae1]/10 active:opacity-80" : "text-gray-300 cursor-not-allowed"}`,
                            disabled: ye.length === 0,
                            "aria-label": "插入艾特",
                            title:
                              ye.length === 0
                                ? "先去关注对方，才可艾特"
                                : "艾特互关或已关注的人",
                            onClick: (Ee) => {
                              if ((Ee.stopPropagation(), !ye.length)) return;
                              const fe = q.current,
                                He = M.endsWith("@") ? M : `${M}@`;
                              (E(He),
                                O(!0),
                                K(""),
                                requestAnimationFrame(() => {
                                  if (fe) {
                                    const Ie = He.length;
                                    (fe.focus(),
                                      fe.setSelectionRange(Ie, Ie),
                                      Q(He, Ie));
                                  }
                                }));
                            },
                            children: e.jsx(W1, {
                              size: 22,
                              strokeWidth: 2.25,
                              className: "text-current",
                              "aria-hidden": !0,
                            }),
                          }),
                          e.jsx("button", {
                            type: "button",
                            className: `p-2 rounded-full transition-colors ${M.trim() ? "text-[#03CCD9] hover:bg-[#03CCD9]/12 active:opacity-80" : "text-gray-300 cursor-not-allowed"}`,
                            onClick: Ve,
                            disabled: !M.trim(),
                            "aria-label": "发送",
                            children: e.jsx(ri, {
                              size: 24,
                              strokeWidth: 2.25,
                              className: "text-current",
                              "aria-hidden": !0,
                            }),
                          }),
                        ],
                      }),
                    ],
                  })
                : e.jsx("div", {
                    className: "flex items-center space-x-3",
                    children: e.jsx("div", {
                      className:
                        "flex-1 h-10 bg-gray-100 rounded-full flex items-center px-4 text-gray-400 text-sm cursor-text",
                      onClick: () => j(!0),
                      children: e.jsx("span", {
                        children: T ? "回复该评论" : "发条评论，和大家一起讨论",
                      }),
                    }),
                  }),
            }),
          ],
        }),
      ],
    });
  };
function Ip(t) {
  const s = String(t || ""),
    n = s.indexOf("{"),
    a = s.indexOf("["),
    r = n === -1 ? a : a === -1 ? n : Math.min(n, a);
  if (r === -1) throw new Error("No JSON start");
  const i = s[r],
    o = i === "{" ? "}" : "]";
  let c = 0,
    d = !1,
    u = !1;
  for (let f = r; f < s.length; f++) {
    const p = s[f];
    if (d) {
      u ? (u = !1) : p === "\\" ? (u = !0) : p === '"' && (d = !1);
      continue;
    }
    if (p === '"') {
      d = !0;
      continue;
    }
    if ((p === i ? c++ : p === o && c--, c === 0))
      return JSON.parse(s.slice(r, f + 1));
  }
  throw new Error("Unclosed JSON");
}
function qu(t) {
  const s = String(t || "").match(/```(?:json)?\s*([\s\S]*?)```/i);
  return s
    ? s[1].trim()
    : String(t || "")
        .replace(/^```(?:json)?\s*/i, "")
        .replace(/\s*```\s*$/i, "")
        .trim();
}
const qJ = {
  "1-1": "元旦",
  "2-14": "情人节",
  "3-8": "国际妇女节",
  "3-12": "植树节",
  "4-1": "愚人节",
  "5-1": "劳动节",
  "5-4": "青年节",
  "6-1": "儿童节",
  "9-10": "教师节",
  "10-1": "国庆节",
  "10-31": "万圣夜",
  "12-24": "平安夜",
  "12-25": "圣诞节",
};
function c2(t = new Date()) {
  const s = t instanceof Date ? t : new Date(t),
    n = ["日", "一", "二", "三", "四", "五", "六"][s.getDay()],
    a = s.getFullYear(),
    r = s.getMonth() + 1,
    i = s.getDate(),
    o = String(s.getHours()).padStart(2, "0"),
    c = String(s.getMinutes()).padStart(2, "0"),
    d = qJ[`${r}-${i}`];
  return `此刻现实世界：${a}年${r}月${i}日 星期${n} ${o}:${c}${d ? `（${d}）` : ""}`;
}
async function jC(t, s, n) {
  const {
      streamerName: a,
      liveTitle: r,
      coverHint: i,
      residentBriefs: o,
      npcHostMode: c,
      anchorResidentBio: d,
      anchorKnowsUserIdentity: u,
      viewerDouyinDisplayName: f,
      viewerPersonaForAnchorBlock: p,
    } = n,
    m = s,
    h = `你是「啾音」短视频平台直播间弹幕与互动编排器。只输出**合法 JSON 对象**，不要 markdown、不要解释。
【规则】
1) 生成混合弹幕：一部分是**虚拟路人观众**（type 为 virtual），一部分是**居民档案里的真实角色**（type 为 resident，必须带 resident_id，且只能使用下方列表里出现的 id）。
2) 每位发言者包含：等级 level（1-99 整数）、昵称 name、一句话弹幕 text（口语、短句）。
3) **每位在 items 里出场的 resident（type=resident）首条必须 is_entry=true**，并写 entry_line（简短入场语，如「xxx 进来了」）；若同一位居民有多条弹幕，仅第一条带 is_entry，其余 is_entry=false。
4) 虚拟 NPC 的名字要像网名，不要与下方居民重名。
5) 内容要贴合直播标题与封面氛围，轻松、像真实直播弹幕。

【弹幕语气 · 须像正常成年人】
- 所有 items 的 text、以及 gift_events 的 gift_line，须是**普通成年观众**在公屏上会打的口语，自然、克制。
- **禁止油腻**（土味情话、刻意撩拨、套路化撒娇）；**禁止中二**（夸张救赎/契约/王之凝视类动漫反派口吻、尬燃宣言）。
- **禁止**做作霸总式自称与腔调，如「本少爷」「本小姐」「小爷」「大爷」「朕」「本座」及同类；除非 resident_character_bio 明确设定如此且仍须避免尬演。

【角色锚定 · 严禁串台】
- 全直播间**只有一位主播**，即用户消息里的【主播】昵称。**除此以外的所有人**（每条 virtual、每条 resident）都是**观众/路人**，绝不是主播本人。
- 每条 resident 的 text 必须是**该 resident_id 对应角色以观众身份、对主播说话**；禁止写成主播控场、感谢礼物、喊「家人们」等**除非其 bio 明确如此**；禁止 A、B 轮番发言时后者误把自己当成主播。
- 禁止把**其他 resident 或 virtual 网名**当成主播来称呼；virtual 也禁止把通讯录居民当成主播，只能把【主播】当主播。

【现实世界感知】
- 下方用户消息含【此刻现实世界时间】**以客户端本地时区为准**，须作为弹幕的**时间锚**：星期、是否周末、大致钟点（清晨/上午/午后/傍晚/深夜等）应被**默默遵守**。
- 台词里若涉及作息、通勤、吃饭、是否还在外面等，须与该钟点**不矛盾**；**禁止**深夜全员喊上班、清晨集体吃夜宵等明显错位。
- 不必每条都报日期或钟点，但**不得假装**不知道现在是星期几或白天黑夜（例如勿写「周五快乐」若实际是周二）。`;
  let x = `【此刻现实世界时间】${c2()}

【主播】${a}
【直播标题】${r || "未命名直播"}
【封面/场景关键词】${i || "无"}

【可供入场的通讯录居民（仅可选用这些 resident_id）】
${JSON.stringify(o || [], null, 0).slice(0, 12e3)}

请输出 JSON，格式严格如下：
{
  "viewer_count_base": 80,
  "items": [
    { "type": "virtual", "name": "网名", "level": 12, "text": "弹幕内容", "is_entry": false },
    { "type": "resident", "resident_id": "必须与上面列表一致", "name": "显示名", "level": 45, "text": "弹幕", "is_entry": true, "entry_line": "入场短句" }
  ],
  "gift_events": [
    { "kind": "resident", "resident_id": "须与居民列表一致", "name": "显示名", "gift_id": "g1", "count": 1, "gift_line": "送礼当下脱口而出的一句原话（口语、短）" },
    { "kind": "virtual", "name": "网名", "gift_id": "g2", "count": 1, "gift_line": "同上" }
  ]
}
items 数组 10～18 条；resident 条目至少 0 条、至多 ${Math.min(6, (o || []).length)} 条；virtual 至少 5 条。**每位出场的 resident 其第一条必须为 is_entry=true 且含 entry_line**；同一人若有多条，仅首条 is_entry。
gift_events：**必须输出该字段**；无人送礼时为 []；有人送礼须**逐条列出**（含通讯录居民 kind=resident 须带 resident_id）；kind 一律小写 resident 或 virtual；礼物 id 仅 g1～g6。**每一条 gift_events 都必须含非空字符串 gift_line**，即该送礼者送出该礼物时**当场说出口**的一句台词（与 items 里点礼物可呼应，口语、宜短）。`,
    y = h;
  if (c) {
    const b = String(f || "用户").trim() || "用户";
    y += `

【通讯录居民主播专场·补充】
- 【主播】即用户消息中的昵称，是啾音上的**通讯录居民**博主（有档案人设），**不是**匿名素人；**虚拟路人**须理解自己在围观这位**居民人设主播**，称呼与梗可贴近其传记气质。
- 若【可供入场的通讯录居民】为空数组，则 items **全部为 type=virtual**，不得编造 resident_id；虚拟 NPC 仍须把【主播】当作本场唯一主播来讨论。
- 若【可供入场的通讯录居民】**仅含主播本人一条**（唯一 resident_id 即本场主播）：items 中须含**至少 3 条、建议 3～8 条** type=resident 且 resident_id 与之相同（**可连发多句**），**text 为主播在公屏的口播/开场互动**（非「围观自己的观众」）；并与 virtual 路人混杂。
- 路人弹幕不得破墙；对主播用第二人称「你」指其网名。
- 【真实进房用户·防冒充】用户消息含【用户啾音展示名】「${b}」：该用户**仅在客户端**亲自发弹幕、点礼物面板送礼。**禁止**在 items 中用 type=virtual 且 name 与该展示名**完全相同**冒充其本人发言；**禁止**在 gift_events 中用 kind=virtual 且 name 与该展示名相同冒充其送礼；**禁止**输出 gift_events.kind=user（该值**仅**由客户端写入）。`;
    const N = String(d || "").slice(0, 1200),
      w = u === !0;
    x += `

【主播通讯录居民传记（虚拟 NPC 侧写主播性格时锚定）】
${N || "（未配置）"}
【用户啾音展示名】${b}
【主播在设定上是否知晓发弹幕/送礼用户的真实线下身份】${w ? "知晓——侧写互动时可暗示主播认得「谁」在送/在说（勿在弹幕里泄露身份证等隐私）" : `不知——主播侧仅知用户啾音展示名为「${b}」，不得编造真实姓名或线下隐私`}
${
  w && String(p || "").trim()
    ? `【用户真实信息·供侧写「主播认得用户」时参考】
${String(p).slice(0, 900)}`
    : ""
}`;
  }
  const v = await yr(
    t,
    {
      messages: [
        { role: "system", content: y },
        { role: "user", content: x },
      ],
      temperature: 0.85,
      max_tokens: 2800,
    },
    { addApiLog: m, logContactName: "" },
  );
  try {
    return Ip(qu(v));
  } catch {
    return { viewer_count_base: 88, items: [], gift_events: [] };
  }
}
async function QJ(t, s, n) {
  const {
      streamerName: a,
      liveTitle: r,
      userInput: i,
      recentDmDigest: o,
      residentBriefs: c,
      residentIdsSeenInLive: d,
      userRealPersonaBlock: u,
      streamPublicPersonaBlock: f,
      giftHallDigest: p,
      recentGiftDigest: m,
      donationRankDigest: h,
      giftAttributionDigest: g,
      giftTierPriceDigest: x,
      npcHostMode: y,
      anchorResidentBio: v,
      anchorKnowsUserIdentity: b,
      viewerDouyinDisplayName: N,
      anchorMayEndStream: w,
    } = n,
    _ = s;
  let A = `你是啾音直播间互动编排器。只输出**合法 JSON**，不要 markdown。

【角色锚定 · 严禁串台 — 最高优先级】
- 全直播间**只有一位主播**，昵称即下方【主播昵称】「${a}」。除此以外的任何人（含每条 type=resident、type=virtual）都是**观众**，绝不是主播。
- 每条 resident 的 text 必须是**该条 resident_id 与 name 所指的那一个角色**，以**观众/熟人视角对主播发言**；**禁止**写成主播本人、控场、下播语、感谢全体打赏等**除非其 resident_character_bio 明确是主播行业从业者且符合人设**。
- **同批多条、多人轮番时**：每写一条就自检——当前说话者 = 该条 JSON 的 resident_id/name，所称呼的「你」= 仅主播「${a}」；**禁止**因上一条也是居民发言，就把本条误写成「我开播」「宝贝们看我」等主播视角。
- **禁止**把其他通讯录居民（别的 resident_id）、或虚拟路人（virtual 网名）**当成**主播或用户来互动；virtual 的 text 同样**禁止**把任何 resident 当成主播，只能认「${a}」为主播。
- **措辞**：居民与路人台词须符合各自人设；**禁止油腻**（土味情话、刻意霸总/撒娇、无节制撩拨、套路化撩主播）；**禁止中二**（夸张救赎/契约体、尬燃、动漫反派式宣言）；**禁止**做作霸总式自称，如「本少爷」「本小姐」「小爷」「大爷」「朕」「本座」等（除非 bio 明确且仍须口语自然）。所有 text / gift_line 须像**正常成年观众**在公屏上的随口一句，清爽、自然、不尬。

【主播身份与居民回复规则】
1) 居民池每条有 knows_user_identity（是否知道用户真实身份）。
2) **knows_user_identity=true**：你写该居民的 text 时，把主播「${a}」当作真实认识的人，依据【用户本人真实人设】理解关系；**但说话者仍是该居民自己**，不是主播；语气可亲密、可吐槽，**禁止**串成主播口吻。
3) **knows_user_identity=false**：该居民不知道主播线下是谁，只把「${a}」当陌生博主；依据【直播间公开信息】与标题即可；**说话者仍是该居民**，不是主播。
4) 居民池 JSON 中 **resident_character_bio** 字段 = **该居民角色本人**的人物传记/性格，**仅用于写该居民的台词**；**绝不是**【用户本人真实人设】或主播设定，**禁止**把 resident_character_bio 误读成用户、或把角色传记套到主播「${a}」身上。
5) **linked_chat_snippets_last5_rounds** 仅当该居民在档案中**勾选联通记忆窗口**时有值，为与用户在聊天 App 联通会话里**最近约 5 回合**原文；可辅助语气，**不是**用户全局人设，**禁止**与【用户本人真实人设】混为一谈。
6) 每位居民的每条弹幕 text 必须严格符合其 **resident_character_bio** 性格与口癖；不得 OOC。**同一 resident_id 可在本批 items 中出现多条**（连发多条弹幕），每条 text 独立成句且都须符合人设。

【进场与出场】
7) 直播是持续的：本批互动里**有发言的居民 resident_id 去重后建议不超过 3 人**（不必全员出镜）。
8) **不是每一位居民每一轮都要发言**：本批 items 里，resident 条目只选**一部分**居民出镜即可；其余可完全不出现。
9) **入场提示**：下列 id 已在**本场直播**中出现过弹幕（若列表非空）：${JSON.stringify(d || [])}。若你安排某位 **resident_id 不在此列表**的居民在本批**首次开口**，则该居民**第一条**弹幕必须 is_entry=true，并写 entry_line（可与弹幕语气一致，如「xxx 进来了」）。已在列表中的居民若剧情上**再次进入**直播间，也可将该条标 is_entry=true 并写 entry_line。is_exit 至多 1 条。

【礼物 gift_events】
10) **gift_events 必须输出**（数组）；无人送时为 []。若有送礼，须**逐条列出**，含通讯录居民（kind=resident 且 resident_id 与居民池一致）与虚拟路人；**不要漏掉任何一笔**；kind 一律小写。每一条必须含 **gift_line**（非空字符串）：送礼者**当下说出口**的一句原话，口语、宜短，须符合该送礼者人设。
11) 礼物均为典藏馆档位（见 id 表）。【典藏馆收集进度】里每一档都标明**该档已满**或**未满还差几件**；居民与路人台词须与此一致，**禁止**说某档「差一件就满」若进度写明该档已满。若某居民在本批 gift_events 里送了礼，其对应弹幕里应**自然提到自己送的是哪一件**（用礼物中文名），并体现对进度的了解（可一句带过）；**gift_line 可与该条弹幕语气呼应但不必逐字相同**。
12) 阅读【近期送礼摘要】：若有人刚送了较贵重礼物，其他居民的 text 里**可以**吃醋、酸一下、调侃，但必须仍符合各自 **resident_character_bio**。
13) **打赏排名与礼物标署（事实锚定）**：用户消息中的【本场打赏折算排名】若列出名次，则**任何居民**在台词里提及自己/他人榜单位置、攀比、吃醋、抢榜时，**必须与表中名次与金额一致**，不得编造排名。【各档位礼物标署】列出每一档礼物当前「标署」归属（该档送出件数最多者）；居民可提及争标署、想顶掉当前标署者等，但**必须与标署表一致**，且须符合 **resident_character_bio**：节俭、抠门、经济拮据者**不会**为抢标署而高频赠送高价档礼物；出手频次与档位须与人设相符。
14) **消费与人设**：【礼物参考单价】中 g1～g6 单价递增。安排 resident 的 gift_events 时，**累计折算金额与单次档位**须与其 **resident_character_bio** 中的消费习惯一致（如节俭/穷/学生气角色少送或不送大额，富有/大方角色才可较常送高价档）；**禁止**让人设与送礼行为矛盾。

【输出类型】
- virtual：路人；resident：须带 resident_id，且来自居民池。

【现实世界时间锚 — 须一致】
- 用户消息中的【此刻现实世界时间】由**客户端本地时区**生成，是本场弹幕的**唯一现实时间基准**；所有路人/居民的 text 与 gift_line 在涉及「当下」时，须与该基准**自洽**。
- **星期与是否周末**：若台词提到工作日/周末/周一综合症等，须与日期中的星期**一致**；**禁止**写错星期或假装节假日（除非【此刻现实世界时间】行内已标明公历节日）。
- **钟点与场景**：清晨/上午/午后/傍晚/深夜所对应的合理活动、光线、口吻应大致相符；**禁止**与钟点明显冲突（如凌晨三点集体「刚下班挤地铁」、深夜全员「早八打卡」）。
- **自然贴合即可**：可偶尔点一句时段感（如「这么晚还在播」），但不要条条重复报时；核心是**不编造与现实钟点/星期矛盾的情境**。`;
  if (y) {
    const E = String(N).trim();
    A += `

【通讯录居民主播·剧情锚定】
- 主播「${a}」是**通讯录居民**身份的主播，在设定上**知道自己正在直播**，并理解用户消息中的【典藏馆收集进度】【本场打赏折算排名】【各档位礼物标署】；virtual 路人描写争榜、撬标署、谢礼、盯公屏等必须与上述摘要**事实一致**。
- items 仍**全部为观众发言**（非主播第一人称念稿），但可侧写「主播看到排名/标署」「主播谢礼物」等**镜头外反应**。
${b === !0 ? "- 主播在设定上**知晓**发弹幕/送礼用户的真实身份（见【用户本人真实人设】）；路人台词可暗示熟稔、点名关系，勿泄露身份证等隐私。" : `- 主播在设定上**不知晓**用户线下身份，仅能以啾音展示名「${E}」认识用户；路人不得替用户编造真名。`}`;
    const j = String(N).trim() || "用户";
    ((A += `

【真实进房用户·防冒充 — 最高优先级】
- 有一位**真实观众**正在观看本直播，啾音展示名为「${j}」；其弹幕与礼物**仅**由客户端产生。**禁止**代替该用户编造 ta「刚发了某条弹幕」或「刚送了礼」：除非剧情明确需要路人侧写，否则不要在 gift_events 中捏造该用户的送礼；**禁止**在 items 中用 type=virtual 且 name 与「${j}」**完全相同**冒充用户口吻；**禁止**在 gift_events 中用 kind=virtual 且 name 与「${j}」**完全相同**冒充用户送礼；**禁止**输出 gift_events.kind=user（仅客户端使用）。
- 用户若在本轮消息中填写了【用户刚输入】，可由**主播 resident 口播回应**或 virtual 路人从侧面议论，**不要**再生成一条看起来像**用户本人**在公屏发的 type=virtual 同名字弹幕。`),
      Array.isArray(c) &&
        c.length === 1 &&
        (A += `

【居民主播·弹幕身份覆盖 — 最高优先级】
- 【居民池】当前**仅含主播本人一条**档案（该 resident_id 即本场主播在通讯录中的 id）。在此模式下：
- items 里 **type=resident 且 resident_id 等于该 id** 的条目 = **主播在公屏上的口播/回复**（可回应【用户刚输入】、感谢礼物与弹幕、接梗；**可连发多句**，同一 id **本批至少 3 条、建议 4～10 条**，每句 text 独立短句），**必须为主播本人视角**；**禁止**把该 resident 写成「围观主播的路人观众」。
- **口播与人设**：主播**每一条**口播 text 须严格贴合该居民档案 **resident_character_bio** 中的性格、经历、口癖与价值取向，可自然带出人设底色，**不得 OOC**。
- **公开场合边界（须与人设同时满足）**：本场是**啾音直播间公开展示**，陌生观众可见。**禁止**写成只适合私聊的内容（过度私密细节、不宜公开的敏感信息、仅限二人密谈式的长篇倾诉）；亲密关系若存在，表达须有**公开展播的分寸**，不得像在封闭会话里毫无顾忌。
- **virtual** 仍为普通观众，与主播口播条严格区分。
- 本条**覆盖**上文「每条 resident 均以观众身份对主播说话」——**仅在本模式（居民池仅一条且为主播）下**不适用。`));
  }
  let C = `【此刻现实世界时间】${c2()}

【主播昵称】${a}
【标题】${r || ""}
【用户刚输入（可能为空）】${i || "（无）"}
【近期弹幕摘要】
${o || "无"}

【用户本人真实人设（仅 knows_user_identity=true 的居民在心理上可读取；勿泄露给不知道的居民）】
${u || "（未配置）"}

【直播间公开信息（不知身份的居民与路人仅能用这些理解主播）】
${f || "（无）"}

【典藏馆收集进度（每档是否已满；含礼物 id）】
${p || "（无）"}

【礼物参考单价（人民币约/件，编排时须与人设消费力一致）】
${x || "（无）"}

【本场打赏折算排名（居民台词若提及名次须与此一致；无人则写无）】
${h || "（尚无）"}

【各档位礼物标署（每档当前送出件数最多者；居民台词若提及标署须与此一致）】
${g || "（尚无）"}

【近期送礼摘要（用于吃醋与互动，可为空）】
${m || "（尚无）"}

【居民池】（knows_user_identity、resident_character_bio=该**角色**传记非用户人设、linked_chat_snippets_last5_rounds=仅联通记忆时非空 等）
${JSON.stringify(c || [], null, 0).slice(0, 1e4)}

【展馆礼物 id】g1 纪念邮票 g2 线装书笺 g3 典藏精装书 g4 单曲封面 g5 版式海报 g6 黑金唱片

单曲封面 g4 专用（送礼人写给接收方用户的封面文案，须与 gift_line 同为非空口语时可分开展示）：可额外输出字符串字段 g4_echo（封面大字，如 ECHO）、g4_song_title（曲名，如星海领航者）、g4_quote（竖排金句，含与她初见等）；或把三段按顺序用半角 | 或全角 ｜ 合写在 gift_line 一条里。

典藏精装书 g3 专用：翻开后扉页的**短标题**与**诗行**由送礼人写给用户（主播）；亦为礼物台词依据。可输出字段 g3_title（如「时间的褶皱」）、g3_poem（诗，多句可用换行）；或将 gift_line 写为「标题｜诗的第一句｜第二句…」用 | 或 ｜ 分段。**诗与语气须符合该送礼者的 resident_character_bio**。

输出 JSON，字段严格如下：
{
  "items": [
    { "type": "virtual", "name": "网名", "level": 8, "text": "弹幕", "is_entry": false, "is_exit": false },
    { "type": "resident", "resident_id": "须与居民池一致", "name": "显示名", "level": 20, "text": "弹幕", "is_entry": false, "is_exit": false, "entry_line": "仅 is_entry 为 true 时需要，短句入场提示" }
  ],
  "gift_events": [
    { "kind": "virtual", "name": "网名", "gift_id": "g1", "count": 1, "gift_line": "送礼当下脱口而出的一句原话" },
    { "kind": "resident", "resident_id": "须一致", "name": "显示名", "gift_id": "g3", "count": 1, "gift_line": "同上" }
  ]
}
要求：
- items 共 6～14 条；其中 virtual 至少 3 条。
- 本批 items 中 type=resident 的去重 resident_id **不超过 3 个**；**同一 resident_id 可连续出现多条**，表示该居民连发弹幕。
- 每位在本批**首次出场**的居民，其第一条 resident 记录必须 is_entry=true（并 entry_line）；同一人本批内仅第一条可标 is_entry。
- gift_events **必须存在**（可为 []）；若有送礼，总数建议 0～6 条，须与 **resident_character_bio** 消费观一致；**每一笔 gift_events 在 items 里都应有对应发言点出礼物全名**，不得漏提示；**每一笔 gift_events 都必须含非空 gift_line**（送礼当场说出口的一句）。
- 再次强调：**唯一主播**仅为「${a}」；所有 resident/virtual 均为观众视角；**禁止油腻、中二、做作霸总自称（本少爷/小爷/大爷等）**；**禁止**把其他居民或路人当成主播。
- gift_id 为 g4 时：须同时满足非空 gift_line；海报三行文案用 g4_echo、g4_song_title、g4_quote 或 gift_line 内三段｜分隔。
- gift_id 为 g3 时：须含非空 gift_line；扉页标题与诗用 g3_title、g3_poem，或 gift_line 内用 | ｜ 分段标题+诗行；诗须符合人设。
- 居民若在 items 中谈及**本场打赏名次**、**某档礼物标署**或争榜，须与上文【本场打赏折算排名】【各档位礼物标署】**一致**；可描写抢标署心理，但**出手须符合**该居民 **resident_character_bio**（抠门/拮据者不得高频大额送礼）。`;
  if (y) {
    const E = String(v || "").slice(0, 1200),
      S = String(N).trim() || "用户";
    if (
      ((C += `

【主播通讯录居民传记（编排路人调侃与侧写时锚定）】
${E || "（未配置）"}
【用户啾音展示名】${S}
【主播是否知晓用户真实身份】${b === !0 ? "是（可与【用户本人真实人设】呼应侧写，弹幕仍为观众视角）" : "否（用户仅以展示名出现）"}`),
      (C += `

【居民主播场 · 收播标记】根级须与 items、gift_events **同级**输出 **anchor_end_stream**（布尔）：本批剧情中主播**未**主动关播则为 false；**仅当**主播亲口道别并收播、结束本场直播时为 true。`),
      Array.isArray(c) && c.length === 1)
    ) {
      const T = w === !0;
      ((C += `

【本批硬性要求】items 中 type=resident 且 resident_id 等于【居民池】内唯一 id 的条目 **不少于 3 条（建议 4～10 条）**，且均为**主播口播/回复**（非观众视角）；**可连续多条**同一 resident_id，表示一次「接收」内主播连发多句。
- 本批 items **总数 8～18 条**（含 virtual），其中 virtual 仍至少 3 条；**覆盖**上文「items 共 6～14 条」的条数限制。
- 上文要求里「所有 resident 均为观众视角」一句：**不适用于**上述「居民池仅一条且为主播」时的那几条 resident（那些是主播口播）；**virtual 仍为观众**。
- **主播口播**：每条须**同时**符合 **resident_character_bio** 人设，且语气与内容适合**公开直播间**（见 system「口播与人设」「公开场合边界」），不可写成私密一对一聊天。`),
        T
          ? (C += `

【本批特殊指令 — 主播主动收播】
- 本批互动**必须以主播主动下播收尾**：items **最后 1～2 条**须为 type=resident 且 resident_id 与【居民池】唯一 id 相同，内容为主播**亲口道别、宣布收播**（口语、短句，如暂别、感谢陪伴、要先下了等；须符合 resident_character_bio）。
- 本批 JSON 根级 **anchor_end_stream** 须为 **true**（仅此批）。`)
          : (C += `

【收播标记】本批主播**不收播**：JSON 根级 **anchor_end_stream** 须为 **false**。`));
    } else
      C += `

【收播标记】本批【居民池】含多位居民，主播**不收播**：JSON 根级 **anchor_end_stream** 须为 **false**。`;
  }
  const M = await yr(
    t,
    {
      messages: [
        { role: "system", content: A },
        { role: "user", content: C },
      ],
      temperature: 0.88,
      max_tokens: 3400,
    },
    { addApiLog: _, logContactName: "" },
  );
  try {
    return Ip(qu(M));
  } catch {
    return { items: [], gift_events: [] };
  }
}
async function ZJ(t, s, n) {
  const { residentBriefs: a } = n,
    r = s,
    i = `你是「啾音」短视频平台 Live 广场文案编辑。只输出**合法 JSON 对象**，不要 markdown。
规则：
- 输入为 1～2 位通讯录居民的档案摘要，你需为**每一位**各写一条**直播标题**。
- 标题要口语、有画面感，8～22 个汉字为宜；禁止涉黄涉政；禁止与居民传记气质明显冲突。
- resident_id 必须与输入完全一致，不得编造 id。`,
    o = `【居民档案】（含 resident_id、resident_character_bio 等）
${JSON.stringify(a || [], null, 0).slice(0, 14e3)}

请输出 JSON：
{
  "titles": [
    { "resident_id": "与输入一致", "live_title": "直播标题" }
  ]
}
titles 数组长度须与输入居民条数相同（1 或 2）；顺序可与输入不同，但 resident_id 必须一一对应无遗漏。`,
    c = await yr(
      t,
      {
        messages: [
          { role: "system", content: i },
          { role: "user", content: o },
        ],
        temperature: 0.82,
        max_tokens: 800,
      },
      { addApiLog: r, logContactName: "" },
    );
  try {
    return Ip(qu(c));
  } catch {
    return { titles: [] };
  }
}
async function XJ(t, s, n) {
  const {
      hostRealName: a,
      hostDisplayName: r,
      liveTitle: i,
      dmDigest: o,
      giftValueDigest: c,
      giftBreakdownText: d,
      tipRankingText: u,
      liveStatsLine: f,
      residentsLabelled: p,
    } = n,