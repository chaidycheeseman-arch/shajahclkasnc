              Array.isArray(Xa.excerpts))
            ) {
              const qn = Xa.excerpts
                .filter((ca) => ca && (ca.quote || ca.title))
                .map((ca) => ({
                  tutorialId: ca.tutorialId,
                  title: ca.title,
                  quote: ca.quote,
                }));
              qn.length > 0 &&
                Ka.push({
                  id: `${Ja}-hex`,
                  sender: "them",
                  type: "help_assistant_excerpts",
                  helpExcerpts: qn,
                  timestamp: Ur,
                });
            }
            return (
              Xa.supplementText &&
                String(Xa.supplementText).trim() &&
                Ka.push({
                  id: `${Ja}-hs`,
                  sender: "them",
                  type: "help_assistant_supplement",
                  text: String(Xa.supplementText).trim(),
                  supplementDisclaimer: !!Xa.supplementDisclaimer,
                  timestamp: Ur,
                }),
              Array.isArray(Xa.cards) &&
                Xa.cards.length > 0 &&
                Ka.push({
                  id: `${Ja}-hc`,
                  sender: "them",
                  type: "help_assistant_cards",
                  helpCards: Xa.cards,
                  timestamp: Ur,
                }),
              Ka.length === 0 &&
                Ka.push({
                  id: `${Ja}-h0`,
                  sender: "them",
                  type: "help_assistant_plain",
                  text: "暂无回复内容，请重试。",
                  timestamp: Ur,
                }),
              gt((qn) =>
                qn.map((ca) =>
                  ca.id === Zt
                    ? {
                        ...ca,
                        messages: [...(ca.messages || []), ...Ka],
                        lastMessage: "［啾啾小助手］",
                        timestamp: Ur,
                      }
                    : ca,
                ),
              ),
              Oa == null || Oa("receive"),
              null
            );
          }
          const Lo =
              typeof ir == "string" ? ir : ir == null ? void 0 : ir.replyText,
            Ld =
              typeof ir == "object" &&
              ir != null &&
              ir.blockedPhoneInviteOnlyRound === !0,
            Hp =
              typeof ir == "object" &&
              ir != null &&
              ir.blockedFirstPhoneOrTextExclusive === !0,
            Uc = Fs === "chat_heart" || Fs === "chat_regen",
            ni =
              !!(
                (Ga = Ds == null ? void 0 : Ds.settings) != null &&
                Ga.enableHeartVoice
              ) && Uc,
            sc =
              !!(
                (Sr = Ds == null ? void 0 : Ds.settings) != null &&
                Sr.enableDrafts
              ) && Uc,
            Wp =
              ni && typeof ir == "object" && ir != null && ir.heartVoice
                ? ir.heartVoice
                : null,
            Vr =
              sc && typeof ir == "object" && ir != null && ir.draft
                ? ir.draft
                : null;
          let Do = Lo;
          if (Lo && Ds != null && Ds.contactId && !(Ds != null && Ds.isGroup)) {
            const Xa = Ds.settings || {},
              Ur = Lo.match(/\[CHANGE_AVATAR:([^\]]+)\]/);
            if (Ur) {
              const Ka = Ur[1].trim();
              Do = Lo.replace(/\s*\[CHANGE_AVATAR:[^\]]+\]\s*$/g, "").trim();
              const ta = Array.isArray(Xa.avatarLibrary)
                ? Xa.avatarLibrary
                : [];
              if (Xa.allowAIChangeAvatar && ta.length > 0) {
                const qn = ta.find((ca) => String(ca.id) === String(Ka));
                if (qn != null && qn.url) {
                  pe(Ds.contactId, { avatar: qn.url });
                  const ca =
                      (li = G.current) == null
                        ? void 0
                        : li.find((qa) => qa.id === Ds.contactId),
                    ci =
                      (ca == null ? void 0 : ca.name) ||
                      (ca == null ? void 0 : ca.nickname) ||
                      "TA",
                    xi = (qn.desc || qn.description || "").trim(),
                    Gc = xi
                      ? `[系统提示：${ci} 将头像更换为「${xi}」]`
                      : `[系统提示：${ci} 更换了头像]`;
                  Ut(Zt, Gc, null, "system");
                }
              }
            }
            if (Lo.includes("[USE_IMAGE_AS_AVATAR]")) {
              const Ka = [...(Ds.messages || [])]
                .reverse()
                .find(
                  (ta) =>
                    ta.sender === "me" &&
                    (ta.type === "image" || ta.image) &&
                    ta.image,
                );
              (Ka != null &&
                Ka.image &&
                (pe(Ds.contactId, { avatar: Ka.image }),
                Ut(Zt, "[系统提示：TA 已更换头像]", null, "system")),
                (Do = (Do || Lo)
                  .replace(/\s*\[USE_IMAGE_AS_AVATAR\]\s*$/g, "")
                  .trim()));
            }
            const Ja = (Do || Lo).match(/\[AGREE_COUPLE_AVATAR:([^\]]+)\]/);
            if (Ja) {
              const Ka = Ja[1].trim(),
                qn = (
                  Array.isArray(Xa.coupleAvatarPairs)
                    ? Xa.coupleAvatarPairs
                    : []
                ).find((ca) => String(ca.id) === String(Ka));
              (qn && et(Zt, qn),
                (Do = (Do || Lo)
                  .replace(/\s*\[AGREE_COUPLE_AVATAR:[^\]]+\]\s*$/g, "")
                  .trim()));
            }
          }
          if (Do) {
            const Xa =
              (il =
                (qi = Ds == null ? void 0 : Ds.messages) == null
                  ? void 0
                  : qi.filter((Ka) => Ka.sender === "me" && Ka.text).pop()) ==
              null
                ? void 0
                : il.text;
            let Ur = null;
            if (sc && Ds != null && Ds.contactId)
              try {
                const Ka =
                    ((tc = G.current) == null
                      ? void 0
                      : tc.find((Na) => Na.id === Ds.contactId)) || null,
                  qn = `chat_app_drafts_${(Ka == null ? void 0 : Ka.id) || Ds.contactId}`,
                  ca = (await be.get(qn, [])) || [],
                  ci = Array.isArray(ca) ? ca : [],
                  xi = Date.now(),
                  qa = ((Na) =>
                    (
                      String(Na || "")
                        .split(/\s*\|\|\s*|｜｜/)
                        .find(Boolean) || ""
                    )
                      .replace(/\[[A-Z_]+[^\]]*\]/g, "")
                      .replace(/\s+/g, " ")
                      .trim())(Do);
                let El = to(Vr == null ? void 0 : Vr.mood),
                  Ll = to(Vr == null ? void 0 : Vr.reason),
                  Hc = to(Vr == null ? void 0 : Vr.input),
                  ho = to(Vr == null ? void 0 : Vr.sent);
                (ho || (ho = to(qa)), (Ur = ho || null));
                const er = [];
                if (
                  (El || er.push("mood"),
                  Hc || er.push("input"),
                  Ll || er.push("reason"),
                  ho || er.push("sent"),
                  er.length > 0)
                ) {
                  const Na = `草稿生成失败：缺少 ${er.join(", ")}`,
                    Wc = {
                      id: `d_${xi}_${Math.floor(Math.random() * 1e4)}`,
                      ts: xi,
                      error: Na,
                      preview: Na,
                      sent: ho,
                    };
                  await be.set(qn, [Wc, ...ci].slice(0, 50));
                } else {
                  const Na = ho.slice(0, 60),
                    Wc = {
                      id: `d_${xi}_${Math.floor(Math.random() * 1e4)}`,
                      ts: xi,
                      mood: El,
                      input: Hc,
                      reason: Ll,
                      sent: ho,
                      preview: Na,
                    };
                  await be.set(qn, [Wc, ...ci].slice(0, 50));
                }
              } catch {}
            const Ja =
              Ld || Hp
                ? {
                    ...(Ld ? { blockedPhoneInviteOnlyRound: !0 } : {}),
                    ...(Hp ? { blockedFirstPhoneOrTextExclusive: !0 } : {}),
                  }
                : null;
            await rl(
              Zt,
              Do,
              Ys,
              Xa,
              Wp,
              Ur,
              $n ? { cardMessage: $n.cardMessage } : null,
              null,
              Ja,
            );
          }
          return Lo;
        } finally {
          ds && lf.current.delete(Zt);
          const $n = kt.current.has(Zt),
            Ir =
              (ls = mr == null ? void 0 : mr.current) == null
                ? void 0
                : ls.has(Zt);
          (!$n &&
            !Ir &&
            gt((An) =>
              An.map((Er) => (Er.id === Zt ? { ...Er, isTyping: !1 } : Er)),
            ),
            Br((An) => {
              const Er = new Set(An);
              return (Er.delete(Zt), Er);
            }));
        }
      },
      zp = (Zt, ds) => {
        const ks = ds || "有人",
          Ss = `${ks} 试图解锁你的手机`,
          Fs = {
            id: Date.now().toString() + "-unlock-fail",
            type: "failed_unlock_attempt",
            sender: "me",
            userName: ks,
            text: Ss,
            timestamp: new Date().toISOString(),
          },
          Ys = (fs || []).find((Dn) => Dn.contactId === Zt),
          Ds = (Ys == null ? void 0 : Ys.id) || Xs(Zt),
          Ps = () => {
            gt((Dn) =>
              Dn.find((jn) => jn.id === Ds)
                ? Dn.map((jn) =>
                    jn.id === Ds
                      ? {
                          ...jn,
                          messages: [...(jn.messages || []), Fs],
                          lastMessage: Ss,
                          timestamp: Fs.timestamp,
                        }
                      : jn,
                  )
                : Dn,
            );
          };
        Ys ? Ps() : setTimeout(Ps, 0);
        const $s = (V || []).find((Dn) => Dn.id === Zt),
          Gs = ($s == null ? void 0 : $s.passwordHistory) || [],
          Qs = {
            password: "—",
            timestamp: new Date().toISOString(),
            source: "failed_unlock_attempt",
            userName: ks,
          };
        (pe(Zt, { passwordHistory: [Qs, ...Gs].slice(0, 30) }),
          setTimeout(() => {
            W.current && W.current(Ds);
          }, 600));
      },
      {
        listenTogetherState: Rp,
        startListenTogether: Pp,
        endListenTogether: yg,
        handleListenTogetherMessage: cf,
      } = yP(ae),
      vg = async (Zt, ds, ks) => await se(Zt, ds, ks, bg),
      Id = (Zt, ds) => {
        At(Zt, ds);
        const ks = ds
          .map((Ss) => {
            const Fs = G.current.find((Ys) => Ys.id === Ss);
            return Fs ? Fs.remark || Fs.nickname || Fs.name : "未知成员";
          })
          .join("、");
        (Ut(Zt, `[系统提示：邀请了 ${ks} 加入群聊]`, null, "system"),
          setTimeout(() => xo(Zt), 1e3));
      },
      wg = (Zt, ds) => {
        const ks = ds
          .map((Ss) => {
            const Fs = G.current.find((Ys) => Ys.id === Ss);
            return Fs ? Fs.remark || Fs.nickname || Fs.name : "未知成员";
          })
          .join("、");
        (Jt(Zt, ds),
          Ut(Zt, `[系统提示：将 ${ks} 移出了群聊]`, null, "system"),
          setTimeout(() => xo(Zt), 1e3));
      },
      df = (Zt) => {
        (Ut(Zt, "[系统提示：你退出了群聊]", null, "system"),
          setTimeout(() => xo(Zt), 1e3));
      },
      Il = (Zt) => {
        (Ut(Zt, "[系统提示：群主解散了群聊]", null, "system"),
          setTimeout(() => xo(Zt), 1e3));
      },
      {
        sendRedPacket: Bc,
        handleGrabRedPacket: uf,
        handleRedPacketGrabByAI: ff,
        handleRedPacketGrabsByAIBatch: Eo,
        handleTransferAction: Ed,
      } = $F({
        setChats: gt,
        setUser: o,
        contactsRef: G,
        chatsRef: ae,
        updateMessage: Js,
        sendMessageInternal: Ut,
        deductFromWallet: F,
      });
    l.useEffect(() => {
      ((Ls.current = ff), (Ot.current = Eo), (rs.current = Ed));
    }, [ff, Eo]);
    const rl = async (
        Zt,
        ds,
        ks = null,
        Ss = null,
        Fs = null,
        Ys = null,
        Ds = null,
        Ps = null,
        $s = null,
      ) =>
        Yt(Zt, async () => {
          var ec, Ki;
          let Gs = null,
            Qs = ds;
          try {
            const Ma = String(ds || ""),
              Ga =
                Ma.match(/\[\s*FRIEND_REQUEST\s*[:：]\s*"([\s\S]*?)"\s*\]/i) ||
                Ma.match(/\[\s*FRIEND_REQUEST\s*[:：]\s*'([\s\S]*?)'\s*\]/i) ||
                Ma.match(/\[\s*FRIEND_REQUEST\s*[:：]\s*“([\s\S]*?)”\s*\]/i),
              Sr = Ma.match(/\[\s*FRIEND_REQUEST\s*[:：]\s*([^\]]+?)\s*\]/i),
              li = Ga || Sr;
            if (li) {
              const qi = li[1] || "",
                il = String(qi).trim().replace(/\s+/g, " ").slice(0, 220);
              (il && (Gs = il), (Qs = Ma.replace(li[0], "").trim()));
            }
          } catch {}
          let Dn = null;
          try {
            const Ma = String(Qs || ""),
              Ga =
                Ma.match(
                  /\[\s*PHONE_CALL_INVITE\s*[:：]\s*"([\s\S]*?)"\s*\]/i,
                ) ||
                Ma.match(
                  /\[\s*PHONE_CALL_INVITE\s*[:：]\s*'([\s\S]*?)'\s*\]/i,
                ) ||
                Ma.match(/\[\s*PHONE_CALL_INVITE\s*[:：]\s*“([\s\S]*?)”\s*\]/i),
              Sr = Ma.match(/\[\s*PHONE_CALL_INVITE\s*\]/i),
              li =
                !Ga && !Sr
                  ? Ma.match(/\[\s*PHONE_CALL_INVITE\s*[:：]\s*([^\]]*?)\s*\]/i)
                  : null;
            let qi = null;
            (Ga ? (qi = Ga) : Sr ? (qi = Sr) : li && (qi = li),
              qi &&
                (Ga
                  ? (Dn = String(Ga[1] ?? "")
                      .trim()
                      .slice(0, 160))
                  : li
                    ? (Dn = String(li[1] ?? "")
                        .trim()
                        .slice(0, 160))
                    : (Dn = ""),
                (Qs = Ma.replace(qi[0], "").trim())));
          } catch {}
          const Hn =
              ($s == null ? void 0 : $s.blockedPhoneInviteOnlyRound) === !0,
            jn =
              ($s == null ? void 0 : $s.blockedFirstPhoneOrTextExclusive) ===
              !0,
            Pn = String(Qs || "").trim(),
            Wn =
              ((ec = ae == null ? void 0 : ae.current) == null
                ? void 0
                : ec.find((Ma) => Ma.id === Zt)) ||
              (fs || []).find((Ma) => Ma.id === Zt),
            Ua = Wn == null ? void 0 : Wn.contactId,
            br = Ua ? DP(Wn, Ua) : !1;
          let xn = !1;
          (Ua &&
            Dn !== null &&
            (br
              ? (xn =
                  gr({
                    contactId: Ua,
                    chatId: Zt,
                    inviteText: Dn,
                    fromBlocked: !0,
                  }) != null)
              : (xn =
                  gr({
                    contactId: Ua,
                    chatId: Zt,
                    inviteText: Dn,
                    fromBlocked: !1,
                  }) != null)),
            br && Gs && yt({ contactId: Ua, chatId: Zt, requestText: Gs }));
          const Aa =
              (jn && Dn !== null && xn) ||
              (Hn && Dn !== null && xn) ||
              (!Hn && !jn && Dn !== null && Pn.length === 0 && xn),
            si = new Date().toISOString();
          let Di = [];
          if (!Aa) {
            const Ma = await EF(Zt, Qs, {
              chats: fs,
              contacts: V,
              callStateRef: ge,
              asyncStorage: be,
              setMoments: at,
              setUnreadMoments: vt,
              getRoleBoundUser: T,
              generateNpcComments: hg,
              notificationTimerRef: xt,
              setNotification: dt,
              systemNotificationEnabled: zt,
              sendSystemNotification: Cs,
              moments: De,
            });
            let Ga = Ma.cleanText;
            if (
              ((Di = Ma.newMessagesToAdd),
              (Ga = await LF(Zt, Ga, Di, {
                chatsRef: ae,
                contactsRef: G,
                getRoleBoundUser: T,
                lastUserMessageText: Ss,
                timestamp: si,
                callApiRef: re,
                apiConfigRef: we,
                prependForwardCardPayload: Ds,
              })),
              Ga)
            ) {
              const Sr = ge.current,
                li =
                  (Sr == null ? void 0 : Sr.status) === "connected" &&
                  !(Sr != null && Sr.isGroup) &&
                  (Sr == null ? void 0 : Sr.chatId) === Zt;
              YF(Zt, Ga, Di, {
                chats: fs,
                contacts: V,
                chatsRef: ae,
                contactsRef: G,
                memes: nl,
                isVideoCall: li,
                handleTransferAction: Ed,
                updateMessage: Js,
                updateContact: pe,
                asyncStorage: be,
                setCoupleSpaces: K,
                currentCallState: Sr,
                setCallState: Is,
                setCallStateRef: ws,
                handleListenTogetherMessage: cf,
                unlockAudio: pt,
                playTTS: ys,
                replyToMessageId: ks,
                lastUserMessageText: Ss,
              });
            } else Di.length;
          }
          if (!Aa) {
            await JF(Zt, Di, {
              injectedHeartVoice: Fs,
              injectedDraftSent: Ys,
              prependForwardCardPayload: Ds,
              optionalRoleCard: Ps,
              timestamp: si,
              setChats: gt,
              chatsRef: ae,
              contactsRef: G,
              getRoleBoundUserRef: Q,
              playSound: Oa,
              setNotification: dt,
              notificationTimerRef: xt,
              systemNotificationEnabled: zt,
              sendSystemNotification: Cs,
              notificationStrategy: us,
              activeChatIdRef: Xt,
              summarizeHistory: af,
            });
            const Ma =
              ((Ki = ae.current) == null
                ? void 0
                : Ki.find((Ga) => String(Ga.id) === String(Zt))) ||
              fs.find((Ga) => String(Ga.id) === String(Zt));
            Ma != null &&
              Ma.contactId &&
              Array.isArray(Di) &&
              Di.length > 0 &&
              Di.forEach((Ga) => {
                Ga &&
                  yj({
                    source: "chat_app",
                    contactId: Ma.contactId,
                    chatId: Zt,
                    direction: Ga.sender === "me" ? "out" : "in",
                    sender: Ga.sender || "them",
                    messageType: vj(Ga.type || "text", Ga.text),
                    text: String(Ga.text || ""),
                    timestamp: new Date(Ga.timestamp || si).getTime(),
                  });
              });
          }
        }),
      Op = (Zt, ds = null) => {
        const ks = ds
          ? ae.current.filter((Ss) => ds.includes(Ss.contactId))
          : ae.current;
        (ds &&
          ds.forEach((Ss) => {
            if (!ae.current.find((Ys) => Ys.contactId === Ss)) {
              const Ys = Xs(Ss),
                Ds = G.current.find((Gs) => Gs.id === Ss),
                Ps = j(Ds),
                $s = (Ps == null ? void 0 : Ps.name) || "用户";
              (Ut(
                Ys,
                `[系统提示：用户「${$s}」更新了自己的个性签名："${Zt}"]`,
                null,
                "system",
              ),
                setTimeout(() => xo(Ys), 1e3));
            }
          }),
          ks.forEach((Ss) => {
            const Fs = G.current.find((Ps) => Ps.id === Ss.contactId),
              Ys = j(Fs),
              Ds = (Ys == null ? void 0 : Ys.name) || "用户";
            (Ut(
              Ss.id,
              `[系统提示：用户「${Ds}」更新了自己的个性签名："${Zt}"]`,
              null,
              "system",
            ),
              setTimeout(() => xo(Ss.id), 1e3));
          }));
      },
      jg = (Zt, ds = {}) => {
        const {
          importUser: ks = !0,
          importContacts: Ss = !0,
          importChats: Fs = !0,
          importPresets: Ys = !0,
          importMoments: Ds = !0,
          importGroups: Ps = !0,
        } = ds;
        if (
          (ks && Zt.user && o(Zt.user),
          Ss && Zt.contacts && ne(Zt.contacts),
          Fs && Zt.chats && gt(Zt.chats),
          Ys && Zt.presets && qs(Zt.presets),
          Ds && Zt.moments && at(Zt.moments),
          Ps)
        ) {
          if (Zt.groups) {
            const $s = Zt.groups;
            if (Array.isArray($s)) {
              const Gs = $s
                .map((Qs) =>
                  typeof Qs == "string"
                    ? Qs
                    : Qs != null && Qs !== ""
                      ? String(Qs)
                      : "",
                )
                .filter(Boolean);
              ie(Gs.length ? Gs : ["默认分组"]);
            } else ie(["默认分组"]);
          }
          (Zt.groupColors && je(Zt.groupColors),
            Zt.allGroupSettings && R(Zt.allGroupSettings));
        }
      };
    (XR({
      autoReplyInProgressRef: lf,
      chatsRef: ae,
      contactsRef: G,
      triggerAiReplyRef: W,
      apiConfigRef: we,
      getRoleBoundUserRef: Q,
      momentsRef: Ae,
      updateChatSettingsRef: Ve,
      setNotificationRef: ve,
      autoTraceUpdatingRef: te,
      runTraceUpdateWhenOpenedRef: Se,
      runProactiveMomentCheckRef: Fe,
      addApiLog: Tr,
    }),
      l.useEffect(() => {
        ((W.current = xo), (J.current = rl));
      }, [Md, rf, of, rl, xo]),
      l.useEffect(() => {
        if (!Td) return;
        const Zt = () => {
          if (typeof document > "u" || document.visibilityState !== "visible")
            return;
          const ds = Td.current,
            ks = Xt.current;
          ds && ks === ds && W.current && ((Td.current = null), W.current(ks));
        };
        return (
          document.addEventListener("visibilitychange", Zt),
          () => document.removeEventListener("visibilitychange", Zt)
        );
      }, [Td]),
      l.useEffect(() => {
        Fe.current = al;
      }, [al]),
      l.useEffect(() => {
        ((G.current = V),
          (we.current = s),
          (Q.current = T),
          (ve.current = dt),
          (Ve.current = Bs),
          (Ae.current = De));
      }, [V, s, T, dt, Bs, De]));
    const Bp = l.useMemo(
        () =>
          (Array.isArray(V) ? V : []).filter(
            (ds) =>
              ds &&
              ds.isBuiltinHelpAssistant !== !0 &&
              String(ds.id) !== String(io),
          ),
        [V],
      ),
      Up = {
        user: i,
        setUser: o,
        contacts: V,
        contactsPublic: Bp,
        setContacts: ne,
        chats: fs,
        setChats: gt,
        presets: _s,
        setPresets: qs,
        ttsConfig: a,
        moments: De,
        setMoments: at,
        addContact: vg,
        addContactFromImport: Te,
        sendMessage: Ut,
        triggerAiReply: xo,
        receiveMessage: rl,
        createChat: Xs,
        createGroupChat: gn,
        handleAddMembersToGroup: Id,
        handleRemoveMembersFromGroup: wg,
        handleLeaveGroup: df,
        handleDismissGroup: Il,
        updateChatSettings: Bs,
        addMoment: Oe,
        toggleLikeMoment: me,
        forwardMoment: Qe,
        unreadMoments: ft,
        clearUnreadMoments: Gt,
        deleteMessages: wt,
        recallMessage: xs,
        clearChatMessages: rn,
        deleteMoment: Ye,
        deleteComment: Ze,
        replyToComment: Ue,
        togglePinMoment: jt,
        groups: le,
        setGroups: ie,
        groupColors: X,
        groupInitialNames: xe,
        allGroupSettings: ye,
        updateAllGroupSettings: oe,
        addGroup: ee,
        setGroupColor: H,
        deleteGroup: Y,
        updateGroup: U,
        reorderAndRenameGroups: ce,
        updateContact: pe,
        handleCoupleAvatarAccept: Dt,
        handleCoupleAvatarReject: Mt,
        togglePinChat: ln,
        deleteChat: sn,
        deleteContact: fr,
        restoreData: jg,
        summaries: bs,
        apiConfig: s,
        activeChatId: nt,
        setActiveChatId: It,
        notification: qe,
        setNotification: dt,
        closeNotification: Rt,
        addApiLog: Tr,
        ttsLogs: lt,
        clearTtsLogs: it,
        runTraceUpdateWhenOpened: (Zt) => {
          var ds;
          return (ds = Se.current) == null ? void 0 : ds.call(Se, Zt);
        },
        systemNotificationEnabled: zt,
        toggleSystemNotification: ms,
        sendSystemNotification: Cs,
        notificationStrategy: us,
        setNotificationStrategy: Rs,
        groupReplyInProgress: ii,
        fetchWeather: Io,
        fetchTime: rr,
        userPresets: c,
        addUserPreset: d,
        updateUserPreset: u,
        deleteUserPreset: f,
        globalCss: p,
        setGlobalCss: m,
        profileTheme: h,
        setProfileTheme: g,
        nightMode: x,
        setNightMode: y,
        chatAppUserFontEnabled: v,
        setChatAppUserFontEnabled: b,
        chatAppUserFontPx: N,
        setChatAppUserFontPx: w,
        beautifyCustomPresets: _,
        setBeautifyCustomPresets: A,
        beautifyCustomActiveId: k,
        setBeautifyCustomActiveId: C,
        beautifyCustomListCss: M,
        beautifyCustomProfileCss: E,
        isBeautifyCustomLoaded: S,
        themeCss: z,
        setThemeCss: O,
        getEffectiveUser: j,
        getRoleBoundUser: T,
        playTTS: ys,
        stopTTS: Vs,
        unlockAudio: pt,
        isPlaying: Ht,
        playingMessageId: is,
        isFetchingVoices: os,
        voices: as,
        models: vs,
        fetchVoices: ts,
        handleTransfer: gs,
        handleTransferAction: Ed,
        sendRedPacket: Bc,
        handleGrabRedPacket: uf,
        handleRedPacketGrabByAI: ff,
        setPaymentPassword: L,
        verifyPaymentPassword: B,
        deductFromWallet: F,
        addToWallet: D,
        callState: ps,
        startVideoCall: ar,
        acceptVideoCall: zs,
        rejectVideoCall: En,
        endVideoCall: Xl,
        addMemberToVideoCall: ef,
        toggleMinimizeCall: sa,
        toggleCallMemoryMode: wa,
        summarizeCallRecord: ia,
        deleteCallRecord: oa,
        deleteCallMessage: La,
        appendVideoCallEcho: Zn,
        consumePlaybackQueue: ja,
        sendSingleVideoCallMessage: Ei,
        regenerateSingleVideoCallReply: Li,
        reopenLastSingleVideoCallUserMessageForEdit: Ba,
        reopenLastGroupVideoCallUserMessageForEdit: Mr,
        regenerateGroupVideoCallRound: kn,
        notifyAiSignatureChange: Op,
        notifyFailedUnlockAttempt: zp,
        updateMessage: Js,
        callApi: Md,
        soundEnabled: Es,
        setSoundEnabled: nn,
        sendSoundKey: Hs,
        setSendSoundKey: cn,
        receiveSoundKey: fn,
        setReceiveSoundKey: Rn,
        clickSoundKey: Qn,
        setClickSoundKey: ra,
        clickGlowEnabled: _a,
        setClickGlowEnabled: Ya,
        clickGlowAsset: Fr,
        setClickGlowAsset: kr,
        blockedInviteRingtoneKey: ur,
        setBlockedInviteRingtoneKey: mi,
        startBlockedInviteRing: ti,
        stopBlockedInviteRing: pi,
        memes: nl,
        memeCategories: Oc,
        addMeme: kd,
        addMemes: tf,
        deleteMeme: Sd,
        deleteMemes: sf,
        updateMeme: _d,
        addMemeCategory: nf,
        deleteMemeCategory: Ad,
        addMemesToCategory: vi,
        bindCategoryToContact: Cd,
        archives: Ms,
        saveArchive: Us,
        loadArchive: bn,
        deleteArchive: en,
        bindSummaryToArchive: Gn,
        unbindSummaryFromArchive: Mn,
        unbindSummaryFromCurrentSession: la,
        removeSummaryFromArchive: Va,
        updateSummaryInArchive: za,
        updateArchiveSettings: ga,
        summarizeHistory: af,
        deleteSummary: ot,
        updateSummary: st,
        injectOpeningLines: $t,
        startWithOpening: Ft,
        addTimeAdvanceMessage: es,
        calculateTokenEstimate: gg,
        runProactiveMomentCheck: al,
        phoneCallState: As,
        setPhoneCallState: Ks,
        phoneRecents: on,
        startPhoneCall: tn,
        endPhoneCall: dn,
        handlePhoneInteraction: yn,
        regeneratePhoneReply: Ea,
        retryLastPhoneModelRound: Fn,
        regeneratePhoneRecentSummary: ha,
        savePhoneRecentSummary: Cr,
        setPhoneRecentSummaryBinding: hr,
        listenTogetherState: Rp,
        startListenTogether: Pp,
        endListenTogether: yg,
        getSpace: q,
        favorites: Lt,
        addFavorite: Qt,
        addFavorites: js,
        removeFavorite: cs,
        blockedFriendRequests: Je,
        blockedFriendRequestPopup: Be,
        addBlockedFriendRequest: yt,
        dismissBlockedFriendRequestPopup: rt,
        updateBlockedFriendRequest: ze,
        blockedPhoneCallPopup: Ln,
        finalizePhoneInviteAcceptBusyOthers: Fa,
        addBlockedPhoneCallInvite: gr,
        dismissBlockedPhoneCallPopup: po,
        rejectBlockedPhoneCallInvite: Xu,
        scheduleBlockedInvitePhoneFollowUps: va,
        scheduleProactiveVoiceInvitePickup: Bn,
        onInboundVoiceCallConnected: r ?? (() => {}),
        getNpcPool: He,
        upsertNpcPoolItem: Ie,
        deleteNpcPoolItem: Ce,
        setNpcPoolItemStatus: Re,
        updateNpcPoolWithAI: $p,
      };
    LP(tt.current, Up) && (tt.current = Up);
    const Gp = l.useMemo(
      () => ({ apiLogs: oi, clearApiLogs: Yr, addApiLog: Tr }),
      [oi, Yr, Tr],
    );
    return e.jsx(lF, {
      value: Gp,
      children: e.jsxs(KS.Provider, {
        value: tt.current,
        children: [t, e.jsx(y$, {}), e.jsx(g$, {})],
      }),
    });
  },
  Xg = new Set(),
  eb = new Set();
