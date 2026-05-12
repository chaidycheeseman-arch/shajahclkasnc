              return;
            }
            const L = URL.createObjectURL(I),
              B = new Audio(L);
            ((B.loop = !0),
              (_.current = { intervalId: null, audio: B, objectUrl: L }),
              B.play().catch(() => {}));
          } catch {
            (Pd(),
              (_.current.intervalId = window.setInterval(() => {
                Pd();
              }, 3200)));
          }
          return;
        }
        (Pd(),
          (_.current.intervalId = window.setInterval(() => {
            Pd();
          }, 3200)));
      }, [c, x, A]),
      C = l.useCallback(
        async (T) => {
          if (!c) return;
          const I = T === "send" ? u : T === "click" ? h : p;
          if (!I || I === "default") {
            qg(T);
            return;
          }
          try {
            const L = await Ec(I);
            if (L) {
              const B = URL.createObjectURL(L),
                F = new Audio(B);
              ((F.onended = () => URL.revokeObjectURL(B)), await F.play());
            } else qg(T);
          } catch {
            qg(T);
          }
        },
        [c, u, p, h],
      ),
      M = async () => {
        "Notification" in window &&
          Notification.permission === "default" &&
          (await Notification.requestPermission());
      },
      E = async (T, I, L) => {
        if (!("Notification" in window)) return;
        const B = async () => {
          try {
            if ("serviceWorker" in navigator)
              try {
                let D = await navigator.serviceWorker.getRegistration();
                if (D && D.showNotification) {
                  await D.showNotification(T, {
                    body: I,
                    icon: L || "/ovo.jpg",
                    badge: "/ovo.jpg",
                    silent: !1,
                    vibrate: [200, 100, 200],
                    tag: "chat-msg",
                    renotify: !0,
                    data: { url: window.location.href },
                  });
                  return;
                }
              } catch {}
            const F = new Notification(T, {
              body: I,
              icon: L || "/ovo.jpg",
              silent: !1,
            });
            F.onclick = () => {
              (window.focus(), F.close());
            };
          } catch {}
        };
        if (Notification.permission === "granted") await B();
        else if (Notification.permission !== "denied")
          try {
            (await Notification.requestPermission()) === "granted" &&
              (await B());
          } catch {}
      },
      S = async (T) => {
        if (T) {
          if (!("Notification" in window)) {
            alert(
              "当前浏览器不支持系统通知。如果是 iOS 设备，请先将本网页「添加到主屏幕」后再试。",
            );
            return;
          }
          const I =
              /iPad|iPhone|iPod/.test(navigator.userAgent) ||
              (navigator.platform === "MacIntel" &&
                navigator.maxTouchPoints > 1),
            L =
              window.matchMedia("(display-mode: standalone)").matches ||
              window.navigator.standalone;
          if (I && !L) {
            (alert(
              "在 iOS 上使用通知功能，请先点击浏览器的分享按钮，选择「添加到主屏幕」，然后从主屏幕打开应用。",
            ),
              r(!1),
              be.set("chat_app_system_notification", !1));
            return;
          }
          if (Notification.permission === "denied") {
            (alert("系统通知权限已被拒绝，请在浏览器设置中手动开启"),
              r(!1),
              be.set("chat_app_system_notification", !1));
            return;
          }
          if (Notification.permission === "default")
            try {
              if ((await Notification.requestPermission()) !== "granted") {
                (r(!1), be.set("chat_app_system_notification", !1));
                return;
              }
            } catch {
              (alert(
                "请求通知权限失败。如果是 iOS 设备，请确保已添加到主屏幕。",
              ),
                r(!1),
                be.set("chat_app_system_notification", !1));
              return;
            }
        }
        (r(T),
          be.set("chat_app_system_notification", T),
          T && E("通知已开启", "你将收到新消息的系统通知", "/pwa-192x192.png"));
      };
    return (
      l.useEffect(() => {
        a && M();
      }, [a]),
      {
        notification: t,
        setNotification: s,
        notificationTimerRef: n,
        systemNotificationEnabled: a,
        toggleSystemNotification: S,
        sendSystemNotification: E,
        notificationStrategy: i,
        setNotificationStrategy: o,
        closeNotification: () => s(null),
        soundEnabled: c,
        setSoundEnabled: d,
        sendSoundKey: u,
        setSendSoundKey: f,
        receiveSoundKey: p,
        setReceiveSoundKey: m,
        clickSoundKey: h,
        setClickSoundKey: g,
        clickGlowEnabled: v,
        setClickGlowEnabled: b,
        clickGlowAsset: N,
        setClickGlowAsset: w,
        playSound: C,
        blockedInviteRingtoneKey: x,
        setBlockedInviteRingtoneKey: y,
        startBlockedInviteRing: k,
        stopBlockedInviteRing: A,
      }
    );
  },
  Au = "speech-2.8-turbo",
  Qg = [
    { value: "speech-2.8-hd", label: "Speech 2.8 HD（高音质）" },
    { value: "speech-2.8-turbo", label: "Speech 2.8 Turbo（低延迟）" },
    { value: "speech-2.6-hd", label: "Speech 2.6 HD" },
    { value: "speech-2.6-turbo", label: "Speech 2.6 Turbo" },
    { value: "speech-02-hd", label: "Speech 02 HD" },
    { value: "speech-02-turbo", label: "Speech 02 Turbo" },
    { value: "speech-01", label: "语音-01（旧版，HTTP 流式接口）" },
    { value: "speech-01-turbo", label: "语音-01 Turbo（旧版）" },
    { value: "speech-01-turbo-240228", label: "语音-01 Turbo 240228（旧版）" },
  ];
