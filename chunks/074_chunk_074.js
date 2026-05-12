                      oe = 1;
                      break e;
                    case 30:
                      oe = -3;
                      break e;
                    case 31:
                      return -4;
                    case 32:
                    default:
                      return h;
                  }
                return (
                  (j.next_out = D),
                  (j.avail_out = P),
                  (j.next_in = F),
                  (j.avail_in = $),
                  (I.hold = z),
                  (I.bits = O),
                  (I.wsize ||
                    (K !== j.avail_out &&
                      I.mode < 30 &&
                      (I.mode < 27 || T !== 4))) &&
                  S(j, j.output, j.next_out, K - j.avail_out)
                    ? ((I.mode = 31), -4)
                    : ((Z -= j.avail_in),
                      (K -= j.avail_out),
                      (j.total_in += Z),
                      (j.total_out += K),
                      (I.total += K),
                      I.wrap &&
                        K &&
                        (j.adler = I.check =
                          I.flags
                            ? c(I.check, B, K, j.next_out - K)
                            : o(I.check, B, K, j.next_out - K)),
                      (j.data_type =
                        I.bits +
                        (I.last ? 64 : 0) +
                        (I.mode === 12 ? 128 : 0) +
                        (I.mode === 20 || I.mode === 15 ? 256 : 0)),
                      ((Z == 0 && K === 0) || T === 4) && oe === m && (oe = -5),
                      oe)
                );
              }),
              (r.inflateEnd = function (j) {
                if (!j || !j.state) return h;
                var T = j.state;
                return (T.window && (T.window = null), (j.state = null), m);
              }),
              (r.inflateGetHeader = function (j, T) {
                var I;
                return j && j.state && 2 & (I = j.state).wrap
                  ? (((I.head = T).done = !1), m)
                  : h;
              }),
              (r.inflateSetDictionary = function (j, T) {
                var I,
                  L = T.length;
                return j && j.state
                  ? (I = j.state).wrap !== 0 && I.mode !== 11
                    ? h
                    : I.mode === 11 && o(1, T, L, 0) !== I.check
                      ? -3
                      : S(j, T, L, L)
                        ? ((I.mode = 31), -4)
                        : ((I.havedict = 1), m)
                  : h;
              }),
              (r.inflateInfo = "pako inflate (from Nodeca project)"));
          },
          {
            "../utils/common": 41,
            "./adler32": 43,
            "./crc32": 45,
            "./inffast": 48,
            "./inftrees": 50,
          },
        ],
        50: [
          function (n, a, r) {
            var i = n("../utils/common"),
              o = [
                3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43,
                51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
              ],
              c = [
                16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18,
                19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78,
              ],
              d = [
                1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257,
                385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289,
                16385, 24577, 0, 0,
              ],
              u = [
                16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22,
                23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64,
              ];
            a.exports = function (f, p, m, h, g, x, y, v) {
              var b,
                N,
                w,
                _,
                A,
                k,
                C,
                M,
                E,
                S = v.bits,
                j = 0,
                T = 0,
                I = 0,
                L = 0,
                B = 0,
                F = 0,
                D = 0,
                $ = 0,
                P = 0,
                z = 0,
                O = null,
                Z = 0,
                K = new i.Buf16(16),
                q = new i.Buf16(16),
                V = null,
                ne = 0;
              for (j = 0; j <= 15; j++) K[j] = 0;
              for (T = 0; T < h; T++) K[p[m + T]]++;
              for (B = S, L = 15; 1 <= L && K[L] === 0; L--);
              if ((L < B && (B = L), L === 0))
                return (
                  (g[x++] = 20971520),
                  (g[x++] = 20971520),
                  (v.bits = 1),
                  0
                );
              for (I = 1; I < L && K[I] === 0; I++);
              for (B < I && (B = I), j = $ = 1; j <= 15; j++)
                if ((($ <<= 1), ($ -= K[j]) < 0)) return -1;
              if (0 < $ && (f === 0 || L !== 1)) return -1;
              for (q[1] = 0, j = 1; j < 15; j++) q[j + 1] = q[j] + K[j];
              for (T = 0; T < h; T++) p[m + T] !== 0 && (y[q[p[m + T]]++] = T);
              if (
                ((k =
                  f === 0
                    ? ((O = V = y), 19)
                    : f === 1
                      ? ((O = o), (Z -= 257), (V = c), (ne -= 257), 256)
                      : ((O = d), (V = u), -1)),
                (j = I),
                (A = x),
                (D = T = z = 0),
                (w = -1),
                (_ = (P = 1 << (F = B)) - 1),
                (f === 1 && 852 < P) || (f === 2 && 592 < P))
              )
                return 1;
              for (;;) {
                for (
                  C = j - D,
                    E =
                      y[T] < k
                        ? ((M = 0), y[T])
                        : y[T] > k
                          ? ((M = V[ne + y[T]]), O[Z + y[T]])
                          : ((M = 96), 0),
                    b = 1 << (j - D),
                    I = N = 1 << F;
                  (g[A + (z >> D) + (N -= b)] = (C << 24) | (M << 16) | E | 0),
                    N !== 0;
                );
                for (b = 1 << (j - 1); z & b; ) b >>= 1;
                if (
                  (b !== 0 ? ((z &= b - 1), (z += b)) : (z = 0),
                  T++,
                  --K[j] == 0)
                ) {
                  if (j === L) break;
                  j = p[m + y[T]];
                }
                if (B < j && (z & _) !== w) {
                  for (
                    D === 0 && (D = B), A += I, $ = 1 << (F = j - D);
                    F + D < L && !(($ -= K[F + D]) <= 0);
                  )
                    (F++, ($ <<= 1));
                  if (
                    ((P += 1 << F),
                    (f === 1 && 852 < P) || (f === 2 && 592 < P))
                  )
                    return 1;
                  g[(w = z & _)] = (B << 24) | (F << 16) | (A - x) | 0;
                }
              }
              return (
                z !== 0 && (g[A + z] = ((j - D) << 24) | (64 << 16) | 0),
                (v.bits = B),
                0
              );
            };
          },
          { "../utils/common": 41 },
        ],
        51: [
          function (n, a, r) {
            a.exports = {
              2: "need dictionary",
              1: "stream end",
              0: "",
              "-1": "file error",
              "-2": "stream error",
              "-3": "data error",
              "-4": "insufficient memory",
              "-5": "buffer error",
              "-6": "incompatible version",
            };
          },
          {},
        ],
        52: [
          function (n, a, r) {
            var i = n("../utils/common"),
              o = 0,
              c = 1;
            function d(Y) {
              for (var U = Y.length; 0 <= --U; ) Y[U] = 0;
            }
            var u = 0,
              f = 29,
              p = 256,
              m = p + 1 + f,
              h = 30,
              g = 19,
              x = 2 * m + 1,
              y = 15,
              v = 16,
              b = 7,
              N = 256,
              w = 16,
              _ = 17,
              A = 18,
              k = [
                0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4,
                4, 4, 4, 5, 5, 5, 5, 0,
              ],
              C = [
                0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9,
                9, 10, 10, 11, 11, 12, 12, 13, 13,
              ],
              M = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
              E = [
                16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1,
                15,
              ],
              S = new Array(2 * (m + 2));
            d(S);
            var j = new Array(2 * h);
            d(j);
            var T = new Array(512);
            d(T);
            var I = new Array(256);
            d(I);
            var L = new Array(f);
            d(L);
            var B,
              F,
              D,
              $ = new Array(h);
            function P(Y, U, ce, pe, se) {
              ((this.static_tree = Y),
                (this.extra_bits = U),
                (this.extra_base = ce),
                (this.elems = pe),
                (this.max_length = se),
                (this.has_stree = Y && Y.length));
            }
            function z(Y, U) {
              ((this.dyn_tree = Y), (this.max_code = 0), (this.stat_desc = U));
            }
            function O(Y) {
              return Y < 256 ? T[Y] : T[256 + (Y >>> 7)];
            }
            function Z(Y, U) {
              ((Y.pending_buf[Y.pending++] = 255 & U),
                (Y.pending_buf[Y.pending++] = (U >>> 8) & 255));
            }
            function K(Y, U, ce) {
              Y.bi_valid > v - ce
                ? ((Y.bi_buf |= (U << Y.bi_valid) & 65535),
                  Z(Y, Y.bi_buf),
                  (Y.bi_buf = U >> (v - Y.bi_valid)),
                  (Y.bi_valid += ce - v))
                : ((Y.bi_buf |= (U << Y.bi_valid) & 65535), (Y.bi_valid += ce));
            }
            function q(Y, U, ce) {
              K(Y, ce[2 * U], ce[2 * U + 1]);
            }
            function V(Y, U) {
              for (
                var ce = 0;
                (ce |= 1 & Y), (Y >>>= 1), (ce <<= 1), 0 < --U;
              );
              return ce >>> 1;
            }
            function ne(Y, U, ce) {
              var pe,
                se,
                Te = new Array(y + 1),
                ke = 0;
              for (pe = 1; pe <= y; pe++) Te[pe] = ke = (ke + ce[pe - 1]) << 1;
              for (se = 0; se <= U; se++) {
                var W = Y[2 * se + 1];
                W !== 0 && (Y[2 * se] = V(Te[W]++, W));
              }
            }
            function le(Y) {
              var U;
              for (U = 0; U < m; U++) Y.dyn_ltree[2 * U] = 0;
              for (U = 0; U < h; U++) Y.dyn_dtree[2 * U] = 0;
              for (U = 0; U < g; U++) Y.bl_tree[2 * U] = 0;
              ((Y.dyn_ltree[2 * N] = 1),
                (Y.opt_len = Y.static_len = 0),
                (Y.last_lit = Y.matches = 0));
            }
            function ie(Y) {
              (8 < Y.bi_valid
                ? Z(Y, Y.bi_buf)
                : 0 < Y.bi_valid && (Y.pending_buf[Y.pending++] = Y.bi_buf),
                (Y.bi_buf = 0),
                (Y.bi_valid = 0));
            }
            function X(Y, U, ce, pe) {
              var se = 2 * U,
                Te = 2 * ce;
              return Y[se] < Y[Te] || (Y[se] === Y[Te] && pe[U] <= pe[ce]);
            }
            function je(Y, U, ce) {
              for (
                var pe = Y.heap[ce], se = ce << 1;
                se <= Y.heap_len &&
                (se < Y.heap_len &&
                  X(U, Y.heap[se + 1], Y.heap[se], Y.depth) &&
                  se++,
                !X(U, pe, Y.heap[se], Y.depth));
              )
                ((Y.heap[ce] = Y.heap[se]), (ce = se), (se <<= 1));
              Y.heap[ce] = pe;
            }
            function xe(Y, U, ce) {
              var pe,
                se,
                Te,
                ke,
                W = 0;
              if (Y.last_lit !== 0)
                for (
                  ;
                  (pe =
                    (Y.pending_buf[Y.d_buf + 2 * W] << 8) |
                    Y.pending_buf[Y.d_buf + 2 * W + 1]),
                    (se = Y.pending_buf[Y.l_buf + W]),
                    W++,
                    pe === 0
                      ? q(Y, se, U)
                      : (q(Y, (Te = I[se]) + p + 1, U),
                        (ke = k[Te]) !== 0 && K(Y, (se -= L[Te]), ke),
                        q(Y, (Te = O(--pe)), ce),
                        (ke = C[Te]) !== 0 && K(Y, (pe -= $[Te]), ke)),
                    W < Y.last_lit;
                );
              q(Y, N, U);
            }
            function ye(Y, U) {
              var ce,
                pe,
                se,
                Te = U.dyn_tree,
                ke = U.stat_desc.static_tree,
                W = U.stat_desc.has_stree,
                ue = U.stat_desc.elems,
                re = -1;
              for (Y.heap_len = 0, Y.heap_max = x, ce = 0; ce < ue; ce++)
                Te[2 * ce] !== 0
                  ? ((Y.heap[++Y.heap_len] = re = ce), (Y.depth[ce] = 0))
                  : (Te[2 * ce + 1] = 0);
              for (; Y.heap_len < 2; )
                ((Te[2 * (se = Y.heap[++Y.heap_len] = re < 2 ? ++re : 0)] = 1),
                  (Y.depth[se] = 0),
                  Y.opt_len--,
                  W && (Y.static_len -= ke[2 * se + 1]));
              for (U.max_code = re, ce = Y.heap_len >> 1; 1 <= ce; ce--)
                je(Y, Te, ce);
              for (
                se = ue;
                (ce = Y.heap[1]),
                  (Y.heap[1] = Y.heap[Y.heap_len--]),
                  je(Y, Te, 1),
                  (pe = Y.heap[1]),
                  (Y.heap[--Y.heap_max] = ce),
                  (Y.heap[--Y.heap_max] = pe),
                  (Te[2 * se] = Te[2 * ce] + Te[2 * pe]),
                  (Y.depth[se] =
                    (Y.depth[ce] >= Y.depth[pe] ? Y.depth[ce] : Y.depth[pe]) +
                    1),
                  (Te[2 * ce + 1] = Te[2 * pe + 1] = se),
                  (Y.heap[1] = se++),
                  je(Y, Te, 1),
                  2 <= Y.heap_len;
              );
              ((Y.heap[--Y.heap_max] = Y.heap[1]),
                (function (he, ge) {
                  var J,
                    G,
                    we,
                    Q,
                    ve,
                    Ve,
                    Ae = ge.dyn_tree,
                    te = ge.max_code,
                    Se = ge.stat_desc.static_tree,
                    Fe = ge.stat_desc.has_stree,
                    $e = ge.stat_desc.extra_bits,
                    tt = ge.stat_desc.extra_base,
                    Xe = ge.stat_desc.max_length,
                    ht = 0;
                  for (Q = 0; Q <= y; Q++) he.bl_count[Q] = 0;
                  for (
                    Ae[2 * he.heap[he.heap_max] + 1] = 0, J = he.heap_max + 1;
                    J < x;
                    J++
                  )
                    (Xe < (Q = Ae[2 * Ae[2 * (G = he.heap[J]) + 1] + 1] + 1) &&
                      ((Q = Xe), ht++),
                      (Ae[2 * G + 1] = Q),
                      te < G ||
                        (he.bl_count[Q]++,
                        (ve = 0),
                        tt <= G && (ve = $e[G - tt]),
                        (Ve = Ae[2 * G]),
                        (he.opt_len += Ve * (Q + ve)),
                        Fe && (he.static_len += Ve * (Se[2 * G + 1] + ve))));
                  if (ht !== 0) {
                    do {
                      for (Q = Xe - 1; he.bl_count[Q] === 0; ) Q--;
                      (he.bl_count[Q]--,
                        (he.bl_count[Q + 1] += 2),
                        he.bl_count[Xe]--,
                        (ht -= 2));
                    } while (0 < ht);
                    for (Q = Xe; Q !== 0; Q--)
                      for (G = he.bl_count[Q]; G !== 0; )
                        te < (we = he.heap[--J]) ||
                          (Ae[2 * we + 1] !== Q &&
                            ((he.opt_len += (Q - Ae[2 * we + 1]) * Ae[2 * we]),
                            (Ae[2 * we + 1] = Q)),
                          G--);
                  }
                })(Y, U),
                ne(Te, re, Y.bl_count));
            }
            function R(Y, U, ce) {
              var pe,
                se,
                Te = -1,
                ke = U[1],
                W = 0,
                ue = 7,
                re = 4;
              for (
                ke === 0 && ((ue = 138), (re = 3)),
                  U[2 * (ce + 1) + 1] = 65535,
                  pe = 0;
                pe <= ce;
                pe++
              )
                ((se = ke),
                  (ke = U[2 * (pe + 1) + 1]),
                  (++W < ue && se === ke) ||
                    (W < re
                      ? (Y.bl_tree[2 * se] += W)
                      : se !== 0
                        ? (se !== Te && Y.bl_tree[2 * se]++, Y.bl_tree[2 * w]++)
                        : W <= 10
                          ? Y.bl_tree[2 * _]++
                          : Y.bl_tree[2 * A]++,
                    (Te = se),
                    (re =
                      (W = 0) === ke
                        ? ((ue = 138), 3)
                        : se === ke
                          ? ((ue = 6), 3)
                          : ((ue = 7), 4))));
            }
            function oe(Y, U, ce) {
              var pe,
                se,
                Te = -1,
                ke = U[1],
                W = 0,
                ue = 7,
                re = 4;
              for (ke === 0 && ((ue = 138), (re = 3)), pe = 0; pe <= ce; pe++)
                if (
                  ((se = ke),
                  (ke = U[2 * (pe + 1) + 1]),
                  !(++W < ue && se === ke))
                ) {
                  if (W < re) for (; q(Y, se, Y.bl_tree), --W != 0; );
                  else
                    se !== 0
                      ? (se !== Te && (q(Y, se, Y.bl_tree), W--),
                        q(Y, w, Y.bl_tree),
                        K(Y, W - 3, 2))
                      : W <= 10
                        ? (q(Y, _, Y.bl_tree), K(Y, W - 3, 3))
                        : (q(Y, A, Y.bl_tree), K(Y, W - 11, 7));
                  ((Te = se),
                    (re =
                      (W = 0) === ke
                        ? ((ue = 138), 3)
                        : se === ke
                          ? ((ue = 6), 3)
                          : ((ue = 7), 4)));
                }
            }
            d($);
            var ee = !1;
            function H(Y, U, ce, pe) {
              (K(Y, (u << 1) + (pe ? 1 : 0), 3),
                (function (se, Te, ke, W) {
                  (ie(se),
                    Z(se, ke),
                    Z(se, ~ke),
                    i.arraySet(se.pending_buf, se.window, Te, ke, se.pending),
                    (se.pending += ke));
                })(Y, U, ce));
            }
            ((r._tr_init = function (Y) {
              (ee ||
                ((function () {
                  var U,
                    ce,
                    pe,
                    se,
                    Te,
                    ke = new Array(y + 1);
                  for (se = pe = 0; se < f - 1; se++)
                    for (L[se] = pe, U = 0; U < 1 << k[se]; U++) I[pe++] = se;
                  for (I[pe - 1] = se, se = Te = 0; se < 16; se++)
                    for ($[se] = Te, U = 0; U < 1 << C[se]; U++) T[Te++] = se;
                  for (Te >>= 7; se < h; se++)
                    for ($[se] = Te << 7, U = 0; U < 1 << (C[se] - 7); U++)
                      T[256 + Te++] = se;
                  for (ce = 0; ce <= y; ce++) ke[ce] = 0;
                  for (U = 0; U <= 143; ) ((S[2 * U + 1] = 8), U++, ke[8]++);
                  for (; U <= 255; ) ((S[2 * U + 1] = 9), U++, ke[9]++);
                  for (; U <= 279; ) ((S[2 * U + 1] = 7), U++, ke[7]++);
                  for (; U <= 287; ) ((S[2 * U + 1] = 8), U++, ke[8]++);
                  for (ne(S, m + 1, ke), U = 0; U < h; U++)
                    ((j[2 * U + 1] = 5), (j[2 * U] = V(U, 5)));
                  ((B = new P(S, k, p + 1, m, y)),
                    (F = new P(j, C, 0, h, y)),
                    (D = new P(new Array(0), M, 0, g, b)));
                })(),
                (ee = !0)),
                (Y.l_desc = new z(Y.dyn_ltree, B)),
                (Y.d_desc = new z(Y.dyn_dtree, F)),
                (Y.bl_desc = new z(Y.bl_tree, D)),
                (Y.bi_buf = 0),
                (Y.bi_valid = 0),
                le(Y));
            }),
              (r._tr_stored_block = H),
              (r._tr_flush_block = function (Y, U, ce, pe) {
                var se,
                  Te,
                  ke = 0;
                (0 < Y.level
                  ? (Y.strm.data_type === 2 &&
                      (Y.strm.data_type = (function (W) {
                        var ue,
                          re = 4093624447;
                        for (ue = 0; ue <= 31; ue++, re >>>= 1)
                          if (1 & re && W.dyn_ltree[2 * ue] !== 0) return o;
                        if (
                          W.dyn_ltree[18] !== 0 ||
                          W.dyn_ltree[20] !== 0 ||
                          W.dyn_ltree[26] !== 0
                        )
                          return c;
                        for (ue = 32; ue < p; ue++)
                          if (W.dyn_ltree[2 * ue] !== 0) return c;
                        return o;
                      })(Y)),
                    ye(Y, Y.l_desc),
                    ye(Y, Y.d_desc),
                    (ke = (function (W) {
                      var ue;
                      for (
                        R(W, W.dyn_ltree, W.l_desc.max_code),
                          R(W, W.dyn_dtree, W.d_desc.max_code),
                          ye(W, W.bl_desc),
                          ue = g - 1;
                        3 <= ue && W.bl_tree[2 * E[ue] + 1] === 0;
                        ue--
                      );
                      return ((W.opt_len += 3 * (ue + 1) + 5 + 5 + 4), ue);
                    })(Y)),
                    (se = (Y.opt_len + 3 + 7) >>> 3),
                    (Te = (Y.static_len + 3 + 7) >>> 3) <= se && (se = Te))
                  : (se = Te = ce + 5),
                  ce + 4 <= se && U !== -1
                    ? H(Y, U, ce, pe)
                    : Y.strategy === 4 || Te === se
                      ? (K(Y, 2 + (pe ? 1 : 0), 3), xe(Y, S, j))
                      : (K(Y, 4 + (pe ? 1 : 0), 3),
                        (function (W, ue, re, he) {
                          var ge;
                          for (
                            K(W, ue - 257, 5),
                              K(W, re - 1, 5),
                              K(W, he - 4, 4),
                              ge = 0;
                            ge < he;
                            ge++
                          )
                            K(W, W.bl_tree[2 * E[ge] + 1], 3);
                          (oe(W, W.dyn_ltree, ue - 1),
                            oe(W, W.dyn_dtree, re - 1));
                        })(
                          Y,
                          Y.l_desc.max_code + 1,
                          Y.d_desc.max_code + 1,
                          ke + 1,
                        ),
                        xe(Y, Y.dyn_ltree, Y.dyn_dtree)),
                  le(Y),
                  pe && ie(Y));
              }),
              (r._tr_tally = function (Y, U, ce) {
                return (
                  (Y.pending_buf[Y.d_buf + 2 * Y.last_lit] = (U >>> 8) & 255),
                  (Y.pending_buf[Y.d_buf + 2 * Y.last_lit + 1] = 255 & U),
                  (Y.pending_buf[Y.l_buf + Y.last_lit] = 255 & ce),
                  Y.last_lit++,
                  U === 0
                    ? Y.dyn_ltree[2 * ce]++
                    : (Y.matches++,
                      U--,
                      Y.dyn_ltree[2 * (I[ce] + p + 1)]++,
                      Y.dyn_dtree[2 * O(U)]++),
                  Y.last_lit === Y.lit_bufsize - 1
                );
              }),
              (r._tr_align = function (Y) {
                (K(Y, 2, 3),
                  q(Y, N, S),
                  (function (U) {
                    U.bi_valid === 16
                      ? (Z(U, U.bi_buf), (U.bi_buf = 0), (U.bi_valid = 0))
                      : 8 <= U.bi_valid &&
                        ((U.pending_buf[U.pending++] = 255 & U.bi_buf),
                        (U.bi_buf >>= 8),
                        (U.bi_valid -= 8));
                  })(Y));
              }));
          },
          { "../utils/common": 41 },
        ],
        53: [
          function (n, a, r) {
            a.exports = function () {
              ((this.input = null),
                (this.next_in = 0),
                (this.avail_in = 0),
                (this.total_in = 0),
                (this.output = null),
                (this.next_out = 0),
                (this.avail_out = 0),
                (this.total_out = 0),
                (this.msg = ""),
                (this.state = null),
                (this.data_type = 2),
                (this.adler = 0));
            };
          },
          {},
        ],
        54: [
          function (n, a, r) {
            (function (i) {
              (function (o, c) {
                if (!o.setImmediate) {
                  var d,
                    u,
                    f,
                    p,
                    m = 1,
                    h = {},
                    g = !1,
                    x = o.document,
                    y = Object.getPrototypeOf && Object.getPrototypeOf(o);
                  ((y = y && y.setTimeout ? y : o),
                    (d =
                      {}.toString.call(o.process) === "[object process]"
                        ? function (w) {
                            process.nextTick(function () {
                              b(w);
                            });
                          }
                        : (function () {
                              if (o.postMessage && !o.importScripts) {
                                var w = !0,
                                  _ = o.onmessage;
                                return (
                                  (o.onmessage = function () {
                                    w = !1;
                                  }),
                                  o.postMessage("", "*"),
                                  (o.onmessage = _),
                                  w
                                );
                              }
                            })()
                          ? ((p = "setImmediate$" + Math.random() + "$"),
                            o.addEventListener
                              ? o.addEventListener("message", N, !1)
                              : o.attachEvent("onmessage", N),
                            function (w) {
                              o.postMessage(p + w, "*");
                            })
                          : o.MessageChannel
                            ? (((f = new MessageChannel()).port1.onmessage =
                                function (w) {
                                  b(w.data);
                                }),
                              function (w) {
                                f.port2.postMessage(w);
                              })
                            : x &&
                                "onreadystatechange" in
                                  x.createElement("script")
                              ? ((u = x.documentElement),
                                function (w) {
                                  var _ = x.createElement("script");
                                  ((_.onreadystatechange = function () {
                                    (b(w),
                                      (_.onreadystatechange = null),
                                      u.removeChild(_),
                                      (_ = null));
                                  }),
                                    u.appendChild(_));
                                })
                              : function (w) {
                                  setTimeout(b, 0, w);
                                }),
                    (y.setImmediate = function (w) {
                      typeof w != "function" && (w = new Function("" + w));
                      for (
                        var _ = new Array(arguments.length - 1), A = 0;
                        A < _.length;
                        A++
                      )
                        _[A] = arguments[A + 1];
                      var k = { callback: w, args: _ };
                      return ((h[m] = k), d(m), m++);
                    }),
                    (y.clearImmediate = v));
                }
                function v(w) {
                  delete h[w];
                }
                function b(w) {
                  if (g) setTimeout(b, 0, w);
                  else {
                    var _ = h[w];
                    if (_) {
                      g = !0;
                      try {
                        (function (A) {
                          var k = A.callback,
                            C = A.args;
                          switch (C.length) {
                            case 0:
                              k();
                              break;
                            case 1:
                              k(C[0]);
                              break;
                            case 2:
                              k(C[0], C[1]);
                              break;
                            case 3:
                              k(C[0], C[1], C[2]);
                              break;
                            default:
                              k.apply(c, C);
                          }
                        })(_);
                      } finally {
                        (v(w), (g = !1));
                      }
                    }
                  }
                }
                function N(w) {
                  w.source === o &&
                    typeof w.data == "string" &&
                    w.data.indexOf(p) === 0 &&
                    b(+w.data.slice(p.length));
                }
              })(typeof self > "u" ? (i === void 0 ? this : i) : self);
            }).call(
              this,
              typeof Nc < "u"
                ? Nc
                : typeof self < "u"
                  ? self
                  : typeof window < "u"
                    ? window
                    : {},
            );
          },
          {},
        ],
      },
      {},
      [10],
    )(10);
  });
})(HC);
var YZ = HC.exports;
const fp = G5(YZ),
  VZ = "https://image.novelai.net",
  JZ = "nai-diffusion-3";