function FP(t) {
  const s = "couple_ledger_challenge_";
  return typeof t != "string" || !t.startsWith(s)
    ? null
    : t.slice(s.length) || null;
}
async function Bo(t, s, n) {
  if (!(!t || !s))
    try {
      const a = await be.get(t, null);
      if (!a || typeof a != "object") return;
      const r =
          a.aiCheckinDates && typeof a.aiCheckinDates == "object"
            ? a.aiCheckinDates
            : {},
        i = { ...r, [s]: { ...(r[s] || {}), ...n } },
        o = { ...a, aiCheckinDates: i };
      await be.set(t, o);
      const c = a.contactId ?? FP(t);
      typeof window < "u" &&
        c &&
        window.dispatchEvent(new CustomEvent(nd, { detail: { contactId: c } }));
    } catch {}
}
async function zP(t, s) {
  const n = await be.get(t, null);
  if (!n || typeof n != "object" || n.inviteStatus !== "accepted") return !1;
  const a =
      n.aiCheckinDates && typeof n.aiCheckinDates == "object"
        ? n.aiCheckinDates
        : {},
    r = a[s] || {};
  if (
    (r.auto && xS.has(r.auto)) ||
    (r.auto === "in_flight" &&
      typeof r.autoAt == "number" &&
      Date.now() - r.autoAt < Vh)
  )
    return !1;
  const i = { ...a, [s]: { ...r, auto: "in_flight", autoAt: Date.now() } };
  return (await be.set(t, { ...n, aiCheckinDates: i }), !0);
}
async function RP(t, s) {
  const n = await be.get(t, null);
  if (!n || typeof n != "object" || n.inviteStatus !== "accepted") return !1;
  const a =
      n.aiCheckinDates && typeof n.aiCheckinDates == "object"
        ? n.aiCheckinDates
        : {},
    r = a[s] || {};
  if (
    (r.remind && hS.has(r.remind)) ||
    (r.remind === "in_flight" &&
      typeof r.remindAt == "number" &&
      Date.now() - r.remindAt < Vh)
  )
    return !1;
  const i = { ...a, [s]: { ...r, remind: "in_flight", remindAt: Date.now() } };
  return (await be.set(t, { ...n, aiCheckinDates: i }), !0);
}
async function PP(t, s, n) {
  const a = `couple_ledger_${t}`,
    r = (await be.get(a, [])) || [];
  if (
    !Array.isArray(r) ||
    r.some((o) => o.source === "ai" && o.fromChatDay === n)
  )
    return !1;
  const i = [...s, ...r];
  return (
    await be.set(a, i),
    typeof window < "u" &&
      window.dispatchEvent(
        new CustomEvent(ih, { detail: { contactId: t, storageKey: a } }),
      ),
    !0
  );
}
async function OP(t, s, n, a, r, i, o) {
  var m, h, g;
  const { callApi: c, getRoleBoundUser: d } = o,
    f =
      (a.aiCheckinDates && typeof a.aiCheckinDates == "object"
        ? a.aiCheckinDates
        : {})[r] || {};
  if (
    (f.auto && xS.has(f.auto)) ||
    (f.auto === "in_flight" &&
      typeof f.autoAt == "number" &&
      Date.now() - f.autoAt < Vh) ||
    !s
  )
    return;
  const p = `${t.id}|auto|${r}|${i.h}|${i.m}`;
  if (!Xg.has(p)) {
    Xg.add(p);
    try {
      if (!(await zP(n, r))) return;
      const y = new Date(),
        v = y.toLocaleDateString(),
        b = pS(s, v);
      if (!b.length) {
        await Bo(n, r, { auto: "skipped_no_chat", autoAt: Date.now() });
        return;
      }
      const N = (await be.get(`couple_ledger_${t.id}`, [])) || [];
      if (
        Array.isArray(N) &&
        N.some((B) => B.source === "ai" && B.fromChatDay === v)
      ) {
        await Bo(n, r, { auto: "skipped_existing", autoAt: Date.now() });
        return;
      }
      const _ = ((d == null ? void 0 : d(t)) ?? {}).name || "我",
        A =
          (t == null ? void 0 : t.nickname) ||
          (t == null ? void 0 : t.name) ||
          "TA",
        k = b
          .map((B) => {
            const F = B.sender === "me" ? _ : A,
              D = (B.text ?? B.content ?? "").trim().slice(0, 200);
            return `${F}: ${D}`;
          })
          .join(
            `
`,
          )
          .slice(0, 3e3),
        C = `请严格遵循系统提示中的【角色人设/性格】与【世界书/世界观/记忆】设定（如有），再结合下面对话内容，生成记账。

根据以下【${v}】${_}与${A}的对话，生成【${A}（TA）】当天的记账记录。注意：生成的是 TA（${A}）自己的支出与收入，不是用户${_}的消费记录。

对话内容：
${k}

要求：必须返回纯 JSON 数组格式，不要包含任何 markdown 标记或其他文字。每条记录包含：
- amount：数字，10-500
- direction：只能是 "expense"（支出）或 "income"（收入）
- category：只能是 food/shopping/transport/entertainment/others
- note：简短可爱描述（这条记账的事由）
- productDesc：该笔消费/收入的商品或项目的一段话文字描述（1-3 句话，会展示在卡片上，与对话内容相关）
- mood：happy/excited/calm/romantic 等
- aiComment：TA（${A}）对这条自己的记账的内心想法、心声或吐槽（第一人称）。不要太短，至少 3 句话（例如 3-6 句），围绕这笔记账与对话内容展开；不要强行限制字数，但也不要只有一句话。

风格可爱、与对话内容相关，3-8 条。`;
      let M = "";
      if (typeof c == "function")
        M = await c(
          [{ role: "user", content: C }],
          t,
          "couple_ledger_from_chat",
          (s == null ? void 0 : s.settings) || {},
          [],
          [],
          [],
          !1,
          "",
          (d == null ? void 0 : d(t)) ?? null,
          null,
          null,
          { chatId: s == null ? void 0 : s.id },
        );
      else {
        const B = await be.get("phone_apiConfig");
        if (!(B != null && B.endpoint) || !(B != null && B.key)) {
          await Bo(n, r, { auto: "failed", autoAt: Date.now() });
          return;
        }
        M =
          ((g =
            (h =
              (m = (
                await (
                  await fetch(`${B.endpoint}/v1/chat/completions`, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${B.key}`,
                    },
                    body: JSON.stringify({
                      model: B.model || "gpt-3.5-turbo",
                      messages: [{ role: "user", content: C }],
                      temperature: 0.7,
                    }),
                  })
                ).json()
              ).choices) == null
                ? void 0
                : m[0]) == null
              ? void 0
              : h.message) == null
            ? void 0
            : g.content) ?? "";
      }
      let E = [];
      try {
        const B = M.match(/\[[\s\S]*\]/);
        B ? (E = JSON.parse(B[0])) : (E = JSON.parse(M));
      } catch {
        await Bo(n, r, { auto: "failed", autoAt: Date.now() });
        return;
      }
      const S = new Date(y);
      S.setHours(12, 0, 0, 0);
      const j = S.getTime(),
        T = y.toLocaleDateString(),
        I = E.map((B, F) => {
          const D = B.direction === "income" ? "income" : "expense";
          return mS({
            id: Date.now() + F + Math.random(),
            amount: Number(B.amount) || 0,
            direction: D,
            payer: "ai",
            category: _F.includes(B.category) ? B.category : "others",
            note: B.note,
            productDesc:
              typeof B.productDesc == "string" ? B.productDesc.trim() : void 0,
            date: j - F * 1e3 * 60 * 30,
            mood: B.mood || "happy",
            source: "ai",
            aiComment: B.aiComment,
            rotation: Math.random() * 6 - 3,
            fromChatDay: T,
            createdAt: j,
            updatedAt: j,
          });
        });
      (await PP(t.id, I, T))
        ? await Bo(n, r, { auto: "success", autoAt: Date.now() })
        : await Bo(n, r, { auto: "failed", autoAt: Date.now() });
    } catch {
      await Bo(n, r, { auto: "failed", autoAt: Date.now() });
    } finally {
      Xg.delete(p);
    }
  }
}
async function BP(t, s, n, a, r, i, o) {
  var h, g, x;
  const { callApi: c, getRoleBoundUser: d, receiveMessage: u } = o,
    p =
      (a.aiCheckinDates && typeof a.aiCheckinDates == "object"
        ? a.aiCheckinDates
        : {})[r] || {};
  if (
    (p.remind && hS.has(p.remind)) ||
    (p.remind === "in_flight" &&
      typeof p.remindAt == "number" &&
      Date.now() - p.remindAt < Vh) ||
    !s
  )
    return;
  const m = `${t.id}|remind|${r}|${i.h}|${i.m}`;
  if (!eb.has(m)) {
    eb.add(m);
    try {
      if (!(await RP(n, r))) return;
      const b = ((d == null ? void 0 : d(t)) ?? {}).name || "我",
        w = `请严格遵循系统提示中的【角色人设/性格】与【世界书/世界观/记忆】设定（如有）。用第一人称（你是${(t == null ? void 0 : t.nickname) || (t == null ? void 0 : t.name) || "TA"}）写一条极短聊天消息，温柔提醒对方「${b}」：今天的一起记账打卡到提醒时间啦，可以一起打开情侣空间手账记一笔，或聊聊今天的小开销。不要 markdown、不要括号动作说明，30–55 字，口语化，可直接发出。`;
      let _ = "";
      if (typeof c == "function")
        _ = await c(
          [{ role: "user", content: w }],
          t,
          "couple_ledger_remind",
          (s == null ? void 0 : s.settings) || {},
          [],
          [],
          [],
          !1,
          "",
          (d == null ? void 0 : d(t)) ?? null,
          null,
          null,
          { chatId: s == null ? void 0 : s.id },
        );
      else {
        const k = await be.get("phone_apiConfig");
        if (!(k != null && k.endpoint) || !(k != null && k.key)) {
          await Bo(n, r, { remind: "failed", remindAt: Date.now() });
          return;
        }
        _ =
          ((x =
            (g =
              (h = (
                await (
                  await fetch(`${k.endpoint}/v1/chat/completions`, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${k.key}`,
                    },
                    body: JSON.stringify({
                      model: k.model || "gpt-3.5-turbo",
                      messages: [{ role: "user", content: w }],
                      temperature: 0.85,
                    }),
                  })
                ).json()
              ).choices) == null
                ? void 0
                : h[0]) == null
              ? void 0
              : g.message) == null
            ? void 0
            : x.content) ?? "";
      }
      const A = String(_ || "")
        .replace(/```[\s\S]*?```/g, "")
        .replace(/\[[^\]]+\]/g, "")
        .trim()
        .slice(0, 200);
      if (!A) {
        await Bo(n, r, { remind: "failed", remindAt: Date.now() });
        return;
      }
      (typeof u == "function" && (await u(s.id, A)),
        await Bo(n, r, { remind: "success", remindAt: Date.now() }));
    } catch {
      await Bo(n, r, { remind: "failed", remindAt: Date.now() });
    } finally {
      eb.delete(m);
    }
  }
}
async function UP(t, s, n) {
  const a = Array.isArray(t) ? t : [],
    r = Array.isArray(s) ? s : [],
    i = new Date();
  for (const o of a) {
    if (!(o != null && o.id)) continue;
    const c = `couple_ledger_challenge_${o.id}`,
      d = await be.get(c, null);
    if (
      !d ||
      typeof d != "object" ||
      d.inviteStatus !== "accepted" ||
      !AF(d.startedAt, d.totalDays)
    )
      continue;
    const u = bv(i);
    if (!u) continue;
    const f = r.find((h) => h.contactId === o.id),
      p = e1(d.autoTime || "");
    p &&
      i.getHours() === p.h &&
      i.getMinutes() === p.m &&
      (await OP(o, f, c, d, u, p, n));
    const m = e1(d.remindTime || "");
    m &&
      i.getHours() === m.h &&
      i.getMinutes() === m.m &&
      (await BP(o, f, c, d, u, m, n));
  }
}
function GP() {
  const {
      contactsPublic: t,
      chats: s,
      callApi: n,
      getRoleBoundUser: a,
      receiveMessage: r,
    } = vn(),
    i = t,
    o = l.useRef({}),
    [c, d] = l.useState(!1);
  return (
    (o.current = {
      contacts: i || [],
      chats: s || [],
      callApi: n,
      getRoleBoundUser: a,
      receiveMessage: r,
    }),
    l.useEffect(() => {
      let u = !1;
      const f = async () => {
        const m = Array.isArray(i) ? i : [];
        if (m.length === 0) {
          u || d(!1);
          return;
        }
        let h = !1;
        for (const g of m) {
          if (!(g != null && g.id)) continue;
          const x = await be.get(`couple_ledger_challenge_${g.id}`, null);
          if (!x || typeof x != "object" || x.inviteStatus !== "accepted")
            continue;
          const y = /^\d{1,2}:\d{2}$/.test(String(x.autoTime || "").trim()),
            v = /^\d{1,2}:\d{2}$/.test(String(x.remindTime || "").trim());
          if (y || v) {
            h = !0;
            break;
          }
        }
        u || d(h);
      };
      f();
      const p = () => {
        f();
      };
      return (
        window.addEventListener(nd, p),
        window.addEventListener("focus", p),
        document.addEventListener("visibilitychange", p),
        () => {
          ((u = !0),
            window.removeEventListener(nd, p),
            window.removeEventListener("focus", p),
            document.removeEventListener("visibilitychange", p));
        }
      );
    }, [i]),
    l.useEffect(() => {
      if (!c) return;
      const u = () => {
          const p = o.current;
          UP(p.contacts, p.chats, p);
        },
        f = setInterval(u, 12e3);
      return (u(), () => clearInterval(f));
    }, [c]),
    null
  );
}
const HP = 24 * 60 * 60 * 1e3;
function _v(t, s = Date.now()) {
  const n = Number(t),
    a = Number(s);
  if (!Number.isFinite(n) || !Number.isFinite(a)) return 1;
  const r = new Date(n),
    i = new Date(a);
  if (Number.isNaN(r.getTime()) || Number.isNaN(i.getTime())) return 1;
  const o = new Date(r.getFullYear(), r.getMonth(), r.getDate()).getTime(),
    c = new Date(i.getFullYear(), i.getMonth(), i.getDate()).getTime(),
    d = Math.floor((c - o) / HP) + 1;
  return Math.max(1, d);
}
const WP = 4 * 60 * 1e3,
  tb = new Set();
