    );
  l.useEffect(
    function () {
      var p = t.current;
      if (p)
        return (
          p.addEventListener("keydown", f),
          function () {
            p.removeEventListener("keydown", f);
          }
        );
    },
    [t, n, i, f],
  );
}
function HB() {
  var t = jd(),
    s = Gv(),
    n = mo(),
    a = Yv(),
    r = l.useMemo(
      function () {
        return function (o) {
          var c = o.key;
          switch (c) {
            case Hr.ArrowUp:
              (o.preventDefault(), t());
              break;
            case Hr.ArrowRight:
              (o.preventDefault(), J_(rp()));
              break;
            case Hr.ArrowLeft:
              (o.preventDefault(), V_(rp()));
              break;
            case Hr.ArrowDown:
              (o.preventDefault(), rg(n.current));
              break;
            default:
              a(o);
              break;
          }
        };
      },
      [n, t, a],
    );
  l.useEffect(
    function () {
      var i = s.current;
      if (i)
        return (
          i.addEventListener("keydown", r),
          function () {
            i.removeEventListener("keydown", r);
          }
        );
    },
    [s, n, r],
  );
}
function WB() {
  var t = mo(),
    s = YB(),
    n = rA(),
    a = eA(),
    r = wd(),
    i = Yv(),
    o = l.useMemo(
      function () {
        return function (d) {
          var u = d.key,
            f = Zo(rp());
          switch (u) {
            case Hr.ArrowRight:
              (d.preventDefault(), jB(f));
              break;
            case Hr.ArrowLeft:
              (d.preventDefault(), NB(f));
              break;
            case Hr.ArrowDown:
              if ((d.preventDefault(), a())) {
                r();
                break;
              }
              SB(f);
              break;
            case Hr.ArrowUp:
              if ((d.preventDefault(), a())) {
                r();
                break;
              }
              kB(f, s);
              break;
            case Hr.Space:
              (d.preventDefault(), n(d.target));
              break;
            default:
              i(d);
              break;
          }
        };
      },
      [s, i, n, a, r],
    );
  l.useEffect(
    function () {
      var c = t.current;
      if (c)
        return (
          c.addEventListener("keydown", o),
          function () {
            c.removeEventListener("keydown", o);
          }
        );
    },
    [t, o],
  );
}
function oA() {
  var t = nA(),
    s = sg(),
    n = mo();
  return l.useCallback(
    function () {
      return s ? rg(n.current) : t();
    },
    [n, t, s],
  );
}
function YB() {
  var t = jd(),
    s = nA(),
    n = sg();
  return l.useCallback(
    function () {
      return n ? t() : s();
    },
    [t, n, s],
  );
}
function Bj(t) {
  var s = rp();
  s && (tU(s) || t(), J_(s));
}
function Uj() {
  var t = rp();
  t && V_(t);
}
function Yv() {
  var t = EB(),
    s = jd(),
    n = W_(),
    a = wd();
  return function (i) {
    var o = i.key;
    VB(i) ||
      n ||
      (o.match(/(^[a-zA-Z0-9]$){1}/) && (i.preventDefault(), a(), s(), t(o)));
  };
}
function VB(t) {
  var s = t.metaKey,
    n = t.ctrlKey,
    a = t.altKey;
  return s || n || a;
}
function JB(t, s, n, a, r, i, o, c) {
  if (t && s !== no.NATIVE) {
    var d = gd(t);
    p1.has(d) ||
      !i ||
      !o ||
      setTimeout(function () {
        var u = r + i.top,
          f = n + a,
          p = u >= f && u < f + o.emojiSize * 2;
        p && lA(c, t, s);
      });
  }
}
function lA(t, s, n) {
  if (s) {
    var a = gd(s);
    p1.has(a) ||
      (p1.add(a),
      Ev(s)
        .concat(a)
        .forEach(function (r) {
          var i = t(r, n);
          KB(i);
        }));
  }
}
var p1 = new Set();
function KB(t) {
  var s = new Image();
  s.src = t;
}
function qB() {
  var t = mo(),
    s = yd(),
    n = vd();
  l.useEffect(
    function () {
      if (s === no.NATIVE) return;
      var a = t.current;
      return (
        a == null || a.addEventListener("focusin", r),
        function () {
          a == null || a.removeEventListener("focusin", r);
        }
      );
      function r(i) {
        var o = Zo(i.target);
        if (o) {
          var c = Vv(o),
            d = c[0];
          d && Gu(d) && lA(n, d, s);
        }
      }
    },
    [t, s, n],
  );
}
var QB = ["width", "height"],
  x1 = 40;
function ZB(t) {
  var s = t.children;
  return l.createElement(q7, null, l.createElement(XB, null, s));
}
function XB(t) {
  var s,
    n = t.children,
    a = bd(),
    r = a[0],
    i = oB(),
    o = sg(),
    c = Wu(),
    d = lB(),
    u = cB();
  (OB(), qB());
  var f = u || {},
    p = f.width,
    m = f.height,
    h = v_(f, QB);
  return l.createElement(
    "aside",
    {
      className: Ca(
        wf.main,
        wf.baseVariables,
        i === np.DARK && wf.darkTheme,
        i === np.AUTO && wf.autoThemeDark,
        ((s = {}), (s[$a.searchActive] = o), s),
        r && wf.reactionsMenu,
        d,
      ),
      ref: c,
      style: dr({}, h, !r && { height: m, width: p }),
    },
    n,
  );
}
var Gj = {
    "--epr-emoji-variation-picker-bg-color":
      "var(--epr-dark-emoji-variation-picker-bg-color)",
    "--epr-hover-bg-color-reduced-opacity":
      "var(--epr-dark-hover-bg-color-reduced-opacity)",
    "--epr-highlight-color": "var(--epr-dark-highlight-color)",
    "--epr-text-color": "var(--epr-dark-text-color)",
    "--epr-hover-bg-color": "var(--epr-dark-hover-bg-color)",
    "--epr-focus-bg-color": "var(--epr-dark-focus-bg-color)",
    "--epr-search-input-bg-color": "var(--epr-dark-search-input-bg-color)",
    "--epr-category-label-bg-color": "var(--epr-dark-category-label-bg-color)",
    "--epr-picker-border-color": "var(--epr-dark-picker-border-color)",
    "--epr-bg-color": "var(--epr-dark-bg-color)",
    "--epr-reactions-bg-color": "var(--epr-dark-reactions-bg-color)",
    "--epr-search-input-bg-color-active":
      "var(--epr-dark-search-input-bg-color-active)",
    "--epr-emoji-variation-indicator-color":
      "var(--epr-dark-emoji-variation-indicator-color)",
    "--epr-category-icon-active-color":
      "var(--epr-dark-category-icon-active-color)",
    "--epr-skin-tone-picker-menu-color":
      "var(--epr-dark-skin-tone-picker-menu-color)",
    "--epr-skin-tone-outer-border-color":
      "var(--epr-dark-skin-tone-outer-border-color)",
    "--epr-skin-tone-inner-border-color":
      "var(--epr-dark-skin-tone-inner-border-color)",
  },
  wf = jr.create({
    main: {
      ".": ["epr-main", $a.emojiPicker],
      position: "relative",
      display: "flex",
      flexDirection: "column",
      borderWidth: "1px",
      borderStyle: "solid",
      borderRadius: "var(--epr-picker-border-radius)",
      borderColor: "var(--epr-picker-border-color)",
      backgroundColor: "var(--epr-bg-color)",
      overflow: "hidden",
      transition: "height 0.3s ease-in-out, background-color 0.1s ease-in-out",
      "*": { boxSizing: "border-box", fontFamily: "sans-serif" },
    },
    baseVariables: {
      "--": {
        "--epr-highlight-color": "#007aeb",
        "--epr-hover-bg-color": "#e5f0fa",
        "--epr-hover-bg-color-reduced-opacity": "#e5f0fa80",
        "--epr-focus-bg-color": "#e0f0ff",
        "--epr-text-color": "#858585",
        "--epr-search-input-bg-color": "#f6f6f6",
        "--epr-picker-border-color": "#e7e7e7",
        "--epr-bg-color": "#fff",
        "--epr-reactions-bg-color": "#ffffff90",
        "--epr-category-icon-active-color": "#6aa8de",
        "--epr-skin-tone-picker-menu-color": "#ffffff95",
        "--epr-skin-tone-outer-border-color": "#555555",
        "--epr-skin-tone-inner-border-color": "var(--epr-bg-color)",
        "--epr-horizontal-padding": "10px",
        "--epr-picker-border-radius": "8px",
        "--epr-header-padding": "15px var(--epr-horizontal-padding)",
        "--epr-active-skin-tone-indicator-border-color":
          "var(--epr-highlight-color)",
        "--epr-active-skin-hover-color": "var(--epr-hover-bg-color)",
        "--epr-search-input-bg-color-active":
          "var(--epr-search-input-bg-color)",
        "--epr-search-input-padding": "0 30px",
        "--epr-search-input-border-radius": "8px",
        "--epr-search-input-height": "40px",
        "--epr-search-input-text-color": "var(--epr-text-color)",
        "--epr-search-input-placeholder-color": "var(--epr-text-color)",
        "--epr-search-bar-inner-padding": "var(--epr-horizontal-padding)",
        "--epr-search-border-color": "var(--epr-search-input-bg-color)",
        "--epr-search-border-color-active": "var(--epr-highlight-color)",
        "--epr-category-navigation-button-size": "30px",
        "--epr-emoji-variation-picker-height": "45px",
        "--epr-emoji-variation-picker-bg-color": "var(--epr-bg-color)",
        "--epr-preview-height": "70px",
        "--epr-preview-text-size": "14px",
        "--epr-preview-text-padding": "0 var(--epr-horizontal-padding)",
        "--epr-preview-border-color": "var(--epr-picker-border-color)",
        "--epr-preview-text-color": "var(--epr-text-color)",
        "--epr-category-padding": "0 var(--epr-horizontal-padding)",
        "--epr-category-label-bg-color": "#ffffffe6",
        "--epr-category-label-text-color": "var(--epr-text-color)",
        "--epr-category-label-padding": "0 var(--epr-horizontal-padding)",
        "--epr-category-label-height": x1 + "px",
        "--epr-emoji-size": "30px",
        "--epr-emoji-padding": "5px",
        "--epr-emoji-fullsize":
          "calc(var(--epr-emoji-size) + var(--epr-emoji-padding) * 2)",
        "--epr-emoji-hover-color": "var(--epr-hover-bg-color)",
        "--epr-emoji-variation-indicator-color":
          "var(--epr-picker-border-color)",
        "--epr-emoji-variation-indicator-color-hover": "var(--epr-text-color)",
        "--epr-header-overlay-z-index": "3",
        "--epr-emoji-variations-indictator-z-index": "1",
        "--epr-category-label-z-index": "2",
        "--epr-skin-variation-picker-z-index": "5",
        "--epr-preview-z-index": "6",
        "--epr-dark": "#000",
        "--epr-dark-emoji-variation-picker-bg-color": "var(--epr-dark)",
        "--epr-dark-highlight-color": "#c0c0c0",
        "--epr-dark-text-color": "var(--epr-highlight-color)",
        "--epr-dark-hover-bg-color": "#363636f6",
        "--epr-dark-hover-bg-color-reduced-opacity": "#36363680",
        "--epr-dark-focus-bg-color": "#474747",
        "--epr-dark-search-input-bg-color": "#333333",
        "--epr-dark-category-label-bg-color": "#222222e6",
        "--epr-dark-picker-border-color": "#151617",
        "--epr-dark-bg-color": "#222222",
        "--epr-dark-reactions-bg-color": "#22222290",
        "--epr-dark-search-input-bg-color-active": "var(--epr-dark)",
        "--epr-dark-emoji-variation-indicator-color": "#444",
        "--epr-dark-category-icon-active-color": "#3271b7",
        "--epr-dark-skin-tone-picker-menu-color": "#22222295",
        "--epr-dark-skin-tone-outer-border-color":
          "var(--epr-dark-picker-border-color)",
        "--epr-dark-skin-tone-inner-border-color": "#00000000",
      },
    },
    autoThemeDark: {
      ".": $a.autoTheme,
      "@media (prefers-color-scheme: dark)": { "--": Gj },
    },
    darkTheme: { ".": $a.darkTheme, "--": Gj },
    reactionsMenu: {
      ".": "epr-reactions",
      height: "50px",
      display: "inline-flex",
      backgroundColor: "var(--epr-reactions-bg-color)",
      backdropFilter: "blur(8px)",
      "--": { "--epr-picker-border-radius": "50px" },
    },
  });
function cA(t, s) {
  if (!t || !s) return 0;
  var n = t.getBoundingClientRect().width,
    a = s.getBoundingClientRect().width;
  return Math.floor(n / a);
}
function eU(t, s, n) {
  if (!t || !s.length) return null;
  var a = t.getBoundingClientRect().top,
    r = t.getBoundingClientRect().bottom,
    i = a + dA(t),
    o = s.find(function (c) {
      var d = c.getBoundingClientRect().top,
        u = c.getBoundingClientRect().bottom,
        f = c.clientHeight * n,
        p = d + f,
        m = u - f;
      return p < i ? !1 : (p >= a && p <= r) || (m >= a && m <= r);
    });
  return o || null;
}
function tU(t) {
  return !!t.nextElementSibling;
}
function dA(t) {
  if (!t) return x1;
  var s = t.querySelector(Mo($a.label));
  if (s) {
    var n = s.getBoundingClientRect().height;
    if (n > 0) return n;
  }
  return x1;
}
var ip = "button" + Mo($a.emoji),
  sU = [ip, Mo($a.visible), ":not(" + Mo($a.hidden) + ")"].join("");
function Zo(t) {
  var s;
  return (s = t == null ? void 0 : t.closest(ip)) != null ? s : null;
}
function Vv(t) {
  var s = xA(t),
    n = Kv(t);
  if (!s) return [];
  var a = $v(n ?? s);
  return a ? [a, n] : [];
}
function nU(t) {
  var s;
  return !!(
    (t != null && t.matches(ip)) ||
    (!(t == null || (s = t.parentElement) == null) && s.matches(ip))
  );
}
function Hj(t) {
  var s;
  return (s = t == null ? void 0 : t.clientHeight) != null ? s : 0;
}
function uA(t) {
  if (!t) return 0;
  var s = Zo(t),
    n = Rc(s),
    a = Jv(n);
  return Wj(s) + Wj(n) + a;
}
function Jv(t) {
  var s, n;
  if (!t) return 0;
  var a = t.querySelector(Mo($a.categoryContent));
  return (
    ((s = t == null ? void 0 : t.clientHeight) != null ? s : 0) -
    ((n = a == null ? void 0 : a.clientHeight) != null ? n : 0)
  );
}
function aU(t) {
  return t ? mA(t) < Jv(Rc(t)) : !1;
}
function fA(t) {
  return t
    ? t.matches(Mo($a.scrollBody))
      ? t
      : t.querySelector(Mo($a.scrollBody))
    : null;
}
function mA(t) {
  var s, n;
  return t
    ? uA(t) - ((s = (n = pA(t)) == null ? void 0 : n.scrollTop) != null ? s : 0)
    : 0;
}
function pA(t) {
  var s;
  return t && (s = t.closest(Mo($a.scrollBody))) != null ? s : null;
}
function rU(t) {
  var s = Zo(t),
    n = Rc(s);
  return Yj(s) + Yj(n);
}
function Wj(t) {
  var s;
  return (s = t == null ? void 0 : t.offsetTop) != null ? s : 0;
}
function Yj(t) {
  var s;
  return (s = t == null ? void 0 : t.offsetLeft) != null ? s : 0;
}
function Kv(t) {
  var s;
  return (s = iU(Zo(t), "unified")) != null ? s : null;
}
function xA(t) {
  var s = Kv(t);
  return s ? E_(s) : null;
}
function hA(t) {
  return t
    ? { unified: Kv(t), originalUnified: xA(t) }
    : { unified: null, originalUnified: null };
}
function iU(t, s) {
  var n;
  return (n = oU(t)[s]) != null ? n : null;
}
function oU(t) {
  var s;
  return (s = t == null ? void 0 : t.dataset) != null ? s : {};
}
function qv(t) {
  return t.classList.contains($a.visible);
}
function gA(t) {
  return t ? t.classList.contains($a.hidden) : !0;
}
function Mu(t) {
  return t ? Array.from(t.querySelectorAll(sU)) : [];
}
function bA(t) {
  if (!t) return null;
  var s = Mu(t),
    n = s.slice(-1),
    a = n[0];
  return a ? (qv(a) ? a : Qv(a)) : null;
}
function yA(t) {
  var s = t.nextElementSibling;
  return s ? (qv(s) ? s : yA(s)) : Zv(og(t));
}
function Qv(t) {
  var s = t.previousElementSibling;
  return s ? (qv(s) ? s : Qv(s)) : bA(ig(t));
}
function Zv(t) {
  if (!t) return null;
  var s = Mu(t);
  return eU(t, s, 0.1);
}
function ig(t) {
  var s = Rc(t);
  if (!s) return null;
  var n = s.previousElementSibling;
  return n ? (gA(n) ? ig(n) : n) : null;
}
function og(t) {
  var s = Rc(t);
  if (!s) return null;
  var n = s.nextElementSibling;
  return n ? (gA(n) ? og(n) : n) : null;
}
function Rc(t) {
  return t ? t.closest(Mo($a.category)) : null;
}
function vA(t) {
  return t ? t.closest(Mo($a.categoryContent)) : null;
}
function wA(t) {
  return t
    .split("-")
    .map(function (s) {
      return String.fromCodePoint(parseInt(s, 16));
    })
    .join("");
}
function lU(t) {
  return t.category === pa.CUSTOM;
}
function jA(t) {
  return t.imgUrl !== void 0;
}
function NA(t, s) {
  var n = l.useRef(),
    a = rA(),
    r = Q7(),
    i = Hu(),
    o = i[1],
    c = wd(),
    d = tg(),
    u = d[0],
    f = rB(s),
    p = Ov(),
    m = p[1],
    h = vd(),
    g = yd(),
    x = l.useCallback(
      function (N) {
        if (!r.current) {
          c();
          var w = Vj(N),
            _ = w[0],
            A = w[1];
          if (!(!_ || !A)) {
            var k = B7(A) || u;
            (m(), U7(_, k), f(cU(_, k, g, h), N));
          }
        }
      },
      [u, c, r, f, m, h, g],
    ),
    y = l.useCallback(
      function (N) {
        var w;
        n.current && clearTimeout(n.current);
        var _ = Vj(N),
          A = _[0];
        !A ||
          !Gu(A) ||
          (n.current =
            (w = window) == null
              ? void 0
              : w.setTimeout(function () {
                  ((r.current = !0),
                    (n.current = void 0),
                    c(),
                    a(N.target),
                    o(A));
                }, 500));
      },
      [r, c, a, o],
    ),
    v = l.useCallback(
      function () {
        n.current
          ? (clearTimeout(n.current), (n.current = void 0))
          : r.current &&
            requestAnimationFrame(function () {
              r.current = !1;
            });
      },
      [r],
    );
  l.useEffect(
    function () {
      if (t.current) {
        var b = t.current;
        return (
          b.addEventListener("click", x, { passive: !0 }),
          b.addEventListener("mousedown", y, { passive: !0 }),
          b.addEventListener("mouseup", v, { passive: !0 }),
          function () {
            (b == null || b.removeEventListener("click", x),
              b == null || b.removeEventListener("mousedown", y),
              b == null || b.removeEventListener("mouseup", v));
          }
        );
      }
    },
    [t, x, y, v],
  );
}
function Vj(t) {
  var s = t == null ? void 0 : t.target;
  return nU(s) ? Vv(s) : [];
}
function cU(t, s, n, a) {
  var r = Dv(t);
  if (jA(t)) {
    var i = yl(t);
    return {
      activeSkinTone: s,
      emoji: i,
      getImageUrl: function () {
        return t.imgUrl;
      },
      imageUrl: t.imgUrl,
      isCustom: !0,
      names: r,
      unified: i,
      unifiedWithoutSkinTone: i,
    };
  }
  var o = yl(t, s);
  return {
    activeSkinTone: s,
    emoji: wA(o),
    getImageUrl: function (d) {
      return (d === void 0 && (d = n ?? no.APPLE), a(o, d));
    },
    imageUrl: a(o, n ?? no.APPLE),
    isCustom: !1,
    names: r,
    unified: o,
    unifiedWithoutSkinTone: yl(t),
  };
}
function Tp(t) {
  return l.createElement(
    "button",
    Object.assign({ type: "button" }, t, {
      className: Ca(dU.button, t.className),
    }),
    t.children,
  );
}
var dU = jr.create({
  button: {
    ".": "epr-btn",
    cursor: "pointer",
    border: "0",
    background: "none",
    outline: "none",
  },
});
function uU(t) {
  var s,
    n = t.emojiNames,
    a = t.unified,
    r = t.hidden,
    i = t.hiddenOnSearch,
    o = t.showVariations,
    c = o === void 0 ? !0 : o,
    d = t.hasVariations,
    u = t.children,
    f = t.className,
    p = t.noBackground,
    m = p === void 0 ? !1 : p,
    h = t.style;
  return l.createElement(
    Tp,
    {
      className: Ca(
        nb.emoji,
        r && Tv.hidden,
        i && hd.hiddenOnSearch,
        ((s = {}), (s[$a.visible] = !r && !i), s),
        !!(d && c) && nb.hasVariations,
        m && nb.noBackground,
        f,
      ),
      "data-unified": a,
      "aria-label": fU(n),
      "data-full-name": n,
      style: h,
    },
    u,
  );
}
function fU(t) {
  return t[t.length - 1];
}
var nb = jr.create({
    emoji: {
      ".": $a.emoji,
      position: "relative",
      width: "var(--epr-emoji-fullsize)",
      height: "var(--epr-emoji-fullsize)",
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      maxWidth: "var(--epr-emoji-fullsize)",
      maxHeight: "var(--epr-emoji-fullsize)",
      borderRadius: "8px",
      overflow: "hidden",
      transition: "background-color 0.2s",
      ":hover": { backgroundColor: "var(--epr-emoji-hover-color)" },
      ":focus": { backgroundColor: "var(--epr-focus-bg-color)" },
    },
    noBackground: {
      background: "none",
      ":hover": { backgroundColor: "transparent", background: "none" },
      ":focus": { backgroundColor: "transparent", background: "none" },
    },
    hasVariations: {
      ".": $a.emojiHasVariations,
      ":after": {
        content: "",
        display: "block",
        width: "0",
        height: "0",
        right: "0px",
        bottom: "1px",
        position: "absolute",
        borderLeft: "4px solid transparent",
        borderRight: "4px solid transparent",
        transform: "rotate(135deg)",
        borderBottom: "4px solid var(--epr-emoji-variation-indicator-color)",
        zIndex: "var(--epr-emoji-variations-indictator-z-index)",
      },
      ":hover:after": {
        borderBottom:
          "4px solid var(--epr-emoji-variation-indicator-color-hover)",
      },
    },
  }),
  gh = jr.create({
    external: { ".": $a.external, fontSize: "0" },
    common: { alignSelf: "center", justifySelf: "center", display: "block" },
  });
