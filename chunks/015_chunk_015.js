              Pt.push({
                role: "system",
                content:
                  yt +
                  "【结构化输出协议 v1·语音通话】" +
                  (ie === "phone_call_outgoing_combined"
                    ? "openingEnvelope 的值必须且只能是以下结构（禁止在该对象外再包一层解释）："
                    : "本轮必须仅输出一个 JSON 对象（禁止 JSON 外任何字符）：") +
                  '{"version":1,"scene":"phone_call","messages":[{"type":"voice","text":"..."}, ...]}。messages 必须4～10 条口语短句；type 优先 voice；禁止 meme/text_image/transfer/food_delivery/pay_for_me/html与 longSentenceVariants。禁止 markdown 代码块包裹。' +
                  _e,
              });
            } else if (jt) {
              const yt =
                Array.isArray(De) && De.length > 0
                  ? ""
                  : " 本单聊未绑定表情包分组：禁止 type=meme。";
              Pt.push({
                role: "system",
                content:
                  '【结构化输出协议 v1】本轮必须仅输出一个 JSON 对象（禁止 JSON 外任何字符）：{"version":1,"scene":"chat","messages":[{"type":"text","text":"...","translation":"可选","replyToSnippet":"可选","longSentenceVariants":["可选1","可选2","可选3"]}]}。type 仅允许 text/voice/meme/text_image/transfer/food_delivery/pay_for_me/system_hint。若无法完整输出，请至少返回 1 条 text 消息的合法 JSON。禁止 markdown 代码块包裹。' +
                  yt +
                  _e,
              });
            }
          }
          if (R && !Ue) {
            const _e =
                le != null && le.id && X && typeof X == "object"
                  ? (Ae = X == null ? void 0 : X.blockedRoles) == null
                    ? void 0
                    : Ae[le.id]
                  : null,
              rt =
                _e != null &&
                (typeof _e == "number" ||
                  (typeof _e == "object" &&
                    (_e == null ? void 0 : _e.unblockedAt) == null))
                  ? "此外：当用户已经很久没有回复（你也知道对方收不到）时，不要执着于“用户上一条说了什么”，更不要反复引用/复读那两句。你可以像一个有自己生活的人那样，发碎碎念、备忘录、日常记录、情绪消化、路上见闻、随手拍的描述等，内容要贴合你的人设与当前情绪走向；可以偶尔触及对方，但不要每条都围着那两句打转。"
                  : '此外：如果用户上一条是“文本消息”，你在主动发言时更倾向于在首条气泡承接时使用引用，把用户上一条文本的原文放进一个 [REPLY:"..."] 引用气泡里（若无法完全一致，至少引用前20字，并保证 [REPLY:...] 出现在回复中）。',
              ze =
                Array.isArray(De) && De.length > 0
                  ? "表情包 [MEME:id]；"
                  : "**禁止**使用表情包 [MEME:…]（本单聊未绑定表情包分组）；";
            (Pt.push({
              role: "system",
              content: `[系统状态更新] 距上次对话已过一段时间，现在是主动发言时间。根据人设与当下状态发起话题或分享。根据语境、人设与和用户的关系，更倾向于主动用这些表达（适当提高出现频率）：语音 [VOICE]内容[/VOICE]；发图 [图片内容：描述]；${ze}转账 [TRANSFER:金额:备注]；点外卖 [ORDER_FOOD:物品:价格]；代付 [PAY_FOR_ME:物品:价格]；引用 [REPLY:"原文"] 回复；必要时撤回 [RECALL:原因] 后重发；合适时改签名 [CHANGE_SIGNATURE:新签名]。**若台词里写“转给你/打钱/零花钱/请收下”等转账语义，同轮必须带 [TRANSFER:数字金额:备注]，否则界面不会出现转账卡片**。**若台词里写给对方点了吃的/请了客，同轮必须带 [ORDER_FOOD:简称:数字价格]，否则界面无外卖卡片**；代付同理须带 [PAY_FOR_ME:…]。${rt} 并且：若使用语音 [VOICE]，请只放入一句话/一句简短情绪（最多1条语音气泡），其余内容用普通文本气泡输出；不要把整段回复全部包进同一个 [VOICE] 内。语境、关系到了就自然用，不必强制。直接开始说话。`,
            }),
              Pt.push({
                role: "system",
                content:
                  "[外卖与代付严格区分] ORDER_FOOD=你给用户点吃的（用户吃）；PAY_FOR_ME=你自己想吃/想买，让用户帮你付（你自己吃）。两者严禁混用。",
              }));
          }
          if (se && !Ue) {
            const _e = String(Te || "")
              .replace(/["“”]/g, "")
              .slice(0, 30);
            Pt.push({
              role: "system",
              content: `[系统硬约束] 这轮你必须包含引用气泡：\`[REPLY:"${_e || "用户上一条文本"}"]\`。引用之后必须继续给出**实质性回应**（态度、感受或下一步），**不可**只发引用就结束。条数随人设与情绪：**可**仅在引用后再发 1 条（冷淡、生气、忙时常见），也可多条（激动、解释、撒娇时）；**禁止**为凑固定条数而灌水。若只再发 1 条，该条须有足够信息量（勿只两字敷衍）；若多条，各条须有区分、勿重复同义。`,
            });
          }
          const fs = ie === "group_chat" || ie === "group",
            gt =
              !fs &&
              Array.isArray(ne) &&
              ne.some(
                (_e) =>
                  _e &&
                  _e.type === "transfer" &&
                  _e.sender === "them" &&
                  (_e.status === "pending" || _e.status == null),
              ),
            ae =
              !fs && Array.isArray(ne)
                ? [...ne]
                    .reverse()
                    .find(
                      (_e) =>
                        _e && _e.type === "transfer" && _e.sender === "them",
                    )
                : null,
            nt =
              !fs && Array.isArray(ne)
                ? [...ne]
                    .reverse()
                    .find(
                      (_e) =>
                        _e && _e.type === "transfer" && _e.sender === "me",
                    )
                : null,
            It = (_e) =>
              _e === "accepted"
                ? "已收款"
                : _e === "rejected"
                  ? "已退回/已拒绝"
                  : "待处理（既没收也没退）";
          if (ne.length > 0) {
            const _e = ne[ne.length - 1];
            if (
              (!Ue &&
                _e.sender !== "me" &&
                _e.type === "gashapon_card" &&
                Pt.push({
                  role: "system",
                  content:
                    "[系统指令] 你刚发了一条扭蛋卡片。请针对这张扭蛋卡片里的物品名、情景、原因、心声，用3～10条短消息回复对方。多条消息用英文双竖线 || 分隔。每条都要紧扣扭蛋内容，自然延续对话。",
                }),
              !Ue &&
                _e.sender !== "me" &&
                _e.type === "forward_chat_card" &&
                Pt.push({
                  role: "system",
                  content:
                    "[格式强制] 你上一条发送了聊天记录卡片。本条回复用户时，仍须用英文双竖线 || 分隔多条气泡，不要整段一发，不要掉格式。",
                }),
              fs && _e.sender === "me" && _e.type === "red_packet")
            ) {
              const yt = (_e.count || 1) - (_e.claims || []).length;
              yt > 0 &&
                Pt.push({
                  role: "system",
                  content: `[系统指令] 用户刚发了一个红包（¥${(_e.totalAmount || 0).toFixed(2)}，共${_e.count || 1}个，还剩${yt}个可领）。你可以根据人设决定是否抢红包。
- 若抢红包，你**必须**在回复中包含指令 \`[GRAB_RED_PACKET]\`，可附带一句话如「[GRAB_RED_PACKET] 谢谢老板！」。
- 若不抢，正常回复即可，不要包含该指令。`,
                });
            }
            if (fs && _e.sender === "them" && _e.type === "red_packet") {
              const yt = (_e.count || 1) - (_e.claims || []).length;
              yt > 0 &&
                Pt.push({
                  role: "system",
                  content: `[系统指令] 你刚发了一个红包（¥${(_e.totalAmount || 0).toFixed(2)}，共${_e.count || 1}个，还剩${yt}个可领）。你可以根据人设决定是否抢自己发的红包。
- 若抢，回复须包含 \`[GRAB_RED_PACKET]\`。
- 若不抢，正常回复即可。`,
                });
            }
            if (_e.sender === "me")
              if (_e.type === "pay_for_me")
                Pt.push({
                  role: "system",
                  content:
                    '[系统指令] 用户发起了一个代付请求。请根据你的人设决定是否支付。\n- 如果同意支付，你**必须**在回复中包含指令 `[ACCEPT_PAY_FOR_ME]`。\n- 如果拒绝支付，你**必须**在回复中包含指令 `[REJECT_PAY_FOR_ME]`。\n- 你可以同时说一些话，例如 "[ACCEPT_PAY_FOR_ME] 拿去花吧" 或 "[REJECT_PAY_FOR_ME] 我也没钱了"。',
                });
              else if (_e.type === "food_delivery")
                Pt.push({
                  role: "system",
                  content:
                    '[系统指令] 用户给你点了外卖。请根据你的人设决定是否接受。\n- 如果接受，你**必须**在回复中包含指令 `[ACCEPT_FOOD_DELIVERY]`。\n- 如果拒绝，你**必须**在回复中包含指令 `[REJECT_FOOD_DELIVERY]`。\n- 你可以同时说一些话，例如 "[ACCEPT_FOOD_DELIVERY] 哇，谢谢！" 或 "[REJECT_FOOD_DELIVERY] 我刚吃过，退了吧"。',
                });
              else if (_e.type === "transfer")
                Pt.push({
                  role: "system",
                  content:
                    '[系统指令] 用户给你发起了转账。请根据你的人设和当前关系决定是否收款。\n- 只有回复中出现 `[ACCEPT_TRANSFER]` 才会触发「已收款」及对应系统提示；口头说收下/谢谢但未带该指令的，界面仍视为待处理。\n- 只有回复中出现 `[REJECT_TRANSFER]` 才会触发退回及对应系统提示；口头说不要/退给你但未带该指令的，界面仍视为待处理。\n- 尚未决定可以只聊天，**禁止**默认用户已收款或已退回，也**禁止**编造对方已操作。\n- 示例："[ACCEPT_TRANSFER] 收下啦，谢谢你" 或 "[REJECT_TRANSFER] 我先不收，退给你啦"。',
                });
              else if (_e.type === "system_fingerprint_request")
                Pt.push({
                  role: "system",
                  content:
                    '[系统指令] 用户申请开通指纹解锁功能。请根据你与用户的亲密度和当前关系决定是否同意。不要随随便便同意，要有合理的理由。\n- 如果同意，你**必须**在回复中包含指令 `[APPROVE_FINGERPRINT]`。\n- 如果拒绝，你**必须**在回复中包含指令 `[REJECT_FINGERPRINT]`。\n- 你可以同时说一些话，例如 "[APPROVE_FINGERPRINT] 既然我们关系这么好，就给你开通吧" 或 "[REJECT_FINGERPRINT] 我们还没熟到那个地步呢"。',
                });
              else if (_e.type === "couple_space_invite")
                Pt.push({
                  role: "system",
                  content:
                    "[系统] 对方刚发来了「想和你有一个只属于我们俩的地方」的邀请。请根据你的人设、与对方的关系和当前剧情决定是否接受，不要随意答应或拒绝。\n- 接受则回复中**必须**包含 `[COUPLE_SPACE_ACCEPT]`，可附带一句简短回应。\n- 拒绝则**必须**包含 `[COUPLE_SPACE_REJECT]`，并说明理由或态度。",
                });
              else if (_e.type === "couple_ledger_checkin_invite")
                Pt.push({
                  role: "system",
                  content:
                    "[系统] 对方刚发来「一起记账打卡」的邀请（连续多天、约定时间提醒）。请根据你的人设与关系决定是否答应，不要机械同意或拒绝。\n- 愿意一起完成则在回复中**必须**包含 `[LEDGER_CHECKIN_ACCEPT]`，可附带自然口语回应；\n- 不愿意则**必须**包含 `[LEDGER_CHECKIN_REJECT]`，并表达态度或理由。",
                });
              else {
                const yt = (_e.text || "").trim();
                (!Ue &&
                  /朋友圈/.test(yt) &&
                  /(发|发个|发一条|发条|发一下|发个动态|发动态|发圈|发条动态)/.test(
                    yt,
                  ) &&
                  Pt.push({
                    role: "system",
                    content:
                      "[系统指令·发朋友圈] 用户在要求你发布朋友圈。你这轮回复里必须包含且只能包含一次朋友圈发布指令：\n- 必须出现标签 `[POST_MOMENT:文案]`（使用半角冒号或全角冒号都可，但推荐半角冒号）。\n- 紧跟其后必须追加 NPC 评论控制块：`[MOMENT_NPC_COMMENTS_JSON]\\n{...}\\n[MOMENT_NPC_COMMENTS_END]`，comments 2～5 条，严格按提示词规则。\n- 你可以在标签前后说口语，但如果只说“发了”而不带标签，界面不会真的发出朋友圈（这是硬约束）。\n如果你不想发，请直接拒绝，不要假装发了。",
                  }),
                  /聊天记录|转发.*聊天|发我.*(和谁|跟谁|与谁).*聊|分享.*聊天|你和谁的聊|能看到我和|我和.*的(聊天|对话)/.test(
                    yt,
                  )
                    ? Pt.push({
                        role: "system",
                        content:
                          "[系统指令] 用户正在向你要「聊天记录」或问「能看到我和某某的聊天吗」。你**必须**在回复中至少有一条气泡包含 `[FORWARD_CHAT_CARD]` 或 `[FORWARD_CHAT_CARD:一句话备注]`。若用户问的是「我和别人/某某的聊天」，系统会展示该用户与对应人的**真实聊天记录**，所以你发完卡片后**严禁**说「我看不到」「我不能看」等矛盾的话，应说「能啊，发给你了」「这就是你和 TA 的聊天记录」等与「已转发」一致的话。可以同时说一句口语再发该指令。",
                      })
                    : yt &&
                      (_e.type == null ||
                        ["text", "voice", "image"].includes(_e.type)) &&
                      /饿|饿了|好饿|没吃|还没吃|想吃|吃点什么|点外卖|订外卖|外卖到了吗|吃饭了吗|吃饭没|饭点|午饭|晚饭|早餐|宵夜|夜宵|肚子|胃疼|喝奶茶|喝杯|请客|我请|投喂|犒劳|加鸡腿|料理|小吃|甜品|好馋|嘴馋/.test(
                        yt,
                      ) &&
                      !Ue &&
                      Pt.push({
                        role: "system",
                        content:
                          "[系统指令·外卖主动性] 用户本条明显与「饿、想吃东西、饭点、吃喝、请客、投喂」等相关。请结合人设与关系**主动**关心或请客，不要只问「要不要给你点」就结束。\n- 若你要**真的给用户点外卖**（界面会出现配送卡片，用户再点支付）：本轮回复**必须**含 `[ORDER_FOOD:物品简称:阿拉伯数字价格]`（半角冒号、英文方括号），如 `[ORDER_FOOD:馄饨:22]`。**只说「给你点了」而不写标签则不会出现卡片**；口语与标签可同段或 `||` 分条。\n- 若人设冷淡、在吵架、或不想花钱，可不带标签，用台词拒绝即可。\n（若同一段剧情里你想**让用户替你付钱**，且关系合适，可主动用 `[PAY_FOR_ME:物品:价格]`；与「用户说自己饿」无必然关系，按人设决定。）",
                      }));
              }
            gt &&
              Pt.push({
                role: "system",
                content: `【系统指令·你转给用户的转账·待处理】聊天记录里仍有你向用户发起、界面为「待处理」的转账（= 尚未出现以「[系统提示]」开头的收款或退回系统消息）。
在用户真实点击收款/退回之前，你**不得**在台词里描写或暗示用户已经完成操作，包括但不限于：用户已收款、已收下、钱到账了、用户退回了、退回来了、替用户说「我收了/我退了」、写「看到你收了」「我就知道你肯定收」等。
可以聊别的、或轻描淡写提一句「转账还在你那边」之类，但**禁止编造操作结果**；只有上文出现对应「[系统提示]」后，才可在剧情里当作已收/已退来聊。`,
              });
          }
          if (pe != null && pe.otherName && !Ue) {
            const _e = pe.cardContent
              ? `
【卡片内聊天记录内容】
${pe.cardContent}
【以上为卡片内容，你必须针对上述对话说几句反应】`
              : "";
            Pt.push({
              role: "system",
              content: `[系统指令] 这是**查岗**场景：你这条消息**开头**会先发一张「绑定用户和${pe.otherName}的聊天记录」卡片（系统自动插入）。这张卡片里是**绑定用户跟别人**的对话，不是你和用户的对话。你**必须**先根据卡片里的聊天记录**内容**说 2-5 条反应气泡（吃醋/调侃/关心/好奇/点评某句），然后再继续聊别的。严禁只发卡片不说话、严禁只说「发给你了」而不点评内容。${_e}用英文双竖线 || 分隔多条气泡。`,
            });
          }
          (Xw(ie).allowSplitBubble &&
            !Ue &&
            Pt.push({
              role: "system",
              content:
                ie === "chat"
                  ? "【气泡条数】本轮用几条气泡由人设、情绪与语境决定：高冷、敷衍、生气、忙时可一条说完；兴奋、解释、话痨时可多条。需要多条独立气泡时用英文 || 分隔；一句就够时不要为凑条数强行拆成多条。"
                  : "[格式强制] 本条对话你的回复必须用英文双竖线 || 分隔多条气泡，不可整段无 ||。",
            }),
            gt &&
              ct.has(ie) &&
              Pt.push({
                role: "system",
                content:
                  "【硬约束·本轮输出前】若仍存在你转给用户且为「待处理」的转账：本轮台词**严禁**编造用户已收款或已退回、钱已到账等；**严禁**替用户完成叙事上的收款/退回。无对应「[系统提示]」就当作用户还没点。",
              }),
            !fs &&
              ct.has(ie) &&
              (ae &&
                (Pt.push({
                  role: "system",
                  content: `【转账事实快照·你转给用户】当前最新一笔你→用户转账的界面状态是：${It(ae.status)}。本轮必须按此事实理解剧情；除非聊天记录里出现了新的对应「[系统提示]」改变状态，否则不能仅凭任何人口头一句“收了/不收/退给你”改写该事实。`,
                }),
                ae.status === "accepted" &&
                  Pt.push({
                    role: "system",
                    content:
                      "【转账冲突裁决·最高优先】当“你→用户”的最新转账已是「已收款」时：若用户口头说“退给你/不收/算了”等，仅代表其态度或后续意图，不代表该笔已发生“退回/拒绝”。本轮严禁把该笔叙述为已退回、已拒收、未收款。",
                  })),
              nt &&
                (Pt.push({
                  role: "system",
                  content: `【转账事实快照·用户转给你】当前最新一笔用户→你转账的界面状态是：${It(nt.status)}。本轮必须按此事实理解剧情；除非聊天记录里出现了新的对应「[系统提示]」改变状态，否则不能仅凭口头文本改写该事实。`,
                }),
                nt.status === "accepted" &&
                  Pt.push({
                    role: "system",
                    content:
                      "【转账冲突裁决·最高优先】当“用户→你”的最新转账已是「已收款」时：若任一方口头说“退回/不收”，都不能把这笔改写成“已退回/已拒绝”；无新系统提示前，事实仍是已收款。",
                  }))));
          const bs = !R && ie === "chat" && !ce,
            ss = JR(ie, R) || bs;
          let _s = !1;
          if (
            ss &&
            (Pt.length
              ? (te = Pt[Pt.length - 1]) == null
                ? void 0
                : te.role
              : "") !== "user"
          ) {
            const yt =
              ie === "moments_reply" ||
              ie === "moment_post_with_npc_comments" ||
              ie === "moment_npc_post_with_comments" ||
              ie === "moment_npc_comments"
                ? "【主动触发】请按上文要求输出完整可解析结果；禁止空字符串、禁止仅标点。"
                : "【触发】请按当前语境继续发言。必须输出至少1条可见文本气泡；禁止空字符串、禁止仅标点、禁止仅返回[TRANS:...]。";
            (Pt.push({ role: "user", content: yt }), (_s = !0));
          }
          const qs = S(Pt),
            Bs = JSON.stringify(Pt).length,
            Js = t.model || "gpt-3.5-turbo",
            Xs = !!(t != null && t.networkStableModeEnabled),
            gn = !!(t != null && t.chatPreferStreamEnabled),
            sn = String((t == null ? void 0 : t.backupEndpoint) || "").trim(),
            ln = String((t == null ? void 0 : t.backupKey) || "").trim(),
            rn = String((t == null ? void 0 : t.backupModel) || "").trim(),
            wt = Number(t == null ? void 0 : t.backupTemperature),
            xs = Number.isFinite(wt) ? wt : null,
            ot = !!(t != null && t.backupEndpointAutoSwitchEnabled),
            st = Qo(t.endpoint),
            $t = sn ? Qo(sn) : "",
            Ft = ot && !!$t,
            es = t.key,
            At = ln || es,
            Jt = J
              ? {
                  model: Js,
                  temperature: t.temperature || 0.7,
                  useStream: !1,
                  endpointHost: (() => {
                    try {
                      return new URL(st).host || null;
                    } catch {
                      return null;
                    }
                  })(),
                  endpointPath: (() => {
                    try {
                      return new URL(st).pathname || null;
                    } catch {
                      return null;
                    }
                  })(),
                  backupEndpointHost: (() => {
                    try {
                      return ($t && new URL($t).host) || null;
                    } catch {
                      return null;
                    }
                  })(),
                  networkStableModeEnabled: Xs,
                  chatPreferStreamEnabled: gn,
                  backupEndpointAutoSwitchEnabled: Ft,
                  backupKeyConfigured: !!ln,
                  backupModelConfigured: !!rn,
                  structuredReplyEnabled: me,
                  structuredProtocolEnabled: jt,
                  isAutoReply: !!R,
                  chatNonStreamCompatEnabled: bs,
                  proactiveCompatEnabled: ss,
                  proactiveTriggerInjected: _s,
                  scene: ie,
                  contextLimitUsed: Number.isFinite(Number(ke))
                    ? Number(ke)
                    : null,
                  contextLimitMode: String(W || "").trim() || null,
                  replyContextDiagnostics:
                    ue && typeof ue == "object" ? ue : null,
                  timeoutMs: G,
                  retryDelayMs: 1500,
                  maxRetries: 2,
                  payloadBytesEstimate: Number.isFinite(Number(Bs))
                    ? Number(Bs)
                    : null,
                }
              : null,
            Vt = [];
          let qt = "request_prepare",
            Lt = null,
            Qt = "";
          const js = () =>
              Vt.map((_e) => {
                const yt = [];
                (_e.attempt != null && yt.push(`attempt=${_e.attempt}`),
                  _e.status != null && yt.push(`status=${_e.status}`),
                  _e.rawLen != null && yt.push(`rawLen=${_e.rawLen}`),
                  _e.contentLen != null &&
                    yt.push(`contentLen=${_e.contentLen}`),
                  _e.budgetMs != null && yt.push(`budgetMs=${_e.budgetMs}`),
                  _e.canRetry != null &&
                    yt.push(`canRetry=${_e.canRetry ? 1 : 0}`),
                  _e.msgCount != null && yt.push(`msgCount=${_e.msgCount}`),
                  _e.payloadBytes != null &&
                    yt.push(`payloadBytes=${_e.payloadBytes}`),
                  _e.timeoutMs != null && yt.push(`timeoutMs=${_e.timeoutMs}`),
                  _e.attemptCostMs != null &&
                    yt.push(`attemptCostMs=${_e.attemptCostMs}`),
                  _e.errorKind != null && yt.push(`errorKind=${_e.errorKind}`),
                  _e.netReason != null && yt.push(`netReason=${_e.netReason}`),
                  _e.endpointRole != null &&
                    yt.push(`endpointRole=${_e.endpointRole}`),
                  _e.reason != null && yt.push(`reason=${_e.reason}`),
                  _e.chunkCount != null &&
                    yt.push(`chunkCount=${_e.chunkCount}`),
                  _e.firstChunkMs != null &&
                    yt.push(`firstChunkMs=${_e.firstChunkMs}`));
                const rt = yt.length ? `(${yt.join(",")})` : "";
                return `${_e.t}ms:${_e.stage}${rt}`;
              }).join(" -> "),
            cs = (_e, yt = {}) => {
              if (((qt = _e), !J)) return;
              const rt = { t: Date.now() - he, stage: _e, ...yt };
              (Vt.push(rt),
                Vt.length > 28 && Vt.shift(),
                ve({
                  flowTrace: js(),
                  flowEvents: Vt.slice(),
                  requestMeta: Jt,
                }));
            };
          cs("request_prepare_done", {
            msgCount: Array.isArray(Pt) ? Pt.length : 0,
            useStream: 0,
          });
          const Ne = (_e) => {
            if (!J) {
              ve({
                status: "success",
                duration: Date.now() - he,
                response: _e,
                error: void 0,
                errorKind: null,
                httpStatus: null,
                errorRaw: void 0,
                errorStatus: null,
              });
              return;
            }
            const yt = js(),
              rt = Vt.slice(),
              ze = rj({
                requestModel: Js,
                responseMeta: Lt,
                errorKind: null,
                failureStage: "",
                failureSummary: "",
              });
            ve({
              status: "success",
              duration: Date.now() - he,
              response: _e,
              flowTrace: yt,
              flowEvents: rt,
              responseMeta: Lt,
              rawResponsePreview: Qt || void 0,
              diagnosis: ze || void 0,
              error: void 0,
              errorKind: null,
              httpStatus: null,
              errorRaw: void 0,
              errorStatus: null,
            });
          };
          J &&
            ve({
              messages: qs,
              messageCount: Array.isArray(Pt) ? Pt.length : 0,
              rawSizeEstimate: Bs,
              requestMeta: Jt,
            });
          const Je = 1500,
            St = 2,
            Be = new Set(["memory_archive", "system_generation", "summary"]),
            Ke = String(t.model || ""),
            Nt = /假流式/i.test(Ke),
            bt = !!(!Be.has(ie) && !Nt && (ce || gn));
          (Jt && (Jt.useStream = bt),
            cs("request_mode_selected", { useStream: bt ? 1 : 0 }));
          let ns = !1;
          if (bt) {
            const _e = new AbortController(),
              yt = setTimeout(() => _e.abort(), G);
            try {
              cs("stream_fetch_start", { endpointRole: "primary" });
              const rt = await fetch(st, {
                method: "POST",
                signal: _e.signal,
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${es}`,
                },
                body: JSON.stringify({
                  model: t.model || "gpt-3.5-turbo",
                  messages: Pt,
                  temperature: t.temperature || 0.7,
                }),
              });
              if (
                (cs("stream_response_received", { status: rt.status }),
                J &&
                  (Lt = {
                    mode: "stream",
                    status: rt.status,
                    contentType:
                      ((Fe = (Se = rt.headers) == null ? void 0 : Se.get) ==
                      null
                        ? void 0
                        : Fe.call(Se, "content-type")) || null,
                    headers: aj(rt.headers),
                  }),
                !rt.ok)
              ) {
                const ys = await rt.text();
                let Vs = `HTTP ${rt.status} ${rt.statusText}`;
                try {
                  const qe = JSON.parse(ys);
                  if (qe != null && qe.error) {
                    const dt = qe.error,
                      xt =
                        dt.message ||
                        dt.msg ||
                        dt.error ||
                        (typeof dt == "string" ? dt : JSON.stringify(dt));
                    Vs += `
接口返回: ${dt.code ? `[${dt.code}] ` : ""}${xt}`;
                  } else
                    qe != null &&
                      qe.message &&
                      (Vs += `
接口返回: ${qe.message}`);
                } catch {
                  ys &&
                    (Vs += `
响应体: ${ys.slice(0, 500)}`);
                }
                const pt = {
                  status: "error",
                  duration: Date.now() - he,
                  error: Vs,
                  errorKind: rt.status >= 500 ? "HTTP_5XX" : "HTTP_4XX",
                  httpStatus: rt.status,
                  errorRaw: Vs,
                  errorStatus: rt.status,
                };
                throw (
                  ve(pt),
                  Object.assign(new Error(Vs), {
                    _httpStatus: rt.status,
                    _errorKind: rt.status >= 500 ? "HTTP_5XX" : "HTTP_4XX",
                    _failureStage: qt,
                    _flowTrace: js(),
                  })
                );
              }
              let ze = "",
                lt = "",
                it = "",
                Ht = 0,
                is = null;
              const os = rt.body.getReader(),
                as = new TextDecoder();
              cs("stream_reading_chunks");
              const vs = 12e4;
              let ts = !1;
              for (;;) {
                let ys = os.read(),
                  Vs;
                const pt = new Promise((ms, Cs) => {
                  Vs = setTimeout(
                    () =>
                      Cs(
                        Object.assign(new Error("STREAM_IDLE"), {
                          _isStreamIdle: !0,
                        }),
                      ),
                    vs,
                  );
                });
                let qe, dt;
                try {
                  const ms = await Promise.race([ys, pt]);
                  (clearTimeout(Vs), (qe = ms.value), (dt = ms.done));
                } catch (ms) {
                  if ((clearTimeout(Vs), ms != null && ms._isStreamIdle)) {
                    ((ts = !0),
                      cs("stream_idle_timeout", {
                        idleMs: vs,
                        chunksSoFar: Ht,
                      }));
                    try {
                      os.cancel();
                    } catch {}
                    break;
                  }
                  throw ms;
                }
                if (dt) break;
                const xt = as.decode(qe, { stream: !0 });
                ((lt += xt), (it += xt));
                const zt = it.split(/\n/);
                it = zt.pop() ?? "";
                for (const ms of zt)
                  if (ms.startsWith("data: ")) {
                    const Cs = ms.slice(6).trim();
                    if (Cs === "[DONE]") continue;
                    try {
                      const us = JSON.parse(Cs),
                        Rs =
                          (Xe =
                            (tt =
                              ($e = us == null ? void 0 : us.choices) == null
                                ? void 0
                                : $e[0]) == null
                              ? void 0
                              : tt.delta) == null
                            ? void 0
                            : Xe.content,
                        Rt =
                          (ut =
                            (Pe =
                              (ht = us == null ? void 0 : us.choices) == null
                                ? void 0
                                : ht[0]) == null
                              ? void 0
                              : Pe.message) == null
                            ? void 0
                            : ut.content,
                        Es =
                          typeof Rs == "string"
                            ? Rs
                            : typeof Rt == "string"
                              ? Rt
                              : null;
                      Es != null &&
                        ((Ht += 1),
                        is == null && (is = Date.now() - he),
                        (ze += Es),
                        typeof ce == "function" && ce(ze));
                    } catch {}
                  }
              }
              if (!ze && lt.trim())
                try {
                  const ys = JSON.parse(lt.trim()),
                    Vs = Vm(ys);
                  typeof Vs == "string" &&
                    Vs.trim() &&
                    ((ze = Vs),
                    (Ht = 1),
                    (is = Date.now() - he),
                    cs("stream_fallback_json_parsed", {
                      contentLen: ze.length,
                    }));
                } catch {}
              if (
                (ts &&
                  !ze &&
                  (cs("stream_fallback_to_non_stream", {
                    reason: "idle_timeout_no_content",
                  }),
                  (ns = !0)),
                !ns)
              ) {
                if (
                  (cs("stream_read_complete", {
                    contentLen: String(ze || "").length,
                    chunkCount: Ht,
                    firstChunkMs: is,
                  }),
                  J && (Qt = Rl(ze, 600)),
                  J && (Lt = { ...Lt, firstChunkMs: is, chunkCount: Ht }),
                  !String(ze ?? "").trim())
                )
                  throw Object.assign(
                    new Error("EMPTY_BODY: 接口已响应但未返回正文"),
                    {
                      _httpStatus: rt.status || 200,
                      _errorKind: "EMPTY_BODY",
                      _failureStage: qt,
                      _failureSummary: `stream_content_len=${String(ze || "").length}`,
                      _flowTrace: js(),
                    },
                  );
                if (tj(ze)) {
                  const ys = sj(ze);
                  if (R && ys === "translation_only_tag") {
                    const Vs = nj(ze);
                    if (Vs)
                      return (
                        cs("content_recovered", {
                          mode: "stream",
                          reason: "translation_only_tag",
                        }),
                        J &&
                          (Lt = {
                            ...Lt,
                            recovery: {
                              applied: !0,
                              reason: "translation_only_tag",
                              recoveredLen: Vs.length,
                            },
                          }),
                        cs("request_success", {
                          mode: "stream",
                          contentLen: String(Vs || "").length,
                        }),
                        Ne(Vs),
                        Vs
                      );
                  }
                  throw Object.assign(
                    new Error("EMPTY_BODY: 接口已响应但正文无有效信息"),
                    {
                      _httpStatus: rt.status || 200,
                      _errorKind: "EMPTY_BODY",
                      _failureStage: qt,
                      _failureSummary: `stream_content_unusable=1 | unusable_reason=${ys} | content_preview=${Rl(ze, 80) || "(empty)"}`,
                      _rawSnippet: Rl(ze, 120),
                      _flowTrace: js(),
                    },
                  );
                }
                return (
                  cs("request_success", {
                    mode: "stream",
                    contentLen: String(ze || "").length,
                  }),
                  Ne(ze),
                  ze
                );
              }
            } catch (rt) {
              if (
                (rt == null ? void 0 : rt._isStreamIdle) ||
                (rt == null ? void 0 : rt.message) === "Failed to fetch" ||
                (rt == null ? void 0 : rt.name) === "TypeError" ||
                (rt == null ? void 0 : rt._errorKind) === "EMPTY_BODY"
              )
                (cs("stream_fallback_to_non_stream", {
                  reason:
                    rt != null && rt._isStreamIdle
                      ? "idle_timeout"
                      : "stream_fetch_failed",
                  error: String((rt == null ? void 0 : rt.message) ?? "").slice(
                    0,
                    120,
                  ),
                }),
                  (ns = !0));
              else {
                const lt = (rt == null ? void 0 : rt.name) === "AbortError",
                  it = lt
                    ? `请求超时（${G / 1e3} 秒），请检查网络或 API 服务`
                    : ((rt == null ? void 0 : rt.message) ?? String(rt)),
                  Ht = {
                    status: "error",
                    duration: Date.now() - he,
                    error: it,
                    errorKind: lt ? "TIMEOUT" : "UNKNOWN",
                    httpStatus: null,
                    errorRaw: String(
                      (rt == null ? void 0 : rt.message) ?? String(rt),
                    ),
                    errorStatus: lt ? "timeout" : null,
                  };
                throw (
                  ve(Ht),
                  (rt != null && rt._failureStage) || (rt._failureStage = qt),
                  (rt != null && rt._flowTrace) || (rt._flowTrace = js()),
                  rt
                );
              }
            } finally {
              clearTimeout(yt);
            }
          }
          let Ge = null,
            Le = !1;
          for (let _e = 0; _e <= St; _e++) {
            const yt = new AbortController(),
              rt = Date.now(),
              ze = Ft && Le,
              lt = ze ? $t : st,
              it = ze ? At : es,
              Ht = ze && rn ? rn : t.model || "gpt-3.5-turbo",
              is = ze && xs != null ? xs : t.temperature || 0.7,
              os = setTimeout(() => yt.abort(), G);
            try {
              (cs("attempt_payload_ready", {
                attempt: _e,
                payloadMode: "full",
                payloadMsgCount: Array.isArray(Pt) ? Pt.length : 0,
                payloadBytes: Number.isFinite(Number(Bs)) ? Number(Bs) : null,
                timeoutMs: G,
              }),
                cs("fetch_start", {
                  attempt: _e,
                  endpointRole: ze ? "backup" : "primary",
                }));
              const as = await fetch(lt, {
                method: "POST",
                signal: yt.signal,
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${it}`,
                },
                body: JSON.stringify({
                  model: Ht,
                  messages: Pt,
                  temperature: is,
                }),
              });
              if (
                (cs("response_received", {
                  attempt: _e,
                  status: as.status,
                  attemptCostMs: Date.now() - rt,
                }),
                J &&
                  (Lt = {
                    mode: "non_stream",
                    status: as.status,
                    contentType:
                      ((Ee = (_t = as.headers) == null ? void 0 : _t.get) ==
                      null
                        ? void 0
                        : Ee.call(_t, "content-type")) || null,
                    headers: aj(as.headers),
                  }),
                !as.ok)
              ) {
                let pt = `HTTP ${as.status} ${as.statusText}`;
                try {
                  const xt = await as.json();
                  if (xt != null && xt.error) {
                    const zt = xt.error,
                      ms =
                        zt.message ||
                        zt.msg ||
                        zt.error ||
                        (typeof zt == "string" ? zt : JSON.stringify(zt));
                    pt += `
接口返回: ${zt.code ? `[${zt.code}] ` : ""}${ms}`;
                  } else
                    xt != null && xt.message
                      ? (pt += `
接口返回: ${xt.message}`)
                      : (pt += `
响应体: ${JSON.stringify(xt).slice(0, 400)}`);
                } catch {
                  try {
                    const zt = await as.text();
                    zt &&
                      (pt += `
响应体: ${zt.slice(0, 500)}`);
                  } catch {}
                }
                const dt = {
                  status: "error",
                  duration: Date.now() - he,
                  error: pt,
                  errorKind: as.status >= 500 ? "HTTP_5XX" : "HTTP_4XX",
                  httpStatus: as.status,
                  errorRaw: pt,
                  errorStatus: as.status,
                };
                throw (
                  ve(dt),
                  Object.assign(new Error(pt), {
                    _httpStatus: as.status,
                    _errorKind: as.status >= 500 ? "HTTP_5XX" : "HTTP_4XX",
                    _failureStage: qt,
                    _flowTrace: js(),
                  })
                );
              }
              const vs = Math.max(5e3, G - (Date.now() - rt));
              cs("body_read_start", { attempt: _e, budgetMs: vs });
              const ts = await Promise.race([
                as.text(),
                new Promise((pt, qe) =>
                  setTimeout(() => {
                    try {
                      yt.abort();
                    } catch {}
                    qe(
                      Object.assign(new Error("响应体读取超时"), {
                        name: "AbortError",
                      }),
                    );
                  }, vs),
                ),
              ]);
              (J && (Qt = Rl(ts, 1800)),
                cs("body_read_done", {
                  attempt: _e,
                  rawLen: String(ts || "").length,
                }));
              let ys = null;
              try {
                ((ys = ts ? JSON.parse(ts) : null),
                  cs("json_parse_done", { attempt: _e }));
              } catch {
                const qe = `响应不是合法 JSON（status=${as.status}）`;
                throw Object.assign(new Error(qe), {
                  _httpStatus: as.status || 200,
                  _errorKind: "PARSE",
                  _failureStage: qt,
                  _failureSummary: Vg(null, ts),
                  _rawSnippet: Rl(ts),
                  _flowTrace: js(),
                });
              }
              if (ys.error) {
                const pt = ys.error,
                  qe =
                    pt.message ||
                    pt.msg ||
                    pt.error ||
                    (typeof pt == "string" ? pt : JSON.stringify(pt)),
                  dt = `接口返回错误: ${pt.code ? `[${pt.code}] ` : ""}${qe}`,
                  zt = {
                    status: "error",
                    duration: Date.now() - he,
                    error: dt,
                    errorKind: "API_BODY_ERROR",
                    httpStatus: 200,
                    errorRaw: dt,
                    errorStatus: 200,
                  };
                throw (
                  ve(zt),
                  Object.assign(new Error(dt), {
                    _httpStatus: 200,
                    _errorKind: "API_BODY_ERROR",
                    _failureStage: qt,
                    _flowTrace: js(),
                  })
                );
              }
              J &&
                (Lt = {
                  ...Lt,
                  id: (ys == null ? void 0 : ys.id) ?? null,
                  model: (ys == null ? void 0 : ys.model) ?? null,
                  object: (ys == null ? void 0 : ys.object) ?? null,
                  created: (ys == null ? void 0 : ys.created) ?? null,
                  usage:
                    ys != null && ys.usage && typeof ys.usage == "object"
                      ? ys.usage
                      : null,
                  finishReason:
                    ((He =
                      (fe = ys == null ? void 0 : ys.choices) == null
                        ? void 0
                        : fe[0]) == null
                      ? void 0
                      : He.finish_reason) ?? null,
                  topKeys:
                    ys && typeof ys == "object"
                      ? Object.keys(ys).slice(0, 20)
                      : null,
                  rawLen: String(ts || "").length,
                });
              const Vs = Vm(ys);
              if (
                (cs("content_extract_done", {
                  attempt: _e,
                  contentLen: String(Vs || "").length,
                }),
                !String(Vs ?? "").trim())
              ) {
                const pt = Number(
                  (Ie = ys == null ? void 0 : ys.usage) == null
                    ? void 0
                    : Ie.completion_tokens,
                );
                throw Object.assign(
                  new Error("EMPTY_BODY: 接口已响应但未返回正文"),
                  {
                    _httpStatus: as.status || 200,
                    _errorKind: "EMPTY_BODY",
                    _failureStage: qt,
                    _failureSummary: Vg(ys, ts),
                    _rawSnippet: Rl(ts),
                    _flowTrace: js(),
                    _completionTokens: Number.isFinite(pt) ? pt : null,
                  },
                );
              }
              if (tj(Vs)) {
                const pt = sj(Vs);
                if (R && pt === "translation_only_tag") {
                  const qe = nj(Vs);
                  if (qe)
                    return (
                      cs("content_recovered", {
                        attempt: _e,
                        reason: "translation_only_tag",
                      }),
                      J &&
                        (Lt = {
                          ...Lt,
                          recovery: {
                            applied: !0,
                            reason: "translation_only_tag",
                            recoveredLen: qe.length,
                          },
                        }),
                      cs("attempt_success", { attempt: _e }),
                      cs("request_success", {
                        mode: "non_stream",
                        contentLen: String(qe || "").length,
                      }),
                      Ne(qe),
                      qe
                    );
                }
                throw Object.assign(
                  new Error("EMPTY_BODY: 接口已响应但正文无有效信息"),
                  {
                    _httpStatus: as.status || 200,
                    _errorKind: "EMPTY_BODY",
                    _failureStage: qt,
                    _failureSummary: `${Vg(ys, ts)} | content_unusable=1 | unusable_reason=${pt} | content_preview=${Rl(Vs, 80) || "(empty)"}`,
                    _rawSnippet: Rl(ts),
                    _flowTrace: js(),
                    _completionTokens: Number.isFinite(
                      Number(
                        (Ce = ys == null ? void 0 : ys.usage) == null
                          ? void 0
                          : Ce.completion_tokens,
                      ),
                    )
                      ? Number(ys.usage.completion_tokens)
                      : null,
                  },
                );
              }
              return (
                cs("attempt_success", { attempt: _e }),
                cs("request_success", {
                  mode: "non_stream",
                  contentLen: String(Vs || "").length,
                }),
                Ne(Vs),
                Vs
              );
            } catch (as) {
              Ge = as;
              const vs = (as == null ? void 0 : as.message) ?? String(as),
                ts = VR(as),
                ys =
                  (as == null ? void 0 : as.name) === "AbortError" ||
                  (!vs.includes("HTTP ") &&
                    ((as == null ? void 0 : as.name) === "TypeError" ||
                      /fetch|network|failed/i.test(vs))),
                Vs = ys && _e < St;
              if (
                (cs("attempt_failed", {
                  attempt: _e,
                  canRetry: Vs ? 1 : 0,
                  attemptCostMs: Date.now() - rt,
                  errorKind: ys
                    ? "NETWORK"
                    : (as == null ? void 0 : as._errorKind) || "UNKNOWN",
                  netReason: ys ? ts.reasonCode : void 0,
                }),
                (as != null && as._failureStage) || (as._failureStage = qt),
                (as != null && as._flowTrace) || (as._flowTrace = js()),
                ys &&
                  !(as != null && as._networkDetails) &&
                  (as._networkDetails = ts),
                Vs &&
                  Ft &&
                  !Le &&
                  ((Le = !0),
                  cs("endpoint_switched", {
                    attempt: _e,
                    endpointRole: "backup",
                    reason: "network_failure",
                  })),
                Vs)
              ) {
                await new Promise((pt) => setTimeout(pt, Je));
                continue;
              }
              try {
                const pt = String(
                    (as == null ? void 0 : as._failureSummary) || "",
                  ).trim(),
                  qe = String(
                    (as == null ? void 0 : as._failureStage) || qt || "",
                  ).trim(),
                  dt = String(
                    (as == null ? void 0 : as._flowTrace) || js(),
                  ).trim(),
                  xt = String(
                    (as == null ? void 0 : as._rawSnippet) || Qt || "",
                  ).trim(),
                  zt = [
                    vs,
                    qe ? `失败阶段: ${qe}` : "",
                    pt ? `失败摘要: ${pt}` : "",
                    as != null && as._networkDetails
                      ? `网络诊断: ${JSON.stringify({ reasonCode: as._networkDetails.reasonCode, online: as._networkDetails.online, name: as._networkDetails.name })}`
                      : "",
                    dt ? `流程轨迹: ${dt}` : "",
                    xt ? `响应片段: ${xt}` : "",
                  ].filter(Boolean).join(`
`),
                  ms =
                    (as == null ? void 0 : as._errorKind) ||
                    ((as == null ? void 0 : as.name) === "AbortError"
                      ? "TIMEOUT"
                      : !vs.includes("HTTP ") &&
                          /fetch|network|failed/i.test(vs)
                        ? "NETWORK"
                        : "UNKNOWN");
                ve({
                  status: "error",
                  duration: Date.now() - he,
                  error: vs,
                  errorKind: ms,
                  errorStatus:
                    ms === "TIMEOUT"
                      ? "timeout"
                      : ms === "NETWORK"
                        ? "network"
                        : ((Lt == null ? void 0 : Lt.status) ?? null),
                  errorRaw: zt,
                  ...(J
                    ? {
                        flowTrace: dt || null,
                        flowEvents: Vt.slice(),
                        responseMeta: Lt,
                        rawResponsePreview: Qt || xt || void 0,
                        networkDiagnostics:
                          (as == null ? void 0 : as._networkDetails) || void 0,
                      }
                    : {}),
                });
              } catch {}
              throw as;
            } finally {
              clearTimeout(os);
            }
          }
          throw Ge || new Error("请求失败");
        } catch (Re) {
          const De = Date.now() - he,
            at = (Re == null ? void 0 : Re.message) ?? String(Re),
            { errorKind: ft, httpStatus: vt } = Qw(Re),
            Oe = pR(ft, vt, at, G),
            Qe = String(
              (Re == null ? void 0 : Re._failureSummary) || "",
            ).trim(),
            Ye = String((Re == null ? void 0 : Re._rawSnippet) || "").trim(),
            Ze = String((Re == null ? void 0 : Re._failureStage) || "").trim(),
            Ue = String((Re == null ? void 0 : Re._flowTrace) || "").trim(),
            me = J
              ? [
                  Oe,
                  Ze ? `失败阶段：${Ze}` : "",
                  Qe ? `失败摘要：${Qe}` : "",
                  Ue ? `流程轨迹：${Ue}` : "",
                ].filter(Boolean).join(`
`)
              : Oe,
            jt = J
              ? [
                  at,
                  Ze ? `失败阶段: ${Ze}` : "",
                  Qe ? `失败摘要: ${Qe}` : "",
                  Re != null && Re._networkDetails
                    ? `网络诊断: ${JSON.stringify({ reasonCode: Re._networkDetails.reasonCode, online: Re._networkDetails.online, name: Re._networkDetails.name })}`
                    : "",
                  Ue ? `流程轨迹: ${Ue}` : "",
                  Ye ? `响应片段: ${Ye}` : "",
                ].filter(Boolean).join(`
`)
              : at,
            Gt = J ? flowEvents.slice() : [],
            Pt = J
              ? rj({
                  requestModel,
                  responseMeta: latestResponseMeta,
                  errorKind: ft,
                  failureStage: Ze,
                  failureSummary: Qe,
                })
              : "",
            Wt = J
              ? ij({
                  errorKind: ft,
                  failureStage: Ze,
                  failureSummary: Qe,
                  responseMeta: latestResponseMeta,
                })
              : null,
            ct = {
              id: ge,
              timestamp: he,
              type: "request",
              scene: typeof ie < "u" ? ie : "chat",
              contact: (le == null ? void 0 : le.name) ?? "",
              status: "error",
              duration: De,
              error: me,
              errorKind: ft,
              httpStatus: vt ?? null,
              errorRaw: jt,
              errorStatus:
                ft === "TIMEOUT"
                  ? "timeout"
                  : ft === "NETWORK"
                    ? "network"
                    : (vt ?? null),
              verboseLogEnabled: J,
              ...(J
                ? {
                    flowTrace: Ue || null,
                    flowEvents: Gt,
                    responseMeta: latestResponseMeta,
                    rawResponsePreview:
                      latestRawResponsePreview || Ye || void 0,
                    diagnosis: Pt || void 0,
                    failureReasonCode: Wt == null ? void 0 : Wt.code,
                    failureReasonTitle: Wt == null ? void 0 : Wt.title,
                    failureReasonHint: Wt == null ? void 0 : Wt.hint,
                    failureReasonEvidence: Wt == null ? void 0 : Wt.evidence,
                    networkDiagnostics:
                      (Re == null ? void 0 : Re._networkDetails) || void 0,
                  }
                : {}),
            };
          ve(ct);
          const Kt = Qo(t == null ? void 0 : t.endpoint);
          return xR(Oe, at);
        }
      },
      T = l.useCallback(() => oR(_), []),
      I = l.useCallback((ne) => {
        lR(_, ne, Yg);
      }, []),
      L = l.useRef(new Set()),
      B = l.useRef({}),
      F = async (ne, le, ie, X = {}) =>
        vF({
          momentId: ne,
          posterContact: le,
          momentContent: ie,
          options: X,
          deps: {
            contacts: n,
            user: s,
            apiConfig: t,
            addApiLog: I,
            setMoments: o,
            MOMENT_ROLE_SETTING_MAX: Ug,
            MOMENT_USER_SETTING_MAX: Gg,
          },
        }),
      D = async () =>
        jF({
          deps: {
            chatsRef: x,
            chats: a,
            contacts: n,
            moments: i,
            momentPostingInProgressRef: L,
            lastMomentProbabilityCheckRef: B,
            asyncStorage: be,
            toDateStr: Wg,
            TRACE_TODAY_KEY: Bg,
            PLAN_KEY: Hg,
            getRoleBoundUser: m,
            aiPostMoment: $,
          },
        }),
      $ = async (ne, le = [], ie = {}) =>
        kF({
          contact: ne,
          recentMessages: le,
          options: ie,
          deps: {
            getRoleBoundUser: m,
            contacts: n,
            asyncStorage: be,
            apiConfig: t,
            addApiLog: I,
            setMoments: o,
            user: s,
            aiPostNpcMomentFromContext: P,
            MOMENT_ROLE_SETTING_MAX: Ug,
            MOMENT_USER_SETTING_MAX: Gg,
          },
        }),
      P = async (ne, le, ie) =>
        wF({
          roleContact: ne,
          roleBoundUser: le,
          traceAndPlan: ie,
          deps: {
            contacts: n,
            user: s,
            apiConfig: t,
            addApiLog: I,
            setMoments: o,
            MOMENT_ROLE_SETTING_MAX: Ug,
            MOMENT_USER_SETTING_MAX: Gg,
          },
        });
    return {
      apiLogs: w,
      clearApiLogs: T,
      addApiLog: I,
      fetchWeather: M,
      fetchTime: E,
      callApi: j,
      aiPostMoment: $,
      runProactiveMomentCheck: D,
      generateNpcComments: F,
      summarizeHistory: async (ne, le) =>
        dR({
          chatId: ne,
          messages: le,
          chats: a,
          contacts: n,
          user: s,
          getEffectiveUser: p,
          getRoleBoundUser: m,
          callApi: j,
          setSummaries: d,
        }),
      calculateTokenEstimate: (ne) =>
        uR({
          chatId: ne,
          chats: a,
          contacts: n,
          user: s,
          chatConfig: g,
          getEffectiveUser: p,
        }),
      triggerAiMomentInteraction: async (ne, le, ie, X = null, je = null) =>
        NF({
          moment: ne,
          type: le,
          sourceUser: ie,
          commentContent: X,
          replyToUser: je,
          deps: {
            contacts: n,
            user: s,
            chatsRef: x,
            chats: a,
            getEffectiveUser: p,
            getRoleBoundUser: m,
            callApi: j,
            setMoments: o,
            asyncStorage: be,
            toDateStr: Wg,
            TRACE_TODAY_KEY: Bg,
            PLAN_KEY: Hg,
            apiConfig: t,
            addApiLog: I,
          },
        }),
      triggerAiReply: async (
        ne,
        le = !1,
        ie = "",
        X = null,
        je = null,
        xe = null,
        ye = null,
        R = null,
      ) =>
        OR({
          chatId: ne,
          isAutoReply: le,
          timeSinceLastMessage: ie,
          messagesOverride: X,
          listenTogetherState: je,
          sceneOverride: xe,
          onStreamChunk: ye,
          prependForwardCardHint: R,
          deps: {
            chatsRef: x,
            chats: a,
            contacts: n,
            lastTypingStartRef: k,
            setChats: r,
            getEffectiveUser: p,
            setKeepAliveBoost: Yw,
            requestKeepAliveLock: Vw,
            chatConfig: g,
            getLastNRounds: Wo,
            callStateRef: N,
            moments: i,
            user: s,
            asyncStorage: be,
            summaries: c,
            archives: y,
            phoneRecents: v,
            fetchWeather: M,
            fetchTime: E,
            toDateStr: Wg,
            TRACE_TODAY_KEY: Bg,
            PLAN_KEY: Hg,
            DEFAULT_CHAT_SETTINGS: hm,
            quoteRoundsRef: b,
            replyFailedChatIdRef: A,
            isHelpAssistantContact: Si,
            apiConfig: t,
            addApiLog: I,
            runHelpAssistantReply: Gz,
            extractHelpAssistantDialogueLines: Pz,
            callApi: j,
            normalizeDraftFieldToString: to,
          },
        }),
      triggerGroupReply: async (ne, le, ie, X = {}) =>
        CR({
          chatId: ne,
          currentChatOverride: le,
          scene: ie,
          options: X,
          deps: {
            chatsRef: x,
            chats: a,
            addApiLog: I,
            setKeepAliveBoost: Yw,
            requestKeepAliveLock: Vw,
            classifyCallApiError: Qw,
            contacts: n,
            moments: i,
            summaries: c,
            chatConfig: g,
            memes: u,
            memeCategories: f,
            callStateRef: N,
            asyncStorage: be,
            fetchWeather: M,
            fetchTime: E,
            user: s,
            apiConfig: t,
          },
        }),
      generateContactInfo: async (ne) =>
        mR({ contact: ne, user: s, callApi: j }),
      replyFailedChatIdRef: A,
      privateReplyInFlightRef: C,
    };
  },
  qR = (t, s, n, a, r) => {
    const [i, o] = l.useState({}),
      [c, d] = l.useState(!1);
    return (
      l.useEffect(() => {
        (async () => {
          const w = await be.get("chat_app_archives");
          (w != null && o(w), d(!0));
        })();
      }, []),
      l.useEffect(() => {
        c && be.set("chat_app_archives", i);
      }, [i, c]),
      {
        archives: i,
        saveArchive: async (N, w) => {
          const _ = t.find((M) => M.id === N);
          if (!_) return;
          const A = Date.now().toString(),
            k = (a[N] || []).filter((M) => M.archiveId == null),
            C = {
              id: A,
              name: w || new Date().toLocaleString(),
              timestamp: Date.now(),
              lastMessage: _.lastMessage,
              messages: _.messages || [],
              callHistory: _.callHistory || [],
              settings: { ...hm, ..._.settings },
              summaries: k.map((M) => ({ ...M, archiveId: A })),
            };
          (o((M) => ({ ...M, [N]: [C, ...(M[N] || [])] })),
            await be.set("chat_app_summaries", a),
            s((M) =>
              M.map((E) =>
                E.id !== N
                  ? E
                  : {
                      ...E,
                      messages: [],
                      callHistory: [],
                      lastMessage: "",
                      timestamp: new Date().toISOString(),
                      settings: { ...hm },
                      currentArchiveId: null,
                      lastSummaryMessageCount: 0,
                      lastSummaryRoundCount: 0,
                    },
              ),
            ),
            r((M) => ({ ...M, [N]: [] })));
        },
        loadArchive: (N, w) => {
          const A = (i[N] || []).find((M) => M.id === w);
          if (!A) return;
          const k = A.messages || [],
            C = A.callHistory || [];
          s((M) =>
            M.map((E) =>
              E.id !== N
                ? E
                : {
                    ...E,
                    messages: k,
                    callHistory: C,
                    lastMessage: A.lastMessage || "",
                    timestamp: new Date(A.timestamp).toISOString(),
                    settings: { ...hm, ...(A.settings || {}) },
                    currentArchiveId: w,
                    lastSummaryRoundCount: Ap(k),
                  },
            ),
          );
        },
        deleteArchive: (N, w) => {
          (o((_) => ({ ..._, [N]: (_[N] || []).filter((A) => A.id !== w) })),
            r((_) => ({
              ..._,
              [N]: (_[N] || []).filter((A) => A.archiveId !== w),
            })),
            s((_) =>
              _.map((A) =>
                A.id !== N || A.currentArchiveId !== w
                  ? A
                  : { ...A, currentArchiveId: null },
              ),
            ));
        },
        removeArchivesForChatIds: (N) => {
          const w = new Set((N || []).map(String).filter(Boolean));
          w.size !== 0 &&
            o((_) => {
              const A = { ..._ };
              return (
                w.forEach((k) => {
                  delete A[k];
                }),
                A
              );
            });
        },
        bindSummaryToArchive: (N, w, _, A = null) => {
          var L;
          const k = i[N] || [],
            C = a[N] || [],
            M = C.find((B) => B.id === w),
            E = k.find((B) => (B.summaries || []).some((F) => F.id === w)),
            S = A
              ? { ...A }
              : M
                ? { ...M }
                : (L = E == null ? void 0 : E.summaries) != null &&
                    L.find((B) => B.id === w)
                  ? { ...E.summaries.find((B) => B.id === w) }
                  : null;
          if (!S) return;
          if (_ == null) {
            const B = { ...S, archiveId: null };
            C.some((D) => D.id === w) ||
              r((D) => ({ ...D, [N]: [...(D[N] || []), B] }));
            return;
          }
          const j = k.find((B) => B.id === _);
          if (!j || (j.summaries || []).some((B) => B.id === w)) return;
          const I = { ...S, archiveId: _ };
          o((B) => ({
            ...B,
            [N]: (B[N] || []).map((F) =>
              F.id === _ ? { ...F, summaries: [...(F.summaries || []), I] } : F,
            ),
          }));
        },
        unbindSummaryFromArchive: (N, w, _) => {
          o((A) => ({
            ...A,
            [N]: (A[N] || []).map((k) =>
              k.id !== w
                ? k
                : {
                    ...k,
                    summaries: (k.summaries || []).filter((C) => C.id !== _),
                  },
            ),
          }));
        },
        unbindSummaryFromCurrentSession: (N, w) => {
          r((_) => ({ ..._, [N]: (_[N] || []).filter((A) => A.id !== w) }));
        },
        removeSummaryFromArchive: (N, w, _) => {
          (o((A) => ({
            ...A,
            [N]: (A[N] || []).map((k) =>
              k.id !== w
                ? k
                : {
                    ...k,
                    summaries: (k.summaries || []).filter((C) => C.id !== _),
                  },
            ),
          })),
            r((A) => ({ ...A, [N]: (A[N] || []).filter((k) => k.id !== _) })));
        },
        updateSummaryInArchive: (N, w, _, A) => {
          A != null &&
            A.trim() &&
            o((k) => ({
              ...k,
              [N]: (k[N] || []).map((C) =>
                C.id !== w
                  ? C
                  : {
                      ...C,
                      summaries: (C.summaries || []).map((M) =>
                        M.id === _ ? { ...M, content: A.trim() } : M,
                      ),
                    },
              ),
            }));
        },
        updateArchiveSettings: (N, w, _) => {
          o((A) => ({
            ...A,
            [N]: (A[N] || []).map((k) =>
              k.id !== w
                ? k
                : { ...k, settings: { ...(k.settings || {}), ..._ } },
            ),
          }));
        },
      }
    );
  };
