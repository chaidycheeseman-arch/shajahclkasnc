    } = z3(),
    p = kp(O3, n),
    m = c.rect !== null,
    h = l.useMemo(
      () => a.map((A) => (typeof A == "object" && "id" in A ? A.id : A)),
      [a],
    ),
    g = o != null,
    x = o ? h.indexOf(o.id) : -1,
    y = u ? h.indexOf(u.id) : -1,
    v = l.useRef(h),
    b = !uD(h, v.current),
    N = (y !== -1 && x === -1) || b,
    w = fD(i);
  (Xo(() => {
    b && g && f(h);
  }, [b, h, g, f]),
    l.useEffect(() => {
      v.current = h;
    }, [h]));
  const _ = l.useMemo(
    () => ({
      activeIndex: x,
      containerId: p,
      disabled: w,
      disableTransforms: N,
      items: h,
      overIndex: y,
      useDragOverlay: m,
      sortedRects: dD(h, d),
      strategy: r,
    }),
    [x, p, w.draggable, w.droppable, N, h, y, d, m, r],
  );
  return pn.createElement(B3.Provider, { value: _ }, s);
}
const hD = (t) => {
    let { id: s, items: n, activeIndex: a, overIndex: r } = t;
    return Hh(n, a, r).indexOf(s);
  },
  gD = (t) => {
    let {
      containerId: s,
      isSorting: n,
      wasDragging: a,
      index: r,
      items: i,
      newIndex: o,
      previousItems: c,
      previousContainerId: d,
      transition: u,
    } = t;
    return !u || !a || (c !== i && r === o) ? !1 : n ? !0 : o !== r && s === d;
  },
  bD = { duration: 200, easing: "ease" },
  U3 = "transform",
  yD = Hi.Transition.toString({ property: U3, duration: 0, easing: "linear" }),
  vD = { roleDescription: "sortable" };
function wD(t) {
  let { disabled: s, index: n, node: a, rect: r } = t;
  const [i, o] = l.useState(null),
    c = l.useRef(n);
  return (
    Xo(() => {
      if (!s && n !== c.current && a.current) {
        const d = r.current;
        if (d) {
          const u = Fu(a.current, { ignoreTransform: !0 }),
            f = {
              x: d.left - u.left,
              y: d.top - u.top,
              scaleX: d.width / u.width,
              scaleY: d.height / u.height,
            };
          (f.x || f.y) && o(f);
        }
      }
      n !== c.current && (c.current = n);
    }, [s, n, a, r]),
    l.useEffect(() => {
      i && o(null);
    }, [i]),
    i
  );
}
function Wh(t) {
  let {
    animateLayoutChanges: s = gD,
    attributes: n,
    disabled: a,
    data: r,
    getNewIndex: i = hD,
    id: o,
    strategy: c,
    resizeObserverConfig: d,
    transition: u = bD,
  } = t;
  const {
      items: f,
      containerId: p,
      activeIndex: m,
      disabled: h,
      disableTransforms: g,
      sortedRects: x,
      overIndex: y,
      useDragOverlay: v,
      strategy: b,
    } = l.useContext(B3),
    N = jD(a, h),
    w = f.indexOf(o),
    _ = l.useMemo(
      () => ({ sortable: { containerId: p, index: w, items: f }, ...r }),
      [p, r, w, f],
    ),
    A = l.useMemo(() => f.slice(f.indexOf(o)), [f, o]),
    {
      rect: k,
      node: C,
      isOver: M,
      setNodeRef: E,
    } = Q9({
      id: o,
      data: _,
      disabled: N.droppable,
      resizeObserverConfig: { updateMeasurementsFor: A, ...d },
    }),
    {
      active: S,
      activatorEvent: j,
      activeNodeRect: T,
      attributes: I,
      setNodeRef: L,
      listeners: B,
      isDragging: F,
      over: D,
      setActivatorNodeRef: $,
      transform: P,
    } = J9({
      id: o,
      data: _,
      attributes: { ...vD, ...n },
      disabled: N.draggable,
    }),
    z = zL(E, L),
    O = !!S,
    Z = O && !g && Vp(m) && Vp(y),
    K = !v && F,
    q = K && Z ? P : null,
    ne = Z
      ? (q ??
        (c ?? b)({
          rects: x,
          activeNodeRect: T,
          activeIndex: m,
          overIndex: y,
          index: w,
        }))
      : null,
    le =
      Vp(m) && Vp(y) ? i({ id: o, items: f, activeIndex: m, overIndex: y }) : w,
    ie = S == null ? void 0 : S.id,
    X = l.useRef({ activeId: ie, items: f, newIndex: le, containerId: p }),
    je = f !== X.current.items,
    xe = s({
      active: S,
      containerId: p,
      isDragging: F,
      isSorting: O,
      id: o,
      index: w,
      items: f,
      newIndex: X.current.newIndex,
      previousItems: X.current.items,
      previousContainerId: X.current.containerId,
      transition: u,
      wasDragging: X.current.activeId != null,
    }),
    ye = wD({ disabled: !xe, index: w, node: C, rect: k });
  return (
    l.useEffect(() => {
      (O && X.current.newIndex !== le && (X.current.newIndex = le),
        p !== X.current.containerId && (X.current.containerId = p),
        f !== X.current.items && (X.current.items = f));
    }, [O, le, p, f]),
    l.useEffect(() => {
      if (ie === X.current.activeId) return;
      if (ie != null && X.current.activeId == null) {
        X.current.activeId = ie;
        return;
      }
      const oe = setTimeout(() => {
        X.current.activeId = ie;
      }, 50);
      return () => clearTimeout(oe);
    }, [ie]),
    {
      active: S,
      activeIndex: m,
      attributes: I,
      data: _,
      rect: k,
      index: w,
      newIndex: le,
      items: f,
      isOver: M,
      isSorting: O,
      isDragging: F,
      listeners: B,
      node: C,
      overIndex: y,
      over: D,
      setNodeRef: z,
      setActivatorNodeRef: $,
      setDroppableNodeRef: E,
      setDraggableNodeRef: L,
      transform: ye ?? ne,
      transition: R(),
    }
  );
  function R() {
    if (ye || (je && X.current.newIndex === w)) return yD;
    if (!((K && !Rh(j)) || !u) && (O || xe))
      return Hi.Transition.toString({ ...u, property: U3 });
  }
}
function jD(t, s) {
  var n, a;
  return typeof t == "boolean"
    ? { draggable: t, droppable: !1 }
    : {
        draggable:
          (n = t == null ? void 0 : t.draggable) != null ? n : s.draggable,
        droppable:
          (a = t == null ? void 0 : t.droppable) != null ? a : s.droppable,
      };
}
function th(t) {
  if (!t) return !1;
  const s = t.data.current;
  return !!(
    s &&
    "sortable" in s &&
    typeof s.sortable == "object" &&
    "containerId" in s.sortable &&
    "items" in s.sortable &&
    "index" in s.sortable
  );
}
const ND = [Ia.Down, Ia.Right, Ia.Up, Ia.Left],
  kD = (t, s) => {
    let {
      context: {
        active: n,
        collisionRect: a,
        droppableRects: r,
        droppableContainers: i,
        over: o,
        scrollableAncestors: c,
      },
    } = s;
    if (ND.includes(t.code)) {
      if ((t.preventDefault(), !n || !a)) return;
      const d = [];
      i.getEnabled().forEach((p) => {
        if (!p || (p != null && p.disabled)) return;
        const m = r.get(p.id);
        if (m)
          switch (t.code) {
            case Ia.Down:
              a.top < m.top && d.push(p);
              break;
            case Ia.Up:
              a.top > m.top && d.push(p);
              break;
            case Ia.Left:
              a.left > m.left && d.push(p);
              break;
            case Ia.Right:
              a.left < m.left && d.push(p);
              break;
          }
      });
      const u = y3({
        collisionRect: a,
        droppableRects: r,
        droppableContainers: d,
      });
      let f = b3(u, "id");
      if (
        (f === (o == null ? void 0 : o.id) && u.length > 1 && (f = u[1].id),
        f != null)
      ) {
        const p = i.get(n.id),
          m = i.get(f),
          h = m ? r.get(m.id) : null,
          g = m == null ? void 0 : m.node.current;
        if (g && h && p && m) {
          const y = Oh(g).some((A, k) => c[k] !== A),
            v = G3(p, m),
            b = SD(p, m),
            N =
              y || !v
                ? { x: 0, y: 0 }
                : {
                    x: b ? a.width - h.width : 0,
                    y: b ? a.height - h.height : 0,
                  },
            w = { x: h.left, y: h.top };
          return N.x && N.y ? w : Wm(w, N);
        }
      }
    }
  };
