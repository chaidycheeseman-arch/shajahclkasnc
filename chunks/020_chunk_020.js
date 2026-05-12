                  RVA: "Relative volume adjustment",
                  SLT: "Synchronized lyric/text",
                  STC: "Synced tempo codes",
                  TAL: "Album/Movie/Show title",
                  TBP: "BPM (Beats Per Minute)",
                  TCM: "Composer",
                  TCO: "Content type",
                  TCR: "Copyright message",
                  TDA: "Date",
                  TDY: "Playlist delay",
                  TEN: "Encoded by",
                  TFT: "File type",
                  TIM: "Time",
                  TKE: "Initial key",
                  TLA: "Language(s)",
                  TLE: "Length",
                  TMT: "Media type",
                  TOA: "Original artist(s)/performer(s)",
                  TOF: "Original filename",
                  TOL: "Original Lyricist(s)/text writer(s)",
                  TOR: "Original release year",
                  TOT: "Original album/Movie/Show title",
                  TP1: "Lead artist(s)/Lead performer(s)/Soloist(s)/Performing group",
                  TP2: "Band/Orchestra/Accompaniment",
                  TP3: "Conductor/Performer refinement",
                  TP4: "Interpreted, remixed, or otherwise modified by",
                  TPA: "Part of a set",
                  TPB: "Publisher",
                  TRC: "ISRC (International Standard Recording Code)",
                  TRD: "Recording dates",
                  TRK: "Track number/Position in set",
                  TSI: "Size",
                  TSS: "Software/hardware and settings used for encoding",
                  TT1: "Content group description",
                  TT2: "Title/Songname/Content description",
                  TT3: "Subtitle/Description refinement",
                  TXT: "Lyricist/text writer",
                  TXX: "User defined text information frame",
                  TYE: "Year",
                  UFI: "Unique file identifier",
                  ULT: "Unsychronized lyric/text transcription",
                  WAF: "Official audio file webpage",
                  WAR: "Official artist/performer webpage",
                  WAS: "Official audio source webpage",
                  WCM: "Commercial information",
                  WCP: "Copyright/Legal information",
                  WPB: "Publishers official webpage",
                  WXX: "User defined URL link frame",
                  AENC: "Audio encryption",
                  APIC: "Attached picture",
                  ASPI: "Audio seek point index",
                  CHAP: "Chapter",
                  CTOC: "Table of contents",
                  COMM: "Comments",
                  COMR: "Commercial frame",
                  ENCR: "Encryption method registration",
                  EQU2: "Equalisation (2)",
                  EQUA: "Equalization",
                  ETCO: "Event timing codes",
                  GEOB: "General encapsulated object",
                  GRID: "Group identification registration",
                  IPLS: "Involved people list",
                  LINK: "Linked information",
                  MCDI: "Music CD identifier",
                  MLLT: "MPEG location lookup table",
                  OWNE: "Ownership frame",
                  PRIV: "Private frame",
                  PCNT: "Play counter",
                  POPM: "Popularimeter",
                  POSS: "Position synchronisation frame",
                  RBUF: "Recommended buffer size",
                  RVA2: "Relative volume adjustment (2)",
                  RVAD: "Relative volume adjustment",
                  RVRB: "Reverb",
                  SEEK: "Seek frame",
                  SYLT: "Synchronized lyric/text",
                  SYTC: "Synchronized tempo codes",
                  TALB: "Album/Movie/Show title",
                  TBPM: "BPM (beats per minute)",
                  TCOM: "Composer",
                  TCON: "Content type",
                  TCOP: "Copyright message",
                  TDAT: "Date",
                  TDLY: "Playlist delay",
                  TDRC: "Recording time",
                  TDRL: "Release time",
                  TDTG: "Tagging time",
                  TENC: "Encoded by",
                  TEXT: "Lyricist/Text writer",
                  TFLT: "File type",
                  TIME: "Time",
                  TIPL: "Involved people list",
                  TIT1: "Content group description",
                  TIT2: "Title/songname/content description",
                  TIT3: "Subtitle/Description refinement",
                  TKEY: "Initial key",
                  TLAN: "Language(s)",
                  TLEN: "Length",
                  TMCL: "Musician credits list",
                  TMED: "Media type",
                  TMOO: "Mood",
                  TOAL: "Original album/movie/show title",
                  TOFN: "Original filename",
                  TOLY: "Original lyricist(s)/text writer(s)",
                  TOPE: "Original artist(s)/performer(s)",
                  TORY: "Original release year",
                  TOWN: "File owner/licensee",
                  TPE1: "Lead performer(s)/Soloist(s)",
                  TPE2: "Band/orchestra/accompaniment",
                  TPE3: "Conductor/performer refinement",
                  TPE4: "Interpreted, remixed, or otherwise modified by",
                  TPOS: "Part of a set",
                  TPRO: "Produced notice",
                  TPUB: "Publisher",
                  TRCK: "Track number/Position in set",
                  TRDA: "Recording dates",
                  TRSN: "Internet radio station name",
                  TRSO: "Internet radio station owner",
                  TSOA: "Album sort order",
                  TSOP: "Performer sort order",
                  TSOT: "Title sort order",
                  TSIZ: "Size",
                  TSRC: "ISRC (international standard recording code)",
                  TSSE: "Software/Hardware and settings used for encoding",
                  TSST: "Set subtitle",
                  TYER: "Year",
                  TXXX: "User defined text information frame",
                  UFID: "Unique file identifier",
                  USER: "Terms of use",
                  USLT: "Unsychronized lyric/text transcription",
                  WCOM: "Commercial information",
                  WCOP: "Copyright/Legal information",
                  WOAF: "Official audio file webpage",
                  WOAR: "Official artist/performer webpage",
                  WOAS: "Official audio source webpage",
                  WORS: "Official internet radio station homepage",
                  WPAY: "Payment",
                  WPUB: "Publishers official webpage",
                  WXXX: "User defined URL link frame",
                };
              a = (function () {
                function x() {
                  if (!(this instanceof x))
                    throw new TypeError("Cannot call a class as a function");
                }
                return (
                  c(x, null, [
                    {
                      key: "getFrameReaderFunction",
                      value: function (y) {
                        return y in h
                          ? h[y]
                          : y[0] === "T"
                            ? h["T*"]
                            : y[0] === "W"
                              ? h["W*"]
                              : null;
                      },
                    },
                    {
                      key: "readFrames",
                      value: function (y, v, b, N, w) {
                        for (
                          var _ = {}, A = this._getFrameHeaderSize(N);
                          y < v - A;
                        ) {
                          var k = this._readFrameHeader(b, y, N),
                            C = k.id;
                          if (!C) break;
                          var M = k.flags,
                            E = k.size,
                            S = y + k.headerSize,
                            j = b;
                          if (
                            ((y += k.headerSize + k.size),
                            !w || w.indexOf(C) !== -1)
                          ) {
                            if (
                              C === "MP3e" ||
                              C === "\0MP3" ||
                              C === "\0\0MP" ||
                              C === " MP3"
                            )
                              break;
                            (M &&
                              M.format.unsynchronisation &&
                              !N.flags.unsynchronisation &&
                              ((j = this.getUnsyncFileReader(j, S, E)),
                              (S = 0),
                              (E = j.getSize())),
                              M &&
                                M.format.data_length_indicator &&
                                ((S += 4), (E -= 4)),
                              (M = (k = x.getFrameReaderFunction(C))
                                ? k.apply(this, [S, E, j, M, N])
                                : null),
                              (S = this._getFrameDescription(C)),
                              (E = { id: C, size: E, description: S, data: M }),
                              C in _
                                ? (_[C].id && (_[C] = [_[C]]), _[C].push(E))
                                : (_[C] = E));
                          }
                        }
                        return _;
                      },
                    },
                    {
                      key: "_getFrameHeaderSize",
                      value: function (y) {
                        return (
                          (y = y.major),
                          y == 2 ? 6 : y == 3 || y == 4 ? 10 : 0
                        );
                      },
                    },
                    {
                      key: "_readFrameHeader",
                      value: function (y, v, b) {
                        var N = b.major,
                          w = null;
                        switch (((b = this._getFrameHeaderSize(b)), N)) {
                          case 2:
                            var _ = y.getStringAt(v, 3),
                              A = y.getInteger24At(v + 3, !0);
                            break;
                          case 3:
                            ((_ = y.getStringAt(v, 4)),
                              (A = y.getLongAt(v + 4, !0)));
                            break;
                          case 4:
                            ((_ = y.getStringAt(v, 4)),
                              (A = y.getSynchsafeInteger32At(v + 4)));
                        }
                        return (
                          (_ == "\0\0\0" || _ == "\0\0\0\0") && (_ = ""),
                          _ && 2 < N && (w = this._readFrameFlags(y, v + 8)),
                          {
                            id: _ || "",
                            size: A || 0,
                            headerSize: b || 0,
                            flags: w,
                          }
                        );
                      },
                    },
                    {
                      key: "_readFrameFlags",
                      value: function (y, v) {
                        return {
                          message: {
                            tag_alter_preservation: y.isBitSetAt(v, 6),
                            file_alter_preservation: y.isBitSetAt(v, 5),
                            read_only: y.isBitSetAt(v, 4),
                          },
                          format: {
                            grouping_identity: y.isBitSetAt(v + 1, 7),
                            compression: y.isBitSetAt(v + 1, 3),
                            encryption: y.isBitSetAt(v + 1, 2),
                            unsynchronisation: y.isBitSetAt(v + 1, 1),
                            data_length_indicator: y.isBitSetAt(v + 1, 0),
                          },
                        };
                      },
                    },
                    {
                      key: "_getFrameDescription",
                      value: function (y) {
                        return y in m ? m[y] : "Unknown";
                      },
                    },
                    {
                      key: "getUnsyncFileReader",
                      value: function (y, v, b) {
                        for (
                          y = y.getBytesAt(v, b), v = 0;
                          v < y.length - 1;
                          v++
                        )
                          y[v] === 255 && y[v + 1] === 0 && y.splice(v + 1, 1);
                        return new p(y);
                      },
                    },
                  ]),
                  x
                );
              })();
              var h = {
                APIC: function (x, y, v, b, N) {
                  b = x;
                  var w = d(v.getByteAt(x));
                  switch (N && N.major) {
                    case 2:
                      ((N = v.getStringAt(x + 1, 3)), (x += 4));
                      break;
                    case 3:
                    case 4:
                      ((N = v.getStringWithCharsetAt(x + 1, y - 1)),
                        (x += 1 + N.bytesReadCount));
                      break;
                    default:
                      throw Error("Couldn't read ID3v2 major version.");
                  }
                  var _ = v.getByteAt(x);
                  return (
                    (_ = g[_]),
                    (w = v.getStringWithCharsetAt(x + 1, y - (x - b) - 1, w)),
                    (x += 1 + w.bytesReadCount),
                    {
                      format: N.toString(),
                      type: _,
                      description: w.toString(),
                      data: v.getBytesAt(x, b + y - x),
                    }
                  );
                },
                CHAP: function (x, y, v, b, N) {
                  b = x;
                  var w = {},
                    _ = f.readNullTerminatedString(v.getBytesAt(x, y));
                  return (
                    (w.id = _.toString()),
                    (x += _.bytesReadCount),
                    (w.startTime = v.getLongAt(x, !0)),
                    (x += 4),
                    (w.endTime = v.getLongAt(x, !0)),
                    (x += 4),
                    (w.startOffset = v.getLongAt(x, !0)),
                    (x += 4),
                    (w.endOffset = v.getLongAt(x, !0)),
                    (x += 4),
                    (w.subFrames = this.readFrames(x, x + (y - (x - b)), v, N)),
                    w
                  );
                },
                CTOC: function (x, y, v, b, N) {
                  b = x;
                  var w = {
                      childElementIds: [],
                      id: void 0,
                      topLevel: void 0,
                      ordered: void 0,
                      entryCount: void 0,
                      subFrames: void 0,
                    },
                    _ = f.readNullTerminatedString(v.getBytesAt(x, y));
                  for (
                    w.id = _.toString(),
                      x += _.bytesReadCount,
                      w.topLevel = v.isBitSetAt(x, 1),
                      w.ordered = v.isBitSetAt(x, 0),
                      x++,
                      w.entryCount = v.getByteAt(x),
                      x++,
                      _ = 0;
                    _ < w.entryCount;
                    _++
                  ) {
                    var A = f.readNullTerminatedString(
                      v.getBytesAt(x, y - (x - b)),
                    );
                    (w.childElementIds.push(A.toString()),
                      (x += A.bytesReadCount));
                  }
                  return (
                    (w.subFrames = this.readFrames(x, x + (y - (x - b)), v, N)),
                    w
                  );
                },
                COMM: function (x, y, v, b, N) {
                  var w = x,
                    _ = d(v.getByteAt(x));
                  return (
                    (b = v.getStringAt(x + 1, 3)),
                    (N = v.getStringWithCharsetAt(x + 4, y - 4, _)),
                    (x += 4 + N.bytesReadCount),
                    (x = v.getStringWithCharsetAt(x, w + y - x, _)),
                    {
                      language: b,
                      short_description: N.toString(),
                      text: x.toString(),
                    }
                  );
                },
              };
              ((h.COM = h.COMM),
                (h.PIC = function (x, y, v, b, N) {
                  return h.APIC(x, y, v, b, N);
                }),
                (h.PCNT = function (x, y, v, b, N) {
                  return v.getLongAt(x, !1);
                }),
                (h.CNT = h.PCNT),
                (h["T*"] = function (x, y, v, b, N) {
                  return (
                    (b = d(v.getByteAt(x))),
                    v.getStringWithCharsetAt(x + 1, y - 1, b).toString()
                  );
                }),
                (h.TXXX = function (x, y, v, b, N) {
                  return ((b = d(v.getByteAt(x))), u(x, y, v, b));
                }),
                (h.WXXX = function (x, y, v, b, N) {
                  return y === 0
                    ? null
                    : ((b = d(v.getByteAt(x))), u(x, y, v, b));
                }),
                (h["W*"] = function (x, y, v, b, N) {
                  return y === 0
                    ? null
                    : v.getStringWithCharsetAt(x, y, "iso-8859-1").toString();
                }),
                (h.TCON = function (x, y, v, b) {
                  return h["T*"].apply(this, arguments).replace(/^\(\d+\)/, "");
                }),
                (h.TCO = h.TCON),
                (h.USLT = function (x, y, v, b, N) {
                  var w = x,
                    _ = d(v.getByteAt(x));
                  return (
                    (b = v.getStringAt(x + 1, 3)),
                    (N = v.getStringWithCharsetAt(x + 4, y - 4, _)),
                    (x += 4 + N.bytesReadCount),
                    (x = v.getStringWithCharsetAt(x, w + y - x, _)),
                    {
                      language: b,
                      descriptor: N.toString(),
                      lyrics: x.toString(),
                    }
                  );
                }),
                (h.ULT = h.USLT),
                (h.UFID = function (x, y, v, b, N) {
                  return (
                    (b = f.readNullTerminatedString(v.getBytesAt(x, y))),
                    (x += b.bytesReadCount),
                    (x = v.getBytesAt(x, y - b.bytesReadCount)),
                    { ownerIdentifier: b.toString(), identifier: x }
                  );
                }));
              var g =
                "Other;32x32 pixels 'file icon' (PNG only);Other file icon;Cover (front);Cover (back);Leaflet page;Media (e.g. label side of CD);Lead artist/lead performer/soloist;Artist/performer;Conductor;Band/Orchestra;Composer;Lyricist/text writer;Recording Location;During recording;During performance;Movie/video screen capture;A bright coloured fish;Illustration;Band/artist logotype;Publisher/Studio logotype".split(
                  ";",
                );
              r.exports = a;
            },
            {
              "./ArrayFileReader": 3,
              "./MediaFileReader": 11,
              "./StringUtils": 13,
            },
          ],
          9: [
            function (a, r, i) {
              function o(y) {
                "@babel/helpers - typeof";
                return (
                  (o =
                    typeof Symbol == "function" &&
                    typeof Symbol.iterator == "symbol"
                      ? function (v) {
                          return typeof v;
                        }
                      : function (v) {
                          return v &&
                            typeof Symbol == "function" &&
                            v.constructor === Symbol &&
                            v !== Symbol.prototype
                            ? "symbol"
                            : typeof v;
                        }),
                  o(y)
                );
              }
              function c(y, v) {
                for (var b = 0; b < v.length; b++) {
                  var N = v[b];
                  ((N.enumerable = N.enumerable || !1),
                    (N.configurable = !0),
                    "value" in N && (N.writable = !0),
                    Object.defineProperty(y, N.key, N));
                }
              }
              function d(y, v, b) {
                return (v && c(y.prototype, v), b && c(y, b), y);
              }
              function u(y, v) {
                if (typeof v != "function" && v !== null)
                  throw new TypeError(
                    "Super expression must either be null or a function",
                  );
                ((y.prototype = Object.create(v && v.prototype, {
                  constructor: { value: y, writable: !0, configurable: !0 },
                })),
                  v && f(y, v));
              }
              function f(y, v) {
                return (
                  (f =
                    Object.setPrototypeOf ||
                    function (b, N) {
                      return ((b.__proto__ = N), b);
                    }),
                  f(y, v)
                );
              }
              function p(y) {
                var v = m();
                return function () {
                  var b = h(y);
                  if (v) {
                    var N = h(this).constructor;
                    b = Reflect.construct(b, arguments, N);
                  } else b = b.apply(this, arguments);
                  if (!b || (o(b) !== "object" && typeof b != "function")) {
                    if (this === void 0)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      );
                    b = this;
                  }
                  return b;
                };
              }
              function m() {
                if (
                  typeof Reflect > "u" ||
                  !Reflect.construct ||
                  Reflect.construct.sham
                )
                  return !1;
                if (typeof Proxy == "function") return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {}),
                    ),
                    !0
                  );
                } catch {
                  return !1;
                }
              }
              function h(y) {
                return (
                  (h = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (v) {
                        return v.__proto__ || Object.getPrototypeOf(v);
                      }),
                  h(y)
                );
              }
              ((i = a("./MediaTagReader")), a("./MediaFileReader"));
              var g = a("./ID3v2FrameReader");
              a = (function (y) {
                function v() {
                  if (!(this instanceof v))
                    throw new TypeError("Cannot call a class as a function");
                  return b.apply(this, arguments);
                }
                u(v, y);
                var b = p(v);
                return (
                  d(
                    v,
                    [
                      {
                        key: "_loadData",
                        value: function (N, w) {
                          N.loadRange([6, 9], {
                            onSuccess: function () {
                              N.loadRange(
                                [0, 10 + N.getSynchsafeInteger32At(6) - 1],
                                w,
                              );
                            },
                            onError: w.onError,
                          });
                        },
                      },
                      {
                        key: "_parseData",
                        value: function (N, w) {
                          var _,
                            A = 0,
                            k = N.getByteAt(A + 3);
                          if (4 < k)
                            return { type: "ID3", version: ">2.4", tags: {} };
                          var C = N.getByteAt(A + 4),
                            M = N.isBitSetAt(A + 5, 7),
                            E = N.isBitSetAt(A + 5, 6),
                            S = N.isBitSetAt(A + 5, 5),
                            j = N.getSynchsafeInteger32At(A + 6);
                          if (((A += 10), E))
                            if (k === 4) {
                              var T = N.getSynchsafeInteger32At(A);
                              A += T;
                            } else ((T = N.getLongAt(A, !0)), (A += T + 4));
                          ((T = {
                            type: "ID3",
                            version: "2." + k + "." + C,
                            major: k,
                            revision: C,
                            flags: {
                              unsynchronisation: M,
                              extended_header: E,
                              experimental_indicator: S,
                              footer_present: !1,
                            },
                            size: j,
                            tags: {},
                          }),
                            w && (_ = this._expandShortcutTags(w)),
                            (w = j + 10),
                            T.flags.unsynchronisation &&
                              ((N = g.getUnsyncFileReader(N, A, j)),
                              (A = 0),
                              (w = N.getSize())),
                            (N = g.readFrames(A, w, N, T, _)));
                          for (var I in x)
                            x.hasOwnProperty(I) &&
                              (_ = this._getFrameData(N, x[I])) &&
                              (T.tags[I] = _);
                          for (var L in N)
                            N.hasOwnProperty(L) && (T.tags[L] = N[L]);
                          return T;
                        },
                      },
                      {
                        key: "_getFrameData",
                        value: function (N, w) {
                          for (var _ = 0, A; (A = w[_]); _++)
                            if (A in N)
                              return (
                                (N = N[A] instanceof Array ? N[A][0] : N[A]),
                                N.data
                              );
                        },
                      },
                      {
                        key: "getShortcuts",
                        value: function () {
                          return x;
                        },
                      },
                    ],
                    [
                      {
                        key: "getTagIdentifierByteRange",
                        value: function () {
                          return { offset: 0, length: 10 };
                        },
                      },
                      {
                        key: "canReadTagFormat",
                        value: function (N) {
                          return (
                            String.fromCharCode.apply(String, N.slice(0, 3)) ===
                            "ID3"
                          );
                        },
                      },
                    ],
                  ),
                  v
                );
              })(i);
              var x = {
                title: ["TIT2", "TT2"],
                artist: ["TPE1", "TP1"],
                album: ["TALB", "TAL"],
                year: ["TYER", "TYE"],
                comment: ["COMM", "COM"],
                track: ["TRCK", "TRK"],
                genre: ["TCON", "TCO"],
                picture: ["APIC", "PIC"],
                lyrics: ["USLT", "ULT"],
              };
              r.exports = a;
            },
            {
              "./ID3v2FrameReader": 8,
              "./MediaFileReader": 11,
              "./MediaTagReader": 12,
            },
          ],
          10: [
            function (a, r, i) {
              function o(v) {
                "@babel/helpers - typeof";
                return (
                  (o =
                    typeof Symbol == "function" &&
                    typeof Symbol.iterator == "symbol"
                      ? function (b) {
                          return typeof b;
                        }
                      : function (b) {
                          return b &&
                            typeof Symbol == "function" &&
                            b.constructor === Symbol &&
                            b !== Symbol.prototype
                            ? "symbol"
                            : typeof b;
                        }),
                  o(v)
                );
              }
              function c(v, b) {
                for (var N = 0; N < b.length; N++) {
                  var w = b[N];
                  ((w.enumerable = w.enumerable || !1),
                    (w.configurable = !0),
                    "value" in w && (w.writable = !0),
                    Object.defineProperty(v, w.key, w));
                }
              }
              function d(v, b, N) {
                return (b && c(v.prototype, b), N && c(v, N), v);
              }
              function u(v, b) {
                if (typeof b != "function" && b !== null)
                  throw new TypeError(
                    "Super expression must either be null or a function",
                  );
                ((v.prototype = Object.create(b && b.prototype, {
                  constructor: { value: v, writable: !0, configurable: !0 },
                })),
                  b && f(v, b));
              }
              function f(v, b) {
                return (
                  (f =
                    Object.setPrototypeOf ||
                    function (N, w) {
                      return ((N.__proto__ = w), N);
                    }),
                  f(v, b)
                );
              }
              function p(v) {
                var b = m();
                return function () {
                  var N = h(v);
                  if (b) {
                    var w = h(this).constructor;
                    N = Reflect.construct(N, arguments, w);
                  } else N = N.apply(this, arguments);
                  if (!N || (o(N) !== "object" && typeof N != "function")) {
                    if (this === void 0)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      );
                    N = this;
                  }
                  return N;
                };
              }
              function m() {
                if (
                  typeof Reflect > "u" ||
                  !Reflect.construct ||
                  Reflect.construct.sham
                )
                  return !1;
                if (typeof Proxy == "function") return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {}),
                    ),
                    !0
                  );
                } catch {
                  return !1;
                }
              }
              function h(v) {
                return (
                  (h = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (b) {
                        return b.__proto__ || Object.getPrototypeOf(b);
                      }),
                  h(v)
                );
              }
              ((i = a("./MediaTagReader")),
                a("./MediaFileReader"),
                (a = (function (v) {
                  function b() {
                    if (!(this instanceof b))
                      throw new TypeError("Cannot call a class as a function");
                    return N.apply(this, arguments);
                  }
                  u(b, v);
                  var N = p(b);
                  return (
                    d(
                      b,
                      [
                        {
                          key: "_loadData",
                          value: function (w, _) {
                            var A = this;
                            w.loadRange([0, 16], {
                              onSuccess: function () {
                                A._loadAtom(w, 0, "", _);
                              },
                              onError: _.onError,
                            });
                          },
                        },
                        {
                          key: "_loadAtom",
                          value: function (w, _, A, k) {
                            if (_ >= w.getSize()) k.onSuccess();
                            else {
                              var C = this,
                                M = w.getLongAt(_, !0);
                              if (M == 0 || isNaN(M)) k.onSuccess();
                              else {
                                var E = w.getStringAt(_ + 4, 4);
                                if (this._isContainerAtom(E)) {
                                  E == "meta" && (_ += 4);
                                  var S = (A ? A + "." : "") + E;
                                  S === "moov.udta.meta.ilst"
                                    ? w.loadRange([_, _ + M], k)
                                    : w.loadRange([_ + 8, _ + 8 + 8], {
                                        onSuccess: function () {
                                          C._loadAtom(w, _ + 8, S, k);
                                        },
                                        onError: k.onError,
                                      });
                                } else
                                  w.loadRange([_ + M, _ + M + 8], {
                                    onSuccess: function () {
                                      C._loadAtom(w, _ + M, A, k);
                                    },
                                    onError: k.onError,
                                  });
                              }
                            }
                          },
                        },
                        {
                          key: "_isContainerAtom",
                          value: function (w) {
                            return (
                              0 <= ["moov", "udta", "meta", "ilst"].indexOf(w)
                            );
                          },
                        },
                        {
                          key: "_canReadAtom",
                          value: function (w) {
                            return w !== "----";
                          },
                        },
                        {
                          key: "_parseData",
                          value: function (w, _) {
                            var A = {};
                            ((_ = this._expandShortcutTags(_)),
                              this._readAtom(A, w, 0, w.getSize(), _));
                            for (var k in y)
                              y.hasOwnProperty(k) &&
                                (_ = A[y[k]]) &&
                                (A[k] = k === "track" ? _.data.track : _.data);
                            return {
                              type: "MP4",
                              ftyp: w.getStringAt(8, 4),
                              version: w.getLongAt(12, !0),
                              tags: A,
                            };
                          },
                        },
                        {
                          key: "_readAtom",
                          value: function (w, _, A, k, C, M, E) {
                            E = E === void 0 ? "" : E + "  ";
                            for (var S = A; S < A + k; ) {
                              var j = _.getLongAt(S, !0);
                              if (j == 0) break;
                              var T = _.getStringAt(S + 4, 4);
                              if (this._isContainerAtom(T)) {
                                (T == "meta" && (S += 4),
                                  this._readAtom(
                                    w,
                                    _,
                                    S + 8,
                                    j - 8,
                                    C,
                                    (M ? M + "." : "") + T,
                                    E,
                                  ));
                                break;
                              }
                              ((!C || 0 <= C.indexOf(T)) &&
                                M === "moov.udta.meta.ilst" &&
                                this._canReadAtom(T) &&
                                (w[T] = this._readMetadataAtom(_, S)),
                                (S += j));
                            }
                          },
                        },
                        {
                          key: "_readMetadataAtom",
                          value: function (w, _) {
                            var A = w.getLongAt(_, !0),
                              k = w.getStringAt(_ + 4, 4),
                              C = w.getInteger24At(_ + 16 + 1, !0);
                            if (((C = g[C]), k == "trkn"))
                              var M = {
                                track: w.getShortAt(_ + 16 + 10, !0),
                                total: w.getShortAt(_ + 16 + 14, !0),
                              };
                            else if (k == "disk")
                              M = {
                                disk: w.getShortAt(_ + 16 + 10, !0),
                                total: w.getShortAt(_ + 16 + 14, !0),
                              };
                            else {
                              _ += 24;
                              var E = A - 24;
                              switch (
                                (k === "covr" && C === "uint8" && (C = "jpeg"),
                                C)
                              ) {
                                case "text":
                                  M = w
                                    .getStringWithCharsetAt(_, E, "utf-8")
                                    .toString();
                                  break;
                                case "uint8":
                                  M = w.getShortAt(_, !1);
                                  break;
                                case "int":
                                case "uint":
                                  M = (
                                    C == "int"
                                      ? E == 1
                                        ? w.getSByteAt
                                        : E == 2
                                          ? w.getSShortAt
                                          : E == 4
                                            ? w.getSLongAt
                                            : w.getLongAt
                                      : E == 1
                                        ? w.getByteAt
                                        : E == 2
                                          ? w.getShortAt
                                          : w.getLongAt
                                  ).call(w, _ + (E == 8 ? 4 : 0), !0);
                                  break;
                                case "jpeg":
                                case "png":
                                  M = {
                                    format: "image/" + C,
                                    data: w.getBytesAt(_, E),
                                  };
                              }
                            }
                            return {
                              id: k,
                              size: A,
                              description: x[k] || "Unknown",
                              data: M,
                            };
                          },
                        },
                        {
                          key: "getShortcuts",
                          value: function () {
                            return y;
                          },
                        },
                      ],
                      [
                        {
                          key: "getTagIdentifierByteRange",
                          value: function () {
                            return { offset: 0, length: 16 };
                          },
                        },
                        {
                          key: "canReadTagFormat",
                          value: function (w) {
                            return (
                              String.fromCharCode.apply(
                                String,
                                w.slice(4, 8),
                              ) === "ftyp"
                            );
                          },
                        },
                      ],
                    ),
                    b
                  );
                })(i)));
              var g = {
                  0: "uint8",
                  1: "text",
                  13: "jpeg",
                  14: "png",
                  21: "int",
                  22: "uint",
                },
                x = {
                  "©alb": "Album",
                  "©ART": "Artist",
                  aART: "Album Artist",
                  "©day": "Release Date",
                  "©nam": "Title",
                  "©gen": "Genre",
                  gnre: "Genre",
                  trkn: "Track Number",
                  "©wrt": "Composer",
                  "©too": "Encoding Tool",
                  "©enc": "Encoded By",
                  cprt: "Copyright",
                  covr: "Cover Art",
                  "©grp": "Grouping",
                  keyw: "Keywords",
                  "©lyr": "Lyrics",
                  "©cmt": "Comment",
                  tmpo: "Tempo",
                  cpil: "Compilation",
                  disk: "Disc Number",
                  tvsh: "TV Show Name",
                  tven: "TV Episode ID",
                  tvsn: "TV Season",
                  tves: "TV Episode",
                  tvnn: "TV Network",
                  desc: "Description",
                  ldes: "Long Description",
                  sonm: "Sort Name",
                  soar: "Sort Artist",
                  soaa: "Sort Album",
                  soco: "Sort Composer",
                  sosn: "Sort Show",
                  purd: "Purchase Date",
                  pcst: "Podcast",
                  purl: "Podcast URL",
                  catg: "Category",
                  hdvd: "HD Video",
                  stik: "Media Type",
                  rtng: "Content Rating",
                  pgap: "Gapless Playback",
                  apID: "Purchase Account",
                  sfID: "Country Code",
                  atID: "Artist ID",
                  cnID: "Catalog ID",
                  plID: "Collection ID",
                  geID: "Genre ID",
                  "xid ": "Vendor Information",
                  flvr: "Codec Flavor",
                },
                y = {
                  title: "©nam",
                  artist: "©ART",
                  album: "©alb",
                  year: "©day",
                  comment: "©cmt",
                  track: "trkn",
                  genre: "©gen",
                  picture: "covr",
                  lyrics: "©lyr",
                };
              r.exports = a;
            },
            { "./MediaFileReader": 11, "./MediaTagReader": 12 },
          ],
          11: [
            function (a, r, i) {
              function o(f, p) {
                for (var m = 0; m < p.length; m++) {
                  var h = p[m];
                  ((h.enumerable = h.enumerable || !1),
                    (h.configurable = !0),
                    "value" in h && (h.writable = !0),
                    Object.defineProperty(f, h.key, h));
                }
              }
              function c(f, p, m) {
                return (p && o(f.prototype, p), m && o(f, m), f);
              }
              function d(f, p, m) {
                return (
                  p in f
                    ? Object.defineProperty(f, p, {
                        value: m,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (f[p] = m),
                  f
                );
              }
              var u = a("./StringUtils");
              ((a = (function () {
                function f(p) {
                  if (!(this instanceof f))
                    throw new TypeError("Cannot call a class as a function");
                  (d(this, "_isInitialized", void 0),
                    d(this, "_size", void 0),
                    (this._isInitialized = !1),
                    (this._size = 0));
                }
                return (
                  c(
                    f,
                    [
                      {
                        key: "init",
                        value: function (p) {
                          var m = this;
                          if (this._isInitialized) setTimeout(p.onSuccess, 1);
                          else
                            return this._init({
                              onSuccess: function () {
                                ((m._isInitialized = !0), p.onSuccess());
                              },
                              onError: p.onError,
                            });
                        },
                      },
                      {
                        key: "_init",
                        value: function (p) {
                          throw Error("Must implement init function");
                        },
                      },
                      {
                        key: "loadRange",
                        value: function (p, m) {
                          throw Error("Must implement loadRange function");
                        },
                      },
                      {
                        key: "getSize",
                        value: function () {
                          if (!this._isInitialized)
                            throw Error("init() must be called first.");
                          return this._size;
                        },
                      },
                      {
                        key: "getByteAt",
                        value: function (p) {
                          throw Error("Must implement getByteAt function");
                        },
                      },
                      {
                        key: "getBytesAt",
                        value: function (p, m) {
                          for (var h = Array(m), g = 0; g < m; g++)
                            h[g] = this.getByteAt(p + g);
                          return h;
                        },
                      },
                      {
                        key: "isBitSetAt",
                        value: function (p, m) {
                          return (this.getByteAt(p) & (1 << m)) != 0;
                        },
                      },
                      {
                        key: "getSByteAt",
                        value: function (p) {
                          return (
                            (p = this.getByteAt(p)),
                            127 < p ? p - 256 : p
                          );
                        },
                      },
                      {
                        key: "getShortAt",
                        value: function (p, m) {
                          return (
                            (p = m
                              ? (this.getByteAt(p) << 8) + this.getByteAt(p + 1)
                              : (this.getByteAt(p + 1) << 8) +
                                this.getByteAt(p)),
                            0 > p && (p += 65536),
                            p
                          );
                        },
                      },
                      {
                        key: "getSShortAt",
                        value: function (p, m) {
                          return (
                            (p = this.getShortAt(p, m)),
                            32767 < p ? p - 65536 : p
                          );
                        },
                      },
                      {
                        key: "getLongAt",
                        value: function (p, m) {
                          var h = this.getByteAt(p),
                            g = this.getByteAt(p + 1),
                            x = this.getByteAt(p + 2);
                          return (
                            (p = this.getByteAt(p + 3)),
                            (m = m
                              ? (((((h << 8) + g) << 8) + x) << 8) + p
                              : (((((p << 8) + x) << 8) + g) << 8) + h),
                            0 > m && (m += 4294967296),
                            m
                          );
                        },
                      },
                      {
                        key: "getSLongAt",
                        value: function (p, m) {
                          return (
                            (p = this.getLongAt(p, m)),
                            2147483647 < p ? p - 4294967296 : p
                          );
                        },
                      },
                      {
                        key: "getInteger24At",
                        value: function (p, m) {
                          var h = this.getByteAt(p),
                            g = this.getByteAt(p + 1);
                          return (
                            (p = this.getByteAt(p + 2)),
                            (m = m
                              ? (((h << 8) + g) << 8) + p
                              : (((p << 8) + g) << 8) + h),
                            0 > m && (m += 16777216),
                            m
                          );
                        },
                      },
                      {
                        key: "getStringAt",
                        value: function (p, m) {
                          for (var h = [], g = p, x = 0; g < p + m; g++, x++)
                            h[x] = String.fromCharCode(this.getByteAt(g));
                          return h.join("");
                        },
                      },
                      {
                        key: "getStringWithCharsetAt",
                        value: function (p, m, h) {
                          switch (
                            ((p = this.getBytesAt(p, m)),
                            (h || "").toLowerCase())
                          ) {
                            case "utf-16":
                            case "utf-16le":
                            case "utf-16be":
                              h = u.readUTF16String(p, h === "utf-16be");
                              break;
                            case "utf-8":
                              h = u.readUTF8String(p);
                              break;
                            default:
                              h = u.readNullTerminatedString(p);
                          }
                          return h;
                        },
                      },
                      {
                        key: "getCharAt",
                        value: function (p) {
                          return String.fromCharCode(this.getByteAt(p));
                        },
                      },
                      {
                        key: "getSynchsafeInteger32At",
                        value: function (p) {
                          var m = this.getByteAt(p),
                            h = this.getByteAt(p + 1),
                            g = this.getByteAt(p + 2);
                          return (
                            (this.getByteAt(p + 3) & 127) |
                            ((g & 127) << 7) |
                            ((h & 127) << 14) |
                            ((m & 127) << 21)
                          );
                        },
                      },
                    ],
                    [
                      {
                        key: "canReadFile",
                        value: function (p) {
                          throw Error("Must implement canReadFile function");
                        },
                      },
                    ],
                  ),
                  f
                );
              })()),
                (r.exports = a));
            },
            { "./StringUtils": 13 },
          ],
          12: [
            function (a, r, i) {
              function o(u, f) {
                for (var p = 0; p < f.length; p++) {
                  var m = f[p];
                  ((m.enumerable = m.enumerable || !1),
                    (m.configurable = !0),
                    "value" in m && (m.writable = !0),
                    Object.defineProperty(u, m.key, m));
                }
              }
              function c(u, f, p) {
                return (f && o(u.prototype, f), p && o(u, p), u);
              }
              function d(u, f, p) {
                return (
                  f in u
                    ? Object.defineProperty(u, f, {
                        value: p,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (u[f] = p),
                  u
                );
              }
              (a("./MediaFileReader"),
                (a = (function () {
                  function u(f) {
                    if (!(this instanceof u))
                      throw new TypeError("Cannot call a class as a function");
                    (d(this, "_mediaFileReader", void 0),
                      d(this, "_tags", void 0),
                      (this._mediaFileReader = f),
                      (this._tags = null));
                  }
                  return (
                    c(
                      u,
                      [
                        {
                          key: "setTagsToRead",
                          value: function (f) {
                            return ((this._tags = f), this);
                          },
                        },
                        {
                          key: "read",
                          value: function (f) {
                            var p = this;
                            this._mediaFileReader.init({
                              onSuccess: function () {
                                p._loadData(p._mediaFileReader, {
                                  onSuccess: function () {
                                    try {
                                      var m = p._parseData(
                                        p._mediaFileReader,
                                        p._tags,
                                      );
                                    } catch (h) {
                                      if (f.onError) {
                                        f.onError({
                                          type: "parseData",
                                          info: h.message,
                                        });
                                        return;
                                      }
                                    }
                                    f.onSuccess(m);
                                  },
                                  onError: f.onError,
                                });
                              },
                              onError: f.onError,
                            });
                          },
                        },
                        {
                          key: "getShortcuts",
                          value: function () {
                            return {};
                          },
                        },
                        {
                          key: "_loadData",
                          value: function (f, p) {
                            throw Error("Must implement _loadData function");
                          },
                        },
                        {
                          key: "_parseData",
                          value: function (f, p) {
                            throw Error("Must implement _parseData function");
                          },
                        },
                        {
                          key: "_expandShortcutTags",
                          value: function (f) {
                            if (!f) return null;
                            for (
                              var p = [], m = this.getShortcuts(), h = 0, g;
                              (g = f[h]);
                              h++
                            )
                              p = p.concat(m[g] || [g]);
                            return p;
                          },
                        },
                      ],
                      [
                        {
                          key: "getTagIdentifierByteRange",
                          value: function () {
                            throw Error("Must implement");
                          },
                        },
                        {
                          key: "canReadTagFormat",
                          value: function (f) {
                            throw Error("Must implement");
                          },
                        },
                      ],
                    ),
                    u
                  );
                })()),
                (r.exports = a));
            },
            { "./MediaFileReader": 11 },
          ],
          13: [
            function (a, r, i) {
              function o(f, p) {
                for (var m = 0; m < p.length; m++) {
                  var h = p[m];
                  ((h.enumerable = h.enumerable || !1),
                    (h.configurable = !0),
                    "value" in h && (h.writable = !0),
                    Object.defineProperty(f, h.key, h));
                }
              }
              function c(f, p, m) {
                return (p && o(f.prototype, p), f);
              }
              function d(f, p, m) {
                return (
                  p in f
                    ? Object.defineProperty(f, p, {
                        value: m,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (f[p] = m),
                  f
                );
              }
              var u = (function () {
                function f(p, m) {
                  if (!(this instanceof f))
                    throw new TypeError("Cannot call a class as a function");
                  (d(this, "_value", void 0),
                    d(this, "bytesReadCount", void 0),
                    d(this, "length", void 0),
                    (this._value = p),
                    (this.bytesReadCount = m),
                    (this.length = p.length));
                }
                return (
                  c(f, [
                    {
                      key: "toString",
                      value: function () {
                        return this._value;
                      },
                    },
                  ]),
                  f
                );
              })();
              r.exports = {
                readUTF16String: function (f, p, m) {
                  var h = 0,
                    g = 1,
                    x = 0;
                  ((m = Math.min(m || f.length, f.length)),
                    f[0] == 254 && f[1] == 255
                      ? ((p = !0), (h = 2))
                      : f[0] == 255 && f[1] == 254 && ((p = !1), (h = 2)),
                    p && ((g = 0), (x = 1)),
                    (p = []));
                  for (var y = 0; h < m; y++) {
                    var v = f[h + g],
                      b = (v << 8) + f[h + x];
                    if (((h += 2), b == 0)) break;
                    216 > v || 224 <= v
                      ? (p[y] = String.fromCharCode(b))
                      : ((v = (f[h + g] << 8) + f[h + x]),
                        (h += 2),
                        (p[y] = String.fromCharCode(b, v)));
                  }
                  return new u(p.join(""), h);
                },
                readUTF8String: function (f, p) {
                  var m = 0;
                  ((p = Math.min(p || f.length, f.length)),
                    f[0] == 239 && f[1] == 187 && f[2] == 191 && (m = 3));
                  for (var h = [], g = 0; m < p; g++) {
                    var x = f[m++];
                    if (x == 0) break;
                    if (128 > x) h[g] = String.fromCharCode(x);
                    else if (194 <= x && 224 > x) {
                      var y = f[m++];
                      h[g] = String.fromCharCode(((x & 31) << 6) + (y & 63));
                    } else if (224 <= x && 240 > x) {
                      y = f[m++];
                      var v = f[m++];
                      h[g] = String.fromCharCode(
                        ((x & 255) << 12) + ((y & 63) << 6) + (v & 63),
                      );
                    } else if (240 <= x && 245 > x) {
                      ((y = f[m++]), (v = f[m++]));
                      var b = f[m++];
                      ((v =
                        ((x & 7) << 18) +
                        ((y & 63) << 12) +
                        ((v & 63) << 6) +
                        (b & 63) -
                        65536),
                        (h[g] = String.fromCharCode(
                          (v >> 10) + 55296,
                          (v & 1023) + 56320,
                        )));
                    }
                  }
                  return new u(h.join(""), m);
                },
                readNullTerminatedString: function (f, p) {
                  var m = [];
                  p = p || f.length;
                  for (var h = 0; h < p; ) {
                    var g = f[h++];
                    if (g == 0) break;
                    m[h - 1] = String.fromCharCode(g);
                  }
                  return new u(m.join(""), h);
                },
              };
            },
            {},
          ],
          14: [
            function (a, r, i) {
              function o(v) {
                "@babel/helpers - typeof";
                return (
                  (o =
                    typeof Symbol == "function" &&
                    typeof Symbol.iterator == "symbol"
                      ? function (b) {
                          return typeof b;
                        }
                      : function (b) {
                          return b &&
                            typeof Symbol == "function" &&
                            b.constructor === Symbol &&
                            b !== Symbol.prototype
                            ? "symbol"
                            : typeof b;
                        }),
                  o(v)
                );
              }
              function c(v, b) {
                for (var N = 0; N < b.length; N++) {
                  var w = b[N];
                  ((w.enumerable = w.enumerable || !1),
                    (w.configurable = !0),
                    "value" in w && (w.writable = !0),
                    Object.defineProperty(v, w.key, w));
                }
              }
              function d(v, b, N) {
                return (b && c(v.prototype, b), N && c(v, N), v);
              }
              function u(v, b) {
                if (typeof b != "function" && b !== null)
                  throw new TypeError(
                    "Super expression must either be null or a function",
                  );
                ((v.prototype = Object.create(b && b.prototype, {
                  constructor: { value: v, writable: !0, configurable: !0 },
                })),
                  b && f(v, b));
              }
              function f(v, b) {
                return (
                  (f =
                    Object.setPrototypeOf ||
                    function (N, w) {
                      return ((N.__proto__ = w), N);
                    }),
                  f(v, b)
                );
              }
              function p(v) {
                var b = h();
                return function () {
                  var N = g(v);
                  if (b) {
                    var w = g(this).constructor;
                    N = Reflect.construct(N, arguments, w);
                  } else N = N.apply(this, arguments);
                  return (
                    (N =
                      !N || (o(N) !== "object" && typeof N != "function")
                        ? m(this)
                        : N),
                    N
                  );
                };
              }
              function m(v) {
                if (v === void 0)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                  );
                return v;
              }
              function h() {
                if (
                  typeof Reflect > "u" ||
                  !Reflect.construct ||
                  Reflect.construct.sham
                )
                  return !1;
                if (typeof Proxy == "function") return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {}),
                    ),
                    !0
                  );
                } catch {
                  return !1;
                }
              }
              function g(v) {
                return (
                  (g = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (b) {
                        return b.__proto__ || Object.getPrototypeOf(b);
                      }),
                  g(v)
                );
              }
              function x(v, b, N) {
                return (
                  b in v
                    ? Object.defineProperty(v, b, {
                        value: N,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (v[b] = N),
                  v
                );
              }
              var y = a("./ChunkedFileData");
              ((i = (function (v) {
                function b(w) {
                  if (!(this instanceof b))
                    throw new TypeError("Cannot call a class as a function");
                  var _ = N.call(this);
                  return (
                    x(m(_), "_url", void 0),
                    x(m(_), "_fileData", void 0),
                    (_._url = w),
                    (_._fileData = new y()),
                    _
                  );
                }
                u(b, v);
                var N = p(b);
                return (
                  d(
                    b,
                    [
                      {
                        key: "_init",
                        value: function (w) {
                          b._config.avoidHeadRequests
                            ? this._fetchSizeWithGetRequest(w)
                            : this._fetchSizeWithHeadRequest(w);
                        },
                      },
                      {
                        key: "_fetchSizeWithHeadRequest",
                        value: function (w) {
                          var _ = this;
                          this._makeXHRRequest("HEAD", null, {
                            onSuccess: function (A) {
                              (A = _._parseContentLength(A))
                                ? ((_._size = A), w.onSuccess())
                                : _._fetchSizeWithGetRequest(w);
                            },
                            onError: w.onError,
                          });
                        },
                      },
                      {
                        key: "_fetchSizeWithGetRequest",
                        value: function (w) {
                          var _ = this,
                            A = this._roundRangeToChunkMultiple([0, 0]);
                          this._makeXHRRequest("GET", A, {
                            onSuccess: function (k) {
                              var C = _._parseContentRange(k);
                              if (((k = _._getXhrResponseContent(k)), C)) {
                                if (C.instanceLength == null) {
                                  _._fetchEntireFile(w);
                                  return;
                                }
                                _._size = C.instanceLength;
                              } else _._size = k.length;
                              (_._fileData.addData(0, k), w.onSuccess());
                            },
                            onError: w.onError,
                          });
                        },
                      },
                      {
                        key: "_fetchEntireFile",
                        value: function (w) {
                          var _ = this;
                          this._makeXHRRequest("GET", null, {
                            onSuccess: function (A) {
                              ((A = _._getXhrResponseContent(A)),
                                (_._size = A.length),
                                _._fileData.addData(0, A),
                                w.onSuccess());
                            },
                            onError: w.onError,
                          });
                        },
                      },
                      {
                        key: "_getXhrResponseContent",
                        value: function (w) {
                          return w.responseBody || w.responseText || "";
                        },
                      },
                      {
                        key: "_parseContentLength",
                        value: function (w) {
                          return (
                            (w = this._getResponseHeader(w, "Content-Length")),
                            w == null ? w : parseInt(w, 10)
                          );
                        },
                      },
                      {
                        key: "_parseContentRange",
                        value: function (w) {
                          if (
                            (w = this._getResponseHeader(w, "Content-Range"))
                          ) {
                            var _ = w.match(/bytes (\d+)-(\d+)\/(?:(\d+)|\*)/i);
                            if (!_)
                              throw Error(
                                "FIXME: Unknown Content-Range syntax: " + w,
                              );
                            return {
                              firstBytePosition: parseInt(_[1], 10),
                              lastBytePosition: parseInt(_[2], 10),
                              instanceLength: _[3] ? parseInt(_[3], 10) : null,
                            };
                          }
                          return null;
                        },
                      },
                      {
                        key: "loadRange",
                        value: function (w, _) {
                          var A = this;
                          A._fileData.hasDataRange(
                            w[0],
                            Math.min(A._size, w[1]),
                          )
                            ? setTimeout(_.onSuccess, 1)
                            : ((w = this._roundRangeToChunkMultiple(w)),
                              (w[1] = Math.min(A._size, w[1])),
                              this._makeXHRRequest("GET", w, {
                                onSuccess: function (k) {
                                  ((k = A._getXhrResponseContent(k)),
                                    A._fileData.addData(w[0], k),
                                    _.onSuccess());
                                },
                                onError: _.onError,
                              }));
                        },
                      },
                      {
                        key: "_roundRangeToChunkMultiple",
                        value: function (w) {
                          return [
                            w[0],
                            w[0] +
                              1024 * Math.ceil((w[1] - w[0] + 1) / 1024) -
                              1,
                          ];
                        },
                      },
                      {
                        key: "_makeXHRRequest",
                        value: function (w, _, A) {
                          var k = this._createXHRObject();
                          k.open(w, this._url);
                          var C = function () {
                            (k.status === 200 || k.status === 206
                              ? A.onSuccess(k)
                              : A.onError &&
                                A.onError({
                                  type: "xhr",
                                  info:
                                    "Unexpected HTTP status " + k.status + ".",
                                  xhr: k,
                                }),
                              (k = null));
                          };
                          (typeof k.onload < "u"
                            ? ((k.onload = C),
                              (k.onerror = function () {
                                A.onError &&
                                  A.onError({
                                    type: "xhr",
                                    info: "Generic XHR error, check xhr object.",
                                    xhr: k,
                                  });
                              }))
                            : (k.onreadystatechange = function () {
                                k.readyState === 4 && C();
                              }),
                            b._config.timeoutInSec &&
                              ((k.timeout = 1e3 * b._config.timeoutInSec),
                              (k.ontimeout = function () {
                                A.onError &&
                                  A.onError({
                                    type: "xhr",
                                    info:
                                      "Timeout after " +
                                      k.timeout / 1e3 +
                                      "s. Use jsmediatags.Config.setXhrTimeout to override.",
                                    xhr: k,
                                  });
                              })),
                            k.overrideMimeType(
                              "text/plain; charset=x-user-defined",
                            ),
                            _ &&
                              this._setRequestHeader(
                                k,
                                "Range",
                                "bytes=" + _[0] + "-" + _[1],
                              ),
                            this._setRequestHeader(
                              k,
                              "If-Modified-Since",
                              "Sat, 01 Jan 1970 00:00:00 GMT",
                            ),
                            k.send(null));
                        },
                      },
                      {
                        key: "_setRequestHeader",
                        value: function (w, _, A) {
                          0 >
                            b._config.disallowedXhrHeaders.indexOf(
                              _.toLowerCase(),
                            ) && w.setRequestHeader(_, A);
                        },
                      },
                      {
                        key: "_hasResponseHeader",
                        value: function (w, _) {
                          if (((w = w.getAllResponseHeaders()), !w)) return !1;
                          w = w.split(`\r
`);
                          for (var A = [], k = 0; k < w.length; k++)
                            A[k] = w[k].split(":")[0].toLowerCase();
                          return 0 <= A.indexOf(_.toLowerCase());
                        },
                      },
                      {
                        key: "_getResponseHeader",
                        value: function (w, _) {
                          return this._hasResponseHeader(w, _)
                            ? w.getResponseHeader(_)
                            : null;
                        },
                      },
                      {
                        key: "getByteAt",
                        value: function (w) {
                          return (
                            this._fileData.getByteAt(w).charCodeAt(0) & 255
                          );
                        },
                      },
                      {
                        key: "_isWebWorker",
                        value: function () {
                          return (
                            typeof WorkerGlobalScope < "u" &&
                            self instanceof WorkerGlobalScope
                          );
                        },
                      },
                      {
                        key: "_createXHRObject",
                        value: function () {
                          if (typeof window > "u" && !this._isWebWorker())
                            return new (a("xhr2").XMLHttpRequest)();
                          if (typeof XMLHttpRequest < "u")
                            return new XMLHttpRequest();
                          throw Error("XMLHttpRequest is not supported");
                        },
                      },
                    ],
                    [
                      {
                        key: "canReadFile",
                        value: function (w) {
                          return (
                            typeof w == "string" && /^[a-z]+:\/\//i.test(w)
                          );
                        },
                      },
                      {
                        key: "setConfig",
                        value: function (w) {
                          for (var _ in w)
                            w.hasOwnProperty(_) && (this._config[_] = w[_]);
                          for (
                            w = this._config.disallowedXhrHeaders, _ = 0;
                            _ < w.length;
                            _++
                          )
                            w[_] = w[_].toLowerCase();
                        },
                      },
                    ],
                  ),
                  b
                );
              })(a("./MediaFileReader"))),
                x(i, "_config", void 0),
                (i._config = {
                  avoidHeadRequests: !1,
                  disallowedXhrHeaders: [],
                  timeoutInSec: 30,
                }),
                (r.exports = i));
            },
            { "./ChunkedFileData": 5, "./MediaFileReader": 11, xhr2: 2 },
          ],
          15: [
            function (a, r, i) {
              function o(_, A) {
                if (!(_ instanceof A))
                  throw new TypeError("Cannot call a class as a function");
              }
              function c(_, A) {
                for (var k = 0; k < A.length; k++) {
                  var C = A[k];
                  ((C.enumerable = C.enumerable || !1),
                    (C.configurable = !0),
                    "value" in C && (C.writable = !0),
                    Object.defineProperty(_, C.key, C));
                }
              }
              function d(_, A, k) {
                return (A && c(_.prototype, A), k && c(_, k), _);
              }
              function u(_, A, k) {
                return (
                  A in _
                    ? Object.defineProperty(_, A, {
                        value: k,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (_[A] = k),
                  _
                );
              }
              function f(_, A) {
                var k =
                  0 > _.offset && (-_.offset > A || 0 < _.offset + _.length);
                return !((0 <= _.offset && _.offset + _.length >= A) || k);
              }
              a("./MediaFileReader");
              var p = a("./XhrFileReader"),
                m = a("./BlobFileReader"),
                h = a("./ArrayFileReader");
              a("./MediaTagReader");
              var g = a("./ID3v1TagReader"),
                x = a("./ID3v2TagReader"),
                y = a("./MP4TagReader"),
                v = a("./FLACTagReader"),
                b = [],
                N = [],
                w = (function () {
                  function _(A) {
                    (o(this, _),
                      u(this, "_file", void 0),
                      u(this, "_tagsToRead", void 0),
                      u(this, "_fileReader", void 0),
                      u(this, "_tagReader", void 0),
                      (this._file = A));
                  }
                  return (
                    d(_, [
                      {
                        key: "setTagsToRead",
                        value: function (A) {
                          return ((this._tagsToRead = A), this);
                        },
                      },
                      {
                        key: "setFileReader",
                        value: function (A) {
                          return ((this._fileReader = A), this);
                        },
                      },
                      {
                        key: "setTagReader",
                        value: function (A) {
                          return ((this._tagReader = A), this);
                        },
                      },
                      {
                        key: "read",
                        value: function (A) {
                          var k = new (this._getFileReader())(this._file),
                            C = this;
                          k.init({
                            onSuccess: function () {
                              C._getTagReader(k, {
                                onSuccess: function (M) {
                                  new M(k).setTagsToRead(C._tagsToRead).read(A);
                                },
                                onError: A.onError,
                              });
                            },
                            onError: A.onError,
                          });
                        },
                      },
                      {
                        key: "_getFileReader",
                        value: function () {
                          return this._fileReader
                            ? this._fileReader
                            : this._findFileReader();
                        },
                      },
                      {
                        key: "_findFileReader",
                        value: function () {
                          for (var A = 0; A < b.length; A++)
                            if (b[A].canReadFile(this._file)) return b[A];
                          throw Error(
                            "No suitable file reader found for " + this._file,
                          );
                        },
                      },
                      {
                        key: "_getTagReader",
                        value: function (A, k) {
                          if (this._tagReader) {
                            var C = this._tagReader;
                            setTimeout(function () {
                              k.onSuccess(C);
                            }, 1);
                          } else this._findTagReader(A, k);
                        },
                      },
                      {
                        key: "_findTagReader",
                        value: function (A, k) {
                          for (
                            var C = [], M = [], E = A.getSize(), S = 0;
                            S < N.length;
                            S++
                          ) {
                            var j = N[S].getTagIdentifierByteRange();
                            f(j, E) &&
                              ((0 <= j.offset && j.offset < E / 2) ||
                              (0 > j.offset && j.offset < -E / 2)
                                ? C.push(N[S])
                                : M.push(N[S]));
                          }
                          var T = !1;
                          ((S = {
                            onSuccess: function () {
                              if (T) {
                                for (var I = 0; I < N.length; I++) {
                                  var L = N[I].getTagIdentifierByteRange();
                                  if (f(L, E)) {
                                    try {
                                      var B = A.getBytesAt(
                                        0 <= L.offset ? L.offset : L.offset + E,
                                        L.length,
                                      );
                                    } catch (F) {
                                      k.onError &&
                                        k.onError({
                                          type: "fileReader",
                                          info: F.message,
                                        });
                                      return;
                                    }
                                    if (N[I].canReadTagFormat(B)) {
                                      k.onSuccess(N[I]);
                                      return;
                                    }
                                  }
                                }
                                k.onError &&
                                  k.onError({
                                    type: "tagFormat",
                                    info: "No suitable tag reader found",
                                  });
                              } else T = !0;
                            },
                            onError: k.onError,
                          }),
                            this._loadTagIdentifierRanges(A, C, S),
                            this._loadTagIdentifierRanges(A, M, S));
                        },
                      },
                      {
                        key: "_loadTagIdentifierRanges",
                        value: function (A, k, C) {
                          if (k.length === 0) setTimeout(C.onSuccess, 1);
                          else {
                            for (
                              var M = [Number.MAX_VALUE, 0],
                                E = A.getSize(),
                                S = 0;
                              S < k.length;
                              S++
                            ) {
                              var j = k[S].getTagIdentifierByteRange(),
                                T = 0 <= j.offset ? j.offset : j.offset + E;
                              ((j = T + j.length - 1),
                                (M[0] = Math.min(T, M[0])),
                                (M[1] = Math.max(j, M[1])));
                            }
                            A.loadRange(M, C);
                          }
                        },
                      },
                    ]),
                    _
                  );
                })();
              ((i = (function () {
                function _() {
                  o(this, _);
                }
                return (
                  d(_, null, [
                    {
                      key: "addFileReader",
                      value: function (A) {
                        return (b.push(A), _);
                      },
                    },
                    {
                      key: "addTagReader",
                      value: function (A) {
                        return (N.push(A), _);
                      },
                    },
                    {
                      key: "removeTagReader",
                      value: function (A) {
                        return (
                          (A = N.indexOf(A)),
                          0 <= A && N.splice(A, 1),
                          _
                        );
                      },
                    },
                    {
                      key: "EXPERIMENTAL_avoidHeadRequests",
                      value: function () {
                        p.setConfig({ avoidHeadRequests: !0 });
                      },
                    },
                    {
                      key: "setDisallowedXhrHeaders",
                      value: function (A) {
                        p.setConfig({ disallowedXhrHeaders: A });
                      },
                    },
                    {
                      key: "setXhrTimeoutInSec",
                      value: function (A) {
                        p.setConfig({ timeoutInSec: A });
                      },
                    },
                  ]),
                  _
                );
              })()),
                i
                  .addFileReader(p)
                  .addFileReader(m)
                  .addFileReader(h)
                  .addTagReader(x)
                  .addTagReader(g)
                  .addTagReader(y)
                  .addTagReader(v),
                typeof process > "u" ||
                  process.browser ||
                  ((a =
                    typeof navigator < "u" &&
                    navigator.product === "ReactNative"
                      ? a("./ReactNativeFileReader")
                      : a("./NodeFileReader")),
                  i.addFileReader(a)),
                (r.exports = {
                  read: function (_, A) {
                    new w(_).read(A);
                  },
                  Reader: w,
                  Config: i,
                }));
            },
            {
              "./ArrayFileReader": 3,
              "./BlobFileReader": 4,
              "./FLACTagReader": 6,
              "./ID3v1TagReader": 7,
              "./ID3v2TagReader": 9,
              "./MP4TagReader": 10,
              "./MediaFileReader": 11,
              "./MediaTagReader": 12,
              "./NodeFileReader": 1,
              "./ReactNativeFileReader": 1,
              "./XhrFileReader": 14,
            },
          ],
        },
        {},
        [15],
      )(15);
    }));
})(i_);
var CO = i_.exports;
const MO = G5(CO),
  TO = ({
    isOpen: t,
    onClose: s,
    onImport: n,
    onShowTutorial: a,
    pendingMusicCount: r = 0,
    pendingLrcCount: i = 0,
    onContinueAdd: o,
    onFinishImport: c,
  }) => {
    if (!t) return null;
    const d = r > 0 || i > 0;
    return e.jsx(We.div, {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className:
        "absolute inset-0 z-[150] bg-white/80 backdrop-blur-xl flex items-center justify-center p-8",
      onClick: s,
      children: e.jsxs(We.div, {
        initial: { scale: 0.9, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: 0.9, opacity: 0 },
        className:
          "bg-white p-8 rounded-3xl shadow-2xl max-w-sm w-full border border-gray-100",
        onClick: (u) => u.stopPropagation(),
        children: [
          e.jsxs("div", {
            className: "flex justify-between items-start mb-6",
            children: [
              e.jsx("h3", {
                className: "text-2xl font-bold",
                children: "导入本地音乐",
              }),
              e.jsx("button", {
                onClick: s,
                className:
                  "p-2 -mr-2 -mt-2 text-gray-400 hover:bg-gray-100 rounded-full transition-colors",
                children: e.jsx(Ts, { size: 24 }),
              }),
            ],
          }),
          d
            ? e.jsxs("div", {
                className: "space-y-4 mb-6",
                children: [
                  e.jsxs("p", {
                    className: "text-sm text-gray-600",
                    children: [
                      "已选 ",
                      e.jsx("strong", { children: r }),
                      " 首音乐、",
                      e.jsx("strong", { children: i }),
                      " ",
                      "个歌词，将一起导入并自动按文件名匹配。",
                      e.jsx("br", {}),
                      e.jsx("span", {
                        className: "text-xs text-gray-500",
                        children:
                          "iOS 每次只能选一个时，可点「继续添加」多次再完成。",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex gap-2",
                    children: [
                      e.jsx("button", {
                        onClick: o,
                        className:
                          "flex-1 py-3 bg-stone-100 hover:bg-stone-200 rounded-xl text-sm font-medium transition-colors",
                        children: "继续添加",
                      }),
                      e.jsx("button", {
                        onClick: c,
                        className:
                          "flex-1 py-3 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors",
                        children: "完成导入",
                      }),
                    ],
                  }),
                ],
              })
            : e.jsxs("div", {
                className: "space-y-4",
                children: [
                  e.jsxs(We.button, {
                    onClick: n,
                    whileHover: { y: -4 },
                    className:
                      "w-full flex flex-col items-center justify-center p-8 bg-stone-100 transition-colors rounded-2xl group",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-inner-soft group-hover:shadow-md transition-shadow",
                        children: e.jsx(Y1, {
                          size: 32,
                          className:
                            "text-stone-400 group-hover:text-black transition-colors",
                        }),
                      }),
                      e.jsx("span", {
                        className: "text-lg font-semibold text-black",
                        children: "选择音乐与歌词",
                      }),
                      e.jsx("span", {
                        className: "text-xs text-gray-500 mt-1",
                        children:
                          "可混选 .mp3、.lrc 等，一次搞定；iOS 每次一个时可多次「继续添加」",
                      }),
                    ],
                  }),
                  e.jsxs("button", {
                    onClick: a,
                    className:
                      "w-full flex items-center justify-center gap-2 py-3 text-xs text-gray-500 hover:text-black hover:bg-gray-50 transition-colors rounded-lg",
                    children: [
                      e.jsx(xl, { size: 14 }),
                      e.jsx("span", { children: "如何准备文件？查看教程" }),
                    ],
                  }),
                ],
              }),
        ],
      }),
    });
  },
  IO = ({ isOpen: t, onClose: s, onConfirm: n }) => {
    const [a, r] = l.useState(0);
    if (!t) return null;
    const i = [
      {
        title: "准备音乐文件",
        content: e.jsxs("div", {
          className: "space-y-6",
          children: [
            e.jsx("p", {
              className: "text-sm text-gray-600 leading-relaxed",
              children:
                "首先，你需要准备好想要导入的音乐文件。应用会自动从文件中读取歌曲名、歌手等信息。",
            }),
            e.jsxs("div", {
              className: "p-4 bg-gray-50 rounded-xl border border-gray-100",
              children: [
                e.jsx("p", {
                  className:
                    "text-xs font-bold uppercase tracking-wider text-gray-400 mb-2",
                  children: "步骤 1",
                }),
                e.jsx("p", {
                  className: "text-sm font-bold mb-1",
                  children: "找到音频文件",
                }),
                e.jsxs("p", {
                  className: "text-xs text-gray-500",
                  children: [
                    "支持 ",
                    e.jsx("code", {
                      className: "bg-gray-200 px-1 rounded",
                      children: ".mp3",
                    }),
                    ",",
                    " ",
                    e.jsx("code", {
                      className: "bg-gray-200 px-1 rounded",
                      children: ".flac",
                    }),
                    ",",
                    " ",
                    e.jsx("code", {
                      className: "bg-gray-200 px-1 rounded",
                      children: ".wav",
                    }),
                    ",",
                    " ",
                    e.jsx("code", {
                      className: "bg-gray-200 px-1 rounded",
                      children: ".m4a",
                    }),
                    ",",
                    " ",
                    e.jsx("code", {
                      className: "bg-gray-200 px-1 rounded",
                      children: ".mp4",
                    }),
                    ",",
                    " ",
                    e.jsx("code", {
                      className: "bg-gray-200 px-1 rounded",
                      children: ".webm",
                    }),
                    " 等常见音视频格式。",
                  ],
                }),
              ],
            }),
          ],
        }),
      },
      {
        title: "准备歌词文件",
        content: e.jsxs("div", {
          className: "space-y-6",
          children: [
            e.jsx("p", {
              className: "text-sm text-gray-600 leading-relaxed",
              children:
                "如果你想在播放时看到实时滚动的歌词，可以提供相应的歌词文件。",
            }),
            e.jsxs("div", {
              className: "p-4 bg-gray-50 rounded-xl border border-gray-100",
              children: [
                e.jsx("p", {
                  className:
                    "text-xs font-bold uppercase tracking-wider text-gray-400 mb-2",
                  children: "步骤 2",
                }),
                e.jsx("p", {
                  className: "text-sm font-bold mb-1",
                  children: "准备 .lrc 文件",
                }),
                e.jsxs("p", {
                  className: "text-xs text-gray-500 mb-3",
                  children: [
                    "支持 ",
                    e.jsx("code", {
                      className: "bg-gray-200 px-1 rounded",
                      children: ".lrc",
                    }),
                    " 或",
                    " ",
                    e.jsx("code", {
                      className: "bg-gray-200 px-1 rounded",
                      children: ".lyr",
                    }),
                    " 格式，可与音乐文件一起选择（手机端也可同时选）。",
                  ],
                }),
                e.jsx("div", {
                  className:
                    "p-3 bg-red-50 border border-red-100 rounded-lg text-center",
                  children: e.jsxs("p", {
                    className: "text-xs text-red-700",
                    children: [
                      e.jsx("span", {
                        className: "font-bold",
                        children: "重要:",
                      }),
                      " 歌词文件名必须和歌曲文件名",
                      e.jsx("span", {
                        className: "font-bold",
                        children: "完全一致",
                      }),
                      " (扩展名除外)。",
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      },
      {
        title: "开始导入",
        content: e.jsxs("div", {
          className: "space-y-6 text-center py-8",
          children: [
            e.jsx("div", {
              className:
                "w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4",
              children: e.jsx(On, { size: 32 }),
            }),
            e.jsx("h4", {
              className: "text-xl font-bold",
              children: "准备就绪",
            }),
            e.jsxs("p", {
              className: "text-sm text-gray-600",
              children: [
                "点击下方按钮后，在文件选择器中可",
                e.jsx("strong", { children: "一次多选" }),
                "多首音乐和多份歌词（手机端也支持多选），应用会按文件名自动匹配歌词。",
              ],
            }),
            e.jsx("button", {
              onClick: n,
              className:
                "w-full py-4 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-colors mt-4",
              children: "开始导入",
            }),
          ],
        }),
      },
    ];
    return e.jsxs(We.div, {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className:
        "absolute inset-0 z-[160] bg-white/90 backdrop-blur-xl flex items-center justify-center p-8",
      onClick: s,
      children: [
        e.jsx("div", {
          className: "flex justify-end absolute top-8 right-8 z-20",
          children: e.jsx("button", {
            onClick: s,
            className: "p-2 hover:bg-gray-100 rounded-full transition-colors",
            children: e.jsx(Ts, { size: 24 }),
          }),
        }),
        e.jsxs(We.div, {
          initial: { scale: 0.9, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.9, opacity: 0 },
          className:
            "w-full max-w-md flex flex-col h-[600px] bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-100",
          onClick: (o) => o.stopPropagation(),
          children: [
            e.jsxs("div", {
              className: "px-8 pt-8 pb-4",
              children: [
                e.jsxs("p", {
                  className:
                    "text-xs font-mono text-gray-400 uppercase tracking-widest mb-2",
                  children: ["第 ", a + 1, " 步，共 ", i.length, " 步"],
                }),
                e.jsxs("h3", {
                  className: "text-3xl font-light tracking-tighter",
                  children: [
                    i[a].title,
                    e.jsx("span", { className: "text-red-500", children: "." }),
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              className:
                "flex-1 px-8 py-4 overflow-y-auto scrollbar-hide relative",
              children: e.jsx(Os, {
                mode: "wait",
                children: e.jsx(
                  We.div,
                  {
                    initial: { opacity: 0, x: 20 },
                    animate: { opacity: 1, x: 0 },
                    exit: { opacity: 0, x: -20 },
                    transition: { duration: 0.2 },
                    children: i[a].content,
                  },
                  a,
                ),
              }),
            }),
            a < i.length - 1
              ? e.jsxs("div", {
                  className:
                    "p-8 pt-4 border-t border-gray-50 flex justify-between items-center bg-white",
                  children: [
                    e.jsx("button", {
                      onClick: () => r(Math.max(0, a - 1)),
                      disabled: a === 0,
                      className: `p-2 rounded-full transition-colors ${a === 0 ? "text-gray-200 cursor-not-allowed" : "text-black hover:bg-gray-100"}`,
                      children: e.jsx(un, { size: 24 }),
                    }),
                    e.jsx("div", {
                      className: "flex gap-2",
                      children: i.map((o, c) =>
                        e.jsx(
                          "div",
                          {
                            className: `w-2 h-2 rounded-full transition-colors ${c === a ? "bg-black" : "bg-gray-200"}`,
                          },
                          c,
                        ),
                      ),
                    }),
                    e.jsx("button", {
                      onClick: () => r(Math.min(i.length - 1, a + 1)),
                      className:
                        "p-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors shadow-lg shadow-black/20",
                      children: e.jsx(Kn, { size: 24 }),
                    }),
                  ],
                })
              : e.jsx("div", {
                  className:
                    "h-[88px] p-8 pt-4 border-t border-gray-50 bg-white",
                }),
          ],
        }),
      ],
    });
  },
  bl = (t, s = !0) => {
    if (!t) return "";
    if (typeof t != "string" || t.startsWith("data:") || t.startsWith("blob:"))
      return t;
    if (s) {
      if (t.includes("weserv.nl") || t.startsWith("/")) return t;
      const n = t.replace(/^https?:\/\//, "");
      return `https://images.weserv.nl/?url=${encodeURIComponent(n)}`;
    }
    return t.replace(/^http:\/\//, "https://");
  },
  go = co("leting"),
  EO = [
    (t) => t.startsWith("audio/"),
    (t) => t === "video/mp4" || t === "video/webm" || t === "video/x-m4v",
  ],
  LO = (t) => {
    const s = (t.type || "").toLowerCase();
    return EO.some((n) => n(s));
  },
  d1 = (t) =>
    (t || "")
      .trim()
      .toLowerCase()
      .replace(/^\d+\s*/, "")
      .replace(/\s*[-–—]\s*.*$/, "")
      .trim() || (t || "").trim().toLowerCase(),
  sb = (t, s) => {
    const n = d1(t),
      a = d1(s);
    return (
      n === a ||
      n.startsWith(a) ||
      a.startsWith(n) ||
      n.includes(a) ||
      a.includes(n)
    );
  },
  yf = (t, s) => {
    const n = t instanceof Uint8Array ? t : new Uint8Array(t),
      a = String(s).includes("/") ? s : `image/${s}`,
      r = 32768;
    let i = "";
    for (let o = 0; o < n.length; o += r)
      i += String.fromCharCode.apply(null, n.subarray(o, o + r));
    return `data:${a};base64,${btoa(i)}`;
  },
  ox = 256,
  DO = (t) =>
    new Promise((s) => {
      if (!(t != null && t.data)) {
        s(null);
        return;
      }
      const n = t.format || "jpeg",
        a = t.data instanceof Uint8Array ? t.data : new Uint8Array(t.data),
        r = String(n).includes("/") ? n : `image/${n}`,
        i = new Blob([a], { type: r }),
        o = URL.createObjectURL(i),
        c = new Image(),
        d = (u) => {
          try {
            URL.revokeObjectURL(o);
          } catch {}
          s(u);
        };
      ((c.onload = () => {
        try {
          const { width: u, height: f } = c;
          if (!u || !f) {
            d(yf(a, n));
            return;
          }
          if (u <= ox && f <= ox) {
            d(yf(a, n));
            return;
          }
          const p = Math.min(ox / u, ox / f, 1),
            m = Math.max(1, Math.round(u * p)),
            h = Math.max(1, Math.round(f * p)),
            g = document.createElement("canvas");
          ((g.width = m), (g.height = h));
          const x = g.getContext("2d");
          if (!x) {
            d(yf(a, n));
            return;
          }
          (x.drawImage(c, 0, 0, m, h), d(g.toDataURL("image/jpeg", 0.82)));
        } catch {
          d(yf(a, n));
        }
      }),
        (c.onerror = () => d(yf(a, n))),
        (c.src = o));
    }),
  Sj = async (t, s, n) => {
    if (t.length === 0) return [];
    const a = new Array(t.length);
    let r = 0;
    const i = Array.from({ length: Math.min(s, t.length) }, async () => {
      for (;;) {
        const o = r++;
        if (o >= t.length) break;
        a[o] = await n(t[o], o);
      }
    });
    return (await Promise.all(i), a);
  },
  $O = 3,
  FO = 2,
  vf = 73,
  _j = 10,
  Aj = [
    { bg: "bg-stone-100", tag: "#氛围" },
    { bg: "bg-zinc-100", tag: "#舒缓" },
    { bg: "bg-orange-50", tag: "#清新" },
    { bg: "bg-blue-50", tag: "#深邃" },
    { bg: "bg-red-50", tag: "#热烈" },
    { bg: "bg-green-50", tag: "#纯粹" },
  ],
  zO = ({
    onPlaySong: t,
    activeSong: s,
    isPlaying: n,
    onSwitchToCloud: a,
    neteaseUser: r,
    onLocalSongDeleted: i,
    onBackToDesktop: o,
    onOpenLetingData: c,
  }) => {
    const [d, u] = l.useState("home"),
      [f, p] = l.useState([]),
      [m, h] = l.useState(null),
      [g, x] = l.useState([]),
      [y, v] = l.useState(!1),
      [b, N] = l.useState(!1),
      [w, _] = l.useState(!1),
      [A, k] = l.useState(!1),
      [C, M] = l.useState(!1),
      [E, S] = l.useState([]),
      [j, T] = l.useState([]),
      [I, L] = l.useState(""),
      [B, F] = l.useState(null),
      D = l.useRef(null),
      $ = l.useRef(null),
      P = l.useRef(null),
      z = l.useRef(0),
      [O, Z] = l.useState({ start: 0, end: 48 });
    l.useEffect(() => {
      K();
    }, []);
    const K = async () => {
        try {
          const U = await go.getAllPlaylists();
          if ((p(U), U.length === 0)) {
            const ce = {
              id: "default_" + Date.now(),
              name: "My Favorites",
              cover: null,
              createdAt: Date.now(),
            };
            (await go.savePlaylist(ce), p([ce]));
          }
        } catch {}
      },
      q = async (U) => {
        if ((U.preventDefault(), !I.trim())) return;
        const ce = {
          id: "pl_" + Date.now(),
          name: I,
          cover: B,
          createdAt: Date.now(),
        };
        (await go.savePlaylist(ce), await K(), v(!1), L(""), F(null));
      },
      V = async (U) => {
        if ((U.preventDefault(), !I.trim() || !m)) return;
        const ce = { ...m, name: I, cover: B || m.cover };
        (await go.savePlaylist(ce), await K(), h(ce), N(!1));
      },
      ne = async (U, ce) => {
        (U == null || U.stopPropagation(),
          confirm(`确定删除歌单「${ce.name}」吗？`) &&
            (await go.deletePlaylist(ce.id),
            await K(),
            (m == null ? void 0 : m.id) === ce.id && (u("home"), h(null))));
      },
      le = async (U) => {
        h(U);
        const ce = await go.getSongsByPlaylist(U.id);
        (x(ce), u("detail"));
      },
      ie = l.useCallback(() => {
        const U = P.current,
          ce = g.length;
        if (!U || ce === 0) {
          Z({ start: 0, end: 0 });
          return;
        }
        const pe = U.scrollTop,
          se = U.clientHeight || 480,
          Te = Math.max(0, Math.floor(pe / vf) - _j),
          ke = Math.min(ce, Math.ceil((pe + se) / vf) + _j);
        Z((W) => (W.start === Te && W.end === ke ? W : { start: Te, end: ke }));
      }, [g.length]),
      X = l.useCallback(() => {
        z.current ||
          (z.current = requestAnimationFrame(() => {
            ((z.current = 0), ie());
          }));
      }, [ie]);
    (l.useEffect(() => {
      const U = P.current;
      (U && (U.scrollTop = 0), ie());
    }, [m == null ? void 0 : m.id, ie]),
      l.useEffect(() => {
        ie();
      }, [g, ie]),
      l.useEffect(() => {
        if (d !== "detail" || g.length === 0) return;
        const U = P.current;
        if (!U || typeof ResizeObserver > "u") return;
        const ce = new ResizeObserver(() => ie());
        return (ce.observe(U), ie(), () => ce.disconnect());
      }, [d, g.length, m == null ? void 0 : m.id, ie]));
    const je = async (U, ce) => {
        if (
          (U.stopPropagation(), await go.deleteSong(ce), i == null || i(ce), m)
        ) {
          const pe = await go.getSongsByPlaylist(m.id);
          x(pe);
        }
      },
      xe = (U) => {
        const ce = U.target.files[0];
        if (ce) {
          const pe = new FileReader();
          ((pe.onloadend = () => {
            F(pe.result);
          }),
            pe.readAsDataURL(ce));
        }
      },
      ye = () => {
        k(!0);
      },
      R = () => {
        var U;
        (k(!1), (U = $.current) == null || U.click());
      },
      oe = () => {
        (k(!1), _(!0));
      },
      ee = (U) => {
        const ce = Array.from(U.target.files || []);
        if (((U.target.value = null), ce.length === 0)) return;
        const pe = ce.filter(LO),
          se = ce.filter((Te) => /\.(lrc|lyr)$/i.test(Te.name));
        (S((Te) => [...Te, ...pe]), T((Te) => [...Te, ...se]), k(!0));
      },
      H = () => {
        var U;
        (U = $.current) == null || U.click();
      },
      Y = async () => {
        if (E.length === 0 && j.length === 0) {
          k(!1);
          return;
        }
        let U = m;
        if (!U) {
          const se = f.find((Te) => Te.id.startsWith("default")) || f[0];
          if (se)
            ((U = se),
              await le(se),
              alert(`未选择播放列表，将自动导入到 "${se.name}"。`));
          else {
            alert("没有可用的播放列表，请先创建一个。");
            return;
          }
        }
        const ce = [...E],
          pe = [...j];
        (S([]), T([]), M(!0), k(!1));
        try {
          const se = await Sj(ce, $O, async (G, we) => {
            const Q = await new Promise((te, Se) => {
                MO.read(G, {
                  onSuccess: (Fe) => {
                    (async () => {
                      try {
                        const {
                          title: $e,
                          artist: tt,
                          album: Xe,
                          picture: ht,
                        } = Fe.tags;
                        let Pe = null;
                        (ht && (Pe = await DO(ht)),
                          te({
                            title: $e || G.name.replace(/\.[^/.]+$/, ""),
                            artist: tt || "未知歌手",
                            album: Xe || "未知专辑",
                            cover: Pe,
                          }));
                      } catch ($e) {
                        Se($e);
                      }
                    })();
                  },
                  onError: () => {
                    te({
                      title: G.name.replace(/\.[^/.]+$/, ""),
                      artist: "Unknown Artist",
                      album: "Unknown Album",
                      cover: null,
                    });
                  },
                });
              }),
              ve = G.name.replace(/\.[^/.]+$/, ""),
              Ve = pe.find((te) => {
                const Se = te.name.replace(/\.(lrc|lyr)$/i, "");
                return sb(ve, Se);
              });
            let Ae = "";
            return (
              Ve && (Ae = await Ve.text()),
              {
                id: `local_${Date.now()}_${we}_${Math.random().toString(36).slice(2, 10)}`,
                playlistId: U.id,
                title: Q.title,