async function YP(t, s) {
  const n = gS(t),
    a = await be.get(n, {}),
    r = a && typeof a == "object" ? a : {},
    i = r[s] || {};
  return (i == null ? void 0 : i.status) === "success" ||
    (i == null ? void 0 : i.status) === "failed" ||
    ((i == null ? void 0 : i.status) === "in_flight" &&
      typeof (i == null ? void 0 : i.at) == "number" &&
      Date.now() - i.at < WP)
    ? !1
    : ((r[s] = { status: "in_flight", at: Date.now() }),
      await be.set(n, r),
      !0);
}
async function rx(t, s, n) {
  const a = gS(t),
    r = await be.get(a, {}),
    i = r && typeof r == "object" ? r : {};
  ((i[s] = { status: n, at: Date.now() }), await be.set(a, i));
}
function VP(t) {
  const n = String(t || "").match(/\[[\s\S]*\]/);
  if (!n) return null;
  try {
    return JSON.parse(n[0]);
  } catch {
    return null;
  }
}
function fh(t) {
  return String(t) === "private" ? "private" : "daily";
}
function mh(t) {
  const s = Number(t);
  return Number.isFinite(s) ? Math.max(1, Math.min(5, Math.floor(s))) : 3;
}
function So(t) {
  return typeof t == "string" ? t.trim() : "";
}
async function JP(
  t,
  s,
  n,
  {
    dateStrForDay: a,
    monthDayStr: r,
    timeHMStr: i,
    nextSerialBase: o,
    attempt: c,
  },
) {
  const d = Su(t),
    u = Array.isArray(s) ? s : [],
    f = new Map(u.map((b) => [String(b.id), b])),
    p = Date.now();
  let m = typeof o == "number" ? o : u.length + 10,
    h = 0;
  const g = [],
    x = new Set();
  for (const b of n)
    if (!(!b || typeof b != "object")) {
      if (b.action === "create") {
        const N = fh(b.type),
          w = N === "private" ? mh(b.privacyLevel) : void 0,
          _ = So(b.title) || "无标题记录",
          A = So(b.content) || "（今日的心事正在被整理…）",
          k = `${p}-${c}-create-${h}-${Math.random().toString(36).slice(2, 8)}`,
          C = `编号.${String(m + h + 1).padStart(3, "0")}`;
        h += 1;
        const M = {
          id: k,
          serial: C,
          author: "ta",
          type: N,
          privacyLevel: w,
          date: r,
          time: i,
          title: _,
          content: A,
          source: "ai",
          fromChatDay: a,
          createdAt: p,
          updatedAt: p,
          aiEditCount: 0,
          aiLastEditedAt: null,
          aiLastEditReason: "",
        };
        (g.push(M), x.add(String(k)));
      } else if (b.action === "update") {
        const N = b.targetMemoId == null ? null : String(b.targetMemoId);
        if (!N) continue;
        const w = f.get(N);
        if (!w) continue;
        const _ = fh(b.type || w.type),
          A = _ === "private" ? mh(b.privacyLevel ?? w.privacyLevel) : void 0,
          k = So(b.title) || w.title || "无标题记录",
          C = So(b.content) || w.content || "（今日的心事正在被整理…）",
          M = Number.isFinite(Number(w.aiEditCount))
            ? Number(w.aiEditCount)
            : 0,
          E = Math.max(0, M) + 1,
          S = {
            ...w,
            type: _,
            privacyLevel: A,
            title: k,
            content: C,
            updatedAt: p,
            aiEditCount: E,
            aiLastEditedAt: p,
            aiLastEditReason: So(b.aiReason) || w.aiLastEditReason || "",
          };
        (g.push(S), x.add(String(N)));
      }
    }
  const y = u.filter((b) => !x.has(String(b == null ? void 0 : b.id))),
    v = [...g, ...y];
  return (
    await be.set(d, v),
    typeof window < "u" &&
      window.dispatchEvent(
        new CustomEvent(oh, { detail: { contactId: t, entriesKey: d } }),
      ),
    !0
  );
}
function KP({
  dateStrForDay: t,
  userName: s,
  aiName: n,
  daysTogether: a,
  contactSetting: r,
  conversationText: i,
  existingAiMemosContext: o,
  monthDayStr: c,
  timeHMStr: d,
  minCount: u = 4,
}) {
  return `你是【${n}（TA）】在情侣空间里的备忘录记录者。请在${t}这一天，基于【${s} 与 ${n}】当天聊天内容，结合【人设设定】与【已有 AI 备忘录】进行“增删改”。

【必须做到：文风/结构多样且贴合 TA】
1. 备忘录的“内容与形式”不能固定模板。每条 content 的内部结构要尽量不同；本次整体请随机选择 2~3 种写作形态（可以混合），并且要依据 TA 的性格/喜好（从【人设设定】推断）决定：
   - 结构化清单：用 1、2、3 或“她的喜好/今天发生/我在意的”分点
   - 长段日记：一口气写更长的沉浸叙述，情绪起伏明显
   - 短句碎片：多段短句、像真实人的脑内片段
   - 编号小结：可能出现 123 之类的随手分层
   - 轻对话/自问自答：以第一人称表达“我想/我怕/我在意”
2. 文风必须贴合人设：${r || "无额外设定"}
   - 如果 TA 偏简洁条理：更像“要点清单/步骤/偏好清楚”
   - 如果 TA 偏长文：更像“长段表达/连续叙事”
   - 如果 TA 偏碎片：更像“抓住细节的短语+跳跃联想”
3. 不要千篇一律：避免每条都像“同一种标题+同一种段落结构+同一种节奏”。

【人设与关系】
- 你与${s}是情侣空间里的双方：从开始日到今天一起度过 ${a} 天（可自然暗示，不要硬报数字）。
- 你必须用第一人称写心声：真实、细腻、有活人感。
- 备忘录要来自当天聊天细节的共鸣：不能逐字复述，但要“确实发生过”。

【聊天材料】
${i}

【已有 AI 备忘录（可更新，而不是硬新增）】
${o || "（空：你将只能创建）"}

【输出要求（非常重要）】
1. 你必须返回：一个 JSON 数组（仅此一项），数组长度必须 >= ${u}（允许多，但不能少于 ${u}）。
2. 数组每一项对象字段固定包含：
   - action：只能是 "create" 或 "update"
   - targetMemoId：字符串；当 action="update" 时必须填写，表示要更新的“已有备忘录 memoId”
   - type：只能是 "private" 或 "daily"（update 时建议保持与原 memo 一致）
   - title：6~24 字，像真实人类写的标题（要带具体感，但不要太鸡汤）
   - content：字数按写作形态自由变化（总体建议 70~420 字），但每条 content 必须包含至少 3 个信息片段。
   - privacyLevel：只能是 1~5（仅 private 生效；越大越私密）
   - aiReason：心声理由（2~4 句短短的吐槽/解释，必须很像活人；不要把它写进 content）
3. 本次数组中必须同时包含至少 1 条 "private" 和至少 1 条 "daily"。
4. daily 更偏“能公开的温柔/日常记录”；private 更偏“更私密、不敢轻易说出口的真实”。
5. 增删改规则（重点）：
   - 你必须阅读【已有 AI 备忘录】内容来判断“今天有没有新变化/矛盾”。
   - 如果今天聊天提到了一个与已有内容矛盾的偏好：不要硬新增一条，而是 update 相关已有 memo，并在 content 里把“被删除的旧信息片段”用 [[DEL]]旧片段[[/DEL]] 包起来。
   - 旧信息片段尽量复用原句里能对应的短语（不要硬编新的旧句）。
   - 如果是新增偏好：直接把新增信息写进 content（不需要 [[DEL]]）。
   - 可以“既新增又删除”同一条 memo（像真人反复改备忘录一样）。
6. 不要 markdown，不要解释，不要在 JSON 外输出任何文字。

【额外提示】
- 所有新增条目都归到同一天：日期 ${c}，时间 ${d}（可在 content 里自然提到生活化表达，不需要字段里写日期时间）。
- 注意：update 更新已有 memo 时，不要试图改变它的 memoId（targetMemoId 就是 memoId），你只需给出更新后的 title/content/心声理由。`;
}
async function qP({ contact: t, chat: s, deps: n, now: a }) {
  const {
      callApi: r,
      getRoleBoundUser: i,
      getSpace: o,
      sendSystemMessage: c,
    } = n,
    d = yv(t.id),
    u = await be.get(d, null);
  if (!u || typeof u != "object") return;
  const f = e1((u == null ? void 0 : u.timeHM) || "");
  if (!f) return;
  const p = (() => {
      const g = Math.floor(Number((u == null ? void 0 : u.retryCount) ?? 1));
      return Number.isFinite(g) ? Math.max(1, Math.min(5, g)) : 1;
    })(),
    m = bv(a);
  if (!m) return;
  const h = `${t.id}|${m}|${f.h}|${f.m}`;
  if (!tb.has(h)) {
    tb.add(h);
    try {
      if (
        !(a.getHours() === f.h && a.getMinutes() === f.m) ||
        !(await YP(t.id, m))
      )
        return;
      const y = s || null,
        v = a.toLocaleDateString(),
        b = pS(y, v);
      if (!b.length) {
        await rx(t.id, m, "skipped_no_chat");
        return;
      }
      const N = (o == null ? void 0 : o(t.id)) ?? null,
        w = (N == null ? void 0 : N.startDate) ?? null,
        _ = _v(w),
        A = (i == null ? void 0 : i(t)) ?? {},
        k =
          (A == null ? void 0 : A.name) ||
          (A == null ? void 0 : A.realName) ||
          "我",
        C =
          (t == null ? void 0 : t.nickname) ||
          (t == null ? void 0 : t.name) ||
          "TA",
        M =
          (t == null ? void 0 : t.setting) ||
          (t == null ? void 0 : t.profile) ||
          "",
        E = b
          .map((z) => {
            const O = z.sender === "me" ? k : C,
              Z = So(z.text ?? z.content) || "";
            return Z ? `${O}: ${Z.slice(0, 200).replace(/\s+/g, " ")}` : "";
          })
          .filter(Boolean)
          .join(
            `
`,
          )
          .slice(0, 3e3),
        S = CF(a),
        j = MF(a),
        T = Su(t.id),
        I = (await be.get(T, [])) || [],
        B = (
          Array.isArray(I)
            ? I.filter(
                (z) =>
                  (z == null ? void 0 : z.author) === "ta" &&
                  (z == null ? void 0 : z.source) === "ai" &&
                  typeof (z == null ? void 0 : z.id) < "u",
              )
            : []
        )
          .slice()
          .sort((z, O) => {
            const Z = Number(
              (z == null ? void 0 : z.aiLastEditedAt) ??
                (z == null ? void 0 : z.updatedAt) ??
                (z == null ? void 0 : z.createdAt) ??
                0,
            );
            return (
              Number(
                (O == null ? void 0 : O.aiLastEditedAt) ??
                  (O == null ? void 0 : O.updatedAt) ??
                  (O == null ? void 0 : O.createdAt) ??
                  0,
              ) - Z
            );
          })
          .slice(0, 10),
        F = B.length
          ? B.map((z) => {
              const O = String((z == null ? void 0 : z.content) || "").trim(),
                Z = O.length > 420 ? O.slice(0, 420) + "…" : O,
                K = Number.isFinite(Number(z == null ? void 0 : z.aiEditCount))
                  ? Number(z.aiEditCount)
                  : 0;
              return `- memoId:${String(z.id)} serial:${String(z.serial || "")} type:${z.type || ""} privacyLevel:${z.privacyLevel ?? ""}
  title:${String(z.title || "").trim()}
  content:${Z}
  aiEditCount:${K}`;
            }).join(`
`)
          : "",
        D = KP({
          dateStrForDay: v,
          userName: k,
          aiName: C,
          daysTogether: _,
          contactSetting: M,
          conversationText: E,
          existingAiMemosContext: F,
          monthDayStr: S,
          timeHMStr: j,
          minCount: 4,
        }),
        P = (Array.isArray(I) ? I.length : 0) + 10;
      for (let z = 0; z < p; z++) {
        let O = "";
        try {
          typeof r == "function" &&
            (O = await r(
              [{ role: "user", content: D }],
              t,
              "couple_memo_from_chat",
              (s == null ? void 0 : s.settings) || {},
              [],
              [],
              [],
              !1,
              "",
              (i == null ? void 0 : i(t)) ?? null,
              null,
              null,
              { chatId: s == null ? void 0 : s.id },
            ));
        } catch {
          O = "";
        }
        const Z = VP(O),
          K = Array.isArray(Z) ? Z : null;
        if (!K || !Array.isArray(K) || K.length < 4) continue;
        const q = new Map(
            (Array.isArray(I) ? I : []).map((je) => [
              String(je == null ? void 0 : je.id),
              je,
            ]),
          ),
          V = new Set(),
          ne = [];
        let le = !1,
          ie = !1;
        for (let je = 0; je < Math.min(18, K.length); je++) {
          const xe = K[je];
          if (!xe || typeof xe != "object") continue;
          const ye = xe.action || (xe.type && xe.content ? "create" : void 0);
          if (ye === "create") {
            const R = fh(xe.type),
              oe = R === "private" ? mh(xe.privacyLevel) : void 0,
              ee = So(xe.title) || "无标题记录",
              H = So(xe.content),
              Y = So(xe.aiReason);
            if (!H || H.length < 50) continue;
            (ne.push({
              action: "create",
              type: R,
              privacyLevel: oe,
              title: ee,
              content: H,
              aiReason: Y,
            }),
              R === "private" && (le = !0),
              R === "daily" && (ie = !0));
          } else if (ye === "update") {
            const R = xe.targetMemoId == null ? null : String(xe.targetMemoId);
            if (!R || V.has(R)) continue;
            const oe = q.get(R);
            if (!oe || oe.author !== "ta" || oe.source !== "ai") continue;
            const ee = fh(xe.type || oe.type),
              H =
                ee === "private"
                  ? mh(xe.privacyLevel ?? oe.privacyLevel)
                  : void 0,
              Y = So(xe.title) || oe.title || "无标题记录",
              U = So(xe.content),
              ce = So(xe.aiReason);
            if (!U || U.length < 50) continue;
            (ne.push({
              action: "update",
              targetMemoId: R,
              type: ee,
              privacyLevel: H,
              title: Y,
              content: U,
              aiReason: ce,
            }),
              V.add(R),
              ee === "private" && (le = !0),
              ee === "daily" && (ie = !0));
          }
        }
        if (ne && ne.length > 0) {
          if (!le && ne.some((je) => je.type === "daily")) {
            const je = ne.findIndex((xe) => xe.type === "daily");
            je >= 0 &&
              ((ne[je] = {
                ...ne[je],
                type: "private",
                privacyLevel: ne[je].privacyLevel ?? 3,
              }),
              (le = !0));
          }
          if (!ie && ne.some((je) => je.type === "private")) {
            const je = ne.findIndex((xe) => xe.type === "private");
            je >= 0 &&
              ((ne[je] = { ...ne[je], type: "daily", privacyLevel: void 0 }),
              (ie = !0));
          }
        }
        if (
          !(
            !ne ||
            ne.length < 4 ||
            !le ||
            !ie ||
            !(await JP(t.id, I, ne, {
              dateStrForDay: v,
              monthDayStr: S,
              timeHMStr: j,
              nextSerialBase: P,
              attempt: z,
            }))
          )
        ) {
          (typeof c == "function" &&
            s != null &&
            s.id &&
            c(s.id, "[系统提示：TA更新了备忘录。]"),
            await rx(t.id, m, "success"));
          return;
        }
      }
      await rx(t.id, m, "failed");
    } catch {
      await rx(t.id, m, "failed");
    } finally {
      tb.delete(h);
    }
  }
}
async function QP(t, s, n) {
  var o;
  const a = Array.isArray(t) ? t : [],
    r = Array.isArray(s) ? s : [],
    i = new Date();
  for (const c of a) {
    if (!(c != null && c.id)) continue;
    const d =
      ((o = n == null ? void 0 : n.getSpace) == null
        ? void 0
        : o.call(n, c.id)) ?? null;
    if (!d || d.status !== "active") continue;
    const u = r.find((f) => f.contactId === c.id) || null;
    await qP({ contact: c, chat: u, deps: n, now: i });
  }
}
function ZP() {
  const {
      contactsPublic: t,
      chats: s,
      callApi: n,
      getRoleBoundUser: a,
      getSpace: r,
      sendSystemMessage: i,
    } = vn(),
    o = t,
    c = l.useRef({}),
    [d, u] = l.useState(!1);
  return (
    (c.current = {
      contacts: o || [],
      chats: s || [],
      callApi: n,
      getRoleBoundUser: a,
      getSpace: r,
      sendSystemMessage: i,
    }),
    l.useEffect(() => {
      let f = !1;
      const p = async () => {
        const h = Array.isArray(o) ? o : [];
        if (h.length === 0) {
          f || u(!1);
          return;
        }
        const g = h.filter((y) => {
          var v;
          return (
            (y == null ? void 0 : y.id) &&
            ((v = r == null ? void 0 : r(y.id)) == null ? void 0 : v.status) ===
              "active"
          );
        });
        if (g.length === 0) {
          f || u(!1);
          return;
        }
        let x = !1;
        for (const y of g) {
          const v = await be.get(yv(y.id), null),
            b = String((v == null ? void 0 : v.timeHM) || "").trim();
          if (/^\d{1,2}:\d{2}$/.test(b)) {
            x = !0;
            break;
          }
        }
        f || u(x);
      };
      p();
      const m = () => {
        p();
      };
      return (
        window.addEventListener(t1, m),
        window.addEventListener("focus", m),
        document.addEventListener("visibilitychange", m),
        () => {
          ((f = !0),
            window.removeEventListener(t1, m),
            window.removeEventListener("focus", m),
            document.removeEventListener("visibilitychange", m));
        }
      );
    }, [o, r]),
    l.useEffect(() => {
      if (!d) return;
      const f = () => {
          const m = c.current;
          QP(m.contacts, m.chats, m);
        },
        p = setInterval(f, 12e3);
      return (f(), () => clearInterval(p));
    }, [d]),
    null
  );
}
const XP = 5,
  eO = 2e4,
  wj = 60 * 1e3,
  tO = 10 * 60 * 1e3;
