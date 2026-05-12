      if (!Q) throw new Error("未找到对应私聊会话");
      if (!(o != null && o.key)) throw new Error("未配置 API");
      const ve =
          G.source === "blocked_character_voice_invite"
            ? "inbound_blocked_invite"
            : G.source === "character_proactive_voice_invite"
              ? "inbound_proactive_invite"
              : null,
        Ve = r(we),
        Ae = lj({
          chat: Q,
          contact: we,
          effectiveUser: Ve,
          user: t,
          callMessages: G.messages,
          startTime: G.startTime,
          durationSec: typeof G.duration == "number" ? G.duration : 0,
          phoneCallType: G.type,
          callOrigin: ve,
          revisionNote: J,
        });
      let te = [];
      if (ve === "inbound_blocked_invite" && Q.id) {
        const Pe =
          x && typeof x.current == "object" && x.current != null
            ? x.current
            : {};
        try {
          te = await Pg({
            currentChat: Q,
            contact: we,
            chatId: Q.id,
            summaries: g || {},
            archives: Pe,
            allChats: y.current || [],
            contacts: s,
            user: t,
            getEffectiveUser: r,
            getLastNRounds: Wo,
            asyncStorage: be,
          });
        } catch {}
      }
      const Se = ul(Ae, 30),
        Fe = await Oo(we.id, Se),
        $e = await i(
          Ae,
          we,
          "phone_call_resummary",
          Q.settings || {},
          te,
          Fe,
          [],
          !1,
          "",
          Ve,
        );
      if (bf($e)) throw new Error("总结生成失败");
      let tt = sP($e);
      if (!tt) {
        const Pe = YS($e);
        Pe && !/^原始错误：/m.test(Pe) && (tt = Pe);
      }
      const Xe = String(tt || "").trim();
      if (!Xe) throw new Error("总结生成失败");
      return (
        M((Pe) =>
          Pe.map((ut) =>
            ut.id === ge ? { ...ut, summary: Xe, bindToChat: !0 } : ut,
          ),
        ),
        Xe
      );
    },
    V = (ge, J) => {
      const G = String(J ?? "").trim();
      M((we) =>
        we.map((Q) =>
          Q.id === ge ? { ...Q, summary: G || null, bindToChat: !0 } : Q,
        ),
      );
    },
    ne = (ge, J) => {
      const G = J !== !1;
      M((we) => we.map((Q) => (Q.id === ge ? { ...Q, bindToChat: G } : Q)));
    },
    le = () => {
      var te;
      const {
        startTime: ge,
        contactId: J,
        phoneNumber: G,
        currentMessages: we,
        status: Q,
        rejectionReason: ve,
        callOrigin: Ve,
      } = A;
      u();
      const Ae = Ve === "inbound_blocked_invite";
      try {
        if (Ae && J && (Q === "connected" || Q === "rejected")) {
          const Se =
              (n || []).find(
                (Pe) =>
                  !(Pe != null && Pe.isGroup) &&
                  (Pe == null ? void 0 : Pe.contactId) === J,
              ) || null,
            Fe = Se == null ? void 0 : Se.id,
            $e = (s || []).find((Pe) => Pe.id === J) || null,
            tt =
              ($e == null ? void 0 : $e.remark) ||
              ($e == null ? void 0 : $e.nickname) ||
              ($e == null ? void 0 : $e.name) ||
              "TA",
            Xe = ge ? Math.max(0, Math.floor((Date.now() - ge) / 1e3)) : 0,
            ht = `${Math.floor(Xe / 60)}:${String(Xe % 60).padStart(2, "0")}`;
          try {
            const Pe =
              Q === "connected"
                ? `通话已结束 · ${tt}`
                : `已拒绝 ${tt} 的语音来电`;
            window.dispatchEvent(new CustomEvent(Nu, { detail: { text: Pe } }));
          } catch {}
          if (Fe)
            try {
              Q === "connected"
                ? m(
                    Fe,
                    `[系统提示] 你结束了与${tt}的语音通话（${ht}）`,
                    null,
                    "system",
                  )
                : m(
                    Fe,
                    `[系统提示] 你已拒绝接听${tt}的语音来电`,
                    null,
                    "system",
                  );
            } catch {}
        }
      } catch {}
      try {
        if (!Ae && Q === "connected" && J) {
          const Se =
            (n || []).find(
              (Fe) =>
                !(Fe != null && Fe.isGroup) &&
                (Fe == null ? void 0 : Fe.contactId) === J,
            ) || null;
          if (Se != null && Se.id && ge) {
            const Fe = Math.max(0, Math.floor((Date.now() - ge) / 1e3)),
              $e = `${Math.floor(Fe / 60)}:${String(Fe % 60).padStart(2, "0")}`;
            m(Se.id, `[系统提示] 语音通话已结束（${$e}）`, null, "system");
          }
        }
      } catch {}
      if (
        ((T.current = {
          ...T.current,
          status: "idle",
          contactId: null,
          phoneNumber: "",
          callOrigin: null,
          apiError: null,
        }),
        Q === "connected" || Q === "rejected")
      ) {
        const Se = ge ? Math.floor((Date.now() - ge) / 1e3) : 0;
        let Fe = "outgoing";
        Q === "rejected"
          ? (Fe = "missed")
          : (Ve === "inbound_blocked_invite" ||
              Ve === "inbound_proactive_invite") &&
            (Fe = "incoming");
        const $e = {
          id: Date.now().toString(),
          contactId: J,
          phoneNumber: G,
          type: Fe,
          startTime: ge ? new Date(ge).toISOString() : new Date().toISOString(),
          duration: Se,
          messages: we,
          summary: null,
          bindToChat: !0,
          rejectionReason: ve,
          ...(Ve === "inbound_blocked_invite"
            ? { source: "blocked_character_voice_invite" }
            : Ve === "inbound_proactive_invite"
              ? { source: "character_proactive_voice_invite" }
              : {}),
        };
        if (
          (M((tt) => [$e, ...tt]),
          Q === "connected" &&
            Array.isArray(we) &&
            we.length > 0 &&
            o != null &&
            o.key &&
            J)
        ) {
          const tt =
              (te = y.current) == null
                ? void 0
                : te.find((ht) => !ht.isGroup && ht.contactId === J),
            Xe = s.find((ht) => ht.id === J);
          if (tt && Xe) {
            const ht = Ve;
            setTimeout(() => {
              K({
                recordId: $e.id,
                chatId: tt.id,
                contactId: J,
                callMessages: [...we],
                startTime: $e.startTime,
                durationSec: Se,
                phoneCallType: $e.type,
                callOrigin: ht,
              });
            }, 320);
          }
        }
      }
      k({
        status: "idle",
        contactId: null,
        phoneNumber: "",
        startTime: null,
        rejectionReason: null,
        rejectionActivity: null,
        currentMessages: [],
        apiError: null,
        callOrigin: null,
      });
    },
    ie = () => {
      N((ge) => ({ ...ge, isMinimized: !ge.isMinimized }));
    },
    X = ({
      currentChat: ge,
      contact: J,
      effectiveUser: G,
      callMessages: we,
      userText: Q,
    }) => {
      const ve =
          (G == null ? void 0 : G.realName) ||
          (G == null ? void 0 : G.name) ||
          (t == null ? void 0 : t.realName) ||
          (t == null ? void 0 : t.name) ||
          "用户",
        Ve = ((ge == null ? void 0 : ge.messages) || [])
          .filter(
            (Se) =>
              (Se.type === "text" || !Se.type) &&
              typeof Se.text == "string" &&
              Se.text.trim(),
          )
          .slice(-10)
          .map(
            (Se) =>
              `${Se.sender === "me" ? ve : (J == null ? void 0 : J.nickname) || (J == null ? void 0 : J.name) || "对方"}：${String(Se.text).trim()}`,
          ).join(`
`),
        Ae = (Array.isArray(we) ? we : [])
          .filter(
            (Se) => Se && typeof Se.text == "string" && String(Se.text).trim(),
          )
          .slice(-12)
          .map(
            (Se) =>
              `${Se.sender === "me" ? ve : (J == null ? void 0 : J.nickname) || (J == null ? void 0 : J.name) || "对方"}：${String(Se.text).trim()}`,
          ).join(`
`);
      return [
        `【任务】这是单人视频通话中。请你像正在开视频一样回复：必须包含旁白 + 双引号内对话；不要输出聊天标签（如 || / [MEME] / [VOICE] 等）。
【语言】旁白及引号外全文须为简体中文；中文母语角色台词用中文；母语非中文角色台词用母语写在引号内，并在引号内用换行追加 [TRANSLATION:纯中文译文]（译文禁止含拉丁字母）。`,
        Ve
          ? `【最近聊天】
${Ve}`
          : "",
        Ae
          ? `【本次通话】
${Ae}`
          : "",
        `【${ve}本轮】${String(Q || "").trim() || "（无）"}`,
      ].filter(Boolean).join(`

`);
    },
    je = async ({
      currentChat: ge,
      contact: J,
      effectiveUser: G,
      callMessages: we,
      userText: Q,
    }) => {
      if (!(o != null && o.key)) throw new Error("NO_API_KEY");
      const ve = Ou(
          J,
          G || t,
          "video_call",
          (ge == null ? void 0 : ge.settings) || {},
          [],
          [],
          [],
        ),
        Ve = X({
          currentChat: ge,
          contact: J,
          effectiveUser: G,
          callMessages: we,
          userText: Q,
        }),
        Ae = [
          { role: "system", content: ve },
          { role: "user", content: Ve },
        ],
        te = `video_call_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`,
        Se = await cr(
          o,
          { messages: Ae, temperature: 0.7, max_tokens: 4096 },
          {
            timeoutMs: Cl,
            addApiLog: c,
            logScene: "video_call",
            logContactName:
              (J == null ? void 0 : J.nickname) ||
              (J == null ? void 0 : J.name) ||
              "",
            logId: te,
            logMessages: Ae,
          },
        );
      return String(Se || "").trim();
    },
    xe = async (ge, J, { isSystem: G = !1 } = {}) => {
      var Ae;
      const we = n.find((te) => te.id === ge);
      if (!we || we.isGroup) return;
      const Q = s.find((te) => te.id === we.contactId);
      if (!Q) return;
      const ve = r(Q),
        Ve = {
          id: Date.now().toString() + (G ? "-sys" : ""),
          text: J,
          type: G ? "system" : "text",
          sender: G ? "system" : "me",
          timestamp: new Date().toISOString(),
        };
      (N((te) =>
        (te == null ? void 0 : te.chatId) !== ge ||
        (te == null ? void 0 : te.status) !== "connected" ||
        (te != null && te.isGroup)
          ? te
          : { ...te, currentMessages: [...(te.currentMessages || []), Ve] },
      ),
        N((te) =>
          (te == null ? void 0 : te.chatId) === ge
            ? { ...te, isTyping: !0 }
            : te,
        ));
      try {
        const te = await je({
            currentChat: we,
            contact: Q,
            effectiveUser: ve,
            callMessages: [
              ...(((Ae = w.current) == null ? void 0 : Ae.currentMessages) ||
                []),
              Ve,
            ],
            userText: G ? "（系统状态变化）" : J,
          }),
          Se = gl(te),
          {
            narrator: Fe,
            dialogue: $e,
            dialogueTranslation: tt,
            videoCallSegments: Xe,
          } = Se,
          ht = {
            id: (Date.now() + 1).toString(),
            text: te,
            type: "text",
            sender: "them",
            timestamp: new Date().toISOString(),
            ...(Fe ? { narrator: Fe } : null),
            ...($e ? { dialogue: $e } : null),
            ...(tt ? { dialogueTranslation: tt } : null),
            ...(Xe != null && Xe.length ? { videoCallSegments: Xe } : null),
          };
        N((Pe) =>
          (Pe == null ? void 0 : Pe.chatId) !== ge ||
          (Pe == null ? void 0 : Pe.status) !== "connected" ||
          (Pe != null && Pe.isGroup)
            ? Pe
            : { ...Pe, currentMessages: [...(Pe.currentMessages || []), ht] },
        );
      } catch {
      } finally {
        N((te) =>
          (te == null ? void 0 : te.chatId) === ge
            ? { ...te, isTyping: !1 }
            : te,
        );
      }
    },
    ye = async (ge) => {
      const J = n.find((Se) => Se.id === ge);
      if (!J || J.isGroup) return;
      const G = s.find((Se) => Se.id === J.contactId);
      if (!G) return;
      const we = r(G),
        Q = w.current;
      if (
        !Q ||
        Q.chatId !== ge ||
        Q.status !== "connected" ||
        Q.isGroup ||
        Q.isTyping
      )
        return;
      const ve = [...(Q.currentMessages || [])];
      if (ve.length === 0) return;
      const Ve = ve[ve.length - 1];
      if (Ve.sender !== "them") return;
      const Ae = ve.slice(0, -1);
      let te = "";
      for (let Se = Ae.length - 1; Se >= 0; Se--) {
        const Fe = Ae[Se];
        if (Fe.sender === "me") {
          te = String(Fe.text || "").trim();
          break;
        }
        if (Fe.sender === "system") {
          te = "（系统状态变化）";
          break;
        }
      }
      N((Se) =>
        (Se == null ? void 0 : Se.chatId) !== ge ||
        (Se == null ? void 0 : Se.status) !== "connected" ||
        (Se != null && Se.isGroup)
          ? Se
          : { ...Se, currentMessages: Ae, isTyping: !0 },
      );
      try {
        const Se = await je({
            currentChat: J,
            contact: G,
            effectiveUser: we,
            callMessages: Ae,
            userText: te,
          }),
          Fe = gl(Se),
          {
            narrator: $e,
            dialogue: tt,
            dialogueTranslation: Xe,
            videoCallSegments: ht,
          } = Fe,
          Pe = {
            id: (Date.now() + 1).toString(),
            text: Se,
            type: "text",
            sender: "them",
            timestamp: new Date().toISOString(),
            ...($e ? { narrator: $e } : null),
            ...(tt ? { dialogue: tt } : null),
            ...(Xe ? { dialogueTranslation: Xe } : null),
            ...(ht != null && ht.length ? { videoCallSegments: ht } : null),
          };
        N((ut) =>
          (ut == null ? void 0 : ut.chatId) !== ge ||
          (ut == null ? void 0 : ut.status) !== "connected" ||
          (ut != null && ut.isGroup)
            ? ut
            : { ...ut, currentMessages: [...(ut.currentMessages || []), Pe] },
        );
      } catch {
        N((Fe) =>
          (Fe == null ? void 0 : Fe.chatId) !== ge
            ? Fe
            : { ...Fe, currentMessages: [...(Fe.currentMessages || []), Ve] },
        );
      } finally {
        N((Se) =>
          (Se == null ? void 0 : Se.chatId) === ge
            ? { ...Se, isTyping: !1 }
            : Se,
        );
      }
    },
    R = (ge, J, G) => {
      if (
        (_.current && (clearTimeout(_.current), (_.current = null)),
        G != null && G.groupVideoOutgoingSuppressMissed)
      )
        return;
      const we = (J == null ? void 0 : J.replies) ?? [],
        Q = JSON.stringify(J ?? {});
      if (
        we.some((Se) =>
          /ACCEPT_VIDEO_CALL/i.test(
            String((Se == null ? void 0 : Se.text) ?? "").trim(),
          ),
        ) ||
        /ACCEPT_VIDEO_CALL/i.test(Q)
      )
        return;
      const Ae = we.some((Se) =>
          /REJECT_VIDEO_CALL/i.test(
            String((Se == null ? void 0 : Se.text) ?? "").trim(),
          ),
        ),
        te = w.current;
      (te == null ? void 0 : te.status) !== "outgoing" ||
        (te == null ? void 0 : te.chatId) !== ge ||
        !(te != null && te.isGroup) ||
        (N({
          status: "idle",
          contactId: null,
          chatId: null,
          isGroup: !1,
          startTime: null,
          isInitiator: !1,
          isMinimized: !1,
          currentMessages: [],
          acceptedMembers: [],
          rejectedMembers: [],
          playbackQueue: [],
          isTyping: !1,
          groupVideoChatSnapshotLen: null,
          groupVideoPendingJoin: null,
        }),
        Ae || m(ge, "未接听", null, "video_call_end", { status: "missed" }));
    },
    oe = (ge, J = {}) => {
      var $e, tt, Xe, ht, Pe, ut;
      J != null && J.allowPendingFocus;
      const G = w.current;
      if (
        !G ||
        String(G.chatId ?? "") !== String(ge ?? "") ||
        !G.isGroup ||
        G.status !== "connected" ||
        G.isTyping ||
        ((tt =
          ($e = v == null ? void 0 : v.current) == null ? void 0 : $e.has) !=
          null &&
          tt.call($e, ge))
      )
        return;
      const we = [...(G.currentMessages || [])];
      let Q = -1;
      for (let _t = we.length - 1; _t >= 0; _t--) {
        const Ee = we[_t];
        if (
          (Ee == null ? void 0 : Ee.sender) === "me" &&
          (Ee == null ? void 0 : Ee.type) !== "system"
        ) {
          Q = _t;
          break;
        }
      }
      if (Q < 0) return;
      const ve = we.length - 1,
        Ve = Q < ve;
      (G.playbackQueue || []).length;
      const Ae =
        ((Xe = we[ve]) == null ? void 0 : Xe.sender) === "me" &&
        ((ht = we[ve]) == null ? void 0 : ht.type) !== "system";
      if (!Ve && !Ae) return;
      let te = G.groupVideoChatSnapshotLen;
      if (typeof te != "number" || te < 0) {
        const _t =
          (Pe = y == null ? void 0 : y.current) == null
            ? void 0
            : Pe.find((Ee) => String(Ee.id) === String(ge));
        te =
          ((ut = _t == null ? void 0 : _t.messages) == null
            ? void 0
            : ut.length) ?? 0;
      }
      const Se =
          typeof G.groupVideoChatSnapshotLen == "number" &&
          G.groupVideoChatSnapshotLen >= 0
            ? G.groupVideoChatSnapshotLen
            : te,
        Fe = we.slice(0, Q + 1);
      (a((_t) =>
        _t.map((Ee) => {
          if (String(Ee.id) !== String(ge)) return Ee;
          const fe = Ee.messages || [],
            He = Math.min(Se, fe.length),
            Ie = fe.slice(0, He),
            Ce = Ie.length > 0 ? Ie[Ie.length - 1] : null;
          return {
            ...Ee,
            messages: Ie,
            lastMessage: Ce ? cP(Ce) : Ee.lastMessage,
            timestamp: Ce ? Ce.timestamp : Ee.timestamp,
          };
        }),
      ),
        N((_t) =>
          String((_t == null ? void 0 : _t.chatId) ?? "") !==
            String(ge ?? "") || !(_t != null && _t.isGroup)
            ? _t
            : {
                ..._t,
                currentMessages: Fe,
                playbackQueue: [],
                isTyping: !1,
                groupVideoChatSnapshotLen: Se,
              },
        ),
        setTimeout(() => p(ge), 100));
    },
    ee = (ge) => {
      var Ae, te;
      const J = w.current;
      if (
        !J ||
        String(J.chatId ?? "") !== String(ge ?? "") ||
        J.status !== "connected" ||
        !J.isGroup ||
        J.isTyping ||
        ((te =
          (Ae = v == null ? void 0 : v.current) == null ? void 0 : Ae.has) !=
          null &&
          te.call(Ae, ge))
      )
        return null;
      const G = [...(J.currentMessages || [])];
      let we = -1;
      for (let Se = G.length - 1; Se >= 0; Se--) {
        const Fe = G[Se];
        if (
          (Fe == null ? void 0 : Fe.sender) === "me" &&
          (Fe == null ? void 0 : Fe.type) !== "system"
        ) {
          we = Se;
          break;
        }
      }
      if (we < 0) return null;
      const Q = G[we],
        ve = String(Q.text ?? ""),
        Ve = G.slice(0, we);
      return (
        N((Se) =>
          String((Se == null ? void 0 : Se.chatId) ?? "") !==
            String(ge ?? "") ||
          (Se == null ? void 0 : Se.status) !== "connected" ||
          !(Se != null && Se.isGroup)
            ? Se
            : { ...Se, currentMessages: Ve, playbackQueue: [], isTyping: !1 },
        ),
        ve
      );
    },
    H = (ge) => {
      const J = w.current;
      if (
        !J ||
        J.chatId !== ge ||
        J.status !== "connected" ||
        J.isGroup ||
        J.isTyping
      )
        return null;
      const G = [...(J.currentMessages || [])];
      let we = -1;
      for (let Ae = G.length - 1; Ae >= 0; Ae--) {
        const te = G[Ae];
        if (
          (te == null ? void 0 : te.sender) === "me" &&
          (te == null ? void 0 : te.type) !== "system"
        ) {
          we = Ae;
          break;
        }
      }
      if (we < 0) return null;
      const Q = G[we],
        ve = String(Q.text ?? ""),
        Ve = G.slice(0, we);
      return (
        N((Ae) =>
          (Ae == null ? void 0 : Ae.chatId) !== ge ||
          (Ae == null ? void 0 : Ae.status) !== "connected" ||
          (Ae != null && Ae.isGroup)
            ? Ae
            : { ...Ae, currentMessages: Ve },
        ),
        ve
      );
    },
    Y = async (ge) => {
      const J = n.find((G) => G.id === ge);
      if (J)
        if (
          (N({
            status: "outgoing",
            contactId: J.isGroup ? null : J.contactId,
            chatId: ge,
            isGroup: J.isGroup,
            startTime: null,
            isInitiator: !0,
            isMinimized: !1,
            currentMessages: [],
            acceptedMembers: [],
            rejectedMembers: [],
            playbackQueue: [],
            isTyping: !1,
            groupVideoChatSnapshotLen: null,
          }),
          J.isGroup)
        ) {
          const G =
              (t == null ? void 0 : t.realName) ||
              (t == null ? void 0 : t.name) ||
              "用户",
            we = [...J.messages];
          (we.push({
            sender: "system",
            text: `[系统提示：${G}发起了群视频通话]
请**每位成员根据自己的人设和当前上下文，独立决定**是否接听。不要所有人一起接或一起拒。
- 有的人可能接听、有的人可能拒绝、有的人可能本轮不表态（不回复或只发一句吐槽）。
- 接听的成员：在回复中包含 [ACCEPT_VIDEO_CALL]，并附带你的第一句话；**旁白与双引号台词写在同一段连续文字里**，不要拆成两条。
- 拒绝的成员：在回复中包含 [REJECT_VIDEO_CALL]，可附带理由或吐槽（如：在忙、不想露脸等）。
- 接听后的第一句话必须严格遵守视频通话文风：第三人称动作/环境描写 + 双引号内对话，营造画面感。
- 【语言】旁白与拒绝理由须为简体中文；中文母语角色台词用中文；母语非中文角色台词用母语并在引号内带 [TRANSLATION:纯中文]。
- 【视频独立】本场景为群视频通话，**禁止**使用文字群聊功能：引用、[REPLY:]、[表情包:]、[MEME:]、投票、接龙、转账、红包、外卖、朋友圈等；只输出接听/拒绝与画面相关文案。`,
            type: "system",
          }),
            we.push({
              sender: "me",
              text: "（发起群视频通话）",
              type: "text",
              timestamp: new Date().toISOString(),
            }),
            setTimeout(() => {
              p(ge, !1, "", we, null, "video_call_decision");
            }, 100));
          const Q = 3 * 60 * 1e3;
          (_.current && (clearTimeout(_.current), (_.current = null)),
            (_.current = setTimeout(() => {
              _.current = null;
              const ve = w.current;
              (ve == null ? void 0 : ve.status) === "outgoing" &&
                ve != null &&
                ve.isGroup &&
                (ve == null ? void 0 : ve.chatId) === ge &&
                (N({
                  status: "idle",
                  contactId: null,
                  chatId: null,
                  isGroup: !1,
                  startTime: null,
                  isInitiator: !1,
                  isMinimized: !1,
                  currentMessages: [],
                  acceptedMembers: [],
                  rejectedMembers: [],
                  playbackQueue: [],
                  isTyping: !1,
                }),
                m(ge, "未接听", null, "video_call_end", { status: "missed" }));
            }, Q)));
        } else {
          const G = J.contactId,
            we = s.find((te) => te.id === G),
            Q = r(we),
            ve =
              (Q == null ? void 0 : Q.realName) ||
              (Q == null ? void 0 : Q.name) ||
              (t == null ? void 0 : t.realName) ||
              (t == null ? void 0 : t.name) ||
              "用户",
            Ae = [
              ...J.messages
                .slice(-10)
                .map((te) => ({ sender: te.sender, text: te.text })),
              {
                sender: "system",
                text: `[系统提示：${ve}发起了视频通话]
请决定是否接听。
如果接听，请返回 JSON 格式：{"answer": true, "response": "你的第一句话"}。
重要：你的"response"（第一句话）必须严格遵守视频通话文风：
1. 必须包含对你当前状态、动作或环境的描写（使用第三人称，如“她凑近镜头...”）。
2. 描写与对话结合，营造画面感。
3. 就像你真的打开了摄像头一样。
4. 如果你决定接听，你也可以在 response 中附带一些文字消息，这些消息会显示在视频通话界面。
5. 【语言】旁白与拒绝理由须为简体中文；中文母语角色台词用中文；母语非中文角色台词用母语写在引号内，并在引号内换行写 [TRANSLATION:纯中文译文]。`,
                type: "system",
              },
            ];
          try {
            if (!(o != null && o.key)) throw new Error("NO_API_KEY");
            const te = ul(Ae, 30),
              Se = await Oo(we.id, te),
              Fe = await i(
                Ae,
                we,
                "video_call_decision",
                J.settings,
                [],
                Se,
                [],
                !1,
                "",
                Q,
              ),
              $e = typeof Fe == "string" ? Fe : Fe == null ? "" : String(Fe);
            let tt = { answer: !0, response: "" };
            try {
              const Xe = $e.match(/\{[\s\S]*\}/);
              Xe
                ? (tt = JSON.parse(Xe[0]))
                : $e.includes("false") || $e.includes("拒绝")
                  ? (tt = { answer: !1, response: $e })
                  : (tt = { answer: !0, response: $e });
            } catch {
              tt = { answer: !0, response: $e };
            }
            tt.answer
              ? (N((Xe) => ({
                  ...Xe,
                  status: "connected",
                  startTime: Date.now(),
                  isMinimized: !1,
                  currentMessages: [],
                  isTyping: !1,
                })),
                tt.response &&
                  setTimeout(() => {
                    const Xe = gl(tt.response),
                      {
                        narrator: ht,
                        dialogue: Pe,
                        dialogueTranslation: ut,
                        videoCallSegments: _t,
                      } = Xe,
                      Ee = {
                        id: Date.now().toString(),
                        text: tt.response,
                        type: "text",
                        sender: "them",
                        timestamp: new Date().toISOString(),
                        ...(ht ? { narrator: ht } : null),
                        ...(Pe ? { dialogue: Pe } : null),
                        ...(ut ? { dialogueTranslation: ut } : null),
                        ...(_t != null && _t.length
                          ? { videoCallSegments: _t }
                          : null),
                      };
                    N((fe) => ({
                      ...fe,
                      currentMessages: [...fe.currentMessages, Ee],
                    }));
                  }, 2e3))
              : (N({
                  status: "idle",
                  contactId: null,
                  chatId: null,
                  isGroup: !1,
                  startTime: null,
                  isInitiator: !1,
                  isMinimized: !1,
                  currentMessages: [],
                  acceptedMembers: [],
                  rejectedMembers: [],
                  playbackQueue: [],
                  isTyping: !1,
                  groupVideoChatSnapshotLen: null,
                  groupVideoPendingJoin: null,
                }),
                m(J.id, "已拒绝", null, "video_call_end", {
                  status: "rejected",
                }),
                tt.response &&
                  setTimeout(() => {
                    m(J.id, tt.response, null, "text", { sender: "them" });
                  }, 500));
          } catch {
            N((Se) => ({ ...Se, status: "idle" }));
          }
        }
    },
    U = () => {
      f == null || f();
      const { chatId: ge, isGroup: J } = b;
      N((we) => ({
        ...we,
        status: "connected",
        startTime: Date.now(),
        isMinimized: !1,
        currentMessages: [],
        playbackQueue: we.playbackQueue || [],
        isTyping: !1,
      }));
      const G = n.find((we) => we.id === ge);
      if (G)
        if (J) {
          const we =
              (t == null ? void 0 : t.realName) ||
              (t == null ? void 0 : t.name) ||
              "用户",
            Q = [...G.messages];
          (Q.push({
            sender: "system",
            text: `[系统通知：${we}已接听群视频通话]
⚠️ 视频通话已接通！
1. 请**立即**开始视频对话。
2. 每条回复**必须**同时有【旁白】和【对话】（使用第三人称，如“她凑近镜头...”）。
3. 对话用双引号包住，示例：他笑了："嗨。" 严禁只发对话不发旁白。
4. 就像你真的打开了摄像头一样。
5. **严禁**在回复中重复此系统通知或包含任何系统指令。只返回你的角色回复。
6. 【语言】旁白须为简体中文；中文母语角色台词用中文；母语非中文角色台词用母语并在引号内带 [TRANSLATION:纯中文]；video_events 里 action 类描写须中文，speech 类台词同上（speech 无引号时可写：母语句换行 [TRANSLATION:中文]）。
7. 【视频独立】**禁止**使用文字群聊功能：引用、[REPLY:]、[表情包:]、[MEME:]、投票、接龙、转账、红包、外卖、朋友圈等；仅输出旁白、对话、video_events 及允许的 video_call_* actions。`,
            type: "system",
          }),
            setTimeout(() => {
              p(ge, !1, "", Q, null, "video_call");
            }, 100));
        } else
          setTimeout(() => {
            xe(G.id, "[系统提示：视频通话已接通]", { isSystem: !0 });
          }, 200);
    },
    ce = () => {
      const { chatId: ge } = b;
      N({
        status: "idle",
        contactId: null,
        chatId: null,
        isGroup: !1,
        startTime: null,
        isInitiator: !1,
        isMinimized: !1,
        currentMessages: [],
        acceptedMembers: [],
        rejectedMembers: [],
        playbackQueue: [],
        groupVideoChatSnapshotLen: null,
      });
      const J = n.find((G) => G.id === ge);
      J &&
        (m(J.id, "已拒绝", null, "video_call_end", { status: "rejected" }),
        setTimeout(() => p(J.id), 1e3));
    },
    pe = async (ge, J) => {
      const G = n.find(($e) => $e.id === ge),
        we = s.find(($e) => $e.id === (G == null ? void 0 : G.contactId));
      if (!we || !J || J.messages.length === 0) return;
      const Q = r(we),
        ve =
          (Q == null ? void 0 : Q.realName) ||
          (Q == null ? void 0 : Q.name) ||
          (t == null ? void 0 : t.realName) ||
          (t == null ? void 0 : t.name) ||
          "用户",
        Ve = J.isInitiator ? `${ve}主动发起` : "你主动发起",
        Ae = [
          {
            sender: "system",
            text: `[系统记录] 视频通话时间：${new Date(J.startTime).toLocaleString()}，持续时长：${J.durationStr}。发起人：${Ve}。`,
          },
          ...J.messages.map(($e) => ({ sender: $e.sender, text: $e.text })),
          { sender: "me", text: Jg(ve) },
        ],
        te = ul(Ae, 30),
        Se = await Oo(we.id, te),
        Fe = await i(Ae, we, "video_summary", {}, [], Se, [], !1, "", Q);
      return Fe
        ? (a(($e) =>
            $e.map((tt) => {
              if (tt.id === ge) {
                const Xe = tt.callHistory.map((ht) =>
                  ht.id === J.id ? { ...ht, summary: Fe, useSummary: !1 } : ht,
                );
                return { ...tt, callHistory: Xe };
              }
              return tt;
            }),
          ),
          Fe)
        : null;
    };
  return {
    callState: b,
    setCallState: N,
    phoneCallState: A,
    setPhoneCallState: k,
    phoneRecents: C,
    setPhoneRecents: M,
    startPhoneCall: Z,
    endPhoneCall: le,
    handlePhoneInteraction: D,
    scheduleBlockedInvitePhoneFollowUps: P,
    scheduleProactiveVoiceInvitePickup: $,
    regeneratePhoneReply: z,
    retryLastPhoneModelRound: O,
    regeneratePhoneRecentSummary: q,
    savePhoneRecentSummary: V,
    setPhoneRecentSummaryBinding: ne,
    startVideoCall: Y,
    acceptVideoCall: U,
    rejectVideoCall: ce,
    endVideoCall: async () => {
      var tt;
      const {
          startTime: ge,
          chatId: J,
          isGroup: G,
          currentMessages: we,
          isInitiator: Q,
        } = b,
        ve = ge ? Math.floor((Date.now() - ge) / 1e3) : 0,
        Ve = Math.floor(ve / 60),
        Ae = ve % 60,
        te = `${Ve}:${Ae.toString().padStart(2, "0")}`,
        Se = {
          id: Date.now().toString(),
          startTime: new Date(ge).toISOString(),
          duration: ve,
          durationStr: te,
          messages: we,
          summary: null,
          useSummary: !1,
          isInitiator: Q,
        },
        Fe = {
          id: Date.now().toString() + "-end",
          text: `通话时长 ${te}`,
          type: "video_call_end",
          sender: "me",
          timestamp: new Date().toISOString(),
          duration: te,
          status: "ended",
        },
        $e = n.find((Xe) => Xe.id === J);
      if (
        (N({
          status: "idle",
          contactId: null,
          chatId: null,
          isGroup: !1,
          startTime: null,
          isInitiator: !1,
          isMinimized: !1,
          currentMessages: [],
          acceptedMembers: [],
          rejectedMembers: [],
          playbackQueue: [],
          groupVideoChatSnapshotLen: null,
          groupVideoPendingJoin: null,
        }),
        $e)
      )
        if (
          (a((Xe) =>
            Xe.map((ht) =>
              ht.id === J
                ? {
                    ...ht,
                    lastMessage: Fe.text,
                    timestamp: Fe.timestamp,
                    messages: [...ht.messages, Fe],
                    callHistory: [...(ht.callHistory || []), Se],
                  }
                : ht,
            ),
          ),
          G)
        ) {
          const Xe = Wo($e.messages || [], 20)
              .filter(
                (Pe) => Pe && typeof Pe.text == "string" && Pe.text.trim(),
              )
              .map((Pe) => ({ sender: Pe.sender, text: Pe.text })),
            ht = [
              {
                sender: "system",
                text: "[系统提示] 以下先给出最近聊天背景（最多20回合）供参考，用于理解发起这次视频通话的上下文；但总结重点必须放在本次群视频通话本身。",
              },
              ...Xe,
              {
                sender: "system",
                text: `[系统记录] 本次群视频通话开始时间：${new Date(ge).toLocaleString()}，持续时长：${te}。请以本次通话内容为主进行客观总结，聊天背景仅作补充。`,
              },
              ...we,
              Fe,
            ];
          a((Pe) =>
            Pe.map((ut) => (ut.id === J ? { ...ut, isTyping: !0 } : ut)),
          );
          try {
            const Pe =
                (t == null ? void 0 : t.realName) ||
                (t == null ? void 0 : t.name) ||
                "用户",
              ut = `请根据以上群聊视频通话内容，用第三人称写一段客观记忆摘要。摘要中一律使用上文中已标注的真实姓名指代发言者，不要使用微信昵称。概括多人（包括${Pe}与各群成员）的发言与互动要点，语气客观、不煽情；指代己方参与者时用「${Pe}」，不要使用泛称「用户」。只输出总结正文，不要对话体。`,
              _t = ht.map((He) => {
                let Ie = He.sender === "me" ? Pe : "群成员";
                if (He.sender !== "me" && He.contactId) {
                  const Ce = s.find((Re) => Re.id === He.contactId);
                  Ce &&
                    (Ie = Ce.realName || Ce.name || Ce.nickname || "某成员");
                }
                return { sender: He.sender, text: `${Ie}: ${He.text}` };
              });
            _t.push({
              sender: "me",
              text: `${ut}
${Jg(Pe)}`,
            });
            const Ee = {
                name: $e.groupName || "群聊",
                id: "group",
                setting:
                  ((tt = $e.settings) == null ? void 0 : tt.groupPrompt) || "",
              },
              fe = await i(_t, Ee, "video_summary", {}, [], [], [], !1, "", t);
            (fe &&
              a((He) =>
                He.map((Ie) => {
                  if (Ie.id === J) {
                    const Ce = Ie.callHistory.map((Re) =>
                      Re.id === Se.id
                        ? { ...Re, summary: fe, useSummary: !1 }
                        : Re,
                    );
                    return { ...Ie, callHistory: Ce };
                  }
                  return Ie;
                }),
              ),
              setTimeout(() => {
                p(J);
              }, 300));
          } catch {
            setTimeout(() => p(J), 300);
          } finally {
            a((Pe) =>
              Pe.map((ut) => (ut.id === J ? { ...ut, isTyping: !1 } : ut)),
            );
          }
        } else {
          const Xe = $e.contactId,
            ht = s.find((Pe) => Pe.id === Xe);
          if (ht) {
            const Pe = r(ht),
              ut = Wo($e.messages || [], 20)
                .filter(
                  (Ee) => Ee && typeof Ee.text == "string" && Ee.text.trim(),
                )
                .map((Ee) => ({ sender: Ee.sender, text: Ee.text })),
              _t = [
                {
                  sender: "system",
                  text: "[系统提示] 以下先给出最近聊天背景（最多20回合）供参考，用于理解本次视频通话发起背景；但总结重点必须放在本次视频通话内容。",
                },
                ...ut,
                {
                  sender: "system",
                  text: `[系统记录] 本次视频通话开始时间：${new Date(ge).toLocaleString()}，持续时长：${te}。请以本次通话内容为主生成挂断后回复与通话总结，聊天背景仅作补充。`,
                },
                ...we,
                Fe,
              ];
            a((Ee) =>
              Ee.map((fe) => (fe.id === J ? { ...fe, isTyping: !0 } : fe)),
            );
            try {
              const Ee = ul(_t, 30),
                fe = await Oo(ht.id, Ee),
                He = await i(
                  _t,
                  ht,
                  "video_call_end_summary",
                  $e.settings,
                  [],
                  fe,
                  [],
                  !1,
                  "",
                  Pe,
                );
              let Ie = null;
              try {
                const Ce = He.match(/\{[\s\S]*\}/);
                Ce ? (Ie = JSON.parse(Ce[0])) : (Ie = JSON.parse(He));
              } catch {
                Ie = { reply: He, summary: null };
              }
              (Ie && Ie.reply && h(J, Ie.reply),
                Ie &&
                  Ie.summary &&
                  a((Ce) =>
                    Ce.map((Re) => {
                      if (Re.id === J) {
                        const De = Re.callHistory.map((at) =>
                          at.id === Se.id
                            ? { ...at, summary: Ie.summary, useSummary: !1 }
                            : at,
                        );
                        return { ...Re, callHistory: De };
                      }
                      return Re;
                    }),
                  ));
            } catch {
            } finally {
              a((Ee) =>
                Ee.map((fe) => (fe.id === J ? { ...fe, isTyping: !1 } : fe)),
              );
            }
          }
        }
    },
    toggleMinimizeCall: ie,
    toggleCallMemoryMode: (ge, J) => {
      a((G) =>
        G.map((we) => {
          if (we.id === ge) {
            const Q = we.callHistory.map((ve) =>
              ve.id === J ? { ...ve, useSummary: !ve.useSummary } : ve,
            );
            return { ...we, callHistory: Q };
          }
          return we;
        }),
      );
    },
    summarizeCallRecord: async (ge, J) => {
      var ve;
      const G = n.find((Ve) => Ve.id === ge);
      if (!G) throw new Error("会话不存在");
      const we = (G.callHistory || []).find((Ve) => Ve.id === J);
      if (!we) throw new Error("通话记录不存在");
      if (!Array.isArray(we.messages) || we.messages.length === 0)
        throw new Error("该通话没有可总结内容");
      if (G.isGroup) {
        const Ve =
            (t == null ? void 0 : t.realName) ||
            (t == null ? void 0 : t.name) ||
            "用户",
          Ae = `请根据以上群聊视频通话内容，用第三人称写一段客观记忆摘要。摘要中一律使用上文中已标注的真实姓名指代发言者，不要使用微信昵称。概括多人（包括${Ve}与各群成员）的发言与互动要点，语气客观、不煽情；指代己方参与者时用「${Ve}」，不要使用泛称「用户」。只输出总结正文，不要对话体。`,
          te = we.messages.map(($e) => {
            let tt = $e.sender === "me" ? Ve : "群成员";
            if ($e.sender !== "me" && $e.contactId) {
              const Xe = s.find((ht) => ht.id === $e.contactId);
              Xe && (tt = Xe.realName || Xe.name || Xe.nickname || "某成员");
            }
            return { sender: $e.sender, text: `${tt}: ${$e.text}` };
          });
        (te.unshift({
          sender: "system",
          text: `[系统记录] 视频通话时间：${new Date(we.startTime).toLocaleString()}，持续时长：${we.durationStr}。`,
        }),
          te.push({
            sender: "me",
            text: `${Ae}
${Jg(Ve)}`,
          }));
        const Se = {
            name: G.groupName || "群聊",
            id: "group",
            setting:
              ((ve = G.settings) == null ? void 0 : ve.groupPrompt) || "",
          },
          Fe = await i(te, Se, "video_summary", {}, [], [], [], !1, "", t);
        if (!Fe || !String(Fe).trim()) throw new Error("总结生成失败");
        return (
          a(($e) =>
            $e.map((tt) => {
              if (tt.id !== ge) return tt;
              const Xe = (tt.callHistory || []).map((ht) =>
                ht.id === J
                  ? { ...ht, summary: String(Fe).trim(), useSummary: !1 }
                  : ht,
              );
              return { ...tt, callHistory: Xe };
            }),
          ),
          String(Fe).trim()
        );
      }
      const Q = await pe(ge, we);
      if (!Q || !String(Q).trim()) throw new Error("总结生成失败");
      return String(Q).trim();
    },
    deleteCallRecord: (ge, J) => {
      a((G) =>
        G.map((we) => {
          if (we.id === ge) {
            const Q = (we.callHistory || []).filter((ve) => ve.id !== J);
            return { ...we, callHistory: Q };
          }
          return we;
        }),
      );
    },
    deleteCallMessage: (ge) => {
      N((J) => ({
        ...J,
        currentMessages: J.currentMessages.filter((G) => G.id !== ge),
      }));
    },
    appendVideoCallEcho: (ge, J) => {
      N((G) =>
        (G == null ? void 0 : G.chatId) !== ge || !(G != null && G.isGroup)
          ? G
          : { ...G, currentMessages: [...(G.currentMessages || []), J] },
      );
    },
    consumePlaybackQueue: (ge) => {
      const J = w.current;
      if (
        (J == null ? void 0 : J.chatId) !== ge ||
        !(J != null && J.isGroup) ||
        !Array.isArray(J.playbackQueue) ||
        J.playbackQueue.length === 0
      )
        return null;
      const [G, ...we] = J.playbackQueue;
      return (
        N((Q) =>
          (Q == null ? void 0 : Q.chatId) === ge
            ? { ...Q, playbackQueue: we }
            : Q,
        ),
        G
      );
    },
    sendSingleVideoCallMessage: xe,
    regenerateSingleVideoCallReply: ye,
    reopenLastSingleVideoCallUserMessageForEdit: H,
    reopenLastGroupVideoCallUserMessageForEdit: ee,
    onGroupVideoCallDecisionApiFinished: R,
    regenerateGroupVideoCallRound: oe,
  };
};
function cj(t) {
  var r, i, o, c, d;
  const s = mv(),
    n = Array.isArray(t) ? [...t] : [],
    a = n.findIndex((u) => u.id === io);
  if (a >= 0) {
    const u = n[a],
      f = "使用帮助",
      p =
        "说话简洁、好懂，用「你」称呼用户；只解答本机使用与内置功能相关的问题，不扮演情侣、不聊无关私事。",
      m = "#0d9488",
      h = "#F8C8D8",
      g =
        (u == null ? void 0 : u.name) === f ||
        (u == null ? void 0 : u.nickname) === f,
      x = (u == null ? void 0 : u.setting) === p,
      y = {
        ...s,
        ...u,
        id: io,
        isBuiltinHelpAssistant: !0,
        decoration: { ...(s.decoration || {}), ...(u.decoration || {}) },
      };
    ((((r = u == null ? void 0 : u.decoration) == null ? void 0 : r.color) ===
      m ||
      ((i = u == null ? void 0 : u.decoration) == null ? void 0 : i.color) ===
        h) &&
      (y.decoration.color = (o = s.decoration) == null ? void 0 : o.color),
      ((c = y.decoration) == null ? void 0 : c.textColor) == null &&
        ((d = s.decoration) == null ? void 0 : d.textColor) != null &&
        (y.decoration.textColor = s.decoration.textColor),
      g && ((y.name = s.name), (y.nickname = s.nickname)),
      x && (y.setting = s.setting),
      (!Array.isArray(u == null ? void 0 : u.openingLines) ||
        (u == null ? void 0 : u.openingLines.length) === 0) &&
        (y.openingLines = s.openingLines));
    const v = y.avatar;
    return (
      (y.avatar = typeof v == "string" && v.trim() ? v.trim() : s.avatar),
      (n[a] = y),
      n
    );
  }
  return [s, ...n];
}
const dj = "chat_app_group_initial_names",
  uP = (t) => {
    if (!Array.isArray(t)) return ["默认分组"];
    const s = t
      .map((n) =>
        typeof n == "string" ? n : n != null && n !== "" ? String(n) : "",
      )
      .filter(Boolean);
    return s.length ? s : ["默认分组"];
  },
  fP = () => {
    const [t, s] = l.useState([]),
      [n, a] = l.useState(!1);
    (l.useEffect(() => {
      (async () => {
        let F = await be.get("chat_app_contacts");
        if (F != null && Array.isArray(F)) {
          let D = !1;
          ((F = F.map((z) => {
            const O = { ...z };
            let Z = !1;
            return (
              O.douyinId ||
                ((Z = !0),
                (O.douyinId =
                  "dy_" +
                  Math.random().toString(36).substr(2, 9) +
                  Date.now().toString().substr(-4))),
              !O.wechatId &&
                O.socialId &&
                ((Z = !0), (O.wechatId = O.socialId)),
              !O.socialId &&
                O.wechatId &&
                ((Z = !0), (O.socialId = O.wechatId)),
              Z && (D = !0),
              O
            );
          })),
            D && (await be.set("chat_app_contacts", F)),
            (F = cj(F)));
          const $ = "#F8C8D8",
            P = "#FFF1F7";
          ((F = F.map((z) => {
            const O = z == null ? void 0 : z.decoration;
            if (!O || O.color !== $) return z;
            const Z = O.text === "标签" && O.textColor === "#6A5460",
              K = O.text === "帮助" && O.textColor === "#6A5460";
            return !Z && !K ? z : { ...z, decoration: { ...O, color: P } };
          })),
            s(F));
        } else s(cj([]));
        a(!0);
      })();
    }, []),
      l.useEffect(() => {
        n && be.set("chat_app_contacts", t);
      }, [t, n]));
    const [r, i] = l.useState(["默认分组"]),
      [o, c] = l.useState(!1),
      [d, u] = l.useState({}),
      [f, p] = l.useState(!1),
      [m, h] = l.useState({ name: "全部", color: "#000000" }),
      [g, x] = l.useState(!1),
      [y, v] = l.useState({}),
      [b, N] = l.useState(!1);
    (l.useEffect(() => {
      (async () => {
        const [F, D, $, P] = await Promise.all([
          be.get("chat_app_groups"),
          be.get("chat_app_group_colors"),
          be.get("chat_app_all_group_settings"),
          be.get(dj, null),
        ]);
        (i(uP(F)),
          D != null && u(D),
          $ != null && h($),
          P != null && typeof P == "object" && !Array.isArray(P) && v(P),
          c(!0),
          p(!0),
          x(!0),
          N(!0));
      })();
    }, []),
      l.useEffect(() => {
        b && be.set(dj, y);
      }, [y, b]),
      l.useEffect(() => {
        !o ||
          !b ||
          v((B) => {
            const F = { ...B };
            let D = !1;
            for (const $ of r) F[$] === void 0 && ((F[$] = $), (D = !0));
            for (const $ of Object.keys(F))
              r.includes($) || (delete F[$], (D = !0));
            return D ? F : B;
          });
      }, [r, o, b]),
      l.useEffect(() => {
        o && be.set("chat_app_groups", r);
      }, [r, o]),
      l.useEffect(() => {
        f && be.set("chat_app_group_colors", d);
      }, [d, f]),
      l.useEffect(() => {
        g && be.set("chat_app_all_group_settings", m);
      }, [m, g]));
    const w = (B) => {
        h((F) => ({ ...F, ...B }));
      },
      _ = (B, F = null) => {
        B &&
          !r.includes(B) &&
          (i([...r, B]),
          v((D) => ({ ...D, [B]: B })),
          F && u((D) => ({ ...D, [B]: F })));
      },
      A = (B, F) => {
        u((D) => ({ ...D, [B]: F }));
      },
      k = (B) => {
        B !== "默认分组" &&
          (i((F) => F.filter((D) => D !== B)),
          v((F) => {
            const D = { ...F };
            return (delete D[B], D);
          }),
          u((F) => {
            const D = { ...F };
            return (delete D[B], D);
          }),
          s((F) =>
            F.map((D) => (D.group === B ? { ...D, group: "默认分组" } : D)),
          ));
      },
      C = (B, F, D) => {
        (F !== B &&
          (i(($) => $.map((P) => (P === B ? F : P))),
          s(($) => $.map((P) => (P.group === B ? { ...P, group: F } : P))),
          v(($) => {
            const P = { ...$ },
              z = P[B] ?? B;
            return (delete P[B], (P[F] = z), P);
          })),
          D &&
            u(($) => {
              const P = { ...$ };
              return (F !== B && delete P[B], (P[F] = D), P);
            }));
      },
      M = (B) => {
        if (!Array.isArray(B) || B.length === 0)
          return { ok: !1, error: "无效数据" };
        const F = B.map(($) => ({
          from: String($.from ?? "").trim(),
          to: String($.to ?? "").trim(),
        }));
        if (F.some(($) => !$.from || !$.to))
          return { ok: !1, error: "分组名称不能为空" };
        const D = F.map(($) => $.to);
        return new Set(D).size !== D.length
          ? { ok: !1, error: "分组名不能重复" }
          : (s(($) =>
              $.map((P) => {
                const z = F.find((O) => O.from === P.group);
                return z ? { ...P, group: z.to } : P;
              }),
            ),
            u(($) => {
              const P = {};
              return (
                F.forEach((z) => {
                  P[z.to] = $[z.from] ?? $[z.to] ?? "#3B82F6";
                }),
                P
              );
            }),
            v(($) => {
              let P = !1;
              const z = { ...$ };
              return (
                F.forEach(({ from: O, to: Z }) => {
                  if (O !== Z) {
                    const K = z[O] ?? O;
                    (delete z[O], (z[Z] = K), (P = !0));
                  }
                }),
                P ? z : $
              );
            }),
            i(D),
            { ok: !0 });
      },
      E = (B, F) => {
        s((D) => D.map((P) => (P.id === B ? { ...P, ...F } : P)));
      },
      S = (B) => {
        const F = `${(B == null ? void 0 : B.setting) || ""}
${(B == null ? void 0 : B.remark) || ""}
${(B == null ? void 0 : B.persona) || ""}
${(B == null ? void 0 : B.name) || ""}
${(B == null ? void 0 : B.nickname) || ""}`.toLowerCase(),
          D = (...$) => $.some((P) => F.includes(String(P).toLowerCase()));
        return D(
          "美国",
          "usa",
          "u.s.",
          "united states",
          "american",
          "纽约",
          "洛杉矶",
          "旧金山",
          "芝加哥",
        ) || D("加拿大", "canada", "canadian", "多伦多", "温哥华")
          ? "+1"
          : D(
                "日本",
                "japan",
                "japanese",
                "东京",
                "大阪",
                "京都",
                "札幌",
                "横滨",
              )
            ? "+81"
            : D("韩国", "korea", "korean", "seoul", "首尔", "釜山")
              ? "+82"
              : D(
                    "英国",
                    "uk",
                    "u.k.",
                    "united kingdom",
                    "british",
                    "伦敦",
                    "manchester",
                    "曼彻斯特",
                  )
                ? "+44"
                : D("法国", "france", "french", "paris", "巴黎")
                  ? "+33"
                  : D("德国", "germany", "german", "berlin", "柏林")
                    ? "+49"
                    : D(
                          "澳大利亚",
                          "australia",
                          "aussie",
                          "悉尼",
                          "墨尔本",
                          "melbourne",
                          "sydney",
                        )
                      ? "+61"
                      : D("新加坡", "singapore", "sg")
                        ? "+65"
                        : D("香港", "hong kong", "hk")
                          ? "+852"
                          : D("台湾", "台灣", "taiwan", "tw")
                            ? "+886"
                            : D("澳门", "澳門", "macao", "macau")
                              ? "+853"
                              : "";
      },
      j = (B) => {
        const F = S(B),
          D = ($) =>
            Math.floor(Math.random() * Math.pow(10, $))
              .toString()
              .padStart($, "0");
        return F
          ? F === "+1"
            ? `+1${D(10)}`
            : F === "+81"
              ? `+8190${D(8)}`
              : F === "+82"
                ? `+8210${D(8)}`
                : F === "+44"
                  ? `+447${D(9)}`
                  : F === "+33"
                    ? `+336${D(8)}`
                    : F === "+49"
                      ? `+4915${D(9)}`
                      : F === "+61"
                        ? `+614${D(8)}`
                        : F === "+65"
                          ? `+65${D(8)}`
                          : F === "+852"
                            ? `+852${D(8)}`
                            : F === "+886"
                              ? `+8869${D(8)}`
                              : F === "+853"
                                ? `+853${D(8)}`
                                : `${F}${D(10)}`
          : "1" + D(10);
      };
    return {
      contacts: t,
      setContacts: s,
      groups: r,
      setGroups: i,
      groupColors: d,
      groupInitialNames: y,
      allGroupSettings: m,
      updateAllGroupSettings: w,
      addGroup: _,
      setGroupColor: A,
      deleteGroup: k,
      updateGroup: C,
      reorderAndRenameGroups: M,
      updateContact: E,
      addContact: async (B, F = "默认分组", D = "", $ = null) => {
        let P = {};
        if ($)
          try {
            P = await $(B);
          } catch {}
        const z = { color: "#FFF1F7", textColor: "#6A5460", text: "标签" },
          O =
            P.wechatId ||
            B.wechatId ||
            B.socialId ||
            P.socialId ||
            Math.random().toString(36).substr(2, 8),
          Z = {
            ...B,
            id: Date.now().toString(),
            group: F,
            remark: D,
            decoration:
              B != null && B.decoration ? { ...z, ...B.decoration } : z,
            nickname: P.wechatName || P.nickname || B.nickname || B.name,
            socialId: O,
            wechatId: O,
            douyinId:
              P.douyinId ||
              "dy_" +
                Math.random().toString(36).substr(2, 9) +
                Date.now().toString().substr(-4),
            phone: P.phone || j(B),
            region: P.region || "未知",
            signature: P.signature || "这个人很懒，什么都没有留下",
            phonePassword:
              P.password || Math.floor(1e5 + Math.random() * 9e5).toString(),
            background: "",
          };
        return (s((K) => [...K, Z]), Z);
      },
      addContactFromImport: (B, F = "默认分组") => {
        if (!B || typeof B != "object") return null;
        const D = Date.now().toString(),
          $ = [
            "name",
            "nickname",
            "wechatName",
            "gender",
            "socialId",
            "wechatId",
            "phone",
            "region",
            "signature",
            "avatar",
            "portrait",
            "momentsBg",
            "setting",
            "openingLines",
            "remark",
            "decoration",
            "hideFromCrossApps",
          ],
          P = { color: "#FFF1F7", textColor: "#6A5460", text: "标签" },
          z = {
            id: D,
            group: B.group || F,
            remark: B.remark ?? "",
            decoration: B.decoration ? { ...P, ...B.decoration } : P,
            douyinId:
              B.douyinId ||
              "dy_" +
                Math.random().toString(36).substr(2, 9) +
                Date.now().toString().substr(-4),
          };
        return (
          $.forEach((O) => {
            B[O] !== void 0 && (z[O] = B[O]);
          }),
          !z.nickname && B.wechatName && (z.nickname = B.wechatName),
          !z.wechatId && z.socialId && (z.wechatId = z.socialId),
          !z.socialId && z.wechatId && (z.socialId = z.wechatId),
          (z.decoration = z.decoration ? { ...P, ...z.decoration } : P),
          s((O) => [...O, z]),
          z
        );
      },
      deleteContact: (B) => {
        const F = String(B);
        F !== String(io) &&
          s((D) => D.filter(($) => String($ == null ? void 0 : $.id) !== F));
      },
    };
  },
  uj = "chat_app_favorites";