function c1(t) {
  var s;
  return Ul(
    String(
      ((s = t == null ? void 0 : t.settings) == null ? void 0 : s.aiTimeZone) ||
        "",
    ).trim(),
  );
}
function US(t, s) {
  const n = Array.isArray(t) ? t.find((a) => a.contactId === s) : null;
  return c1(n);
}
function Sc(t, s) {
  const n = t instanceof Date ? t : new Date(t);
  if (!s)
    return `${n.getFullYear()}-${String(n.getMonth() + 1).padStart(2, "0")}-${String(n.getDate()).padStart(2, "0")}`;
  try {
    return new Intl.DateTimeFormat("en-CA", {
      timeZone: s,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(n);
  } catch {
    return `${n.getFullYear()}-${String(n.getMonth() + 1).padStart(2, "0")}-${String(n.getDate()).padStart(2, "0")}`;
  }
}
function Zm(t, s) {
  var a, r;
  const n = t instanceof Date ? t : new Date(t);
  if (!s) return { hour: n.getHours(), minute: n.getMinutes() };
  try {
    const i = new Intl.DateTimeFormat("en-US", {
        timeZone: s,
        hour: "2-digit",
        minute: "2-digit",
        hour12: !1,
      }).formatToParts(n),
      o = parseInt(
        ((a = i.find((d) => d.type === "hour")) == null ? void 0 : a.value) ??
          "0",
        10,
      ),
      c = parseInt(
        ((r = i.find((d) => d.type === "minute")) == null ? void 0 : r.value) ??
          "0",
        10,
      );
    return {
      hour: Number.isFinite(o) ? o : 0,
      minute: Number.isFinite(c) ? c : 0,
    };
  } catch {
    return { hour: n.getHours(), minute: n.getMinutes() };
  }
}
function GS(t, s) {
  const n = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(t || "").trim());
  if (!n) return String(t || "").trim();
  const a = parseInt(n[1], 10),
    r = parseInt(n[2], 10),
    i = parseInt(n[3], 10),
    o = Date.UTC(a, r - 1, i + s),
    c = new Date(o);
  return `${c.getUTCFullYear()}-${String(c.getUTCMonth() + 1).padStart(2, "0")}-${String(c.getUTCDate()).padStart(2, "0")}`;
}
function oj(t) {
  const s = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(t || "").trim());
  if (!s) return 0;
  const n = parseInt(s[1], 10),
    a = parseInt(s[2], 10),
    r = parseInt(s[3], 10);
  return new Date(Date.UTC(n, a - 1, r)).getUTCDay();
}
function HS(t, s) {
  const n = t instanceof Date ? t : new Date(t);
  if (!s) return n.toLocaleDateString("zh-CN");
  try {
    return n.toLocaleDateString("zh-CN", { timeZone: s });
  } catch {
    return n.toLocaleDateString("zh-CN");
  }
}
function QR(t, s) {
  const n = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(t || "").trim());
  if (!n) return String(t || "").trim();
  const a = parseInt(n[1], 10),
    r = parseInt(n[2], 10),
    i = parseInt(n[3], 10),
    o = new Date(Date.UTC(a, r - 1, i, 12, 0, 0));
  return HS(o, s);
}
function ZR(t, s, n, a) {
  if (Sc(t, s) !== n) return 1 / 0;
  const { hour: i, minute: o } = Zm(t, s);
  return i * 60 + o - a * 60;
}
function XR(t) {
  const {
    autoReplyInProgressRef: s,
    chatsRef: n,
    contactsRef: a,
    triggerAiReplyRef: r,
    apiConfigRef: i,
    getRoleBoundUserRef: o,
    momentsRef: c,
    updateChatSettingsRef: d,
    setNotificationRef: u,
    autoTraceUpdatingRef: f,
    runTraceUpdateWhenOpenedRef: p,
    runProactiveMomentCheckRef: m,
    addApiLog: h,
  } = t;
  l.useEffect(() => {
    const g = (A) => {
        if (A == null) return NaN;
        if (typeof A == "number" && Number.isFinite(A)) return A;
        const k = new Date(A).getTime();
        return Number.isFinite(k) ? k : NaN;
      },
      x = (A) => {
        const k = Array.isArray(A == null ? void 0 : A.messages)
          ? A.messages
          : [];
        for (let C = k.length - 1; C >= 0; C--) {
          const M = k[C];
          if (
            !M ||
            M.sender === "system" ||
            M.type === "system" ||
            M.type === "time_advance"
          )
            continue;
          const E = g(M.timestamp);
          if (Number.isFinite(E)) return E;
        }
        return g(A == null ? void 0 : A.timestamp);
      },
      y = () => {
        const A = Date.now(),
          k = s == null ? void 0 : s.current,
          C = (n == null ? void 0 : n.current) ?? [];
        k &&
          C.forEach((M) => {
            var F, D, $, P;
            if (
              !(
                (F = M == null ? void 0 : M.settings) != null &&
                F.autoMessageEnabled
              ) ||
              !(
                (D = M == null ? void 0 : M.settings) != null &&
                D.autoMessageInterval
              )
            )
              return;
            const E = i == null ? void 0 : i.current;
            if (!(E != null && E.endpoint) || !(E != null && E.key)) return;
            const S = parseInt(M.settings.autoMessageInterval, 10),
              T = (Number.isFinite(S) && S > 0 ? S : 0) * 60 * 1e3,
              I = x(M);
            if (!Number.isFinite(I) || T <= 0) return;
            const L = Math.max(60 * 1e3, T),
              B = Number(
                ($ = M == null ? void 0 : M.settings) == null
                  ? void 0
                  : $.lastAutoMessageAttemptAt,
              );
            if (
              !(Number.isFinite(B) && B > 0 && A - B < L) &&
              A - I > T &&
              !M.isTyping &&
              !k.has(M.id)
            ) {
              k.add(M.id);
              try {
                (P = d == null ? void 0 : d.current) == null ||
                  P.call(d, M.id, { lastAutoMessageAttemptAt: A });
              } catch {}
              const z = Math.floor((A - I) / (60 * 1e3));
              let O = "";
              if (z < 60) O = `${z}分钟`;
              else {
                const Z = Math.floor(z / 60),
                  K = z % 60;
                O = `${Z}小时${K > 0 ? K + "分钟" : ""}`;
              }
              r != null && r.current ? r.current(M.id, !0, O) : k.delete(M.id);
            }
          });
      },
      v = (A, k) => {
        const C = k === "{" ? "}" : "]";
        let M = 0;
        const E = A.indexOf(k);
        if (E === -1) return null;
        for (let S = E; S < A.length; S++)
          if ((A[S] === k && M++, A[S] === C && (M--, M === 0)))
            return A.slice(E, S + 1);
        return null;
      },
      b = async (A, k) => {
        var ye, R;
        const C = i == null ? void 0 : i.current,
          M = o == null ? void 0 : o.current,
          E = (c == null ? void 0 : c.current) || [];
        if (!(C != null && C.key)) return null;
        const S = new Date(),
          j = c1(A),
          T = Sc(S, j),
          { hour: I, minute: L } = Zm(S, j),
          B = `${String(I).padStart(2, "0")}:${String(L).padStart(2, "0")}`,
          F = (M == null ? void 0 : M(k)) || {},
          D = F.name || "用户",
          $ = await be.get(TF(k.id, T), null),
          P =
            (ye = $ == null ? void 0 : $.items) != null && ye.length
              ? $.items.map((oe) => ` ${oe.time} ${oe.text}`).join(`
`)
              : "（今日暂无计划）",
          O = ((n == null ? void 0 : n.current) || []).find(
            (oe) => oe.contactId === k.id,
          ),
          Z =
            O != null && O.messages
              ? O.messages
                  .slice(-20)
                  .map((oe) => `${oe.sender === "me" ? D : k.name}: ${oe.text}`)
                  .join(`
`)
              : "无",
          K =
            (E || [])
              .filter((oe) => {
                var ee;
                return ((ee = oe.user) == null ? void 0 : ee.name) === k.name;
              })
              .slice(0, 5)
              .map((oe) => `[${oe.time}] ${oe.content}`).join(`
`) || "无",
          q = k.setting || "无",
          V = F.settings || "无",
          ne = await be.get(mm(k.id, T), null),
          le =
            ((R = ne == null ? void 0 : ne.pages) == null ? void 0 : R.length) >
            0,
          ie = le ? (ne.pages[ne.pages.length - 1].endHour ?? I) : 0,
          X = Math.min(ie, 23);
        if (le && X > I) return null;
        const je = le
            ? `从 **${String(X).padStart(2, "0")}:00 到 ${B}** 的续写行踪（只生成这一段，角色有自己的生活，不完全依赖聊天；若有突发情况请写明原因）。`
            : `从 **00:00 到 ${B}** 的完整行踪。`,
          xe = `[系统指令：生成今日行踪${le ? "（续写）" : ""}]
你是「${k.name}」。请根据以下信息，生成你今天${je}

【角色人设】${q}
【用户/绑定人设】${V}
【用户或昵称】${D}

【今日计划】（仅供参考；若未按计划走，必须写明突发情况与原因）
${P}

【最近聊天】（参考用，不完全依赖）
${Z}
【最近朋友圈】${K}

要求：
1. 时间一律使用24小时制：00:00 表示凌晨0点（午夜），12:00 表示中午12点。时间范围：${le ? `从 ${String(X).padStart(2, "0")}:00 到 ${B}` : `从 00:00 到 ${B}`}，只生成到当前时间点为止，严禁生成当前时间之后的任何行踪；每页的 endHour 不得超过当前小时（当前约 ${I} 时）。${le ? `续写时最后一页必须包含到当前时间 ${B} 的至少一条行踪，最后一页的 endHour 填当前小时（${I}）或当前小时+1，不要只写到上一小时。` : ""}
2. 分页：每 1～3 小时为一页，可能一小时不止一页。返回 pages 数组。
3. 若某段时间没有按计划进行，必须写出「突发情况」：为什么没按计划、发生了什么。
4. 每个时间点包含：time(HH:MM 24小时制)、location、activity、thought(第一人称)、mood(英文)、mood_emoji、evidence_type、evidence_desc、secret_note(可选)。称呼用户用「${D}」。
5. 返回一个 JSON 对象：{"pages":[{"startHour":...,"endHour":...,"traces":[...]},...]}。不要 Markdown 代码块，只返回 JSON。`;
        try {
          let oe = await cr(
            C,
            {
              messages: [
                { role: "system", content: `你是 ${k.name}。${k.setting}` },
                { role: "user", content: xe },
              ],
              temperature: 0.7,
            },
            {
              addApiLog: h,
              logScene: "trace_update",
              logContactName: (k == null ? void 0 : k.name) || "",
            },
          );
          if (
            !oe ||
            ((oe = (oe || "")
              .trim()
              .replace(/^```(?:json)?\s*/i, "")
              .replace(/\s*```$/i, "")
              .trim()),
            !oe)
          )
            return null;
          const ee = L,
            H = (se) => {
              if (!se || typeof se != "string") return !0;
              const Te = se.trim().split(/[：:]/),
                ke = parseInt(Te[0], 10),
                W = Te.length > 1 ? parseInt(Te[1], 10) : 0;
              return Number.isNaN(ke)
                ? !0
                : ke < I || (ke === I && (Number.isNaN(W) || W <= ee));
            };
          let Y = [];
          try {
            const se = v(oe, "{");
            if (se) {
              const Te = JSON.parse(se),
                ke = Te.pages || Te.Pages;
              if (
                (ke &&
                  Array.isArray(ke) &&
                  (Y = ke.map((W, ue) => {
                    const re =
                        W.endHour ?? (le ? X + (ue + 1) * 2 : (ue + 1) * 2),
                      he = Math.min(Math.max(0, re), I + 1),
                      ge = (Array.isArray(W.traces) ? W.traces : [])
                        .filter((J) => H(J.time))
                        .map((J, G) => ({ ...J, id: `ap${ue}-${G}` }));
                    return {
                      startHour: W.startHour ?? (le ? X + ue * 2 : ue * 2),
                      endHour: he,
                      traces: ge,
                    };
                  })),
                Y.length === 0 &&
                  Array.isArray(Te.traces) &&
                  Te.traces.length > 0)
              ) {
                const W = Te.traces
                  .filter((ue) => H(ue.time))
                  .map((ue, re) => ({ ...ue, id: `ap0-${re}` }));
                W.length > 0 &&
                  (Y = [{ startHour: le ? X : 0, endHour: I + 1, traces: W }]);
              }
            }
          } catch {}
          if (Y.length === 0) {
            const se = v(oe, "[");
            if (se) {
              const Te = JSON.parse(se),
                ke = (Array.isArray(Te) ? Te : [])
                  .filter((W) => H(W.time))
                  .map((W, ue) => ({ ...W, id: `ap0-${ue}` }));
              ke.length > 0 &&
                (Y = [{ startHour: le ? X : 0, endHour: I + 1, traces: ke }]);
            }
          }
          if (
            ((Y = Y.filter((se) => {
              var Te;
              return (
                se.endHour <= I + 1 &&
                ((Te = se.traces) == null ? void 0 : Te.length) > 0
              );
            })),
            Y.length === 0)
          )
            return null;
          le &&
            Y.length > 0 &&
            (Y[Y.length - 1].endHour = Math.max(
              Y[Y.length - 1].endHour,
              I + 1,
            ));
          const U = le ? [...(ne.pages || []), ...Y] : Y,
            ce = { date: T, pages: U };
          await be.set(mm(k.id, T), ce);
          const pe = U.length - 1;
          return (
            d != null &&
              d.current &&
              d.current(A.id, { lastAutoTraceAt: Date.now() }),
            u != null &&
              u.current &&
              (u.current({
                type: "trace_updated",
                contactId: k.id,
                contactName: k.name,
                contactAvatar: k.avatar,
                pageIndex: pe,
              }),
              setTimeout(() => {
                u != null && u.current && u.current(null);
              }, 5e3)),
            pe
          );
        } catch {
          return null;
        }
      },
      N = () => {
        const A = Date.now(),
          k = (n == null ? void 0 : n.current) || [],
          C = (a == null ? void 0 : a.current) || [],
          M = f == null ? void 0 : f.current;
        M &&
          k.forEach((E) => {
            var I, L, B;
            if (
              !((I = E.settings) != null && I.autoTraceEnabled) ||
              !((L = E.settings) != null && L.autoTraceIntervalHours)
            )
              return;
            const S = C.find((F) => F.id === E.contactId);
            if (!S || M.has(E.id)) return;
            const j = (E.settings.autoTraceIntervalHours || 2) * 60 * 60 * 1e3,
              T = ((B = E.settings) == null ? void 0 : B.lastAutoTraceAt) || 0;
            A - T < j ||
              (M.add(E.id),
              b(E, S).finally(() => {
                M.delete(E.id);
              }));
          });
      },
      w = async (A) => {
        const C = ((n == null ? void 0 : n.current) || []).find(
          (P) => P.contactId === A.id,
        );
        if (!C) return !1;
        const M = f == null ? void 0 : f.current;
        if (!M || M.has(C.id)) return !1;
        const E = new Date(),
          S = c1(C),
          j = Sc(E, S),
          T = await be.get(mm(A.id, j), null),
          I = T == null ? void 0 : T.pages;
        if (!(I != null && I.length)) return !1;
        const L = I[I.length - 1],
          { hour: B } = Zm(E, S),
          F = L.endHour ?? B,
          D = Math.min(F, 23);
        if (ZR(E, S, j, D) < 60) return !1;
        M.add(C.id);
        try {
          return (await b(C, A)) != null;
        } finally {
          M.delete(C.id);
        }
      };
    p && (p.current = w);
    const _ = new Worker(
      new URL("/assets/timer.worker-Bhh7lYjB.js", import.meta.url),
      { type: "module" },
    );
    return (
      (_.onmessage = (A) => {
        A.data === "tick" && (y(), N(), m != null && m.current && m.current());
      }),
      _.postMessage("start"),
      () => _.terminate()
    );
  }, []);
}
function gm(t) {
  let s = String(t ?? "").replace(/\D/g, "");
  return (
    s.length >= 14 && s.startsWith("0086")
      ? (s = s.slice(4))
      : s.length >= 13 && s.startsWith("86") && (s = s.slice(2)),
    s
  );
}
function WS(t, s) {
  const n = gm(s);
  if (!n) return null;
  const a = t.find((r) => gm(r.phone) === n);
  return (
    a ||
    (n.length < 7
      ? null
      : t.find((r) => {
          const i = gm(r.phone);
          return i.length > n.length && i.endsWith(n);
        }) || null)
  );
}
function eP(t) {
  const s = String(t ?? "").trim();
  return !s || s === "（译文不可用）" || s === "(译文不可用)"
    ? !1
    : /[\u4e00-\u9fff]/.test(s) || /[\u3040-\u30ff\uac00-\ud7af]/.test(s)
      ? !0
      : !/^[\s0-9.,!?'"’\-—:：;；]*[A-Za-z][\s0-9A-Za-z.,!?'"’\-—:：;；]*$/.test(
          s,
        );
}
function bf(t) {
  const s = String(t ?? "").trim();
  return s
    ? /^原始错误：/m.test(s) ||
        /^说明：接口已响应/.test(s) ||
        /\bEMPTY_BODY\b/.test(s) ||
        /未返回可用正文/.test(s)
    : !0;
}
function YS(t) {
  let s = String(t ?? "").trim();
  return s
    ? ((s = s
        .replace(/^```(?:json)?\s*/i, "")
        .replace(/\s*```$/i, "")
        .trim()),
      s)
    : "";
}
function Nv(t) {
  const s = YS(t);
  if (!s) return null;
  try {
    const n = s.match(/\{[\s\S]*\}/);
    return n ? JSON.parse(n[0]) : null;
  } catch {
    return null;
  }
}
function tP(t) {
  const s = Nv(t);
  if (s && typeof s == "object") {
    const a = s.reply != null ? String(s.reply).trim() : "",
      r = s.summary != null ? String(s.summary).trim() : "";
    if (a || r) return { reply: a, summary: r || null };
  }
  return { reply: String(t ?? "").trim(), summary: null };
}
function sP(t) {
  const s = Nv(t);
  return (
    (s &&
      typeof s == "object" &&
      s.summary != null &&
      String(s.summary).trim()) ||
    null
  );
}
function Jg(t) {
  const s = String(t ?? "").trim() || "用户";
  return `任务：请仅输出一段“事件记录型”的本次视频通话摘要（供后续聊天 AI 读取）。必须第三人称、客观纪实；写清何时由谁发起、通话中发生了什么、双方做了什么、如何挂断（如${s}突然挂断等）。摘要中须用「${s}」指代己方参与者，不要使用泛称「用户」。禁止评价、结论、心理分析；禁止写成实时对白/剧本/旁白演绎。只输出摘要正文。`;
}
function nP(t) {
  return String(t || "")
    .replace(/\[VOICE\]([\s\S]*?)\[\/VOICE\]/gi, (s, n) =>
      String(n || "").trim(),
    )
    .replace(/^\s*\[语音消息\]\s*/gi, "")
    .replace(/^\s*\[VOICE\]\s*/gi, "")
    .trim();
}
function aP(t) {
  let s = String(t ?? "");
  const n = (a) => {
    s = s.replace(a, "");
  };
  return (
    n(/\[[Rr][Ee][Pp][Ll][Yy][\s\S]*?\]/g),
    n(/\[[Oo][Rr][Dd][Ee][Rr]_FOOD[^\]\n\r]*\]/gi),
    n(/\[[Pp][Aa][Yy]_FOR_ME[^\]\n\r]*\]/gi),
    n(/\[[Tt][Rr][Aa][Nn][Ss][Ff][Ee][Rr][^\]\n\r]*\]/gi),
    n(/\[[Pp][Oo][Ss][Tt]_MOMENT[^\]\n\r]*\]/gi),
    n(/\[[Ff][Oo][Rr][Ww][Aa][Rr][Dd]_MOMENT[^\]\n\r]*\]/gi),
    n(/\[[Vv][Ii][Dd][Ee][Oo]_CALL_INVITE[^\]\n\r]*\]/gi),
    n(/\[[Pp][Hh][Oo][Nn][Ee]_CALL_INVITE[^\]\n\r]*\]/gi),
    n(/\[[Mm][Ee][Mm][Ee][^\]\n\r]*\]/gi),
    n(/\[图片内容[：:][^\]\n\r]*\]/gi),
    n(/\[[Cc][Hh][Aa][Nn][Gg][Ee]_(?:AVATAR|SIGNATURE)[^\]\n\r]*\]/gi),
    n(/\[[Aa][Gg][Rr][Ee][Ee]_COUPLE_AVATAR[^\]\n\r]*\]/gi),
    n(/\[[Cc][Oo][Uu][Pp][Ll][Ee]_AVATAR_PROPOSAL[^\]\n\r]*\]/gi),
    n(/\[[Uu][Ss][Ee]_IMAGE_AS_AVATAR\]/gi),
    n(/\[[Dd][Oo][Uu][Yy][Ii][Nn]_ACCEPT_FRIEND\]/gi),
    n(/\[[Ll][Ii][Ss][Tt][Ee][Nn]_CONTROL[^\]\n\r]*\]/gi),
    n(/\[[Hh][Ee][Aa][Rr][Tt]_VOICE[\s\S]*?\[\/[Hh][Ee][Aa][Rr][Tt]_VOICE\]/gi),
    n(/\[[Rr][Ee][Cc][Aa][Ll][^\]\n\r]*\]/gi),
    n(
      /\[[Mm][Oo][Mm][Ee][Nn][Tt]_NPC_COMMENTS_JSON\][\s\S]*?\[\/[Mm][Oo][Mm][Ee][Nn][Tt]_NPC_COMMENTS_END\]/gi,
    ),
    s
      .replace(/[ \t]{2,}/g, " ")
      .replace(
        /\n{3,}/g,
        `

`,
      )
      .trim()
  );
}
const rP = 4500,
  iP = (t, s) =>
    Promise.race([
      Promise.resolve(t),
      new Promise((n, a) =>
        setTimeout(() => a(new Error("PHONE_TTS_TIMEOUT")), s),
      ),
    ]);
