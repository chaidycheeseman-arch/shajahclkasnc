            ? [...Jt].sort((Lt, Qt) => qt(Qt) - qt(Lt) || Vt(Qt) - Vt(Lt))
            : Jt;
      },
      [o],
    ),
    nt = l.useMemo(() => ae(d), [d, ae]);
  (l.useEffect(() => {
    if (!(Jn != null && Jn.auth)) return;
    (async () => {
      const {
        data: { session: Vt },
      } = await Jn.auth.getSession();
      if (Vt != null && Vt.user) {
        je({ uid: Vt.user.id });
        return;
      }
      const {
        data: { user: qt },
        error: Lt,
      } = await Jn.auth.signInAnonymously();
      (qt && je({ uid: qt.id }), Lt && U(Lt.message));
    })();
    const {
      data: { subscription: Jt },
    } = Jn.auth.onAuthStateChange((Vt, qt) => {
      je(qt != null && qt.user ? { uid: qt.user.id } : null);
    });
    return () => (Jt == null ? void 0 : Jt.unsubscribe());
  }, []),
    l.useEffect(() => {
      let At = !1;
      return (
        Promise.all([be.get(Z4, []), be.get(Uf, [])]).then(([Jt, Vt]) => {
          At ||
            (Array.isArray(Jt) && Jt.length > 0 && k(new Set(Jt)),
            Array.isArray(Vt) && Vt.length > 0 && _(new Set(Vt)));
        }),
        () => {
          At = !0;
        }
      );
    }, []));
  const It = l.useCallback(
    async (At = !1, Jt = null) => {
      var Vt, qt;
      if (Jn) {
        At || (L(null), F(null), x(!0));
        try {
          const Lt = await be.get(qd, 0),
            Qt = Date.now(),
            js = Lt && Qt - Lt < $X;
          if (!At && js) {
            const Ke = await be.get(Qx, []),
              Nt = Array.isArray(Ke) ? Ke : [];
            if (Nt.length >= 0) {
              (u(ae(Nt)),
                x(!1),
                p(Nt.length > 0 ? Nt[Nt.length - 1] : null),
                h(Nt.length >= Kd));
              return;
            }
          }
          let cs = 0;
          if (!At) {
            const { data: Ke } = await Jn.from("discovery_meta")
              .select("last_updated")
              .eq("id", 1)
              .single();
            cs =
              Ke != null && Ke.last_updated
                ? new Date(Ke.last_updated).getTime()
                : 0;
          }
          const Ne = await be.get(Q4, 0),
            Je = await be.get(Qx, []),
            St = Array.isArray(Je) && Je.length > 0,
            Be = !At && (cs > Ne || (Ne === 0 && !St));
          if (At || Be) {
            let Ke = Jn.from("presets")
              .select("*")
              .eq("visibility", "public")
              .order("created_at", { ascending: !1 })
              .limit(Kd);
            At &&
              Jt != null &&
              Jt.createdAt &&
              (Ke = Jn.from("presets")
                .select("*")
                .eq("visibility", "public")
                .lt("created_at", Jt.createdAt)
                .order("created_at", { ascending: !1 })
                .limit(Kd));
            const { data: Nt, error: bt } = await Ke;
            if (bt) throw bt;
            $(!1);
            const ns = (Nt || []).map((Le) => Jd({ ...Le, id: Le.id }));
            if (At) (u((Le) => ae([...Le, ...ns])), v(!1));
            else {
              const Le = [...ns].sort(
                (_e, yt) =>
                  new Date(
                    (yt == null ? void 0 : yt.createdAt) ??
                      (yt == null ? void 0 : yt.created_at) ??
                      0,
                  ).getTime() -
                  new Date(
                    (_e == null ? void 0 : _e.createdAt) ??
                      (_e == null ? void 0 : _e.created_at) ??
                      0,
                  ).getTime(),
              );
              (u(ae(Le)),
                await be.set(Qx, Le),
                await be.set(Q4, cs || Qt),
                await be.set(qd, Qt));
            }
            const Ge = ns[ns.length - 1];
            (p(Ge ? { id: Ge.id, createdAt: Ge.createdAt } : null),
              h(ns.length >= Kd));
          } else {
            const Ke = Array.isArray(Je) ? Je : [];
            (u(ae(Ke)),
              p(Ke.length > 0 ? Ke[Ke.length - 1] : null),
              h(Ke.length >= Kd),
              At || (await be.set(qd, Qt)));
          }
        } catch (Lt) {
          if (
            (F(
              (Lt == null ? void 0 : Lt.code) ??
                ((Vt = Lt == null ? void 0 : Lt.error) == null
                  ? void 0
                  : Vt.code) ??
                null,
            ),
            /offline|fetch|network|Failed to fetch/i.test(
              (Lt == null ? void 0 : Lt.message) || "",
            ))
          ) {
            const js = await be.get(Qx, []),
              cs = Array.isArray(js) ? js : [];
            cs.length > 0
              ? (u(ae(cs)),
                L(null),
                F(null),
                p(cs.length > 0 ? cs[cs.length - 1] : null),
                h(cs.length >= Kd))
              : (u([]),
                L(
                  "网络不可用或无法连接服务器，请检查网络后重试。若尚未发布作品，联网后即可正常显示。",
                ));
          } else
            (L(
              (Lt == null ? void 0 : Lt.message) ||
                ((qt = Lt == null ? void 0 : Lt.error) == null
                  ? void 0
                  : qt.message) ||
                "加载失败",
            ),
              u([]));
        } finally {
          x(!1);
        }
      }
    },
    [ae],
  );
  l.useEffect(() => {
    n === "list" && It(!1);
  }, [n]);
  const Xt = l.useCallback(() => {
      !m || y || !f || (v(!0), It(!0, f));
    }, [m, y, f, It]),
    bs = l.useCallback(() => {
      (be.set(qd, 0), It(!1));
    }, [It]),
    ss = l.useCallback(async (At) => {
      var Qt;
      if (!Jn || !At) return;
      const Jt = FX + At,
        Vt = Jt + "_at",
        qt = Date.now(),
        Lt = await be.get(Vt, 0);
      if (Lt && qt - Lt < zX) {
        const js = await be.get(Jt, null);
        if (js && typeof js == "object" && Array.isArray(js.presets)) {
          (Oe(js.profile || null), Ye(js.presets || []), Ue(!1), jt(null));
          return;
        }
      }
      (Ue(!0), jt(null));
      try {
        const { data: js, error: cs } = await Jn.from("creator_profiles")
          .select("user_id, creator_id, display_name, signature, avatar_url")
          .eq("creator_id", At)
          .maybeSingle();
        if (cs) throw cs;
        const { data: Ne, error: Je } = await Jn.from("presets")
          .select("*")
          .eq("author_creator_id", At)
          .eq("visibility", "public")
          .order("created_at", { ascending: !1 });
        if (Je) throw Je;
        const St = js
            ? {
                displayName: js.display_name ?? "",
                avatarUrl: js.avatar_url ?? "",
                signature: js.signature ?? "",
              }
            : null,
          Be = (Ne || []).map((Ke) => Jd({ ...Ke, id: Ke.id }));
        (Oe(St),
          Ye(Be),
          jt(null),
          await be.set(Jt, { profile: St, presets: Be }),
          await be.set(Vt, qt));
      } catch (js) {
        (jt(
          (js == null ? void 0 : js.message) ||
            ((Qt = js == null ? void 0 : js.error) == null
              ? void 0
              : Qt.message) ||
            "加载失败",
        ),
          Oe(null),
          Ye([]));
      } finally {
        Ue(!1);
      }
    }, []),
    _s = l.useCallback((At) => {
      const Jt = (At || "").trim();
      if (!Jt) return null;
      try {
        if (/jilu_creator=/i.test(Jt)) {
          const Vt = Jt.startsWith("http")
              ? Jt
              : `https://dummy?${Jt.split("?")[1] || Jt}`,
            Lt = new URL(
              Vt.includes("?") ? Vt : `https://dummy?${Jt}`,
            ).searchParams.get("jilu_creator");
          return Lt ? Lt.trim().toLowerCase() : null;
        }
        return Jt.replace(/^@/, "").trim().toLowerCase() || null;
      } catch {
        return Jt.replace(/^@/, "").trim().toLowerCase() || null;
      }
    }, []),
    qs = l.useCallback(() => {
      const At = _s(Gt);
      At &&
        (ct(!0),
        ft(At),
        a("creatorHome"),
        Pt(""),
        ss(At).finally(() => ct(!1)));
    }, [Gt, _s, ss]);
  l.useEffect(() => {
    if (!s || !s.trim()) return;
    const At = s.trim().toLowerCase();
    (ft(At), a("creatorHome"), ss(At));
  }, [s, ss]);
  const Bs = l.useCallback(async (At) => {
    if (!(!Jn || !At)) {
      oe(!0);
      try {
        const { data: Jt, error: Vt } = await Jn.from("presets")
          .select("*")
          .eq("author_user_id", At)
          .order("created_at", { ascending: !1 });
        if (Vt) throw Vt;
        const qt = (Jt || []).map((Lt) => Jd({ ...Lt, id: Lt.id }));
        (ye(qt), await be.set(Zx + At, qt));
      } catch {
        ye([]);
      } finally {
        oe(!1);
      }
    }
  }, []);
  l.useEffect(() => {
    if (n !== "myPublish" || !(X != null && X.uid)) return;
    const At = X.uid,
      Jt = Zx + At;
    let Vt = !1;
    return (
      be.get(Jt, []).then((qt) => {
        if (Vt) return;
        const Lt = Array.isArray(qt) ? qt : [];
        Lt.length > 0 ? (ye(Lt), oe(!1)) : Bs(At);
      }),
      () => {
        Vt = !0;
      }
    );
  }, [n, X == null ? void 0 : X.uid, Bs]);
  const Js = async (At) => {
      if (
        !Jn ||
        !(X != null && X.uid) ||
        ee ||
        !window.confirm("确定要删除这条作品吗？")
      )
        return;
      const Jt = X.uid;
      H(At);
      try {
        const { error: Vt } = await Jn.from("presets").delete().eq("id", At);
        if (Vt) throw Vt;
        await Jn.from("discovery_meta")
          .update({ last_updated: new Date().toISOString() })
          .eq("id", 1);
        const qt = xe.filter((Lt) => Lt.id !== At);
        (ye(qt), await be.set(Zx + Jt, qt), be.set(qd, 0));
      } catch {
      } finally {
        H(null);
      }
    },
    Xs = l.useCallback(async () => {
      if (Jn) {
        Te(!0);
        try {
          const { data: At, error: Jt } = await Jn.from("preset_likes")
            .select("preset_id")
            .eq("user_id", gt);
          if (Jt) throw Jt;
          const Vt = (At || []).map((cs) => cs.preset_id).filter(Boolean);
          if (Vt.length === 0) {
            (pe([]),
              _(new Set()),
              await be.set(Bf, []),
              await be.set(Uf, []),
              Te(!1));
            return;
          }
          const { data: qt, error: Lt } = await Jn.from("presets")
            .select("*")
            .in("id", Vt);
          if (Lt) throw Lt;
          const Qt = (qt || []).map((cs) => Jd({ ...cs, id: cs.id })),
            js = Vt.map((cs) => Qt.find((Ne) => Ne.id === cs)).filter(Boolean);
          (pe(js),
            _(new Set(js.map((cs) => cs.id))),
            await be.set(Bf, js),
            await be.set(
              Uf,
              js.map((cs) => cs.id),
            ));
        } catch {
          pe([]);
        } finally {
          Te(!1);
        }
      }
    }, [gt]);
  l.useEffect(() => {
    if (n !== "myLikes") return;
    let At = !1;
    return (
      be.get(Bf, []).then((Jt) => {
        !At && Array.isArray(Jt) && pe(Jt);
      }),
      () => {
        At = !0;
      }
    );
  }, [n]);
  const gn = l.useCallback(async () => {
    const At = X == null ? void 0 : X.uid;
    if (!(!Jn || !At))
      try {
        const { data: Jt, error: Vt } = await Jn.from("creator_profiles")
          .select("*")
          .eq("user_id", At)
          .single();
        if (Vt && Vt.code !== "PGRST116") throw Vt;
        const qt = Jt
          ? q4(Jt)
          : { creatorId: "", displayName: "", signature: "", avatarUrl: "" };
        (W(qt), await be.set(hy + At, qt));
      } catch {}
  }, [X == null ? void 0 : X.uid]);
  l.useEffect(() => {
    if (n !== "myProfile" || !(X != null && X.uid)) return;
    const At = X.uid,
      Jt = hy + At;
    let Vt = !1;
    return (
      be.get(Jt, null).then((qt) => {
        Vt ||
          (qt &&
          typeof qt == "object" &&
          (qt.displayName != null ||
            qt.creatorId != null ||
            qt.signature != null ||
            qt.avatarUrl != null)
            ? W({
                creatorId: qt.creatorId ?? "",
                displayName: qt.displayName ?? "",
                signature: qt.signature ?? "",
                avatarUrl: qt.avatarUrl ?? "",
              })
            : gn());
      }),
      () => {
        Vt = !0;
      }
    );
  }, [n, X == null ? void 0 : X.uid, gn]);
  const sn = async () => {
      var js;
      const At = X == null ? void 0 : X.uid;
      if (!Jn || !At || ue) return;
      const {
          creatorId: Jt,
          displayName: Vt,
          signature: qt,
          avatarUrl: Lt,
        } = ke,
        Qt = (Jt || "").trim().toLowerCase();
      if (Qt) {
        const { data: cs } = await Jn.from("creator_profiles")
          .select("user_id")
          .eq("creator_id", Qt)
          .limit(1);
        if (cs != null && cs.length && cs[0].user_id !== At) {
          ge("该专属 ID 已被使用");
          return;
        }
      }
      (re(!0), ge(null), G(!1));
      try {
        const { error: cs } = await Jn.from("creator_profiles").upsert(
          {
            user_id: At,
            creator_id: Qt || null,
            display_name: (Vt || "").trim() || null,
            signature: (qt || "").trim() || null,
            avatar_url: (Lt || "").trim() || null,
            updated_at: new Date().toISOString(),
          },
          { onConflict: "user_id" },
        );
        if (cs) throw cs;
        (G(!0),
          setTimeout(() => G(!1), 3e3),
          await be.set(hy + At, {
            creatorId: Qt || "",
            displayName: (Vt || "").trim() || "",
            signature: (qt || "").trim() || "",
            avatarUrl: (Lt || "").trim() || "",
          }));
      } catch (cs) {
        ge(
          (cs == null ? void 0 : cs.message) ||
            ((js = cs == null ? void 0 : cs.error) == null
              ? void 0
              : js.message) ||
            "保存失败",
        );
      } finally {
        re(!1);
      }
    },
    ln = l.useCallback((At) => {
      k((Jt) => {
        const Vt = new Set(Jt);
        return (Vt.add(At), be.set(Z4, [...Vt]), Vt);
      });
    }, []),
    rn = async (At) => {
      var Vt;
      if (!Jn || w.has(At) || A.has(At) || P) return;
      (Z(null), z(At));
      const Jt = (qt, Lt) => {
        (_((js) => new Set([...js, At])),
          ln(At),
          be.get(Uf, []).then((js) => {
            const cs = Array.isArray(js) ? js : [];
            cs.includes(At) || be.set(Uf, [At, ...cs]);
          }));
        const Qt = Lt || (b && b.id === At ? { ...b, thankCount: qt } : null);
        (Qt &&
          be.get(Bf, []).then((js) => {
            const cs = Array.isArray(js) ? js : [],
              Ne = [Qt, ...cs.filter((Je) => Je && Je.id !== At)];
            (be.set(Bf, Ne),
              pe((Je) => (Je.some((St) => St.id === At) ? Je : [Qt, ...Je])));
          }),
          N((js) => (js && js.id === At ? { ...js, thankCount: qt } : js)),
          u((js) =>
            js.map((cs) => (cs.id === At ? { ...cs, thankCount: qt } : cs)),
          ));
      };
      try {
        const { data: qt, error: Lt } = await Jn.rpc("jilu_like_preset", {
          p_preset_id: At,
          p_user_id: gt,
        });
        if (!Lt && qt && typeof qt == "object" && "ok" in qt) {
          if (qt.ok === !1) {
            qt.code === "daily_limit"
              ? (Z(qt.message || "今日通过点赞获取作品已达上限，请明日再试"),
                q(0))
              : Z(qt.message || "点赞失败");
            return;
          }
          const Be = qt.thank_count ?? 0;
          typeof qt.remaining_today == "number" && q(qt.remaining_today);
          const Ke = qt.preset,
            Nt = Ke ? Jd({ ...Ke, id: Ke.id }) : null,
            bt = Nt
              ? { ...Nt, thankCount: Be }
              : b && b.id === At
                ? { ...b, thankCount: Be }
                : null;
          Jt(Be, bt);
          return;
        }
        const Qt = String(
            (Lt == null ? void 0 : Lt.message) ||
              (Lt == null ? void 0 : Lt.details) ||
              "",
          ),
          js =
            Lt &&
            (/function.*jilu_like_preset|does not exist|42883|PGRST202|schema cache/i.test(
              Qt,
            ) ||
              Lt.code === "42883" ||
              Lt.code === "PGRST202");
        if (Lt && !js) {
          Z(Qt || "点赞失败");
          return;
        }
        if (!Lt && (!qt || typeof qt != "object" || !("ok" in qt))) {
          Z("点赞返回异常，请稍后重试");
          return;
        }
        const { error: cs } = await Jn.from("preset_likes").insert({
          preset_id: At,
          user_id: gt,
        });
        if (cs) throw cs;
        const { data: Ne } = await Jn.from("presets")
            .select("thank_count")
            .eq("id", At)
            .single(),
          Je = ((Ne == null ? void 0 : Ne.thank_count) ?? 0) + 1,
          { error: St } = await Jn.from("presets")
            .update({ thank_count: Je })
            .eq("id", At);
        if (St) throw St;
        Jt(Je, b && b.id === At ? { ...b, thankCount: Je } : null);
      } catch (qt) {
        Z(
          (qt == null ? void 0 : qt.message) ||
            ((Vt = qt == null ? void 0 : qt.error) == null
              ? void 0
              : Vt.message) ||
            "点赞失败",
        );
      } finally {
        z(null);
      }
    },
    wt = async () => {
      const At = C.trim();
      if (!(!At || !Jn)) {
        (S(!0), T(null));
        try {
          const { data: Jt, error: Vt } = await Jn.from("presets")
            .select("*")
            .eq("private_key", At)
            .limit(1);
          if (Vt) throw Vt;
          if (!(Jt != null && Jt.length)) T(!1);
          else {
            const qt = Jt[0],
              Lt = Jd({ ...qt, id: qt.id });
            (T(null), N(Lt), ln(Lt.id), i("keySearch"), a("detail"), M(""));
          }
        } catch {
          T(!1);
        } finally {
          S(!1);
        }
      }
    },
    xs = async () => {
      var qt;
      if (!Jn) return;
      const At = we.trim(),
        Jt = Se.trim();
      let Vt = Xe.trim() || "匿名";
      if (!(!At || !Jt)) {
        ut(!0);
        try {
          let Lt = X == null ? void 0 : X.uid;
          if (!Lt) {
            const {
              data: { user: St },
              error: Be,
            } = await Jn.auth.signInAnonymously();
            if (Be) throw Be;
            ((Lt = (St == null ? void 0 : St.id) ?? null),
              Lt && je({ uid: Lt }));
          }
          let Qt = null;
          if (Lt) {
            const { data: St } = await Jn.from("creator_profiles")
              .select("*")
              .eq("user_id", Lt)
              .single();
            Qt = St ? q4(St) : null;
          }
          Qt != null && Qt.displayName && (Vt = Qt.displayName);
          const cs = $e === "private" ? BX() : null,
            { data: Ne, error: Je } = await Jn.from("presets")
              .insert({
                title: At,
                description: ve.trim() || "",
                cover_url: Ae.trim() || "",
                download_link: Jt,
                visibility: $e,
                private_key: cs,
                author_display_name: Vt,
                author_user_id: Lt ?? null,
                author_avatar_url: (Qt == null ? void 0 : Qt.avatarUrl) ?? null,
                author_creator_id: (Qt == null ? void 0 : Qt.creatorId) ?? null,
                thank_count: 0,
              })
              .select("id, created_at")
              .single();
          if (Je) throw Je;
          if (
            (await Jn.from("discovery_meta")
              .update({ last_updated: new Date().toISOString() })
              .eq("id", 1),
            Lt && Ne)
          ) {
            const St = {
                id: Ne.id,
                title: At,
                description: ve.trim() || "",
                coverUrl: Ae.trim() || "",
                downloadLink: Jt,
                visibility: $e,
                privateKey: cs,
                authorDisplayName: Vt,
                authorUserId: Lt,
                authorAvatarUrl: (Qt == null ? void 0 : Qt.avatarUrl) ?? null,
                authorCreatorId: (Qt == null ? void 0 : Qt.creatorId) ?? null,
                thankCount: 0,
                createdAt: Ne.created_at,
              },
              Be = Zx + Lt,
              Ke = await be.get(Be, []),
              Nt = Array.isArray(Ke) ? Ke : [];
            await be.set(Be, [St, ...Nt]);
          }
          (Ee(!0),
            He(null),
            cs && Ce(cs),
            setTimeout(
              () => {
                (a("list"),
                  Ee(!1),
                  He(null),
                  Ce(""),
                  De(!1),
                  Q(""),
                  Ve(""),
                  te(""),
                  Fe(""),
                  tt("public"),
                  ht(""),
                  be.set(qd, 0),
                  It(!1));
              },
              cs ? 8e3 : 1500,
            ));
        } catch (Lt) {
          He(
            (Lt == null ? void 0 : Lt.message) ||
              ((qt = Lt == null ? void 0 : Lt.error) == null
                ? void 0
                : qt.message) ||
              "发布失败，请检查网络与配置",
          );
        } finally {
          ut(!1);
        }
      }
    },
    ot = l.useCallback(() => {
      (PX(), fs(!1));
    }, []);
  return e.jsxs("div", {
    className:
      "h-full w-full flex flex-col bg-[#F9F7F2] text-[#1A1A1A] overflow-hidden font-serif relative",
    children: [
      e.jsx("div", {
        className: "absolute inset-0 pointer-events-none z-0 opacity-100",
        style: { backgroundImage: UX },
      }),
      e.jsx(Os, {
        children:
          Kt &&
          e.jsx(
            We.div,
            {
              role: "dialog",
              "aria-modal": "true",
              "aria-labelledby": "jilu-first-enter-title",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              className:
                "absolute inset-0 z-[100] flex items-center justify-center p-5 bg-[#1A1A1A]/45 backdrop-blur-[2px]",
              onClick: ot,
              children: e.jsxs(We.div, {
                initial: { opacity: 0, y: 12, scale: 0.98 },
                animate: { opacity: 1, y: 0, scale: 1 },
                exit: { opacity: 0, y: 8, scale: 0.98 },
                transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
                className:
                  "w-full max-w-[320px] p-5 bg-[#F9F7F2] border border-[#1A1A1A]/12 rounded-sm shadow-xl",
                onClick: (At) => At.stopPropagation(),
                children: [
                  e.jsx("p", {
                    id: "jilu-first-enter-title",
                    className:
                      "text-[10px] font-sans uppercase tracking-[0.2em] text-[#8A8A8A] mb-3",
                    children: "提示",
                  }),
                  e.jsx("p", {
                    className: "text-sm text-[#1A1A1A] leading-relaxed",
                    children:
                      "辑录 App 内上传的每一份作品均属于创作者本人；创作者本人可随时在作品管理处删除自己的作品。",
                  }),
                  e.jsx("button", {
                    type: "button",
                    onClick: ot,
                    className:
                      "mt-5 w-full py-3 bg-[#1A1A1A] text-[#F9F7F2] text-xs font-bold tracking-wider uppercase rounded-sm hover:bg-[#333] transition-colors",
                    children: "我知道了",
                  }),
                ],
              }),
            },
            "first-enter-notice",
          ),
      }),
      e.jsxs("header", {
        className:
          "relative z-10 flex items-end justify-between px-6 pt-12 pb-4 border-b border-[#1A1A1A]/8",
        children: [
          e.jsxs("div", {
            className: "flex flex-col",
            children: [
              e.jsx("span", {
                className:
                  "text-[10px] font-sans text-[#8A8A8A] uppercase tracking-[0.25em] mb-0.5",
                children: "STYLE COLLECTION",
              }),
              e.jsx("h1", {
                className:
                  "text-[2.5rem] font-serif italic tracking-tight text-[#1A1A1A] leading-none",
                children: "辑录",
              }),
            ],
          }),
          e.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              e.jsx("button", {
                type: "button",
                onClick: () => {
                  (Pt(""), a("creatorLink"));
                },
                className:
                  "w-10 h-10 rounded-full flex items-center justify-center border border-[#1A1A1A]/15 hover:bg-[#1A1A1A]/5 transition-colors",
                "aria-label": "通过链接访问创作者",
                title: "通过链接访问创作者主页",
                children: e.jsx(ew, { size: 18, strokeWidth: 1.5 }),
              }),
              e.jsx("button", {
                type: "button",
                onClick: () => {
                  (T(null), a("keySearch"));
                },
                className:
                  "w-10 h-10 rounded-full flex items-center justify-center border border-[#1A1A1A]/15 hover:bg-[#1A1A1A]/5 transition-colors",
                "aria-label": "用 Key 获取",
                children: e.jsx(e3, { size: 18, strokeWidth: 1.5 }),
              }),
              e.jsx("button", {
                type: "button",
                onClick: () => a("myHome"),
                className:
                  "w-10 h-10 rounded-full flex items-center justify-center border border-[#1A1A1A]/15 hover:bg-[#1A1A1A]/5 transition-colors",
                "aria-label": "我的",
                children: e.jsx(wr, { size: 18, strokeWidth: 1.5 }),
              }),
              e.jsx("button", {
                type: "button",
                onClick: () => a("publish"),
                className:
                  "w-10 h-10 rounded-full flex items-center justify-center bg-[#1A1A1A] text-[#F9F7F2] hover:bg-[#333] transition-colors",
                "aria-label": "发布",
                children: e.jsx(ea, { size: 20, strokeWidth: 2 }),
              }),
              e.jsx("button", {
                type: "button",
                onClick: t,
                className:
                  "w-10 h-10 rounded-full flex items-center justify-center border border-[#1A1A1A]/15 hover:bg-[#1A1A1A]/5 transition-colors",
                "aria-label": "关闭",
                children: e.jsx(Ts, { size: 20, strokeWidth: 1.5 }),
              }),
            ],
          }),
        ],
      }),
      n === "list" &&
        e.jsxs("div", {
          className: "relative z-10 flex border-b border-[#1A1A1A]/10",
          children: [
            e.jsx("button", {
              type: "button",
              onClick: () => c("time"),
              className: `flex-1 py-3 text-[10px] font-bold tracking-[0.2em] uppercase transition-colors ${o === "time" ? "text-[#1A1A1A] border-b-2 border-[#1A1A1A]" : "text-[#8A8A8A] hover:text-[#1A1A1A]"}`,
              children: "最新",
            }),
            e.jsx("button", {
              type: "button",
              onClick: () => c("heat"),
              className: `flex-1 py-3 text-[10px] font-bold tracking-[0.2em] uppercase transition-colors ${o === "heat" ? "text-[#1A1A1A] border-b-2 border-[#1A1A1A]" : "text-[#8A8A8A] hover:text-[#1A1A1A]"}`,
              children: "热度",
            }),
          ],
        }),
      e.jsx("main", {
        className: "flex-1 overflow-y-auto no-scrollbar relative z-10",
        children: e.jsxs(Os, {
          mode: "wait",
          children: [
            n === "list" &&
              e.jsx(
                We.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  className: "p-4 pb-24",
                  children: I
                    ? e.jsxs("div", {
                        className:
                          "flex flex-col items-center justify-center py-12 px-4 text-center",
                        children: [
                          e.jsx("p", {
                            className: "text-sm text-red-600/90 mb-2",
                            children: "加载失败",
                          }),
                          B &&
                            e.jsxs("p", {
                              className:
                                "text-[10px] text-[#8A8A8A] mb-1 font-mono",
                              children: ["错误码: ", B],
                            }),
                          e.jsx("p", {
                            className:
                              "text-xs text-[#8A8A8A] mb-3 max-w-[280px] break-words",
                            children: I,
                          }),
                          !I.includes("网络") &&
                            e.jsx("p", {
                              className:
                                "text-[10px] text-[#8A8A8A] uppercase tracking-wider mb-2 max-w-[280px]",
                              children:
                                "请检查发现页 Supabase 配置与网络后重试",
                            }),
                          e.jsx("button", {
                            type: "button",
                            onClick: () => {
                              var Jt;
                              const At = B ? `[${B}] ${I}` : I;
                              (Jt = navigator.clipboard) == null ||
                                Jt.writeText(At).then(
                                  () => {},
                                  () => {},
                                );
                            },
                            className:
                              "text-[10px] text-[#8A8A8A] underline mb-3",
                            children: "复制错误信息",
                          }),
                          e.jsx("button", {
                            type: "button",
                            onClick: bs,
                            className:
                              "px-4 py-2 border border-[#1A1A1A]/20 rounded-sm text-xs font-bold tracking-wider uppercase hover:bg-[#1A1A1A]/5",
                            children: "重试",
                          }),
                        ],
                      })
                    : g
                      ? e.jsx("div", {
                          className: "flex items-center justify-center py-20",
                          children: e.jsx(Sn, {
                            size: 28,
                            className: "animate-spin text-[#8A8A8A]",
                          }),
                        })
                      : nt.length === 0
                        ? e.jsxs("div", {
                            className:
                              "flex flex-col items-center justify-center py-20 text-[#8A8A8A]",
                            children: [
                              e.jsx("span", {
                                className:
                                  "text-[10px] uppercase tracking-[0.2em] mb-2",
                                children: "暂无公开作品",
                              }),
                              e.jsx("p", {
                                className: "text-sm italic",
                                children:
                                  "发布第一份作品，或使用 Key 获取私密分享",
                              }),
                              D &&
                                e.jsx("p", {
                                  className:
                                    "text-[10px] text-[#8A8A8A]/80 mt-4 max-w-[260px]",
                                  children:
                                    "提示：若列表顺序异常，请检查发现页 Supabase 索引",
                                }),
                            ],
                          })
                        : e.jsxs(e.Fragment, {
                            children: [
                              e.jsx("ul", {
                                className: "space-y-4",
                                children: nt.map((At, Jt) =>
                                  e.jsxs(
                                    We.li,
                                    {
                                      initial: { opacity: 0, y: 12 },
                                      animate: { opacity: 1, y: 0 },
                                      transition: { delay: Jt * 0.03 },
                                      onClick: () => {
                                        (i("list"), N(At), a("detail"));
                                      },
                                      className:
                                        "flex gap-4 p-4 bg-white/80 backdrop-blur-sm border border-[#1A1A1A]/6 rounded-sm cursor-pointer hover:border-[#1A1A1A]/15 hover:shadow-lg transition-all duration-300 group",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "w-20 aspect-[2/3] flex-shrink-0 rounded-sm overflow-hidden bg-[#E5E0D8]",
                                          children: At.coverUrl
                                            ? e.jsx("img", {
                                                src: At.coverUrl,
                                                alt: "",
                                                className:
                                                  "w-full h-full object-cover",
                                              })
                                            : e.jsx("div", {
                                                className:
                                                  "w-full h-full flex items-center justify-center text-[#8A8A8A] text-xs",
                                                children: "无图",
                                              }),
                                        }),
                                        e.jsxs("div", {
                                          className:
                                            "flex-1 min-w-0 flex flex-col justify-center",
                                          children: [
                                            e.jsx("h3", {
                                              className:
                                                "font-serif italic text-[#1A1A1A] text-lg truncate group-hover:underline",
                                              children: At.title,
                                            }),
                                            e.jsxs("div", {
                                              className:
                                                "flex items-center gap-2 mt-0.5 min-w-0",
                                              children: [
                                                e.jsx("div", {
                                                  className:
                                                    "w-5 h-5 rounded-full overflow-hidden flex-shrink-0 bg-[#E5E0D8]",
                                                  children: At.authorAvatarUrl
                                                    ? e.jsx("img", {
                                                        src: At.authorAvatarUrl,
                                                        alt: "",
                                                        className:
                                                          "w-full h-full object-cover",
                                                      })
                                                    : e.jsx("div", {
                                                        className:
                                                          "w-full h-full flex items-center justify-center",
                                                        children: e.jsx(wr, {
                                                          size: 12,
                                                          className:
                                                            "text-[#8A8A8A]",
                                                        }),
                                                      }),
                                                }),
                                                e.jsxs("span", {
                                                  className:
                                                    "text-[10px] text-[#8A8A8A] truncate",
                                                  children: [
                                                    At.authorDisplayName ||
                                                      "匿名",
                                                    At.authorCreatorId
                                                      ? ` @${At.authorCreatorId}`
                                                      : "",
                                                  ],
                                                }),
                                              ],
                                            }),
                                            e.jsxs("div", {
                                              className:
                                                "flex items-center gap-1 mt-1 text-[#8A8A8A]",
                                              children: [
                                                e.jsx(zn, {
                                                  size: 12,
                                                  className: "flex-shrink-0",
                                                }),
                                                e.jsx("span", {
                                                  className: "text-xs",
                                                  children: At.thankCount || 0,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        e.jsx(un, {
                                          size: 18,
                                          className:
                                            "flex-shrink-0 text-[#8A8A8A] rotate-180 self-center",
                                        }),
                                      ],
                                    },
                                    At.id,
                                  ),
                                ),
                              }),
                              D &&
                                nt.length > 0 &&
                                e.jsx("p", {
                                  className:
                                    "text-[10px] text-[#8A8A8A]/80 mt-3 text-center max-w-[280px] mx-auto",
                                  children:
                                    "提示：若列表顺序异常，请检查发现页 Supabase 索引",
                                }),
                              m &&
                                nt.length > 0 &&
                                e.jsx("div", {
                                  className: "mt-4 flex justify-center",
                                  children: e.jsx("button", {
                                    type: "button",
                                    disabled: y,
                                    onClick: Xt,
                                    className:
                                      "px-4 py-2 text-xs font-bold tracking-wider uppercase text-[#8A8A8A] hover:text-[#1A1A1A] border border-[#1A1A1A]/15 rounded-sm disabled:opacity-50",
                                    children: y ? "加载中..." : "加载更多",
                                  }),
                                }),
                            ],
                          }),
                },
                "list",
              ),
            n === "detail" &&
              b &&
              e.jsxs(
                We.div,
                {
                  initial: { opacity: 0, x: 24 },
                  animate: { opacity: 1, x: 0 },
                  exit: { opacity: 0, x: -24 },
                  transition: { type: "spring", damping: 28, stiffness: 300 },
                  className: "h-full flex flex-col pb-24",
                  children: [
                    e.jsx("div", {
                      className:
                        "flex items-center justify-between p-4 border-b border-[#1A1A1A]/8",
                      children: e.jsxs("button", {
                        type: "button",
                        onClick: () => a(r || "list"),
                        className:
                          "flex items-center gap-1 text-[#1A1A1A] hover:opacity-70",
                        children: [
                          e.jsx(un, { size: 20 }),
                          e.jsx("span", {
                            className:
                              "text-xs font-bold tracking-widest uppercase",
                            children: "返回",
                          }),
                        ],
                      }),
                    }),
                    e.jsxs("div", {
                      className: "flex-1 overflow-y-auto no-scrollbar px-4",
                      children: [
                        e.jsx("div", {
                          className:
                            "w-full rounded-sm overflow-hidden bg-[#E5E0D8] mt-2",
                          children: b.coverUrl
                            ? e.jsx("img", {
                                src: b.coverUrl,
                                alt: "",
                                className:
                                  "w-full h-auto max-w-full block align-middle",
                                loading: "lazy",
                              })
                            : e.jsx("div", {
                                className:
                                  "w-full min-h-[120px] flex items-center justify-center text-[#8A8A8A] py-8",
                                children: "无封面",
                              }),
                        }),
                        e.jsx("h2", {
                          className:
                            "font-serif italic text-2xl text-[#1A1A1A] mt-4",
                          children: b.title,
                        }),
                        e.jsxs("div", {
                          className: "flex items-center gap-2 mt-2",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-[#E5E0D8]",
                              children: b.authorAvatarUrl
                                ? e.jsx("img", {
                                    src: b.authorAvatarUrl,
                                    alt: "",
                                    className: "w-full h-full object-cover",
                                  })
                                : e.jsx("div", {
                                    className:
                                      "w-full h-full flex items-center justify-center",
                                    children: e.jsx(wr, {
                                      size: 16,
                                      className: "text-[#8A8A8A]",
                                    }),
                                  }),
                            }),
                            e.jsx("div", {
                              className: "min-w-0",
                              children: e.jsxs("p", {
                                className: "text-sm text-[#1A1A1A]",
                                children: [
                                  b.authorDisplayName || "匿名",
                                  b.authorCreatorId
                                    ? e.jsxs("span", {
                                        className:
                                          "text-[#8A8A8A] font-normal ml-0.5",
                                        children: ["@", b.authorCreatorId],
                                      })
                                    : null,
                                ],
                              }),
                            }),
                          ],
                        }),
                        b.description
                          ? e.jsx("p", {
                              className:
                                "text-sm text-[#5A5A5A] mt-3 leading-relaxed",
                              children: b.description,
                            })
                          : null,
                        b.authorUserId &&
                        (X == null ? void 0 : X.uid) &&
                        b.authorUserId === X.uid &&
                        b.visibility !== "private"
                          ? e.jsxs("div", {
                              className:
                                "mt-3 flex items-center gap-1 text-[#8A8A8A] text-xs",
                              children: [
                                e.jsx(zn, { size: 12 }),
                                e.jsxs("span", {
                                  children: [b.thankCount || 0, " 人已点赞"],
                                }),
                              ],
                            })
                          : null,
                        e.jsxs("div", {
                          className: "mt-6 pt-6 border-t border-[#1A1A1A]/10",
                          children: [
                            b.authorUserId &&
                            (X == null ? void 0 : X.uid) &&
                            b.authorUserId === X.uid &&
                            b.visibility === "private" &&
                            b.privateKey
                              ? e.jsxs("div", {
                                  className: "mb-6",
                                  children: [
                                    e.jsx("p", {
                                      className:
                                        "text-[10px] uppercase tracking-wider text-[#8A8A8A] mb-2",
                                      children:
                                        "分享 Key（他人输入此 Key 可查看）",
                                    }),
                                    e.jsxs("div", {
                                      className: "flex items-center gap-2",
                                      children: [
                                        e.jsx("code", {
                                          className:
                                            "flex-1 min-w-0 px-3 py-2 text-xs font-mono bg-[#1A1A1A]/8 border border-[#1A1A1A]/15 rounded-sm break-all select-all",
                                          children: b.privateKey,
                                        }),
                                        e.jsxs("button", {
                                          type: "button",
                                          onClick: () => {
                                            var Jt;
                                            (Jt = navigator.clipboard) ==
                                              null ||
                                              Jt.writeText(
                                                b.privateKey || "",
                                              ).then(
                                                () => {
                                                  (ie(!0),
                                                    setTimeout(
                                                      () => ie(!1),
                                                      2e3,
                                                    ));
                                                },
                                                () => {},
                                              );
                                          },
                                          className:
                                            "flex-shrink-0 flex items-center gap-1.5 px-3 py-2 bg-[#1A1A1A] text-[#F9F7F2] text-xs font-bold tracking-wider rounded-sm hover:bg-[#333]",
                                          children: [
                                            le
                                              ? e.jsx(On, { size: 14 })
                                              : e.jsx(Ao, { size: 14 }),
                                            le ? "已复制" : "复制 Key",
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                })
                              : null,
                            w.has(b.id) ||
                            A.has(b.id) ||
                            b.visibility === "private"
                              ? e.jsxs("div", {
                                  children: [
                                    e.jsx("p", {
                                      className:
                                        "text-[10px] uppercase tracking-wider text-[#8A8A8A] mb-2",
                                      children:
                                        b.visibility === "private"
                                          ? "私密作品 · 下载链接"
                                          : "下载链接",
                                    }),
                                    e.jsxs("div", {
                                      className: "flex flex-col gap-2",
                                      children: [
                                        e.jsxs("div", {
                                          className: "flex items-center gap-2",
                                          children: [
                                            e.jsx("input", {
                                              type: "text",
                                              readOnly: !0,
                                              value: b.downloadLink || "",
                                              className:
                                                "flex-1 min-w-0 px-3 py-2 text-xs font-mono text-[#1A1A1A] bg-white/90 border border-[#1A1A1A]/15 rounded-sm truncate",
                                            }),
                                            e.jsxs("button", {
                                              type: "button",
                                              onClick: () => {
                                                var Jt;
                                                const At = b.downloadLink;
                                                At &&
                                                  ((Jt = navigator.clipboard) ==
                                                    null ||
                                                    Jt.writeText(At).then(
                                                      () => {
                                                        (ne(!0),
                                                          setTimeout(
                                                            () => ne(!1),
                                                            2e3,
                                                          ));
                                                      },
                                                      () => {},
                                                    ));
                                              },
                                              className:
                                                "flex-shrink-0 flex items-center gap-1.5 px-3 py-2 bg-[#1A1A1A] text-[#F9F7F2] text-xs font-bold tracking-wider rounded-sm hover:bg-[#333] transition-colors",
                                              children: [
                                                V
                                                  ? e.jsx(On, { size: 14 })
                                                  : e.jsx(Ao, { size: 14 }),
                                                V ? "已复制" : "复制链接",
                                              ],
                                            }),
                                          ],
                                        }),
                                        e.jsx("a", {
                                          href: b.downloadLink,
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          className:
                                            "inline-block px-4 py-2 text-xs text-[#5A5A5A] hover:text-[#1A1A1A] underline underline-offset-2",
                                          children: "在新标签页打开",
                                        }),
                                      ],
                                    }),
                                  ],
                                })
                              : e.jsxs("div", {
                                  children: [
                                    e.jsx("p", {
                                      className:
                                        "text-[10px] uppercase tracking-wider text-[#8A8A8A] mb-2",
                                      children: "点赞后可见下载链接",
                                    }),
                                    e.jsxs("p", {
                                      className:
                                        "text-[10px] text-[#8A8A8A]/75 mb-2 leading-relaxed",
                                      children: [
                                        "每位用户每日最多通过点赞解锁 20 个公开作品（按北京时间计）；用 Key 获取私密作品不计入。",
                                        typeof K == "number"
                                          ? e.jsxs("span", {
                                              className: "block mt-1",
                                              children: [
                                                "本次解锁后，今日还可点赞获取 ",
                                                K,
                                                " 个。",
                                              ],
                                            })
                                          : null,
                                      ],
                                    }),
                                    e.jsxs("button", {
                                      type: "button",
                                      disabled: P === b.id,
                                      onClick: () => rn(b.id),
                                      className:
                                        "flex items-center gap-2 px-5 py-2.5 border-2 border-[#1A1A1A] text-[#1A1A1A] text-xs font-bold tracking-widest uppercase rounded-sm hover:bg-[#1A1A1A] hover:text-[#F9F7F2] transition-colors disabled:opacity-60 disabled:cursor-not-allowed",
                                      children: [
                                        P === b.id
                                          ? e.jsx(Sn, {
                                              size: 14,
                                              className: "animate-spin",
                                            })
                                          : e.jsx(zn, { size: 14 }),
                                        P === b.id ? "点赞中..." : "点赞获取",
                                      ],
                                    }),
                                    O
                                      ? e.jsx("p", {
                                          className:
                                            "mt-2 text-xs text-red-600/90",
                                          children: O,
                                        })
                                      : null,
                                  ],
                                }),
                            b.visibility !== "private"
                              ? e.jsxs("div", {
                                  className:
                                    "flex items-center gap-1 mt-3 text-[#8A8A8A] text-xs",
                                  children: [
                                    e.jsx(zn, { size: 12 }),
                                    e.jsxs("span", {
                                      children: [
                                        b.thankCount || 0,
                                        " 人已点赞",
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
                "detail",
              ),
            n === "creatorHome" &&
              e.jsxs(
                We.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  className: "p-4 pb-24",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center justify-between mb-4",
                      children: [
                        e.jsxs("button", {
                          type: "button",
                          onClick: () => {
                            (a("list"), ft(""));
                          },
                          className:
                            "flex items-center gap-1 text-[#1A1A1A] hover:opacity-70",
                          children: [
                            e.jsx(un, { size: 20 }),
                            e.jsx("span", {
                              className:
                                "text-xs font-bold tracking-widest uppercase",
                              children: "返回",
                            }),
                          ],
                        }),
                        e.jsx("span", {
                          className:
                            "text-[10px] uppercase tracking-[0.2em] text-[#8A8A8A]",
                          children: "创作者主页",
                        }),
                      ],
                    }),
                    Ze
                      ? e.jsx("div", {
                          className: "flex justify-center py-16",
                          children: e.jsx(Sn, {
                            size: 28,
                            className: "animate-spin text-[#8A8A8A]",
                          }),
                        })
                      : me
                        ? e.jsxs("div", {
                            className: "py-8 text-center",
                            children: [
                              e.jsx("p", {
                                className: "text-sm text-red-600/90 mb-2",
                                children: me,
                              }),
                              e.jsx("button", {
                                type: "button",
                                onClick: () => ss(at),
                                className: "text-xs text-[#5A5A5A] underline",
                                children: "重试",
                              }),
                            ],
                          })
                        : !vt && Qe.length === 0
                          ? e.jsxs("div", {
                              className: "py-12 text-center text-[#8A8A8A]",
                              children: [
                                e.jsx("p", {
                                  className: "text-sm",
                                  children: "暂无该创作者或作品",
                                }),
                                e.jsxs("p", {
                                  className: "text-[10px] mt-1",
                                  children: ["链接中的创作者 ID：@", at],
                                }),
                              ],
                            })
                          : e.jsxs(e.Fragment, {
                              children: [
                                (vt || at) &&
                                  e.jsx("div", {
                                    className:
                                      "p-4 mb-6 bg-white/80 border border-[#1A1A1A]/6 rounded-sm",
                                    children: e.jsxs("div", {
                                      className: "flex items-center gap-3",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-[#E5E0D8]",
                                          children:
                                            vt != null && vt.avatarUrl
                                              ? e.jsx("img", {
                                                  src: vt.avatarUrl,
                                                  alt: "",
                                                  className:
                                                    "w-full h-full object-cover",
                                                })
                                              : e.jsx("div", {
                                                  className:
                                                    "w-full h-full flex items-center justify-center text-[#8A8A8A]",
                                                  children: e.jsx(wr, {
                                                    size: 28,
                                                  }),
                                                }),
                                        }),
                                        e.jsxs("div", {
                                          className: "flex-1 min-w-0",
                                          children: [
                                            e.jsx("p", {
                                              className:
                                                "font-serif text-[#1A1A1A] text-lg",
                                              children:
                                                (vt == null
                                                  ? void 0
                                                  : vt.displayName) || "创作者",
                                            }),
                                            e.jsxs("p", {
                                              className:
                                                "text-[10px] text-[#8A8A8A] uppercase tracking-wider mt-0.5",
                                              children: ["@", at],
                                            }),
                                            vt != null && vt.signature
                                              ? e.jsx("p", {
                                                  className:
                                                    "text-xs text-[#5A5A5A] mt-2 line-clamp-2",
                                                  children: vt.signature,
                                                })
                                              : null,
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                e.jsx("ul", {
                                  className: "space-y-4",
                                  children: Qe.map((At) =>
                                    e.jsxs(
                                      We.li,
                                      {
                                        initial: { opacity: 0, y: 8 },
                                        animate: { opacity: 1, y: 0 },
                                        onClick: () => {
                                          (i("creatorHome"),
                                            N(At),
                                            a("detail"));
                                        },
                                        className:
                                          "flex gap-4 p-4 bg-white/80 backdrop-blur-sm border border-[#1A1A1A]/6 rounded-sm cursor-pointer hover:border-[#1A1A1A]/15 hover:shadow-lg transition-all",
                                        children: [
                                          e.jsx("div", {
                                            className:
                                              "w-20 aspect-[2/3] flex-shrink-0 rounded-sm overflow-hidden bg-[#E5E0D8]",
                                            children: At.coverUrl
                                              ? e.jsx("img", {
                                                  src: At.coverUrl,
                                                  alt: "",
                                                  className:
                                                    "w-full h-full object-cover",
                                                })
                                              : e.jsx("div", {
                                                  className:
                                                    "w-full h-full flex items-center justify-center text-[#8A8A8A] text-xs",
                                                  children: "无图",
                                                }),
                                          }),
                                          e.jsxs("div", {
                                            className:
                                              "flex-1 min-w-0 flex flex-col justify-center",
                                            children: [
                                              e.jsx("h3", {
                                                className:
                                                  "font-serif italic text-[#1A1A1A] text-lg truncate",
                                                children: At.title,
                                              }),
                                              e.jsxs("div", {
                                                className:
                                                  "flex items-center gap-1 mt-1 text-[#8A8A8A]",
                                                children: [
                                                  e.jsx(zn, {
                                                    size: 12,
                                                    className: "flex-shrink-0",
                                                  }),
                                                  e.jsx("span", {
                                                    className: "text-xs",
                                                    children:
                                                      At.thankCount || 0,
                                                  }),
                                                  At.visibility === "private" &&
                                                    e.jsx("span", {
                                                      className:
                                                        "text-[10px] text-[#8A8A8A]/80 ml-1",
                                                      children: "私密",
                                                    }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          e.jsx(un, {
                                            size: 18,
                                            className:
                                              "flex-shrink-0 text-[#8A8A8A] rotate-180 self-center",
                                          }),
                                        ],
                                      },
                                      At.id,
                                    ),
                                  ),
                                }),
                                Qe.length === 0 &&
                                  vt &&
                                  e.jsx("p", {
                                    className:
                                      "text-sm text-[#8A8A8A] text-center py-8",
                                    children: "该创作者暂无公开作品",
                                  }),
                              ],
                            }),
                  ],
                },
                "creatorHome",
              ),
            n === "myHome" &&
              e.jsxs(
                We.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  className: "p-4 pb-24",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center justify-between mb-6",
                      children: [
                        e.jsxs("button", {
                          type: "button",
                          onClick: () => a("list"),
                          className:
                            "flex items-center gap-1 text-[#1A1A1A] hover:opacity-70",
                          children: [
                            e.jsx(un, { size: 20 }),
                            e.jsx("span", {
                              className:
                                "text-xs font-bold tracking-widest uppercase",
                              children: "返回",
                            }),
                          ],
                        }),
                        e.jsx("span", {
                          className:
                            "text-[10px] uppercase tracking-[0.2em] text-[#8A8A8A]",
                          children: "我的",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "space-y-3",
                      children: [
                        e.jsxs("button", {
                          type: "button",
                          onClick: async () => {
                            var Jt, Vt;
                            if ((U(null), !(Jn != null && Jn.auth))) {
                              (U(
                                "未配置发现页 Supabase，请设置 VITE_SUPABASE_DISCOVERY_URL 与 VITE_SUPABASE_DISCOVERY_ANON_KEY",
                              ),
                                a("myPublish"));
                              return;
                            }
                            if (
                              !((Jt = (await Jn.auth.getSession()).data) == null
                                ? void 0
                                : Jt.session)
                            ) {
                              const {
                                data: { user: qt },
                                error: Lt,
                              } = await Jn.auth.signInAnonymously();
                              if (Lt) {
                                const Qt =
                                  (Vt = Lt.message) != null &&
                                  Vt.includes("Anonymous sign-ins are disabled")
                                    ? "匿名登录未启用，请在 Supabase 发现页项目 → Authentication → Providers 中开启 Anonymous"
                                    : `登录失败: ${Lt.message}`;
                                U(Qt);
                              } else qt && je({ uid: qt.id });
                            }
                            a("myPublish");
                          },
                          className:
                            "w-full flex items-center gap-4 p-4 bg-white/80 border border-[#1A1A1A]/6 rounded-sm hover:border-[#1A1A1A]/15 transition-colors text-left",
                          children: [
                            e.jsx(ui, {
                              size: 24,
                              className: "text-[#8A8A8A]",
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsx("p", {
                                  className: "font-serif text-[#1A1A1A]",
                                  children: "我的发布",
                                }),
                                e.jsx("p", {
                                  className:
                                    "text-[10px] text-[#8A8A8A] uppercase tracking-wider",
                                  children: "管理、删除已发布作品",
                                }),
                              ],
                            }),
                            e.jsx(un, {
                              size: 18,
                              className: "ml-auto text-[#8A8A8A] rotate-180",
                            }),
                          ],
                        }),
                        e.jsxs("button", {
                          type: "button",
                          onClick: () => a("myLikes"),
                          className:
                            "w-full flex items-center gap-4 p-4 bg-white/80 border border-[#1A1A1A]/6 rounded-sm hover:border-[#1A1A1A]/15 transition-colors text-left",
                          children: [
                            e.jsx(zn, {
                              size: 24,
                              className: "text-[#8A8A8A]",
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsx("p", {
                                  className: "font-serif text-[#1A1A1A]",
                                  children: "我的点赞",
                                }),
                                e.jsx("p", {
                                  className:
                                    "text-[10px] text-[#8A8A8A] uppercase tracking-wider",
                                  children: "查看已点赞作品（本地缓存）",
                                }),
                              ],
                            }),
                            e.jsx(un, {
                              size: 18,
                              className: "ml-auto text-[#8A8A8A] rotate-180",
                            }),
                          ],
                        }),
                        e.jsxs("button", {
                          type: "button",
                          onClick: async () => {
                            var At;
                            if (
                              (U(null),
                              Jn != null &&
                                Jn.auth &&
                                !((At = (await Jn.auth.getSession()).data) ==
                                null
                                  ? void 0
                                  : At.session))
                            ) {
                              const {
                                data: { user: Vt },
                                error: qt,
                              } = await Jn.auth.signInAnonymously();
                              qt
                                ? U(qt.message || "登录失败")
                                : Vt && je({ uid: Vt.id });
                            }
                            a("myProfile");
                          },
                          className:
                            "w-full flex items-center gap-4 p-4 bg-white/80 border border-[#1A1A1A]/6 rounded-sm hover:border-[#1A1A1A]/15 transition-colors text-left",
                          children: [
                            e.jsx(wr, {
                              size: 24,
                              className: "text-[#8A8A8A]",
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsx("p", {
                                  className: "font-serif text-[#1A1A1A]",
                                  children: "我的资料",
                                }),
                                e.jsx("p", {
                                  className:
                                    "text-[10px] text-[#8A8A8A] uppercase tracking-wider",
                                  children:
                                    "设置专属 ID 后可在此复制「创作者主页」分享链接",
                                }),
                              ],
                            }),
                            e.jsx(un, {
                              size: 18,
                              className: "ml-auto text-[#8A8A8A] rotate-180",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                "myHome",
              ),
            n === "myPublish" &&
              e.jsxs(
                We.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  className: "p-4 pb-24",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center justify-between mb-4",
                      children: [
                        e.jsxs("button", {
                          type: "button",
                          onClick: () => a("myHome"),
                          className:
                            "flex items-center gap-1 text-[#1A1A1A] hover:opacity-70",
                          children: [
                            e.jsx(un, { size: 20 }),
                            e.jsx("span", {
                              className:
                                "text-xs font-bold tracking-widest uppercase",
                              children: "返回",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            e.jsx("span", {
                              className:
                                "text-[10px] uppercase tracking-[0.2em] text-[#8A8A8A]",
                              children: "我的发布",
                            }),
                            (X == null ? void 0 : X.uid) &&
                              e.jsx("button", {
                                type: "button",
                                onClick: () => Bs(X.uid),
                                disabled: R,
                                className:
                                  "text-[10px] uppercase tracking-wider text-[#8A8A8A] hover:text-[#1A1A1A] border border-[#1A1A1A]/15 px-2 py-1 rounded disabled:opacity-50",
                                children: R ? "同步中" : "从云端同步",
                              }),
                          ],
                        }),
                      ],
                    }),
                    R && xe.length === 0
                      ? e.jsx("div", {
                          className: "flex justify-center py-12",
                          children: e.jsx(Sn, {
                            size: 28,
                            className: "animate-spin text-[#8A8A8A]",
                          }),
                        })
                      : Y
                        ? e.jsxs("div", {
                            className: "py-8 px-4 text-center",
                            children: [
                              e.jsx("p", {
                                className: "text-sm text-red-600/90 mb-2",
                                children: Y,
                              }),
                              e.jsxs("p", {
                                className:
                                  "text-[10px] text-[#8A8A8A] mb-2 font-mono",
                                children: ["发现页后端: ", DX],
                              }),
                              !Y.includes("Vercel") &&
                                e.jsxs(e.Fragment, {
                                  children: [
                                    e.jsx("p", {
                                      className: "text-xs text-[#8A8A8A] mb-2",
                                      children:
                                        "Firebase 控制台 → Authentication → 登录方式 → 匿名 → 启用",
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "text-[10px] text-[#8A8A8A] max-w-[260px] mx-auto",
                                      children:
                                        "手机/PWA 访问时若仍失败，请在 Authentication → 设置 → 授权域名 中添加当前页面的域名（如你的部署域名或 localhost）",
                                    }),
                                  ],
                                }),
                            ],
                          })
                        : xe.length === 0
                          ? e.jsxs("div", {
                              className: "py-8 px-4 text-center",
                              children: [
                                e.jsx("p", {
                                  className: "text-sm text-[#8A8A8A] mb-2",
                                  children: "暂无可管理的发布",
                                }),
                                e.jsx("p", {
                                  className:
                                    "text-xs text-[#8A8A8A] max-w-[260px] mx-auto",
                                  children:
                                    "此处仅显示「本设备登录后」发布的作品。若你曾在添加此功能前发布，那些作品未关联账号，无法在此管理或删除。",
                                }),
                                e.jsx("p", {
                                  className: "text-xs text-[#8A8A8A] mt-3",
                                  children: "新发布的作品会正常出现在这里。",
                                }),
                              ],
                            })
                          : e.jsx("ul", {
                              className: "space-y-3",
                              children: xe.map((At) =>
                                e.jsxs(
                                  "li",
                                  {
                                    className:
                                      "flex gap-3 p-3 bg-white/80 border border-[#1A1A1A]/6 rounded-sm hover:border-[#1A1A1A]/15 transition-colors",
                                    children: [
                                      e.jsxs("button", {
                                        type: "button",
                                        onClick: () => {
                                          (i("myPublish"), N(At), a("detail"));
                                        },
                                        className:
                                          "flex flex-1 gap-3 min-w-0 text-left",
                                        children: [
                                          e.jsx("div", {
                                            className:
                                              "w-14 h-14 flex-shrink-0 rounded-sm overflow-hidden bg-[#E5E0D8]",
                                            children: At.coverUrl
                                              ? e.jsx("img", {
                                                  src: At.coverUrl,
                                                  alt: "",
                                                  className:
                                                    "w-full h-full object-cover",
                                                })
                                              : e.jsx("div", {
                                                  className:
                                                    "w-full h-full flex items-center justify-center text-[#8A8A8A] text-xs",
                                                  children: "无图",
                                                }),
                                          }),
                                          e.jsxs("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                              e.jsx("p", {
                                                className:
                                                  "font-serif text-[#1A1A1A] truncate",
                                                children: At.title,
                                              }),
                                              e.jsx("p", {
                                                className:
                                                  "text-[10px] text-[#8A8A8A]",
                                                children:
                                                  At.visibility === "private"
                                                    ? "私密"
                                                    : "公开",
                                              }),
                                            ],
                                          }),
                                          e.jsx(un, {
                                            size: 18,
                                            className:
                                              "flex-shrink-0 text-[#8A8A8A] rotate-180 self-center",
                                          }),
                                        ],
                                      }),
                                      e.jsx("button", {
                                        type: "button",
                                        disabled: ee === At.id,
                                        onClick: (Jt) => {
                                          (Jt.stopPropagation(), Js(At.id));
                                        },
                                        className:
                                          "p-2 text-red-600/80 hover:bg-red-50 rounded-sm",
                                        "aria-label": "删除",
                                        children:
                                          ee === At.id
                                            ? e.jsx(Sn, {
                                                size: 18,
                                                className: "animate-spin",
                                              })
                                            : e.jsx(_n, { size: 18 }),
                                      }),
                                    ],
                                  },
                                  At.id,
                                ),
                              ),
                            }),
                  ],
                },
                "myPublish",
              ),
            n === "myLikes" &&
              e.jsxs(
                We.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  className: "p-4 pb-24",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center justify-between mb-4",
                      children: [
                        e.jsxs("button", {
                          type: "button",
                          onClick: () => a("myHome"),
                          className:
                            "flex items-center gap-1 text-[#1A1A1A] hover:opacity-70",
                          children: [
                            e.jsx(un, { size: 20 }),
                            e.jsx("span", {
                              className:
                                "text-xs font-bold tracking-widest uppercase",
                              children: "返回",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            e.jsx("span", {
                              className:
                                "text-[10px] uppercase tracking-[0.2em] text-[#8A8A8A]",
                              children: "我的点赞",
                            }),
                            e.jsx("button", {
                              type: "button",
                              onClick: () => Xs(),
                              disabled: se,
                              className:
                                "text-[10px] uppercase tracking-wider text-[#8A8A8A] hover:text-[#1A1A1A] border border-[#1A1A1A]/15 px-2 py-1 rounded disabled:opacity-50",
                              children: se ? "同步中" : "从云端同步",
                            }),
                          ],
                        }),
                      ],
                    }),
                    se && ce.length === 0
                      ? e.jsx("div", {
                          className: "flex justify-center py-12",
                          children: e.jsx(Sn, {
                            size: 28,
                            className: "animate-spin text-[#8A8A8A]",
                          }),
                        })
                      : ce.length === 0
                        ? e.jsx("p", {
                            className:
                              "text-sm text-[#8A8A8A] py-8 text-center",
                            children: "暂无点赞作品，可点「从云端同步」拉取",
                          })
                        : e.jsx("ul", {
                            className: "space-y-3",
                            children: ce.map((At) =>
                              e.jsxs(
                                "li",
                                {
                                  onClick: () => {
                                    (i("myLikes"), N(At), a("detail"));
                                  },
                                  className:
                                    "flex gap-3 p-3 bg-white/80 border border-[#1A1A1A]/6 rounded-sm cursor-pointer hover:border-[#1A1A1A]/15",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "w-16 h-16 flex-shrink-0 rounded-sm overflow-hidden bg-[#E5E0D8]",
                                      children: At.coverUrl
                                        ? e.jsx("img", {
                                            src: At.coverUrl,
                                            alt: "",
                                            className:
                                              "w-full h-full object-cover",
                                          })
                                        : e.jsx("div", {
                                            className:
                                              "w-full h-full flex items-center justify-center text-[#8A8A8A] text-xs",
                                            children: "无图",
                                          }),
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "flex-1 min-w-0 flex items-center gap-2",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "w-6 h-6 rounded-full overflow-hidden flex-shrink-0 bg-[#E5E0D8]",
                                          children: At.authorAvatarUrl
                                            ? e.jsx("img", {
                                                src: At.authorAvatarUrl,
                                                alt: "",
                                                className:
                                                  "w-full h-full object-cover",
                                              })
                                            : e.jsx("div", {
                                                className:
                                                  "w-full h-full flex items-center justify-center",
                                                children: e.jsx(wr, {
                                                  size: 12,
                                                  className: "text-[#8A8A8A]",
                                                }),
                                              }),
                                        }),
                                        e.jsxs("div", {
                                          className: "min-w-0",
                                          children: [
                                            e.jsx("p", {
                                              className:
                                                "font-serif text-[#1A1A1A] truncate",
                                              children: At.title,
                                            }),
                                            e.jsxs("p", {
                                              className:
                                                "text-[10px] text-[#8A8A8A] truncate",
                                              children: [
                                                At.authorDisplayName || "匿名",
                                                At.authorCreatorId
                                                  ? ` @${At.authorCreatorId}`
                                                  : "",
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    e.jsx(un, {
                                      size: 18,
                                      className:
                                        "text-[#8A8A8A] rotate-180 self-center",
                                    }),
                                  ],
                                },
                                At.id,
                              ),
                            ),
                          }),
                  ],
                },
                "myLikes",
              ),
            n === "myProfile" &&
              e.jsxs(
                We.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  className: "p-4 pb-24",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center justify-between mb-4",
                      children: [
                        e.jsxs("button", {
                          type: "button",
                          onClick: () => a("myHome"),
                          className:
                            "flex items-center gap-1 text-[#1A1A1A] hover:opacity-70",
                          children: [
                            e.jsx(un, { size: 20 }),
                            e.jsx("span", {
                              className:
                                "text-xs font-bold tracking-widest uppercase",
                              children: "返回",
                            }),
                          ],
                        }),
                        e.jsx("span", {
                          className:
                            "text-[10px] uppercase tracking-[0.2em] text-[#8A8A8A]",
                          children: "我的资料",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "mb-6",
                      children: [
                        e.jsx("p", {
                          className:
                            "text-[10px] uppercase tracking-wider text-[#8A8A8A] mb-2",
                          children: "预览 · 将展示在您发布的作品旁",
                        }),
                        e.jsxs("div", {
                          className:
                            "relative p-4 bg-white/80 border border-[#1A1A1A]/6 rounded-sm",
                          children: [
                            J &&
                              e.jsx("div", {
                                className:
                                  "absolute top-3 right-4 px-2 py-1 rounded-sm bg-[#1A1A1A] text-[#F9F7F2] text-[10px] font-bold uppercase tracking-wider animate-pulse",
                                children: "已保存",
                              }),
                            e.jsxs("div", {
                              className: "flex items-center gap-3",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border border-[#1A1A1A]/15 bg-[#E5E0D8]",
                                  children: ke.avatarUrl
                                    ? e.jsx("img", {
                                        src: ke.avatarUrl,
                                        alt: "",
                                        className: "w-full h-full object-cover",
                                        onError: (At) => {
                                          At.target.style.display = "none";
                                        },
                                      })
                                    : e.jsx("div", {
                                        className:
                                          "w-full h-full flex items-center justify-center text-[#8A8A8A]",
                                        children: e.jsx(wr, { size: 24 }),
                                      }),
                                }),
                                e.jsxs("div", {
                                  className: "flex-1 min-w-0",
                                  children: [
                                    e.jsx("p", {
                                      className:
                                        "font-serif text-[#1A1A1A] text-lg",
                                      children:
                                        ((st = ke.displayName) == null
                                          ? void 0
                                          : st.trim()) || "展示名",
                                    }),
                                    ($t = ke.creatorId) != null && $t.trim()
                                      ? e.jsxs("p", {
                                          className:
                                            "text-[10px] text-[#8A8A8A] uppercase tracking-wider mt-0.5",
                                          children: [
                                            "@",
                                            ke.creatorId.trim().toLowerCase(),
                                          ],
                                        })
                                      : e.jsx("p", {
                                          className:
                                            "text-[10px] text-[#8A8A8A]/70 mt-0.5",
                                          children: "设置专属 ID 后显示",
                                        }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsx("div", {
                              className:
                                "mt-3 pt-3 border-t border-[#1A1A1A]/10",
                              children:
                                (Ft = ke.signature) != null && Ft.trim()
                                  ? e.jsx("p", {
                                      className:
                                        "text-sm text-[#5A5A5A] leading-relaxed line-clamp-2",
                                      children: ke.signature.trim(),
                                    })
                                  : e.jsx("p", {
                                      className:
                                        "text-sm text-[#8A8A8A]/60 italic",
                                      children: "一句话介绍自己",
                                    }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "space-y-4",
                      children: [
                        e.jsxs("label", {
                          className: "block",
                          children: [
                            e.jsx("span", {
                              className:
                                "text-[10px] font-bold tracking-widest text-[#8A8A8A] uppercase block mb-1.5",
                              children: "专属 ID",
                            }),
                            e.jsx("p", {
                              className: "text-[10px] text-[#8A8A8A]/80 mb-1.5",
                              children:
                                "设置后下方会出现「分享创作者主页」链接，可复制发给他人",
                            }),
                            e.jsx("input", {
                              type: "text",
                              value: ke.creatorId,
                              onChange: (At) =>
                                W((Jt) => ({
                                  ...Jt,
                                  creatorId: At.target.value,
                                })),
                              placeholder: "如：jane_doe",
                              className:
                                "w-full px-3 py-2.5 border border-[#1A1A1A]/15 rounded-sm bg-white/80 font-mono text-sm placeholder:text-[#8A8A8A]/60 focus:border-[#1A1A1A]/40 outline-none",
                            }),
                          ],
                        }),
                        e.jsxs("label", {
                          className: "block",
                          children: [
                            e.jsx("span", {
                              className:
                                "text-[10px] font-bold tracking-widest text-[#8A8A8A] uppercase block mb-1.5",
                              children: "展示名",
                            }),
                            e.jsx("input", {
                              type: "text",
                              value: ke.displayName,
                              onChange: (At) =>
                                W((Jt) => ({
                                  ...Jt,
                                  displayName: At.target.value,
                                })),
                              placeholder: "发布作品时显示的名称",
                              className:
                                "w-full px-3 py-2.5 border border-[#1A1A1A]/15 rounded-sm bg-white/80 text-sm placeholder:text-[#8A8A8A]/60 focus:border-[#1A1A1A]/40 outline-none",
                            }),
                          ],
                        }),
                        e.jsxs("label", {
                          className: "block",
                          children: [
                            e.jsx("span", {
                              className:
                                "text-[10px] font-bold tracking-widest text-[#8A8A8A] uppercase block mb-1.5",
                              children: "签名",
                            }),
                            e.jsx("textarea", {
                              value: ke.signature,
                              onChange: (At) =>
                                W((Jt) => ({
                                  ...Jt,
                                  signature: At.target.value,
                                })),
                              placeholder: "一句话介绍自己",
                              rows: 2,
                              className:
                                "w-full px-3 py-2.5 border border-[#1A1A1A]/15 rounded-sm bg-white/80 text-sm placeholder:text-[#8A8A8A]/60 resize-none focus:border-[#1A1A1A]/40 outline-none",
                            }),
                          ],
                        }),
                        e.jsxs("label", {
                          className: "block",
                          children: [
                            e.jsx("span", {
                              className:
                                "text-[10px] font-bold tracking-widest text-[#8A8A8A] uppercase block mb-1.5",
                              children: "头像链接",
                            }),
                            e.jsx("input", {
                              type: "url",
                              value: ke.avatarUrl,
                              onChange: (At) =>
                                W((Jt) => ({
                                  ...Jt,
                                  avatarUrl: At.target.value,
                                })),
                              placeholder: "https://...",
                              className:
                                "w-full px-3 py-2.5 border border-[#1A1A1A]/15 rounded-sm bg-white/80 text-sm placeholder:text-[#8A8A8A]/60 focus:border-[#1A1A1A]/40 outline-none",
                            }),
                          ],
                        }),
                        he &&
                          e.jsx("p", {
                            className: "text-xs text-red-600/90",
                            children: he,
                          }),
                        e.jsxs("button", {
                          type: "button",
                          disabled: ue,
                          onClick: sn,
                          className:
                            "w-full py-3.5 bg-[#1A1A1A] text-[#F9F7F2] text-xs font-bold tracking-wider uppercase rounded-sm hover:bg-[#333] disabled:opacity-50 flex items-center justify-center gap-2",
                          children: [
                            ue
                              ? e.jsx(Sn, {
                                  size: 16,
                                  className: "animate-spin",
                                })
                              : null,
                            ue ? "保存中..." : "保存",
                          ],
                        }),
                        ((es = ke.creatorId) == null ? void 0 : es.trim()) &&
                          e.jsxs("div", {
                            className: "mt-6 pt-6 border-t border-[#1A1A1A]/10",
                            children: [
                              e.jsx("p", {
                                className:
                                  "text-[10px] font-bold tracking-widest text-[#8A8A8A] uppercase block mb-2",
                                children: "分享创作者主页",
                              }),
                              e.jsx("p", {
                                className: "text-xs text-[#5A5A5A] mb-2",
                                children:
                                  "复制下方链接发给他人，对方打开即可进入您的创作者主页查看公开作品",
                              }),
                              e.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [
                                  e.jsx("input", {
                                    type: "text",
                                    readOnly: !0,
                                    value: `${typeof window < "u" ? window.location.origin + window.location.pathname : ""}?jilu_creator=${encodeURIComponent(ke.creatorId.trim().toLowerCase())}`,
                                    className:
                                      "flex-1 min-w-0 px-3 py-2 text-xs font-mono bg-[#1A1A1A]/8 border border-[#1A1A1A]/15 rounded-sm truncate",
                                  }),
                                  e.jsx("button", {
                                    type: "button",
                                    onClick: () => {
                                      var Jt;
                                      const At = `${window.location.origin}${window.location.pathname}?jilu_creator=${encodeURIComponent(ke.creatorId.trim().toLowerCase())}`;
                                      (Jt = navigator.clipboard) == null ||
                                        Jt.writeText(At).then(
                                          () => {},
                                          () => {},
                                        );
                                    },
                                    className:
                                      "flex-shrink-0 px-3 py-2 bg-[#1A1A1A] text-[#F9F7F2] text-xs font-bold tracking-wider rounded-sm hover:bg-[#333]",
                                    children: "复制链接",
                                  }),
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                },
                "myProfile",
              ),
            n === "publish" &&
              e.jsxs(
                We.div,
                {
                  initial: { opacity: 0, x: 24 },
                  animate: { opacity: 1, x: 0 },
                  exit: { opacity: 0 },
                  className: "h-full overflow-y-auto no-scrollbar p-4 pb-24",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center justify-between mb-6",
                      children: [
                        e.jsxs("button", {
                          type: "button",
                          onClick: () => a("list"),
                          className:
                            "flex items-center gap-1 text-[#1A1A1A] hover:opacity-70",
                          children: [
                            e.jsx(un, { size: 20 }),
                            e.jsx("span", {
                              className:
                                "text-xs font-bold tracking-widest uppercase",
                              children: "取消",
                            }),
                          ],
                        }),
                        e.jsx("span", {
                          className:
                            "text-[10px] uppercase tracking-[0.2em] text-[#8A8A8A]",
                          children: "发布作品",
                        }),
                      ],
                    }),
                    _t
                      ? e.jsxs("div", {
                          className:
                            "flex flex-col items-center justify-center py-12 text-[#1A1A1A] max-w-sm mx-auto",
                          children: [
                            e.jsx("span", {
                              className: "text-4xl font-serif italic",
                              children: "已收录",
                            }),
                            Ie
                              ? e.jsxs(e.Fragment, {
                                  children: [
                                    e.jsx("p", {
                                      className:
                                        "text-xs text-[#8A8A8A] mt-4 mb-2 text-center",
                                      children:
                                        "请复制下方 Key 分享给他人，对方在「用 Key 获取」中输入即可查看",
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "w-full flex items-center gap-2 mt-2 mb-2",
                                      children: [
                                        e.jsx("code", {
                                          className:
                                            "flex-1 px-3 py-2.5 bg-[#1A1A1A]/8 border border-[#1A1A1A]/15 rounded-sm font-mono text-sm break-all select-all",
                                          children: Ie,
                                        }),
                                        e.jsxs("button", {
                                          type: "button",
                                          onClick: () => {
                                            var At;
                                            (At = navigator.clipboard) ==
                                              null ||
                                              At.writeText(Ie).then(
                                                () => De(!0),
                                                () => {},
                                              );
                                          },
                                          className:
                                            "flex-shrink-0 px-4 py-2.5 border border-[#1A1A1A]/20 rounded-sm text-xs font-bold tracking-wider uppercase hover:bg-[#1A1A1A]/5 flex items-center gap-1.5",
                                          children: [
                                            Re
                                              ? e.jsx(On, { size: 14 })
                                              : e.jsx(Ao, { size: 14 }),
                                            Re ? "已复制" : "复制 Key",
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                })
                              : e.jsx("p", {
                                  className:
                                    "text-xs text-[#8A8A8A] mt-2 uppercase tracking-wider",
                                  children: "即将返回辑录",
                                }),
                            e.jsx("p", {
                              className:
                                "text-[10px] text-[#8A8A8A] mt-4 uppercase tracking-wider",
                              children: Ie ? "约 8 秒后返回" : "即将返回辑录",
                            }),
                          ],
                        })
                      : e.jsxs("div", {
                          className: "space-y-6 max-w-md",
                          children: [
                            e.jsxs("label", {
                              className: "block",
                              children: [
                                e.jsx("span", {
                                  className:
                                    "text-[10px] font-bold tracking-widest text-[#8A8A8A] uppercase block mb-2",
                                  children: "作品名称 *",
                                }),
                                e.jsx("input", {
                                  type: "text",
                                  value: we,
                                  onChange: (At) => Q(At.target.value),
                                  placeholder: "如：杏色气泡主题",
                                  className:
                                    "w-full px-3 py-2.5 border border-[#1A1A1A]/15 rounded-sm bg-white/80 font-serif placeholder:text-[#8A8A8A]/60 focus:border-[#1A1A1A]/40 outline-none",
                                }),
                              ],
                            }),
                            e.jsxs("label", {
                              className: "block",
                              children: [
                                e.jsx("span", {
                                  className:
                                    "text-[10px] font-bold tracking-widest text-[#8A8A8A] uppercase block mb-2",
                                  children: "作者展示名",
                                }),
                                e.jsx("input", {
                                  type: "text",
                                  value: Xe,
                                  onChange: (At) => ht(At.target.value),
                                  placeholder: "匿名",
                                  className:
                                    "w-full px-3 py-2.5 border border-[#1A1A1A]/15 rounded-sm bg-white/80 font-serif placeholder:text-[#8A8A8A]/60 focus:border-[#1A1A1A]/40 outline-none",
                                }),
                              ],
                            }),
                            e.jsxs("label", {
                              className: "block",
                              children: [
                                e.jsx("span", {
                                  className:
                                    "text-[10px] font-bold tracking-widest text-[#8A8A8A] uppercase block mb-2",
                                  children: "简介",
                                }),
                                e.jsx("textarea", {
                                  value: ve,
                                  onChange: (At) => Ve(At.target.value),
                                  placeholder: "简短描述",
                                  rows: 2,
                                  className:
                                    "w-full px-3 py-2.5 border border-[#1A1A1A]/15 rounded-sm bg-white/80 font-serif placeholder:text-[#8A8A8A]/60 focus:border-[#1A1A1A]/40 outline-none resize-none",
                                }),
                              ],
                            }),
                            e.jsxs("label", {
                              className: "block",
                              children: [
                                e.jsx("span", {
                                  className:
                                    "text-[10px] font-bold tracking-widest text-[#8A8A8A] uppercase block mb-2",
                                  children: "封面图链接",
                                }),
                                e.jsx("input", {
                                  type: "url",
                                  value: Ae,
                                  onChange: (At) => te(At.target.value),
                                  placeholder: "https://...",
                                  className:
                                    "w-full px-3 py-2.5 border border-[#1A1A1A]/15 rounded-sm bg-white/80 font-serif placeholder:text-[#8A8A8A]/60 focus:border-[#1A1A1A]/40 outline-none",
                                }),
                              ],
                            }),
                            e.jsxs("label", {
                              className: "block",
                              children: [
                                e.jsx("span", {
                                  className:
                                    "text-[10px] font-bold tracking-widest text-[#8A8A8A] uppercase block mb-2",
                                  children: "下载链接 *",
                                }),
                                e.jsx("input", {
                                  type: "url",
                                  value: Se,
                                  onChange: (At) => Fe(At.target.value),
                                  placeholder: "网盘或直链",
                                  className:
                                    "w-full px-3 py-2.5 border border-[#1A1A1A]/15 rounded-sm bg-white/80 font-serif placeholder:text-[#8A8A8A]/60 focus:border-[#1A1A1A]/40 outline-none",
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsx("span", {
                                  className:
                                    "text-[10px] font-bold tracking-widest text-[#8A8A8A] uppercase block mb-2",
                                  children: "可见性",
                                }),
                                e.jsxs("div", {
                                  className: "flex gap-4",
                                  children: [
                                    e.jsxs("label", {
                                      className:
                                        "flex items-center gap-2 cursor-pointer",
                                      children: [
                                        e.jsx("input", {
                                          type: "radio",
                                          name: "visibility",
                                          checked: $e === "public",
                                          onChange: () => tt("public"),
                                          className:
                                            "w-4 h-4 border-[#1A1A1A]/30",
                                        }),
                                        e.jsx("span", {
                                          className: "text-sm",
                                          children:
                                            "公开（发现页展示，点赞获取）",
                                        }),
                                      ],
                                    }),
                                    e.jsxs("label", {
                                      className:
                                        "flex items-center gap-2 cursor-pointer",
                                      children: [
                                        e.jsx("input", {
                                          type: "radio",
                                          name: "visibility",
                                          checked: $e === "private",
                                          onChange: () => tt("private"),
                                          className:
                                            "w-4 h-4 border-[#1A1A1A]/30",
                                        }),
                                        e.jsx("span", {
                                          className: "text-sm",
                                          children: "私密（仅 Key 获取）",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            $e === "private" &&
                              e.jsx("p", {
                                className: "text-[10px] text-[#8A8A8A]",
                                children:
                                  "私密作品将自动生成专属 Key，发布后可复制分享给他人。",
                              }),
                            fe
                              ? e.jsx("p", {
                                  className: "text-xs text-red-600/90",
                                  children: fe,
                                })
                              : null,
                            e.jsxs("button", {
                              type: "button",
                              disabled: !we.trim() || !Se.trim() || Pe,
                              onClick: xs,
                              className:
                                "w-full py-3.5 bg-[#1A1A1A] text-[#F9F7F2] text-xs font-bold tracking-[0.2em] uppercase rounded-sm hover:bg-[#333] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                              children: [
                                Pe
                                  ? e.jsx(Sn, {
                                      size: 16,
                                      className: "animate-spin",
                                    })
                                  : null,
                                Pe ? "收录中..." : "收录到辑录",
                              ],
                            }),
                          ],
                        }),
                  ],
                },
                "publish",
              ),
            n === "creatorLink" &&
              e.jsxs(
                We.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  className: "p-4 pb-24",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center justify-between mb-6",
                      children: [
                        e.jsxs("button", {
                          type: "button",
                          onClick: () => a("list"),
                          className:
                            "flex items-center gap-1 text-[#1A1A1A] hover:opacity-70",
                          children: [
                            e.jsx(un, { size: 20 }),
                            e.jsx("span", {
                              className:
                                "text-xs font-bold tracking-widest uppercase",
                              children: "返回",
                            }),
                          ],
                        }),
                        e.jsx("span", {
                          className:
                            "text-[10px] uppercase tracking-[0.2em] text-[#8A8A8A]",
                          children: "通过链接访问创作者",
                        }),
                      ],
                    }),
                    e.jsx("p", {
                      className: "text-sm text-[#5A5A5A] mb-4",
                      children:
                        "粘贴创作者主页链接，或直接输入创作者 ID（如 jane_doe），在辑录内直接打开其主页，无需新开网页。",
                    }),
                    e.jsxs("div", {
                      className: "flex gap-2",
                      children: [
                        e.jsx("input", {
                          type: "text",
                          value: Gt,
                          onChange: (At) => Pt(At.target.value),
                          onKeyDown: (At) => At.key === "Enter" && qs(),
                          placeholder: "粘贴链接或输入 @jane_doe",
                          className:
                            "flex-1 min-w-0 px-3 py-2.5 border border-[#1A1A1A]/15 rounded-sm bg-white/80 font-mono text-sm placeholder:text-[#8A8A8A]/60 focus:border-[#1A1A1A]/40 outline-none",
                        }),
                        e.jsxs("button", {
                          type: "button",
                          disabled: Wt || !_s(Gt),
                          onClick: qs,
                          className:
                            "px-5 py-2.5 bg-[#1A1A1A] text-[#F9F7F2] text-xs font-bold tracking-widest uppercase rounded-sm hover:bg-[#333] disabled:opacity-50 flex items-center justify-center gap-2",
                          children: [
                            Wt
                              ? e.jsx(Sn, {
                                  size: 14,
                                  className: "animate-spin",
                                })
                              : e.jsx(ew, { size: 14 }),
                            "前往",
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                "creatorLink",
              ),
            n === "keySearch" &&
              e.jsxs(
                We.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  className: "p-4 pb-24",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center justify-between mb-6",
                      children: [
                        e.jsxs("button", {
                          type: "button",
                          onClick: () => a("list"),
                          className:
                            "flex items-center gap-1 text-[#1A1A1A] hover:opacity-70",
                          children: [
                            e.jsx(un, { size: 20 }),
                            e.jsx("span", {
                              className:
                                "text-xs font-bold tracking-widest uppercase",
                              children: "返回",
                            }),
                          ],
                        }),
                        e.jsx("span", {
                          className:
                            "text-[10px] uppercase tracking-[0.2em] text-[#8A8A8A]",
                          children: "用 Key 获取",
                        }),
                      ],
                    }),
                    e.jsx("p", {
                      className: "text-sm text-[#5A5A5A] mb-4",
                      children: "输入创作者分享给您的专属 Key，获取私密作品。",
                    }),
                    e.jsxs("div", {
                      className: "flex gap-2",
                      children: [
                        e.jsx("input", {
                          type: "text",
                          value: C,
                          onChange: (At) => M(At.target.value),
                          onKeyDown: (At) => At.key === "Enter" && wt(),
                          placeholder: "输入 Key",
                          className:
                            "flex-1 px-3 py-2.5 border border-[#1A1A1A]/15 rounded-sm bg-white/80 font-mono placeholder:text-[#8A8A8A]/60 focus:border-[#1A1A1A]/40 outline-none",
                        }),
                        e.jsxs("button", {
                          type: "button",
                          disabled: E || !C.trim(),
                          onClick: wt,
                          className:
                            "px-5 py-2.5 bg-[#1A1A1A] text-[#F9F7F2] text-xs font-bold tracking-widest uppercase rounded-sm hover:bg-[#333] disabled:opacity-50 flex items-center justify-center gap-2",
                          children: [
                            E
                              ? e.jsx(Sn, {
                                  size: 14,
                                  className: "animate-spin",
                                })
                              : e.jsx(pr, { size: 14 }),
                            "获取",
                          ],
                        }),
                      ],
                    }),
                    j === !1 &&
                      e.jsx("p", {
                        className: "mt-3 text-sm text-red-600/90",
                        children: "未找到该 Key 对应的作品",
                      }),
                  ],
                },
                "keySearch",
              ),
          ],
        }),
      }),
    ],
  });
}
const HX = 6e5;
function WX(t) {
  return (t || []).map((s) => {
    const n = String(s.text ?? "");
    return s.sender === "me"
      ? { role: "user", content: n }
      : { role: "assistant", content: n };
  });
}
async function gy({
  apiConfig: t,
  contact: s,
  effectiveUser: n,
  messagesToApi: a,
  addApiLog: r,
}) {
  if (!(t != null && t.endpoint) || !(t != null && t.key)) return null;
  const i = Ou(
      s,
      n,
      "memory_archive",
      {},
      [],
      [],
      [],
      "",
      !1,
      "",
      [],
      null,
      "",
      "",
      "",
      "",
      "",
    ),
    o = WX(a),
    c = [{ role: "system", content: i }, ...o];
  try {
    return await cr(
      t,
      { messages: c, temperature: t.temperature ?? 0.7 },
      {
        addApiLog: r,
        logScene: "memory_archive",
        logContactName: (s == null ? void 0 : s.name) ?? "",
        timeoutMs: HX,
      },
    );
  } catch {
    return null;
  }
}
const Qd = (t) => `memory_archive_timelines_${t}`,
  Qc = (t, s) => `memory_archive_stories_${t}_${s}`,
  Fo = (t, s) => `memory_archive_detail_${t}_${s}`,
  Zd = (t, s) => `memory_archive_time_reverse_${t}_${s}`,
  YX = {
    writingStyle: "朴实文风",
    styleDesc:
      "文字纯朴、贴近生活、情感真挚自然；不限于农村或乡土背景，不必刻意乡土，避免过度「土味」。",
  },
  VX = {
    writingStyle: "李碧华",
    styleDesc:
      "李碧华式文风：诡丽、情欲与命运交织、古今穿梭、冷冽又浓艳，带有香港作家特有的宿命感与妖异美。",
  },
  JX = {
    writingStyle: "王小波",
    styleDesc:
      "王小波式文风：幽默反讽、黑色幽默、自由率性、荒诞中见理性，口语化而有思辨。",
  },
  KX = (t) => {
    const s = (t || "").toString();
    if (/外国|西方|欧洲|美国|英国|法国|日本人|韩国人|外国人|海外|洋/.test(s))
      return {
        writingStyle: "外国文学",
        styleDesc:
          "使用外国文学文风，语言细腻、富有诗意，带有哲思和隐喻，情感深沉内敛。",
      };
    const n = [YX, VX, JX];
    return n[Math.floor(Math.random() * n.length)];
  },
  KC = (t) => `memory_archive_style_state_${t}`,
  qC = () => ({ presets: [], enabledPresetId: null }),
  qX = (t) =>
    !t || typeof t != "object"
      ? qC()
      : {
          presets: (Array.isArray(t.presets) ? t.presets : []).map((n) => ({
            id:
              String((n == null ? void 0 : n.id) || "").trim() ||
              `pr_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
            name:
              String((n == null ? void 0 : n.name) || "").trim() ||
              "未命名文风",
            text: String((n == null ? void 0 : n.text) || "").trim(),
          })),
          enabledPresetId:
            t.enabledPresetId != null && String(t.enabledPresetId).trim() !== ""
              ? String(t.enabledPresetId)
              : null,
        },
  QC = async (t) => {
    const s = await be.get(KC(t), null);
    return qX(s);
  },
  by = async (t, s) => {
    const n = await QC(t);
    if (n.enabledPresetId) {
      const a = n.presets.find((r) => r.id === n.enabledPresetId);
      if (a && a.text)
        return { writingStyle: a.name || "自定义文风", styleDesc: a.text };
    }
    return KX(s);
  },
  qr = (t) =>
    !t || typeof t != "string"
      ? (t ?? "")
      : String(t)
          .replace(/\s*\|\s*\|\s*|｜｜/g, " ")
          .replace(/\|/g, "")
          .replace(/｜/g, "")
          .replace(/\s+/g, " ")
          .trim(),
  zo = (t) =>
    !t || typeof t != "string" ? (t ?? "") : String(t).replace(/[""]/g, '"'),
  QX = (t) => {
    if (t == null || typeof t != "string") return null;
    let s = String(t).trim();
    s = s
      .replace(/^\s*```(?:json)?\s*\n?/i, "")
      .replace(/\n?```\s*$/i, "")
      .trim();
    const n = s.indexOf("{");
    (n > 0 && (s = s.slice(n)), (s = s.replace(/,(\s*[}\]])/g, "$1")));
    try {
      return JSON.parse(s);
    } catch {
      const r = s.match(/\{[\s\S]*\}/);
      if (r)
        try {
          return JSON.parse(r[0].replace(/,(\s*[}\]])/g, "$1"));
        } catch {}
    }
    return null;
  },
  ZX = ({ onClose: t }) => {
    var Ce,
      Re,
      De,
      at,
      ft,
      vt,
      Oe,
      Qe,
      Ye,
      Ze,
      Ue,
      me,
      jt,
      Gt,
      Pt,
      Wt,
      ct,
      Kt,
      fs,
      gt,
      ae,
      nt,
      It,