function Jj(t) {
  var s = t.emojiName,
    n = t.style,
    a = t.lazyLoad,
    r = a === void 0 ? !1 : a,
    i = t.imgUrl,
    o = t.onError,
    c = t.className;
  return l.createElement("img", {
    src: i,
    alt: s,
    className: Ca(mU.emojiImag, gh.external, gh.common, c),
    loading: r ? "lazy" : "eager",
    onError: o,
    style: n,
  });
}
var mU = jr.create({
  emojiImag: {
    ".": "epr-emoji-img",
    maxWidth: "var(--epr-emoji-fullsize)",
    maxHeight: "var(--epr-emoji-fullsize)",
    minWidth: "var(--epr-emoji-fullsize)",
    minHeight: "var(--epr-emoji-fullsize)",
    padding: "var(--epr-emoji-padding)",
  },
});
function pU(t) {
  var s = t.unified,
    n = t.style,
    a = t.className;
  return l.createElement(
    "span",
    {
      className: Ca(xU.nativeEmoji, gh.common, gh.external, a),
      "data-unified": s,
      style: n,
    },
    wA(s),
  );
}
var xU = jr.create({
  nativeEmoji: {
    ".": "epr-emoji-native",
    fontFamily:
      '"Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "EmojiOne Color", "Android Emoji"!important',
    position: "relative",
    lineHeight: "100%",
    fontSize: "var(--epr-emoji-size)",
    textAlign: "center",
    alignSelf: "center",
    justifySelf: "center",
    letterSpacing: "0",
    padding: "var(--epr-emoji-padding)",
  },
});
function h1(t) {
  var s = t.emoji,
    n = t.unified,
    a = t.emojiStyle,
    r = t.size,
    i = t.lazyLoad,
    o = t.getEmojiUrl,
    c = o === void 0 ? k_ : o,
    d = t.className,
    u = F_(),
    f = u[1],
    p = Cp(),
    m = p.emojiByUnified,
    h = {};
  r && (h.width = h.height = h.fontSize = r + "px");
  var g = s || m(n);
  if (!g) return null;
  if (jA(g))
    return l.createElement(Jj, {
      style: h,
      emojiName: n,
      emojiStyle: no.NATIVE,
      lazyLoad: i,
      imgUrl: g.imgUrl,
      onError: x,
      className: d,
    });
  return l.createElement(
    l.Fragment,
    null,
    a === no.NATIVE
      ? l.createElement(pU, { unified: n, style: h, className: d })
      : l.createElement(Jj, {
          style: h,
          emojiName: w7(g),
          emojiStyle: a,
          lazyLoad: i,
          imgUrl: c(n, a),
          onError: x,
          className: d,
        }),
  );
  function x() {
    f(function (y) {
      return new Set(y).add(n);
    });
  }
}
function lg(t) {
  var s = t.emoji,
    n = t.unified,
    a = t.hidden,
    r = t.hiddenOnSearch,
    i = t.emojiStyle,
    o = t.showVariations,
    c = o === void 0 ? !0 : o,
    d = t.size,
    u = t.lazyLoad,
    f = t.getEmojiUrl,
    p = t.className,
    m = t.noBackground,
    h = m === void 0 ? !1 : m,
    g = t.style,
    x = Gu(s);
  return l.createElement(
    uU,
    {
      hasVariations: x,
      showVariations: c,
      hidden: a,
      hiddenOnSearch: r,
      emojiNames: Dv(s),
      unified: n,
      noBackground: h,
      style: g,
    },
    l.createElement(h1, {
      unified: n,
      emoji: s,
      size: d,
      emojiStyle: i,
      lazyLoad: u,
      getEmojiUrl: f,
      className: p,
    }),
  );
}
var hU =
  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI4LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjgwcHgiIHZpZXdCb3g9IjAgMCAyMCA4MCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgODAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsPSIjODY4Njg2IiBkPSJNNS43LDEwLjRjMCwwLjEsMC4xLDAuMywwLjIsMC40QzYsMTAuOSw2LjEsMTEsNi4zLDExaDMuNHYzLjRjMCwwLjEsMC4xLDAuMywwLjIsMC40CgljMC4xLDAuMSwwLjIsMC4yLDAuNCwwLjJjMC4zLDAsMC41LTAuMiwwLjUtMC41di0zLjRoMy40YzAuMywwLDAuNS0wLjIsMC41LTAuNXMtMC4yLTAuNS0wLjUtMC41aC0zLjRWNi43YzAtMC4zLTAuMi0wLjUtMC41LTAuNQoJQzkuOCw2LDkuNiw2LjIsOS42LDYuNXYzLjRINi4yQzUuOSw5LjksNS43LDEwLjEsNS43LDEwLjRMNS43LDEwLjR6Ii8+CjxwYXRoIGZpbGw9IiMzMzcxQjciIGQ9Ik01LjcsMzAuNGMwLDAuMSwwLjEsMC4zLDAuMiwwLjRTNi4xLDMxLDYuMywzMWgzLjR2My40YzAsMC4xLDAuMSwwLjMsMC4yLDAuNGMwLjEsMC4xLDAuMiwwLjIsMC40LDAuMgoJYzAuMywwLDAuNS0wLjIsMC41LTAuNXYtMy40aDMuNGMwLjMsMCwwLjUtMC4yLDAuNS0wLjVzLTAuMi0wLjUtMC41LTAuNWgtMy40di0zLjRjMC0wLjMtMC4yLTAuNS0wLjUtMC41cy0wLjUsMC4yLTAuNSwwLjV2My40SDYuMgoJQzUuOSwyOS45LDUuNywzMC4xLDUuNywzMC40TDUuNywzMC40eiIvPgo8cGF0aCBmaWxsPSIjQzBDMEJGIiBkPSJNNS43LDUwLjRjMCwwLjEsMC4xLDAuMywwLjIsMC40QzYsNTAuOSw2LjEsNTEsNi4zLDUxaDMuNHYzLjRjMCwwLjEsMC4xLDAuMywwLjIsMC40CgljMC4xLDAuMSwwLjIsMC4yLDAuNCwwLjJjMC4zLDAsMC41LTAuMiwwLjUtMC41di0zLjRoMy40YzAuMywwLDAuNS0wLjIsMC41LTAuNXMtMC4yLTAuNS0wLjUtMC41aC0zLjR2LTMuNGMwLTAuMy0wLjItMC41LTAuNS0wLjUKCXMtMC41LDAuMi0wLjUsMC41djMuNEg2LjJDNS45LDQ5LjksNS43LDUwLjEsNS43LDUwLjRMNS43LDUwLjR6Ii8+CjxwYXRoIGZpbGw9IiM2QUE5REQiIGQ9Ik01LjcsNzAuNGMwLDAuMSwwLjEsMC4zLDAuMiwwLjRTNi4xLDcxLDYuMyw3MWgzLjR2My40YzAsMC4xLDAuMSwwLjMsMC4yLDAuNGMwLjEsMC4xLDAuMiwwLjIsMC40LDAuMgoJYzAuMywwLDAuNS0wLjIsMC41LTAuNXYtMy40aDMuNGMwLjMsMCwwLjUtMC4yLDAuNS0wLjVzLTAuMi0wLjUtMC41LTAuNWgtMy40di0zLjRjMC0wLjMtMC4yLTAuNS0wLjUtMC41cy0wLjUsMC4yLTAuNSwwLjV2My40SDYuNAoJQzUuOSw2OS45LDUuNyw3MC4xLDUuNyw3MC40TDUuNyw3MC40eiIvPgo8L3N2Zz4=";