function oP(t, s) {
  const n = Nv(t);
  if (!n || typeof n != "object")
    return { ok: !1, error: "响应中未找到有效 JSON" };
  if (!(n.answer !== !1 && n.answer !== "false"))
    return {
      ok: !0,
      answer: !1,
      reason:
        typeof n.reason == "string" && n.reason.trim()
          ? n.reason.trim()
          : "对方忙线中",
      activity:
        typeof n.activity == "string" && n.activity.trim()
          ? n.activity.trim()
          : "忙碌中",
    };
  let r = "";
  return (
    s && n.openingEnvelope != null && typeof n.openingEnvelope == "object"
      ? (r = JSON.stringify(n.openingEnvelope))
      : typeof n.opening == "string" && n.opening.trim()
        ? (r = n.opening.trim())
        : typeof n.reply == "string" && n.reply.trim() && (r = n.reply.trim()),
    r
      ? { ok: !0, answer: !0, replyRaw: r }
      : { ok: !1, error: "已接听但未返回 opening 或 openingEnvelope" }
  );
}
const lP = { outgoing: "去电", incoming: "来电", missed: "未接来电" };
function lj({
  chat: t,
  contact: s,
  effectiveUser: n,
  user: a,
  callMessages: r,
  startTime: i,
  durationSec: o,
  phoneCallType: c,
  callOrigin: d,
  revisionNote: u,
}) {
  const f = d === "inbound_blocked_invite",
    p = d === "inbound_proactive_invite",
    m = f
      ? [
          {
            sender: "system",
            type: "system",
            text: "[通话背景（内化，勿复述）：你在聊天软件里被该用户拉黑，文字消息对方往往看不到；以下为**语音电话**转录与挂断后任务。]",
          },
        ]
      : [],
    h =
      !f && p
        ? [
            {
              sender: "system",
              type: "system",
              text: "[通话背景（内化）：本次为**你主动拨出**、对方已接听的语音通话。]",
            },
          ]
        : [],
    g = ((t == null ? void 0 : t.messages) || [])
      .filter((S) => S.type === "text" || !S.type)
      .slice(-20)
      .map((S) => ({
        sender: S.sender,
        text: typeof S.text == "string" ? S.text : "",
        type: S.type || "text",
      })),
    x = (r || []).map((S) => ({
      sender: S.sender,
      text: String(S.text || ""),
      type: "text",
    })),
    y =
      (s == null ? void 0 : s.remark) ||
      (s == null ? void 0 : s.nickname) ||
      (s == null ? void 0 : s.name) ||
      "对方",
    v =
      (n == null ? void 0 : n.realName) ||
      (n == null ? void 0 : n.name) ||
      (a == null ? void 0 : a.realName) ||
      (a == null ? void 0 : a.name) ||
      "用户",
    b = new Date(i).toLocaleString("zh-CN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: !1,
    }),
    N = Math.max(0, Math.floor(o / 60)),
    w = Math.max(0, o % 60),
    _ = `${N}:${String(w).padStart(2, "0")}`,
    A = lP[c] || c || "语音通话";
  let k = "";
  d === "inbound_blocked_invite"
    ? (k = "（场景：拉黑后·角色主动语音）")
    : d === "inbound_proactive_invite" && (k = "（场景：角色主动语音来电）");
  const C = {
      sender: "system",
      type: "system",
      text: `[系统记录] 语音通话${k}。开始时间：${b}；时长：${_}（${o} 秒）；类型：${A}。参与方：${v}（用户）与 ${y}（对方角色）。`,
    },
    M = [...m, ...h, ...g, ...x, C],
    E = u != null ? String(u).trim() : "";
  return (
    E &&
      M.push({
        sender: "me",
        type: "text",
        text: `[${v}对摘要的修改说明或参考草稿]
${E}`,
      }),
    M
  );
}
function cP(t) {
  if (!t) return "";
  const s = t.type;
  return s === "transfer"
    ? `[转账] ¥${t.amount ?? ""}`
    : s === "red_packet"
      ? "[红包]"
      : s === "poll"
        ? "[投票]"
        : s === "relay"
          ? "[接龙]"
          : s === "food_delivery"
            ? "[外卖]"
            : s === "moment"
              ? "[转发朋友圈]"
              : s === "meme"
                ? "[表情包]"
                : s === "voice"
                  ? "[语音]"
                  : s === "image" || s === "text_image"
                    ? "[图片]"
                    : s === "pay_for_me"
                      ? "[代付]"
                      : String(t.text || "").trim() || "系统消息";
}
const dP = (t, s, n, a, r, i, o, c, d, u, f, p, m, h, g, x, y, v) => {
  const [b, N] = l.useState({
      status: "idle",
      contactId: null,
      chatId: null,
      isGroup: !1,
      startTime: null,
      isInitiator: !1,
      isMinimized: !1,
      isTyping: !1,
      currentMessages: [],
      acceptedMembers: [],
      rejectedMembers: [],
      playbackQueue: [],
      groupVideoChatSnapshotLen: null,
      groupVideoPendingJoin: null,
    }),
    w = l.useRef(b);
  l.useEffect(() => {
    w.current = b;
  }, [b]);
  const _ = l.useRef(null);
  l.useEffect(() => {
    const ge = b == null ? void 0 : b.status,
      J = b == null ? void 0 : b.isGroup;
    (ge !== "outgoing" || !J) &&
      _.current &&
      (clearTimeout(_.current), (_.current = null));
  }, [
    b == null ? void 0 : b.status,
    b == null ? void 0 : b.isGroup,
    b == null ? void 0 : b.chatId,
  ]);
  const [A, k] = l.useState({
      status: "idle",
      contactId: null,
      phoneNumber: "",
      startTime: null,
      rejectionReason: null,
      rejectionActivity: null,
      currentMessages: [],
      apiError: null,
      callOrigin: null,
    }),
    [C, M] = l.useState([]),
    [E, S] = l.useState(!1);
  (l.useEffect(() => {
    (async () => {
      const J = await be.get("chat_app_phone_recents");
      (J != null && M(J), S(!0));
    })();
  }, []),
    l.useEffect(() => {
      E && be.set("chat_app_phone_recents", C);
    }, [C, E]));
  const j = l.useRef([]);
  l.useEffect(() => {
    j.current = C;
  }, [C]);
  const T = l.useRef(A);
  l.useEffect(() => {
    T.current = A;
  }, [A]);
  const I = l.useRef(Promise.resolve()),
    L = l.useRef(null),
    B = (ge) => {
      const G = I.current.catch(() => {}).then(() => ge());
      return ((I.current = G), G);
    },
    F = async (ge, J) => {
      const G = s.find((Pe) => Pe.id === ge);
      if (!G || T.current.status !== "connected") return null;
      const we = n.find((Pe) => Pe.contactId === G.id),
        Q = (we == null ? void 0 : we.settings) || {},
        ve = (Q == null ? void 0 : Q.translationEnabled) === !0;
      let Ve = String(J || "");
      if (Q != null && Q.structuredReplyEnabled) {
        const { replyText: Pe } = OS({
          rawReply: Ve,
          settingsWithData: Q,
          scene: "phone_call",
          normalizeDraftFieldToString: to,
        });
        Pe && String(Pe).trim() && (Ve = Pe);
      }
      const Ae = aP(nP(Ve));
      if (bf(Ae) || !String(Ae || "").trim())
        return (
          k((Pe) => ({
            ...Pe,
            apiError: String(Ae || J || "").trim() || "模型未返回有效内容",
          })),
          null
        );
      if (T.current.status !== "connected") return (u(), null);
      const te = (Pe) =>
        (Pe || "")
          .replace(/[\[［][Mm][Ee][Mm][Ee][：:\s]*[^\]］]*[\]］]/g, "")
          .trim();
      let Se = te(Ae);
      const Fe = (Pe) =>
          String(Pe || "")
            .replace(
              /\r\n/g,
              `
`,
            )
            .replace(
              /\r/g,
              `
`,
            )
            .trim(),
        $e = Se.split(/\s*\|\s*\|\s*|｜｜/)
          .map((Pe) => te(Fe(Pe)))
          .filter(Boolean);
      if ($e.length === 0)
        return (
          k((Pe) => ({
            ...Pe,
            apiError: "模型未返回可播报的短句（需 || 分条或合法结构化 JSON）",
          })),
          null
        );
      const tt = (Pe) => {
          const ut = String(Pe || "");
          if (!ve) return { text: Fe(ut), translation: null };
          const _t = ut.match(
            /^([\s\S]*?)(?:\s*\[(?:TRANS|TRANSLATION)[：:]\s*([^\]]+)\]\s*)$/i,
          );
          if (!_t) return { text: Fe(ut), translation: null };
          const Ee = String(_t[1] || "").trim();
          let fe = String(_t[2] || "").trim();
          return (
            (fe = fe
              .replace(
                /\r\n/g,
                `
`,
              )
              .replace(
                /\r/g,
                `
`,
              )),
            !fe || fe === "（译文不可用）" || fe === "(译文不可用)"
              ? { text: Ee || Fe(ut), translation: null }
              : eP(fe)
                ? { text: Ee, translation: fe }
                : { text: Ee || Fe(ut), translation: null }
          );
        },
        Xe =
          (G == null ? void 0 : G.ttsVoiceId) ||
          (Q == null ? void 0 : Q.voiceId) ||
          (Q == null ? void 0 : Q.ttsVoiceId),
        ht = {
          voiceId: Xe,
          speed:
            (G == null ? void 0 : G.ttsSpeed) ??
            (Q == null ? void 0 : Q.speed) ??
            1,
          pitch:
            (G == null ? void 0 : G.ttsPitch) ??
            (Q == null ? void 0 : Q.pitch) ??
            0,
          groupId: Q == null ? void 0 : Q.minimaxGroupId,
          minimaxModel: Q == null ? void 0 : Q.minimaxModel,
        };
      for (let Pe = 0; Pe < $e.length; Pe++) {
        if (T.current.status !== "connected") {
          u();
          break;
        }
        const { text: ut, translation: _t } = tt($e[Pe]),
          Ee = { sender: "them", text: ut, translation: _t };
        if (
          (k((fe) => ({ ...fe, currentMessages: [...fe.currentMessages, Ee] })),
          ut && Xe)
        )
          try {
            await iP(d(ut, ht), rP);
          } catch {}
      }
      return null;
    },
    D = async (ge, J, G = !1, we = {}) =>
      B(async () => {
        const {
            skipAppendUser: Q = !1,
            blockedWhileCalling: ve = !1,
            extraBlockedInviteSystemOnce: Ve,
          } = we,
          Ae = s.find((at) => at.id === ge);
        if (!Ae || T.current.status !== "connected") return null;
        ((L.current = {
          contactId: ge,
          text: J,
          isSystemTrigger: G,
          options: {
            skipAppendUser: Q,
            blockedWhileCalling: ve,
            extraBlockedInviteSystemOnce: Ve,
          },
        }),
          k((at) => ({ ...at, apiError: null })));
        const te = ve || T.current.callOrigin === "inbound_blocked_invite",
          Se = T.current.callOrigin === "inbound_proactive_invite",
          Fe = r(Ae);
        !G &&
          !Q &&
          k((at) => ({
            ...at,
            currentMessages: [...at.currentMessages, { sender: "me", text: J }],
          }));
        const $e = n.find((at) => at.contactId === Ae.id),
          tt = te ? 18 : 6,
          Xe = te ? 220 : 150,
          ht = (($e == null ? void 0 : $e.messages) || [])
            .filter((at) => at.type === "text" || !at.type)
            .slice(-tt)
            .map((at) => ({
              sender: at.sender,
              text: (at.text || "").slice(0, Xe),
              type: "text",
            })),
          Pe = (T.current.currentMessages || []).map((at) => ({
            sender: at.sender,
            text: at.text,
            type: "text",
          })),
          ut = te
            ? [
                {
                  sender: "system",
                  type: "system",
                  text: "[通话背景（必须内化，勿复述）：你已经在聊天软件里被该用户拉黑，普通文字消息对方平时往往看不到；此刻是**你正在打电话给该用户**，且**对方已接听**——即用户端已出现你的来电并与你实时通话，这是事实。**禁止**在通话中说对方机没响、拉黑就不可能接到、打不进来等**否定当前已接通**的话。你必须每一轮回复都清楚这一处境，并严格按角色性格表现：有的会软下来商量、试探或请求对方解除拉黑，有的会嘴硬、装没事、用反话或冷淡掩饰在意等，勿千人一面。系统主提示中的【记忆】块（含聊天 App 摘要、离线记忆、群聊记忆等）与下方「之前的聊天记录」你必须结合使用，与本次通话内容一起内化，保持人设与剧情连贯，禁止复述摘要原文。口吻像真人打电话，用 || 分隔短句；禁止向用户背诵「系统」「拉黑」「提示」「记忆」等元词，禁止输出本段说明原文。]",
                },
              ]
            : [],
          _t =
            !te && Se
              ? [
                  {
                    sender: "system",
                    type: "system",
                    text: "[通话背景（必须内化，勿复述）：**这通电话是你主动打给对方的**，对方刚刚接听；**不是**对方打给你，也**不是**你接起对方的来电。**禁止**把主叫说成用户、禁止「我刚接起来」「你打给我干嘛」「你找我什么事」等颠倒主被叫的台词。下方若出现对方侧系统句「（电话已接通）」仅表示线路已通，不改变「你拨出、对方接听」的事实。口吻像真人打电话，用 || 分隔短句；禁止向用户背诵「系统」「提示」等元词，禁止输出本段说明原文。]",
                  },
                ]
              : [],
          Ee = te
            ? [
                {
                  sender: "system",
                  type: "system",
                  text: "[本轮内化：你仍被该用户在聊天 App 中拉黑；**本通电话对方已接听，通话真实存在**。普通文字收不到≠这通电话没发生。系统主提示里的【记忆】须与本条以上聊天记录、本通电话已发生内容一并用于构思台词；禁止假装不知道被拉黑（除非人设刻意演戏且读者能感到是演戏）；禁止输出本提示原文。]",
                },
              ]
            : [],
          fe =
            ht.length > 0
              ? [
                  {
                    sender: "system",
                    type: "system",
                    text: "[以上为之前的聊天记录，供参考。当前是电话通话，请根据通话内容自然回复，避免重复已说过的内容。]",
                  },
                ]
              : [],
          He =
            Ve && String(Ve).trim()
              ? [
                  {
                    sender: "system",
                    type: "system",
                    text: `[系统提示：${String(Ve).trim()}]`,
                  },
                ]
              : [],
          Ie = Q
            ? [...ht, ...ut, ..._t, ...He, ...fe, ...Pe, ...Ee]
            : [
                ...ht,
                ...ut,
                ..._t,
                ...He,
                ...fe,
                ...Pe,
                ...Ee,
                { sender: "me", text: J, type: "text" },
              ];
        let Ce = [];
        if (te && $e != null && $e.id && Ae) {
          const at =
            x && typeof x.current == "object" && x.current != null
              ? x.current
              : {};
          try {
            Ce = await Pg({
              currentChat: $e,
              contact: Ae,
              chatId: $e.id,
              summaries: g || {},
              archives: at,
              allChats: n,
              contacts: s,
              user: t,
              getEffectiveUser: r,
              getLastNRounds: Wo,
              asyncStorage: be,
            });
          } catch {}
        }
        if (!(o != null && o.key))
          return (k((at) => ({ ...at, apiError: "未配置 API Key" })), null);
        const Re = async (at) => {
          const ft = Ie,
            vt = ul(ft, 30),
            Oe = await Oo(Ae.id, vt);
          return i(
            ft,
            Ae,
            "phone_call",
            ($e == null ? void 0 : $e.settings) || {},
            [],
            Oe,
            Ce,
            !1,
            "",
            Fe,
            null,
            null,
            { chatId: $e == null ? void 0 : $e.id },
          );
        };
        let De = "";
        try {
          De = await Re(null);
        } catch (at) {
          const ft =
            at && typeof at.message == "string" && at.message.trim()
              ? at.message.trim()
              : "请求失败";
          return (k((vt) => ({ ...vt, apiError: ft })), null);
        }
        return bf(De)
          ? (k((at) => ({ ...at, apiError: String(De).trim() })), null)
          : (await F(ge, De), null);
      }),
    $ = (ge) => {
      ge &&
        setTimeout(() => {
          (async () => {
            if (
              !(T.current.status !== "connected" || T.current.contactId !== ge)
            )
              try {
                await D(ge, "（电话已接通）", !0);
              } catch {}
          })();
        }, 1e3);
    },
    P = (ge) => {
      ge &&
        setTimeout(() => {
          (async () => {
            if (
              !(T.current.status !== "connected" || T.current.contactId !== ge)
            )
              try {
                await D(ge, "（电话已接通）", !0, {
                  blockedWhileCalling: !0,
                  extraBlockedInviteSystemOnce:
                    "首轮：只做一整段连续电话回复，用 || 连接 6～12 条口语短句，从接电话的第一反应自然说到情绪与想说的话；禁止写成两次不相关开场、禁止重复寒暄套话。处境与性格要求见上文系统背景，禁止复述系统说明。",
                });
              } catch {}
          })();
        }, 1e3);
    },
    z = () => {
      u();
      const ge = T.current.contactId;
      if (!ge || T.current.status !== "connected") return !1;
      const J = T.current.currentMessages || [];
      let G = 0;
      for (let Q = J.length - 1; Q >= 0 && J[Q].sender === "them"; Q--) G += 1;
      if (G === 0) return (alert("只能重新生成 AI 的回复"), !1);
      const we = J.slice(0, J.length - G);
      return (
        k((Q) => ({ ...Q, currentMessages: we })),
        setTimeout(() => {
          var ve;
          if (T.current.status !== "connected") return;
          const Q = T.current.currentMessages || [];
          Q.length === 0
            ? D(ge, "（电话已接通）", !0)
            : ((ve = Q[Q.length - 1]) == null ? void 0 : ve.sender) === "me" &&
              D(ge, Q[Q.length - 1].text, !1, { skipAppendUser: !0 });
        }, 100),
        !0
      );
    },
    O = () => {
      const ge = L.current;
      !(ge != null && ge.contactId) ||
        T.current.status !== "connected" ||
        (k((J) => ({ ...J, apiError: null })),
        D(ge.contactId, ge.text, ge.isSystemTrigger, ge.options || {}));
    },
    Z = async (ge) => {
      try {
        Y5();
      } catch {}
      const J = String(ge ?? "").trim();
      if (!gm(J)) return;
      const G = WS(s, J),
        we = (G == null ? void 0 : G.phone) || J;
      if (
        (k({
          status: "dialing",
          contactId: G ? G.id : null,
          phoneNumber: we,
          startTime: null,
          rejectionReason: null,
          rejectionActivity: null,
          currentMessages: [],
          apiError: null,
          callOrigin: null,
        }),
        !G)
      ) {
        setTimeout(() => {
          (k((Q) => ({ ...Q, status: "ending" })),
            setTimeout(() => {
              k((Q) => ({ ...Q, status: "idle", apiError: null }));
            }, 2e3));
        }, 3e3);
        return;
      }
      try {
        const Q = r(G),
          ve = n.find((Pe) => Pe.contactId === G.id),
          Ve = (ve == null ? void 0 : ve.settings) || {},
          te = [
            ...(ve
              ? ve.messages
                  .slice(-10)
                  .map((Pe) => ({ sender: Pe.sender, text: Pe.text }))
              : []),
            {
              sender: "system",
              text: `[系统通知] ${Q.name || t.name} 正在给你打电话。`,
              type: "system",
            },
          ];
        if (!(o != null && o.key)) throw new Error("NO_API_KEY");
        const Se = ul(te, 30),
          Fe = await Oo(G.id, Se),
          $e = await i(
            te,
            G,
            "phone_call_outgoing_combined",
            Ve,
            [],
            Fe,
            [],
            !1,
            "",
            Q,
            null,
            null,
            { chatId: ve == null ? void 0 : ve.id },
          ),
          tt = typeof $e == "string" ? $e : $e == null ? "" : String($e);
        if (bf($e)) {
          k((Pe) => ({
            ...Pe,
            status: "dialing",
            apiError: String($e).trim(),
          }));
          return;
        }
        const Xe = oP(tt, !!Ve.structuredReplyEnabled);
        if (!Xe.ok) {
          k((Pe) => ({
            ...Pe,
            status: "dialing",
            apiError: Xe.error || "解析失败",
          }));
          return;
        }
        if (!Xe.answer) {
          k((Pe) => ({
            ...Pe,
            status: "rejected",
            rejectionReason: Xe.reason || "对方忙线中",
            rejectionActivity: Xe.activity || "忙碌中",
            apiError: null,
          }));
          return;
        }
        f == null || f();
        const ht = Date.now();
        ((T.current = {
          ...T.current,
          status: "connected",
          startTime: ht,
          apiError: null,
        }),
          k((Pe) => ({
            ...Pe,
            status: "connected",
            startTime: ht,
            apiError: null,
          })),
          B(async () => {
            ((L.current = {
              contactId: G.id,
              text: "（电话已接通）",
              isSystemTrigger: !0,
              options: {},
            }),
              k((Pe) => {
                const ut = { ...Pe, apiError: null };
                return ((T.current = ut), ut);
              }),
              await F(G.id, Xe.replyRaw));
          }));
      } catch (Q) {
        const ve =
            Q && typeof Q.message == "string" && Q.message.trim()
              ? Q.message.trim()
              : "请求失败",
          Ve = ve === "NO_API_KEY" ? "未配置 API Key" : ve;
        k((Ae) => ({ ...Ae, status: "dialing", apiError: Ve }));
      }
    },
    K = async ({
      recordId: ge,
      chatId: J,
      contactId: G,
      callMessages: we,
      startTime: Q,
      durationSec: ve,
      phoneCallType: Ve,
      callOrigin: Ae,
    }) => {
      var Xe;
      const te = s.find((ht) => ht.id === G),
        Se = (Xe = y.current) == null ? void 0 : Xe.find((ht) => ht.id === J);
      if (!te || !Se || !(o != null && o.key)) return;
      const Fe = r(te),
        $e = lj({
          chat: Se,
          contact: te,
          effectiveUser: Fe,
          user: t,
          callMessages: we,
          startTime: Q,
          durationSec: ve,
          phoneCallType: Ve,
          callOrigin: Ae,
          revisionNote: "",
        });
      let tt = [];
      if (Ae === "inbound_blocked_invite" && Se.id) {
        const ht =
          x && typeof x.current == "object" && x.current != null
            ? x.current
            : {};
        try {
          tt = await Pg({
            currentChat: Se,
            contact: te,
            chatId: Se.id,
            summaries: g || {},
            archives: ht,
            allChats: y.current || [],
            contacts: s,
            user: t,
            getEffectiveUser: r,
            getLastNRounds: Wo,
            asyncStorage: be,
          });
        } catch {}
      }
      a((ht) => ht.map((Pe) => (Pe.id === J ? { ...Pe, isTyping: !0 } : Pe)));
      try {
        const ht = ul($e, 30),
          Pe = await Oo(te.id, ht),
          ut = await i(
            $e,
            te,
            "phone_call_end_summary",
            Se.settings || {},
            tt,
            Pe,
            [],
            !1,
            "",
            Fe,
          );
        if (bf(ut)) return;
        const { reply: _t, summary: Ee } = tP(ut);
        (_t && h(J, _t),
          Ee &&
            M((fe) =>
              fe.map((He) =>
                He.id === ge ? { ...He, summary: Ee, bindToChat: !0 } : He,
              ),
            ));
      } catch {
      } finally {
        a((ht) => ht.map((Pe) => (Pe.id === J ? { ...Pe, isTyping: !1 } : Pe)));
      }
    },
    q = async (ge, J) => {
      var ht;
      const G = j.current.find((Pe) => Pe.id === ge);
      if (!(G != null && G.contactId)) throw new Error("通话记录不存在");
      if (!Array.isArray(G.messages) || G.messages.length === 0)
        throw new Error("该通话没有可总结内容");
      const we = s.find((Pe) => Pe.id === G.contactId);
      if (!we) throw new Error("联系人不存在");
      const Q =
        (ht = y.current) == null
          ? void 0
          : ht.find((Pe) => !Pe.isGroup && Pe.contactId === G.contactId);