function mP() {
  const [t, s] = l.useState([]),
    [n, a] = l.useState(!1);
  return (
    l.useEffect(() => {
      (async () => {
        const u = await be.get(uj);
        (u != null && Array.isArray(u) && s(u), a(!0));
      })();
    }, []),
    l.useEffect(() => {
      n && be.set(uj, t);
    }, [t, n]),
    {
      favorites: t,
      addFavorite: (d) => {
        const u = `${d.chatId}-${d.messageId}-${Date.now()}`;
        return (s((f) => [...f, { ...d, id: u }]), u);
      },
      addFavorites: (d) => {
        const u = d.map((f) => ({
          ...f,
          id: `${f.chatId}-${f.messageId}-${Date.now()}-${Math.random().toString(36).slice(2)}`,
        }));
        s((f) => [...f, ...u]);
      },
      removeFavorite: (d) => {
        s((u) => u.filter((f) => f.id !== d));
      },
      removeFavoritesForChatIds: (d) => {
        const u = new Set((d || []).map(String).filter(Boolean));
        u.size !== 0 &&
          s((f) =>
            f.filter(
              (p) =>
                (p == null ? void 0 : p.chatId) == null ||
                !u.has(String(p.chatId)),
            ),
          );
      },
      isFavoritesLoaded: n,
    }
  );
}
const pP = "music_app_db",
  xP = 5,
  VS = ["music", "leting"];
