(() => {
    "use strict";
    var e, n = {
            1596: (e, n, t) => {
                t.r(n), t.d(n, {
                    default: () => o
                });
                const o = "/* The nr 9876 is used to avoid naming collisions on the page */\n#one-sec-9876,\n#one-sec-9876-pause {\n    position: fixed;\n    z-index: 2147483647;\n    z-index: 9999999999999999;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    opacity: 0;\n    width: 100%;\n    height: 100%;\n    text-align: center;\n    color: #fff;\n    box-sizing: border-box;\n    overflow: hidden;\n    background: rgba(0, 0, 0, 1);\n    /* prevent overlapping text and buttons */\n    min-height: 460px;\n    user-select: none;\n}\n\n#one-sec-9876-pause,\n#one-sec-9876 * {\n    line-height: 1 !important;\n    font-family: 'SF Pro Rounded', ui-rounded, -apple-system, BlinkMacSystemFont, sans-serif !important;\n}\n\n@media (prefers-color-scheme: light) {\n    #one-sec-9876,\n    #one-sec-9876-pause {\n        color: #000;\n        background: rgba(255, 255, 255, 1);\n    }\n}\n\n#one-sec-9876-pause {\n    opacity: 1;\n}\n\n#one-sec-9876-pause-text {\n    opacity: .7;\n    margin: auto;\n    text-align: center;\n}\n\n#one-sec-9876 em {\n    color: #7F7FDE;\n}\n\n#one-sec-9876-fader {\n    z-index: 3;\n    position: absolute;\n    transform: translateY(100%);\n    transition-timing-function: ease-in-out;\n    transform-origin: bottom center;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(#999DB0, #525470);\n}\n\n#one-sec-9876-text-rating,\n#one-sec-9876-text-final,\n#one-sec-9876-pause-text-wrapper,\n#one-sec-9876-text-wrapper {\n    z-index: 4;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    margin-top: -40px;\n}\n\n#one-sec-9876-text-rating,\n#one-sec-9876-text-final {\n    z-index: 1;\n}\n\n\n#one-sec-9876-text-rating-wrapper,\n#one-sec-9876-text-final-wrapper {\n    width: 800px;\n    max-width: 100%;\n}\n\n#one-sec-9876-text-wrapper strong {\n    transform: scale(1.1);\n    display: inline-block;\n    margin-right: 5px;\n    font-weight: 700;\n}\n\n/* Text styles */\n#one-sec-9876-text-rating,\n#one-sec-9876-pause-text,\n#one-sec-9876-text {\n    font-size: 44px;\n    font-weight: bold;\n}\n\n#one-sec-9876-text-final div:first-child {\n    font-size: 88px;\n}\n\n#one-sec-9876-text-final div:nth-child(2) {\n    font-size: 22px;\n    margin-top: 32px;\n    margin-bottom: 44px;\n}\n\n#one-sec-9876 button {\n    cursor: pointer;\n    color: #fff;\n    font-size: 18px;\n    font-weight: 600;\n    border: 0;\n    text-decoration: none;\n    border-radius: 12px;\n    margin: 16px;\n    margin-top: 0;\n    height: 54px;\n    padding: 0 20px;\n    background: linear-gradient(#7D878A, #525470);\n}\n\n#one-sec-9876-btn-wrapper {\n    padding-top: 32px;\n    position: absolute;\n    bottom: 10%;\n    z-index: 2;\n    left: 50%;\n    transform: translateX(-50%);\n}\n\nbutton#one-sec-9876-skip-rating-btn,\nbutton#one-sec-9876-continue-btn {\n    background: transparent !important;\n    font-weight: normal !important;\n}\n\nbutton#one-sec-9876-skip-rating-btn:active,\nbutton#one-sec-9876-continue-btn:active {\n    background: rgba(255, 255, 255, 0.1) !important;\n    color: rgba(0, 0, 0, .9) !important;\n}\n\n@media (prefers-color-scheme: light) {\n    button#one-sec-9876-skip-rating-btn,\n    button#one-sec-9876-continue-btn {\n        color: #000;\n    }\n\n    button#one-sec-9876 button:active {\n        color: rgba(0, 0, 0, .9);\n    }\n}\n\n#one-sec-9876 button:active {\n    background: linear-gradient(#525470, #7D878A);\n    color: rgba(255, 255, 255, 0.9);\n}\n\n"
            },
            7265: function(e, n, t) {
                var o = this && this.__awaiter || function(e, n, t, o) {
                        return new(t || (t = Promise))((function(i, r) {
                            function a(e) {
                                try {
                                    d(o.next(e))
                                } catch (e) {
                                    r(e)
                                }
                            }
                            function s(e) {
                                try {
                                    d(o.throw(e))
                                } catch (e) {
                                    r(e)
                                }
                            }
                            function d(e) {
                                var n;
                                e.done ? i(e.value) : (n = e.value, n instanceof t ? n : new t((function(e) {
                                        e(n)
                                    })))
                                    .then(a, s)
                            }
                            d((o = o.apply(e, n || []))
                                .next())
                        }))
                    },
                    i = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                const r = i(t(1596)),
                    a = t(1840),
                    s = t(2945),
                    d = t(9622),
                    c = t(8024),
                    l = t(4900),
                    u = t(6206),
                    p = t(6486),
                    m = t(3464),
                    v = t(9098),
                    f = t(458),
                    b = t(1706),
                    g = t(9929),
                    h = t(4951),
                    y = t(6954),
                    E = window.location.href,
                    T = (0, f.isValidUrl)(E) && (0, l.getHostFromUrl)(E);
                let _, w = !1;
                T && (0, v.getCfgSync)()
                    .then((e => {
                        (0, m.isOnBlockedUrl)(E, e) && function(e) {
                            d.bro.runtime.onMessage.addListener(((e, n, t) => {
                                    switch (e.ev) {
                                        case c.EV.ASK_FOR_CONTENT_SCRIPT_READY:
                                            t();
                                            break;
                                        case c.EV.INTERVENTION_SKIPPED:
                                            w = !0, I(), x();
                                            break;
                                        case c.EV.PAUSE_INTERVENTION:
                                            w = !1,
                                                function() {
                                                    if (!document.getElementById("one-sec-9876")) return;
                                                    if (document.getElementById(O)) return;
                                                    const e = document.createElement("div");
                                                    e.id = O, e.innerHTML = `\n    <div id ="one-sec-9876-pause-text-wrapper">\n      <div id="one-sec-9876-pause-text">Return to this tab to re-start intervention to access ${T}</div>\n    </div>\n  `, document.body.appendChild(e)
                                                }(), I();
                                            break;
                                        case c.EV.RE_START_INTERVENTION: {
                                            w = !1, I();
                                            const {
                                                cfg: n,
                                                hostsData: t
                                            } = e;
                                            S(n, t);
                                            break
                                        }
                                    }
                                })), (0, g.getHostDataLocal)()
                                .then((n => {
                                    (0, b.isOnBlockedUrlAndNotCurrentlySkipped)(E, e, n) ? ((0, h.addInterventionTimestampToDB)(T, n), S(e, n, !0)) : (0, m.isOnBlockedUrl)(E, e) && (w = !0);
                                    const t = () => {
                                            w && (0, u.updateLastActiveInDB)(T)
                                        },
                                        o = (0, p.throttle)(t, 1e3);
                                    document.addEventListener("DOMContentLoaded", (() => {
                                        document.addEventListener("mousemove", (() => {
                                            o()
                                        })), document.addEventListener("scroll", (() => {
                                            o()
                                        })), document.addEventListener("keydown", (() => {
                                            o()
                                        }))
                                    }))
                                }))
                        }(e)
                    }));
                const O = "one-sec-9876-pause";
                function x() {
                    const e = document.getElementById(O);
                    e && window.setTimeout((() => {
                        e.remove()
                    }), 300)
                }
                function I() {
                    null == _ || _.remove()
                }
                let D, A, N;
                function S(e, n, t = !1) {
                    var i;
                    return o(this, void 0, void 0, (function*() {
                        if (D && window.clearTimeout(D), !document.body) return void(D = window.setTimeout((() => S(e, n, t)), 100));
                        I(), x();
                        const l = function(e) {
                                if (A) return A;
                                N && N === e || (N = document.title);
                                if (document.title = e, !MutationObserver) return () => {};
                                const n = new MutationObserver((function(n) {
                                    const t = n[0].target.innerText;
                                    t !== e && (N = t, document.title = e)
                                }));
                                return n.observe(document.querySelector("title"), {
                                    subtree: !0,
                                    characterData: !0,
                                    childList: !0
                                }), A = () => {
                                    n.disconnect(), document.title = N, A = void 0
                                }, A
                            }(e.breathText),
                            p = Math.max(1e3 * Math.round(e.breathDuration), 0),
                            m = {
                                breathInDuration: p / 1.41,
                                breathOutDuration: 1.41 * p
                            };
                        document.removeEventListener("DOMContentLoaded", R), document.addEventListener("DOMContentLoaded", R, !1);
                        const v = (0, s.getLast24HoursOpenAttempts)(null === (i = n[T]) || void 0 === i ? void 0 : i.interventionTimestamps) + (t ? 1 : 0),
                            f = document.createElement("style");
                        f.textContent = r.default, document.head.appendChild(f), _ = document.createElement("div"), _.id = "one-sec-9876", _.innerHTML = `\n  <div id="one-sec-9876-fader"></div>\n  \n  <div id="one-sec-9876-text-wrapper">\n    <div id="one-sec-9876-text"></div>\n  </div>\n\n  <div id="one-sec-9876-text-final-wrapper">\n    <div id="one-sec-9876-text-final">\n      <div>${v}</div>\n      <div>Attempts to open ${T} within 24h.</div>\n    </div>\n    <div id="one-sec-9876-btn-wrapper">\n      <button id="one-sec-9876-close-btn">I don’t want to open ${T}</button><br />\n      <button id="one-sec-9876-continue-btn">Continue on ${T}</button>\n    </div>\n  </div>\n\n  <div id="one-sec-9876-text-rating-wrapper">\n    <div id="one-sec-9876-text-rating">\n      <div>Please rate one sec on your browsers’ extension store!</div>\n    </div>\n    <div id="one-sec-9876-btn-wrapper">\n      <button id="one-sec-9876-skip-rating-btn">Don't ask again</button>\n      <button id="one-sec-9876-rate-btn">Write Review</button><br />\n    </div>\n  </div>\n  `, document.body.appendChild(_);
                        const b = document.getElementById("one-sec-9876-fader"),
                            g = document.getElementById("one-sec-9876-text-wrapper"),
                            h = document.getElementById("one-sec-9876-text"),
                            E = document.getElementById("one-sec-9876-text-final-wrapper"),
                            O = (document.getElementById("one-sec-9876-text-final"), document.getElementById("one-sec-9876-close-btn")),
                            k = document.getElementById("one-sec-9876-continue-btn"),
                            C = document.getElementById("one-sec-9876-text-rating-wrapper"),
                            P = document.getElementById("one-sec-9876-skip-rating-btn"),
                            L = document.getElementById("one-sec-9876-rate-btn");
                        C.style.display = "none", O.addEventListener("click", (() => o(this, void 0, void 0, (function*() {
                            const n = navigator.userAgent.indexOf("Edg") > -1,
                                t = navigator.userAgent.indexOf("Chrome") > -1,
                                i = navigator.userAgent.indexOf("Firefox") > -1,
                                r = navigator.userAgent.indexOf("Safari") > -1;
                            (n || t || i || r) && !e.wasRatingModalShown ? (E.remove(), C.style.display = "block", P.addEventListener("click", (() => o(this, void 0, void 0, (function*() {
                                yield(0, y.saveCfgSync)(Object.assign(Object.assign({}, e), {
                                    wasRatingModalShown: !0
                                })), d.bro.runtime.sendMessage({
                                    ev: c.EV.CLOSE_CURRENT_TAB
                                })
                            })))), L.addEventListener("click", (() => o(this, void 0, void 0, (function*() {
                                if (yield(0, y.saveCfgSync)(Object.assign(Object.assign({}, e), {
                                        wasRatingModalShown: !0
                                    })), n) document.location.href = "https://microsoftedge.microsoft.com/addons/detail/one-sec-delay-distracti/nijagbonlpmlkgdmanmlanbmdbibleia";
                                else if (t) document.location.href = "https://chrome.google.com/webstore/detail/one-sec-delay-distracting/femnahohginddofgekknfmaklcbpinkn";
                                else if (r) document.location.href = "https://apps.apple.com/app/apple-store/id1532875441?action=write-review";
                                else {
                                    if (!i) throw new Error("Should not happen");
                                    document.location.href = "https://addons.mozilla.org/de/firefox/addon/one-sec/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search"
                                }
                            }))))) : d.bro.runtime.sendMessage({
                                ev: c.EV.CLOSE_CURRENT_TAB
                            })
                        })))), k.addEventListener("click", (() => {
                            (0, a.fadeOut)(_, 500), (0, u.updateLastActiveInDB)(T), window.setTimeout((() => {
                                l(), I(), d.bro.runtime.sendMessage({
                                    ev: c.EV.INTERVENTION_SKIPPED,
                                    host: T
                                }), w = !0
                            }), 500)
                        })), E.hidden = !0, yield(0, a.fadeIn)(_, 200), h.innerText = e.breathText, yield Promise.all([(0, a.fadeIn)(g, 600), (0, a.moveUp)(b, m.breathInDuration)]), yield Promise.all([(0, a.fadeOut)(g, 400)
                            .then((() => E.hidden = !1)), (0, a.moveDown)(b, m.breathOutDuration)
                        ]), h.remove()
                    }))
                }
                function R() {
                    document.querySelectorAll("video")
                        .forEach((e => e.pause())), document.removeEventListener("DOMContentLoaded", R)
                }
            },
            6124: (e, n) => {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.STATIC_CFG = n.DEFAULT_CFG = void 0, n.DEFAULT_CFG = {
                    breathDuration: 5,
                    breathText: "It’s time to take a deep breath…",
                    blockedHosts: ["facebook.com", "reddit.com", "youtube.com"],
                    allowedPatterns: [],
                    intentionalSwitchingDuration: 0,
                    isCloseTabOnInterventionExit: !1,
                    wasRatingModalShown: !1
                }, n.STATIC_CFG = {
                    INTERVENTION_USER_INTERACTION_THRESHOLD: 3e4,
                    CHECK_INTERVENTION_INTERVAL: 5e3
                }
            },
            8024: (e, n) => {
                Object.defineProperty(n, "__esModule", {
                        value: !0
                    }), n.EV = void 0,
                    function(e) {
                        e.INTERVENTION_SKIPPED = "INTERVENTION_SKIPPED", e.PAUSE_INTERVENTION = "PAUSE_INTERVENTION", e.RE_START_INTERVENTION = "RE_START_INTERVENTION", e.ASK_FOR_CONTENT_SCRIPT_READY = "ASK_FOR_CONTENT_SCRIPT_READY", e.CLOSE_CURRENT_TAB = "CLOSE_CURRENT_TAB"
                    }(n.EV || (n.EV = {}))
            },
            3801: (e, n) => {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.addInterventionTimestampForHost = void 0, n.addInterventionTimestampForHost = function(e, n) {
                    var t;
                    return Object.assign(Object.assign({}, n), {
                        [e]: Array.isArray(null === (t = n[e]) || void 0 === t ? void 0 : t.interventionTimestamps) ? Object.assign(Object.assign({}, n[e]), {
                            interventionTimestamps: [...n[e].interventionTimestamps, Date.now()]
                        }) : {
                            lastActive: 0,
                            interventionTimestamps: [Date.now()]
                        }
                    })
                }
            },
            4951: function(e, n, t) {
                var o = this && this.__awaiter || function(e, n, t, o) {
                    return new(t || (t = Promise))((function(i, r) {
                        function a(e) {
                            try {
                                d(o.next(e))
                            } catch (e) {
                                r(e)
                            }
                        }
                        function s(e) {
                            try {
                                d(o.throw(e))
                            } catch (e) {
                                r(e)
                            }
                        }
                        function d(e) {
                            var n;
                            e.done ? i(e.value) : (n = e.value, n instanceof t ? n : new t((function(e) {
                                    e(n)
                                })))
                                .then(a, s)
                        }
                        d((o = o.apply(e, n || []))
                            .next())
                    }))
                };
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.addInterventionTimestampToDB = void 0;
                const i = t(3801),
                    r = t(5047);
                n.addInterventionTimestampToDB = function(e, n) {
                    return o(this, void 0, void 0, (function*() {
                        const t = (0, i.addInterventionTimestampForHost)(e, n);
                        return yield(0, r.saveHostDataLocal)(t), t
                    }))
                }
            },
            1840: (e, n) => {
                function t(e) {
                    return new Promise((n => {
                        setTimeout(n, e)
                    }))
                }
                function o(e, n = 200) {
                    return e.style.opacity = "0", e.style.transition = `opacity ${n}ms`, window.requestAnimationFrame((() => {
                        e.style.opacity = "1"
                    })), t(n)
                }
                function i(e, n = 200) {
                    return e.style.opacity = "1", e.style.transition = `opacity ${n}ms`, window.requestAnimationFrame((() => {
                        e.style.opacity = "0"
                    })), t(n)
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.fadeText = n.fadeOut = n.moveDown = n.moveUp = n.fadeIn = n.promiseTimeout = void 0, n.promiseTimeout = t, n.fadeIn = o, n.moveUp = function(e, n = 200) {
                    return e.style.transform = "translateY(100%)", e.style.transition = `transform ${n}ms`, window.requestAnimationFrame((() => {
                        e.style.transform = "translateY(0)"
                    })), t(n)
                }, n.moveDown = function(e, n = 200) {
                    return e.style.transform = "translateY(0)", e.style.transition = `transform ${n}ms`, window.requestAnimationFrame((() => {
                        e.style.transform = "translateY(100%)"
                    })), t(n)
                }, n.fadeOut = i, n.fadeText = function(e, n, t = 300) {
                    return i(e, t / 2)
                        .then((() => (e.innerHTML = n, o(e, t / 2))))
                }
            },
            9622: function(e, n, t) {
                var o = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.bro = void 0;
                const i = o(t(3150));
                n.bro = i.default
            },
            2166: (e, n) => {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.cleanHostWWW = void 0;
                n.cleanHostWWW = e => e.replace(/^www\./, "")
            },
            9098: (e, n, t) => {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.getCfgSync = void 0;
                const o = t(6124),
                    i = t(9622);
                n.getCfgSync = () => {
                    var e;
                    return (null === (e = i.bro.runtime) || void 0 === e ? void 0 : e.id) ? i.bro.storage.sync.get()
                        .then((e => Object.assign(Object.assign(Object.assign({}, o.DEFAULT_CFG), e), {
                            breathDuration: e.breathDuration ? +e.breathDuration : o.DEFAULT_CFG.breathDuration
                        }))) : Promise.resolve(Object.assign({}, o.DEFAULT_CFG))
                }
            },
            9929: (e, n, t) => {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.getHostDataLocal = void 0;
                const o = t(9622);
                n.getHostDataLocal = () => {
                    var e;
                    if (null === (e = o.bro.runtime) || void 0 === e ? void 0 : e.id) return o.bro.storage.local.get()
                        .then((e => Object.assign({}, e)));
                    throw new Error("Extension was reloaded, please reload tab for it to work here again")
                }
            },
            4900: (e, n, t) => {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.getHostFromUrl = void 0;
                const o = t(3327),
                    i = t(2166);
                n.getHostFromUrl = e => {
                    const n = (0, o.parseDomain)((0, o.fromUrl)(e));
                    return n.type !== o.ParseResultType.Listed && n.type !== o.ParseResultType.Ip ? e.replace("http://", "")
                        .replace("https://", "") : (0, i.cleanHostWWW)(n.hostname)
                }
            },
            2945: (e, n) => {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.getTotalOpenAttempts = n.getLast24HoursOpenAttempts = void 0;
                n.getLast24HoursOpenAttempts = e => {
                    const n = Date.now();
                    return Array.isArray(e) ? e.filter((e => e > n - 864e5))
                        .length : 0
                };
                n.getTotalOpenAttempts = e => Array.isArray(e) ? e.length : 0
            },
            288: (e, n) => {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.isMatchingHost = void 0;
                n.isMatchingHost = (e, n) => {
                    const t = e.indexOf(n);
                    return 0 === t && e.length === n.length || t > 0 && e.length - t === n.length && "." === e.charAt(t - 1)
                }
            },
            1706: (e, n, t) => {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.isOnBlockedUrlAndNotCurrentlySkipped = void 0;
                const o = t(3464),
                    i = t(9488),
                    r = t(4900);
                n.isOnBlockedUrlAndNotCurrentlySkipped = function(e, n, t) {
                    const a = (0, r.getHostFromUrl)(e);
                    return (0, o.isOnBlockedUrl)(e, n) && (0, i.isStartIntervention)(a, t, n.intentionalSwitchingDuration)
                }
            },
            3464: (e, n, t) => {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.isOnBlockedUrl = void 0;
                const o = t(288),
                    i = t(2166);
                n.isOnBlockedUrl = (e, n) => {
                    const t = (0, i.cleanHostWWW)(new URL(e)
                        .host);
                    return !!n.blockedHosts.find((e => (0, o.isMatchingHost)(t, e))) && !n.allowedPatterns.find((n => e.includes(n)))
                }
            },
            9488: (e, n, t) => {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.isStartIntervention = void 0;
                const o = t(6124);
                n.isStartIntervention = function(e, n, t) {
                    var i;
                    const r = null === (i = n[e]) || void 0 === i ? void 0 : i.lastActive,
                        a = Date.now(),
                        s = !r,
                        d = o.STATIC_CFG.INTERVENTION_USER_INTERACTION_THRESHOLD + t;
                    return s || r + d < a
                }
            },
            458: (e, n) => {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.isValidUrl = void 0, n.isValidUrl = function(e) {
                    try {
                        const n = new URL(e);
                        return ["https:", "http:"].includes(n.protocol) && !!n.hostname && "localhost" !== n.hostname
                    } catch (e) {
                        return !1
                    }
                }
            },
            6954: (e, n, t) => {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.saveCfgSync = void 0;
                const o = t(9622);
                n.saveCfgSync = e => {
                    var n;
                    if (null === (n = o.bro.runtime) || void 0 === n ? void 0 : n.id) return o.bro.storage.sync.set(e)
                }
            },
            5047: (e, n, t) => {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.saveHostDataLocal = void 0;
                const o = t(9622);
                n.saveHostDataLocal = e => {
                    var n;
                    if (null === (n = o.bro.runtime) || void 0 === n ? void 0 : n.id) return o.bro.storage.local.set(e);
                    throw new Error("Extension was reloaded, please reload tab for it to work here again")
                }
            },
            6206: function(e, n, t) {
                var o = this && this.__awaiter || function(e, n, t, o) {
                    return new(t || (t = Promise))((function(i, r) {
                        function a(e) {
                            try {
                                d(o.next(e))
                            } catch (e) {
                                r(e)
                            }
                        }
                        function s(e) {
                            try {
                                d(o.throw(e))
                            } catch (e) {
                                r(e)
                            }
                        }
                        function d(e) {
                            var n;
                            e.done ? i(e.value) : (n = e.value, n instanceof t ? n : new t((function(e) {
                                    e(n)
                                })))
                                .then(a, s)
                        }
                        d((o = o.apply(e, n || []))
                            .next())
                    }))
                };
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.updateLastActiveInDB = void 0;
                const i = t(9929),
                    r = t(5047);
                n.updateLastActiveInDB = function(e) {
                    return o(this, void 0, void 0, (function*() {
                        const n = yield(0, i.getHostDataLocal)(), t = Object.assign(Object.assign({}, n), {
                            [e]: n[e] ? Object.assign(Object.assign({}, n[e]), {
                                lastActive: Date.now()
                            }) : {
                                interventionTimestamps: [],
                                lastActive: Date.now()
                            }
                        });
                        yield(0, r.saveHostDataLocal)(t)
                    }))
                }
            }
        },
        t = {};
    function o(e) {
        var i = t[e];
        if (void 0 !== i) return i.exports;
        var r = t[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return n[e].call(r.exports, r, r.exports, o), r.loaded = !0, r.exports
    }
    o.m = n, e = [], o.O = (n, t, i, r) => {
        if (!t) {
            var a = 1 / 0;
            for (l = 0; l < e.length; l++) {
                for (var [t, i, r] = e[l], s = !0, d = 0; d < t.length; d++)(!1 & r || a >= r) && Object.keys(o.O)
                    .every((e => o.O[e](t[d]))) ? t.splice(d--, 1) : (s = !1, r < a && (a = r));
                if (s) {
                    e.splice(l--, 1);
                    var c = i();
                    void 0 !== c && (n = c)
                }
            }
            return n
        }
        r = r || 0;
        for (var l = e.length; l > 0 && e[l - 1][2] > r; l--) e[l] = e[l - 1];
        e[l] = [t, i, r]
    }, o.d = (e, n) => {
        for (var t in n) o.o(n, t) && !o.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: n[t]
        })
    }, o.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), o.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n), o.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
        var e = {
            694: 0
        };
        o.O.j = n => 0 === e[n];
        var n = (n, t) => {
                var i, r, [a, s, d] = t,
                    c = 0;
                if (a.some((n => 0 !== e[n]))) {
                    for (i in s) o.o(s, i) && (o.m[i] = s[i]);
                    if (d) var l = d(o)
                }
                for (n && n(t); c < a.length; c++) r = a[c], o.o(e, r) && e[r] && e[r][0](), e[r] = 0;
                return o.O(l)
            },
            t = self.webpackChunkone_sec = self.webpackChunkone_sec || [];
        t.forEach(n.bind(null, 0)), t.push = n.bind(null, t.push.bind(t))
    })(), o.nc = void 0;
    var i = o.O(void 0, [736], (() => o(7265)));
    i = o.O(i)
})();
// Source code and support at https://gith