let my = Promise.resolve();
async function KZ(t, s = {}) {
  const {
    apiKey: n,
    endpoint: a,
    referenceImageBase64: r,
    width: i = 832,
    height: o = 832,
    negativePrompt: c,
  } = s;
  if (!n || !t) return { ok: !1, error: "未配置 Novel API Key 或 prompt 为空" };
  const d = async () => {
    var w, _, A, k;
    const f = `${(a || VZ).replace(/\/$/, "")}/ai/generate-image`,
      m = {
        prompt: String(t).slice(0, 2e3),
        width: i,
        height: o,
        n_samples: 1,
        steps: 28,
        scale: 5,
        sampler: "k_euler_ancestral",
        negative_prompt:
          typeof c == "string" && c.trim()
            ? c.trim()
            : "lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry",
      };
    r &&
      ((m.reference_image = r.replace(/^data:image\/\w+;base64,/, "")),
      (m.reference_strength = 0.6));
    const h = { input: m.prompt, model: JZ, parameters: m },
      g = 12e4,
      x = 2,
      y = 3e3,
      v = async () => {
        const C = new AbortController(),
          M = setTimeout(() => C.abort(), g),
          E = await fetch(f, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${n}`,
            },
            body: JSON.stringify(h),
            signal: C.signal,
          });
        return (clearTimeout(M), E);
      };
    let b,
      N = null;
    for (let C = 0; C <= x; C++)
      try {
        if (
          (C > 0 && (await new Promise((M) => setTimeout(M, y))),
          (b = await v()),
          b.ok || b.status < 500)
        )
          break;
        N = b;
      } catch (M) {
        if (((N = M), C === x)) throw M;
      }
    try {
      const C = b.headers.get("content-type") || "";
      if (!b.ok) {
        const E = await b.text();
        let S = `API 错误 ${b.status}`;
        try {
          const j = JSON.parse(E);
          S =
            (j == null ? void 0 : j.message) ||
            (j == null ? void 0 : j.error) ||
            (E == null ? void 0 : E.slice(0, 200)) ||
            S;
        } catch {
          b.status === 401
            ? (S = "API Key 无效或已过期")
            : b.status === 403
              ? (S = "无权限访问（请检查 API Key）")
              : b.status === 429
                ? (S = "请求过于频繁，请稍后重试")
                : b.status >= 500
                  ? (S = "服务器暂时异常，请稍后重试")
                  : E && (S = E.slice(0, 150));
        }
        return (
          /recaptcha|Recaptcha/i.test(S) &&
            (S =
              "Novel AI 试用需要 reCAPTCHA 验证。请在设置中配置「Novel Endpoint」为可用的代理地址（绕过验证的 Novel 代理），或使用付费订阅。"),
          /concurrent|locked/i.test(S) &&
            (S = "Novel AI 正在处理其他生图请求，请稍后再试（已改为串行生图）"),
          /internal server error|500/i.test(S) &&
            (S = "Novel AI 服务器暂时异常，请稍后重试（已自动重试）"),
          { ok: !1, error: S }
        );
      }
      const M = await b.blob();
      if (C.includes("zip") || (M.type && M.type.includes("zip"))) {
        const E = await fp.loadAsync(M),
          S = Object.keys(E.files).filter((F) =>
            /\.(png|webp|jpg|jpeg)$/i.test(F),
          );
        if (S.length === 0)
          return { ok: !1, error: "API 返回的压缩包中无有效图片" };
        const T = await E.files[S[0]].async("arraybuffer"),
          I = btoa(
            new Uint8Array(T).reduce((F, D) => F + String.fromCharCode(D), ""),
          ),
          L =
            ((w = S[0].split(".").pop()) == null ? void 0 : w.toLowerCase()) ||
            "png";
        return {
          ok: !0,
          data: `data:${L === "webp" ? "image/webp" : L === "jpg" || L === "jpeg" ? "image/jpeg" : "image/png"};base64,${I}`,
        };
      }
      if (C.includes("image")) {
        const E = await M.arrayBuffer(),
          S = btoa(
            new Uint8Array(E).reduce((j, T) => j + String.fromCharCode(T), ""),
          );
        return { ok: !0, data: `data:${C.split(";")[0]};base64,${S}` };
      }
      if (C.includes("json")) {
        const E = await M.text();
        try {
          const S = JSON.parse(E),
            j =
              (S == null ? void 0 : S.data) ||
              (S == null ? void 0 : S.image) ||
              (S == null ? void 0 : S.b64_json) ||
              (S == null ? void 0 : S.bytesBase64Encoded) ||
              ((A =
                (_ = S == null ? void 0 : S.predictions) == null
                  ? void 0
                  : _[0]) == null
                ? void 0
                : A.bytesBase64Encoded);
          if (j && typeof j == "string") {
            const T = j.startsWith("data:") ? "" : "data:image/png;base64,";
            return { ok: !0, data: T ? T + j : j };
          }
        } catch {}
      }
      try {
        const E = new Uint8Array(await M.slice(0, 12).arrayBuffer()),
          S = E[0] === 80 && E[1] === 75,
          j = E[0] === 137 && E[1] === 80 && E[2] === 78 && E[3] === 71,
          T = E[0] === 255 && E[1] === 216,
          I =
            E[0] === 82 &&
            E[1] === 73 &&
            E[2] === 70 &&
            E[3] === 70 &&
            E[8] === 87 &&
            E[9] === 69;
        if (j || T || I) {
          const F = await M.arrayBuffer(),
            D = btoa(
              new Uint8Array(F).reduce(
                (P, z) => P + String.fromCharCode(z),
                "",
              ),
            );
          return {
            ok: !0,
            data: `data:${j ? "image/png" : T ? "image/jpeg" : "image/webp"};base64,${D}`,
          };
        }
        if (!S) return { ok: !1, error: "API 返回格式异常，非图片或 zip" };
        const L = await fp.loadAsync(M),
          B = Object.keys(L.files).filter((F) =>
            /\.(png|webp|jpg|jpeg)$/i.test(F),
          );
        if (B.length > 0) {
          const D = await L.files[B[0]].async("arraybuffer"),
            $ = btoa(
              new Uint8Array(D).reduce(
                (O, Z) => O + String.fromCharCode(Z),
                "",
              ),
            ),
            P =
              ((k = B[0].split(".").pop()) == null
                ? void 0
                : k.toLowerCase()) || "png";
          return {
            ok: !0,
            data: `data:${P === "webp" ? "image/webp" : P === "jpg" || P === "jpeg" ? "image/jpeg" : "image/png"};base64,${$}`,
          };
        }
      } catch {}
      return { ok: !1, error: "API 返回格式异常，非图片或 zip" };
    } catch (C) {
      const M = (C == null ? void 0 : C.message) || String(C);
      return (C == null ? void 0 : C.name) === "AbortError"
        ? { ok: !1, error: "生图超时（120 秒），请检查网络或稍后重试" }
        : M.includes("Failed to fetch") || M.includes("NetworkError")
          ? { ok: !1, error: "网络请求失败，请检查网络或代理" }
          : { ok: !1, error: M.slice(0, 120) };
    }
  };
  return ((my = my.then(() => d())), my);
}
const O4 = "backstage_stories_archive",
  qZ = {
    0: { 0: { width: 896, height: 480 }, 1: { width: 832, height: 832 } },
    1: { 0: { width: 832, height: 832 }, 1: { width: 416, height: 832 } },
    2: { 0: { width: 832, height: 832 }, 1: { width: 832, height: 704 } },
  },
  B4 = [
    "https://files.catbox.moe/fd94jv.jpg",
    "https://files.catbox.moe/2sstsi.jpg",
    "https://files.catbox.moe/2ky1ng.jpg",
    "https://files.catbox.moe/vt4y2n.jpg",
    "https://files.catbox.moe/2m40lh.jpg",
    "https://files.catbox.moe/fp9vtv.jpg",
    "https://files.catbox.moe/nxabqq.jpg",
    "https://files.catbox.moe/ls50g2.jpg",
    "https://files.catbox.moe/a8mmgr.jpg",
    "https://files.catbox.moe/08wxvc.jpg",
  ],
  QZ = (t, s) => `phone_app_trace_today_${t}_${s}`,
  ZZ = (t, s) => `phone_app_plan_${t}_${s}`,
  U4 = (t) =>
    `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`,
  XZ = (t) => {
    if (!t || typeof t != "string") return null;
    try {
      const s = t.match(/\{[\s\S]*\}/),
        n = JSON.parse(s ? s[0] : t);
      if (!(n != null && n.pages) || !Array.isArray(n.pages)) return null;
      const a = n.pages.map((i) => ({
          texts: Array.isArray(i.texts)
            ? i.texts
            : [i.text1 || "", i.text2 || ""].filter(Boolean),
          imagePrompts: Array.isArray(i.imagePrompts)
            ? i.imagePrompts
            : [i.img1 || "", i.img2 || ""].filter(Boolean),
        })),
        r =
          n.title && typeof n.title == "string"
            ? n.title.trim().slice(0, 40)
            : null;
      return { pages: a, title: r };
    } catch {
      return null;
    }
  },
  eX = (t, s, n) => {
    const a = new Set();
    return (
      (s || []).forEach((r) => {
        var i;
        r.contactId &&
          ((i = r.messages) == null ? void 0 : i.length) > 0 &&
          a.add(r.contactId);
      }),
      Object.keys(n || {}).forEach((r) => {
        const i = n[r];
        Array.isArray(i) && i.length > 0 && a.add(r);
      }),
      t.filter((r) => a.has(r.id))
    );
  },
  tX = (t) => {
    const s = [...t];
    for (let n = s.length - 1; n > 0; n--) {
      const a = Math.floor(Math.random() * (n + 1));
      [s[n], s[a]] = [s[a], s[n]];
    }
    return s;
  },
  sX = (t) => {
    var s, n, a, r;
    return {
      id: t.id || `B-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      contactId: (s = t.contact) == null ? void 0 : s.id,
      contactName: (n = t.contact) == null ? void 0 : n.name,
      contactNickname: (a = t.contact) == null ? void 0 : a.nickname,
      title: t.title,
      snippet: t.snippet,
      pages: t.pages,
      chatSettings: (r = t.chat) == null ? void 0 : r.settings,
      generatedAt: t.generatedAt || Date.now(),
    };
  },
  nX = (t, s = [], n = []) => {
    const a = s.find((i) => i.id === t.contactId) || {
        id: t.contactId,
        name: t.contactName,
        nickname: t.contactNickname,
      },
      r = n.find((i) => i.contactId === t.contactId) || {
        settings: t.chatSettings,
      };
    return {
      id: t.id,
      contact: a,
      chat: r,
      title: t.title,
      snippet: t.snippet,
      pages: t.pages,
      generatedAt: t.generatedAt,
    };
  },
  aX = ({ story: t, contact: s, chat: n, apiConfig: a, onClose: r }) => {
    var Z, K, q, V, ne, le, ie, X, je, xe, ye, R, oe, ee, H;
    const [i, o] = l.useState(0),
      [c, d] = l.useState({}),
      [u, f] = l.useState({}),
      [p, m] = l.useState(!1),
      h =
        ((Z = n == null ? void 0 : n.settings) == null
          ? void 0
          : Z.enableNovel) === !0,
      g = a == null ? void 0 : a.novelImageKey,
      x = a == null ? void 0 : a.novelImageEndpoint,
      y =
        ((K = n == null ? void 0 : n.settings) == null
          ? void 0
          : K.novelFacePrompt) || "",
      v =
        ((q = n == null ? void 0 : n.settings) == null
          ? void 0
          : q.novelFaceNegativePrompt) || "",
      b =
        ((V = n == null ? void 0 : n.settings) == null
          ? void 0
          : V.novelLandscapeNegativePrompt) || "",
      N =
        ((ne = n == null ? void 0 : n.settings) == null
          ? void 0
          : ne.novelCharacterPhoto) || "",
      w = !!g && h,
      _ = pn.useRef(new Set()),
      A = l.useCallback(
        async (Y, U, ce) => {
          var he;
          if (!w || !ce) return null;
          const pe = `${Y}_${U}`;
          if (_.current.has(pe)) return;
          _.current.add(pe);
          const se = Y % 3,
            Te = ((he = qZ[se]) == null ? void 0 : he[U]) || {
              width: 832,
              height: 832,
            },
            ke = y ? `${y}, ${ce}` : ce;
          let W = null;
          N && (W = N.startsWith("data:") ? N : `data:image/png;base64,${N}`);
          const re = !!(y || N) ? v : b;
          try {
            const ge = await KZ(ke, {
              apiKey: g,
              endpoint: x || void 0,
              referenceImageBase64: W,
              width: Te.width,
              height: Te.height,
              negativePrompt: re || void 0,
            });
            ge != null && ge.ok && ge.data
              ? d((J) => ({ ...J, [pe]: ge.data }))
              : f((J) => ({
                  ...J,
                  [pe]: (ge == null ? void 0 : ge.error) || "图片生成失败",
                }));
          } catch (ge) {
            f((J) => ({
              ...J,
              [pe]: (ge == null ? void 0 : ge.message) || "图片生成异常",
            }));
          }
        },
        [w, y, v, b, N, g, x],
      ),
      k = (t == null ? void 0 : t.pages) || [],
      C = k[i],
      M = i > 0,
      E = i < k.length - 1;
    l.useEffect(() => {
      const Y = k[i];
      if (!(Y != null && Y.imagePrompts)) return;
      (async () => {
        for (let ce = 0; ce < Y.imagePrompts.length; ce++)
          (ce > 0 && (await new Promise((pe) => setTimeout(pe, 2500))),
            await A(i, ce, Y.imagePrompts[ce]));
      })();
    }, [i, k, A]);
    const S = () => {
        !M || p || (m(!0), o((Y) => Y - 1), setTimeout(() => m(!1), 600));
      },
      j = () => {
        p || (E ? (m(!0), o((Y) => Y + 1), setTimeout(() => m(!1), 600)) : r());
      };
    l.useEffect(() => {
      const Y = (U) => {
        U.key === "ArrowLeft" ? S() : U.key === "ArrowRight" && j();
      };
      return (
        window.addEventListener("keydown", Y),
        () => window.removeEventListener("keydown", Y)
      );
    }, [S, j]);
    const T = k.length ? ((i + 1) / k.length) * 100 : 0,
      I = (Y) => {
        const U = `${i}_${Y}`;
        return c[U] || null;
      },
      L = (Y) => {
        const U = `${i}_${Y}`;
        return u[U] || null;
      };
    if (!C) return null;
    const B = i % 3,
      F = (Y) => {
        var pe;
        const U =
            ((pe = s == null ? void 0 : s.id) == null
              ? void 0
              : pe.split("").reduce((se, Te) => se + Te.charCodeAt(0), 0)) || 0,
          ce = (i * 2 + Y + U) % B4.length;
        return B4[ce];
      },
      D = (Y, U, ce) => {
        const pe = I(Y),
          se = L(Y);
        if (U)
          return e.jsx("div", {
            className:
              "w-full h-full flex items-center justify-center bg-white",
            children: e.jsx(Sn, {
              size: Y === 0 ? 24 : 16,
              className: "animate-spin text-[#8c7a6b]",
            }),
          });
        if (pe) return e.jsx("img", { src: pe, alt: "" });
        if (!w && ce)
          return e.jsx("img", {
            src: F(Y),
            alt: "",
            className: "w-full h-full object-cover",
          });
        const Te = se || null;
        return e.jsx("div", {
          className:
            "w-full h-full flex flex-col items-center justify-center bg-[#f5f2ea] p-4 text-center",
          children: Te
            ? e.jsxs(e.Fragment, {
                children: [
                  e.jsx("span", {
                    className: "text-[#8c7a6b] text-xs mb-1",
                    children: "图片生成失败",
                  }),
                  e.jsx("span", {
                    className:
                      "text-[#a09080] text-[10px] leading-tight break-words",
                    children: Te,
                  }),
                ],
              })
            : e.jsx("span", {
                className: "text-[#d1cbc1] text-sm",
                children: "—",
              }),
        });
      },
      $ = ((le = C.texts) == null ? void 0 : le[0]) || "",
      P = ((ie = C.texts) == null ? void 0 : ie[1]) || "",
      z =
        w &&
        ((X = C.imagePrompts) == null ? void 0 : X[0]) &&
        !c[`${i}_0`] &&
        !u[`${i}_0`],
      O =
        w &&
        ((je = C.imagePrompts) == null ? void 0 : je[1]) &&
        !c[`${i}_1`] &&
        !u[`${i}_1`];
    return e.jsxs(We.div, {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "reflect-viewer fixed inset-0 z-[100]",
      children: [
        e.jsx("div", {
          className: "reflect-progress-line",
          children: e.jsx("div", {
            className: "reflect-progress-active",
            style: { width: `${T}%` },
          }),
        }),
        e.jsx("div", {
          className: "flex-1 min-h-0 flex flex-col overflow-hidden",
          style: { touchAction: "pan-y" },
          children: e.jsx("div", {
            className:
              "flex-1 overflow-y-auto overflow-x-hidden overscroll-contain z-[1]",
            style: { WebkitOverflowScrolling: "touch" },
            onClick: (Y) => {
              const U = Y.currentTarget.offsetWidth,
                ce = Y.clientX - Y.currentTarget.getBoundingClientRect().left;
              ce < U * 0.3 ? S() : ce > U * 0.7 && j();
            },
            children: e.jsx(Os, {
              mode: "wait",
              children: e.jsxs(
                We.div,
                {
                  className: "reflect-page reflect-page-scroll active",
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  transition: { duration: 1, ease: [0.19, 1, 0.22, 1] },
                  style: {
                    padding: "60px 35px 100px",
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "min-content",
                    flexShrink: 0,
                  },
                  children: [
                    B === 0 &&
                      e.jsxs(e.Fragment, {
                        children: [
                          e.jsx("div", {
                            className: "reflect-frame w-full mb-10",
                            style: { height: "40%", minHeight: 200 },
                            children: D(
                              0,
                              z,
                              !!((xe = C.imagePrompts) != null && xe[0]),
                            ),
                          }),
                          e.jsx("div", {
                            className: `reflect-text-magazine mb-6 ${$ ? "" : "invisible"}`,
                            children: $ || "—",
                          }),
                          e.jsxs("div", {
                            className: "flex gap-4",
                            children: [
                              e.jsx("div", {
                                className: "reflect-frame shrink-0",
                                style: { width: 96, height: 96 },
                                children: D(
                                  1,
                                  O,
                                  !!((ye = C.imagePrompts) != null && ye[1]),
                                ),
                              }),
                              e.jsx("p", {
                                className: "reflect-sub-text m-0 flex-1",
                                children: P || "—",
                              }),
                            ],
                          }),
                        ],
                      }),
                    B === 1 &&
                      e.jsxs(e.Fragment, {
                        children: [
                          e.jsx("div", {
                            className: `reflect-text-magazine mt-10 mb-12 ${$ ? "" : "invisible"}`,
                            children: $ || "—",
                          }),
                          e.jsxs("div", {
                            className: "flex gap-4 items-center",
                            children: [
                              e.jsx("div", {
                                className: "reflect-frame flex-1",
                                style: { height: 208 },
                                children: D(
                                  0,
                                  z,
                                  !!((R = C.imagePrompts) != null && R[0]),
                                ),
                              }),
                              e.jsx("div", {
                                className: "reflect-frame",
                                style: { width: 80, height: 160 },
                                children: D(
                                  1,
                                  O,
                                  !!((oe = C.imagePrompts) != null && oe[1]),
                                ),
                              }),
                            ],
                          }),
                          e.jsx("p", {
                            className: "reflect-sub-text",
                            children: P || "—",
                          }),
                        ],
                      }),
                    B === 2 &&
                      e.jsx(e.Fragment, {
                        children: e.jsxs("div", {
                          className: "flex flex-col gap-6",
                          children: [
                            e.jsx("div", {
                              className:
                                "reflect-frame self-center -rotate-[2deg] shrink-0",
                              style: { width: "70%", height: 256 },
                              children: D(
                                0,
                                z,
                                !!((ee = C.imagePrompts) != null && ee[0]),
                              ),
                            }),
                            e.jsx("div", {
                              className: `reflect-text-magazine px-4 ${$ ? "" : "invisible"}`,
                              children: $ || "—",
                            }),
                            e.jsx("div", {
                              className:
                                "reflect-frame self-end rotate-[2deg] shrink-0 mt-4",
                              style: { width: "40%", height: 128 },
                              children: D(
                                1,
                                O,
                                !!((H = C.imagePrompts) != null && H[1]),
                              ),
                            }),
                            e.jsx("p", {
                              className: "reflect-sub-text text-right",
                              children: P || "—",
                            }),
                          ],
                        }),
                      }),
                  ],
                },
                i,
              ),
            }),
          }),
        }),
        e.jsx("button", {
          type: "button",
          className: "reflect-back-btn",
          onClick: r,
          children: "Back to Archive",
        }),
      ],
    });
  },
  rX = () => {
    var F;
    const { navigateTo: t } = sl(),
      {
        contactsPublic: s,
        chats: n,
        getRoleBoundUser: a,
        apiConfig: r,
        user: i,
        addApiLog: o,
      } = vn(),
      c = Array.isArray(s) ? s.filter((D) => !Kl(D)) : [],
      [d, u] = l.useState([]),
      [f, p] = l.useState(!1),
      [m, h] = l.useState(null),
      [g, x] = l.useState(null),
      [y, v] = l.useState(null),
      [b, N] = l.useState({}),
      [w, _] = l.useState(!1),
      A = l.useRef(null),
      k = l.useRef(!1),
      C = 9e4,
      M = l.useCallback(async () => {
        var $;
        const D = await be.get(O4, null);
        (($ = D == null ? void 0 : D.stories) != null &&
          $.length &&
          u(D.stories.map((P) => nX(P, c, n))),
          _(!0));
      }, [c, n]);
    l.useEffect(() => {
      M();
    }, [M]);
    const E = l.useCallback(async (D) => {
        const $ = D.map(sX);
        await be.set(O4, { stories: $, updatedAt: Date.now() });
      }, []),
      S = l.useCallback(async () => {
        var V, ne, le, ie, X, je, xe;
        (p(!0), h(null));
        const D = await be.get("meet_app_stories", {});
        if ((N(D), !(r != null && r.endpoint) || !(r != null && r.key))) {
          (h("请先在设置中配置 API"), p(!1));
          return;
        }
        const $ = eX(c, n, D),
          z = tX($).slice(0, 2),
          O = U4(new Date()),
          Z = new Date();
        Z.setDate(Z.getDate() + 1);
        const K = U4(Z),
          q = [];
        for (const ye of z)
          try {
            const R = (n || []).find((Ae) => Ae.contactId === ye.id),
              oe = (a == null ? void 0 : a(ye)) || {},
              ee = oe.name || (i == null ? void 0 : i.name) || "TA",
              H = D[ye.id],
              Y = Array.isArray(H) && H.length > 0,
              U = (R == null ? void 0 : R.messages) || [];
            let ce = [];
            Y
              ? (ce = H.slice(-16).map((Ae) => ({
                  sender: Ae.role === "user" ? "me" : ye.id,
                  text: Ae.content || "",
                })))
              : U.length > 0 && (ce = U.slice(-24));
            const pe = ce.map(
                (Ae) =>
                  `${Ae.sender === "me" ? ee : ye.nickname || ye.name}: ${(Ae.text || "").slice(0, 100)}`,
              ).join(`
`),
              [se, Te] = await Promise.all([
                be.get(QZ(ye.id, O), null),
                be.get(ZZ(ye.id, K), null),
              ]);
            let ke = "（无）";
            if ((V = se == null ? void 0 : se.pages) != null && V.length) {
              const Ae = se.pages.flatMap((te) =>
                (te.traces || [])
                  .map((Se) =>
                    `${Se.time || ""} ${Se.location || ""} ${Se.activity || ""}`.trim(),
                  )
                  .filter(Boolean),
              );
              Ae.length &&
                (ke = Ae.slice(-6).join(`
`));
            }
            let W = "（无）";
            (ne = Te == null ? void 0 : Te.items) != null &&
              ne.length &&
              (W =
                Te.items
                  .map((Ae) => `${Ae.time || ""} ${Ae.text || ""}`.trim())
                  .filter(Boolean).join(`
`) || "（无）");
            const he = [
                {
                  sender: "me",
                  text: `你是「遗落的B面」生成系统。根据以下信息，生成一段 3-5 页的漫画式故事。每页有 2 个分镜（面板），每个分镜需要：1 段叙述文字 + 1 个配图描述（供插画生成使用）。

【角色人设】${ye.setting || "无"}
【绑定用户】${ee} ${(oe.settings || "").slice(0, 300)}
【最近对话】
${pe || "（无）"}
【今日行踪】${ke}
【明日计划】${W}

要求：
1. 故事要有起承转合，富有情感张力，可以是日常中的小确幸、遗憾、期待或重逢。
2. 叙述文字每段 50-150 字，文艺、有画面感。
3. 配图描述（imagePrompts）是面向二次元插画的关键词，每个 20-80 字，描述该分镜的画面（场景、人物神态、光影等），英文逗号分隔的 tag 风格。
4. 必须返回一个简短文艺的故事标题（10-20 字），如「深夜回信：那些未曾落笔的吻」「失真频率：在 4.5 赫兹寻找你」风格，放在 title 字段。
5. 返回严格 JSON，不要 markdown：
{"title":"文艺标题","pages":[{"texts":["叙述1","叙述2"],"imagePrompts":["插画描述1","插画描述2"]},{"texts":["...","..."],"imagePrompts":["...","..."]},...]}
6. 3-5 页，每页恰好 2 个 texts 和 2 个 imagePrompts。`,
                  timestamp: new Date().toISOString(),
                },
              ],
              ge = pc({
                apiConfig: r,
                contact: ye,
                effectiveUser: oe,
                messagesToApi: he,
                addApiLog: o,
                scene: "system_generation",
                logScene: "mail_backstage",
                timeoutMs: C,
              }),
              J = new Promise((Ae, te) =>
                setTimeout(
                  () => te(new Error("请求超时（90 秒），请检查网络后重试")),
                  C,
                ),
              ),
              G = await Promise.race([ge, J]);
            if (
              G === "请先在设置中配置API。" ||
              G === "抱歉，我暂时无法回复。"
            ) {
              h(G);
              continue;
            }
            const we = XZ(G),
              Q = we == null ? void 0 : we.pages,
              ve =
                (we == null ? void 0 : we.title) ||
                ((X =
                  (ie =
                    (le = Q == null ? void 0 : Q[0]) == null
                      ? void 0
                      : le.texts) == null
                    ? void 0
                    : ie[0]) == null
                  ? void 0
                  : X.slice(0, 30)) ||
                "遗落的B面",
              Ve =
                ((xe =
                  (je = Q == null ? void 0 : Q[0]) == null
                    ? void 0
                    : je.texts) == null
                  ? void 0
                  : xe.join(" ").slice(0, 80)) || "";
            if (Q && Q.length > 0) {
              const Ae = {
                contact: ye,
                chat: R,
                title: ve,
                snippet: Ve,
                pages: Q,
                generatedAt: Date.now(),
              };
              q.push(Ae);
            } else
              G &&
                typeof G == "string" &&
                h((Ae) => Ae || "故事格式解析失败，请重试");
          } catch (R) {
            const oe =
              (R == null ? void 0 : R.message) || "生成失败，请稍后重试";
            h((ee) => ee || oe);
          }
        (q.length > 0 &&
          u((ye) => {
            const R = [...q, ...ye].slice(0, 20);
            return (E(R), R);
          }),
          p(!1));
      }, [c, n, a, i, r, o, E]),
      j = () => {
        S();
      },
      T = () => t("home"),
      I = () => {
        A.current && (clearTimeout(A.current), (A.current = null));
      },
      L = (D, $ = 520) => {
        (I(),
          (k.current = !1),
          (A.current = setTimeout(() => {
            ((k.current = !0), v(D));
          }, $)));
      },
      B = async (D) => {
        D &&
          (v(null),
          x(($) => {
            var z, O;
            return (
              $ &&
              (($.id && D.id && String($.id) === String(D.id)) ||
              (!$.id &&
                !D.id &&
                ((z = $.contact) == null ? void 0 : z.id) &&
                ((O = D.contact) == null ? void 0 : O.id) &&
                String($.contact.id) === String(D.contact.id))
                ? null
                : $)
            );
          }),
          u(($) => {
            const P = $.filter((z) => {
              var Z, K;
              return D.id && z.id
                ? String(z.id) !== String(D.id)
                : !(
                    String(
                      ((Z = z == null ? void 0 : z.contact) == null
                        ? void 0
                        : Z.id) || "",
                    ) ===
                      String(
                        ((K = D == null ? void 0 : D.contact) == null
                          ? void 0
                          : K.id) || "",
                      ) &&
                    String((z == null ? void 0 : z.generatedAt) || "") ===
                      String((D == null ? void 0 : D.generatedAt) || "")
                  );
            });
            return (E(P), P);
          }));
      };
    return e.jsxs("div", {
      className: "reflect-canvas w-full h-full bg-[#121110]",
      children: [
        e.jsx("div", {
          className: "reflect-paper relative flex flex-col",
          children: e.jsxs("div", {
            id: "home",
            className: "reflect-home",
            children: [
              e.jsxs("div", {
                className:
                  "reflect-brand-header flex items-center justify-between",
                children: [
                  e.jsx("button", {
                    type: "button",
                    onClick: T,
                    className: "reflect-brand-title reflect-brand-btn",
                    "aria-label": "返回",
                    children: "返回",
                  }),
                  e.jsx("h1", {
                    className: "reflect-brand-title reflect-brand-title-center",
                    children: "回望",
                  }),
                  e.jsx("button", {
                    type: "button",
                    onClick: j,
                    disabled: f,
                    className: "reflect-brand-title reflect-brand-btn",
                    "aria-label": "刷新",
                    children: f
                      ? e.jsx(Sn, {
                          size: 14,
                          className: "animate-spin inline-block",
                          style: { verticalAlign: "middle" },
                        })
                      : "刷新",
                  }),
                ],
              }),
              e.jsx("div", {
                className:
                  "flex-1 overflow-y-auto pt-4 reflect-hide-scrollbar min-h-0",
                children: f
                  ? e.jsxs("div", {
                      className:
                        "flex flex-col items-center justify-center py-16 gap-3",
                      children: [
                        e.jsx(Sn, {
                          size: 28,
                          className: "animate-spin",
                          style: { color: "var(--reflect-accent)" },
                        }),
                        e.jsx("span", {
                          className: "text-xs opacity-70",
                          style: { color: "var(--reflect-accent)" },
                          children: "加载章节中...",
                        }),
                      ],
                    })
                  : w
                    ? m && d.length === 0
                      ? e.jsxs("div", {
                          className: "reflect-empty-state",
                          children: [
                            e.jsx(gp, {
                              size: 32,
                              className: "mx-auto mb-4 opacity-50",
                            }),
                            e.jsx("p", { className: "meta", children: "错误" }),
                            e.jsx("p", {
                              className: "text-sm mb-4",
                              children: m,
                            }),
                            e.jsx("button", {
                              type: "button",
                              className: "reflect-reload-btn",
                              onClick: j,
                              children: "重新加载",
                            }),
                          ],
                        })
                      : d.length === 0
                        ? e.jsxs("div", {
                            className: "reflect-empty-state",
                            children: [
                              e.jsx("p", {
                                className: "meta",
                                children: "暂无存档",
                              }),
                              e.jsx("p", {
                                className: "text-sm mb-4",
                                children: "请先与角色聊天或相遇",
                              }),
                              e.jsx("button", {
                                type: "button",
                                className: "reflect-reload-btn",
                                onClick: j,
                                children: "重新加载",
                              }),
                            ],
                          })
                        : d.map((D, $) => {
                            var P, z, O;
                            return e.jsxs(
                              "div",
                              {
                                className: "reflect-story-item",
                                onClick: () => {
                                  if (k.current) {
                                    k.current = !1;
                                    return;
                                  }
                                  x(D);
                                },
                                role: "button",
                                tabIndex: 0,
                                onKeyDown: (Z) => Z.key === "Enter" && x(D),
                                onPointerDown: (Z) => {
                                  ((Z == null ? void 0 : Z.button) != null &&
                                    Z.button !== 0) ||
                                    L(D);
                                },
                                onPointerUp: I,
                                onPointerCancel: I,
                                onPointerLeave: I,
                                onContextMenu: (Z) => {
                                  (Z.preventDefault(), I(), v(D));
                                },
                                children: [
                                  e.jsxs("span", {
                                    className: "meta",
                                    children: [
                                      D.id || `B-${$ + 1}`,
                                      " · ",
                                      ((P = D.contact) == null
                                        ? void 0
                                        : P.nickname) ||
                                        ((z = D.contact) == null
                                          ? void 0
                                          : z.name),
                                    ],
                                  }),
                                  e.jsx("h2", { children: D.title }),
                                ],
                              },
                              D.id ||
                                ((O = D.contact) == null ? void 0 : O.id) + $,
                            );
                          })
                    : e.jsx("div", {
                        className: "text-center py-10 opacity-30 text-xs",
                        style: { color: "var(--reflect-accent)" },
                        children: "正在获取存档...",
                      }),
              }),
            ],
          }),
        }),
        e.jsx(Os, {
          children:
            g &&
            e.jsx(
              aX,
              {
                story: { pages: g.pages },
                contact: g.contact,
                chat: g.chat,
                apiConfig: r,
                onClose: () => x(null),
              },
              g.id || ((F = g.contact) == null ? void 0 : F.id),
            ),
        }),
        e.jsx(Os, {
          children:
            y &&
            e.jsx(
              We.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                className:
                  "fixed inset-0 z-[120] flex items-center justify-center",
                style: { background: "rgba(0,0,0,0.55)" },
                onClick: () => v(null),
                children: e.jsxs(We.div, {
                  initial: { scale: 0.96, opacity: 0 },
                  animate: { scale: 1, opacity: 1 },
                  exit: { scale: 0.98, opacity: 0 },
                  transition: { duration: 0.12 },
                  className: "rounded-xl p-5 w-[86%] max-w-[360px]",
                  style: {
                    background: "#f3efe6",
                    color: "#1a1a1a",
                    border: "1px solid rgba(0,0,0,0.10)",
                    boxShadow: "0 18px 60px rgba(0,0,0,0.35)",
                  },
                  onClick: (D) => D.stopPropagation(),
                  children: [
                    e.jsx("div", {
                      className: "text-sm mb-2",
                      style: { letterSpacing: "0.12em" },
                      children: "确认删除",
                    }),
                    e.jsx("div", {
                      className: "text-xs opacity-80 leading-relaxed",
                      children: "删除后将从回望存档中移除，无法恢复。",
                    }),
                    e.jsx("div", {
                      className: "mt-3 text-xs opacity-70",
                      style: { color: "#3a3a3a" },
                      children: (y == null ? void 0 : y.title) || "（未命名）",
                    }),
                    e.jsxs("div", {
                      className: "mt-5 flex gap-2 justify-end",
                      children: [
                        e.jsx("button", {
                          type: "button",
                          className: "reflect-reload-btn",
                          style: {
                            padding: "8px 12px",
                            opacity: 1,
                            background: "rgba(0,0,0,0.04)",
                            borderColor: "rgba(0,0,0,0.10)",
                            color: "#1a1a1a",
                          },
                          onClick: () => v(null),
                          children: "取消",
                        }),
                        e.jsx("button", {
                          type: "button",
                          className: "reflect-reload-btn",
                          style: {
                            padding: "8px 12px",
                            background: "rgba(166,52,52,0.14)",
                            borderColor: "rgba(166,52,52,0.38)",
                            color: "#7f1d1d",
                          },
                          onClick: () => B(y),
                          children: "删除",
                        }),
                      ],
                    }),
                  ],
                }),
              },
              "reflect-delete-confirm",
            ),
        }),
      ],
    });
  },
  iX = () => {
    const {
        navigateTo: t,
        isLoadingLetters: s,
        selectedChar: n,
        letters: a,
        setSelectedLetter: r,
        deleteLetter: i,
      } = sl(),
      o = () => {
        t("home");
      },
      c = (f) => {
        (r(f), t("letter"));
      },
      d = n ? a[n.id] || [] : [],
      u = n ? n.name || n.nickname : "Unknown";
    return e.jsxs("div", {
      className:
        "w-full h-full flex flex-col bg-[#f5f5f5] relative overflow-hidden",
      children: [
        e.jsxs("div", {
          className: "absolute inset-0 pointer-events-none overflow-hidden",
          children: [
            e.jsx("div", {
              className:
                "absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-[#e8e8e8] rounded-full blur-[120px] opacity-60",
            }),
            e.jsx("div", {
              className:
                "absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] bg-[#e0e0e0] rounded-full blur-[120px] opacity-60",
            }),
            e.jsx("div", {
              className: "absolute inset-0 opacity-[0.03]",
              style: {
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              },
            }),
            e.jsx("div", {
              className:
                "absolute top-24 -right-16 font-serif text-[8rem] leading-none text-white opacity-60 select-none tracking-tighter rotate-90 origin-top-right mix-blend-overlay whitespace-nowrap",
              children: "LETTERS",
            }),
          ],
        }),
        e.jsxs("div", {
          className:
            "relative z-20 px-8 pt-14 pb-6 flex justify-between items-end",
          children: [
            e.jsx("button", {
              onClick: o,
              className:
                "group flex items-center gap-2 text-[#5c5c5c] hover:text-[#2c2c2c] transition-colors",
              children: e.jsx("div", {
                className:
                  "w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-gray-400 transition-colors bg-white/50 backdrop-blur-sm",
                children: e.jsx(Xr, { size: 18, strokeWidth: 1.5 }),
              }),
            }),
            e.jsxs("div", {
              className: "flex flex-col items-end",
              children: [
                e.jsx("span", {
                  className:
                    "text-[0.625rem] font-serif text-gray-400 tracking-[0.3em] uppercase mb-1",
                  children: "From",
                }),
                e.jsx("h1", {
                  className:
                    "text-3xl font-serif text-[#2c2c2c] tracking-widest font-light",
                  children: u,
                }),
              ],
            }),
          ],
        }),
        e.jsx("div", {
          className: "flex-1 relative z-10 px-6 flex flex-col overflow-hidden",
          children: e.jsx("div", {
            className:
              "flex-1 overflow-y-auto pb-24 scrollbar-hide relative min-h-[200px]",
            children: e.jsx(Os, {
              mode: "wait",
              children: s
                ? e.jsx(
                    We.div,
                    {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0 },
                      className:
                        "absolute inset-0 flex items-center justify-center",
                      children: e.jsxs("div", {
                        className: "flex flex-col items-center gap-6",
                        children: [
                          e.jsx(We.div, {
                            animate: { rotate: 360 },
                            transition: {
                              duration: 4,
                              repeat: 1 / 0,
                              ease: "linear",
                            },
                            className:
                              "w-16 h-16 border-[1px] border-gray-200 rounded-full flex items-center justify-center",
                            children: e.jsx("div", {
                              className: "w-2 h-2 bg-gray-400 rounded-full",
                            }),
                          }),
                          e.jsx("span", {
                            className:
                              "font-serif text-gray-400 tracking-[0.3em] text-xs uppercase",
                            children: "Loading...",
                          }),
                        ],
                      }),
                    },
                    "loading",
                  )
                : d.length > 0
                  ? e.jsx(
                      We.div,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        className:
                          "grid grid-cols-1 md:grid-cols-2 gap-8 px-2 pt-4",
                        children: d.map((f, p) =>
                          e.jsxs(
                            We.div,
                            {
                              initial: { opacity: 0, y: 40 },
                              animate: { opacity: 1, y: 0 },
                              transition: {
                                delay: p * 0.1,
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                              },
                              onClick: () => c(f),
                              className:
                                "relative aspect-[1.6/1] group cursor-pointer",
                              children: [
                                e.jsx("button", {
                                  onClick: (m) => {
                                    (m.stopPropagation(), i(f.id));
                                  },
                                  className:
                                    "absolute top-2 right-2 z-20 w-8 h-8 rounded-full bg-black/5 hover:bg-red-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 text-gray-400 hover:text-red-500",
                                  children: e.jsx(_n, { size: 14 }),
                                }),
                                e.jsx("div", {
                                  className:
                                    "absolute inset-2 bg-[#f5f5f5] rounded-sm transform rotate-1 group-hover:rotate-2 transition-transform duration-700 shadow-sm flex items-center justify-center overflow-hidden border border-gray-100",
                                  children: e.jsxs("div", {
                                    className:
                                      "w-[80%] h-[80%] space-y-3 opacity-10 flex flex-col items-center pt-8",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "w-full h-1 bg-black rounded-full",
                                      }),
                                      e.jsx("div", {
                                        className:
                                          "w-full h-1 bg-black rounded-full",
                                      }),
                                      e.jsx("div", {
                                        className:
                                          "w-full h-1 bg-black rounded-full",
                                      }),
                                      e.jsx("div", {
                                        className:
                                          "w-2/3 h-1 bg-black rounded-full",
                                      }),
                                    ],
                                  }),
                                }),
                                e.jsxs("div", {
                                  className:
                                    "absolute inset-0 bg-white/80 backdrop-blur-[3px] border border-white/60 shadow-lg rounded-sm flex flex-col items-center justify-center transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-2xl overflow-hidden",
                                  children: [
                                    e.jsxs("svg", {
                                      className:
                                        "absolute bottom-[-20px] left-[-20px] w-32 h-32 text-gray-300/50 pointer-events-none transition-transform duration-700 group-hover:scale-110",
                                      viewBox: "0 0 100 100",
                                      fill: "none",
                                      stroke: "currentColor",
                                      strokeWidth: "0.5",
                                      children: [
                                        e.jsx("path", {
                                          d: "M50 100 C 50 100, 20 60, 40 40 C 50 30, 60 40, 50 50",
                                        }),
                                        e.jsx("path", {
                                          d: "M50 100 C 50 100, 80 70, 60 30",
                                        }),
                                        e.jsx("path", {
                                          d: "M50 80 C 50 80, 30 70, 35 60",
                                        }),
                                      ],
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "absolute top-[-12px] left-1/2 -translate-x-1/2 w-10 h-10 bg-[#e8e8e8] rounded-full shadow-sm border-2 border-white flex items-center justify-center z-20 group-hover:bg-[#d4d4d4] transition-colors duration-500",
                                      children: e.jsx("div", {
                                        className:
                                          "w-1.5 h-1.5 bg-white rounded-full",
                                      }),
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "absolute top-6 right-6 w-10 h-12 bg-gray-50 shadow-sm p-1 rotate-3 group-hover:rotate-6 transition-transform duration-500 border border-gray-100",
                                      children: e.jsx("div", {
                                        className:
                                          "w-full h-full bg-[#dcdcdc] opacity-50 flex items-center justify-center",
                                        children: e.jsx("span", {
                                          className:
                                            "text-[0.375rem] text-gray-500 font-serif",
                                          children: "STAMP",
                                        }),
                                      }),
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "absolute top-10 right-12 w-12 h-12 border border-black/10 rounded-full flex items-center justify-center -rotate-12 opacity-30",
                                      children: e.jsx("span", {
                                        className:
                                          "text-[0.375rem] tracking-widest font-serif",
                                        children: "JULY",
                                      }),
                                    }),
                                    e.jsxs("div", {
                                      className: "mt-6 text-center z-10",
                                      children: [
                                        f.isReply &&
                                          e.jsx("span", {
                                            className:
                                              "inline-block font-serif text-[0.625rem] text-[#a63434] tracking-[0.2em] uppercase mb-1",
                                            children: "回信",
                                          }),
                                        e.jsx("h3", {
                                          className:
                                            "font-serif text-xl text-[#2c2c2c] tracking-widest font-light group-hover:text-black transition-colors duration-500 mb-2",
                                          children: f.title || "无题",
                                        }),
                                        e.jsx("div", {
                                          className:
                                            "w-6 h-[1px] bg-black/10 mx-auto my-2 group-hover:w-12 transition-all duration-500",
                                        }),
                                        e.jsx("p", {
                                          className:
                                            "font-serif text-[0.625rem] text-gray-400 tracking-[0.2em] uppercase",
                                          children: f.date,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            f.id,
                          ),
                        ),
                      },
                      "list",
                    )
                  : e.jsx(
                      We.div,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        className:
                          "absolute inset-0 flex items-center justify-center text-gray-300 font-serif text-sm tracking-widest",
                        children: "暂无信件",
                      },
                      "empty",
                    ),
            }),
          }),
        }),
      ],
    });
  },
  oX = () => {
    const { navigateTo: t } = sl();
    return (
      l.useEffect(() => {
        const s = setTimeout(() => {
          t("home");
        }, 3500);
        return () => clearTimeout(s);
      }, [t]),
      e.jsxs("div", {
        className:
          "w-full h-full flex flex-col items-center justify-center cursor-pointer relative overflow-hidden",
        onClick: () => t("home"),
        children: [
          e.jsx(We.div, {
            animate: {
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, 10, 0],
            },
            transition: { duration: 10, repeat: 1 / 0, ease: "easeInOut" },
            className:
              "absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-gradient-to-br from-gray-200/30 to-transparent rounded-full blur-3xl pointer-events-none",
          }),
          e.jsx(We.div, {
            animate: {
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, 20, 0],
            },
            transition: {
              duration: 8,
              repeat: 1 / 0,
              ease: "easeInOut",
              delay: 1,
            },
            className:
              "absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-gradient-to-tl from-gray-200/30 to-transparent rounded-full blur-3xl pointer-events-none",
          }),
          e.jsxs(We.div, {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 1.2, ease: "easeOut" },
            className: "flex flex-col items-center gap-8 relative z-10",
            children: [
              e.jsxs("div", {
                className: "relative",
                children: [
                  e.jsx("h1", {
                    className:
                      "text-6xl font-serif tracking-[0.5em] text-[#2c2c2c] font-light ml-4 select-none",
                    children: "见信",
                  }),
                  e.jsx(We.div, {
                    initial: { scale: 0 },
                    animate: { scale: 1 },
                    transition: { delay: 0.8, duration: 0.5, type: "spring" },
                    className:
                      "absolute -top-2 -right-4 w-3 h-3 bg-[#a63434] rounded-full opacity-80",
                  }),
                ],
              }),
              e.jsx(We.div, {
                initial: { height: 0, opacity: 0 },
                animate: { height: 64, opacity: 0.6 },
                transition: { delay: 1.2, duration: 1 },
                className:
                  "w-[1px] bg-gradient-to-b from-transparent via-[#2c2c2c] to-transparent opacity-20",
              }),
              e.jsx(We.p, {
                initial: { opacity: 0, letterSpacing: "0.1em" },
                animate: { opacity: 0.5, letterSpacing: "0.3em" },
                transition: { delay: 1.8, duration: 1.5 },
                className: "text-xs font-serif text-[#5c5c5c] select-none",
                children: "如晤",
              }),
            ],
          }),
        ],
      })
    );
  },
  lX = () => {
    const {
        navigateTo: t,
        isLoadingLetters: s,
        inboxLetters: n,
        deleteLetter: a,
        openLetter: r,
      } = sl(),
      i = () => {
        t("home");
      },
      o = (c) => {
        r(c);
      };
    return e.jsxs("div", {
      className:
        "w-full h-full flex flex-col bg-[#f5f5f5] relative overflow-hidden",
      style: { paddingTop: "env(safe-area-inset-top)" },
      children: [
        e.jsxs("div", {
          className: "absolute inset-0 pointer-events-none overflow-hidden",
          children: [
            e.jsx("div", {
              className:
                "absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-[#e8e8e8] rounded-full blur-[120px] opacity-60",
            }),
            e.jsx("div", {
              className:
                "absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] bg-[#e0e0e0] rounded-full blur-[120px] opacity-60",
            }),
            e.jsx("div", {
              className: "absolute inset-0 opacity-[0.03]",
              style: {
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              },
            }),
            e.jsx("div", {
              className:
                "absolute top-24 -right-16 font-serif text-[10rem] leading-none text-white opacity-60 select-none tracking-tighter rotate-90 origin-top-right mix-blend-overlay",
              children: "HISTORY",
            }),
          ],
        }),
        e.jsxs("div", {
          className:
            "relative z-20 px-8 pt-14 pb-6 flex justify-between items-end",
          children: [
            e.jsx("button", {
              onClick: i,
              className:
                "group flex items-center gap-2 text-[#5c5c5c] hover:text-[#2c2c2c] transition-colors",
              children: e.jsx("div", {
                className:
                  "w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-gray-400 transition-colors bg-white/50 backdrop-blur-sm",
                children: e.jsx(Xr, { size: 18, strokeWidth: 1.5 }),
              }),
            }),
            e.jsxs("div", {
              className: "flex flex-col items-end",
              children: [
                e.jsx("span", {
                  className:
                    "text-[0.625rem] font-serif text-gray-400 tracking-[0.3em] uppercase mb-1",
                  children: "收件箱",
                }),
                e.jsx("h1", {
                  className:
                    "text-3xl font-serif text-[#2c2c2c] tracking-widest font-light",
                  children: "历史信件",
                }),
              ],
            }),
          ],
        }),
        e.jsx("div", {
          className: "flex-1 relative z-10 px-6 flex flex-col overflow-hidden",
          children: e.jsx("div", {
            className:
              "flex-1 overflow-y-auto pb-24 scrollbar-hide relative min-h-[200px]",
            children: e.jsx(Os, {
              mode: "wait",
              children: s
                ? e.jsx(
                    We.div,
                    {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0 },
                      className:
                        "absolute inset-0 flex items-center justify-center",
                      children: e.jsxs("div", {
                        className: "flex flex-col items-center gap-6",
                        children: [
                          e.jsx(We.div, {
                            animate: { rotate: 360 },
                            transition: {
                              duration: 4,
                              repeat: 1 / 0,
                              ease: "linear",
                            },
                            className:
                              "w-16 h-16 border-[1px] border-gray-200 rounded-full flex items-center justify-center",
                            children: e.jsx("div", {
                              className: "w-2 h-2 bg-gray-400 rounded-full",
                            }),
                          }),
                          e.jsx("span", {
                            className:
                              "font-serif text-gray-400 tracking-[0.3em] text-xs uppercase",
                            children: "Loading...",
                          }),
                        ],
                      }),
                    },
                    "loading",
                  )
                : n.length > 0
                  ? e.jsx(
                      We.div,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        className:
                          "grid grid-cols-1 md:grid-cols-2 gap-8 px-2 pt-4",
                        children: n.map((c, d) =>
                          e.jsxs(
                            We.div,
                            {
                              initial: { opacity: 0, y: 40 },
                              animate: { opacity: 1, y: 0 },
                              transition: {
                                delay: d * 0.1,
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                              },
                              onClick: () => o(c),
                              className:
                                "relative aspect-[1.6/1] group cursor-pointer",
                              children: [
                                e.jsx("button", {
                                  onClick: (u) => {
                                    (u.stopPropagation(), a(c.id));
                                  },
                                  className:
                                    "absolute top-2 right-2 z-20 w-8 h-8 rounded-full bg-black/5 hover:bg-red-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 text-gray-400 hover:text-red-500",
                                  children: e.jsx(_n, { size: 14 }),
                                }),
                                e.jsx("div", {
                                  className:
                                    "absolute inset-2 bg-[#f5f5f5] rounded-sm transform rotate-1 group-hover:rotate-2 transition-transform duration-700 shadow-sm flex items-center justify-center overflow-hidden border border-gray-100",
                                  children: e.jsxs("div", {
                                    className:
                                      "w-[80%] h-[80%] space-y-3 opacity-10 flex flex-col items-center pt-8",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "w-full h-1 bg-black rounded-full",
                                      }),
                                      e.jsx("div", {
                                        className:
                                          "w-full h-1 bg-black rounded-full",
                                      }),
                                      e.jsx("div", {
                                        className:
                                          "w-full h-1 bg-black rounded-full",
                                      }),
                                      e.jsx("div", {
                                        className:
                                          "w-2/3 h-1 bg-black rounded-full",
                                      }),
                                    ],
                                  }),
                                }),
                                e.jsxs("div", {
                                  className:
                                    "absolute inset-0 bg-white/80 backdrop-blur-[3px] border border-white/60 shadow-lg rounded-sm flex flex-col items-center justify-center transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-2xl overflow-hidden",
                                  children: [
                                    e.jsxs("svg", {
                                      className:
                                        "absolute bottom-[-20px] left-[-20px] w-32 h-32 text-gray-300/50 pointer-events-none transition-transform duration-700 group-hover:scale-110",
                                      viewBox: "0 0 100 100",
                                      fill: "none",
                                      stroke: "currentColor",
                                      strokeWidth: "0.5",
                                      children: [
                                        e.jsx("path", {
                                          d: "M50 100 C 50 100, 20 60, 40 40 C 50 30, 60 40, 50 50",
                                        }),
                                        e.jsx("path", {
                                          d: "M50 100 C 50 100, 80 70, 60 30",
                                        }),
                                        e.jsx("path", {
                                          d: "M50 80 C 50 80, 30 70, 35 60",
                                        }),
                                      ],
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "absolute top-[-12px] left-1/2 -translate-x-1/2 w-10 h-10 bg-[#e8e8e8] rounded-full shadow-sm border-2 border-white flex items-center justify-center z-20 group-hover:bg-[#d4d4d4] transition-colors duration-500",
                                      children: e.jsx("div", {
                                        className:
                                          "w-1.5 h-1.5 bg-white rounded-full",
                                      }),
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "absolute top-6 right-6 w-10 h-12 bg-gray-50 shadow-sm p-1 rotate-3 group-hover:rotate-6 transition-transform duration-500 border border-gray-100",
                                      children: e.jsx("div", {
                                        className:
                                          "w-full h-full bg-[#dcdcdc] opacity-50 flex items-center justify-center",
                                        children: e.jsx("span", {
                                          className:
                                            "text-[0.375rem] text-gray-500 font-serif",
                                          children: "STAMP",
                                        }),
                                      }),
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "absolute top-10 right-12 w-12 h-12 border border-black/10 rounded-full flex items-center justify-center -rotate-12 opacity-30",
                                      children: e.jsx("span", {
                                        className:
                                          "text-[0.375rem] tracking-widest font-serif",
                                        children: "JULY",
                                      }),
                                    }),
                                    e.jsxs("div", {
                                      className: "mt-6 text-center z-10",
                                      children: [
                                        c.isReply &&
                                          e.jsx("span", {
                                            className:
                                              "inline-block font-serif text-[0.625rem] text-[#a63434] tracking-[0.2em] uppercase mb-1",
                                            children: "回信",
                                          }),
                                        e.jsx("span", {
                                          className:
                                            "block font-serif text-[0.625rem] text-gray-400 tracking-[0.3em] mb-2 uppercase",
                                          children: "A Letter From",
                                        }),
                                        e.jsx("h3", {
                                          className:
                                            "font-serif text-2xl text-[#2c2c2c] tracking-widest font-light group-hover:text-black transition-colors duration-500",
                                          children: c.signature,
                                        }),
                                        e.jsx("div", {
                                          className:
                                            "w-6 h-[1px] bg-black/10 mx-auto my-4 group-hover:w-12 transition-all duration-500",
                                        }),
                                        e.jsx("p", {
                                          className:
                                            "font-serif text-[0.625rem] text-gray-300 tracking-[0.2em] uppercase",
                                          children:
                                            new Date().toLocaleDateString(),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            c.id,
                          ),
                        ),
                      },
                      "inbox-list",
                    )
                  : e.jsx(
                      We.div,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        className:
                          "absolute inset-0 flex items-center justify-center text-gray-300 font-serif text-sm tracking-widest",
                        children: "暂无信件",
                      },
                      "empty-inbox",
                    ),
            }),
          }),
        }),
      ],
    });
  },
  Kx = [
    { label: "立即寄出", value: 0 },
    { label: "1 分钟后 (测试)", value: 60 * 1e3 },
    { label: "1 个月后", value: 30 * 24 * 60 * 60 * 1e3 },
    { label: "1 年后", value: 365 * 24 * 60 * 60 * 1e3 },
    { label: "自定义日期", value: -1 },
  ],
  cX = ({ isOpen: t, onClose: s, defaultRecipient: n }) => {
    const { contacts: a, sendTimeCapsule: r, user: i } = sl(),
      [o, c] = l.useState("writing"),
      [d, u] = l.useState(""),
      [f, p] = l.useState((n == null ? void 0 : n.id) || "self"),
      [m, h] = l.useState(Kx[0]),
      [g, x] = l.useState(""),
      y = () => {
        (s(),
          setTimeout(() => {
            (c("writing"),
              u(""),
              p((n == null ? void 0 : n.id) || "self"),
              h(Kx[0]));
          }, 500));
      },
      v = () => {
        c("sending");
        let b = Date.now();
        (m.value > 0
          ? (b += m.value)
          : m.value === -1 && g
            ? (b = new Date(g).getTime())
            : (b += 2 * 1e3),
          setTimeout(() => {
            (r(d, f, b), c("success"), setTimeout(y, 2e3));
          }, 2e3));
      };
    return t
      ? e.jsx(We.div, {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          className:
            "fixed inset-0 z-50 flex items-center justify-center bg-[#e0e0e0]/80 backdrop-blur-xl p-4 md:p-8",
          onClick: (b) => b.stopPropagation(),
          children: e.jsxs(We.div, {
            initial: { scale: 0.95, y: 20, opacity: 0 },
            animate: { scale: 1, y: 0, opacity: 1 },
            exit: { scale: 0.95, y: 20, opacity: 0 },
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
            className:
              "relative w-full max-w-3xl h-[85vh] bg-white shadow-2xl overflow-hidden flex flex-col rounded-sm",
            onClick: (b) => b.stopPropagation(),
            children: [
              e.jsx("button", {
                onClick: y,
                className:
                  "absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 z-10",
                style: { top: "max(1rem, 16px)", right: "max(1rem, 16px)" },
                children: e.jsx(Ts, { size: 20 }),
              }),
              e.jsxs(Os, {
                mode: "wait",
                children: [
                  o === "writing" &&
                    e.jsxs(
                      We.div,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        className: "flex flex-col h-full",
                        children: [
                          e.jsx("div", {
                            className:
                              "px-8 md:px-12 pt-12 pb-6 flex flex-col gap-6 border-b border-[#e6e6e6]/50",
                            children: e.jsxs("div", {
                              className: "flex justify-between items-start",
                              children: [
                                e.jsxs("div", {
                                  className: "flex flex-col gap-2",
                                  children: [
                                    e.jsx("span", {
                                      className:
                                        "font-serif text-[10px] text-gray-400 tracking-[0.3em] uppercase",
                                      children: "收件人",
                                    }),
                                    e.jsxs("div", {
                                      className: "relative group",
                                      children: [
                                        e.jsxs("select", {
                                          value: f,
                                          onChange: (b) => p(b.target.value),
                                          className:
                                            "appearance-none bg-transparent font-serif text-2xl text-[#2c2c2c] tracking-wide font-light border-none focus:ring-0 p-0 pr-8 cursor-pointer hover:text-black transition-colors",
                                          children: [
                                            e.jsx("option", {
                                              value: "self",
                                              children: "未来的自己",
                                            }),
                                            a.map((b) =>
                                              e.jsx(
                                                "option",
                                                {
                                                  value: b.id,
                                                  children:
                                                    b.name || b.nickname,
                                                },
                                                b.id,
                                              ),
                                            ),
                                          ],
                                        }),
                                        e.jsx(wr, {
                                          size: 16,
                                          className:
                                            "absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className: "flex flex-col items-end gap-2",
                                  children: [
                                    e.jsx("span", {
                                      className:
                                        "font-serif text-[10px] text-gray-400 tracking-[0.3em] uppercase",
                                      children: "送达时间",
                                    }),
                                    e.jsxs("div", {
                                      className: "flex items-center gap-2",
                                      children: [
                                        e.jsx("select", {
                                          value: m.label,
                                          onChange: (b) => {
                                            const N = Kx.find(
                                              (w) => w.label === b.target.value,
                                            );
                                            h(N);
                                          },
                                          className:
                                            "appearance-none bg-transparent font-serif text-sm text-[#2c2c2c] tracking-widest text-right border-none focus:ring-0 p-0 pr-6 cursor-pointer hover:text-[#a63434] transition-colors",
                                          children: Kx.map((b) =>
                                            e.jsx(
                                              "option",
                                              {
                                                value: b.label,
                                                children: b.label,
                                              },
                                              b.label,
                                            ),
                                          ),
                                        }),
                                        e.jsx(Dr, {
                                          size: 14,
                                          className: "text-gray-400",
                                        }),
                                      ],
                                    }),
                                    m.value === -1 &&
                                      e.jsx("input", {
                                        type: "date",
                                        value: g,
                                        onChange: (b) => x(b.target.value),
                                        className:
                                          "font-serif text-xs text-gray-500 border-b border-gray-200 focus:border-[#a63434] outline-none bg-transparent",
                                      }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          e.jsx("div", {
                            className:
                              "flex-1 px-8 md:px-12 py-8 relative overflow-hidden",
                            children: e.jsx("textarea", {
                              value: d,
                              onChange: (b) => u(b.target.value),
                              className:
                                "w-full h-full bg-transparent border-none resize-none focus:ring-0 p-0 font-serif text-lg text-[#2c2c2c] leading-[2.5rem] placeholder:text-gray-300/50",
                              placeholder: "写给未来的信...",
                              autoFocus: !0,
                            }),
                          }),
                          e.jsxs("div", {
                            className:
                              "px-8 md:px-12 pb-12 pt-6 flex justify-between items-center bg-gradient-to-t from-white to-transparent",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "flex items-center gap-4 text-[10px] font-serif text-gray-400 tracking-widest",
                                children: [
                                  e.jsx("span", {
                                    children: new Date().toLocaleDateString(),
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "w-1 h-1 bg-gray-300 rounded-full",
                                  }),
                                  e.jsxs("span", {
                                    children: [d.length, " 字"],
                                  }),
                                ],
                              }),
                              e.jsxs("button", {
                                onClick: v,
                                disabled: !d.trim() || (m.value === -1 && !g),
                                className:
                                  "group flex items-center gap-3 px-8 py-3 bg-[#2c2c2c] text-white rounded-full hover:bg-[#a63434] transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl",
                                children: [
                                  e.jsx("span", {
                                    className:
                                      "font-serif text-xs tracking-[0.2em] uppercase",
                                    children:
                                      m.value === 0 ? "立即发送" : "时光胶囊",
                                  }),
                                  e.jsx(ri, {
                                    size: 12,
                                    className:
                                      "group-hover:translate-x-1 transition-transform",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      "writing",
                    ),
                  o === "sending" &&
                    e.jsxs(
                      We.div,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        className:
                          "absolute inset-0 flex flex-col items-center justify-center gap-8 bg-white/90 backdrop-blur-sm z-10",
                        children: [
                          e.jsxs("div", {
                            className: "relative",
                            children: [
                              e.jsx("div", {
                                className:
                                  "w-32 h-32 rounded-full border border-gray-100 flex items-center justify-center bg-gray-50",
                                children: e.jsx(Dr, {
                                  size: 48,
                                  className: "text-[#2c2c2c] opacity-20",
                                }),
                              }),
                              e.jsx(We.div, {
                                className:
                                  "absolute inset-0 border-t-2 border-[#a63434] rounded-full",
                                animate: { rotate: 360 },
                                transition: {
                                  duration: 2,
                                  repeat: 1 / 0,
                                  ease: "easeInOut",
                                },
                              }),
                              e.jsx(We.div, {
                                className:
                                  "absolute inset-0 flex items-center justify-center",
                                initial: { opacity: 0 },
                                animate: { opacity: 1 },
                                transition: { delay: 0.5 },
                                children: e.jsx("div", {
                                  className:
                                    "w-full h-full absolute animate-ping opacity-10 bg-[#a63434] rounded-full",
                                }),
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "text-center space-y-2",
                            children: [
                              e.jsx("span", {
                                className:
                                  "font-serif text-[#2c2c2c] tracking-[0.3em] text-sm uppercase block",
                                children: "正在封存时光胶囊...",
                              }),
                              e.jsx("span", {
                                className:
                                  "font-serif text-gray-400 text-xs tracking-widest block",
                                children: "正在封存记忆",
                              }),
                            ],
                          }),
                        ],
                      },
                      "sending",
                    ),
                  o === "success" &&
                    e.jsxs(
                      We.div,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        className:
                          "absolute inset-0 flex flex-col items-center justify-center gap-8 bg-white z-10",
                        children: [
                          e.jsx(We.div, {
                            initial: { scale: 0.8, opacity: 0 },
                            animate: { scale: 1, opacity: 1 },
                            transition: { duration: 0.5, type: "spring" },
                            className:
                              "w-24 h-24 rounded-full bg-[#a63434] flex items-center justify-center shadow-xl text-white",
                            children: e.jsx(Iu, { size: 32, strokeWidth: 1.5 }),
                          }),
                          e.jsxs("div", {
                            className: "text-center space-y-3",
                            children: [
                              e.jsx("h3", {
                                className:
                                  "font-serif text-2xl text-[#2c2c2c] tracking-widest",
                                children: "已封存",
                              }),
                              e.jsxs("p", {
                                className:
                                  "font-serif text-xs text-gray-400 tracking-[0.2em] uppercase",
                                children: [
                                  "将在 ",
                                  m.value === -1 ? g : m.label,
                                  " 送达",
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      "success",
                    ),
                ],
              }),
            ],
          }),
        })
      : null;
  },
  dX = () => {
    const {
        navigateTo: t,
        contacts: s,
        inboxLetters: n,
        pendingLetters: a,
        selectChar: r,
        fetchNewLetters: i,
        isLoadingLetters: o,
        onClose: c,
      } = sl(),
      [d, u] = l.useState(!1),
      [f, p] = l.useState(!1),
      m = n.length > 0 ? n[0] : null,
      h = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1, delayChildren: 0.1 },
        },
      },
      g = {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
      };
    return e.jsxs("div", {
      className:
        "w-full h-full flex flex-col bg-[#fcfcfc] relative overflow-hidden font-serif text-[#2c2c2c]",
      children: [
        e.jsx("div", {
          className: "absolute inset-0 opacity-[0.03] pointer-events-none",