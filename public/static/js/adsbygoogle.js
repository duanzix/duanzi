(function() { var aa = "function" == typeof Object.create ? Object.create : function(a) { var b = function() {};
            b.prototype = a; return new b },
        ba; if ("function" == typeof Object.setPrototypeOf) ba = Object.setPrototypeOf;
    else { var ca;
        a: { var da = { la: !0 },
                ea = {}; try { ea.__proto__ = da;
                ca = ea.la; break a } catch (a) {} ca = !1 } ba = ca ? function(a, b) { a.__proto__ = b; if (a.__proto__ !== b) throw new TypeError(a + " is not extensible"); return a } : null } var fa = ba,
        ha = function(a, b) { a.prototype = aa(b.prototype);
            a.prototype.constructor = a; if (fa) fa(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) { var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d) } else a[c] = b[c];
            a.xa = b.prototype },
        ia = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) { a != Array.prototype && a != Object.prototype && (a[b] = c.value) },
        ja = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this,
        ka = function(a, b) { if (b) { var c = ja;
                a = a.split("."); for (var d = 0; d < a.length - 1; d++) { var e = a[d];
                    e in c || (c[e] = {});
                    c = c[e] } a = a[a.length - 1];
                d = c[a];
                b = b(d);
                b != d && null != b && ia(c, a, { configurable: !0, writable: !0, value: b }) } };
    ka("String.prototype.endsWith", function(a) { return a ? a : function(a, c) { if (null == this) throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined"); if (a instanceof RegExp) throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");
            void 0 === c && (c = this.length);
            c = Math.max(0, Math.min(c | 0, this.length)); for (var b = a.length; 0 < b && 0 < c;)
                if (this[--c] != a[--b]) return !1; return 0 >= b } }); var la = "function" == typeof Object.assign ? Object.assign : function(a, b) { for (var c = 1; c < arguments.length; c++) { var d = arguments[c]; if (d)
                for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]) } return a };
    ka("Object.assign", function(a) { return a || la });
    ka("Object.is", function(a) { return a ? a : function(a, c) { return a === c ? 0 !== a || 1 / a === 1 / c : a !== a && c !== c } });
    ka("Number.isNaN", function(a) { return a ? a : function(a) { return "number" === typeof a && isNaN(a) } }); var l = this,
        ma = function(a) { return "string" == typeof a },
        na = function(a) { return "boolean" == typeof a },
        q = function(a) { return "number" == typeof a },
        qa = function() { if (null === oa) { a: { var a = l.document; if ((a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && pa.test(a)) break a;a = null } oa = a || "" } return oa },
        pa = /^[\w+/_-]+[=]{0,2}$/,
        oa = null,
        ra = function() {},
        ta = function(a) { var b = typeof a; if ("object" == b)
                if (a) { if (a instanceof Array) return "array"; if (a instanceof Object) return b; var c = Object.prototype.toString.call(a); if ("[object Window]" == c) return "object"; if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array"; if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function" } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object"; return b },
        ua = function(a) { return null === a },
        va = function(a) { var b = typeof a; return "object" == b && null != a || "function" == b },
        wa = function(a, b, c) { return a.call.apply(a.bind, arguments) },
        xa = function(a, b, c) { if (!a) throw Error(); if (2 < arguments.length) { var d = Array.prototype.slice.call(arguments, 2); return function() { var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d); return a.apply(b, c) } } return function() { return a.apply(b, arguments) } },
        ya = function(a, b, c) { Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ya = wa : ya = xa; return ya.apply(null, arguments) },
        za = function(a, b) { var c = Array.prototype.slice.call(arguments, 1); return function() { var b = c.slice();
                b.push.apply(b, arguments); return a.apply(this, b) } },
        t = function(a, b) {
            function c() {} c.prototype = b.prototype;
            a.xa = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.Fa = function(a, c, f) { for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e]; return b.prototype[c].apply(a, d) } }; var Aa = (new Date).getTime(); var Ba = function(a, b) { if (ma(a)) return ma(b) && 1 == b.length ? a.indexOf(b, 0) : -1; for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c; return -1 },
        Ca = function(a, b) { for (var c = a.length, d = ma(a) ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a) },
        Da = function(a) { return Array.prototype.concat.apply([], arguments) }; var Ea = function(a) { return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1] },
        Ma = function(a) { if (!Fa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Ga, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Ha, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Ia, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Ja, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Ka, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(La, "&#0;")); return a },
        Ga = /&/g,
        Ha = /</g,
        Ia = />/g,
        Ja = /"/g,
        Ka = /'/g,
        La = /\x00/g,
        Fa = /[\x00&<>"']/,
        Na = { "\x00": "\\0", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "\t": "\\t", "\x0B": "\\x0B", '"': '\\"', "\\": "\\\\", "<": "<" },
        Oa = { "'": "\\'" },
        v = function(a, b) { return -1 != a.indexOf(b) },
        Pa = function(a) { return String(a).replace(/\-([a-z])/g, function(a, c) { return c.toUpperCase() }) }; var w;
    a: { var Qa = l.navigator; if (Qa) { var Ra = Qa.userAgent; if (Ra) { w = Ra; break a } } w = "" }; var Sa = function(a, b) { for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0; return !1 }; var Ta = function(a) { Ta[" "](a); return a };
    Ta[" "] = ra; var x = function() {},
        Ua = "function" == typeof Uint8Array,
        Xa = function(a, b, c) { a.a = null;
            b || (b = []);
            a.u = void 0;
            a.h = -1;
            a.b = b;
            a: { if (b = a.b.length) {--b; var d = a.b[b]; if (d && "object" == typeof d && "array" != ta(d) && !(Ua && d instanceof Uint8Array)) { a.i = b - a.h;
                        a.f = d; break a } } a.i = Number.MAX_VALUE } a.s = {}; if (c)
                for (b = 0; b < c.length; b++) d = c[b], d < a.i ? (d += a.h, a.b[d] = a.b[d] || Va) : (Wa(a), a.f[d] = a.f[d] || Va) },
        Va = [],
        Wa = function(a) { var b = a.i + a.h;
            a.b[b] || (a.f = a.b[b] = {}) },
        y = function(a, b) { if (b < a.i) { b += a.h; var c = a.b[b]; return c === Va ? a.b[b] = [] : c } if (a.f) return c = a.f[b], c === Va ? a.f[b] = [] : c },
        Ya = function(a, b) { if (b < a.i) { b += a.h; var c = a.b[b]; return c === Va ? a.b[b] = [] : c } c = a.f[b]; return c === Va ? a.f[b] = [] : c },
        Za = function(a, b) { a = y(a, b); return null == a ? !1 : a },
        $a = function(a, b, c) { a.a || (a.a = {}); if (!a.a[c]) { var d = y(a, c);
                d && (a.a[c] = new b(d)) } return a.a[c] },
        ab = function(a, b, c) { a.a || (a.a = {}); if (!a.a[c]) { for (var d = Ya(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
                a.a[c] = e } b = a.a[c];
            b == Va && (b = a.a[c] = []); return b },
        cb = function(a) { if (a.a)
                for (var b in a.a) { var c = a.a[b]; if ("array" == ta(c))
                        for (var d = 0; d < c.length; d++) c[d] && bb(c[d]);
                    else c && bb(c) } },
        bb = function(a) { cb(a); return a.b };
    x.prototype.toString = function() { cb(this); return this.b.toString() }; var db = document,
        z = window; var eb = { "120x90": !0, "160x90": !0, "180x90": !0, "200x90": !0, "468x15": !0, "728x15": !0 },
        fb = function(a, b) { if (15 == b) { if (728 <= a) return 728; if (468 <= a) return 468 } else if (90 == b) { if (200 <= a) return 200; if (180 <= a) return 180; if (160 <= a) return 160; if (120 <= a) return 120 } return null }; var hb = function() { return function() { return !ua.apply(this, arguments) } },
        ib = function(a) { var b = !1,
                c; return function() { b || (c = a(), b = !0); return c } },
        jb = function() { var a = ra; return function() { if (a) { var b = a;
                    a = null;
                    b() } } }; var lb = function() { this.b = "";
        this.h = kb };
    lb.prototype.f = !0;
    lb.prototype.a = function() { return this.b }; var mb = function(a) { if (a instanceof lb && a.constructor === lb && a.h === kb) return a.b;
            ta(a); return "type_error:TrustedResourceUrl" },
        kb = {}; var ob = function() { this.L = "";
        this.ka = nb };
    ob.prototype.f = !0;
    ob.prototype.a = function() { return this.L }; var pb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        nb = {},
        qb = function(a) { var b = new ob;
            b.L = a; return b };
    qb("about:blank"); var rb = function(a, b) { a.src = mb(b);
        (b = qa()) && a.setAttribute("nonce", b) }; var sb = function(a) { this.a = a || l.document || document },
        tb = function(a, b) { return a.a.createElement(String(b)) };
    sb.prototype.contains = function(a, b) { if (!a || !b) return !1; if (a.contains && 1 == b.nodeType) return a == b || a.contains(b); if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16); for (; b && a != b;) b = b.parentNode; return b == a }; var vb = function(a) { ub(); var b = new lb;
            b.b = a; return b },
        ub = ra; var wb = function() { return !(v(w, "iPad") || v(w, "Android") && !v(w, "Mobile") || v(w, "Silk")) && (v(w, "iPod") || v(w, "iPhone") || v(w, "Android") || v(w, "IEMobile")) }; var A = function(a) { try { var b; if (b = !!a && null != a.location.href) a: { try { Ta(a.foo);
                        b = !0; break a } catch (c) {} b = !1 }
                return b } catch (c) { return !1 } },
        yb = function(a) { for (var b = l, c = 0; b && 40 > c++ && (!A(b) || !a(b));) b = xb(b) },
        zb = function() { var a = l;
            yb(function(b) { a = b; return !1 }); return a },
        xb = function(a) { try { var b = a.parent; if (b && b != a) return b } catch (c) {} return null },
        Ab = function(a, b) { var c = [l.top],
                d = [],
                e = 0;
            b = b || 1024; for (var f; f = c[e++];) { a && !A(f) || d.push(f); try { if (f.frames)
                        for (var g = f.frames.length, h = 0; h < g && c.length < b; ++h) c.push(f.frames[h]) } catch (k) {} } return d },
        Bb = function(a, b) { var c = a.createElement("script");
            rb(c, vb(b)); return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null },
        B = function(a, b) { return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle },
        Cb = function(a) { if (!a.crypto) return Math.random(); try { var b = new Uint32Array(1);
                a.crypto.getRandomValues(b); return b[0] / 65536 / 65536 } catch (c) { return Math.random() } },
        Db = function(a, b) { if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a) },
        Eb = function(a) { var b = a.length; if (0 == b) return 0; for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295; return 0 < c ? c : 4294967296 + c },
        Fb = ib(function() { return v(w, "Google Web Preview") || 1E-4 > Math.random() }),
        Gb = /^([0-9.]+)px$/,
        Hb = /^(-?[0-9.]{1,30})$/,
        Ib = function(a) { return Hb.test(a) && (a = Number(a), !isNaN(a)) ? a : null },
        Jb = function(a, b) { return b ? !/^false$/.test(a) : /^true$/.test(a) },
        C = function(a) { return (a = Gb.exec(a)) ? +a[1] : null },
        Kb = function(a, b) { try { return !(!a.frames || !a.frames[b]) } catch (c) { return !1 } },
        Lb = Object.assign || function(a, b) { for (var c = 1; c < arguments.length; c++) { var d = arguments[c]; if (d)
                    for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]) } return a }; var Mb = function(a, b, c) { a.addEventListener && a.addEventListener(b, c, !1) }; var Nb = function(a, b) { var c = !1,
            d = !1;
        d = void 0 === d ? !1 : d;
        c = void 0 === c ? !1 : c;
        l.google_image_requests || (l.google_image_requests = []); var e = l.document.createElement("img"); if (b || c) { var f = function(a) { b && b(a); if (c) { a = l.google_image_requests; var d = Ba(a, e);
                    0 <= d && Array.prototype.splice.call(a, d, 1) } e.removeEventListener && e.removeEventListener("load", f, !1);
                e.removeEventListener && e.removeEventListener("error", f, !1) };
            Mb(e, "load", f);
            Mb(e, "error", f) } d && (e.referrerPolicy = "no-referrer");
        e.src = a;
        l.google_image_requests.push(e) }; var Ob = function(a, b) { a = parseInt(a, 10); return isNaN(a) ? b : a },
        Pb = /^([\w-]+\.)*([\w-]{2,})(:[0-9]+)?$/,
        Qb = function(a, b) { return a ? (a = a.match(Pb)) ? a[0] : b : b }; var Rb = Ob("468", 0); var Sb = function() { return "r20180910" },
        Tb = Jb("false", !1),
        Ub = Jb("true", !1),
        Vb = Jb("false", !1),
        Wb = Vb || !Ub; var Xb = function() { return Qb("", "googleads.g.doubleclick.net") },
        Yb = function(a) { return a ? "pagead2.googlesyndication.com" : Qb("", "pagead2.googlesyndication.com") }; var Zb = function(a) { a = void 0 === a ? l : a; var b = a.context || a.AMP_CONTEXT_DATA; if (!b) try { b = a.parent.context || a.parent.AMP_CONTEXT_DATA } catch (c) {}
            try { if (b && b.pageViewId && b.canonicalUrl) return b } catch (c) {} return null },
        $b = function(a) { return (a = a || Zb()) ? A(a.master) ? a.master : null : null }; var ac = function(a, b) { for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a) },
        bc = function(a) { return !(!a || !a.call) && "function" === typeof a },
        cc = function(a, b) { if (a.indexOf) return a = a.indexOf(b), 0 < a || 0 === a; for (var c = 0; c < a.length; c++)
                if (a[c] === b) return !0; return !1 },
        dc = function(a) { a = $b(Zb(a)) || a;
            a.google_unique_id ? ++a.google_unique_id : a.google_unique_id = 1 },
        ec = !!window.google_async_iframe_id,
        fc = ec && window.parent || window,
        gc = function() { if (ec && !A(fc)) { var a = "." + db.domain; try { for (; 2 < a.split(".").length && !A(fc);) db.domain = a = a.substr(a.indexOf(".") + 1), fc = window.parent } catch (b) {} A(fc) || (fc = window) } return fc },
        hc = /(^| )adsbygoogle($| )/,
        ic = function(a) { return Tb && a.google_top_window || a.top },
        jc = function(a) { a = ic(a); return A(a) ? a : null }; var D = function(a, b) { a = a.google_ad_modifications; return cc(a ? a.eids || [] : [], b) },
        kc = function(a) { return (a = a.google_ad_modifications) ? a.loeids || [] : [] },
        lc = function(a, b) { a = a.google_ad_modifications = a.google_ad_modifications || {};
            (a.tag_partners = a.tag_partners || []).push(b) },
        mc = function(a, b, c) { if (!a) return null; for (var d = 0; d < a.length; ++d)
                if ((a[d].ad_slot || b) == b && (a[d].ad_tag_origin || c) == c) return a[d]; return null }; var nc = { overlays: 1, interstitials: 2, vignettes: 2, inserts: 3, immersives: 4, list_view: 5, full_page: 6 },
        oc = { za: { name: "adFormat", o: q }, ya: { name: "adClient", o: /^[a-z0-9-]+$/i }, Ba: { name: "adTest", o: /^on$/i }, Ea: { name: "reqSrc", o: q }, Da: { name: "pubVars", o: null }, Aa: { name: "adKey", o: q }, Ca: { name: "enabledInAsfe", o: na } }; var pc = [{ name: "google_ad_channel", o: { predicate: /^[a-z0-9_-]+$/i, nullOnInvalid: !0 } }, { name: "google_reactive_sra_index", o: { predicate: q, nullOnInvalid: !0 } }, { name: "google_ad_unit_key", o: { predicate: q, nullOnInvalid: !0 } }]; var rc = function(a) { Xa(this, a, qc) };
    t(rc, x); var qc = [4],
        sc = function(a) { Xa(this, a, null) };
    t(sc, x); var tc = function(a) { Xa(this, a, null) };
    t(tc, x); var vc = function(a) { Xa(this, a, uc) };
    t(vc, x); var uc = [6, 7, 9, 10]; var xc = function(a) { Xa(this, a, wc) };
    t(xc, x); var wc = [1, 2, 5, 7],
        yc = function(a) { Xa(this, a, null) };
    t(yc, x); var Ac = function(a) { Xa(this, a, zc) };
    t(Ac, x); var zc = [2],
        Bc = function(a) { Xa(this, a, null) };
    t(Bc, x); var Cc = function(a, b, c) { c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.line = b.line || -1;
        this.msg = b.message || "";
        this.file = b.file || "";
        this.id = b.id || "jserror";
        this.meta = c }; var Dc = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/,
        Ec = function(a, b) { this.a = a;
            this.b = b },
        Fc = function(a, b, c) { this.url = a;
            this.a = b;
            this.$ = !!c;
            this.depth = q(void 0) ? void 0 : null }; var Gc = function() { this.f = "&";
            this.h = !1;
            this.b = {};
            this.i = 0;
            this.a = [] },
        Hc = function(a, b) { var c = {};
            c[a] = b; return [c] },
        Jc = function(a, b, c, d, e) { var f = [];
            Db(a, function(a, h) {
                (a = Ic(a, b, c, d, e)) && f.push(h + "=" + a) }); return f.join(b) },
        Ic = function(a, b, c, d, e) { if (null == a) return "";
            b = b || "&";
            c = c || ",$"; "string" == typeof c && (c = c.split("")); if (a instanceof Array) { if (d = d || 0, d < c.length) { for (var f = [], g = 0; g < a.length; g++) f.push(Ic(a[g], b, c, d + 1, e)); return f.join(c[d]) } } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Jc(a, b, c, d, e + 1)) : "..."; return encodeURIComponent(String(a)) },
        Kc = function(a, b, c, d) { a.a.push(b);
            a.b[b] = Hc(c, d) },
        Mc = function(a, b, c, d) { b = b + "//" + c + d; var e = Lc(a) - d.length; if (0 > e) return "";
            a.a.sort(function(a, b) { return a - b });
            d = null;
            c = ""; for (var f = 0; f < a.a.length; f++)
                for (var g = a.a[f], h = a.b[g], k = 0; k < h.length; k++) { if (!e) { d = null == d ? g : d; break } var m = Jc(h[k], a.f, ",$"); if (m) { m = c + m; if (e >= m.length) { e -= m.length;
                            b += m;
                            c = a.f; break } else a.h && (c = e, m[c - 1] == a.f && --c, b += m.substr(0, c), c = a.f, e = 0);
                        d = null == d ? g : d } } a = "";
            null != d && (a = c + "trn=" + d); return b + a },
        Lc = function(a) { var b = 1,
                c; for (c in a.b) b = c.length > b ? c.length : b; return 3997 - b - a.f.length - 1 }; var Nc = function(a, b, c, d, e, f) { if ((d ? a.i : Math.random()) < (e || a.a)) try { if (c instanceof Gc) var g = c;
            else g = new Gc, Db(c, function(a, b) { var c = g,
                    d = c.i++;
                a = Hc(b, a);
                c.a.push(d);
                c.b[d] = a }); var h = Mc(g, a.h, a.b, a.f + b + "&");
            h && ("undefined" === typeof f ? Nb(h, void 0) : Nb(h, f)) } catch (k) {} }; var Oc = function(a, b) { this.start = a < b ? a : b;
        this.a = a < b ? b : a }; var Pc = function(a, b) { this.a = b >= a ? new Oc(a, b) : null },
        Qc = function(a) { var b; try { a.localStorage && (b = parseInt(a.localStorage.getItem("google_experiment_mod"), 10)) } catch (c) { return null } if (0 <= b && 1E3 > b) return b; if (Fb()) return null;
            b = Math.floor(1E3 * Cb(a)); try { if (a.localStorage) return a.localStorage.setItem("google_experiment_mod", "" + b), b } catch (c) {} return null }; var Rc = null; var Sc = function() { var a = l.performance; return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : +new Date },
        Tc = function() { var a = void 0 === a ? l : a; return (a = a.performance) && a.now ? a.now() : null }; var Uc = function(a, b, c) { this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = this.label + "_" + this.type + "_" + Math.random();
        this.slotId = void 0 }; var E = l.performance,
        Vc = !!(E && E.mark && E.measure && E.clearMarks),
        Wc = ib(function() { var a; if (a = Vc) { var b; if (null === Rc) { Rc = ""; try { a = ""; try { a = l.top.location.hash } catch (c) { a = l.location.hash } a && (Rc = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "") } catch (c) {} } b = Rc;
                a = !!b.indexOf && 0 <= b.indexOf("1337") } return a }),
        Yc = function() { var a = Xc;
            this.b = [];
            this.f = a || l; var b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.b = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.a = Wc() || (null != b ? b : 1 > Math.random()) },
        Zc = function(a) { a && E && Wc() && (E.clearMarks("goog_" + a.uniqueId + "_start"), E.clearMarks("goog_" + a.uniqueId + "_end")) };
    Yc.prototype.start = function(a, b) { if (!this.a) return null; var c = Tc() || Sc();
        a = new Uc(a, b, c);
        b = "goog_" + a.uniqueId + "_start";
        E && Wc() && E.mark(b); return a }; var bd = function() { var a = $c;
            this.s = ad;
            this.h = !0;
            this.f = null;
            this.u = this.a;
            this.b = void 0 === a ? null : a;
            this.i = !1 },
        ed = function(a, b, c, d, e) { try { if (a.b && a.b.a) { var f = a.b.start(b.toString(), 3); var g = c(); var h = a.b;
                    c = f; if (h.a && q(c.value)) { var k = Tc() || Sc();
                        c.duration = k - c.value; var m = "goog_" + c.uniqueId + "_end";
                        E && Wc() && E.mark(m);
                        h.a && h.b.push(c) } } else g = c() } catch (n) { h = a.h; try { Zc(f), h = (e || a.u).call(a, b, new cd(dd(n), n.fileName, n.lineNumber), void 0, d) } catch (u) { a.a(217, u) } if (!h) throw n; } return g },
        fd = function(a, b) { var c = F; return function(d) { for (var e = [], f = 0; f < arguments.length; ++f) e[f] = arguments[f]; return ed(c, a, function() { return b.apply(void 0, e) }, void 0, void 0) } };
    bd.prototype.a = function(a, b, c, d, e) { e = e || "jserror"; try { var f = new Gc;
            f.h = !0;
            Kc(f, 1, "context", a);
            b.error && b.meta && b.id || (b = new cd(dd(b), b.fileName, b.lineNumber));
            b.msg && Kc(f, 2, "msg", b.msg.substring(0, 512));
            b.file && Kc(f, 3, "file", b.file);
            0 < b.line && Kc(f, 4, "line", b.line); var g = b.meta || {}; if (this.f) try { this.f(g) } catch (sa) {}
            if (d) try { d(g) } catch (sa) {} b = [g];
            f.a.push(5);
            f.b[5] = b;
            d = l;
            b = [];
            g = null;
            do { var h = d; if (A(h)) { var k = h.location.href;
                    g = h.document && h.document.referrer || null } else k = g, g = null;
                b.push(new Fc(k || "", h)); try { d = h.parent } catch (sa) { d = null } } while (d && h != d);
            k = 0; for (var m = b.length - 1; k <= m; ++k) b[k].depth = m - k;
            h = l; if (h.location && h.location.ancestorOrigins && h.location.ancestorOrigins.length == b.length - 1)
                for (m = 1; m < b.length; ++m) { var n = b[m];
                    n.url || (n.url = h.location.ancestorOrigins[m - 1] || "", n.$ = !0) }
            var u = new Fc(l.location.href, l, !1);
            h = null; var p = b.length - 1; for (n = p; 0 <= n; --n) { var r = b[n];!h && Dc.test(r.url) && (h = r); if (r.url && !r.$) { u = r; break } } r = null; var K = b.length && b[p].url;
            0 != u.depth && K && (r = b[p]); var V = new Ec(u, r);
            V.b && Kc(f, 6, "top", V.b.url || "");
            Kc(f, 7, "url", V.a.url || "");
            Nc(this.s, e, f, this.i, c) } catch (sa) { try { Nc(this.s, e, { context: "ecmserr", rctx: a, msg: dd(sa), url: V && V.a.url }, this.i, c) } catch (gb) {} } return this.h }; var dd = function(a) { var b = a.toString();
            a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
            a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message); if (a.stack) { a = a.stack; var c = b; try {-1 == a.indexOf(c) && (a = c + "\n" + a); for (var d; a != d;) d = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                    b = a.replace(/\n */g, "\n") } catch (e) { b = c } } return b },
        cd = function(a, b, c) { Cc.call(this, Error(a), { message: a, file: void 0 === b ? "" : b, line: void 0 === c ? -1 : c }) };
    ha(cd, Cc); var G = function(a) { a = void 0 === a ? "" : a; var b = Error.call(this);
        this.message = b.message; "stack" in b && (this.stack = b.stack);
        this.name = "TagError";
        this.message = a ? "adsbygoogle.push() error: " + a : "";
        Error.captureStackTrace ? Error.captureStackTrace(this, G) : this.stack = Error().stack || "" };
    ha(G, Error); var gd = function(a) { return 0 == (a.error && a.meta && a.id ? a.msg || dd(a.error) : dd(a)).indexOf("TagError") }; var ad, F, Xc = gc(),
        $c = new Yc,
        hd = function(a) { null != a && (Xc.google_measure_js_timing = a);
            Xc.google_measure_js_timing || (a = $c, a.a = !1, a.b != a.f.google_js_reporting_queue && (Wc() && Ca(a.b, Zc), a.b.length = 0)) };
    ad = new function() { var a = void 0 === a ? z : a;
        this.h = "http:" === a.location.protocol ? "http:" : "https:";
        this.b = "pagead2.googlesyndication.com";
        this.f = "/pagead/gen_204?id=";
        this.a = .01;
        this.i = Math.random() };
    F = new bd; "complete" == Xc.document.readyState ? hd() : $c.a && Mb(Xc, "load", function() { hd() }); var kd = function() { var a = [id, jd];
            F.f = function(b) { Ca(a, function(a) { a(b) }) } },
        ld = function(a, b, c, d) { return ed(F, a, c, d, b) },
        md = function(a, b) { return fd(a, b) },
        nd = F.a,
        od = function(a, b, c) { Nc(ad, a, b, "jserror" != a, c, void 0) },
        pd = function(a, b, c, d) { return gd(b) ? (F.i = !0, F.a(a, b, .1, d, "puberror"), !1) : F.a(a, b, c, d) },
        qd = function(a, b, c, d) { return gd(b) ? !1 : F.a(a, b, c, d) }; var rd = function(a, b) { this.Y = a;
            this.aa = b },
        sd = function(a) { var b = [].slice.call(arguments).filter(hb()); if (!b.length) return null; var c = [],
                d = {};
            b.forEach(function(a) { c = c.concat(a.Y || []);
                d = Object.assign(d, a.aa) }); return new rd(c, d) }; var td = new rd(["google-auto-placed"], { google_tag_origin: "qs" }); var ud = function(a, b) { a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        od("ama", b, .01) }; var vd = function(a, b, c) { c || (c = Wb ? "https" : "http");
        l.location && "https:" == l.location.protocol && "http" == c && (c = "https"); return [c, "://", a, b].join("") }; var wd = null,
        xd = function() { if (!Tb) return !1; if (null != wd) return wd;
            wd = !1; try { var a = jc(l);
                a && -1 != a.location.hash.indexOf("google_logging") && (wd = !0);
                l.localStorage.getItem("google_logging") && (wd = !0) } catch (b) {} return wd },
        yd = function(a, b) { b = void 0 === b ? [] : b; if (xd()) { if (!l.google_logging_queue) { l.google_logging_queue = []; var c = vd(Yb(), "/pagead/js/logging_library.js");
                    Bb(l.document, c) } l.google_logging_queue.push([a, b]) } }; var zd = function(a) { Xa(this, a, null) };
    t(zd, x); var Ad = null,
        Bd = function() { if (!Ad) { for (var a = l, b = a, c = 0; a && a != a.parent;)
                    if (a = a.parent, c++, A(a)) b = a;
                    else break;
                Ad = b } return Ad }; var Cd = { c: "368226500", g: "368226501" },
        Dd = { c: "36998750", g: "36998751" },
        Ed = { c: "4089040", P: "4089042" },
        Fd = { c: "40993900", g: "40993901" },
        Gd = { c: "40993910", g: "40993911" },
        Hd = { m: "20040067", c: "20040068", O: "1337" },
        Id = { c: "21060548", m: "21060549" },
        Jd = { c: "21060623", m: "21060624" },
        Kd = { c: "22324606", g: "22324607" },
        Ld = { c: "21062271", m: "21062272" },
        Md = { I: "62710015", c: "62710016" },
        Nd = { c: "201222021", A: "201222022" },
        Od = { c: "201222031", A: "201222032" },
        Pd = { c: "21070024", g: "21070025" },
        Qd = { c: "21070013", g: "21070014" },
        Rd = { c: "21060518", g: "21060519" },
        Sd = { c: "21060849", U: "21060850", J: "21060851", T: "21060852", R: "21060853" },
        Td = { c: "21061394", g: "21061395" },
        Ud = { c: "182982000", g: "182982100" },
        Vd = { c: "182982200", g: "182982300" },
        Wd = { c: "182983000", g: "182983100" },
        Xd = { c: "182983200", g: "182983300" },
        Yd = { c: "10583695", g: "10583696" },
        Zd = { c: "10593695", g: "10593696" },
        $d = { c: "21062077", ea: "21062078", fa: "21062079", ga: "21062080", ha: "21062081" },
        ae = { c: "10573695", ia: "10573696", ja: "10573697" },
        be = { c: "20195144", g: "20195143" }; var ce = { google: 1, googlegroups: 1, gmail: 1, googlemail: 1, googleimages: 1, googleprint: 1 },
        de = /(corp|borg)\.google\.com:\d+$/,
        ee = function() { var a = z.google_page_location || z.google_page_url; "EMPTY" == a && (a = z.google_page_url); if (Tb || !a) return !1;
            a = a.toString();
            0 == a.indexOf("http://") ? a = a.substring(7, a.length) : 0 == a.indexOf("https://") && (a = a.substring(8, a.length)); var b = a.indexOf("/"); - 1 == b && (b = a.length);
            a = a.substring(0, b); if (de.test(a)) return !1;
            a = a.split(".");
            b = !1;
            3 <= a.length && (b = a[a.length - 3] in ce);
            2 <= a.length && (b = b || a[a.length - 2] in ce); return b }; var fe = function(a) { this.a = this.b = null; "function" == ta(a) ? this.a = a : this.b = a };
    fe.prototype.getVerifier = function(a) { return this.b ? this.b[a] : null };
    fe.prototype.getSchema = function(a) { return this.a ? this.a(a) : null };
    fe.prototype.doesReturnAnotherSchema = function() { return this.a ? !0 : !1 }; var ge = function() { this.wasPlaTagProcessed = !1;
            this.wasReactiveAdConfigReceived = {};
            this.adCount = {};
            this.wasReactiveAdVisible = {};
            this.stateForType = {};
            this.reactiveTypeEnabledInAsfe = {};
            this.isReactiveTagFirstOnPage = this.wasReactiveAdConfigHandlerRegistered = this.wasReactiveTagRequestSent = !1;
            this.reactiveTypeDisabledByPublisher = {};
            this.tagSpecificState = {};
            this.messageValidationEnabled = !1;
            this.adRegion = this.floatingAdsFillMessage = null;
            this.disablePageHeightCheck = !1 },
        he = function(a) { a.google_reactive_ads_global_state || (a.google_reactive_ads_global_state = new ge); return a.google_reactive_ads_global_state }; var ie = function(a) { a = a.document; var b = {};
            a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body); return b || {} },
        H = function(a) { return ie(a).clientWidth }; var je = function(a, b) { for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
        c.forEach(b, void 0) }; var ke = function(a, b, c, d) { this.h = a;
        this.b = b;
        this.f = c;
        this.a = d };
    ke.prototype.toString = function() { return JSON.stringify({ nativeQuery: this.h, occurrenceIndex: this.b, paragraphIndex: this.f, ignoreMode: this.a }) }; var le = function(a, b) { if (null == a.a) return b; switch (a.a) {
                case 1:
                    return b.slice(1);
                case 2:
                    return b.slice(0, b.length - 1);
                case 3:
                    return b.slice(1, b.length - 1);
                case 0:
                    return b;
                default:
                    throw Error("Unknown ignore mode: " + a.a); } },
        ne = function(a) { var b = [];
            je(a.getElementsByTagName("p"), function(a) { 100 <= me(a) && b.push(a) }); return b },
        me = function(a) { if (3 == a.nodeType) return a.length; if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0; var b = 0;
            je(a.childNodes, function(a) { b += me(a) }); return b },
        oe = function(a) { return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1) }; var pe = { rectangle: 1, horizontal: 2, vertical: 4 };

    function qe(a, b) { for (var c = ["width", "height"], d = 0; d < c.length; d++) { var e = "google_ad_" + c[d]; if (!b.hasOwnProperty(e)) { var f = C(a[c[d]]);
                f = null === f ? null : Math.round(f);
                null != f && (b[e] = f) } } } var re = function(a, b) { return !((Hb.test(b.google_ad_width) || Gb.test(a.style.width)) && (Hb.test(b.google_ad_height) || Gb.test(a.style.height))) },
        se = function(a, b) { try { var c = b.document.documentElement.getBoundingClientRect(),
                    d = a.getBoundingClientRect(); var e = { x: d.left - c.left, y: d.top - c.top } } catch (f) { e = null } return (a = e) ? a.y : 0 },
        te = function(a, b) { do { var c = B(a, b); if (c && "fixed" == c.position) return !1 } while (a = a.parentElement); return !0 },
        ue = function(a) { var b = 0,
                c; for (c in pe) - 1 != a.indexOf(c) && (b |= pe[c]); return b },
        ve = function(a, b, c, d, e) { if (ic(a) != a) return jc(a) ? 3 : 16; if (!(488 > H(a))) return 4; if (!(a.innerHeight >= a.innerWidth)) return 5; var f = H(a); if (!f || (f - c) / f > d) a = 6;
            else { if (c = "true" != e.google_full_width_responsive) a: { c = H(a);b = b.parentElement; for (d = 0; 100 > d && b; d++) { if ((e = B(b, a)) && "hidden" == e.overflowX && (e = C(e.width)) && e < c) { c = !0; break a } b = b.parentElement } c = !1 } a = c ? 7 : !0 } return a },
        we = function(a, b, c, d) { var e = ve(b, c, a, .3, d); if (!0 !== e) return e;
            e = H(b);
            a = e - a;
            a = e && 0 <= a ? !0 : e ? -10 > a ? 11 : 0 > a ? 14 : 12 : 10; return "true" == d.google_full_width_responsive || te(c, b) ? a : 9 },
        xe = function(a, b) { if (3 == b.nodeType) return /\S/.test(b.data); if (1 == b.nodeType) { if (/^(script|style)$/i.test(b.nodeName)) return !1; try { var c = B(b, a) } catch (d) {} return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility)) } return !1 },
        ye = function(a, b, c, d, e, f) { if (a = B(c, a)) { var g = C(a.paddingLeft) || 0;
                a = a.direction;
                d = e - d; if (f.google_ad_resize) g = -1 * (d + g) + "px";
                else { for (var h = f = 0; 100 > h && c; h++) f += c.offsetLeft + c.clientLeft - c.scrollLeft, c = c.offsetParent;
                    g = f + g;
                    g = "rtl" == a ? -1 * (d - g) + "px" : -1 * g + "px" } "rtl" == a ? b.style.marginRight = g : b.style.marginLeft = g;
                b.style.width = e + "px";
                b.style.zIndex = 30 } }; var I = function(a, b) { this.i = a;
        this.h = b };
    I.prototype.minWidth = function() { return this.i };
    I.prototype.height = function() { return this.h };
    I.prototype.a = function(a) { return 300 < a && 300 < this.h ? this.i : Math.min(1200, Math.round(a)) };
    I.prototype.f = function(a) { return this.a(a) + "x" + this.height() };
    I.prototype.b = function() {}; var J = function(a, b, c, d) { d = void 0 === d ? function(a) { return a } : d; var e; return a.style && a.style[c] && d(a.style[c]) || (e = B(a, b)) && e[c] && d(e[c]) || null },
        ze = function(a) { return function(b) { return b.minWidth() <= a } },
        Ce = function(a, b, c, d) { var e = a && Ae(c, b),
                f = Be(b, d); return function(a) { return !(e && a.height() >= f) } },
        De = function(a) { return function(b) { return b.height() <= a } },
        Ae = function(a, b) { return se(a, b) < ie(b).clientHeight - 100 },
        Ee = function(a, b) { var c = Infinity;
            do { var d = J(b, a, "height", C);
                d && (c = Math.min(c, d));
                (d = J(b, a, "maxHeight", C)) && (c = Math.min(c, d)) } while ((b = b.parentElement) && "HTML" != b.tagName); return c },
        Fe = function(a, b) { var c = J(b, a, "height", C); if (c) return c; var d = b.style.height;
            b.style.height = "inherit";
            c = J(b, a, "height", C);
            b.style.height = d; if (c) return c;
            c = Infinity;
            do(d = b.style && C(b.style.height)) && (c = Math.min(c, d)), (d = J(b, a, "maxHeight", C)) && (c = Math.min(c, d)); while ((b = b.parentElement) && "HTML" != b.tagName); return c },
        Be = function(a, b) { var c = a.google_unique_id; return b && 0 == ("number" === typeof c ? c : 0) ? Math.max(250, 2 * ie(a).clientHeight / 3) : 250 }; var Ge = function(a) { if (1 != a.nodeType) var b = !1;
        else if (b = "INS" == a.tagName) a: { b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : []; for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0; for (d = 0; d < b.length; ++d)
                if (!c[b[d]]) { b = !1; break a }
            b = !0 }
        return b }; var He = function(a, b) { for (var c = 0; c < b.length; c++) { var d = b[c],
                e = Pa(d.Ga);
            a[e] = d.value } }; var Ie = { 1: 1, 2: 2, 3: 3, 0: 0 },
        Je = function(a) { return null != a ? Ie[a] : a },
        Ke = { 1: 0, 2: 1, 3: 2, 4: 3 }; var Le = function(a, b) { if (!a) return !1;
            a = B(a, b); if (!a) return !1;
            a = a.cssFloat || a.styleFloat; return "left" == a || "right" == a },
        Me = function(a) { for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling; return a ? a : null },
        Ne = function(a) { return !!a.nextSibling || !!a.parentNode && Ne(a.parentNode) }; var Oe = function(a, b, c) { this.a = l;
            this.i = a;
            this.h = b;
            this.f = c || null;
            this.b = !1 },
        Qe = function(a, b) { if (a.b) return !0; try { var c = a.a.localStorage.getItem("google_ama_settings"); var d = c ? new zd(c ? JSON.parse(c) : null) : null } catch (h) { d = null } if (null !== d && Za(d, 2)) return a = a.a.google_ama_state = a.a.google_ama_state || {}, a.eatf = !0, yd(7, [!0, 0, !1]), !0;
            d = 0; var e = ab(a.h, vc, 1); for (c = 0; c < e.length; c++) { var f = e[c]; if (1 == y(f, 8)) { var g = $a(f, tc, 4); if (g && 2 == y(g, 1) && (d++, Pe(a, f, b))) return a.b = !0, a = a.a.google_ama_state = a.a.google_ama_state || {}, a.placement = c, yd(7, [!1, d, !0]), !0 } } yd(7, [!1, d, !1]); return !1 },
        Pe = function(a, b, c) { if (1 != y(b, 8)) return !1; var d = $a(b, rc, 1); if (!d) return !1; var e = y(d, 7); if (y(d, 1) || y(d, 3) || 0 < Ya(d, 4).length) { var f = y(d, 3),
                    g = y(d, 1),
                    h = Ya(d, 4);
                e = y(d, 2); var k = y(d, 5);
                d = Je(y(d, 6)); var m = "";
                g && (m += g);
                f && (m += "#" + oe(f)); if (h)
                    for (f = 0; f < h.length; f++) m += "." + oe(h[f]);
                e = (h = m) ? new ke(h, e, k, d) : null } else e = e ? new ke(e, y(d, 2), y(d, 5), Je(y(d, 6))) : null; if (!e) return !1;
            k = []; try { k = a.a.document.querySelectorAll(e.h) } catch (r) {} if (k.length) { h = k.length; if (0 < h) { d = Array(h); for (f = 0; f < h; f++) d[f] = k[f];
                    k = d } else k = [];
                k = le(e, k);
                q(e.b) && (h = e.b, 0 > h && (h += k.length), k = 0 <= h && h < k.length ? [k[h]] : []); if (q(e.f)) { h = []; for (d = 0; d < k.length; d++) f = ne(k[d]), g = e.f, 0 > g && (g += f.length), 0 <= g && g < f.length && h.push(f[g]);
                    k = h } e = k } else e = []; if (0 == e.length) return !1;
            e = e[0];
            k = y(b, 2);
            k = Ke[k];
            k = void 0 !== k ? k : null; if (!(h = null == k)) { a: { h = a.a; switch (k) {
                        case 0:
                            h = Le(Me(e), h); break a;
                        case 3:
                            h = Le(e, h); break a;
                        case 2:
                            d = e.lastChild;
                            h = Le(d ? 1 == d.nodeType ? d : Me(d) : null, h); break a } h = !1 } if (c = !h && !(!c && 2 == k && !Ne(e))) c = 1 == k || 2 == k ? e : e.parentNode, c = !(c && !Ge(c) && 0 >= c.offsetWidth);h = !c } if (h) return !1;
            b = $a(b, sc, 3);
            h = {};
            b && (h.da = y(b, 1), h.W = y(b, 2), h.na = !!y(b, 3));
            b = a.a;
            c = a.f;
            d = a.i;
            f = b.document;
            a = tb(new sb(f), "DIV");
            g = a.style;
            g.textAlign = "center";
            g.width = "100%";
            g.height = "auto";
            g.clear = h.na ? "both" : "none";
            h.ra && He(g, h.ra);
            f = tb(new sb(f), "INS");
            g = f.style;
            g.display = "block";
            g.margin = "auto";
            g.backgroundColor = "transparent";
            h.da && (g.marginTop = h.da);
            h.W && (g.marginBottom = h.W);
            h.ma && He(g, h.ma);
            a.appendChild(f);
            f.setAttribute("data-ad-format", "auto");
            h = []; if (g = c && c.Y) a.className = g.join(" ");
            f.className = "adsbygoogle";
            f.setAttribute("data-ad-client", d);
            h.length && f.setAttribute("data-ad-channel", h.join("+"));
            a: { try { switch (k) {
                        case 0:
                            e.parentNode && e.parentNode.insertBefore(a, e); break;
                        case 3:
                            var n = e.parentNode; if (n) { var u = e.nextSibling; if (u && u.parentNode != n)
                                    for (; u && 8 == u.nodeType;) u = u.nextSibling;
                                n.insertBefore(a, u) } break;
                        case 1:
                            e.insertBefore(a, e.firstChild); break;
                        case 2:
                            e.appendChild(a) } Ge(e) && (e.setAttribute("data-init-display", e.style.display), e.style.display = "block");
                    b: { f.setAttribute("data-adsbygoogle-status", "reserved");f.className += " adsbygoogle-noablate";n = { element: f }; var p = c && c.aa; if (f.hasAttribute("data-pub-vars")) { try { p = JSON.parse(f.getAttribute("data-pub-vars")) } catch (r) { break b } f.removeAttribute("data-pub-vars") } p && (n.params = p);
                        (b.adsbygoogle = b.adsbygoogle || []).push(n) } } catch (r) { a && a.parentNode && (p = a.parentNode, p.removeChild(a), Ge(p) && (p.style.display = p.getAttribute("data-init-display") || "none"));
                    p = !1; break a } p = !0 }
            return p ? !0 : !1 }; var Se = function() { this.b = new Re(this);
            this.a = 0 },
        Te = function(a) { if (0 != a.a) throw Error("Already resolved/rejected."); },
        Re = function(a) { this.a = a };
    Re.prototype.then = function(a, b) { if (this.b) throw Error("Then functions already set.");
        this.b = a;
        this.f = b;
        Ue(this) }; var Ue = function(a) { switch (a.a.a) {
            case 0:
                break;
            case 1:
                a.b && a.b(a.a.h); break;
            case 2:
                a.f && a.f(a.a.f); break;
            default:
                throw Error("Unhandled deferred state."); } }; var Ve = function(a) { this.exception = a },
        We = function(a, b) { this.b = l;
            this.f = a;
            this.a = b };
    We.prototype.start = function() { this.h() };
    We.prototype.h = function() { try { switch (this.b.document.readyState) {
                case "complete":
                case "interactive":
                    Qe(this.f, !0);
                    Xe(this); break;
                default:
                    Qe(this.f, !1) ? Xe(this) : this.b.setTimeout(ya(this.h, this), 100) } } catch (a) { Xe(this, a) } }; var Xe = function(a, b) { try { var c = a.a,
                d = new Ve(b);
            Te(c);
            c.a = 1;
            c.h = d;
            Ue(c.b) } catch (e) { a = a.a, b = e, Te(a), a.a = 2, a.f = b, Ue(a.b) } }; var Ye = function(a) { ud(a, { atf: 1 }) },
        Ze = function(a, b) {
            (a.google_ama_state = a.google_ama_state || {}).exception = b;
            ud(a, { atf: 0 }) }; var $e = function() { this.debugCard = null;
        this.debugCardRequested = !1 }; var jd = function(a) { try { var b = l.google_ad_modifications; if (null != b) { var c = Da(b.eids, b.loeids);
                    null != c && 0 < c.length && (a.eid = c.join(",")) } } catch (d) {} },
        id = function(a) { a.shv = Sb() };
    F.h = !Tb; var bf = function(a, b) { if (!a) return !1;
            a = a.hash; if (!a || !a.indexOf) return !1; if (-1 != a.indexOf(b)) return !0;
            b = af(b); return "go" != b && -1 != a.indexOf(b) ? !0 : !1 },
        af = function(a) { var b = "";
            ac(a.split("_"), function(a) { b += a.substr(0, 2) }); return b }; var cf = { 9: "400", 10: "100", 11: "0.10", 12: "0.02", 13: "0.001", 14: "300", 15: "100", 19: "0.01", 22: "0.01", 23: "0.2", 24: "0.05", 27: "0.001", 28: "0.001", 29: "0.01", 34: "0.001", 37: "0.0", 40: "0.15", 43: "0.1", 47: "0.01", 56: "0.001", 60: "0.03", 66: "0.0", 67: "0.04", 76: "0.004", 77: "true", 78: "0.1", 79: "1200", 82: "3", 83: "1.0", 92: "0.02", 96: "700", 97: "10", 98: "0.01", 99: "600", 100: "100", 103: "0.01", 108: "500", 109: "100", 111: "0.1", 112: "0", 114: "0.01", 115: "170", 116: "30", 117: "0.02", 118: "false", 120: "0", 121: "1000", 122: "true", 124: "0.01", 125: "0.01", 126: "0.001", 127: "0.1", 128: "false", 129: "0.02", 135: "0.0", 136: "0.02", 137: "0.01", 138: "0.01", 141: "0.1", 142: "0.01", 143: "0.02" }; var df = null,
        ef = function() { this.a = cf },
        L = function(a, b) { a = parseFloat(a.a[b]); return isNaN(a) ? 0 : a },
        ff = function(a, b) { return Jb(a.a[b], !1) },
        gf = function() { df || (df = new ef); return df };
    (function(a) { var b = { msg_type: /^[a-zA-Z0-9_-]+$/ },
            c = function(a) { a.o && (b[a.name] = a.o) };
        ac(oc, c); for (var d = 0; d < pc.length; d++) c(pc[d]); for (d = 0; d < a.length; d++) c(a[d]); return new fe(b) })([]); var hf = function(a, b, c, d, e) { d = void 0 === d ? "" : d; var f = a.createElement("link"); try { f.rel = c; if (v(c.toLowerCase(), "stylesheet")) var g = mb(b);
            else { if (b instanceof lb) var h = mb(b);
                else { if (b instanceof ob)
                        if (b instanceof ob && b.constructor === ob && b.ka === nb) var k = b.L;
                        else ta(b), k = "type_error:SafeUrl";
                    else { if (b instanceof ob) var m = b;
                        else b = "object" == typeof b && b.f ? b.a() : String(b), pb.test(b) || (b = "about:invalid#zClosurez"), m = qb(b);
                        k = m.a() } h = k } g = h } f.href = g } catch (n) { return } d && "preload" == c && (f.as = d);
        e && (f.nonce = e); if (a = a.getElementsByTagName("head")[0]) try { a.appendChild(f) } catch (n) {} }; var jf = function(a, b) { b = void 0 === b ? "" : b; try { var c = Lb({}, JSON.parse(a.localStorage.getItem("google_adsense_labs"))) } catch (d) { c = {} } a = c;
        c = function(a) { a ? (a = String(a).split(","), a = 0 <= Ba(a, "11")) : a = !1; return a }; return b ? c(a[b]) : Sa(a, c) }; var kf = new Pc(170, 199),
        lf = new Pc(200, 399),
        mf = new Pc(400, 499),
        nf = new Pc(500, 599),
        of = new Pc(600, 699),
        pf = new Pc(700, 799); var M = function(a, b) { b && a.push(b) },
        qf = function(a, b) { for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
            d = jc(a) || a;
            d = (d = (d = d.location && d.location.hash) && (d.match(/google_plle=([\d,]+)/) || d.match(/deid=([\d,]+)/))) && d[1]; var e; if (e = !!d) a: { d = za(v, d);e = c.length; for (var f = ma(c) ? c.split("") : c, g = 0; g < e; g++)
                    if (g in f && d.call(void 0, f[g], g, c)) { e = !0; break a }
                e = !1 }
            return e },
        N = function(a, b, c) { for (var d = 0; d < c.length; d++)
                if (qf(a, c[d])) return c[d];
            a: { if (!Fb() && (a = Math.random(), a < b)) { a = Cb(l);
                    b = c[Math.floor(a * c.length)]; break a } b = null }
            return b },
        rf = function(a, b, c, d, e, f) { f = void 0 === f ? 1 : f; for (var g = 0; g < e.length; g++)
                if (qf(a, e[g])) return e[g];
            f = void 0 === f ? 1 : f;
            0 >= d ? c = null : (g = new Oc(c, c + d - 1), (d = d % f || d / f % e.length) || (b = b.a, d = !(b.start <= g.start && b.a >= g.a)), d ? c = null : (a = Qc(a), c = null !== a && g.start <= a && g.a >= a ? e[Math.floor((a - c) / f) % e.length] : null)); return c }; var sf = function(a) { if (!a) return "";
        (a = a.toLowerCase()) && "ca-" != a.substring(0, 3) && (a = "ca-" + a); return a }; var tf = function(a, b, c, d) { d = void 0 === d ? "" : d; var e = ["<iframe"],
                f; for (f in a) a.hasOwnProperty(f) && e.push(f + "=" + a[f]);
            e.push('style="' + ("left:0;position:absolute;top:0;width:" + b + "px;height:" + c + "px;") + '"');
            e.push("></iframe>");
            a = a.id;
            b = "border:none;height:" + c + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + b + "px;background-color:transparent;"; return ['<ins id="', a + "_expand", '" style="display:inline-table;', b, void 0 === d ? "" : d, '"><ins id="', a + "_anchor", '" style="display:block;', b, '">', e.join(" "), "</ins></ins>"].join("") },
        uf = function(a, b, c) { if (A(a.document.getElementById(b).contentWindow)) a = a.document.getElementById(b).contentWindow, b = a.document, b.body && b.body.firstChild || (/Firefox/.test(navigator.userAgent) ? b.open("text/html", "replace") : b.open(), a.google_async_iframe_close = !0, b.write(c));
            else { a = a.document.getElementById(b).contentWindow;
                c = String(c);
                b = ['"']; for (var d = 0; d < c.length; d++) { var e = c.charAt(d),
                        f = e.charCodeAt(0),
                        g = d + 1,
                        h; if (!(h = Na[e])) { if (!(31 < f && 127 > f))
                            if (f = e, f in Oa) e = Oa[f];
                            else if (f in Na) e = Oa[f] = Na[f];
                        else { h = f.charCodeAt(0); if (31 < h && 127 > h) e = f;
                            else { if (256 > h) { if (e = "\\x", 16 > h || 256 < h) e += "0" } else e = "\\u", 4096 > h && (e += "0");
                                e += h.toString(16).toUpperCase() } e = Oa[f] = e } h = e } b[g] = h } b.push('"');
                a.location.replace("javascript:" + b.join("")) } }; var vf = null; var O = function(a, b, c, d) { d = void 0 === d ? !1 : d;
        I.call(this, a, b);
        this.C = c;
        this.pa = d };
    ha(O, I);
    O.prototype.M = function() { return this.C };
    O.prototype.b = function(a, b, c, d) { 1 != c.google_ad_resize && (d.style.height = this.height() + "px") }; var wf = function(a) { return function(b) { return !!(b.C & a) } }; var P = function(a, b, c, d, e, f, g, h, k, m, n) { this.N = a;
            this.a = b;
            this.C = void 0 === c ? null : c;
            this.G = void 0 === d ? null : d;
            this.b = void 0 === e ? null : e;
            this.f = void 0 === f ? null : f;
            this.B = void 0 === g ? null : g;
            this.D = void 0 === h ? null : h;
            this.h = void 0 === k ? null : k;
            this.i = void 0 === m ? null : m;
            this.F = void 0 === n ? null : n;
            this.H = this.u = this.s = null },
        xf = function(a, b, c) { null != a.C && (c.google_responsive_formats = a.C);
            null != a.G && (c.google_safe_for_responsive_override = a.G);
            null != a.b && (!0 === a.b ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = a.b));
            null != a.f && !0 !== a.f && (c.gfwrnher = a.f); var d = a.a.a(b),
                e = a.a.height();
            1 != c.google_ad_resize && (c.google_ad_width = d, c.google_ad_height = e, c.google_ad_format = a.a.f(b), c.google_responsive_auto_format = a.N, c.google_ad_resizable = !0, c.google_override_format = 1, c.google_loader_features_used = 128, !0 === a.b && (c.gfwrnh = a.a.height() + "px"));
            null != a.B && (c.gfwroml = a.B);
            null != a.D && (c.gfwromr = a.D);
            null != a.h && (c.gfwroh = a.h, c.google_resizing_height = a.h);
            null != a.i && (c.gfwrow = a.i, c.google_resizing_width = a.i);
            null != a.F && (c.gfwroz = a.F);
            null != a.s && (c.gml = a.s);
            null != a.u && (c.gmr = a.u);
            null != a.H && (c.gzi = a.H);
            b = gc();
            b = jc(b) || b; if (bf(b.location, "google_responsive_slot_debug") || qf(b, Ud.c, Ud.g)) c.ds = "outline:thick dashed " + (d && e ? !0 !== a.b || !0 !== a.f ? "#ffa500" : "#0f0" : "#f00") + " !important;" }; var yf = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"],
        Q = {},
        zf = (Q.image_stacked = 1 / 1.91, Q.image_sidebyside = 1 / 3.82, Q.mobile_banner_image_sidebyside = 1 / 3.82, Q.pub_control_image_stacked = 1 / 1.91, Q.pub_control_image_sidebyside = 1 / 3.82, Q.pub_control_image_card_stacked = 1 / 1.91, Q.pub_control_image_card_sidebyside = 1 / 3.74, Q.pub_control_text = 0, Q.pub_control_text_card = 0, Q),
        R = {},
        Af = (R.image_stacked = 80, R.image_sidebyside = 0, R.mobile_banner_image_sidebyside = 0, R.pub_control_image_stacked = 80, R.pub_control_image_sidebyside = 0, R.pub_control_image_card_stacked = 85, R.pub_control_image_card_sidebyside = 0, R.pub_control_text = 80, R.pub_control_text_card = 80, R),
        Bf = {},
        Cf = (Bf.pub_control_image_stacked = 100, Bf.pub_control_image_sidebyside = 200, Bf.pub_control_image_card_stacked = 150, Bf.pub_control_image_card_sidebyside = 250, Bf.pub_control_text = 100, Bf.pub_control_text_card = 150, Bf),
        Df = function(a, b) { I.call(this, a, b) };
    ha(Df, I);
    Df.prototype.a = function(a) { return Math.min(1200, Math.max(this.minWidth(), Math.round(a))) }; var Ef = function(a) { var b = 0;
            ac(yf, function(c) { null != a[c] && ++b }); if (0 === b) return !1; if (b === yf.length) return !0; throw new G("Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."); },
        If = function(a, b) { Ff(a, b); if (a < Rb) { if (wb()) { Gf(b, "mobile_banner_image_sidebyside", 1, 12); var c = +b.google_content_recommendation_columns_num;
                    c = (a - 8 * c - 8) / c; var d = b.google_content_recommendation_ui_type;
                    b = b.google_content_recommendation_rows_num - 1; return new P(9, new Df(a, Math.floor(c / 1.91 + 70) + Math.floor((c * zf[d] + Af[d]) * b + 8 * b + 8))) } Gf(b, "image_sidebyside", 1, 13); return new P(9, Hf(a)) } Gf(b, "image_stacked", 4, 2); return new P(9, Hf(a)) };

    function Hf(a) { return 1200 <= a ? new Df(1200, 600) : 850 <= a ? new Df(a, Math.floor(.5 * a)) : 550 <= a ? new Df(a, Math.floor(.6 * a)) : 468 <= a ? new Df(a, Math.floor(.7 * a)) : new Df(a, Math.floor(3.44 * a)) } var Jf = function(a, b) { Ff(a, b); var c = b.google_content_recommendation_ui_type.split(","),
            d = b.google_content_recommendation_columns_num.split(","),
            e = b.google_content_recommendation_rows_num.split(",");
        a: { if (c.length == d.length && d.length == e.length) { if (1 == c.length) { var f = 0; break a } if (2 == c.length) { f = a < Rb ? 0 : 1; break a } throw new G("The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while " + ("you are providing " + c.length + ' parameters. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".')); } if (c.length != d.length) throw new G('The parameter length of data-matched-content-ui-type does not match data-matched-content-columns-num. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".'); throw new G('The parameter length of data-matched-content-columns-num does not match data-matched-content-rows-num. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".'); } c = c[f];
        c = 0 == c.lastIndexOf("pub_control_", 0) ? c : "pub_control_" + c;
        d = +d[f]; for (var g = Cf[c], h = d; a / h < g && 1 < h;) h--;
        h !== d && l.console && l.console.warn("adsbygoogle warning: data-matched-content-columns-num " + d + " is too large. We override it to " + h + ".");
        d = h;
        e = +e[f];
        Gf(b, c, d, e); if (Number.isNaN(d) || 0 === d) throw new G("Wrong value for data-matched-content-columns-num"); if (Number.isNaN(e) || 0 === e) throw new G("Wrong value for data-matched-content-rows-num");
        b = Math.floor(((a - 8 * d - 8) / d * zf[c] + Af[c]) * e + 8 * e + 8); if (1500 < a) throw new G("Calculated slot width is too large: " + a); if (1500 < b) throw new G("Calculated slot height is too large: " + b); return new P(9, new Df(a, b)) };

    function Ff(a, b) { if (0 >= a) throw new G("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container."); }

    function Gf(a, b, c, d) { a.google_content_recommendation_ui_type = b;
        a.google_content_recommendation_columns_num = c;
        a.google_content_recommendation_rows_num = d }; var Kf = function(a, b) { I.call(this, a, b) };
    ha(Kf, I);
    Kf.prototype.a = function() { return this.minWidth() };
    Kf.prototype.b = function(a, b, c, d) { var e = this.a(b);
        ye(a, d, d.parentElement, b, e, c);
        1 != c.google_ad_resize && (d.style.height = this.height() + "px") }; var Lf = function(a) { return function(b) { for (var c = a.length - 1; 0 <= c; --c)
                    if (!a[c](b)) return !1; return !0 } },
        Mf = function(a, b, c) { for (var d = a.length, e = null, f = 0; f < d; ++f) { var g = a[f]; if (b(g)) { if (!c || c(g)) return g;
                    null === e && (e = g) } } return e }; var S = [new O(970, 90, 2), new O(728, 90, 2), new O(468, 60, 2), new O(336, 280, 1), new O(320, 100, 2), new O(320, 50, 2), new O(300, 600, 4), new O(300, 250, 1), new O(250, 250, 1), new O(234, 60, 2), new O(200, 200, 1), new O(180, 150, 1), new O(160, 600, 4), new O(125, 125, 1), new O(120, 600, 4), new O(120, 240, 4), new O(120, 120, 1, !0)],
        Nf = [S[6], S[12], S[3], S[0], S[7], S[14], S[1], S[8], S[10], S[4], S[15], S[2], S[11], S[5], S[13], S[9], S[16]]; var Pf = function(a, b, c, d, e) { "false" != e.google_full_width_responsive || c.location && "#gfwrffwaifhp" == c.location.hash ? "auto" == b || 0 < (ue(b) & 1) || "autorelaxed" == b && cc(kc(c), Yd.g) || Of(b) || 1 == e.google_ad_resize ? (b = we(a, c, d, e), c = !0 !== b ? { j: a, l: b } : { j: H(c) || a, l: !0 }) : c = { j: a, l: 2 } : c = { j: a, l: 1 };
            b = c.l; return !0 !== b ? { j: a, l: b } : d.parentElement ? { j: c.j, l: b } : { j: a, l: b } },
        Sf = function(a, b, c, d, e) { var f = ld(247, nd, function() { return Pf(a, b, c, d, e) }),
                g = f.j;
            f = f.l; var h = !0 === f,
                k = J(d, c, "width", C) || e.google_ad_width || 0,
                m = J(d, c, "height", C) || e.google_ad_height || 0,
                n = Qf(g, b, c, d, e, h);
            g = n.w;
            h = n.v; var u = n.M;
            n = n.qa; var p = Rf(b, u),
                r, K = (r = J(d, c, "marginLeft", C)) ? r + "px" : "",
                V = (r = J(d, c, "marginRight", C)) ? r + "px" : "";
            r = J(d, c, "zIndex") || ""; return new P(p, g, u, n, f, h, K, V, m, k, r) },
        Of = function(a) { return "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a) },
        Qf = function(a, b, c, d, e, f) { b = "auto" == b ? .25 >= a / Math.min(1200, H(c)) ? 4 : 3 : ue(b); var g, h = wb() && !Ae(d, c) && (g = te(d, c)),
                k = wb() && Ae(d, c) && (cc(kc(c), Od.A) || cc(kc(c), Od.c) || ff(gf(), 122) || e.google_resizing_allowed) && (g = te(d, c)) && !cc(kc(c), Od.c) && (cc(kc(c), Od.A) || ff(gf(), 122) || e.google_resizing_allowed),
                m = (h ? Nf : S).slice(0),
                n = 488 > H(c);
            n = [ze(a), Tf(n), Ce(n, c, d, k), wf(b)];
            null != e.google_max_responsive_height && n.push(De(e.google_max_responsive_height)); var u = [function(a) { return !a.pa }]; if (h || k) h = h ? Ee(c, d) : Fe(c, d), u.push(De(h)); var p = Mf(m, Lf(n), Lf(u)); if (!p) throw new G("No slot size for availableWidth=" + a);
            m = ld(248, nd, function() { var b;
                a: if (f) { if (e.gfwrnh && (b = C(e.gfwrnh))) { b = { w: new Kf(a, b), v: !0 }; break a } if ("true" != e.google_full_width_responsive && Ae(d, c) && !e.google_resizing_allowed) b = { w: new Kf(a, p.height()), v: 101 };
                    else { b = a / 1.2; var g = e.google_resizing_allowed || "true" == e.google_full_width_responsive ? Infinity : Ee(c, d);
                        g = Math.min(b, g); if (g < .5 * b || 100 > g) g = b;
                        b = { w: new Kf(a, Math.floor(g)), v: g < b ? 102 : !0 } } } else b = { w: p, v: 100 }; return b }); return { w: m.w, v: m.v, M: b, qa: g } },
        Rf = function(a, b) { if ("auto" == a) return 1; switch (b) {
                case 2:
                    return 2;
                case 1:
                    return 3;
                case 4:
                    return 4;
                case 3:
                    return 5;
                case 6:
                    return 6;
                case 5:
                    return 7;
                case 7:
                    return 8 } throw Error("bad mask"); },
        Tf = function(a) { return function(b) { return !(320 == b.minWidth() && (a && 50 == b.height() || !a && 100 == b.height())) } }; var Uf = { "image-top": function(a) { return 600 >= a ? 284 + .414 * (a - 250) : 429 }, "image-middle": function(a) { return 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500) }, "image-side": function(a) { return 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500) }, "text-only": function(a) { return 500 >= a ? 187 - .228 * (a - 250) : 130 }, "in-article": function(a) { return 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200 } },
        Vf = function(a, b) { I.call(this, a, b) };
    ha(Vf, I);
    Vf.prototype.a = function() { return Math.min(1200, this.minWidth()) }; var Wf = function(a, b, c, d, e) { var f = e.google_ad_layout || "image-top"; if ("in-article" == f && "false" != e.google_full_width_responsive) { var g = ve(b, c, a, .2, e); if (!0 !== g) e.gfwrnwer = g;
            else if (g = H(b)) { e.google_full_width_responsive_allowed = !0; var h = c.parentElement; if (h) { b: for (var k = c, m = 0; 100 > m && k.parentElement; ++m) { for (var n = k.parentElement.childNodes, u = 0; u < n.length; ++u) { var p = n[u]; if (p != k && xe(b, p)) break b } k = k.parentElement;
                        k.style.width = "100%";
                        k.style.height = "auto" } ye(b, c, h, a, g, e);a = g } } } if (250 > a) throw new G("Fluid responsive ads must be at least 250px wide: availableWidth=" + a);
        b = Math.min(1200, Math.floor(a)); if (d && "in-article" != f) { f = Math.ceil(d); if (50 > f) throw new G("Fluid responsive ads must be at least 50px tall: height=" + f); return new P(11, new I(b, f)) } if ("in-article" != f && (d = e.google_ad_layout_key)) { f = "" + d;
            d = Math.pow(10, 3); if (c = (e = f.match(/([+-][0-9a-z]+)/g)) && e.length) { a = []; for (g = 0; g < c; g++) a.push(parseInt(e[g], 36) / d);
                d = a } else d = null; if (!d) throw new G("Invalid data-ad-layout-key value: " + f);
            f = (b + -725) / 1E3;
            e = 0;
            c = 1;
            a = d.length; for (g = 0; g < a; g++) e += d[g] * c, c *= f;
            f = Math.ceil(1E3 * e - -725 + 10); if (isNaN(f)) throw new G("Invalid height: height=" + f); if (50 > f) throw new G("Fluid responsive ads must be at least 50px tall: height=" + f); if (1200 < f) throw new G("Fluid responsive ads must be at most 1200px tall: height=" + f); return new P(11, new I(b, f)) } d = Uf[f]; if (!d) throw new G("Invalid data-ad-layout value: " + f);
        d = Math.ceil(d(b)); return new P(11, "in-article" == f ? new Vf(b, d) : new I(b, d)) }; var T = function(a, b) { I.call(this, a, b) };
    ha(T, I);
    T.prototype.a = function() { return this.minWidth() };
    T.prototype.f = function(a) { return I.prototype.f.call(this, a) + "_0ads_al" }; var Xf = [new T(728, 15), new T(468, 15), new T(200, 90), new T(180, 90), new T(160, 90), new T(120, 90)],
        Yf = function(a, b, c, d) { var e = 90;
            d = void 0 === d ? 130 : d;
            e = void 0 === e ? 30 : e; var f = Mf(Xf, ze(a)); if (!f) throw new G("No link unit size for width=" + a + "px");
            a = Math.min(a, 1200);
            f = f.height();
            b = Math.max(f, b);
            a = (new P(10, new T(a, Math.min(b, 15 == f ? e : d)))).a;
            b = a.minWidth();
            a = a.height();
            15 <= c && (a = c); return new P(10, new T(b, a)) },
        Zf = function(a, b, c, d) { if (!cc(kc(b), Gd.g)) return a; if ("false" == d.google_full_width_responsive) return d.google_full_width_responsive_allowed = !1, d.gfwrnwer = 1, a; var e = we(a, b, c, d); if (!0 !== e) return d.google_full_width_responsive_allowed = !1, d.gfwrnwer = e, a;
            e = H(b); if (!e) return a;
            d.google_full_width_responsive_allowed = !0;
            ye(b, c, c.parentElement, a, e, d); return e }; var $f = function(a, b, c, d, e) { var f;
        (f = H(b)) ? 488 > H(b) ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0, ye(b, c, c.parentElement, a, f, e), f = { j: f, l: !0 }) : f = { j: a, l: 5 } : f = { j: a, l: 4 }: f = { j: a, l: 10 }; var g = f;
        f = g.j;
        g = g.l; if (!0 !== g || a == f) return new P(12, new I(a, d), null, !0, g, 100);
        a = Qf(f, "auto", b, c, e, !0); return new P(12, a.w, a.M, !0, g, a.v) }; var ag = function(a) { var b = a.google_ad_format; if ("autorelaxed" == b) return Ef(a) ? 9 : 5; if (Of(b)) return 1; if ("link" == b) return 4; if ("fluid" == b) return 8 },
        cg = function(a, b, c, d, e) { e = b.offsetWidth || (c.google_ad_resize || (void 0 === e ? !1 : e)) && J(b, d, "width", C) || c.google_ad_width || 0; var f = (f = bg(a, e, b, c, d)) ? f : Sf(e, c.google_ad_format, d, b, c);
            f.a.b(d, e, c, b);
            xf(f, e, c);
            1 != a && (a = f.a.height(), b.style.height = a + "px") },
        bg = function(a, b, c, d, e) { var f = d.google_ad_height || J(c, e, "height", C); switch (a) {
                case 5:
                    return a = ld(247, nd, function() { return Pf(b, d.google_ad_format, e, c, d) }), f = a.j, a = a.l, !0 === a && b != f && ye(e, c, c.parentElement, b, f, d), !0 === a ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = a), If(f, d);
                case 9:
                    return Jf(b, d);
                case 4:
                    return a = Zf(b, e, c, d), Yf(a, Fe(e, c), f, D(e, Ed.P) ? 250 : 190);
                case 8:
                    return Wf(b, e, c, f, d);
                case 10:
                    return $f(b, e, c, f, d) } }; var U = function(a) { this.h = [];
            this.b = a || window;
            this.a = 0;
            this.f = null;
            this.B = 0 },
        dg;
    U.prototype.D = function(a, b) { 0 != this.a || 0 != this.h.length || b && b != window ? this.i(a, b) : (this.a = 2, this.u(new eg(a, window))) };
    U.prototype.i = function(a, b) { this.h.push(new eg(a, b || this.b));
        fg(this) };
    U.prototype.G = function(a) { this.a = 1; if (a) { var b = md(188, ya(this.s, this, !0));
            this.f = this.b.setTimeout(b, a) } };
    U.prototype.s = function(a) { a && ++this.B;
        1 == this.a && (null != this.f && (this.b.clearTimeout(this.f), this.f = null), this.a = 0);
        fg(this) };
    U.prototype.H = function() { return !(!window || !Array) };
    U.prototype.F = function() { return this.B }; var fg = function(a) { var b = md(189, ya(a.N, a));
        a.b.setTimeout(b, 0) };
    U.prototype.N = function() { if (0 == this.a && this.h.length) { var a = this.h.shift();
            this.a = 2; var b = md(190, ya(this.u, this, a));
            a.a.setTimeout(b, 0);
            fg(this) } };
    U.prototype.u = function(a) { this.a = 0;
        a.b() }; var gg = function(a) { try { return a.sz() } catch (b) { return !1 } },
        hg = function(a) { return !!a && ("object" === typeof a || "function" === typeof a) && gg(a) && bc(a.nq) && bc(a.nqa) && bc(a.al) && bc(a.rl) },
        ig = function() { if (dg && gg(dg)) return dg; var a = Bd(),
                b = a.google_jobrunner; return hg(b) ? dg = b : a.google_jobrunner = dg = new U(a) },
        jg = function(a, b) { ig().nq(a, b) },
        kg = function(a, b) { ig().nqa(a, b) };
    U.prototype.nq = U.prototype.D;
    U.prototype.nqa = U.prototype.i;
    U.prototype.al = U.prototype.G;
    U.prototype.rl = U.prototype.s;
    U.prototype.sz = U.prototype.H;
    U.prototype.tc = U.prototype.F; var eg = function(a, b) { this.b = a;
        this.a = b }; var lg = function(a, b) { var c = jc(b); if (c) { c = H(c); var d = B(a, b) || {},
                e = d.direction; if ("0px" === d.width && "none" != d.cssFloat) return -1; if ("ltr" === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left)); if ("rtl" === e && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2))) } return -1 }; var ng = function(a) { var b = this;
        this.a = a;
        a.google_iframe_oncopy || (a.google_iframe_oncopy = { handlers: {}, upd: function(a, d) { var c = mg("rx", a),
                    f = Number;
                a: { if (a && (a = a.match("dt=([^&]+)")) && 2 == a.length) { a = a[1]; break a } a = "" } f = f(a);
                f = (new Date).getTime() - f;
                c = c.replace(/&dtd=(\d+|-?M)/, "&dtd=" + (1E5 <= f ? "M" : 0 <= f ? f : "-M"));
                b.set(d, c); return c } });
        this.b = a.google_iframe_oncopy };
    ng.prototype.set = function(a, b) { var c = this;
        this.b.handlers[a] = b;
        this.a.addEventListener && this.a.addEventListener("load", function() { var b = c.a.document.getElementById(a); try { var e = b.contentWindow.document; if (b.onload && e && (!e.body || !e.body.firstChild)) b.onload() } catch (f) {} }, !1) }; var mg = function(a, b) { var c = new RegExp("\\b" + a + "=(\\d+)"),
                d = c.exec(b);
            d && (b = b.replace(c, a + "=" + (+d[1] + 1 || 1))); return b },
        og = Ma("var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}"); var pg = {},
        qg = (pg.google_ad_modifications = !0, pg.google_analytics_domain_name = !0, pg.google_analytics_uacct = !0, pg.google_pause_ad_requests = !0, pg); var tg = function() { var a = l;
            this.b = a = void 0 === a ? l : a;
            this.i = "https://securepubads.g.doubleclick.net/static/3p_cookie.html";
            this.a = 2;
            this.f = [];
            this.h = !1;
            a: { a = Ab(!1, 50); var b = xb(l);b && a.unshift(b);a.unshift(l); var c; for (b = 0; b < a.length; ++b) try { var d = a[b],
                        e = rg(d); if (e) { this.a = sg(e); if (2 != this.a) break a;!c && A(d) && (c = d) } } catch (f) {} this.b = c || this.b } },
        vg = function(a) { if (2 != ug(a)) { for (var b = 1 == ug(a), c = 0; c < a.f.length; c++) try { a.f[c](b) } catch (d) {} a.f = [] } },
        wg = function(a) { var b = rg(a.b);
            b && 2 == a.a && (a.a = sg(b)) },
        ug = function(a) { wg(a); return a.a },
        yg = function(a) { var b = xg;
            b.f.push(a); if (2 != b.a) vg(b);
            else if (b.h || (Mb(b.b, "message", function(a) { var c = rg(b.b); if (c && a.source == c && 2 == b.a) { switch (a.data) {
                            case "3p_cookie_yes":
                                b.a = 1; break;
                            case "3p_cookie_no":
                                b.a = 0 } vg(b) } }), b.h = !0), rg(b.b)) vg(b);
            else { a = tb(new sb(b.b.document), "IFRAME");
                a.src = b.i;
                a.name = "detect_3p_cookie";
                a.style.visibility = "hidden";
                a.style.display = "none";
                a.onload = function() { wg(b);
                    vg(b) }; try { b.b.document.body.appendChild(a) } catch (c) {} } },
        rg = function(a) { return a.frames && a.frames[Ta("detect_3p_cookie")] || null },
        sg = function(a) { return Kb(a, "3p_cookie_yes") ? 1 : Kb(a, "3p_cookie_no") ? 0 : 2 }; var zg = /^\.google\.(com?\.)?[a-z]{2,3}$/,
        Ag = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,
        Bg = function(a) { return zg.test(a) && !Ag.test(a) },
        Cg = l,
        xg, Dg = function(a) { a = "https://" + ("adservice" + a + "/adsid/integrator.js"); var b = ["domain=" + encodeURIComponent(l.location.hostname)];
            W[3] >= +new Date && b.push("adsid=" + encodeURIComponent(W[1])); return a + "?" + b.join("&") },
        W, X, Eg = function() { Cg = l;
            W = Cg.googleToken = Cg.googleToken || {}; var a = +new Date;
            W[1] && W[3] > a && 0 < W[2] || (W[1] = "", W[2] = -1, W[3] = -1, W[4] = "", W[6] = "");
            X = Cg.googleIMState = Cg.googleIMState || {};
            Bg(X[1]) || (X[1] = ".google.com"); "array" == ta(X[5]) || (X[5] = []);
            na(X[6]) || (X[6] = !1); "array" == ta(X[7]) || (X[7] = []);
            q(X[8]) || (X[8] = 0) },
        Y = { K: function() { return 0 < X[8] }, ua: function() { X[8]++ }, va: function() { 0 < X[8] && X[8]-- }, wa: function() { X[8] = 0 }, Ha: function() { return !1 }, Z: function() { return X[5] }, X: function(a) { try { a() } catch (b) { l.setTimeout(function() { throw b; }, 0) } }, ba: function() { if (!Y.K()) { var a = l.document,
                        b = function(b) { b = Dg(b);
                            a: { try { var c = qa(); break a } catch (h) {} c = void 0 }
                            var d = c;
                            hf(a, b, "preload", "script", d);
                            c = a.createElement("script");
                            c.type = "text/javascript";
                            d && (c.nonce = d);
                            c.onerror = function() { return l.processGoogleToken({}, 2) };
                            b = vb(b);
                            rb(c, b); try {
                                (a.head || a.body || a.documentElement).appendChild(c), Y.ua() } catch (h) {} },
                        c = X[1];
                    b(c); ".google.com" != c && b(".google.com");
                    b = {}; var d = (b.newToken = "FBT", b);
                    l.setTimeout(function() { return l.processGoogleToken(d, 1) }, 1E3) } } },
        Fg = function(a) { Eg(); var b = Cg.googleToken[5] || 0;
            a && (0 != b || W[3] >= +new Date ? Y.X(a) : (Y.Z().push(a), Y.ba()));
            W[3] >= +new Date && W[2] >= +new Date || Y.ba() },
        Gg = function(a) { l.processGoogleToken = l.processGoogleToken || function(a, c) { var b = a;
                b = void 0 === b ? {} : b;
                c = void 0 === c ? 0 : c;
                a = b.newToken || ""; var e = "NT" == a,
                    f = parseInt(b.freshLifetimeSecs || "", 10),
                    g = parseInt(b.validLifetimeSecs || "", 10),
                    h = b["1p_jar"] || "";
                b = b.pucrd || "";
                Eg();
                1 == c ? Y.wa() : Y.va(); var k = Cg.googleToken = Cg.googleToken || {},
                    m = 0 == c && a && ma(a) && !e && q(f) && 0 < f && q(g) && 0 < g && ma(h);
                e = e && !Y.K() && (!(W[3] >= +new Date) || "NT" == W[1]); var n = !(W[3] >= +new Date) && 0 != c; if (m || e || n) e = +new Date, f = e + 1E3 * f, g = e + 1E3 * g, 1E-5 > Math.random() && Nb("https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + c, void 0), k[5] = c, k[1] = a, k[2] = f, k[3] = g, k[4] = h, k[6] = b, Eg(); if (m || !Y.K()) { c = Y.Z(); for (a = 0; a < c.length; a++) Y.X(c[a]);
                    c.length = 0 } };
            Fg(a) },
        Hg = function(a) { xg = xg || new tg;
            yg(function(b) { b && a() }) }; var Z = Ta("script"),
        Lg = function() { var a = D(z, Pd.g) || D(z, Qd.g);
            a && z.google_sa_impl && !z.document.getElementById("google_shimpl") && (z.google_sa_queue = null, z.google_sl_win = null, z.google_sa_impl = null);
            a && !z.google_sa_queue && (z.google_sa_queue = [], z.google_sl_win = z, z.google_process_slots = function() { return Ig(z) }, a = Jg(), hf(z.document, a, "preload", "script"), !v(w, "Chrome") && !v(w, "CriOS") || v(w, "Edge") ? Bb(z.document, a).id = "google_shimpl" : (a = document.createElement("IFRAME"), a.id = "google_shimpl", a.style.display = "none", z.document.documentElement.appendChild(a), uf(z, "google_shimpl", "<!doctype html><html><body>" + ("<" + Z + ">") + "google_sl_win=window.parent;google_async_iframe_id='google_shimpl';" + ("</" + Z + ">") + Kg() + "</body></html>"), a.contentWindow.document.close())) },
        Ig = md(215, function(a) { var b = a.google_sa_queue,
                c = b.shift();
            a.google_sa_impl || od("shimpl", { t: "no_fn" }); "function" == ta(c) && ld(216, nd, c);
            b.length && a.setTimeout(function() { return Ig(a) }, 0) }),
        Kg = function(a) { return ["<", Z, ' src="', Jg(void 0 === a ? "/show_ads_impl.js" : a), '"></', Z, ">"].join("") },
        Jg = function(a) { a = void 0 === a ? "/show_ads_impl.js" : a; var b = Vb ? "https" : "http";
            a: { if (Tb) try { var c = z.google_cafe_host || z.top.google_cafe_host; if (c) { var d = c; break a } } catch (e) {} d = Yb(void 0) }
            return vd(d, ["/pagead/js/", Sb(), "/r20180604", a, ""].join(""), b) },
        Mg = function(a, b, c, d) { return function() { var e = !1;
                d && ig().al(3E4); try { uf(a, b, c), e = !0 } catch (g) { var f = Bd().google_jobrunner;
                    hg(f) && f.rl() } e && (e = mg("google_async_rrc", c), (new ng(a)).set(b, Mg(a, b, e, !1))) } },
        Ng = function(a) { var b = ["<iframe"];
            ac(a, function(a, d) { null != a && b.push(" " + d + '="' + Ma(a) + '"') });
            b.push("></iframe>"); return b.join("") },
        Og = function() { return vd(Xb(), ["/pagead/html/", Sb(), "/r20180604/zrt_lookup.html#", encodeURIComponent("")].join("")) },
        Pg = function(a) { var b = document.createElement("IFRAME");
            b.id = "google_esf";
            b.name = "google_esf";
            b.src = Og();
            Db(a, function(a, d) { b.setAttribute(d, a) }); return b },
        Qg = function(a, b) { if (!vf) a: { for (var c = Ab(), d = 0; d < c.length; d++) try { var e = c[d].frames.google_esf; if (e) { vf = e; break a } } catch (f) {} vf = null }
            if (!vf) { c = {};
                c = (c.style = "display:none", c); if (/[^a-z0-9-]/.test(a)) return "";
                c["data-ad-client"] = sf(a);
                b ? a = Pg(c) : (c.id = "google_esf", c.name = "google_esf", c.src = Og(), a = Ng(c)); return a } return b ? null : "" },
        Sg = function(a, b, c) { Rg(a, b, c, function(a, b, f) { a = a.document; for (var d = b.id, e = 0; !d || a.getElementById(d);) d = "aswift_" + e++;
                b.id = d;
                b.name = d;
                d = Number(f.google_ad_width);
                e = Number(f.google_ad_height); var k = f.ds || "";
                k && (k += k.endsWith(";") ? "" : ";");
                16 == f.google_reactive_ad_format ? (f = a.createElement("div"), a = tf(b, d, e, k), f.innerHTML = a, c.appendChild(f.firstChild)) : (f = tf(b, d, e, k), c.innerHTML = f); return b.id }) },
        Tg = function(a, b) { b = "{iframeWin: window, pubWin: window.parent, vars: " + ("window.parent['google_sv_map']['" + b + "']") + "}"; if (D(a, Pd.g) || D(a, Qd.g)) return "<" + Z + ">window.parent.google_sa_impl(" + b + ");</" + Z + ">";
            b = "<" + Z + ">window.google_process_slots=function(){" + ("window.google_sa_impl(" + b + ");") + ("};</" + Z + ">");
            a = D(a, Rd.g) ? Kg("/show_ads_impl_le.js") : D(a, Rd.c) ? Kg("/show_ads_impl_le_c.js") : Kg(); return b + a },
        Rg = function(a, b, c, d) { var e = {},
                f = b.google_ad_width,
                g = b.google_ad_height;
            null != f && (e.width = f && '"' + f + '"');
            null != g && (e.height = g && '"' + g + '"');
            e.frameborder = '"0"';
            e.marginwidth = '"0"';
            e.marginheight = '"0"';
            e.vspace = '"0"';
            e.hspace = '"0"';
            e.allowtransparency = '"true"';
            e.scrolling = '"no"';
            e.allowfullscreen = '"true"';
            e.onload = '"' + og + '"';
            d = d(a, e, b);
            f = b.google_ad_output;
            e = b.google_ad_format;
            g = b.google_ad_width || 0; var h = b.google_ad_height || 0;
            e || "html" != f && null != f || (e = g + "x" + h);
            f = !b.google_ad_slot || b.google_override_format || !eb[b.google_ad_width + "x" + b.google_ad_height] && "aa" == b.google_loader_used;
            e && f ? e = e.toLowerCase() : e = "";
            b.google_ad_format = e; if (!q(b.google_reactive_sra_index) || !b.google_ad_unit_key) { e = [b.google_ad_slot, b.google_orig_ad_format || b.google_ad_format, b.google_ad_type, b.google_orig_ad_width || b.google_ad_width, b.google_orig_ad_height || b.google_ad_height];
                f = [];
                g = 0; for (h = c; h && 25 > g; h = h.parentNode, ++g) 9 === h.nodeType ? f.push("") : f.push(h.id);
                (f = f.join()) && e.push(f);
                b.google_ad_unit_key = Eb(e.join(":")).toString(); var k = void 0 === k ? !1 : k;
                e = []; for (f = 0; c && 25 > f; ++f) { g = "";
                    void 0 !== k && k || (g = (g = 9 !== c.nodeType && c.id) ? "/" + g : "");
                    a: { if (c && c.nodeName && c.parentElement) { h = c.nodeName.toString().toLowerCase(); for (var m = c.parentElement.childNodes, n = 0, u = 0; u < m.length; ++u) { var p = m[u]; if (p.nodeName && p.nodeName.toString().toLowerCase() === h) { if (c === p) { h = "." + n; break a }++n } } } h = "" } e.push((c.nodeName && c.nodeName.toString().toLowerCase()) + g + h);
                    c = c.parentElement } k = e.join() + ":";
                c = a;
                e = []; if (c) try { var r = c.parent; for (f = 0; r && r !== c && 25 > f; ++f) { var K = r.frames; for (g = 0; g < K.length; ++g)
                            if (c === K[g]) { e.push(g); break }
                        c = r;
                        r = c.parent } } catch (V) {} b.google_ad_dom_fingerprint = Eb(k + e.join()).toString() } K = "";
            D(a, be.g) ? (r = Qg(b.google_ad_client, !0)) && a.document.documentElement.appendChild(r) : K = Qg(b.google_ad_client, !1);
            r = D(a, Pd.g) || D(a, Qd.g);
            k = Aa;
            c = (new Date).getTime();
            b.google_lrv = Sb();
            b.google_async_iframe_id = d;
            e = a;
            e = $b(Zb(e)) || e;
            e = e.google_unique_id;
            b.google_unique_id = "number" === typeof e ? e : 0;
            b.google_start_time = k;
            b.google_bpp = c > k ? c - k : 1;
            b.google_async_rrc = 0;
            a.google_sv_map = a.google_sv_map || {};
            a.google_sv_map[d] = b;
            a.google_t12n_vars = cf;
            K = ["<!doctype html><html><body>", K, "<" + Z + ">", r ? "google_sl_win=window.parent;" : "", "google_iframe_start_time=new Date().getTime();", 'google_async_iframe_id="' + d + '";', "</" + Z + ">", Tg(a, d), "</body></html>"].join("");
            b = a.document.getElementById(d) ? jg : kg;
            d = Mg(a, d, K, !0);
            r ? (a.google_sa_queue = a.google_sa_queue || [], a.google_sa_impl ? b(d) : a.google_sa_queue.push(d)) : b(d) },
        Ug = function(a, b) { var c = navigator;
            a && b && c && (a = a.document, b = sf(b), /[^a-z0-9-]/.test(b) || ((c = Ea("r20160913")) && (c += "/"), Bb(a, vd("pagead2.googlesyndication.com", "/pub-config/" + c + b + ".js")))) }; var Vg = function(a, b, c) { for (var d = a.attributes, e = d.length, f = 0; f < e; f++) { var g = d[f]; if (/data-/.test(g.name)) { var h = Ea(g.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_")); if (!b.hasOwnProperty(h)) { g = g.value; var k = {};
                    k = (k.google_reactive_ad_format = Ob, k.google_allow_expandable_ads = Jb, k);
                    g = k.hasOwnProperty(h) ? k[h](g, null) : g;
                    null === g || (b[h] = g) } } } if (c.document && c.document.body && !ag(b) && !b.google_reactive_ad_format && (d = parseInt(a.style.width, 10), e = lg(a, c), 0 < e && d > e))
            if (f = parseInt(a.style.height, 10), d = !!eb[d + "x" + f], D(c, Md.I)) b.google_ad_resize = 0;
            else { h = e; if (d)
                    if (g = fb(e, f)) h = g, b.google_ad_format = g + "x" + f + "_0ads_al";
                    else throw Error("TSS=" + e);
                b.google_ad_resize = 1;
                b.google_ad_width = h;
                d || (b.google_ad_format = null, b.google_override_format = !0);
                e = h;
                a.style.width = e + "px";
                f = Sf(e, "auto", c, a, b);
                h = e;
                f.a.b(c, h, b, a);
                xf(f, h, b);
                f = f.a;
                b.google_responsive_formats = null;
                f.minWidth() > e && !d && (b.google_ad_width = f.minWidth(), a.style.width = f.minWidth() + "px") }
        d = b.google_reactive_ad_format; if (!b.google_enable_content_recommendations || 1 != d && 2 != d) { d = a.offsetWidth || J(a, c, "width", C) || b.google_ad_width || 0;
            a: if (e = za(Sf, d, "auto", c, a, b, !1, !0), f = D(c, Ud.c), h = D(c, Ud.g), g = jf(c, b.google_ad_client), !(f || h || g) || !wb() || b.google_reactive_ad_format || ag(b) || re(a, b) || 1 == b.google_ad_resize || ic(c) != c) d = !1;
                else { for (h = a; h; h = h.parentElement)
                        if (g = B(h, c), (k = !g) || (k = !(0 <= Ba(["static", "relative"], g.position))), k) { d = !1; break a }
                    if (!0 !== ve(c, a, d, .3, b)) d = !1;
                    else { b.google_resizing_allowed = !0;
                        h = D(c, Wd.c);
                        g = D(c, Wd.g);
                        k = bf(c.location, "google_responsive_slot_debug") || bf(c.location, "google_responsive_slot_preview") || qf(c, Ud.c, Ud.g, Wd.c, Wd.g); var m = L(gf(), 142); if (k || Math.random() < m) b.ovlp = !0;
                        f || g ? (f = {}, xf(e(), d, f), b.google_resizing_width = f.google_ad_width, b.google_resizing_height = f.google_ad_height, f.ds && (b.ds = f.ds)) : b.google_ad_format = "auto";
                        (d = h ? "AutoOptimizeAdSizeVariant" : g ? "AutoOptimizeAdSizeOriginal" : null) && (b.google_ad_channel = b.google_ad_channel ? [b.google_ad_channel, d].join("+") : d);
                        d = !0 } } if (e = ag(b)) cg(e, a, b, c, d);
            else { if (re(a, b)) { if (d = B(a, c)) a.style.width = d.width, a.style.height = d.height, qe(d, b);
                    b.google_ad_width || (b.google_ad_width = a.offsetWidth);
                    b.google_ad_height || (b.google_ad_height = a.offsetHeight);
                    b.google_loader_features_used = 256;
                    d = Zb(c);
                    b.google_responsive_auto_format = d ? d.data && "rspv" == d.data.autoFormat ? 13 : 14 : 12 } else qe(a.style, b), b.google_ad_output && "html" != b.google_ad_output || 300 != b.google_ad_width || 250 != b.google_ad_height || (d = a.style.width, a.style.width = "100%", e = a.offsetWidth, a.style.width = d, b.google_available_width = e);
                c.location && "#gfwmrp" == c.location.hash || 12 == b.google_responsive_auto_format && "true" == b.google_full_width_responsive && !D(c, Cd.g) ? cg(10, a, b, c, !1) : D(c, Dd.g) && 12 == b.google_responsive_auto_format && (a = we(a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width, c, a, b), !0 !== a ? (b.efwr = !1, b.gfwrnwer = a) : b.efwr = !0) } } else b.google_ad_width = H(c), b.google_ad_height = 50, a.style.display = "none" }; var Wg = !1,
        Xg = 0,
        Yg = !1,
        Zg = !1,
        $g = !1,
        ah = function(a) { return hc.test(a.className) && "done" != a.getAttribute("data-adsbygoogle-status") },
        ch = function(a, b) { var c = window;
            a.setAttribute("data-adsbygoogle-status", "done");
            bh(a, b, c) },
        bh = function(a, b, c) { var d = gc();
            d.google_spfd || (d.google_spfd = Vg);
            (d = b.google_reactive_ads_config) || Vg(a, b, c); if (!dh(a, b, c)) { if (d) { if (Wg) { if (d.page_level_pubvars && d.page_level_pubvars.pltais) return; throw new G("Only one 'enable_page_level_ads' allowed per page."); } Wg = !0 } else dc(c);
                Yg || (Yg = !0, Ug(c, b.google_ad_client));
                ac(qg, function(a, d) { b[d] = b[d] || c[d] });
                b.google_loader_used = "aa";
                b.google_reactive_tag_first = 1 === Xg; if ((d = b.google_ad_output) && "html" != d) throw new G("No support for google_ad_output=" + d);
                ld(164, nd, function() { Sg(c, b, a) }) } },
        dh = function(a, b, c) { var d = b.google_reactive_ads_config; if (d) { var e = d.page_level_pubvars;
                e = (va(e) ? e : {}).google_tag_origin } if ("js" === b.google_ad_output) return !1; var f = e || b.google_tag_origin;
            e = ma(a.className) && /(\W|^)adsbygoogle-noablate(\W|$)/.test(a.className); var g = b.google_ad_slot; var h = c.google_ad_modifications;!h || mc(h.ad_whitelist, g, f) ? h = null : (f = h.space_collapsing || "none", h = (g = mc(h.ad_blacklist, g)) ? { V: !0, ca: g.space_collapsing || f } : h.remove_ads_by_default ? { V: !0, ca: f, oa: h.dont_remove_atf } : null); if (e = h && h.V && "on" != b.google_adtest && !e) { a: { try { if (a.parentNode && 0 < a.offsetWidth && 0 < a.offsetHeight && a.style && "none" !== a.style.display && "hidden" !== a.style.visibility && (!a.style.opacity || 0 !== Number(a.style.opacity))) { var k = a.getBoundingClientRect(); var m = 0 < k.right && 0 < k.bottom; break a } } catch (n) {} m = !1 } m && (m = se(a, c) < ie(c).clientHeight);e = !(m && h.oa) } if (e) return a.className += " adsbygoogle-ablated-ad-slot", c = c.google_sv_map = c.google_sv_map || {}, b.google_ad_slot && (c[b.google_ad_slot] = b, a.setAttribute("google_ad_slot", b.google_ad_slot)), "slot" == h.ca && (null !== Ib(a.getAttribute("width")) && a.setAttribute("width", 0), null !== Ib(a.getAttribute("height")) && a.setAttribute("height", 0), a.style.width = "0px", a.style.height = "0px"), !0; if ((m = B(a, c)) && "none" == m.display && !("on" == b.google_adtest || 0 < b.google_reactive_ad_format || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
            a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive; return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format || !a ? !1 : (l.console && l.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + b.google_reactive_ad_format + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0) },
        eh = function(a) { for (var b = document.getElementsByTagName("ins"), c = 0, d = b[c]; c < b.length; d = b[++c]) { var e = d; if (ah(e) && "reserved" != e.getAttribute("data-adsbygoogle-status") && (!a || d.id == a)) return d } return null },
        fh = function(a, b) { b.tag_partner && (lc(l, b.tag_partner), lc(a, b.tag_partner)) },
        gh = function(a) { if (!Zg) { Zg = !0; try { var b = l.localStorage.getItem("google_ama_config") } catch (gb) { b = null } try { var c = b ? new xc(b ? JSON.parse(b) : null) : null } catch (gb) { c = null } if (b = c)
                    if (c = $a(b, yc, 3), !c || y(c, 1) <= +new Date) try { l.localStorage.removeItem("google_ama_config") } catch (gb) { ud(l, { lserr: 1 }) } else { if ($a(b, Bc, 13)) switch (c = !0, y($a(b, Bc, 13), 1)) {
                            case 1:
                            case 2:
                            case 3:
                                c = !1;
                            case 4:
                                var d = l.google_ad_modifications = l.google_ad_modifications || {};
                                d.remove_ads_by_default = !0;
                                d.space_collapsing = "slot";
                                d.dont_remove_atf = void 0 === c ? !1 : c } yd(3, [bb(b)]);
                        c = td; try { var e = Ya(b, 5); if (0 < e.length) { var f = new Ac,
                                    g = e || [];
                                2 < f.i ? f.b[2 + f.h] = g : (Wa(f), f.f[2] = g); var h = f } else b: { g = l.location.pathname; var k = ab(b, Ac, 7);f = {}; for (e = 0; e < k.length; ++e) { var m = y(k[e], 1);
                                    q(m) && !f[m] && (f[m] = k[e]) } for (var n = g.replace(/(^\/)|(\/$)/g, "");;) { var u = Eb(n); if (f[u]) { h = f[u]; break b } if (!n) { h = null; break b } n = n.substring(0, n.lastIndexOf("/")) } }
                            var p; if (p = h) a: { var r = Ya(h, 2); if (r)
                                    for (g = 0; g < r.length; g++)
                                        if (1 == r[g]) { p = !0; break a }
                                p = !1 }
                            if (p) { var K = Za(b, 12);
                                l.google_ama_all_ads_detection_enabled = K; if (y(h, 4)) { p = {}; var V = new rd(null, (p.google_package = y(h, 4), p));
                                    c = sd(c, V) } var sa = new Se;
                                (new We(new Oe(a, b, c), sa)).start();
                                sa.b.then(za(Ye, l), za(Ze, l)) } } catch (gb) { ud(l, { atf: -1 }) } } } },
        hh = function() { var a = document.createElement("INS");
            a.className = "adsbygoogle";
            a.className += " adsbygoogle-noablate";
            a.style.display = "none"; return a },
        ih = function(a) { var b = {};
            ac(nc, function(c, d) {!1 === a.enable_page_level_ads ? b[d] = !1 : a.hasOwnProperty(d) && (b[d] = a[d]) });
            va(a.enable_page_level_ads) && (b.page_level_pubvars = a.enable_page_level_ads); var c = hh();
            db.body.appendChild(c); var d = {};
            d = (d.google_reactive_ads_config = b, d.google_ad_client = a.google_ad_client, d);
            d.google_pause_ad_requests = $g;
            ch(c, d) },
        jh = function(a) { var b = jc(window); if (!b) throw new G("Page-level tag does not work inside iframes.");
            he(b).wasPlaTagProcessed = !0; var c;
            ac(kc(z), function(a) { switch (a) {
                    case $d.ea:
                        c = 0; break;
                    case $d.fa:
                        c = 100; break;
                    case $d.ga:
                        c = 200; break;
                    case $d.ha:
                        c = 300 } });
            b = c ? function() { return l.setTimeout(function() { return ih(a) }, c) } : function() { return ih(a) };
            db.body && void 0 === c || "complete" == db.readyState || "interactive" == db.readyState ? b() : Mb(db, "DOMContentLoaded", fd(191, b)) },
        lh = function(a) { var b = {};
            ld(165, pd, function() { kh(a, b) }, function(c) { c.client = c.client || b.google_ad_client || a.google_ad_client;
                c.slotname = c.slotname || b.google_ad_slot;
                c.tag_origin = c.tag_origin || b.google_tag_origin }) },
        kh = function(a, b) { Aa = (new Date).getTime();
            Lg();
            a: { if (void 0 != a.enable_page_level_ads) { if (ma(a.google_ad_client)) { var c = !0; break a } throw new G("'google_ad_client' is missing from the tag config."); } c = !1 }
            if (c) 0 === Xg && (Xg = 1), fh(b, a), gh(a.google_ad_client), jh(a);
            else if (0 === Xg && (Xg = 2), c = a.element, (a = a.params) && ac(a, function(a, c) { b[c] = a }), "js" === b.google_ad_output) console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
            else { if (c) { if (!ah(c) && (c.id ? c = eh(c.id) : c = null, !c)) throw new G("'element' has already been filled."); if (!("innerHTML" in c)) throw new G("'element' is not a good DOM element."); } else if (c = eh(), !c) throw new G("All ins elements in the DOM with class=adsbygoogle already have ads in them.");
                b.google_pause_ad_requests = $g;
                ch(c, b) } },
        nh = function() { kd();
            ld(166, qd, mh) },
        mh = function() { var a = $b(Zb(z)) || z,
                b = a.google_ad_modifications = a.google_ad_modifications || {}; if (!b.plle) { b.plle = !0; var c = b.eids = b.eids || [];
                b = b.loeids = b.loeids || []; var d = gf(); var e = gf(); var f = jc(a) || a;
                f = bf(f.location, "google_responsive_slot_debug") || bf(f.location, "google_responsive_slot_preview"); var g = jf(a);
                f ? (f = Ud, g = Vd, e = f.g) : g ? (f = Wd, g = Xd, e = rf(a, new Pc(0, 999), L(e, 120), L(e, 121), [f.c, f.g], 2)) : (f = Ud, g = Vd, e = rf(a, pf, L(e, 96), L(e, 97), [f.c, f.g])); if (e) { var h = {};
                    f = (h[f.c] = g.c, h[f.g] = g.g, h)[e];
                    e = { sa: e, ta: f } } else e = null;
                f = e || {};
                e = f.sa;
                f = f.ta;
                e && f && (M(c, e), M(c, f));
                g = Cd;
                e = N(a, L(d, 136), [g.c, g.g]);
                M(c, e);
                g = Ed;
                M(c, rf(a, mf, L(d, 9), L(d, 10), [g.c, g.P]));
                g = Gd;
                e = rf(a, nf, L(d, 108), L(d, 109), [g.c, g.g]);
                M(b, e);
                h = Fd;
                e == g.c ? f = h.c : e == g.g ? f = h.g : f = "";
                M(c, f);
                Ea("") && M(b, "");
                g = Md;
                e = N(a, L(d, 11), [g.c, g.I]);
                M(c, e);
                h = "";
                e === g.c ? h = "62710018" : e === g.I && (h = "62710017");
                M(c, h);
                g = Qd;
                e = rf(a, kf, L(d, 115), L(d, 116), [g.c, g.g]);
                M(c, e);
                e || (g = Pd, e = N(a, L(d, 12), [g.c, g.g]), M(c, e));
                g = Rd;
                e = N(a, L(d, 56), [g.c, g.g]);
                M(c, e);
                g = Hd;
                e = N(a, L(d, 13), [g.m, g.c]);
                M(c, e);
                e = N(a, 0, [g.O]);
                M(c, e);
                g = Id;
                e = N(a, L(d, 60), [g.m, g.c]);
                M(c, e);
                e == Id.m && (g = Jd, e = N(a, L(d, 66), [g.m, g.c]), M(c, e), g = Ld, e = N(a, L(d, 137), [g.m, g.c]), M(c, e), e == Jd.m && (g = Kd, e = N(a, L(d, 135), [g.m, g.c]), M(c, e)));
                g = Od;
                e = rf(a, lf, L(d, 14), L(d, 15), [g.c, g.A]);
                M(b, e);
                h = Nd;
                e == g.c ? f = h.c : e == g.A ? f = h.A : f = "";
                M(c, f);
                g = Dd;
                e = N(a, L(d, 98), [g.c, g.g]);
                M(c, e); if (ff(d, 77) || Tb) g = Sd, e = N(a, L(d, 76), [g.c, g.U, g.J, g.T]), M(c, e), e || (e = N(a, L(d, 83), [g.R]), M(c, e));
                g = Td;
                e = N(a, L(d, 92), [g.c, g.g]);
                M(c, e);
                g = Yd;
                e = rf(a, of , L(d, 99), L(d, 100), [g.c, g.g]);
                M(b, e);
                h = Zd;
                e == g.c ? f = h.c : e == g.g ? f = h.g : f = "";
                M(c, f);
                e = [];
                f = 0; for (var k in $d) e[f++] = $d[k];
                M(b, N(a, L(d, 114), e));
                g = ae;
                e = N(a, L(d, 127), [g.c, g.ia, g.ja]);
                M(c, e);
                g = be;
                e = N(a, L(d, 141), [g.g, g.c]);
                M(c, e) } hd(D(z, Jd.m) || D(z, Hd.m) || D(z, Hd.O)); if (D(z, Sd.U) || D(z, Sd.J) || D(z, Sd.T) || D(z, Sd.R)) Eg(), Bg(".google.cn") && (X[1] = ".google.cn"), D(z, Sd.J) ? (a = jb(), Hg(a), Gg(a)) : Gg(null);
            D(z, Td.g) && (a = ee() ? Qb("", "pagead2.googlesyndication.com") : Xb(), hf(gc().document, a, "preconnect")); if (a = jc(l)) a = he(a), va(a.tagSpecificState) && a.tagSpecificState[1] || !va(a.tagSpecificState) || (a.tagSpecificState[1] = new $e);
            a = window.adsbygoogle; if (!a || !a.loaded) { c = { push: lh, loaded: !0 }; try { Object.defineProperty(c, "requestNonPersonalizedAds", { set: oh }), Object.defineProperty(c, "pauseAdRequests", { set: ph }), Object.defineProperty(c, "onload", { set: qh }) } catch (n) {} a && (void 0 !== a.requestNonPersonalizedAds && (c.requestNonPersonalizedAds = a.requestNonPersonalizedAds), void 0 !== a.pauseAdRequests && (c.pauseAdRequests = a.pauseAdRequests)); if (a && a.shift) try { var m; for (k = 20; 0 < a.length && (m = a.shift()) && 0 < k;) lh(m), --k } catch (n) { throw window.setTimeout(nh, 0), n; } window.adsbygoogle = c;
                a && (c.onload = a.onload) } },
        oh = function(a) { if (+a) { if ((a = zb()) && a.frames && !a.frames.GoogleSetNPA) try { var b = a.document,
                        c = new sb(b),
                        d = b.body || b.head && b.head.parentElement; if (d) { var e = tb(c, "IFRAME");
                        e.name = "GoogleSetNPA";
                        e.id = "GoogleSetNPA";
                        e.setAttribute("style", "display:none;position:fixed;left:-999px;top:-999px;width:0px;height:0px;");
                        d.appendChild(e) } } catch (f) {} } else(b = zb().document.getElementById("GoogleSetNPA")) && b.parentNode && b.parentNode.removeChild(b) },
        ph = function(a) {+a ? $g = !0 : ($g = !1, a = function() { if (!$g) { var a = gc(),
                        c = gc(); try { if (db.createEvent) { var d = db.createEvent("CustomEvent");
                            d.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !1, !1, "");
                            a.dispatchEvent(d) } else if (bc(c.CustomEvent)) { var e = new c.CustomEvent("adsbygoogle-pub-unpause-ad-requests-event", { bubbles: !1, cancelable: !1, detail: "" });
                            a.dispatchEvent(e) } else if (bc(c.Event)) { var f = new Event("adsbygoogle-pub-unpause-ad-requests-event", { bubbles: !1, cancelable: !1 });
                            a.dispatchEvent(f) } } catch (g) {} } }, l.setTimeout(a, 0), l.setTimeout(a, 1E3)) },
        qh = function(a) { bc(a) && window.setTimeout(a, 0) };
    nh(); }).call(this);