function Od(t) {
  return (
    String(t || "")
      .trim()
      .toLowerCase() !== "speech-01"
  );
}
function Sv(t) {
  const s = String(t || "").trim();
  return !s || Qg.some((n) => n.value === s)
    ? Qg
    : [{ value: s, label: `${s}（当前已保存）` }, ...Qg];
}
function mj(t) {
  return new Promise((s) => setTimeout(s, t));
}
function _P(t) {
  const s = String((t == null ? void 0 : t.message) || t || "");
  return !!(
    (t == null ? void 0 : t.name) === "AbortError" ||
    (t == null ? void 0 : t.name) === "TypeError" ||
    /failed to fetch|networkerror|load failed|network/i.test(s)
  );
}
async function AP(t, s, n) {
  const a = new AbortController(),
    r = setTimeout(() => a.abort(), n);
  try {
    return await fetch(t, { ...s, signal: a.signal });
  } finally {
    clearTimeout(r);
  }
}
async function ax(
  t,
  s,
  { timeoutMs: n, retries: a = 2, retryDelayMs: r = 650 } = {},
) {
  let i = null;
  for (let o = 0; o <= a; o++)
    try {
      const c = await AP(t, s, n);
      if (c.status >= 500 && c.status <= 599 && o < a) {
        await mj(r * Math.pow(1.6, o));
        continue;
      }
      return c;
    } catch (c) {
      if (((i = c), !(_P(c) && o < a))) throw c;
      await mj(r * Math.pow(1.6, o));
    }
  throw i || new Error("fetch failed");
}
function CP(t, s = 2800) {
  return new Promise((n) => {
    if (!t) {
      n();
      return;
    }
    if (t.readyState >= 3) {
      n();
      return;
    }
    let a = !1;
    const r = () => {
        a ||
          ((a = !0),
          clearTimeout(i),
          t.removeEventListener("canplay", o),
          t.removeEventListener("error", c),
          n());
      },
      i = setTimeout(r, s),
      o = () => r(),
      c = () => r();
    (t.addEventListener("canplay", o, { once: !0 }),
      t.addEventListener("error", c, { once: !0 }));
  });
}
const MP = (t) => {
    const [s, n] = l.useState([]),
      [a, r] = l.useState(!1),
      [i, o] = l.useState(null),
      [c, d] = l.useState(!1),
      [u, f] = l.useState([]),
      [p, m] = l.useState([]),
      h = l.useRef(null),
      g = l.useRef(null),
      x = l.useRef(null),
      y = () => {
        if (typeof document > "u") return new Audio();
        let A = g.current;
        if (!A) {
          ((A = new Audio()),
            A.setAttribute("playsinline", "true"),
            A.setAttribute("webkit-playsinline", "true"));
          try {
            A.playsInline = !0;
          } catch {}
          ((A.preload = "auto"),
            (A.muted = !1),
            Object.assign(A.style, {
              position: "fixed",
              width: "1px",
              height: "1px",
              opacity: "0",
              pointerEvents: "none",
              left: "-9999px",
              top: "0",
            }));
          try {
            (document.body || document.documentElement).appendChild(A);
          } catch {}
          g.current = A;
        }
        return A;
      },
      v = async () => {
        var A;
        if (!t) {
          alert("TTS 配置未找到");
          return;
        }
        d(!0);
        try {
          if (t.provider === "elevenlabs") {
            if (!((A = t.elevenlabs) != null && A.key)) {
              alert("请先在设置中配置 ElevenLabs API Key");
              return;
            }
            const C = !1 ? "/api/elevenlabs" : "https://api.elevenlabs.io",
              M = await fetch(`${C}/v1/voices`, {
                headers: { "xi-api-key": t.elevenlabs.key.trim() },
              });
            if (!M.ok) throw new Error(`Failed to fetch voices: ${M.status}`);
            const E = await M.json();
            E.voices &&
              f(E.voices.map((T) => ({ id: T.voice_id, name: T.name })));
            const S = await fetch(`${C}/v1/models`, {
              headers: { "xi-api-key": t.elevenlabs.key.trim() },
            });
            if (!S.ok) throw new Error(`Failed to fetch models: ${S.status}`);
            const j = await S.json();
            (Array.isArray(j) && m(j), alert("声音和模型列表已更新"));
          } else
            t.provider === "minimax"
              ? (f([
                  { id: "male-qn-qingse", name: "青涩青年" },
                  { id: "male-qn-jingying", name: "精英青年" },
                  { id: "female-shaonv", name: "少女" },
                  { id: "female-yujie", name: "御姐" },
                  { id: "presenter_male", name: "男主持人" },
                  { id: "presenter_female", name: "女主持人" },
                  { id: "audiobook_male_1", name: "有声书男声" },
                  { id: "audiobook_female_1", name: "有声书女声" },
                ]),
                alert("MiniMax 预设声音列表已加载"))
              : alert(`未知的 TTS 提供商: ${t.provider}`);
        } catch (k) {
          alert(`拉取失败: ${k.message}`);
        } finally {
          d(!1);
        }
      },
      b = () => {
        (h.current && (h.current.pause(), (h.current = null)),
          r(!1),
          o(null),
          x.current && (x.current(), (x.current = null)));
      };
    return {
      ttsLogs: s,
      clearTtsLogs: () => n([]),
      isPlaying: a,
      playingMessageId: i,
      isFetchingVoices: c,
      voices: u,
      models: p,
      fetchVoices: v,
      playTTS: async (A, k = {}) => {
        var j;
        let C = A;
        if (
          !k.audioUrl &&
          (!A || ((C = A.replace(/[\(（][^\)）]*[\)）]/g, "").trim()), !C))
        )
          return Promise.resolve(null);
        const M = Date.now().toString(),
          E = {
            id: M,
            timestamp: Date.now(),
            text: C,
            provider: t == null ? void 0 : t.provider,
            status: "pending",
            options: k,
          };
        if ((n((T) => [E, ...T].slice(0, 50)), k.onlyGetUrl))
          try {
            let T = null;
            if (t.provider === "elevenlabs") {
              const { key: I, voiceId: L, model: B } = t.elevenlabs || {},
                F = k.voiceId || L;
              if (!I) throw new Error("ElevenLabs API Key missing");
              if (!F) throw new Error("ElevenLabs Voice ID missing");
              const D = k.modelId || B || "eleven_multilingual_v2",
                $ = k.stability !== void 0 ? k.stability : 0.5,
                P = k.similarityBoost !== void 0 ? k.similarityBoost : 0.75,
                z = k.style !== void 0 ? k.style : 0,
                O = k.useSpeakerBoost !== void 0 ? k.useSpeakerBoost : !0,
                q = `${!1 ? "/api/elevenlabs" : "https://api.elevenlabs.io"}/v1/text-to-speech/${F.trim()}`,
                V = {
                  text: C,
                  model_id: D,
                  voice_settings: {
                    stability: $,
                    similarity_boost: P,
                    style: z,
                    use_speaker_boost: O,
                  },
                },
                ne = await fetch(q, {
                  method: "POST",
                  headers: {
                    "xi-api-key": I.trim(),
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(V),
                });
              if (!ne.ok) throw new Error("ElevenLabs API failed");
              const le = await ne.blob();
              (k.saveId && bc(k.saveId, le), (T = URL.createObjectURL(le)));
            } else if (t.provider === "minimax") {
              const { apiKey: I } = t.minimax || {},
                L = k.groupId || ((j = t.minimax) == null ? void 0 : j.groupId),
                B = k.minimaxModel || Au;
              if (!L || !I)
                throw new Error("MiniMax config missing (GroupId or ApiKey)");
              const F = "/api/minimax",
                D = "https://api.minimax.chat";
              let $ = `${F}/v1/text_to_speech?GroupId=${L.trim()}`,
                P = {
                  voice_id: (k.voiceId || "male-qn-qingse").trim(),
                  text: C,
                  model: B,
                  speed: k.speed !== void 0 ? k.speed : 1,
                  vol: k.vol !== void 0 ? k.vol : 1,
                  pitch: k.pitch !== void 0 ? k.pitch : 0,
                };
              Od(B) &&
                (($ = `${F}/v1/t2a_v2?GroupId=${L.trim()}`),
                (P = {
                  model: B,
                  text: C,
                  stream: !1,
                  voice_setting: {
                    voice_id: (k.voiceId || "male-qn-qingse").trim(),
                    speed: k.speed !== void 0 ? k.speed : 1,
                    vol: k.vol !== void 0 ? k.vol : 1,
                    pitch: k.pitch !== void 0 ? k.pitch : 0,
                  },
                  audio_setting: {
                    sample_rate: 32e3,
                    bitrate: 128e3,
                    format: "mp3",
                    channel: 1,
                  },
                }));
              const z = {
                  method: "POST",
                  headers: {
                    Authorization: `Bearer ${I.trim()}`,
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(P),
                },
                O = Od(B) ? 3e4 : 2e4;
              let Z = await ax($, z, { timeoutMs: O, retries: 2 });
              if (Z.status === 404) {
                const q = $.replace(F, D);
                Z = await ax(q, z, { timeoutMs: O, retries: 1 });
              }
              const K = Z.headers.get("content-type");
              if (Od(B)) {
                const q = await Z.json();
                if (q.base_resp && q.base_resp.status_code !== 0)
                  throw new Error(
                    `MiniMax API Error: ${q.base_resp.status_msg}`,
                  );
                if (q.data && q.data.audio) {
                  const V = q.data.audio,
                    ne = V.length,
                    le = new Uint8Array(Math.floor(ne / 2));
                  for (let X = 0, je = 0; X < ne; X += 2, je += 1)
                    le[je] = parseInt(V.slice(X, X + 2), 16);
                  const ie = new Blob([le], { type: "audio/mp3" });
                  (k.saveId && bc(k.saveId, ie), (T = URL.createObjectURL(ie)));
                } else throw new Error("MiniMax API returned no audio data");
              } else {
                if (K && K.includes("application/json")) {
                  const V = await Z.json();
                  throw V.base_resp && V.base_resp.status_code !== 0
                    ? new Error(`MiniMax API Error: ${V.base_resp.status_msg}`)
                    : new Error(
                        `MiniMax API returned JSON instead of audio: ${JSON.stringify(V)}`,
                      );
                }
                if (!Z.ok) throw new Error(`MiniMax API failed: ${Z.status}`);
                const q = await Z.blob();
                (k.saveId && bc(k.saveId, q), (T = URL.createObjectURL(q)));
              }
            }
            return (
              n((I) =>
                I.map((L) =>
                  L.id === M
                    ? {
                        ...L,
                        status: "success",
                        duration: Date.now() - L.timestamp,
                        audioUrl: T,
                      }
                    : L,
                ),
              ),
              T
            );
          } catch (T) {
            return (
              n((I) =>
                I.map((L) =>
                  L.id === M
                    ? {
                        ...L,
                        status: "error",
                        duration: Date.now() - L.timestamp,
                        error: T.message,
                      }
                    : L,
                ),
              ),
              null
            );
          }
        (b(), r(!0), k.saveId && o(k.saveId));
        const S = y();
        return (
          (S.muted = !1),
          (S.src =
            "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"),
          (h.current = S),
          S.play().catch((T) => {}),
          new Promise(async (T) => {
            var I, L, B, F, D;
            x.current = T;
            try {
              let $ = k.audioUrl;
              if (!$) {
                if (t.provider === "elevenlabs") {
                  const { key: P, voiceId: z, model: O } = t.elevenlabs || {},
                    Z = k.voiceId || z;
                  if (!P) throw new Error("ElevenLabs API Key missing");
                  if (!Z) throw new Error("ElevenLabs Voice ID missing");
                  const K = k.modelId || O || "eleven_multilingual_v2",
                    q = k.stability !== void 0 ? k.stability : 0.5,
                    V = k.similarityBoost !== void 0 ? k.similarityBoost : 0.75,
                    ne = k.style !== void 0 ? k.style : 0,
                    le = k.useSpeakerBoost !== void 0 ? k.useSpeakerBoost : !0,
                    je = await fetch(
                      `${!1 ? "/api/elevenlabs" : "https://api.elevenlabs.io"}/v1/text-to-speech/${Z.trim()}`,
                      {
                        method: "POST",
                        headers: {
                          "xi-api-key": P.trim(),
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                          text: C,
                          model_id: K,
                          voice_settings: {
                            stability: q,
                            similarity_boost: V,
                            style: ne,
                            use_speaker_boost: le,
                          },
                        }),
                      },
                    );
                  if (!je.ok) {
                    const ye = await je.text().catch(() => je.statusText);
                    throw new Error(
                      `ElevenLabs API failed: ${je.status} - ${ye}`,
                    );
                  }
                  const xe = await je.blob();
                  (k.saveId && bc(k.saveId, xe), ($ = URL.createObjectURL(xe)));
                } else if (t.provider === "minimax") {
                  const { apiKey: P } = t.minimax || {},
                    z =
                      k.groupId ||
                      ((I = t.minimax) == null ? void 0 : I.groupId),
                    O = k.minimaxModel || Au;
                  if (!z || !P)
                    throw new Error(
                      "MiniMax config missing (GroupId or ApiKey)",
                    );
                  const Z = "/api/minimax",
                    K = "https://api.minimax.chat";
                  let q = `${Z}/v1/text_to_speech?GroupId=${z.trim()}`,
                    V = {
                      voice_id: (k.voiceId || "male-qn-qingse").trim(),
                      text: C,
                      model: O,
                      speed: k.speed !== void 0 ? k.speed : 1,
                      vol: k.vol !== void 0 ? k.vol : 1,
                      pitch: k.pitch !== void 0 ? k.pitch : 0,
                    };
                  Od(O) &&
                    ((q = `${Z}/v1/t2a_v2?GroupId=${z.trim()}`),
                    (V = {
                      model: O,
                      text: C,
                      stream: !1,
                      voice_setting: {
                        voice_id: (k.voiceId || "male-qn-qingse").trim(),
                        speed: k.speed !== void 0 ? k.speed : 1,
                        vol: k.vol !== void 0 ? k.vol : 1,
                        pitch: k.pitch !== void 0 ? k.pitch : 0,
                      },
                      audio_setting: {
                        sample_rate: 32e3,
                        bitrate: 128e3,
                        format: "mp3",
                        channel: 1,
                      },
                    }));
                  const ne = {
                      method: "POST",
                      headers: {
                        Authorization: `Bearer ${P.trim()}`,
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(V),
                    },
                    le = Od(O) ? 3e4 : 2e4;
                  let ie = await ax(q, ne, { timeoutMs: le, retries: 2 });
                  if (ie.status === 404) {
                    const je = q.replace(Z, K);
                    ie = await ax(je, ne, { timeoutMs: le, retries: 1 });
                  }
                  const X = ie.headers.get("content-type");
                  if (Od(O)) {
                    const je = await ie.json();
                    if (je.base_resp && je.base_resp.status_code !== 0)
                      throw new Error(
                        `MiniMax API Error: ${je.base_resp.status_msg}`,
                      );
                    if (je.data && je.data.audio) {
                      const xe = je.data.audio,
                        ye = xe.length,
                        R = new Uint8Array(Math.floor(ye / 2));
                      for (let ee = 0, H = 0; ee < ye; ee += 2, H += 1)
                        R[H] = parseInt(xe.slice(ee, ee + 2), 16);
                      const oe = new Blob([R], { type: "audio/mp3" });
                      (k.saveId && bc(k.saveId, oe),
                        ($ = URL.createObjectURL(oe)));
                    } else
                      throw new Error("MiniMax API returned no audio data");
                  } else {
                    if (X && X.includes("application/json")) {
                      const xe = await ie.json();
                      throw xe.base_resp && xe.base_resp.status_code !== 0
                        ? new Error(
                            `MiniMax API Error: ${xe.base_resp.status_msg}`,
                          )
                        : new Error(
                            `MiniMax API returned JSON instead of audio: ${JSON.stringify(xe)}`,
                          );
                    }
                    if (!ie.ok)
                      throw new Error(`MiniMax API failed: ${ie.status}`);
                    const je = await ie.blob();
                    (k.saveId && bc(k.saveId, je),
                      ($ = URL.createObjectURL(je)));
                  }
                }
              }
              if ($) {
                if (h.current !== S) {
                  T(null);
                  return;
                }
                (n((P) =>
                  P.map((z) =>
                    z.id === M
                      ? {
                          ...z,
                          status: "success",
                          duration: Date.now() - z.timestamp,
                          audioUrl: $,
                        }
                      : z,
                  ),
                ),
                  (S.muted = !1),
                  (S.src = $),
                  k.playbackVolume !== void 0 && (S.volume = k.playbackVolume));
                try {
                  S.load();
                } catch {}
                if ((await CP(S, 2800), h.current !== S)) {
                  T(null);
                  return;
                }
                ((S.onended = () => {
                  (r(!1), o(null), T($), (x.current = null));
                }),
                  (S.onerror = (P) => {
                    (r(!1), o(null), T(null), (x.current = null));
                  }),
                  await S.play());
              } else (r(!1), o(null), T(null), (x.current = null));
            } catch ($) {
              let P = !1,
                z = !1;
              (t == null ? void 0 : t.provider) === "elevenlabs"
                ? ((P = !!(
                    (L = t == null ? void 0 : t.elevenlabs) != null && L.key
                  )),
                  (z =
                    !!(
                      (B = t == null ? void 0 : t.elevenlabs) != null &&
                      B.voiceId
                    ) || !!k.voiceId))
                : (t == null ? void 0 : t.provider) === "minimax" &&
                  ((P = !!(
                    (F = t == null ? void 0 : t.minimax) != null && F.apiKey
                  )),
                  (z =
                    !!(
                      (D = t == null ? void 0 : t.minimax) != null && D.groupId
                    ) || !!k.groupId));
              const O = {
                provider: t == null ? void 0 : t.provider,
                hasKey: P,
                hasConfig: z,
                optionsVoiceId: k.voiceId,
                errorMsg: $.message,
              };
              (n((Z) =>
                Z.map((K) =>
                  K.id === M
                    ? {
                        ...K,
                        status: "error",
                        duration: Date.now() - K.timestamp,
                        error: `${$.message} | Debug: ${JSON.stringify(O)}`,
                      }
                    : K,
                ),
              ),
                r(!1),
                o(null),
                T(null),
                (x.current = null));
            }
          })
        );
      },
      stopTTS: b,
      unlockAudio: () => {
        V5();
        try {
          const A = new Audio();
          ((A.src =
            "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA="),
            (A.volume = 0));
          const k = A.play();
          k && typeof k.then == "function" && k.then(() => {}).catch(() => {});
        } catch {}
        try {
          const A = new (window.AudioContext || window.webkitAudioContext)();
          A.state === "suspended" && A.resume();
          const k = A.createBuffer(1, 1, 22050),
            C = A.createBufferSource();
          ((C.buffer = k), C.connect(A.destination), C.start(0));
        } catch {}
      },
    };
  },
  pj = "chat_app_beautify_custom_presets",
  xj = "chat_app_beautify_custom_active_id",
  TP = (t) =>
    Array.isArray(t)
      ? t
          .filter(
            (s) => s != null && s.id != null && String(s.id).trim() !== "",
          )
          .map((s) => {
            const n = s.name;
            let a = "未命名";
            return (
              typeof n == "string" && n.trim()
                ? (a = n.trim())
                : n != null && String(n).trim() && (a = String(n).trim()),
              {
                id: String(s.id).trim(),
                name: a,
                listCss: typeof s.listCss == "string" ? s.listCss : "",
                profileCss: typeof s.profileCss == "string" ? s.profileCss : "",
                updatedAt:
                  typeof s.updatedAt == "number" ? s.updatedAt : Date.now(),
              }
            );
          })
      : [],
  IP = {
    name: "我",
    realName: "",
    wechatId: "",
    wechatIdLocked: !1,
    avatar: "",
    settings: "",
    signature: "",
    background: "",
    wallet: { balance: 1e4, password: null, transactions: [] },
  },
  EP = () => {
    const [t, s] = l.useState(IP),
      [n, a] = l.useState(!1);
    (l.useEffect(() => {
      (async () => {
        const ee = await be.get("chat_app_user");
        (ee != null &&
          s((H) => {
            const Y = { ...H, ...ee };
            return (
              Y.wechatIdLocked === void 0 &&
                (Y.wechatIdLocked = !!String(Y.wechatId ?? "").trim()),
              Y
            );
          }),
          a(!0));
      })();
    }, []),
      l.useEffect(() => {
        n && be.set("chat_app_user", t);
      }, [t, n]));
    const [r, i] = l.useState([]),
      [o, c] = l.useState(!1);
    (l.useEffect(() => {
      (async () => {
        const ee = await be.get("chat_app_user_presets");
        (ee != null && i(ee), c(!0));
      })();
    }, []),
      l.useEffect(() => {
        o && be.set("chat_app_user_presets", r);
      }, [r, o]));
    const [d, u] = l.useState(""),
      [f, p] = l.useState(!1);
    (l.useEffect(() => {
      be.get("chat_app_global_css").then((oe) => {
        (oe != null && typeof oe == "string" && u(oe), p(!0));
      });
    }, []),
      l.useEffect(() => {
        f && be.set("chat_app_global_css", d);
      }, [d, f]));
    const m = (oe) => u((ee) => (typeof oe == "function" ? oe(ee) : oe)),
      [h, g] = l.useState("default"),
      [x, y] = l.useState(!1);
    (l.useEffect(() => {
      be.get("chat_app_profile_theme").then((oe) => {
        ((oe === "icity" ||
          oe === "default" ||
          oe === "music" ||
          oe === "my_icity") &&
          g(oe),
          y(!0));
      });
    }, []),
      l.useEffect(() => {
        x && be.set("chat_app_profile_theme", h);
      }, [h, x]));
    const v = (oe) => g((ee) => (typeof oe == "function" ? oe(ee) : oe)),
      [b, N] = l.useState([]),
      [w, _] = l.useState(null),
      [A, k] = l.useState(!1);
    (l.useEffect(() => {
      let oe = !1;
      return (
        (async () => {
          const [ee, H] = await Promise.all([be.get(pj, []), be.get(xj, null)]);
          if (oe) return;
          const Y = TP(ee);
          N(Y);
          let U =
            H != null && String(H).trim() !== "" ? String(H).trim() : null;
          (U && !Y.some((ce) => ce.id === U) && (U = null), _(U), k(!0));
        })(),
        () => {
          oe = !0;
        }
      );
    }, []),
      l.useEffect(() => {
        A && be.set(pj, b);
      }, [b, A]),
      l.useEffect(() => {
        A && be.set(xj, w);
      }, [w, A]));
    const C = (oe) => N((ee) => (typeof oe == "function" ? oe(ee) : oe)),
      M = (oe) => _((ee) => (typeof oe == "function" ? oe(ee) : oe)),
      E = l.useMemo(() => {
        const oe = b.find((ee) => ee.id === w);
        return (oe == null ? void 0 : oe.listCss) ?? "";
      }, [b, w]),
      S = l.useMemo(() => {
        const oe = b.find((ee) => ee.id === w);
        return (oe == null ? void 0 : oe.profileCss) ?? "";
      }, [b, w]),
      [j, T] = l.useState(!1),
      [I, L] = l.useState(!1);
    (l.useEffect(() => {
      be.get("chat_app_night_mode").then((oe) => {
        (T(oe === !0), L(!0));
      });
    }, []),
      l.useEffect(() => {
        I && be.set("chat_app_night_mode", j);
      }, [j, I]));
    const B = (oe) => T((ee) => (typeof oe == "function" ? oe(ee) : oe)),
      [F, D] = l.useState(!1),
      [$, P] = l.useState(16),
      [z, O] = l.useState(!1);
    return (
      l.useEffect(() => {
        (async () => {
          const [oe, ee] = await Promise.all([
            be.get("chat_app_user_font_enabled", !1),
            be.get("chat_app_user_font_px", 16),
          ]);
          oe === !0 && D(!0);
          const H = Number(ee);
          (Number.isFinite(H) && P(Math.min(32, Math.max(10, H))), O(!0));
        })();
      }, []),
      l.useEffect(() => {
        z && be.set("chat_app_user_font_enabled", F);
      }, [F, z]),
      l.useEffect(() => {
        z && be.set("chat_app_user_font_px", $);
      }, [$, z]),
      {
        user: t,
        setUser: s,
        userPresets: r,
        addUserPreset: (oe) => {
          const ee = { ...oe, id: Date.now().toString() };
          return (i((H) => [...H, ee]), ee);
        },
        updateUserPreset: (oe, ee) => {
          i((H) => H.map((Y) => (Y.id === oe ? { ...Y, ...ee } : Y)));
        },
        deleteUserPreset: (oe) => {
          i((ee) => ee.filter((H) => H.id !== oe));
        },
        globalCss: d,
        setGlobalCss: m,
        profileTheme: h,
        setProfileTheme: v,
        nightMode: j,
        setNightMode: B,
        chatAppUserFontEnabled: F,
        setChatAppUserFontEnabled: (oe) =>
          D((ee) => (typeof oe == "function" ? oe(ee) : oe)),
        chatAppUserFontPx: $,
        setChatAppUserFontPx: (oe) =>
          P((ee) => {
            const H = typeof oe == "function" ? oe(ee) : oe,
              Y = Number(H);
            if (!Number.isFinite(Y)) return ee;
            const U = Math.round(Y * 2) / 2;
            return Math.min(32, Math.max(10, U));
          }),
        beautifyCustomPresets: b,
        setBeautifyCustomPresets: C,
        beautifyCustomActiveId: w,
        setBeautifyCustomActiveId: M,
        beautifyCustomListCss: E,
        beautifyCustomProfileCss: S,
        isBeautifyCustomLoaded: A,
        getEffectiveUser: (oe) => {
          if (oe != null && oe.boundUserPresetId) {
            const ee = r.find((H) => H.id === oe.boundUserPresetId);
            if (ee)
              return {
                ...t,
                name: ee.userName ?? ee.name ?? (t == null ? void 0 : t.name),
                realName:
                  ee.realName ??
                  ee.userName ??
                  ee.name ??
                  (t == null ? void 0 : t.realName) ??
                  (t == null ? void 0 : t.name),
                wechatId: ee.wechatId ?? (t == null ? void 0 : t.wechatId),
                avatar: ee.avatar,
                settings: ee.settings ?? "",
              };
          }
          return t;
        },
        getRoleBoundUser: (oe) => {
          if (oe != null && oe.boundUserPresetId) {
            const ee = r.find((H) => H.id === oe.boundUserPresetId);
            if (ee)
              return {
                realName: ee.realName ?? (t == null ? void 0 : t.realName),
                name:
                  ee.userName ??
                  ee.name ??
                  (t == null ? void 0 : t.name) ??
                  "TA",
                nickname: ee.nickname,
                wechatId:
                  ee.wechatId ?? (t == null ? void 0 : t.wechatId) ?? "",
                avatar: ee.avatar ?? "",
                settings: ee.settings ?? "",
              };
          }
          return {
            realName: t == null ? void 0 : t.realName,
            name: (t == null ? void 0 : t.name) ?? "TA",
            nickname: t == null ? void 0 : t.nickname,
            wechatId: (t == null ? void 0 : t.wechatId) ?? "",
            avatar: (t == null ? void 0 : t.avatar) ?? "",
            settings: (t == null ? void 0 : t.settings) ?? "",
          };
        },
        handleTransfer: (oe, ee, H, Y, U, ce = {}) => {
          if (t.wallet.password && t.wallet.password !== Y)
            throw new Error("密码错误");
          if (t.wallet.balance < ee) throw new Error("余额不足");
          const pe = parseFloat(ee);
          (s((se) => ({
            ...se,
            wallet: {
              ...se.wallet,
              balance: se.wallet.balance - pe,
              transactions: [
                {
                  id: Date.now().toString(),
                  type: "expense",
                  amount: pe,
                  note: `转账给好友: ${H}`,
                  timestamp: new Date().toISOString(),
                  contactName: ce.contactName ?? null,
                },
                ...(se.wallet.transactions || []),
              ],
            },
          })),
            U && U(pe));
        },
        setPaymentPassword: (oe) => {
          s((ee) => ({ ...ee, wallet: { ...ee.wallet, password: oe } }));
        },
        verifyPaymentPassword: (oe) => {
          var ee;
          if (
            (ee = t.wallet) != null &&
            ee.password &&
            t.wallet.password !== oe
          )
            throw new Error("支付密码错误");
        },
        deductFromWallet: (oe, ee, H) => {
          var U, ce;
          if ((U = t.wallet) != null && U.password && t.wallet.password !== H)
            throw new Error("支付密码错误");
          const Y = parseFloat(oe);
          if ((((ce = t.wallet) == null ? void 0 : ce.balance) ?? 0) < Y)
            throw new Error("余额不足");
          s((pe) => {
            var se, Te;
            return {
              ...pe,
              wallet: {
                ...pe.wallet,
                balance:
                  (((se = pe.wallet) == null ? void 0 : se.balance) ?? 0) - Y,
                transactions: [
                  {
                    id: Date.now().toString(),
                    type: "expense",
                    amount: Y,
                    note: ee || "消费",
                    timestamp: new Date().toISOString(),
                  },
                  ...(((Te = pe.wallet) == null ? void 0 : Te.transactions) ||
                    []),
                ],
              },
            };
          });
        },
        addToWallet: (oe, ee = "光学校验入账") => {
          const H = Math.round(parseFloat(oe) * 100) / 100;
          if (!Number.isFinite(H) || H <= 0) throw new Error("请输入有效金额");
          s((Y) => {
            var U, ce;
            return {
              ...Y,
              wallet: {
                ...Y.wallet,
                balance:
                  (((U = Y.wallet) == null ? void 0 : U.balance) ?? 0) + H,
                transactions: [
                  {
                    id: Date.now().toString(),
                    type: "income",
                    amount: H,
                    note: ee,
                    timestamp: new Date().toISOString(),
                  },
                  ...(((ce = Y.wallet) == null ? void 0 : ce.transactions) ||
                    []),
                ],
              },
            };
          });
        },
      }
    );
  },
  Zg = "couple_space_updated",
  hj = "chatApp_blocked_friend_requests_v1",
  gj = "chat_app_npc_pool_v1",
  bj = "chat_app_npc_pool_deny_v1";
function $l(t) {
  return String(t ?? "")
    .trim()
    .toLowerCase();
}
function LP(t, s) {
  if (!t) return !0;
  const n = Object.keys(s);
  if (Object.keys(t).length !== n.length) return !0;
  for (const a of n) if (t[a] !== s[a]) return !0;
  return !1;
}
const KS = l.createContext(SF);
function yj(t) {
  try {
    if (!t || !t.contactId) return;
    window.dispatchEvent(new CustomEvent(ku, { detail: t }));
  } catch {}
}
function vj(t, s) {
  return t === "system" && String(s || "").includes("已换上情侣头像")
    ? "couple_avatar_applied"
    : t || "text";
}
function DP(t, s) {
  var a, r;
  if (!t || t.isGroup || !s) return !1;
  const n =
    (r =
      (a = t == null ? void 0 : t.settings) == null
        ? void 0
        : a.blockedRoles) == null
      ? void 0
      : r[s];
  return n == null
    ? !1
    : typeof n == "number"
      ? !0
      : typeof n == "object"
        ? (n == null ? void 0 : n.blockedAt) != null &&
          (n == null ? void 0 : n.unblockedAt) == null
        : !1;
}
const vn = () => l.useContext(KS),
  $P = ({
    children: t,
    apiConfig: s,
    chatConfig: n,
    ttsConfig: a,
    onInboundVoiceCallConnected: r,
  }) => {
    const {
        user: i,
        setUser: o,
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
        getEffectiveUser: j,
        getRoleBoundUser: T,
        handleTransfer: I,
        setPaymentPassword: L,
        verifyPaymentPassword: B,
        deductFromWallet: F,
        addToWallet: D,
      } = EP(),
      $ = l.useRef(i),
      P = l.useRef(j);
    (l.useEffect(() => {
      $.current = i;
    }, [i]),
      l.useEffect(() => {
        P.current = j;
      }, [j]));
    const [z, O] = l.useState(""),
      [Z, K] = Yn("couple_spaces", {});
    l.useEffect(() => {
      const Zt = (ds) => {
        var ks;
        (ks = ds.detail) != null &&
          ks.spaces &&
          typeof ds.detail.spaces == "object" &&
          K(ds.detail.spaces);
      };
      return (
        window.addEventListener(Zg, Zt),
        () => window.removeEventListener(Zg, Zt)
      );
    }, []);
    const q = l.useCallback((Zt) => Z[Zt] || null, [Z]),
      {
        contacts: V,
        setContacts: ne,
        groups: le,
        setGroups: ie,
        groupColors: X,
        setGroupColors: je,
        groupInitialNames: xe,
        allGroupSettings: ye,
        setAllGroupSettings: R,
        updateAllGroupSettings: oe,
        addGroup: ee,
        setGroupColor: H,
        deleteGroup: Y,
        updateGroup: U,
        reorderAndRenameGroups: ce,
        updateContact: pe,
        addContact: se,
        addContactFromImport: Te,
        deleteContact: ke,
      } = fP(),
      W = pn.useRef(null),
      ue = pn.useRef(null),
      re = pn.useRef(null),
      he = pn.useRef(() => {}),
      ge = pn.useRef(null),
      J = pn.useRef(null),
      G = l.useRef([]),
      we = l.useRef(null),
      Q = l.useRef(T),
      ve = l.useRef(null),
      Ve = l.useRef(null),
      Ae = l.useRef([]),
      te = l.useRef(new Set()),
      Se = l.useRef(null),
      Fe = pn.useRef(null),
      $e = pn.useRef({}),
      tt = l.useRef(null),
      [Xe, ht] = l.useState({}),
      [Pe, ut] = l.useState({}),
      [_t, Ee] = l.useState(!1);
    (l.useEffect(() => {
      let Zt = !0;
      return (
        (async () => {
          try {
            const [ds, ks] = await Promise.all([
              be.get(gj, {}),
              be.get(bj, {}),
            ]);
            if (!Zt) return;
            (ds && typeof ds == "object" && !Array.isArray(ds)
              ? ht(ds)
              : ht({}),
              ks && typeof ks == "object" && !Array.isArray(ks)
                ? ut(ks)
                : ut({}));
          } catch {
            Zt && (ht({}), ut({}));
          } finally {
            Zt && Ee(!0);
          }
        })(),
        () => {
          Zt = !1;
        }
      );
    }, []),
      l.useEffect(() => {
        _t && be.set(gj, Xe);
      }, [Xe, _t]),
      l.useEffect(() => {
        _t && be.set(bj, Pe);
      }, [Pe, _t]));
    const fe = l.useCallback((Zt, ds) => {
        var Ds, Ps;
        const ks = $l(ds);
        if (!ks) return !0;
        const Ss = $.current;
        if (
          new Set(
            [
              Ss == null ? void 0 : Ss.name,
              Ss == null ? void 0 : Ss.nickname,
              Ss == null ? void 0 : Ss.realName,
            ]
              .map($l)
              .filter(Boolean),
          ).has(ks)
        )
          return !0;
        const Ys =
          (Ds = G.current) == null
            ? void 0
            : Ds.find(
                ($s) => String($s == null ? void 0 : $s.id) === String(Zt),
              );
        if (Ys) {
          if (
            new Set(
              [Ys.name, Ys.nickname, Ys.remark].map($l).filter(Boolean),
            ).has(ks)
          )
            return !0;
          const Gs = ((Ps = P.current) == null ? void 0 : Ps.call(P, Ys)) || {};
          if (
            [Gs.name, Gs.nickname, Gs.realName]
              .map($l)
              .filter(Boolean)
              .includes(ks)
          )
            return !0;
        }
        return !1;
      }, []),
      He = l.useCallback(
        (Zt) => {
          const ds = String(Zt ?? ""),
            ks = Xe == null ? void 0 : Xe[ds];
          return Array.isArray(ks) ? ks : [];
        },
        [Xe],
      ),
      Ie = l.useCallback(
        (Zt, ds) => {
          const ks = String(Zt ?? "");
          if (!ks) return !1;
          const Ss = (Ds) => String(Ds ?? "").trim(),
            Fs = Ss(ds == null ? void 0 : ds.name);
          if (!Fs || fe(ks, Fs)) return !1;
          const Ys = $l(Fs);
          return (
            ut((Ds) => {
              const Ps = Ds[ks] || [];
              return Ps.includes(Ys)
                ? { ...Ds, [ks]: Ps.filter(($s) => $s !== Ys) }
                : Ds;
            }),
            ht((Ds) => {
              var jn, Pn, Wn, Ua, br, xn;
              const Ps = Ds && typeof Ds == "object" ? Ds : {},
                $s = Array.isArray(Ps[ks]) ? Ps[ks] : [],
                Gs = $s.findIndex(
                  (Aa) => Ss(Aa == null ? void 0 : Aa.name) === Fs,
                ),
                Qs = Date.now(),
                Dn = {
                  id:
                    (ds == null ? void 0 : ds.id) ||
                    (Gs >= 0
                      ? (jn = $s[Gs]) == null
                        ? void 0
                        : jn.id
                      : `npc_${Qs}_${Math.floor(Math.random() * 1e4)}`),
                  name: Fs,
                  persona: Ss(ds == null ? void 0 : ds.persona),
                  setting:
                    Ss(ds == null ? void 0 : ds.setting) ||
                    (Gs >= 0
                      ? Ss((Pn = $s[Gs]) == null ? void 0 : Pn.setting)
                      : ""),
                  settingSource:
                    Ss(ds == null ? void 0 : ds.settingSource) ||
                    (Gs >= 0
                      ? Ss((Wn = $s[Gs]) == null ? void 0 : Wn.settingSource)
                      : ""),
                  relationTag: Ss(ds == null ? void 0 : ds.relationTag),
                  status:
                    (ds == null ? void 0 : ds.status) ||
                    (Gs >= 0
                      ? (Ua = $s[Gs]) == null
                        ? void 0
                        : Ua.status
                      : "active"),
                  createdAt:
                    Gs >= 0
                      ? (br = $s[Gs]) == null
                        ? void 0
                        : br.createdAt
                      : Qs,
                  lastSeenAt:
                    (ds == null ? void 0 : ds.lastSeenAt) ||
                    (Gs >= 0
                      ? (xn = $s[Gs]) == null
                        ? void 0
                        : xn.lastSeenAt
                      : null),
                  notes: Ss(ds == null ? void 0 : ds.notes),
                },
                Hn =
                  Gs >= 0
                    ? $s.map((Aa, si) => (si === Gs ? { ...Aa, ...Dn } : Aa))
                    : [Dn, ...$s];
              return { ...Ps, [ks]: Hn.slice(0, 200) };
            }),
            Xp(ks),
            !0
          );
        },
        [fe],
      ),
      Ce = l.useCallback((Zt, ds) => {
        const ks = String(Zt ?? ""),
          Ss = String(ds ?? "").trim();
        if (!ks || !Ss) return !1;
        const Fs = Ss.toLowerCase();
        let Ys = !1;
        return (
          ht((Ds) => {
            const Ps = Ds && typeof Ds == "object" ? Ds : {},
              $s = Array.isArray(Ps[ks]) ? Ps[ks] : [],
              Gs = (jn) => {
                const Pn =
                    (jn == null ? void 0 : jn.id) != null
                      ? String(jn.id).trim()
                      : "",
                  Wn = String((jn == null ? void 0 : jn.name) ?? "").trim();
                return !!(
                  (Pn && Pn === Ss) ||
                  (Pn && Pn.toLowerCase() === Fs) ||
                  Wn.toLowerCase() === Fs
                );
              },
              Qs = $s.filter(Gs);
            if (Qs.length === 0) return Ds;
            Ys = !0;
            const Dn = $s.filter((jn) => !Gs(jn)),
              Hn = Qs.map((jn) => $l(jn.name)).filter(Boolean);
            return (
              queueMicrotask(() => {
                (Hn.length &&
                  ut((jn) => {
                    const Pn = jn && typeof jn == "object" ? jn : {},
                      Wn = Pn[ks] || [],
                      Ua = new Set([...Wn, ...Hn]);
                    return { ...Pn, [ks]: [...Ua].slice(0, 500) };
                  }),
                  Xp(ks));
              }),
              { ...Ps, [ks]: Dn }
            );
          }),
          Ys
        );
      }, []),
      Re = l.useCallback((Zt, ds, ks) => {
        const Ss = String(Zt ?? ""),
          Fs = String(ds ?? "").trim();
        !Ss ||
          !Fs ||
          (ht((Ys) => {
            const Ds = Ys && typeof Ys == "object" ? Ys : {},
              $s = (Array.isArray(Ds[Ss]) ? Ds[Ss] : []).map((Gs) =>
                String((Gs == null ? void 0 : Gs.name) ?? "").trim() === Fs
                  ? { ...Gs, status: ks }
                  : Gs,
              );
            return { ...Ds, [Ss]: $s };
          }),
          Xp(Ss));
      }, []),
      {
        moments: De,
        setMoments: at,
        unreadMoments: ft,
        setUnreadMoments: vt,
        addMoment: Oe,
        forwardMoment: Qe,
        deleteMoment: Ye,
        deleteComment: Ze,
        replyToComment: Ue,
        toggleLikeMoment: me,
        togglePinMoment: jt,
        clearUnreadMoments: Gt,
      } = jP(i, V, j, (Zt, ds, ks, Ss, Fs) => {
        ue.current && ue.current(Zt, ds, ks, Ss, Fs);
      }),
      Pt = l.useRef(new Map());
    l.useEffect(() => {
      var Fs, Ys, Ds;
      if (!_t) return;
      const Zt = Array.isArray(De) ? De : [];
      if (Zt.length === 0) return;
      const ds = (Ps) => String(Ps ?? "").trim(),
        ks = new Set(
          [
            i == null ? void 0 : i.name,
            i == null ? void 0 : i.nickname,
            i == null ? void 0 : i.realName,
          ]
            .map(ds)
            .filter(Boolean),
        ),
        Ss = Zt.slice(0, 40);
      for (const Ps of Ss) {
        const $s = Ps == null ? void 0 : Ps.id;
        if ($s == null) continue;
        const Gs =
          (Ps == null ? void 0 : Ps.anchorContactId) != null
            ? String(Ps.anchorContactId)
            : "";
        if (!Gs) continue;
        const Qs =
          ((Ys = (Fs = G.current) == null ? void 0 : Fs.find) == null
            ? void 0
            : Ys.call(
                Fs,
                (xn) => String(xn == null ? void 0 : xn.id) === Gs,
              )) || null;
        if (Qs && Qs.npcPoolUpdateEnabled === !1) continue;
        const Dn = new Set(
            Qs ? [Qs.name, Qs.nickname, Qs.remark].map(ds).filter(Boolean) : [],
          ),
          Hn = new Set(Pe[Gs] || []),
          jn = Array.isArray(Ps == null ? void 0 : Ps.comments)
            ? Ps.comments
            : [],
          Pn = `${ds(Ps == null ? void 0 : Ps.momentOwnerType)}|${ds(Ps == null ? void 0 : Ps.momentOwnerNpcName)}|${ds(Ps == null ? void 0 : Ps.momentOwnerNpcPersona)}`,
          Wn = `${jn.length}|${Pn}`;
        if (Pt.current.get(String($s)) === Wn) continue;
        Pt.current.set(String($s), Wn);
        const br = (xn) => {
          const Aa = ds(xn);
          if (Aa && !ks.has(Aa) && !Dn.has(Aa) && !Hn.has($l(Aa))) return Aa;
        };
        if (ds(Ps == null ? void 0 : Ps.momentOwnerType) === "npc") {
          const xn =
              ds(Ps == null ? void 0 : Ps.momentOwnerNpcName) ||
              ds(
                (Ds = Ps == null ? void 0 : Ps.user) == null ? void 0 : Ds.name,
              ),
            Aa = br(xn),
            si = ds(Ps == null ? void 0 : Ps.momentOwnerNpcPersona);
          Aa &&
            Ie(Gs, {
              name: Aa,
              persona: si,
              status: "active",
              lastSeenAt: Date.now(),
            });
        }
        for (const xn of jn) {
          const Aa = br(xn == null ? void 0 : xn.user);
          if (!Aa) continue;
          const si = ds(xn == null ? void 0 : xn.npcPersona) || "";
          Ie(Gs, {
            name: Aa,
            persona: si,
            status: "active",
            lastSeenAt: Date.now(),
          });
        }
      }
    }, [
      De,
      i == null ? void 0 : i.name,
      i == null ? void 0 : i.nickname,
      i == null ? void 0 : i.realName,
      _t,
      Ie,
      Pe,
    ]);
    const Wt = l.useRef(new Set()),
      ct = (Zt, ds) => {
        const ks = String(Zt || ""),
          Ss = String(ds || "").trim();
        if (!ks || !Ss) return "";
        const Fs = ks.indexOf(Ss);
        if (Fs < 0) return "";
        const Ys = Math.max(0, Fs - 260),
          Ds = Math.min(ks.length, Fs + Ss.length + 520);
        return ks.slice(Ys, Ds).trim();
      },
      Kt = l.useCallback(
        async (Zt, ds) => {
          var Ys, Ds;
          const ks = String(Zt ?? ""),
            Ss = String(ds ?? "").trim();
          if (!ks || !Ss || fe(ks, Ss) || (Pe[ks] || []).includes($l(Ss)))
            return;
          const Fs = `${ks}::${Ss}`;
          if (!Wt.current.has(Fs)) {
            Wt.current.add(Fs);
            try {
              const $s =
                He(ks).find(
                  (Pn) =>
                    String((Pn == null ? void 0 : Pn.name) ?? "").trim() === Ss,
                ) || null;
              if ($s != null && $s.setting && String($s.setting).trim()) return;
              const Gs =
                  ((Ds = (Ys = G.current) == null ? void 0 : Ys.find) == null
                    ? void 0
                    : Ds.call(
                        Ys,
                        (Pn) => String(Pn == null ? void 0 : Pn.id) === ks,
                      )) || null,
                Qs = ct((Gs == null ? void 0 : Gs.setting) || "", Ss);
              if (Qs) {
                Ie(ks, {
                  name: Ss,
                  setting: Qs,
                  settingSource: "contact_setting",
                });
                return;
              }
              const Dn = await Promise.race([
                  be.get("world_books", []),
                  new Promise((Pn, Wn) =>
                    setTimeout(
                      () => Wn(new Error("world_books_timeout")),
                      2500,
                    ),
                  ),
                ]),
                jn = (Array.isArray(Dn) ? Dn : []).filter(
                  (Pn) =>
                    Array.isArray(Pn == null ? void 0 : Pn.boundContacts) &&
                    Pn.boundContacts.includes(ks),
                );
              for (const Pn of jn) {
                const Wn = Array.isArray(Pn == null ? void 0 : Pn.entries)
                  ? Pn.entries
                  : [];
                for (const Ua of Wn) {
                  const br =
                    ct((Ua == null ? void 0 : Ua.content) || "", Ss) ||
                    ct((Ua == null ? void 0 : Ua.title) || "", Ss);
                  if (br) {
                    Ie(ks, {
                      name: Ss,
                      setting: `【世界书：${String((Pn == null ? void 0 : Pn.title) || "世界观").trim()}】
${br}`,
                      settingSource: "world_book",
                    });
                    return;
                  }
                }
              }
            } catch {
            } finally {
              Wt.current.delete(Fs);
            }
          }
        },
        [be, He, Ie, fe, Pe],
      );
    l.useEffect(() => {
      var ks, Ss, Fs;
      if (!_t) return;
      const ds = (Array.isArray(De) ? De : []).slice(0, 30);
      for (const Ys of ds) {
        const Ds =
          (Ys == null ? void 0 : Ys.anchorContactId) != null
            ? String(Ys.anchorContactId)
            : "";
        if (!Ds) continue;
        const Ps =
          ((Ss = (ks = G.current) == null ? void 0 : ks.find) == null
            ? void 0
            : Ss.call(
                ks,
                (Gs) => String(Gs == null ? void 0 : Gs.id) === Ds,
              )) || null;
        if (Ps && Ps.npcPoolUpdateEnabled === !1) continue;
        const $s = Array.isArray(Ys == null ? void 0 : Ys.comments)
          ? Ys.comments
          : [];
        for (const Gs of $s) {
          const Qs = String((Gs == null ? void 0 : Gs.user) ?? "").trim();
          Qs && Kt(Ds, Qs);
        }
        if (
          String((Ys == null ? void 0 : Ys.momentOwnerType) || "").trim() ===
          "npc"
        ) {
          const Gs = String(
            (Ys == null ? void 0 : Ys.momentOwnerNpcName) ||
              ((Fs = Ys == null ? void 0 : Ys.user) == null
                ? void 0
                : Fs.name) ||
              "",
          ).trim();
          Gs && Kt(Ds, Gs);
        }
      }
    }, [De, _t, Kt]);
    const {
        chats: fs,
        setChats: gt,
        chatsRef: ae,
        activeChatId: nt,
        setActiveChatId: It,
        activeChatIdRef: Xt,
        summaries: bs,
        setSummaries: ss,
        presets: _s,
        setPresets: qs,
        updateChatSettings: Bs,
        updateMessage: Js,
        createChat: Xs,
        createGroupChat: gn,
        deleteChat: sn,
        togglePinChat: ln,
        clearChatMessages: rn,
        deleteMessages: wt,
        recallMessage: xs,
        deleteSummary: ot,
        updateSummary: st,
        injectOpeningLines: $t,
        startWithOpening: Ft,
        addTimeAdvanceMessage: es,
        addMembersToGroup: At,
        removeMembersFromGroup: Jt,
      } = BR(),
      Vt = l.useRef(Xs),
      qt = l.useRef(It);
    (l.useEffect(() => {
      ((Vt.current = Xs), (qt.current = It));
    }, [Xs, It]),
      l.useEffect(() => {
        const Zt = (ds) => {
          var Fs;
          const ks = (Fs = ds.detail) == null ? void 0 : Fs.contactId;
          if (ks == null || String(ks).trim() === "") return;
          const Ss = Vt.current(ks);
          Ss && qt.current(Ss);
        };
        return (
          window.addEventListener("phone_open_chat_with_contact", Zt),
          () => window.removeEventListener("phone_open_chat_with_contact", Zt)
        );
      }, []));
    const {
        favorites: Lt,
        addFavorite: Qt,
        addFavorites: js,
        removeFavorite: cs,
        removeFavoritesForChatIds: Ne,
      } = mP(),
      [Je, St] = l.useState([]),
      [Be, Ke] = l.useState(null),
      [Nt, bt] = l.useState([]),
      ns = l.useRef({ status: "idle" }),
      Ge = l.useRef(new Map()),
      Le = l.useRef(new Map());
    l.useEffect(() => {
      let Zt = !0;
      return (
        (async () => {
          try {
            const ds = await be.get(hj, []);
            if (!Zt) return;
            St(Array.isArray(ds) ? ds : []);
          } catch {
            Zt && St([]);
          }
        })(),
        () => {
          Zt = !1;
        }
      );
    }, []);
    const _e = l.useCallback(async (Zt) => {
        try {
          await be.set(hj, Zt);
        } catch {}
      }, []),
      yt = l.useCallback(
        ({ contactId: Zt, chatId: ds, requestText: ks }) => {
          var Ps;
          if (!Zt) return null;
          const Ss = Date.now(),
            Fs = Ge.current.get(Zt) || 0;
          if (Ss - Fs < 30 * 60 * 1e3) return null;
          Ge.current.set(Zt, Ss);
          const Ds = {
            id: `fr_${Zt}_${Ss}_${Math.floor(Math.random() * 1e4)}`,
            contactId: Zt,
            chatId: ds ?? null,
            createdAt: Ss,
            status: "pending",
            text: String(ks || "").trim() || "我想重新加你好友，可以吗？",
          };
          if (
            (St(($s) => {
              const Gs = [Ds, ...(Array.isArray($s) ? $s : [])].slice(0, 200);
              return (_e(Gs), Gs);
            }),
            Ke(Ds),
            ds)
          )
            try {
              const $s =
                  (Ps = G.current) == null
                    ? void 0
                    : Ps.find((Qs) => Qs.id === Zt),
                Gs =
                  ($s == null ? void 0 : $s.remark) ||
                  ($s == null ? void 0 : $s.nickname) ||
                  ($s == null ? void 0 : $s.name) ||
                  "TA";
              Ut(ds, `[系统提示] ${Gs}向你发送了好友申请`, null, "system");
            } catch {}
          return Ds;
        },
        [_e],
      ),
      rt = l.useCallback(() => {
        Ke(null);
      }, []),
      ze = l.useCallback(
        (Zt, ds) => {
          Zt &&
            St((ks) => {
              const Fs = (Array.isArray(ks) ? ks : []).map((Ys) =>
                (Ys == null ? void 0 : Ys.id) === Zt
                  ? { ...Ys, ...(ds || {}) }
                  : Ys,
              );
              return (_e(Fs), Fs);
            });
        },
        [_e],
      ),
      {
        ttsLogs: lt,
        clearTtsLogs: it,
        isPlaying: Ht,
        playingMessageId: is,
        isFetchingVoices: os,
        voices: as,
        models: vs,
        fetchVoices: ts,
        playTTS: ys,
        stopTTS: Vs,
        unlockAudio: pt,
      } = MP(a),
      {
        notification: qe,
        setNotification: dt,
        notificationTimerRef: xt,
        systemNotificationEnabled: zt,
        toggleSystemNotification: ms,
        sendSystemNotification: Cs,
        notificationStrategy: us,
        setNotificationStrategy: Rs,
        closeNotification: Rt,
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
        playSound: Oa,
        blockedInviteRingtoneKey: ur,
        setBlockedInviteRingtoneKey: mi,
        startBlockedInviteRing: ti,
        stopBlockedInviteRing: pi,
      } = SP();
    l.useEffect(() => {
      if (!Es || !Qn) return;
      let Zt = 0;
      const ds = (ks) => {
        const Ss = Date.now();
        if (Ss - Zt < 80) return;
        const Fs = ks == null ? void 0 : ks.target;
        !Fs ||
          typeof Fs.closest != "function" ||
          Fs.closest('[data-no-click-sound="1"]') ||
          Fs.closest('input,textarea,select,[contenteditable="true"]') ||
          !Fs.closest('button,[role="button"],a,[data-click-sound="1"]') ||
          ((Zt = Ss), Oa == null || Oa("click"));
      };
      return (
        document.addEventListener("click", ds, !0),
        () => document.removeEventListener("click", ds, !0)
      );
    }, [Es, Qn, Oa]);
    const [ii, Br] = l.useState(() => new Set()),
      kt = pn.useRef(new Set()),
      Tt = pn.useRef(new Map()),
      Yt = l.useCallback((Zt, ds) => {
        if (Zt == null || Zt === "") return Promise.resolve().then(ds);
        const ks = String(Zt),
          Ss = Tt.current,
          Ys = (Ss.get(ks) || Promise.resolve())
            .catch(() => {})
            .then(() => ds());
        return (
          Ss.set(ks, Ys),
          Ys.finally(() => {
            Ss.get(ks) === Ys && Ss.delete(ks);
          })
        );
      }, []),
      de = [
        "好吧",
        "行",
        "可以",
        "好呀",
        "换吧",
        "同意",
        "就这个吧",
        "就这套吧",
        "好",
        "成",
        "嗯",
        "ok",
        "好哒",
        "好哦",
        "换",
        "用这个",
      ],
      Me = ["不行", "不要", "算了", "不换", "下次吧", "再说吧", "拒绝"],
      et = l.useCallback(
        (Zt, ds) => {
          var Ps, $s, Gs;
          if (!(ds != null && ds.aiAvatar) || !(ds != null && ds.userAvatar))
            return;
          const ks =
              (Ps = ae == null ? void 0 : ae.current) == null
                ? void 0
                : Ps.find((Qs) => Qs.id === Zt),
            Ss = ks == null ? void 0 : ks.contactId;
          if (!Ss) return;
          pe(Ss, { avatar: ds.aiAvatar });
          const Fs =
            ($s = G == null ? void 0 : G.current) == null
              ? void 0
              : $s.find((Qs) => Qs.id === Ss);
          Fs != null && Fs.boundUserPresetId
            ? u(Fs.boundUserPresetId, { avatar: ds.userAvatar })
            : o((Qs) => ({ ...Qs, avatar: ds.userAvatar }));
          const Ys = Array.isArray(
            (Gs = ks == null ? void 0 : ks.settings) == null
              ? void 0
              : Gs.coupleAvatarUsageHistory,
          )
            ? ks.settings.coupleAvatarUsageHistory
            : [];
          Bs(Zt, {
            coupleAvatarUsageHistory: [
              ...Ys,
              {
                pairId: ds.id,
                pairName: ds.name || ds.id,
                usedAt: new Date().toISOString(),
              },
            ],
            pendingCoupleAvatarProposal: null,
          });
          const Ds = ds.name || "情头";
          Ut(Zt, `[系统提示：你们已换上情侣头像「${Ds}」]`, null, "system");
        },
        [pe, o, Bs, u],
      ),
      Ct = l.useCallback(
        (Zt, ds) => {
          var Ps, $s, Gs;
          const ks =
              (Ps = ae == null ? void 0 : ae.current) == null
                ? void 0
                : Ps.find((Qs) => Qs.id === Zt),
            Ss =
              ($s = ks == null ? void 0 : ks.settings) == null
                ? void 0
                : $s.pendingCoupleAvatarProposal;
          if (
            !Ss ||
            Ss.from !== "ai" ||
            !(ks != null && ks.contactId) ||
            (ks != null && ks.isGroup)
          )
            return;
          const Fs = (ds || "").trim().toLowerCase(),
            Ys = de.some(
              (Qs) => Fs === Qs.toLowerCase() || Fs.includes(Qs.toLowerCase()),
            ),
            Ds = Me.some((Qs) => Fs.includes(Qs.toLowerCase()));
          if (Ys) {
            const Dn = (
              Array.isArray(
                (Gs = ks.settings) == null ? void 0 : Gs.coupleAvatarPairs,
              )
                ? ks.settings.coupleAvatarPairs
                : []
            ).find((Hn) => String(Hn.id) === String(Ss.pairId));
            Dn ? et(Zt, Dn) : Bs(Zt, { pendingCoupleAvatarProposal: null });
          } else Ds && Bs(Zt, { pendingCoupleAvatarProposal: null });
        },
        [Bs, et],
      ),
      Dt = l.useCallback(
        (Zt, ds) => {
          var Ys, Ds;
          const ks =
              (Ys = ae == null ? void 0 : ae.current) == null
                ? void 0
                : Ys.find((Ps) => Ps.id === Zt),
            Fs = (
              Array.isArray(
                (Ds = ks == null ? void 0 : ks.settings) == null
                  ? void 0
                  : Ds.coupleAvatarPairs,
              )
                ? ks.settings.coupleAvatarPairs
                : []
            ).find((Ps) => String(Ps.id) === String(ds));
          Fs && et(Zt, Fs);
        },
        [et],
      ),
      Mt = l.useCallback(
        (Zt) => {
          Bs(Zt, { pendingCoupleAvatarProposal: null });
        },
        [Bs],
      ),
      Ut = (Zt, ds, ks = null, Ss = "text", Fs = {}) => {
        var Gs;
        const Ys = new Date().toISOString(),
          Ds = {
            id:
              Fs.id ??
              `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
            text: ds,
            sender: "me",
            timestamp: Ys,
            replyTo: ks,
            type: Ss,
            ...Fs,
          },
          Ps = ge.current;
        if (
          Ps &&
          Ps.status === "connected" &&
          String(Ps.chatId ?? "") === String(Zt ?? "") &&
          Ss !== "system_call_end"
        ) {
          (Ss !== "system" && navigator.vibrate && navigator.vibrate(50),
            ws.current &&
              ws.current((Qs) => ({
                ...Qs,
                currentMessages: [...Qs.currentMessages, Ds],
              })));
          return;
        }
        (gt((Qs) =>
          Qs.map((Dn) =>
            Dn.id === Zt
              ? {
                  ...Dn,
                  lastMessage:
                    Ss === "transfer"
                      ? `[转账] ${ds}`
                      : Ss === "red_packet"
                        ? "[红包]"
                        : Ss === "couple_ledger_checkin_invite"
                          ? "[一起记账打卡邀请]"
                          : ds,
                  timestamp: Ys,
                  messages: [...Dn.messages, Ds],
                }
              : Dn,
          ),
        ),
          Ss === "text" &&
            typeof ds == "string" &&
            Ct &&
            setTimeout(() => Ct(Zt, ds), 0),
          Ss !== "system" &&
            Ss !== "system_call_end" &&
            (Oa("send"), navigator.vibrate && navigator.vibrate(50)));
        const $s =
          ((Gs = ae.current) == null
            ? void 0
            : Gs.find((Qs) => String(Qs.id) === String(Zt))) ||
          fs.find((Qs) => String(Qs.id) === String(Zt));
        return (
          $s != null &&
            $s.contactId &&
            yj({
              source: "chat_app",
              contactId: $s.contactId,
              chatId: Zt,
              direction: "out",
              sender: "me",
              messageType: vj(Ss || "text", ds),
              text: String(ds || ""),
              timestamp: new Date(Ys).getTime(),
            }),
          Ds.id
        );
      },
      ws = pn.useRef(null),
      Ls = l.useRef(null),
      Ot = l.useRef(null),
      rs = l.useRef(null),
      gs = (Zt, ds, ks, Ss, Fs = {}) => {
        const Ys = fs.find((Gs) => Gs.id === Zt),
          Ds = Fs.contactId ?? (Ys == null ? void 0 : Ys.contactId),
          Ps = Ds ? V.find((Gs) => Gs.id === Ds) : null,
          $s = Ps ? Ps.remark || Ps.nickname || Ps.name || "好友" : "";
        I(
          Zt,
          ds,
          ks,
          Ss,
          (Gs) => {
            Ut(Zt, `¥${Gs}`, null, "transfer", {
              amount: Gs,
              note: ks || "转账给您",
              status: "pending",
              ...(Fs.contactId != null && { targetContactId: Fs.contactId }),
            });
          },
          { contactName: $s || void 0 },
        );
      },
      {
        callState: ps,
        setCallState: Is,
        phoneCallState: As,
        setPhoneCallState: Ks,
        phoneRecents: on,
        startPhoneCall: tn,
        endPhoneCall: dn,
        handlePhoneInteraction: yn,
        scheduleBlockedInvitePhoneFollowUps: va,
        scheduleProactiveVoiceInvitePickup: Bn,
        regeneratePhoneReply: Ea,
        retryLastPhoneModelRound: Fn,
        regeneratePhoneRecentSummary: ha,
        savePhoneRecentSummary: Cr,
        setPhoneRecentSummaryBinding: hr,
        startVideoCall: ar,
        acceptVideoCall: zs,
        rejectVideoCall: En,
        endVideoCall: Vn,
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
        onGroupVideoCallDecisionApiFinished: Nn,
        regenerateGroupVideoCallRound: kn,
      } = dP(
        i,
        V,
        fs,
        gt,
        j,
        (...Zt) => re.current(...Zt),
        we.current,
        (Zt) => {
          var ds;
          return (ds = he.current) == null ? void 0 : ds.call(he, Zt);
        },
        ys,
        Vs,
        pt,
        (...Zt) => W.current(...Zt),
        (Zt, ds, ks, Ss, Fs) => Ut(Zt, ds, ks, Ss, Fs),
        (Zt, ds) => J.current(Zt, ds),
        bs,
        $e,
        ae,
        kt,
      );
    ((ge.current = ps),
      (ws.current = Is),
      l.useEffect(() => {
        ns.current = As;
      }, [As]));
    const Ln = l.useMemo(() => (Nt.length > 0 ? Nt[0] : null), [Nt]),
      ua = l.useCallback((Zt) => {
        try {
          const ds = String(Zt || "").trim();
          if (!ds) return;
          window.dispatchEvent(new CustomEvent(Nu, { detail: { text: ds } }));
        } catch {}
      }, []),
      fa = l.useCallback(
        (Zt) => {
          var Qs, Dn;
          const { chatId: ds, contactId: ks } = Zt || {};
          if (!ds || !ks) return;
          const Ss =
              (Qs = G.current) == null ? void 0 : Qs.find((Hn) => Hn.id === ks),
            Fs =
              (Ss == null ? void 0 : Ss.remark) ||
              (Ss == null ? void 0 : Ss.nickname) ||
              (Ss == null ? void 0 : Ss.name) ||
              "TA",
            Ys = new Date().toISOString(),
            Ds = {
              id: `sys-phone-busy-user-${Date.now()}-${ks}`,
              sender: "system",
              type: "system",
              timestamp: Ys,
              text: `[系统提示] 你正在接听其他来电，${Fs}的语音来电未接通（占线）`,
            };
          Ut(ds, Ds.text, null, "system");
          const Ps =
              (Dn = ae.current) == null
                ? void 0
                : Dn.find((Hn) => Hn.id === ds),
            $s = {
              id: `sys-phone-busy-ai-${Date.now()}-${ks}`,
              sender: "system",
              type: "system",
              timestamp: Ys,
              text: "[系统提示：用户正在与其他人语音通话，你的来电因占线未能接通、已自动挂断。请结合人设与【记忆】、上文聊天，输出 4～8 条短句（用 || 分隔，不要编号），表现你对此的反应；禁止复述本句、禁止元信息。]",
            },
            Gs = [...((Ps == null ? void 0 : Ps.messages) || []), Ds, $s];
          setTimeout(() => {
            var Hn;
            try {
              (Hn = W.current) == null || Hn.call(W, ds, !1, "", Gs);
            } catch {}
          }, 220);
        },
        [Ut],
      ),
      Fa = l.useCallback(
        (Zt) => {
          Zt != null &&
            Zt.id &&
            bt(
              (ds) => (
                ds.filter((Ss) => Ss.id !== Zt.id).forEach((Ss) => fa(Ss)),
                []
              ),
            );
        },
        [fa],
      ),
      gr = l.useCallback(
        ({
          contactId: Zt,
          chatId: ds,
          inviteText: ks,
          fromBlocked: Ss = !0,
        }) => {
          var Qs, Dn;
          if (!Zt) return null;
          const Fs = Date.now(),
            Ys = Le.current.get(Zt) || 0;
          if (Fs - Ys < 30 * 60 * 1e3) return null;
          Le.current.set(Zt, Fs);
          const Ps = {
              id: `pc_${Zt}_${Fs}_${Math.floor(Math.random() * 1e4)}`,
              contactId: Zt,
              chatId: ds ?? null,
              text: ks != null ? String(ks).trim().slice(0, 160) : "",
              fromBlocked: Ss !== !1,
            },
            $s =
              (Qs = G.current) == null ? void 0 : Qs.find((Hn) => Hn.id === Zt),
            Gs =
              ($s == null ? void 0 : $s.remark) ||
              ($s == null ? void 0 : $s.nickname) ||
              ($s == null ? void 0 : $s.name) ||
              "TA";
          if (
            ((Dn = ns.current) == null ? void 0 : Dn.status) === "connected"
          ) {
            if (ds)
              try {
                fa(Ps);
              } catch {}
            return null;
          }
          if ((bt((Hn) => [...Hn, Ps]), ds))
            try {
              Ut(ds, `[系统提示] ${Gs}向你发起来电`, null, "system");
            } catch {}
          return Ps;
        },
        [fa, Ut],
      ),
      po = l.useCallback(() => {
        bt((Zt) => Zt.slice(1));
      }, []),
      Xu = l.useCallback(() => {
        bt((Zt) => {
          var Ys, Ds;
          const [ds, ...ks] = Zt;
          if (!ds) return Zt;
          const { chatId: Ss, contactId: Fs } = ds;
          if (Ss) {
            const Ps =
                (Ys = ae.current) == null
                  ? void 0
                  : Ys.find((jn) => jn.id === Ss),
              $s =
                (Ds = G.current) == null
                  ? void 0
                  : Ds.find((jn) => jn.id === Fs),
              Gs =
                ($s == null ? void 0 : $s.remark) ||
                ($s == null ? void 0 : $s.nickname) ||
                ($s == null ? void 0 : $s.name) ||
                "TA",
              Qs = new Date().toISOString();
            try {
              ua(`已拒绝 ${Gs} 的语音来电`);
            } catch {}
            try {
              Ut(Ss, `[系统提示] 你已拒绝接听${Gs}的语音来电`, null, "system");
            } catch {}
            const Dn = {
                id: `sys-phone-reject-${Date.now()}-${Fs}`,
                sender: "system",
                type: "system",
                timestamp: Qs,
                text: "[系统提示：你（角色）已经在聊天软件里被用户拉黑。你刚刚【主动】打电话给用户，但用户未接听并直接拒绝/挂断了来电。你必须清楚“是你打给用户”，不要写反。请在聊天里做出符合人设的反应：输出 4～8 句短句，用 || 分隔（不要编号、不要整段长篇），每句尽量短；句读与标点须符合人设，勿为短句统一省略。若本会话开启了「实时翻译」，请为每一条气泡末尾追加 ` [TRANS:译文]`（译文为中文且不含拉丁字母）。禁止提及系统/模型/提示词等元信息。]",
              },
              Hn = [...((Ps == null ? void 0 : Ps.messages) || []), Dn];
            setTimeout(() => {
              var jn;
              try {
                (jn = W.current) == null || jn.call(W, Ss, !1, "", Hn);
              } catch {}
            }, 220);
          }
          return ks;
        });
      }, [ua, Ut]),
      Xl = l.useCallback(async () => {
        var Dn, Hn, jn, Pn;
        const Zt = ge.current;
        if (!Zt || Zt.status !== "connected" || Zt.isGroup) {
          await Vn();
          return;
        }
        const ds = Zt.chatId,
          ks =
            (Dn = ae.current) == null ? void 0 : Dn.find((Wn) => Wn.id === ds),
          Ss = ks == null ? void 0 : ks.contactId,
          Fs =
            ((Hn = G.current) == null
              ? void 0
              : Hn.find((Wn) => Wn.id === Ss)) || null,
          Ys = Fs ? j(Fs) : i,
          Ds = (Wn) => String(Wn || "").trim(),
          $s = (
            Array.isArray(
              (jn = ks == null ? void 0 : ks.settings) == null
                ? void 0
                : jn.coupleAvatarPairs,
            )
              ? ks.settings.coupleAvatarPairs
              : []
          ).find(
            (Wn) =>
              Ds(Wn == null ? void 0 : Wn.aiAvatar) ===
                Ds(Fs == null ? void 0 : Fs.avatar) &&
              Ds(Wn == null ? void 0 : Wn.userAvatar) ===
                Ds(Ys == null ? void 0 : Ys.avatar),
          );
        if ((await Vn(), !$s || !Ss)) return;
        const Gs =
            ((Pn = G.current) == null
              ? void 0
              : Pn.find((Wn) => Wn.id === Ss)) || null,
          Qs = Gs ? j(Gs) : i;
        (Ds(Gs == null ? void 0 : Gs.avatar) !== Ds($s.aiAvatar) &&
          pe(Ss, { avatar: $s.aiAvatar }),
          Gs != null && Gs.boundUserPresetId
            ? Ds(Qs == null ? void 0 : Qs.avatar) !== Ds($s.userAvatar) &&
              u(Gs.boundUserPresetId, { avatar: $s.userAvatar })
            : Ds(Qs == null ? void 0 : Qs.avatar) !== Ds($s.userAvatar) &&
              o((Wn) => ({ ...Wn, avatar: $s.userAvatar })));
      }, [Vn, j, o, pe, u, i]);
    l.useEffect(() => {
      ((ge.current = ps), (ws.current = Is));
    }, [ps, Is]);
    const ef = (Zt, ds) => {
        var Ys, Ds, Ps, $s;
        const ks =
          (Ys = ae.current) == null ? void 0 : Ys.find((Gs) => Gs.id === Zt);
        if (!(ks != null && ks.isGroup) || !(ks.memberIds || []).includes(ds))
          return;
        const Ss =
            (Ds = G.current) == null ? void 0 : Ds.find((Gs) => Gs.id === ds),
          Fs =
            (($s = (Ps = ks.settings) == null ? void 0 : Ps.memberTitles) ==
            null
              ? void 0
              : $s[ds]) ||
            (Ss == null ? void 0 : Ss.remark) ||
            (Ss == null ? void 0 : Ss.nickname) ||
            (Ss == null ? void 0 : Ss.name) ||
            "某成员";
        (Is((Gs) => {
          var Qs;
          return Gs.chatId !== Zt ||
            !Gs.isGroup ||
            Gs.status !== "connected" ||
            ((Qs = Gs.acceptedMembers) != null && Qs.includes(ds))
            ? Gs
            : {
                ...Gs,
                acceptedMembers: [...(Gs.acceptedMembers || []), ds],
                groupVideoPendingJoin: { contactId: ds, name: Fs },
              };
        }),
          gt((Gs) =>
            Gs.map((Qs) => {
              if (Qs.id !== Zt) return Qs;
              const Dn = {
                id: `sys-join-${Date.now()}-${ds}`,
                type: "system",
                sender: "system",
                text: `${Fs}加入了视频通话`,
                timestamp: new Date().toISOString(),
              };
              return { ...Qs, messages: [...Qs.messages, Dn] };
            }),
          ));
      },
      {
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
        removeContactFromAllMemeBindings: Et,
      } = wP(),
      {
        archives: Ms,
        saveArchive: Us,
        loadArchive: bn,
        deleteArchive: en,
        removeArchivesForChatIds: wn,
        bindSummaryToArchive: Gn,
        unbindSummaryFromArchive: Mn,
        unbindSummaryFromCurrentSession: la,
        removeSummaryFromArchive: Va,
        updateSummaryInArchive: za,
        updateArchiveSettings: ga,
      } = qR(fs, gt, rn, bs, ss);
    l.useEffect(() => {
      $e.current = Ms && typeof Ms == "object" ? Ms : {};
    }, [Ms]);
    const fr = l.useCallback(
        (Zt) => {
          const ds = String(Zt),
            ks = V.find((Ds) => String(Ds.id) === ds),
            Fs = fs
              .filter(
                (Ds) =>
                  !Ds.isGroup &&
                  Ds.contactId != null &&
                  String(Ds.contactId) === ds,
              )
              .map((Ds) => Ds.id);
          (Fs.includes(nt) && It(null),
            ss((Ds) => {
              const Ps = { ...Ds };
              return (
                Fs.forEach(($s) => {
                  delete Ps[$s];
                }),
                Ps
              );
            }),
            gt((Ds) =>
              Ds.filter(($s) =>
                $s.isGroup || $s.contactId == null
                  ? !0
                  : String($s.contactId) !== ds,
              ).map(($s) => {
                if (!$s.isGroup) return $s;
                const Gs = ($s.memberIds || []).some((jn) => String(jn) === ds),
                  Qs = ($s.messages || []).filter(
                    (jn) =>
                      String((jn == null ? void 0 : jn.contactId) ?? "") !== ds,
                  ),
                  Dn = Qs.length !== ($s.messages || []).length;
                if (!Gs && !Dn) return $s;
                const Hn = { ...$s };
                if (Gs) {
                  Hn.memberIds = ($s.memberIds || []).filter(
                    (Pn) => String(Pn) !== ds,
                  );
                  const jn = { ...$s.settings };
                  (["memberRoles", "memberTitles", "mutedMembers"].forEach(
                    (Pn) => {
                      if (jn[Pn] && typeof jn[Pn] == "object") {
                        const Wn = { ...jn[Pn] };
                        (Object.keys(Wn).forEach((Ua) => {
                          String(Ua) === ds && delete Wn[Ua];
                        }),
                          (jn[Pn] = Wn));
                      }
                    },
                  ),
                    (Hn.settings = jn));
                }
                if (Dn) {
                  Hn.messages = Qs;
                  const jn = Qs.length ? Qs[Qs.length - 1] : null;
                  ((Hn.lastMessage = jn
                    ? String(jn.text ?? jn.content ?? "")
                    : ""),
                    (Hn.timestamp =
                      (jn == null ? void 0 : jn.timestamp) ||
                      Hn.timestamp ||
                      new Date().toISOString()));
                }
                return Hn;
              }),
            ),
            wn(Fs),
            Ne(Fs),
            Et(ds));
          const Ys = new Set(
            [
              ks == null ? void 0 : ks.nickname,
              ks == null ? void 0 : ks.name,
              ks == null ? void 0 : ks.remark,
            ]
              .filter(Boolean)
              .map(String),
          );
          (at((Ds) =>
            Ds.filter((Ps) => {
              var Gs;
              if (Ps.roleContactId != null && String(Ps.roleContactId) === ds)
                return !1;
              if (Ys.size === 0) return !0;
              const $s =
                ((Gs = Ps == null ? void 0 : Ps.user) == null
                  ? void 0
                  : Gs.name) != null
                  ? String(Ps.user.name)
                  : "";
              return !(!Ps.roleContactId && $s && Ys.has($s));
            }),
          ),
            K((Ds) => {
              const Ps = { ...Ds };
              return (
                delete Ps[ds],
                delete Ps[Zt],
                window.dispatchEvent(
                  new CustomEvent(Zg, { detail: { spaces: Ps } }),
                ),
                Ps
              );
            }),
            oF(ds, { deletedChatIds: Fs }),
            ke(ds),
            window.dispatchEvent(
              new CustomEvent(Jl, {
                detail: { contactId: ds, contact: ks || null },
              }),
            ));
        },
        [V, fs, nt, It, ss, gt, at, ke, wn, Ne, Et, K],
      ),
      {
        apiLogs: oi,
        clearApiLogs: Yr,
        addApiLog: Tr,
        fetchWeather: Io,
        fetchTime: rr,
        callApi: Md,
        runProactiveMomentCheck: al,
        generateNpcComments: hg,
        summarizeHistory: af,
        calculateTokenEstimate: gg,
        triggerAiMomentInteraction: rf,
        triggerAiReply: of,
        triggerGroupReply: Dp,
        generateContactInfo: bg,
        replyFailedChatIdRef: Td,
        privateReplyInFlightRef: mr,
      } = KR(s, i, V, fs, gt, De, at, bs, ss, nl, Oc, j, T, ps, n, ae, Ms, on);
    ((re.current = Md), (he.current = Tr), (ue.current = rf));
    const $p = l.useCallback(
        async (Zt, ds = {}) => {
          var Ua, br;
          const ks = String(Zt ?? "");
          if (!ks) return null;
          const Ss =
            ((Ua = G.current) == null
              ? void 0
              : Ua.find((xn) => String(xn == null ? void 0 : xn.id) === ks)) ||
            null;
          if (
            !Ss ||
            (!((Ss == null ? void 0 : Ss.npcPoolUpdateEnabled) !== !1) &&
              !(ds != null && ds.force))
          )
            return null;
          const Ds = He(ks)
              .filter((xn) => xn && xn.name)
              .slice(0, 40)
              .map((xn) => ({
                name: xn.name,
                persona: xn.persona || "",
                relationTag: xn.relationTag || "",
                status: xn.status || "active",
              })),
            Ps = [
              {
                sender: "system",
                type: "system",
                text: `【任务】为该联系人更新 NPC 关系池（增量 patch）。
【联系人】${Ss.nickname || Ss.name}
【联系人人设】${(Ss.setting || "无").slice(0, 2600)}
【现有NPC池(摘要)】${JSON.stringify({ npcs: Ds }, null, 0)}
只输出 patch JSON，字段 add/update/setStatus 必须存在。`,
              },
            ],
            $s = await ((br = re.current) == null
              ? void 0
              : br.call(
                  re,
                  Ps,
                  Ss,
                  "npc_pool_update",
                  {},
                  [],
                  [],
                  [],
                  !1,
                  "",
                  j(Ss),
                )),
            Gs = String($s || "").trim();
          let Qs = null;
          try {
            const xn = Gs.match(/\{[\s\S]*\}/);
            Qs = JSON.parse(xn ? xn[0] : Gs);
          } catch {
            Qs = null;
          }
          const Dn = Array.isArray(Qs == null ? void 0 : Qs.add) ? Qs.add : [],
            Hn = Array.isArray(Qs == null ? void 0 : Qs.update)
              ? Qs.update
              : [],
            jn = Array.isArray(Qs == null ? void 0 : Qs.setStatus)
              ? Qs.setStatus
              : [],
            Pn = new Set(Pe[ks] || []),
            Wn = (xn) => {
              const Aa = String(xn || "").trim();
              return !(!Aa || fe(ks, Aa) || Pn.has($l(Aa)));
            };
          return (
            Dn.forEach((xn) => {
              Wn(xn == null ? void 0 : xn.name) &&
                Ie(ks, {
                  name: xn == null ? void 0 : xn.name,
                  persona: xn == null ? void 0 : xn.persona,
                  relationTag: xn == null ? void 0 : xn.relationTag,
                  status: (xn == null ? void 0 : xn.status) || "active",
                });
            }),
            Hn.forEach((xn) => {
              Wn(xn == null ? void 0 : xn.name) &&
                Ie(ks, {
                  name: xn == null ? void 0 : xn.name,
                  persona: xn == null ? void 0 : xn.persona,
                  relationTag: xn == null ? void 0 : xn.relationTag,
                });
            }),
            jn.forEach((xn) => {
              const Aa = String((xn == null ? void 0 : xn.name) || "").trim(),
                si = String((xn == null ? void 0 : xn.status) || "").trim();
              !Aa || !si || (Wn(Aa) && Re(ks, Aa, si));
            }),
            Xp(ks),
            { ok: !0, add: Dn.length, update: Hn.length, setStatus: jn.length }
          );
        },
        [He, j, Re, Ie, fe, Pe],
      ),
      lf = pn.useRef(new Set()),
      Fp = rF({
        handleRedPacketGrabByAI: (Zt, ds, ks, Ss) => {
          var Fs;
          return (Fs = Ls.current) == null
            ? void 0
            : Fs.call(Ls, Zt, ds, ks, Ss);
        },
        handleRedPacketGrabsByAIBatch: (Zt, ds, ks) => {
          var Ss;
          return (Ss = Ot.current) == null ? void 0 : Ss.call(Ot, Zt, ds, ks);
        },
        chatsRef: ae,
        contactsRef: G,
        memes: nl,
        memeCategories: Oc,
        callStateRef: ge,
        setCallStateRef: ws,
        setCallState: Is,
        setChats: gt,
        unlockAudio: pt,
        playTTS: ys,
        playSound: Oa,
        receiveGroupRepliesFromGroupChat: iF,
        updateChatSettings: Bs,
        sendSystemMessage: (Zt, ds) => Ut(Zt, ds, null, "system"),
        updateMessage: Js,
        handleTransferAction: (Zt, ds, ks, Ss) => {
          var Fs;
          return (Fs = rs.current) == null
            ? void 0
            : Fs.call(rs, Zt, ds, ks, Ss);
        },
      }),
      xo = async (Zt, ds = !1, ks = "", Ss = null, Fs = null, Ys = null) => {
        var $s,
          Gs,
          Qs,
          Dn,
          Hn,
          jn,
          Pn,
          Wn,
          Ua,
          br,
          xn,
          Aa,
          si,
          Di,
          ec,
          Ki,
          Ma,
          Ga,
          Sr,
          li,
          qi,
          il,
          tc,
          ls;
        let Ds =
          ($s = ae.current) == null ? void 0 : $s.find(($n) => $n.id === Zt);
        Ds ||
          (await new Promise(($n) => setTimeout($n, 80)),
          (Ds =
            (Gs = ae.current) == null
              ? void 0
              : Gs.find(($n) => $n.id === Zt)));
        const Ps =
          (Ds == null ? void 0 : Ds.isGroup) === !0 ||
          (Array.isArray(Ds == null ? void 0 : Ds.memberIds) &&
            Ds.memberIds.length > 0 &&
            Ds.contactId == null);
        try {
          if (Ps) {
            if (kt.current.has(Zt)) return null;
            (kt.current.add(Zt),
              gt((ta) =>
                ta.map((qn) => (qn.id === Zt ? { ...qn, isTyping: !0 } : qn)),
              ),
              Br((ta) => {
                const qn = new Set(ta);
                return (qn.add(Zt), qn);
              }));
            const Xa = 95 * 1e3;
            let Ur = setTimeout(() => {
                (gt((ta) =>
                  ta.map((qn) => (qn.id === Zt ? { ...qn, isTyping: !1 } : qn)),
                ),
                  Br((ta) => {
                    const qn = new Set(ta);
                    return (qn.delete(Zt), qn);
                  }),
                  kt.current.delete(Zt));
              }, Xa),
              Ja = null,
              Ka = null;
            try {
              await new Promise((er) => setTimeout(er, 50));
              let ta =
                ((Qs = ae.current) == null
                  ? void 0
                  : Qs.find((er) => er.id === Zt)) ?? Ds;
              const qn =
                  ((jn =
                    (Hn =
                      (Dn = ae.current) == null
                        ? void 0
                        : Dn.find((er) => er.id === Zt)) == null
                      ? void 0
                      : Hn.messages) == null
                    ? void 0
                    : jn.length) ?? 0,
                ca = Fs === "chat_regen";
              Ss &&
                ta &&
                Ss.length > 0 &&
                (ca || Ss.length >= qn) &&
                (ta = { ...ta, messages: Ss });
              const ci =
                  (Pn = ae.current) == null
                    ? void 0
                    : Pn.find((er) => er.id === Zt),
                xi =
                  ((Wn = ci == null ? void 0 : ci.messages) == null
                    ? void 0
                    : Wn.length) ?? 0,
                Gc =
                  ((Ua = ta == null ? void 0 : ta.messages) == null
                    ? void 0
                    : Ua.length) ?? 0;
              if (
                (ci &&
                  xi > Gc &&
                  !(ca && Ss && Ss.length > 0) &&
                  (ta = { ...ta, messages: ci.messages }),
                !(
                  (br = ta == null ? void 0 : ta.messages) != null && br.length
                ) && ta)
              ) {
                await new Promise((Na) => setTimeout(Na, 200));
                const er =
                  (xn = ae.current) == null
                    ? void 0
                    : xn.find((Na) => Na.id === Zt);
                (Aa = er == null ? void 0 : er.messages) != null &&
                  Aa.length &&
                  (ta = { ...ta, messages: er.messages });
              }
              const qa = ge.current,
                El =
                  (qa == null ? void 0 : qa.status) === "connected" &&
                  (qa == null ? void 0 : qa.chatId) === Zt &&
                  (qa == null ? void 0 : qa.isGroup),
                Ll = Fs || (El ? "video_call" : void 0);
              if (El && !Ss && (Ll === "video_call" || (Ll == null && El))) {
                const er = (qa == null ? void 0 : qa.currentMessages) || [];
                ta = { ...ta, messages: [...er] };
              }
              if (El && Ll === "video_call") {
                const er = (
                  ((Di =
                    (si = ae.current) == null
                      ? void 0
                      : si.find((Na) => String(Na.id) === String(Zt))) == null
                    ? void 0
                    : Di.messages) || []
                ).length;
                Is((Na) =>
                  String((Na == null ? void 0 : Na.chatId) ?? "") ===
                    String(Zt ?? "") &&
                  Na != null &&
                  Na.isGroup &&
                  (Na == null ? void 0 : Na.status) === "connected"
                    ? { ...Na, groupVideoChatSnapshotLen: er }
                    : Na,
                );
              }
              Ja = await Dp(Zt, ta || Ds, Ll, {
                isAutoReply: ds,
                timeSinceLastMessage: ks,
              });
              const ho = (Ja == null ? void 0 : Ja.replies) ?? [];
              return (
                (Ka = await Fp(Zt, Ja)),
                ho.length > 0
                  ? ho.map((er) => er.text).join(`
`)
                  : null
              );
            } finally {
              (clearTimeout(Ur),
                Fs === "video_call_decision" &&
                  Nn(
                    Zt,
                    Ja ?? { replies: [], actions: [], video_events: [] },
                    Ka,
                  ),
                kt.current.delete(Zt),
                gt((ta) =>
                  ta.map((qn) => (qn.id === Zt ? { ...qn, isTyping: !1 } : qn)),
                ),
                Br((ta) => {
                  const qn = new Set(ta);
                  return (qn.delete(Zt), qn);
                }));
            }
          }
          const $n = VF(Zt, {
              chatsRef: ae,
              contactsRef: G,
              getRoleBoundUserRef: Q,
            }),
            Ir =
              $n != null && $n.cardMessage && $n != null && $n.otherName
                ? {
                    otherName: $n.otherName,
                    cardContent: ($n.cardMessage.messages || []).map(
                      (Xa) =>
                        `${Xa.sender === "friend" ? $n.cardMessage.boundUserName || "用户" : $n.otherName}：${(Xa.text || "").trim()}`,
                    ).join(`
`),
                  }
                : null;
          let An = Ss;
          const Er = ge.current;
          (Er == null ? void 0 : Er.status) === "connected" &&
            (Er == null ? void 0 : Er.chatId) === Zt &&
            !(Er != null && Er.isGroup) &&
            ((ec = Er == null ? void 0 : Er.currentMessages) == null
              ? void 0
              : ec.length) &&
            (An = [
              ...(Ss ??
                ((Ma =
                  (Ki = ae.current) == null
                    ? void 0
                    : Ki.find((Ur) => Ur.id === Zt)) == null
                  ? void 0
                  : Ma.messages) ??
                (Ds == null ? void 0 : Ds.messages) ??
                []),
              ...Er.currentMessages,
            ]);
          const ir = await of(Zt, ds, ks, An, null, Fs, null, Ir);
          if (ir && typeof ir == "object" && ir.helpAssistantPayload != null) {
            const Xa = ir.helpAssistantPayload,
              Ur = new Date().toISOString(),
              Ja = Date.now(),
              Ka = [],
              ta = (qn) => {
                const ca = String(qn || "").trim();
                if (!ca) return [];
                if (/\|\|/.test(ca) || /｜｜/.test(ca))
                  return ca
                    .split(/\s*\|\|\s*|｜｜/g)
                    .map((xi) => xi.trim())
                    .filter(Boolean);
                const ci = ca
                  .split(/\n{2,}/)
                  .map((xi) => xi.trim())
                  .filter(Boolean);
                return ci.length > 1 ? ci : [ca];
              };
            if (
              (Xa.plainAnswer &&
                String(Xa.plainAnswer).trim() &&
                ta(Xa.plainAnswer).forEach((qn, ca) => {
                  Ka.push({
                    id: `${Ja}-h1-${ca}`,
                    sender: "them",
                    type: "help_assistant_plain",
                    text: qn,
                    timestamp: Ur,
                  });
                }),