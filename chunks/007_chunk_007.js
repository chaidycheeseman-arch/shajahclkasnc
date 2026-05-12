          (Je = X == null ? void 0 : X.current) == null
            ? void 0
            : Je.find((dt) => dt.id === t);
        if (qe && oe && ee) {
          const dt = [...qe.messages]
            .reverse()
            .find(
              (xt) =>
                xt.type === "system_fingerprint_request" &&
                xt.sender === "me" &&
                xt.status === "pending",
            );
          dt &&
            (oe(t, dt.id, { status: "rejected" }),
            ee(qe.contactId, { fingerprintStatus: "rejected" }));
        }
        ((fe = fe.replace(/\[REJECT_FINGERPRINT\]/g, "").trim()), (Ce = fe));
      }
      if (z && fe.includes("[ENABLE_FINGERPRINT]")) {
        const qe =
          (St = X == null ? void 0 : X.current) == null
            ? void 0
            : St.find((dt) => dt.id === t);
        (qe &&
          ee &&
          Array.isArray(n) &&
          (ee(qe.contactId, { fingerprintStatus: "approved" }),
          n.push({
            id: sr("fp-enable"),
            type: "system_fingerprint_change",
            sender: "system",
            action: "enabled",
            text: "已为你开通指纹解锁",
            timestamp: new Date().toISOString(),
          })),
          (fe = fe.replace(/\[ENABLE_FINGERPRINT\]/g, "").trim()),
          (Ce = fe));
      }
      if (z && fe.includes("[DISABLE_FINGERPRINT]")) {
        const qe =
          (Be = X == null ? void 0 : X.current) == null
            ? void 0
            : Be.find((dt) => dt.id === t);
        (qe &&
          ee &&
          Array.isArray(n) &&
          (ee(qe.contactId, { fingerprintStatus: "none" }),
          n.push({
            id: sr("fp-disable"),
            type: "system_fingerprint_change",
            sender: "system",
            action: "disabled",
            text: "已关闭指纹解锁",
            timestamp: new Date().toISOString(),
          })),
          (fe = fe.replace(/\[DISABLE_FINGERPRINT\]/g, "").trim()),
          (Ce = fe));
      }
      if (ne && /[\[［]\s*COUPLE_SPACE_ACCEPT\s*[\]］]/i.test(fe) && H && Y) {
        const qe =
          (Ke = X == null ? void 0 : X.current) == null
            ? void 0
            : Ke.find((dt) => dt.id === t);
        if (qe) {
          const dt = qe.contactId;
          H.get("couple_spaces").then((xt) => {
            const zt = typeof xt == "object" && xt !== null ? { ...xt } : {},
              ms = zt[dt] && typeof zt[dt] == "object" ? zt[dt] : {},
              Cs =
                Number.isFinite(Number(ms.startDate)) &&
                Number(ms.startDate) > 0
                  ? Number(ms.startDate)
                  : Date.now();
            ((zt[dt] = {
              ...ms,
              status: "active",
              startDate: Cs,
              connectedAt: Date.now(),
              coverImage: null,
              dailyMessage: "Love is in the air",
              lastHeartbeat: null,
              furnitureLayout: HF,
            }),
              H.set("couple_spaces", zt),
              Y(zt),
              typeof window < "u" &&
                window.dispatchEvent(
                  new CustomEvent(Rw, { detail: { spaces: zt } }),
                ));
          });
        }
        ((fe = fe
          .replace(/[\[［]\s*COUPLE_SPACE_ACCEPT\s*[\]］]/gi, "")
          .trim()),
          (Ce = fe));
      }
      if (ne && /[\[［]\s*COUPLE_SPACE_REJECT\s*[\]］]/i.test(fe) && H && Y) {
        const qe =
          (Nt = X == null ? void 0 : X.current) == null
            ? void 0
            : Nt.find((dt) => dt.id === t);
        if (qe) {
          const dt = qe.contactId;
          H.get("couple_spaces").then((xt) => {
            const zt = typeof xt == "object" && xt !== null ? { ...xt } : {};
            ((zt[dt] = { ...(zt[dt] || {}), status: "rejected" }),
              H.set("couple_spaces", zt),
              Y(zt),
              typeof window < "u" &&
                window.dispatchEvent(
                  new CustomEvent(Rw, { detail: { spaces: zt } }),
                ));
          });
        }
        ((fe = fe
          .replace(/[\[［]\s*COUPLE_SPACE_REJECT\s*[\]］]/gi, "")
          .trim()),
          (Ce = fe));
      }
      if (
        fe.includes("[LEDGER_CHECKIN_ACCEPT]") &&
        H &&
        typeof oe == "function"
      ) {
        const qe =
          (bt = X == null ? void 0 : X.current) == null
            ? void 0
            : bt.find((dt) => dt.id === t);
        if (qe != null && qe.contactId) {
          const dt = qe.contactId,
            xt = `couple_ledger_challenge_${dt}`;
          H.get(xt).then((ms) => {
            const Cs = typeof ms == "object" && ms !== null ? ms : {};
            H.set(xt, {
              ...Cs,
              inviteStatus: "accepted",
              aiInviteRespondedAt: Date.now(),
            });
          });
          const zt = qe.messages || [];
          for (let ms = zt.length - 1; ms >= 0; ms--) {
            const Cs = zt[ms];
            if (
              Cs.type === "couple_ledger_checkin_invite" &&
              Cs.sender === "me" &&
              Cs.checkinInviteStatus === "pending"
            ) {
              oe(t, Cs.id, { checkinInviteStatus: "accepted" });
              break;
            }
          }
          typeof window < "u" &&
            window.dispatchEvent(
              new CustomEvent("couple_ledger_checkin_updated", {
                detail: { contactId: dt },
              }),
            );
        }
        ((fe = fe.replace(/\[LEDGER_CHECKIN_ACCEPT\]/g, "").trim()), (Ce = fe));
      }
      if (
        fe.includes("[LEDGER_CHECKIN_REJECT]") &&
        H &&
        typeof oe == "function"
      ) {
        const qe =
          (ns = X == null ? void 0 : X.current) == null
            ? void 0
            : ns.find((dt) => dt.id === t);
        if (qe != null && qe.contactId) {
          const dt = qe.contactId,
            xt = `couple_ledger_challenge_${dt}`;
          H.get(xt).then((ms) => {
            const Cs = typeof ms == "object" && ms !== null ? ms : {};
            H.set(xt, {
              ...Cs,
              inviteStatus: "rejected",
              aiInviteRespondedAt: Date.now(),
            });
          });
          const zt = qe.messages || [];
          for (let ms = zt.length - 1; ms >= 0; ms--) {
            const Cs = zt[ms];
            if (
              Cs.type === "couple_ledger_checkin_invite" &&
              Cs.sender === "me" &&
              Cs.checkinInviteStatus === "pending"
            ) {
              oe(t, Cs.id, { checkinInviteStatus: "rejected" });
              break;
            }
          }
          typeof window < "u" &&
            window.dispatchEvent(
              new CustomEvent("couple_ledger_checkin_updated", {
                detail: { contactId: dt },
              }),
            );
        }
        ((fe = fe.replace(/\[LEDGER_CHECKIN_REJECT\]/g, "").trim()), (Ce = fe));
      }
      if (/\[SEASON_JOURNEY_ACCEPT\]/.test(fe) && typeof oe == "function") {
        const qe =
            (Ge = X == null ? void 0 : X.current) == null
              ? void 0
              : Ge.find((xt) => xt.id === t),
          dt = (qe == null ? void 0 : qe.messages) || [];
        for (let xt = dt.length - 1; xt >= 0; xt--) {
          const zt = dt[xt];
          if (
            zt.type === "season_journey_invite" &&
            zt.sender === "me" &&
            zt.seasonInviteStatus === "pending"
          ) {
            oe(t, zt.id, {
              seasonInviteStatus: "accepted",
              seasonInviteResolvedAt: Date.now(),
              seasonJourneyCard: { cardType: "invite", status: "accepted" },
            });
            break;
          }
        }
        ((fe = fe.replace(/\[SEASON_JOURNEY_ACCEPT\]/g, "").trim()), (Ce = fe));
      }
      if (/\[SEASON_JOURNEY_REJECT\]/.test(fe) && typeof oe == "function") {
        const qe =
            (Le = X == null ? void 0 : X.current) == null
              ? void 0
              : Le.find((xt) => xt.id === t),
          dt = (qe == null ? void 0 : qe.messages) || [];
        for (let xt = dt.length - 1; xt >= 0; xt--) {
          const zt = dt[xt];
          if (
            zt.type === "season_journey_invite" &&
            zt.sender === "me" &&
            zt.seasonInviteStatus === "pending"
          ) {
            oe(t, zt.id, {
              seasonInviteStatus: "rejected",
              seasonInviteResolvedAt: Date.now(),
              seasonJourneyCard: { cardType: "invite", status: "rejected" },
            });
            break;
          }
        }
        ((fe = fe.replace(/\[SEASON_JOURNEY_REJECT\]/g, "").trim()), (Ce = fe));
      }
      if (/\[SEASON_JOURNEY_COUNTER\]/.test(fe) && typeof oe == "function") {
        const qe =
            (_e = X == null ? void 0 : X.current) == null
              ? void 0
              : _e.find((xt) => xt.id === t),
          dt = (qe == null ? void 0 : qe.messages) || [];
        for (let xt = dt.length - 1; xt >= 0; xt--) {
          const zt = dt[xt];
          if (
            zt.type === "season_journey_invite" &&
            zt.sender === "me" &&
            zt.seasonInviteStatus === "pending"
          ) {
            oe(t, zt.id, {
              seasonInviteStatus: "counter_proposal",
              seasonInviteResolvedAt: Date.now(),
              seasonJourneyCard: {
                cardType: "invite",
                status: "counter_proposal",
              },
            });
            break;
          }
        }
        ((fe = fe.replace(/\[SEASON_JOURNEY_COUNTER\]/g, "").trim()),
          (Ce = fe));
      }
      if (
        !fe.includes("[ACCEPT_PAY_FOR_ME]") &&
        !fe.includes("[REJECT_PAY_FOR_ME]") &&
        (fe.includes("已支付") ||
          fe.includes("付过了") ||
          fe.includes("帮你付了") ||
          fe.includes("付啦") ||
          fe.includes("拿去花"))
      ) {
        const qe =
          (yt = X == null ? void 0 : X.current) == null
            ? void 0
            : yt.find((dt) => dt.id === t);
        if (qe && oe) {
          const dt = [...qe.messages]
            .reverse()
            .find(
              (xt) =>
                xt.type === "pay_for_me" &&
                xt.sender === "me" &&
                xt.status === "pending",
            );
          dt && oe(t, dt.id, { status: "accepted" });
        }
      }
      let Ue = Ce,
        me = $e;
      $e && ($e = null);
      const jt =
          (rt = X == null ? void 0 : X.current) == null
            ? void 0
            : rt.find((qe) => qe.id === t),
        Gt = jt && !jt.isGroup,
        Pt = () => {
          if (!(jt != null && jt.messages)) return null;
          const qe = [...jt.messages]
            .reverse()
            .find(
              (dt) =>
                dt &&
                dt.sender === "me" &&
                typeof dt.text == "string" &&
                dt.text.trim(),
            );
          return (qe == null ? void 0 : qe.id) ?? null;
        };
      if (Gt) {
        const qe = Ue.match(
          /【引用了[\s\S]*?的消息[:：]\s*["“]([\s\S]*?)["”]\s*】/,
        );
        if (qe) {
          const dt = qe[1];
          if (((Ue = Ue.replace(qe[0], "").trim()), jt)) {
            const zt = [...[...jt.messages, ...n]]
              .reverse()
              .find((ms) => we(ms) && String(ms.text || "").includes(dt));
            zt && we(zt) ? ((me = zt.id), Ue || ($e = zt.id)) : (me = Pt());
          }
        }
      }
      if (!ye && !me && T) {
        const qe = Ue.match(/\[REPLY\s*[:：]\s*"((?:[^"\\]|\\.)*)"\s*\]/),
          dt = Ue.match(/\[REPLY\s*[:：]\s*'((?:[^'\\]|\\.)*)'\s*\]/),
          xt = Ue.match(/\[REPLY\s*[:：]\s*“([\s\S]*?)”\s*\]/),
          zt = Ue.match(/\[REPLY\s*[:：]\s*([^\]]+?)\s*\]/),
          ms = qe || dt || xt || zt;
        if (ms) {
          const Cs = qe
              ? qe[1]
              : dt
                ? dt[1]
                : ((xt == null ? void 0 : xt[1]) ??
                  (zt == null ? void 0 : zt[1]) ??
                  ""),
            us = String(Cs).replace(/\\(.)/g, "$1").trim();
          if (((Ue = Ue.replace(ms[0], "").trim()), jt)) {
            const Rt = [...[...jt.messages, ...n]]
              .reverse()
              .find((Es) => we(Es) && String(Es.text || "").includes(us));
            Rt && we(Rt) ? ((me = Rt.id), Ue || ($e = Rt.id)) : (me = Pt());
          }
        }
      }
      let Wt = null,
        ct = null;
      if (!ye && /\[LS3_HEAD\]|\[LONG_SENTENCE_3\]/i.test(Ue)) {
        const dt = ac(Ue);
        let xt = dt.displayText;
        const zt = xt.match(/^\[LS3_HEAD\]([\s\S]*?)\[\/LS3_HEAD\]\s*/i);
        let ms = "",
          Cs = xt;
        zt &&
          ((ms = String(zt[1] || "").trim()),
          (Cs = xt.slice(zt[0].length).trim()));
        const us = Pw(Cs);
        us &&
          us.length === 3 &&
          ((Wt = us),
          (Ue = ms || us[0]),
          dt.translation && (ct = dt.translation));
      }
      const Kt = k
        ? Ue.match(
            /[\[［]\s*VOICE\s*[\]］]([\s\S]*?)[\[［]\s*\/\s*VOICE\s*[\]］]/i,
          )
        : null;
      let fs = "text",
        gt = Ue;
      if (Kt) ((fs = "voice"), (gt = Kt[1].trim()));
      else if (/[\[［]\s*\/\s*VOICE\s*[\]］]/i.test(Ue)) {
        const qe = Ue.match(/[\[［]\s*\/\s*VOICE\s*[\]］]/i),
          dt = qe ? qe.index : -1;
        ((fs = "voice"),
          (gt = Ue.slice(0, dt >= 0 ? dt : Ue.length)
            .replace(/^[\[［]\s*VOICE\s*[\]］]\s*/i, "")
            .trim()));
      } else
        /^[\[［]\s*VOICE\s*[\]］]/i.test(Ue)
          ? ((fs = "voice"),
            (gt = Ue.replace(/^[\[［]\s*VOICE\s*[\]］]\s*/i, "").trim()))
          : Ie && Ue && ((fs = "voice"), (gt = Ue));
      const ae = $ ? gt.match(/\[CHANGE_SIGNATURE:(.*?)\]/) : null;
      if (ae && ee) {
        const qe = ae[1];
        gt = gt.replace(ae[0], "").trim();
        const dt =
          (ze = X == null ? void 0 : X.current) == null
            ? void 0
            : ze.find((xt) => xt.id === t);
        if (dt) {
          ee(dt.contactId, { signature: qe });
          const xt =
              ((lt = je == null ? void 0 : je.current) == null
                ? void 0
                : lt.find((ms) => ms.id === dt.contactId)) || null,
            zt =
              (xt == null ? void 0 : xt.remark) ||
              (xt == null ? void 0 : xt.nickname) ||
              (xt == null ? void 0 : xt.name) ||
              "TA";
          n.push({
            id: sr("sig"),
            text: `[系统提示：角色「${zt}」更新了自己的个性签名："${qe}"]`,
            type: "system",
            sender: "system",
            timestamp: new Date().toISOString(),
          });
        }
      }
      const nt = F
        ? gt.match(/\[GIVE_PASSWORD\s*[:：]\s*(.*?)\]/i) ||
          gt.match(/\[PASSWORD_CARD\s*[:：]\s*(.*?)\]/i)
        : null;
      if (nt && ee) {
        let qe = nt[1].trim();
        const dt = qe.replace(/\D/g, "");
        (dt && (qe = dt), (gt = gt.replace(nt[0], "").trim()));
        const xt =
          (it = X == null ? void 0 : X.current) == null
            ? void 0
            : it.find((zt) => zt.id === t);
        if (xt) {
          const zt =
              (Ht = je == null ? void 0 : je.current) == null
                ? void 0
                : Ht.find((Rs) => Rs.id === xt.contactId),
            ms = (zt == null ? void 0 : zt.passwordHistory) || [],
            us = [
              {
                password: qe,
                timestamp: new Date().toISOString(),
                source: "got_from_ai",
              },
              ...ms,
            ].slice(0, 30);
          ee(xt.contactId, { phonePassword: qe, passwordHistory: us });
        }
        n.push({
          id: sr("pwd"),
          text: `[密码卡片] 对方告诉了你手机密码：${qe}`,
          type: "password_card",
          password: qe,
          sender: "them",
          timestamp: new Date().toISOString(),
        });
      }
      const It = F ? gt.match(/\[CHANGE_PASSWORD\s*[:：]\s*(.*?)\]/i) : null;
      if (It && ee) {
        let qe = It[1].trim();
        const dt = qe.replace(/\D/g, "");
        (dt && (qe = dt), (gt = gt.replace(It[0], "").trim()));
        const xt =
          (is = X == null ? void 0 : X.current) == null
            ? void 0
            : is.find((zt) => zt.id === t);
        if (xt) {
          const zt =
              (os = je == null ? void 0 : je.current) == null
                ? void 0
                : os.find((Rs) => Rs.id === xt.contactId),
            ms = (zt == null ? void 0 : zt.passwordHistory) || [],
            us = [
              {
                password: qe,
                timestamp: new Date().toISOString(),
                source: "ai_changed",
              },
              ...ms,
            ].slice(0, 30);
          (ee(xt.contactId, { phonePassword: qe, passwordHistory: us }),
            n.push({
              id: sr("pwd-change"),
              text: "对方已更换手机密码",
              type: "system_password_changed",
              sender: "system",
              timestamp: new Date().toISOString(),
            }));
        }
      }
      se && (gt = se(gt, t, n));
      let Xt = null;
      if (!ye) {
        const qe = ac(gt);
        if (
          ((gt = qe.displayText), (Xt = qe.translation || ct || void 0), !Xt)
        ) {
          const dt = ac(Ue);
          dt.translation && (Xt = dt.translation);
        }
      }
      const bs = Ue.match(/\[CHAT_HTML_B64:([A-Za-z0-9+/=]+)\]/);
      if (bs && !ye) {
        const qe = Ue.slice(bs.index + bs[0].length).trim(),
          dt = ac(qe);
        if (!(dt.displayText || "").trim()) {
          const xt = DF(bs[1]);
          if (xt) {
            n.push({
              id: sr(`html-${He}`),
              type: "html_widget",
              html: xt,
              text: "[HTML 组件]",
              translation: Xt || dt.translation || void 0,
              sender: "them",
              timestamp: new Date(Date.now() + He * 100).toISOString(),
              replyTo: He === 0 && W ? W : me,
            });
            return;
          }
        }
      }
      if (!ye && typeof gt == "string" && Jm(gt) && gt.trim()) {
        n.push({
          id: sr(`html-${He}`),
          type: "html_widget",
          html: gt.trim(),
          text: "[HTML 组件]",
          translation: Xt || void 0,
          sender: "them",
          timestamp: new Date(Date.now() + He * 100).toISOString(),
          replyTo: He === 0 && W ? W : me,
        });
        return;
      }
      const ss = q ? gt.match(/\[VIDEO_CALL_INVITE(?::(.*?))?\]/) : null;
      if (ss && ce) {
        const qe = le == null ? void 0 : le.find((dt) => dt.id === t);
        if ((U == null ? void 0 : U.status) !== "connected") {
          if (!(qe != null && qe.isGroup)) {
            const dt = ss[1] ? ss[1].trim() : null;
            (ce({
              status: "incoming",
              contactId: t ? (qe == null ? void 0 : qe.contactId) : null,
              chatId: t ?? null,
              isGroup: !1,
              startTime: null,
              isInitiator: !1,
              isMinimized: !1,
              currentMessages: [],
              acceptedMembers: [],
              rejectedMembers: [],
              inviteMessage: dt,
            }),
              dt &&
                n.push({
                  id: sr("invite-msg"),
                  text: dt,
                  type: "text",
                  sender: "them",
                  timestamp: new Date().toISOString(),
                }));
            return;
          }
        }
      }
      if (gt.includes("[ACCEPT_VIDEO_CALL]") && ce) {
        if (
          !(
            !(U != null && U.isGroup) &&
            ((U == null ? void 0 : U.chatId) === t ||
              (U == null ? void 0 : U.status) === "outgoing")
          )
        )
          return;
        (Te && Te(),
          ce((xt) =>
            xt.status === "connected"
              ? xt
              : {
                  ...xt,
                  status: "connected",
                  startTime: Date.now(),
                  isMinimized: !1,
                  currentMessages: [],
                },
          ));
        const dt = gt.replace("[ACCEPT_VIDEO_CALL]", "").trim();
        if (dt) {
          const {
              narrator: xt,
              dialogue: zt,
              dialogueTranslation: ms,
              videoCallSegments: Cs,
            } = gl(dt),
            us = {
              id: sr(`accept-video-${He}`),
              text: dt,
              type: "text",
              sender: "them",
              timestamp: new Date(Date.now() + He * 100).toISOString(),
              replyTo: me,
              ...((xt || zt) && {
                narrator: xt,
                dialogue: zt,
                ...(ms && { dialogueTranslation: ms }),
                ...(Cs != null && Cs.length ? { videoCallSegments: Cs } : {}),
              }),
            };
          if (
            (ce((Rs) => ({
              ...Rs,
              currentMessages: [...(Rs.currentMessages || []), us],
            })),
            zt && ke)
          ) {
            const Rs =
                (as = X == null ? void 0 : X.current) == null
                  ? void 0
                  : as.find((cn) => cn.id === t),
              Rt =
                (vs = je == null ? void 0 : je.current) == null
                  ? void 0
                  : vs.find(
                      (cn) => cn.id === (Rs == null ? void 0 : Rs.contactId),
                    ),
              Es = (Rs == null ? void 0 : Rs.settings) || {},
              nn =
                (Rt == null ? void 0 : Rt.ttsVoiceId) ||
                (Es == null ? void 0 : Es.voiceId),
              Hs =
                Array.isArray(Cs) && Cs.some((cn) => cn.type === "speech")
                  ? Cs.filter((cn) => cn.type === "speech")
                      .map((cn) => cn.text)
                      .filter(Boolean)
                      .join(" ")
                  : zt;
            nn &&
              ke(Hs, {
                voiceId: nn,
                speed:
                  (Rt == null ? void 0 : Rt.ttsSpeed) ??
                  (Es == null ? void 0 : Es.speed) ??
                  1,
                pitch:
                  (Rt == null ? void 0 : Rt.ttsPitch) ??
                  (Es == null ? void 0 : Es.pitch) ??
                  0,
                groupId: Es == null ? void 0 : Es.minimaxGroupId,
                minimaxModel: Es == null ? void 0 : Es.minimaxModel,
              });
          }
        }
        return;
      }
      if (gt.includes("[REJECT_VIDEO_CALL]")) {
        !(U == null ? void 0 : U.isGroup) &&
          (U == null ? void 0 : U.chatId) === t &&
          ce &&
          (ce({
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
          }),
          n.push({
            id: sr("video-reject"),
            text: "已拒绝",
            type: "video_call_end",
            status: "rejected",
            sender: "system",
            timestamp: new Date().toISOString(),
          }));
        const xt = gt.replace("[REJECT_VIDEO_CALL]", "").trim();
        xt &&
          n.push({
            id: sr(`reject-video-reason-${He}`),
            text: xt,
            type: "text",
            sender: "them",
            timestamp: new Date(Date.now() + He * 100 + 50).toISOString(),
            replyTo: me,
          });
        return;
      }
      if (!gt && !Xt && fs === "text") return;
      let _s;
      const qs =
          /[\[【［]\s*COUPLE_AVATAR_PROPOSAL\s*[:：]\s*([^\]】］\r\n]+?)\s*[\]】］]/i,
        Bs = /COUPLE_AVATAR_PROPOSAL\s*[:：]\s*([^\s\]】］\r\n]+)/i,
        Js = gt && gt.match(qs),
        Xs = Js || (gt && gt.match(Bs));
      if (Xs) {
        const qe = String(Xs[1] || "").trim(),
          dt = String(Xs[0] || "").trim(),
          xt = qe
            .replace(/^[\s"'“”‘’`「]+/, "")
            .replace(/[\s"'“”‘’`」]+$/, "")
            .replace(/^[\s\[【［(（]+/, "")
            .replace(/[\s\]】］)）]+$/, "")
            .trim();
        if (
          ((_s = { pairId: xt }), (gt = String(gt).replace(dt, "").trim()), xt)
        ) {
          const zt = String(xt).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
            ms = new RegExp(
              `[\\[【［][\\s\\S]*?COUPLE_AVATAR_PROPOSAL\\s*[:：]\\s*${zt}[\\s\\S]*?[\\]】］]`,
              "ig",
            );
          gt = gt.replace(ms, "").trim();
        }
        !gt && fs === "text" && (gt = "我们一起换这套情头吧～");
      }
      if (
        !_s &&
        Gt &&
        jt &&
        Array.isArray(
          (ts = jt.settings) == null ? void 0 : ts.coupleAvatarPairs,
        ) &&
        jt.settings.coupleAvatarPairs.length > 0 &&
        !((ys = jt.settings) != null && ys.pendingCoupleAvatarProposal) &&
        typeof gt == "string"
      ) {
        const qe = gt,
          dt = [...(jt.messages || [])]
            .reverse()
            .find((Rs) => Rs && Rs.sender === "me"),
          xt = String((dt == null ? void 0 : dt.text) || ""),
          zt =
            (dt == null ? void 0 : dt.type) === "couple_avatar_request" ||
            /情侣头像|情头|换情头|换情侣头像|换情侣|换情头|情侣头像库/i.test(
              xt,
            ) ||
            /我们换|一起换|想换|换一对/i.test(xt),
          ms =
            /(等|稍等|我去|先)/i.test(qe) &&
            /(找|挑|选|挑选|库|随机|一对|pair)/i.test(qe),
          Cs =
            /你(来)?选|让你选|由你决定|你看着来|随便挑|随机挑|你(来)?挑|你(来)?挑选|你(来)?挑选/i.test(
              xt,
            ),
          us =
            /(好|好的|行|可以|那就|就)/i.test(qe) && /(选|挑|挑选)/i.test(qe);
        if (zt && (ms || us)) {
          const Rs = jt.settings.coupleAvatarPairs,
            Rt = String(xt || "").toLowerCase(),
            nn =
              Rs.find((Hs) => {
                const cn = String((Hs == null ? void 0 : Hs.name) || "")
                    .trim()
                    .toLowerCase(),
                  fn = String((Hs == null ? void 0 : Hs.id) || "")
                    .trim()
                    .toLowerCase(),
                  Rn = Array.isArray(Hs == null ? void 0 : Hs.tags)
                    ? Hs.tags
                    : Hs != null && Hs.tags
                      ? [Hs.tags]
                      : [],
                  Qn = !!cn && Rt.includes(cn),
                  ra = !!fn && Rt.includes(fn),
                  _a = Rn.some((Ya) => {
                    const Fr = String(Ya || "")
                      .trim()
                      .toLowerCase();
                    return !!Fr && Rt.includes(Fr);
                  });
                return Qn || ra || _a;
              }) || Rs[Math.floor(Math.random() * Rs.length)];
          nn != null &&
            nn.id &&
            ((_s = { pairId: String(nn.id) }),
            ms
              ? ((gt = qe
                  .replace(/(等|稍等|我去|先)/i, "我已经挑好了")
                  .replace(/(找|挑|选|挑选)/i, "选")
                  .trim()),
                gt || (gt = "我已经给你挑好了情侣头像/情头～"))
              : Cs &&
                us &&
                ((gt = qe
                  .replace(
                    /^(好(吧)?|好的|行|可以|那就|就)\s*/i,
                    "我已经给你挑好了情侣头像/情头～",
                  )
                  .replace(
                    /(你(来)?选|让你选|你(来)?挑|让你挑|由你决定|你看着来)/gi,
                    "",
                  )
                  .trim()),
                (!gt || gt.length < 4) &&
                  (gt = "我已经给你挑好了情侣头像/情头～")));
        }
      }
      let gn = "",
        sn = "",
        ln = "",
        rn;
      if (ye && fs === "text" && gt) {
        const qe = gl(gt);
        ((gn = qe.narrator),
          (sn = qe.dialogue),
          (ln = qe.dialogueTranslation),
          (rn = qe.videoCallSegments));
      }
      let wt = [];
      if (Gt && fs === "voice" && !ye && typeof gt == "string" && gt.trim()) {
        const qe = gt.match(/^([\s\S]*?[。！？!?])([\s\S]*)$/);
        if (qe && qe[2] && qe[2].trim().length > 0) {
          const dt = (qe[1] || "").trim(),
            xt = (qe[2] || "").trim();
          dt && xt && ((gt = dt), (wt = [xt]));
        }
      }
      const xs = {
        id: sr(`msg-${He}`),
        text: gt,
        type: fs,
        translation: Xt || void 0,
        sender: "them",
        timestamp: new Date(Date.now() + He * 100).toISOString(),
        replyTo: He === 0 && W ? W : me,
        ...(ye &&
          (gn || sn) && {
            narrator: gn,
            dialogue: sn,
            ...(ln && { dialogueTranslation: ln }),
          }),
        ...(_s && { coupleAvatarProposal: _s }),
        ...(Wt && !ye
          ? { longSentenceVariants: Wt, longSentenceActiveIndex: 0 }
          : Fe &&
            He === 0 &&
            !ye && { longSentenceVariants: Fe, longSentenceActiveIndex: 0 }),
      };
      if (
        (U == null ? void 0 : U.status) === "connected" &&
        !(U != null && U.isGroup) &&
        (U == null ? void 0 : U.chatId) === t &&
        pe != null &&
        pe.current
      ) {
        if (
          (pe.current((qe) => ({
            ...qe,
            currentMessages: [...(qe.currentMessages || []), xs],
          })),
          sn && ke)
        ) {
          const qe =
              (Vs = X == null ? void 0 : X.current) == null
                ? void 0
                : Vs.find((Cs) => Cs.id === t),
            dt =
              (pt = je == null ? void 0 : je.current) == null
                ? void 0
                : pt.find(
                    (Cs) => Cs.id === (qe == null ? void 0 : qe.contactId),
                  ),
            xt = (qe == null ? void 0 : qe.settings) || {},
            zt =
              (dt == null ? void 0 : dt.ttsVoiceId) ||
              (xt == null ? void 0 : xt.voiceId),
            ms =
              Array.isArray(rn) && rn.some((Cs) => Cs.type === "speech")
                ? rn
                    .filter((Cs) => Cs.type === "speech")
                    .map((Cs) => Cs.text)
                    .filter(Boolean)
                    .join(" ")
                : sn;
          zt &&
            ke(ms, {
              voiceId: zt,
              speed:
                (dt == null ? void 0 : dt.ttsSpeed) ??
                (xt == null ? void 0 : xt.speed) ??
                1,
              pitch:
                (dt == null ? void 0 : dt.ttsPitch) ??
                (xt == null ? void 0 : xt.pitch) ??
                0,
              modelId: xt == null ? void 0 : xt.modelId,
              stability: xt == null ? void 0 : xt.stability,
              similarityBoost: xt == null ? void 0 : xt.similarityBoost,
              groupId: xt == null ? void 0 : xt.minimaxGroupId,
              minimaxModel: xt == null ? void 0 : xt.minimaxModel,
            });
        }
      } else if ((n.push(xs), wt.length > 0)) {
        const qe = He === 0 && W ? W : me,
          dt = Date.now() + He * 100;
        wt.filter((xt) => xt && String(xt).trim()).forEach((xt, zt) => {
          n.push({
            id: sr(`vtail-${He}-${zt}`),
            text: String(xt).trim(),
            type: "text",
            translation: void 0,
            sender: "them",
            timestamp: new Date(dt + (zt + 1) * 50).toISOString(),
            replyTo: qe,
          });
        });
      }
    }),
    !ge && b && !Ve && !G && Q(s))
  ) {
    const fe = ve(s, ue);
    n.push({
      id: sr("transfer-fallback-final"),
      text: `¥${fe}`,
      type: "transfer",
      amount: fe,
      note: "转账",
      sender: "them",
      status: "pending",
      timestamp: new Date().toISOString(),
    });
  }
}
function VF(t, s = {}) {
  var k, C, M, E, S;
  const { chatsRef: n, contactsRef: a, getRoleBoundUserRef: r } = s,
    i =
      (k = n == null ? void 0 : n.current) == null
        ? void 0
        : k.find((j) => j.id === t),
    o =
      i &&
      ((C = a == null ? void 0 : a.current) == null
        ? void 0
        : C.find((j) => j.id === i.contactId));
  if (
    !i ||
    !o ||
    !((M = i == null ? void 0 : i.settings) != null && M.enableCheckUp)
  )
    return null;
  const c =
      ((E = r == null ? void 0 : r.current) == null ? void 0 : E.call(r, o)) ??
      {},
    d = (c == null ? void 0 : c.name) || "用户",
    u = (o == null ? void 0 : o.boundUserPresetId) ?? "",
    f = (j) => ((j == null ? void 0 : j.boundUserPresetId) ?? "") === u,
    p = (j) => {
      const T = ((j == null ? void 0 : j.messages) || [])
        .filter((I) => I.sender === "me")
        .pop();
      return T ? new Date(T.timestamp).getTime() : 0;
    },
    h = ((n == null ? void 0 : n.current) || []).filter((j) => {
      var I, L;
      if (
        j.id === t ||
        !j.contactId ||
        (((I = j.messages) == null ? void 0 : I.length) || 0) < 2
      )
        return !1;
      const T =
        (L = a == null ? void 0 : a.current) == null
          ? void 0
          : L.find((B) => B.id === j.contactId);
      return T && f(T);
    });
  if (h.length === 0) return null;
  const g = p(i),
    x = Math.max(...h.map((j) => p(j))),
    y = x > g && x - g > 60 * 1e3,
    v = ((o == null ? void 0 : o.setting) || "").slice(0, 500);
  let N =
    /查岗|吃醋|盯紧|管得严|关心你和谁|介意你和别人|爱看你和谁聊|不许你和别人|看你跟谁聊/.test(
      v,
    )
      ? 0.12
      : 0.06;
  if ((y && (N = Math.min(0.28, N + 0.15)), Math.random() >= N)) return null;
  const w = i.messages || [],
    _ = new Map();
  w.forEach((j) => {
    j.sender === "them" &&
      j.type === "forward_chat_card" &&
      j.friendName &&
      _.set(j.friendName, j);
  });
  const A = [...h].sort(() => Math.random() - 0.5);
  for (const j of A) {
    const T =
      (S = a == null ? void 0 : a.current) == null
        ? void 0
        : S.find((K) => K.id === j.contactId);
    if (!T) continue;
    const I = T.nickname || T.name || "TA",
      L = _.get(I),
      B = (j.messages || [])
        .filter((K) => {
          var q;
          return (
            K.type === "text" && ((q = K.text) == null ? void 0 : q.trim())
          );
        })
        .pop(),
      F = B ? new Date(B.timestamp).getTime() : 0,
      D = L != null && L.timestamp ? new Date(L.timestamp).getTime() : 0;
    if (L != null && F <= D) continue;
    let $ = (j.messages || []).filter((K) => {
      var q;
      return K.type === "text" && ((q = K.text) == null ? void 0 : q.trim());
    });
    L != null &&
      D > 0 &&
      ($ = $.filter((K) => new Date(K.timestamp).getTime() > D));
    const P = $.slice(-10);
    if (P.length < 2) continue;
    const z = P.map((K) => ({
        sender: K.sender === "me" ? "friend" : "role",
        text: (K.text || "").trim(),
      })),
      O = new Date().toISOString();
    return {
      cardMessage: {
        id: `${Date.now()}-fwd-bound`,
        type: "forward_chat_card",
        sender: "them",
        timestamp: O,
        text: `[聊天记录] 与${I}的对话`,
        friendName: I,
        boundUserName: d,
        roleName: I,
        roleAvatar: T.avatar,
        messages: z,
        groupName: null,
      },
      otherName: I,
    };
  }
  return null;
}
async function JF(t, s, n = {}) {
  var C, M, E, S, j, T, I, L, B, F;
  const {
      injectedHeartVoice: a,
      injectedDraftSent: r,
      prependForwardCardPayload: i,
      optionalRoleCard: o,
      timestamp: c,
      setChats: d,
      chatsRef: u,
      contactsRef: f,
      getRoleBoundUserRef: p,
      playSound: m,
      setNotification: h,
      notificationTimerRef: g,
      systemNotificationEnabled: x,
      sendSystemNotification: y,
      notificationStrategy: v,
      activeChatIdRef: b,
      summarizeHistory: N,
    } = n,
    w = (D) =>
      String(D || "")
        .replace(/\[[A-Z_]+[^\]]*\]/g, "")
        .replace(/\s+/g, " ")
        .trim();
  if (
    (r != null &&
      String(r).trim() !== "" &&
      (d == null ||
        d((D) =>
          D.map(($) => {
            if ($.id !== t) return $;
            const P = Array.isArray($.messages) ? $.messages : [];
            return P.some((O) => O && O.draftSent != null)
              ? {
                  ...$,
                  messages: P.map((O) => {
                    if (!O || O.draftSent == null) return O;
                    const Z = { ...O };
                    return (delete Z.draftSent, Z);
                  }),
                }
              : $;
          }),
        )),
    a != null && a !== "")
  ) {
    const D = s
      .map(($, P) => ($.sender === "them" ? P : -1))
      .filter(($) => $ >= 0)
      .pop();
    D !== void 0 && (s[D] = { ...s[D], heartVoice: a });
  }
  if (r != null && String(r).trim() !== "") {
    const D = String(r).trim(),
      $ = w(D);
    s.some((O) => {
      if (!O || O.sender !== "them" || !O.text) return !1;
      const Z = w(O.text);
      return !Z || !$ ? !1 : Z === $ || Z.includes($) || $.includes(Z);
    }) ||
      s.push({
        id: `${Date.now()}-draft-sent-fallback`,
        type: "text",
        sender: "them",
        text: D,
        timestamp: new Date().toISOString(),
      });
    let z = -1;
    for (let O = 0; O < s.length; O++) {
      const Z = s[O];
      if (!Z || Z.sender !== "them") continue;
      const K = w(Z.text);
      if (K && $ && K === $) {
        z = O;
        break;
      }
    }
    if (z < 0) {
      for (let O = s.length - 1; O >= 0; O--)
        if (((C = s[O]) == null ? void 0 : C.sender) === "them") {
          z = O;
          break;
        }
    }
    z >= 0 && (s[z] = { ...s[z], draftSent: D });
  }
  if (i != null && i.cardMessage) {
    s.unshift(i.cardMessage);
    const D = i.cardMessage;
    if (!!(D != null && D.boundUserName) && !!(D != null && D.friendName)) {
      const z = s
          .slice(1)
          .filter(
            (q) =>
              (q == null ? void 0 : q.sender) === "them" &&
              (q == null ? void 0 : q.type) !== "forward_chat_card",
          ),
        O = 4,
        Z = 8,
        K = Math.max(0, O - z.length);
      if (K > 0) {
        const q = D.friendName || "TA",
          V = (Array.isArray(D.messages) ? D.messages : [])
            .map((ee) => String((ee == null ? void 0 : ee.text) || "").trim())
            .filter(Boolean),
          ne = V.at(-1) || "",
          le = V.at(-2) || "",
          ie = V.at(-3) || "",
          X = (ee) =>
            ee ? `“${ee.slice(0, 22)}${ee.length > 22 ? "…" : ""}”` : "",
          je = [
            `……你跟${q}聊得还挺投入的啊。`,
            X(ne) ? `刚刚那句${X(ne)}是什么意思？` : "你们刚刚在说啥？",
            X(le) ? `还有这句${X(le)}，你认真的？` : "你们这是聊到哪一步了？",
            X(ie)
              ? `我看到${X(ie)}的时候都愣了。`
              : "我先说好，我不是管你…我就是在意。",
            `你自己跟我讲讲，你对${q}到底什么态度？`,
            "我有点吃醋，行了吧。",
            "下次别让我靠转发才知道你在聊什么。",
            "你现在方便说吗？我想听你解释。",
          ],
          xe = Math.min(Z, O),
          ye = Math.min(je.length, Math.max(K, xe - z.length)),
          R = Date.now(),
          oe = je
            .slice(0, ye)
            .map((ee, H) => ({
              id: `${R}-fwd-react-${H + 1}`,
              type: "text",
              sender: "them",
              timestamp: new Date(R + 120 * (H + 1)).toISOString(),
              text: ee,
            }));
        s.splice(1, 0, ...oe);
      }
    }
  } else if (s.some(($) => $.sender === "them") && s.length > 0) {
    const $ =
      (M = u == null ? void 0 : u.current) == null
        ? void 0
        : M.find((P) => P.id === t);
    if ((E = $ == null ? void 0 : $.settings) != null && E.enableCheckUp) {
      const P =
          $ &&
          ((S = f == null ? void 0 : f.current) == null
            ? void 0
            : S.find((R) => R.id === $.contactId)),
        z =
          P &&
          ((j = p == null ? void 0 : p.current) == null
            ? void 0
            : j.call(p, P)),
        O = (z == null ? void 0 : z.name) || "用户",
        Z = (P == null ? void 0 : P.boundUserPresetId) ?? "",
        K = (R) => ((R == null ? void 0 : R.boundUserPresetId) ?? "") === Z,
        q = (R) => {
          const oe = ((R == null ? void 0 : R.messages) || [])
            .filter((ee) => ee.sender === "me")
            .pop();
          return oe ? new Date(oe.timestamp).getTime() : 0;
        },
        V = q($),
        le = ((u == null ? void 0 : u.current) || []).filter((R) => {
          var ee, H;
          if (
            R.id === t ||
            !R.contactId ||
            (((ee = R.messages) == null ? void 0 : ee.length) || 0) < 2
          )
            return !1;
          const oe =
            (H = f == null ? void 0 : f.current) == null
              ? void 0
              : H.find((Y) => Y.id === R.contactId);
          return oe && K(oe);
        }),
        ie = le.length ? Math.max(...le.map((R) => q(R))) : 0,
        X = ie > V && ie - V > 60 * 1e3,
        je = ((P == null ? void 0 : P.setting) || "").slice(0, 500);
      let ye =
        /查岗|吃醋|盯紧|管得严|关心你和谁|介意你和别人|爱看你和谁聊|不许你和别人|看你跟谁聊/.test(
          je,
        )
          ? 0.12
          : 0.06;
      if (
        (X && (ye = Math.min(0.28, ye + 0.15)),
        Math.random() < ye && le.length > 0)
      ) {
        const R = ($ == null ? void 0 : $.messages) || [],
          oe = new Map();
        R.forEach((H) => {
          H.sender === "them" &&
            H.type === "forward_chat_card" &&
            H.friendName &&
            oe.set(H.friendName, H);
        });
        const ee = [...le].sort(() => Math.random() - 0.5);
        for (const H of ee) {
          const Y =
            (T = f == null ? void 0 : f.current) == null
              ? void 0
              : T.find((J) => J.id === H.contactId);
          if (!Y) continue;
          const U = Y.nickname || Y.name || "TA",
            ce = oe.get(U),
            pe = (H.messages || [])
              .filter((J) => {
                var G;
                return (
                  J.type === "text" &&
                  ((G = J.text) == null ? void 0 : G.trim())
                );
              })
              .pop(),
            se = pe ? new Date(pe.timestamp).getTime() : 0,
            Te =
              ce != null && ce.timestamp ? new Date(ce.timestamp).getTime() : 0;
          if (ce != null && se <= Te) continue;
          let ke = (H.messages || []).filter((J) => {
            var G;
            return (
              J.type === "text" && ((G = J.text) == null ? void 0 : G.trim())
            );
          });
          ce != null &&
            Te > 0 &&
            (ke = ke.filter((J) => new Date(J.timestamp).getTime() > Te));
          const W = ke.slice(-10);
          if (W.length < 2) continue;
          const ue = W.map((J) => ({
            sender: J.sender === "me" ? "friend" : "role",
            text: (J.text || "").trim(),
          }));
          s.unshift({
            id: `${Date.now()}-fwd-bound`,
            type: "forward_chat_card",
            sender: "them",
            timestamp: c,
            text: `[聊天记录] 与${U}的对话`,
            friendName: U,
            boundUserName: O,
            roleName: U,
            roleAvatar: Y.avatar,
            messages: ue,
            groupName: null,
          });
          const he = s
              .slice(1)
              .filter(
                (J) =>
                  (J == null ? void 0 : J.sender) === "them" &&
                  (J == null ? void 0 : J.type) !== "forward_chat_card",
              ),
            ge = Math.max(0, 4 - he.length);
          if (ge > 0) {
            const J = (Array.isArray(ue) ? ue : [])
                .map((Ve) =>
                  String((Ve == null ? void 0 : Ve.text) || "").trim(),
                )
                .filter(Boolean),
              G = (Ve) =>
                Ve ? `“${Ve.slice(0, 22)}${Ve.length > 22 ? "…" : ""}”` : "",
              we = [
                `……你跟${U}聊得还挺投入的啊。`,
                G(J.at(-1) || "")
                  ? `刚刚那句${G(J.at(-1) || "")}是什么意思？`
                  : "你们刚刚在说啥？",
                G(J.at(-2) || "")
                  ? `还有这句${G(J.at(-2) || "")}，你认真的？`
                  : "你们这是聊到哪一步了？",
                `你自己跟我讲讲，你对${U}到底什么态度？`,
                "我有点吃醋，行了吧。",
                "你现在方便说吗？我想听你解释。",
              ],
              Q = Date.now(),
              ve = we
                .slice(0, ge)
                .map((Ve, Ae) => ({
                  id: `${Q}-fwd-react-${Ae + 1}`,
                  type: "text",
                  sender: "them",
                  timestamp: new Date(Q + 120 * (Ae + 1)).toISOString(),
                  text: Ve,
                }));
            s.splice(1, 0, ...ve);
          }
          break;
        }
      }
    }
  }
  if (
    ((o == null ? void 0 : o.type) === "dice_punishment_card" &&
      o != null &&
      o.content &&
      s.unshift({
        id: Date.now().toString() + "-dice-punish",
        type: "dice_punishment_card",
        sender: "them",
        text: o.content,
        content: o.content,
        timestamp: new Date().toISOString(),
      }),
    s.length === 0)
  )
    return;
  const _ = (D) => {
      if (typeof D != "string") return null;
      const $ =
          /[\[【［]\s*COUPLE_AVATAR_PROPOSAL\s*[:：]\s*([^\]】］\r\n]+?)\s*[\]】］]/i,
        P = /COUPLE_AVATAR_PROPOSAL\s*[:：]\s*([^\s\]】］\r\n]+)/i,
        z = D.match($) || D.match(P);
      if (!z) return null;
      const Z = String(z[1] || "")
        .trim()
        .replace(/^[\s"'“”‘’`「]+/, "")
        .replace(/[\s"'“”‘’`」]+$/, "")
        .replace(/^[\s\[【［(（]+/, "")
        .replace(/[\s\]】］)）]+$/, "")
        .trim();
      return Z ? { pairId: Z } : null;
    },
    A = (D) => {
      if (typeof D != "string") return D;
      const $ =
          /[\[【［]\s*COUPLE_AVATAR_PROPOSAL\s*[:：]\s*[^\]】］\r\n]+?\s*[\]】］]/gi,
        P = /COUPLE_AVATAR_PROPOSAL\s*[:：]\s*[^\s\]】］\r\n]+/gi;
      return D.replace($, "").replace(P, "").trim();
    };
  for (let D = 0; D < s.length; D++) {
    const $ = s[D];
    let P = 0;
    if (D > 0) {
      const V = s[D - 1];
      let ne = 800,
        le = 0;
      (V.type === "text" && V.text
        ? (le = Math.min(3e3, V.text.length * (50 + Math.random() * 30)))
        : V.type === "image" || V.type === "text_image"
          ? (ne = 1500)
          : V.type === "voice" && (ne = 1200),
        (P = ne + le + Math.random() * 500));
    }
    P > 0 &&
      (d((V) => V.map((ne) => (ne.id === t ? { ...ne, isTyping: !0 } : ne))),
      await new Promise((V) => setTimeout(V, P)));
    let z = $.coupleAvatarProposal;
    if (!z && $.type === "text" && typeof $.text == "string" && $.text.trim()) {
      const V = _($.text);
      V != null &&
        V.pairId &&
        ((z = V),
        ($.coupleAvatarProposal = V),
        ($.text = A($.text)),
        $.text || ($.text = "我们一起换这套情头吧～"));
    }
    const O = new Date().toISOString(),
      Z = { ...$, timestamp: O };
    (d((V) =>
      V.map((ne) => {
        if (ne.id !== t || ne.messages.some((xe) => xe.id === $.id)) return ne;
        const X =
            !((b == null ? void 0 : b.current) === t) &&
            (Z == null ? void 0 : Z.sender) === "them" &&
            (Z == null ? void 0 : Z.type) !== "system" &&
            (Z == null ? void 0 : Z.type) !== "system_call_end"
              ? (Number(ne.unread) || 0) + 1
              : Number(ne.unread) || 0,
          je =
            z && z.pairId
              ? {
                  ...(ne.settings || {}),
                  pendingCoupleAvatarProposal: {
                    pairId: z.pairId,
                    messageId: $.id,
                    from: "ai",
                  },
                }
              : ne.settings;
        return {
          ...ne,
          ...(je !== ne.settings && { settings: je }),
          isTyping: D < s.length - 1,
          lastMessage:
            $.text ||
            ($.type === "image" || $.type === "text_image"
              ? "[图片]"
              : $.type === "voice"
                ? "[语音]"
                : "[消息]"),
          timestamp: O,
          unread: X,
          messages: [...ne.messages, Z],
        };
      }),
    ),
      $.type !== "system" &&
        $.type !== "system_call_end" &&
        (m == null || m("receive"),
        typeof navigator < "u" && navigator.vibrate && navigator.vibrate(50)));
    const K =
        (I = u == null ? void 0 : u.current) == null
          ? void 0
          : I.find((V) => V.id === t),
      q = K
        ? (L = f == null ? void 0 : f.current) == null
          ? void 0
          : L.find((V) => V.id === K.contactId)
        : null;
    if (q) {
      if ((b == null ? void 0 : b.current) !== t) {
        let V = $.text;
        (($.type === "image" || $.type === "text_image") && (V = "[图片]"),
          $.type === "voice" && (V = "[语音]"),
          $.type === "transfer" && (V = `[转账] ¥${$.amount}`),
          $.type === "red_packet" && (V = "[红包]"),
          $.type === "forward_chat_card" &&
            (V = `[聊天记录] 与${$.friendName || "朋友"}的对话`),
          g != null && g.current && clearTimeout(g.current),
          h == null ||
            h({
              id: Date.now(),
              chatId: t,
              user: { name: q.nickname || q.name, avatar: q.avatar },
              message: V,
            }),
          g &&
            (g.current = setTimeout(() => {
              (h == null || h(null), g && (g.current = null));
            }, 3e3)));
      }
      if (x && y && (v === "all" || (v === "last" && D === s.length - 1))) {
        let V = $.text;
        (($.type === "image" || $.type === "text_image") && (V = "[图片]"),
          $.type === "voice" && (V = "[语音]"),
          $.type === "transfer" && (V = `[转账] ¥${$.amount}`),
          $.type === "red_packet" && (V = "[红包]"),
          $.type === "forward_chat_card" &&
            (V = `[聊天记录] 与${$.friendName || "朋友"}的对话`),
          y(q.nickname || q.name, V, q.avatar));
      }
    }
  }
  d((D) => D.map(($) => ($.id === t ? { ...$, isTyping: !1 } : $)));
  const k =
    (B = u == null ? void 0 : u.current) == null
      ? void 0
      : B.find((D) => D.id === t);
  if (
    (F = k == null ? void 0 : k.settings) != null &&
    F.autoSummaryEnabled &&
    N
  ) {
    const D = k.settings.summaryThreshold || 10,
      $ = k.lastSummaryRoundCount ?? 0,
      P = Ap(k.messages || []);
    if (P - $ >= D) {
      const z = P - $,
        O = Wo(k.messages || [], z);
      O.length > 0 &&
        (N(t, O),
        d((Z) =>
          Z.map((K) => (K.id === t ? { ...K, lastSummaryRoundCount: P } : K)),
        ));
    }
  }
}
const ad = {
    chat: { en: "Chat", zh: "聊天", ko: "채팅", ja: "チャット" },
    notes: { en: "Notes", zh: "备忘录", ko: "메모", ja: "メモ" },
    calendar: { en: "Calendar", zh: "日历", ko: "달력", ja: "カレンダー" },
    clock: { en: "Clock", zh: "闹钟", ko: "시계", ja: "時計" },
    photos: { en: "Photos", zh: "相册", ko: "사진", ja: "写真" },
    couple: { en: "Couple", zh: "情侣空间", ko: "커플", ja: "カップル" },
    book: { en: "World Book", zh: "世界书", ko: "세계서", ja: "世界書" },
    mail: { en: "Mail", zh: "邮件", ko: "메일", ja: "メール" },
    camera: { en: "Portable", zh: "随身", ko: "휴대", ja: "携帯" },
    calculator: {
      en: "Memory Archive",
      zh: "回忆封存室",
      ko: "기억 보관실",
      ja: "記憶保管室",
    },
    reading: { en: "Reading", zh: "阅读", ko: "리딩", ja: "読書" },
    weather: {
      en: "Yesterday Bureau",
      zh: "昨日气象局",
      ko: "어제 기상국",
      ja: "昨日気象局",
    },
    settings: { en: "Settings", zh: "设置", ko: "설정", ja: "設定" },
    messages: { en: "Messages", zh: "短信", ko: "메시지", ja: "メッセージ" },
    phone: { en: "Phone", zh: "电话", ko: "전화", ja: "電話" },
    ai_phone: { en: "Check-in", zh: "查岗", ko: "검사", ja: "チェック" },
    meet: { en: "Meet", zh: "遇见", ko: "만남", ja: "出会い" },
    douyin: { en: "TikText", zh: "啾音", ko: "틱톡", ja: "ティックトック" },
    encounter: { en: "Encounter", zh: "邂逅", ko: "인카운터", ja: "邂逅" },
    echo: { en: "Echo", zh: "回响", ko: "에코", ja: "エコー" },
    leting: { en: "Leting", zh: "乐听", ko: "레팅", ja: "レ티ング" },
    bubble: {
      en: "Art Quarterly",
      zh: "艺术季刊",
      ko: "아트 쿼터리",
      ja: "アート季刊",
    },
    meihua_share: { en: "Jilu", zh: "辑录", ko: "집록", ja: "輯録" },
    system: {
      en: "Control Panel",
      zh: "控制面板",
      ko: "제어판",
      ja: "コントロールパネル",
    },
    help: { en: "Guide", zh: "使用指南", ko: "가이드", ja: "ガイド" },
    desktop_placeholder: {
      en: "Placeholder",
      zh: "占位",
      ko: "자리",
      ja: "プレース",
    },
  },
  KF = [
    { id: "chat" },
    { id: "notes" },
    { id: "calendar" },
    { id: "clock" },
    { id: "photos" },
    { id: "couple" },
    { id: "book" },
    { id: "mail" },
    { id: "camera" },
    { id: "calculator" },
    { id: "reading" },
    { id: "weather" },
    { id: "settings" },
    { id: "messages" },
    { id: "phone" },
    { id: "ai_phone" },
    { id: "meet" },
    { id: "douyin" },
    { id: "encounter" },
    { id: "echo" },
    { id: "leting" },
    { id: "bubble" },
    { id: "meihua_share" },
    { id: "help" },
    { id: "desktop_placeholder" },
  ],
  zd = {
    "widget-liquid-orb": {
      type: "builtin",
      component: "LiquidOrb",
      size: "2x2",
    },
    "widget-typo-calendar": {
      type: "builtin",
      component: "TypoCalendar",
      size: "2x2",
    },
    "widget-search-bar": {
      type: "builtin",
      component: "SearchBar",
      size: "4x1",
    },
    "widget-status-pill": {
      type: "builtin",
      component: "StatusPill",
      size: "4x1",
    },
    "widget-vinyl-archive": {
      type: "builtin",
      component: "VinylArchive",
      size: "4x2",
    },
    "widget-photo-frame": {
      type: "builtin",
      component: "StudioGallery4x2",
      size: "4x2",
    },
    "widget-photo-frame-tr": {
      type: "builtin",
      component: "PhotoFrame",
      size: "2x2",
    },
    "widget-photo-frame-bl": {
      type: "builtin",
      component: "AcetateOverlay2x2",
      size: "2x2",
    },
    "widget-profile-card": {
      type: "builtin",
      component: "ProfileCard4x4",
      size: "4x4",
    },
    "widget-capsule-status-2x1": {
      type: "builtin",
      component: "CapsuleStatus2x1",
      size: "2x1",
    },
  },
  kS = [
    "ai_phone",
    "couple",
    "meet",
    "book",
    "douyin",
    "encounter",
    "camera",
    "calculator",
    "reading",
    "echo",
    "leting",
    "bubble",
    "meihua_share",
    "settings",
    "chat",
    "mail",
    "phone",
    "help",
  ],
  ex = 28,
  zr = "empty-",
  qF = [
    {
      id: "t-ai_phone-faq-how-to-switch-role",
      title: "怎么换一个人查岗？点屏幕左边/右边的“隐形切换区”",
      tags: ["角色列表", "切换联系人", "玩法"],
      desc: "角色列表页左右边缘各有一条窄区域：点左=上一个，点右=下一个。",
      duration: "阅 1 分钟",
      content: `在查岗的**角色列表**页：

· 点屏幕**最左边**一条竖窄条＝上一个人。  
· 点屏幕**最右边**一条竖窄条＝下一个人。  

这招比“等自动翻页”快很多。`,
    },
    {
      id: "t-ai_phone-faq-pin-star",
      title: "星星置顶怎么玩？点名字旁星星＝置顶/取消置顶",
      tags: ["角色列表", "置顶", "星星"],
      desc: "灰星点一下置顶，金星点一下取消；置顶的人下次更靠前。",
      duration: "阅 1 分钟",
      content: `角色列表里，名字右边那颗星：

· 灰色 → 点一下：**置顶**。  
· 金色 → 再点一下：**取消置顶**。`,
    },
    {
      id: "t-ai_phone-faq-wrong-password-drama",
      title: "输错密码会发生什么？会在聊天里留一条“试图解锁”的剧情提示",
      tags: ["密码", "玩法", "聊天联动"],
      desc: "输错会抖一下并清空；同时可能往该角色聊天里写入解锁尝试提示，作为剧情钩子。",
      duration: "阅 2 分钟",
      content: `在密码门输错 6 位数字时：

· 这页会**抖一下**并清空让你重输。  
· 同时，你和这个角色的**聊天窗口**里可能会出现一条提示（类似“有人试图解锁你的手机”）。  

这是故意设计的：让你把“查岗失败”接回到聊天剧情里继续演。`,
    },
    {
      id: "t-ai_phone-faq-fingerprint",
      title: "指纹解锁怎么玩？开通过就点指纹直进；没开通会红字提示",
      tags: ["指纹", "解锁"],
      desc: "开通过指纹=点一下直接解锁；没开通=红字“未开通指纹解锁”，继续输数字。",
      duration: "阅 1 分钟",
      content: `密码门底部的**指纹图标**：

· 如果聊天里已给该角色**开通并同意指纹**：点一下直接进。  
· 如果没开通：会提示 **未开通指纹解锁**，继续输 6 位数字。`,
    },
    {
      id: "t-ai_phone-faq-home-house",
      title: "找不到返回？用底部“小房子”一层层退：子页→内心空间→角色列表→关闭",
      tags: ["返回", "退出", "小房子"],
      desc: "鼠标移到窗口底部中间出现黑圆小房子；按所在层级决定退到哪。",
      duration: "阅 1 分钟",
      content: `把鼠标移到查岗窗口**底部中间**会出现一个黑圆**小房子**。

点它会按层级退：
**子页 → 内心空间 → 角色列表 → 关闭应用**。`,
    },
    {
      id: "t-ai_phone-faq-mood-star-totem",
      title: "心情页右下角小星星是什么？点开“潜意识图腾”",
      tags: ["心情", "星星", "图腾"],
      desc: "心情生成后右下角出现星星，点开全屏潜意识图腾，再点空白关闭。",
      duration: "阅 1 分钟",
      content: `在**心情共鸣**里生成完成后：

· 右下角会出现一颗**淡淡的小星星**。  
· 点它＝打开全屏**潜意识图腾**（图案 + 名字 + 一句解读）。  
· 再点空白处关闭。`,
    },
    {
      id: "t-ai_phone-what",
      title: "查岗是干什么的？和真手机有什么区别",
      tags: ["基础入门", "总览"],
      desc: "查岗让你选一个聊天里的角色，像翻 TA 的「内心手机」：日记、行踪、计划、心情等都是剧情向玩法。",
      duration: "阅 2 分钟",
      content: `# 一、查岗是什么
查岗（桌面上可能显示「查岗」或英文名）是一个**假装成手机**的玩法界面。你并不是在操作真手机，而是在看**某一个 AI 角色**的虚构内容。

# 二、你可以怎么理解它
你可以把它想成：你拿到了 TA 的「小手机」，里面有心事日记、今天的行踪、做的梦、听了什么歌、逛了什么网页、钱包里花了多少钱——**全是故事和氛围**，用来聊天、写剧情、增加代入感。

# 三、重要提醒
· 这些内容要靠**设置里已经配好的联网对话能力**（和聊天用的是同一套）来生成；没配好会弹出提示让你先去设置。
· 角色有没有「手机密码」「指纹」等，是在**聊天相关功能**里设定的；查岗里只是**输入和验证**。`,
    },
    {
      id: "t-ai_phone-contact-list",
      title: "第一步：角色列表（选要查谁）",
      tags: ["角色列表", "选人", "切换联系人"],
      desc: "全屏大图、顶条「角色列表」、编号、名字旁星星、探索按钮；没有联系人时提示暂无。",
      duration: "阅 2 分钟",
      content: `# 一、第一眼画面
打开查岗后，第一眼通常是**黑色背景 + 一张大图**。这张图用的是当前选中角色的**背景图**；如果没有背景图，就用**头像**当背景。

# 二、界面分区说明
## 1. 最上面一行
· **左上角**：一个**向左的尖角箭头**（像「返回」）。点它 = **关掉整个查岗**，回到桌面。
· **中间**小字写着「角色列表」。
· **右上角**：空白占位，没有按钮。

## 2. 中间偏下
· 一行小字「编号 01、02…」表示你现在看到的是列表里的第几个。
· **大字名字**：显示角色的**昵称**；没有昵称就显示**名字**。
· 名字右边有一颗**星星**：
  - 灰色星星：点一下 = **置顶**这个角色，下次打开列表会排在最前面。
  - 金黄色星星：再点一下 = **取消置顶**。
· 下面一行小字是**个性签名**；如果角色没写签名，会显示一句默认文案。
· **「探索」两个字 + 向右箭头**：点这一行 = **选定当前这个角色**，下一步去**输密码**。

## 3. 怎么换一个人看（很多人找不到）
· **用手指点屏幕最左边**：沿上下一条**竖的窄条区域**（大约一指宽）。点一下 = 切换到**上一个**联系人。
· **点屏幕最右边**：同样一条竖窄条。点一下 = 切换到**下一个**联系人。
· **最顶上一排细细的小横条**：有几根白线，当前那一根会**慢慢变白走完**；走完会自动跳到**下一个人**（像自动翻页）。想停在某人身上，就赶在走完前点左缘/右缘换人。

## 4. 如果列表是空的
· 中间会写「暂无联系人」。你需要先在**聊天**里加好角色，再回到查岗。`,
    },
    {
      id: "t-ai_phone-security",
      title: "第二步：密码门（六位数字、删除、指纹）",
      tags: ["密码", "指纹", "解锁"],
      desc: "欢迎回来界面；点 0～9 凑满 6 位；删除逐位删；指纹图标视开通与否；左上角返回角色列表。",
      duration: "阅 3 分钟",
      content: `# 一、进入密码门
选好角色并点「探索」后，会进入**浅色、模糊背景**的一页，像锁屏。

## 1. 左上角
向左箭头：点一下 = **回到角色列表**（不查这个人了）。

## 2. 中间区域
· 圆形**头像**。
· 「欢迎回来」「身份验证」字样。
· **六个小圆点**：你每按一个数字，就多亮一个点。一共要**六位**。

## 3. 数字键盘
· **1 到 9** 和 **0** 都可以点。
· 右下角写着**「删除」**：点一下 = **去掉最后一位**；可以连点多次清空重输。

## 4. 密码从哪来
· 每个角色可以有自己的**六位手机密码**。
· 如果系统里**没给这个角色设过密码**，默认当作 **123456**（六个数字）。

## 5. 输对或输错
· **输对了**自动进入**内心空间**（主界面）。
· **输错了**圆点会**抖一下**，然后清空让你重输。同时，在和这个角色的**聊天窗口**里，可能会出现一条提示，大意是「某某试图解锁你的手机」——这是剧情向提醒；系统里也可能触发角色**换密码**之类的后续（当作故事设定即可）。

## 6. 指纹图案
数字键盘下面有一个**指纹**小图标。
· 若聊天里给这个角色**开通并同意了指纹**：点指纹可以**直接当作解锁成功**进去（界面会闪一下绿色再进）。
· 若**没开通**：点一下会**变红抖一下**，下面短暂出现红字「未开通指纹解锁」。这时请继续用**数字密码**。`,
    },
    {
      id: "t-ai_phone-home-button",
      title: "屏幕最底下隐藏的小房子按钮（怎么一层层退出）",
      tags: ["返回", "退出", "主页"],
      desc: "鼠标移到查岗窗口底部中央出现圆形 Home；在内心空间回列表，在子页回内心空间，在列表再点则关闭应用。",
      duration: "阅 1 分钟",
      content: `# 一、小房子按钮在哪
查岗窗口**最底部**有一条看不见的「感应区」。把**鼠标移到底部中间**，会出现一个**黑色圆形**，里面有个**小房子**图标。

# 二、点它会怎样
点这个小房子时，程序按你现在在哪一页决定做什么：

## 1. 内心空间或密码门
· 如果你正在**内心空间**（主界面）或**密码门**：点一下 = **回到角色列表**（选人那一页）。

## 2. 日记、行踪等子页
· 如果你正在**日记、行踪、计划、心情、梦、音乐、浏览器、钱包**等任意子页：点一下 = **先回到内心空间**，不会直接关应用。

## 3. 已在角色列表
· 如果你已经在**角色列表**：再点一下 = **关掉查岗**，回到桌面。

# 三、记忆口诀
**子页 → 内心空间 → 角色列表 → 关闭**。想快关就从列表点左上角箭头，或列表时点小房子。`,
    },
    {
      id: "t-ai_phone-exit-map",
      title: "查岗退出总表：你现在在哪，就按哪条走",
      tags: ["退出", "返回", "关闭", "快速查找"],
      desc: "把所有页面的返回路径放一张表里：子页、主界面、密码门、角色列表分别怎么退。",
      duration: "阅 2 分钟",
      content: `# 一、先记一个总规则
**离开查岗永远是分层走**：先退到上一层，再退到角色列表，最后关闭应用。

---

# 二、你在子页面时（最常见）
子页面包括：**心情、梦境、计划、行踪、日记、电台、发现、钱包**。

## 1. 第一步
点左上角箭头（或右上角 X，按页面实际按钮）先回到**内心空间**或该模块列表。

## 2. 第二步
再回到**内心空间主界面**后，点右上角头像卡片，回**角色列表**。

## 3. 第三步
在角色列表点左上角返回箭头，**关闭查岗**回桌面。

---

# 三、你在密码门时
## 1. 不想继续输密码
点左上角箭头，回**角色列表**。

## 2. 想直接关闭
到角色列表后，再点左上角箭头关闭。

---

# 四、你在内心空间主界面时
## 1. 想换人
点右上角头像卡片，回角色列表选另一个人。

## 2. 想关应用
先回角色列表，再点左上角箭头关闭。

---

# 五、你看不到左上角箭头时（小房子兜底）
把鼠标移到查岗窗口底部中央，出现黑色圆形小房子后点它：

## 1. 在子页
点一次：回内心空间。

## 2. 在内心空间或密码门
再点一次：回角色列表。

## 3. 已在角色列表
再点一次：关闭查岗。`,
    },
    {
      id: "t-ai_phone-mindspace",
      title: "内心空间主界面：每一块都是什么、点哪进哪",
      tags: ["内心空间", "主界面", "相册"],
      desc: "今日与头像、状态电量位置、心情梦境计划行踪日记电台相册发现钱包；点头像回角色列表。",
      duration: "阅 4 分钟",
      content: `# 一、整体说明
密码通过后，进入**浅色背景**的**内心空间**。这是「假手机」的桌面。

## 1. 最上面
· 左边写着「今日」和**角色昵称/名字**。
· 右边是**头像方块**（两层小卡片叠着的样子）。**点这个头像** = **回到角色列表**（和列表页左上角关查岗不同，这里只是换人用）。

## 2. 往下滑：模块总览
从上到下依次是：

### 1）状态 + 电量
左边黑卡片：一行「状态」，下面大字是心情页生成后同步过来的**在线状态**；还没生成过会显示「离线」。  
右边灰卡片：**电量百分比**；没数据会显示「--」。

### 2）位置（不一定有）
只有心情页生成过、且结果里带有地点时，才会出现一条「位置」卡片，带地图钉图标。

### 3）心情共鸣
点整块进入**心情页**，用 AI **感应**角色当下情绪。主界面上会预览颜文字、心情词、一句内心话；下面有「每日洞察」短文。没数据时有提示「点击感知心情共鸣」。

### 4）每日洞察
单独一块浅色引用文字，内容随心情数据变化；没有数据时是一句默认文案。

### 5）梦境记录
点进去是**梦境档案**：列表、写新梦、看详情。

### 6）计划
点进去按**日期**看角色**当天日程**（可生成）。

### 7）行踪
点进去是**查岗历史 / 今日行踪**，可生成一整天的行程故事。

### 8）日记
点进去生成或阅读**日记条目**，可配乐、可绑定乐听歌单。

### 9）灵魂电台（音乐电台）
点进去是**调频电台**界面：三个频道、播音文案、可点歌、可绑定乐听。

### 10）相册
四个竖长小格子，**点某一格**会从设备选一张图**贴上去**（本地装饰用），会记住在这个角色下。

### 11）发现（浏览历史）
点进去是**假装浏览器**：生成「看过什么网页」的卡片，可点进详情。

### 12）钱包
点进去看**虚构资产、卡片、账单、运势**等。

# 二、装饰说明
界面里有些英文、电台封面等是**美术效果**，不影响你怎么点。`,
    },
    {
      id: "t-ai_phone-mood",
      title: "心情共鸣（情绪共振）",
      tags: ["心情", "情绪", "图腾"],
      desc: "底部「共鸣」大按钮生成；右下角小星星打开潜意识图腾；左上角返回内心空间。",
      duration: "阅 2 分钟",
      content: `# 一、怎么进入
从内心空间点**心情共鸣**进入。顶栏写着「情绪共振」。

## 1. 第一次打开
中间会提示「点击下方感应情绪」。

## 2. 底部「共鸣」按钮
**底部正中间**一个圆形按钮，下面小字「**共鸣**」。点它 = 让 AI **根据聊天、朋友圈、遇见记忆等**生成当前心情（需要设置里已配置密钥）。

生成过程中圆环会转，字变成「感应中…」。

## 3. 生成完成后
· 大**颜文字**、中文心情词、一句**内心独白**（带引号）。
· **右下角**会出现一个**淡淡的星星**小按钮。点它 = 弹出全屏**潜意识图腾**（图案、名字、一句解读）。**再点屏幕空白处**关闭。

## 4. 返回与数据
**左上角箭头**回到**内心空间**。  
生成结果会保存在本机，内心空间上的「状态、电量、位置、洞察」等会跟着更新。`,
    },
    {
      id: "t-ai_phone-dream",
      title: "梦境档案：列表、织梦、现实/幻想、删除、详情",
      tags: ["梦境", "删除"],
      desc: "列表顶「记录新梦境」；现实/幻想；幻想可填关键词；进入梦境生成；详情看解读与情绪条；垃圾桶删。",
      duration: "阅 3 分钟",
      content: `# 一、顶栏与返回
顶栏「梦境档案」。

## 1. 左上角箭头
· 在**列表**时：点 = **回内心空间**。  
· 在**织梦**或**详情**时：点 = **先回到列表**（多按几次才能回到内心空间）。

# 二、列表页
## 1. 卡片与删除
· 第一张大卡片「**记录新梦境**」：点 = 进入**织梦**界面。  
· 下面每张卡片是一场过去的梦：**日期、标题、片段预览、小标签**。点卡片 = **看全文详情**。  
· 卡片右上角**垃圾桶**（鼠标移上去才明显）：点 = 会问你是否忘记这场梦，确定则删除。

# 三、织梦界面「梦境织梦师」
## 1. 现实与幻想
· 两个大按钮：**现实**（基于回忆、潜意识）和**幻想**（番外、平行宇宙）。选一个会变亮。  
· 选**幻想**时，下面多一个输入框「梦境设定（可选）」，可以写比如「古代、赛博朋克」等**关键词**。  
· 选**现实**时，下面有一段说明文字，告诉你基于近期回忆。  
· 底部「**进入梦境**」：开始生成（要密钥）。生成中会转圈显示「正在织梦…」。

# 四、详情页
长篇故事正文、梦醒**独白**、**情绪光谱**彩色条、**元素**标签、**感官碎片**、底部**解读**文字。  
想回去就点左上角回到列表。`,
    },
    {
      id: "t-ai_phone-plan",
      title: "计划：按日期看日程、底部罗盘换天、生成计划",
      tags: ["计划", "日程", "日期"],
      desc: "中间大日期与星期；下方列表；生成计划按钮；底部横滑七天选日期；顶左返回。",
      duration: "阅 2 分钟",
      content: `# 一、顶栏与日期
顶栏小字「今日计划」，但你可以看**不止今天**。

## 1. 中间区域
显示**星期几**和**几月几日**。下面竖线装饰。  
再下面是**一条条时间表**：每条左边时间，右边计划内容。  
如果没有内容，会提示你点下面「生成」。

## 2. 生成计划
中间偏下有一个带小星星图标的按钮，写着「**生成计划**」或「生成中…」。点 = 为**当前选中的那一天**生成日程（要密钥）。**同一天再点**会重新生成覆盖。

## 3. 最下面「罗盘」换日期
可以**左右滑动**的一排日期，大约**前后各一周**。每个格子显示**周几简称**和**日期数字**。  
· **点某个格子** = 切换到那一天，看那天的计划。  
· 滑停时也会**自动对准**某一天（轻微震动是设备支持时的小反馈）。

## 4. 点击大日期
界面上有「点击刷新计划」的提示样式，但当前代码里**点击大日期本身不会触发刷新**，请以「生成计划」按钮为准。

## 5. 返回
**左上角箭头**回**内心空间**。`,
    },
    {
      id: "t-ai_phone-trace-list",
      title: "行踪·列表页：今日卡片、历史、删除、开始新查岗",
      tags: ["行踪", "查岗历史", "删除", "列表"],
      desc: "顶栏查岗历史；今日黑色卡片与点入更新；往日条目与垃圾桶；底栏开始新查岗；空状态提示。",
      duration: "阅 2 分钟",
      content: `# 一、进入列表
从内心空间点「行踪」进入。顶栏标题是「**查岗历史**」。**左上角箭头**回内心空间。

# 二、今日行踪卡片
（仅当今天已经生成过行踪时会出现）

## 1. 卡片操作
· 一张**黑色大卡片**，写着「今日行踪」。  
· 小字会写**记录到大概几点**、**共有几「小时页」**。  
· **点整张卡片**：系统可能先**自动续写/更新**今天的记录（支持时），你会看到「正在生成/更新…」和转圈；结束后再进入**故事播放**。  
· 若不想等，就等转圈结束再点。

# 三、往日记录列表
## 1. 条目与删除
· 在「今天」下面的白色卡片，每一张代表**过去某一天**。  
· 显示**日期**、**记录了多少个时刻**。  
· **点整张卡片**（不要只点垃圾桶）= 进入那一天的**故事播放**。  
· 卡片右侧 **垃圾桶图标**：只删这一条；如果删的那条恰好是「今天」在列表里的表现，**今天的行踪数据也会被清掉**。

# 四、底部大按钮
· 写着「**开始新查岗**」或「扫描中…」。  
· 点 = 为**今天**重新生成**一整套**行踪（要密钥，会参考今日计划、聊天、朋友圈、遇见记忆等）。

# 五、空状态
中间大字「**暂无查岗历史**」，底部仍然有「开始新查岗」可以点。`,
    },
    {
      id: "t-ai_phone-trace-play",
      title: "行踪·播放页：进度条、左右滑、证据、秘密、右上角关闭",
      tags: ["行踪", "滑动", "证据", "播放"],
      desc: "全屏渐变故事；顶右 X 回列表；细进度条；左滑下一条右滑上一条；证据弹窗；秘密笔记展开；最后一划退出。",
      duration: "阅 2 分钟",
      content: `# 一、画面概览
进入某天的行踪「故事」后，是全屏**彩色渐变背景**（颜色会随心情关键词变化）。

## 1. 退出播放
看**最上面一行**：右边有一个 **X**。点 **X** = **立刻回到**「查岗历史」列表页。

## 2. 顶上进度条
· 一条分成很多小段，表示**很多个时间点**。  
· **已经看过的**那一段会**填满白色**，方便你知道进度。

## 3. 中间主要内容
· **很大的时间**（例如几点几分）。  
· **地点**（带小地图钉）。  
· **正在做什么事**（一段描述）。  
· **内心想法**（带引号的小字）。  
· **心情表情**和英文心情词。

# 二、证据与秘密
## 1. 证据按钮
· 若这一刻有「证据」设定，会出现一个写着「证据」的按钮（带小相机/小票等图标）。  
· 点 = 弹出一张**白色说明卡**：标题、时间、说明文字；中间图片区域是**占位图**（不是真照片）。  
· 点**卡外面的黑色区域**或卡上的关闭 = 关掉。

## 2. 秘密笔记
· 若这一刻有秘密，会出现「秘密笔记」或「隐藏秘密」按钮。  
· 点一下 = **展开**一行「上锁的内心话」；再点 = **收起来**。

# 三、左右滑动换时刻
· 用手指或鼠标在**中间大片区域**按住，**向左拖**出一截后松手 = **下一刻**。  
· **向右拖** = **上一刻**。  
· 若你已经在**最后一个时刻**还继续「下一刻」，会**自动退出播放**回到列表。`,
    },
    {
      id: "t-ai_phone-diary",
      title: "日记：记录今日、列表、长按删除、详情配乐与表情",
      tags: ["日记", "乐听", "删除"],
      desc: "顶右歌单绑定；虚线框记录今日；时间轴列表；长按或右键删；详情左返回、表情、配乐、运势卡。",
      duration: "阅 4 分钟",
      content: `# 一、顶栏与歌单
顶栏中间「日记」。**右上角音符列表图标**：打开**绑定乐听歌单**（和乐听 App 里歌单联动，绑定后 AI 写日记时更可能用歌单里的歌当背景）。

# 二、记录与列表
## 1. 「记录今日」
**大虚线框「记录今日」**：点 = 生成一篇新日记（要密钥）。生成中会转圈，并闪过一些关键词。生成完会自动**打开详情**。

## 2. 时间轴列表
每条显示日期、标题、两行摘要、标签。  
· **点一下** = 打开详情阅读全文（打字机效果）。  
· **手机长按约半秒** 或 **电脑右键** = 弹出**删除**红按钮；点删除 = 去掉这篇。  
· 若误触出删除菜单，点一下条目上的**空白蒙层**可关菜单。

# 三、详情页
· **左上角箭头** = 关详情回到列表（还在日记里）。  
· 上方显示**时间、天气**类信息。  
· **情绪区**：AI 给的 emoji；旁边可以加**你自己的 emoji**（点小加号打开选择板，点板子外关闭）。下面有「情绪分数」。  
· 正文、装饰小贴纸、可能有**运势卡**（幸运物、幸运色）。  
· **配乐条**：黑圆按钮点 = **播放/暂停**。若日记绑定的是乐听里的歌，会走乐听播放；否则会尝试按歌名去联网找歌（受网络影响）。  

**左上角箭头**在列表页时 = **回内心空间**。`,
    },
    {
      id: "t-ai_phone-music",
      title: "音乐电台：三频道、调频、点歌、历史、乐听绑定、朗读故事",
      tags: ["电台", "乐听", "点歌", "语音"],
      desc: "88.5/94.2/102.4 三台；开始调频；黑胶点击 TTS；点歌框；历史与删除；书本图标展开故事全文。",
      duration: "阅 4 分钟",
      content: `# 一、顶栏与入口
顶栏标题「音乐电台」。  
**左箭头** = 回内心空间。  
**右：时钟图标** = 在**播放器**和**广播档案（历史）**之间切换。  
**右：列表音符** = **绑定乐听歌单**（绑定后三个频道更可能用歌单里的真实歌曲当背景音乐）。

# 二、三个频道
分别是 **88.5 内心之声**、**94.2 记忆小路**、**102.4 未来回响**。点哪个 = 当前播这个频道的台。

# 三、还没有广播内容时
中间像收音机待机。下面有：  
· **语音模式**开关：打开后会用**聊天里给这个角色配的朗读声音**念独白（若没配声音可能听不到）。  
· **开始调频**大按钮：向 AI 要三段广播内容（要密钥）。等待时显示「调谐频率中…」。

# 四、有广播之后
· 中间**大黑胶**：点 = **播放/暂停朗读**（TTS）。下面显示**背景音乐歌名-歌手**；若绑定了乐听会多一行小字说明。  
· 文案区域右上角**小书本**：若本段有「故事」扩展，点 = **全屏看长文**，右上角 **X** 关闭。  
· **点歌**：下面输入框写歌名，点右边箭头 = AI **点评**这首歌（星级+短评）。

# 五、历史模式
每条记录显示日期、时间、摘要。点一条 = **载入那次的三频道内容**并回到播放器。  
条目右侧垃圾桶 = 删除这条记录（会英文确认框）。

离开本页时，朗读会自动停，背景音乐也会停。`,
    },
    {
      id: "t-ai_phone-browser",
      title: "发现（浏览历史）：生成记录、格子、清空、洞察、假网页",
      tags: ["浏览器", "发现", "收藏"],
      desc: "顶栏假地址栏点刷新生成；饼图洞察；两列收藏格；底栏前进后退分享书签标签页；点 visit 进详情。",
      duration: "阅 4 分钟",
      content: `# 一、顶栏
· **左箭头** = 回内心空间。  
· **中间白条**写着 google.com 样子：点整条 = **再生成一批浏览记录**（要密钥）。右边小图标转圈表示正在生成。  
· **右饼图** = 打开「**每日洞察**」面板：好奇心分数、兴趣标签、系统分析长文、内心独白引用。点灰背景或右上角 X 关闭。

# 二、还没有记录时
中间指南针图标和「开始浏览」，蓝色按钮「**生成浏览记录**」。

# 三、有记录后
标题「收藏」，右侧蓝色「**清空**」= 全部删掉（会确认）。  
下面是**两列大卡片**：  
· **搜索型卡片**：显示搜了什么、AI 旁白。这种**点开会进详情**。  
· **访问型卡片**：商品/社交/文章图标。**点卡片** = 打开**假网页**阅读；**右上角小 X** = 只删这一条记录。

# 四、底部五个蓝图标
在**假网页里**也像浏览器：后退、前进、分享（会弹出英文提示「Shared!」仅为效果）、书签（点亮仅界面效果）、**标签页**。  
标签页里可以看缩略图，**完成**关标签视图；小圆 X 可关掉当前页。

# 五、完成
在网页模式顶栏右侧蓝色「完成」= 退出网页回到浏览记录列表。`,
    },
    {
      id: "t-ai_phone-wallet",
      title: "钱包：总余额、银行卡滑动、快捷按钮、上拉账单与运势",
      tags: ["钱包", "刷新"],
      desc: "首次自动生成；右上刷新；横向滑动多张卡；转账请求扫码更多；上拖看流水；点幸运看大运。",
      duration: "阅 3 分钟",
      content: `# 一、第一次进入
第一次进来若没钱包数据，会自动尝试**生成**（要密钥，可能等较久，失败会提示）。

# 二、顶栏与总览
## 1. 顶栏
左返回内心空间；中间「钱包」；**右循环箭头** = **重新生成**整个钱包数据。

## 2. 总余额与银行卡
**总余额**大字显示。  
**银行卡**多张卡可**横滑**切换，每张显示银行、尾号、余额等（虚构）。

## 3. 四个圆钮
**转账、请求、扫码、更多**：点 = 弹出**预设小故事卡片**（像付款结果小剧场），点关闭。

# 三、白色大抽屉
抓着中间**灰色横条**往上点 = **展开/收起**。展开后可见：  
· **每日洞察**引用；  
· **人格画像**、**未来账单**小卡片；  
· **幸运**一行：点进去**大运详情**弹窗，可关；  
· **最近动态**流水：每条左侧图标、商家、类别、时间；**鼠标悬停**可能出现一句角色心声。

「查看全部」按钮当前仅为装饰。

**左上角箭头**回内心空间。`,
    },
    {
      id: "t-ai_phone-leting-bind",
      title: "绑定乐听歌单（日记与音乐电台里）",
      tags: ["乐听", "歌单", "网易云"],
      desc: "弹层里选本机歌单或网易云歌单；空歌单会提示先去乐听加歌。",
      duration: "阅 2 分钟",
      content: `# 一、怎么打开
在**日记**右上角或**音乐电台**右上角打开「绑定乐听歌单」后，会出现一张**从底下升起**的面板。

# 二、选歌单
· 可先选 **本机** 歌单：列出你在**乐听**里建好的列表；**点一条**绑定。若歌单是空的，会红字提示你先去乐听加歌。  
· 可切到 **网易云**（需你在乐听里登录过网易账号）：列出线上歌单，点一条绑定。

绑定成功后，图标往往会**变绿**或带小点。再点同一入口可**更换**歌单。

# 三、有什么用
AI 写**日记**、播**电台**时，会优先从你绑定的歌单里**挑真实的歌**来当「配乐」或「广播 BGM」，而不是完全瞎编歌名。`,
    },
    {
      id: "t-ai_phone-notification",
      title: "从通知直接跳进查岗（行踪）",
      tags: ["通知", "跳转"],
      desc: "若系统从通知带入某角色与页码，可跳过密码直达该角色行踪播放页。",
      duration: "阅 1 分钟",
      content: `# 一、通知快捷入口
若你用的版本支持「行踪提醒」通知，有时点通知会**直接打开查岗**，并且：

## 1. 会帮你做好的事
· 已经**选好**是哪个角色；  
· **跳过密码**；  
· 直接打开**行踪**里**某一天某一页**对应的时间点。

这是省步骤的快捷入口。若联系人已删除或找不到，可能不会跳转成功。`,
    },
    {
      id: "t-ai_phone-common-prompts",
      title: "常见提示看不懂？一条条对照怎么处理",
      tags: ["报错", "提示", "失败", "联网", "排查"],
      desc: "把查岗里最常见的提示翻成白话：看到哪句就做哪一步。",
      duration: "阅 3 分钟",
      content: `# 一、先记住一句话
查岗里大多数「生成失败」都不是你点错了，常见是：**联网能力没配好、当前角色数据太少、或者这次生成超时**。

---

# 二、看到「请先配置」「请先在设置中配置」
## 1. 这句话是什么意思
不是让你在查岗里找按钮，而是去手机里的**设置 App**，把聊天那套联网配置补齐。

## 2. 你该怎么做
先退出当前页 → 去设置补配置 → 回来重试同一个按钮。

---

# 三、看到「生成失败」「解析失败」「请重试」
## 1. 先做最稳妥的重试
等 2~3 秒，再点一次同一个按钮（不要连点狂点）。

## 2. 连续失败时
换一个模块先试（比如先试计划，再回日记），确认是否只有某一页失败。

## 3. 仍然失败
先检查网络，再检查设置里的联网配置。

---

# 四、看到「生成超时（约 70 秒）」
## 1. 这不是卡死
表示这次等待太久被系统主动结束。

## 2. 你该怎么做
直接重试一次；如果连续超时，先去别的页面操作一下再回来生成。

---

# 五、看到「未开通指纹解锁」
## 1. 意思
这个角色当前没有开通指纹直通。

## 2. 做法
继续走**六位数字密码**解锁，不要一直狂点指纹图标。

---

# 六、看到「暂无联系人 / 暂无记录」
## 1. 暂无联系人
去聊天先加角色，再回查岗。

## 2. 暂无记录
这页还没生成过内容，点本页的「生成」「开始新查岗」「记录今日」一类按钮即可。`,
    },
    {
      id: "t-ai_phone-meet-memory",
      title: "遇见记忆、聊天内容会怎样影响查岗",
      tags: ["遇见", "记忆", "聊天"],
      desc: "遇见里开启同步后，多个模块会尝试把「线下记忆总结」写进生成内容；各模块也会读聊天与朋友圈。",
      duration: "阅 2 分钟",
      content: `# 一、生成时会参考什么
查岗里很多「生成」按钮，背后都会尽量参考：

## 1. 数据来源
· 你和这个角色的**最近聊天记录**；  
· 这个角色相关的**朋友圈**动态；  
· 若在**遇见**里给这个角色开了**同步到查岗**，还会尝试加入一段**线下记忆总结**（超时则当没有）。

# 二、你需要知道的
你不需要懂技术，只要知道：**聊得越多、遇见记得越多，生成的日记/行踪/计划等越容易和你们的剧情对得上。**  
没开遇见同步也不影响使用，只是少了一块参考。`,
    },
  ],
  QF = [
    {
      id: "t-chat-what-is",
      title: "开头说明：聊天应用是干什么的",
      tags: ["基础入门"],
      desc: "本机模拟聊天与朋友圈；智能回复需先在「设置」里配置联网。",
      duration: "阅 1 分钟",
      content: `# 开头说明：这台「聊天」软件是干什么的

**聊天应用** = 在这台手机里**假装成聊天软件**的那一页：可以**打字对话**、**看朋友圈**、**管联系人**。你和角色的来往记录**主要存在本机**（换浏览器或清数据可能丢，重要内容请自己另有备份习惯）。

---

## 1. 想和对方「真的回话」前要做什么
· 角色要能**联网接话**，需要你在**手机桌面上的「设置」**应用里，按那里的说明先填好**能连上网的账号**（具体名字以设置页为准）。
· 没配好时，点聊天里的**接收**（心形按钮）常会**失败或提示**，这是正常现象——先去**手机设置**弄好再回来。

---

## 2. 怎么读下面所有教程
· **一、二、三…** 是大路；**六**下面又拆成 **六（01）（02）…**，方便你只搜一个小功能。
· 每条里 **1. 2.** 是小步骤；**---** 表示换一大块话题。

---

*看不懂某句话时，直接打开真机对照屏幕上的字，以屏幕上写的为准。*`,
    },
    {
      id: "t-chat-enter-from-desktop",
      title: "一（1）进入聊天应用",
      tags: ["基础入门", "进入"],
      desc: "默认桌面 Dock 常为四个图标；从左数第二个是「聊天」。",
      duration: "阅 1 分钟",
      content: `在手机**主屏幕最下面的 Dock 栏**（一排固定图标）里找到**聊天**应用。

【默认布局】
· 当前默认桌面（Cyber Zen）里，Dock **从左到右**常常是：**设置 → 聊天 → 邮件 → 电话**。
· 因此**从左数第二个图标**就是**聊天**。

【若你改过桌面】
· 顺序可能不同，**以图标显示「聊天」或对话气泡为准**，不要死记第几格。

点一下进入聊天应用。`,
    },
    {
      id: "t-chat-inner-dock-four",
      title: "一（2）聊天应用里的底栏功能说明",
      tags: ["基础入门", "导航"],
      desc: "四个图标：消息、联系人、朋友圈、我；下方箭头可折叠底栏。",
      duration: "阅 2 分钟",
      content: `# 一（2）聊天应用里的底栏：四个圆钮 + 小箭头

进入聊天后，屏幕**最下面**还有一排**只属于聊天软件内部的底栏**（和手机主屏幕最底下那一排**不是**同一排）。

---

## 1. 四个图标从左到右分别干什么
1. **对话气泡**：**消息列表**（选今天进哪个聊天窗口）。
2. **两个小人**：**联系人**（加人、分组、建群）。
3. **像相机光圈**：**朋友圈**（发动态、刷动态；有时有小红点表示有新东西）。
4. **一个人剪影**：**我**（你的资料、预设、换皮肤、收藏等）。

---

## 2. 四个钮下面中间的小箭头
· 点一下 → **整条弧形底栏滑下去藏起来**；再点同位置 → **展开回来**。
· 藏起来时只剩**底下一细条**：**再点小箭头**即可展开四个大图标。

---

## 3. 什么时候这排会消失
· 进了**某一个聊天窗口**、**朋友圈全屏**、**收藏全屏**时，内部底栏常会**暂时不见**。
· **返回上一级**（例如点左上角返回）后，底栏会**再出现**。

---

*只关心收折底栏？* 另有一篇 **《附：聊天应用底栏收起与展开》**。`,
    },
    {
      id: "t-chat-exit-all-methods",
      title: "二、退出聊天应用",
      tags: ["基础入门", "返回"],
      desc: "快捷：底部小黑条；或消息页点「消息」、联系人点返回、朋友圈点返回。",
      duration: "阅 2 分钟",
      content: `# 二、退出聊天应用（关软件，不是关某一个窗口）

---

## 1. 最快：点手机外壳最底下的「Home 条」
· 很多机型在屏幕**最底**有一条**短短的横条**（或圆角条）。
· **点一下** ≈ 按 Home，**整个聊天应用关掉，回到手机桌面**。
· 若你设备上**没有**这条，用下面别的方法。

---

## 2. 人在「消息」列表（一叠卡片或长列表）时
· 顶上有大字 **「消息」** 的那一整条：**点这块字附近**（以主题为准）常等于**回桌面**。

---

## 3. 人在「联系人」页时
1. 看**分组标签下面**那一行像地址栏的东西：**最左边 ‹** → **回桌面**。
2. **同一条里最右边 ›** 是**前进**（只有你刚才换过分组才可能亮起），**不是**退出，**别当返回桌面用**。

---

## 4. 人在「朋友圈」全屏时
· 先用**左上角返回**一层层退到**带底栏**的聊天主页，再用 **Home 条** 或 **消息** 大字回桌面。

---

## 5. 人在「我」或其它全屏子页时
· 先**返回到**有底栏的聊天主页（消息 / 联系人 / 朋友圈 / 我 四钮那一层），再 **Home 条** 或 **消息** 大字。

---

## 6. 人在「某一个聊天窗口」里时
· **左上角箭头**一般是**回到消息列表**，**不是**直接关应用。
· 要关整个聊天软件：**先回到消息列表** → 再 **Home 条** 或点 **「消息」** 大字。

---

__总结：想关软件，要么找 **Home 条**，要么在消息列表点 **「消息」**；在联系人页点 **最左 ‹**。__`,
    },
    {
      id: "t-chat-user-presets-full",
      title: "三、用户预设填写",
      tags: ["我", "预设"],
      desc: "小铅笔编辑；真名与唯一 ID；预设库查看；新建清空再填；网名签名在朋友圈；换朋友圈背景。",
      duration: "阅 4 分钟",
      content: `【1）进入编辑】
· 打开底栏 **我**，点 **小铅笔（编辑）**，在输入框里填写。

【2）填写说明】
· **上面**一般是**身份 / 真实姓名**（剧情里用的真名）。
· **下面**是 **ID / 微信号**：**唯一**，第一次保存后往往会**锁定**，以后**不能随便改**（换新身份请用界面上的**新建 / 重新绑定**，会**新增预设**而不是偷偷改旧 ID）。
· **身份旁边**可**换头像**。
· 按提示填完点**保存**。

【3）查看已创建用户】
· 保存后，在「我」页面点 **「预设」**，列表里就是已保存的用户预设。

【4）再新建一个用户】
· 再点 **小铅笔**，若有 **「新建」**：点后会**清空**当前编辑区，重新填、保存，预设库会**多一条**。

【5）网名与个性签名】
· 多在 **朋友圈**里改：先点底栏 **第三个（朋友圈）**，在自己**大头像下面**一带点 **「修改」** 或编辑入口。
· 个性签名输入后**按回车**，若弹出选项，可选择**是否把签名同步给角色**，让角色「知道」你改了签名。

【6）换朋友圈背景】
· 在**朋友圈**里点自己**头像上方大背景区域**，换**朋友圈封面**。

【音乐主题提醒】
· **尽量不要在音乐主题里大改用户预设**；建议先切**默认主题**改资料，再切回音乐（见第十七篇）。`,
    },
    {
      id: "t-chat-create-character",
      title: "四、新建角色",
      tags: ["联系人", "角色"],
      desc: "联系人顶部分组；搜索条右侧三个点新建分组；加号新建联系人；生成后文件夹进详情发消息。",
      duration: "阅 3 分钟",
      content: `【1）进入联系人】
· 底栏 **第 2 个图标** 打开联系人，顶部有 **分组标签**（全部、群聊、自建分组等）。

【2）新建分组】
· 看**搜索那一长条**：框内右侧常有**小星星**装饰；**整条搜索框再往右**有 **三个竖点**，点它打开 **「新建分组」**（输入名字、选颜色）。**不要和旁边的「前进箭头」搞混。**

【3）新建联系人】
· **分组标签行最右侧**有 **+**，点 **+ → 新建联系人**，填角色信息、头像、**绑定用户人设**，最后 **创建联系人**。

【4）生成角色信息】
· 创建后系统会按人设**生成网名、签名等**，请**稍等**；联系人里会出现**文件夹样式**卡片。

【5）进入聊天】
· 点文件夹进入**角色详情**；右上角 **编辑** 可改资料；往下滑点 **发消息** 进入聊天。`,
    },
    {
      id: "t-chat-window-input-basics",
      title: "五、聊天页面功能",
      tags: ["聊天"],
      desc: "爱心接收回复；回车或右侧发送；回形针打开拓展页。",
      duration: "阅 2 分钟",
      content: `# 五、聊天窗口底下这一排：怎么发、怎么让对方回

---

## 1. 粉红心形 = 让对方接话（俗称「接收」）
· 在输入框**左边**，有一颗**粉红色实心爱心**。
· **点一下** = 让程序去**请对方（角色）接着往下说**。
· **群聊**时若正在「排队等回复」，按钮可能会**变灰或转圈**，等一会再试。

---

## 2. 你自己打字发出去
· 中间长条**输入框**里写字。
· **键盘上的回车** 或 最右边 **纸飞机图标** = **发送**（两样做同一件事）。

---

## 3. 回形针 = 一排横向工具（转账、表情包…）
· 输入框**右侧**有个 **回形针**。
· **点一下** → 从底下**滑出一排横着滑动的图标**：重新生成、推进、转账、红包、相册、语音、视频通话、投票（群）、接龙（群）、表情包、点餐、档案、扭蛋/背包/密码（单聊）等。
· **最顶上有一条灰色横杠**：点它 = **收起**这一排。

---

## 4. 有的皮肤在输入框上还藏了一个「热点」
· 某些主题会在输入框**画成很多小标签的样子**，中间有一块**看不见的按钮**也能**打开同一排工具**。
· 若你点回形针没反应，试试**点输入框装饰条中间**（以你当前皮肤为准）。

---

__爱心 = 对方说；纸飞机 = 你说；回形针 = 工具箱。__`,
    },
    {
      id: "t-chat-settings-memory-voice",
      title: "六、单人聊天设置——总览（从哪进、上面三块快捷钮）",
      tags: ["聊天设置", "单聊"],
      desc: "点宝丽来头像进设置；专属伴侣、聊天背景/独家记忆/通话记录；下文拆成 01～08 多篇。",
      duration: "阅 3 分钟",
      content: `# 六、单人聊天设置——先认门，再往下看细篇

---

## 一、从哪进
1. 打开**和某个人的单聊**（**不是群**时本篇最对口；群聊另有总览篇）。
2. 看**最上面右边**：对方头像装在**像拍立得相片**的框里。
3. **点这块相片头像**（**不要**点左边「返回」箭头）→ 弹出**整页设置**。
4. 关掉设置：**右上角叉**、向下滑、或点**外面灰雾**（以你屏幕上实际有的为准）。

---

## 二、最顶上「专属伴侣」那一卡
· **大头像**：点一下会触发**换头像**用的选图（与联系人头像相关）。
· 小字 **专属伴侣**、下面**大字名字**、再下面**编号**和**对话回合数**：用来**认人**（信息展示）。

---

## 三、紧接着一排三个方块（快捷入口）
1. **聊天背景**：点 → 选图，给**这一场聊天**换背景图。若已设置，下面会出现 **[ 移除当前背景 ]**。
2. **独家记忆**：点 → **先关掉设置页**，再打开**记忆中枢**大面板（摘要、档案、占用说明等，**以面板里的字为准**）。
3. **通话记录**：点 → **先关掉设置页**，再打开**通话记录**列表。

---

## 四、再往下：灰色编号 01～08 与最底清空
· **01** **时空氛围**、**02** **语音声调**、**03** **头像库**、**04** **爱心回复**、**05** **交互连接**、**06** **配图生图**（界面写 Novel）、**07** **视觉美学**、**08** **查找记录**。
· 最底下还有 **清空所有聊天记录**（红色小字条，**会再问一次**，请读清再点）。

---

## 五、去哪篇查细节
· 使用指南里搜：**六（01）**…**六（08）**、或 **群聊设置**（编号和单聊**不完全一样**）。

---

__手机桌面「设置」应用管整台机子的账号；这里只管**这一场聊天**——两者别混。见 **《附：手机「设置」vs 聊天里的设置》**。__`,
    },
    {
      id: "t-chat-settings-01-atmosphere",
      title: "六（01）单人设置 · 时空氛围：现实时间、天气",
      tags: ["聊天设置", "时间", "天气"],
      desc: "01 区块；开现实时间才填城市；测试同步/测试感知；关现实时间才有「推进」工具。",
      duration: "阅 2 分钟",
      content: `# 六（01）时空氛围（单聊设置里第一大块）

在**单聊 → 点头像 → 设置**里，找到左侧灰色大字 **01**，右边标题 **时空氛围**。

---

## 1. 左卡：实时时间
1. 右上角小钮：**已开启 / 未开启** = 要不要让剧情里的时间**跟着真实世界走**。
2. **开启后**会出现两行填空：**你的城市**、**TA 的城市**（可以和天气共用）。
3. **测试同步**：点一下，看下面是否出现**两行小字结果**（用户侧 / 对方侧），用来检查填得对不对。

---

## 2. 右卡：天气感知
1. 同样先 **开启 / 关闭**。
2. 开启后也要 **城市**（与上卡共用那两行）。
3. **测试感知**：点一下，看是否返回天气描述（需网络与账号可用）。

---

## 3. 和「推进」工具的关系
· 当 **实时时间** 为**关闭**时，聊天底下**回形针工具栏**里才会出现 **推进**（时钟图标）用来**快进剧情时间**。
· **打开实时时间**时，**推进**会**藏起来**——这是故意设计，避免和现实时间打架。

---

*看不懂结果时，先检查手机「设置」里联网账号是否已配好。*`,
    },
    {
      id: "t-chat-settings-02-voice",
      title: "六（02）单人设置 · 语音声调：开引擎、试听、诊断",
      tags: ["聊天设置", "语音", "朗读"],
      desc: "02 语音引擎开关；两种提供商界面不同；试听与诊断链接。",
      duration: "阅 3 分钟",
      content: `# 六（02）语音声调

单聊设置里 **02** **语音声调** → 里面第一行大字 **语音引擎**。

---

## 1. 总开关
· 右上角 **已开启 / 未开启**：关掉时，下面**整片高级选项不会出现**。

---

## 2. 开启后：你可能是两种界面之一（由手机总设置决定）
· **一种**会要你填 **群组 ID、模型、音色编号** 等，并有 **保存**、**试听声音**、**运行语音诊断**、**查看语音日志**（字样以屏幕为准）。
· **另一种**是 **声音模型下拉**、**合成算法下拉**、**稳定性/相似度滑条**、**试听声音**、**刷新列表**、同样可能有**诊断**和**日志**。

---

## 3. 你要记住的用法
1. **试听声音**：用来确认**真的能出声**，再回聊天里让角色发语音条。
2. **诊断 / 日志**：只在**怎么都不响**时用来**看哪里报错**（不用每天点）。

---

*具体填哪几个空、去哪申请账号，在手机 **「设置」** 应用教程里写，这里不重复。*`,
    },
    {
      id: "t-chat-settings-03-avatar",
      title: "六（03）单人设置 · 头像库：单人图、情侣头、让对方自己换头像",
      tags: ["聊天设置", "头像", "情头"],
      desc: "允许 TA 主动更换；管理头像库展开；情侣头像对；设为联系人头像。",
      duration: "阅 4 分钟",
      content: `# 六（03）头像库（只对单聊）

---

## 1. 允许对方「自己换头像」
· 第一行 **允许 TA 主动更换头像** → **已开启** 后，对方在剧情里**可以**按设定**主动换掉聊天头像**。
· **关闭** = 不允许这种自动换头。

---

## 2. 管理头像库（要点开小三角/箭头才展开）
· **添加**：可贴 **图片网址 + 描述**（描述给程序用来**挑哪张图合适**），也可 **上传本地图**。
· **每张图**：可改描述、删掉、或 **设为当前联系人头像**（会往聊天里塞一条**系统提示**告诉你换了）。

---

## 3. 情侣头像对（和上面「单张库」并列的另一块）
· 填 **名称、双方图、标签** 等（以表单为准），加入列表。
· 可 **在聊天里发起换情头请求**（界面会有对应按钮，点后会**关掉设置**并发出一条特殊消息）。

---

*群聊的头像库在**群资料**里管，和这里**不是**同一套数据。*`,
    },
    {
      id: "t-chat-settings-04-heart",
      title: "六（04）单人设置 · 爱心回复：心声、草稿箱",
      tags: ["聊天设置", "心声", "草稿箱"],
      desc: "界面说明：点爱心/重新生成时写入；两枚开关。",
      duration: "阅 2 分钟",
      content: `# 六（04）爱心回复

这一整块上面有一行灰字说明（以屏幕为准），大意是：**点爱心接收回复**、或 **重新生成** 时，可以把内容写进下面两类里。

---

## 1. 心声写入
· **开启** = 允许生成 **心语**（内心独白），**不会**当作普通气泡直接贴出来（要看状态栏里「心语」页）。

---

## 2. 草稿箱写入
· **开启** = 把**没发出去的思绪**、删减片段等放进 **草稿箱**（状态栏里 **钥匙图标** 那一页）。

---

*若你从不知道「状态栏」在哪：请看 **第七篇**。*`,
    },
    {
      id: "t-chat-settings-05a-connection",
      title: "六（05）上 · 交互连接：翻译、气泡样式、主动回复",
      tags: ["聊天设置", "翻译", "主动回复"],
      desc: "实时翻译；INS 气泡；主动回复与间隔滑条。",
      duration: "阅 3 分钟",
      content: `# 六（05）交互连接（上半）

---

## 1. 实时翻译
· **已开启** 后，程序会按设定在对话里**处理两种语言**（细节以行为为准）。若格式乱了，可在聊天里**口头提醒对方**按双语格式说话。

---

## 2. INS 气泡
· 一句话理解：**连续好几条气泡连在一起时，圆角会像「一条长气泡」**，更像某些社交软件截图。
· **关闭** = 用主题默认圆角。

---

## 3. 主动回复
· **开启** = 允许对方在你**很久没说话**时**自己找话题**。
· 开启后多出 **触发间隔** 滑条：**5～120 分钟** 选一档（屏幕上会显示当前几分钟）。

---

*下半：行程、朋友圈、额外口令 —— 见 **《六（05）下》**。*`,
    },
    {
      id: "t-chat-settings-05b-connection",
      title: "六（05）下 · 交互连接：行程、朋友圈、额外口令",
      tags: ["聊天设置", "行踪", "朋友圈", "提示词"],
      desc: "主动更新行程与间隔按钮；主动发朋友圈；自定义提示词大段文字。",
      duration: "阅 3 分钟",
      content: `# 六（05）交互连接（下半）

---

## 1. 主动更新行程
· **开启** = 后台按间隔**自动生成或续写**「今日行踪」类内容（状态栏里看）。
· **更新间隔**：**1～5 小时** 五个按钮**单选**其一。
· 说明文字会提醒：**到点可能收到提醒，点进去能看**（以弹窗为准）。

---

## 2. 主动发朋友圈
· **开启** = 按人设与时间规则，**有机会自动发一条朋友圈**（不是每条都发，由联网结果决定）。

---

## 3. 自定义提示词
· **开启** 后出现**大文本框**：写**额外规矩**（例如口气、禁忌），会**接在默认规矩后面**。
· **关掉** = 不附加这段字。

---

*写太多条规矩可能互相打架；先少写、看效果再加。*`,
    },
    {
      id: "t-chat-settings-06-novel",
      title: "六（06）单人设置 · 配图生图（界面标题 Novel）",
      tags: ["聊天设置", "插图", "生图"],
      desc: "连接开关；风景/人脸提示与反面提示；上传角色参考照片。",
      duration: "阅 3 分钟",
      content: `# 六（06）配图生图

这一块在设置里叫 **Novel 生图**（名字以屏幕为准）：用来在**需要出图**时走**单独一套画图设定**，**每个角色各配各的**。

---

## 1. 总开关
· **连接 Novel** → **已开启** 后，下面表单才出现。

---

## 2. 两组「提示」字框
· **风景**类：写**不要出现人脸**的场景描述，以及**不想出现的东西**（反面提示）。
· **人脸**类：写**长相、风格**，以及**不要多张脸、不要重复脸**之类反面提示。

---

## 3. 角色照片
· **上传照片** = 给画图程序一张**参考脸**；旁边小 **×** 可删掉。

---

*钥匙、网址仍在手机总「设置」里配；这里只决定**这个角色**画图时**额外**带什么字和图。*`,
    },
    {
      id: "t-chat-settings-07-08-clear",
      title: "六（07）（08）与清空：视觉美学、查找记录、删光聊天",
      tags: ["聊天设置", "皮肤", "搜索", "清空"],
      desc: "07 视觉引擎与预设；08 打开检索；底部清空所有聊天记录。",
      duration: "阅 3 分钟",
      content: `# 六（07）（08）与最底清空

---

## 07 视觉美学
1. **视觉引擎** 旁有 **打开编辑器 / 关闭编辑器**。
2. **预设视图**：**下拉选择** 与 **展开列表** 两种看法；**展开列表**时才方便做**导出主题**一类操作（以按钮是否出现为准）。
3. **新预设名称** 输入框 + **保存** = 存一条**只影响这一场聊天**的皮肤方案。

---

## 08 查找记录
· 一行 **聊天记录检索**，右边 **打开检索** → 弹出**搜索聊天记录**的专用窗（关键字怎么高亮以窗内为准）。

---

## 最底下：清空所有聊天记录
· 一条很浅的灰字 **清空所有聊天记录** → 会**二次确认**。
· **清空** = **这一场**的字通常没了；**不会**自动删掉**联系人名片**（以确认框写的为准）。

---

*更浅的美化玩法见 **第十六、十七篇**。*`,
    },
    {
      id: "t-chat-settings-group-overview",
      title: "六（群）群聊设置：和单聊编号不一样的地方",
      tags: ["群聊", "聊天设置"],
      desc: "群资料公告管理；01 时空；06 交互连接；07 视觉；08 查找；清空/退出/解散。",
      duration: "阅 3 分钟",
      content: `# 六（群）群聊设置——编号别和单聊背混了

进**群聊窗口** → 同样点**右上角群头像/资料入口**打开设置（具体头像样式以主题为为准）。

---

## 一、群聊上半：群资料那一整坨
· **群名、群头像、公告、规则、管理成员、禁言**等都在**最上面大段**里（按钮名字以屏幕为准）。
· 这里也会给 **聊天背景、群记忆、通话记录** 一类**快捷钮**（和单聊**长得像**，但管的是**这个群**）。

---

## 二、01 时空氛围
· 与单聊**同一块组件**：现实时间、天气感知、城市、测试按钮——用法见 **《六（01）》**。

---

## 三、06 交互连接（注意：群聊写 06，不是 05）
· 只有 **实时翻译**、**INS 气泡**、**主动回复（含间隔）** 三样，**没有**单聊里那一串「行程、朋友圈、自定义提示词」。

---

## 四、07 视觉美学、08 查找记录
· 与单聊**同一类面板**，操作见 **《六（07）（08）》**。

---

## 五、最底部两个危险钮
1. **清空所有聊天记录**。
2. 若你是群主：**解散群聊**（会再确认）；若不是群主：**退出群聊**（会再确认）。

---

__解散 / 退出前想清楚：群可能没了或你再也进不去。__`,
    },
    {
      id: "t-chat-settings-vs-phone-settings",
      title: "附：手机「设置」应用 vs 聊天里的设置",
      tags: ["设置", "聊天", "入门"],
      desc: "整机账号在手机设置；单聊设置只管本场；助手提示先配哪。",
      duration: "阅 1 分钟",
      content: `# 附：两个「设置」别搞混

---

## 1. 手机桌面上的「设置」应用
· 管**整台手机**：联网写字账号、通知、备份、主题重置等。
· **详细每一项**在 **使用指南 → 分类选「设置」** 里拆好了，请去那边搜。

---

## 2. 聊天软件里、点头像进来的设置
· 只管**这一场单聊或这一个群**：声音、皮肤、要不要自动发朋友圈、记忆等。

---

## 3. 常见迷路
· **角色一直不说话** → 八成是**手机设置**里账号没配好，不是聊天皮肤选错。

---

*本篇不写任何钥匙、网址、内部代号。*`,
    },
    {
      id: "t-chat-help-assistant-contact",
      title: "附：「使用帮助」联系人——教程助手专用设置",
      tags: ["教程", "使用帮助", "助手"],
      desc: "点头像打开使用帮助页；教程检索范围芯片；人设只改口吻。",
      duration: "阅 2 分钟",
      content: `# 附：内置「使用帮助」联系人

手机里可能有一个**专门用来问「怎么用」**的联系人（名称以你列表为准）。

---

## 一、点头像时多出来的东西
· 普通角色点头像 → 顶条写 **专属伴侣**。
· **使用帮助**联系人点头像 → 顶条写 **使用帮助**，并多一块 **教程检索范围**（左侧灰色 **00** 那种排版）。

---

## 二、教程检索范围是干什么的
· 一排**可点的小标签 / 芯片**：勾选**哪些 App** 的内置说明书**允许被搜到**。
· **全选**时界面可能会**自动折起来**省地方（以你版本为准）。

---

## 三、下面还有哪些
· **聊天背景、独家记忆、通话记录** 三钮、以及 **01 时空、02 语音…** 等与普通人**大体同类**，仍以**屏幕上实际有的**为准。

---

## 四、在联系人详情里改人设
· 那一栏会改名成 **帮助回复口吻** 一类：只改**说话语气**，**不会**改掉「要查内置教程」这条规矩。

---

*若助手回复让你先去配联网账号 → 指**手机「设置」**，不是这里。*`,
    },
    {
      id: "t-chat-heart-draft-and-status",
      title: "七、状态栏、心声、草稿箱",
      tags: ["状态栏", "草稿箱"],
      desc: "设置里打开心声/草稿写入；点头像旁名字开状态栏；心语·行踪·群聊·草稿。",
      duration: "阅 5 分钟",
      content: `# 七、状态栏、心语、群聊偷看、草稿箱

---

## 一、先在设置里打开开关（单聊）
1. **单聊** → **点对方宝丽来头像** → 往下找到 **04 爱心回复**。
2. 打开 **心声写入**（心语用的）和/或 **草稿箱写入**（草稿用的）。
3. 页面上方灰字会写：这些内容在 **点爱心接收**、**重新生成** 等时候才可能写进去。

---

## 二、怎么打开状态栏大面板
· 回到聊天页，**点顶栏中间那一列名字**（有**下划线手感**的那行），**不要**点左边的**粉红心**。
· 会升起一块**大玻璃板**盖住半个屏幕。

---

## 三、大玻璃板底下三个小钮（从左到右）
1. **左**：**心语**页——默认先看这里；可含 **今日行踪**（要已生成才能点）、**计划** 等（以你屏上有的为准）。
2. **中**：**群聊**页——看这个角色「假装在别的群里聊天」的卡片列表；顶栏常有 **放大镜** = **刷新/生成**一批群；点进某个群后再用界面上的按钮**往下刷记录**。
3. **右**：**草稿箱**——收的是 **没发出来的思绪**、被**删掉半截**的回复等（只有开了开关且触发了才会有）。

---

## 四、草稿箱里一条点开长什么样
· 上面可能是**已经发出去**的那句（带**小铅笔**表示可对照）。
· 中间是**动作描写**。
· **打马赛克的一块**里可能是 **未发送思绪**，再点能展开。
· 最下可能有**为什么删了**的一行说明。

---

## 五、关掉状态栏
· 点 **玻璃板外灰雾**、或顶栏 **X**（你在**群聊**页时右上角常是铃铛/关闭类图标，以实际为准）。

---

*群聊页若提示先生成卡片：先点 **放大镜** 一次。*`,
    },
    {
      id: "t-chat-ui-details-extra",
      title: "八、聊天细节",
      tags: ["聊天"],
      desc: "点输入框自动回底；双语开实时翻译；左滑引用。",
      duration: "阅 2 分钟",
      content: `# 八、聊天里的小习惯：滚到底、双语、引用、多选

---

## 1. 点输入框会自动滚到最新
· 手指点进底下输入框，消息列表通常会**自己滑到最下面**，方便你接着聊。
