    "orient",
    "orientation",
    "origin",
    "overflow",
    "paint-order",
    "path",
    "pathlength",
    "patterncontentunits",
    "patterntransform",
    "patternunits",
    "points",
    "preservealpha",
    "preserveaspectratio",
    "primitiveunits",
    "r",
    "rx",
    "ry",
    "radius",
    "refx",
    "refy",
    "repeatcount",
    "repeatdur",
    "restart",
    "result",
    "rotate",
    "scale",
    "seed",
    "shape-rendering",
    "slope",
    "specularconstant",
    "specularexponent",
    "spreadmethod",
    "startoffset",
    "stddeviation",
    "stitchtiles",
    "stop-color",
    "stop-opacity",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke",
    "stroke-width",
    "style",
    "surfacescale",
    "systemlanguage",
    "tabindex",
    "tablevalues",
    "targetx",
    "targety",
    "transform",
    "transform-origin",
    "text-anchor",
    "text-decoration",
    "text-rendering",
    "textlength",
    "type",
    "u1",
    "u2",
    "unicode",
    "values",
    "viewbox",
    "visibility",
    "version",
    "vert-adv-y",
    "vert-origin-x",
    "vert-origin-y",
    "width",
    "word-spacing",
    "wrap",
    "writing-mode",
    "xchannelselector",
    "ychannelselector",
    "x",
    "x1",
    "x2",
    "xmlns",
    "y",
    "y1",
    "y2",
    "z",
    "zoomandpan",
  ]),
  kN = Ci([
    "accent",
    "accentunder",
    "align",
    "bevelled",
    "close",
    "columnsalign",
    "columnlines",
    "columnspan",
    "denomalign",
    "depth",
    "dir",
    "display",
    "displaystyle",
    "encoding",
    "fence",
    "frame",
    "height",
    "href",
    "id",
    "largeop",
    "length",
    "linethickness",
    "lspace",
    "lquote",
    "mathbackground",
    "mathcolor",
    "mathsize",
    "mathvariant",
    "maxsize",
    "minsize",
    "movablelimits",
    "notation",
    "numalign",
    "open",
    "rowalign",
    "rowlines",
    "rowspacing",
    "rowspan",
    "rspace",
    "rquote",
    "scriptlevel",
    "scriptminsize",
    "scriptsizemultiplier",
    "selection",
    "separator",
    "separators",
    "stretchy",
    "subscriptshift",
    "supscriptshift",
    "symmetric",
    "voffset",
    "width",
    "xmlns",
  ]),
  xx = Ci(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
  UH = To(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
  GH = To(/<%[\w\W]*|[\w\W]*%>/gm),
  HH = To(/\$\{[\w\W]*/gm),
  WH = To(/^data-[\-\w.\u00B7-\uFFFF]+$/),
  YH = To(/^aria-[\-\w]+$/),
  FA = To(
    /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
  ),
  VH = To(/^(?:\w+script|data):/i),
  JH = To(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
  zA = To(/^html$/i),
  KH = To(/^[a-z][.\w]*(-[.\w]+)+$/i);
var SN = Object.freeze({
  __proto__: null,
  ARIA_ATTR: YH,
  ATTR_WHITESPACE: JH,
  CUSTOM_ELEMENT: KH,
  DATA_ATTR: WH,
  DOCTYPE_NAME: zA,
  ERB_EXPR: GH,
  IS_ALLOWED_URI: FA,
  IS_SCRIPT_OR_DATA: VH,
  MUSTACHE_EXPR: UH,
  TMPLIT_EXPR: HH,
});
const Tf = {
    element: 1,
    text: 3,
    progressingInstruction: 7,
    comment: 8,
    document: 9,
  },
  qH = function () {
    return typeof window > "u" ? null : window;
  },
  QH = function (s, n) {
    if (typeof s != "object" || typeof s.createPolicy != "function")
      return null;
    let a = null;
    const r = "data-tt-policy-suffix";
    n && n.hasAttribute(r) && (a = n.getAttribute(r));
    const i = "dompurify" + (a ? "#" + a : "");
    try {
      return s.createPolicy(i, {
        createHTML(o) {
          return o;
        },
        createScriptURL(o) {
          return o;
        },
      });
    } catch {
      return null;
    }
  },
  _N = function () {
    return {
      afterSanitizeAttributes: [],
      afterSanitizeElements: [],
      afterSanitizeShadowDOM: [],
      beforeSanitizeAttributes: [],
      beforeSanitizeElements: [],
      beforeSanitizeShadowDOM: [],
      uponSanitizeAttribute: [],
      uponSanitizeElement: [],
      uponSanitizeShadowNode: [],
    };
  };
function RA() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : qH();
  const s = (Wt) => RA(Wt);
  if (
    ((s.version = "3.3.3"),
    (s.removed = []),
    !t || !t.document || t.document.nodeType !== Tf.document || !t.Element)
  )
    return ((s.isSupported = !1), s);
  let { document: n } = t;
  const a = n,
    r = a.currentScript,
    {
      DocumentFragment: i,
      HTMLTemplateElement: o,
      Node: c,
      Element: d,
      NodeFilter: u,
      NamedNodeMap: f = t.NamedNodeMap || t.MozNamedAttrMap,
      HTMLFormElement: p,
      DOMParser: m,
      trustedTypes: h,
    } = t,
    g = d.prototype,
    x = Mf(g, "cloneNode"),
    y = Mf(g, "remove"),
    v = Mf(g, "nextSibling"),
    b = Mf(g, "childNodes"),
    N = Mf(g, "parentNode");
  if (typeof o == "function") {
    const Wt = n.createElement("template");
    Wt.content && Wt.content.ownerDocument && (n = Wt.content.ownerDocument);
  }
  let w,
    _ = "";
  const {
      implementation: A,
      createNodeIterator: k,
      createDocumentFragment: C,
      getElementsByTagName: M,
    } = n,
    { importNode: E } = a;
  let S = _N();
  s.isSupported =
    typeof $A == "function" &&
    typeof N == "function" &&
    A &&
    A.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: j,
    ERB_EXPR: T,
    TMPLIT_EXPR: I,
    DATA_ATTR: L,
    ARIA_ATTR: B,
    IS_SCRIPT_OR_DATA: F,
    ATTR_WHITESPACE: D,
    CUSTOM_ELEMENT: $,
  } = SN;
  let { IS_ALLOWED_URI: P } = SN,
    z = null;
  const O = ba({}, [...wN, ...jb, ...Nb, ...kb, ...jN]);
  let Z = null;
  const K = ba({}, [...NN, ...Sb, ...kN, ...xx]);
  let q = Object.seal(
      _0(null, {
        tagNameCheck: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: null,
        },
        attributeNameCheck: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: null,
        },
        allowCustomizedBuiltInElements: {
          writable: !0,
          configurable: !1,
          enumerable: !0,
          value: !1,
        },
      }),
    ),
    V = null,
    ne = null;
  const le = Object.seal(
    _0(null, {
      tagCheck: { writable: !0, configurable: !1, enumerable: !0, value: null },
      attributeCheck: {
        writable: !0,
        configurable: !1,
        enumerable: !0,
        value: null,
      },
    }),
  );
  let ie = !0,
    X = !0,
    je = !1,
    xe = !0,
    ye = !1,
    R = !0,
    oe = !1,
    ee = !1,
    H = !1,
    Y = !1,
    U = !1,
    ce = !1,
    pe = !0,
    se = !1;
  const Te = "user-content-";
  let ke = !0,
    W = !1,
    ue = {},
    re = null;
  const he = ba({}, [
    "annotation-xml",
    "audio",
    "colgroup",
    "desc",
    "foreignobject",
    "head",
    "iframe",
    "math",
    "mi",
    "mn",
    "mo",
    "ms",
    "mtext",
    "noembed",
    "noframes",
    "noscript",
    "plaintext",
    "script",
    "style",
    "svg",
    "template",
    "thead",
    "title",
    "video",
    "xmp",
  ]);
  let ge = null;
  const J = ba({}, ["audio", "video", "img", "source", "image", "track"]);
  let G = null;
  const we = ba({}, [
      "alt",
      "class",
      "for",
      "id",
      "label",
      "name",
      "pattern",
      "placeholder",
      "role",
      "summary",
      "title",
      "value",
      "style",
      "xmlns",
    ]),
    Q = "http://www.w3.org/1998/Math/MathML",
    ve = "http://www.w3.org/2000/svg",
    Ve = "http://www.w3.org/1999/xhtml";
  let Ae = Ve,
    te = !1,
    Se = null;
  const Fe = ba({}, [Q, ve, Ve], vb);
  let $e = ba({}, ["mi", "mo", "mn", "ms", "mtext"]),
    tt = ba({}, ["annotation-xml"]);
  const Xe = ba({}, ["title", "style", "font", "a", "script"]);
  let ht = null;
  const Pe = ["application/xhtml+xml", "text/html"],
    ut = "text/html";
  let _t = null,
    Ee = null;
  const fe = n.createElement("form"),
    He = function (ct) {
      return ct instanceof RegExp || ct instanceof Function;
    },
    Ie = function () {
      let ct =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (!(Ee && Ee === ct)) {
        if (
          ((!ct || typeof ct != "object") && (ct = {}),
          (ct = cl(ct)),
          (ht =
            Pe.indexOf(ct.PARSER_MEDIA_TYPE) === -1
              ? ut
              : ct.PARSER_MEDIA_TYPE),
          (_t = ht === "application/xhtml+xml" ? vb : A0),
          (z = Zi(ct, "ALLOWED_TAGS") ? ba({}, ct.ALLOWED_TAGS, _t) : O),
          (Z = Zi(ct, "ALLOWED_ATTR") ? ba({}, ct.ALLOWED_ATTR, _t) : K),
          (Se = Zi(ct, "ALLOWED_NAMESPACES")
            ? ba({}, ct.ALLOWED_NAMESPACES, vb)
            : Fe),
          (G = Zi(ct, "ADD_URI_SAFE_ATTR")
            ? ba(cl(we), ct.ADD_URI_SAFE_ATTR, _t)
            : we),
          (ge = Zi(ct, "ADD_DATA_URI_TAGS")
            ? ba(cl(J), ct.ADD_DATA_URI_TAGS, _t)
            : J),
          (re = Zi(ct, "FORBID_CONTENTS")
            ? ba({}, ct.FORBID_CONTENTS, _t)
            : he),
          (V = Zi(ct, "FORBID_TAGS") ? ba({}, ct.FORBID_TAGS, _t) : cl({})),
          (ne = Zi(ct, "FORBID_ATTR") ? ba({}, ct.FORBID_ATTR, _t) : cl({})),
          (ue = Zi(ct, "USE_PROFILES") ? ct.USE_PROFILES : !1),
          (ie = ct.ALLOW_ARIA_ATTR !== !1),
          (X = ct.ALLOW_DATA_ATTR !== !1),
          (je = ct.ALLOW_UNKNOWN_PROTOCOLS || !1),
          (xe = ct.ALLOW_SELF_CLOSE_IN_ATTR !== !1),
          (ye = ct.SAFE_FOR_TEMPLATES || !1),
          (R = ct.SAFE_FOR_XML !== !1),
          (oe = ct.WHOLE_DOCUMENT || !1),
          (Y = ct.RETURN_DOM || !1),
          (U = ct.RETURN_DOM_FRAGMENT || !1),
          (ce = ct.RETURN_TRUSTED_TYPE || !1),
          (H = ct.FORCE_BODY || !1),
          (pe = ct.SANITIZE_DOM !== !1),
          (se = ct.SANITIZE_NAMED_PROPS || !1),
          (ke = ct.KEEP_CONTENT !== !1),
          (W = ct.IN_PLACE || !1),
          (P = ct.ALLOWED_URI_REGEXP || FA),
          (Ae = ct.NAMESPACE || Ve),
          ($e = ct.MATHML_TEXT_INTEGRATION_POINTS || $e),
          (tt = ct.HTML_INTEGRATION_POINTS || tt),
          (q = ct.CUSTOM_ELEMENT_HANDLING || {}),
          ct.CUSTOM_ELEMENT_HANDLING &&
            He(ct.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
            (q.tagNameCheck = ct.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
          ct.CUSTOM_ELEMENT_HANDLING &&
            He(ct.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
            (q.attributeNameCheck =
              ct.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
          ct.CUSTOM_ELEMENT_HANDLING &&
            typeof ct.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements ==
              "boolean" &&
            (q.allowCustomizedBuiltInElements =
              ct.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
          ye && (X = !1),
          U && (Y = !0),
          ue &&
            ((z = ba({}, jN)),
            (Z = _0(null)),
            ue.html === !0 && (ba(z, wN), ba(Z, NN)),
            ue.svg === !0 && (ba(z, jb), ba(Z, Sb), ba(Z, xx)),
            ue.svgFilters === !0 && (ba(z, Nb), ba(Z, Sb), ba(Z, xx)),
            ue.mathMl === !0 && (ba(z, kb), ba(Z, kN), ba(Z, xx))),
          Zi(ct, "ADD_TAGS") || (le.tagCheck = null),
          Zi(ct, "ADD_ATTR") || (le.attributeCheck = null),
          ct.ADD_TAGS &&
            (typeof ct.ADD_TAGS == "function"
              ? (le.tagCheck = ct.ADD_TAGS)
              : (z === O && (z = cl(z)), ba(z, ct.ADD_TAGS, _t))),
          ct.ADD_ATTR &&
            (typeof ct.ADD_ATTR == "function"
              ? (le.attributeCheck = ct.ADD_ATTR)
              : (Z === K && (Z = cl(Z)), ba(Z, ct.ADD_ATTR, _t))),
          ct.ADD_URI_SAFE_ATTR && ba(G, ct.ADD_URI_SAFE_ATTR, _t),
          ct.FORBID_CONTENTS &&
            (re === he && (re = cl(re)), ba(re, ct.FORBID_CONTENTS, _t)),
          ct.ADD_FORBID_CONTENTS &&
            (re === he && (re = cl(re)), ba(re, ct.ADD_FORBID_CONTENTS, _t)),
          ke && (z["#text"] = !0),
          oe && ba(z, ["html", "head", "body"]),
          z.table && (ba(z, ["tbody"]), delete V.tbody),
          ct.TRUSTED_TYPES_POLICY)
        ) {
          if (typeof ct.TRUSTED_TYPES_POLICY.createHTML != "function")
            throw Cf(
              'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.',
            );
          if (typeof ct.TRUSTED_TYPES_POLICY.createScriptURL != "function")
            throw Cf(
              'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.',
            );
          ((w = ct.TRUSTED_TYPES_POLICY), (_ = w.createHTML("")));
        } else
          (w === void 0 && (w = QH(h, r)),
            w !== null && typeof _ == "string" && (_ = w.createHTML("")));
        (Ci && Ci(ct), (Ee = ct));
      }
    },
    Ce = ba({}, [...jb, ...Nb, ...OH]),
    Re = ba({}, [...kb, ...BH]),
    De = function (ct) {
      let Kt = N(ct);
      (!Kt || !Kt.tagName) && (Kt = { namespaceURI: Ae, tagName: "template" });
      const fs = A0(ct.tagName),
        gt = A0(Kt.tagName);
      return Se[ct.namespaceURI]
        ? ct.namespaceURI === ve
          ? Kt.namespaceURI === Ve
            ? fs === "svg"
            : Kt.namespaceURI === Q
              ? fs === "svg" && (gt === "annotation-xml" || $e[gt])
              : !!Ce[fs]
          : ct.namespaceURI === Q
            ? Kt.namespaceURI === Ve
              ? fs === "math"
              : Kt.namespaceURI === ve
                ? fs === "math" && tt[gt]
                : !!Re[fs]
            : ct.namespaceURI === Ve
              ? (Kt.namespaceURI === ve && !tt[gt]) ||
                (Kt.namespaceURI === Q && !$e[gt])
                ? !1
                : !Re[fs] && (Xe[fs] || !Ce[fs])
              : !!(ht === "application/xhtml+xml" && Se[ct.namespaceURI])
        : !1;
    },
    at = function (ct) {
      _f(s.removed, { element: ct });
      try {
        N(ct).removeChild(ct);
      } catch {
        y(ct);
      }
    },
    ft = function (ct, Kt) {
      try {
        _f(s.removed, { attribute: Kt.getAttributeNode(ct), from: Kt });
      } catch {
        _f(s.removed, { attribute: null, from: Kt });
      }
      if ((Kt.removeAttribute(ct), ct === "is"))
        if (Y || U)
          try {
            at(Kt);
          } catch {}
        else
          try {
            Kt.setAttribute(ct, "");
          } catch {}
    },
    vt = function (ct) {
      let Kt = null,
        fs = null;
      if (H) ct = "<remove></remove>" + ct;
      else {
        const nt = wb(ct, /^[\r\n\t ]+/);
        fs = nt && nt[0];
      }
      ht === "application/xhtml+xml" &&
        Ae === Ve &&
        (ct =
          '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
          ct +
          "</body></html>");
      const gt = w ? w.createHTML(ct) : ct;
      if (Ae === Ve)
        try {
          Kt = new m().parseFromString(gt, ht);
        } catch {}
      if (!Kt || !Kt.documentElement) {
        Kt = A.createDocument(Ae, "template", null);
        try {
          Kt.documentElement.innerHTML = te ? _ : gt;
        } catch {}
      }
      const ae = Kt.body || Kt.documentElement;
      return (
        ct &&
          fs &&
          ae.insertBefore(n.createTextNode(fs), ae.childNodes[0] || null),
        Ae === Ve
          ? M.call(Kt, oe ? "html" : "body")[0]
          : oe
            ? Kt.documentElement
            : ae
      );
    },
    Oe = function (ct) {
      return k.call(
        ct.ownerDocument || ct,
        ct,
        u.SHOW_ELEMENT |
          u.SHOW_COMMENT |
          u.SHOW_TEXT |
          u.SHOW_PROCESSING_INSTRUCTION |
          u.SHOW_CDATA_SECTION,
        null,
      );
    },
    Qe = function (ct) {
      return (
        ct instanceof p &&
        (typeof ct.nodeName != "string" ||
          typeof ct.textContent != "string" ||
          typeof ct.removeChild != "function" ||
          !(ct.attributes instanceof f) ||
          typeof ct.removeAttribute != "function" ||
          typeof ct.setAttribute != "function" ||
          typeof ct.namespaceURI != "string" ||
          typeof ct.insertBefore != "function" ||
          typeof ct.hasChildNodes != "function")
      );
    },
    Ye = function (ct) {
      return typeof c == "function" && ct instanceof c;
    };
  function Ze(Wt, ct, Kt) {
    px(Wt, (fs) => {
      fs.call(s, ct, Kt, Ee);
    });
  }
  const Ue = function (ct) {
      let Kt = null;
      if ((Ze(S.beforeSanitizeElements, ct, null), Qe(ct))) return (at(ct), !0);
      const fs = _t(ct.nodeName);
      if (
        (Ze(S.uponSanitizeElement, ct, { tagName: fs, allowedTags: z }),
        (R &&
          ct.hasChildNodes() &&
          !Ye(ct.firstElementChild) &&
          wi(/<[/\w!]/g, ct.innerHTML) &&
          wi(/<[/\w!]/g, ct.textContent)) ||
          ct.nodeType === Tf.progressingInstruction ||
          (R && ct.nodeType === Tf.comment && wi(/<[/\w]/g, ct.data)))
      )
        return (at(ct), !0);
      if (
        !(le.tagCheck instanceof Function && le.tagCheck(fs)) &&
        (!z[fs] || V[fs])
      ) {
        if (
          !V[fs] &&
          jt(fs) &&
          ((q.tagNameCheck instanceof RegExp && wi(q.tagNameCheck, fs)) ||
            (q.tagNameCheck instanceof Function && q.tagNameCheck(fs)))
        )
          return !1;
        if (ke && !re[fs]) {
          const gt = N(ct) || ct.parentNode,
            ae = b(ct) || ct.childNodes;
          if (ae && gt) {
            const nt = ae.length;
            for (let It = nt - 1; It >= 0; --It) {
              const Xt = x(ae[It], !0);
              ((Xt.__removalCount = (ct.__removalCount || 0) + 1),
                gt.insertBefore(Xt, v(ct)));
            }
          }
        }
        return (at(ct), !0);
      }
      return (ct instanceof d && !De(ct)) ||
        ((fs === "noscript" || fs === "noembed" || fs === "noframes") &&
          wi(/<\/no(script|embed|frames)/i, ct.innerHTML))
        ? (at(ct), !0)
        : (ye &&
            ct.nodeType === Tf.text &&
            ((Kt = ct.textContent),
            px([j, T, I], (gt) => {
              Kt = Af(Kt, gt, " ");
            }),
            ct.textContent !== Kt &&
              (_f(s.removed, { element: ct.cloneNode() }),
              (ct.textContent = Kt))),
          Ze(S.afterSanitizeElements, ct, null),
          !1);
    },
    me = function (ct, Kt, fs) {
      if (
        ne[Kt] ||
        (pe && (Kt === "id" || Kt === "name") && (fs in n || fs in fe))
      )
        return !1;
      if (!(X && !ne[Kt] && wi(L, Kt))) {
        if (!(ie && wi(B, Kt))) {
          if (
            !(
              le.attributeCheck instanceof Function && le.attributeCheck(Kt, ct)
            )
          ) {
            if (!Z[Kt] || ne[Kt]) {
              if (
                !(
                  (jt(ct) &&
                    ((q.tagNameCheck instanceof RegExp &&
                      wi(q.tagNameCheck, ct)) ||
                      (q.tagNameCheck instanceof Function &&
                        q.tagNameCheck(ct))) &&
                    ((q.attributeNameCheck instanceof RegExp &&
                      wi(q.attributeNameCheck, Kt)) ||
                      (q.attributeNameCheck instanceof Function &&
                        q.attributeNameCheck(Kt, ct)))) ||
                  (Kt === "is" &&
                    q.allowCustomizedBuiltInElements &&
                    ((q.tagNameCheck instanceof RegExp &&
                      wi(q.tagNameCheck, fs)) ||
                      (q.tagNameCheck instanceof Function &&
                        q.tagNameCheck(fs))))
                )
              )
                return !1;
            } else if (!G[Kt]) {
              if (!wi(P, Af(fs, D, ""))) {
                if (
                  !(
                    (Kt === "src" || Kt === "xlink:href" || Kt === "href") &&
                    ct !== "script" &&
                    FH(fs, "data:") === 0 &&
                    ge[ct]
                  )
                ) {
                  if (!(je && !wi(F, Af(fs, D, "")))) {
                    if (fs) return !1;
                  }
                }
              }
            }
          }
        }
      }
      return !0;
    },
    jt = function (ct) {
      return ct !== "annotation-xml" && wb(ct, $);
    },
    Gt = function (ct) {
      Ze(S.beforeSanitizeAttributes, ct, null);
      const { attributes: Kt } = ct;
      if (!Kt || Qe(ct)) return;
      const fs = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: Z,
        forceKeepAttr: void 0,
      };
      let gt = Kt.length;
      for (; gt--; ) {
        const ae = Kt[gt],
          { name: nt, namespaceURI: It, value: Xt } = ae,
          bs = _t(nt),
          ss = Xt;
        let _s = nt === "value" ? ss : zH(ss);
        if (
          ((fs.attrName = bs),
          (fs.attrValue = _s),
          (fs.keepAttr = !0),
          (fs.forceKeepAttr = void 0),
          Ze(S.uponSanitizeAttribute, ct, fs),
          (_s = fs.attrValue),
          se && (bs === "id" || bs === "name") && (ft(nt, ct), (_s = Te + _s)),
          R &&
            wi(
              /((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,
              _s,
            ))
        ) {
          ft(nt, ct);
          continue;
        }
        if (bs === "attributename" && wb(_s, "href")) {
          ft(nt, ct);
          continue;
        }
        if (fs.forceKeepAttr) continue;
        if (!fs.keepAttr) {
          ft(nt, ct);
          continue;
        }
        if (!xe && wi(/\/>/i, _s)) {
          ft(nt, ct);
          continue;
        }
        ye &&
          px([j, T, I], (Bs) => {
            _s = Af(_s, Bs, " ");
          });
        const qs = _t(ct.nodeName);
        if (!me(qs, bs, _s)) {
          ft(nt, ct);
          continue;
        }
        if (
          w &&
          typeof h == "object" &&
          typeof h.getAttributeType == "function" &&
          !It
        )
          switch (h.getAttributeType(qs, bs)) {
            case "TrustedHTML": {
              _s = w.createHTML(_s);
              break;
            }
            case "TrustedScriptURL": {
              _s = w.createScriptURL(_s);
              break;
            }
          }
        if (_s !== ss)
          try {
            (It ? ct.setAttributeNS(It, nt, _s) : ct.setAttribute(nt, _s),
              Qe(ct) ? at(ct) : vN(s.removed));
          } catch {
            ft(nt, ct);
          }
      }
      Ze(S.afterSanitizeAttributes, ct, null);
    },
    Pt = function Wt(ct) {
      let Kt = null;
      const fs = Oe(ct);
      for (Ze(S.beforeSanitizeShadowDOM, ct, null); (Kt = fs.nextNode()); )
        (Ze(S.uponSanitizeShadowNode, Kt, null),
          Ue(Kt),
          Gt(Kt),
          Kt.content instanceof i && Wt(Kt.content));
      Ze(S.afterSanitizeShadowDOM, ct, null);
    };
  return (
    (s.sanitize = function (Wt) {
      let ct =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        Kt = null,
        fs = null,
        gt = null,
        ae = null;
      if (((te = !Wt), te && (Wt = "<!-->"), typeof Wt != "string" && !Ye(Wt)))
        if (typeof Wt.toString == "function") {
          if (((Wt = Wt.toString()), typeof Wt != "string"))
            throw Cf("dirty is not a string, aborting");
        } else throw Cf("toString is not a function");
      if (!s.isSupported) return Wt;
      if (
        (ee || Ie(ct), (s.removed = []), typeof Wt == "string" && (W = !1), W)
      ) {
        if (Wt.nodeName) {
          const Xt = _t(Wt.nodeName);
          if (!z[Xt] || V[Xt])
            throw Cf("root node is forbidden and cannot be sanitized in-place");
        }
      } else if (Wt instanceof c)
        ((Kt = vt("<!---->")),
          (fs = Kt.ownerDocument.importNode(Wt, !0)),
          (fs.nodeType === Tf.element && fs.nodeName === "BODY") ||
          fs.nodeName === "HTML"
            ? (Kt = fs)
            : Kt.appendChild(fs));
      else {
        if (!Y && !ye && !oe && Wt.indexOf("<") === -1)
          return w && ce ? w.createHTML(Wt) : Wt;
        if (((Kt = vt(Wt)), !Kt)) return Y ? null : ce ? _ : "";
      }
      Kt && H && at(Kt.firstChild);
      const nt = Oe(W ? Wt : Kt);
      for (; (gt = nt.nextNode()); )
        (Ue(gt), Gt(gt), gt.content instanceof i && Pt(gt.content));
      if (W) return Wt;
      if (Y) {
        if (U)
          for (ae = C.call(Kt.ownerDocument); Kt.firstChild; )
            ae.appendChild(Kt.firstChild);
        else ae = Kt;
        return (
          (Z.shadowroot || Z.shadowrootmode) && (ae = E.call(a, ae, !0)),
          ae
        );
      }
      let It = oe ? Kt.outerHTML : Kt.innerHTML;
      return (
        oe &&
          z["!doctype"] &&
          Kt.ownerDocument &&
          Kt.ownerDocument.doctype &&
          Kt.ownerDocument.doctype.name &&
          wi(zA, Kt.ownerDocument.doctype.name) &&
          (It =
            "<!DOCTYPE " +
            Kt.ownerDocument.doctype.name +
            `>
` +
            It),
        ye &&
          px([j, T, I], (Xt) => {
            It = Af(It, Xt, " ");
          }),
        w && ce ? w.createHTML(It) : It
      );
    }),
    (s.setConfig = function () {
      let Wt =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      (Ie(Wt), (ee = !0));
    }),
    (s.clearConfig = function () {
      ((Ee = null), (ee = !1));
    }),
    (s.isValidAttribute = function (Wt, ct, Kt) {
      Ee || Ie({});
      const fs = _t(Wt),
        gt = _t(ct);
      return me(fs, gt, Kt);
    }),
    (s.addHook = function (Wt, ct) {
      typeof ct == "function" && _f(S[Wt], ct);
    }),
    (s.removeHook = function (Wt, ct) {
      if (ct !== void 0) {
        const Kt = DH(S[Wt], ct);
        return Kt === -1 ? void 0 : $H(S[Wt], Kt, 1)[0];
      }
      return vN(S[Wt]);
    }),
    (s.removeHooks = function (Wt) {
      S[Wt] = [];
    }),
    (s.removeAllHooks = function () {
      S = _N();
    }),
    s
  );
}
var PA = RA();
const ZH = {
  ALLOWED_TAGS: [
    "p",
    "br",
    "strong",
    "b",
    "em",
    "i",
    "u",
    "s",
    "strike",
    "del",
    "span",
    "a",
    "div",
    "ul",
    "ol",
    "li",
    "code",
    "pre",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "blockquote",
    "hr",
    "img",
    "sub",
    "sup",
    "mark",
    "small",
    "table",
    "thead",
    "tbody",
    "tr",
    "th",
    "td",
  ],
  ALLOWED_ATTR: [
    "href",
    "title",
    "alt",
    "src",
    "class",
    "target",
    "rel",
    "colspan",
    "rowspan",
  ],
};
let AN = !1;
function XH() {
  AN ||
    ((AN = !0),
    PA.addHook("afterSanitizeAttributes", (t) => {
      t.tagName === "A" &&
        t.getAttribute("target") === "_blank" &&
        t.setAttribute("rel", "noopener noreferrer");
    }));
}
function CN(t) {
  return (XH(), PA.sanitize(String(t ?? ""), ZH));
}
const eW = ({
    playlist: t,
    status: s,
    onAccept: n,
    onReject: a,
    isMe: r,
    disableAccept: i = !1,
  }) =>
    e.jsxs("div", {
      className:
        "invite-card w-64 bg-white rounded-[24px] overflow-hidden shadow-sm border border-[#f0f0f0] font-sans",
      children: [
        e.jsxs("div", {
          className:
            "invite-card-cover relative h-32 bg-[#f2f0ea] overflow-hidden",
          children: [
            (t == null ? void 0 : t.coverImgUrl) &&
              e.jsxs(e.Fragment, {
                children: [
                  e.jsx("img", {
                    src: t.coverImgUrl,
                    alt: "cover",
                    className:
                      "w-full h-full object-cover opacity-80 blur-sm scale-110",
                    loading: "lazy",
                  }),
                  e.jsx("div", { className: "absolute inset-0 bg-black/10" }),
                ],
              }),
            e.jsxs("div", {
              className:
                "absolute inset-0 flex flex-col items-center justify-center text-white p-4",
              children: [
                e.jsx("div", {
                  className:
                    "invite-card-icon w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-2 border border-white/30 shadow-lg",
                  children: e.jsx(m0, { size: 20, className: "text-white" }),
                }),
                e.jsx("span", {
                  className:
                    "invite-card-label text-sm font-medium tracking-wide drop-shadow-sm",
                  children: "一起听邀请",
                }),
              ],
            }),
          ],
        }),
        e.jsxs("div", {
          className: "invite-card-body p-5 text-center",
          children: [
            e.jsx("h3", {
              className:
                "invite-card-title text-[#4a4a4a] font-semibold text-sm mb-1 truncate px-2",
              children: (t == null ? void 0 : t.name) || "未知歌单",
            }),
            e.jsx("p", {
              className: "invite-card-subtitle text-[#8d6e63] text-xs mb-4",
              children:
                t != null && t.trackCount
                  ? `共 ${t.trackCount} 首歌曲`
                  : "精选歌单",
            }),
            s === "pending"
              ? r
                ? e.jsx("div", {
                    className:
                      "invite-card-waiting text-xs text-[#bcaaa4] bg-[#f5f5f5] py-2 px-4 rounded-full inline-block",
                    children: "等待对方响应...",
                  })
                : e.jsxs("div", {
                    className: "invite-card-actions flex gap-3 justify-center",
                    children: [
                      e.jsx("button", {
                        onClick: a,
                        className:
                          "invite-card-btn invite-card-btn-reject px-4 py-1.5 rounded-full border border-[#e0e0e0] text-xs text-[#8d6e63] hover:bg-[#f5f5f5] transition-colors",
                        children: "拒绝",
                      }),
                      e.jsx("button", {
                        onClick: (o) => {
                          if (i) {
                            (o.preventDefault(), o.stopPropagation());
                            return;
                          }
                          n == null || n();
                        },
                        disabled: i,
                        className: `invite-card-btn invite-card-btn-accept px-4 py-1.5 rounded-full bg-[#8d6e63] text-white text-xs shadow-md transition-colors ${i ? "cursor-not-allowed opacity-60 hover:bg-[#8d6e63]" : "hover:bg-[#795548]"}`,
                        children: "加入",
                      }),
                    ],
                  })
              : e.jsx("div", {
                  className:
                    "invite-card-status text-xs text-[#8d6e63] flex items-center justify-center gap-1",
                  children:
                    s === "accepted"
                      ? e.jsxs(e.Fragment, {
                          children: [
                            e.jsx("span", {
                              className:
                                "invite-card-status-dot w-1.5 h-1.5 rounded-full bg-green-400",
                            }),
                            "已开始一起听",
                          ],
                        })
                      : e.jsxs(e.Fragment, {
                          children: [
                            e.jsx("span", {
                              className:
                                "invite-card-status-dot w-1.5 h-1.5 rounded-full bg-red-400",
                            }),
                            "已拒绝",
                          ],
                        }),
                }),
          ],
        }),
      ],
    }),
  tW = ({ text: t, type: s = "info" }) =>
    e.jsx("div", {
      className: "flex justify-center my-2",
      children: e.jsxs("div", {
        className:
          "status-card bg-[#fffcf7] border border-[#f0f0f0] rounded-full px-4 py-1.5 flex items-center gap-2 shadow-sm",
        children: [
          s === "music" &&
            e.jsx(vr, {
              size: 12,
              className: "status-card-icon text-[#8d6e63]",
            }),
          e.jsx("span", {
            className:
              "status-card-text text-[10px] text-[#8d6e63] font-medium",
            children: t,
          }),
        ],
      }),
    }),
  sW = ({
    show: t,
    onClose: s,
    contact: n,
    chatId: a,
    onUpdateContact: r,
    sendMessage: i,
    onCancelFingerprintRequest: o,
  }) => {
    const [c, d] = l.useState("password"),
      u = n.fingerprintStatus || "none",
      f = () => {
        a &&
          (i(
            a,
            "[系统请求] 用户申请开通指纹解锁功能",
            null,
            "system_fingerprint_request",
            { status: "pending" },
          ),
          r(n.id, { fingerprintStatus: "pending" }));
      };
    return t
      ? e.jsx("div", {
          className:
            "absolute inset-0 z-[90] bg-black/20 backdrop-blur-sm flex items-end justify-center animate-in fade-in duration-200",
          onClick: s,
          children: e.jsxs("div", {
            className:
              "w-full h-[60vh] bg-[#fffcf7] rounded-t-[32px] p-6 animate-in slide-in-from-bottom duration-300 shadow-2xl border-t border-white/50 flex flex-col",
            onClick: (p) => p.stopPropagation(),
            children: [
              e.jsx("div", {
                className: "flex justify-center mb-4",
                onClick: s,
                children: e.jsx("div", {
                  className: "w-12 h-1 bg-gray-200 rounded-full cursor-pointer",
                }),
              }),
              e.jsxs("div", {
                className: "mb-6 flex items-center justify-between",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx("h3", {
                        className: "text-lg font-bold text-[#5d4037]",
                        children: "安全中心",
                      }),
                      e.jsx("p", {
                        className: "text-xs text-gray-400",
                        children: "密码记录与生物识别",
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className: "p-2 bg-[#f2f0ea] text-[#8d6e63] rounded-full",
                    children: e.jsx(lr, { size: 20 }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex p-1 bg-[#f2f0ea] rounded-xl mb-6",
                children: [
                  e.jsx("button", {
                    onClick: () => d("password"),
                    className: `flex-1 py-2 text-xs font-bold rounded-lg transition-all ${c === "password" ? "bg-white text-[#5d4037] shadow-sm" : "text-gray-400 hover:text-gray-600"}`,
                    children: "密码记录",
                  }),
                  e.jsx("button", {
                    onClick: () => d("fingerprint"),
                    className: `flex-1 py-2 text-xs font-bold rounded-lg transition-all ${c === "fingerprint" ? "bg-white text-[#5d4037] shadow-sm" : "text-gray-400 hover:text-gray-600"}`,
                    children: "指纹解锁",
                  }),
                ],
              }),
              e.jsx("div", {
                className: "flex-1 overflow-y-auto no-scrollbar",
                children: e.jsx(Os, {
                  mode: "wait",
                  children:
                    c === "password"
                      ? e.jsxs(
                          We.div,
                          {
                            initial: { opacity: 0, x: -10 },
                            animate: { opacity: 1, x: 0 },
                            exit: { opacity: 0, x: 10 },
                            className: "space-y-6",
                            children: [
                              (() => {
                                const m = (n.passwordHistory || [])[0],
                                  h =
                                    (m == null ? void 0 : m.source) ===
                                      "got_from_ai" ||
                                    (m == null ? void 0 : m.source) ===
                                      "manual";
                                return e.jsxs("div", {
                                  className:
                                    "rounded-2xl overflow-hidden border border-[#efebe9] shadow-sm bg-[#fffcf7]",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "bg-[#8d6e63] px-4 py-2.5 flex items-center gap-2",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "p-1 bg-white/20 rounded-lg",
                                          children: e.jsx(lr, {
                                            size: 14,
                                            className: "text-white",
                                          }),
                                        }),
                                        e.jsx("span", {
                                          className:
                                            "text-[11px] font-bold text-white/95 uppercase tracking-widest",
                                          children: "当前使用",
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className: "p-5 relative",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "absolute inset-0 opacity-[0.04]",
                                          style: {
                                            backgroundImage:
                                              "radial-gradient(#8d6e63 1px, transparent 1px)",
                                            backgroundSize: "8px 8px",
                                          },
                                        }),
                                        e.jsx("div", {
                                          className:
                                            "relative flex flex-col items-center justify-center py-4 px-5 bg-[#faf8f5] rounded-xl border-2 border-dashed border-[#d7ccc8]",
                                          children: h
                                            ? e.jsx("span", {
                                                className:
                                                  "text-2xl font-mono font-bold text-[#5d4037] tracking-[0.25em]",
                                                children:
                                                  n.phonePassword || "------",
                                              })
                                            : e.jsxs(e.Fragment, {
                                                children: [
                                                  e.jsx("span", {
                                                    className:
                                                      "text-2xl font-mono font-bold text-[#bdbdbd] tracking-[0.25em]",
                                                    children: "••••••",
                                                  }),
                                                  e.jsx("p", {
                                                    className:
                                                      "text-[10px] text-[#8d6e63] mt-2 text-center",
                                                    children:
                                                      "在聊天中向对方询问密码后可在此查看",
                                                  }),
                                                ],
                                              }),
                                        }),
                                        e.jsx("p", {
                                          className:
                                            "text-[10px] text-[#bdbdbd] text-center mt-2",
                                          children: h
                                            ? "用于解锁对方手机"
                                            : "尚未获取密码",
                                        }),
                                      ],
                                    }),
                                  ],
                                });
                              })(),
                              (n.passwordHistory || []).length > 0 &&
                                e.jsxs("div", {
                                  className:
                                    "rounded-2xl overflow-hidden border border-[#efebe9] bg-[#fffcf7]",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "bg-[#f2f0ea] px-4 py-2.5 border-b border-[#efebe9]",
                                      children: e.jsx("span", {
                                        className:
                                          "text-[11px] font-bold text-[#8d6e63] uppercase tracking-widest",
                                        children: "历史记录",
                                      }),
                                    }),
                                    e.jsx("ul", {
                                      className:
                                        "p-3 space-y-2.5 max-h-44 overflow-y-auto no-scrollbar",
                                      children: (n.passwordHistory || []).map(
                                        (p, m) =>
                                          e.jsxs(
                                            "li",
                                            {
                                              className:
                                                "flex items-center gap-3 py-3 px-4 rounded-xl bg-[#faf8f5] border border-[#efebe9] hover:border-[#d7ccc8] transition-colors",
                                              children: [
                                                e.jsx("div", {
                                                  className:
                                                    "w-8 h-8 rounded-lg bg-[#8d6e63]/10 flex items-center justify-center flex-shrink-0",
                                                  children: e.jsx(lr, {
                                                    size: 12,
                                                    className: "text-[#8d6e63]",
                                                  }),
                                                }),
                                                e.jsx("span", {
                                                  className:
                                                    "flex-1 font-mono font-bold text-[#5d4037] tracking-[0.15em] text-base",
                                                  children:
                                                    p.source ===
                                                    "failed_unlock_attempt"
                                                      ? `${p.userName || "有人"} 尝试解锁`
                                                      : p.source ===
                                                          "ai_changed"
                                                        ? "对方已更换"
                                                        : p.password,
                                                }),
                                                e.jsx("span", {
                                                  className:
                                                    "text-[10px] font-medium px-2.5 py-1 rounded-full bg-[#efebe9] text-[#6d4c41]",
                                                  children:
                                                    p.source === "got_from_ai"
                                                      ? "来自对方"
                                                      : p.source ===
                                                          "ai_changed"
                                                        ? "对方修改"
                                                        : p.source ===
                                                            "failed_unlock_attempt"
                                                          ? "解锁失败"
                                                          : "记录",
                                                }),
                                              ],
                                            },
                                            p.timestamp + m,
                                          ),
                                      ),
                                    }),
                                  ],
                                }),
                              e.jsx("div", {
                                className: "px-2",
                                children: e.jsxs("p", {
                                  className:
                                    "text-[10px] text-gray-400 leading-relaxed",
                                  children: [
                                    "密码只能由对方决定：在聊天中向 ",
                                    n.name,
                                    " ",
                                    "询问可获取密码，或请对方修改密码，对方同意后会自动记录在上方，最新在最上。",
                                  ],
                                }),
                              }),
                            ],
                          },
                          "password",
                        )
                      : e.jsxs(
                          We.div,
                          {
                            initial: { opacity: 0, x: 10 },
                            animate: { opacity: 1, x: 0 },
                            exit: { opacity: 0, x: -10 },
                            className: "space-y-6",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "flex flex-col items-center justify-center py-8",
                                children: [
                                  e.jsxs("div", {
                                    className: `w-24 h-24 rounded-full flex items-center justify-center mb-6 transition-colors relative ${u === "approved" || u === "pending" ? "bg-[#f2f0ea] text-[#8d6e63]" : u === "rejected" ? "bg-[#efebe9] text-[#6d4c41]" : "bg-[#f2f0ea] text-[#bdbdbd]"}`,
                                    children: [
                                      e.jsx(Bi, { size: 48, strokeWidth: 1.5 }),
                                      u === "approved" &&
                                        e.jsx("div", {
                                          className:
                                            "absolute bottom-0 right-0 bg-[#8d6e63] text-white p-1.5 rounded-full border-4 border-[#fffcf7]",
                                          children: e.jsx(On, {
                                            size: 14,
                                            strokeWidth: 3,
                                          }),
                                        }),
                                    ],
                                  }),
                                  e.jsx("h4", {
                                    className:
                                      "text-lg font-bold text-[#5d4037] mb-2",
                                    children:
                                      u === "approved"
                                        ? "指纹解锁已开通"
                                        : u === "pending"
                                          ? "申请审核中"
                                          : u === "rejected"
                                            ? "申请被拒绝"
                                            : "未开通指纹解锁",
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "text-xs text-gray-400 text-center max-w-[240px] leading-relaxed",
                                    children:
                                      u === "approved"
                                        ? "现在你可以使用指纹直接进入手机，无需输入密码。"
                                        : u === "pending"
                                          ? `正在等待 ${n.name} 的审核...`
                                          : u === "rejected"
                                            ? `${n.name} 拒绝了你的申请。你可以尝试提升亲密度后再次申请。`
                                            : "开通后可免密进入手机界面",
                                  }),
                                ],
                              }),
                              u === "none" || u === "rejected"
                                ? e.jsxs("button", {
                                    onClick: f,
                                    className:
                                      "w-full py-4 bg-[#8d6e63] text-white rounded-2xl font-bold text-sm shadow-lg hover:bg-[#795548] hover:scale-[1.02] transition-all active:scale-95 flex items-center justify-center gap-2",
                                    children: [
                                      e.jsx(Gm, { size: 18 }),
                                      "申请开通指纹解锁",
                                    ],
                                  })
                                : u === "pending"
                                  ? e.jsxs("div", {
                                      className: "space-y-3",
                                      children: [
                                        e.jsxs("div", {
                                          className:
                                            "w-full py-4 bg-[#faf8f5] text-[#8d6e63] rounded-2xl font-bold text-sm flex items-center justify-center gap-2 border border-[#efebe9]",
                                          children: [
                                            e.jsx("div", {
                                              className:
                                                "w-4 h-4 border-2 border-[#8d6e63] border-t-transparent rounded-full animate-spin",
                                            }),
                                            "等待审核中...",
                                          ],
                                        }),
                                        o &&
                                          e.jsx("button", {
                                            type: "button",
                                            onClick: o,
                                            className:
                                              "w-full py-3 border border-[#d7ccc8] text-[#8d6e63] rounded-2xl font-bold text-sm hover:bg-[#f2f0ea] transition-colors",
                                            children: "取消申请",
                                          }),
                                      ],
                                    })
                                  : e.jsxs("div", {
                                      className:
                                        "w-full py-4 bg-[#f2f0ea] text-[#5d4037] border border-[#e0dcd6] rounded-2xl font-bold text-sm flex items-center justify-center gap-2",
                                      children: [
                                        e.jsx(On, {
                                          size: 18,
                                          strokeWidth: 3,
                                          className: "text-[#8d6e63]",
                                        }),
                                        "已开通",
                                      ],
                                    }),
                              e.jsxs("div", {
                                className:
                                  "bg-[#faf8f5] p-4 rounded-2xl border border-[#efebe9]",
                                children: [
                                  e.jsxs("h5", {
                                    className:
                                      "text-[10px] font-bold text-[#8d6e63] uppercase tracking-widest mb-3 flex items-center gap-1.5",
                                    children: [
                                      e.jsx(aW, { size: 12 }),
                                      "申请说明",
                                    ],
                                  }),
                                  e.jsxs("ul", {
                                    className:
                                      "text-[10px] text-[#6d4c41] space-y-2 list-disc pl-4 leading-relaxed",
                                    children: [
                                      e.jsxs("li", {
                                        children: [
                                          "需要与 ",
                                          n.name,
                                          " 达到一定的亲密度",
                                        ],
                                      }),
                                      e.jsxs("li", {
                                        children: [
                                          "申请发送后，",
                                          n.name,
                                          " 会收到通知卡片",
                                        ],
                                      }),
                                      e.jsxs("li", {
                                        children: [
                                          n.name,
                                          " 会根据当前关系决定是否同意",
                                        ],
                                      }),
                                      e.jsx("li", {
                                        children:
                                          "同意后，在锁屏界面点击指纹图标即可解锁",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          "fingerprint",
                        ),
                }),
              }),
            ],
          }),
        })
      : null;
  },
  nW = ({ message: t, onAction: s, isMe: n }) => {
    var c;
    const a =
        ((c = t == null ? void 0 : t.content) == null ? void 0 : c.status) ??
        (t == null ? void 0 : t.status) ??
        "pending",
      r = a === "pending",
      i = a === "approved",
      o = a === "cancelled";
    return e.jsxs("div", {
      className: `message-card-password ${n ? "from-me" : "from-other"} w-56 bg-[#fffcf7] rounded-[20px] overflow-hidden shadow-md border border-[#efebe9]`,
      children: [
        e.jsxs("div", {
          className:
            "message-card-password-header bg-[#8d6e63] px-3 py-2.5 flex items-center justify-between",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-2 text-white",
              children: [
                e.jsx("div", {
                  className: "p-1.5 bg-white/20 rounded-lg backdrop-blur-sm",
                  children: e.jsx(Bi, { size: 14, strokeWidth: 2 }),
                }),
                e.jsx("span", {
                  className: "text-xs font-bold tracking-widest uppercase",
                  children: "指纹解锁申请",
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex gap-1",
              children: [
                e.jsx("div", {
                  className: "w-1.5 h-1.5 rounded-full bg-white/40",
                }),
                e.jsx("div", {
                  className: "w-1.5 h-1.5 rounded-full bg-white/40",
                }),
              ],
            }),
          ],
        }),
        e.jsxs("div", {
          className:
            "message-card-password-content p-4 flex flex-col items-center gap-3 relative",
          children: [
            e.jsx("div", {
              className: "absolute inset-0 opacity-5",
              style: {
                backgroundImage:
                  "radial-gradient(#8d6e63 1px, transparent 1px)",
                backgroundSize: "10px 10px",
              },
            }),
            e.jsx("p", {
              className:
                "text-[10px] text-[#8d6e63] font-medium uppercase tracking-wider text-center",
              children: r
                ? n
                  ? "已发送申请，等待对方回复"
                  : "用户申请开通指纹解锁，开通后可免密进入手机"
                : i
                  ? "已同意开通"
                  : o
                    ? "已取消申请"
                    : "已拒绝申请",
            }),
            r
              ? !n && s
                ? e.jsxs("div", {
                    className: "flex gap-2 w-full",
                    children: [
                      e.jsx("button", {
                        onClick: () => s("reject"),
                        className:
                          "flex-1 py-2.5 border border-[#d7ccc8] rounded-xl text-xs font-bold text-[#5d4037] hover:bg-[#efebe9] transition-colors",
                        children: "拒绝",
                      }),
                      e.jsx("button", {
                        onClick: () => s("approve"),
                        className:
                          "flex-1 py-2.5 bg-[#8d6e63] text-white rounded-xl text-xs font-bold shadow-sm hover:bg-[#795548] transition-colors",
                        children: "同意",
                      }),
                    ],
                  })
                : e.jsxs("div", {
                    className:
                      "w-full py-2.5 px-4 rounded-xl text-[10px] font-medium text-[#8d6e63] bg-[#faf8f5] border border-[#efebe9] flex items-center justify-center gap-1.5",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-3 h-3 border-2 border-[#8d6e63] border-t-transparent rounded-full animate-spin",
                      }),
                      "等待审核",
                    ],
                  })
              : e.jsxs("div", {
                  className: `w-full py-2.5 px-4 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5 ${i ? "bg-[#f2f0ea] text-[#5d4037] border border-[#e0dcd6]" : o ? "bg-[#f5f5f5] text-[#6d4c41] border border-[#e0e0e0]" : "bg-[#efebe9] text-[#5d4037] border border-[#d7ccc8]"}`,
                  children: [
                    i
                      ? e.jsx(On, {
                          size: 14,
                          strokeWidth: 3,
                          className: "text-[#8d6e63]",
                        })
                      : o
                        ? null
                        : e.jsx(V0, { size: 14, className: "text-[#6d4c41]" }),
                    i ? "已同意申请" : o ? "已取消申请" : "已拒绝申请",
                  ],
                }),
          ],
        }),
      ],
    });
  },
  aW = ({ size: t = 24, className: s = "" }) =>
    e.jsxs("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: t,
      height: t,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: s,
      children: [
        e.jsx("circle", { cx: "12", cy: "12", r: "10" }),
        e.jsx("line", { x1: "12", y1: "16", x2: "12", y2: "12" }),
        e.jsx("line", { x1: "12", y1: "8", x2: "12.01", y2: "8" }),
      ],
    }),
  If = TH(),
  rW = ({ size: t = 12, className: s = "" }) =>
    e.jsxs("svg", {
      width: t,
      height: t,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: s,
      "aria-hidden": "true",
      focusable: "false",
      children: [
        e.jsx("path", {
          d: "M4 20h3.9c.42 0 .82-.17 1.12-.46l9.92-9.92a1.6 1.6 0 0 0 0-2.26l-2.22-2.22a1.6 1.6 0 0 0-2.26 0L4.46 15.06c-.29.3-.46.7-.46 1.12V20Z",
          stroke: "currentColor",
          strokeWidth: "1.6",
          strokeLinejoin: "round",
        }),
        e.jsx("path", {
          d: "M13.2 6.8l4 4",
          stroke: "currentColor",
          strokeWidth: "1.6",
          strokeLinecap: "round",
        }),
        e.jsx("path", {
          d: "M4 20l4.4-1.02",
          stroke: "currentColor",
          strokeWidth: "1.6",
          strokeLinecap: "round",
        }),
        e.jsx("path", {
          d: "M15.3 4.7l3.95 3.95",
          stroke: "currentColor",
          strokeWidth: "1",
          strokeLinecap: "round",
          opacity: "0.55",
        }),
        e.jsx("path", {
          d: "M7.4 19.2l-2.6-2.6",
          stroke: "currentColor",
          strokeWidth: "1",
          strokeLinecap: "round",
          opacity: "0.55",
        }),
      ],
    }),
  OA = l.forwardRef(
    (
      {
        chat: t,
        contact: s,
        contacts: n = [],
        user: a,
        selectedMessageIds: r,
        selectionMode: i,
        handleTouchStart: o,
        handleTouchEnd: c,
        toggleSelection: d,
        setShowRecallInfo: u,
        onViewContact: f,
        expandedMessages: p,
        toggleVoiceExpansion: m,
        isPlaying: h,
        stopTTS: g,
        playTTS: x,
        updateMessage: y,
        playingMessageId: v,
        showTranslationIds: b,
        toggleTranslation: N,
        scrollToMessage: w,
        messagesEndRef: _,
        onQuoteMessage: A,
        onCancelLongPress: k,
        handleTransferAction: C,
        setShowTransferActionModal: M,
        setShowPayForMeActionModal: E,
        onAcceptListen: S,
        onRejectListen: j,
        onOpenGashaponDetail: T,
        onOpenForwardChatDetail: I,
        onFingerprintAction: L,
        getSpace: B,
        externalScrollContainerRef: F,
        onVotePoll: D,
        onRequestAddRelayItem: $,
        onAddRelayItem: P,
        onOpenRedPacketDetail: z,
        onGroupMemberClick: O,
        onGroupMemberLongPress: Z,
        onUserAvatarClick: K,
        isGroupChat: q,
        onGroupVoiceTTSNotConfigured: V,
        handleCoupleAvatarAccept: ne,
        handleCoupleAvatarReject: le,
        updateChatSettings: ie,
        justSentMessageId: X,
        justReceivedMessageId: je,
      },
      xe,
    ) => {
      var Pt, Wt, ct, Kt, fs, gt;
      const [ye, R] = l.useState(null),
        [oe, ee] = l.useState(0),
        [H, Y] = l.useState(null),
        [U, ce] = l.useState(null),
        pe = l.useRef(0),
        se = l.useRef(0),
        Te = l.useRef(0),
        ke = l.useRef(null),
        W = l.useRef({ id: null, at: 0 }),
        ue =
          ((Pt = t == null ? void 0 : t.settings) == null
            ? void 0
            : Pt.blockedRoles) || {},
        re =
          !q && s != null && s.id ? (ue == null ? void 0 : ue[s.id]) : void 0,
        he =
          !q &&
          (s == null ? void 0 : s.id) &&
          re != null &&
          (typeof re == "number" ||
            (typeof re == "object" &&
              (re == null ? void 0 : re.unblockedAt) == null)),
        ge = !!(
          (Wt = t == null ? void 0 : t.settings) != null &&
          Wt.translationEnabled
        ),
        J = !!(
          (ct = t == null ? void 0 : t.settings) != null &&
          ct.translationAlwaysShow
        ),
        G = (ae, nt) =>
          nt && X && String(ae == null ? void 0 : ae.id) === String(X)
            ? "chat-qq-bubble-pop-in"
            : "animate-in slide-in-from-bottom-2 duration-500",
        we = (ae, nt, It) =>
          It || !nt
            ? ""
            : je && String(ae == null ? void 0 : ae.id) === String(je)
              ? "chat-qq-avatar-pop-in"
              : "",
        Q = (ae, nt, It) =>
          It
            ? ""
            : je && String(ae == null ? void 0 : ae.id) === String(je)
              ? nt
                ? "chat-qq-bubble-slide-in-left chat-qq-bubble-slide-in-left--after-avatar"
                : "chat-qq-bubble-slide-in-left"
              : "",
        ve = l.useCallback(
          (ae) => {
            typeof window > "u" ||
              window.dispatchEvent(
                new CustomEvent("season_journey_open_from_chat", {
                  detail: {
                    action: ae,
                    contactId: (s == null ? void 0 : s.id) || null,
                    chatId: (t == null ? void 0 : t.id) || null,
                  },
                }),
              );
          },
          [t == null ? void 0 : t.id, s == null ? void 0 : s.id],
        ),
        Ve = (ae, nt) => {
          if (!ae) return;
          const It = Date.now(),
            Xt = W.current || {};
          (Xt.id === ae && It - (Xt.at || 0) < 800) ||
            ((W.current = { id: ae, at: It }),
            ke.current && (clearTimeout(ke.current), (ke.current = null)),
            Z == null || Z(ae, nt));
        },
        Ae = t.messages || [],
        te = Ae.length,
        [Se, Fe] = l.useState(If),
        $e = l.useRef(null),
        tt = F ?? $e,
        Xe = l.useRef(null),
        ht = l.useRef(null),
        Pe = (ae) => {
          if (!ae) return;
          const nt = Ae.findIndex((Xt) => Xt.id === ae);
          if (nt === -1) {
            w(ae);
            return;
          }
          const It = te - nt;
          if (Se >= It) {
            w(ae);
            return;
          }
          ((ht.current = ae), Fe((Xt) => Math.max(Xt, It)));
        };
      (l.useEffect(() => {
        const ae = ht.current;
        if (!ae) return;
        ht.current = null;
        const nt = () => {
          const It = document.getElementById(`msg-${ae}`);
          It &&
            (It.scrollIntoView({ behavior: "smooth", block: "center" }),
            It.classList.add("bg-blue-50/50"),
            setTimeout(() => It.classList.remove("bg-blue-50/50"), 2e3));
        };
        requestAnimationFrame(() => requestAnimationFrame(nt));
      }, [Se]),
        l.useEffect(() => {
          Fe((ae) => Math.min(If, Math.max(ae, te)));
        }, [t.id, te]));
      const ut = l.useMemo(() => (te <= If ? Ae : Ae.slice(-Se)), [Ae, te, Se]),
        _t = l.useCallback(
          (ae) => {
            var Xt, bs;
            if (!ae) return "?";
            const nt =
              (bs =
                (Xt = t == null ? void 0 : t.settings) == null
                  ? void 0
                  : Xt.memberTitles) == null
                ? void 0
                : bs[ae];
            if (nt) return nt;
            const It = (n || []).find((ss) => ss.id === ae);
            return (
              (It == null ? void 0 : It.remark) ||
              (It == null ? void 0 : It.nickname) ||
              (It == null ? void 0 : It.name) ||
              "?"
            );
          },
          [
            (Kt = t == null ? void 0 : t.settings) == null
              ? void 0
              : Kt.memberTitles,
            n,
          ],
        ),
        Ee = l.useCallback(
          (ae) => {
            if (!q)
              return (
                (s == null ? void 0 : s.nickname) ||
                (s == null ? void 0 : s.name) ||
                ""
              );
            let nt = ae.targetContactId;
            return (
              (nt == null || nt === "") &&
                ae.sender === "me" &&
                ae.contactId &&
                ae.type === "food_delivery" &&
                (nt = ae.contactId),
              nt == null || nt === ""
                ? (a == null ? void 0 : a.name) || "你"
                : _t(nt)
            );
          },
          [q, s, a == null ? void 0 : a.name, _t],
        ),
        fe = l.useCallback(
          (ae) => {
            if (!ae) return "";
            if (!q)
              return (
                (s == null ? void 0 : s.nickname) ||
                (s == null ? void 0 : s.name) ||
                (a == null ? void 0 : a.name) ||
                "你"
              );
            let nt = ae.targetContactId;
            return (
              (nt == null || nt === "") &&
                ae.sender === "me" &&
                ae.contactId &&
                ae.type === "transfer" &&
                (nt = ae.contactId),
              nt == null || nt === ""
                ? (a == null ? void 0 : a.name) || "你"
                : _t(nt)
            );
          },
          [q, s, a == null ? void 0 : a.name, _t],
        ),
        He = l.useCallback(
          (ae) => {
            if (!ae || ae.type !== "transfer" || ae.status !== "pending")
              return !1;
            if (!q) return !0;
            const nt = ae.targetContactId;
            return nt == null || nt === "" || nt === "me";
          },
          [q],
        ),
        Ie = te > If && Se < te,
        Ce = () => {
          !Ie ||
            !tt.current ||
            (tt.current.scrollTop < 80 &&
              ((Xe.current = {
                prevScrollHeight: tt.current.scrollHeight,
                prevScrollTop: tt.current.scrollTop,
              }),
              Fe((ae) => Math.min(ae + If, te))));
        };
      (l.useImperativeHandle(xe, () => ({ onScroll: Ce }), [Ie, te, Se]),
        l.useEffect(() => {
          const ae = tt.current,
            nt = Xe.current;
          if (!ae || !nt) return;
          Xe.current = null;
          const It = nt.prevScrollTop + (ae.scrollHeight - nt.prevScrollHeight);
          requestAnimationFrame(() => {
            ae.scrollHeight && (ae.scrollTop = It);
          });
        }, [Se]));
      const Re = (ae) => (ae.touches ? ae.touches[0].clientX : ae.clientX),
        De = (ae) => (ae.touches ? ae.touches[0].clientY : ae.clientY),
        at = (ae) =>
          ae &&
          ae
            .replace(/^[\[［]语音消息[\]］]\s*/i, "")
            .replace(/[\[［]语音消息[\]］]/gi, "")
            .replace(/^\[voice\]\s*/i, "")
            .replace(/^\[VOICE\]\s*/i, "")
            .replace(/\[VOICE\](.*?)\[\/VOICE\]/gi, "$1")
            .replace(/\[voice\](.*?)\[\/voice\]/gi, "$1")
            .replace(/\s*\[\/VOICE\]\s*$/i, "")
            .replace(/\s*\[\/voice\]\s*$/i, "")
            .replace(/\s*\|\s*\|\s*|｜｜/g, " ")
            .replace(/\s+/g, " ")
            .trim(),
        ft = (ae) =>
          !ae || typeof ae != "string"
            ? ae
            : ae
                .replace(/\s*\[HEART_VOICE\][\s\S]*?\[\/HEART_VOICE\]\s*/g, "")
                .replace(/\s*\[HEART_VOICE\][\s\S]*$/g, "")
                .trim(),
        vt =
          "chat-message-html whitespace-pre-wrap break-words [&_a]:text-[#6d4c41] [&_a]:underline [&_img]:max-w-full [&_img]:h-auto [&_img]:inline-block [&_img]:align-text-bottom",
        Oe = (ae, nt = []) => {
          if (!ae) return null;
          const Xt = ((_s) => {
              const qs = String(_s || "");
              return qs.includes("@")
                ? qs.replace(/@(\d{6,})/g, (Bs, Js) => {
                    const Xs = _t == null ? void 0 : _t(String(Js));
                    return Xs && Xs !== "?" ? `@${Xs}` : Bs;
                  })
                : qs;
            })(ae),
            bs = (_s, qs) =>
              _s
                ? e.jsx(
                    "span",
                    {
                      className: vt,
                      dangerouslySetInnerHTML: { __html: CN(_s) },
                    },
                    qs,
                  )
                : null;
          if (!nt || nt.length === 0) return bs(Xt, "full");
          const ss = Xt.split(/(\[表情包:\s*[^\]]+\])/g);
          return e.jsx(e.Fragment, {
            children: ss.map((_s, qs) => {
              const Bs = _s.match(/^\[表情包:\s*(.+?)\]$/);
              if (Bs) {
                const Js = Bs[1].trim(),
                  Xs = nt.find((gn) => gn.name === Js);
                if (Xs)
                  return e.jsx(
                    "img",
                    {
                      src: Xs.url,
                      alt: Js,
                      className:
                        "inline-block w-16 h-16 object-contain align-bottom mx-1",
                      loading: "lazy",
                    },
                    qs,
                  );
              }
              return bs(_s, qs);
            }),
          });
        },
        Qe = (ae, nt) => {
          i ||
            ((pe.current = Re(ae)),
            (se.current = De(ae)),
            (Te.current = ye === nt ? oe : 0),
            ye && ye !== nt && (R(null), ee(0)));
        },
        Ye = (ae, nt) => {
          if (i) return;
          const It = Re(ae) - pe.current,
            Xt = De(ae) - se.current;
          if (
            ((Math.abs(It) > 5 || Math.abs(Xt) > 5) && (k == null || k()),
            ye === nt)
          ) {
            const bs = Math.max(-56, Math.min(0, Te.current + It));
            ee(bs);
          } else
            It < -12 &&
              Math.abs(It) > Math.abs(Xt) &&
              (R(nt), (Te.current = 0), ee(Math.max(-56, It)));
        },
        Ze = (ae) => {
          if (ye === ae) {
            if (oe < -56 / 2) {
              navigator.vibrate && navigator.vibrate(50);
              const nt = (Ae || []).find((It) => It && It.id === ae);
              dp(nt) && (A == null || A(ae));
            }
            (ee(0), R(null));
          }
        },
        Ue = (ae) => {
          if (!ae) return "";
          const nt = new Date(ae),
            It = new Date(),
            Xt =
              nt.getDate() === It.getDate() &&
              nt.getMonth() === It.getMonth() &&
              nt.getFullYear() === It.getFullYear(),
            bs = new Date(It);
          bs.setDate(It.getDate() - 1);
          const ss =
              nt.getDate() === bs.getDate() &&
              nt.getMonth() === bs.getMonth() &&
              nt.getFullYear() === bs.getFullYear(),
            _s = nt.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: !1,
            });
          if (Xt) return _s;
          if (ss) return `昨天 ${_s}`;
          {
            const qs = nt.getFullYear(),
              Bs = nt.getMonth() + 1,
              Js = nt.getDate();
            return qs === It.getFullYear()
              ? `${Bs}/${Js} ${_s}`
              : `${qs}/${Bs}/${Js} ${_s}`;
          }
        },
        me = (fs = t.messages) == null ? void 0 : fs[t.messages.length - 1],
        jt =
          me &&
          (me.type === "moment" ||
            (me.type === "text" && (me.text || "").startsWith("[转发朋友圈]"))),
        Gt = !!F;
      return e.jsxs("div", {
        ref: Gt ? void 0 : $e,
        onScroll: Gt ? void 0 : Ce,
        "data-ins-bubble":
          (gt = t == null ? void 0 : t.settings) != null && gt.insBubble
            ? "true"
            : void 0,
        className: `flex-1 min-h-0 px-2 py-4 ${jt ? "pb-2" : "pb-6"} no-scrollbar space-y-2 relative z-10 ${Gt ? "" : "overflow-y-auto overscroll-contain"}`,
        style: {
          touchAction: "pan-y",
          ...(Gt ? {} : { WebkitOverflowScrolling: "touch" }),
        },
        children: [
          Ie &&
            e.jsx("div", {
              className: "flex justify-center py-2 text-xs text-gray-400",
              children: "上滑加载更多消息",
            }),
          ut.map((ae, nt) => {
            var pi, ii, Br, kt, Tt, Yt, de, Me, et, Ct, Dt, Mt, Ut, ws, Ls;
            const It = ae.sender === "me",
              Xt = r.includes(ae.id),
              bs = ut[nt - 1],
              ss = ut[nt + 1],
              _s = (bs == null ? void 0 : bs.type) === "time_advance",
              qs = (ss == null ? void 0 : ss.type) === "time_advance",
              Bs = !!(bs != null && bs.isRecalled),
              Js = !!(ss != null && ss.isRecalled),
              Xs =
                !bs ||
                _s ||
                Bs ||
                bs.sender !== ae.sender ||
                new Date(ae.timestamp) - new Date(bs.timestamp) > 5 * 60 * 1e3,
              gn =
                !ss ||
                qs ||
                Js ||
                ss.sender !== ae.sender ||
                new Date(ss.timestamp) - new Date(ae.timestamp) > 5 * 60 * 1e3,
              sn = !Xs && !gn,
              ln = Xs && gn,
              rn = (t == null ? void 0 : t.isGroup) === !0,
              wt = rn ? Nw(t, ae, n, s, a, Xs) : null,
              xs = wt ? wt.showAvatar : Xs;
            if (
              ae.text === "[系统提示：用户发起了视频通话]" ||
              (ae.text && ae.text.startsWith("视频通话结束，时长"))
            )
              return null;
            const ot = ae.type === "time_advance",
              $t =
                !!(
                  (pi = t == null ? void 0 : t.settings) != null && pi.realTime
                ) &&
                (nt === 0 ||
                  new Date(ae.timestamp) - new Date(ut[nt - 1].timestamp) >
                    5 * 60 * 1e3);
            let Ft = "";
            ln
              ? (Ft = "group-single")
              : Xs
                ? (Ft = "group-first")
                : sn
                  ? (Ft = "group-middle")
                  : gn && (Ft = "group-last");
            const es = gn ? "mb-2" : "mb-0.5",
              At =
                (ae == null ? void 0 : ae.id) != null
                  ? String(ae.id)
                  : `idx-${nt}`;
            if (ot) {
              const Ot = !!(ae.note && ae.note.trim()),
                rs = H === ae.id;
              return e.jsxs(
                "div",
                {
                  id: `msg-${ae.id}`,
                  className: `${es} flex flex-col items-center justify-center relative`,
                  children: [
                    e.jsx("div", {
                      className: "flex justify-center mb-6 mt-2 w-full",
                      onTouchStart: () => !i && o(ae.id),
                      onTouchEnd: c,
                      onMouseDown: () => !i && o(ae.id),
                      onMouseUp: c,
                      onContextMenu: (gs) => gs.preventDefault(),
                      onClick: (gs) => {
                        i
                          ? (gs.stopPropagation(), d(ae.id))
                          : Ot && Y((ps) => (ps === ae.id ? null : ae.id));
                      },
                      children: e.jsx("span", {
                        className: "message-timestamp",
                        children: Ue(ae.timestamp),
                      }),
                    }),
                    i &&
                      e.jsx("div", {
                        className: "absolute top-1/2 -translate-y-1/2 -right-8",
                        children: e.jsx("div", {
                          className: `w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${Xt ? "bg-[#2c2c2c] border-[#2c2c2c]" : "border-gray-300 bg-white"}`,
                          children:
                            Xt &&
                            e.jsx(On, { size: 12, className: "text-white" }),
                        }),
                      }),
                    rs &&
                      Ot &&
                      e.jsxs("div", {
                        className:
                          "mt-1 px-3 py-2 rounded-lg bg-[#f5f5f5] border border-[#e0e0e0] text-xs text-[#5d4037] max-w-[85%]",
                        role: "button",
                        tabIndex: 0,
                        onClick: (gs) => gs.stopPropagation(),
                        onKeyDown: (gs) => gs.key === "Escape" && Y(null),
                        children: [
                          ae.note,
                          e.jsx("button", {
                            type: "button",
                            className: "ml-2 text-[#8d6e63] underline",
                            onClick: () => Y(null),
                            children: "收起",
                          }),
                        ],
                      }),
                  ],
                },
                At,
              );
            }
            if (ae.isRecalled)
              return e.jsxs(
                "div",
                {
                  id: `msg-${ae.id}`,
                  className: `animate-in slide-in-from-bottom-2 duration-300 ${es} flex justify-center relative`,
                  children: [
                    e.jsxs("div", {
                      className: `system-message-recall ${Xt ? "ring-1 ring-[#d7ccc8]" : ""}`,
                      onTouchStart: () => !i && o(ae.id),
                      onTouchEnd: c,
                      onMouseDown: () => !i && o(ae.id),
                      onMouseUp: c,
                      onContextMenu: (Ot) => Ot.preventDefault(),
                      onClick: (Ot) => {
                        i
                          ? (Ot.stopPropagation(), d(ae.id))
                          : ae.originalContent &&
                            u({
                              content: ae.originalContent,
                              reason: ae.recallReason,
                            });
                      },
                      children: [
                        e.jsx("span", {
                          className:
                            "line-through decoration-[#8d6e63] decoration-2",
                          children: It
                            ? "你撤回了一条消息"
                            : "对方撤回了一条消息",
                        }),
                        e.jsx(H1, { size: 10, className: "text-[#8d6e63]" }),
                      ],
                    }),
                    i &&
                      e.jsx("div", {
                        className: "absolute top-1/2 -translate-y-1/2 -right-8",
                        children: e.jsx("div", {
                          className: `w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${Xt ? "bg-[#2c2c2c] border-[#2c2c2c]" : "border-gray-300 bg-white"}`,
                          children:
                            Xt &&
                            e.jsx(On, { size: 12, className: "text-white" }),
                        }),
                      }),
                  ],
                },
                At,
              );
            const Jt = ae.replyTo
                ? Ae.find((Ot) => Ot.id === ae.replyTo)
                : null,
              Vt = Jt && dp(Jt),
              qt = ae.type === "voice",
              Lt = qt && !It && !((ii = t.settings) != null && ii.enableTTS),
              Qt = p.has(ae.id),
              js = h && v === ae.id,
              cs = ae.type === "image",
              Ne = ae.type === "meme",
              Je = ae.type === "text_image",
              St =
                ae.type === "html_widget" &&
                typeof ae.html == "string" &&
                ae.html.trim(),
              Be = p.has(ae.id),
              Ke =
                ae.type === "transfer" ||
                (ae.amount != null &&
                  /^¥?\s*[\d,.]+$/.test((ae.text || "").trim())),
              Nt = ae.type === "red_packet",
              bt = ae.type === "password_card",
              ns = ae.type === "food_delivery",
              Ge = ae.type === "pay_for_me",
              Le = ae.type === "dice_punishment_card",
              _e = ae.type === "gashapon_card",
              yt = {
                Secret: "秘密",
                BadDeed: "坏事",
                Coupon: "和好券",
                Memory: "时光胶囊",
              },
              rt =
                ae.type === "forward_chat_card" ||
                ((ae.friendName || ae.groupName) &&
                  Array.isArray(ae.messages) &&
                  ae.messages.length > 0),
              ze = ae.type === "couple_space_invite",
              lt = ae.type === "couple_ledger_checkin_invite",
              it = ae.type === "season_journey_invite",
              Ht = ae.type === "season_journey_review",
              is = ae.type === "season_journey_plan",
              os = ae.type === "season_journey_review_request",
              as = ae.type === "season_journey_settlement",
              vs =
                ae.seasonJourneyCard && typeof ae.seasonJourneyCard == "object"
                  ? ae.seasonJourneyCard
                  : null,
              ts =
                ae.type === "memory_rewrite_summary" ||
                (ae.memoryRewriteCard &&
                  typeof ae.memoryRewriteCard == "object"),
              ys = ae.type === "invite_listen",
              Vs = ae.type === "system_music_info",
              pt = ae.type === "system_fingerprint_request",
              qe = ae.type === "system_fingerprint_change",
              dt = ae.type === "failed_unlock_attempt",
              xt = ae.type === "memo_peek_alert",
              zt = ae.type === "moment",
              ms =
                ae.type === "text" &&
                (ae.text || "").startsWith("[转发朋友圈]"),
              Cs = ms ? (ae.text || "").replace("[转发朋友圈]", "").trim() : "",
              us =
                ae.type === "video_call_end" ||
                ae.type === "system_call_reject",
              Rs = ae.type === "poll",
              Rt = ae.type === "relay",
              Es = ae.type === "couple_avatar_request",
              nn = ae.type === "help_assistant_plain",
              Hs = ae.type === "help_assistant_excerpts",
              cn = ae.type === "help_assistant_excerpt",
              fn = ae.type === "help_assistant_supplement",
              Rn = ae.type === "help_assistant_cards",
              Qn = Hs || cn || Rn,
              ra =
                "w-full min-h-[4.5rem] text-left rounded-lg px-3 py-2.5 shadow-sm flex items-center gap-2 active:scale-[0.99] transition-all",
              _a =
                "w-full rounded-xl border border-amber-200/55 bg-gradient-to-br from-amber-50/50 via-stone-50/70 to-amber-100/30 px-2 py-2 space-y-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]",
              Ya =
                "w-full rounded-xl border border-teal-200/55 bg-gradient-to-br from-teal-50/40 via-white to-emerald-50/35 px-2 py-2 space-y-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]",
              Fr = ae.coupleAvatarProposal,
              kr = Array.isArray(
                (Br = t == null ? void 0 : t.settings) == null
                  ? void 0
                  : Br.coupleAvatarPairs,
              )
                ? t.settings.coupleAvatarPairs
                : [],
              Oa =
                Fr != null && Fr.pairId
                  ? kr.find((Ot) => String(Ot.id) === String(Fr.pairId))
                  : null,
              ur =
                Es && ae.pairId
                  ? kr.find((Ot) => String(Ot.id) === String(ae.pairId))
                  : Es && (ae.aiAvatar || ae.userAvatar)
                    ? {
                        aiAvatar: ae.aiAvatar,
                        userAvatar: ae.userAvatar,
                        name: ae.pairName || "情头",
                      }
                    : null;
            if (Es && ur)
              return e.jsxs(
                "div",
                {
                  id: `msg-${ae.id}`,
                  className: `${G(ae, !0)} ${es} transition-colors duration-500 rounded-xl chat-message user ${Xs ? "group-start" : ""}`,
                  children: [
                    $t &&
                      e.jsx("div", {
                        className: "flex justify-center mb-6 mt-2",
                        children: e.jsx("span", {
                          className: "message-timestamp",
                          children: Ue(ae.timestamp),
                        }),
                      }),
                    e.jsx("div", {
                      className: "relative overflow-hidden rounded-xl",
                      children: e.jsxs("div", {
                        className:
                          "message-row flex items-start gap-2 flex-row-reverse",
                        children: [
                          (() => {
                            const Ot = Xs,
                              rs = a == null ? void 0 : a.avatar;
                            return e.jsx("div", {
                              className: `message-row-avatar flex flex-shrink-0 flex-col items-center gap-0.5 ${Ot ? "message-row-avatar-visible" : ""}`,
                              style: { width: "var(--chat-avatar-size, 38px)" },
                              children: e.jsx("img", {
                                src: rs,
                                className: "chat-avatar",
                                style: { transform: "rotate(-3deg)" },
                                alt: "avatar",
                                loading: "lazy",
                              }),
                            });
                          })(),
                          e.jsxs("div", {
                            className:
                              "flex flex-wrap gap-1.5 items-end justify-end min-w-0 flex-1",
                            children: [
                              ur.aiAvatar &&
                                e.jsx("div", {
                                  className: `message-image message-image-couple from-me ${Xt ? "ring-2 ring-[#d7ccc8] ring-offset-2" : ""}`,
                                  children: e.jsx("img", {
                                    src: ur.aiAvatar,
                                    alt: "图片",
                                    loading: "lazy",
                                  }),
                                }),
                              ur.userAvatar &&
                                e.jsx("div", {
                                  className: `message-image message-image-couple from-me ${Xt ? "ring-2 ring-[#d7ccc8] ring-offset-2" : ""}`,
                                  children: e.jsx("img", {
                                    src: ur.userAvatar,
                                    alt: "图片",
                                    loading: "lazy",
                                  }),
                                }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                },
                At,
              );
            if (Fr && Oa && !It)
              return e.jsxs(
                "div",
                {
                  id: `msg-${ae.id}`,
                  className: `${G(ae, !1)} ${es} transition-colors duration-500 rounded-xl chat-message character ${Xs ? "group-start" : ""}`,
                  children: [
                    $t &&
                      e.jsx("div", {
                        className: "flex justify-center mb-6 mt-2",
                        children: e.jsx("span", {
                          className: "message-timestamp",
                          children: Ue(ae.timestamp),
                        }),
                      }),
                    e.jsx("div", {
                      className: "relative overflow-hidden rounded-xl",
                      children: e.jsxs("div", {
                        className:
                          "message-row flex items-start gap-2 flex-row",
                        children: [
                          (() => {
                            const Ot = Xs,
                              rs = s == null ? void 0 : s.avatar;
                            return e.jsx("div", {
                              className: `message-row-avatar flex flex-shrink-0 flex-col items-center gap-0.5 ${Ot ? "message-row-avatar-visible" : ""} ${we(ae, Ot, !1)}`,
                              style: { width: "var(--chat-avatar-size, 38px)" },
                              children: e.jsx("img", {
                                src: rs,
                                className: `chat-avatar ${f || O ? "cursor-pointer" : ""}`,
                                style: { transform: "rotate(3deg)" },
                                alt: "avatar",
                                loading: "lazy",
                                onClick: (gs) => {
                                  (gs.stopPropagation(),
                                    f && f(s == null ? void 0 : s.id));
                                },
                              }),
                            });
                          })(),
                          e.jsxs("div", {
                            className:
                              "flex flex-col items-start gap-1.5 min-w-0 flex-1",
                            children: [
                              ae.text &&
                                e.jsx("div", {
                                  className: `chat-bubble-other ${Xs ? "group-start" : ""} group-single max-w-[85%] ${Q(ae, Xs, !1)}`,
                                  children: e.jsx("p", {
                                    className:
                                      "chat-bubble-text whitespace-pre-wrap break-words",
                                    children: ae.text,
                                  }),
                                }),
                              e.jsxs("div", {
                                className: "flex flex-wrap gap-1.5 items-end",
                                children: [
                                  e.jsx("div", {
                                    className: `message-image message-image-couple from-other ${Xt ? "ring-2 ring-[#d7ccc8] ring-offset-2" : ""}`,
                                    children: e.jsx("img", {
                                      src: Oa.aiAvatar,
                                      alt: "图片",
                                      loading: "lazy",
                                    }),
                                  }),
                                  e.jsx("div", {
                                    className: `message-image message-image-couple from-other ${Xt ? "ring-2 ring-[#d7ccc8] ring-offset-2" : ""}`,
                                    children: e.jsx("img", {
                                      src: Oa.userAvatar,
                                      alt: "图片",
                                      loading: "lazy",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                },
                At,
              );
            if (us) {
              const Ot =
                ae.status === "rejected" || ae.type === "system_call_reject";
              return e.jsx(
                "div",
                {
                  className:
                    "flex justify-center my-4 animate-in fade-in slide-in-from-bottom-2 duration-300",
                  children: e.jsxs("div", {
                    className: "system-message-video",
                    children: [
                      e.jsx("div", {
                        className: `p-1.5 rounded-full ${Ot ? "bg-[#ffebee] text-[#ef5350]" : "bg-[#e8f5e9] text-[#66bb6a]"}`,
                        children: e.jsx(Vl, { size: 14 }),
                      }),
                      e.jsx("span", {
                        className: "font-medium",
                        children: Ot
                          ? "已拒绝"
                          : ae.status === "missed"
                            ? "未接听"
                            : `通话时长 ${ae.durationStr ?? ae.duration ?? "0:00"}`,
                      }),
                    ],
                  }),
                },
                At,
              );
            }
            if (qe) {
              const rs =
                (ae.action ||
                  ((kt = ae.content) == null ? void 0 : kt.action) ||
                  "enabled") === "enabled";
              return e.jsx(
                "div",
                {
                  className:
                    "flex justify-center my-4 animate-in fade-in slide-in-from-bottom-2 duration-300",
                  children: e.jsxs("div", {
                    className:
                      "system-message-fingerprint flex items-center gap-2 px-3 py-1.5",
                    children: [
                      e.jsx("div", {
                        className: `p-1.5 rounded-full ${rs ? "bg-[#e8f5e9] text-[#43a047]" : "bg-[#ffebee] text-[#e53935]"}`,
                        children: e.jsx(Bi, { size: 12 }),
                      }),
                      e.jsx("span", {
                        className: "text-xs font-medium text-[#4e342e]",
                        children: rs
                          ? "指纹解锁已开通，可免密进入手机"
                          : "指纹解锁已关闭，需要输入密码才能进入手机",
                      }),
                    ],
                  }),
                },
                At,
              );
            }
            if (
              ae.type === "system" &&
              (/^\[代付请求\]/.test((ae.text || "").trim()) ||
                /请决定是否帮用户支付/.test(ae.text || ""))
            )
              return null;
            if (
              ae.type === "system" &&
              (ae.text.includes("更新了自己的个性签名") ||
                ae.text.includes("更换了个性签名") ||
                ae.text.includes("更换了签名"))
            ) {
              let Ot = "";
              const rs = ae.text.match(/"([^"]*)"/);
              return (
                rs
                  ? (Ot = rs[1])
                  : (Ot =
                      ((Tt = ae.text.split("：")[1]) == null
                        ? void 0
                        : Tt.replace(/^"|"$/g, "")) || ""),
                e.jsx(
                  "div",
                  {
                    className:
                      "flex justify-center my-6 animate-in fade-in slide-in-from-bottom-2 duration-500",
                    children: e.jsxs("div", {
                      className: "system-message-signature group",
                      children: [
                        e.jsx("div", {
                          className:
                            "absolute -top-1.5 left-1/2 -translate-x-1/2 w-16 h-3 bg-[#d7ccc8]/30 rotate-1 rounded-sm",
                        }),
                        e.jsx("div", {
                          className:
                            "absolute top-2 right-2 text-[#d7ccc8] opacity-50",
                          children: e.jsx(Xn, { size: 12 }),
                        }),
                        e.jsx("div", {
                          className:
                            "w-8 h-8 rounded-full bg-[#f5f5f5] flex items-center justify-center text-[#8d6e63] mb-1 shadow-inner",
                          children: e.jsx(ml, { size: 14 }),
                        }),
                        e.jsx("span", {
                          className:
                            "text-[10px] font-bold text-[#8d6e63] uppercase tracking-widest",
                          children: "签名更新",
                        }),
                        e.jsx("div", {
                          className: "text-center px-2",
                          children: e.jsxs("p", {
                            className:
                              "text-sm font-serif text-[#5d4037] italic leading-relaxed relative inline-block",
                            children: [
                              e.jsx("span", {
                                className:
                                  "text-[#d7ccc8] text-xl absolute -top-2 -left-3",
                                children: '"',
                              }),
                              Ot,
                              e.jsx("span", {
                                className:
                                  "text-[#d7ccc8] text-xl absolute -bottom-4 -right-3 rotate-180",
                                children: '"',
                              }),
                            ],
                          }),
                        }),
                        e.jsx("div", {
                          className:
                            "mt-2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d7ccc8]/50 to-transparent",
                        }),
                      ],
                    }),
                  },
                  At,
                )
              );
            }
            if (ae.type === "system_password_changed")
              return e.jsx(
                "div",
                {
                  className:
                    "flex justify-center my-4 animate-in fade-in slide-in-from-bottom-2 duration-300",
                  children: e.jsxs("div", {
                    className:
                      "w-56 rounded-2xl overflow-hidden border border-[#efebe9] shadow-sm bg-[#fffcf7]",
                    children: [
                      e.jsxs("div", {
                        className:
                          "bg-[#8d6e63] px-4 py-2.5 flex items-center gap-2",
                        children: [
                          e.jsx("div", {
                            className: "p-1 bg-white/20 rounded-lg",
                            children: e.jsx(lr, {
                              size: 14,
                              className: "text-white",
                            }),
                          }),
                          e.jsx("span", {
                            className:
                              "text-[11px] font-bold text-white/95 uppercase tracking-widest",
                            children: "系统提示",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "p-4 relative",
                        children: [
                          e.jsx("div", {
                            className: "absolute inset-0 opacity-[0.04]",
                            style: {
                              backgroundImage:
                                "radial-gradient(#8d6e63 1px, transparent 1px)",
                              backgroundSize: "8px 8px",
                            },
                          }),
                          e.jsx("p", {
                            className:
                              "text-sm text-[#5d4037] font-medium text-center relative",
                            children: "对方已更换手机密码",
                          }),
                          e.jsx("p", {
                            className:
                              "text-[10px] text-[#bdbdbd] text-center mt-1",
                            children: "新密码需向对方询问后可知",
                          }),
                        ],
                      }),
                    ],
                  }),
                },
                At,
              );
            if (ae.type === "system") {
              const Ot = ae.text
                .replace(/^\[(系统提示|系统通知)\]\s*/, "")
                .replace(/^\[(系统提示|系统通知)[：:]\s*/, "")
                .replace(/\]$/, "")
                .trim();
              return e.jsxs(
                "div",
                {
                  id: `msg-${ae.id}`,
                  className: `flex justify-center my-3 animate-in fade-in slide-in-from-bottom-2 duration-300 relative ${es}`,
                  children: [
                    e.jsxs("div", {
                      className: `bg-[#f5f5f5]/90 backdrop-blur-sm px-4 py-1.5 rounded-full border border-[#e0e0e0] shadow-sm flex items-center gap-2 max-w-[85%] ${Xt ? "ring-2 ring-[#d7ccc8] ring-offset-2" : ""}`,
                      onTouchStart: () => !i && o(ae.id),
                      onTouchEnd: c,
                      onMouseDown: () => !i && o(ae.id),
                      onMouseUp: c,
                      onContextMenu: (rs) => rs.preventDefault(),
                      onClick: (rs) => {
                        i && (rs.stopPropagation(), d(ae.id));
                      },
                      children: [
                        e.jsx("div", {
                          className: "w-1 h-1 rounded-full bg-[#bdbdbd]",
                        }),
                        e.jsx("span", {
                          className:
                            "text-[11px] text-[#757575] font-medium leading-relaxed text-center",
                          children: Ot,
                        }),
                        e.jsx("div", {
                          className: "w-1 h-1 rounded-full bg-[#bdbdbd]",
                        }),
                      ],
                    }),
                    i &&
                      e.jsx("div", {
                        className: "absolute top-1/2 -translate-y-1/2 -right-8",
                        children: e.jsx("div", {
                          className: `w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${Xt ? "bg-[#2c2c2c] border-[#2c2c2c]" : "border-gray-300 bg-white"}`,
                          children:
                            Xt &&
                            e.jsx(On, { size: 12, className: "text-white" }),
                        }),
                      }),
                  ],
                },
                At,
              );
            }
            return Vs
              ? e.jsx(
                  "div",
                  {
                    className:
                      "animate-in fade-in slide-in-from-bottom-2 duration-300",
                    children: e.jsx(tW, { text: ae.text, type: "music" }),
                  },
                  At,
                )
              : e.jsxs(
                  "div",
                  {
                    id: `msg-${ae.id}`,
                    className: `${G(ae, It)} ${es} transition-colors duration-500 rounded-xl chat-message ${It ? "user" : "character"} ${Xs ? "group-start" : ""}`,
                    children: [
                      $t &&
                        e.jsx("div", {
                          className: "flex justify-center mb-6 mt-2",
                          children: e.jsx("span", {
                            className: "message-timestamp",
                            children: Ue(ae.timestamp),
                          }),
                        }),
                      e.jsx("div", {
                        className: "relative overflow-hidden rounded-xl",
                        children: e.jsxs("div", {
                          className: `message-row flex items-start gap-2 ${It ? "flex-row-reverse" : "flex-row"}`,
                          style: {
                            transform:
                              ye === ae.id ? `translateX(${oe}px)` : void 0,
                            transition:
                              ye === ae.id
                                ? "transform 0.15s ease-out"
                                : "none",
                          },
                          onTouchStart: (Ot) => Qe(Ot, ae.id),
                          onTouchMove: (Ot) => Ye(Ot, ae.id),
                          onTouchEnd: () => Ze(ae.id),
                          onMouseDown: (Ot) => Qe(Ot, ae.id),
                          onMouseMove: (Ot) =>
                            Ot.buttons === 1 && Ye(Ot, ae.id),
                          onMouseUp: () => Ze(ae.id),
                          onMouseLeave: () => Ze(ae.id),
                          children: [
                            (() => {
                              var tn, dn, yn;
                              const Ot = wt,
                                rs =
                                  (Ot == null ? void 0 : Ot.contactForAvatar) ??
                                  s,
                                gs = xs,
                                ps = Ot
                                  ? Ot.avatarSrc
                                  : (It && (a == null ? void 0 : a.avatar)) ||
                                    s.avatar,
                                Is =
                                  (Ot == null ? void 0 : Ot.senderLabel) ?? "",
                                As = !!(
                                  (tn = t == null ? void 0 : t.settings) !=
                                    null && tn.hideMemberTitlesAndRoles
                                ),
                                Ks =
                                  !!(
                                    (dn = t == null ? void 0 : t.settings) !=
                                      null && dn.showOnlyMemberTitles
                                  ) && !As,
                                on =
                                  rn &&
                                  !As &&
                                  (Is ||
                                    (It &&
                                      ((yn = t.settings) == null
                                        ? void 0
                                        : yn.myTitle)));
                              return (
                                Ks && String(Is).split(" · ")[0],
                                e.jsxs("div", {
                                  className: `message-row-avatar flex flex-shrink-0 flex-col items-center gap-0.5 ${gs ? "message-row-avatar-visible" : ""} ${we(ae, gs, It)}`,
                                  style: {
                                    width: "var(--chat-avatar-size, 38px)",
                                  },
                                  children: [
                                    e.jsx("img", {
                                      src: ps,
                                      className: `chat-avatar ${It ? (K ? "cursor-pointer" : "") : f || O ? "cursor-pointer" : ""}`,
                                      style: {
                                        transform: It
                                          ? "rotate(-3deg)"
                                          : "rotate(3deg)",
                                      },
                                      alt: "avatar",
                                      loading: "lazy",
                                      onClick: (va) => {
                                        (va.stopPropagation(),
                                          It && K
                                            ? K()
                                            : rn && !It
                                              ? O == null || O(rs.id)
                                              : !It && f && f(s.id));
                                      },
                                      onTouchStart: (va) => {
                                        rn &&
                                          !It &&
                                          (va.persist(),
                                          (ke.current = setTimeout(() => {
                                            Ve(
                                              rs.id,
                                              rs.remark ||
                                                rs.nickname ||
                                                rs.name,
                                            );
                                          }, 500)));
                                      },
                                      onTouchEnd: () => {
                                        ke.current &&
                                          (clearTimeout(ke.current),
                                          (ke.current = null));
                                      },
                                      onTouchMove: () => {
                                        ke.current &&
                                          (clearTimeout(ke.current),
                                          (ke.current = null));
                                      },
                                      onContextMenu: (va) => {
                                        rn &&
                                          !It &&
                                          (va.preventDefault(),
                                          Ve(
                                            rs.id,
                                            rs.remark || rs.nickname || rs.name,
                                          ));
                                      },
                                    }),
                                    on &&
                                      !Ks &&
                                      e.jsx("span", {
                                        className:
                                          "text-[9px] text-[#9e9e9e] font-medium w-full text-center leading-tight break-words line-clamp-2 min-w-0",
                                        children: Is,
                                      }),
                                  ],
                                })
                              );
                            })(),
                            e.jsxs("div", {
                              className:
                                "flex-1 min-w-0 flex flex-col items-stretch",
                              children: [
                                (() => {
                                  var on, tn, dn;
                                  const Ot =
                                      (t == null ? void 0 : t.isGroup) === !0,
                                    rs = !!(
                                      (on = t == null ? void 0 : t.settings) !=
                                        null && on.hideMemberTitlesAndRoles
                                    ),
                                    gs =
                                      !!(
                                        (tn =
                                          t == null ? void 0 : t.settings) !=
                                          null && tn.showOnlyMemberTitles
                                      ) && !rs,
                                    ps = Ot ? Nw(t, ae, n, s, a, Xs) : null,
                                    Is =
                                      (ps == null ? void 0 : ps.senderLabel) ??
                                      "",
                                    As =
                                      Ot &&
                                      !rs &&
                                      (Is ||
                                        (It &&
                                          ((dn = t.settings) == null
                                            ? void 0
                                            : dn.myTitle))),
                                    Ks = gs ? String(Is).split(" · ")[0] : Is;
                                  return !gs || !As
                                    ? null
                                    : e.jsx("div", {
                                        className: `${It ? "self-end" : "self-start"} mb-1 flex items-end gap-2`,
                                        children: e.jsx("span", {
                                          className:
                                            "text-[10px] text-[#9e9e9e] font-medium leading-none relative left-1 top-0.5",
                                          children: Ks,
                                        }),
                                      });
                                })(),
                                e.jsxs("div", {
                                  className: `relative group ${Xt ? "scale-[1.02]" : ""} transition-all duration-300 ${Qn ? "w-full max-w-[65%]" : "max-w-[75%]"} ${It ? "self-end" : "self-start"} ${(t == null ? void 0 : t.isGroup) === !0 && (Yt = t == null ? void 0 : t.settings) != null && Yt.showOnlyMemberTitles && !((de = t == null ? void 0 : t.settings) != null && de.hideMemberTitlesAndRoles) ? "mt-2" : ""} ${Q(ae, xs, It)}`,