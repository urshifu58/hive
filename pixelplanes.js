/*!
Parts of this script are from the TurboWarp Packager <https://packager.turbowarp.org/>, licensed as follows:
Copyright (C) 2021-2024 Thomas Weber

The Source Code Form of this program is available under the terms of the
Mozilla Public License, v. 2.0. You can obtain a copy of the license at
https://www.mozilla.org/en-US/MPL/2.0/.

Parts of this script are from Scratch <https://scratch.mit.edu/>, licensed as follows:
Copyright (c) 2016, Massachusetts Institute of Technology
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

/*! For license information please see scaffolding-min.js.LICENSE.txt */
const scaffolding = {
    init: function() {
        console.log("Scaffolding initialized");
    },
    load: function() {
        console.log("Scaffolding loaded");
    }
};

// Your existing code
!function(e) {
    function t(t) {
        for (var n, i, s = t[0], o = t[1], a = 0, c = []; a < s.length; a++)
            i = s[a],
            Object.prototype.hasOwnProperty.call(r, i) && r[i] && c.push(r[i][0]),
            r[i] = 0;
        for (n in o)
            Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
        for (l && l(t); c.length; )
            c.shift()()
    }
    var n = {},
        r = {0: 0};
    function i(t) {
        if (n[t])
            return n[t].exports;
        var r = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, i),
        r.l = !0,
        r.exports
    }
    i.e = function(e) {
        var t = [],
            n = r[e];
        if (0 !== n)
            if (n)
                t.push(n[2]);
            else {
                var s = new Promise((function(t, i) {
                    n = r[e] = [t, i]
                }));
                t.push(n[2] = s);
                var o, a = document.createElement("script");
                a.charset = "utf-8",
                a.timeout = 120,
                i.nc && a.setAttribute("nonce", i.nc),
                a.src = function(e) {
                    return i.p + "scaffolding/" + ({1: "vendors~iframe-extension-worker"}[e] || e) + ".js"
                }(e);
                var l = new Error;
                o = function(t) {
                    a.onerror = a.onload = null,
                    clearTimeout(c);
                    var n = r[e];
                    if (0 !== n) {
                        if (n) {
                            var i = t && ("load" === t.type ? "missing" : t.type),
                                s = t && t.target && t.target.src;
                            l.message = "Loading chunk " + e + " failed.\n(" + i + ": " + s + ")",
                            l.name = "ChunkLoadError",
                            l.type = i,
                            l.request = s,
                            n[1](l)
                        }
                        r[e] = void 0
                    }
                };
                var c = setTimeout((function() {
                    o({type: "timeout", target: a})
                }), 12e4);
                a.onerror = a.onload = o,
                document.head.appendChild(a)
            }
        return Promise.all(t)
    },
    i.m = e,
    i.c = n,
    i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    },
    i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {value: !0})
    },
    i.t = function(e, t) {
        if (1 & t && (e = i(e)), 8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (i.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var r in e)
                i.d(n, r, function(t) {
                    return e[t]
                }.bind(null, r));
        return n
    },
    i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        };
        return i.d(t, "a", t),
        t
    },
    i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    },
    i.p = "",
    i.oe = function(e) {
        throw console.error(e),
        e
    };
    var s = window.webpackJsonp = window.webpackJsonp || [],
        o = s.push.bind(s);
    s.push = t,
    s = s.slice();
    for (var a = 0; a < s.length; a++)
        t(s[a]);
    var l = o;
    i(i.s = 415)
}([function(e, t, n) {
    var r = n(36),
        i = n(93),
        s = n(37),
        o = s.TYPE,
        a = n(91),
        l = a.isNewline,
        c = a.isName,
        u = a.isValidEscape,
        d = a.isNumberStart,
        h = a.isIdentifierStart,
        p = a.charCodeCategory,
        m = a.isBOM,
        f = n(27),
        g = f.cmpStr,
        y = f.getNewlineLength,
        b = f.findWhiteSpaceEnd,
        v = f.consumeEscaped,
        S = f.consumeName,
        w = f.consumeNumber,
        k = f.consumeBadUrlRemnants,
        x = 16777215,
        T = 24;
    function E(e, t) {
        function n(t) {
            return t < E ? e.charCodeAt(t) : 0
        }
        function s() {
            return M = w(e, M),
            h(n(M), n(M + 1), n(M + 2)) ? (L = o.Dimension, void (M = S(e, M))) : 37 === n(M) ? (L = o.Percentage, void M++) : void (L = o.Number)
        }
        function a() {
            const t = M;
            M = S(e, M),
            g(e, t, M, "url") && 40 === n(M) ? 34 === n(M = b(e, M + 1)) || 39 === n(M) ? (L = o.Function, void (M = t + 4)) : void function() {
                for (L = o.Url, M = b(e, M); M < e.length; M++) {
                    var t = e.charCodeAt(M);
                    switch (p(t)) {
                    case 41:
                        return void M++;
                    case p.Eof:
                        return;
                    case p.WhiteSpace:
                        return 41 === n(M = b(e, M)) || M >= e.length ? void (M < e.length && M++) : (M = k(e, M), void (L = o.BadUrl));
                    case 34:
                    case 39:
                    case 40:
                    case p.NonPrintable:
                        return M = k(e, M), void (L = o.Bad
// fc87fb72fdac70077e62e25fcfc0bcb406977b5943a50dcd0a085391c652c3fd =^..^=