function gU() {
  var t = bd(),
    s = t[1];
  return l.createElement(Tp, {
    "aria-label": "Show all Emojis",
    title: "Show all Emojis",
    tabIndex: 0,
    className: Ca(bU.plusSign),
    onClick: function () {
      return s(!1);
    },
  });
}
var bU = jr.create(
  dr(
    {
      plusSign: {
        fontSize: "20px",
        padding: "17px",
        color: "var(--epr-text-color)",
        borderRadius: "50%",
        textAlign: "center",
        lineHeight: "100%",
        width: "20px",
        height: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "background-color 0.2s ease-in-out",
        ":after": {
          content: "",
          minWidth: "20px",
          minHeight: "20px",
          backgroundImage: "url(" + hU + ")",
          backgroundColor: "transparent",
          backgroundRepeat: "no-repeat",
          backgroundSize: "20px",
          backgroundPositionY: "0",
        },
        ":hover": {
          color: "var(--epr-highlight-color)",
          backgroundColor: "var(--epr-hover-bg-color-reduced-opacity)",
          ":after": { backgroundPositionY: "-20px" },
        },
        ":focus": {
          color: "var(--epr-highlight-color)",
          backgroundColor: "var(--epr-hover-bg-color-reduced-opacity)",
          ":after": { backgroundPositionY: "-40px" },
        },
      },
    },
    Lc("plusSign", {
      ":after": { backgroundPositionY: "-40px" },
      ":hover:after": { backgroundPositionY: "-60px" },
    }),
  ),
);
function yU() {
  var t = bd(),
    s = t[0],
    n = hB(),
    a = mB();
  NA(n, ap.REACTIONS);
  var r = yd(),
    i = O_(),
    o = vd();
  return s
    ? l.createElement(
        "ul",
        { className: Ca(Kj.list, !s && Tv.hidden), ref: n },
        a.map(function (c) {
          var d = $v(c);
          return d
            ? l.createElement(
                "li",
                { key: c },
                l.createElement(lg, {
                  emoji: d,
                  emojiStyle: r,
                  unified: c,
                  showVariations: !1,
                  className: Ca(Kj.emojiButton),
                  noBackground: !0,
                  getEmojiUrl: o,
                }),
              )
            : null;
        }),
        i ? l.createElement("li", null, l.createElement(gU, null)) : null,
      )
    : null;
}
var Kj = jr.create({
  list: {
    listStyle: "none",
    margin: "0",
    padding: "0 5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
  emojiButton: {
    ":hover": { transform: "scale(1.2)" },
    ":focus": { transform: "scale(1.2)" },
    ":active": { transform: "scale(1.1)" },
    transition: "transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.5)",
  },
});
function vU(t) {
  var s = wd(),
    n = l.useState(0),
    a = n[0],
    r = n[1];
  return (
    l.useEffect(
      function () {
        var i = t.current;
        if (!i) return;
        i.addEventListener("scroll", o, { passive: !0 });
        function o() {
          var c;
          (r((c = i == null ? void 0 : i.scrollTop) != null ? c : 0), s());
        }
        return function () {
          i == null || i.removeEventListener("scroll", o);
        };
      },
      [t, s],
    ),
    a
  );
}
function wU(t) {
  var s = t.scrollTop,
    n = t.clientHeight,
    a = t.topOffset,
    r = t.style,
    i = t.dimensions;
  if (!r || !i) return !1;
  var o = a + r.top,
    c = o + i.emojiSize,
    d = c + i.emojiSize * 2 >= s && o <= s + n + i.emojiSize;
  return !d;
}
function jU(t, s) {
  return t
    ? {
        top: Math.floor(s / t.emojisPerRow) * t.emojiSize,
        left: (s % t.emojisPerRow) * t.emojiSize,
      }
    : void 0;
}
var NU = 40;
function kU(t) {
  var s = Q_(),
    n = bd(),
    a = n[0],
    r = Wu(),
    i = l.useRef(),
    o = Pv(),
    c = o[0],
    d = z_(),
    u = d[0],
    f = l.useState(),
    p = f[0],
    m = f[1],
    h = l.useCallback(
      function () {
        var g = s.current;
        if (g) {
          var x = g.querySelector(ip),
            y = x == null ? void 0 : x.clientHeight;
          y && (i.current = y);
          var v = u || y || i.current || NU,
            b = g.clientWidth;
          if (!(b === 0 || v === 0)) {
            var N = Math.max(1, Math.floor(b / v)),
              w = Math.ceil(t / N),
              _ = w * v;
            m({ categoryHeight: _, emojisPerRow: N, emojiSize: v });
          }
        }
      },
      [s, t, u],
    );
  return (
    l.useEffect(
      function () {
        h();
      },
      [t, a, h, c.length],
    ),
    l.useEffect(
      function () {
        var g = r.current;
        if (g) {
          var x = function (v) {
            var b = v,
              N = b.propertyName;
            (N === "width" ||
              N === "max-width" ||
              N === "min-width" ||
              N === "height" ||
              N === "max-height" ||
              N === "min-height") &&
              (typeof queueMicrotask == "function"
                ? queueMicrotask(function () {
                    return h();
                  })
                : requestAnimationFrame(function () {
                    return h();
                  }));
          };
          return (
            g.addEventListener("transitionend", x, { passive: !0 }),
            function () {
              g.removeEventListener("transitionend", x);
            }
          );
        }
      },
      [r, h],
    ),
    p
  );
}
function SU() {
  var t = F_(),
    s = t[0],
    n = FB();
  return function (a) {
    var r = gd(a),
      i = s.has(r),
      o = n(r);
    return { failedToLoad: i, filteredOut: o, hidden: i || o };
  };
}
function _U(t) {
  var s = t.categoryEmojis,
    n = t.topOffset,
    a = t.onHeightReady,
    r = t.scrollTop,
    i = t.isCategoryVisible,
    o = SU(),
    c = H_(),
    d = yd(),
    u = tg(),
    f = u[0],
    p = V7(),
    m = vd(),
    h = !B_(),
    g = mo(),
    x = 0,
    y = s.filter(function (w) {
      var _ = p(w),
        A = o(w),
        k = A.failedToLoad,
        C = A.filteredOut,
        M = A.hidden;
      return !k && !C && !M && !_;
    }),
    v = kU(y.length);
  l.useEffect(
    function () {
      v && a(v.categoryHeight);
    },
    [v, a, y.length],
  );
  var b = function (_) {
      var A, k;
      return (
        v &&
        g.current &&
        wU({
          scrollTop: r,
          clientHeight:
            (A = (k = g.current) == null ? void 0 : k.clientHeight) != null
              ? A
              : 0,
          topOffset: n,
          style: _,
          dimensions: v,
        })
      );
    },
    N = y.reduce(function (w, _, A) {
      var k = gd(_, f),
        C = jU(v, A);
      if (b(C)) {
        var M, E;
        return (
          x++,
          JB(
            _,
            d,
            r,
            (M = (E = g.current) == null ? void 0 : E.clientHeight) != null
              ? M
              : 0,
            n,
            C,
            v,
            m,
          ),
          w
        );
      }
      return i
        ? (w.push(
            l.createElement(lg, {
              showVariations: h,
              key: k,
              emoji: _,
              unified: k,
              emojiStyle: d,
              lazyLoad: c,
              getEmojiUrl: m,
              style: dr({}, C, { position: "absolute" }),
            }),
          ),
          w)
        : (x++, w);
    }, []);
  return { virtualizedCounter: x, emojis: N, dimensions: v };
}
function AU(t) {
  var s = t.categoryConfig,
    n = t.children,
    a = t.hidden,
    r = t.hiddenOnSearch,
    i = t.height,
    o = Zh(s),
    c = A_(s);
  return l.createElement(
    "li",
    {
      className: Ca(ab.category, a && Tv.hidden, r && hd.hiddenOnSearch),
      "data-name": o,
      "aria-label": c,
    },
    l.createElement("h2", { className: Ca(ab.label) }, c),
    l.createElement(
      "div",
      { className: Ca(ab.categoryContent), style: { height: i } },
      n,
    ),
  );
}
var ab = jr.create({
  category: {
    ".": $a.category,
    minHeight:
      "calc(var(--epr-emoji-fullsize) + var(--epr-category-label-height))",
    position: "relative",
  },
  categoryContent: {
    ".": $a.categoryContent,
    display: "grid",
    gridGap: "0",
    gridTemplateColumns: "repeat(auto-fill, var(--epr-emoji-fullsize))",
    justifyContent: "space-between",
    margin: "var(--epr-category-padding)",
    position: "relative",
  },
  label: {
    ".": $a.label,
    alignItems: "center",
    backdropFilter: "blur(3px)",
    backgroundColor: "var(--epr-category-label-bg-color)",
    color: "var(--epr-category-label-text-color)",
    display: "flex",
    fontSize: "16px",
    fontWeight: "bold",
    height: "var(--epr-category-label-height)",
    margin: "0",
    padding: "var(--epr-category-label-padding)",
    position: "sticky",
    textTransform: "capitalize",
    top: "0",
    width: "100%",
    zIndex: "var(--epr-category-label-z-index)",
  },
});
function CU() {
  var t = Bv(),
    s = R7(),
    n = yd(),
    a = vd(),
    r = H_(),
    i = tg(),
    o = i[0],
    c = z_(),
    d = c[0],
    u = c[1],
    f = l.useRef(null);
  if (
    (l.useLayoutEffect(function () {
      f.current && u(f.current.clientHeight);
    }),
    d)
  )
    return null;
  var p = t[0],
    m = s(Zh(p))[0],
    h = m ? yl(m, o) : "";
  return m
    ? l.createElement(
        "div",
        { ref: f },
        l.createElement(lg, {
          emoji: m,
          unified: h,
          emojiStyle: n,
          getEmojiUrl: a,
          lazyLoad: r,
          showVariations: !1,
          hidden: !1,
          style: {
            opacity: 0,
            pointerEvents: "none",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
            height: "var(--epr-emoji-fullsize)",
            width: "var(--epr-emoji-fullsize)",
          },
        }),
      )
    : null;
}
function MU(t) {
  var s = t.scrollTop,
    n = Bv(),
    a = l.useState({}),
    r = a[0],
    i = a[1],
    o = Q_(),
    c = H7(),
    d = dA(o.current),
    u = 0;
  return l.createElement(
    "ul",
    { className: Ca(IU.emojiList), ref: o },
    l.createElement(CU, null),
    n.map(function (f) {
      var p = Zh(f),
        m = u,
        h = r[p];
      return (
        h && (u += h + d),
        l.createElement(
          l.Suspense,
          { key: p },
          l.createElement(TU, {
            categoryEmojis: c(p),
            categoryConfig: f,
            topOffset: m,
            onHeightReady: function (x) {
              r[p] !== x &&
                i(function (y) {
                  var v;
                  return dr({}, y, ((v = {}), (v[p] = x), v));
                });
            },
            scrollTop: s,
          }),
        )
      );
    }),
  );
}
function TU(t) {
  var s = t.categoryEmojis,
    n = t.categoryConfig,
    a = t.topOffset,
    r = t.onHeightReady,
    i = t.scrollTop,
    o = Pv(),
    c = o[0],
    d = _U({
      categoryEmojis: s,
      topOffset: a,
      onHeightReady: r,
      scrollTop: i,
      isCategoryVisible: c.includes(n.category),
    }),
    u = d.virtualizedCounter,
    f = d.emojis,
    p = d.dimensions;
  return l.createElement(
    AU,
    {
      categoryConfig: n,
      height: p == null ? void 0 : p.categoryHeight,
      hidden: !f.length && u === 0,
    },
    f,
  );
}
var IU = jr.create({
    emojiList: {
      ".": $a.emojiList,
      listStyle: "none",
      margin: "0",
      padding: "0",
    },
  }),
  EU =
    "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI1MHB4IgoJIGhlaWdodD0iMTVweCIgdmlld0JveD0iMCAwIDUwIDE1IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MCAxNSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnIGlkPSJMYXllcl8xIj4KPC9nPgo8ZyBpZD0iTGF5ZXJfMiI+Cgk8cGF0aCBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiNFOEU3RTciIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTEuODYtMC40M2w5LjgzLDExLjUzYzAuNTksMC42OSwxLjU2LDAuNjksMi4xNCwwbDkuODMtMTEuNTMiLz4KCTxwYXRoIGZpbGw9IiMwMTAyMDIiIHN0cm9rZT0iIzE1MTYxNyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMjYuODYtMC40M2w5LjgzLDExLjUzYzAuNTksMC42OSwxLjU2LDAuNjksMi4xNCwwbDkuODMtMTEuNTMiLz4KPC9nPgo8L3N2Zz4=",
  mu;
(function (t) {
  ((t[(t.Up = 0)] = "Up"), (t[(t.Down = 1)] = "Down"));
})(mu || (mu = {}));
function LU() {
  var t = ng(),
    s = gB(),
    n = Hu(),
    a = n[0],
    r = yd(),
    i = $U(s),
    o = i.getTop,
    c = i.getMenuDirection,
    d = Z_(),
    u = DU(s),
    f = vd(),
    p = Zo(t.current),
    m = !!(a && p && Gu(a) && p.classList.contains($a.emojiHasVariations));
  l.useEffect(
    function () {
      m && rg(s.current);
    },
    [s, m, t],
  );
  var h, g;
  return (
    !m && t.current ? d(null) : ((h = o()), (g = u())),
    l.createElement(
      "div",
      {
        ref: s,
        className: Ca(
          cx.variationPicker,
          c() === mu.Down && cx.pointingUp,
          m && cx.visible,
        ),
        style: { top: h },
      },
      m && a
        ? [yl(a)]
            .concat(Xh(a))
            .slice(0, 6)
            .map(function (x) {
              return l.createElement(lg, {
                key: x,
                emoji: a,
                unified: x,
                emojiStyle: r,
                showVariations: !1,
                getEmojiUrl: f,
              });
            })
        : null,
      l.createElement("div", { className: Ca(cx.pointer), style: g }),
    )
  );
}
function DU(t) {
  var s = ng();
  return function () {
    var a = {};
    if (!t.current) return a;
    if (s.current) {
      var r = Zo(s.current),
        i = rU(r);
      if (!r) return a;
      a.left = i + (r == null ? void 0 : r.clientWidth) / 2;
    }
    return a;
  };
}
function $U(t) {
  var s = ng(),
    n = mo(),
    a = mu.Up;
  return { getMenuDirection: r, getTop: i };
  function r() {
    return a;
  }
  function i() {
    a = mu.Up;
    var o = 0;
    if (!t.current) return 0;
    var c = Hj(t.current);
    if (s.current) {
      var d,
        u = n.current,
        f = Zo(s.current),
        p = Hj(f);
      o = uA(f);
      var m = (d = u == null ? void 0 : u.scrollTop) != null ? d : 0;
      m > o - c && ((a = mu.Down), (o += p + c));
    }
    return o - c;
  }
}
var cx = jr.create(
  dr(
    {
      variationPicker: {
        ".": $a.variationPicker,
        position: "absolute",
        right: "15px",
        left: "15px",
        padding: "5px",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
        borderRadius: "3px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        opacity: "0",
        visibility: "hidden",
        pointerEvents: "none",
        top: "-100%",
        border: "1px solid var(--epr-picker-border-color)",
        height: "var(--epr-emoji-variation-picker-height)",
        zIndex: "var(--epr-skin-variation-picker-z-index)",
        background: "var(--epr-emoji-variation-picker-bg-color)",
        transform: "scale(0.9)",
        transition: "transform 0.1s ease-out, opacity 0.2s ease-out",
      },
      visible: {
        opacity: "1",
        visibility: "visible",
        pointerEvents: "all",
        transform: "scale(1)",
      },
      pointingUp: {
        ".": "pointing-up",
        transformOrigin: "center 0%",
        transform: "scale(0.9)",
      },
      ".pointing-up": {
        pointer: {
          top: "0",
          transform: "rotate(180deg) translateY(100%) translateX(18px)",
        },
      },
      pointer: {
        ".": "epr-emoji-pointer",
        content: "",
        position: "absolute",
        width: "25px",
        height: "15px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0 0",
        backgroundSize: "50px 15px",
        top: "100%",
        transform: "translateX(-18px)",
        backgroundImage: "url(" + EU + ")",
      },
    },
    Lc("pointer", { backgroundPosition: "-25px 0" }),
  ),
);
function FU() {
  var t = mo(),
    s = vU(t);
  return (
    NA(t, ap.PICKER),
    MB(),
    l.createElement(
      "div",
      { className: Ca(zU.body, hd.hiddenOnReactions), ref: t },
      l.createElement(LU, null),
      l.createElement(MU, { scrollTop: s }),
    )
  );
}
var zU = jr.create({
  body: {
    ".": $a.scrollBody,
    flex: "1",
    overflowY: "scroll",
    overflowX: "hidden",
    position: "relative",
  },
});
function RU(t, s) {
  if (!t || !s) return 0;
  var n = t.getBoundingClientRect(),
    a = s.getBoundingClientRect();
  return a.height - (n.y - a.y);
}
function PU(t, s) {
  var n = mo(),
    a = sA(),
    r = tA();
  l.useEffect(
    function () {
      if (!t) return;
      var i = n.current;
      (i == null || i.addEventListener("keydown", d, { passive: !0 }),
        i == null || i.addEventListener("mouseover", u, !0),
        i == null || i.addEventListener("focus", o, !0),
        i == null || i.addEventListener("mouseout", c, { passive: !0 }),
        i == null || i.addEventListener("blur", c, !0));
      function o(f) {
        var p = Zo(f.target);
        if (!p) return c();
        var m = hA(p),
          h = m.unified,
          g = m.originalUnified;
        if (!h || !g) return c();
        s({ unified: h, originalUnified: g });
      }
      function c(f) {
        if (f) {
          var p = f.relatedTarget;
          if (!Zo(p)) return s(null);
        }
        s(null);
      }
      function d(f) {
        f.key === "Escape" && s(null);
      }
      function u(f) {
        if (!a()) {
          var p = Zo(f.target);
          if (p) {
            var m = RU(p, i),
              h = p.getBoundingClientRect().height;
            if (m < h) return OU(p, s);
            fo(p);
          }
        }
      }
      return function () {
        (i == null || i.removeEventListener("mouseover", u),
          i == null || i.removeEventListener("mouseout", c),
          i == null || i.removeEventListener("focus", o, !0),
          i == null || i.removeEventListener("blur", c, !0),
          i == null || i.removeEventListener("keydown", d));
      };
    },
    [n, t, s, a, r],
  );
}
function OU(t, s) {
  var n,
    a = hA(t),
    r = a.unified,
    i = a.originalUnified;
  !r ||
    !i ||
    ((n = document.activeElement) == null || n.blur == null || n.blur(),
    s({ unified: r, originalUnified: i }));
}
var dx, op;
(function (t) {
  ((t.ROW = "FlexRow"), (t.COLUMN = "FlexColumn"));
})(op || (op = {}));
function kA(t) {
  var s = t.children,
    n = t.className,
    a = t.style,
    r = a === void 0 ? {} : a,
    i = t.direction,
    o = i === void 0 ? op.ROW : i;
  return l.createElement(
    "div",
    { style: dr({}, r), className: Ca(qj.flex, n, qj[o]) },
    s,
  );
}
var qj = jr.create(
  ((dx = { flex: { display: "flex" } }),
  (dx[op.ROW] = { flexDirection: "row" }),
  (dx[op.COLUMN] = { flexDirection: "column" }),
  dx),
);
function BU(t) {
  var s = t.className,
    n = t.style,
    a = n === void 0 ? {} : n;
  return l.createElement("div", {
    style: dr({ flex: 1 }, a),
    className: Ca(s),
  });
}
function UU(t) {
  var s = t.children,
    n = t.className,
    a = t.style;
  return l.createElement(
    "div",
    { style: dr({}, a, { position: "absolute" }), className: n },
    s,
  );
}
function cg(t) {
  var s = t.children,
    n = t.className,
    a = t.style;
  return l.createElement(
    "div",
    { style: dr({}, a, { position: "relative" }), className: n },
    s,
  );
}
function GU(t) {
  var s = t.isOpen,
    n = t.onClick,
    a = t.isActive,
    r = t.skinToneVariation,
    i = t.style;
  return l.createElement(Tp, {
    style: i,
    onClick: n,
    className: Ca(
      "epr-tone-" + r,
      rb.tone,
      !s && rb.closedTone,
      a && rb.active,
    ),
    "aria-pressed": a,
    "aria-label": "Skin tone " + y7[r],
  });
}
var rb = jr.create({
    closedTone: { opacity: "0", zIndex: "0" },
    active: { ".": "epr-active", zIndex: "1", opacity: "1" },
    tone: {
      ".": "epr-tone",
      width: "var(--epr-skin-tone-size)",
      display: "block",
      cursor: "pointer",
      borderRadius: "4px",
      height: "var(--epr-skin-tone-size)",
      position: "absolute",
      right: "0",
      transition: "transform 0.3s ease-in-out, opacity 0.35s ease-in-out",
      zIndex: "0",
      border: "1px solid var(--epr-skin-tone-outer-border-color)",
      boxShadow: "inset 0px 0px 0 1px var(--epr-skin-tone-inner-border-color)",
      ":hover": {
        boxShadow:
          "0 0 0 3px var(--epr-active-skin-hover-color), inset 0px 0px 0 1px var(--epr-skin-tone-inner-border-color)",
      },
      ":focus": { boxShadow: "0 0 0 3px var(--epr-focus-bg-color)" },
      "&.epr-tone-neutral": { backgroundColor: "#ffd225" },
      "&.epr-tone-1f3fb": { backgroundColor: "#ffdfbd" },
      "&.epr-tone-1f3fc": { backgroundColor: "#e9c197" },
      "&.epr-tone-1f3fd": { backgroundColor: "#c88e62" },
      "&.epr-tone-1f3fe": { backgroundColor: "#a86637" },
      "&.epr-tone-1f3ff": { backgroundColor: "#60463a" },
    },
  }),
  Qf = 28;
function HU() {
  return l.createElement(
    cg,
    { style: { height: Qf } },
    l.createElement(
      UU,
      { style: { bottom: 0, right: 0 } },
      l.createElement(SA, { direction: lp.VERTICAL }),
    ),
  );
}
function SA(t) {
  var s = t.direction,
    n = s === void 0 ? lp.HORIZONTAL : s,
    a = Uv(),
    r = B_(),
    i = Mp(),
    o = i[0],
    c = i[1],
    d = tg(),
    u = d[0],
    f = d[1],
    p = iB(),
    m = wd(),
    h = jd();
  if (r) return null;
  var g = Qf * xh.length + "px",
    x = o ? g : Qf + "px",
    y = n === lp.VERTICAL;
  return l.createElement(
    cg,
    {
      className: Ca(
        jf.skinTones,
        y && jf.vertical,
        o && jf.open,
        y && o && jf.verticalShadow,
      ),
      style: y ? { flexBasis: x, height: x } : { flexBasis: x },
    },
    l.createElement(
      "div",
      { className: Ca(jf.select), ref: a },
      xh.map(function (v, b) {
        var N = v === u;
        return l.createElement(GU, {
          key: v,
          skinToneVariation: v,
          isOpen: o,
          style: {
            transform: Ca(
              y
                ? "translateY(-" + b * (o ? Qf : 0) + "px)"
                : "translateX(-" + b * (o ? Qf : 0) + "px)",
              o && N && "scale(1.3)",
            ),
          },
          isActive: N,
          onClick: function () {
            (o ? (f(v), p(v), h()) : c(!0), m());
          },
        });
      }),
    ),
  );
}
var lp;
(function (t) {
  ((t.VERTICAL = "epr-vertical"), (t.HORIZONTAL = "epr-horizontal"));
})(lp || (lp = {}));
var jf = jr.create({
  skinTones: {
    ".": "epr-skin-tones",
    "--": { "--epr-skin-tone-size": "15px" },
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    transition: "all 0.3s ease-in-out",
    padding: "10px 0",
  },
  vertical: {
    padding: "9px",
    alignItems: "flex-end",
    flexDirection: "column",
    borderRadius: "6px",
    border: "1px solid var(--epr-bg-color)",
  },
  verticalShadow: { boxShadow: "0px 0 7px var(--epr-picker-border-color)" },
  open: {
    backdropFilter: "blur(5px)",
    background: "var(--epr-skin-tone-picker-menu-color)",
    ".epr-active": {
      border: "1px solid var(--epr-active-skin-tone-indicator-border-color)",
    },
  },
  select: {
    ".": "epr-skin-tone-select",
    position: "relative",
    width: "var(--epr-skin-tone-size)",
    height: "var(--epr-skin-tone-size)",
  },
});
function WU() {
  var t = U_(),
    s = iA(),
    n = bd(),
    a = n[0];
  return t.showPreview
    ? l.createElement(
        kA,
        {
          className: Ca(
            vm.preview,
            hd.hiddenOnReactions,
            a && vm.hideOnReactions,
          ),
        },
        l.createElement(YU, null),
        l.createElement(BU, null),
        s ? l.createElement(HU, null) : null,
      )
    : null;
}
function YU() {
  var t,
    s = U_(),
    n = l.useState(null),
    a = n[0],
    r = n[1],
    i = yd(),
    o = Hu(),
    c = o[0],
    d = vd(),
    u = Cp(),
    f = u.emojiByUnified;
  PU(s.showPreview, r);
  var p = f(
      (t = a == null ? void 0 : a.unified) != null
        ? t
        : a == null
          ? void 0
          : a.originalUnified,
    ),
    m = p != null && a != null;
  return l.createElement(h, null);
  function h() {
    var g = c ?? f(s.defaultEmoji);
    if (!g) return null;
    var x = c ? Rj(c) : s.defaultCaption;
    return l.createElement(
      l.Fragment,
      null,
      l.createElement(
        "div",
        null,
        m
          ? l.createElement(h1, {
              unified: a == null ? void 0 : a.unified,
              emoji: p,
              emojiStyle: i,
              size: 45,
              getEmojiUrl: d,
              className: Ca(vm.emoji),
            })
          : g
            ? l.createElement(h1, {
                unified: yl(g),
                emoji: g,
                emojiStyle: i,
                size: 45,
                getEmojiUrl: d,
                className: Ca(vm.emoji),
              })
            : null,
      ),
      l.createElement("div", { className: Ca(vm.label) }, m ? Rj(p) : x),
    );
  }
}
var vm = jr.create({
  preview: {
    alignItems: "center",
    borderTop: "1px solid var(--epr-preview-border-color)",
    height: "var(--epr-preview-height)",
    padding: "0 var(--epr-horizontal-padding)",
    position: "relative",
    zIndex: "var(--epr-preview-z-index)",
  },
  label: {
    color: "var(--epr-preview-text-color)",
    fontSize: "var(--epr-preview-text-size)",
    padding: "var(--epr-preview-text-padding)",
    textTransform: "capitalize",
  },
  emoji: { padding: "0" },
  hideOnReactions: { opacity: "0", transition: "opacity 0.5s ease-in-out" },
});
function VU(t) {
  var s;
  return (s = t == null ? void 0 : t.getAttribute("data-name")) != null
    ? s
    : null;
}
function JU(t) {
  var s = t.setActiveCategory,
    n = t.setVisibleCategories,
    a = mo();
  l.useEffect(
    function () {
      var r = new Map(),
        i = new Map(),
        o = a.current,
        c = new IntersectionObserver(
          function (d) {
            if (o) {
              for (var u = c7(d), f; !(f = u()).done; ) {
                var p = f.value,
                  m = VU(p.target);
                m &&
                  (r.set(m, p.intersectionRatio), i.set(m, p.isIntersecting));
              }
              var h = Array.from(r),
                g = h
                  .filter(function (_) {
                    var A = _[0],
                      k = _[1];
                    return k > 0 || i.get(A);
                  })
                  .map(function (_) {
                    var A = _[0];
                    return A;
                  });
              n(g);
              var x = h[h.length - 1];
              if ((x == null ? void 0 : x[1]) == 1) return s(x[0]);
              for (var y = 0, v = h; y < v.length; y++) {
                var b = v[y],
                  N = b[0],
                  w = b[1];
                if (w) {
                  s(N);
                  break;
                }
              }
            }
          },
          { root: o, threshold: [0, 1] },
        );
      return (
        o == null ||
          o.querySelectorAll(Mo($a.category)).forEach(function (d) {
            c.observe(d);
          }),
        function () {
          c.disconnect();
        }
      );
    },
    [a, s, n],
  );
}
function KU() {
  var t = mo(),
    s = Wu();
  return function (a) {
    var r;
    if (t.current) {
      var i =
        (r = t.current) == null
          ? void 0
          : r.querySelector('[data-name="' + a + '"]');
      if (i) {
        var o = i.offsetTop || 0;
        X_(s.current, o);
      }
    }
  };
}
function qU() {
  var t = nB();
  return t ? t.length === 0 : !1;
}
var QU =
  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyMDBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgMjAwIDgwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyMDAgODAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8ZyBpZD0iTGF5ZXJfMTEiPgoJPGc+CgkJPHBhdGggZmlsbD0iIzMzNzFCNyIgc3Ryb2tlPSIjMzM3MUI3IiBzdHJva2Utd2lkdGg9IjAuMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTIuOCwyOS41YzAuNiwwLDEuMS0wLjUsMS4xLTEuMQoJCQljMC0wLjYtMC41LTEuMi0xLjEtMS4yYy0wLjYsMC0xLjIsMC41LTEuMiwxLjJDMTEuNiwyOSwxMi4yLDI5LjUsMTIuOCwyOS41eiBNMTIuOCwyOGMwLjIsMCwwLjQsMC4yLDAuNCwwLjQKCQkJYzAsMC4yLTAuMiwwLjQtMC40LDAuNGMtMC4yLDAtMC40LTAuMi0wLjQtMC40QzEyLjQsMjguMSwxMi42LDI4LDEyLjgsMjh6Ii8+CgkJPHBhdGggZmlsbD0iIzMzNzFCNyIgc3Ryb2tlPSIjMzM3MUI3IiBzdHJva2Utd2lkdGg9IjAuMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTAsMjNjLTMuOCwwLTcsMy4xLTcsN2MwLDMuOCwzLjEsNyw3LDcKCQkJczctMy4xLDctN0MxNywyNi4yLDEzLjgsMjMsMTAsMjN6IE0xMCwzNi4yYy0zLjQsMC02LjItMi44LTYuMi02LjJjMC0zLjQsMi44LTYuMiw2LjItNi4yczYuMiwyLjgsNi4yLDYuMgoJCQlDMTYuMiwzMy40LDEzLjQsMzYuMiwxMCwzNi4yeiIvPgoJCTxwYXRoIGZpbGw9IiMzMzcxQjciIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTE0LjYsMzEuMmMtMC4xLTAuMS0wLjItMC4yLTAuMy0wLjJINS43CgkJCWMtMC4xLDAtMC4yLDAuMS0wLjMsMC4yYy0wLjEsMC4xLTAuMSwwLjIsMCwwLjRjMC43LDIsMi41LDMuMyw0LjYsMy4zczMuOS0xLjMsNC42LTMuM0MxNC43LDMxLjUsMTQuNywzMS4zLDE0LjYsMzEuMnogTTEwLDM0LjEKCQkJYy0xLjYsMC0zLTAuOS0zLjctMi4yaDcuM0MxMywzMy4yLDExLjYsMzQuMSwxMCwzNC4xeiIvPgoJCTxwYXRoIGZpbGw9IiMzMzcxQjciIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTcuMiwyOS41YzAuNiwwLDEuMi0wLjUsMS4yLTEuMQoJCQljMC0wLjYtMC41LTEuMi0xLjItMS4yYy0wLjYsMC0xLjEsMC41LTEuMSwxLjJDNi4xLDI5LDYuNiwyOS41LDcuMiwyOS41eiBNNy4yLDI4YzAuMiwwLDAuNCwwLjIsMC40LDAuNGMwLDAuMi0wLjIsMC40LTAuNCwwLjQKCQkJYy0wLjIsMC0wLjQtMC4yLTAuNC0wLjRDNi44LDI4LjEsNywyOCw3LjIsMjh6Ii8+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBkPSJNNjQuMSwzMy40bDIuMywwYzAuMiwwLDAuNCwwLjIsMC40LDAuNHYyLjFjMCwwLjItMC4yLDAuNC0wLjQsMC40aC0yLjMKCQkJCWMtMC4yLDAtMC40LTAuMi0wLjQtMC40di0yLjFDNjMuNywzMy42LDYzLjgsMzMuNCw2NC4xLDMzLjR6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgZD0iTTczLjUsMzMuNWgyLjRjMC4yLDAsMC40LDAuMiwwLjQsMC40djJjMCwwLjItMC4yLDAuNC0wLjQsMC40aC0yLjQKCQkJCWMtMC4yLDAtMC40LTAuMi0wLjQtMC40bDAtMkM3My4xLDMzLjYsNzMuMywzMy41LDczLjUsMzMuNXoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBkPSJNNjMuNywyOC40aDEyLjZ2NUg2My43VjI4LjR6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgZD0iTTY1LjUsMjMuNmg4LjljMSwwLDEuOSwwLjgsMS45LDEuOXYzLjFINjMuN3YtMy4xQzYzLjcsMjQuNSw2NC41LDIzLjYsNjUuNSwyMy42eiIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjMzM3MUI3IiBjeD0iNjYuMiIgY3k9IjMwLjkiIHJ4PSIwLjkiIHJ5PSIxIi8+CgkJCTxlbGxpcHNlIGZpbGw9IiMzMzcxQjciIGN4PSI3My44IiBjeT0iMzAuOSIgcng9IjAuOSIgcnk9IjEiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBkPSJNOTYuNCwzMGMwLDMuNi0yLjksNi41LTYuNCw2LjVzLTYuNC0yLjktNi40LTYuNXMyLjktNi41LDYuNC02LjVTOTYuNCwyNi40LDk2LjQsMzB6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgZD0iTTk2LjMsMjguNmMwLDAsMCwwLjEsMCwwLjFjLTAuOSwwLjEtMi45LDAuMS00LjYtMS4xYy0xLjEtMC44LTItMS43LTIuNi0yLjUKCQkJCWMtMC4zLTAuNC0wLjYtMC44LTAuNy0xYy0wLjEtMC4xLTAuMS0wLjEtMC4xLTAuMmMwLjUtMC4xLDEuMi0wLjIsMi0wLjFjMS4yLDAsMi41LDAuMywzLjUsMS4xYzEsMC44LDEuNywxLjgsMi4xLDIuOAoJCQkJQzk2LjEsMjcuOSw5Ni4yLDI4LjMsOTYuMywyOC42eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik04NCwzMi4yYzAsMCwwLTAuMSwwLTAuMWMwLjktMC4yLDIuOS0wLjQsNC43LDAuNmMxLjEsMC43LDEuOSwxLjUsMi40LDIuMwoJCQkJYzAuNCwwLjUsMC42LDEsMC43LDEuM2MtMC40LDAuMS0xLDAuMi0xLjcsMC4zYy0xLDAtMi4xLTAuMS0zLjItMC44cy0xLjktMS42LTIuNC0yLjVDODQuMiwzMi44LDg0LjEsMzIuNSw4NCwzMi4yeiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTExNi4zLDI2LjhsLTEuNCwybC0wLjgtMC44bC0wLjYtMC42bDAsMC45bC0wLjEsOC4yaC02LjgKCQkJCWwtMC4xLTguMmwwLTAuOWwtMC42LDAuNmwtMC44LDAuOGwtMS40LTJsMi42LTIuOWMwLjEtMC4xLDAuMi0wLjEsMC4zLTAuMWgxLjNsMC40LDAuN2MwLjcsMS4zLDIuNiwxLjMsMy4zLTAuMWwwLjMtMC42aDEuMgoJCQkJYzAuMSwwLDAuMiwwLDAuMywwLjFsMC4zLTAuM2wtMC4zLDAuM0wxMTYuMywyNi44eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik0xMTAuMSwyNy43aDJ2MC45YzAsMC40LTAuNCwwLjctMSwwLjdjLTAuNiwwLTEtMC4zLTEtMC43TDExMC4xLDI3LjdMMTEwLjEsMjcuN3oiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBkPSJNMTI2LjgsMzQuM2MwLDEuMi0xLDIuMi0yLjIsMi4ycy0yLjItMS0yLjItMi4yczEtMi4yLDIuMi0yLjJTMTI2LjgsMzMuMSwxMjYuOCwzNC4zeiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik0xMzcuNiwzNC4zYzAsMS4yLTEsMi4yLTIuMiwyLjJjLTEuMiwwLTIuMi0xLTIuMi0yLjJzMS0yLjIsMi4yLTIuMgoJCQkJQzEzNi42LDMyLjEsMTM3LjYsMzMuMSwxMzcuNiwzNC4zeiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik0xMjYuOCwyNC40djkuOSIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik0xMzcuNywyNC40djkuOSIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik0xMjYuOCwyMy41aDEwLjh2Mi43aC0xMC44QzEyNi44LDI2LjIsMTI2LjgsMjMuNSwxMjYuOCwyMy41eiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSIjMzM3MUI3IiBkPSJNMTcwLjgsMjMuMUwxNzAuOCwyMy4xYy0wLjMsMC0wLjUsMC0wLjgsMGMtMi4xLDAtNCwxLTUuMywyLjVsLTAuMSwwbC0wLjEtMC4xbC0xLTEuMmwtMC4zLDMuNGwzLjQsMC4zCgkJCQlsLTEuMS0xLjNsLTAuMS0wLjFsMC4xLTAuMWMxLjEtMS41LDMtMi4zLDUtMi4xbDAsMGMzLjIsMC4zLDUuNSwzLjEsNS4yLDYuM2MtMC4zLDMtMy4xLDUuMy02LjEsNS4xYy0zLjEtMC4yLTUuNC0yLjktNS4zLTYKCQkJCWwtMS4zLTAuMWMtMC4yLDMuOCwyLjYsNy4xLDYuMyw3LjRjMy45LDAuMyw3LjMtMi42LDcuNi02LjVDMTc3LjIsMjYuOCwxNzQuNCwyMy41LDE3MC44LDIzLjF6Ii8+CgkJCTxwYXRoIGZpbGw9IiMzMzcxQjciIGQ9Ik0xNzAuMywyNy40YzAtMC4zLTAuMy0wLjYtMC42LTAuNnMtMC42LDAuMy0wLjYsMC42djMuMmMwLDAuMiwwLjEsMC4zLDAuMiwwLjRjMC4xLDAuMSwwLjMsMC4yLDAuNCwwLjIKCQkJCWgyLjRjMC40LDAsMC42LTAuMywwLjYtMC42YzAtMC40LTAuMy0wLjYtMC42LTAuNmgtMS42aC0wLjJ2LTAuMkwxNzAuMywyNy40TDE3MC4zLDI3LjR6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgZD0iTTE4Ni4yLDIzLjRoNy43YzEuNSwwLDIuNywxLjIsMi43LDIuN3Y3LjdjMCwxLjUtMS4yLDIuNy0yLjcsMi43aC03LjcKCQkJCWMtMS41LDAtMi43LTEuMi0yLjctMi43di03LjdDMTgzLjQsMjQuNiwxODQuNywyMy40LDE4Ni4yLDIzLjR6Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiMzMzcxQjciIGN4PSIxODYiIGN5PSIyOC45IiByeD0iMC43IiByeT0iMC43Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiMzMzcxQjciIGN4PSIxOTQiIGN5PSIyNi43IiByeD0iMC43IiByeT0iMC43Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTg2LDMzLjNsMC40LTAuM2MwLjQtMC4zLDEtMC4zLDEuNS0wLjFsMSwwLjQKCQkJCWMwLjUsMC4yLDEsMC4yLDEuNS0wLjFsMC44LTAuNWMwLjQtMC4zLDEtMC4zLDEuNS0wLjFsMS44LDAuOCIvPgoJCTwvZz4KCTwvZz4KCTxwYXRoIGZpbGw9IiMzMzcxQjciIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLXdpZHRoPSIwLjI1IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0xNTYsMjQuM2MtMC4yLTAuMS0wLjQtMC4xLTAuNSwwCgkJYzAsMC0wLjIsMC4xLTAuOSwwLjJjLTAuNywwLTIuNC0wLjEtMy44LTAuNmMtMC44LTAuMy0xLjctMC41LTIuNS0wLjVjLTAuMiwwLTAuNCwwLTAuNSwwYy0xLjMsMC0yLjUsMC4zLTMuNiwxCgkJYy0wLjIsMC4xLTAuMiwwLjItMC4yLDAuNHYxMS42YzAsMC4zLDAuMSwwLjUsMC4zLDAuNWMwLjYsMCwwLjUtMC40LDAuNS0wLjZ2LTUuN2MwLjctMC4zLDMuMi0xLjEsNS44LTAuMQoJCWMxLjYsMC42LDMuNSwwLjcsNC4zLDAuN2MwLjgsMCwxLjMtMC4zLDEuMy0wLjNjMC4yLTAuMSwwLjMtMC4yLDAuMy0wLjR2LTUuN0MxNTYuMiwyNC42LDE1Ni4xLDI0LjQsMTU2LDI0LjN6IE0xNTUuNiwzMC4yCgkJYy0wLjEsMC0wLjcsMC4xLTEsMC4xYy0wLjcsMC0yLjQtMC4xLTMuOC0wLjZjLTIuNS0xLTUtMC41LTYuMi0wLjF2LTQuOWMwLjktMC41LDIuMi0wLjcsMy4yLTAuN2MwLjEsMCwwLjMsMCwwLjQsMAoJCWMwLjcsMCwxLjUsMC4yLDIuMiwwLjRjMS42LDAuNiwzLjUsMC43LDQuMywwLjdjMC4yLDAsMC44LDAsMS0wLjFWMzAuMnoiLz4KCTxnPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgZD0iTTQ4LjEsMjMuNWgzLjdjMi41LDAsNC41LDIsNC41LDQuNWMwLDAuNS0wLjQsMC45LTAuOSwwLjlINDQuNWMtMC41LDAtMC45LTAuNC0wLjktMC45CgkJCUM0My42LDI1LjUsNDUuNiwyMy41LDQ4LjEsMjMuNXoiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTQzLjUsMjguOGMtMC4yLDAuMS0wLjUsMS4yLDAsMS41YzEuNCwxLDguNSwwLjgsMTEuMywwLjYKCQkJYzAuOC0wLjEsMS42LTAuNCwxLjctMS4yYzAtMC4zLTAuMS0wLjYtMC42LTAuOSIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSwzMC42TDQzLjMsMzFjLTAuMiwwLjUsMC4yLDEsMC43LDAuOWMwLjMtMC4xLDAuNSwwLDAuNywwLjMKCQkJbDAuMSwwLjJjMC4zLDAuNSwxLDAuNiwxLjUsMC4ybDAsMGMwLjMtMC4yLDAuNy0wLjMsMS0wLjJsMC44LDAuM2MwLjQsMC4yLDAuOCwwLjEsMS4yLDBsMC41LTAuMmMwLjQtMC4yLDAuOS0wLjIsMS4zLDBsMC41LDAuMgoJCQljMC40LDAuMiwwLjgsMC4yLDEuMiwwbDAuMi0wLjFjMC4zLTAuMiwwLjgtMC4yLDEuMSwwLjFsMC4yLDAuMmMwLjMsMC4zLDAuOCwwLjIsMS0wLjJsMC4xLTAuMmMwLjEtMC4yLDAtMC4zLDAuMi0wLjMKCQkJYzAuNSwwLDEuMi0wLjMsMS4xLTAuN2wtMC40LTEuMSIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSwzMi4yYy0wLjEsMC4yLTAuMywwLjgsMCwxLjFjMC4zLDAuNCwzLDEuMSw2LjQsMS4xCgkJCWMyLjIsMCw0LjYtMC4zLDYtMC42YzAuNS0wLjEsMC45LTAuNSwwLjgtMC45YzAtMC4yLTAuMi0wLjUtMC40LTAuNyIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSwzMy4zYzAsMC41LDAuNiwyLjMsMS4zLDIuN2MxLjgsMC44LDUuNywwLjcsOC4xLDAuNQoJCQljMS4zLTAuMSwyLjUtMC43LDMuMi0xLjhjMC4zLTAuNSwwLjUtMSwwLjUtMS40Ii8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjUxLjYiIGN5PSIyNi41IiByeD0iMC4zIiByeT0iMC40Ii8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjUzIiBjeT0iMjUiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjMzM3MUI3IiBjeD0iNTMiIGN5PSIyNy4yIiByeD0iMC4zIiByeT0iMC40Ii8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjU0LjMiIGN5PSIyNi41IiByeD0iMC4zIiByeT0iMC40Ii8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjUwLjkiIGN5PSIyNSIgcng9IjAuMyIgcnk9IjAuNCIvPgoJPC9nPgoJPGc+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBkPSJNMjQuMiwzMXYtNy42YzAuMSwwLjEsMC44LDAuOSwyLjgsMy4xYzIuNS0xLjYsNS42LTAuNyw2LjksMGwyLjQtMy4xdjcuMQoJCQljMCwxLjItMC4xLDIuNS0wLjksMy40Yy0xLDEuMi0yLjcsMi41LTUuMywyLjVjLTIuOSwwLTQuNS0xLjUtNS4zLTIuOUMyNC4yLDMyLjksMjQuMiwzMiwyNC4yLDMxeiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMjEuMiwzMGw1LjQsMS4yIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0yMS4yLDM0LjFsNS40LTEuMiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzguOCwzMGwtNS40LDEuMiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzguOCwzNC4xbC01LjQtMS4yIi8+CgkJPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiMzMzcxQjciIGQ9Ik0yOS41LDMyLjRMMjksMzEuN2MtMC4yLTAuMywwLTAuNiwwLjMtMC42aDEuNAoJCQljMC4zLDAsMC41LDAuNCwwLjMsMC42bC0wLjcsMWwwLDBjLTAuNywxLjItMi42LDEuMS0zLjEtMC4zbC0wLjEtMC4yYy0wLjEtMC4yLDAtMC40LDAuMi0wLjVzMC40LDAsMC41LDAuMmwwLjEsMC4yCgkJCUMyOC4zLDMyLjgsMjkuMSwzMi45LDI5LjUsMzIuNHoiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTMyLjQsMzIuMWwtMC4xLDAuMmMtMC40LDEtMS44LDEuMS0yLjMsMC4yIi8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjI3LjYiIGN5PSIyOS43IiByeD0iMC43IiByeT0iMC43Ii8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjMyLjQiIGN5PSIyOS43IiByeD0iMC43IiByeT0iMC43Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBmaWxsPSIjQzBDMEJGIiBzdHJva2U9IiNDMEMwQkYiIHN0cm9rZS13aWR0aD0iMC4xIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0xMi44LDQ5LjVjMC42LDAsMS4xLTAuNSwxLjEtMS4xCgkJCWMwLTAuNi0wLjUtMS4yLTEuMS0xLjJjLTAuNiwwLTEuMiwwLjUtMS4yLDEuMkMxMS42LDQ5LDEyLjIsNDkuNSwxMi44LDQ5LjV6IE0xMi44LDQ4YzAuMiwwLDAuNCwwLjIsMC40LDAuNAoJCQljMCwwLjItMC4yLDAuNC0wLjQsMC40Yy0wLjIsMC0wLjQtMC4yLTAuNC0wLjRDMTIuNCw0OC4xLDEyLjYsNDgsMTIuOCw0OHoiLz4KCQk8cGF0aCBmaWxsPSIjQzBDMEJGIiBzdHJva2U9IiNDMEMwQkYiIHN0cm9rZS13aWR0aD0iMC4xIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0xNC42LDUxLjJjLTAuMS0wLjEtMC4yLTAuMi0wLjMtMC4ySDUuNwoJCQljLTAuMSwwLTAuMiwwLjEtMC4zLDAuMmMtMC4xLDAuMS0wLjEsMC4yLDAsMC40YzAuNywyLDIuNSwzLjMsNC42LDMuM3MzLjktMS4zLDQuNi0zLjNDMTQuNyw1MS41LDE0LjcsNTEuMywxNC42LDUxLjJ6IE0xMCw1NC4xCgkJCWMtMS42LDAtMy0wLjktMy43LTIuMmg3LjNDMTMsNTMuMiwxMS42LDU0LjEsMTAsNTQuMXoiLz4KCQk8cGF0aCBmaWxsPSIjQzBDMEJGIiBzdHJva2U9IiNDMEMwQkYiIHN0cm9rZS13aWR0aD0iMC4xIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik03LjIsNDkuNWMwLjYsMCwxLjItMC41LDEuMi0xLjEKCQkJYzAtMC42LTAuNS0xLjItMS4yLTEuMmMtMC42LDAtMS4xLDAuNS0xLjEsMS4yQzYuMSw0OSw2LjYsNDkuNSw3LjIsNDkuNXogTTcuMiw0OGMwLjIsMCwwLjQsMC4yLDAuNCwwLjRjMCwwLjItMC4yLDAuNC0wLjQsMC40CgkJCWMtMC4yLDAtMC40LTAuMi0wLjQtMC40QzYuOCw0OC4xLDcsNDgsNy4yLDQ4eiIvPgoJCTxwYXRoIGZpbGw9IiNDMEMwQkYiIHN0cm9rZT0iI0MwQzBCRiIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTEwLDQzYy0zLjgsMC03LDMuMS03LDdjMCwzLjgsMy4xLDcsNyw3CgkJCXM3LTMuMSw3LTdDMTcsNDYuMiwxMy44LDQzLDEwLDQzeiBNMTAsNTYuMmMtMy40LDAtNi4yLTIuOC02LjItNi4yYzAtMy40LDIuOC02LjIsNi4yLTYuMnM2LjIsMi44LDYuMiw2LjIKCQkJQzE2LjIsNTMuNCwxMy40LDU2LjIsMTAsNTYuMnoiLz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIGQ9Ik02NC4xLDUzLjRsMi4zLDBjMC4yLDAsMC40LDAuMiwwLjQsMC40djIuMWMwLDAuMi0wLjIsMC40LTAuNCwwLjRoLTIuMwoJCQkJYy0wLjIsMC0wLjQtMC4yLTAuNC0wLjR2LTIuMUM2My43LDUzLjYsNjMuOCw1My40LDY0LjEsNTMuNHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBkPSJNNzMuNSw1My41aDIuNGMwLjIsMCwwLjQsMC4yLDAuNCwwLjR2MmMwLDAuMi0wLjIsMC40LTAuNCwwLjRoLTIuNAoJCQkJYy0wLjIsMC0wLjQtMC4yLTAuNC0wLjRsMC0yQzczLjEsNTMuNiw3My4zLDUzLjUsNzMuNSw1My41eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIGQ9Ik02My43LDQ4LjRoMTIuNnY1SDYzLjdWNDguNHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBkPSJNNjUuNSw0My42aDguOWMxLDAsMS45LDAuOCwxLjksMS45djMuMUg2My43di0zLjFDNjMuNyw0NC41LDY0LjUsNDMuNiw2NS41LDQzLjZ6Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiNDMEMwQkYiIGN4PSI2Ni4yIiBjeT0iNTAuOSIgcng9IjAuOSIgcnk9IjEiLz4KCQkJPGVsbGlwc2UgZmlsbD0iI0MwQzBCRiIgY3g9IjczLjgiIGN5PSI1MC45IiByeD0iMC45IiByeT0iMSIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIGQ9Ik05Ni40LDUwYzAsMy42LTIuOSw2LjUtNi40LDYuNXMtNi40LTIuOS02LjQtNi41czIuOS02LjUsNi40LTYuNVM5Ni40LDQ2LjQsOTYuNCw1MHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBkPSJNOTYuMyw0OC42YzAsMCwwLDAuMSwwLDAuMWMtMC45LDAuMS0yLjksMC4xLTQuNi0xLjJjLTEuMS0wLjgtMi0xLjctMi42LTIuNQoJCQkJYy0wLjMtMC40LTAuNi0wLjgtMC43LTFjLTAuMS0wLjEtMC4xLTAuMi0wLjEtMC4yYzAuNS0wLjEsMS4yLTAuMiwyLTAuMmMxLjIsMCwyLjUsMC4zLDMuNSwxLjFjMSwwLjgsMS43LDEuOCwyLjEsMi44CgkJCQlDOTYuMSw0Ny45LDk2LjIsNDguMyw5Ni4zLDQ4LjZ6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTg0LDUyLjJjMCwwLDAtMC4xLDAtMC4xYzAuOS0wLjIsMi45LTAuNCw0LjcsMC42YzEuMSwwLjcsMS45LDEuNSwyLjQsMi4zCgkJCQljMC40LDAuNSwwLjYsMSwwLjcsMS4zYy0wLjQsMC4xLTEsMC4yLTEuNywwLjNjLTEsMC0yLjEtMC4xLTMuMi0wLjhzLTEuOS0xLjYtMi40LTIuNUM4NC4yLDUyLjgsODQuMSw1Mi41LDg0LDUyLjJ6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTE2LjMsNDYuOGwtMS40LDJsLTAuOC0wLjhsLTAuNi0wLjdsMCwwLjlsLTAuMSw4LjJoLTYuOAoJCQkJbC0wLjEtOC4ybDAtMC45bC0wLjYsMC43bC0wLjgsMC44bC0xLjQtMmwyLjYtMi45YzAuMS0wLjEsMC4yLTAuMSwwLjMtMC4xaDEuM2wwLjQsMC43YzAuNywxLjMsMi42LDEuMywzLjMtMC4xbDAuMy0wLjZoMS4yCgkJCQljMC4xLDAsMC4yLDAsMC4zLDAuMWwwLjMtMC4zbC0wLjMsMC4zTDExNi4zLDQ2Ljh6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTExMC4xLDQ3LjdoMnYwLjljMCwwLjQtMC40LDAuNy0xLDAuN2MtMC42LDAtMS0wLjMtMS0wLjdMMTEwLjEsNDcuN0wxMTAuMSw0Ny43eiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIGQ9Ik0xMjYuOCw1NC4zYzAsMS4yLTEsMi4yLTIuMiwyLjJzLTIuMi0xLTIuMi0yLjJzMS0yLjIsMi4yLTIuMlMxMjYuOCw1My4xLDEyNi44LDU0LjN6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTEzNy42LDU0LjNjMCwxLjItMSwyLjItMi4yLDIuMmMtMS4yLDAtMi4yLTEtMi4yLTIuMnMxLTIuMiwyLjItMi4yCgkJCQlDMTM2LjYsNTIuMSwxMzcuNiw1My4xLDEzNy42LDU0LjN6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTEyNi44LDQ0LjR2OS45Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTEzNy43LDQ0LjR2OS45Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTEyNi44LDQzLjVoMTAuOHYyLjdoLTEwLjhDMTI2LjgsNDYuMiwxMjYuOCw0My41LDEyNi44LDQzLjV6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9IiNDMEMwQkYiIGQ9Ik0xNzAuOCw0My4xTDE3MC44LDQzLjFjLTAuMywwLTAuNSwwLTAuOCwwYy0yLjEsMC00LDEtNS4zLDIuNWwtMC4xLDBsLTAuMS0wLjFsLTEtMS4ybC0wLjMsMy40bDMuNCwwLjMKCQkJCWwtMS4xLTEuM2wtMC4xLTAuMWwwLjEtMC4xYzEuMS0xLjUsMy0yLjMsNS0yLjFsMCwwYzMuMiwwLjMsNS41LDMuMSw1LjIsNi4zYy0wLjMsMy0zLjEsNS4zLTYuMSw1LjFjLTMuMS0wLjItNS40LTIuOS01LjMtNgoJCQkJbC0xLjMtMC4xYy0wLjIsMy44LDIuNiw3LjEsNi4zLDcuNGMzLjksMC4zLDcuMy0yLjYsNy42LTYuNUMxNzcuMiw0Ni44LDE3NC40LDQzLjUsMTcwLjgsNDMuMXoiLz4KCQkJPHBhdGggZmlsbD0iI0MwQzBCRiIgZD0iTTE3MC4zLDQ3LjRjMC0wLjMtMC4zLTAuNi0wLjYtMC42cy0wLjYsMC4zLTAuNiwwLjZ2My4yYzAsMC4yLDAuMSwwLjMsMC4yLDAuNGMwLjEsMC4xLDAuMywwLjIsMC40LDAuMgoJCQkJaDIuNGMwLjQsMCwwLjYtMC4zLDAuNi0wLjZjMC0wLjMtMC4zLTAuNi0wLjYtMC42aC0xLjZoLTAuMnYtMC4yTDE3MC4zLDQ3LjRMMTcwLjMsNDcuNHoiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBkPSJNMTg2LjIsNDMuNGg3LjdjMS41LDAsMi43LDEuMiwyLjcsMi43djcuN2MwLDEuNS0xLjIsMi43LTIuNywyLjdoLTcuNwoJCQkJYy0xLjUsMC0yLjctMS4yLTIuNy0yLjd2LTcuN0MxODMuNCw0NC43LDE4NC43LDQzLjQsMTg2LjIsNDMuNHoiLz4KCQkJPGVsbGlwc2UgZmlsbD0iI0MwQzBCRiIgY3g9IjE4NiIgY3k9IjQ4LjkiIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQkJPGVsbGlwc2UgZmlsbD0iI0MwQzBCRiIgY3g9IjE5NCIgY3k9IjQ2LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0xODYsNTMuM2wwLjQtMC4zYzAuNC0wLjMsMS0wLjMsMS41LTAuMWwxLDAuNAoJCQkJYzAuNSwwLjIsMSwwLjIsMS41LTAuMWwwLjgtMC41YzAuNC0wLjMsMS0wLjMsMS41LTAuMWwxLjgsMC44Ii8+CgkJPC9nPgoJPC9nPgoJPHBhdGggZmlsbD0iI0MwQzBCRiIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2Utd2lkdGg9IjAuMjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTE1Niw0NC4zYy0wLjItMC4xLTAuNC0wLjEtMC41LDAKCQljMCwwLTAuMiwwLjEtMC45LDAuMmMtMC43LDAtMi40LTAuMS0zLjgtMC42Yy0wLjgtMC4zLTEuNy0wLjUtMi41LTAuNWMtMC4yLDAtMC40LDAtMC41LDBjLTEuMywwLTIuNSwwLjMtMy42LDEKCQljLTAuMiwwLjEtMC4yLDAuMi0wLjIsMC40djExLjZjMCwwLjMsMC4xLDAuNSwwLjMsMC41YzAuNiwwLDAuNS0wLjQsMC41LTAuNnYtNS43YzAuNy0wLjMsMy4yLTEuMSw1LjgtMC4xCgkJYzEuNiwwLjYsMy41LDAuNyw0LjMsMC43YzAuOCwwLDEuMy0wLjMsMS4zLTAuM2MwLjItMC4xLDAuMy0wLjIsMC4zLTAuNHYtNS43QzE1Ni4yLDQ0LjYsMTU2LjEsNDQuNCwxNTYsNDQuM3ogTTE1NS42LDUwLjIKCQljLTAuMSwwLTAuNywwLjEtMSwwLjFjLTAuNywwLTIuNC0wLjEtMy44LTAuNmMtMi41LTEtNS0wLjUtNi4yLTAuMXYtNC45YzAuOS0wLjUsMi4yLTAuNywzLjItMC43YzAuMSwwLDAuMywwLDAuNCwwCgkJYzAuNywwLDEuNSwwLjIsMi4yLDAuNGMxLjYsMC42LDMuNSwwLjcsNC4zLDAuN2MwLjIsMCwwLjgsMCwxLTAuMVY1MC4yeiIvPgoJPGc+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBkPSJNNDguMSw0My41aDMuN2MyLjUsMCw0LjUsMiw0LjUsNC41YzAsMC41LTAuNCwwLjktMC45LDAuOUg0NC41Yy0wLjUsMC0wLjktMC40LTAuOS0wLjkKCQkJQzQzLjYsNDUuNSw0NS42LDQzLjUsNDguMSw0My41eiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSw0OC44Yy0wLjIsMC4xLTAuNSwxLjIsMCwxLjVjMS40LDEsOC41LDAuOCwxMS4zLDAuNgoJCQljMC44LTAuMSwxLjYtMC40LDEuNy0xLjJjMC0wLjMtMC4xLTAuNi0wLjYtMC45Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDUwLjZMNDMuMyw1MWMtMC4yLDAuNSwwLjIsMSwwLjcsMC45YzAuMy0wLjEsMC41LDAsMC43LDAuMwoJCQlsMC4xLDAuMmMwLjMsMC41LDEsMC42LDEuNSwwLjJsMCwwYzAuMy0wLjIsMC43LTAuMywxLTAuMmwwLjgsMC4zYzAuNCwwLjIsMC44LDAuMSwxLjIsMGwwLjUtMC4yYzAuNC0wLjIsMC45LTAuMiwxLjMsMGwwLjUsMC4yCgkJCWMwLjQsMC4yLDAuOCwwLjIsMS4yLDBsMC4yLTAuMWMwLjMtMC4yLDAuOC0wLjIsMS4xLDAuMWwwLjIsMC4yYzAuMywwLjMsMC44LDAuMiwxLTAuMmwwLjEtMC4yYzAuMS0wLjIsMC0wLjMsMC4yLTAuMwoJCQljMC41LDAsMS4yLTAuMywxLjEtMC43bC0wLjQtMS4xIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDUyLjJjLTAuMSwwLjItMC4zLDAuOCwwLDEuMWMwLjMsMC40LDMsMS4xLDYuNCwxLjEKCQkJYzIuMiwwLDQuNi0wLjMsNi0wLjZjMC41LTAuMSwwLjktMC41LDAuOC0wLjljMC0wLjItMC4yLTAuNS0wLjQtMC43Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDUzLjNjMCwwLjUsMC42LDIuMywxLjMsMi43YzEuOCwwLjgsNS43LDAuNyw4LjEsMC41CgkJCWMxLjMtMC4xLDIuNS0wLjcsMy4yLTEuOGMwLjMtMC41LDAuNS0xLDAuNS0xLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iNTEuNiIgY3k9IjQ2LjUiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iNTMiIGN5PSI0NSIgcng9IjAuMyIgcnk9IjAuNCIvPgoJCTxlbGxpcHNlIGZpbGw9IiNDMEMwQkYiIGN4PSI1MyIgY3k9IjQ3LjIiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iNTQuMyIgY3k9IjQ2LjUiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iNTAuOSIgY3k9IjQ1IiByeD0iMC4zIiByeT0iMC40Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIGQ9Ik0yNC4yLDUxdi03LjZjMC4xLDAuMSwwLjgsMC45LDIuOCwzLjFjMi41LTEuNyw1LjYtMC43LDYuOSwwbDIuNC0zLjF2Ny4xCgkJCWMwLDEuMi0wLjEsMi41LTAuOSwzLjRjLTEsMS4yLTIuNywyLjUtNS4zLDIuNWMtMi45LDAtNC41LTEuNS01LjMtMi45QzI0LjIsNTIuOSwyNC4yLDUyLDI0LjIsNTF6Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0yMS4yLDUwbDUuNCwxLjIiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTIxLjIsNTQuMWw1LjQtMS4yIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0zOC44LDUwbC01LjQsMS4yIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0zOC44LDU0LjFsLTUuNC0xLjIiLz4KCQk8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0MwQzBCRiIgZD0iTTI5LjUsNTIuNEwyOSw1MS43Yy0wLjItMC4zLDAtMC42LDAuMy0wLjZoMS40CgkJCWMwLjMsMCwwLjUsMC40LDAuMywwLjZsLTAuNywxbDAsMGMtMC43LDEuMi0yLjYsMS4xLTMuMS0wLjNsLTAuMS0wLjJjLTAuMS0wLjIsMC0wLjQsMC4yLTAuNXMwLjQsMCwwLjUsMC4ybDAuMSwwLjIKCQkJQzI4LjMsNTIuOCwyOS4xLDUyLjksMjkuNSw1Mi40eiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzIuNCw1Mi4xbC0wLjEsMC4yYy0wLjQsMS0xLjgsMS4xLTIuMywwLjIiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iMjcuNiIgY3k9IjQ5LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iMzIuNCIgY3k9IjQ5LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCTwvZz4KCTxnPgoJCTxwYXRoIGZpbGw9IiM2QUE5REQiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTE0LjYsNzEuMmMtMC4xLTAuMS0wLjItMC4yLTAuMy0wLjJINS43CgkJCWMtMC4xLDAtMC4yLDAuMS0wLjMsMC4yYy0wLjEsMC4xLTAuMSwwLjIsMCwwLjRjMC43LDIsMi41LDMuMyw0LjYsMy4zczMuOS0xLjMsNC42LTMuM0MxNC43LDcxLjUsMTQuNyw3MS4zLDE0LjYsNzEuMnogTTEwLDc0LjEKCQkJYy0xLjYsMC0zLTAuOS0zLjctMi4yaDcuM0MxMyw3My4yLDExLjYsNzQuMSwxMCw3NC4xeiIvPgoJCTxwYXRoIGZpbGw9IiM2QUE5REQiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTEyLjgsNjkuNWMwLjYsMCwxLjEtMC41LDEuMS0xLjEKCQkJYzAtMC42LTAuNS0xLjItMS4xLTEuMmMtMC42LDAtMS4yLDAuNS0xLjIsMS4yQzExLjYsNjksMTIuMiw2OS41LDEyLjgsNjkuNXogTTEyLjgsNjhjMC4yLDAsMC40LDAuMiwwLjQsMC40CgkJCWMwLDAuMi0wLjIsMC40LTAuNCwwLjRjLTAuMiwwLTAuNC0wLjItMC40LTAuNEMxMi40LDY4LjEsMTIuNiw2OCwxMi44LDY4eiIvPgoJCTxwYXRoIGZpbGw9IiM2QUE5REQiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTcuMiw2OS41YzAuNiwwLDEuMi0wLjUsMS4yLTEuMQoJCQljMC0wLjYtMC41LTEuMi0xLjItMS4yYy0wLjYsMC0xLjEsMC41LTEuMSwxLjJDNi4xLDY5LDYuNiw2OS41LDcuMiw2OS41eiBNNy4yLDY4YzAuMiwwLDAuNCwwLjIsMC40LDAuNGMwLDAuMi0wLjIsMC40LTAuNCwwLjQKCQkJYy0wLjIsMC0wLjQtMC4yLTAuNC0wLjRDNi44LDY4LjEsNyw2OCw3LjIsNjh6Ii8+CgkJPHBhdGggZmlsbD0iIzZBQTlERCIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2Utd2lkdGg9IjAuMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTAsNjNjLTMuOCwwLTcsMy4xLTcsN2MwLDMuOCwzLjEsNyw3LDcKCQkJczctMy4xLDctN0MxNyw2Ni4yLDEzLjgsNjMsMTAsNjN6IE0xMCw3Ni4yYy0zLjQsMC02LjItMi44LTYuMi02LjJjMC0zLjQsMi44LTYuMiw2LjItNi4yczYuMiwyLjgsNi4yLDYuMgoJCQlDMTYuMiw3My40LDEzLjQsNzYuMiwxMCw3Ni4yeiIvPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTY0LjEsNzMuNGwyLjMsMGMwLjIsMCwwLjQsMC4yLDAuNCwwLjR2Mi4xYzAsMC4yLTAuMiwwLjQtMC40LDAuNGgtMi4zCgkJCQljLTAuMiwwLTAuNC0wLjItMC40LTAuNHYtMi4xQzYzLjcsNzMuNiw2My44LDczLjQsNjQuMSw3My40eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIGQ9Ik03My41LDczLjVoMi40YzAuMiwwLDAuNCwwLjIsMC40LDAuNHYyLjFjMCwwLjItMC4yLDAuNC0wLjQsMC40aC0yLjQKCQkJCWMtMC4yLDAtMC40LTAuMi0wLjQtMC40bDAtMi4xQzczLjEsNzMuNiw3My4zLDczLjUsNzMuNSw3My41eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIGQ9Ik02My43LDY4LjRoMTIuNnY1SDYzLjdWNjguNHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBkPSJNNjUuNSw2My42aDguOWMxLDAsMS45LDAuOCwxLjksMS45djMuMUg2My43di0zLjFDNjMuNyw2NC41LDY0LjUsNjMuNiw2NS41LDYzLjZ6Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiM2QUE5REQiIGN4PSI2Ni4yIiBjeT0iNzAuOSIgcng9IjAuOSIgcnk9IjAuOSIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iNzMuOCIgY3k9IjcwLjkiIHJ4PSIwLjkiIHJ5PSIwLjkiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBkPSJNOTYuNCw3MGMwLDMuNi0yLjksNi41LTYuNCw2LjVzLTYuNC0yLjktNi40LTYuNXMyLjktNi41LDYuNC02LjVTOTYuNCw2Ni40LDk2LjQsNzB6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTk2LjMsNjguNmMwLDAsMCwwLjEsMCwwLjFjLTAuOSwwLjEtMi45LDAuMS00LjYtMS4yYy0xLjEtMC44LTItMS43LTIuNi0yLjUKCQkJCWMtMC4zLTAuNC0wLjYtMC44LTAuNy0xLjFjLTAuMS0wLjEtMC4xLTAuMi0wLjEtMC4yYzAuNS0wLjEsMS4yLTAuMiwyLTAuMmMxLjIsMCwyLjUsMC4zLDMuNSwxLjFjMSwwLjgsMS43LDEuOCwyLjEsMi44CgkJCQlDOTYuMSw2Ny45LDk2LjIsNjguMyw5Ni4zLDY4LjZ6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTg0LDcyLjJjMCwwLDAtMC4xLDAtMC4xYzAuOS0wLjIsMi45LTAuNCw0LjcsMC42YzEuMSwwLjcsMS45LDEuNSwyLjQsMi4zCgkJCQljMC40LDAuNSwwLjYsMSwwLjcsMS4zYy0wLjQsMC4xLTEsMC4yLTEuNywwLjNjLTEsMC0yLjEtMC4xLTMuMi0wLjhzLTEuOS0xLjYtMi40LTIuNUM4NC4yLDcyLjgsODQuMSw3Mi40LDg0LDcyLjJ6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTE2LjMsNjYuOGwtMS40LDJsLTAuOC0wLjhsLTAuNi0wLjdsMCwwLjlsLTAuMSw4LjJoLTYuOAoJCQkJbC0wLjEtOC4ybDAtMC45bC0wLjYsMC43bC0wLjgsMC44bC0xLjQtMmwyLjYtMi45YzAuMS0wLjEsMC4yLTAuMSwwLjMtMC4xaDEuM2wwLjQsMC43YzAuNywxLjMsMi42LDEuMywzLjMtMC4xbDAuMy0wLjZoMS4yCgkJCQljMC4xLDAsMC4yLDAsMC4zLDAuMWwwLjMtMC4zbC0wLjMsMC4zTDExNi4zLDY2Ljh6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTExMC4xLDY3LjdoMnYwLjljMCwwLjQtMC40LDAuNy0xLDAuN2MtMC42LDAtMS0wLjMtMS0wLjdMMTEwLjEsNjcuN0wxMTAuMSw2Ny43eiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIGQ9Ik0xMjYuOCw3NC4zYzAsMS4yLTEsMi4yLTIuMiwyLjJzLTIuMi0xLTIuMi0yLjJzMS0yLjIsMi4yLTIuMlMxMjYuOCw3My4xLDEyNi44LDc0LjN6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTEzNy42LDc0LjNjMCwxLjItMSwyLjItMi4yLDIuMmMtMS4yLDAtMi4yLTEtMi4yLTIuMnMxLTIuMiwyLjItMi4yCgkJCQlDMTM2LjYsNzIuMSwxMzcuNiw3My4xLDEzNy42LDc0LjN6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTEyNi44LDY0LjR2OS45Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTEzNy43LDY0LjR2OS45Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTEyNi44LDYzLjVoMTAuOHYyLjdoLTEwLjhDMTI2LjgsNjYuMiwxMjYuOCw2My41LDEyNi44LDYzLjV6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9IiM2QUE5REQiIGQ9Ik0xNzAuOCw2My4xTDE3MC44LDYzLjFjLTAuMywwLTAuNSwwLTAuOCwwYy0yLjEsMC00LDEtNS4zLDIuNWwtMC4xLDBsLTAuMS0wLjFsLTEtMS4ybC0wLjMsMy40bDMuNCwwLjMKCQkJCWwtMS4xLTEuM2wtMC4xLTAuMWwwLjEtMC4xYzEuMS0xLjQsMy0yLjMsNS0yLjFsMCwwYzMuMiwwLjMsNS41LDMuMSw1LjIsNi4zYy0wLjMsMy0zLjEsNS4zLTYuMSw1LjFjLTMuMS0wLjItNS40LTIuOS01LjMtNgoJCQkJbC0xLjMtMC4xYy0wLjIsMy44LDIuNiw3LjEsNi4zLDcuNGMzLjksMC4zLDcuMy0yLjYsNy42LTYuNUMxNzcuMiw2Ni44LDE3NC40LDYzLjUsMTcwLjgsNjMuMXoiLz4KCQkJPHBhdGggZmlsbD0iIzZBQTlERCIgZD0iTTE3MC4zLDY3LjRjMC0wLjMtMC4zLTAuNi0wLjYtMC42cy0wLjYsMC4zLTAuNiwwLjZ2My4yYzAsMC4yLDAuMSwwLjMsMC4yLDAuNGMwLjEsMC4xLDAuMywwLjIsMC40LDAuMgoJCQkJaDIuNGMwLjQsMCwwLjYtMC4zLDAuNi0wLjZTMTcyLjQsNzAsMTcyLDcwaC0xLjZoLTAuMnYtMC4yTDE3MC4zLDY3LjRMMTcwLjMsNjcuNHoiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBkPSJNMTg2LjIsNjMuNGg3LjdjMS41LDAsMi43LDEuMiwyLjcsMi43djcuN2MwLDEuNS0xLjIsMi43LTIuNywyLjdoLTcuNwoJCQkJYy0xLjUsMC0yLjctMS4yLTIuNy0yLjd2LTcuN0MxODMuNCw2NC43LDE4NC43LDYzLjQsMTg2LjIsNjMuNHoiLz4KCQkJPGVsbGlwc2UgZmlsbD0iIzZBQTlERCIgY3g9IjE4NiIgY3k9IjY4LjkiIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQkJPGVsbGlwc2UgZmlsbD0iIzZBQTlERCIgY3g9IjE5NCIgY3k9IjY2LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0xODYsNzMuM2wwLjQtMC4zYzAuNC0wLjMsMS0wLjMsMS41LTAuMWwxLDAuNAoJCQkJYzAuNSwwLjIsMSwwLjIsMS41LTAuMWwwLjgtMC41YzAuNC0wLjMsMS0wLjMsMS41LTAuMWwxLjgsMC44Ii8+CgkJPC9nPgoJPC9nPgoJPHBhdGggZmlsbD0iIzZBQTlERCIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2Utd2lkdGg9IjAuMjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTE1Niw2NC4zYy0wLjItMC4xLTAuNC0wLjEtMC41LDAKCQljMCwwLTAuMiwwLjEtMC45LDAuMmMtMC43LDAtMi40LTAuMS0zLjgtMC42Yy0wLjgtMC4zLTEuNy0wLjUtMi41LTAuNWMtMC4yLDAtMC40LDAtMC41LDBjLTEuMywwLTIuNSwwLjMtMy42LDEKCQljLTAuMiwwLjEtMC4yLDAuMi0wLjIsMC40djExLjZjMCwwLjMsMC4xLDAuNSwwLjMsMC41YzAuNiwwLDAuNS0wLjQsMC41LTAuNnYtNS43YzAuNy0wLjMsMy4yLTEuMSw1LjgtMC4xCgkJYzEuNiwwLjYsMy41LDAuNyw0LjMsMC43YzAuOCwwLDEuMy0wLjMsMS4zLTAuM2MwLjItMC4xLDAuMy0wLjIsMC4zLTAuNHYtNS43QzE1Ni4yLDY0LjYsMTU2LjEsNjQuNCwxNTYsNjQuM3ogTTE1NS42LDcwLjIKCQljLTAuMSwwLTAuNywwLjEtMSwwLjFjLTAuNywwLTIuNC0wLjEtMy44LTAuNmMtMi41LTEtNS0wLjUtNi4yLTAuMXYtNC45YzAuOS0wLjUsMi4yLTAuNywzLjItMC43YzAuMSwwLDAuMywwLDAuNCwwCgkJYzAuNywwLDEuNSwwLjIsMi4yLDAuNGMxLjYsMC42LDMuNSwwLjcsNC4zLDAuN2MwLjIsMCwwLjgsMCwxLTAuMVY3MC4yeiIvPgoJPGc+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBkPSJNNDguMSw2My41aDMuN2MyLjUsMCw0LjUsMiw0LjUsNC41YzAsMC41LTAuNCwwLjktMC45LDAuOUg0NC41Yy0wLjUsMC0wLjktMC40LTAuOS0wLjkKCQkJQzQzLjYsNjUuNSw0NS42LDYzLjUsNDguMSw2My41eiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSw2OC44Yy0wLjIsMC4xLTAuNSwxLjIsMCwxLjVjMS40LDAuOSw4LjUsMC44LDExLjMsMC42CgkJCWMwLjgtMC4xLDEuNi0wLjQsMS43LTEuMmMwLTAuMy0wLjEtMC42LTAuNi0wLjkiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTQzLjUsNzAuNkw0My4zLDcxYy0wLjIsMC41LDAuMiwxLDAuNywwLjljMC4zLTAuMSwwLjUsMC4xLDAuNywwLjMKCQkJbDAuMSwwLjJjMC4zLDAuNSwxLDAuNiwxLjUsMC4ybDAsMGMwLjMtMC4yLDAuNy0wLjMsMS0wLjJsMC44LDAuM2MwLjQsMC4yLDAuOCwwLjEsMS4yLDBsMC41LTAuMmMwLjQtMC4yLDAuOS0wLjIsMS4zLDBsMC41LDAuMgoJCQljMC40LDAuMiwwLjgsMC4yLDEuMi0wLjFsMC4yLTAuMWMwLjMtMC4yLDAuOC0wLjIsMS4xLDAuMWwwLjIsMC4yYzAuMywwLjMsMC44LDAuMiwxLTAuMmwwLjEtMC4yYzAuMS0wLjIsMC0wLjMsMC4yLTAuMwoJCQljMC41LDAsMS4yLTAuMywxLjEtMC43bC0wLjQtMS4xIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDcyLjJjLTAuMSwwLjItMC4zLDAuOCwwLDEuMWMwLjMsMC40LDMsMS4xLDYuNCwxLjEKCQkJYzIuMiwwLDQuNi0wLjMsNi0wLjZjMC41LTAuMSwwLjktMC40LDAuOC0wLjljMC0wLjItMC4yLTAuNS0wLjQtMC43Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDczLjNjMCwwLjUsMC42LDIuMywxLjMsMi43YzEuOCwwLjgsNS43LDAuNyw4LjEsMC41CgkJCWMxLjMtMC4xLDIuNS0wLjcsMy4yLTEuOGMwLjMtMC41LDAuNS0xLDAuNS0xLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iNTEuNiIgY3k9IjY2LjUiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iNTMiIGN5PSI2NSIgcng9IjAuMyIgcnk9IjAuNCIvPgoJCTxlbGxpcHNlIGZpbGw9IiM2QUE5REQiIGN4PSI1MyIgY3k9IjY3LjIiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iNTQuMyIgY3k9IjY2LjUiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iNTAuOSIgY3k9IjY1IiByeD0iMC4zIiByeT0iMC40Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIGQ9Ik0yNC4yLDcxdi03LjZjMC4xLDAuMSwwLjgsMC45LDIuOCwzLjFjMi41LTEuNyw1LjYtMC43LDYuOSwwbDIuNC0zLjF2Ny4xCgkJCWMwLDEuMi0wLjEsMi41LTAuOSwzLjRjLTEsMS4yLTIuNywyLjUtNS4zLDIuNWMtMi45LDAtNC41LTEuNS01LjMtMi45QzI0LjIsNzIuOSwyNC4yLDcyLDI0LjIsNzF6Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0yMS4yLDcwLjFsNS40LDEuMiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMjEuMiw3NC4xbDUuNC0xLjIiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTM4LjgsNzAuMWwtNS40LDEuMiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzguOCw3NC4xbC01LjQtMS4yIi8+CgkJPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiM2QUE5REQiIGQ9Ik0yOS41LDcyLjRMMjksNzEuN2MtMC4yLTAuMywwLTAuNiwwLjMtMC42aDEuNAoJCQljMC4zLDAsMC41LDAuNCwwLjMsMC42bC0wLjcsMWwwLDBjLTAuNywxLjItMi42LDEuMS0zLjEtMC4zbC0wLjEtMC4yYy0wLjEtMC4yLDAtMC40LDAuMi0wLjVjMC4yLTAuMSwwLjQsMCwwLjUsMC4ybDAuMSwwLjIKCQkJQzI4LjMsNzIuOCwyOS4xLDcyLjksMjkuNSw3Mi40eiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzIuNCw3Mi4xbC0wLjEsMC4yYy0wLjQsMS0xLjgsMS4xLTIuMywwLjIiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iMjcuNiIgY3k9IjY5LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iMzIuNCIgY3k9IjY5LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCTwvZz4KPC9nPgo8Zz4KCTxwYXRoIGZpbGw9IiM4Njg2ODYiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTEyLjgsOS41YzAuNiwwLDEuMS0wLjUsMS4xLTEuMgoJCWMwLTAuNi0wLjUtMS4xLTEuMS0xLjFjLTAuNiwwLTEuMiwwLjUtMS4yLDEuMVMxMi4yLDkuNSwxMi44LDkuNXogTTEyLjgsNy45YzAuMiwwLDAuNCwwLjIsMC40LDAuNGMwLDAuMi0wLjIsMC40LTAuNCwwLjQKCQljLTAuMiwwLTAuNC0wLjItMC40LTAuNEMxMi40LDguMSwxMi42LDcuOSwxMi44LDcuOXoiLz4KCTxwYXRoIGZpbGw9IiM4Njg2ODYiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTcuMiw5LjVjMC42LDAsMS4yLTAuNSwxLjItMS4yCgkJYzAtMC42LTAuNS0xLjEtMS4yLTEuMWMtMC42LDAtMS4xLDAuNS0xLjEsMS4xUzYuNiw5LjUsNy4yLDkuNXogTTcuMiw3LjljMC4yLDAsMC40LDAuMiwwLjQsMC40YzAsMC4yLTAuMiwwLjQtMC40LDAuNAoJCUM3LDguNyw2LjgsOC41LDYuOCw4LjNDNi44LDguMSw3LDcuOSw3LjIsNy45eiIvPgoJPHBhdGggZmlsbD0iIzg2ODY4NiIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2Utd2lkdGg9IjAuMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTQuNiwxMS4yYy0wLjEtMC4xLTAuMi0wLjItMC4zLTAuMkg1LjcKCQljLTAuMSwwLTAuMiwwLjEtMC4zLDAuMmMtMC4xLDAuMS0wLjEsMC4yLDAsMC40YzAuNywyLDIuNSwzLjMsNC42LDMuM3MzLjktMS4zLDQuNi0zLjNDMTQuNywxMS40LDE0LjcsMTEuMywxNC42LDExLjJ6IE0xMCwxNC4xCgkJYy0xLjYsMC0zLTAuOS0zLjctMi4yaDcuM0MxMywxMy4yLDExLjYsMTQuMSwxMCwxNC4xeiIvPgoJPHBhdGggZmlsbD0iIzg2ODY4NiIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2Utd2lkdGg9IjAuMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTAsM2MtMy44LDAtNywzLjEtNyw3czMuMSw3LDcsN3M3LTMuMSw3LTcKCQlTMTMuOCwzLDEwLDN6IE0xMCwxNi4yYy0zLjQsMC02LjItMi44LTYuMi02LjJTNi42LDMuOCwxMCwzLjhzNi4yLDIuOCw2LjIsNi4yUzEzLjQsMTYuMiwxMCwxNi4yeiIvPgo8L2c+CjxnIGlkPSJDYXJfMDAwMDAwMTg5MzUzOTUwODU0MTM0MTM3NTAwMDAwMDA4MjUyNzM4Nzc4NDI3NzU3MTVfIj4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik02NC4xLDEzLjRsMi4zLDBjMC4yLDAsMC40LDAuMiwwLjQsMC40djIuMWMwLDAuMi0wLjIsMC40LTAuNCwwLjRoLTIuMwoJCQkJYy0wLjIsMC0wLjQtMC4yLTAuNC0wLjR2LTIuMUM2My43LDEzLjYsNjMuOCwxMy40LDY0LjEsMTMuNHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNNzMuNSwxMy40aDIuNGMwLjIsMCwwLjQsMC4yLDAuNCwwLjR2Mi4xYzAsMC4yLTAuMiwwLjQtMC40LDAuNGgtMi40CgkJCQljLTAuMiwwLTAuNC0wLjItMC40LTAuNGwwLTIuMUM3My4xLDEzLjYsNzMuMywxMy40LDczLjUsMTMuNHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNNjMuNyw4LjRoMTIuNnY1SDYzLjdWOC40eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik02NS41LDMuNmg4LjljMSwwLDEuOSwwLjgsMS45LDEuOXYzLjFINjMuN1Y1LjVDNjMuNyw0LjQsNjQuNSwzLjYsNjUuNSwzLjZ6Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiM4Njg2ODYiIGN4PSI2Ni4yIiBjeT0iMTAuOSIgcng9IjAuOSIgcnk9IjAuOSIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjODY4Njg2IiBjeD0iNzMuOCIgY3k9IjEwLjkiIHJ4PSIwLjkiIHJ5PSIwLjkiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPGcgaWQ9IkFjdGl2aXRpZXMiPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgZD0iTTk2LjQsMTBjMCwzLjYtMi45LDYuNS02LjQsNi41cy02LjQtMi45LTYuNC02LjVzMi45LTYuNSw2LjQtNi41Uzk2LjQsNi40LDk2LjQsMTB6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgZD0iTTk2LjMsOC42YzAsMCwwLDAuMSwwLDAuMWMtMC45LDAuMS0yLjksMC4xLTQuNi0xLjJjLTEuMS0wLjgtMi0xLjctMi42LTIuNQoJCQkJYy0wLjMtMC40LTAuNi0wLjgtMC43LTEuMWMtMC4xLTAuMS0wLjEtMC4yLTAuMS0wLjJjMC41LTAuMSwxLjItMC4yLDItMC4yYzEuMiwwLDIuNSwwLjMsMy41LDEuMWMxLDAuOCwxLjcsMS44LDIuMSwyLjgKCQkJCUM5Ni4xLDcuOSw5Ni4yLDguMyw5Ni4zLDguNnoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNODQsMTIuMWMwLDAsMC0wLjEsMC0wLjFjMC45LTAuMiwyLjktMC40LDQuNywwLjZjMS4xLDAuNiwxLjksMS41LDIuNCwyLjMKCQkJCWMwLjQsMC41LDAuNiwxLDAuNywxLjNjLTAuNCwwLjEtMSwwLjItMS43LDAuM2MtMSwwLTIuMS0wLjEtMy4yLTAuOGMtMS4xLTAuNi0xLjktMS42LTIuNC0yLjVDODQuMiwxMi44LDg0LjEsMTIuNCw4NCwxMi4xeiIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8ZyBpZD0iT2JqZWN0c18wMDAwMDA2NDMxMjM3MTczOTEzMDMxNTI1MDAwMDAxMDIyNTg4OTAzMjIyODYzMjk3NV8iPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTE2LjMsNi44bC0xLjQsMkwxMTQuMSw4bC0wLjYtMC43bDAsMC45bC0wLjEsOC4yaC02LjhsLTAuMS04LjIKCQkJCWwwLTAuOUwxMDUuOSw4bC0wLjgsMC44bC0xLjQtMmwyLjYtMi45YzAuMS0wLjEsMC4yLTAuMSwwLjMtMC4xaDEuM2wwLjQsMC43YzAuNywxLjMsMi42LDEuMywzLjMtMC4xbDAuMy0wLjZoMS4yCgkJCQljMC4xLDAsMC4yLDAsMC4zLDAuMWwwLjMtMC4zbC0wLjMsMC4zTDExNi4zLDYuOHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNMTEwLjEsNy43aDJ2MC45YzAsMC40LTAuNCwwLjctMSwwLjdjLTAuNiwwLTEtMC4zLTEtMC43TDExMC4xLDcuN0wxMTAuMSw3Ljd6Ii8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnIGlkPSJTeW1ib2xzXzAwMDAwMDk2NzQ2OTA3ODY5OTI5OTIxMTgwMDAwMDA2NDg0ODEyODMwMjgyNTgyNDE2XyI+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNMTI2LjgsMTQuM2MwLDEuMi0xLDIuMi0yLjIsMi4ycy0yLjItMS0yLjItMi4yczEtMi4yLDIuMi0yLjJTMTI2LjgsMTMuMSwxMjYuOCwxNC4zeiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik0xMzcuNiwxNC4zYzAsMS4yLTEsMi4yLTIuMiwyLjJjLTEuMiwwLTIuMi0xLTIuMi0yLjJzMS0yLjIsMi4yLTIuMgoJCQkJQzEzNi42LDEyLjEsMTM3LjYsMTMuMSwxMzcuNiwxNC4zeiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik0xMjYuOCw0LjR2OS45Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgZD0iTTEzNy43LDQuNHY5LjkiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNMTI2LjgsMy41aDEwLjh2Mi43aC0xMC44QzEyNi44LDYuMiwxMjYuOCwzLjUsMTI2LjgsMy41eiIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8ZyBpZD0iUmVjZW50cyI+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0iIzg2ODY4NiIgZD0iTTE3MC44LDMuMUwxNzAuOCwzLjFjLTAuMywwLTAuNSwwLTAuOCwwYy0yLjEsMC00LDEtNS4zLDIuNWwtMC4xLDBsLTAuMS0wLjFsLTEtMS4ybC0wLjMsMy40bDMuNCwwLjMKCQkJCWwtMS4xLTEuM2wtMC4xLTAuMWwwLjEtMC4xYzEuMS0xLjQsMy0yLjMsNS0yLjFsMCwwYzMuMiwwLjMsNS41LDMuMSw1LjIsNi4zYy0wLjMsMy0zLjEsNS4zLTYuMSw1LjFjLTMuMS0wLjItNS40LTIuOS01LjMtNgoJCQkJTDE2Myw5LjVjLTAuMiwzLjgsMi42LDcuMSw2LjMsNy40YzMuOSwwLjQsNy4zLTIuNiw3LjYtNi41QzE3Ny4yLDYuOCwxNzQuNCwzLjUsMTcwLjgsMy4xeiIvPgoJCQk8cGF0aCBmaWxsPSIjODY4Njg2IiBkPSJNMTcwLjMsNy40YzAtMC4zLTAuMy0wLjYtMC42LTAuNlMxNjksNy4xLDE2OSw3LjR2My4yYzAsMC4yLDAuMSwwLjMsMC4yLDAuNGMwLjEsMC4xLDAuMywwLjIsMC40LDAuMgoJCQkJaDIuNGMwLjQsMCwwLjYtMC4zLDAuNi0wLjZzLTAuMy0wLjYtMC42LTAuNmgtMS42aC0wLjJWOS44TDE3MC4zLDcuNEwxNzAuMyw3LjR6Ii8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnIGlkPSJDdXN0b21fMDAwMDAxODEwODcyMjk0MzQzMDIzMzY3ODAwMDAwMDUxNTIyNzc5NDU5NDA2NzQ0ODhfIj4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik0xODYuMiwzLjRoNy43YzEuNSwwLDIuNywxLjIsMi43LDIuN3Y3LjdjMCwxLjUtMS4yLDIuNy0yLjcsMi43aC03LjcKCQkJCWMtMS41LDAtMi43LTEuMi0yLjctMi43VjYuMUMxODMuNCw0LjYsMTg0LjcsMy40LDE4Ni4yLDMuNHoiLz4KCQkJPGVsbGlwc2UgZmlsbD0iIzg2ODY4NiIgY3g9IjE4NiIgY3k9IjguOSIgcng9IjAuNyIgcnk9IjAuNyIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjODY4Njg2IiBjeD0iMTk0IiBjeT0iNi43IiByeD0iMC43IiByeT0iMC43Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTg2LDEzLjNsMC40LTAuM2MwLjQtMC4zLDEtMC4zLDEuNS0wLjFsMSwwLjQKCQkJCWMwLjUsMC4yLDEsMC4yLDEuNS0wLjFsMC44LTAuNWMwLjQtMC4zLDEtMC4zLDEuNS0wLjFsMS44LDAuOCIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8cGF0aCBmaWxsPSIjODY4Njg2IiBzdHJva2U9IiM4Njg2ODYiIHN0cm9rZS13aWR0aD0iMC4yNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTU2LDQuM2MtMC4yLTAuMS0wLjQtMC4xLTAuNSwwCgljMCwwLTAuMiwwLjEtMC45LDAuMWMtMC43LDAtMi40LTAuMS0zLjgtMC42Yy0wLjgtMC4zLTEuNy0wLjUtMi41LTAuNWMtMC4yLDAtMC40LDAtMC41LDBjLTEuMywwLTIuNSwwLjMtMy42LDEKCWMtMC4yLDAuMS0wLjIsMC4yLTAuMiwwLjR2MTEuNmMwLDAuMywwLjEsMC41LDAuMywwLjVjMC42LDAsMC41LTAuNCwwLjUtMC42di01LjdjMC43LTAuMywzLjItMS4xLDUuOC0wLjFjMS42LDAuNiwzLjUsMC43LDQuMywwLjcKCWMwLjgsMCwxLjMtMC4zLDEuMy0wLjNjMC4yLTAuMSwwLjMtMC4yLDAuMy0wLjRWNC43QzE1Ni4yLDQuNSwxNTYuMSw0LjQsMTU2LDQuM3ogTTE1NS42LDEwLjJjLTAuMSwwLTAuNywwLjEtMSwwLjEKCWMtMC43LDAtMi40LTAuMS0zLjgtMC42Yy0yLjUtMS01LTAuNS02LjItMC4xVjQuN2MwLjktMC41LDIuMi0wLjcsMy4yLTAuN2MwLjEsMCwwLjMsMCwwLjQsMGMwLjcsMCwxLjUsMC4yLDIuMiwwLjQKCWMxLjYsMC42LDMuNSwwLjcsNC4zLDAuN2MwLjIsMCwwLjgsMCwxLTAuMVYxMC4yeiIvPgo8ZyBpZD0iRm9vZCI+Cgk8ZyBpZD0iTGF5ZXJfMTIiPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik00OC4xLDMuNWgzLjdjMi41LDAsNC41LDIsNC41LDQuNWMwLDAuNS0wLjQsMC45LTAuOSwwLjlINDQuNWMtMC41LDAtMC45LTAuNC0wLjktMC45CgkJCQlDNDMuNiw1LjUsNDUuNiwzLjUsNDguMSwzLjV6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSw4LjdjLTAuMiwwLjEtMC41LDEuMiwwLDEuNWMxLjQsMC45LDguNSwwLjgsMTEuMywwLjYKCQkJCWMwLjgtMC4xLDEuNi0wLjQsMS43LTEuMmMwLTAuMy0wLjEtMC42LTAuNi0wLjkiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDEwLjZMNDMuMywxMWMtMC4yLDAuNSwwLjIsMSwwLjcsMC45CgkJCQljMC4zLTAuMSwwLjUsMC4xLDAuNywwLjNsMC4xLDAuMmMwLjMsMC41LDEsMC42LDEuNSwwLjJsMCwwYzAuMy0wLjIsMC43LTAuMywxLTAuMmwwLjgsMC4zYzAuNCwwLjEsMC44LDAuMSwxLjIsMGwwLjUtMC4yCgkJCQljMC40LTAuMiwwLjktMC4yLDEuMywwbDAuNSwwLjJjMC40LDAuMiwwLjgsMC4xLDEuMi0wLjFsMC4yLTAuMWMwLjMtMC4yLDAuOC0wLjEsMS4xLDAuMWwwLjIsMC4yYzAuMywwLjMsMC44LDAuMiwxLTAuMmwwLjEtMC4yCgkJCQljMC4xLTAuMiwwLTAuMywwLjItMC40YzAuNSwwLDEuMi0wLjMsMS4xLTAuN2wtMC40LTEuMSIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTQzLjUsMTIuMWMtMC4xLDAuMi0wLjMsMC44LDAsMS4xYzAuMywwLjQsMywxLjEsNi40LDEuMQoJCQkJYzIuMiwwLDQuNi0wLjMsNi0wLjZjMC41LTAuMSwwLjktMC40LDAuOC0wLjljMC0wLjItMC4yLTAuNS0wLjQtMC43Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSwxMy4zYzAsMC41LDAuNiwyLjQsMS4zLDIuNmMxLjgsMC44LDUuNywwLjcsOC4xLDAuNQoJCQkJYzEuMy0wLjEsMi41LTAuNywzLjItMS44YzAuMy0wLjUsMC41LTEsMC41LTEuNCIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjODY4Njg2IiBjeD0iNTEuNiIgY3k9IjYuNSIgcng9IjAuMyIgcnk9IjAuNCIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjODY4Njg2IiBjeD0iNTMiIGN5PSI0LjkiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQkJPGVsbGlwc2UgZmlsbD0iIzg2ODY4NiIgY3g9IjUzIiBjeT0iNy4yIiByeD0iMC4zIiByeT0iMC40Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiM4Njg2ODYiIGN4PSI1NC4zIiBjeT0iNi41IiByeD0iMC4zIiByeT0iMC40Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiM4Njg2ODYiIGN4PSI1MC45IiBjeT0iNC45IiByeD0iMC4zIiByeT0iMC40Ii8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnIGlkPSJBbmltYWxzIj4KCTxnPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgZD0iTTI0LjIsMTFWMy41YzAuMSwwLjEsMC44LDAuOSwyLjgsMy4xYzIuNS0xLjcsNS42LTAuNyw2LjksMGwyLjQtMy4xdjcuMQoJCQljMCwxLjItMC4xLDIuNS0wLjksMy40Yy0xLDEuMi0yLjcsMi41LTUuMywyLjVjLTIuOSwwLTQuNS0xLjUtNS4zLTIuOUMyNC4yLDEyLjksMjQuMiwxMS45LDI0LjIsMTF6Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0yMS4yLDEwbDUuNCwxLjIiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTIxLjIsMTQuMWw1LjQtMS4yIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0zOC44LDEwbC01LjQsMS4yIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0zOC44LDE0LjFsLTUuNC0xLjIiLz4KCQk8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzg2ODY4NiIgZD0iTTI5LjUsMTIuNEwyOSwxMS43Yy0wLjItMC4zLDAtMC42LDAuMy0wLjZoMS40CgkJCWMwLjMsMCwwLjUsMC40LDAuMywwLjZsLTAuNywxbDAsMGMtMC43LDEuMi0yLjYsMS4xLTMuMS0wLjNsLTAuMS0wLjJjLTAuMS0wLjIsMC0wLjQsMC4yLTAuNXMwLjQsMCwwLjUsMC4ybDAuMSwwLjIKCQkJQzI4LjMsMTIuNywyOS4xLDEyLjksMjkuNSwxMi40eiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzIuNCwxMi4xbC0wLjEsMC4yYy0wLjQsMS0xLjgsMS4xLTIuMywwLjIiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjODY4Njg2IiBjeD0iMjcuNiIgY3k9IjkuNyIgcng9IjAuNyIgcnk9IjAuNyIvPgoJCTxlbGxpcHNlIGZpbGw9IiM4Njg2ODYiIGN4PSIzMi40IiBjeT0iOS43IiByeD0iMC43IiByeT0iMC43Ii8+Cgk8L2c+CjwvZz4KPC9zdmc+";
function ZU(t) {
  var s,
    n = t.isActiveCategory,
    a = t.category,
    r = t.allowNavigation,
    i = t.categoryConfig,
    o = t.onClick;
  return l.createElement(Tp, {
    tabIndex: r ? 0 : -1,
    className: Ca(
      eG.catBtn,
      hd.categoryBtn,
      "epr-icn-" + a,
      ((s = {}), (s[$a.active] = n), s),
    ),
    onClick: o,
    "aria-label": A_(i),
    "aria-selected": n,
    role: "tab",
    "aria-controls": "epr-category-nav-id",
  });
}
var Qj = {
    backgroundPositionY: "calc(var(--epr-category-navigation-button-size) * 3)",
  },
  XU = {
    backgroundPositionY: "calc(var(--epr-category-navigation-button-size) * 2)",
  },
  Zj = {
    ":not(.epr-search-active)": {
      catBtn: { ":hover": Qj, "&.epr-active": Qj },
    },
  },
  eG = jr.create(
    dr(
      {
        catBtn: {
          ".": "epr-cat-btn",
          display: "inline-block",
          transition: "opacity 0.2s ease-in-out",
          position: "relative",
          height: "var(--epr-category-navigation-button-size)",
          width: "var(--epr-category-navigation-button-size)",
          backgroundSize:
            "calc(var(--epr-category-navigation-button-size) * 10)",
          outline: "none",
          backgroundPosition: "0 0",
          backgroundImage: "url(" + QU + ")",
          ":focus:before": {
            content: "",
            position: "absolute",
            top: "-2px",
            left: "-2px",
            right: "-2px",
            bottom: "-2px",
            border: "2px solid var(--epr-category-icon-active-color)",
            borderRadius: "50%",
          },
          "&.epr-icn-suggested": {
            backgroundPositionX:
              "calc(var(--epr-category-navigation-button-size) * -8)",
          },
          "&.epr-icn-custom": {
            backgroundPositionX:
              "calc(var(--epr-category-navigation-button-size) * -9)",
          },
          "&.epr-icn-activities": {
            backgroundPositionX:
              "calc(var(--epr-category-navigation-button-size) * -4)",
          },
          "&.epr-icn-animals_nature": {
            backgroundPositionX:
              "calc(var(--epr-category-navigation-button-size) * -1)",
          },
          "&.epr-icn-flags": {
            backgroundPositionX:
              "calc(var(--epr-category-navigation-button-size) * -7)",
          },
          "&.epr-icn-food_drink": {
            backgroundPositionX:
              "calc(var(--epr-category-navigation-button-size) * -2)",
          },
          "&.epr-icn-objects": {
            backgroundPositionX:
              "calc(var(--epr-category-navigation-button-size) * -5)",
          },
          "&.epr-icn-smileys_people": { backgroundPositionX: "0px" },
          "&.epr-icn-symbols": {
            backgroundPositionX:
              "calc(var(--epr-category-navigation-button-size) * -6)",
          },
          "&.epr-icn-travel_places": {
            backgroundPositionX:
              "calc(var(--epr-category-navigation-button-size) * -3)",
          },
        },
      },
      Lc("catBtn", XU),
      { ".epr-dark-theme": dr({}, Zj), ".epr-auto-theme": dr({}, Zj) },
    ),
  );
function tG() {
  var t = l.useState(null),
    s = t[0],
    n = t[1],
    a = Pv(),
    r = a[1],
    i = KU();
  JU({ setActiveCategory: n, setVisibleCategories: r });
  var o = sg(),
    c = Bv(),
    d = Gv(),
    u = qU();
  return l.createElement(
    "div",
    {
      className: Ca(sG.nav),
      role: "tablist",
      "aria-label": "Category navigation",
      id: "epr-category-nav-id",
      ref: d,
    },
    c.map(function (f) {
      var p = Zh(f),
        m = p === s;
      if (lU(f) && u) return null;
      var h = !o && !m;
      return l.createElement(ZU, {
        key: p,
        category: p,
        isActiveCategory: m,
        allowNavigation: h,
        categoryConfig: f,
        onClick: function () {
          (i(p),
            setTimeout(function () {
              n(p);
            }, 10));
        },
      });
    }),
  );
}
var sG = jr.create({
    nav: {
      ".": "epr-category-nav",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      padding: "var(--epr-header-padding)",
    },
    ".epr-search-active": {
      nav: { opacity: "0.3", cursor: "default", pointerEvents: "none" },
    },
    ".epr-main:has(input:not(:placeholder-shown))": {
      nav: { opacity: "0.3", cursor: "default", pointerEvents: "none" },
    },
  }),
  _A =
    "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjgwcHgiIHZpZXdCb3g9IjAgMCAyMCA4MCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgODAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsPSIjODY4Njg2IiBkPSJNNi45OCwxMy41OWMwLjEsMC4xLDAuMjQsMC4xNSwwLjM3LDAuMTVzMC4yNy0wLjA1LDAuMzctMC4xNWwyLjQyLTIuNDJsMi40MywyLjQzCgljMC4xLDAuMSwwLjI0LDAuMTUsMC4zNywwLjE1YzAuMTQsMCwwLjI3LTAuMDUsMC4zNy0wLjE1YzAuMjEtMC4yMSwwLjIxLTAuNTQsMC0wLjc1bC0yLjQzLTIuNDNMMTMuMzIsOAoJYzAuMjEtMC4yMSwwLjIxLTAuNTQsMC0wLjc1Yy0wLjIxLTAuMjEtMC41NC0wLjIxLTAuNzUsMGwtMi40MiwyLjQyTDcuNzQsNy4yN2MtMC4yMS0wLjIxLTAuNTQtMC4yMS0wLjc1LDAKCWMtMC4yMSwwLjIxLTAuMjEsMC41NCwwLDAuNzVsMi40MSwyLjQxbC0yLjQyLDIuNDJDNi43NywxMy4wNSw2Ljc3LDEzLjM5LDYuOTgsMTMuNTlMNi45OCwxMy41OXoiLz4KPHBhdGggZmlsbD0iIzg2ODY4NiIgZD0iTTEwLjE1LDE4LjQzYzQuNDEsMCw4LTMuNTksOC04YzAtNC40MS0zLjU5LTgtOC04Yy00LjQxLDAtOCwzLjU5LTgsOEMyLjE1LDE0Ljg0LDUuNzQsMTguNDMsMTAuMTUsMTguNDN6CgkgTTEwLjE1LDMuNDljMy44MywwLDYuOTQsMy4xMSw2Ljk0LDYuOTRjMCwzLjgzLTMuMTEsNi45NC02Ljk0LDYuOTRjLTMuODMsMC02Ljk0LTMuMTEtNi45NC02Ljk0QzMuMjEsNi42LDYuMzMsMy40OSwxMC4xNSwzLjQ5CglMMTAuMTUsMy40OXoiLz4KPHBhdGggZmlsbD0iIzMzNzFCNyIgZD0iTTYuOTgsMzMuNTljMC4xLDAuMSwwLjI0LDAuMTUsMC4zNywwLjE1czAuMjctMC4wNSwwLjM3LTAuMTVsMi40Mi0yLjQybDIuNDMsMi40MwoJYzAuMSwwLjEsMC4yNCwwLjE1LDAuMzcsMC4xNWMwLjE0LDAsMC4yNy0wLjA1LDAuMzctMC4xNWMwLjIxLTAuMjEsMC4yMS0wLjU0LDAtMC43NWwtMi40My0yLjQzTDEzLjMyLDI4CgljMC4yMS0wLjIxLDAuMjEtMC41NCwwLTAuNzVjLTAuMjEtMC4yMS0wLjU0LTAuMjEtMC43NSwwbC0yLjQyLDIuNDJsLTIuNDEtMi40MWMtMC4yMS0wLjIxLTAuNTQtMC4yMS0wLjc1LDAKCWMtMC4yMSwwLjIxLTAuMjEsMC41NCwwLDAuNzVsMi40MSwyLjQxbC0yLjQyLDIuNDJDNi43NywzMy4wNSw2Ljc3LDMzLjM5LDYuOTgsMzMuNTlMNi45OCwzMy41OXoiLz4KPHBhdGggZmlsbD0iIzMzNzFCNyIgZD0iTTEwLjE1LDM4LjQzYzQuNDEsMCw4LTMuNTksOC04YzAtNC40MS0zLjU5LTgtOC04Yy00LjQxLDAtOCwzLjU5LTgsOEMyLjE1LDM0Ljg0LDUuNzQsMzguNDMsMTAuMTUsMzguNDN6CgkgTTEwLjE1LDIzLjQ5YzMuODMsMCw2Ljk0LDMuMTEsNi45NCw2Ljk0YzAsMy44My0zLjExLDYuOTQtNi45NCw2Ljk0Yy0zLjgzLDAtNi45NC0zLjExLTYuOTQtNi45NAoJQzMuMjEsMjYuNiw2LjMzLDIzLjQ5LDEwLjE1LDIzLjQ5TDEwLjE1LDIzLjQ5eiIvPgo8cGF0aCBmaWxsPSIjQzBDMEJGIiBkPSJNNi45OCw1My41OWMwLjEsMC4xLDAuMjQsMC4xNSwwLjM3LDAuMTVzMC4yNy0wLjA1LDAuMzctMC4xNWwyLjQyLTIuNDJsMi40MywyLjQzCgljMC4xLDAuMSwwLjI0LDAuMTUsMC4zNywwLjE1YzAuMTQsMCwwLjI3LTAuMDUsMC4zNy0wLjE1YzAuMjEtMC4yMSwwLjIxLTAuNTQsMC0wLjc1bC0yLjQzLTIuNDNMMTMuMzIsNDgKCWMwLjIxLTAuMjEsMC4yMS0wLjU0LDAtMC43NWMtMC4yMS0wLjIxLTAuNTQtMC4yMS0wLjc1LDBsLTIuNDIsMi40MmwtMi40MS0yLjQxYy0wLjIxLTAuMjEtMC41NC0wLjIxLTAuNzUsMAoJYy0wLjIxLDAuMjEtMC4yMSwwLjU0LDAsMC43NWwyLjQxLDIuNDFsLTIuNDIsMi40MkM2Ljc3LDUzLjA1LDYuNzcsNTMuMzksNi45OCw1My41OUw2Ljk4LDUzLjU5eiIvPgo8cGF0aCBmaWxsPSIjQzBDMEJGIiBkPSJNMTAuMTUsNTguNDNjNC40MSwwLDgtMy41OSw4LThjMC00LjQxLTMuNTktOC04LThjLTQuNDEsMC04LDMuNTktOCw4QzIuMTUsNTQuODQsNS43NCw1OC40MywxMC4xNSw1OC40M3oKCSBNMTAuMTUsNDMuNDljMy44MywwLDYuOTQsMy4xMSw2Ljk0LDYuOTRjMCwzLjgzLTMuMTEsNi45NC02Ljk0LDYuOTRjLTMuODMsMC02Ljk0LTMuMTEtNi45NC02Ljk0CglDMy4yMSw0Ni42LDYuMzMsNDMuNDksMTAuMTUsNDMuNDlMMTAuMTUsNDMuNDl6Ii8+CjxwYXRoIGZpbGw9IiM2QUE5REQiIGQ9Ik02Ljk4LDczLjU5YzAuMSwwLjEsMC4yNCwwLjE1LDAuMzcsMC4xNXMwLjI3LTAuMDUsMC4zNy0wLjE1bDIuNDItMi40MmwyLjQzLDIuNDMKCWMwLjEsMC4xLDAuMjQsMC4xNSwwLjM3LDAuMTVjMC4xNCwwLDAuMjctMC4wNSwwLjM3LTAuMTVjMC4yMS0wLjIxLDAuMjEtMC41NCwwLTAuNzVsLTIuNDMtMi40M0wxMy4zMiw2OAoJYzAuMjEtMC4yMSwwLjIxLTAuNTQsMC0wLjc1Yy0wLjIxLTAuMjEtMC41NC0wLjIxLTAuNzUsMGwtMi40MiwyLjQybC0yLjQxLTIuNDFjLTAuMjEtMC4yMS0wLjU0LTAuMjEtMC43NSwwCgljLTAuMjEsMC4yMS0wLjIxLDAuNTQsMCwwLjc1bDIuNDEsMi40MWwtMi40MiwyLjQyQzYuNzcsNzMuMDUsNi43Nyw3My4zOSw2Ljk4LDczLjU5TDYuOTgsNzMuNTl6Ii8+CjxwYXRoIGZpbGw9IiM2QUE5REQiIGQ9Ik0xMC4xNSw3OC40M2M0LjQxLDAsOC0zLjU5LDgtOGMwLTQuNDEtMy41OS04LTgtOGMtNC40MSwwLTgsMy41OS04LDhDMi4xNSw3NC44NCw1Ljc0LDc4LjQzLDEwLjE1LDc4LjQzegoJIE0xMC4xNSw2My40OWMzLjgzLDAsNi45NCwzLjExLDYuOTQsNi45NGMwLDMuODMtMy4xMSw2Ljk0LTYuOTQsNi45NGMtMy44MywwLTYuOTQtMy4xMS02Ljk0LTYuOTQKCUMzLjIxLDY2LjYsNi4zMyw2My40OSwxMC4xNSw2My40OUwxMC4xNSw2My40OXoiLz4KPC9zdmc+";
function nG() {
  var t = aA(),
    s = eB();
  return l.createElement(
    Tp,
    {
      className: Ca(Xj.btnClearSearch, hd.visibleOnSearchOnly),
      onClick: t,
      "aria-label": s,
      title: s,
    },
    l.createElement("div", { className: Ca(Xj.icnClearnSearch) }),
  );
}
var aG = {
    ":hover": { "> .epr-icn-clear-search": { backgroundPositionY: "-60px" } },
  },
  Xj = jr.create(
    dr(
      {
        btnClearSearch: {
          ".": "epr-btn-clear-search",
          position: "absolute",
          right: "var(--epr-search-bar-inner-padding)",
          height: "30px",
          width: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          top: "50%",
          transform: "translateY(-50%)",
          padding: "0",
          borderRadius: "50%",
          ":hover": { background: "var(--epr-hover-bg-color)" },
          ":focus": { background: "var(--epr-hover-bg-color)" },
        },
        icnClearnSearch: {
          ".": "epr-icn-clear-search",
          backgroundColor: "transparent",
          backgroundRepeat: "no-repeat",
          backgroundSize: "20px",
          height: "20px",
          width: "20px",
          backgroundImage: "url(" + _A + ")",
          ":hover": { backgroundPositionY: "-20px" },
          ":focus": { backgroundPositionY: "-20px" },
        },
      },
      Lc("icnClearnSearch", { backgroundPositionY: "-40px" }),
      Lc("btnClearSearch", aG),
    ),
  ),
  rG =
    "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjQwcHgiIHZpZXdCb3g9IjAgMCAyMCA0MCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzg2ODY4NiIgZD0iTTEyLDguODFjMCwyLjA4LTEuNjgsMy43Ni0zLjc2LDMuNzZjLTIuMDgsMC0zLjc2LTEuNjgtMy43Ni0zLjc2CgljMC0yLjA4LDEuNjgtMy43NiwzLjc2LTMuNzZDMTAuMzIsNS4wNSwxMiw2LjczLDEyLDguODF6IE0xMS4yMywxMi43MmMtMC44MywwLjY0LTEuODcsMS4wMS0yLjk5LDEuMDFjLTIuNzIsMC00LjkyLTIuMi00LjkyLTQuOTIKCWMwLTIuNzIsMi4yLTQuOTIsNC45Mi00LjkyYzIuNzIsMCw0LjkyLDIuMiw0LjkyLDQuOTJjMCwxLjEzLTAuMzgsMi4xNi0xLjAxLDIuOTlsMy45NCwzLjkzYzAuMjUsMC4yNSwwLjI1LDAuNjYsMCwwLjkyCgljLTAuMjUsMC4yNS0wLjY2LDAuMjUtMC45MiwwTDExLjIzLDEyLjcyeiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0MwQzBCRiIgZD0iTTEyLDI4LjgxYzAsMi4wOC0xLjY4LDMuNzYtMy43NiwzLjc2Yy0yLjA4LDAtMy43Ni0xLjY4LTMuNzYtMy43NgoJYzAtMi4wOCwxLjY4LTMuNzYsMy43Ni0zLjc2QzEwLjMyLDI1LjA1LDEyLDI2LjczLDEyLDI4LjgxeiBNMTEuMjMsMzIuNzJjLTAuODMsMC42NC0xLjg3LDEuMDEtMi45OSwxLjAxCgljLTIuNzIsMC00LjkyLTIuMi00LjkyLTQuOTJjMC0yLjcyLDIuMi00LjkyLDQuOTItNC45MmMyLjcyLDAsNC45MiwyLjIsNC45Miw0LjkyYzAsMS4xMy0wLjM4LDIuMTYtMS4wMSwyLjk5bDMuOTQsMy45MwoJYzAuMjUsMC4yNSwwLjI1LDAuNjYsMCwwLjkyYy0wLjI1LDAuMjUtMC42NiwwLjI1LTAuOTIsMEwxMS4yMywzMi43MnoiLz4KPC9zdmc+";
function iG() {
  return l.createElement("div", { className: Ca(oG.icnSearch) });
}
var oG = jr.create(
  dr(
    {
      icnSearch: {
        ".": "epr-icn-search",
        content: "",
        position: "absolute",
        top: "50%",
        left: "var(--epr-search-bar-inner-padding)",
        transform: "translateY(-50%)",
        width: "20px",
        height: "20px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0 0",
        backgroundSize: "20px",
        backgroundImage: "url(" + rG + ")",
      },
    },
    Lc("icnSearch", { backgroundPositionY: "-20px" }),
  ),
);
function lG() {
  var t = W_(),
    s = Wv();
  return t
    ? null
    : l.createElement(
        kA,
        { className: Ca(S0.overlay) },
        l.createElement(cG, null),
        s ? l.createElement(SA, null) : null,
      );
}
function cG() {
  var t = wd(),
    s = zc(),
    n = X7(),
    a = sB(),
    r = LB(),
    i = r.statusSearchResults,
    o = r.searchTerm,
    c = r.onChange,
    d = s == null ? void 0 : s.current,
    u = d == null ? void 0 : d.value;
  return l.createElement(
    cg,
    { className: Ca(S0.searchContainer) },
    l.createElement("input", {
      autoFocus: a,
      "aria-label": "Type to search for an emoji",
      onFocus: t,
      className: Ca(S0.search),
      type: "text",
      "aria-controls": "epr-search-id",
      placeholder: n,
      onChange: function (p) {
        var m, h;
        c(
          (m = p == null || (h = p.target) == null ? void 0 : h.value) != null
            ? m
            : u,
        );
      },
      ref: s,
    }),
    o
      ? l.createElement(
          "div",
          {
            role: "status",
            className: Ca("epr-status-search-results", S0.visuallyHidden),
            "aria-live": "polite",
            id: "epr-search-id",
            "aria-atomic": "true",
          },
          i,
        )
      : null,
    l.createElement(iG, null),
    l.createElement(nG, null),
  );
}
var S0 = jr.create(
  dr(
    {
      overlay: {
        padding: "var(--epr-header-padding)",
        zIndex: "var(--epr-header-overlay-z-index)",
      },
      searchContainer: {
        ".": "epr-search-container",
        flex: "1",
        display: "block",
        minWidth: "0",
      },
      visuallyHidden: {
        clip: "rect(0 0 0 0)",
        clipPath: "inset(50%)",
        height: "1px",
        overflow: "hidden",
        position: "absolute",
        whiteSpace: "nowrap",
        width: "1px",
      },
      search: {
        outline: "none",
        transition: "all 0.2s ease-in-out",
        color: "var(--epr-search-input-text-color)",
        borderRadius: "var(--epr-search-input-border-radius)",
        padding: "var(--epr-search-input-padding)",
        height: "var(--epr-search-input-height)",
        backgroundColor: "var(--epr-search-input-bg-color)",
        border: "1px solid var(--epr-search-border-color)",
        width: "100%",
        ":focus": {
          backgroundColor: "var(--epr-search-input-bg-color-active)",
          border: "1px solid var(--epr-search-border-color-active)",
        },
        "::placeholder": { color: "var(--epr-search-input-placeholder-color)" },
      },
      btnClearSearch: {
        ".": "epr-btn-clear-search",
        position: "absolute",
        right: "var(--epr-search-bar-inner-padding)",
        height: "30px",
        width: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        top: "50%",
        transform: "translateY(-50%)",
        padding: "0",
        borderRadius: "50%",
        ":hover": { background: "var(--epr-hover-bg-color)" },
        ":focus": { background: "var(--epr-hover-bg-color)" },
      },
      icnClearnSearch: {
        ".": "epr-icn-clear-search",
        backgroundColor: "transparent",
        backgroundRepeat: "no-repeat",
        backgroundSize: "20px",
        height: "20px",
        width: "20px",
        backgroundImage: "url(" + _A + ")",
        ":hover": { backgroundPositionY: "-20px" },
        ":focus": { backgroundPositionY: "-20px" },
      },
    },
    Lc("icnClearnSearch", { backgroundPositionY: "-40px" }),
    Lc("btnClearSearch", {
      ":hover > .epr-icn-clear-search": { backgroundPositionY: "-60px" },
    }),
  ),
);
function dG() {
  return l.createElement(
    cg,
    { className: Ca("epr-header", hd.hiddenOnReactions) },
    l.createElement(lG, null),
    l.createElement(tG, null),
  );
}
function uG(t) {
  return l.createElement(
    xB,
    null,
    l.createElement(f7, null),
    l.createElement(
      D7,
      Object.assign({}, t),
      l.createElement(G7, null, l.createElement(fG, null)),
    ),
  );
}
function fG() {
  var t = bd(),
    s = t[0],
    n = O_(),
    a = l.useState(!s),
    r = a[0],
    i = a[1],
    o = aB();
  return (
    l.useEffect(
      function () {
        (s && !n) || r || i(!0);
      },
      [r, n, s],
    ),
    o
      ? l.createElement(
          ZB,
          null,
          l.createElement(yU, null),
          l.createElement(mG, { renderAll: r }),
        )
      : null
  );
}
function mG(t) {
  var s = t.renderAll;
  return s
    ? l.createElement(
        l.Fragment,
        null,
        l.createElement(dG, null),
        l.createElement(FU, null),
        l.createElement(WU, null),
      )
    : null;
}
var pG = l.memo(uG, w_),
  xG = (function (t) {
    d7(s, t);
    function s(a) {
      var r;
      return ((r = t.call(this, a) || this), (r.state = { hasError: !1 }), r);
    }
    s.getDerivedStateFromError = function () {
      return { hasError: !0 };
    };
    var n = s.prototype;
    return (
      (n.componentDidCatch = function (r, i) {}),
      (n.render = function () {
        return this.state.hasError ? null : this.props.children;
      }),
      s
    );
  })(l.Component);
function hG(t) {
  var s = Z7({
    onEmojiClick: t.onEmojiClick,
    onReactionClick: t.onReactionClick,
    onSkinToneChange: t.onSkinToneChange,
  });
  return l.createElement(
    xG,
    null,
    l.createElement(
      R_.Provider,
      { value: s },
      l.createElement(pG, Object.assign({}, t)),
    ),
  );
}
const ib = co("leting"),
  dg = ({
    open: t,
    onClose: s,
    binding: n,
    onSave: a,
    variant: r = "radio",
    sheetTitle: i,
    sheetDescription: o,
    rootPosition: c = "fixed",
    showPhoneCase: d = !1,
    caseSize: u = null,
    echoUiScheme: f = "night",
  }) => {
    const p = r === "paper",
      m = r === "echo",
      h = m && f === "day",
      g = c === "absolute",
      x =
        "mx-6 mb-3 flex items-center gap-3 rounded-2xl border border-emerald-500/25 bg-emerald-500/[0.07] px-4 py-3",
      y = "h-4 w-4 text-emerald-400/90",
      v = "border-emerald-500/35 bg-emerald-500/[0.08]",
      b = "border-sky-500/35 bg-sky-500/[0.07]",
      N =
        "mx-6 mb-3 flex items-center gap-3 border border-[var(--e-line-strong)] bg-[var(--e-overlay-70)] px-3 py-2.5",
      w =
        "flex h-9 w-9 shrink-0 items-center justify-center border border-[var(--e-line-strong)] bg-[var(--e-canvas)]",
      _ = "h-4 w-4 text-[var(--e-cyan)]/85",
      A =
        "mx-6 mb-4 flex border border-[var(--e-line-strong)] bg-[var(--e-page)]",
      k = (ce, pe) =>
        `flex w-full items-center gap-3 border px-3 py-2.5 text-left font-mono transition ${pe ? "cursor-wait opacity-80" : ""} ${ce ? "border-[var(--e-cyan)]/40 bg-[var(--e-cyan)]/[0.07] text-[var(--e-primary)]" : "border-[var(--e-line)] bg-[var(--e-page)] text-[var(--e-primary)] hover:border-[var(--e-line-accent)] hover:bg-[var(--e-raised)]"}`,
      C =
        "h-10 w-10 shrink-0 border border-[var(--e-line-strong)] bg-[var(--e-raised)]",
      {
        fetchUserPlaylists: M,
        fetchPlaylistDetail: E,
        user: S,
        apiEndpoint: j,
      } = Ii(),
      [T, I] = l.useState("local"),
      [L, B] = l.useState([]),
      [F, D] = l.useState([]),
      [$, P] = l.useState(!1),
      [z, O] = l.useState(null),
      [Z, K] = l.useState(""),
      [q, V] = l.useState(!1);
    (l.useEffect(() => {
      t || V(!1);
    }, [t]),
      l.useEffect(() => {
        t &&
          (K(""),
          I("local"),
          O(null),
          (async () => {
            P(!0);
            try {
              const ce = await ib.getAllPlaylists();
              B(Array.isArray(ce) ? ce : []);
            } catch {
              B([]);
            } finally {
              P(!1);
            }
          })());
      }, [t]),
      l.useEffect(() => {
        !t ||
          T !== "netease" ||
          !S ||
          (async () => {
            (P(!0), K(""));
            try {
              const ce = await M(S.userId);
              D(
                (ce || []).map((pe) => ({
                  id: `ne_${pe.id}`,
                  platformId: pe.id,
                  name: pe.name,
                  cover: pe.coverImgUrl,
                  trackCount: pe.trackCount,
                })),
              );
            } catch {
              (K("加载网易云歌单失败"), D([]));
            } finally {
              P(!1);
            }
          })();
      }, [t, T, S, M]));
    const ne = async (ce) => {
        if (ce != null && ce.id) {
          (O(`local_${ce.id}`), K(""));
          try {
            const pe = await ib.getSongsByPlaylist(ce.id);
            if (!(pe != null && pe.length)) {
              K("该歌单暂无歌曲，请先在乐听中添加音乐");
              return;
            }
            (a({
              source: "local",
              playlistId: String(ce.id),
              playlistName: ce.name || "本地歌单",
            }),
              s());
          } catch {
            K("读取本地歌单失败");
          } finally {
            O(null);
          }
        }
      },
      le = async (ce) => {
        if (ce != null && ce.platformId) {
          if (!j) {
            K("请先在乐听中配置网易云 API 地址并登录");
            return;
          }
          (O(`ne_${ce.platformId}`), K(""));
          try {
            const pe = await E(ce.platformId);
            if (!(pe != null && pe.length)) {
              K("该歌单暂无可用曲目或加载失败");
              return;
            }
            const se = pe.map((Te) => ({
              id: `ne_${Te.id}`,
              platformId: Te.id,
              platform: "netease",
              title: Te.name,
              artist: Te.ar.map((ke) => ke.name).join(" / "),
              cover: Te.al.picUrl,
              album: Te.al.name,
              duration: Te.dt / 1e3,
              source: "netease_user",
            }));
            (await ib.setNeteaseCache(`playlist_${ce.platformId}`, se),
              a({
                source: "netease",
                playlistId: String(ce.platformId),
                playlistName: ce.name || "网易云歌单",
              }),
              s());
          } catch {
            K("加载网易云歌单失败，请检查网络与登录状态");
          } finally {
            O(null);
          }
        }
      },
      ie = () => {
        (a(null), s());
      },
      X = i ?? "绑定乐听歌单",
      je =
        o ??
        (p
          ? "生成日记时，AI 只从你选定的歌单里挑一首作为今日配乐，并在乐听中播放。"
          : "选一个乐听歌单，电台调频时的背景音乐会从里面出。"),
      xe = p ? "Journal · Sound" : m ? "UPLINK · LETING" : "Sound pool",
      ye = g
        ? "absolute inset-0 z-[240] flex min-h-0 w-full max-w-full overflow-hidden items-end justify-center px-2 pb-[max(0.35rem,env(safe-area-inset-bottom,0px))] pt-2 sm:items-center sm:px-3 sm:pb-3 sm:pt-3"
        : "fixed inset-0 z-[240] flex items-end justify-center p-0 sm:items-center sm:p-6",
      R = u && typeof u.height == "number" ? u.height : null,
      oe = u && typeof u.width == "number" ? u.width : null,
      ee = d && R ? Math.max(280, Math.round(R * 0.86)) : null,
      H = d && oe ? Math.max(280, Math.round(oe - 24)) : null,
      Y = g
        ? d && ee
          ? "w-full max-w-full sm:max-w-full"
          : "w-full max-w-full max-h-[min(92%,calc(100%-0.5rem))] sm:max-h-[min(88dvh,640px)] sm:max-w-lg"
        : "w-full max-w-lg max-h-[min(90dvh,640px)]",
      U =
        d && ee
          ? { maxHeight: ee, ...(H ? { maxWidth: H, width: "100%" } : {}) }
          : void 0;
    return e.jsx(Os, {
      children:
        t &&
        e.jsxs(We.div, {
          className: ye,
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          children: [
            e.jsx("button", {
              type: "button",
              "aria-label": "关闭",
              className: p
                ? "absolute inset-0 bg-[#1a1a1a]/25 backdrop-blur-[2px] border-0 cursor-default"
                : m
                  ? "absolute inset-0 cursor-default border-0 bg-[var(--e-overlay-90)] backdrop-blur-md"
                  : "absolute inset-0 bg-black/75 backdrop-blur-md border-0 cursor-default",
              onClick: s,
            }),
            e.jsxs(We.div, {
              role: "dialog",
              "aria-modal": "true",
              "aria-labelledby": "radio-leting-sheet-title",
              initial: { y: m ? 24 : 48, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              exit: { y: m ? 16 : 32, opacity: 0 },
              transition: m
                ? { type: "tween", duration: 0.22, ease: [0.22, 1, 0.36, 1] }
                : { type: "spring", stiffness: 420, damping: 36 },
              className: p
                ? `relative z-10 flex ${Y} flex-col overflow-hidden rounded-t-[1.75rem] border border-[#1a1a1a]/[0.08] bg-[#fcfcfc] shadow-[0_-28px_90px_rgba(26,26,26,0.12)] sm:rounded-3xl`
                : m
                  ? `relative z-10 flex ${Y} flex-col overflow-hidden border border-[var(--e-line-strong)] bg-[var(--e-surface)] ${h ? "shadow-sm" : "shadow-[inset_0_1px_0_rgba(0,255,255,0.05)]"}`
                  : `relative z-10 flex ${Y} flex-col overflow-hidden rounded-t-[1.75rem] border border-white/10 bg-gradient-to-b from-[#1c1c1c] via-[#141414] to-[#0d0d0d] shadow-[0_-24px_80px_rgba(0,0,0,0.65)] sm:rounded-3xl sm:border-white/[0.12]`,
              style: {
                fontFamily: p
                  ? 'ui-serif, Georgia, "Songti SC", serif'
                  : m
                    ? "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
                    : "ui-sans-serif, system-ui, sans-serif",
                ...U,
              },
              children: [
                !p && !m
                  ? e.jsxs(e.Fragment, {
                      children: [
                        e.jsx("div", {
                          className:
                            "pointer-events-none absolute -left-24 top-0 h-56 w-56 rounded-full opacity-30 blur-3xl",
                          style: {
                            background:
                              "radial-gradient(circle, rgba(255,255,255,0.14) 0%, transparent 70%)",
                          },
                        }),
                        e.jsx("div", {
                          className:
                            "pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full opacity-25 blur-3xl",
                          style: {
                            background:
                              "radial-gradient(circle, rgba(180,200,255,0.12) 0%, transparent 72%)",
                          },
                        }),
                      ],
                    })
                  : null,
                m && !h
                  ? e.jsxs(e.Fragment, {
                      children: [
                        e.jsx("div", {
                          className:
                            "pointer-events-none absolute inset-0 opacity-[0.06]",
                          style: {
                            backgroundImage:
                              'url("https://grainy-gradients.vercel.app/noise.svg")',
                          },
                        }),
                        e.jsx("div", {
                          className:
                            "pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[var(--e-cyan)]/25 to-transparent",
                        }),
                      ],
                    })
                  : null,
                p
                  ? e.jsxs(e.Fragment, {
                      children: [
                        e.jsx("div", {
                          className:
                            "pointer-events-none absolute inset-0 opacity-[0.35]",
                          style: {
                            backgroundImage:
                              'url("https://www.transparenttextures.com/patterns/natural-paper.png")',
                          },
                        }),
                        e.jsx("div", {
                          className:
                            "pointer-events-none absolute -right-20 top-12 h-44 w-44 rounded-full opacity-[0.12] blur-3xl",
                          style: {
                            background:
                              "radial-gradient(circle, rgba(26,26,26,0.25) 0%, transparent 70%)",
                          },
                        }),
                      ],
                    })
                  : null,
                e.jsxs("div", {
                  className: "relative flex min-h-0 flex-1 flex-col",
                  children: [
                    e.jsx("div", {
                      className: p
                        ? "absolute left-1/2 top-2 h-1 w-10 -translate-x-1/2 rounded-full bg-[#1a1a1a]/10 sm:hidden"
                        : m
                          ? "absolute left-1/2 top-2 h-px w-12 -translate-x-1/2 bg-[var(--e-line-strong)] sm:hidden"
                          : "absolute left-1/2 top-2 h-1 w-10 -translate-x-1/2 rounded-full bg-white/15 sm:hidden",
                    }),
                    e.jsxs("header", {
                      className: p
                        ? "relative shrink-0 px-6 pb-3 pt-6 sm:pt-7"
                        : m
                          ? "relative shrink-0 border-b border-[var(--e-line)] bg-[var(--e-surface-90)] px-6 pb-4 pt-5 backdrop-blur-md sm:pt-6"
                          : "relative shrink-0 px-6 pb-3 pt-6 sm:pt-7",
                      children: [
                        e.jsx("button", {
                          type: "button",
                          onClick: s,
                          className: p
                            ? "absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-[#1a1a1a]/10 bg-white text-[#1a1a1a]/40 transition hover:border-[#1a1a1a]/25 hover:bg-[#1a1a1a]/[0.03] hover:text-[#1a1a1a]/70"
                            : m
                              ? "absolute right-3 top-3 flex h-8 w-8 items-center justify-center border border-[var(--e-line-strong)] bg-[var(--e-raised)] text-[var(--e-muted)] transition hover:border-[var(--e-cyan)]/45 hover:text-[var(--e-cyan)]"
                              : "absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/50 transition hover:border-white/20 hover:bg-white/10 hover:text-white",
                          "aria-label": "关闭",
                          children: e.jsx(Ts, {
                            className: "h-4 w-4",
                            strokeWidth: 1.5,
                          }),
                        }),
                        e.jsxs("div", {
                          className: m ? "pr-11" : "pr-10",
                          children: [
                            e.jsx("div", {
                              className: m
                                ? "mb-2 inline-flex border border-[var(--e-cyan)]/30 px-2.5 py-0.5 text-[9px] font-mono uppercase tracking-[0.2em] text-[var(--e-cyan)]"
                                : "hidden",
                              children: "配乐链路",
                            }),
                            e.jsx("p", {
                              className: p
                                ? "text-[10px] font-sans font-bold uppercase tracking-[0.35em] text-[#1a1a1a]/35"
                                : m
                                  ? "text-[9px] font-mono uppercase tracking-[0.35em] text-[var(--e-muted)]"
                                  : "text-[10px] font-medium uppercase tracking-[0.4em] text-white/35",
                              children: xe,
                            }),
                            e.jsx("h2", {
                              id: "radio-leting-sheet-title",
                              className: p
                                ? "mt-1 font-serif text-2xl italic tracking-tight text-[#1a1a1a] sm:text-[1.65rem]"
                                : m
                                  ? "mt-1 font-mono text-sm font-bold uppercase tracking-wide text-[var(--e-cyan)] sm:text-base"
                                  : "mt-1 font-serif text-2xl italic tracking-tight text-white/95 sm:text-[1.65rem]",
                              children: X,
                            }),
                            m
                              ? e.jsxs(e.Fragment, {
                                  children: [
                                    e.jsxs("button", {
                                      type: "button",
                                      onClick: () => V((ce) => !ce),
                                      className:
                                        "group mt-2 flex w-full items-center justify-between gap-2 border border-[var(--e-line-warm)] bg-[var(--e-canvas)] px-2.5 py-1.5 text-left transition hover:border-[var(--e-cyan)]/35",
                                      "aria-expanded": q,
                                      children: [
                                        e.jsx("span", {
                                          className:
                                            "text-[9px] font-mono uppercase tracking-[0.2em] text-[var(--e-muted)] group-hover:text-[var(--e-soft)]",
                                          children: "协议说明",
                                        }),
                                        e.jsx(aa, {
                                          className: `h-3.5 w-3.5 shrink-0 text-[var(--e-mid)] transition-transform ${q ? "rotate-180" : ""}`,
                                          strokeWidth: 2,
                                        }),
                                      ],
                                    }),
                                    e.jsx(Os, {
                                      initial: !1,
                                      children:
                                        q &&
                                        e.jsx(We.div, {
                                          initial: { opacity: 0, height: 0 },
                                          animate: {
                                            opacity: 1,
                                            height: "auto",
                                          },
                                          exit: { opacity: 0, height: 0 },
                                          transition: { duration: 0.2 },
                                          className: "overflow-hidden",
                                          children: e.jsx("p", {
                                            className:
                                              "mt-2 text-[10px] font-mono leading-relaxed text-[var(--e-soft)]",
                                            children: je,
                                          }),
                                        }),
                                    }),
                                  ],
                                })
                              : e.jsx("p", {
                                  className: p
                                    ? "mt-2 text-[11px] font-sans leading-relaxed text-[#1a1a1a]/48"
                                    : "mt-2 text-[11px] leading-relaxed text-white/38",
                                  children: je,
                                }),
                          ],
                        }),
                      ],
                    }),
                    n &&
                      e.jsxs("div", {
                        className: p
                          ? "mx-6 mb-3 flex items-center gap-3 rounded-2xl border border-[#1a1a1a]/10 bg-white px-4 py-3 shadow-sm"
                          : m
                            ? N
                            : x,
                        children: [
                          e.jsx("div", {
                            className: p
                              ? "flex h-10 w-10 items-center justify-center rounded-xl border border-[#1a1a1a]/8 bg-[#1a1a1a]/[0.03]"
                              : m
                                ? w
                                : "flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/30",
                            children: e.jsx(Cc, {
                              className: p
                                ? "h-4 w-4 text-[#1a1a1a]/55"
                                : m
                                  ? _
                                  : y,
                              strokeWidth: 1.75,
                            }),
                          }),
                          e.jsxs("div", {
                            className: "min-w-0 flex-1",
                            children: [
                              e.jsx("p", {
                                className: p
                                  ? "text-[9px] font-sans font-bold uppercase tracking-[0.25em] text-[#1a1a1a]/35"
                                  : m
                                    ? "text-[8px] font-mono uppercase tracking-[0.28em] text-[var(--e-muted)]"
                                    : "text-[9px] uppercase tracking-[0.25em] text-white/35",
                                children: "当前绑定",
                              }),
                              e.jsx("p", {
                                className: p
                                  ? "truncate text-sm font-medium text-[#1a1a1a]"
                                  : m
                                    ? "truncate text-xs font-mono text-[var(--e-primary)]"
                                    : "truncate text-sm font-medium text-white/90",
                                children: n.playlistName,
                              }),
                              e.jsx("p", {
                                className: p
                                  ? "text-[10px] text-[#1a1a1a]/42"
                                  : m
                                    ? "text-[9px] font-mono text-[var(--e-muted)]"
                                    : "text-[10px] text-white/40",
                                children:
                                  n.source === "netease"
                                    ? "网易云歌单"
                                    : "乐听本机歌单",
                              }),