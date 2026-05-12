    return a;
  if (r.length) {
    const i = r.join(" ");
    t.append(`${f1(n.preconditions, { right: n.scopeClassName })} {${i}}`);
  }
  return (a.add(n.scopeClassName), a);
}
function l7(t, s, n, a) {
  t.append(n + " {");
  const r = Qh(t, s, a);
  return (t.append("}"), r);
}
function Dj(t, s) {
  (s == null || s > t.length) && (s = t.length);
  for (var n = 0, a = Array(s); n < s; n++) a[n] = t[n];
  return a;
}
function c7(t, s) {
  var n = (typeof Symbol < "u" && t[Symbol.iterator]) || t["@@iterator"];
  if (n) return (n = n.call(t)).next.bind(n);
  if (Array.isArray(t) || (n = u7(t)) || s) {
    n && (t = n);
    var a = 0;
    return function () {
      return a >= t.length ? { done: !0 } : { done: !1, value: t[a++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function dr() {
  return (
    (dr = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var s = 1; s < arguments.length; s++) {
            var n = arguments[s];
            for (var a in n) ({}).hasOwnProperty.call(n, a) && (t[a] = n[a]);
          }
          return t;
        }),
    dr.apply(null, arguments)
  );
}
function d7(t, s) {
  ((t.prototype = Object.create(s.prototype)),
    (t.prototype.constructor = t),
    m1(t, s));
}
function v_(t, s) {
  if (t == null) return {};
  var n = {};
  for (var a in t)
    if ({}.hasOwnProperty.call(t, a)) {
      if (s.indexOf(a) !== -1) continue;
      n[a] = t[a];
    }
  return n;
}
function m1(t, s) {
  return (
    (m1 = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, a) {
          return ((n.__proto__ = a), n);
        }),
    m1(t, s)
  );
}
function u7(t, s) {
  if (t) {
    if (typeof t == "string") return Dj(t, s);
    var n = {}.toString.call(t).slice(8, -1);
    return (
      n === "Object" && t.constructor && (n = t.constructor.name),
      n === "Map" || n === "Set"
        ? Array.from(t)
        : n === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? Dj(t, s)
          : void 0
    );
  }
}
var $a;
(function (t) {
  ((t.hiddenOnSearch = "epr-hidden-on-search"),
    (t.searchActive = "epr-search-active"),
    (t.hidden = "epr-hidden"),
    (t.visible = "epr-visible"),
    (t.active = "epr-active"),
    (t.emoji = "epr-emoji"),
    (t.category = "epr-emoji-category"),
    (t.label = "epr-emoji-category-label"),
    (t.categoryContent = "epr-emoji-category-content"),
    (t.emojiHasVariations = "epr-emoji-has-variations"),
    (t.scrollBody = "epr-body"),
    (t.emojiList = "epr-emoji-list"),
    (t.external = "__EmojiPicker__"),
    (t.emojiPicker = "EmojiPickerReact"),
    (t.open = "epr-open"),
    (t.vertical = "epr-vertical"),
    (t.horizontal = "epr-horizontal"),
    (t.variationPicker = "epr-emoji-variation-picker"),
    (t.darkTheme = "epr-dark-theme"),
    (t.autoTheme = "epr-auto-theme"));
})($a || ($a = {}));
function Mo() {
  for (var t = arguments.length, s = new Array(t), n = 0; n < t; n++)
    s[n] = arguments[n];
  return s
    .map(function (a) {
      return "." + a;
    })
    .join("");
}
var jr = i7("epr", null),
  N0 = {
    display: "none",
    opacity: "0",
    pointerEvents: "none",
    visibility: "hidden",
    overflow: "hidden",
  },
  Tv = jr.create({ hidden: dr({ ".": $a.hidden }, N0) }),
  f7 = l.memo(function () {
    return l.createElement("style", {
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: { __html: jr.getStyle() },
    });
  }),
  hd = jr.create({
    ".epr-main": {
      ":has(input:not(:placeholder-shown))": {
        categoryBtn: {
          ":hover": {
            opacity: "1",
            backgroundPositionY: "var(--epr-category-navigation-button-size)",
          },
        },
        hiddenOnSearch: dr({ ".": $a.hiddenOnSearch }, N0),
      },
      ":has(input:placeholder-shown)": { visibleOnSearchOnly: N0 },
    },
    hiddenOnReactions: { transition: "all 0.5s ease-in-out" },
    ".epr-reactions": {
      hiddenOnReactions: {
        height: "0px",
        width: "0px",
        opacity: "0",
        pointerEvents: "none",
        overflow: "hidden",
      },
    },
    ".EmojiPickerReact:not(.epr-search-active)": {
      categoryBtn: {
        ":hover": {
          opacity: "1",
          backgroundPositionY: "var(--epr-category-navigation-button-size)",
        },
        "&.epr-active": {
          opacity: "1",
          backgroundPositionY: "var(--epr-category-navigation-button-size)",
        },
      },
      visibleOnSearchOnly: dr({ ".": "epr-visible-on-search-only" }, N0),
    },
  });
function Lc(t, s) {
  var n, a;
  return {
    ".epr-dark-theme": ((n = {}), (n[t] = s), n),
    ".epr-auto-theme":
      ((a = {}), (a[t] = { "@media (prefers-color-scheme: dark)": s }), a),
  };
}
function w_(t, s) {
  var n,
    a,
    r = (n = t.customEmojis) != null ? n : [],
    i = (a = s.customEmojis) != null ? a : [];
  return (
    t.open === s.open &&
    t.emojiVersion === s.emojiVersion &&
    t.reactionsDefaultOpen === s.reactionsDefaultOpen &&
    t.searchPlaceHolder === s.searchPlaceHolder &&
    t.searchPlaceholder === s.searchPlaceholder &&
    t.searchClearButtonLabel === s.searchClearButtonLabel &&
    t.defaultSkinTone === s.defaultSkinTone &&
    t.skinTonesDisabled === s.skinTonesDisabled &&
    t.autoFocusSearch === s.autoFocusSearch &&
    t.emojiStyle === s.emojiStyle &&
    t.theme === s.theme &&
    t.suggestedEmojisMode === s.suggestedEmojisMode &&
    t.lazyLoadEmojis === s.lazyLoadEmojis &&
    t.className === s.className &&
    t.height === s.height &&
    t.width === s.width &&
    t.style === s.style &&
    t.searchDisabled === s.searchDisabled &&
    t.skinTonePickerLocation === s.skinTonePickerLocation &&
    r.length === i.length &&
    t.emojiData === s.emojiData
  );
}
var m7 = ["1f44d", "2764-fe0f", "1f603", "1f622", "1f64f", "1f44e", "1f621"],
  sp;
(function (t) {
  ((t.RECENT = "recent"), (t.FREQUENT = "frequent"));
})(sp || (sp = {}));
var no;
(function (t) {
  ((t.NATIVE = "native"),
    (t.APPLE = "apple"),
    (t.TWITTER = "twitter"),
    (t.GOOGLE = "google"),
    (t.FACEBOOK = "facebook"));
})(no || (no = {}));
var np;
(function (t) {
  ((t.DARK = "dark"), (t.LIGHT = "light"), (t.AUTO = "auto"));
})(np || (np = {}));
var Ho;
(function (t) {
  ((t.NEUTRAL = "neutral"),
    (t.LIGHT = "1f3fb"),
    (t.MEDIUM_LIGHT = "1f3fc"),
    (t.MEDIUM = "1f3fd"),
    (t.MEDIUM_DARK = "1f3fe"),
    (t.DARK = "1f3ff"));
})(Ho || (Ho = {}));
var pa;
(function (t) {
  ((t.SUGGESTED = "suggested"),
    (t.CUSTOM = "custom"),
    (t.SMILEYS_PEOPLE = "smileys_people"),
    (t.ANIMALS_NATURE = "animals_nature"),
    (t.FOOD_DRINK = "food_drink"),
    (t.TRAVEL_PLACES = "travel_places"),
    (t.ACTIVITIES = "activities"),
    (t.OBJECTS = "objects"),
    (t.SYMBOLS = "symbols"),
    (t.FLAGS = "flags"));
})(pa || (pa = {}));
var Cu;
(function (t) {
  ((t.SEARCH = "SEARCH"), (t.PREVIEW = "PREVIEW"));
})(Cu || (Cu = {}));
var p7 = "https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/",
  x7 =
    "https://cdn.jsdelivr.net/npm/emoji-datasource-facebook/img/facebook/64/",
  h7 = "https://cdn.jsdelivr.net/npm/emoji-datasource-twitter/img/twitter/64/",
  g7 = "https://cdn.jsdelivr.net/npm/emoji-datasource-google/img/google/64/";
function b7(t) {
  switch (t) {
    case no.TWITTER:
      return h7;
    case no.GOOGLE:
      return g7;
    case no.FACEBOOK:
      return x7;
    case no.APPLE:
    default:
      return p7;
  }
}
var xh = [
    Ho.NEUTRAL,
    Ho.LIGHT,
    Ho.MEDIUM_LIGHT,
    Ho.MEDIUM,
    Ho.MEDIUM_DARK,
    Ho.DARK,
  ],
  y7 = Object.entries(Ho).reduce(function (t, s) {
    var n = s[0],
      a = s[1];
    return ((t[a] = n), t);
  }, {}),
  Iv = xh.reduce(function (t, s) {
    var n;
    return Object.assign(t, ((n = {}), (n[s] = s), n));
  }, {}),
  fi;
(function (t) {
  ((t.name = "n"),
    (t.unified = "u"),
    (t.variations = "v"),
    (t.added_in = "a"),
    (t.imgUrl = "imgUrl"));
})(fi || (fi = {}));
function j_(t) {
  var s;
  return (s = t[fi.name]) != null ? s : [];
}
function v7(t) {
  return parseFloat(t[fi.added_in] || "0");
}
function w7(t) {
  if (!t) return "";
  var s = j_(t);
  return s[s.length - 1];
}
function N_(t) {
  var s = t.split("-"),
    n = s.splice(1, 1),
    a = n[0];
  return Iv[a] ? s.join("-") : t;
}
function gd(t, s) {
  var n,
    a = t[fi.unified];
  return !s || !j7(t) ? a : (n = N7(t, s)) != null ? n : a;
}
function k_(t, s) {
  return "" + b7(s) + t + ".png";
}
function Ev(t) {
  var s;
  return (s = t[fi.variations]) != null ? s : [];
}
function j7(t) {
  return Ev(t).length > 0;
}
function N7(t, s) {
  return s
    ? Ev(t).find(function (n) {
        return n.includes(s);
      })
    : gd(t);
}
function k7(t) {
  var s = t.split("-"),
    n = s[1];
  return Object.keys(Iv).includes(n) ? n : null;
}
var bo,
  S7 = [
    pa.SUGGESTED,
    pa.CUSTOM,
    pa.SMILEYS_PEOPLE,
    pa.ANIMALS_NATURE,
    pa.FOOD_DRINK,
    pa.TRAVEL_PLACES,
    pa.ACTIVITIES,
    pa.OBJECTS,
    pa.SYMBOLS,
    pa.FLAGS,
  ],
  _7 = { name: "Recently Used", category: pa.SUGGESTED },
  S_ =
    ((bo = {}),
    (bo[pa.SUGGESTED] = { category: pa.SUGGESTED, name: "Frequently Used" }),
    (bo[pa.CUSTOM] = { category: pa.CUSTOM, name: "Custom Emojis" }),
    (bo[pa.SMILEYS_PEOPLE] = {
      category: pa.SMILEYS_PEOPLE,
      name: "Smileys & People",
    }),
    (bo[pa.ANIMALS_NATURE] = {
      category: pa.ANIMALS_NATURE,
      name: "Animals & Nature",
    }),
    (bo[pa.FOOD_DRINK] = { category: pa.FOOD_DRINK, name: "Food & Drink" }),
    (bo[pa.TRAVEL_PLACES] = {
      category: pa.TRAVEL_PLACES,
      name: "Travel & Places",
    }),
    (bo[pa.ACTIVITIES] = { category: pa.ACTIVITIES, name: "Activities" }),
    (bo[pa.OBJECTS] = { category: pa.OBJECTS, name: "Objects" }),
    (bo[pa.SYMBOLS] = { category: pa.SYMBOLS, name: "Symbols" }),
    (bo[pa.FLAGS] = { category: pa.FLAGS, name: "Flags" }),
    bo);
function __(t) {
  return S7.map(function (s) {
    return dr({}, S_[s], t && t[s] && t[s]);
  });
}
function Zh(t) {
  return t.category;
}
function A_(t) {
  return t.name;
}
function A7(t, s, n) {
  var a;
  (t === void 0 && (t = []), s === void 0 && (s = {}));
  var r = (function () {
      var o =
        n != null && n.categories
          ? Object.fromEntries(
              Object.entries(n.categories).filter(function (u) {
                var f = u[1];
                return !!f;
              }),
            )
          : {};
      if (s.suggestionMode === sp.RECENT) {
        var c,
          d =
            n == null || (c = n.categories) == null
              ? void 0
              : c.suggested_recent;
        o[pa.SUGGESTED] = d ? { category: pa.SUGGESTED, name: d.name } : _7;
      }
      return o;
    })(),
    i = __(r);
  return (a = t) != null && a.length
    ? t.map(function (o) {
        return typeof o == "string"
          ? $j(o, r[o])
          : dr({}, $j(o.category, r[o.category]), o);
      })
    : i;
}
function $j(t, s) {
  return (s === void 0 && (s = {}), Object.assign(S_[t], s));
}
var C7 = ["2640-fe0f", "2642-fe0f", "2695-fe0f"],
  hh = "Search",
  C_ = "Clear",
  M7 = "No results found",
  M_ = " found. Use up and down arrow keys to navigate.",
  T7 = "1 result" + M_,
  I7 = "%n results" + M_;
function Fj(t) {
  var s, n, a, r, i;
  t === void 0 && (t = {});
  var o = T_(),
    c =
      (s = t.emojiData) == null ||
      (n = s.categories) == null ||
      (a = n.preview_mood) == null
        ? void 0
        : a.name,
    d = dr(
      {},
      o.previewConfig,
      c && !((r = t.previewConfig) != null && r.defaultCaption)
        ? { defaultCaption: c }
        : {},
      (i = t.previewConfig) != null ? i : {},
    ),
    u = Object.assign(o, t),
    f = A7(
      t.categories,
      { suggestionMode: u.suggestedEmojisMode },
      t.emojiData,
    );
  u.hiddenEmojis.forEach(function (m) {
    u.unicodeToHide.add(m);
  });
  var p = u.searchDisabled ? Cu.PREVIEW : u.skinTonePickerLocation;
  return dr({}, u, {
    categories: f,
    previewConfig: d,
    skinTonePickerLocation: p,
  });
}
function T_() {
  return {
    autoFocusSearch: !0,
    categories: __(),
    className: "",
    customEmojis: [],
    defaultSkinTone: Ho.NEUTRAL,
    emojiStyle: no.APPLE,
    emojiVersion: null,
    getEmojiUrl: k_,
    height: 450,
    lazyLoadEmojis: !1,
    previewConfig: dr({}, E7),
    searchDisabled: !1,
    searchPlaceHolder: hh,
    searchPlaceholder: hh,
    searchClearButtonLabel: C_,
    skinTonePickerLocation: Cu.SEARCH,
    skinTonesDisabled: !1,
    style: {},
    suggestedEmojisMode: sp.FREQUENT,
    theme: np.LIGHT,
    unicodeToHide: new Set(C7),
    width: 350,
    reactionsDefaultOpen: !1,
    reactions: m7,
    open: !0,
    allowExpandReactions: !0,
    hiddenEmojis: [],
    emojiData: void 0,
  };
}
var E7 = {
    defaultEmoji: "1f60a",
    defaultCaption: "What's your mood?",
    showPreview: !0,
  },
  L7 = ["children"],
  I_ = l.createContext(T_());
function D7(t) {
  var s = t.children,
    n = v_(t, L7),
    a = $7(n);
  return l.createElement(I_.Provider, { value: a }, s);
}
function $7(t) {
  var s,
    n = l.useState(function () {
      return Fj(t);
    }),
    a = n[0],
    r = n[1];
  return (
    l.useEffect(
      function () {
        w_(a, t) || r(Fj(t));
      },
      [
        (s = t.customEmojis) == null ? void 0 : s.length,
        t.open,
        t.emojiVersion,
        t.reactionsDefaultOpen,
        t.searchPlaceHolder,
        t.searchPlaceholder,
        t.searchClearButtonLabel,
        t.defaultSkinTone,
        t.skinTonesDisabled,
        t.autoFocusSearch,
        t.emojiStyle,
        t.theme,
        t.suggestedEmojisMode,
        t.lazyLoadEmojis,
        t.className,
        t.height,
        t.width,
        t.searchDisabled,
        t.skinTonePickerLocation,
        t.allowExpandReactions,
        t.emojiData,
      ],
    ),
    a
  );
}
function Nr() {
  return l.useContext(I_);
}
function zj(t, s) {
  s === void 0 && (s = 0);
  var n = l.useState(t),
    a = n[0],
    r = n[1],
    i = l.useRef(null);
  function o(c) {
    return new Promise(function (d) {
      var u;
      (i.current && clearTimeout(i.current),
        (i.current =
          (u = window) == null
            ? void 0
            : u.setTimeout(function () {
                (r(c), d(c));
              }, s)));
    });
  }
  return [a, o];
}
var F7 = {
    smileys_people: { category: "smileys_people", name: "people & body" },
    animals_nature: { category: "animals_nature", name: "animals & nature" },
    food_drink: { category: "food_drink", name: "food & drink" },
    travel_places: { category: "travel_places", name: "travel & places" },
    activities: { category: "activities", name: "activities" },
    objects: { category: "objects", name: "objects" },
    symbols: { category: "symbols", name: "symbols" },
    flags: { category: "flags", name: "flags" },
    suggested: { category: "suggested", name: "Frequently Used" },
    custom: { category: "custom", name: "Custom Emojis" },
    suggested_recent: { category: "suggested", name: "Recently Used" },
    preview_mood: { category: "preview_mood", name: "What's your mood?" },
  },
  z7 = {
    custom: [],
    smileys_people: [
      { n: ["face", "grin", "grinning face"], u: "1f600", a: "1" },
      {
        n: ["face", "open", "mouth", "smile", "grinning face with big eyes"],
        u: "1f603",
        a: "0.6",
      },
      {
        n: [
          "eye",
          "face",
          "open",
          "mouth",
          "smile",
          "grinning face with smiling eyes",
        ],
        u: "1f604",
        a: "0.6",
      },
      {
        n: ["eye", "face", "grin", "smile", "beaming face with smiling eyes"],
        u: "1f601",
        a: "0.6",
      },
      {
        n: [
          "face",
          "laugh",
          "mouth",
          "smile",
          "satisfied",
          "grinning squinting face",
        ],
        u: "1f606",
        a: "0.6",
      },
      {
        n: [
          "cold",
          "face",
          "open",
          "smile",
          "sweat",
          "grinning face with sweat",
        ],
        u: "1f605",
        a: "0.6",
      },
      {
        n: [
          "face",
          "rofl",
          "floor",
          "laugh",
          "rotfl",
          "rolling",
          "rolling on the floor laughing",
        ],
        u: "1f923",
        a: "3",
      },
      {
        n: ["joy", "face", "tear", "laugh", "face with tears of joy"],
        u: "1f602",
        a: "0.6",
      },
      { n: ["face", "smile", "slightly smiling face"], u: "1f642", a: "1" },
      { n: ["face", "upside down", "upside down face"], u: "1f643", a: "1" },
      {
        n: ["melt", "liquid", "dissolve", "disappear", "melting face"],
        u: "1fae0",
        a: "14",
      },
      { n: ["face", "wink", "winking face"], u: "1f609", a: "0.6" },
      {
        n: ["eye", "face", "blush", "smile", "smiling face with smiling eyes"],
        u: "1f60a",
        a: "0.6",
      },
      {
        n: [
          "face",
          "halo",
          "angel",
          "fantasy",
          "innocent",
          "smiling face with halo",
        ],
        u: "1f607",
        a: "1",
      },
      {
        n: ["adore", "crush", "hearts", "in love", "smiling face with hearts"],
        u: "1f970",
        a: "11",
      },
      {
        n: ["eye", "face", "love", "smile", "smiling face with heart eyes"],
        u: "1f60d",
        a: "0.6",
      },
      {
        n: ["eyes", "face", "star", "grinning", "star struck"],
        u: "1f929",
        a: "5",
      },
      { n: ["face", "kiss", "face blowing a kiss"], u: "1f618", a: "0.6" },
      { n: ["face", "kiss", "kissing face"], u: "1f617", a: "1" },
      {
        n: ["eye", "face", "kiss", "closed", "kissing face with closed eyes"],
        u: "1f61a",
        a: "0.6",
      },
      {
        n: ["eye", "face", "kiss", "smile", "kissing face with smiling eyes"],
        u: "1f619",
        a: "1",
      },
      {
        n: [
          "tear",
          "proud",
          "smiling",
          "touched",
          "grateful",
          "relieved",
          "smiling face with tear",
        ],
        u: "1f972",
        a: "13",
      },
      {
        n: [
          "yum",
          "face",
          "smile",
          "delicious",
          "savouring",
          "face savoring food",
        ],
        u: "1f60b",
        a: "0.6",
      },
      { n: ["face", "tongue", "face with tongue"], u: "1f61b", a: "1" },
      {
        n: [
          "eye",
          "face",
          "joke",
          "wink",
          "tongue",
          "winking face with tongue",
        ],
        u: "1f61c",
        a: "0.6",
      },
      {
        n: ["eye", "goofy", "large", "small", "zany face"],
        u: "1f92a",
        a: "5",
      },
      {
        n: [
          "eye",
          "face",
          "taste",
          "tongue",
          "horrible",
          "squinting face with tongue",
        ],
        u: "1f61d",
        a: "0.6",
      },
      { n: ["face", "money", "mouth", "money mouth face"], u: "1f911", a: "1" },
      {
        n: [
          "hug",
          "face",
          "hugging",
          "open hands",
          "smiling face",
          "smiling face with open hands",
        ],
        u: "1f917",
        a: "1",
      },
      { n: ["whoops", "face with hand over mouth"], u: "1f92d", a: "5" },
      {
        n: [
          "awe",
          "scared",
          "surprise",
          "amazement",
          "disbelief",
          "embarrass",
          "face with open eyes and hand over mouth",
        ],
        u: "1fae2",
        a: "14",
      },
      {
        n: ["peep", "stare", "captivated", "face with peeking eye"],
        u: "1fae3",
        a: "14",
      },
      { n: ["quiet", "shush", "shushing face"], u: "1f92b", a: "5" },
      { n: ["face", "thinking", "thinking face"], u: "1f914", a: "1" },
      {
        n: ["ok", "yes", "sunny", "salute", "troops", "saluting face"],
        u: "1fae1",
        a: "14",
      },
      {
        n: ["zip", "face", "mouth", "zipper", "zipper mouth face"],
        u: "1f910",
        a: "1",
      },
      {
        n: ["skeptic", "distrust", "face with raised eyebrow"],
        u: "1f928",
        a: "5",
      },
      {
        n: ["meh", "face", "deadpan", "neutral", "neutral face"],
        u: "1f610",
        a: "0.7",
      },
      {
        n: [
          "meh",
          "face",
          "inexpressive",
          "unexpressive",
          "expressionless",
          "expressionless face",
        ],
        u: "1f611",
        a: "1",
      },
      {
        n: ["face", "mouth", "quiet", "silent", "face without mouth"],
        u: "1f636",
        a: "1",
      },
      {
        n: [
          "hide",
          "depressed",
          "disappear",
          "introvert",
          "invisible",
          "dotted line face",
        ],
        u: "1fae5",
        a: "14",
      },
      {
        n: [
          "absentminded",
          "face in clouds",
          "head in clouds",
          "face in the fog",
        ],
        u: "1f636-200d-1f32b-fe0f",
        a: "13.1",
      },
      { n: ["face", "smirk", "smirking face"], u: "1f60f", a: "0.6" },
      {
        n: ["face", "unhappy", "unamused", "unamused face"],
        u: "1f612",
        a: "0.6",
      },
      {
        n: ["eyes", "face", "eyeroll", "rolling", "face with rolling eyes"],
        u: "1f644",
        a: "1",
      },
      { n: ["face", "grimace", "grimacing face"], u: "1f62c", a: "1" },
      {
        n: [
          "gasp",
          "groan",
          "exhale",
          "relief",
          "whisper",
          "whistle",
          "face exhaling",
        ],
        u: "1f62e-200d-1f4a8",
        a: "13.1",
      },
      { n: ["lie", "face", "pinocchio", "lying face"], u: "1f925", a: "3" },
      {
        n: [
          "face",
          "shock",
          "shaking",
          "vibrate",
          "earthquake",
          "shaking face",
        ],
        u: "1fae8",
        a: "15",
      },
      {
        n: ["no", "shake", "head shaking horizontally"],
        u: "1f642-200d-2194-fe0f",
        a: "15.1",
      },
      {
        n: ["nod", "yes", "head shaking vertically"],
        u: "1f642-200d-2195-fe0f",
        a: "15.1",
      },
      { n: ["face", "relieved", "relieved face"], u: "1f60c", a: "0.6" },
      {
        n: ["face", "pensive", "dejected", "pensive face"],
        u: "1f614",
        a: "0.6",
      },
      {
        n: ["face", "sleep", "good night", "sleepy face"],
        u: "1f62a",
        a: "0.6",
      },
      { n: ["face", "drooling", "drooling face"], u: "1f924", a: "3" },
      {
        n: ["zzz", "face", "sleep", "good night", "sleeping face"],
        u: "1f634",
        a: "1",
      },
      {
        n: ["cold", "face", "mask", "sick", "doctor", "face with medical mask"],
        u: "1f637",
        a: "0.6",
      },
      {
        n: ["ill", "face", "sick", "thermometer", "face with thermometer"],
        u: "1f912",
        a: "1",
      },
      {
        n: ["face", "hurt", "injury", "bandage", "face with head bandage"],
        u: "1f915",
        a: "1",
      },
      {
        n: ["face", "vomit", "nauseated", "nauseated face"],
        u: "1f922",
        a: "3",
      },
      { n: ["puke", "sick", "vomit", "face vomiting"], u: "1f92e", a: "5" },
      {
        n: ["face", "sneeze", "gesundheit", "sneezing face"],
        u: "1f927",
        a: "3",
      },
      {
        n: [
          "hot",
          "hot face",
          "feverish",
          "sweating",
          "red faced",
          "heat stroke",
        ],
        u: "1f975",
        a: "11",
      },
      {
        n: [
          "cold",
          "icicles",
          "freezing",
          "cold face",
          "frostbite",
          "blue faced",
        ],
        u: "1f976",
        a: "11",
      },
      {
        n: [
          "dizzy",
          "tipsy",
          "woozy face",
          "wavy mouth",
          "intoxicated",
          "uneven eyes",
        ],
        u: "1f974",
        a: "11",
      },
      {
        n: [
          "dead",
          "face",
          "knocked out",
          "crossed out eyes",
          "face with crossed out eyes",
        ],
        u: "1f635",
        a: "0.6",
      },
      {
        n: [
          "whoa",
          "dizzy",
          "spiral",
          "trouble",
          "hypnotized",
          "face with spiral eyes",
        ],
        u: "1f635-200d-1f4ab",
        a: "13.1",
      },
      { n: ["shocked", "mind blown", "exploding head"], u: "1f92f", a: "5" },
      {
        n: ["hat", "face", "cowboy", "cowgirl", "cowboy hat face"],
        u: "1f920",
        a: "3",
      },
      {
        n: ["hat", "horn", "party", "celebration", "partying face"],
        u: "1f973",
        a: "11",
      },
      {
        n: [
          "face",
          "nose",
          "glasses",
          "disguise",
          "incognito",
          "disguised face",
        ],
        u: "1f978",
        a: "13",
      },
      {
        n: [
          "sun",
          "cool",
          "face",
          "bright",
          "sunglasses",
          "smiling face with sunglasses",
        ],
        u: "1f60e",
        a: "1",
      },
      { n: ["face", "geek", "nerd", "nerd face"], u: "1f913", a: "1" },
      {
        n: ["face", "stuffy", "monocle", "face with monocle"],
        u: "1f9d0",
        a: "5",
      },
      { n: ["meh", "face", "confused", "confused face"], u: "1f615", a: "1" },
      {
        n: [
          "meh",
          "unsure",
          "skeptical",
          "disappointed",
          "face with diagonal mouth",
        ],
        u: "1fae4",
        a: "14",
      },
      { n: ["face", "worried", "worried face"], u: "1f61f", a: "1" },
      { n: ["face", "frown", "slightly frowning face"], u: "1f641", a: "1" },
      {
        n: ["face", "open", "mouth", "sympathy", "face with open mouth"],
        u: "1f62e",
        a: "1",
      },
      {
        n: ["face", "hushed", "stunned", "surprised", "hushed face"],
        u: "1f62f",
        a: "1",
      },
      {
        n: ["face", "shocked", "totally", "astonished", "astonished face"],
        u: "1f632",
        a: "0.6",
      },
      { n: ["face", "dazed", "flushed", "flushed face"], u: "1f633", a: "0.6" },
      {
        n: ["mercy", "begging", "puppy eyes", "pleading face"],
        u: "1f97a",
        a: "11",
      },
      {
        n: [
          "cry",
          "sad",
          "angry",
          "proud",
          "resist",
          "face holding back tears",
        ],
        u: "1f979",
        a: "14",
      },
      {
        n: ["face", "open", "frown", "mouth", "frowning face with open mouth"],
        u: "1f626",
        a: "1",
      },
      { n: ["face", "anguished", "anguished face"], u: "1f627", a: "1" },
      {
        n: ["face", "fear", "scared", "fearful", "fearful face"],
        u: "1f628",
        a: "0.6",
      },
      {
        n: [
          "blue",
          "cold",
          "face",
          "sweat",
          "rushed",
          "anxious face with sweat",
        ],
        u: "1f630",
        a: "0.6",
      },
      {
        n: [
          "face",
          "whew",
          "relieved",
          "disappointed",
          "sad but relieved face",
        ],
        u: "1f625",
        a: "0.6",
      },
      {
        n: ["cry", "sad", "face", "tear", "crying face"],
        u: "1f622",
        a: "0.6",
      },
      {
        n: ["cry", "sad", "sob", "face", "tear", "loudly crying face"],
        u: "1f62d",
        a: "0.6",
      },
      {
        n: [
          "face",
          "fear",
          "munch",
          "scared",
          "scream",
          "face screaming in fear",
        ],
        u: "1f631",
        a: "0.6",
      },
      { n: ["face", "confounded", "confounded face"], u: "1f616", a: "0.6" },
      { n: ["face", "persevere", "persevering face"], u: "1f623", a: "0.6" },
      {
        n: ["face", "disappointed", "disappointed face"],
        u: "1f61e",
        a: "0.6",
      },
      {
        n: ["cold", "face", "sweat", "downcast face with sweat"],
        u: "1f613",
        a: "0.6",
      },
      { n: ["face", "tired", "weary", "weary face"], u: "1f629", a: "0.6" },
      { n: ["face", "tired", "tired face"], u: "1f62b", a: "0.6" },
      { n: ["yawn", "bored", "tired", "yawning face"], u: "1f971", a: "12" },
      {
        n: ["won", "face", "triumph", "face with steam from nose"],
        u: "1f624",
        a: "0.6",
      },
      {
        n: [
          "mad",
          "red",
          "face",
          "rage",
          "angry",
          "enraged",
          "pouting",
          "enraged face",
        ],
        u: "1f621",
        a: "0.6",
      },
      {
        n: ["mad", "face", "anger", "angry", "angry face"],
        u: "1f620",
        a: "0.6",
      },
      { n: ["swearing", "face with symbols on mouth"], u: "1f92c", a: "5" },
      {
        n: [
          "face",
          "horns",
          "smile",
          "fantasy",
          "fairy tale",
          "smiling face with horns",
        ],
        u: "1f608",
        a: "1",
      },
      {
        n: [
          "imp",
          "face",
          "demon",
          "devil",
          "fantasy",
          "angry face with horns",
        ],
        u: "1f47f",
        a: "0.6",
      },
      {
        n: ["face", "skull", "death", "monster", "fairy tale"],
        u: "1f480",
        a: "0.6",
      },
      {
        n: ["poo", "dung", "face", "poop", "monster", "pile of poo"],
        u: "1f4a9",
        a: "0.6",
      },
      { n: ["face", "clown", "clown face"], u: "1f921", a: "3" },
      {
        n: ["ogre", "face", "fantasy", "monster", "creature", "fairy tale"],
        u: "1f479",
        a: "0.6",
      },
      {
        n: ["face", "goblin", "fantasy", "monster", "creature", "fairy tale"],
        u: "1f47a",
        a: "0.6",
      },
      {
        n: ["face", "ghost", "fantasy", "monster", "creature", "fairy tale"],
        u: "1f47b",
        a: "0.6",
      },
      {
        n: ["ufo", "face", "alien", "fantasy", "creature", "extraterrestrial"],
        u: "1f47d",
        a: "0.6",
      },
      {
        n: [
          "ufo",
          "face",
          "alien",
          "monster",
          "creature",
          "alien monster",
          "extraterrestrial",
        ],
        u: "1f47e",
        a: "0.6",
      },
      { n: ["face", "robot", "monster"], u: "1f916", a: "1" },
      {
        n: [
          "cat",
          "face",
          "open",
          "mouth",
          "smile",
          "grinning",
          "grinning cat",
        ],
        u: "1f63a",
        a: "0.6",
      },
      {
        n: [
          "cat",
          "eye",
          "face",
          "grin",
          "smile",
          "grinning cat with smiling eyes",
        ],
        u: "1f638",
        a: "0.6",
      },
      {
        n: ["cat", "joy", "face", "tear", "cat with tears of joy"],
        u: "1f639",
        a: "0.6",
      },
      {
        n: [
          "cat",
          "eye",
          "face",
          "love",
          "heart",
          "smile",
          "smiling cat with heart eyes",
        ],
        u: "1f63b",
        a: "0.6",
      },
      {
        n: ["cat", "wry", "face", "smile", "ironic", "cat with wry smile"],
        u: "1f63c",
        a: "0.6",
      },
      {
        n: ["cat", "eye", "face", "kiss", "kissing cat"],
        u: "1f63d",
        a: "0.6",
      },
      {
        n: ["oh", "cat", "face", "weary", "weary cat", "surprised"],
        u: "1f640",
        a: "0.6",
      },
      {
        n: ["cat", "cry", "sad", "face", "tear", "crying cat"],
        u: "1f63f",
        a: "0.6",
      },
      { n: ["cat", "face", "pouting", "pouting cat"], u: "1f63e", a: "0.6" },
      {
        n: ["see", "evil", "face", "monkey", "forbidden", "see no evil monkey"],
        u: "1f648",
        a: "0.6",
      },
      {
        n: [
          "evil",
          "face",
          "hear",
          "monkey",
          "forbidden",
          "hear no evil monkey",
        ],
        u: "1f649",
        a: "0.6",
      },
      {
        n: [
          "evil",
          "face",
          "speak",
          "monkey",
          "forbidden",
          "speak no evil monkey",
        ],
        u: "1f64a",
        a: "0.6",
      },
      {
        n: ["love", "mail", "heart", "letter", "love letter"],
        u: "1f48c",
        a: "0.6",
      },
      { n: ["arrow", "cupid", "heart with arrow"], u: "1f498", a: "0.6" },
      { n: ["ribbon", "valentine", "heart with ribbon"], u: "1f49d", a: "0.6" },
      { n: ["excited", "sparkle", "sparkling heart"], u: "1f496", a: "0.6" },
      {
        n: ["pulse", "excited", "growing", "nervous", "growing heart"],
        u: "1f497",
        a: "0.6",
      },
      {
        n: ["beating", "heartbeat", "pulsating", "beating heart"],
        u: "1f493",
        a: "0.6",
      },
      { n: ["revolving", "revolving hearts"], u: "1f49e", a: "0.6" },
      { n: ["love", "two hearts"], u: "1f495", a: "0.6" },
      { n: ["heart", "heart decoration"], u: "1f49f", a: "0.6" },
      { n: ["break", "broken", "broken heart"], u: "1f494", a: "0.6" },
      {
        n: ["burn", "love", "lust", "heart", "sacred heart", "heart on fire"],
        u: "2764-fe0f-200d-1f525",
        a: "13.1",
      },
      {
        n: [
          "well",
          "mending",
          "healthier",
          "improving",
          "recovering",
          "recuperating",
          "mending heart",
        ],
        u: "2764-fe0f-200d-1fa79",
        a: "13.1",
      },
      {
        n: ["cute", "like", "love", "pink", "heart", "pink heart"],
        u: "1fa77",
        a: "15",
      },
      { n: ["orange", "orange heart"], u: "1f9e1", a: "5" },
      { n: ["yellow", "yellow heart"], u: "1f49b", a: "0.6" },
      { n: ["green", "green heart"], u: "1f49a", a: "0.6" },
      { n: ["blue", "blue heart"], u: "1f499", a: "0.6" },
      {
        n: ["cyan", "teal", "heart", "light blue", "light blue heart"],
        u: "1fa75",
        a: "15",
      },
      { n: ["purple", "purple heart"], u: "1f49c", a: "0.6" },
      { n: ["brown", "heart", "brown heart"], u: "1f90e", a: "12" },
      { n: ["evil", "black", "wicked", "black heart"], u: "1f5a4", a: "3" },
      {
        n: ["gray", "heart", "slate", "silver", "grey heart"],
        u: "1fa76",
        a: "15",
      },
      { n: ["heart", "white", "white heart"], u: "1f90d", a: "12" },
      { n: ["kiss", "lips", "kiss mark"], u: "1f48b", a: "0.6" },
      {
        n: ["100", "full", "score", "hundred", "hundred points"],
        u: "1f4af",
        a: "0.6",
      },
      { n: ["mad", "angry", "comic", "anger symbol"], u: "1f4a2", a: "0.6" },
      { n: ["boom", "comic", "collision"], u: "1f4a5", a: "0.6" },
      { n: ["star", "dizzy", "comic"], u: "1f4ab", a: "0.6" },
      {
        n: ["comic", "sweat", "splashing", "sweat droplets"],
        u: "1f4a6",
        a: "0.6",
      },
      { n: ["dash", "comic", "running", "dashing away"], u: "1f4a8", a: "0.6" },
      {
        n: ["comic", "bubble", "dialog", "speech", "balloon", "speech balloon"],
        u: "1f4ac",
        a: "0.6",
      },
      {
        n: [
          "eye",
          "bubble",
          "speech",
          "balloon",
          "witness",
          "eye in speech bubble",
        ],
        u: "1f441-fe0f-200d-1f5e8-fe0f",
        a: "2",
      },
      {
        n: ["comic", "bubble", "balloon", "thought", "thought balloon"],
        u: "1f4ad",
        a: "1",
      },
      {
        n: ["ZZZ", "zzz", "comic", "sleep", "good night"],
        u: "1f4a4",
        a: "0.6",
      },
      {
        n: ["hand", "wave", "waving", "waving hand"],
        u: "1f44b",
        v: [
          "1f44b-1f3fb",
          "1f44b-1f3fc",
          "1f44b-1f3fd",
          "1f44b-1f3fe",
          "1f44b-1f3ff",
        ],
        a: "0.6",
      },
      {
        n: ["raised", "backhand", "raised back of hand"],
        u: "1f91a",
        v: [
          "1f91a-1f3fb",
          "1f91a-1f3fc",
          "1f91a-1f3fd",
          "1f91a-1f3fe",
          "1f91a-1f3ff",
        ],
        a: "3",
      },
      {
        n: ["hand", "high 5", "high five", "raised hand"],
        u: "270b",
        v: [
          "270b-1f3fb",
          "270b-1f3fc",
          "270b-1f3fd",
          "270b-1f3fe",
          "270b-1f3ff",
        ],
        a: "0.6",
      },
      {
        n: ["hand", "spock", "finger", "vulcan", "vulcan salute"],
        u: "1f596",
        v: [
          "1f596-1f3fb",
          "1f596-1f3fc",
          "1f596-1f3fd",
          "1f596-1f3fe",
          "1f596-1f3ff",
        ],
        a: "1",
      },
      {
        n: ["hand", "right", "rightward", "rightwards hand"],
        u: "1faf1",
        v: [
          "1faf1-1f3fb",
          "1faf1-1f3fc",
          "1faf1-1f3fd",
          "1faf1-1f3fe",
          "1faf1-1f3ff",
        ],
        a: "14",
      },
      {
        n: ["hand", "left", "leftward", "leftwards hand"],
        u: "1faf2",
        v: [
          "1faf2-1f3fb",
          "1faf2-1f3fc",
          "1faf2-1f3fd",
          "1faf2-1f3fe",
          "1faf2-1f3ff",
        ],
        a: "14",
      },
      {
        n: ["drop", "shoo", "dismiss", "palm down hand"],
        u: "1faf3",
        v: [
          "1faf3-1f3fb",
          "1faf3-1f3fc",
          "1faf3-1f3fd",
          "1faf3-1f3fe",
          "1faf3-1f3ff",
        ],
        a: "14",
      },
      {
        n: ["come", "catch", "offer", "beckon", "palm up hand"],
        u: "1faf4",
        v: [
          "1faf4-1f3fb",
          "1faf4-1f3fc",
          "1faf4-1f3fd",
          "1faf4-1f3fe",
          "1faf4-1f3ff",
        ],
        a: "14",
      },
      {
        n: [
          "push",
          "stop",
          "wait",
          "refuse",
          "leftward",
          "high five",
          "leftwards pushing hand",
        ],
        u: "1faf7",
        v: [
          "1faf7-1f3fb",
          "1faf7-1f3fc",
          "1faf7-1f3fd",
          "1faf7-1f3fe",
          "1faf7-1f3ff",
        ],
        a: "15",
      },
      {
        n: [
          "push",
          "stop",
          "wait",
          "refuse",
          "high five",
          "rightward",
          "rightwards pushing hand",
        ],
        u: "1faf8",
        v: [
          "1faf8-1f3fb",
          "1faf8-1f3fc",
          "1faf8-1f3fd",
          "1faf8-1f3fe",
          "1faf8-1f3ff",
        ],
        a: "15",
      },
      {
        n: ["ok", "hand", "OK hand"],
        u: "1f44c",
        v: [
          "1f44c-1f3fb",
          "1f44c-1f3fc",
          "1f44c-1f3fd",
          "1f44c-1f3fe",
          "1f44c-1f3ff",
        ],
        a: "0.6",
      },
      {
        n: [
          "fingers",
          "pinched",
          "sarcastic",
          "hand gesture",
          "interrogation",
          "pinched fingers",
        ],
        u: "1f90c",
        v: [
          "1f90c-1f3fb",
          "1f90c-1f3fc",
          "1f90c-1f3fd",
          "1f90c-1f3fe",
          "1f90c-1f3ff",
        ],
        a: "13",
      },
      {
        n: ["small amount", "pinching hand"],
        u: "1f90f",
        v: [
          "1f90f-1f3fb",
          "1f90f-1f3fc",
          "1f90f-1f3fd",
          "1f90f-1f3fe",
          "1f90f-1f3ff",
        ],
        a: "12",
      },
      {
        n: ["hand", "luck", "cross", "finger", "crossed fingers"],
        u: "1f91e",
        v: [
          "1f91e-1f3fb",
          "1f91e-1f3fc",
          "1f91e-1f3fd",
          "1f91e-1f3fe",
          "1f91e-1f3ff",
        ],
        a: "3",
      },
      {
        n: [
          "love",
          "snap",
          "heart",
          "money",
          "expensive",
          "hand with index finger and thumb crossed",
        ],
        u: "1faf0",
        v: [
          "1faf0-1f3fb",
          "1faf0-1f3fc",
          "1faf0-1f3fd",
          "1faf0-1f3fe",
          "1faf0-1f3ff",
        ],
        a: "14",
      },
      {
        n: ["ily", "hand", "love you gesture"],
        u: "1f91f",
        v: [
          "1f91f-1f3fb",
          "1f91f-1f3fc",
          "1f91f-1f3fd",
          "1f91f-1f3fe",
          "1f91f-1f3ff",
        ],
        a: "5",
      },
      {
        n: ["hand", "horns", "finger", "rock on", "sign of the horns"],
        u: "1f918",
        v: [
          "1f918-1f3fb",
          "1f918-1f3fc",
          "1f918-1f3fd",
          "1f918-1f3fe",
          "1f918-1f3ff",
        ],
        a: "1",
      },
      {
        n: ["call", "hand", "shaka", "hang loose", "call me hand"],
        u: "1f919",
        v: [
          "1f919-1f3fb",
          "1f919-1f3fc",
          "1f919-1f3fd",
          "1f919-1f3fe",
          "1f919-1f3ff",
        ],
        a: "3",
      },
      {
        n: [
          "hand",
          "index",
          "point",
          "finger",
          "backhand",
          "backhand index pointing left",
        ],
        u: "1f448",
        v: [
          "1f448-1f3fb",
          "1f448-1f3fc",
          "1f448-1f3fd",
          "1f448-1f3fe",
          "1f448-1f3ff",
        ],
        a: "0.6",
      },
      {
        n: [
          "hand",
          "index",
          "point",
          "finger",
          "backhand",
          "backhand index pointing right",
        ],
        u: "1f449",
        v: [
          "1f449-1f3fb",
          "1f449-1f3fc",
          "1f449-1f3fd",
          "1f449-1f3fe",
          "1f449-1f3ff",
        ],
        a: "0.6",
      },
      {
        n: [
          "up",
          "hand",
          "point",
          "finger",
          "backhand",
          "backhand index pointing up",
        ],
        u: "1f446",
        v: [
          "1f446-1f3fb",
          "1f446-1f3fc",
          "1f446-1f3fd",
          "1f446-1f3fe",
          "1f446-1f3ff",
        ],
        a: "0.6",
      },
      {
        n: ["hand", "finger", "middle finger"],
        u: "1f595",
        v: [
          "1f595-1f3fb",
          "1f595-1f3fc",
          "1f595-1f3fd",
          "1f595-1f3fe",
          "1f595-1f3ff",
        ],
        a: "1",
      },
      {
        n: [
          "down",
          "hand",
          "point",
          "finger",
          "backhand",
          "backhand index pointing down",
        ],
        u: "1f447",
        v: [
          "1f447-1f3fb",
          "1f447-1f3fc",
          "1f447-1f3fd",
          "1f447-1f3fe",
          "1f447-1f3ff",
        ],
        a: "0.6",
      },
      {
        n: ["you", "point", "index pointing at the viewer"],
        u: "1faf5",
        v: [
          "1faf5-1f3fb",
          "1faf5-1f3fc",
          "1faf5-1f3fd",
          "1faf5-1f3fe",
          "1faf5-1f3ff",
        ],
        a: "14",
      },
      {
        n: ["+1", "up", "hand", "thumb", "thumbs up"],
        u: "1f44d",
        v: [
          "1f44d-1f3fb",
          "1f44d-1f3fc",
          "1f44d-1f3fd",
          "1f44d-1f3fe",
          "1f44d-1f3ff",
        ],
        a: "0.6",
      },
      {
        n: [" 1", "down", "hand", "thumb", "thumbs down"],
        u: "1f44e",
        v: [
          "1f44e-1f3fb",
          "1f44e-1f3fc",
          "1f44e-1f3fd",
          "1f44e-1f3fe",
          "1f44e-1f3ff",
        ],
        a: "0.6",
      },
      {
        n: ["fist", "hand", "punch", "clenched", "raised fist"],
        u: "270a",
        v: [
          "270a-1f3fb",
          "270a-1f3fc",
          "270a-1f3fd",
          "270a-1f3fe",
          "270a-1f3ff",
        ],
        a: "0.6",
      },
      {
        n: ["fist", "hand", "punch", "clenched", "oncoming fist"],
        u: "1f44a",
        v: [
          "1f44a-1f3fb",
          "1f44a-1f3fc",
          "1f44a-1f3fd",
          "1f44a-1f3fe",
          "1f44a-1f3ff",
        ],
        a: "0.6",
      },
      {
        n: ["fist", "leftwards", "left facing fist"],
        u: "1f91b",
        v: [
          "1f91b-1f3fb",
          "1f91b-1f3fc",
          "1f91b-1f3fd",
          "1f91b-1f3fe",
          "1f91b-1f3ff",
        ],
        a: "3",
      },
      {
        n: ["fist", "rightwards", "right facing fist"],
        u: "1f91c",
        v: [
          "1f91c-1f3fb",
          "1f91c-1f3fc",
          "1f91c-1f3fd",
          "1f91c-1f3fe",
          "1f91c-1f3ff",
        ],
        a: "3",
      },
      {
        n: ["clap", "hand", "clapping hands"],
        u: "1f44f",
        v: [
          "1f44f-1f3fb",
          "1f44f-1f3fc",
          "1f44f-1f3fd",
          "1f44f-1f3fe",
          "1f44f-1f3ff",
        ],
        a: "0.6",
      },
      {
        n: [
          "hand",
          "hooray",
          "raised",
          "gesture",
          "celebration",
          "raising hands",
        ],
        u: "1f64c",
        v: [
          "1f64c-1f3fb",
          "1f64c-1f3fc",
          "1f64c-1f3fd",
          "1f64c-1f3fe",
          "1f64c-1f3ff",
        ],
        a: "0.6",
      },
      {
        n: ["love", "heart hands"],
        u: "1faf6",
        v: [
          "1faf6-1f3fb",
          "1faf6-1f3fc",
          "1faf6-1f3fd",
          "1faf6-1f3fe",
          "1faf6-1f3ff",
        ],
        a: "14",
      },
      {
        n: ["hand", "open", "open hands"],
        u: "1f450",
        v: [
          "1f450-1f3fb",
          "1f450-1f3fc",
          "1f450-1f3fd",
          "1f450-1f3fe",
          "1f450-1f3ff",
        ],
        a: "0.6",
      },
      {
        n: ["prayer", "palms up together"],
        u: "1f932",
        v: [
          "1f932-1f3fb",
          "1f932-1f3fc",
          "1f932-1f3fd",
          "1f932-1f3fe",
          "1f932-1f3ff",
        ],
        a: "5",
      },
      {
        n: ["hand", "shake", "meeting", "handshake", "agreement"],
        u: "1f91d",
        v: [
          "1f91d-1f3fb",
          "1f91d-1f3fc",
          "1f91d-1f3fd",
          "1f91d-1f3fe",
          "1f91d-1f3ff",
          "1faf1-1f3fb-200d-1faf2-1f3fc",
          "1faf1-1f3fb-200d-1faf2-1f3fd",
          "1faf1-1f3fb-200d-1faf2-1f3fe",
          "1faf1-1f3fb-200d-1faf2-1f3ff",
          "1faf1-1f3fc-200d-1faf2-1f3fb",
          "1faf1-1f3fc-200d-1faf2-1f3fd",
          "1faf1-1f3fc-200d-1faf2-1f3fe",
          "1faf1-1f3fc-200d-1faf2-1f3ff",
          "1faf1-1f3fd-200d-1faf2-1f3fb",
          "1faf1-1f3fd-200d-1faf2-1f3fc",
          "1faf1-1f3fd-200d-1faf2-1f3fe",
          "1faf1-1f3fd-200d-1faf2-1f3ff",
          "1faf1-1f3fe-200d-1faf2-1f3fb",
          "1faf1-1f3fe-200d-1faf2-1f3fc",
          "1faf1-1f3fe-200d-1faf2-1f3fd",
          "1faf1-1f3fe-200d-1faf2-1f3ff",
          "1faf1-1f3ff-200d-1faf2-1f3fb",
          "1faf1-1f3ff-200d-1faf2-1f3fc",
          "1faf1-1f3ff-200d-1faf2-1f3fd",
          "1faf1-1f3ff-200d-1faf2-1f3fe",
        ],
        a: "3",
      },
      {
        n: [
          "ask",
          "hand",
          "pray",
          "high 5",
          "please",
          "thanks",
          "high five",
          "folded hands",
        ],
        u: "1f64f",
        v: [
          "1f64f-1f3fb",
          "1f64f-1f3fc",
          "1f64f-1f3fd",
          "1f64f-1f3fe",
          "1f64f-1f3ff",
        ],
        a: "0.6",
      },
      {
        n: ["care", "nail", "polish", "manicure", "cosmetics", "nail polish"],
        u: "1f485",
        v: [
          "1f485-1f3fb",
          "1f485-1f3fc",
          "1f485-1f3fd",
          "1f485-1f3fe",
          "1f485-1f3ff",
        ],
        a: "0.6",
      },
      {
        n: ["phone", "selfie", "camera"],
        u: "1f933",
        v: [
          "1f933-1f3fb",
          "1f933-1f3fc",
          "1f933-1f3fd",
          "1f933-1f3fe",
          "1f933-1f3ff",
        ],
        a: "3",
      },
      {
        n: ["flex", "comic", "biceps", "muscle", "flexed biceps"],
        u: "1f4aa",
        v: [
          "1f4aa-1f3fb",
          "1f4aa-1f3fc",
          "1f4aa-1f3fd",
          "1f4aa-1f3fe",
          "1f4aa-1f3ff",
        ],
        a: "0.6",
      },
      {
        n: ["prosthetic", "accessibility", "mechanical arm"],
        u: "1f9be",
        a: "12",
      },
      {
        n: ["prosthetic", "accessibility", "mechanical leg"],
        u: "1f9bf",
        a: "12",
      },
      {
        n: ["leg", "kick", "limb"],
        u: "1f9b5",
        v: [
          "1f9b5-1f3fb",
          "1f9b5-1f3fc",
          "1f9b5-1f3fd",
          "1f9b5-1f3fe",
          "1f9b5-1f3ff",
        ],
        a: "11",
      },
      {
        n: ["foot", "kick", "stomp"],
        u: "1f9b6",
        v: [
          "1f9b6-1f3fb",
          "1f9b6-1f3fc",
          "1f9b6-1f3fd",
          "1f9b6-1f3fe",
          "1f9b6-1f3ff",
        ],
        a: "11",
      },
      {
        n: ["ear", "body"],
        u: "1f442",
        v: [
          "1f442-1f3fb",
          "1f442-1f3fc",
          "1f442-1f3fd",
          "1f442-1f3fe",
          "1f442-1f3ff",
        ],
        a: "0.6",
      },
      {
        n: ["accessibility", "hard of hearing", "ear with hearing aid"],
        u: "1f9bb",
        v: [
          "1f9bb-1f3fb",
          "1f9bb-1f3fc",
          "1f9bb-1f3fd",
          "1f9bb-1f3fe",
          "1f9bb-1f3ff",
        ],
        a: "12",
      },
      {
        n: ["nose", "body"],
        u: "1f443",
        v: [
          "1f443-1f3fb",
          "1f443-1f3fc",
          "1f443-1f3fd",
          "1f443-1f3fe",
          "1f443-1f3ff",
        ],
        a: "0.6",
      },
      { n: ["brain", "intelligent"], u: "1f9e0", a: "5" },
      {
        n: [
          "heart",
          "organ",
          "pulse",
          "anatomical",
          "cardiology",
          "anatomical heart",
        ],
        u: "1fac0",
        a: "13",
      },
      {
        n: [
          "lungs",
          "organ",
          "breath",
          "exhalation",
          "inhalation",
          "respiration",
        ],
        u: "1fac1",
        a: "13",
      },
      { n: ["tooth", "dentist"], u: "1f9b7", a: "11" },
      { n: ["bone", "skeleton"], u: "1f9b4", a: "11" },
      { n: ["eye", "eyes", "face"], u: "1f440", a: "0.6" },
      { n: ["body", "tongue"], u: "1f445", a: "0.6" },
      { n: ["lips", "mouth"], u: "1f444", a: "0.6" },
      {
        n: [
          "fear",
          "anxious",
          "nervous",
          "worried",
          "flirting",
          "biting lip",
          "uncomfortable",
        ],
        u: "1fae6",
        a: "14",
      },
      {
        n: ["baby", "young"],
        u: "1f476",
        v: [
          "1f476-1f3fb",
          "1f476-1f3fc",
          "1f476-1f3fd",
          "1f476-1f3fe",
          "1f476-1f3ff",
        ],
        a: "0.6",
      },
      {
        n: ["child", "young", "gender neutral", "unspecified gender"],
        u: "1f9d2",
        v: [
          "1f9d2-1f3fb",
          "1f9d2-1f3fc",
          "1f9d2-1f3fd",
          "1f9d2-1f3fe",
          "1f9d2-1f3ff",
        ],
        a: "5",
      },
      {
        n: ["boy", "young"],
        u: "1f466",
        v: [
          "1f466-1f3fb",
          "1f466-1f3fc",
          "1f466-1f3fd",
          "1f466-1f3fe",
          "1f466-1f3ff",
        ],
        a: "0.6",
      },
      {
        n: ["girl", "virgo", "young", "zodiac"],
        u: "1f467",
        v: [
          "1f467-1f3fb",
          "1f467-1f3fc",
          "1f467-1f3fd",
          "1f467-1f3fe",
          "1f467-1f3ff",
        ],
        a: "0.6",
      },
      {
        n: ["adult", "person", "gender neutral", "unspecified gender"],
        u: "1f9d1",
        v: [
          "1f9d1-1f3fb",
          "1f9d1-1f3fc",
          "1f9d1-1f3fd",
          "1f9d1-1f3fe",
          "1f9d1-1f3ff",
        ],
        a: "5",
      },
      {
        n: ["hair", "blond", "person: blond hair", "blond haired person"],
        u: "1f471",
        v: [
          "1f471-1f3fb",
          "1f471-1f3fc",
          "1f471-1f3fd",
          "1f471-1f3fe",
          "1f471-1f3ff",
        ],
        a: "0.6",
      },
      {
        n: ["man", "adult"],
        u: "1f468",
        v: [
          "1f468-1f3fb",
          "1f468-1f3fc",
          "1f468-1f3fd",
          "1f468-1f3fe",
          "1f468-1f3ff",
        ],
        a: "0.6",
      },
      {
        n: ["beard", "person", "person: beard"],
        u: "1f9d4",
        v: [
          "1f9d4-1f3fb",
          "1f9d4-1f3fc",
          "1f9d4-1f3fd",
          "1f9d4-1f3fe",
          "1f9d4-1f3ff",
        ],
        a: "5",
      },
      {
        n: ["man", "beard", "man: beard"],
        u: "1f9d4-200d-2642-fe0f",
        v: [
          "1f9d4-1f3fb-200d-2642-fe0f",
          "1f9d4-1f3fc-200d-2642-fe0f",
          "1f9d4-1f3fd-200d-2642-fe0f",
          "1f9d4-1f3fe-200d-2642-fe0f",
          "1f9d4-1f3ff-200d-2642-fe0f",
        ],
        a: "13.1",
      },
      {
        n: ["beard", "woman", "woman: beard"],
        u: "1f9d4-200d-2640-fe0f",
        v: [
          "1f9d4-1f3fb-200d-2640-fe0f",
          "1f9d4-1f3fc-200d-2640-fe0f",
          "1f9d4-1f3fd-200d-2640-fe0f",
          "1f9d4-1f3fe-200d-2640-fe0f",
          "1f9d4-1f3ff-200d-2640-fe0f",
        ],
        a: "13.1",
      },
      {
        n: ["man", "adult", "red hair", "man: red hair"],
        u: "1f468-200d-1f9b0",
        v: [
          "1f468-1f3fb-200d-1f9b0",
          "1f468-1f3fc-200d-1f9b0",
          "1f468-1f3fd-200d-1f9b0",
          "1f468-1f3fe-200d-1f9b0",
          "1f468-1f3ff-200d-1f9b0",
        ],
        a: "11",
      },
      {
        n: ["man", "adult", "curly hair", "man: curly hair"],
        u: "1f468-200d-1f9b1",
        v: [
          "1f468-1f3fb-200d-1f9b1",
          "1f468-1f3fc-200d-1f9b1",
          "1f468-1f3fd-200d-1f9b1",
          "1f468-1f3fe-200d-1f9b1",
          "1f468-1f3ff-200d-1f9b1",
        ],
        a: "11",
      },
      {
        n: ["man", "adult", "white hair", "man: white hair"],
        u: "1f468-200d-1f9b3",
        v: [
          "1f468-1f3fb-200d-1f9b3",
          "1f468-1f3fc-200d-1f9b3",
          "1f468-1f3fd-200d-1f9b3",
          "1f468-1f3fe-200d-1f9b3",
          "1f468-1f3ff-200d-1f9b3",
        ],
        a: "11",
      },
      {
        n: ["man", "bald", "adult", "man: bald"],
        u: "1f468-200d-1f9b2",
        v: [
          "1f468-1f3fb-200d-1f9b2",
          "1f468-1f3fc-200d-1f9b2",
          "1f468-1f3fd-200d-1f9b2",
          "1f468-1f3fe-200d-1f9b2",
          "1f468-1f3ff-200d-1f9b2",
        ],
        a: "11",
      },
      {
        n: ["woman", "adult"],
        u: "1f469",
        v: [
          "1f469-1f3fb",
          "1f469-1f3fc",
          "1f469-1f3fd",
          "1f469-1f3fe",
          "1f469-1f3ff",
        ],
        a: "0.6",
      },
      {
        n: ["adult", "woman", "red hair", "woman: red hair"],
        u: "1f469-200d-1f9b0",
        v: [
          "1f469-1f3fb-200d-1f9b0",
          "1f469-1f3fc-200d-1f9b0",
          "1f469-1f3fd-200d-1f9b0",
          "1f469-1f3fe-200d-1f9b0",
          "1f469-1f3ff-200d-1f9b0",
        ],
        a: "11",
      },
      {
        n: [
          "adult",
          "person",
          "red hair",
          "gender neutral",
          "person: red hair",
          "unspecified gender",
        ],
        u: "1f9d1-200d-1f9b0",
        v: [
          "1f9d1-1f3fb-200d-1f9b0",
          "1f9d1-1f3fc-200d-1f9b0",
          "1f9d1-1f3fd-200d-1f9b0",
          "1f9d1-1f3fe-200d-1f9b0",
          "1f9d1-1f3ff-200d-1f9b0",
        ],
        a: "12.1",
      },
      {
        n: ["adult", "woman", "curly hair", "woman: curly hair"],
        u: "1f469-200d-1f9b1",
        v: [
          "1f469-1f3fb-200d-1f9b1",
          "1f469-1f3fc-200d-1f9b1",
          "1f469-1f3fd-200d-1f9b1",
          "1f469-1f3fe-200d-1f9b1",
          "1f469-1f3ff-200d-1f9b1",
        ],
        a: "11",
      },
      {
        n: [
          "adult",
          "person",
          "curly hair",
          "gender neutral",
          "person: curly hair",
          "unspecified gender",
        ],
        u: "1f9d1-200d-1f9b1",
        v: [
          "1f9d1-1f3fb-200d-1f9b1",
          "1f9d1-1f3fc-200d-1f9b1",
          "1f9d1-1f3fd-200d-1f9b1",
          "1f9d1-1f3fe-200d-1f9b1",
          "1f9d1-1f3ff-200d-1f9b1",
        ],
        a: "12.1",
      },
      {
        n: ["adult", "woman", "white hair", "woman: white hair"],
        u: "1f469-200d-1f9b3",
        v: [
          "1f469-1f3fb-200d-1f9b3",
          "1f469-1f3fc-200d-1f9b3",
          "1f469-1f3fd-200d-1f9b3",
          "1f469-1f3fe-200d-1f9b3",
          "1f469-1f3ff-200d-1f9b3",
        ],
        a: "11",
      },
      {
        n: [
          "adult",
          "person",
          "white hair",
          "gender neutral",
          "person: white hair",
          "unspecified gender",
        ],
        u: "1f9d1-200d-1f9b3",
        v: [
          "1f9d1-1f3fb-200d-1f9b3",
          "1f9d1-1f3fc-200d-1f9b3",
          "1f9d1-1f3fd-200d-1f9b3",
          "1f9d1-1f3fe-200d-1f9b3",
          "1f9d1-1f3ff-200d-1f9b3",
        ],
        a: "12.1",
      },
      {
        n: ["bald", "adult", "woman", "woman: bald"],
        u: "1f469-200d-1f9b2",
        v: [
          "1f469-1f3fb-200d-1f9b2",
          "1f469-1f3fc-200d-1f9b2",
          "1f469-1f3fd-200d-1f9b2",
          "1f469-1f3fe-200d-1f9b2",
          "1f469-1f3ff-200d-1f9b2",
        ],
        a: "11",
      },
      {
        n: [
          "bald",
          "adult",
          "person",
          "person: bald",
          "gender neutral",
          "unspecified gender",
        ],
        u: "1f9d1-200d-1f9b2",
        v: [
          "1f9d1-1f3fb-200d-1f9b2",
          "1f9d1-1f3fc-200d-1f9b2",
          "1f9d1-1f3fd-200d-1f9b2",
          "1f9d1-1f3fe-200d-1f9b2",
          "1f9d1-1f3ff-200d-1f9b2",
        ],
        a: "12.1",
      },
      {
        n: [
          "hair",
          "woman",
          "blonde",
          "woman: blond hair",
          "blond haired woman",
        ],
        u: "1f471-200d-2640-fe0f",
        v: [
          "1f471-1f3fb-200d-2640-fe0f",
          "1f471-1f3fc-200d-2640-fe0f",
          "1f471-1f3fd-200d-2640-fe0f",
          "1f471-1f3fe-200d-2640-fe0f",
          "1f471-1f3ff-200d-2640-fe0f",
        ],
        a: "4",
      },
      {
        n: ["man", "hair", "blond", "man: blond hair", "blond haired man"],
        u: "1f471-200d-2642-fe0f",
        v: [
          "1f471-1f3fb-200d-2642-fe0f",
          "1f471-1f3fc-200d-2642-fe0f",
          "1f471-1f3fd-200d-2642-fe0f",
          "1f471-1f3fe-200d-2642-fe0f",
          "1f471-1f3ff-200d-2642-fe0f",
        ],
        a: "4",
      },
      {
        n: [
          "old",
          "adult",
          "older person",
          "gender neutral",
          "unspecified gender",
        ],
        u: "1f9d3",
        v: [
          "1f9d3-1f3fb",
          "1f9d3-1f3fc",
          "1f9d3-1f3fd",
          "1f9d3-1f3fe",
          "1f9d3-1f3ff",
        ],
        a: "5",
      },
      {
        n: ["man", "old", "adult", "old man"],
        u: "1f474",
        v: [
          "1f474-1f3fb",
          "1f474-1f3fc",
          "1f474-1f3fd",
          "1f474-1f3fe",
          "1f474-1f3ff",
        ],
        a: "0.6",
      },
      {
        n: ["old", "adult", "woman", "old woman"],
        u: "1f475",
        v: [
          "1f475-1f3fb",
          "1f475-1f3fc",
          "1f475-1f3fd",
          "1f475-1f3fe",
          "1f475-1f3ff",
        ],
        a: "0.6",
      },
      {
        n: ["frown", "gesture", "person frowning"],
        u: "1f64d",
        v: [
          "1f64d-1f3fb",
          "1f64d-1f3fc",
          "1f64d-1f3fd",
          "1f64d-1f3fe",
          "1f64d-1f3ff",
        ],
        a: "0.6",
      },
      {
        n: ["man", "gesture", "frowning", "man frowning"],
        u: "1f64d-200d-2642-fe0f",
        v: [
          "1f64d-1f3fb-200d-2642-fe0f",
          "1f64d-1f3fc-200d-2642-fe0f",
          "1f64d-1f3fd-200d-2642-fe0f",
          "1f64d-1f3fe-200d-2642-fe0f",
          "1f64d-1f3ff-200d-2642-fe0f",
        ],
        a: "4",
      },
      {
        n: ["woman", "gesture", "frowning", "woman frowning"],
        u: "1f64d-200d-2640-fe0f",
        v: [
          "1f64d-1f3fb-200d-2640-fe0f",
          "1f64d-1f3fc-200d-2640-fe0f",
          "1f64d-1f3fd-200d-2640-fe0f",
          "1f64d-1f3fe-200d-2640-fe0f",
          "1f64d-1f3ff-200d-2640-fe0f",
        ],
        a: "4",
      },
      {
        n: ["gesture", "pouting", "person pouting"],
        u: "1f64e",
        v: [
          "1f64e-1f3fb",
          "1f64e-1f3fc",
          "1f64e-1f3fd",
          "1f64e-1f3fe",
          "1f64e-1f3ff",
        ],
        a: "0.6",
      },
      {
        n: ["man", "gesture", "pouting", "man pouting"],
        u: "1f64e-200d-2642-fe0f",
        v: [
          "1f64e-1f3fb-200d-2642-fe0f",
          "1f64e-1f3fc-200d-2642-fe0f",
          "1f64e-1f3fd-200d-2642-fe0f",
          "1f64e-1f3fe-200d-2642-fe0f",
          "1f64e-1f3ff-200d-2642-fe0f",
        ],
        a: "4",
      },
      {
        n: ["woman", "gesture", "pouting", "woman pouting"],
        u: "1f64e-200d-2640-fe0f",
        v: [
          "1f64e-1f3fb-200d-2640-fe0f",
          "1f64e-1f3fc-200d-2640-fe0f",
          "1f64e-1f3fd-200d-2640-fe0f",
          "1f64e-1f3fe-200d-2640-fe0f",
          "1f64e-1f3ff-200d-2640-fe0f",
        ],
        a: "4",
      },
      {
        n: [
          "hand",
          "gesture",
          "forbidden",
          "prohibited",
          "person gesturing NO",
          "person gesturing no",
        ],
        u: "1f645",
        v: [
          "1f645-1f3fb",
          "1f645-1f3fc",
          "1f645-1f3fd",
          "1f645-1f3fe",
          "1f645-1f3ff",
        ],
        a: "0.6",
      },
      {
        n: [
          "man",
          "hand",
          "gesture",
          "forbidden",
          "prohibited",
          "man gesturing NO",
          "man gesturing no",
        ],
        u: "1f645-200d-2642-fe0f",
        v: [
          "1f645-1f3fb-200d-2642-fe0f",
          "1f645-1f3fc-200d-2642-fe0f",
          "1f645-1f3fd-200d-2642-fe0f",
          "1f645-1f3fe-200d-2642-fe0f",
          "1f645-1f3ff-200d-2642-fe0f",
        ],
        a: "4",
      },
      {
        n: [
          "hand",
          "woman",
          "gesture",
          "forbidden",
          "prohibited",
          "woman gesturing NO",
          "woman gesturing no",
        ],
        u: "1f645-200d-2640-fe0f",
        v: [
          "1f645-1f3fb-200d-2640-fe0f",
          "1f645-1f3fc-200d-2640-fe0f",
          "1f645-1f3fd-200d-2640-fe0f",
          "1f645-1f3fe-200d-2640-fe0f",
          "1f645-1f3ff-200d-2640-fe0f",
        ],
        a: "4",
      },
      {
        n: [
          "ok",
          "hand",
          "gesture",
          "person gesturing OK",
          "person gesturing ok",
        ],
        u: "1f646",
        v: [
          "1f646-1f3fb",
          "1f646-1f3fc",
          "1f646-1f3fd",
          "1f646-1f3fe",
          "1f646-1f3ff",
        ],
        a: "0.6",
      },
      {
        n: [
          "ok",
          "man",
          "hand",
          "gesture",
          "man gesturing OK",
          "man gesturing ok",
        ],
        u: "1f646-200d-2642-fe0f",
        v: [
          "1f646-1f3fb-200d-2642-fe0f",
          "1f646-1f3fc-200d-2642-fe0f",
          "1f646-1f3fd-200d-2642-fe0f",
          "1f646-1f3fe-200d-2642-fe0f",
          "1f646-1f3ff-200d-2642-fe0f",
        ],
        a: "4",
      },
      {
        n: [
          "ok",
          "hand",
          "woman",
          "gesture",
          "woman gesturing OK",
          "woman gesturing ok",
        ],
        u: "1f646-200d-2640-fe0f",
        v: [
          "1f646-1f3fb-200d-2640-fe0f",
          "1f646-1f3fc-200d-2640-fe0f",
          "1f646-1f3fd-200d-2640-fe0f",
          "1f646-1f3fe-200d-2640-fe0f",
          "1f646-1f3ff-200d-2640-fe0f",
        ],
        a: "4",
      },
      {
        n: [
          "hand",
          "help",
          "sassy",
          "tipping",
          "information",
          "person tipping hand",
        ],
        u: "1f481",
        v: [
          "1f481-1f3fb",
          "1f481-1f3fc",
          "1f481-1f3fd",
          "1f481-1f3fe",
          "1f481-1f3ff",
        ],
        a: "0.6",
      },
      {
        n: ["man", "sassy", "tipping hand", "man tipping hand"],
        u: "1f481-200d-2642-fe0f",
        v: [
          "1f481-1f3fb-200d-2642-fe0f",
          "1f481-1f3fc-200d-2642-fe0f",
          "1f481-1f3fd-200d-2642-fe0f",
          "1f481-1f3fe-200d-2642-fe0f",
          "1f481-1f3ff-200d-2642-fe0f",
        ],
        a: "4",
      },
      {
        n: ["sassy", "woman", "tipping hand", "woman tipping hand"],
        u: "1f481-200d-2640-fe0f",
        v: [
          "1f481-1f3fb-200d-2640-fe0f",
          "1f481-1f3fc-200d-2640-fe0f",
          "1f481-1f3fd-200d-2640-fe0f",
          "1f481-1f3fe-200d-2640-fe0f",
          "1f481-1f3ff-200d-2640-fe0f",
        ],
        a: "4",
      },
      {
        n: ["hand", "happy", "raised", "gesture", "person raising hand"],
        u: "1f64b",
        v: [
          "1f64b-1f3fb",
          "1f64b-1f3fc",
          "1f64b-1f3fd",
          "1f64b-1f3fe",
          "1f64b-1f3ff",
        ],
        a: "0.6",
      },
      {
        n: ["man", "gesture", "raising hand", "man raising hand"],
        u: "1f64b-200d-2642-fe0f",
        v: [
          "1f64b-1f3fb-200d-2642-fe0f",
          "1f64b-1f3fc-200d-2642-fe0f",
          "1f64b-1f3fd-200d-2642-fe0f",
          "1f64b-1f3fe-200d-2642-fe0f",
          "1f64b-1f3ff-200d-2642-fe0f",
        ],
        a: "4",
      },
      {
        n: ["woman", "gesture", "raising hand", "woman raising hand"],
        u: "1f64b-200d-2640-fe0f",
        v: [
          "1f64b-1f3fb-200d-2640-fe0f",
          "1f64b-1f3fc-200d-2640-fe0f",
          "1f64b-1f3fd-200d-2640-fe0f",
          "1f64b-1f3fe-200d-2640-fe0f",
          "1f64b-1f3ff-200d-2640-fe0f",
        ],
        a: "4",
      },
      {
        n: ["ear", "deaf", "hear", "deaf person", "accessibility"],
        u: "1f9cf",
        v: [
          "1f9cf-1f3fb",
          "1f9cf-1f3fc",
          "1f9cf-1f3fd",
          "1f9cf-1f3fe",
          "1f9cf-1f3ff",
        ],
        a: "12",
      },
      {
        n: ["man", "deaf", "deaf man"],
        u: "1f9cf-200d-2642-fe0f",
        v: [
          "1f9cf-1f3fb-200d-2642-fe0f",
          "1f9cf-1f3fc-200d-2642-fe0f",
          "1f9cf-1f3fd-200d-2642-fe0f",
          "1f9cf-1f3fe-200d-2642-fe0f",
          "1f9cf-1f3ff-200d-2642-fe0f",
        ],
        a: "12",
      },
      {
        n: ["deaf", "woman", "deaf woman"],
        u: "1f9cf-200d-2640-fe0f",
        v: [
          "1f9cf-1f3fb-200d-2640-fe0f",
          "1f9cf-1f3fc-200d-2640-fe0f",
          "1f9cf-1f3fd-200d-2640-fe0f",
          "1f9cf-1f3fe-200d-2640-fe0f",
          "1f9cf-1f3ff-200d-2640-fe0f",
        ],
        a: "12",
      },
      {
        n: ["bow", "sorry", "apology", "gesture", "person bowing"],
        u: "1f647",
        v: [
          "1f647-1f3fb",
          "1f647-1f3fc",
          "1f647-1f3fd",
          "1f647-1f3fe",
          "1f647-1f3ff",
        ],
        a: "0.6",
      },
      {
        n: [
          "man",
          "favor",
          "sorry",
          "bowing",
          "apology",
          "gesture",
          "man bowing",
        ],
        u: "1f647-200d-2642-fe0f",
        v: [
          "1f647-1f3fb-200d-2642-fe0f",
          "1f647-1f3fc-200d-2642-fe0f",
          "1f647-1f3fd-200d-2642-fe0f",
          "1f647-1f3fe-200d-2642-fe0f",
          "1f647-1f3ff-200d-2642-fe0f",
        ],
        a: "4",
      },
      {
        n: [
          "favor",
          "sorry",
          "woman",
          "bowing",
          "apology",
          "gesture",
          "woman bowing",
        ],
        u: "1f647-200d-2640-fe0f",
        v: [
          "1f647-1f3fb-200d-2640-fe0f",
          "1f647-1f3fc-200d-2640-fe0f",
          "1f647-1f3fd-200d-2640-fe0f",
          "1f647-1f3fe-200d-2640-fe0f",
          "1f647-1f3ff-200d-2640-fe0f",
        ],
        a: "4",
      },
      {
        n: ["face", "palm", "disbelief", "exasperation", "person facepalming"],
        u: "1f926",
        v: [
          "1f926-1f3fb",
          "1f926-1f3fc",
          "1f926-1f3fd",
          "1f926-1f3fe",
          "1f926-1f3ff",
        ],
        a: "3",
      },
      {
        n: ["man", "facepalm", "disbelief", "exasperation", "man facepalming"],
        u: "1f926-200d-2642-fe0f",
        v: [
          "1f926-1f3fb-200d-2642-fe0f",
          "1f926-1f3fc-200d-2642-fe0f",
          "1f926-1f3fd-200d-2642-fe0f",
          "1f926-1f3fe-200d-2642-fe0f",
          "1f926-1f3ff-200d-2642-fe0f",
        ],
        a: "4",
      },
      {
        n: [
          "woman",
          "facepalm",
          "disbelief",
          "exasperation",
          "woman facepalming",
        ],
        u: "1f926-200d-2640-fe0f",
        v: [
          "1f926-1f3fb-200d-2640-fe0f",
          "1f926-1f3fc-200d-2640-fe0f",
          "1f926-1f3fd-200d-2640-fe0f",
          "1f926-1f3fe-200d-2640-fe0f",
          "1f926-1f3ff-200d-2640-fe0f",
        ],
        a: "4",
      },
      {
        n: ["doubt", "shrug", "ignorance", "indifference", "person shrugging"],
        u: "1f937",
        v: [
          "1f937-1f3fb",
          "1f937-1f3fc",
          "1f937-1f3fd",
          "1f937-1f3fe",
          "1f937-1f3ff",
        ],
        a: "3",
      },
      {
        n: [
          "man",
          "doubt",
          "shrug",
          "ignorance",
          "indifference",
          "man shrugging",
        ],
        u: "1f937-200d-2642-fe0f",
        v: [
          "1f937-1f3fb-200d-2642-fe0f",
          "1f937-1f3fc-200d-2642-fe0f",
          "1f937-1f3fd-200d-2642-fe0f",
          "1f937-1f3fe-200d-2642-fe0f",
          "1f937-1f3ff-200d-2642-fe0f",
        ],
        a: "4",
      },
      {
        n: [
          "doubt",
          "shrug",
          "woman",
          "ignorance",
          "indifference",
          "woman shrugging",
        ],
        u: "1f937-200d-2640-fe0f",
        v: [
          "1f937-1f3fb-200d-2640-fe0f",
          "1f937-1f3fc-200d-2640-fe0f",
          "1f937-1f3fd-200d-2640-fe0f",
          "1f937-1f3fe-200d-2640-fe0f",
          "1f937-1f3ff-200d-2640-fe0f",
        ],
        a: "4",
      },
      {
        n: ["nurse", "doctor", "therapist", "healthcare", "health worker"],
        u: "1f9d1-200d-2695-fe0f",
        v: [
          "1f9d1-1f3fb-200d-2695-fe0f",
          "1f9d1-1f3fc-200d-2695-fe0f",
          "1f9d1-1f3fd-200d-2695-fe0f",
          "1f9d1-1f3fe-200d-2695-fe0f",
          "1f9d1-1f3ff-200d-2695-fe0f",
        ],
        a: "12.1",
      },
      {
        n: [
          "man",
          "nurse",
          "doctor",
          "therapist",
          "healthcare",
          "man health worker",
        ],
        u: "1f468-200d-2695-fe0f",
        v: [
          "1f468-1f3fb-200d-2695-fe0f",
          "1f468-1f3fc-200d-2695-fe0f",
          "1f468-1f3fd-200d-2695-fe0f",
          "1f468-1f3fe-200d-2695-fe0f",
          "1f468-1f3ff-200d-2695-fe0f",
        ],
        a: "4",
      },
      {
        n: [
          "nurse",
          "woman",
          "doctor",
          "therapist",
          "healthcare",
          "woman health worker",
        ],
        u: "1f469-200d-2695-fe0f",
        v: [