function sO() {
  const {
      contactsPublic: t,
      chats: s,
      triggerAiReply: n,
      createChat: a,
      getSpace: r,
    } = vn(),
    i = t,
    o = l.useRef({}),
    c = l.useRef(!1),
    [d, u] = l.useState(!1);
  return (
    (o.current = {
      contacts: i || [],
      chats: s || [],
      triggerAiReply: n,
      createChat: a,
      getSpace: r,
    }),
    l.useEffect(() => {
      let f = !1;
      const p = async () => {
        const h = Array.isArray(i) ? i : [];
        if (h.length === 0) {
          f || u(!1);
          return;
        }
        const g = h.filter((y) => {
          var v;
          return (
            (y == null ? void 0 : y.id) &&
            ((v = r == null ? void 0 : r(y.id)) == null ? void 0 : v.status) ===
              "active"
          );
        });
        if (g.length === 0) {
          f || u(!1);
          return;
        }
        let x = !1;
        for (const y of g) {
          const v = await be.get(`couple_memo_ai_comment_pending_${y.id}`, []);
          if (Array.isArray(v) && v.length > 0) {
            x = !0;
            break;
          }
        }
        f || u(x);
      };
      p();
      const m = () => {
        p();
      };
      return (
        window.addEventListener(lh, m),
        window.addEventListener("focus", m),
        document.addEventListener("visibilitychange", m),
        () => {
          ((f = !0),
            window.removeEventListener(lh, m),
            window.removeEventListener("focus", m),
            document.removeEventListener("visibilitychange", m));
        }
      );
    }, [i, r]),
    l.useEffect(() => {
      if (!d) return;
      const f = async () => {
          var x;
          if (c.current) return;
          c.current = !0;
          const m = o.current,
            g = bv(new Date());
          if (!Array.isArray(m.contacts) || m.contacts.length === 0) {
            c.current = !1;
            return;
          }
          try {
            for (const y of m.contacts) {
              const v = y == null ? void 0 : y.id;
              if (!v) continue;
              const b =
                ((x = m.getSpace) == null ? void 0 : x.call(m, v)) ?? null;
              if (!b || b.status !== "active") continue;
              const N = `couple_memo_ai_comment_pending_${v}`,
                w = `couple_memo_ai_comment_inflight_${v}`,
                _ = `couple_memo_ai_comment_pending_last_updated_${v}`,
                A = `couple_memo_ta_view_min_interval_ms_${v}`,
                k = `couple_memo_ai_comment_budget_${v}`,
                C = `couple_memo_ai_comment_usage_${v}`,
                M = `couple_memo_ai_comment_retry_limit_${v}`,
                E = `couple_memo_ai_comment_retry_${v}`,
                S = await be.get(N, []),
                j = Array.isArray(S) ? S : [];
              if (j.length === 0) continue;
              const T = await be.get(_, 0),
                I = typeof T == "number" ? T : 0,
                L = await be.get(A, wj),
                B = Number.isFinite(Number(L))
                  ? Math.max(0, Math.floor(Number(L)))
                  : wj;
              if (I > 0 && Date.now() - I < B) continue;
              const F = await be.get(w, null),
                D =
                  typeof (F == null ? void 0 : F.startedAt) == "number"
                    ? F.startedAt
                    : 0,
                $ = Array.isArray(F == null ? void 0 : F.memoIds)
                  ? F.memoIds
                  : [];
              if ($.length > 0 && Date.now() - D < tO) continue;
              if ($.length > 0) {
                const je = await be.get(M, 2),
                  xe = Number.isFinite(Number(je))
                    ? Math.max(0, Math.min(10, Math.floor(Number(je))))
                    : 2,
                  ye = await be.get(E, {}),
                  oe = { ...(ye && typeof ye == "object" ? ye : {}) },
                  ee = await be.get(N, []),
                  H = Array.isArray(ee) ? ee : [],
                  Y = new Set();
                for (const ce of $) {
                  const pe = String(ce),
                    Te =
                      (Number.isFinite(Number(oe == null ? void 0 : oe[pe]))
                        ? Number(oe[pe])
                        : 0) + 1;
                  ((oe[pe] = Te), (xe <= 0 || Te >= xe) && Y.add(pe));
                }
                const U = H.filter((ce) => !Y.has(String(ce)));
                (await be.set(E, oe).catch(() => {}),
                  await be.set(N, U).catch(() => {}),
                  await be.remove(w).catch(() => {}));
              }
              const z = await be.get(k, 2),
                O = Math.max(0, Math.min(20, Math.floor(Number(z))));
              if (!Number.isFinite(O) || O <= 0) continue;
              const Z = await be.get(C, {}),
                K = Z != null && Z[g] && typeof Z[g] == "object" ? Z[g] : {},
                q = Number.isFinite(K == null ? void 0 : K.used)
                  ? Number(K.used)
                  : 0;
              if (q >= O) continue;
              const V = j.slice(0, XP);
              if (V.length === 0) continue;
              const ne = `${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
              await be.set(w, {
                batchId: ne,
                memoIds: V,
                startedAt: Date.now(),
              });
              const le = { ...(Z && typeof Z == "object" ? Z : {}) };
              ((le[g] = { ...(K || {}), used: q + 1, updatedAt: Date.now() }),
                await be.set(C, le));
              const ie = Array.isArray(m.chats)
                ? m.chats.find((je) => je.contactId === v)
                : null;
              let X = (ie == null ? void 0 : ie.id) ?? null;
              if (!X && typeof m.createChat == "function")
                try {
                  X = m.createChat(v) || null;
                } catch {
                  X = null;
                }
              X &&
                typeof m.triggerAiReply == "function" &&
                setTimeout(() => m.triggerAiReply(X), 600);
            }
          } finally {
            c.current = !1;
          }
        },
        p = setInterval(() => {
          f();
        }, eO);
      return (f(), () => clearInterval(p));
    }, [d]),
    null
  );
}
const qS = l.createContext(null),
  Bu = () => {
    const t = l.useContext(qS);
    if (t == null)
      throw new Error(
        "useCoupleSpace 须在 CoupleSpaceProvider 内使用；请确认 App.jsx 中 ChatProvider 已包裹 <CoupleSpaceProvider>。",
      );
    return t;
  },
  ix = "couple_space_updated",
  nO = () => `preset_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
  aO = ({ children: t }) => {
    const [s, n, a] = Yn("couple_spaces", {}),
      [r, i, o] = Yn("couple_space_cabin_presets", []),
      [c, d] = l.useState(null),
      u = l.useRef(!1);
    (l.useEffect(() => {
      const A = (k) => {
        var C;
        (C = k.detail) != null &&
          C.spaces &&
          typeof k.detail.spaces == "object" &&
          n(k.detail.spaces);
      };
      return (
        window.addEventListener(ix, A),
        () => window.removeEventListener(ix, A)
      );
    }, []),
      l.useEffect(() => {
        const A = (k) => {
          var M;
          const C = String(
            ((M = k.detail) == null ? void 0 : M.contactId) || "",
          );
          C &&
            (n((E) => {
              const S = E && typeof E == "object" ? E : {};
              if (S[C] === void 0) return E;
              const j = { ...S };
              return (delete j[C], j);
            }),
            d((E) => (String(E) === C ? null : E)));
        };
        return (
          window.addEventListener(Jl, A),
          () => window.removeEventListener(Jl, A)
        );
      }, []),
      l.useEffect(() => {
        if (u.current || !a || !o) return;
        u.current = !0;
        let A = !1;
        const k = { ...s };
        for (const [C, M] of Object.entries(k))
          if (!(!M || typeof M != "object") && "furnitureLayout" in M) {
            const E = { ...M, furnitureLayout: [] };
            (!Array.isArray(M.furnitureLayout) ||
              M.furnitureLayout.length > 0) &&
              ((k[C] = E), (A = !0));
          }
        (A && n(k),
          Array.isArray(r) && r.length > 0
            ? i([])
            : Array.isArray(r) &&
              r.length === 0 &&
              be.remove("couple_space_cabin_presets").catch(() => {}));
      }, [a, o, s, r]));
    const f = (A) => s[A] || null,
      p = (A) => {
        n((k) => ({
          ...k,
          [A]: { status: "pending", createdAt: Date.now(), invitationSent: !0 },
        }));
      },
      m = (A) => {
        n((k) => {
          const C = k[A] || {},
            M = Number(C.startDate),
            E = Number.isFinite(M) && M > 0 ? M : Date.now();
          return {
            ...k,
            [A]: {
              ...C,
              status: "active",
              startDate: E,
              connectedAt: Date.now(),
              coverImage: null,
              dailyMessage: "Love is in the air",
              lastHeartbeat: null,
              furnitureLayout: [],
            },
          };
        });
      },
      h = (A, k) => {
        n((C) => ({ ...C, [A]: { ...C[A], furnitureLayout: k } }));
      },
      g = (A, k) => {
        n((C) => {
          const M = { ...C, [A]: { ...(C[A] || {}), ...k } };
          return (
            queueMicrotask(() => {
              window.dispatchEvent(
                new CustomEvent(ix, { detail: { spaces: M } }),
              );
            }),
            M
          );
        });
      },
      x = (A) => {
        n((k) => {
          const C = { ...k };
          return (
            delete C[A],
            queueMicrotask(() => {
              window.dispatchEvent(
                new CustomEvent(ix, { detail: { spaces: C } }),
              );
            }),
            C
          );
        });
      },
      y = (A) => {
        g(A, { lastHeartbeat: Date.now() });
      },
      v = () => r,
      b = (A, k) => {
        const C = {
          id: nO(),
          name: A || `预设 ${new Date().toLocaleDateString()}`,
          createdAt: Date.now(),
          layout: Array.isArray(k) ? k.map((M) => ({ ...M })) : [],
        };
        return (i((M) => [...M, C]), C.id);
      },
      N = (A, k) => {
        const C = r.find((M) => M.id === k);
        return !C || !A
          ? !1
          : (h(
              A,
              C.layout.map((M) => ({ ...M })),
            ),
            !0);
      },
      w = (A) => {
        i((k) => k.filter((C) => C.id !== A));
      },
      _ = (A) => r.find((k) => k.id === A);
    return e.jsx(qS.Provider, {
      value: {
        spaces: s,
        isLoaded: a,
        getSpace: f,
        createSpace: p,
        confirmSpace: m,
        updateSpace: g,
        updateFurnitureLayout: h,
        deleteSpace: x,
        activeSpaceId: c,
        setActiveSpaceId: d,
        sendHeartbeat: y,
        presets: r,
        isPresetsLoaded: o,
        getPresets: v,
        savePreset: b,
        applyPreset: N,
        deletePreset: w,
        getPresetById: _,
      },
      children: t,
    });
  },
  Xm = "ai-leting-play-request",
  ep = "ai-leting-player-update",
  bm = "ai-leting-pause-request",
  Uu = ({ text: t, className: s }) => {
    const n = l.useRef(null),
      a = l.useRef(null),
      [r, i] = l.useState(!1),
      [o, c] = l.useState(0),
      [d, u] = l.useState(0);
    return (
      l.useEffect(() => {
        if (n.current && a.current) {
          const f = n.current.clientWidth,
            p = a.current.scrollWidth;
          (c(f), u(p), i(p > f));
        }
      }, [t]),
      e.jsx("div", {
        ref: n,
        className: "w-full overflow-hidden relative flex items-center",
        children: e.jsx(We.div, {
          ref: a,
          className: `whitespace-nowrap ${s}`,
          animate: r ? { x: [0, -d + o, 0] } : { x: 0 },
          transition: r
            ? {
                duration: Math.max(5, t.length * 0.2),
                repeat: 1 / 0,
                ease: "linear",
                repeatDelay: 2,
              }
            : {},
          children: t,
        }),
      })
    );
  },
  rO = ({ text: t, songInfo: s, isHovered: n, onClose: a }) =>
    e.jsx("div", {
      className:
        "relative p-1 bg-neutral-200/50 backdrop-blur-sm shadow-2xl w-[520px]",
      children: e.jsxs("div", {
        className: `relative p-8 bg-white border border-neutral-300 transition-all duration-700 ${n ? "p-10" : ""}`,
        children: [
          e.jsxs("div", {
            className: "flex justify-between items-start mb-6",
            children: [
              e.jsxs("div", {
                className: "flex flex-col items-start",
                children: [
                  e.jsx("span", {
                    className:
                      "text-[9px] font-mono text-neutral-400 tracking-tighter",
                    children: "EST. 2024 / SEOUL",
                  }),
                  e.jsx("span", {
                    className: "text-[11px] font-serif italic text-neutral-800",
                    children: "No. 05 Ethereal",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: `flex gap-3 text-neutral-300 transition-opacity ${n ? "opacity-100" : "opacity-0"}`,
                children: [e.jsx(lr, { size: 12 }), e.jsx(Co, { size: 12 })],
              }),
            ],
          }),
          e.jsx("div", {
            className: "py-2",
            children: e.jsx(Uu, {
              text: t || (s == null ? void 0 : s.title) || "Music",
              className:
                "text-2xl font-serif text-neutral-800 tracking-tight leading-loose",
            }),
          }),
          e.jsxs("div", {
            className:
              "mt-8 pt-4 border-t border-neutral-100 flex justify-between items-end",
            children: [
              e.jsxs("div", {
                className: "space-y-1 text-left",
                children: [
                  e.jsx("p", {
                    className:
                      "text-[8px] text-neutral-400 tracking-widest uppercase",
                    children: "Mood Profile",
                  }),
                  e.jsxs("div", {
                    className: "flex gap-2",
                    children: [
                      e.jsx(p3, { size: 12, className: "text-neutral-300" }),
                      e.jsx($h, { size: 12, className: "text-neutral-300" }),
                    ],
                  }),
                ],
              }),
              e.jsx("div", {
                className: "text-right",
                children: e.jsx("p", {
                  className: "text-[10px] font-serif italic text-neutral-500",
                  children: (s == null ? void 0 : s.artist) || "Autumn Echoes",
                }),
              }),
            ],
          }),
          e.jsx(Os, {
            children:
              n &&
              e.jsx(We.button, {
                initial: { opacity: 0, scale: 0.8 },
                animate: { opacity: 1, scale: 1 },
                exit: { opacity: 0, scale: 0.8 },
                onClick: (r) => {
                  (r.stopPropagation(), a());
                },
                onPointerDown: (r) => r.stopPropagation(),
                className:
                  "absolute -top-3 -right-3 w-6 h-6 bg-neutral-800 text-white rounded-full flex items-center justify-center shadow-md transition-colors hover:bg-black z-50",
                children: e.jsx(Ts, { size: 12 }),
              }),
          }),
        ],
      }),
    }),
  iO = ({ text: t, songInfo: s, isHovered: n, onClose: a, isPlaying: r }) =>
    e.jsxs("div", {
      className:
        "relative py-16 px-12 flex items-center justify-center w-[580px] overflow-hidden rounded-3xl",
      children: [
        e.jsxs("div", {
          className: `absolute inset-0 transition-opacity duration-1000 ${n ? "opacity-100" : "opacity-60"}`,
          children: [
            e.jsx("div", {
              className:
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[150px] bg-indigo-100 blur-[80px] rounded-full animate-pulse",
            }),
            e.jsx("div", {
              className:
                "absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[100px] bg-orange-50 blur-[60px] rounded-full animate-pulse",
            }),
          ],
        }),
        e.jsxs("div", {
          className: "relative z-10 text-center w-full",
          children: [
            e.jsx("div", {
              className: `w-8 h-[1px] bg-neutral-300 mx-auto mb-4 transition-all duration-1000 ${n ? "w-24" : "w-8"}`,
            }),
            e.jsx(Uu, {
              text: t || (s == null ? void 0 : s.title) || "Music",
              className:
                "text-3xl font-extralight text-neutral-800 tracking-[0.2em] leading-relaxed drop-shadow-sm text-center",
            }),
            e.jsx("p", {
              className:
                "text-[10px] text-neutral-400 tracking-[0.4em] uppercase font-light mt-4",
              children: (s == null ? void 0 : s.artist) || "Atmosphere",
            }),
          ],
        }),
        e.jsx(Os, {
          children:
            n &&
            e.jsx(We.button, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              onClick: (i) => {
                (i.stopPropagation(), a());
              },
              onPointerDown: (i) => i.stopPropagation(),
              className:
                "absolute right-6 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-800 transition-colors z-50",
              children: e.jsx(Ts, { size: 16 }),
            }),
        }),
      ],
    }),
  oO = ({ text: t, songInfo: s, isHovered: n, onClose: a, isPlaying: r }) => {
    const [i, o] = l.useState(0);
    return (
      l.useEffect(() => {
        if (!r) return;
        const c = setInterval(() => {
          o((d) => (d + 1) % 100);
        }, 100);
        return () => clearInterval(c);
      }, [r]),
      e.jsxs("div", {
        className: "relative p-12 group w-[600px]",
        children: [
          e.jsx("div", {
            className:
              "absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] border-[0.5px] border-neutral-300/30 rounded-full pointer-events-none",
          }),
          e.jsx("svg", {
            className:
              "absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] -rotate-90 pointer-events-none",
            children: e.jsx("circle", {
              cx: "150",
              cy: "150",
              r: "149",
              fill: "none",
              stroke: "#404040",
              strokeWidth: "1.5",
              strokeDasharray: "936",
              strokeDashoffset: 936 - (936 * i) / 100,
              className: "transition-all duration-300 ease-linear opacity-20",
            }),
          }),
          e.jsxs("div", {
            className: "relative pl-12 flex flex-col items-start gap-4",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-4 opacity-30",
                children: [
                  e.jsx(l3, { size: 14, className: r ? "animate-pulse" : "" }),
                  e.jsx("span", {
                    className: "text-[10px] tracking-[0.5em] font-light",
                    children: "BROADCASTING",
                  }),
                ],
              }),
              e.jsx("div", {
                className: "w-full overflow-hidden",
                children: e.jsx(Uu, {
                  text: t || (s == null ? void 0 : s.title) || "Music",
                  className:
                    "text-4xl font-light text-neutral-800 tracking-tight transition-all duration-1000 transform group-hover:translate-x-2",
                }),
              }),
              e.jsxs("div", {
                className: "flex items-center gap-6 mt-4",
                children: [
                  e.jsx("span", {
                    className: "text-[10px] text-neutral-400",
                    children: "01",
                  }),
                  e.jsx("div", {
                    className: "flex gap-1",
                    children: [...Array(5)].map((c, d) =>
                      e.jsx(
                        "div",
                        {
                          className: `w-1 h-1 rounded-full ${d === 0 ? "bg-neutral-800" : "bg-neutral-200"}`,
                        },
                        d,
                      ),
                    ),
                  }),
                  e.jsx(ea, {
                    size: 12,
                    className: `text-neutral-400 cursor-pointer transition-all ${n ? "opacity-100 rotate-90" : "opacity-0"}`,
                  }),
                ],
              }),
            ],
          }),
          e.jsx(Os, {
            children:
              n &&
              e.jsx(We.button, {
                initial: { opacity: 0, scale: 0.8, rotate: -90 },
                animate: { opacity: 1, scale: 1, rotate: 0 },
                exit: { opacity: 0, scale: 0.8, rotate: 90 },
                onClick: (c) => {
                  (c.stopPropagation(), a());
                },
                onPointerDown: (c) => c.stopPropagation(),
                className:
                  "absolute top-4 right-4 w-6 h-6 bg-neutral-800 text-white rounded-full flex items-center justify-center shadow-sm hover:bg-black transition-colors z-50",
                children: e.jsx(Ts, { size: 12 }),
              }),
          }),
        ],
      })
    );
  },
  lO = ({ text: t, songInfo: s, isHovered: n, onClose: a, isPlaying: r }) => {
    const [i, o] = l.useState(0);
    return (
      l.useEffect(() => {
        if (!r) return;
        const c = setInterval(() => {
          o((d) => (d + 0.5) % 100);
        }, 50);
        return () => clearInterval(c);
      }, [r]),
      e.jsxs("div", {
        className:
          "relative group p-10 bg-white/40 backdrop-blur-xl border border-white/50 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] rounded-[2px] w-[600px]",
        children: [
          e.jsxs("div", {
            className: "flex gap-10 items-center",
            children: [
              e.jsxs("div", {
                className: "relative flex-shrink-0",
                children: [
                  e.jsx("div", {
                    className: `w-32 h-32 rounded-full border border-neutral-200 p-1 transition-transform duration-[5s] linear ${r ? "rotate-180" : "rotate-0"}`,
                    children: e.jsxs("div", {
                      className:
                        "w-full h-full rounded-full bg-[#F5F5F3] flex items-center justify-center relative overflow-hidden",
                      children: [
                        e.jsx("div", {
                          className:
                            "w-8 h-8 rounded-full border border-neutral-200 bg-white z-10",
                        }),
                        e.jsx(bp, {
                          size: 60,
                          className: "text-neutral-100 absolute rotate-45",
                        }),
                        e.jsx("svg", {
                          className:
                            "absolute inset-0 w-full h-full -rotate-90",
                          children: e.jsx("circle", {
                            cx: "64",
                            cy: "64",
                            r: "62",
                            fill: "none",
                            stroke: "#A3A3A3",
                            strokeWidth: "1",
                            strokeDasharray: "390",
                            strokeDashoffset: 390 - (390 * i) / 100,
                            className: "opacity-40",
                          }),
                        }),
                      ],
                    }),
                  }),
                  e.jsx("div", {
                    className:
                      "absolute -top-2 -right-2 p-1 bg-white rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity",
                    children: e.jsx(Co, {
                      size: 10,
                      className: "text-neutral-400",
                    }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex-grow space-y-4 w-full overflow-hidden",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      e.jsx("span", {
                        className:
                          "text-[10px] font-mono tracking-widest text-neutral-400",
                        children: "ARCHIVE / NO. 01",
                      }),
                      e.jsx("div", {
                        className: "h-[0.5px] flex-grow bg-neutral-200",
                      }),
                    ],
                  }),
                  e.jsx(Uu, {
                    text: t || (s == null ? void 0 : s.title) || "Music",
                    className:
                      "text-3xl font-serif text-neutral-800 tracking-tight leading-snug",
                  }),
                  e.jsxs("div", {
                    className: "flex justify-between items-end opacity-40",
                    children: [
                      e.jsx("p", {
                        className: "text-[10px] italic font-serif",
                        children: (s == null ? void 0 : s.artist) || "歌手",
                      }),
                      e.jsx(lr, { size: 12 }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsx(Os, {
            children:
              n &&
              e.jsx(We.button, {
                initial: { opacity: 0, scale: 0.8 },
                animate: { opacity: 1, scale: 1 },
                exit: { opacity: 0, scale: 0.8 },
                onClick: (c) => {
                  (c.stopPropagation(), a());
                },
                onPointerDown: (c) => c.stopPropagation(),
                className:
                  "absolute -top-3 -right-3 w-6 h-6 bg-neutral-800 text-white rounded-full flex items-center justify-center shadow-md transition-colors hover:bg-black z-50",
                children: e.jsx(Ts, { size: 12 }),
              }),
          }),
        ],
      })
    );
  },
  cO = ({ text: t, songInfo: s, isHovered: n, onClose: a }) =>
    e.jsxs("div", {
      className: "relative py-12 px-6 w-[550px]",
      children: [
        e.jsx("div", {
          className:
            "absolute -left-4 top-1/2 -translate-y-1/2 w-full h-[85%] bg-white/20 border border-white/30 backdrop-blur-md rotate-[-2deg] rounded-sm",
        }),
        e.jsxs("div", {
          className:
            "relative p-12 bg-white/60 backdrop-blur-3xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.04)] border border-white/80 rounded-[4px] flex flex-col overflow-hidden",
          children: [
            e.jsx("div", {
              className:
                "absolute top-[-20px] right-[-10px] opacity-[0.08] pointer-events-none rotate-[15deg]",
              children: e.jsxs("svg", {
                width: "240",
                height: "320",
                viewBox: "0 0 240 320",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  e.jsx("path", {
                    d: "M120 300C120 300 110 220 160 160C210 100 230 40 230 40M120 300C120 300 130 220 80 160C30 100 10 40 10 40M120 300V20",
                    stroke: "currentColor",
                    strokeWidth: "1",
                    className: "text-neutral-900",
                  }),
                  e.jsx("circle", {
                    cx: "160",
                    cy: "160",
                    r: "3",
                    fill: "currentColor",
                  }),
                  e.jsx("circle", {
                    cx: "80",
                    cy: "160",
                    r: "3",
                    fill: "currentColor",
                  }),
                ],
              }),
            }),
            e.jsxs("div", {
              className:
                "absolute left-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 opacity-30",
              children: [
                e.jsx("div", { className: "w-[1px] h-12 bg-neutral-400" }),
                e.jsx("span", {
                  className:
                    "[writing-mode:vertical-rl] text-[8px] tracking-[0.6em] font-serif uppercase",
                  children: "Index_Herbarium",
                }),
                e.jsx("div", { className: "w-[1px] h-12 bg-neutral-400" }),
              ],
            }),
            e.jsxs("div", {
              className: "pl-8 w-full",
              children: [
                e.jsxs("div", {
                  className: "flex justify-between items-center mb-12",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        e.jsx(t3, {
                          size: 14,
                          className: "text-neutral-400 rotate-45",
                        }),
                        e.jsx("span", {
                          className:
                            "text-[10px] tracking-[0.5em] text-neutral-400 font-light uppercase",
                          children: "Collection 02.",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex flex-col items-end",
                      children: [
                        e.jsx("span", {
                          className:
                            "text-[10px] font-mono tracking-tighter text-neutral-400 leading-none mb-1",
                          children: "27.01.2026",
                        }),
                        e.jsx("div", {
                          className: "w-10 h-[0.5px] bg-neutral-200",
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "relative mb-16 w-full overflow-hidden",
                  children: [
                    e.jsx(Uu, {
                      text: t || (s == null ? void 0 : s.title) || "Music",
                      className:
                        "text-[2rem] font-serif font-extralight text-neutral-800 tracking-wide leading-[1.8] italic",
                    }),
                    e.jsx("div", {
                      className: "mt-6",
                      children: e.jsxs("p", {
                        className:
                          "text-[11px] text-neutral-300 font-serif italic",
                        children: [
                          "— ",
                          (s == null ? void 0 : s.artist) || "歌手",
                        ],
                      }),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex justify-between items-center",
                  children: [
                    e.jsx("div", {
                      className: "flex items-center gap-8",
                      children: e.jsxs("div", {
                        className: "flex flex-col",
                        children: [
                          e.jsx("span", {
                            className:
                              "text-[8px] text-neutral-300 tracking-[0.2em] mb-1 uppercase",
                            children: "Atmosphere",
                          }),
                          e.jsx("div", {
                            className: "flex gap-1.5",
                            children: [...Array(5)].map((r, i) =>
                              e.jsx(
                                "div",
                                {
                                  className: `w-1 h-1 rounded-full ${i === 0 ? "bg-neutral-400" : "bg-neutral-200"}`,
                                },
                                i,
                              ),
                            ),
                          }),
                        ],
                      }),
                    }),
                    e.jsxs("div", {
                      className: "flex gap-6 opacity-50",
                      children: [
                        e.jsx(Um, { size: 14 }),
                        e.jsx(Yl, { size: 14 }),
                        e.jsx(jl, { size: 14 }),
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
            "absolute bottom-6 right-10 opacity-10 flex flex-col items-end rotate-[-5deg]",
          children: [
            e.jsx("span", {
              className: "text-[2rem] font-black italic leading-none",
              children: "01",
            }),
            e.jsx("span", {
              className: "text-[8px] tracking-widest font-mono",
              children: "SERIES_ECHO",
            }),
          ],
        }),
        e.jsx(Os, {
          children:
            n &&
            e.jsx(We.button, {
              initial: { opacity: 0, scale: 0.8 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.8 },
              onClick: (r) => {
                (r.stopPropagation(), a());
              },
              onPointerDown: (r) => r.stopPropagation(),
              className:
                "absolute -top-3 -right-3 w-6 h-6 bg-neutral-800 text-white rounded-full flex items-center justify-center shadow-md transition-colors hover:bg-black z-50",
              children: e.jsx(Ts, { size: 12 }),
            }),
        }),
      ],
    }),
  dO = ({ text: t, songInfo: s, isHovered: n, onClose: a }) =>
    e.jsxs("div", {
      className:
        "relative px-20 py-16 w-[600px] bg-white/80 backdrop-blur-md rounded-lg shadow-xl",
      children: [
        e.jsxs("div", {
          className:
            "absolute left-0 top-0 bottom-0 w-8 border-r border-neutral-300 flex flex-col justify-between py-10",
          children: [
            e.jsx("span", {
              className: "text-[8px] rotate-90 text-neutral-400",
              children: "FRAME 002",
            }),
            e.jsx("span", {
              className: "text-[8px] rotate-90 text-neutral-400",
              children: "LENS 35MM",
            }),
          ],
        }),
        e.jsxs("div", {
          className: "space-y-12 w-full",
          children: [
            e.jsxs("div", {
              className: "flex items-baseline gap-4",
              children: [
                e.jsx("div", {
                  className:
                    "w-2 h-2 rounded-full bg-neutral-800 animate-pulse",
                }),
                e.jsx("p", {
                  className:
                    "text-[10px] tracking-[0.8em] text-neutral-400 uppercase font-light",
                  children: "Dialogue Recording",
                }),
              ],
            }),
            e.jsxs("div", {
              className: "relative w-full overflow-hidden",
              children: [
                e.jsx("div", {
                  className:
                    "absolute -top-6 -left-4 text-5xl font-black text-black/[0.02] select-none uppercase italic tracking-tighter",
                  children: "Narrative Flow",
                }),
                e.jsx(Uu, {
                  text: t || (s == null ? void 0 : s.title) || "Music",
                  className:
                    "text-4xl font-serif text-neutral-800 tracking-wide leading-[1.8] drop-shadow-sm",
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "flex justify-between items-center pt-8 border-t border-neutral-200/50",
              children: [
                e.jsxs("div", {
                  className: "flex gap-4",
                  children: [
                    e.jsx("div", {
                      className:
                        "px-3 py-1 border border-neutral-300 rounded-full text-[9px] text-neutral-500 font-mono tracking-tighter",
                      children: "SCENE_01",
                    }),
                    e.jsx("div", {
                      className:
                        "px-3 py-1 bg-neutral-800 text-white rounded-full text-[9px] font-mono tracking-tighter",
                      children: "TAKE_05",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex gap-6 opacity-50",
                  children: [
                    e.jsx(Xn, { size: 14, className: "text-yellow-600/40" }),
                    e.jsx(jl, { size: 14, className: "text-neutral-300" }),
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsx(Os, {
          children:
            n &&
            e.jsx(We.button, {
              initial: { opacity: 0, scale: 0.8 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.8 },
              onClick: (r) => {
                (r.stopPropagation(), a());
              },
              onPointerDown: (r) => r.stopPropagation(),
              className:
                "absolute -top-3 -right-3 w-6 h-6 bg-neutral-800 text-white rounded-full flex items-center justify-center shadow-md transition-colors hover:bg-black z-50",
              children: e.jsx(Ts, { size: 12 }),
            }),
        }),
      ],
    }),
  uO = ({
    text: t,
    songInfo: s,
    onOpen: n,
    onClose: a,
    isPlaying: r,
    styleId: i = 0,
    customStyles: o = [],
  }) => {
    const c = l.useRef(!1),
      [d, u] = l.useState(!1),
      f = 0.6,
      p =
        typeof i == "string" && i.startsWith("custom_")
          ? o.find((m) => m.id === i)
          : null;
    return e.jsxs(We.div, {
      drag: !0,
      dragMomentum: !1,
      onDragStart: () => {
        c.current = !0;
      },
      onDragEnd: () => {
        setTimeout(() => {
          c.current = !1;
        }, 100);
      },
      initial: { opacity: 0, y: 40, scale: 0.9 * f },
      animate: { opacity: 1, y: 0, scale: f },
      exit: { opacity: 0, scale: 0.9 * f },
      transition: { type: "spring", damping: 25, stiffness: 300 },
      className: "fixed z-[9999] pointer-events-auto origin-bottom-right",
      style: { bottom: 80, right: 20 },
      onMouseEnter: () => u(!0),
      onMouseLeave: () => u(!1),
      onClick: (m) => {
        c.current || n();
      },
      children: [
        e.jsxs("div", {
          style: { transformOrigin: "bottom right" },
          children: [
            i === 0 &&
              e.jsx(rO, { text: t, songInfo: s, isHovered: d, onClose: a }),
            i === 1 &&
              e.jsx(iO, {
                text: t,
                songInfo: s,
                isHovered: d,
                onClose: a,
                isPlaying: r,
              }),
            i === 2 &&
              e.jsx(oO, {
                text: t,
                songInfo: s,
                isHovered: d,
                onClose: a,
                isPlaying: r,
              }),
            i === 3 &&
              e.jsx(lO, {
                text: t,