function G3(t, s) {
  return !th(t) || !th(s)
    ? !1
    : t.data.current.sortable.containerId ===
        s.data.current.sortable.containerId;
}
function SD(t, s) {
  return !th(t) || !th(s) || !G3(t, s)
    ? !1
    : t.data.current.sortable.index < s.data.current.sortable.index;
}
function H3(t) {
  var s,
    n,
    a = "";
  if (typeof t == "string" || typeof t == "number") a += t;
  else if (typeof t == "object")
    if (Array.isArray(t)) {
      var r = t.length;
      for (s = 0; s < r; s++)
        t[s] && (n = H3(t[s])) && (a && (a += " "), (a += n));
    } else for (n in t) t[n] && (a && (a += " "), (a += n));
  return a;
}
function $c() {
  for (var t, s, n = 0, a = "", r = arguments.length; n < r; n++)
    (t = arguments[n]) && (s = H3(t)) && (a && (a += " "), (a += s));
  return a;
}
const _D = (t, s) => {
    const n = new Array(t.length + s.length);
    for (let a = 0; a < t.length; a++) n[a] = t[a];
    for (let a = 0; a < s.length; a++) n[t.length + a] = s[a];
    return n;
  },
  AD = (t, s) => ({ classGroupId: t, validator: s }),
  W3 = (t = new Map(), s = null, n) => ({
    nextPart: t,
    validators: s,
    classGroupId: n,
  }),
  sh = "-",
  bw = [],
  CD = "arbitrary..",
  MD = (t) => {
    const s = ID(t),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: a } = t;
    return {
      getClassGroupId: (o) => {
        if (o.startsWith("[") && o.endsWith("]")) return TD(o);
        const c = o.split(sh),
          d = c[0] === "" && c.length > 1 ? 1 : 0;
        return Y3(c, d, s);
      },
      getConflictingClassGroupIds: (o, c) => {
        if (c) {
          const d = a[o],
            u = n[o];
          return d ? (u ? _D(u, d) : d) : u || bw;
        }
        return n[o] || bw;
      },
    };
  },
  Y3 = (t, s, n) => {
    if (t.length - s === 0) return n.classGroupId;
    const r = t[s],
      i = n.nextPart.get(r);
    if (i) {
      const u = Y3(t, s + 1, i);
      if (u) return u;
    }
    const o = n.validators;
    if (o === null) return;
    const c = s === 0 ? t.join(sh) : t.slice(s).join(sh),
      d = o.length;
    for (let u = 0; u < d; u++) {
      const f = o[u];
      if (f.validator(c)) return f.classGroupId;
    }
  },
  TD = (t) =>
    t.slice(1, -1).indexOf(":") === -1
      ? void 0
      : (() => {
          const s = t.slice(1, -1),
            n = s.indexOf(":"),
            a = s.slice(0, n);
          return a ? CD + a : void 0;
        })(),
  ID = (t) => {
    const { theme: s, classGroups: n } = t;
    return ED(n, s);
  },
  ED = (t, s) => {
    const n = W3();
    for (const a in t) {
      const r = t[a];
      fv(r, n, a, s);
    }
    return n;
  },
  fv = (t, s, n, a) => {
    const r = t.length;
    for (let i = 0; i < r; i++) {
      const o = t[i];
      LD(o, s, n, a);
    }
  },
  LD = (t, s, n, a) => {
    if (typeof t == "string") {
      DD(t, s, n);
      return;
    }
    if (typeof t == "function") {
      $D(t, s, n, a);
      return;
    }
    FD(t, s, n, a);
  },
  DD = (t, s, n) => {
    const a = t === "" ? s : V3(s, t);
    a.classGroupId = n;
  },
  $D = (t, s, n, a) => {
    if (zD(t)) {
      fv(t(a), s, n, a);
      return;
    }
    (s.validators === null && (s.validators = []), s.validators.push(AD(n, t)));
  },
  FD = (t, s, n, a) => {
    const r = Object.entries(t),
      i = r.length;
    for (let o = 0; o < i; o++) {
      const [c, d] = r[o];
      fv(d, V3(s, c), n, a);
    }
  },
  V3 = (t, s) => {
    let n = t;
    const a = s.split(sh),
      r = a.length;
    for (let i = 0; i < r; i++) {
      const o = a[i];
      let c = n.nextPart.get(o);
      (c || ((c = W3()), n.nextPart.set(o, c)), (n = c));
    }
    return n;
  },
  zD = (t) => "isThemeGetter" in t && t.isThemeGetter === !0,
  RD = (t) => {
    if (t < 1) return { get: () => {}, set: () => {} };
    let s = 0,
      n = Object.create(null),
      a = Object.create(null);
    const r = (i, o) => {
      ((n[i] = o), s++, s > t && ((s = 0), (a = n), (n = Object.create(null))));
    };
    return {
      get(i) {
        let o = n[i];
        if (o !== void 0) return o;
        if ((o = a[i]) !== void 0) return (r(i, o), o);
      },
      set(i, o) {
        i in n ? (n[i] = o) : r(i, o);
      },
    };
  },
  qy = "!",
  yw = ":",
  PD = [],
  vw = (t, s, n, a, r) => ({
    modifiers: t,
    hasImportantModifier: s,
    baseClassName: n,
    maybePostfixModifierPosition: a,
    isExternal: r,
  }),
  OD = (t) => {
    const { prefix: s, experimentalParseClassName: n } = t;
    let a = (r) => {
      const i = [];
      let o = 0,
        c = 0,
        d = 0,
        u;
      const f = r.length;
      for (let x = 0; x < f; x++) {
        const y = r[x];
        if (o === 0 && c === 0) {
          if (y === yw) {
            (i.push(r.slice(d, x)), (d = x + 1));
            continue;
          }
          if (y === "/") {
            u = x;
            continue;
          }
        }
        y === "[" ? o++ : y === "]" ? o-- : y === "(" ? c++ : y === ")" && c--;
      }
      const p = i.length === 0 ? r : r.slice(d);
      let m = p,
        h = !1;
      p.endsWith(qy)
        ? ((m = p.slice(0, -1)), (h = !0))
        : p.startsWith(qy) && ((m = p.slice(1)), (h = !0));
      const g = u && u > d ? u - d : void 0;
      return vw(i, h, m, g);
    };
    if (s) {
      const r = s + yw,
        i = a;
      a = (o) =>
        o.startsWith(r) ? i(o.slice(r.length)) : vw(PD, !1, o, void 0, !0);
    }
    if (n) {
      const r = a;
      a = (i) => n({ className: i, parseClassName: r });
    }
    return a;
  },
  BD = (t) => {
    const s = new Map();
    return (
      t.orderSensitiveModifiers.forEach((n, a) => {
        s.set(n, 1e6 + a);
      }),
      (n) => {
        const a = [];
        let r = [];
        for (let i = 0; i < n.length; i++) {
          const o = n[i],
            c = o[0] === "[",
            d = s.has(o);
          c || d
            ? (r.length > 0 && (r.sort(), a.push(...r), (r = [])), a.push(o))
            : r.push(o);
        }
        return (r.length > 0 && (r.sort(), a.push(...r)), a);
      }
    );
  },
  UD = (t) => ({
    cache: RD(t.cacheSize),
    parseClassName: OD(t),
    sortModifiers: BD(t),
    ...MD(t),
  }),
  GD = /\s+/,
  HD = (t, s) => {
    const {
        parseClassName: n,
        getClassGroupId: a,
        getConflictingClassGroupIds: r,
        sortModifiers: i,
      } = s,
      o = [],
      c = t.trim().split(GD);
    let d = "";
    for (let u = c.length - 1; u >= 0; u -= 1) {
      const f = c[u],
        {
          isExternal: p,
          modifiers: m,
          hasImportantModifier: h,
          baseClassName: g,
          maybePostfixModifierPosition: x,
        } = n(f);
      if (p) {
        d = f + (d.length > 0 ? " " + d : d);
        continue;
      }
      let y = !!x,
        v = a(y ? g.substring(0, x) : g);
      if (!v) {
        if (!y) {
          d = f + (d.length > 0 ? " " + d : d);
          continue;
        }
        if (((v = a(g)), !v)) {
          d = f + (d.length > 0 ? " " + d : d);
          continue;
        }
        y = !1;
      }
      const b = m.length === 0 ? "" : m.length === 1 ? m[0] : i(m).join(":"),
        N = h ? b + qy : b,
        w = N + v;
      if (o.indexOf(w) > -1) continue;
      o.push(w);
      const _ = r(v, y);
      for (let A = 0; A < _.length; ++A) {
        const k = _[A];
        o.push(N + k);
      }
      d = f + (d.length > 0 ? " " + d : d);
    }
    return d;
  },
  WD = (...t) => {
    let s = 0,
      n,
      a,
      r = "";
    for (; s < t.length; )
      (n = t[s++]) && (a = J3(n)) && (r && (r += " "), (r += a));
    return r;
  },
  J3 = (t) => {
    if (typeof t == "string") return t;
    let s,
      n = "";
    for (let a = 0; a < t.length; a++)
      t[a] && (s = J3(t[a])) && (n && (n += " "), (n += s));
    return n;
  },
  YD = (t, ...s) => {
    let n, a, r, i;
    const o = (d) => {
        const u = s.reduce((f, p) => p(f), t());
        return (
          (n = UD(u)),
          (a = n.cache.get),
          (r = n.cache.set),
          (i = c),
          c(d)
        );
      },
      c = (d) => {
        const u = a(d);
        if (u) return u;
        const f = HD(d, n);
        return (r(d, f), f);
      };
    return ((i = o), (...d) => i(WD(...d)));
  },
  VD = [],
  Kr = (t) => {
    const s = (n) => n[t] || VD;
    return ((s.isThemeGetter = !0), s);
  },
  K3 = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  q3 = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  JD = /^\d+\/\d+$/,
  KD = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  qD =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  QD = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  ZD = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  XD =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  $d = (t) => JD.test(t),
  ma = (t) => !!t && !Number.isNaN(Number(t)),
  nc = (t) => !!t && Number.isInteger(Number(t)),
  Eg = (t) => t.endsWith("%") && ma(t.slice(0, -1)),
  Dl = (t) => KD.test(t),
  e$ = () => !0,
  t$ = (t) => qD.test(t) && !QD.test(t),
  Q3 = () => !1,
  s$ = (t) => ZD.test(t),
  n$ = (t) => XD.test(t),
  a$ = (t) => !Tn(t) && !In(t),
  r$ = (t) => zu(t, eS, Q3),
  Tn = (t) => K3.test(t),
  Yc = (t) => zu(t, tS, t$),
  Lg = (t) => zu(t, d$, ma),
  ww = (t) => zu(t, Z3, Q3),
  i$ = (t) => zu(t, X3, n$),
  qp = (t) => zu(t, sS, s$),
  In = (t) => q3.test(t),
  xf = (t) => Ru(t, tS),
  o$ = (t) => Ru(t, u$),
  jw = (t) => Ru(t, Z3),
  l$ = (t) => Ru(t, eS),
  c$ = (t) => Ru(t, X3),
  Qp = (t) => Ru(t, sS, !0),
  zu = (t, s, n) => {
    const a = K3.exec(t);
    return a ? (a[1] ? s(a[1]) : n(a[2])) : !1;
  },
  Ru = (t, s, n = !1) => {
    const a = q3.exec(t);
    return a ? (a[1] ? s(a[1]) : n) : !1;
  },
  Z3 = (t) => t === "position" || t === "percentage",
  X3 = (t) => t === "image" || t === "url",
  eS = (t) => t === "length" || t === "size" || t === "bg-size",
  tS = (t) => t === "length",
  d$ = (t) => t === "number",
  u$ = (t) => t === "family-name",
  sS = (t) => t === "shadow",
  f$ = () => {
    const t = Kr("color"),
      s = Kr("font"),
      n = Kr("text"),
      a = Kr("font-weight"),
      r = Kr("tracking"),
      i = Kr("leading"),
      o = Kr("breakpoint"),
      c = Kr("container"),
      d = Kr("spacing"),
      u = Kr("radius"),
      f = Kr("shadow"),
      p = Kr("inset-shadow"),
      m = Kr("text-shadow"),
      h = Kr("drop-shadow"),
      g = Kr("blur"),
      x = Kr("perspective"),
      y = Kr("aspect"),
      v = Kr("ease"),
      b = Kr("animate"),
      N = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      w = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      _ = () => [...w(), In, Tn],
      A = () => ["auto", "hidden", "clip", "visible", "scroll"],
      k = () => ["auto", "contain", "none"],
      C = () => [In, Tn, d],
      M = () => [$d, "full", "auto", ...C()],
      E = () => [nc, "none", "subgrid", In, Tn],
      S = () => ["auto", { span: ["full", nc, In, Tn] }, nc, In, Tn],
      j = () => [nc, "auto", In, Tn],
      T = () => ["auto", "min", "max", "fr", In, Tn],
      I = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      L = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      B = () => ["auto", ...C()],
      F = () => [
        $d,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...C(),
      ],
      D = () => [t, In, Tn],
      $ = () => [...w(), jw, ww, { position: [In, Tn] }],
      P = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      z = () => ["auto", "cover", "contain", l$, r$, { size: [In, Tn] }],
      O = () => [Eg, xf, Yc],
      Z = () => ["", "none", "full", u, In, Tn],
      K = () => ["", ma, xf, Yc],
      q = () => ["solid", "dashed", "dotted", "double"],
      V = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      ne = () => [ma, Eg, jw, ww],
      le = () => ["", "none", g, In, Tn],
      ie = () => ["none", ma, In, Tn],
      X = () => ["none", ma, In, Tn],
      je = () => [ma, In, Tn],
      xe = () => [$d, "full", ...C()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [Dl],
        breakpoint: [Dl],
        color: [e$],
        container: [Dl],
        "drop-shadow": [Dl],
        ease: ["in", "out", "in-out"],
        font: [a$],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [Dl],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [Dl],
        shadow: [Dl],
        spacing: ["px", ma],
        text: [Dl],
        "text-shadow": [Dl],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", $d, Tn, In, y] }],
        container: ["container"],
        columns: [{ columns: [ma, Tn, In, c] }],
        "break-after": [{ "break-after": N() }],
        "break-before": [{ "break-before": N() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: _() }],
        overflow: [{ overflow: A() }],
        "overflow-x": [{ "overflow-x": A() }],
        "overflow-y": [{ "overflow-y": A() }],
        overscroll: [{ overscroll: k() }],
        "overscroll-x": [{ "overscroll-x": k() }],
        "overscroll-y": [{ "overscroll-y": k() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: M() }],
        "inset-x": [{ "inset-x": M() }],
        "inset-y": [{ "inset-y": M() }],
        start: [{ start: M() }],
        end: [{ end: M() }],
        top: [{ top: M() }],
        right: [{ right: M() }],
        bottom: [{ bottom: M() }],
        left: [{ left: M() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [nc, "auto", In, Tn] }],
        basis: [{ basis: [$d, "full", "auto", c, ...C()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [ma, $d, "auto", "initial", "none", Tn] }],
        grow: [{ grow: ["", ma, In, Tn] }],
        shrink: [{ shrink: ["", ma, In, Tn] }],
        order: [{ order: [nc, "first", "last", "none", In, Tn] }],
        "grid-cols": [{ "grid-cols": E() }],
        "col-start-end": [{ col: S() }],
        "col-start": [{ "col-start": j() }],
        "col-end": [{ "col-end": j() }],
        "grid-rows": [{ "grid-rows": E() }],
        "row-start-end": [{ row: S() }],
        "row-start": [{ "row-start": j() }],
        "row-end": [{ "row-end": j() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": T() }],
        "auto-rows": [{ "auto-rows": T() }],
        gap: [{ gap: C() }],
        "gap-x": [{ "gap-x": C() }],
        "gap-y": [{ "gap-y": C() }],
        "justify-content": [{ justify: [...I(), "normal"] }],
        "justify-items": [{ "justify-items": [...L(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...L()] }],
        "align-content": [{ content: ["normal", ...I()] }],
        "align-items": [{ items: [...L(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...L(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": I() }],
        "place-items": [{ "place-items": [...L(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...L()] }],
        p: [{ p: C() }],
        px: [{ px: C() }],
        py: [{ py: C() }],
        ps: [{ ps: C() }],
        pe: [{ pe: C() }],
        pt: [{ pt: C() }],
        pr: [{ pr: C() }],
        pb: [{ pb: C() }],
        pl: [{ pl: C() }],
        m: [{ m: B() }],
        mx: [{ mx: B() }],
        my: [{ my: B() }],
        ms: [{ ms: B() }],
        me: [{ me: B() }],
        mt: [{ mt: B() }],
        mr: [{ mr: B() }],
        mb: [{ mb: B() }],
        ml: [{ ml: B() }],
        "space-x": [{ "space-x": C() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": C() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: F() }],
        w: [{ w: [c, "screen", ...F()] }],
        "min-w": [{ "min-w": [c, "screen", "none", ...F()] }],
        "max-w": [
          { "max-w": [c, "screen", "none", "prose", { screen: [o] }, ...F()] },
        ],
        h: [{ h: ["screen", "lh", ...F()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...F()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...F()] }],
        "font-size": [{ text: ["base", n, xf, Yc] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [a, In, Lg] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              Eg,
              Tn,
            ],
          },
        ],
        "font-family": [{ font: [o$, Tn, s] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [r, In, Tn] }],
        "line-clamp": [{ "line-clamp": [ma, "none", In, Lg] }],
        leading: [{ leading: [i, ...C()] }],
        "list-image": [{ "list-image": ["none", In, Tn] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", In, Tn] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: D() }],
        "text-color": [{ text: D() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...q(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [ma, "from-font", "auto", In, Yc] },
        ],
        "text-decoration-color": [{ decoration: D() }],
        "underline-offset": [{ "underline-offset": [ma, "auto", In, Tn] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: C() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              In,
              Tn,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", In, Tn] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: $() }],
        "bg-repeat": [{ bg: P() }],
        "bg-size": [{ bg: z() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  nc,
                  In,
                  Tn,
                ],
                radial: ["", In, Tn],
                conic: [nc, In, Tn],
              },
              c$,
              i$,
            ],
          },
        ],
        "bg-color": [{ bg: D() }],
        "gradient-from-pos": [{ from: O() }],
        "gradient-via-pos": [{ via: O() }],
        "gradient-to-pos": [{ to: O() }],
        "gradient-from": [{ from: D() }],
        "gradient-via": [{ via: D() }],
        "gradient-to": [{ to: D() }],
        rounded: [{ rounded: Z() }],
        "rounded-s": [{ "rounded-s": Z() }],
        "rounded-e": [{ "rounded-e": Z() }],
        "rounded-t": [{ "rounded-t": Z() }],
        "rounded-r": [{ "rounded-r": Z() }],
        "rounded-b": [{ "rounded-b": Z() }],
        "rounded-l": [{ "rounded-l": Z() }],
        "rounded-ss": [{ "rounded-ss": Z() }],
        "rounded-se": [{ "rounded-se": Z() }],
        "rounded-ee": [{ "rounded-ee": Z() }],
        "rounded-es": [{ "rounded-es": Z() }],
        "rounded-tl": [{ "rounded-tl": Z() }],
        "rounded-tr": [{ "rounded-tr": Z() }],
        "rounded-br": [{ "rounded-br": Z() }],
        "rounded-bl": [{ "rounded-bl": Z() }],
        "border-w": [{ border: K() }],
        "border-w-x": [{ "border-x": K() }],
        "border-w-y": [{ "border-y": K() }],
        "border-w-s": [{ "border-s": K() }],
        "border-w-e": [{ "border-e": K() }],
        "border-w-t": [{ "border-t": K() }],
        "border-w-r": [{ "border-r": K() }],
        "border-w-b": [{ "border-b": K() }],
        "border-w-l": [{ "border-l": K() }],
        "divide-x": [{ "divide-x": K() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": K() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...q(), "hidden", "none"] }],
        "divide-style": [{ divide: [...q(), "hidden", "none"] }],
        "border-color": [{ border: D() }],
        "border-color-x": [{ "border-x": D() }],
        "border-color-y": [{ "border-y": D() }],
        "border-color-s": [{ "border-s": D() }],
        "border-color-e": [{ "border-e": D() }],
        "border-color-t": [{ "border-t": D() }],
        "border-color-r": [{ "border-r": D() }],
        "border-color-b": [{ "border-b": D() }],
        "border-color-l": [{ "border-l": D() }],
        "divide-color": [{ divide: D() }],
        "outline-style": [{ outline: [...q(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [ma, In, Tn] }],
        "outline-w": [{ outline: ["", ma, xf, Yc] }],
        "outline-color": [{ outline: D() }],
        shadow: [{ shadow: ["", "none", f, Qp, qp] }],
        "shadow-color": [{ shadow: D() }],
        "inset-shadow": [{ "inset-shadow": ["none", p, Qp, qp] }],
        "inset-shadow-color": [{ "inset-shadow": D() }],
        "ring-w": [{ ring: K() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: D() }],
        "ring-offset-w": [{ "ring-offset": [ma, Yc] }],
        "ring-offset-color": [{ "ring-offset": D() }],
        "inset-ring-w": [{ "inset-ring": K() }],
        "inset-ring-color": [{ "inset-ring": D() }],
        "text-shadow": [{ "text-shadow": ["none", m, Qp, qp] }],
        "text-shadow-color": [{ "text-shadow": D() }],
        opacity: [{ opacity: [ma, In, Tn] }],
        "mix-blend": [{ "mix-blend": [...V(), "plus-darker", "plus-lighter"] }],
        "bg-blend": [{ "bg-blend": V() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [ma] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": ne() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": ne() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": D() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": D() }],
        "mask-image-t-from-pos": [{ "mask-t-from": ne() }],
        "mask-image-t-to-pos": [{ "mask-t-to": ne() }],
        "mask-image-t-from-color": [{ "mask-t-from": D() }],
        "mask-image-t-to-color": [{ "mask-t-to": D() }],
        "mask-image-r-from-pos": [{ "mask-r-from": ne() }],
        "mask-image-r-to-pos": [{ "mask-r-to": ne() }],
        "mask-image-r-from-color": [{ "mask-r-from": D() }],
        "mask-image-r-to-color": [{ "mask-r-to": D() }],
        "mask-image-b-from-pos": [{ "mask-b-from": ne() }],
        "mask-image-b-to-pos": [{ "mask-b-to": ne() }],
        "mask-image-b-from-color": [{ "mask-b-from": D() }],
        "mask-image-b-to-color": [{ "mask-b-to": D() }],
        "mask-image-l-from-pos": [{ "mask-l-from": ne() }],
        "mask-image-l-to-pos": [{ "mask-l-to": ne() }],
        "mask-image-l-from-color": [{ "mask-l-from": D() }],
        "mask-image-l-to-color": [{ "mask-l-to": D() }],
        "mask-image-x-from-pos": [{ "mask-x-from": ne() }],
        "mask-image-x-to-pos": [{ "mask-x-to": ne() }],
        "mask-image-x-from-color": [{ "mask-x-from": D() }],
        "mask-image-x-to-color": [{ "mask-x-to": D() }],
        "mask-image-y-from-pos": [{ "mask-y-from": ne() }],
        "mask-image-y-to-pos": [{ "mask-y-to": ne() }],
        "mask-image-y-from-color": [{ "mask-y-from": D() }],
        "mask-image-y-to-color": [{ "mask-y-to": D() }],
        "mask-image-radial": [{ "mask-radial": [In, Tn] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": ne() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": ne() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": D() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": D() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": w() }],
        "mask-image-conic-pos": [{ "mask-conic": [ma] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": ne() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": ne() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": D() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": D() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: $() }],
        "mask-repeat": [{ mask: P() }],
        "mask-size": [{ mask: z() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", In, Tn] }],
        filter: [{ filter: ["", "none", In, Tn] }],
        blur: [{ blur: le() }],
        brightness: [{ brightness: [ma, In, Tn] }],
        contrast: [{ contrast: [ma, In, Tn] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", h, Qp, qp] }],
        "drop-shadow-color": [{ "drop-shadow": D() }],
        grayscale: [{ grayscale: ["", ma, In, Tn] }],
        "hue-rotate": [{ "hue-rotate": [ma, In, Tn] }],
        invert: [{ invert: ["", ma, In, Tn] }],
        saturate: [{ saturate: [ma, In, Tn] }],
        sepia: [{ sepia: ["", ma, In, Tn] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", In, Tn] }],
        "backdrop-blur": [{ "backdrop-blur": le() }],
        "backdrop-brightness": [{ "backdrop-brightness": [ma, In, Tn] }],
        "backdrop-contrast": [{ "backdrop-contrast": [ma, In, Tn] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", ma, In, Tn] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [ma, In, Tn] }],
        "backdrop-invert": [{ "backdrop-invert": ["", ma, In, Tn] }],
        "backdrop-opacity": [{ "backdrop-opacity": [ma, In, Tn] }],
        "backdrop-saturate": [{ "backdrop-saturate": [ma, In, Tn] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", ma, In, Tn] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": C() }],
        "border-spacing-x": [{ "border-spacing-x": C() }],
        "border-spacing-y": [{ "border-spacing-y": C() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              In,
              Tn,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [ma, "initial", In, Tn] }],
        ease: [{ ease: ["linear", "initial", v, In, Tn] }],
        delay: [{ delay: [ma, In, Tn] }],
        animate: [{ animate: ["none", b, In, Tn] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [x, In, Tn] }],
        "perspective-origin": [{ "perspective-origin": _() }],
        rotate: [{ rotate: ie() }],
        "rotate-x": [{ "rotate-x": ie() }],
        "rotate-y": [{ "rotate-y": ie() }],
        "rotate-z": [{ "rotate-z": ie() }],
        scale: [{ scale: X() }],
        "scale-x": [{ "scale-x": X() }],
        "scale-y": [{ "scale-y": X() }],
        "scale-z": [{ "scale-z": X() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: je() }],
        "skew-x": [{ "skew-x": je() }],
        "skew-y": [{ "skew-y": je() }],
        transform: [{ transform: [In, Tn, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: _() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: xe() }],
        "translate-x": [{ "translate-x": xe() }],
        "translate-y": [{ "translate-y": xe() }],
        "translate-z": [{ "translate-z": xe() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: D() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: D() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              In,
              Tn,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": C() }],
        "scroll-mx": [{ "scroll-mx": C() }],
        "scroll-my": [{ "scroll-my": C() }],
        "scroll-ms": [{ "scroll-ms": C() }],
        "scroll-me": [{ "scroll-me": C() }],
        "scroll-mt": [{ "scroll-mt": C() }],
        "scroll-mr": [{ "scroll-mr": C() }],
        "scroll-mb": [{ "scroll-mb": C() }],
        "scroll-ml": [{ "scroll-ml": C() }],
        "scroll-p": [{ "scroll-p": C() }],
        "scroll-px": [{ "scroll-px": C() }],
        "scroll-py": [{ "scroll-py": C() }],
        "scroll-ps": [{ "scroll-ps": C() }],
        "scroll-pe": [{ "scroll-pe": C() }],
        "scroll-pt": [{ "scroll-pt": C() }],
        "scroll-pr": [{ "scroll-pr": C() }],
        "scroll-pb": [{ "scroll-pb": C() }],
        "scroll-pl": [{ "scroll-pl": C() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          {
            "will-change": ["auto", "scroll", "contents", "transform", In, Tn],
          },
        ],
        fill: [{ fill: ["none", ...D()] }],
        "stroke-w": [{ stroke: [ma, xf, Yc, Lg] }],
        stroke: [{ stroke: ["none", ...D()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  Fc = YD(f$),
  wc = `/* 
  🎨 聊天界面视觉美学配置 (V16)
  【高自定义】两种方式任选或组合使用：
  ① 改下方 :root 里的变量 —— 改一处即可统一改气泡/顶栏/底栏/转账/动态/四类卡片颜色与尺寸；
  ② 直接改各区块的类名样式 —— 精确控制每一个元素（圆角、阴影、字号等）。
  修改后点击“更新”或“保存”即可生效。

  【可自定义范围】均可自由改：气泡、头像(.chat-avatar/--chat-avatar-*)、消息行头像显隐(.message-row-avatar)、
  顶栏、底栏、工具面板、时间戳、系统消息、回复引用条、引用框、语音/翻译、表情包/图片、转账/密码/外卖/扭蛋/代付卡片、
  动态卡片、正在输入、一起听邀请卡(.invite-card)、状态卡(.status-card)、聊天设置页(.chat-settings-*)。
  其中设置页左侧竖线可通过 .chat-settings-left-divider 单独改色/宽度。布局类尽量保留，主要改颜色/圆角/字号/阴影等。

  【限制说明】① 部分元素同时带 Tailwind 类，需覆盖时可用更高特异性或 !important；
  ② 表情包联想条、多选工具栏等为临时 UI，未单独提供类名，仅能通过父级或通用选择器影响。
*/

/* ========== 全局变量：改这里即可统一改整站风格 ========== */
:root {
  /* 主色 */
  --chat-primary: #5d4037;
  --chat-primary-light: #8d6e63;
  --chat-border: #d7ccc8;
  --chat-bg: #fffcf7;
  --chat-bg-paper: #fdfbf7;

  /* 气泡：我 */
  --bubble-me-bg: #e5dfdb;
  --bubble-me-color: #5d4037;
  --bubble-me-border: #d7ccc8;
  --bubble-me-radius: 18px 18px 2px 18px;
  --bubble-me-font-size: 13px;
  --bubble-me-padding: 6px 10px;

  /* 气泡：对方 */
  --bubble-other-bg: #ffffff;
  --bubble-other-color: #5d4037;
  --bubble-other-border: #efebe9;
  --bubble-other-radius: 18px 18px 18px 2px;
  --bubble-other-font-size: 13px;
  --bubble-other-padding: 6px 10px;

  /* 消息列表头像（尺寸/形状可改：如 --chat-avatar-radius: 50% 即圆形） */
  --chat-avatar-size: 38px;
  --chat-avatar-radius: 8px;
  --chat-avatar-border-color: #d7ccc8;
  --chat-avatar-padding: 2px;
  --chat-avatar-bg: white;

  /* 顶栏 / 底栏 */
  --header-bg: #fffcf7;
  --header-backing: #d7ccc8;
  --footer-bg: #fffcf7;
  --footer-backing: #d7ccc8;

  /* 顶栏未读徽标（返回键旁） */
  --header-unread-bg: #e5e7eb;
  --header-unread-color: #374151;
  --header-unread-min-width: 18px;
  --header-unread-height: 18px;
  --header-unread-padding-x: 4px;
  --header-unread-font-size: 10px;
  --header-unread-font-weight: 800;
  --header-unread-radius: 9999px;
  /* 位置微调：控制它离返回键的距离（负值更靠近） */
  --header-unread-margin-left: -16px;
  --header-unread-margin-right: 0px;

  /* 转账卡片（高自由：可改尺寸/圆角/各块颜色/状态图标色） */
  --transfer-width: 13rem;
  --transfer-radius: 20px;
  --transfer-me-bg: #e8d5c4;
  --transfer-me-border: #dcb8a0;
  --transfer-other-bg: #fffcf7;
  --transfer-other-border: #e8d5c4;
  --transfer-footer-me: rgba(255,255,255,0.3);
  --transfer-footer-other: #f7f5f0;
  --transfer-header-deco-me: rgba(255,255,255,0.2);
  --transfer-header-deco-other: rgba(232,213,196,0.2);
  --transfer-icon-pending-me-bg: rgba(255,255,255,0.6);
  --transfer-icon-pending-me-color: #5d4037;
  --transfer-icon-pending-other-bg: rgba(232,213,196,0.4);
  --transfer-icon-pending-other-color: #5d4037;
  --transfer-icon-accepted-bg: rgba(141,110,99,0.2);
  --transfer-icon-accepted-color: #8d6e63;
  --transfer-icon-rejected-bg: rgba(239,83,80,0.1);
  --transfer-icon-rejected-color: #ef5350;
  --transfer-amount-done-opacity: 0.4;

  /* 密码卡片 */
  --card-password-width: 224px;
  --card-password-bg: #fffcf7;
  --card-password-border: #efebe9;
  --card-password-header-bg: #8d6e63;
  --card-password-box-bg: #f5f5f5;
  --card-password-box-border: #d7ccc8;
  --card-password-radius: 20px;

  /* 外卖卡片（含状态徽章与底部按钮，可改 --card-food-* 与 --card-food-btn-*） */
  --card-food-width: 192px;
  --card-food-bg: #fffcf7;
  --card-food-border: #d7ccc8;
  --card-food-accent: #ffab91;
  --card-food-price-color: #ff7043;
  --card-food-status-pending: #ff7043;
  --card-food-status-ok: #4caf50;
  --card-food-status-no: #ef5350;
  --card-food-btn-action-bg: #ff7043;
  --card-food-btn-action-border: #f4511e;
  --card-food-btn-waiting-bg: #fff3e0;
  --card-food-btn-waiting-text: #ff7043;
  --card-food-btn-waiting-border: #ffccbc;
  --card-food-btn-done-bg: #e8f5e9;
  --card-food-btn-done-text: #4caf50;
  --card-food-btn-done-border: #c8e6c9;
  --card-food-btn-reject-bg: #ffebee;
  --card-food-btn-reject-text: #ef5350;
  --card-food-btn-reject-border: #ffcdd2;

  /* 扭蛋卡片 */
  --card-gashapon-width: 192px;
  --card-gashapon-bg: #fffcf7;
  --card-gashapon-border: #f5e6d3;
  --card-gashapon-bar: #ffd9b3;
  --card-gashapon-bar-end: #ffb380;

  /* 代付卡片（含状态与底部按钮，可改 --card-pay-* 与 --card-pay-btn-*） */
  --card-pay-width: 192px;
  --card-pay-bg: #fffcf7;
  --card-pay-border: #f48fb1;
  --card-pay-accent: #f48fb1;
  --card-pay-price: #ec407a;
  --card-pay-status-pending: #ec407a;
  --card-pay-status-ok: #4caf50;
  --card-pay-status-no: #ef5350;
  --card-pay-btn-action-bg: #ec407a;
  --card-pay-btn-action-border: #d81b60;
  --card-pay-btn-waiting-bg: #fce4ec;
  --card-pay-btn-waiting-text: #ec407a;
  --card-pay-btn-waiting-border: #f8bbd0;
  --card-pay-btn-done-bg: #e8f5e9;
  --card-pay-btn-done-text: #4caf50;
  --card-pay-btn-done-border: #c8e6c9;
  --card-pay-btn-reject-bg: #ffebee;
  --card-pay-btn-reject-text: #ef5350;
  --card-pay-btn-reject-border: #ffcdd2;

  /* 动态/朋友圈卡片 (两种形态：胶片条 / 日记明信片，高自由可改每一块) */
  --card-moment-width: 12rem;
  --card-moment-radius: 0.25rem;
  /* 日记明信片 */
  --card-moment-bg: #fffcf7;
  --card-moment-border: #e0e0e0;
  --card-moment-line: #e0e0e0;
  --card-moment-stamp-border: #d7ccc8;
  --card-moment-stamp-color: #d7ccc8;
  --card-moment-header-border: #5d4037;
  --card-moment-header-title: #5d4037;
  --card-moment-header-avatar-border: #5d4037;
  --card-moment-content-text: #4a4a4a;
  --card-moment-footer-from: #8d6e63;
  --card-moment-footer-name: #5d4037;
  --card-moment-footer-date: #bdbdbd;
  /* 胶片条 */
  --card-moment-film-bg: #1a1a1a;
  --card-moment-film-top-bottom-bg: #111;
  --card-moment-film-hole-bg: #333;
  --card-moment-film-image-border: rgba(255,255,255,0.1);
  --card-moment-film-badge-bg: rgba(0,0,0,0.5);
  --card-moment-film-badge-text: rgba(255,255,255,0.8);
  --card-moment-film-caption: #9ca3af;
  --card-moment-film-footer-opacity: 0.6;
  --card-moment-film-avatar-border: rgba(255,255,255,0.2);
  --card-moment-film-username: #6b7280;
}

/* =========================================
   1. 消息气泡样式
   ========================================= */

.chat-container {
  /* ChatDetail 页面根容器（由页面组件提供），便于主题整体调色/留白控制 */
}

.chat-messages-zone {
  /* 消息区包裹层（用于渐隐遮罩/定位等） */
}

.message-list {
  /* 消息滚动容器（ChatDetail.jsx 中使用 message-list 类） */
}

.chat-message {
  /* 单条消息外层（MessageList 中使用 chat-message + user/character） */
}
.chat-message.user {
}
.chat-message.character {
}

.chat-bubble-text {
  /* 气泡正文（MessageList 中的 <p className="chat-bubble-text ...">） */
}
.chat-bubble-text-inline {
  /* 引用/行内文字片段（MessageList/卡片中出现） */
}

.group-start {
  /* 气泡分组起始标记（用于连续气泡形态，如 INS bubble） */
}
.group-single {
  /* 单条分组（用于连续气泡形态） */
}
.group-first {
}
.group-middle {
}
.group-last {
}

.chat-bubble-me {
  background-color: var(--bubble-me-bg);
  color: var(--bubble-me-color);
  border-radius: var(--bubble-me-radius);
  box-shadow: 3px 3px 0px rgba(0,0,0,0.1);
  font-weight: 500;
  font-size: var(--bubble-me-font-size);
  line-height: 1.6;
  border: 2px solid var(--bubble-me-border);
  transform: rotate(-0.5deg);
  margin-right: 4px;
  padding: var(--bubble-me-padding);
}

.chat-bubble-other {
  background-color: var(--bubble-other-bg);
  color: var(--bubble-other-color);
  border-radius: var(--bubble-other-radius);
  box-shadow: 3px 3px 0px rgba(0,0,0,0.05);
  border: 2px solid var(--bubble-other-border);
  font-weight: 500;
  font-size: var(--bubble-other-font-size);
  line-height: 1.6;
  transform: rotate(0.5deg);
  margin-left: 4px;
  padding: var(--bubble-other-padding);
}

/* =========================================
   2. 头像样式 (消息列表)
   ========================================= */

/* 消息行：.message-row 为每条消息的整行（头像+气泡），便于按行定制 */
/* 头像槽：默认仅同组第一条显示头像；改为每条都显示可写：.message-row-avatar .chat-avatar { visibility: visible !important; pointer-events: auto !important; } */
.message-row-avatar {
  min-width: var(--chat-avatar-size);
  min-height: var(--chat-avatar-size);
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.message-row-avatar:not(.message-row-avatar-visible) .chat-avatar {
  visibility: hidden;
  pointer-events: none;
}

.chat-avatar {
  width: var(--chat-avatar-size);
  height: var(--chat-avatar-size);
  border-radius: var(--chat-avatar-radius);
  border: 2px dashed var(--chat-avatar-border-color);
  padding: var(--chat-avatar-padding);
  background-color: var(--chat-avatar-bg);
  box-shadow: 2px 2px 0px rgba(0,0,0,0.05);
  object-fit: cover;
  transition: transform 0.3s ease;
}

.chat-avatar:hover {
  transform: rotate(0deg) scale(1.1) !important;
}

/* =========================================
   3. 顶部导航栏 (Header)
   ========================================= */

/* 顶栏区域透明，透出整页衬底 chat-backdrop 的聊天背景 */
.chat-header-zone {
  background: transparent !important;
}

/* 顶部容器 */
.header-container {
  position: relative;
  z-index: 20;
  padding-top: 12px;
  padding-bottom: 16px;
  padding-left: 4px;
  padding-right: 4px;
}

.header-card {
  background-color: var(--header-bg);
  border-radius: 24px;
  box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1);
  position: relative;
  z-index: 2;
  border: 1px solid #fff;
  top: 8px;
}

.header-backing {
  position: absolute;
  top: 4px;
  left: 8px;
  right: 8px;
  height: 100%;
  background-color: var(--header-backing);
  border-radius: 24px;
  transform: rotate(-1deg);
  z-index: 1;
  opacity: 0.6;
}

/* 名字下方的装饰线 */
.underline-hand {
  position: relative;
  display: inline-block;
  z-index: 1;
}
.underline-hand::after {
  content: '';
  position: absolute;
  bottom: 2px;
  left: -5%;
  width: 110%;
  height: 8px;
  background-color: #ffccbc;    /* 装饰线颜色 */
  opacity: 0.4;
  z-index: -1;
  transform: rotate(-1deg);
  border-radius: 20px;
}

/* 顶部右侧：设置入口 (拍立得风格头像) */
.header-polaroid {
  position: relative;
  width: 52px;
  height: 60px;
  background-color: white;
  padding: 4px;
  padding-bottom: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transform: rotate(2deg);
  transition: transform 0.3s ease;
  border: 1px solid #f3f4f6;
}
.header-polaroid:hover {
  transform: rotate(0deg) scale(1.05);
}
.header-polaroid img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: #f3f4f6;
  filter: contrast(1.05);
}

/* 拍立得上的胶带装饰 */
.header-tape {
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%) rotate(-5deg);
  width: 24px;
  height: 12px;
  background-color: rgba(255, 204, 188, 0.5); /* 半透明橙色 */
  z-index: 20;
}

/* =========================================
   4. 底部输入栏 (Footer)
   ========================================= */

/* 底部容器（略增高：下内边距与卡片内边距稍大） */
.footer-container {
  position: relative;
  z-index: 20;
  padding: 0 4px 12px 4px;
}

.footer-card {
  background-color: var(--footer-bg);
  border-radius: 24px;
  box-shadow: 0 -5px 20px -5px rgba(0,0,0,0.05);
  position: relative;
  z-index: 2;
  border: 1px solid #fff;
  padding: 14px 16px;
}

.footer-backing {
  position: absolute;
  bottom: 4px;
  left: 8px;
  right: 8px;
  height: 100%;
  background-color: var(--footer-backing);
  border-radius: 24px;
  transform: rotate(1deg);
  z-index: 1;
  opacity: 0.6;
}

/* 输入框容器 */
.footer-input-container {
  flex: 1;
  position: relative;
}

/* 标签页触发器：默认隐藏，主题中可显示并定位到“521个标签页”等胶囊上，点击打开聊天功能 */
.footer-tabs-trigger {
  display: none;
}

/* 输入框本体 */
.footer-input {
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  color: #5d4037;
  font-weight: 500;
  font-size: 15px;
  padding: 8px 4px;
}
.footer-input::placeholder {
  color: #d7ccc8;
}

/* 输入框底部的线条 */
.footer-input-line {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #d7ccc8;
  opacity: 0.5;
  transition: opacity 0.3s ease, background-color 0.3s ease;
  border-radius: 1px;
  transform-origin: left;
}
.footer-input-container:focus-within .footer-input-line {
  opacity: 1;
  background-color: #8d6e63;
}

/* 工具按钮 (如附件、爱心) */
.footer-tool-btn {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d7ccc8;
  transition: color 0.3s;
}
.footer-tool-btn:hover {
  color: #8d6e63;
}

/* 发送按钮 */
.footer-send-btn {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s, transform 0.3s;
  border-radius: 50%; /* 圆形按钮 */
}
/* 发送按钮激活状态 (有文字时) */
.footer-send-btn.active {
  background-color: #8d6e63;
  color: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
/* 发送按钮禁用状态 */
.footer-send-btn.disabled {
  color: #e0e0e0;
}

/* =========================================
   5. 全局背景与滚动条
   ========================================= */

/* 隐藏滚动条 */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* 聊天背景（纯色，无波点） */
.bg-dot-grid {
  background-color: #fdfbf7;
}

/* 有自定义背景图时：底层杏色不参与叠色，透明让壁纸完整填充 */
.chat-backdrop[data-has-background="true"] .bg-dot-grid {
  background-color: transparent !important;
}

/* =========================================
   6. 工具面板 (点击附件按钮弹出)
   ========================================= */

/* 工具面板容器 */
.tool-panel {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 30;
  background-color: #fffcf7;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  padding: 24px;
  padding-bottom: 32px;
  box-shadow: 0 -4px 20px rgba(0,0,0,0.05);
  border-top: 1px solid rgba(255,255,255,0.5);
}

/* 单个工具按钮容器 */
.tool-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  cursor: pointer;
}

/* 工具图标容器 */
.tool-icon-container {
  width: 56px;
  height: 56px;
  background-color: #f2f0ea;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  border: 1px solid white;
  transition: transform 0.1s;
}
.tool-item:active .tool-icon-container {
  transform: scale(0.95);
}

/* 工具图标颜色 */
.tool-icon {
  color: #8d6e63;
}

/* 工具文字标签 */
.tool-label {
  font-size: 12px;
  font-weight: 500;
  color: #4a4a4a;
}

/* =========================================
   7. 系统消息与时间戳
   ========================================= */

/* 消息时间戳 */
.message-timestamp {
  font-size: 10px;
  font-weight: 500;
  color: #d7ccc8;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 24px;
  margin-top: 8px;
  text-align: center;
}

/* 撤回消息提示 */
.system-message-recall {
  background-color: #f5f5f5;
  padding: 4px 12px;
  border-radius: 8px;
  font-size: 10px;
  color: #9e9e9e;
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
  letter-spacing: 0.025em;
  border: 1px dashed #e0e0e0;
  cursor: pointer;
  transition: background-color 0.2s;
}
.system-message-recall:hover {
  background-color: #eeeeee;
}

/* 视频通话结束提示 */
.system-message-video {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #f5f5f5;
  padding: 8px 16px;
  border-radius: 9999px;
  font-size: 12px;
  color: #757575;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  border: 1px solid #eeeeee;
}

/* 指纹解锁状态变更提示：沿用系统提示胶囊风格，偏「安全/隐私」色系 */
.system-message-fingerprint {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: #fffcf7;
  padding: 6px 14px;
  border-radius: 9999px;
  font-size: 11px;
  color: #6d4c41;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
  border: 1px solid #efebe9;
}

/* 签名更新提示卡片 */
.system-message-signature {
  position: relative;
  background-color: rgba(255, 252, 247, 0.96);
  border: 1px solid #efebe9;
  border-radius: 12px;
  padding: 16px;
  max-width: 75%;
  box-shadow: 0 4px 20px -4px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  transition: transform 0.3s;
}
.system-message-signature:hover {
  transform: scale(1.02);
}

/* =========================================
   8. 顶部导航栏细节 (Header Details)
   ========================================= */

/* 返回键旁未读徽标（用于“其它会话未读总数”等） */
.chat-detail-unread-badge {
  margin-left: var(--header-unread-margin-left);
  margin-right: var(--header-unread-margin-right);
  min-width: var(--header-unread-min-width);
  height: var(--header-unread-height);
  padding-left: var(--header-unread-padding-x);
  padding-right: var(--header-unread-padding-x);
  background-color: var(--header-unread-bg);
  color: var(--header-unread-color);
  border-radius: var(--header-unread-radius);
  font-size: var(--header-unread-font-size);
  font-weight: var(--header-unread-font-weight);
  line-height: var(--header-unread-height);
  text-align: center;
  flex-shrink: 0;
}

/* 备注名 */
.header-remark {
  font-weight: 900;
  color: #5d4037;
  font-size: 20px;
  letter-spacing: -0.025em;
  font-family: serif;
  line-height: 1.15;
  position: relative;
  z-index: 10;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 网名 (显示在备注下方) */
.header-nickname {
  font-size: 10px;
  color: rgba(141, 110, 99, 0.7);
  font-weight: 500;
  margin-top: 2px;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 草稿箱：聊天气泡内的“草稿”小标记（由 MessageList 注入） */
.chat-draft-inline {
}
.chat-draft-inline-text {
}
.chat-draft-inline-icon {
}

/* 在线状态标签 */
.header-status {
  font-size: 10px;
  color: #8d6e63;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

/* 拍立得头像容器 */
.header-polaroid-container {
  position: relative;
  cursor: pointer;
}

/* =========================================
   9. 底部输入栏细节 (Footer Details)
   ========================================= */

/* 回复引用条 (输入框上方) */
.footer-reply-bar {
  position: absolute;
  top: -48px;
  left: 16px;
  right: 16px;
  background-color: #fffde7;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  border-radius: 8px;
  padding: 8px 16px;
  border: 1px solid #fff59d;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transform: rotate(-0.5deg);
  z-index: 25;
  animation: slide-in-from-bottom 0.2s ease-out;
}

/* =========================================
   10. 消息列表细节 (Message List Details)
   ========================================= */

/* 引用消息框 (气泡下方) */
.message-reply-box {
  max-width: 200px;
  padding: 8px 16px;
  border-radius: 12px;
  background-color: #f5f5f5;
  color: #757575;
  font-size: 11px;
  position: relative;
  transition: background-color 0.2s;
}
.message-reply-box:hover {
  background-color: #eeeeee;
}

/* 语音消息气泡 */
.chat-voice-bubble {
  padding: 6px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  min-width: 80px;
  justify-content: space-between;
}

/* 语音转文字（展开后的文字气泡） */
.chat-voice-transcript {
  margin-top: 6px;
}
.chat-voice-transcript-text {
  font-size: 12px;
  line-height: 1.6;
}

/* 语音播放图标 */
.chat-voice-icon {
  width: 24px;
  height: 24px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
  background-color: rgba(0,0,0,0.05);
}
.chat-voice-icon:hover {
  transform: scale(1.1);
}

/* 语音声波 */
.chat-voice-waveform {
  display: flex;
  gap: 2px;
  align-items: center;
  height: 16px;
}
.chat-voice-waveform > div {
  width: 2px;
  border-radius: 2px;
  background-color: currentColor;
  opacity: 0.5;
}

/* 语音时长 */
.chat-voice-duration {
  font-size: 12px;
  font-weight: 500;
  font-family: monospace;
  opacity: 0.7;
}

/* 翻译内容气泡 */
.chat-translation-bubble {
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid;
  font-size: 11px;
}

/* 翻译按钮 */
.chat-translation-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 6px;
  border-radius: 9999px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  border: 1px solid #d7ccc8;
  color: #8d6e63;
  transition: opacity 0.2s, background-color 0.2s, transform 0.2s, border-color 0.2s, box-shadow 0.2s;
  opacity: 0;
}
.group:hover .chat-translation-btn {
  opacity: 1;
}
.chat-translation-btn:hover {
  background-color: white;
  transform: translateY(-50%) scale(1.1);
}

/* =========================================
   11. 特殊消息卡片 (V14 新增)
   ========================================= */

/* 表情包消息 */
.message-meme {
  /* 表情包消息容器（MessageList 中使用 message-meme） */
}
.message-meme img {
  max-width: 120px;
  max-height: 120px;
  object-contain: contain;
  filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.1));
  transition: transform 0.2s;
}
.message-meme:hover img {
  transform: scale(1.05) rotate(-2deg);
}

/* 图片消息 (拍立得风格) */
.message-image {
  padding: 8px 8px 16px 8px;
  background-color: white;
  border: 1px solid #eee;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transform: rotate(1deg);
}
.message-image img {
  max-width: 136px;
  max-height: 182px;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
}
.message-image.from-me {
  transform: rotate(-1deg);
}

/* 情侣头像：情头图缩小一档 */
.message-image.message-image-couple img {
  max-width: 88px;
  max-height: 88px;
}

/* 文字模拟图片（拍立得风格，与真实图片一致，点击展开看文字） */
.message-text-image {
  cursor: pointer;
  transition: transform 0.2s;
}
.message-text-image:hover {
  transform: rotate(1deg) translateY(-1px);
}
.message-text-image.from-me:hover {
  transform: rotate(-1deg) translateY(-1px);
}
/* 固定尺寸：未点击与点击后一致，略小于真实图片 */
.message-text-image-inner {
  position: relative;
  width: 140px;
  height: 187px;
  flex-shrink: 0;
  border: 1px solid #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #fafafa;
  transition: background-color 0.3s;
}
.message-text-image-inner:has(.message-text-image-reveal) {
  background-color: #fffcf7;
}
.message-text-image-reveal {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: messageTextImageFadeIn 0.3s ease;
}
@keyframes messageTextImageFadeIn {
  from { opacity: 0; transform: scale(0.98); }
  to { opacity: 1; transform: scale(1); }
}
.message-text-image-text {
  font-size: 14px;
  color: #5d4037;
  font-family: serif;
  line-height: 1.6;
  text-align: center;
  white-space: pre-wrap;
  word-break: break-word;
  width: 100%;
  margin: 0;
}
.message-text-image-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  opacity: 0.5;
  transition: opacity 0.2s;
}
.message-text-image:hover .message-text-image-placeholder {
  opacity: 0.7;
}
.message-text-image-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px dashed #8d6e63;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8d6e63;
}
.message-text-image-label {
  font-size: 10px;
  font-weight: bold;
  letter-spacing: 0.2em;
  color: #8d6e63;
  text-transform: uppercase;
}
.message-text-image-tape {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%) rotate(2deg);
  width: 64px;
  height: 24px;
  background: rgba(255, 204, 188, 0.95);
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
}
.message-text-image-bottom {
  position: absolute;
  bottom: 8px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 8px;
  color: #d0d0d0;
  font-family: monospace;
  letter-spacing: 0.15em;
}

/* =========================================
   11.1 更多内嵌卡片（为自定义 CSS 提供覆盖入口）
   说明：部分卡片默认样式可能来自其它 CSS 文件；这里保留类名入口，便于用户自定义覆盖。
   ========================================= */

.message-card-dice-punishment {
}
.message-card-dice-punishment-inner {
}
.message-card-dice-punishment-rule {
}
.message-card-dice-punishment-rule-bottom {
}
.message-card-dice-punishment-label {
}
.message-card-dice-punishment-content {
}

.message-card-forward-chat-header {
}
.message-card-forward-chat-icon {
}
.message-card-forward-chat-header-text {
}
.message-card-forward-chat-title {
}
.message-card-forward-chat-friend {
}
.message-card-forward-chat-rule {
}
.message-card-forward-chat-cta {
}

.message-card-ledger-checkin-invite-inner {
}
.message-card-ledger-checkin-invite-icon {
}
.message-card-ledger-checkin-invite-kicker {
}
.message-card-ledger-checkin-invite-title {
}
.message-card-ledger-checkin-invite-from {
}
.message-card-ledger-checkin-invite-meta {
}
.message-card-ledger-checkin-invite-status {
}
.message-card-ledger-checkin-invite-status--ok {
}
.message-card-ledger-checkin-invite-status--no {
}

.message-card-couple-space-invite-bg {
}
.message-card-couple-space-invite-aurora {
}
.message-card-couple-space-invite-aurora-pink {
}
.message-card-couple-space-invite-aurora-blue {
}
.message-card-couple-space-invite-stars {
}
.message-card-couple-space-invite-star {
}
.message-card-couple-space-invite-orbit {
}
.message-card-couple-space-invite-orbit-1 {
}
.message-card-couple-space-invite-orbit-2 {
}

.message-card-couple-avatar {
}
.message-card-couple-avatar-header {
}
.message-card-couple-avatar-btn {
}
.message-card-couple-avatar-btn-accept {
}
.message-card-couple-avatar-btn-reject {
}

/* 转账消息（高自由：改 :root 里 --transfer-* 或按 data-status 精确控制） */
.message-transfer {
  width: var(--transfer-width);
  border-radius: var(--transfer-radius);
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  border: 2px solid;
  transition: transform 0.2s, box-shadow 0.2s;
}
.message-transfer:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.message-transfer.from-me {
  background-color: var(--transfer-me-bg);
  border-color: var(--transfer-me-border);
  color: var(--chat-primary);
}
.message-transfer.from-other {
  background-color: var(--transfer-other-bg);
  border-color: var(--transfer-other-border);
  color: var(--chat-primary);
}

/* 转账卡片头部 */
.transfer-header {
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
}
/* 头部右上装饰圆（可改 --transfer-header-deco-*） */
.transfer-header-deco {
  position: absolute;
  right: -1rem;
  top: -1rem;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  opacity: 0.2;
}
.message-transfer.from-me .transfer-header-deco {
  background-color: var(--transfer-header-deco-me);
}
.message-transfer.from-other .transfer-header-deco {
  background-color: var(--transfer-header-deco-other);
}
/* 转账图标：按 data-status 区分待接收/已收/已拒，可改 --transfer-icon-*-* */
.transfer-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
  flex-shrink: 0;
  z-index: 10;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s, transform 0.3s;
}
.message-transfer[data-status="pending"].from-me .transfer-icon {
  background-color: var(--transfer-icon-pending-me-bg);
  color: var(--transfer-icon-pending-me-color);
}
.message-transfer[data-status="pending"].from-other .transfer-icon {
  background-color: var(--transfer-icon-pending-other-bg);
  color: var(--transfer-icon-pending-other-color);
}
.message-transfer[data-status="accepted"] .transfer-icon {
  background-color: var(--transfer-icon-accepted-bg);
  color: var(--transfer-icon-accepted-color);
}
.message-transfer[data-status="rejected"] .transfer-icon {
  background-color: var(--transfer-icon-rejected-bg);
  color: var(--transfer-icon-rejected-color);
}
/* 转账金额 */
.transfer-amount {
  font-size: 18px;
  font-weight: bold;
  font-family: monospace;
  transition: opacity 0.3s;
}
.message-transfer[data-status="accepted"] .transfer-amount,
.message-transfer[data-status="rejected"] .transfer-amount {
  opacity: var(--transfer-amount-done-opacity);
}
/* 转账备注 */
.transfer-note {
  font-size: 12px;
  opacity: 0.7;
}
/* 转账卡片底部（可改 --transfer-footer-me/other） */
.transfer-footer {
  padding: 8px 16px;
  font-size: 10px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.message-transfer.from-me .transfer-footer {
  background-color: var(--transfer-footer-me);
}
.message-transfer.from-other .transfer-footer {
  background-color: var(--transfer-footer-other);
}

/* =========================================
   12. 消息卡片（密码 / 外卖 / 扭蛋 / 代付）
   方式一：改上面 :root 里 --card-* 变量，整张卡统一变。
   方式二：直接改下面对应类名的样式，精确控制每一块。
   ========================================= */

/* ----- 密码卡片 ----- */
.message-card-password {
  width: var(--card-password-width) !important;
  max-width: 100%;
  background-color: var(--card-password-bg) !important;
  border-color: var(--card-password-border) !important;
  border-radius: var(--card-password-radius);
  box-shadow: 0 4px 14px rgba(0,0,0,0.08);
  transition: transform 0.2s, box-shadow 0.2s;
}
.message-card-password:hover { box-shadow: 0 6px 18px rgba(0,0,0,0.1); }
.message-card-password-header {
  background-color: var(--card-password-header-bg) !important;
  padding: 10px 12px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.05em;
}
.message-card-password-content { padding: 14px 12px; gap: 10px; }
.message-card-password-box {
  background-color: var(--card-password-box-bg) !important;
  border-color: var(--card-password-box-border);
  border-radius: 12px;
  padding: 10px 12px;
  font-family: monospace;
  font-size: 14px;
  font-weight: 600;
}
.message-card-password-copy {
  border-radius: 8px;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.2s;
}
.message-card-password-copy:hover { transform: scale(1.05); }
.message-card-password-footer {
  font-size: 10px;
  line-height: 1.5;
  opacity: 0.85;
  color: #9e9e9e;
}

/* ----- 外卖/配送卡片 ----- */
.message-card-food {
  width: var(--card-food-width) !important;
  max-width: 100%;
  background-color: var(--card-food-bg) !important;
  border: 2px solid var(--card-food-border);
  border-radius: 4px;
  box-shadow: 0 4px 14px rgba(0,0,0,0.08);
  transition: transform 0.2s, box-shadow 0.2s;
}
.message-card-food:hover { box-shadow: 0 6px 18px rgba(0,0,0,0.1); }
.message-card-food-edge-top,
.message-card-food-edge-bottom { height: 6px; opacity: 0.9; }
.message-card-food-edge-top {
  background: linear-gradient(90deg, var(--card-food-accent) 0%, var(--card-food-price-color) 50%, var(--card-food-accent) 100%) !important;
}
.message-card-food-header { margin-bottom: 8px; }
.message-card-food-icon {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: var(--card-food-accent);
  color: var(--chat-primary);
  box-shadow: 0 1px 2px rgba(0,0,0,0.08);
}
.message-card-food-title { font-size: 11px; font-weight: 800; color: var(--chat-primary); }
.message-card-food-subtitle { font-size: 10px; color: var(--chat-primary-light); }
.message-card-food-status { font-size: 10px; font-weight: 700; padding: 2px 8px; border-radius: 4px; color: white; }
.message-card-food[data-status="pending"] .message-card-food-status { background-color: var(--card-food-status-pending); }
.message-card-food[data-status="accepted"] .message-card-food-status { background-color: var(--card-food-status-ok); }
.message-card-food[data-status="rejected"] .message-card-food-status { background-color: var(--card-food-status-no); }
.message-card-food-content { margin-bottom: 8px; }
.message-card-food-item { font-size: 13px; font-weight: 600; color: var(--chat-primary); }
.message-card-food-price {
  font-size: 14px;
  font-weight: 800;
  font-family: monospace;
  color: var(--card-food-price-color) !important;
}
.message-card-food-info { font-size: 10px; color: var(--chat-primary-light); }
/* 外卖卡片底部按钮（可改 --card-food-btn-*） */
.message-card-food-btn { border: 1px solid; }
.message-card-food-btn-action {
  background-color: var(--card-food-btn-action-bg);
  color: white;
  border-color: var(--card-food-btn-action-border);
  cursor: pointer;
}
.message-card-food-btn-action:hover { filter: brightness(0.95); }
.message-card-food-btn-action:active { transform: scale(0.98); }
.message-card-food-btn-waiting {
  background-color: var(--card-food-btn-waiting-bg);
  color: var(--card-food-btn-waiting-text);
  border-color: var(--card-food-btn-waiting-border);
}
.message-card-food-btn-done {
  background-color: var(--card-food-btn-done-bg);
  color: var(--card-food-btn-done-text);
  border-color: var(--card-food-btn-done-border);
}
.message-card-food-btn-reject {
  background-color: var(--card-food-btn-reject-bg);
  color: var(--card-food-btn-reject-text);
  border-color: var(--card-food-btn-reject-border);
}

/* ----- 扭蛋卡片 ----- */
.message-card-gashapon {
  width: var(--card-gashapon-width) !important;
  max-width: 100%;
  background-color: var(--card-gashapon-bg) !important;
  border-color: var(--card-gashapon-border) !important;
  border-radius: 4px;
  box-shadow: 0 4px 14px rgba(0,0,0,0.08);
  transition: transform 0.2s, box-shadow 0.2s;
}
.message-card-gashapon:hover { box-shadow: 0 6px 18px rgba(0,0,0,0.1); }
.message-card-gashapon-header-bar,
.message-card-gashapon-footer-bar {
  height: 5px;
  background: linear-gradient(90deg, var(--card-gashapon-bar) 0%, var(--card-gashapon-bar-end) 100%) !important;
  opacity: 0.5;
}
.message-card-gashapon-header { margin-bottom: 8px; border-color: var(--card-gashapon-border); }
.message-card-gashapon-icon {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: var(--card-gashapon-bar);
  color: var(--chat-primary);
  box-shadow: 0 1px 2px rgba(0,0,0,0.06);
}
.message-card-gashapon-title { font-size: 11px; font-weight: 800; color: var(--chat-primary); }
.message-card-gashapon-subtitle { font-size: 10px; color: var(--chat-primary-light); }
.message-card-gashapon-content { padding: 4px 0; }
.message-card-gashapon-item-name { font-size: 13px; font-weight: 700; color: var(--chat-primary); }
.message-card-gashapon-desc { font-size: 10px; color: var(--chat-primary-light); line-height: 1.4; }
.message-card-gashapon-prompt { font-size: 10px; color: var(--chat-primary-light); font-weight: 600; }

/* ----- 代付卡片 ----- */
.message-card-pay {
  width: var(--card-pay-width) !important;
  max-width: 100%;
  background-color: var(--card-pay-bg) !important;
  border: 2px solid var(--card-pay-border);
  border-radius: 4px;
  box-shadow: 0 4px 14px rgba(0,0,0,0.08);
  transition: transform 0.2s, box-shadow 0.2s;
}
.message-card-pay:hover { box-shadow: 0 6px 18px rgba(236,64,122,0.15); }
.message-card-pay-edge-top,
.message-card-pay-edge-bottom { height: 5px; }
.message-card-pay-edge-top {
  background: linear-gradient(90deg, var(--card-pay-accent) 0%, var(--card-pay-price) 50%, var(--card-pay-accent) 100%) !important;
  opacity: 0.6;
}
.message-card-pay-header { margin-bottom: 8px; border-color: var(--card-pay-accent); }
.message-card-pay-icon {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: var(--card-pay-accent);
  color: var(--card-pay-price);
  box-shadow: 0 1px 2px rgba(0,0,0,0.08);
}
.message-card-pay-title { font-size: 11px; font-weight: 800; color: #880e4f; }
.message-card-pay-subtitle { font-size: 10px; color: var(--card-pay-price); }
.message-card-pay-status { font-size: 10px; font-weight: 700; padding: 2px 8px; border-radius: 4px; color: white; }
.message-card-pay[data-status="pending"] .message-card-pay-status { background-color: var(--card-pay-status-pending); }
.message-card-pay[data-status="accepted"] .message-card-pay-status { background-color: var(--card-pay-status-ok); }
.message-card-pay[data-status="rejected"] .message-card-pay-status { background-color: var(--card-pay-status-no); }
.message-card-pay-content { margin-bottom: 8px; }
.message-card-pay-item { font-size: 13px; font-weight: 600; color: #880e4f; }
.message-card-pay-price {
  font-size: 14px;
  font-weight: 800;
  font-family: monospace;
  color: var(--card-pay-price) !important;
}
/* 代付卡片底部按钮（可改 --card-pay-btn-*） */
.message-card-pay-btn { border: 1px solid; }
.message-card-pay-btn-action {
  background-color: var(--card-pay-btn-action-bg);
  color: white;
  border-color: var(--card-pay-btn-action-border);
}
.message-card-pay-btn-action:hover { filter: brightness(0.95); }
.message-card-pay-btn-action:active { transform: scale(0.98); }
.message-card-pay-btn-waiting {
  background-color: var(--card-pay-btn-waiting-bg);
  color: var(--card-pay-btn-waiting-text);
  border-color: var(--card-pay-btn-waiting-border);
}
.message-card-pay-btn-done {
  background-color: var(--card-pay-btn-done-bg);
  color: var(--card-pay-btn-done-text);
  border-color: var(--card-pay-btn-done-border);
}
.message-card-pay-btn-reject {
  background-color: var(--card-pay-btn-reject-bg);
  color: var(--card-pay-btn-reject-text);
  border-color: var(--card-pay-btn-reject-border);
}
.message-card-pay-edge-bottom {
  background: linear-gradient(45deg, transparent 75%, #fdfbf7 75%), linear-gradient(-45deg, transparent 75%, #fdfbf7 75%);
  background-size: 8px 8px;
}

/* =========================================
   13. 动态/朋友圈卡片 (V16，高自由)
   方式一：改 :root 里 --card-moment-* / --card-moment-film-* 变量；
   方式二：直接改 .message-card-moment-film-* / .message-card-moment-* 等子类名。
   ========================================= */

.message-card-moment {
  width: var(--card-moment-width);
}

/* ----- 胶片条形态 ----- */