let Kg = null;
const jo = () => (
    Kg ||
      (Kg = new Promise((t, s) => {
        const n = indexedDB.open(pP, xP);
        ((n.onerror = (a) => {
          s("Database error: " + a.target.error);
        }),
          (n.onsuccess = (a) => {
            t(a.target.result);
          }),
          (n.onupgradeneeded = (a) => {
            const r = a.target.result;
            VS.forEach((i) => {
              const o = `${i}_songs`,
                c = `${i}_playlists`,
                d = `${i}_netease_cache`;
              (r.objectStoreNames.contains(o) ||
                r
                  .createObjectStore(o, { keyPath: "id" })
                  .createIndex("playlistId", "playlistId", { unique: !1 }),
                r.objectStoreNames.contains(c) ||
                  r.createObjectStore(c, { keyPath: "id" }),
                r.objectStoreNames.contains(d) ||
                  r.createObjectStore(d, { keyPath: "key" }));
            });
          }));
      })),
    Kg
  ),
  co = (t) => {
    if (!VS.includes(t)) throw new Error(`未知的存储前缀: ${t}`);
    const s = `${t}_songs`,
      n = `${t}_playlists`,
      a = `${t}_netease_cache`;
    return {
      getAllPlaylists: async () => {
        const r = await jo();
        return new Promise((i, o) => {
          const u = r.transaction([n], "readonly").objectStore(n).getAll();
          ((u.onsuccess = () => i(u.result)), (u.onerror = () => o(u.error)));
        });
      },
      savePlaylist: async (r) => {
        const i = await jo();
        return new Promise((o, c) => {
          const f = i.transaction([n], "readwrite").objectStore(n).put(r);
          ((f.onsuccess = () => o(f.result)), (f.onerror = () => c(f.error)));
        });
      },
      deletePlaylist: async (r) => {
        const i = await jo();
        return new Promise((o, c) => {
          const d = i.transaction([n, s], "readwrite");
          d.objectStore(n).delete(r);
          const m = d
            .objectStore(s)
            .index("playlistId")
            .openCursor(IDBKeyRange.only(r));
          ((m.onsuccess = (h) => {
            const g = h.target.result;
            g && (g.delete(), g.continue());
          }),
            (d.oncomplete = () => o()),
            (d.onerror = () => c(d.error)));
        });
      },
      addSong: async (r) => {
        const i = await jo();
        return new Promise((o, c) => {
          const f = i.transaction([s], "readwrite").objectStore(s).put(r);
          ((f.onsuccess = () => o(f.result)), (f.onerror = () => c(f.error)));
        });
      },
      getAllSongs: async () => {
        const r = await jo();
        return new Promise((i, o) => {
          const u = r.transaction([s], "readonly").objectStore(s).getAll();
          ((u.onsuccess = () => i(u.result)), (u.onerror = () => o(u.error)));
        });
      },
      getSongsByPlaylist: async (r) => {
        const i = await jo();
        return new Promise((o, c) => {
          const p = i
            .transaction([s], "readonly")
            .objectStore(s)
            .index("playlistId")
            .getAll(r);
          ((p.onsuccess = () => o(p.result)), (p.onerror = () => c(p.error)));
        });
      },
      deleteSong: async (r) => {
        const i = await jo();
        return new Promise((o, c) => {
          const f = i.transaction([s], "readwrite").objectStore(s).delete(r);
          ((f.onsuccess = () => o(f.result)), (f.onerror = () => c(f.error)));
        });
      },
      deleteSongsByPlaylistId: async (r) => {
        const i = await jo();
        return new Promise((o, c) => {
          const d = i.transaction([s], "readwrite"),
            p = d
              .objectStore(s)
              .index("playlistId")
              .openCursor(IDBKeyRange.only(r));
          ((p.onsuccess = (m) => {
            const h = m.target.result;
            h && (h.delete(), h.continue());
          }),
            (d.oncomplete = () => o()),
            (d.onerror = () => c(d.error)));
        });
      },
      getNeteaseCache: async (r) => {
        const i = await jo();
        return new Promise((o, c) => {
          const f = i.transaction([a], "readonly").objectStore(a).get(r);
          ((f.onsuccess = () => o(f.result ? f.result.data : null)),
            (f.onerror = () => c(f.error)));
        });
      },
      setNeteaseCache: async (r, i) => {
        const o = await jo();
        return new Promise((c, d) => {
          const p = o
            .transaction([a], "readwrite")
            .objectStore(a)
            .put({ key: r, data: i, timestamp: Date.now() });
          ((p.onsuccess = () => c(p.result)), (p.onerror = () => d(p.error)));
        });
      },
    };
  },
  hP = async () => {
    const t = await jo(),
      s = (i) =>
        new Promise((o, c) => {
          const u = t.transaction([i], "readonly").objectStore(i).getAll();
          ((u.onsuccess = () => o(u.result || [])),
            (u.onerror = () => c(u.error)));
        }),
      [n, a, r] = await Promise.all([
        s("leting_playlists"),
        s("leting_songs"),
        s("leting_netease_cache"),
      ]);
    return { playlists: n, songs: a, neteaseCache: r };
  },
  gP = async ({ playlists: t, songs: s, neteaseCache: n }) => {
    const a = await jo();
    return new Promise((r, i) => {
      const o = a.transaction(
          ["leting_playlists", "leting_songs", "leting_netease_cache"],
          "readwrite",
        ),
        c = (d, u) => {
          const f = o.objectStore(d);
          f.clear();
          for (const p of u) f.put(p);
        };
      (c("leting_playlists", t),
        c("leting_songs", s),
        c("leting_netease_cache", n),
        (o.oncomplete = () => r()),
        (o.onerror = () => i(o.error)));
    });
  },
  Ra = async (t, s, n = "", a = {}) => {
    if (!t) throw new Error("API Endpoint not set");
    let r = `${t}${s}`;
    if (n) {
      const i = r.includes("?") ? "&" : "?";
      r += `${i}cookie=${encodeURIComponent(n)}`;
    }
    if (!r.includes("timestamp=")) {
      const i = r.includes("?") ? "&" : "?";
      r += `${i}timestamp=${Date.now()}`;
    }
    try {
      return await (await fetch(r, { cache: "no-store", ...a })).json();
    } catch (i) {
      throw i;
    }
  },
  Pi = {
    loginQrKey: (t) => Ra(t, "/login/qr/key"),
    loginQrCreate: (t, s) => Ra(t, `/login/qr/create?key=${s}&qrimg=true`),
    loginQrCheck: (t, s, n = !1) =>
      Ra(t, `/login/qr/check?key=${s}${n ? "&noCookie=true" : ""}`),
    loginStatus: (t, s) => Ra(t, "/login/status", s, { method: "POST" }),
    refreshLogin: (t, s) => Ra(t, "/login/refresh", s),
    logout: (t, s) => Ra(t, "/logout", s),
    loginCellphone: (t, s, n, a = "", r = "") => {
      let i = `/login/cellphone?phone=${encodeURIComponent(s)}`;
      return (
        n && (i += `&password=${encodeURIComponent(n)}`),
        a && (i += `&countrycode=${a}`),
        r && (i += `&captcha=${r}`),
        Ra(t, i)
      );
    },
    loginEmail: (t, s, n) =>
      Ra(
        t,
        `/login?email=${encodeURIComponent(s)}&password=${encodeURIComponent(n)}`,
      ),
    sentCaptcha: (t, s, n = "86") =>
      Ra(t, `/captcha/sent?phone=${encodeURIComponent(s)}&ctcode=${n}`),
    verifyCaptcha: (t, s, n, a = "86") =>
      Ra(
        t,
        `/captcha/verify?phone=${encodeURIComponent(s)}&captcha=${n}&ctcode=${a}`,
      ),
    getUserDetail: (t, s, n) => Ra(t, `/user/detail?uid=${s}`, n),
    getUserPlaylists: (t, s, n) => Ra(t, `/user/playlist?uid=${s}`, n),
    getLikedSongs: (t, s, n) => Ra(t, `/likelist?uid=${s}`, n),
    likeSong: (t, s, n, a) => Ra(t, `/like?id=${s}&like=${n}`, a),
    getPlaylistDetail: (t, s, n) => Ra(t, `/playlist/detail?id=${s}`, n),
    getAllPlaylistTracks: (t, s, n) => Ra(t, `/playlist/track/all?id=${s}`, n),
    createPlaylist: (t, s, n) =>
      Ra(t, `/playlist/create?name=${encodeURIComponent(s)}`, n),
    deletePlaylist: (t, s, n) => Ra(t, `/playlist/delete?id=${s}`, n),
    subscribePlaylist: (t, s, n, a) =>
      Ra(t, `/playlist/subscribe?t=${n}&id=${s}`, a),
    manipulatePlaylistTracks: (t, s, n, a, r) =>
      Ra(t, `/playlist/tracks?op=${s}&pid=${n}&tracks=${a}`, r),
    updatePlaylistPlayCount: (t, s, n) =>
      Ra(t, `/playlist/update/playcount?id=${s}`, n),
    getSongUrl: (t, s, n, a = "exhigh", r = !1) => {
      const i = n && n.includes("os=pc") ? n : n ? `${n}; os=pc` : "os=pc";
      let o = `/song/url/v1?id=${s}&level=${a}`;
      return (r && (o += "&unblock=true"), Ra(t, o, i));
    },
    getSongUrlOld: (t, s, n) => Ra(t, `/song/url?id=${s}`, n),
    getSongUrlMatch: (t, s, n) => Ra(t, `/song/url/match?id=${s}`, n),
    getSongDetail: (t, s, n) => Ra(t, `/song/detail?ids=${s}`, n),
    getLyric: (t, s, n) => Ra(t, `/lyric?id=${s}`, n),
    getNewLyric: (t, s, n) => Ra(t, `/lyric/new?id=${s}`, n),
    checkMusic: (t, s, n) => Ra(t, `/check/music?id=${s}`, n),
    getSongDownloadUrl: (t, s, n) =>
      Ra(t, `/song/download/url/v1?id=${s}&level=lossless`, n),
    getRecommendSongs: (t, s) => Ra(t, "/recommend/songs", s),
    getRecommendResource: (t, s) => Ra(t, "/recommend/resource", s),
    search: (t, s, n = 1, a = 30, r = 0, i) =>
      Ra(
        t,
        `/cloudsearch?keywords=${encodeURIComponent(s)}&type=${n}&limit=${a}&offset=${r}`,
        i,
      ),
    scrobble: (t, s, n, a, r) =>
      Ra(t, `/scrobble?id=${s}&sourceid=${n}&time=${a}`, r),
  },
  fj = co("leting"),
  JS = l.createContext(),
  Ii = () => {
    const t = l.useContext(JS);
    if (t === void 0)
      throw new Error(
        "useMusic 必须在 App 根部的 LetingProvider 内使用（乐听组件勿再嵌套第二层 Provider）",
      );
    return t;
  },
  bP = ({ children: t }) => {
    const [s, n] = Yn("leting_api_endpoint", ""),
      [a, r] = Yn("leting_user", null),
      [i, o] = Yn("leting_cookie", ""),
      [c, d] = l.useState(null),
      [u, f] = l.useState(!1),
      [p, m] = l.useState(!1),
      [h, g] = l.useState([]),
      [x, y] = l.useState("sequence"),
      [v, b] = l.useState(1),
      N = l.useRef(new Audio());
    (l.useEffect(() => {
      const K = N.current,
        q = () => {
          O();
        };
      return (
        K.addEventListener("ended", q),
        () => K.removeEventListener("ended", q)
      );
    }, [h, c, x]),
      l.useEffect(() => {
        c &&
          (N.current.pause(),
          m(!0),
          (async () => {
            let q = c.url;
            if (
              (q || (q = await j(c.id)),
              q && ((N.current.src = q), (N.current.volume = v), u))
            )
              try {
                await N.current.play();
              } catch {}
            m(!1);
          })());
      }, [c]),
      l.useEffect(() => {
        N.current.volume = v;
      }, [v]),
      l.useEffect(() => {
        u && !p ? N.current.play().catch((K) => {}) : N.current.pause();
      }, [u, p]));
    const w = async (K, q = {}) => {
        if (!s) throw new Error("API Endpoint not set");
        const V = { method: "GET" };
        i &&
          (K.includes("?")
            ? (K += `&cookie=${encodeURIComponent(i)}`)
            : (K += `?cookie=${encodeURIComponent(i)}`));
        const ne = `${s}${K}`;
        try {
          return await (await fetch(ne, { ...V, ...q })).json();
        } catch (le) {
          throw le;
        }
      },
      _ = async (K, q, V, ne, le) => {
        const ie = le || s;
        if (!ie) return { success: !1, msg: "API Endpoint not set" };
        try {
          const X = await Pi.loginCellphone(ie, K, q, V, ne);
          return X.code === 200
            ? (C(X.profile, X.cookie, ie), { success: !0, data: X })
            : { success: !1, msg: X.msg || X.message || "登录失败" };
        } catch (X) {
          return { success: !1, msg: X.message };
        }
      },
      A = async (K, q, V) => {
        const ne = V || s;
        if (!ne) return { success: !1, msg: "API Endpoint not set" };
        try {
          const le = await Pi.loginEmail(ne, K, q);
          return le.code === 200
            ? (C(le.profile, le.cookie, ne), { success: !0, data: le })
            : { success: !1, msg: le.msg || le.message || "登录失败" };
        } catch (le) {
          return { success: !1, msg: le.message };
        }
      },
      k = async (K, q) => {
        if (!s) return !1;
        try {
          return (await Pi.sentCaptcha(s, K, q)).code === 200;
        } catch {
          return !1;
        }
      },
      C = (K, q, V) => {
        (K && r(K), q && o(q), V && n(V));
      },
      M = () => {
        (r(null), o(""));
      },
      E = async (K, q = {}) => {
        var ie, X;
        if (!s || !(K != null && K.trim())) return [];
        const { type: V = 1, limit: ne = 30, offset: le = 0 } = q;
        try {
          const je = await Pi.search(s, K.trim(), V, ne, le, i || "");
          if (je.code !== 200) return [];
          const xe =
            ((ie = je.result) == null ? void 0 : ie.songs) ??
            ((X = je.result) == null ? void 0 : X.song);
          return Array.isArray(xe) ? xe : [];
        } catch {
          return [];
        }
      },
      S = async () => {
        var K, q;
        if (!s || !i) return [];
        try {
          const V = await w("/recommend/songs");
          if (V.code !== 200) return [];
          const ne =
            ((K = V.data) == null ? void 0 : K.dailySongs) ??
            ((q = V.data) == null ? void 0 : q.recommend) ??
            V.recommend ??
            [];
          return Array.isArray(ne) ? ne : [];
        } catch {
          return [];
        }
      },
      j = async (K) => {
        let q = null;
        if (s)
          try {
            const V = await Pi.getSongUrl(s, K, i, "exhigh");
            if (V.data && V.data[0] && V.data[0].url) q = V.data[0].url;
            else {
              const ne = await Pi.getSongUrlOld(s, K, i);
              if (ne.data && ne.data[0] && ne.data[0].url) q = ne.data[0].url;
              else {
                const le = await Pi.getSongUrlMatch(s, K, i);
                le.data && le.data[0] && le.data[0].url && (q = le.data[0].url);
              }
            }
          } catch {}
        return q;
      },
      T = async (K) => {
        if (s)
          try {
            await Pi.updatePlaylistPlayCount(s, K, i);
          } catch {}
      },
      I = async (K) => {
        var V;
        try {
          const ne = await fj.getNeteaseCache(`lyric_${K}`);
          if (ne) return ne;
        } catch {}
        let q = null;
        if (s)
          try {
            const ne = await w(`/lyric?id=${K}`);
            ne &&
              ne.lrc &&
              (typeof ne.lrc == "object" && ne.lrc.lyric
                ? (q = {
                    lrc: ne.lrc.lyric,
                    tlyric: (V = ne.tlyric) == null ? void 0 : V.lyric,
                  })
                : (q = ne));
          } catch {}
        if (q && q.lrc)
          try {
            await fj.setNeteaseCache(`lyric_${K}`, q);
          } catch {}
        return q;
      },
      L = async (K) => {
        if (!s) return [];
        try {
          return (await w(`/song/detail?ids=${K}`)).songs || [];
        } catch {
          return [];
        }
      },
      B = async (K) => {
        try {
          return (await w(`/user/playlist?uid=${K}`)).playlist || [];
        } catch {
          return [];
        }
      },
      F = async (K) => {
        try {
          return (await w(`/playlist/track/all?id=${K}`)).songs || [];
        } catch {
          return [];
        }
      },
      D = async () => {
        try {
          return (await w("/recommend/resource")).recommend || [];
        } catch {
          return [];
        }
      },
      $ = (K) => {
        (h.findIndex((V) => V.id === K.id) === -1 && g([K, ...h]),
          N.current.pause(),
          m(!0),
          d(K),
          f(!0));
      },
      P = (K, q = 0) => {
        (N.current.pause(), m(!0), g(K), d(K[q]), f(!0));
      },
      z = () => {
        f(!u);
      },
      O = () => {
        if (h.length === 0) return;
        const K = h.findIndex((V) => V.id === (c == null ? void 0 : c.id));
        let q;
        (x === "random"
          ? (q = Math.floor(Math.random() * h.length))
          : (q = (K + 1) % h.length),
          N.current.pause(),
          m(!0),
          d(h[q]),
          f(!0));
      },
      Z = () => {
        if (h.length === 0) return;
        let q =
          (h.findIndex((V) => V.id === (c == null ? void 0 : c.id)) -
            1 +
            h.length) %
          h.length;
        (d(h[q]), f(!0));
      };
    return e.jsx(JS.Provider, {
      value: {
        apiEndpoint: s,
        setApiEndpoint: n,
        user: a,
        cookie: i,
        loginByPhone: _,
        loginByEmail: A,
        sendCaptcha: k,
        loginSuccess: C,
        logout: M,
        search: E,
        fetchRecommendSongs: S,
        fetchUserPlaylists: B,
        fetchPlaylistDetail: F,
        fetchRecommendResource: D,
        fetchMusicUrl: j,
        updatePlaylistPlayCount: T,
        fetchLyric: I,
        fetchSongDetail: L,
        currentTrack: c,
        isPlaying: u,
        isBuffering: p,
        playlist: h,
        playTrack: $,
        playPlaylist: P,
        togglePlay: z,
        playNext: O,
        playPrev: Z,
        playMode: x,
        setPlayMode: y,
        musicVolume: v,
        setMusicVolume: b,
      },
      children: t,
    });
  },
  yP = (t, s) => {
    const {
        playPlaylist: n,
        playTrack: a,
        togglePlay: r,
        playNext: i,
        search: o,
      } = Ii(),
      [c, d] = l.useState({
        isActive: !1,
        chatId: null,
        startTime: null,
        playlist: null,
        partnerId: null,
      }),
      u = (m, h, g) => {
        (d({
          isActive: !0,
          chatId: m,
          startTime: Date.now(),
          playlist: h,
          partnerId: g,
        }),
          h && h.tracks ? n(h.tracks) : h && h.id);
      };
    return {
      listenTogetherState: c,
      startListenTogether: u,
      endListenTogether: () => {
        d({
          isActive: !1,
          chatId: null,
          startTime: null,
          playlist: null,
          partnerId: null,
        });
      },
      handleListenTogetherMessage: (m, h, g) => {
        let x = m;
        x.match(/\[INVITE_LISTEN:(.*?)\]/);
        const y = x.match(/\[ACCEPT_LISTEN:(.*?)\]/);
        if (y) {
          const N = y[1];
          try {
            const w = JSON.parse(N),
              _ = t.current.find((A) => A.id === h);
            _ &&
              (u(h, w, _.contactId),
              g.push({
                id: Date.now().toString() + "-sys-listen-start",
                text: "对方接受了邀请，开始一起听",
                type: "system",
                sender: "system",
                timestamp: new Date().toISOString(),
              }));
          } catch {}
          x = x.replace(y[0], "").trim();
        }
        const v = x.match(/\[REJECT_LISTEN\]/);
        v && (x = x.replace(v[0], "").trim());
        const b = x.match(/\[LISTEN_CONTROL:(.*?):(.*?)\]/);
        if (b) {
          const N = b[1],
            w = b[2];
          ((x = x.replace(b[0], "").trim()),
            c.isActive &&
              (N === "PAUSE" && r(),
              N === "PLAY" && r(),
              N === "NEXT" && i(),
              N === "ADD_SONG" &&
                o(w).then((_) => {
                  _ &&
                    _.length > 0 &&
                    (a(_[0]),
                    g.push({
                      id: Date.now().toString() + "-sys-add-song",
                      text: `AI 添加了歌曲: ${_[0].name}`,
                      type: "system_music_info",
                      sender: "system",
                      timestamp: new Date().toISOString(),
                    }));
                })));
        }
        return x;
      },
    };
  },
  vP = [{ id: "default", name: "默认", boundContacts: [] }],
  wP = () => {
    const [t, s] = l.useState([]),
      [n, a] = l.useState(!1),
      [r, i] = l.useState(vP),
      [o, c] = l.useState(!1);
    return (
      l.useEffect(() => {
        (async () => {
          const N = await be.get("chat_app_memes");
          (N != null && s(N), a(!0));
        })();
      }, []),
      l.useEffect(() => {
        (async () => {
          const N = await be.get("chat_app_meme_categories");
          (N != null && i(N), c(!0));
        })();
      }, []),
      l.useEffect(() => {
        n && be.set("chat_app_memes", t);
      }, [t, n]),
      l.useEffect(() => {
        o && be.set("chat_app_meme_categories", r);
      }, [r, o]),
      {
        memes: t,
        memeCategories: r,
        addMeme: (b, N, w) => {
          const _ = {
            id: Date.now().toString(),
            url: b,
            meaning: N,
            categoryIds: w ? [w] : [],
          };
          s((A) => [...A, _]);
        },
        addMemes: (b, N) => {
          const w = b.map((_) => ({
            id: Date.now().toString() + Math.random().toString(36).substr(2, 5),
            url: _.url,
            meaning: _.meaning,
            categoryIds: N ? [N] : [],
          }));
          s((_) => [..._, ...w]);
        },
        deleteMeme: (b) => {
          s((N) => N.filter((w) => w.id !== b));
        },
        deleteMemes: (b) => {
          s((N) => N.filter((w) => !b.includes(w.id)));
        },
        updateMeme: (b, N) => {
          const { url: w, meaning: _, categoryIds: A } = N;
          s((k) =>
            k.map((C) => {
              if (C.id !== b) return C;
              const M = { ...C };
              return (
                w !== void 0 && (M.url = w),
                _ !== void 0 && (M.meaning = _),
                A !== void 0 && (M.categoryIds = A),
                M
              );
            }),
          );
        },
        addMemeCategory: (b) => {
          const N = { id: Date.now().toString(), name: b, boundContacts: [] };
          return (i((w) => [...w, N]), N);
        },
        deleteMemeCategory: (b) => {
          (i((N) => N.filter((w) => w.id !== b)),
            s((N) =>
              N.map((w) => ({
                ...w,
                categoryIds: (w.categoryIds || []).filter((_) => _ !== b),
              })),
            ));
        },
        addMemesToCategory: (b, N) => {
          s((w) =>
            w.map((_) => {
              if (b.includes(_.id)) {
                const A = _.categoryIds || [];
                if (!A.includes(N)) return { ..._, categoryIds: [...A, N] };
              }
              return _;
            }),
          );
        },
        bindCategoryToContact: (b, N) => {
          i((w) => w.map((_) => (_.id === b ? { ..._, boundContacts: N } : _)));
        },
        removeContactFromAllMemeBindings: (b) => {
          const N = String(b);
          i((w) =>
            w.map((_) => ({
              ..._,
              boundContacts: (_.boundContacts || []).filter(
                (A) => String(A) !== N,
              ),
            })),
          );
        },
      }
    );
  },
  jP = (t, s, n, a) => {
    const [r, i] = l.useState([]),
      o = l.useRef([]);
    o.current = r;
    const [c, d] = l.useState(!1);
    (l.useEffect(() => {
      (async () => {
        const S = await be.get("chat_app_moments");
        (S != null && i(S), d(!0));
      })();
    }, []),
      l.useEffect(() => {
        c && be.set("chat_app_moments", r);
      }, [r, c]));
    const [u, f] = l.useState(!1),
      p = l.useRef(0),
      m = l.useRef(new Map()),
      h = l.useRef(!1),
      g = l.useMemo(() => jv(t || {}), [t]),
      x = (E, S) => {
        var I;
        const j = new Map(),
          T = Array.isArray(E) ? E : [];
        for (const L of T) {
          if (!L || L.id == null) continue;
          const B = Number(L.likes) || 0,
            F = !!L.isLiked,
            D = Array.isArray(L.comments) ? L.comments : [];
          let $ = 0;
          for (const P of D) {
            const z = String((P == null ? void 0 : P.user) ?? "").trim(),
              O = Number(P == null ? void 0 : P.timestamp) || 0;
            !z ||
              !O ||
              ((I = S == null ? void 0 : S.has) != null && I.call(S, z)) ||
              ($ = Math.max($, O));
          }
          j.set(String(L.id), {
            likes: B,
            commentsLen: D.length,
            isLiked: F,
            externalCommentMaxTs: $,
          });
        }
        return j;
      };
    return (
      l.useEffect(() => {
        const E = Array.isArray(r) ? r : [];
        if (E.length === 0) {
          ((m.current = new Map()), (h.current = !1));
          return;
        }
        if (c && h.current === !1) {
          ((m.current = x(E, g)), (h.current = !0));
          return;
        }
        const S = m.current || new Map();
        let j = !1;
        const T = Number(p.current) || 0;
        for (const I of E) {
          if (!I || I.id == null) continue;
          const L = String(I.id),
            B = Number(I.timestamp) || 0,
            F = S.get(L);
          if (!F && B > T && !Tc(I, t || {})) {
            j = !0;
            break;
          }
          if (Tc(I, t || {})) {
            const D = Number(I.likes) || 0,
              $ = !!I.isLiked,
              P = Array.isArray(I.comments) ? I.comments : [];
            if (F) {
              const z = D - (Number(F.likes) || 0);
              if (
                !(
                  (z === 1 && F.isLiked === !1 && $ === !0) ||
                  (z === -1 && F.isLiked === !0 && $ === !1)
                ) &&
                z > 0 &&
                (B > T || Date.now() > T)
              ) {
                j = !0;
                break;
              }
              if (P.length > (Number(F.commentsLen) || 0)) {
                let Z = !1;
                const K = Math.max(0, Number(F.commentsLen) || 0);
                for (let q = K; q < P.length; q++) {
                  const V = P[q],
                    ne = String((V == null ? void 0 : V.user) ?? "").trim(),
                    le = Number(V == null ? void 0 : V.timestamp) || 0;
                  if (ne && !g.has(ne) && !(T && le && le <= T)) {
                    Z = !0;
                    break;
                  }
                }
                if (Z) {
                  j = !0;
                  break;
                }
              }
            }
          }
        }
        (j && f(!0), (m.current = x(E, g)));
      }, [r, g, t, c]),
      {
        moments: r,
        setMoments: i,
        unreadMoments: u,
        setUnreadMoments: f,
        syncMomentsUser: (E, S) => {
          i((j) =>
            j.map((T) =>
              T.user.name === E
                ? { ...T, user: { ...T.user, name: S.name, avatar: S.avatar } }
                : T,
            ),
          );
        },
        syncMomentsAvatar: (E, S) => {
          i((j) =>
            j.map((T) =>
              T.user.name === E ? { ...T, user: { ...T.user, avatar: S } } : T,
            ),
          );
        },
        addMoment: (E, S = null, j = {}) => {
          const T = Array.isArray(S) ? S : S ? [S] : [],
            I = Vo(t),
            L =
              (j == null ? void 0 : j.visibilityMode) === "selected"
                ? "selected"
                : "public",
            B = Array.isArray(j == null ? void 0 : j.visibleToContactIds)
              ? j.visibleToContactIds
              : [],
            F = [
              ...new Set(B.map(($) => String($ ?? "").trim()).filter(Boolean)),
            ],
            D = {
              id: Date.now(),
              user: { name: I, avatar: t.avatar },
              content: E,
              image: T[0] || null,
              images: T.length ? T : void 0,
              likes: 0,
              comments: [],
              timestamp: Date.now(),
              time: "刚刚",
              isLiked: !1,
              isPinned: !1,
              visibilityMode: L,
              visibleToContactIds: L === "selected" ? F : void 0,
            };
          (i(($) => [D, ...$]), a && a(D, "new_post", t));
        },
        forwardMoment: (E) => {
          const S = Vo(t),
            j = {
              ...E,
              id: Date.now(),
              user: { name: S, avatar: t.avatar },
              timestamp: Date.now(),
              time: "刚刚",
              likes: 0,
              comments: [],
              isLiked: !1,
            };
          i((T) => [j, ...T]);
        },
        deleteMoment: (E) => {
          i((S) => S.filter((j) => j.id !== E));
        },
        deleteComment: (E, S, j = -1) => {
          i((T) =>
            T.map((I) => {
              if (I.id !== E) return I;
              const L = I.comments || [],
                B =
                  S != null
                    ? L.filter((F) => F.id !== S)
                    : j >= 0 && j < L.length
                      ? L.filter((F, D) => D !== j)
                      : L;
              return { ...I, comments: B };
            }),
          );
        },
        replyToComment: (E, S, j = null) => {
          i((I) =>
            I.map((L) =>
              L.id === E
                ? {
                    ...L,
                    comments: [
                      ...(L.comments || []),
                      {
                        id: Date.now(),
                        user: Vo(t),
                        text: S,
                        content: S,
                        replyTo: j,
                        timestamp: Date.now(),
                      },
                    ],
                  }
                : L,
            ),
          );
          const T = o.current.find((I) => I.id === E);
          T && a && a(T, "new_comment", t, S, j);
        },
        toggleLikeMoment: (E) => {
          i((S) =>
            S.map((j) =>
              j.id === E
                ? {
                    ...j,
                    likes: j.isLiked ? j.likes - 1 : j.likes + 1,
                    isLiked: !j.isLiked,
                  }
                : j,
            ),
          );
        },
        togglePinMoment: (E) => {
          i((S) =>
            S.map((j) => (j.id === E ? { ...j, isPinned: !j.isPinned } : j)),
          );
        },
        clearUnreadMoments: () => {
          ((p.current = Date.now()), (m.current = x(o.current, g)), f(!1));
        },
      }
    );
  },
  NP = "ChatApp_Audio",
  Ic = "audios_v2",
  kP = 2,
  kv = () =>
    new Promise((t, s) => {
      const n = indexedDB.open(NP, kP);
      ((n.onerror = () => s(n.error)),
        (n.onsuccess = () => t(n.result)),
        (n.onupgradeneeded = (a) => {
          const r = a.target.result;
          r.objectStoreNames.contains(Ic) || r.createObjectStore(Ic);
        }));
    }),
  bc = async (t, s) => {
    try {
      const n = await s.arrayBuffer(),
        a = s.type,
        r = await kv();
      await new Promise((i, o) => {
        const u = r
          .transaction(Ic, "readwrite")
          .objectStore(Ic)
          .put({ buffer: n, type: a }, t);
        ((u.onsuccess = () => i()), (u.onerror = () => o(u.error)));
      });
    } catch {}
  },
  Ec = async (t) => {
    try {
      const s = await kv(),
        n = await new Promise((a, r) => {
          const c = s.transaction(Ic, "readonly").objectStore(Ic).get(t);
          ((c.onsuccess = () => a(c.result)), (c.onerror = () => r(c.error)));
        });
      return n && n.buffer
        ? new Blob([n.buffer], { type: n.type || "audio/mpeg" })
        : n instanceof Blob
          ? n
          : null;
    } catch {
      return null;
    }
  },
  uh = async (t) => {
    try {
      const s = await kv();
      await new Promise((n, a) => {
        const o = s.transaction(Ic, "readwrite").objectStore(Ic).delete(t);
        ((o.onsuccess = () => n()), (o.onerror = () => a(o.error)));
      });
    } catch {}
  },
  Rd = Object.freeze(
    Object.defineProperty(
      { __proto__: null, deleteAudio: uh, getAudio: Ec, saveAudio: bc },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  qg = (t) => {
    try {
      const s = window.AudioContext || window.webkitAudioContext;
      if (!s) return;
      const n = new s(),
        a = (o, c) => {
          (o.connect(c), c.connect(n.destination));
        };
      if (t === "click") {
        const o = n.createOscillator(),
          c = n.createGain();
        (a(o, c),
          (o.type = "triangle"),
          o.frequency.setValueAtTime(220, n.currentTime),
          o.frequency.exponentialRampToValueAtTime(140, n.currentTime + 0.12),
          c.gain.setValueAtTime(1e-4, n.currentTime),
          c.gain.exponentialRampToValueAtTime(0.16, n.currentTime + 0.008),
          c.gain.exponentialRampToValueAtTime(0.001, n.currentTime + 0.14));
        const d = n.createOscillator(),
          u = n.createGain();
        (a(d, u),
          (d.type = "sine"),
          d.frequency.setValueAtTime(560, n.currentTime),
          d.frequency.exponentialRampToValueAtTime(320, n.currentTime + 0.06),
          u.gain.setValueAtTime(1e-4, n.currentTime),
          u.gain.exponentialRampToValueAtTime(0.07, n.currentTime + 0.004),
          u.gain.exponentialRampToValueAtTime(0.001, n.currentTime + 0.08),
          o.start(),
          d.start(),
          o.stop(n.currentTime + 0.16),
          d.stop(n.currentTime + 0.09));
        return;
      }
      const r = n.createOscillator(),
        i = n.createGain();
      if ((a(r, i), t === "send")) {
        ((r.type = "sine"),
          r.frequency.setValueAtTime(800, n.currentTime),
          r.frequency.exponentialRampToValueAtTime(400, n.currentTime + 0.1),
          i.gain.setValueAtTime(0.1, n.currentTime),
          i.gain.exponentialRampToValueAtTime(0.001, n.currentTime + 0.1),
          r.start(),
          r.stop(n.currentTime + 0.1));
        return;
      }
      ((r.type = "sine"),
        r.frequency.setValueAtTime(600, n.currentTime),
        i.gain.setValueAtTime(0.1, n.currentTime),
        r.start(),
        setTimeout(() => {
          if (n.state === "closed") return;
          const o = n.createOscillator(),
            c = n.createGain();
          (a(o, c),
            o.frequency.setValueAtTime(1e3, n.currentTime),
            c.gain.setValueAtTime(0.1, n.currentTime),
            c.gain.exponentialRampToValueAtTime(0.001, n.currentTime + 0.3),
            o.start(),
            o.stop(n.currentTime + 0.3));
        }, 100),
        i.gain.exponentialRampToValueAtTime(0.001, n.currentTime + 0.1),
        r.stop(n.currentTime + 0.1));
    } catch {}
  },
  Pd = () => {
    try {
      const t = window.AudioContext || window.webkitAudioContext;
      if (!t) return;
      const s = new t(),
        n = s.currentTime,
        a = (r, i, o) => {
          const c = s.createOscillator(),
            d = s.createGain();
          (c.connect(d),
            d.connect(s.destination),
            (c.type = "sine"),
            c.frequency.setValueAtTime(i, r),
            d.gain.setValueAtTime(1e-4, r),
            d.gain.exponentialRampToValueAtTime(0.11, r + 0.025),
            d.gain.exponentialRampToValueAtTime(1e-4, r + o),
            c.start(r),
            c.stop(r + o));
        };
      (a(n, 440, 0.18),
        a(n + 0.22, 880, 0.18),
        a(n + 0.48, 440, 0.18),
        a(n + 0.7, 880, 0.18),
        window.setTimeout(() => {
          try {
            s.close();
          } catch {}
        }, 1200));
    } catch {}
  },
  SP = () => {
    const [t, s] = l.useState(null),
      n = l.useRef(null),
      [a, r] = Yn("chat_app_system_notification", !1),
      [i, o] = Yn("chat_app_notification_strategy", "last"),
      [c, d] = Yn("chat_app_sound_enabled", !0),
      [u, f] = Yn("chat_app_send_sound_key", "default"),
      [p, m] = Yn("chat_app_receive_sound_key", "default"),
      [h, g] = Yn("chat_app_click_sound_key", "default"),
      [x, y] = Yn("chat_app_blocked_invite_ringtone_key", "default"),
      [v, b] = Yn("chat_app_click_glow_enabled", !1),
      [N, w] = Yn("chat_app_click_glow_asset", ""),
      _ = l.useRef({ intervalId: null, audio: null, objectUrl: null }),
      A = l.useCallback(() => {
        const T = _.current;
        if ((T.intervalId != null && clearInterval(T.intervalId), T.audio))
          try {
            (T.audio.pause(), (T.audio.src = ""));
          } catch {}
        if (T.objectUrl)
          try {
            URL.revokeObjectURL(T.objectUrl);
          } catch {}
        _.current = { intervalId: null, audio: null, objectUrl: null };
      }, []),
      k = l.useCallback(async () => {
        if ((A(), !c)) return;
        const T = x;
        if (T && T !== "default") {
          try {
            const I = await Ec(T);
            if (!I) {
              (Pd(),
                (_.current.intervalId = window.setInterval(() => {
                  Pd();
                }, 3200)));