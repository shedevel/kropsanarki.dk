(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/flexsearch/dist/flexsearch.bundle.js
  var require_flexsearch_bundle = __commonJS({
    "node_modules/flexsearch/dist/flexsearch.bundle.js"(exports, module) {
      (function _f(self) {
        "use strict";
        try {
          if (module)
            self = module;
        } catch (e) {
        }
        self._factory = _f;
        var t;
        function u(a2) {
          return "undefined" !== typeof a2 ? a2 : true;
        }
        function aa(a2) {
          const b2 = Array(a2);
          for (let c2 = 0; c2 < a2; c2++)
            b2[c2] = v();
          return b2;
        }
        function v() {
          return /* @__PURE__ */ Object.create(null);
        }
        function ba(a2, b2) {
          return b2.length - a2.length;
        }
        function x(a2) {
          return "string" === typeof a2;
        }
        function C(a2) {
          return "object" === typeof a2;
        }
        function D(a2) {
          return "function" === typeof a2;
        }
        ;
        function ca(a2, b2) {
          var c2 = da;
          if (a2 && (b2 && (a2 = E(a2, b2)), this.H && (a2 = E(a2, this.H)), this.J && 1 < a2.length && (a2 = E(a2, this.J)), c2 || "" === c2)) {
            a2 = a2.split(c2);
            if (this.filter) {
              b2 = this.filter;
              c2 = a2.length;
              const d2 = [];
              for (let e = 0, f = 0; e < c2; e++) {
                const g = a2[e];
                g && !b2[g] && (d2[f++] = g);
              }
              a2 = d2;
            }
            return a2;
          }
          return a2;
        }
        const da = /[\p{Z}\p{S}\p{P}\p{C}]+/u, ea = /[\u0300-\u036f]/g;
        function fa(a2, b2) {
          const c2 = Object.keys(a2), d2 = c2.length, e = [];
          let f = "", g = 0;
          for (let h = 0, k, m; h < d2; h++)
            k = c2[h], (m = a2[k]) ? (e[g++] = F(b2 ? "(?!\\b)" + k + "(\\b|_)" : k), e[g++] = m) : f += (f ? "|" : "") + k;
          f && (e[g++] = F(b2 ? "(?!\\b)(" + f + ")(\\b|_)" : "(" + f + ")"), e[g] = "");
          return e;
        }
        function E(a2, b2) {
          for (let c2 = 0, d2 = b2.length; c2 < d2 && (a2 = a2.replace(b2[c2], b2[c2 + 1]), a2); c2 += 2)
            ;
          return a2;
        }
        function F(a2) {
          return new RegExp(a2, "g");
        }
        function ha(a2) {
          let b2 = "", c2 = "";
          for (let d2 = 0, e = a2.length, f; d2 < e; d2++)
            (f = a2[d2]) !== c2 && (b2 += c2 = f);
          return b2;
        }
        ;
        var ja = { encode: ia, F: false, G: "" };
        function ia(a2) {
          return ca.call(this, ("" + a2).toLowerCase(), false);
        }
        ;
        const ka = {}, G = {};
        function la(a2) {
          I(a2, "add");
          I(a2, "append");
          I(a2, "search");
          I(a2, "update");
          I(a2, "remove");
        }
        function I(a2, b2) {
          a2[b2 + "Async"] = function() {
            const c2 = this, d2 = arguments;
            var e = d2[d2.length - 1];
            let f;
            D(e) && (f = e, delete d2[d2.length - 1]);
            e = new Promise(function(g) {
              setTimeout(function() {
                c2.async = true;
                const h = c2[b2].apply(c2, d2);
                c2.async = false;
                g(h);
              });
            });
            return f ? (e.then(f), this) : e;
          };
        }
        ;
        function ma(a2, b2, c2, d2) {
          const e = a2.length;
          let f = [], g, h, k = 0;
          d2 && (d2 = []);
          for (let m = e - 1; 0 <= m; m--) {
            const n = a2[m], w = n.length, q = v();
            let r = !g;
            for (let l = 0; l < w; l++) {
              const p = n[l], z = p.length;
              if (z)
                for (let B = 0, A, y; B < z; B++)
                  if (y = p[B], g) {
                    if (g[y]) {
                      if (!m) {
                        if (c2)
                          c2--;
                        else if (f[k++] = y, k === b2)
                          return f;
                      }
                      if (m || d2)
                        q[y] = 1;
                      r = true;
                    }
                    if (d2 && (A = (h[y] || 0) + 1, h[y] = A, A < e)) {
                      const H = d2[A - 2] || (d2[A - 2] = []);
                      H[H.length] = y;
                    }
                  } else
                    q[y] = 1;
            }
            if (d2)
              g || (h = q);
            else if (!r)
              return [];
            g = q;
          }
          if (d2)
            for (let m = d2.length - 1, n, w; 0 <= m; m--) {
              n = d2[m];
              w = n.length;
              for (let q = 0, r; q < w; q++)
                if (r = n[q], !g[r]) {
                  if (c2)
                    c2--;
                  else if (f[k++] = r, k === b2)
                    return f;
                  g[r] = 1;
                }
            }
          return f;
        }
        function na(a2, b2) {
          const c2 = v(), d2 = v(), e = [];
          for (let f = 0; f < a2.length; f++)
            c2[a2[f]] = 1;
          for (let f = 0, g; f < b2.length; f++) {
            g = b2[f];
            for (let h = 0, k; h < g.length; h++)
              k = g[h], c2[k] && !d2[k] && (d2[k] = 1, e[e.length] = k);
          }
          return e;
        }
        ;
        function J(a2) {
          this.l = true !== a2 && a2;
          this.cache = v();
          this.h = [];
        }
        function oa(a2, b2, c2) {
          C(a2) && (a2 = a2.query);
          let d2 = this.cache.get(a2);
          d2 || (d2 = this.search(a2, b2, c2), this.cache.set(a2, d2));
          return d2;
        }
        J.prototype.set = function(a2, b2) {
          if (!this.cache[a2]) {
            var c2 = this.h.length;
            c2 === this.l ? delete this.cache[this.h[c2 - 1]] : c2++;
            for (--c2; 0 < c2; c2--)
              this.h[c2] = this.h[c2 - 1];
            this.h[0] = a2;
          }
          this.cache[a2] = b2;
        };
        J.prototype.get = function(a2) {
          const b2 = this.cache[a2];
          if (this.l && b2 && (a2 = this.h.indexOf(a2))) {
            const c2 = this.h[a2 - 1];
            this.h[a2 - 1] = this.h[a2];
            this.h[a2] = c2;
          }
          return b2;
        };
        const qa = { memory: { charset: "latin:extra", D: 3, B: 4, m: false }, performance: { D: 3, B: 3, s: false, context: { depth: 2, D: 1 } }, match: { charset: "latin:extra", G: "reverse" }, score: { charset: "latin:advanced", D: 20, B: 3, context: { depth: 3, D: 9 } }, "default": {} };
        function ra(a2, b2, c2, d2, e, f, g) {
          setTimeout(function() {
            const h = a2(c2 ? c2 + "." + d2 : d2, JSON.stringify(g));
            h && h.then ? h.then(function() {
              b2.export(a2, b2, c2, e, f + 1);
            }) : b2.export(a2, b2, c2, e, f + 1);
          });
        }
        ;
        function K(a2, b2) {
          if (!(this instanceof K))
            return new K(a2);
          var c2;
          if (a2) {
            x(a2) ? a2 = qa[a2] : (c2 = a2.preset) && (a2 = Object.assign({}, c2[c2], a2));
            c2 = a2.charset;
            var d2 = a2.lang;
            x(c2) && (-1 === c2.indexOf(":") && (c2 += ":default"), c2 = G[c2]);
            x(d2) && (d2 = ka[d2]);
          } else
            a2 = {};
          let e, f, g = a2.context || {};
          this.encode = a2.encode || c2 && c2.encode || ia;
          this.register = b2 || v();
          this.D = e = a2.resolution || 9;
          this.G = b2 = c2 && c2.G || a2.tokenize || "strict";
          this.depth = "strict" === b2 && g.depth;
          this.l = u(g.bidirectional);
          this.s = f = u(a2.optimize);
          this.m = u(a2.fastupdate);
          this.B = a2.minlength || 1;
          this.C = a2.boost;
          this.map = f ? aa(e) : v();
          this.A = e = g.resolution || 1;
          this.h = f ? aa(e) : v();
          this.F = c2 && c2.F || a2.rtl;
          this.H = (b2 = a2.matcher || d2 && d2.H) && fa(b2, false);
          this.J = (b2 = a2.stemmer || d2 && d2.J) && fa(b2, true);
          if (c2 = b2 = a2.filter || d2 && d2.filter) {
            c2 = b2;
            d2 = v();
            for (let h = 0, k = c2.length; h < k; h++)
              d2[c2[h]] = 1;
            c2 = d2;
          }
          this.filter = c2;
          this.cache = (b2 = a2.cache) && new J(b2);
        }
        t = K.prototype;
        t.append = function(a2, b2) {
          return this.add(a2, b2, true);
        };
        t.add = function(a2, b2, c2, d2) {
          if (b2 && (a2 || 0 === a2)) {
            if (!d2 && !c2 && this.register[a2])
              return this.update(a2, b2);
            b2 = this.encode(b2);
            if (d2 = b2.length) {
              const m = v(), n = v(), w = this.depth, q = this.D;
              for (let r = 0; r < d2; r++) {
                let l = b2[this.F ? d2 - 1 - r : r];
                var e = l.length;
                if (l && e >= this.B && (w || !n[l])) {
                  var f = L(q, d2, r), g = "";
                  switch (this.G) {
                    case "full":
                      if (2 < e) {
                        for (f = 0; f < e; f++)
                          for (var h = e; h > f; h--)
                            if (h - f >= this.B) {
                              var k = L(q, d2, r, e, f);
                              g = l.substring(f, h);
                              M(this, n, g, k, a2, c2);
                            }
                        break;
                      }
                    case "reverse":
                      if (1 < e) {
                        for (h = e - 1; 0 < h; h--)
                          g = l[h] + g, g.length >= this.B && M(
                            this,
                            n,
                            g,
                            L(q, d2, r, e, h),
                            a2,
                            c2
                          );
                        g = "";
                      }
                    case "forward":
                      if (1 < e) {
                        for (h = 0; h < e; h++)
                          g += l[h], g.length >= this.B && M(this, n, g, f, a2, c2);
                        break;
                      }
                    default:
                      if (this.C && (f = Math.min(f / this.C(b2, l, r) | 0, q - 1)), M(this, n, l, f, a2, c2), w && 1 < d2 && r < d2 - 1) {
                        for (e = v(), g = this.A, f = l, h = Math.min(w + 1, d2 - r), e[f] = 1, k = 1; k < h; k++)
                          if ((l = b2[this.F ? d2 - 1 - r - k : r + k]) && l.length >= this.B && !e[l]) {
                            e[l] = 1;
                            const p = this.l && l > f;
                            M(this, m, p ? f : l, L(g + (d2 / 2 > g ? 0 : 1), d2, r, h - 1, k - 1), a2, c2, p ? l : f);
                          }
                      }
                  }
                }
              }
              this.m || (this.register[a2] = 1);
            }
          }
          return this;
        };
        function L(a2, b2, c2, d2, e) {
          return c2 && 1 < a2 ? b2 + (d2 || 0) <= a2 ? c2 + (e || 0) : (a2 - 1) / (b2 + (d2 || 0)) * (c2 + (e || 0)) + 1 | 0 : 0;
        }
        function M(a2, b2, c2, d2, e, f, g) {
          let h = g ? a2.h : a2.map;
          if (!b2[c2] || g && !b2[c2][g])
            a2.s && (h = h[d2]), g ? (b2 = b2[c2] || (b2[c2] = v()), b2[g] = 1, h = h[g] || (h[g] = v())) : b2[c2] = 1, h = h[c2] || (h[c2] = []), a2.s || (h = h[d2] || (h[d2] = [])), f && h.includes(e) || (h[h.length] = e, a2.m && (a2 = a2.register[e] || (a2.register[e] = []), a2[a2.length] = h));
        }
        t.search = function(a2, b2, c2) {
          c2 || (!b2 && C(a2) ? (c2 = a2, a2 = c2.query) : C(b2) && (c2 = b2));
          let d2 = [], e;
          let f, g = 0;
          if (c2) {
            a2 = c2.query || a2;
            b2 = c2.limit;
            g = c2.offset || 0;
            var h = c2.context;
            f = c2.suggest;
          }
          if (a2 && (a2 = this.encode("" + a2), e = a2.length, 1 < e)) {
            c2 = v();
            var k = [];
            for (let n = 0, w = 0, q; n < e; n++)
              if ((q = a2[n]) && q.length >= this.B && !c2[q])
                if (this.s || f || this.map[q])
                  k[w++] = q, c2[q] = 1;
                else
                  return d2;
            a2 = k;
            e = a2.length;
          }
          if (!e)
            return d2;
          b2 || (b2 = 100);
          h = this.depth && 1 < e && false !== h;
          c2 = 0;
          let m;
          h ? (m = a2[0], c2 = 1) : 1 < e && a2.sort(ba);
          for (let n, w; c2 < e; c2++) {
            w = a2[c2];
            h ? (n = sa(
              this,
              d2,
              f,
              b2,
              g,
              2 === e,
              w,
              m
            ), f && false === n && d2.length || (m = w)) : n = sa(this, d2, f, b2, g, 1 === e, w);
            if (n)
              return n;
            if (f && c2 === e - 1) {
              k = d2.length;
              if (!k) {
                if (h) {
                  h = 0;
                  c2 = -1;
                  continue;
                }
                return d2;
              }
              if (1 === k)
                return ta(d2[0], b2, g);
            }
          }
          return ma(d2, b2, g, f);
        };
        function sa(a2, b2, c2, d2, e, f, g, h) {
          let k = [], m = h ? a2.h : a2.map;
          a2.s || (m = ua(m, g, h, a2.l));
          if (m) {
            let n = 0;
            const w = Math.min(m.length, h ? a2.A : a2.D);
            for (let q = 0, r = 0, l, p; q < w; q++)
              if (l = m[q]) {
                if (a2.s && (l = ua(l, g, h, a2.l)), e && l && f && (p = l.length, p <= e ? (e -= p, l = null) : (l = l.slice(e), e = 0)), l && (k[n++] = l, f && (r += l.length, r >= d2)))
                  break;
              }
            if (n) {
              if (f)
                return ta(k, d2, 0);
              b2[b2.length] = k;
              return;
            }
          }
          return !c2 && k;
        }
        function ta(a2, b2, c2) {
          a2 = 1 === a2.length ? a2[0] : [].concat.apply([], a2);
          return c2 || a2.length > b2 ? a2.slice(c2, c2 + b2) : a2;
        }
        function ua(a2, b2, c2, d2) {
          c2 ? (d2 = d2 && b2 > c2, a2 = (a2 = a2[d2 ? b2 : c2]) && a2[d2 ? c2 : b2]) : a2 = a2[b2];
          return a2;
        }
        t.contain = function(a2) {
          return !!this.register[a2];
        };
        t.update = function(a2, b2) {
          return this.remove(a2).add(a2, b2);
        };
        t.remove = function(a2, b2) {
          const c2 = this.register[a2];
          if (c2) {
            if (this.m)
              for (let d2 = 0, e; d2 < c2.length; d2++)
                e = c2[d2], e.splice(e.indexOf(a2), 1);
            else
              N(this.map, a2, this.D, this.s), this.depth && N(this.h, a2, this.A, this.s);
            b2 || delete this.register[a2];
            if (this.cache) {
              b2 = this.cache;
              for (let d2 = 0, e, f; d2 < b2.h.length; d2++)
                f = b2.h[d2], e = b2.cache[f], e.includes(a2) && (b2.h.splice(d2--, 1), delete b2.cache[f]);
            }
          }
          return this;
        };
        function N(a2, b2, c2, d2, e) {
          let f = 0;
          if (a2.constructor === Array)
            if (e)
              b2 = a2.indexOf(b2), -1 !== b2 ? 1 < a2.length && (a2.splice(b2, 1), f++) : f++;
            else {
              e = Math.min(a2.length, c2);
              for (let g = 0, h; g < e; g++)
                if (h = a2[g])
                  f = N(h, b2, c2, d2, e), d2 || f || delete a2[g];
            }
          else
            for (let g in a2)
              (f = N(a2[g], b2, c2, d2, e)) || delete a2[g];
          return f;
        }
        t.searchCache = oa;
        t.export = function(a2, b2, c2, d2, e) {
          let f, g;
          switch (e || (e = 0)) {
            case 0:
              f = "reg";
              if (this.m) {
                g = v();
                for (let h in this.register)
                  g[h] = 1;
              } else
                g = this.register;
              break;
            case 1:
              f = "cfg";
              g = { doc: 0, opt: this.s ? 1 : 0 };
              break;
            case 2:
              f = "map";
              g = this.map;
              break;
            case 3:
              f = "ctx";
              g = this.h;
              break;
            default:
              return;
          }
          ra(a2, b2 || this, c2, f, d2, e, g);
          return true;
        };
        t.import = function(a2, b2) {
          if (b2)
            switch (x(b2) && (b2 = JSON.parse(b2)), a2) {
              case "cfg":
                this.s = !!b2.opt;
                break;
              case "reg":
                this.m = false;
                this.register = b2;
                break;
              case "map":
                this.map = b2;
                break;
              case "ctx":
                this.h = b2;
            }
        };
        la(K.prototype);
        function va(a2) {
          a2 = a2.data;
          var b2 = self._index;
          const c2 = a2.args;
          var d2 = a2.task;
          switch (d2) {
            case "init":
              d2 = a2.options || {};
              a2 = a2.factory;
              b2 = d2.encode;
              d2.cache = false;
              b2 && 0 === b2.indexOf("function") && (d2.encode = Function("return " + b2)());
              a2 ? (Function("return " + a2)()(self), self._index = new self.FlexSearch.Index(d2), delete self.FlexSearch) : self._index = new K(d2);
              break;
            default:
              a2 = a2.id, b2 = b2[d2].apply(b2, c2), postMessage("search" === d2 ? { id: a2, msg: b2 } : { id: a2 });
          }
        }
        ;
        let wa = 0;
        function O(a2) {
          if (!(this instanceof O))
            return new O(a2);
          var b2;
          a2 ? D(b2 = a2.encode) && (a2.encode = b2.toString()) : a2 = {};
          (b2 = (self || window)._factory) && (b2 = b2.toString());
          const c2 = "undefined" === typeof window && self.exports, d2 = this;
          this.o = xa(b2, c2, a2.worker);
          this.h = v();
          if (this.o) {
            if (c2)
              this.o.on("message", function(e) {
                d2.h[e.id](e.msg);
                delete d2.h[e.id];
              });
            else
              this.o.onmessage = function(e) {
                e = e.data;
                d2.h[e.id](e.msg);
                delete d2.h[e.id];
              };
            this.o.postMessage({ task: "init", factory: b2, options: a2 });
          }
        }
        P("add");
        P("append");
        P("search");
        P("update");
        P("remove");
        function P(a2) {
          O.prototype[a2] = O.prototype[a2 + "Async"] = function() {
            const b2 = this, c2 = [].slice.call(arguments);
            var d2 = c2[c2.length - 1];
            let e;
            D(d2) && (e = d2, c2.splice(c2.length - 1, 1));
            d2 = new Promise(function(f) {
              setTimeout(function() {
                b2.h[++wa] = f;
                b2.o.postMessage({ task: a2, id: wa, args: c2 });
              });
            });
            return e ? (d2.then(e), this) : d2;
          };
        }
        function xa(a, b, c) {
          let d;
          try {
            d = b ? eval('new (require("worker_threads")["Worker"])("../dist/node/node.js")') : a ? new Worker(URL.createObjectURL(new Blob(["onmessage=" + va.toString()], { type: "text/javascript" }))) : new Worker(x(c) ? c : "worker/worker.js", { type: "module" });
          } catch (e) {
          }
          return d;
        }
        ;
        function Q(a2) {
          if (!(this instanceof Q))
            return new Q(a2);
          var b2 = a2.document || a2.doc || a2, c2;
          this.K = [];
          this.h = [];
          this.A = [];
          this.register = v();
          this.key = (c2 = b2.key || b2.id) && S(c2, this.A) || "id";
          this.m = u(a2.fastupdate);
          this.C = (c2 = b2.store) && true !== c2 && [];
          this.store = c2 && v();
          this.I = (c2 = b2.tag) && S(c2, this.A);
          this.l = c2 && v();
          this.cache = (c2 = a2.cache) && new J(c2);
          a2.cache = false;
          this.o = a2.worker;
          this.async = false;
          c2 = v();
          let d2 = b2.index || b2.field || b2;
          x(d2) && (d2 = [d2]);
          for (let e = 0, f, g; e < d2.length; e++)
            f = d2[e], x(f) || (g = f, f = f.field), g = C(g) ? Object.assign({}, a2, g) : a2, this.o && (c2[f] = new O(g), c2[f].o || (this.o = false)), this.o || (c2[f] = new K(g, this.register)), this.K[e] = S(f, this.A), this.h[e] = f;
          if (this.C)
            for (a2 = b2.store, x(a2) && (a2 = [a2]), b2 = 0; b2 < a2.length; b2++)
              this.C[b2] = S(a2[b2], this.A);
          this.index = c2;
        }
        function S(a2, b2) {
          const c2 = a2.split(":");
          let d2 = 0;
          for (let e = 0; e < c2.length; e++)
            a2 = c2[e], 0 <= a2.indexOf("[]") && (a2 = a2.substring(0, a2.length - 2)) && (b2[d2] = true), a2 && (c2[d2++] = a2);
          d2 < c2.length && (c2.length = d2);
          return 1 < d2 ? c2 : c2[0];
        }
        function T(a2, b2) {
          if (x(b2))
            a2 = a2[b2];
          else
            for (let c2 = 0; a2 && c2 < b2.length; c2++)
              a2 = a2[b2[c2]];
          return a2;
        }
        function U(a2, b2, c2, d2, e) {
          a2 = a2[e];
          if (d2 === c2.length - 1)
            b2[e] = a2;
          else if (a2)
            if (a2.constructor === Array)
              for (b2 = b2[e] = Array(a2.length), e = 0; e < a2.length; e++)
                U(a2, b2, c2, d2, e);
            else
              b2 = b2[e] || (b2[e] = v()), e = c2[++d2], U(a2, b2, c2, d2, e);
        }
        function V(a2, b2, c2, d2, e, f, g, h) {
          if (a2 = a2[g])
            if (d2 === b2.length - 1) {
              if (a2.constructor === Array) {
                if (c2[d2]) {
                  for (b2 = 0; b2 < a2.length; b2++)
                    e.add(f, a2[b2], true, true);
                  return;
                }
                a2 = a2.join(" ");
              }
              e.add(f, a2, h, true);
            } else if (a2.constructor === Array)
              for (g = 0; g < a2.length; g++)
                V(a2, b2, c2, d2, e, f, g, h);
            else
              g = b2[++d2], V(a2, b2, c2, d2, e, f, g, h);
        }
        t = Q.prototype;
        t.add = function(a2, b2, c2) {
          C(a2) && (b2 = a2, a2 = T(b2, this.key));
          if (b2 && (a2 || 0 === a2)) {
            if (!c2 && this.register[a2])
              return this.update(a2, b2);
            for (let d2 = 0, e, f; d2 < this.h.length; d2++)
              f = this.h[d2], e = this.K[d2], x(e) && (e = [e]), V(b2, e, this.A, 0, this.index[f], a2, e[0], c2);
            if (this.I) {
              let d2 = T(b2, this.I), e = v();
              x(d2) && (d2 = [d2]);
              for (let f = 0, g, h; f < d2.length; f++)
                if (g = d2[f], !e[g] && (e[g] = 1, h = this.l[g] || (this.l[g] = []), !c2 || !h.includes(a2))) {
                  if (h[h.length] = a2, this.m) {
                    const k = this.register[a2] || (this.register[a2] = []);
                    k[k.length] = h;
                  }
                }
            }
            if (this.store && (!c2 || !this.store[a2])) {
              let d2;
              if (this.C) {
                d2 = v();
                for (let e = 0, f; e < this.C.length; e++)
                  f = this.C[e], x(f) ? d2[f] = b2[f] : U(b2, d2, f, 0, f[0]);
              }
              this.store[a2] = d2 || b2;
            }
          }
          return this;
        };
        t.append = function(a2, b2) {
          return this.add(a2, b2, true);
        };
        t.update = function(a2, b2) {
          return this.remove(a2).add(a2, b2);
        };
        t.remove = function(a2) {
          C(a2) && (a2 = T(a2, this.key));
          if (this.register[a2]) {
            for (var b2 = 0; b2 < this.h.length && (this.index[this.h[b2]].remove(a2, !this.o), !this.m); b2++)
              ;
            if (this.I && !this.m)
              for (let c2 in this.l) {
                b2 = this.l[c2];
                const d2 = b2.indexOf(a2);
                -1 !== d2 && (1 < b2.length ? b2.splice(d2, 1) : delete this.l[c2]);
              }
            this.store && delete this.store[a2];
            delete this.register[a2];
          }
          return this;
        };
        t.search = function(a2, b2, c2, d2) {
          c2 || (!b2 && C(a2) ? (c2 = a2, a2 = "") : C(b2) && (c2 = b2, b2 = 0));
          let e = [], f = [], g, h, k, m, n, w, q = 0;
          if (c2)
            if (c2.constructor === Array)
              k = c2, c2 = null;
            else {
              a2 = c2.query || a2;
              k = (g = c2.pluck) || c2.index || c2.field;
              m = c2.tag;
              h = this.store && c2.enrich;
              n = "and" === c2.bool;
              b2 = c2.limit || b2 || 100;
              w = c2.offset || 0;
              if (m && (x(m) && (m = [m]), !a2)) {
                for (let l = 0, p; l < m.length; l++)
                  if (p = ya.call(this, m[l], b2, w, h))
                    e[e.length] = p, q++;
                return q ? e : [];
              }
              x(k) && (k = [k]);
            }
          k || (k = this.h);
          n = n && (1 < k.length || m && 1 < m.length);
          const r = !d2 && (this.o || this.async) && [];
          for (let l = 0, p, z, B; l < k.length; l++) {
            let A;
            z = k[l];
            x(z) || (A = z, z = A.field, a2 = A.query || a2, b2 = A.limit || b2);
            if (r)
              r[l] = this.index[z].searchAsync(a2, b2, A || c2);
            else {
              d2 ? p = d2[l] : p = this.index[z].search(a2, b2, A || c2);
              B = p && p.length;
              if (m && B) {
                const y = [];
                let H = 0;
                n && (y[0] = [p]);
                for (let X = 0, pa, R; X < m.length; X++)
                  if (pa = m[X], B = (R = this.l[pa]) && R.length)
                    H++, y[y.length] = n ? [R] : R;
                H && (p = n ? ma(y, b2 || 100, w || 0) : na(p, y), B = p.length);
              }
              if (B)
                f[q] = z, e[q++] = p;
              else if (n)
                return [];
            }
          }
          if (r) {
            const l = this;
            return new Promise(function(p) {
              Promise.all(r).then(function(z) {
                p(l.search(
                  a2,
                  b2,
                  c2,
                  z
                ));
              });
            });
          }
          if (!q)
            return [];
          if (g && (!h || !this.store))
            return e[0];
          for (let l = 0, p; l < f.length; l++) {
            p = e[l];
            p.length && h && (p = za.call(this, p));
            if (g)
              return p;
            e[l] = { field: f[l], result: p };
          }
          return e;
        };
        function ya(a2, b2, c2, d2) {
          let e = this.l[a2], f = e && e.length - c2;
          if (f && 0 < f) {
            if (f > b2 || c2)
              e = e.slice(c2, c2 + b2);
            d2 && (e = za.call(this, e));
            return { tag: a2, result: e };
          }
        }
        function za(a2) {
          const b2 = Array(a2.length);
          for (let c2 = 0, d2; c2 < a2.length; c2++)
            d2 = a2[c2], b2[c2] = { id: d2, doc: this.store[d2] };
          return b2;
        }
        t.contain = function(a2) {
          return !!this.register[a2];
        };
        t.get = function(a2) {
          return this.store[a2];
        };
        t.set = function(a2, b2) {
          this.store[a2] = b2;
          return this;
        };
        t.searchCache = oa;
        t.export = function(a2, b2, c2, d2, e) {
          e || (e = 0);
          d2 || (d2 = 0);
          if (d2 < this.h.length) {
            const f = this.h[d2], g = this.index[f];
            b2 = this;
            setTimeout(function() {
              g.export(a2, b2, e ? f : "", d2, e++) || (d2++, e = 1, b2.export(a2, b2, f, d2, e));
            });
          } else {
            let f, g;
            switch (e) {
              case 1:
                f = "tag";
                g = this.l;
                break;
              case 2:
                f = "store";
                g = this.store;
                break;
              default:
                return;
            }
            ra(a2, this, c2, f, d2, e, g);
          }
        };
        t.import = function(a2, b2) {
          if (b2)
            switch (x(b2) && (b2 = JSON.parse(b2)), a2) {
              case "tag":
                this.l = b2;
                break;
              case "reg":
                this.m = false;
                this.register = b2;
                for (let d2 = 0, e; d2 < this.h.length; d2++)
                  e = this.index[this.h[d2]], e.register = b2, e.m = false;
                break;
              case "store":
                this.store = b2;
                break;
              default:
                a2 = a2.split(".");
                const c2 = a2[0];
                a2 = a2[1];
                c2 && a2 && this.index[c2].import(a2, b2);
            }
        };
        la(Q.prototype);
        var Ba = { encode: Aa, F: false, G: "" };
        const Ca = [F("[\xE0\xE1\xE2\xE3\xE4\xE5]"), "a", F("[\xE8\xE9\xEA\xEB]"), "e", F("[\xEC\xED\xEE\xEF]"), "i", F("[\xF2\xF3\xF4\xF5\xF6\u0151]"), "o", F("[\xF9\xFA\xFB\xFC\u0171]"), "u", F("[\xFD\u0177\xFF]"), "y", F("\xF1"), "n", F("[\xE7c]"), "k", F("\xDF"), "s", F(" & "), " and "];
        function Aa(a2) {
          var b2 = a2 = "" + a2;
          b2.normalize && (b2 = b2.normalize("NFD").replace(ea, ""));
          return ca.call(this, b2.toLowerCase(), !a2.normalize && Ca);
        }
        ;
        var Ea = { encode: Da, F: false, G: "strict" };
        const Fa = /[^a-z0-9]+/, Ga = { b: "p", v: "f", w: "f", z: "s", x: "s", "\xDF": "s", d: "t", n: "m", c: "k", g: "k", j: "k", q: "k", i: "e", y: "e", u: "o" };
        function Da(a2) {
          a2 = Aa.call(this, a2).join(" ");
          const b2 = [];
          if (a2) {
            const c2 = a2.split(Fa), d2 = c2.length;
            for (let e = 0, f, g = 0; e < d2; e++)
              if ((a2 = c2[e]) && (!this.filter || !this.filter[a2])) {
                f = a2[0];
                let h = Ga[f] || f, k = h;
                for (let m = 1; m < a2.length; m++) {
                  f = a2[m];
                  const n = Ga[f] || f;
                  n && n !== k && (h += n, k = n);
                }
                b2[g++] = h;
              }
          }
          return b2;
        }
        ;
        var Ia = { encode: Ha, F: false, G: "" };
        const Ja = [F("ae"), "a", F("oe"), "o", F("sh"), "s", F("th"), "t", F("ph"), "f", F("pf"), "f", F("(?![aeo])h(?![aeo])"), "", F("(?!^[aeo])h(?!^[aeo])"), ""];
        function Ha(a2, b2) {
          a2 && (a2 = Da.call(this, a2).join(" "), 2 < a2.length && (a2 = E(a2, Ja)), b2 || (1 < a2.length && (a2 = ha(a2)), a2 && (a2 = a2.split(" "))));
          return a2 || [];
        }
        ;
        var La = { encode: Ka, F: false, G: "" };
        const Ma = F("(?!\\b)[aeo]");
        function Ka(a2) {
          a2 && (a2 = Ha.call(this, a2, true), 1 < a2.length && (a2 = a2.replace(Ma, "")), 1 < a2.length && (a2 = ha(a2)), a2 && (a2 = a2.split(" ")));
          return a2 || [];
        }
        ;
        G["latin:default"] = ja;
        G["latin:simple"] = Ba;
        G["latin:balance"] = Ea;
        G["latin:advanced"] = Ia;
        G["latin:extra"] = La;
        const W = self;
        let Y;
        const Z = { Index: K, Document: Q, Worker: O, registerCharset: function(a2, b2) {
          G[a2] = b2;
        }, registerLanguage: function(a2, b2) {
          ka[a2] = b2;
        } };
        (Y = W.define) && Y.amd ? Y([], function() {
          return Z;
        }) : W.exports ? W.exports = Z : W.FlexSearch = Z;
      })(exports);
    }
  });

  // <stdin>
  var import_flexsearch = __toESM(require_flexsearch_bundle());
  var search = document.getElementById("search__text");
  var suggestions = document.getElementById("search__suggestions");
  if (search !== null) {
    document.addEventListener("keydown", (e) => {
      if (e.ctrlKey && e.key === "/") {
        e.preventDefault();
        search.focus();
      } else if (e.key === "Escape") {
        search.blur();
        suggestions.classList.add("search__suggestions--hidden");
      }
    });
  }
  document.addEventListener("click", (e) => {
    const clickInsideSuggestions = suggestions.contains(e.target);
    if (!clickInsideSuggestions) {
      suggestions.classList.add("search__suggestions--hidden");
    }
  });
  document.addEventListener("keydown", (e) => {
    const suggestionsHidden = suggestions.classList.contains(
      "search__suggestions--hidden"
    );
    if (suggestionsHidden)
      return;
    const focusableSuggestions = [...suggestions.querySelectorAll("a")];
    if (focusableSuggestions.length === 0)
      return;
    const currentIndex = focusableSuggestions.indexOf(document.activeElement);
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex2 = currentIndex + 1 < focusableSuggestions.length ? currentIndex + 1 : currentIndex;
      focusableSuggestions[nextIndex2].focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      nextIndex = currentIndex > 0 ? currentIndex - 1 : 0;
      focusableSuggestions[nextIndex].focus();
    }
  });
  (function() {
    const index = new import_flexsearch.Document({
      tokenize: "forward",
      cache: 100,
      document: {
        id: "id",
        store: ["href", "title", "description"],
        index: ["title", "description", "content"]
      }
    });
    index.add(
      {
        id: 0,
        href: "/post/herlig-foerste-foraarsdag/",
        title: "Herlig Foerste For\xE5rsdag",
        description: "F\xF8r jeg kom ud p\xE5 den anden side af kropstyranni, der fik jeg det altid v\xE6rre mentalt n\xE5r for\xE5ret bankede p\xE5. Det virker m\xE5ske paradoksalt; de fleste kender det med at blive trist og energiforladt i de m\xF8rke m\xE5neder, og gl\xE6der sig til lyset og for\xE5ret, og til at kunne smide noget af alt det\u2026",
        content: "F\xF8r jeg kom ud p\xE5 den anden side af kropstyranni, der fik jeg det altid v\xE6rre mentalt n\xE5r for\xE5ret bankede p\xE5. Det virker m\xE5ske paradoksalt; de fleste kender det med at blive trist og energiforladt i de m\xF8rke m\xE5neder, og gl\xE6der sig til lyset og for\xE5ret, og til at kunne smide noget af alt det\u2026\n"
      }
    );
    search.addEventListener("input", function() {
      const maxResultsCount = 5;
      const searchText = this.value;
      const searchResults = index.search(searchText, maxResultsCount, { enrich: true });
      const searchResultsMap = /* @__PURE__ */ new Map();
      for (const searchResult of searchResults.flatMap((r) => r.result)) {
        if (searchResultsMap.has(searchResult.href))
          continue;
        searchResultsMap.set(searchResult.doc.href, searchResult.doc);
      }
      suggestions.innerHTML = "";
      suggestions.classList.remove("search__suggestions--hidden");
      if (searchResultsMap.size === 0 && searchText) {
        const noResultsMessage = document.createElement("div");
        noResultsMessage.innerHTML = `No results for "<strong>${searchText}</strong>"`;
        noResultsMessage.classList.add("search__no-results");
        suggestions.appendChild(noResultsMessage);
        return;
      }
      for (const [href, searchResult] of searchResultsMap) {
        const suggestion = document.createElement("a");
        suggestion.href = href;
        suggestion.classList.add("search__suggestion-item");
        suggestions.appendChild(suggestion);
        const title = document.createElement("div");
        title.textContent = searchResult.title;
        title.classList.add("search__suggestion-title");
        suggestion.appendChild(title);
        const description = document.createElement("div");
        description.textContent = searchResult.description;
        description.classList.add("search__suggestion-description");
        suggestion.appendChild(description);
        if (suggestions.childElementCount === maxResultsCount)
          break;
      }
    });
  })();
})();
//! Source: https://github.com/h-enk/doks/blob/master/assets/js/index.js
/*! Source: https://dev.to/shubhamprakash/trap-focus-using-javascript-6a3 */
//! Source: https://discourse.gohugo.io/t/range-length-or-last-element/3803/2
