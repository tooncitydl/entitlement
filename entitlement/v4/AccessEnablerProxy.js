var Adobe = AccessEnabler = function(t) {
    function e(e) {
        for (var n, i, o = e[0], a = e[1], s = 0, u = []; s < o.length; s++)
            i = o[s],
            r[i] && u.push(r[i][0]),
            r[i] = 0;
        for (n in a)
            Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n]);
        for (c && c(e); u.length; )
            u.shift()()
    }
    var n = {}
      , r = {
        4: 0
    };
    function i(e) {
        if (n[e])
            return n[e].exports;
        var r = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(r.exports, r, r.exports, i),
        r.l = !0,
        r.exports
    }
    i.e = function(t) {
        var e = []
          , n = r[t];
        if (0 !== n)
            if (n)
                e.push(n[2]);
            else {
                var o = new Promise(function(e, i) {
                    n = r[t] = [e, i]
                }
                );
                e.push(n[2] = o);
                var a, s = document.getElementsByTagName("head")[0], c = document.createElement("script");
                c.charset = "utf-8",
                c.timeout = 120,
                i.nc && c.setAttribute("nonce", i.nc),
                c.src = function(t) {
                    return i.p + "" + ({}[t] || t) + ".js"
                }(t),
                a = function(e) {
                    c.onerror = c.onload = null,
                    clearTimeout(u);
                    var n = r[t];
                    if (0 !== n) {
                        if (n) {
                            var i = e && ("load" === e.type ? "missing" : e.type)
                              , o = e && e.target && e.target.src
                              , a = new Error("Loading chunk " + t + " failed.\n(" + i + ": " + o + ")");
                            a.type = i,
                            a.request = o,
                            n[1](a)
                        }
                        r[t] = void 0
                    }
                }
                ;
                var u = setTimeout(function() {
                    a({
                        type: "timeout",
                        target: c
                    })
                }, 12e4);
                c.onerror = c.onload = a,
                s.appendChild(c)
            }
        return Promise.all(e)
    }
    ,
    i.m = t,
    i.c = n,
    i.d = function(t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }
    ,
    i.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    i.t = function(t, e) {
        if (1 & e && (t = i(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var n = Object.create(null);
        if (i.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var r in t)
                i.d(n, r, function(e) {
                    return t[e]
                }
                .bind(null, r));
        return n
    }
    ,
    i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return i.d(e, "a", e),
        e
    }
    ,
    i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    i.p = "",
    i.oe = function(t) {
        throw console.error(t),
        t
    }
    ,
    i.h = "b6a6358cc8b3f82348ab",
    i.cn = "AccessEnabler";
    var o = window.webpackJsonpAdobe_AccessEnabler = window.webpackJsonpAdobe_AccessEnabler || []
      , a = o.push.bind(o);
    o.push = e,
    o = o.slice();
    for (var s = 0; s < o.length; s++)
        e(o[s]);
    var c = a;
    return i(i.s = 34)
}([function(t, e, n) {
    "use strict";
    var r;
    !function(t) {
        t[t.TRACE = 0] = "TRACE",
        t[t.DEBUG = 1] = "DEBUG",
        t[t.INFO = 2] = "INFO",
        t[t.WARN = 3] = "WARN",
        t[t.ERROR = 4] = "ERROR",
        t[t.SILENT = 5] = "SILENT"
    }(r || (r = {}));
    var i = function() {
        function t() {
            this.level = 1,
            this.prefix = "",
            this.logMethods = ["trace", "debug", "info", "warn", "error"],
            this.bindConsoleLog()
        }
        return t.prototype.debug = function(t) {
            for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n]
        }
        ,
        t.prototype.warn = function(t) {
            for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n]
        }
        ,
        t.prototype.error = function(t) {
            for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n]
        }
        ,
        t.prototype.info = function(t) {
            for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n]
        }
        ,
        t.prototype.log = function(t) {
            for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n]
        }
        ,
        t.prototype.trace = function(t) {
            for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n]
        }
        ,
        t.prototype.setLevel = function(t) {
            this.level = t,
            this.bindConsoleLog()
        }
        ,
        t.prototype.setPrefix = function(t) {
            this.prefix = "[" + t + "]",
            this.bindConsoleLog()
        }
        ,
        t.prototype.bindConsoleLog = function() {
            if (console)
                for (var t in console)
                    if (console.hasOwnProperty(t)) {
                        var e = "function" == typeof console[t];
                        this.logMethods.indexOf(t) >= this.level ? this[t] = console[e ? t : "log"].bind(window.console, this.prefix + "[" + t.toString() + "]") : this[t] = function() {}
                    }
        }
        ,
        t
    }();
    e.a = new i
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return s
    });
    var r = n(2)
      , i = n(0)
      , o = n(4)
      , a = "error"
      , s = function() {
        function t() {}
        return t.Z500 = function(t) {
            return {
                errorId: "Z500",
                level: a,
                resource: t
            }
        }
        ,
        t.Z010 = function(t) {
            return {
                errorId: "Z010",
                level: "warning",
                resource: t
            }
        }
        ,
        t.Z011 = function(t) {
            return {
                errorId: "Z011",
                level: "info",
                resource: t
            }
        }
        ,
        t.Z100 = function(t, e) {
            return {
                errorId: "Z100",
                level: a,
                message: t,
                resource: e
            }
        }
        ,
        t.Z110 = function(t, e) {
            return {
                errorId: "Z110",
                level: a,
                message: t,
                resource: e
            }
        }
        ,
        t.Z120 = function(t) {
            return {
                errorId: "Z120",
                level: a,
                message: "network error",
                resource: t
            }
        }
        ,
        t.Z130 = function(t, e) {
            return {
                errorId: "Z130",
                level: a,
                message: "" === t ? "invalid resource" : t,
                resource: e
            }
        }
        ,
        t.Z169 = function(t, e) {
            return {
                errorId: "Z169",
                level: a,
                message: t,
                resource: e
            }
        }
        ,
        t.IS2XX = function(t, e) {
            return {
                errorId: t,
                level: a,
                message: e
            }
        }
        ,
        t.buildError = function(t, e, n, r, i) {
            return void 0 === e && (e = a),
            void 0 === n && (n = null),
            void 0 === r && (r = null),
            void 0 === i && (i = {}),
            i.level = e,
            n && (i.message = n),
            r && (i.subErrorId = r),
            o.a.extend({
                errorId: t
            }, i)
        }
        ,
        t.fromAuthzErrorResponse = function(e, n) {
            var o;
            if ("code"in e && "message"in e)
                i.a.warn("Received a non xhr object!"),
                o = e;
            else {
                if (!e.responseText)
                    return t.Z120(n);
                var a = e.responseText.split("details")[1];
                a && a.length > 2 && (a = a.substring(1, a.length - 2));
                var s = e.responseHeaders["authzf-error-code"]
                  , c = e.responseHeaders["authzf-sub-error-code"];
                o = c && "1010" === c ? {
                    code: r.a.USER_NOT_AUTHORIZED_ERROR,
                    subErrorCode: c,
                    message: a
                } : {
                    code: r.a.USER_NOT_AUTHORIZED_ERROR,
                    shortErrorCode: s,
                    message: a
                }
            }
            if ("authzNone" === o.shortErrorCode)
                return t.Z169(o.message, n);
            if ("invalid" === o.shortErrorCode)
                return t.Z130(o.message, n);
            if ("1010" === o.subErrorCode)
                return t.Z110(o.message, n);
            switch (o.code) {
            case r.a.USER_NOT_AUTHORIZED_ERROR:
                switch (o.message) {
                case r.a.USER_NOT_AUTHORIZED_NETWORK_ERROR:
                    return t.Z120(n);
                default:
                    return t.Z100(o.message, n)
                }
            case r.a.USER_NOT_AUTHENTICATED_ERROR:
                return t.N000;
            default:
                return t.Z500(n)
            }
        }
        ,
        t.getReasonFromErrorResponse = function(t) {
            var e = null
              , n = t.indexOf("<reason>");
            if (n >= 0) {
                var r = t.indexOf("</reason>");
                r >= 0 && (e = t.substring(n + "<reason>".length, r))
            }
            return e
        }
        ,
        t.MISSING_REQUIRED_PREREQUISITES_ERROR_STATUS = -1,
        t.PREFIX_IS = "IS",
        t.PREFIX_CFG = "CFG",
        t.SEC420 = {
            errorId: "SEC420",
            level: a
        },
        t.SEC412 = {
            errorId: "SEC412",
            level: "warning"
        },
        t.CFG100 = {
            errorId: "CFG100",
            level: "warning",
            message: "incorrect time"
        },
        t.R400 = {
            errorId: "R400",
            level: a,
            message: "application is not registered"
        },
        t.R401 = {
            errorId: "R401",
            level: a,
            message: "error fetching access token"
        },
        t.REG500 = {
            errorId: "REG500",
            level: a,
            message: "error fetching registration code"
        },
        t.N000 = {
            errorId: "N000",
            level: "info",
            message: "user not authenticated"
        },
        t.N010 = {
            errorId: "N010",
            level: "warning"
        },
        t.N011 = {
            errorId: "N011",
            level: "info",
            message: "authenticated with temp pass"
        },
        t.N111 = {
            errorId: "N111",
            level: "warning"
        },
        t.N005 = {
            errorId: "N005",
            level: "info",
            message: "authentication cancelled"
        },
        t.N500 = {
            errorId: "N500",
            level: a
        },
        t.N130 = {
            errorId: "N130",
            level: a
        },
        t.LS011 = {
            errorId: "LS011",
            level: "warning",
            message: "using volatile storage"
        },
        t.N001 = {
            errorId: "N001",
            level: "info",
            message: "passive authentication"
        },
        t.P100 = {
            errorId: "P100",
            level: a
        },
        t
    }()
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return r
    });
    var r = function() {
        function t() {}
        return t.SERVER_API_TOO_OLD = "API version too old. Please update your application.",
        t.USER_AUTHENTICATED = "User Authenticated",
        t.USER_NOT_AUTHENTICATED_ERROR = "User Not Authenticated Error",
        t.GENERIC_AUTHENTICATION_ERROR = "Generic Authentication Error",
        t.USER_NOT_AUTHORIZED_ERROR = "User not Authorized Error",
        t.GENERIC_AUTHORIZATION_ERROR = "Generic Authorization Error",
        t.USER_NOT_AUTHORIZED_NETWORK_ERROR = 'A network error occured when communicating with the provider"s authorization service',
        t.PROVIDER_NOT_SELECTED_ERROR = "Provider not Selected Error",
        t.PROVIDER_ALREADY_AUTHENTICATED = "You are already authenticated with this Provider",
        t.PROVIDER_NOT_AVAILABLE_ERROR = "Provider not Available Error",
        t.TRACK_AUTHORIZATION_DETECTION = "authorizationDetection",
        t.TRACK_AUTHENTICATION_DETECTION = "authenticationDetection",
        t.TRACK_MVPD_SELECTION = "mvpdSelection",
        t.BACKGROUND_LOGIN_IE_COOKIE = "apass-ie-background-login-cookie",
        t.MISSING_INDIVIDUALIZATION_KEY_ERROR = "Missing Individualization Key Error",
        t.INVALID_INDIVIDUALIZATION_DATA_ERROR = "Invalid Individualization Data Error",
        t
    }()
}
, function(t, e, n) {
    "use strict";
    var r = n(2)
      , i = n(8)
      , o = function() {
        function t(t, e) {
            for (var n = [], r = 2; r < arguments.length; r++)
                n[r - 2] = arguments[r];
            this.thisArg = t,
            this.fn = e,
            this.params = [],
            n && (this.params = Array.isArray(n) ? n : [n])
        }
        return t.prototype.execute = function() {
            return this.fn.apply(this.thisArg, this.params)
        }
        ,
        t
    }()
      , a = n(11)
      , s = n(9)
      , c = n(6)
      , u = n(12)
      , l = n(1)
      , h = n(0)
      , d = function() {
        function t(t) {
            this.callbackMap = {},
            this.callbackFacade = t
        }
        return t.prototype.bind = function(t, e) {
            this.validate(t),
            this.validate(e),
            this.callbackMap[t] && Array.isArray(this.callbackMap[t]) || (this.callbackMap[t] = []),
            this.callbackMap[t].push(e)
        }
        ,
        t.prototype.unbind = function(t, e) {
            if (this.validate(t),
            e && this.validate(e),
            this.callbackMap[t] && Array.isArray(this.callbackMap[t]))
                if (e) {
                    var n = this.callbackMap[t].indexOf(e);
                    n > -1 && this.callbackMap[t].splice(n, 1)
                } else
                    delete this.callbackMap[t]
        }
        ,
        t.prototype.executeCallbacks = function(t, e) {
            if (this.callbackMap[t] && Array.isArray(this.callbackMap[t]))
                for (var n = 0, r = this.callbackMap[t]; n < r.length; n++) {
                    var i = r[n]
                      , o = e ? [i].concat(e) : [i];
                    this.callbackFacade.callCallback.apply(this.callbackFacade, o)
                }
        }
        ,
        t.prototype.onErrorHandler = function(t) {
            h.a.debug("Sending", t),
            this.executeCallbacks("errorEvent", t)
        }
        ,
        t.prototype.validate = function(t) {
            if (t.length > 1024)
                throw new TypeError("InvalidArgumentError");
            if (null == t.match(/^[0-9a-zA-Z][-._a-zA-Z0-9]*$/))
                throw new TypeError("InvalidArgumentError")
        }
        ,
        t
    }()
      , g = n(4)
      , p = n(5)
      , f = n(13)
      , I = function(t, e, n) {
        return t._api_methods || (t._api_methods = {}),
        t._api_methods[e] = e,
        n
    }
      , E = n(16)
      , T = function() {
        function t() {}
        return t.getValue = function(e, n) {
            var r = N.getInstance().callCallback;
            switch (e) {
            case "TTL_AUTHN":
                t.getAuthnTTL();
                break;
            case "TTL_AUTHZ":
                t.getAuthzTTL(n);
                break;
            case "DEVICEID":
                t.getDeviceID();
                break;
            default:
                try {
                    var i = c.b.getInstance().getUserMetadata()
                      , o = t.CACHE;
                    if (!e)
                        return void r("setMetadataStatus", e, null, null);
                    if (t.isMetadataValid(i))
                        if (t.isMetadataValid(o) && o.updated >= i.updated) {
                            var a = o.data[e]
                              , s = a ? o.encrypted && g.b.inArray(e, o.encrypted) > -1 : null;
                            r("setMetadataStatus", e, s, a)
                        } else {
                            N.getInstance().getService().retrieveEncryptedMetadata(i, function(n) {
                                return function(n) {
                                    try {
                                        n = JSON.parse(n),
                                        t.CACHE = n;
                                        var i = n && n.data && n.data[e] ? n.data[e] : null
                                          , o = n && n.encrypted && g.b.inArray(e, n.encrypted) > -1;
                                        r("setMetadataStatus", e, null != i ? o : null, i)
                                    } catch (t) {
                                        h.a.error(t),
                                        r("setMetadataStatus", e, null, null)
                                    }
                                }(n)
                            }, function(t, n) {
                                return function(t, n) {
                                    n === l.a.MISSING_REQUIRED_PREREQUISITES_ERROR_STATUS ? N.getInstance().callbackManager.onErrorHandler(e) : r("setMetadataStatus", e, null, null)
                                }(0, n)
                            })
                        }
                    else
                        r("setMetadataStatus", e, null, null)
                } catch (t) {
                    r("setMetadataStatus", e, null, null)
                }
            }
        }
        ,
        t.getAuthnTTL = function() {
            var t = null
              , e = c.b.getInstance().getAuthenticationToken();
            e && e.isValid() && (t = e.getExpiryDate().getTime()),
            N.getInstance().callCallback("setMetadataStatus", "TTL_AUTHN", null, t)
        }
        ,
        t.getAuthzTTL = function(t) {
            var e = null
              , n = Array.isArray(t) && t.length > 0 ? t[0] : null;
            if (n) {
                var r = c.b.getInstance().getAuthorizationToken(N.requestorID, n);
                r && r.isValid() && (e = r.getExpiryDate().getTime())
            }
            N.getInstance().callCallback("setMetadataStatus", "TTL_AUTHZ", t, e)
        }
        ,
        t.getDeviceID = function() {
            var t = N.getInstance().callCallback
              , e = function(e, n) {
                n === l.a.MISSING_REQUIRED_PREREQUISITES_ERROR_STATUS && N.getInstance().callbackManager.onErrorHandler(e),
                t("setMetadataStatus", "DEVICEID", null, null)
            };
            E.a.getInstance().getDeviceId().then(function(n) {
                N.getInstance().getService().retrieveDeviceIDHash(n, function(e) {
                    return function(e) {
                        f.a.checkPendingLogout(e) ? (N.getInstance().ditchTokens(),
                        t("setMetadataStatus", "DEVICEID", null, null)) : t("setMetadataStatus", "DEVICEID", null, e)
                    }(e)
                }, function(t, n) {
                    return e(t, n)
                })
            }, function(t) {
                e(t, l.a.MISSING_REQUIRED_PREREQUISITES_ERROR_STATUS)
            })
        }
        ,
        t.isMetadataValid = function(t) {
            return t && t.data && t.updated
        }
        ,
        t.CACHE = null,
        t
    }()
      , v = function() {
        function t(t) {
            this.info = t,
            this.clientInfo = {
                callSetConfig: !1,
                backgroundLogin: !1,
                backgroundLogout: !1,
                visitorID: ""
            },
            this.mvpdConfigs = {},
            this.mvpdConfigDefault = {
                iFrameRequired: !1,
                iFrameWidth: 0,
                iFrameHeight: 0
            },
            this.parseClientInfo(t),
            this.parseMvpdConfig(t),
            h.a.debug("Parsed ClientInfo data", this.clientInfo, this.mvpdConfigs)
        }
        return t.prototype.callSetConfig = function() {
            return this.clientInfo.callSetConfig
        }
        ,
        t.prototype.getVisitorID = function() {
            return this.clientInfo.visitorID
        }
        ,
        t.prototype.isBackgroundLogin = function() {
            return this.clientInfo.backgroundLogin
        }
        ,
        t.prototype.isBackgroundLogout = function() {
            return this.clientInfo.backgroundLogout
        }
        ,
        t.prototype.getMvpdConfig = function() {
            return this.mvpdConfigs
        }
        ,
        t.prototype.isIFrameRequiredForMvpd = function(t) {
            var e = this.mvpdConfigs[t];
            return e ? e.iFrameRequired : null
        }
        ,
        t.prototype.parseClientInfo = function(t) {
            for (var e in this.clientInfo)
                t && t.hasOwnProperty(e) && typeof this.clientInfo[e] == typeof t[e] && (this.clientInfo[e] = t[e])
        }
        ,
        t.prototype.parseMvpdConfig = function(t) {
            var e = t && t.mvpdConfig;
            if (!g.a.isEmpty(e))
                for (var n in h.a.error(e),
                e)
                    if (e.hasOwnProperty(n)) {
                        var r = e[n]
                          , i = {};
                        for (var o in this.mvpdConfigDefault)
                            r && r.hasOwnProperty(o) && typeof this.mvpdConfigDefault[o] == typeof r[o] && (i[o] = r[o]);
                        i !== {} && (this.mvpdConfigs[n] = g.a.extend({}, this.mvpdConfigDefault, i))
                    }
        }
        ,
        t
    }()
      , A = n(23)
      , R = n(7)
      , m = function() {
        function t() {}
        return t.KEY_VISITOR_ID = "ap_vi",
        t
    }()
      , y = n(14);
    n.d(e, "a", function() {
        return N
    });
    var S = function(t, e, n, r) {
        var i, o = arguments.length, a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
            a = Reflect.decorate(t, e, n, r);
        else
            for (var s = t.length - 1; s >= 0; s--)
                (i = t[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(e, n, a) : i(e, n)) || a);
        return o > 3 && a && Object.defineProperty(e, n, a),
        a
    }
      , _ = n(26)
      , O = n(24)
      , D = n(17)
      , N = function() {
        function t(t) {
            var e = this;
            this.callbackManager = new d(this),
            this.spHost = "sp.auth.adobe.com",
            this.methodInvokingAuthorization = null,
            this.cachedAuthorization = !1,
            this.cachedAuthentication = !0,
            this.authenticationInProgress = !1,
            this.pendingAuthorizationInProgress = !1,
            this.authorizationExtraParameters = null,
            this.authenticationExtraParameters = null,
            this.resourceID = null,
            this.redirectURL = null,
            this.pendingCallsQueue = [],
            this.backgroundLoginInProgress = null,
            this.configuration = null,
            this.retryDueToInvalidIndividualization = !0,
            this.softwareStatement = t;
            var n = new D(A.a.get(),null,!0);
            h.a.info("Version: 4.1.1-fd6751b " + (this.isDebug(n) ? "DEBUG" : "RELEASE")),
            h.a.setLevel(this.isDebug(n) ? 1 : 4),
            this.loadProxy(n),
            this.configureApassEndpoints(n),
            this.addGenericEvent("message", function(t) {
                return e.passiveAuthnHandler(t)
            }),
            this.addGenericEvent("message", function(t) {
                return e.receiveMessage(t)
            })
        }
        return t.getInstance = function(e) {
            return this.instance || (this.instance = new t(e)),
            this.instance
        }
        ,
        t.prototype.completeBackgroundLogout = function() {
            h.a.debug("completeBackgroundLogout"),
            this.callCallback("setAuthenticationStatus", 0, ""),
            this.callbackManager.onErrorHandler(l.a.N000)
        }
        ,
        t.prototype.doBackgroundLogout = function(t) {
            h.a.debug("Performing background logout..."),
            this.callCallback("doBackgroundLogout", t)
        }
        ,
        t.prototype.ditchTokens = function() {
            this.storageManager.switchToSessionStorage(),
            this.storageManager.resetStorage(),
            this.storageManager.switchToLocalStorage(),
            this.storageManager.resetStorage(),
            T.CACHE = null
        }
        ,
        t.prototype.authnSuccess = function(t) {
            var e;
            if (f.a.checkPendingLogout(t))
                this.ditchTokens();
            else {
                this.configuration.resetAuthenticationProviderURL();
                var n = p.a.getNodeText("authnToken", t);
                e = new s.a(n)
            }
            if (this.storageManager.setRegCode(null),
            e && e.isValid()) {
                h.a.debug("Successfully retrieved authn token"),
                this.cachedAuthentication = !1;
                var r = e.getMVPDID()
                  , i = this.mvpdManager.getMVPDByID(r);
                this.mvpdManager.setCurrentMvpdID(r),
                i && !i.tempPass && this.storageManager.setCanAuthenticate(!0),
                this.storageManager.setAuthenticationToken(e);
                var o = p.a.getNodeText("userMeta", t);
                this.storageManager.setUserMetadata(o),
                T.CACHE = null,
                this.backgroundLoginInProgress && this.backgroundLoginSuccessHelper(e, i),
                this.configuration.initialized || this.configurationInitializedHelper()
            } else
                this.authnError(t, null, null, e)
        }
        ,
        t.prototype.authnError = function(t, e, n, r) {
            var i = this;
            if (void 0 === r && (r = null),
            e === l.a.MISSING_REQUIRED_PREREQUISITES_ERROR_STATUS)
                return h.a.warn("Authentication token retrieval failed due to missing required prerequisites!"),
                this.callbackManager.onErrorHandler(t),
                void this.completeAuthnError();
            if (400 === e && this.retryDueToInvalidIndividualization && ("34763" === l.a.getReasonFromErrorResponse(n.responseText) || "34764" === l.a.getReasonFromErrorResponse(n.responseText)))
                return h.a.warn("Authentication token retrieval failed due to invalid individualization. Will retry the call!"),
                this.retryDueToInvalidIndividualization = !1,
                this.storageManager.clearDeviceId(),
                void this.service.retrieveAuthenticationToken(function(t) {
                    return i.authnSuccess(t)
                }, function(t, e, n) {
                    return i.authnError(t, e, n)
                });
            if (this.configuration.resetAuthenticationProviderURL(),
            401 === e || 400 === e && "34763" === l.a.getReasonFromErrorResponse(n.responseText) ? this.callbackManager.onErrorHandler(l.a.N130) : this.callbackManager.onErrorHandler(l.a.N000),
            r) {
                if (r.isExpired()) {
                    var o = this.mvpdManager.getCurrentMvpdID();
                    if (o) {
                        var a = this.mvpdManager.getMVPDByID(o);
                        a && a.tempPass && this.callbackManager.onErrorHandler(l.a.N111)
                    }
                }
            } else
                h.a.error("Error retrieving authentication token:", t);
            this.completeAuthnError()
        }
        ,
        t.prototype.completeBackgroundLogin = function() {
            h.a.debug("completeBackgroundLogin");
            var t = this.mvpdManager.getCurrentMvpdID();
            if (t) {
                var e = this.mvpdManager.getMVPDByID(t);
                e && e.iFrameRequired && (h.a.debug("Calling destroyIFrame."),
                this.callCallback("destroyIFrame"))
            }
            this.configuration.retrieveAuthenticationToken()
        }
        ,
        t.prototype.callCallback = function(t) {
            for (var e = this, n = [], r = 1; r < arguments.length; r++)
                n[r - 1] = arguments[r];
            setTimeout(function() {
                switch (h.a.debug("Callback: " + t + "()"),
                t) {
                case "reload":
                    location.reload();
                    break;
                case "openIFrame":
                    createIFrame(n[1], n[2]);
                    var r = n[0] + "&" + y.a.param({
                        redirect_url: e.getRedirectURL(n[3])
                    })
                      , i = document.getElementsByName("mvpdframe");
                    i.length > 0 ? (h.a.debug("iframe url: ", r),
                    i[0].setAttribute("src", r)) : (h.a.debug("popup url: ", r),
                    e.openLoginWindow(r, "mvpdframe"));
                    break;
                case "navigateToURL":
                    var o = n[0] + "&" + y.a.param({
                        redirect_url: e.getRedirectURL(n[1])
                    });
                    h.a.debug("navigateToUrl:", o),
                    n[2] ? e.openLoginWindow(o, "mvpdwindow") : window.location.href = o;
                    break;
                case "doBackgroundLogout":
                    e.createHiddenIframe("com_adobe_pass_background_logout", n[0]);
                    break;
                default:
                    var a = window.eval.call(window, t);
                    if (void 0 === a)
                        return void h.a.warn("Callback < " + t + " > is NOT implemented");
                    a.apply(window, n)
                }
            }, 4)
        }
        ,
        t.prototype.bind = function(t, e) {
            void 0 === e && (e = void 0),
            h.a.debug("bind(" + t + ", " + e + ")"),
            this.callbackManager.bind(t, e)
        }
        ,
        t.prototype.unbind = function(t, e) {
            void 0 === e && (e = void 0),
            this.callbackManager.unbind(t, e)
        }
        ,
        t.prototype.getProxyMVPD = function() {
            var t = null
              , e = this.storageManager.getAuthenticationToken();
            if (e) {
                var n = e.getMVPDID()
                  , r = e.getSubMVPDID();
                n && r && "" !== n && "" !== r && (t = n)
            }
            this.callCallback("proxyMVPD", t)
        }
        ,
        t.prototype.setRequestor = function(e) {
            var n = this;
            void 0 === e && (e = "");
            for (var r = [], o = 1; o < arguments.length; o++)
                r[o - 1] = arguments[o];
            g.a.isEmpty(c.b.error) || (this.callbackManager.onErrorHandler(c.b.error),
            c.b.error = null);
            var s = null
              , u = {};
            _(r, function(t) {
                Array.isArray(t) ? s = t : u = t
            }),
            u.callSetConfig = "function" == typeof setConfig,
            t.clientInfo = new v(u);
            var l = t.clientInfo.getVisitorID();
            g.a.isEmpty(l) || (R.a.globalData[m.KEY_VISITOR_ID] = l),
            T.CACHE = null,
            t.requestorID = String(e),
            h.a.debug("processing setRequestor(" + t.requestorID + "," + s + ")"),
            this.service = new i.a(a.a.serviceProviderURL,t.requestorID),
            this.mvpdManager.clearRequestorMVPDs(),
            this.configuration = new a.a(t.requestorID,null != t.clientInfo && t.clientInfo.callSetConfig(),function() {
                return n.onConfigurationInitialized()
            }
            ),
            this.configuration.initialize(s),
            this.retryDueToInvalidIndividualization = !0
        }
        ,
        t.prototype.getSelectedProvider = function() {
            if (this.configuration && this.configuration.initialized) {
                h.a.debug("Processing getSelectedProvider()");
                var t = "New User"
                  , e = this.mvpdManager.getCurrentMvpdID();
                if (e) {
                    var n = this.storageManager.getAuthenticationToken();
                    if (n) {
                        var r = n.getSubMVPDID();
                        r && "" !== r && (e = r),
                        t = n.isValid() ? "User Authenticated" : "User Not Authenticated"
                    }
                }
                this.callCallback("selectedProvider", {
                    MVPD: e,
                    AE_State: t
                })
            } else
                h.a.debug("put getSelectedProvider() in call queue"),
                this.pendingCallsQueue.push(new o(this,this.getSelectedProvider))
        }
        ,
        t.prototype.setSelectedProvider = function(e) {
            this.configuration && this.configuration.initialized ? (h.a.debug("Processing setSelectedProvider()", e),
            e && e.length > 0 ? this.authenticationInProgress ? (this.mvpdManager.setCurrentMvpdID(e),
            this.service = new i.a(this.mvpdManager.getCurrentSP(),t.requestorID),
            this.sendTrackingData(r.a.TRACK_MVPD_SELECTION),
            this.isRedirectedToMvpdLoginPage() || (this.callbackManager.onErrorHandler(l.a.N500),
            this.callCallback("setAuthenticationStatus", 0, r.a.GENERIC_AUTHENTICATION_ERROR))) : String(e) === this.mvpdManager.getCurrentMvpdID() ? this.callCallback("setAuthenticationStatus", 1, r.a.PROVIDER_ALREADY_AUTHENTICATED) : (this.callbackManager.onErrorHandler(l.a.N500),
            this.callCallback("setAuthenticationStatus", 0, r.a.GENERIC_AUTHENTICATION_ERROR)) : (this.mvpdManager.setCurrentMvpdID(null),
            this.authenticationInProgress = !1,
            this.backgroundLoginInProgress = !1,
            this.pendingAuthorizationInProgress && this.completeAuthorizationInternalFlow(),
            this.callbackManager.onErrorHandler(l.a.N005),
            this.callCallback("setAuthenticationStatus", 0, r.a.PROVIDER_NOT_SELECTED_ERROR),
            this.sendTrackingData(r.a.TRACK_AUTHENTICATION_DETECTION, !1))) : (h.a.debug("put setSelectedProvider() in call queue"),
            this.pendingCallsQueue.push(new o(this,this.setSelectedProvider,e)))
        }
        ,
        t.prototype.getAuthorization = function(t, e, n) {
            void 0 === e && (e = void 0),
            void 0 === n && (n = void 0),
            this.configuration && this.configuration.initialized ? (this.resourceID = t,
            this.authorizationExtraParameters = n,
            this.methodInvokingAuthorization = "getAuthorization",
            this.getAuthenticationInternalStatusMessages() === r.a.USER_AUTHENTICATED ? this.startAuthorizationInternalFlow(this.resourceID, this.authorizationExtraParameters) : (this.pendingAuthorizationInProgress = !0,
            this.getAuthentication([e, this.authorizationExtraParameters]))) : (h.a.debug("put getAuthorization() in call queue"),
            this.pendingCallsQueue.push(new o(this,this.getAuthorization,t,e,n)))
        }
        ,
        t.prototype.checkAuthorization = function(t, e) {
            void 0 === e && (e = void 0),
            this.configuration && this.configuration.initialized ? (this.resourceID = t,
            this.authorizationExtraParameters = e,
            this.methodInvokingAuthorization = "checkAuthorization",
            this.getAuthenticationInternalStatusMessages() === r.a.USER_AUTHENTICATED ? this.startAuthorizationInternalFlow(this.resourceID, this.authorizationExtraParameters) : this.onAuthorizationError(null, null, {
                code: r.a.USER_NOT_AUTHENTICATED_ERROR,
                message: "",
                resourceID: t
            })) : (h.a.debug("put checkAuthorization() in call queue"),
            this.pendingCallsQueue.push(new o(this,this.checkAuthorization,t,e)))
        }
        ,
        t.prototype.getAuthentication = function(t, e) {
            void 0 === t && (t = void 0),
            void 0 === e && (e = void 0),
            this.configuration && this.configuration.initialized ? (h.a.debug("Processing getAuthentication()!"),
            t && (this.redirectURL = t),
            e && (this.authenticationExtraParameters = e),
            this.getAuthenticationInternalStatusMessages() === r.a.USER_AUTHENTICATED ? (this.callCallback("setAuthenticationStatus", 1, ""),
            this.sendTrackingData(r.a.TRACK_AUTHENTICATION_DETECTION, !0)) : this.startAuthenticationInternalFlow()) : (h.a.debug("put getAuthentication() in call queue"),
            this.pendingCallsQueue.push(new o(this,this.getAuthentication,t,e)))
        }
        ,
        t.prototype.checkAuthentication = function() {
            if (this.configuration && this.configuration.initialized) {
                var t;
                h.a.debug("Processing checkAuthentication()!");
                var e = this.getAuthenticationInternalStatusMessages();
                if (e === r.a.USER_AUTHENTICATED)
                    t = 1,
                    e = "",
                    this.mvpdManager.getMVPDByID(this.storageManager.getMvpdID()).tempPass && this.callbackManager.onErrorHandler(l.a.N011),
                    this.storageManager.getAuthenticationToken().isAuthNAll() && this.callbackManager.onErrorHandler(l.a.N010),
                    this.sendTrackingData(r.a.TRACK_AUTHENTICATION_DETECTION, !0);
                else
                    t = 0,
                    this.sendTrackingData(r.a.TRACK_AUTHENTICATION_DETECTION, !1),
                    this.callbackManager.onErrorHandler(e === r.a.USER_NOT_AUTHENTICATED_ERROR ? l.a.N000 : l.a.N500);
                this.callCallback("setAuthenticationStatus", t, e)
            } else
                h.a.debug("put checkAuthentication() in call queue"),
                this.pendingCallsQueue.push(new o(this,this.checkAuthentication))
        }
        ,
        t.prototype.getMetadata = function(t, e) {
            void 0 === e && (e = []),
            this.configuration && this.configuration.initialized ? this.storageManager.getAuthenticationToken() ? T.getValue(t, e) : this.callCallback("setMetadataStatus", t, null, null) : (h.a.debug("put getMetadata() in call queue"),
            this.pendingCallsQueue.push(new o(this,this.getMetadata,t,e)))
        }
        ,
        t.prototype.checkPreauthorizedResources = function(t, e) {
            var n = this;
            if (void 0 === t && (t = []),
            void 0 === e && (e = !0),
            this.configuration && this.configuration.initialized) {
                var r = this.storageManager.getAuthenticationToken();
                if (r && r.isValid()) {
                    var i = r.getAuthorizedResources();
                    if (i && i.length > 0) {
                        for (var a = new Array, s = 0, c = i.length; s < c; s++)
                            a.push(i[s].getAuthorizedResourceID().toUpperCase());
                        var u = this.intersectPreflight(t, a);
                        this.callCallback("preauthorizedResources", u)
                    } else if (e && this.requestedResourcesEqualsPreauthorizationCache(t))
                        this.callCallback("preauthorizedResources", this.getAuthorizedResourcesFromPreauthorizationCache());
                    else {
                        var d = function(t, e) {
                            e === l.a.MISSING_REQUIRED_PREREQUISITES_ERROR_STATUS ? (h.a.warn("/preauthorize call was not made - returning empty preauthorizedResources array"),
                            n.callCallback("preauthorizedResources", []),
                            n.callbackManager.onErrorHandler(t)) : (h.a.warn("/preauthorize call failed - returning empty preauthorizedResources array"),
                            n.callCallback("preauthorizedResources", []),
                            n.callbackManager.onErrorHandler(l.a.P100))
                        };
                        this.service.checkPreauthorizedResources(t, function(t, e) {
                            if (200 === e) {
                                var r = []
                                  , i = [];
                                if (t) {
                                    var o = p.a.getNodes("resource", t);
                                    _(o, function(t) {
                                        var e = {
                                            id: p.a.getNodeText("id", t),
                                            authorized: "true" === p.a.getNodeText("authorized", t).toLowerCase()
                                        };
                                        r.push(e),
                                        e.authorized && i.push(e.id)
                                    })
                                }
                                n.storageManager.setPreauthorizationCache(r),
                                n.callCallback("preauthorizedResources", i)
                            } else
                                d(t, e)
                        }, d)
                    }
                }
            } else
                h.a.debug("put checkPreauthorizedResources() in call queue"),
                this.pendingCallsQueue.push(new o(this,this.checkPreauthorizedResources,t,e))
        }
        ,
        t.prototype.logout = function() {
            if (this.configuration && this.configuration.initialized) {
                h.a.debug("Processing logout()!"),
                this.authenticationInProgress = !1;
                var t = this.storageManager.getAuthenticationToken();
                this.configuration.isValidRequestor() && this.ditchTokens(),
                this.service.logout(t)
            } else
                h.a.debug("put logout() in call queue"),
                this.pendingCallsQueue.push(new o(this,this.logout))
        }
        ,
        t.prototype.getStorageData = function() {
            this.callCallback("storageData", this.storageManager.getStorageData())
        }
        ,
        t.prototype.sendTrackingData = function(e, n, i, o) {
            void 0 === n && (n = !1),
            void 0 === i && (i = null),
            void 0 === o && (o = null);
            var a = null
              , s = this.mvpdManager.getCurrentMvpdID()
              , c = null
              , u = this.storageManager.getAuthenticationToken();
            switch (u && u.getSubMVPDID() && (c = s,
            s = u.getSubMVPDID()),
            e) {
            case r.a.TRACK_MVPD_SELECTION:
                a = [this.mvpdManager.getCurrentMvpdID(), t.deviceInfo.deviceType, t.deviceInfo.clientType, t.deviceInfo.os];
                break;
            case r.a.TRACK_AUTHENTICATION_DETECTION:
                n ? (a = [!0, s, O(u.getProperty("simpleTokenAuthenticationGuid")), this.cachedAuthentication, t.deviceInfo.deviceType, t.deviceInfo.clientType, t.deviceInfo.os, c],
                this.cachedAuthentication = !0) : a = [!1, null, null, null, t.deviceInfo.deviceType, t.deviceInfo.clientType, t.deviceInfo.os, null];
                break;
            case r.a.TRACK_AUTHORIZATION_DETECTION:
                a = n ? [!0, s, O(u.getProperty("simpleTokenAuthenticationGuid")), this.cachedAuthorization, i, o, t.deviceInfo.deviceType, t.deviceInfo.clientType, t.deviceInfo.os, c] : [!1, s, u ? O(u.getProperty("simpleTokenAuthenticationGuid")) : null, this.cachedAuthorization, i, o, t.deviceInfo.deviceType, t.deviceInfo.clientType, t.deviceInfo.os, c]
            }
            this.callCallback("sendTrackingData", e, a)
        }
        ,
        t.prototype.getService = function() {
            return this.service
        }
        ,
        t.prototype.getSoftwareStatement = function() {
            return this.softwareStatement
        }
        ,
        t.prototype.intersectPreflight = function(t, e) {
            var n = [];
            if (t && e)
                for (var r = 0, i = t; r < i.length; r++) {
                    var o = i[r];
                    e.indexOf(o.toUpperCase()) >= 0 && n.push(o)
                }
            return n
        }
        ,
        t.prototype.getAuthorizedResourcesFromPreauthorizationCache = function() {
            for (var t = this.storageManager.getPreauthorizationCache(), e = new Array, n = 0, r = t.length; n < r; n++)
                !0 === t[n].authorized && e.push(t[n].id);
            return e
        }
        ,
        t.prototype.requestedResourcesEqualsPreauthorizationCache = function(t) {
            var e = this.storageManager.getPreauthorizationCache();
            if (e.length !== t.length)
                return !1;
            for (var n = 0, r = t; n < r.length; n++) {
                var i = r[n];
                if (-1 === g.b.inArray(i, e))
                    return !1
            }
            return !0
        }
        ,
        t.prototype.getAuthenticationInternalStatusMessages = function() {
            var t = this.storageManager.getAuthenticationToken();
            return t && t.isValid() ? this.mvpdManager.isValidMVPD(t.getMVPDID()) ? r.a.USER_AUTHENTICATED : r.a.GENERIC_AUTHENTICATION_ERROR : this.configuration.isValidRequestor() ? r.a.USER_NOT_AUTHENTICATED_ERROR : r.a.GENERIC_AUTHENTICATION_ERROR
        }
        ,
        t.prototype.isRedirectedToMvpdLoginPage = function() {
            var e = !1;
            if (this.authenticationInProgress) {
                var n = this.mvpdManager.getCurrentMvpdID();
                if (n) {
                    var r = this.mvpdManager.getMVPDByID(n);
                    r && (this.backgroundLoginInProgress = t.clientInfo && t.clientInfo.isBackgroundLogin(),
                    this.service.goToLoginPage(r, this.redirectURL, this.authenticationExtraParameters),
                    e = !0)
                }
            }
            return e
        }
        ,
        t.prototype.backgroundLoginSuccessHelper = function(t, e) {
            this.backgroundLoginInProgress = !1,
            t && t.isAuthNAll() && this.callbackManager.onErrorHandler(l.a.N010),
            e && e.tempPass && this.callbackManager.onErrorHandler(l.a.N011),
            this.pendingAuthorizationInProgress ? null !== this.resourceID ? (h.a.debug("Performing authorization for pending resource: " + this.resourceID + " and extra parameters: " + this.authorizationExtraParameters),
            this.getAuthorization(this.resourceID, null, this.authorizationExtraParameters)) : (this.callbackManager.onErrorHandler(l.a.Z100),
            this.callCallback("tokenRequestFailed", this.resourceID, r.a.GENERIC_AUTHORIZATION_ERROR, ""),
            this.sendTrackingData(r.a.TRACK_AUTHORIZATION_DETECTION, !1, r.a.GENERIC_AUTHORIZATION_ERROR, ""),
            this.completeAuthorizationInternalFlow()) : (this.callCallback("setAuthenticationStatus", "1", ""),
            this.sendTrackingData(r.a.TRACK_AUTHENTICATION_DETECTION, !0))
        }
        ,
        t.prototype.completeAuthorizationInternalFlow = function() {
            this.pendingAuthorizationInProgress = !1,
            this.methodInvokingAuthorization = null,
            this.authorizationExtraParameters = null,
            this.resourceID = null
        }
        ,
        t.prototype.onAuthorizationComplete = function(t, e, n) {
            var r = this;
            if (f.a.checkPendingLogout(t))
                return this.ditchTokens(),
                "34764" === f.a.getPendingLogoutReason(t) && (h.a.warn("Device id mismatch!"),
                this.callbackManager.onErrorHandler(l.a.SEC412),
                this.storageManager.clearDeviceId()),
                void ("getAuthorization" === this.methodInvokingAuthorization ? this.getAuthorization(this.resourceID) : this.checkAuthorization(this.resourceID));
            try {
                t = g.c.parseXML(t)
            } catch (r) {
                return h.a.warn("Authorization failed"),
                void this.onAuthorizationError(t, e, n)
            }
            var i = p.a.getNodeText("authzToken", t);
            if (!i)
                return h.a.warn("Authorization failed"),
                void this.onAuthorizationError(t, e, n);
            var o = new s.a(i);
            if (o && o.isValid()) {
                h.a.debug("Successfully retrieved authorization token!"),
                this.storageManager.setAuthorizationToken(o);
                var a = p.a.getNodeText("userMeta", t);
                a && (h.a.debug("Merging user metadata tokens."),
                this.storageManager.mergeUserMetadata(a),
                T.CACHE = null),
                this.service.retrieveMediaToken(o, JSON.stringify({}), function(t, e, n) {
                    return r.onMediaTokenComplete(t, e, n)
                }, function(t, e, n) {
                    return r.onMediaTokenError(t, e, n)
                })
            } else
                this.onAuthorizationError(t, e, n)
        }
        ,
        t.prototype.onMediaTokenComplete = function(e, n, i) {
            var o = new s.a(e).getResourceID();
            if (f.a.checkPendingLogout(e))
                this.ditchTokens(),
                "58772" === f.a.getPendingLogoutReason(e) && (h.a.warn("Device id mismatch!"),
                this.callbackManager.onErrorHandler(l.a.SEC412),
                this.storageManager.clearDeviceId()),
                "getAuthorization" === this.methodInvokingAuthorization ? this.getAuthorization(o) : this.checkAuthorization(o);
            else {
                h.a.debug("Successfully retrieved media token!"),
                this.callCallback("setToken", o, e),
                this.sendTrackingData(r.a.TRACK_AUTHORIZATION_DETECTION, !0);
                var a = this.storageManager.getAuthorizationToken(t.requestorID, o);
                a && a.isAuthZAll() && this.callbackManager.onErrorHandler(l.a.Z010(o));
                var c = this.mvpdManager.getCurrentMvpd();
                c && c.tempPass && this.callbackManager.onErrorHandler(l.a.Z011(o)),
                this.completeAuthorizationInternalFlow()
            }
        }
        ,
        t.prototype.onAuthorizationError = function(t, e, n) {
            var i = n.resourceID;
            if (e === l.a.MISSING_REQUIRED_PREREQUISITES_ERROR_STATUS)
                h.a.warn("Authorization token retrieval failed due to missing required prerequisites!"),
                this.callbackManager.onErrorHandler(t),
                this.callCallback("tokenRequestFailed", i, r.a.GENERIC_AUTHORIZATION_ERROR, ""),
                this.sendTrackingData(r.a.TRACK_AUTHORIZATION_DETECTION, !1, r.a.GENERIC_AUTHORIZATION_ERROR, ""),
                this.completeAuthorizationInternalFlow();
            else if (400 === e && "34763" === l.a.getReasonFromErrorResponse(n.responseText))
                this.storageManager.clearDeviceId(),
                this.retryDueToInvalidIndividualization ? (h.a.warn("Authorization token retrieval failed due to invalid individualization. Will retry the call!"),
                this.retryDueToInvalidIndividualization = !1,
                this.startAuthorizationInternalFlow(i, this.authorizationExtraParameters)) : (this.callbackManager.onErrorHandler(l.a.N130),
                this.completeAuthorizationInternalFlow());
            else {
                var o = this.parseErrorResponse(n);
                this.callbackManager.onErrorHandler(l.a.fromAuthzErrorResponse(n, i)),
                this.callCallback("tokenRequestFailed", i, o.code, o.message),
                this.sendTrackingData(r.a.TRACK_AUTHORIZATION_DETECTION, !1, o.code, o.message),
                this.completeAuthorizationInternalFlow()
            }
        }
        ,
        t.prototype.onMediaTokenError = function(t, e, n) {
            if (e === l.a.MISSING_REQUIRED_PREREQUISITES_ERROR_STATUS)
                h.a.warn("Media token retrieval failed due to missing required prerequisites!"),
                this.callbackManager.onErrorHandler(t),
                this.callCallback("tokenRequestFailed", this.resourceID, r.a.GENERIC_AUTHORIZATION_ERROR, ""),
                this.sendTrackingData(r.a.TRACK_AUTHORIZATION_DETECTION, !1, r.a.GENERIC_AUTHORIZATION_ERROR, ""),
                this.completeAuthorizationInternalFlow();
            else if (400 === e && "34763" === l.a.getReasonFromErrorResponse(n.responseText))
                this.storageManager.clearDeviceId(),
                this.retryDueToInvalidIndividualization ? (h.a.warn("Media token retrieval failed due to invalid individualization. Will retry the call!"),
                this.retryDueToInvalidIndividualization = !1,
                this.startAuthorizationInternalFlow(this.resourceID, this.authorizationExtraParameters)) : (this.callbackManager.onErrorHandler(l.a.N130),
                this.completeAuthorizationInternalFlow());
            else {
                var i = this.parseErrorResponse(n);
                this.callCallback("tokenRequestFailed", this.resourceID, r.a.USER_NOT_AUTHORIZED_ERROR, i.message),
                this.sendTrackingData(r.a.TRACK_AUTHORIZATION_DETECTION, !1, r.a.USER_NOT_AUTHORIZED_ERROR, i.message),
                this.completeAuthorizationInternalFlow()
            }
        }
        ,
        t.prototype.startAuthorizationInternalFlow = function(e, n) {
            var r = this
              , i = this.storageManager.getAuthorizationToken(t.requestorID, e);
            i && i.isValid() ? (h.a.debug("Authorization token found and valid!"),
            this.cachedAuthorization = !0,
            this.service.retrieveMediaToken(i, JSON.stringify({}), function(t, e, n) {
                return r.onMediaTokenComplete(t, e, n)
            }, function(t, e, n) {
                return r.onMediaTokenError(t, e, n)
            })) : (h.a.debug("Authorization token not found or invalid!"),
            this.cachedAuthorization = !1,
            this.service.retrieveAuthorizationToken(Array.isArray(e) ? e[0] : e, n, function(t, e, n) {
                return r.onAuthorizationComplete(t, e, n)
            }, function(t, e, n) {
                return r.onAuthorizationError(t, e, n)
            }))
        }
        ,
        t.prototype.completeAuthnError = function() {
            this.backgroundLoginInProgress && this.backgroundLoginFailHelper(),
            this.configuration.initialized || this.configurationInitializedHelper(),
            this.storageManager.setRegCode(null)
        }
        ,
        t.prototype.backgroundLoginFailHelper = function() {
            this.backgroundLoginInProgress = !1,
            this.pendingAuthorizationInProgress ? (this.callCallback("tokenRequestFailed", this.resourceID, r.a.GENERIC_AUTHORIZATION_ERROR, ""),
            this.sendTrackingData(r.a.TRACK_AUTHORIZATION_DETECTION, !1, r.a.GENERIC_AUTHORIZATION_ERROR, ""),
            this.completeAuthorizationInternalFlow()) : (this.callCallback("setAuthenticationStatus", "0", r.a.USER_NOT_AUTHENTICATED_ERROR),
            this.sendTrackingData(r.a.TRACK_AUTHENTICATION_DETECTION, !1))
        }
        ,
        t.prototype.mustRetrieveAuthenticationPerRequestorForMvpd = function(t) {
            return t && t.authPerAggregator && t.passiveAuthnEnabled && null === this.storageManager.getAuthenticationToken() && this.storageManager.searchForFirstValidAuthenticationTokenForCurrentMvpd()
        }
        ,
        t.prototype.onConfigurationInitialized = function() {
            var e = this.mvpdManager.getCurrentSP();
            g.a.isEmpty(e) || (this.service = new i.a(e,t.requestorID));
            var n = this.mvpdManager.getCurrentMvpdID()
              , r = this.mvpdManager.getMVPDByID(n);
            this.mvpdManager.switchToCurrentMvpdStorageType(n),
            this.mustRetrieveAuthenticationPerRequestorForMvpd(r) ? (h.a.debug("Attempt to retrieve authn per requestor token."),
            this.doPassiveAuthentication(),
            this.callbackManager.onErrorHandler(l.a.N001)) : this.configurationInitializedHelper()
        }
        ,
        t.prototype.configurationInitializedHelper = function() {
            this.removeGenericEvent("configInit", this.onConfigurationInitialized);
            var e = this.mvpdManager.getCurrentSP();
            if (g.a.isEmpty(e) || (this.service = new i.a(e,t.requestorID)),
            this.configuration.initialized = !0,
            t.clientInfo && t.clientInfo.callSetConfig()) {
                var n = this.configuration.getConfigForProgrammer();
                n || (n = ""),
                this.callCallback("setConfig", n)
            }
            for (var r = 0, o = this.pendingCallsQueue; r < o.length; r++) {
                var a = o[r];
                h.a.debug("Executing pending call: "),
                a.execute()
            }
            this.pendingCallsQueue.length = 0
        }
        ,
        t.prototype.startAuthenticationInternalFlow = function() {
            this.authenticationInProgress = !0;
            var t = !1;
            if (this.storageManager.getCanAuthenticate() && (this.storageManager.setCanAuthenticate(!1),
            t = this.isRedirectedToMvpdLoginPage()),
            !t) {
                this.storageManager.setCanAuthenticate(!1);
                var e = []
                  , n = this.mvpdManager.getRequestorMVPDs();
                for (var i in n)
                    if (n.hasOwnProperty(i)) {
                        var o = n[i];
                        e.push({
                            ID: o.id,
                            displayName: o.displayName,
                            logoURL: o.logoUrl
                        })
                    }
                e.length > 0 ? this.callCallback("displayProviderDialog", e) : (this.callbackManager.onErrorHandler(l.a.N500),
                this.callCallback("setAuthenticationStatus", 0, r.a.GENERIC_AUTHENTICATION_ERROR))
            }
        }
        ,
        t.prototype.doPassiveAuthentication = function() {
            var e = this;
            h.a.debug("Performing passive authentication...");
            var n = this.mvpdManager.getCurrentMvpdID()
              , r = this.mvpdManager.getMVPDByID(n);
            this.service.getLoginPageUrl(!0, r, this.authenticationExtraParameters, !1).then(function(n) {
                e.backgroundLoginInProgress = t.clientInfo && t.clientInfo.isBackgroundLogin(),
                g.b.createHiddenIframe("com_adobe_pass_passive_authn", n)
            })
        }
        ,
        t.prototype.completePassiveAuthentication = function() {
            var t = this;
            h.a.debug("completePassiveAuthentication"),
            this.service.retrieveAuthenticationToken(function(e) {
                return t.authnSuccess(e)
            }, function(e, n, r) {
                return t.authnError(e, n, r)
            })
        }
        ,
        t.prototype.configureApassEndpoints = function(t) {
            t && t.host && t.host.match(/(.*)-staging.(.*)/) && (this.spHost = "sp.auth-staging.adobe.com"),
            a.a.serviceProviderURL = "https://" + this.spHost + "/adobe-services",
            h.a.info("Running against: " + this.spHost)
        }
        ,
        t.prototype.addGenericEvent = function(t, e) {
            window.addEventListener ? window.addEventListener(t, e, !1) : window.attachEvent("on" + t, e)
        }
        ,
        t.prototype.removeGenericEvent = function(t, e) {
            window.removeEventListener ? window.removeEventListener(t, e, !1) : window.detachEvent("on" + t, e)
        }
        ,
        t.prototype.passiveAuthnHandler = function(t) {
            t && "PASSIVE_AUTHN_COMPLETE" === t.data && this.completePassiveAuthentication()
        }
        ,
        t.prototype.isDebug = function(t) {
            return -1 !== 1
        }
        ,
        t.prototype.getRedirectURL = function(t) {
            return t && "null" !== t && t.length > 4 ? t : window.location.href
        }
        ,
        t.prototype.createHiddenIframe = function(t, e) {
            var n = document.querySelector("iframe[name=" + t + "]");
            if (n)
                n.setAttribute("src", e);
            else {
                var r = document.createElement("iframe");
                r.setAttribute("name", t),
                r.setAttribute("src", e),
                r.setAttribute("style", "display:none"),
                document.body.appendChild(r)
            }
        }
        ,
        t.prototype.receiveMessage = function(t) {
            var e = this;
            if (!t.origin || /auth.*\.adobe\.com/.test(t.origin)) {
                var n = {
                    PROXY_LOADED: function() {
                        return e.completeInitialization()
                    },
                    LOGIN_COMPLETE: this.completeBackgroundLogin,
                    LOGOUT_COMPLETE: this.completeBackgroundLogout
                }[t.data];
                n && n.call(this)
            } else
                h.a.trace("Ignoring postmessage from origin " + t.origin)
        }
        ,
        t.prototype.completeInitialization = function() {
            var t = this;
            this.mvpdManager = u.a.getInstance(),
            this.storageManager = c.b.getInstance(),
            this.storageManager.syncStorage().then(function() {
                h.a.debug("Initial storage sync complete!"),
                t.callCallback("entitlementLoaded")
            })
        }
        ,
        t.prototype.loadProxy = function(t) {
            var e = this.determineProxyHost(t);
            h.a.info("Loading proxy from: " + e);
            var r = t.pathname.replace("AccessEnabler.js", "");
            R.a.globalOptions.proxyURL = "https://" + e + r + "AccessEnablerProxy.html";
            var i = R.a.globalOptions.proxyURL + "?" + n.h;
            this.isDebug(t) && (i += "&debug"),
            i += "#" + encodeURIComponent(document.location.href),
            window.accessEnablerProxy = document.createElement("iframe"),
            accessEnablerProxy.setAttribute("name", "adobeIFrame"),
            accessEnablerProxy.setAttribute("id", "adobeIFrame"),
            accessEnablerProxy.setAttribute("style", "display:none"),
            accessEnablerProxy.setAttribute("src", i),
            p.a.appendChild(accessEnablerProxy)
        }
        ,
        t.prototype.determineProxyHost = function(t) {
            if (t)
                switch (t.hostname) {
                case "entitlement.auth.adobe.com":
                    return h.a.info("Environment: STAGING"),
                    "entitlement.auth.adobe.com";
                case "entitlement.auth-staging.adobe.com":
                    return h.a.info("Environment: STAGING"),
                    "sp.auth-staging.adobe.com";
                default:
                    return h.a.info("Environment: CUSTOM"),
                    t.host
                }
        }
        ,
        t.prototype.parseErrorResponse = function(t) {
            var e, n;
            return "code"in t && "message"in t ? (h.a.warn("Received a non xhr object!"),
            e = t) : 400 === t.status ? (c.b.getInstance().clearStorage(),
            e = {
                code: r.a.GENERIC_AUTHORIZATION_ERROR,
                message: t.statusText
            }) : t.responseText ? ((n = t.responseText.split("details")[1]) && n.length > 2 && (n = n.substring(1, n.length - 2)),
            e = {
                code: r.a.USER_NOT_AUTHORIZED_ERROR,
                message: n
            }) : e = {
                code: r.a.GENERIC_AUTHORIZATION_ERROR,
                message: ""
            },
            e
        }
        ,
        t.prototype.openLoginWindow = function(t, e) {
            var n = this;
            setTimeout(function() {
                var r = window.open(t, e);
                if (g.b.isIE()) {
                    h.a.warn("Internet Explorer 11 or older detected: using a timer to handle login completion...");
                    var i = setInterval(function() {
                        r.closed && (h.a.debug("Login window closed"),
                        clearInterval(i),
                        n.completeBackgroundLogin())
                    }, 200)
                }
            }, 150)
        }
        ,
        t.clientInfo = null,
        t.deviceInfo = {
            deviceType: "",
            clientType: "",
            os: ""
        },
        t.requestorID = null,
        S([I], t.prototype, "completeBackgroundLogout", null),
        S([I], t.prototype, "doBackgroundLogout", null),
        S([I], t.prototype, "ditchTokens", null),
        S([I], t.prototype, "authnSuccess", null),
        S([I], t.prototype, "authnError", null),
        S([I], t.prototype, "completeBackgroundLogin", null),
        S([I], t.prototype, "callCallback", null),
        S([I], t.prototype, "bind", null),
        S([I], t.prototype, "unbind", null),
        S([I], t.prototype, "getProxyMVPD", null),
        S([I], t.prototype, "setRequestor", null),
        S([I], t.prototype, "getSelectedProvider", null),
        S([I], t.prototype, "setSelectedProvider", null),
        S([I], t.prototype, "getAuthorization", null),
        S([I], t.prototype, "checkAuthorization", null),
        S([I], t.prototype, "getAuthentication", null),
        S([I], t.prototype, "checkAuthentication", null),
        S([I], t.prototype, "getMetadata", null),
        S([I], t.prototype, "checkPreauthorizedResources", null),
        S([I], t.prototype, "logout", null),
        S([I], t.prototype, "getStorageData", null),
        t
    }()
}
, function(t, e, n) {
    "use strict";
    n.d(e, "c", function() {
        return r
    }),
    n.d(e, "a", function() {
        return i
    }),
    n.d(e, "b", function() {
        return o
    });
    var r = function() {
        function t() {}
        return t.parseXML = function(t) {
            return t && "string" == typeof t ? (new DOMParser).parseFromString(t, "text/xml") : null
        }
        ,
        t
    }()
      , i = function() {
        function t() {}
        return t.extend = function() {
            for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
            for (var n = 1; n < t.length; n++)
                for (var r in t[n])
                    t[n].hasOwnProperty(r) && (t[0][r] = t[n][r]);
            return t[0]
        }
        ,
        t.isEmpty = function(e) {
            if (!e || t.isUndefined(e) || null === e)
                return !0;
            if (e.length)
                return !e.length;
            if (e.size)
                return !e.size;
            for (var n in e)
                if (e.hasOwnProperty(n))
                    return !1;
            return !0
        }
        ,
        t.isUndefined = function(t) {
            return void 0 === t
        }
        ,
        t
    }()
      , o = function() {
        function t() {}
        return t.inArray = function(t, e) {
            if (e.indexOf)
                return e.indexOf(t);
            for (var n in e)
                if (e[n] === t)
                    return n;
            return -1
        }
        ,
        t.createHiddenIframe = function(t, e) {
            var n, r = document.getElementsByTagName("iframe");
            if (r.length > 0)
                for (var i = 0; i < r.length; i++)
                    if (r[i].getAttribute("name") === t) {
                        n = r[i];
                        break
                    }
            n || ((n = document.createElement("iframe")).setAttribute("name", t),
            n.setAttribute("id", t),
            n.setAttribute("style", "display:none"),
            document.body.appendChild(n)),
            n.setAttribute("src", e)
        }
        ,
        t.convertServerDateToISO8601DateFormat = function(t) {
            var e = t.split(" ")
              , n = e[0]
              , r = e[1]
              , i = e[3];
            n = n.split("/").join("-");
            var o = i.length - 2;
            return n + "T" + r + (i = i.substr(0, o) + ":" + i.substr(o))
        }
        ,
        t.isIE = function() {
            var t = navigator.userAgent.toLowerCase().match(/(msie) ([\w.]+)/)
              , e = !(!navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/MSIE/));
            return t || e
        }
        ,
        t
    }()
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return r
    });
    var r = function() {
        function t() {}
        return t.getNodeText = function(t, e) {
            return this._getNode(t, e, "textContent")
        }
        ,
        t.getNode = function(t, e) {
            return this._getNode(t, e)
        }
        ,
        t.getNodes = function(t, e) {
            return this._getNode(t, e, void 0, !0)
        }
        ,
        t.appendChild = function(t) {
            "interactive" === document.readyState || "complete" === document.readyState ? document.body.appendChild(t) : (this.createDOMContentLoadedListener(),
            this.elementsToBeAppended.push(t))
        }
        ,
        t.createDOMContentLoadedListener = function() {
            var t = this;
            if (!this.DOMContentLoadedListenerCreated) {
                this.DOMContentLoadedListenerCreated = !0;
                var e = function() {
                    for (; t.elementsToBeAppended.length > 0; )
                        document.body.appendChild(t.elementsToBeAppended.pop());
                    document.removeEventListener ? document.removeEventListener("DOMContentLoaded", e, !1) : document.detachEvent("onDOMContentLoaded", e)
                };
                document.addEventListener ? document.addEventListener("DOMContentLoaded", e, !1) : document.attachEvent("onDOMContentLoaded", e)
            }
        }
        ,
        t._getNode = function(t, e, n, r) {
            if (void 0 === n && (n = null),
            void 0 === r && (r = !1),
            e) {
                var i = e.getElementsByTagName(t);
                if (i.length > 0)
                    return r ? i : n ? i[0][n] : i[0]
            }
            return ""
        }
        ,
        t.elementsToBeAppended = [],
        t.DOMContentLoadedListenerCreated = !1,
        t
    }()
}
, function(t, e, n) {
    "use strict";
    var r = n(9)
      , i = n(1)
      , o = function() {
        function t() {
            this.memoryStorageContent = {}
        }
        return t.prototype.setItem = function(t, e) {
            this.memoryStorageContent[t] = e
        }
        ,
        t.prototype.getItem = function(t) {
            return this.memoryStorageContent[t]
        }
        ,
        t.prototype.removeItem = function(t) {
            delete this.memoryStorageContent[t]
        }
        ,
        t
    }()
      , a = n(4)
      , s = function() {
        function t() {}
        return t.AUTHN_TOKEN = "authenticationToken",
        t.AUTHZ_TOKEN = "authorizationToken",
        t.USER_METADATA = "userMeta",
        t.MVPD = "mvpd",
        t.CAN_AUTHN = "canAuthenticate",
        t.PREAUTHORIZATION_CACHE = "preauthorizationCache",
        t
    }()
      , c = function() {
        function t() {
            this.authenticationToken = [],
            this.authorizationToken = [],
            this.userMeta = {},
            this.mvpd = null,
            this.canAuthenticate = !1,
            this.preauthorizationCache = []
        }
        return t.prototype.setAuthenticationTokens = function(t) {
            this.authenticationToken = t
        }
        ,
        t.prototype.getAuthenticationTokens = function() {
            return this.authenticationToken
        }
        ,
        t.prototype.setAuthorizationTokens = function(t) {
            this.authorizationToken = t
        }
        ,
        t.prototype.getAuthorizationTokens = function() {
            return this.authorizationToken
        }
        ,
        t.prototype.setUserMetadata = function(t) {
            this.userMeta = t
        }
        ,
        t.prototype.getUserMetadata = function() {
            return this.userMeta
        }
        ,
        t.prototype.setMvpdID = function(t) {
            this.mvpd = t
        }
        ,
        t.prototype.getMvpdID = function() {
            return this.mvpd
        }
        ,
        t.prototype.setCanAuthenticate = function(t) {
            this.canAuthenticate = t
        }
        ,
        t.prototype.getCanAuthenticate = function() {
            return this.canAuthenticate
        }
        ,
        t.prototype.setPreauthorizationCache = function(t) {
            this.preauthorizationCache = t
        }
        ,
        t.prototype.getPreauthorizationCache = function() {
            return this.preauthorizationCache
        }
        ,
        t.prototype.loadEntitlementTokenFromJSONObject = function(t) {
            this.authenticationToken = t[s.AUTHN_TOKEN],
            this.authorizationToken = t[s.AUTHZ_TOKEN],
            this.userMeta = t[s.USER_METADATA],
            this.mvpd = t[s.MVPD],
            this.canAuthenticate = t[s.CAN_AUTHN],
            this.preauthorizationCache = t[s.PREAUTHORIZATION_CACHE]
        }
        ,
        t.prototype.isEntitlementTokenContentValid = function() {
            return this && !a.a.isUndefined(this.authenticationToken) && !a.a.isUndefined(this.authorizationToken) && !a.a.isUndefined(this.mvpd) && !a.a.isUndefined(this.canAuthenticate) && Array.isArray(this.authenticationToken) && Array.isArray(this.authorizationToken)
        }
        ,
        t
    }()
      , u = n(10)
      , l = n(0)
      , h = n(12)
      , d = n(3)
      , g = n(18)
      , p = n(7)
      , f = n(19)
      , I = n(22)
      , E = n(21)
      , T = function() {
        function t() {}
        return t.createEmptyDataObject = function(t) {
            switch (t) {
            case v.APPLICATION_REGISTRATION:
                return new f.a;
            case v.ACCESS_TOKEN:
                return new I.a;
            case v.REG_CODE:
                return new E.a;
            default:
                return null
            }
        }
        ,
        t
    }();
    n.d(e, "a", function() {
        return v
    }),
    n.d(e, "b", function() {
        return R
    });
    var v = function() {
        function t() {}
        return t.LOCAL_STORAGE_PRIMARY_KEY = "entitlementToken",
        t.SESSION_STORAGE_PRIMARY_KEY = "sessionStorage",
        t.MEMORY_STORAGE_PRIMARY_KEY = "memoryStorage",
        t.STORAGE_VERSION_KEY = "storageVersion",
        t.GENERIC_REQUESTOR = "GenericRequestor",
        t.DEVICE_IID_KEY = "iid",
        t.DEVICE_SFP_KEY = "sfp",
        t.APPLICATION_REGISTRATION = "applicationRegistration",
        t.ACCESS_TOKEN = "accessToken",
        t.REG_CODE = "regCode",
        t
    }()
      , A = function() {
        function t() {}
        return t.LOCAL_STORAGE = "local",
        t.SESSION_STORAGE = "session",
        t.MEMORY_STORAGE = "memory",
        t
    }()
      , R = function() {
        function t() {
            this.internalMemoryStorage = new o,
            this.pm = new g.a(p.a.globalOptions.proxyURL,window.accessEnablerProxy.contentWindow),
            this.isLocalStorageSpaceEnabled() && this.isLocalStorageSpaceAvailable() ? (this.storageType = A.LOCAL_STORAGE,
            this.storagePrimaryKey = v.LOCAL_STORAGE_PRIMARY_KEY,
            this.storage = this.internalLocalStorage) : (l.a.warn("Web localStorage is not enabled or not available, switch to using memory storage!"),
            this.storageType = A.MEMORY_STORAGE,
            this.storagePrimaryKey = v.MEMORY_STORAGE_PRIMARY_KEY,
            this.storage = this.internalMemoryStorage),
            this.storage.setItem(v.STORAGE_VERSION_KEY, 2),
            this.storageType !== A.MEMORY_STORAGE && this.pm.postStorage("setItem", v.STORAGE_VERSION_KEY, 2)
        }
        return t.getInstance = function() {
            return this.instance || (this.instance = new t),
            this.instance
        }
        ,
        t.prototype.getEntitlementToken = function() {
            return this.entitlementToken = this.loadEntitlementTokenFromStorage(),
            this.entitlementToken
        }
        ,
        t.prototype.syncStorage = function() {
            var t = this;
            return new Promise(function(e) {
                t.pm.postStorage("getItems", v.STORAGE_VERSION_KEY, v.DEVICE_IID_KEY, v.GENERIC_REQUESTOR, v.LOCAL_STORAGE_PRIMARY_KEY, v.SESSION_STORAGE_PRIMARY_KEY).then(function(n) {
                    if (!t.isDirty && !a.a.isEmpty(n) && !n.error)
                        for (var r in n)
                            if (n[r] !== localStorage.getItem(r) && (localStorage.setItem(r, n[r]),
                            r === t.storagePrimaryKey))
                                try {
                                    t.entitlementToken = JSON.parse(n[r])
                                } catch (t) {
                                    l.a.error("Error parsing value from SSO storage", t)
                                }
                    t.pm.postStorage("isSessionCookieSet").then(function(e) {
                        t.isDirty || a.a.isEmpty(n) || e.isSessionCookieSet && u.a.setSessionCookie()
                    }),
                    t.startTimer(),
                    e()
                })
            }
            )
        }
        ,
        t.prototype.getStorageData = function() {
            return [this.internalLocalStorage.getItem(v.LOCAL_STORAGE_PRIMARY_KEY), this.internalLocalStorage.getItem(v.SESSION_STORAGE_PRIMARY_KEY)]
        }
        ,
        t.prototype.switchToSessionStorage = function() {
            this.isLocalStorageSpaceEnabled() && (l.a.warn("Switch to using session storage!"),
            this.storageType = A.SESSION_STORAGE,
            this.storagePrimaryKey = v.SESSION_STORAGE_PRIMARY_KEY,
            this.storage = this.internalLocalStorage),
            this.entitlementToken = this.loadEntitlementTokenFromStorage()
        }
        ,
        t.prototype.switchToLocalStorage = function() {
            this.isLocalStorageSpaceEnabled() && (l.a.warn("Switch to using local storage!"),
            this.storageType = A.LOCAL_STORAGE,
            this.storagePrimaryKey = v.LOCAL_STORAGE_PRIMARY_KEY,
            this.storage = this.internalLocalStorage),
            this.entitlementToken = this.loadEntitlementTokenFromStorage()
        }
        ,
        t.prototype.setApplicationRegistration = function(t) {
            this.saveDataToStorage(t, v.APPLICATION_REGISTRATION)
        }
        ,
        t.prototype.getApplicationRegistration = function() {
            return this.loadDataFromStorage(v.APPLICATION_REGISTRATION)
        }
        ,
        t.prototype.setAccessToken = function(t) {
            this.saveDataToStorage(t, v.ACCESS_TOKEN)
        }
        ,
        t.prototype.getAccessToken = function() {
            return this.loadDataFromStorage(v.ACCESS_TOKEN)
        }
        ,
        t.prototype.setRegCode = function(t) {
            this.saveDataToStorage(t, v.REG_CODE)
        }
        ,
        t.prototype.getRegCode = function() {
            return this.loadDataFromStorage(v.REG_CODE)
        }
        ,
        t.prototype.setAuthenticationToken = function(t) {
            this.isDirty = !0,
            this.entitlementToken = this.loadEntitlementTokenFromStorage();
            for (var e = this.entitlementToken.getAuthenticationTokens(), n = 0; n < e.length; )
                new r.a(e[n]).getRequestorID() === t.getRequestorID() ? e.splice(n, 1) : n++;
            e.push(t.getSource()),
            this.saveEntitlementTokenToStorage(this.entitlementToken)
        }
        ,
        t.prototype.getAuthenticationToken = function() {
            var t = this.getMvpdID()
              , e = null;
            if (t) {
                var n = h.a.getInstance().getMVPDByID(t);
                n && (e = n.authPerAggregator ? this.searchForAuthenticationTokenForRequestor(d.a.requestorID) : this.searchForFirstValidAuthenticationToken())
            }
            return e
        }
        ,
        t.prototype.searchForFirstValidAuthenticationTokenForCurrentMvpd = function() {
            var t = this.getMvpdID()
              , e = null;
            if (t) {
                this.entitlementToken = this.loadEntitlementTokenFromStorage();
                for (var n = void 0, i = 0, o = this.entitlementToken.getAuthenticationTokens(); i < o.length; i++) {
                    var a = o[i];
                    if ((n = new r.a(a)).getMVPDID() === t && n.isValid()) {
                        e = n;
                        break
                    }
                }
            }
            return e
        }
        ,
        t.prototype.setAuthorizationToken = function(t) {
            this.isDirty = !0,
            this.entitlementToken = this.loadEntitlementTokenFromStorage();
            for (var e, n = this.entitlementToken.getAuthorizationTokens(), i = 0; i < n.length; )
                (e = new r.a(n[i])).getRequestorID() === t.getResourceID() && e.getResourceID() === t.getResourceID() ? n.splice(i, 1) : i++;
            n.push(t.getSource()),
            this.saveEntitlementTokenToStorage(this.entitlementToken)
        }
        ,
        t.prototype.getAuthorizationToken = function(t, e) {
            this.entitlementToken = this.loadEntitlementTokenFromStorage();
            for (var n, i = null, o = 0, a = this.entitlementToken.getAuthorizationTokens(); o < a.length; o++) {
                var s = a[o];
                if ((n = new r.a(s)).getRequestorID() === t && n.getResourceID() === e) {
                    i = n;
                    break
                }
            }
            return i
        }
        ,
        t.prototype.setUserMetadata = function(t) {
            if (this.isDirty = !0,
            a.a.isEmpty(t))
                l.a.warn("Received empty userMetadata");
            else if (d.a.requestorID) {
                var e = this.getMvpdID();
                this.entitlementToken = this.loadEntitlementTokenFromStorage();
                try {
                    if (this.entitlementToken.getUserMetadata() || this.entitlementToken.setUserMetadata({}),
                    e) {
                        var n = h.a.getInstance().getMVPDByID(e);
                        if (n) {
                            var r = JSON.parse(t)
                              , i = n.authPerAggregator ? d.a.requestorID : v.GENERIC_REQUESTOR;
                            this.entitlementToken.getUserMetadata()[i] = r,
                            this.saveEntitlementTokenToStorage(this.entitlementToken)
                        } else
                            l.a.warn("Cannot set user metadata token: invalid MVPD selected.")
                    } else
                        l.a.warn("Cannot set user metadata token: no MVPD selected.")
                } catch (t) {
                    l.a.error(t)
                }
            } else
                l.a.warn("Cannot set user metadata: requestor is not configured.")
        }
        ,
        t.prototype.mergeUserMetadata = function(t) {
            var e = this.getUserMetadata();
            try {
                var n = JSON.parse(t)
                  , r = parseInt(n.updated, 10);
                if (parseInt(e.updated, 10) < r && n.data)
                    try {
                        e.updated = r;
                        var i = n.data;
                        for (var o in i)
                            i.hasOwnProperty(o) && (e.data[o] = i[o]);
                        this.setUserMetadata(JSON.stringify(e))
                    } catch (e) {
                        l.a.warn("Error merging user metadata tokens."),
                        this.setUserMetadata(t)
                    }
                else
                    l.a.warn("The metadata token received from the server has invalid properties.")
            } catch (t) {
                l.a.warn("The metadata token received from the server cannot be parsed.")
            }
        }
        ,
        t.prototype.getUserMetadata = function() {
            var t = this.getMvpdID()
              , e = null;
            if (t) {
                var n = h.a.getInstance().getMVPDByID(t);
                if (n) {
                    this.entitlementToken = this.loadEntitlementTokenFromStorage();
                    var r = this.entitlementToken.getUserMetadata();
                    r && (e = n.authPerAggregator ? r[d.a.requestorID] : r[v.GENERIC_REQUESTOR])
                }
            }
            return e
        }
        ,
        t.prototype.setMvpdID = function(t) {
            this.isDirty = !0,
            this.storageType === A.SESSION_STORAGE && (this.storagePrimaryKey = v.LOCAL_STORAGE_PRIMARY_KEY),
            this.entitlementToken = this.loadEntitlementTokenFromStorage(),
            this.entitlementToken.setMvpdID(null === t ? null : String(t)),
            this.saveEntitlementTokenToStorage(this.entitlementToken),
            this.storageType === A.SESSION_STORAGE && (this.storagePrimaryKey = v.SESSION_STORAGE_PRIMARY_KEY)
        }
        ,
        t.prototype.getMvpdID = function() {
            return this.storageType === A.SESSION_STORAGE && (this.storagePrimaryKey = v.LOCAL_STORAGE_PRIMARY_KEY),
            this.entitlementToken = this.loadEntitlementTokenFromStorage(),
            this.storageType === A.SESSION_STORAGE && (this.storagePrimaryKey = v.SESSION_STORAGE_PRIMARY_KEY),
            this.entitlementToken.getMvpdID()
        }
        ,
        t.prototype.setCanAuthenticate = function(t) {
            this.isDirty = !0,
            this.storageType === A.SESSION_STORAGE && (this.storagePrimaryKey = v.LOCAL_STORAGE_PRIMARY_KEY),
            this.entitlementToken = this.loadEntitlementTokenFromStorage(),
            this.entitlementToken.setCanAuthenticate(Boolean(t)),
            this.saveEntitlementTokenToStorage(this.entitlementToken),
            this.storageType === A.SESSION_STORAGE && (this.storagePrimaryKey = v.SESSION_STORAGE_PRIMARY_KEY)
        }
        ,
        t.prototype.getCanAuthenticate = function() {
            return this.storageType === A.SESSION_STORAGE && (this.storagePrimaryKey = v.LOCAL_STORAGE_PRIMARY_KEY),
            this.entitlementToken = this.loadEntitlementTokenFromStorage(),
            this.storageType === A.SESSION_STORAGE && (this.storagePrimaryKey = v.SESSION_STORAGE_PRIMARY_KEY),
            Boolean(this.entitlementToken.getCanAuthenticate())
        }
        ,
        t.prototype.setPreauthorizationCache = function(t) {
            this.isDirty = !0,
            this.entitlementToken = this.loadEntitlementTokenFromStorage(),
            this.entitlementToken.setPreauthorizationCache(t.concat()),
            this.saveEntitlementTokenToStorage(this.entitlementToken)
        }
        ,
        t.prototype.getPreauthorizationCache = function() {
            return this.entitlementToken = this.loadEntitlementTokenFromStorage(),
            this.entitlementToken.getPreauthorizationCache()
        }
        ,
        t.prototype.setDeviceId = function(t) {
            var e = this;
            this.isDirty = !0,
            this.storage.setItem(v.DEVICE_IID_KEY, t),
            this.storageType !== A.MEMORY_STORAGE && this.pm.postStorage("setItem", v.DEVICE_IID_KEY, t).then(function() {
                return e.isDirty = !1
            })
        }
        ,
        t.prototype.setSFP = function(t) {
            var e = this;
            this.isDirty = !0,
            this.storage.setItem(v.DEVICE_SFP_KEY, t),
            this.storageType !== A.MEMORY_STORAGE && this.pm.postStorage("setItem", v.DEVICE_SFP_KEY, t).then(function() {
                return e.isDirty = !1
            })
        }
        ,
        t.prototype.getDeviceId = function() {
            return this.storage.getItem(v.DEVICE_IID_KEY)
        }
        ,
        t.prototype.getSFP = function() {
            return this.storage.getItem(v.DEVICE_SFP_KEY)
        }
        ,
        t.prototype.clearDeviceId = function() {
            this.storage.removeItem(v.DEVICE_IID_KEY)
        }
        ,
        t.prototype.getSAMLNameID = function() {
            this.entitlementToken = this.loadEntitlementTokenFromStorage();
            var t = this.searchForFirstValidAuthenticationToken();
            return t ? t.getProperty("simpleSamlNameID") : null
        }
        ,
        t.prototype.getSAMLSessionIndex = function() {
            this.entitlementToken = this.loadEntitlementTokenFromStorage();
            var t = this.searchForFirstValidAuthenticationToken();
            return t ? t.getProperty("simpleSamlSessionIndex") : null
        }
        ,
        t.prototype.clearStorage = function(t) {
            void 0 === t && (t = !0),
            this.isDirty = !0,
            this.entitlementToken = this.loadEntitlementTokenFromStorage(),
            this.entitlementToken.setMvpdID(null),
            this.entitlementToken.setCanAuthenticate(!1),
            t && (l.a.warn("Storage content was reset!"),
            this.entitlementToken.setAuthenticationTokens([]),
            this.entitlementToken.setUserMetadata({})),
            this.entitlementToken.setAuthorizationTokens([]),
            this.saveEntitlementTokenToStorage(this.entitlementToken)
        }
        ,
        t.prototype.resetStorage = function() {
            this.isDirty = !0,
            l.a.warn("Storage content was reset!"),
            this.saveDataToStorage(null, v.APPLICATION_REGISTRATION),
            this.saveDataToStorage(null, v.ACCESS_TOKEN),
            this.saveDataToStorage(null, v.REG_CODE),
            this.entitlementToken = new c,
            this.saveEntitlementTokenToStorage(this.entitlementToken)
        }
        ,
        t.prototype.searchForAuthenticationTokenForRequestor = function(t) {
            this.entitlementToken = this.loadEntitlementTokenFromStorage();
            for (var e, n = null, i = 0, o = this.entitlementToken.getAuthenticationTokens(); i < o.length; i++) {
                var a = o[i];
                if ((e = new r.a(a)).getRequestorID() === t) {
                    n = e;
                    break
                }
            }
            return n
        }
        ,
        t.prototype.searchForFirstValidAuthenticationToken = function() {
            this.entitlementToken = this.loadEntitlementTokenFromStorage();
            for (var t, e = null, n = 0, i = this.entitlementToken.getAuthenticationTokens(); n < i.length; n++) {
                var o = i[n];
                if ((t = new r.a(o)).isValid()) {
                    e = t;
                    break
                }
            }
            return e
        }
        ,
        t.prototype.loadEntitlementTokenFromStorage = function() {
            var t = this
              , e = null
              , n = new c;
            try {
                var r = this.storage.getItem(this.storagePrimaryKey);
                r && (e = JSON.parse(r))
            } catch (t) {
                l.a.error(t),
                l.a.warn("Storage content was invalid when trying to convert from String to JSON Object!")
            }
            if (!e)
                return l.a.warn("Storage content was missing, null or couldn't be parsed!"),
                this.resetStorage(),
                new c;
            if (a.a.isEmpty(e))
                return l.a.warn("Storage content was an empty JSON Object!"),
                this.resetStorage(),
                new c;
            if (n.loadEntitlementTokenFromJSONObject(e),
            !n.isEntitlementTokenContentValid())
                return l.a.warn("Storage content was invalid when trying to validate entitlement token content!"),
                this.resetStorage(),
                new c;
            if (this.storageType === A.SESSION_STORAGE && !u.a.isSessionCookieSet()) {
                l.a.warn("New authentication session! Session storage was reset!"),
                this.isDirty = !0,
                u.a.setSessionCookie(),
                this.pm.postStorage("setSessionCookie").then(function() {
                    t.isDirty = !1
                });
                var i = new c;
                return this.storagePrimaryKey = v.SESSION_STORAGE_PRIMARY_KEY,
                this.saveEntitlementTokenToStorage(i),
                i
            }
            return n
        }
        ,
        t.prototype.saveEntitlementTokenToStorage = function(t) {
            var e = this;
            try {
                this.storageType === A.MEMORY_STORAGE && this.isLocalStorageSpaceEnabled() && (this.storagePrimaryKeyBeforeSwitchingToMemoryStorage === v.LOCAL_STORAGE_PRIMARY_KEY ? (l.a.warn("Switch to local storage from memory storage!"),
                this.storageType = A.LOCAL_STORAGE,
                this.storagePrimaryKey = v.LOCAL_STORAGE_PRIMARY_KEY,
                this.storage = this.internalLocalStorage) : (l.a.warn("Switch to session storage from memory storage!"),
                this.storageType = A.SESSION_STORAGE,
                this.storagePrimaryKey = v.SESSION_STORAGE_PRIMARY_KEY,
                this.storage = this.internalLocalStorage)),
                this.storage.setItem(this.storagePrimaryKey, JSON.stringify(t)),
                this.storageType !== A.MEMORY_STORAGE && this.pm.postStorage("setItem", this.storagePrimaryKey, JSON.stringify(t)).then(function() {
                    var t = e.getDeviceId();
                    a.a.isEmpty(t) || e.pm.postStorage("setItem", v.DEVICE_IID_KEY, t),
                    e.isDirty = !1
                })
            } catch (n) {
                l.a.error(n),
                t = this.sanitizeEntitlementToken(t);
                try {
                    this.storage.setItem(this.storagePrimaryKey, JSON.stringify(t)),
                    this.pm.postStorage("setItem", this.storagePrimaryKey, JSON.stringify(t)).then(function() {
                        var t = e.getDeviceId();
                        a.a.isEmpty(t) || e.pm.postStorage("setItem", v.DEVICE_IID_KEY, t),
                        e.isDirty = !1
                    })
                } catch (e) {
                    l.a.error(e),
                    l.a.warn("Web browser localStorage space is still exceeded, switch to using memory storage!"),
                    this.storagePrimaryKeyBeforeSwitchingToMemoryStorage = this.storagePrimaryKey,
                    this.storageType = A.MEMORY_STORAGE,
                    this.storagePrimaryKey = v.MEMORY_STORAGE_PRIMARY_KEY,
                    this.storage = this.internalMemoryStorage,
                    this.storage.setItem(this.storagePrimaryKey, JSON.stringify(t))
                }
            }
        }
        ,
        t.prototype.loadDataFromStorage = function(t) {
            var e = null
              , n = T.createEmptyDataObject(t);
            try {
                var r = this.storage.getItem(t);
                r && (e = JSON.parse(r))
            } catch (e) {
                return l.a.warn("Storage data was invalid when trying to convert from String to JSON Object!", t),
                null
            }
            return e ? (n.copyFromJSONObject(e),
            n.isValid() ? n : (l.a.warn("Storage data was invalid when trying to validate content!", t),
            null)) : (l.a.warn("Storage data was missing, null or couldn't be parsed!", t),
            null)
        }
        ,
        t.prototype.saveDataToStorage = function(t, e) {
            try {
                this.storage.setItem(e, JSON.stringify(t))
            } catch (n) {
                l.a.error(n),
                l.a.warn("Web browser localStorage space is exceeded, switch to using memory storage!"),
                this.storagePrimaryKeyBeforeSwitchingToMemoryStorage = this.storagePrimaryKey,
                this.storageType = A.MEMORY_STORAGE,
                this.storagePrimaryKey = v.MEMORY_STORAGE_PRIMARY_KEY,
                this.storage = this.internalMemoryStorage,
                this.storage.setItem(e, JSON.stringify(t))
            }
        }
        ,
        t.prototype.isLocalStorageSpaceEnabled = function() {
            try {
                return this.internalLocalStorage = localStorage,
                !0
            } catch (e) {
                return t.error = i.a.LS011,
                !1
            }
        }
        ,
        t.prototype.isLocalStorageSpaceAvailable = function() {
            try {
                return this.internalLocalStorage.setItem("canWrite", "test"),
                this.internalLocalStorage.removeItem("canWrite"),
                this.internalLocalStorage.setItem("canWrite", "yes"),
                "yes" === this.internalLocalStorage.getItem("canWrite") || (t.error = i.a.LS011,
                !1)
            } catch (e) {
                return t.error = i.a.LS011,
                !1
            }
        }
        ,
        t.prototype.startTimer = function() {
            var t = this;
            setTimeout(function() {
                return t.syncStorage()
            }, 1e3)
        }
        ,
        t.prototype.sanitizeEntitlementToken = function(t) {
            for (var e = t.getAuthenticationTokens(), n = 0; n < e.length; )
                new r.a(e[n]).isValid() ? n++ : e.splice(n, 1);
            var i = t.getAuthorizationTokens();
            for (n = 0; n < i.length; )
                new r.a(i[n]).isValid() ? n++ : i.splice(n, 1);
            return t
        }
        ,
        t
    }()
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return h
    });
    var r = n(14)
      , i = n(4)
      , o = n(0)
      , a = n(18)
      , s = n(6)
      , c = n(20)
      , u = n(1)
      , l = n(17)
      , h = function() {
        function t(e, n) {
            void 0 === n && (n = !0);
            var r = this;
            if (this.defaultOptions = {
                url: window.location.href,
                async: !0,
                cache: !1,
                type: "GET",
                context: this,
                dataType: "xml",
                timeout: 3e4,
                data: t.globalData,
                headers: t.globalHeaders,
                cookies: t.globalCookies,
                traditional: !1,
                proxyRequest: !(navigator.vendor && navigator.vendor.match(/Apple/)),
                proxyResponse: !1
            },
            this.mimeTypes = {
                xml: "application/xml",
                json: "application/json",
                text: "*/*"
            },
            this.retrialAjax = !0,
            this.options = this.processOptions(e),
            this.urlObj = new l(this.options.url,null,!1),
            this.retrialAjax = n,
            this.options.proxyRequest) {
                var i = this.options.proxyURL + "#" + encodeURIComponent(document.location.href);
                this.postMesager = new a.a(i,window.accessEnablerProxy.contentWindow)
            } else
                this.setCookies(),
                this.setCache(),
                this.setData(),
                this.xhr = this.getXHR(),
                this.xhr.onreadystatechange = function(n) {
                    var i = n.target;
                    if (e.data && e.data.resource_id && (i.resourceID = e.data.resource_id),
                    4 === i.readyState) {
                        o.a.debug("XHR response received: ", i);
                        var a = i.status >= 200 && i.status < 400 ? r.options.success : r.options.error
                          , s = "xml" !== r.options.dataType || r.options.proxyResponse ? i.responseText : i.responseXML;
                        !1 === r.options.proxyResponse && 401 === i.status && r.retrialAjax ? r.onAuthorizationFailureHandler() : a.apply(r.options.context, [s, n.target.status, t.xhrToObject(i)])
                    }
                }
                ,
                this.options.url = this.options.url = this.urlObj.toString(),
                this.xhr.open(this.options.type, this.options.url, this.options.async),
                this.options.async && (this.xhr.timeout = this.options.timeout),
                this.setHeaders()
        }
        return t.xhrToObject = function(t) {
            if (t.getAllResponseHeaders) {
                var e = {};
                t.getAllResponseHeaders().split("\r\n").map(function(t) {
                    var n = t.split(": ");
                    2 === n.length && (e[n[0].toLowerCase()] = n[1])
                });
                var n = {
                    status: t.status,
                    statusText: t.statusText,
                    responseText: t.responseText,
                    responseHeaders: e
                };
                return t.resourceID && (n.resourceID = t.resourceID),
                o.a.debug("Converted xhr into serializable object", t, n),
                n
            }
            return o.a.warn("trying to objectify a non xhr!", t),
            t
        }
        ,
        t.isCors = function(t) {
            var e = new l(t,null,!1);
            return 0 !== window.location.href.indexOf(e.origin)
        }
        ,
        t.prototype.send = function() {
            var t = this;
            this.options.proxyRequest ? (o.a.debug("Sending proxy request: ", this.options),
            this.postMesager.postAjax(this.options).then(function(e) {
                o.a.debug("Proxy response received: ", e);
                var n = e.status
                  , r = e.data
                  , a = e.status >= 200 && e.status < 400 ? t.options.success : t.options.error;
                r = "xml" === t.options.dataType ? i.c.parseXML(r) : r,
                401 === e.status && t.retrialAjax ? t.onAuthorizationFailureHandler() : a.apply(t.options.context, [r, n, e.xhr])
            })) : (o.a.debug("Sending request: ", this.options),
            this.xhr.send(this.options.data))
        }
        ,
        t.prototype.processOptions = function(e) {
            var n = i.a.extend(Object.create(t.globalOptions), this.defaultOptions, e);
            return e.data && (n.data = i.a.extend({}, this.defaultOptions.data, e.data)),
            e.headers && (n.headers = i.a.extend({}, this.defaultOptions.headers, e.headers)),
            n
        }
        ,
        t.prototype.setData = function() {
            if (!i.a.isEmpty(this.options.data)) {
                var t = r.a.param(this.options.data, this.options.traditional);
                "POST" === this.options.type ? "json" === this.options.dataType ? this.options.data = JSON.stringify(this.options.data) : this.options.data = t : (this.urlObj.query && this.urlObj.query.length > 1 ? this.urlObj.query += "&" + t : this.urlObj.query = t,
                this.options.data = null)
            }
        }
        ,
        t.prototype.setCookies = function() {
            var t = "https:" === this.urlObj.protocol ? ";secure" : "";
            for (var e in this.options.cookies)
                i.a.isEmpty(e) ? document.cookie = e + "=;path=/" + t + "; expires=Thu, 01 Jan 1970 00:00:00 UTC;" : document.cookie = e + "=" + this.options.cookies[e] + ";path=/" + t
        }
        ,
        t.prototype.setCache = function() {
            if (!this.options.cache) {
                o.a.debug("busting cache!");
                var t = "_=" + (new Date).getTime();
                this.urlObj.query && this.urlObj.query.length > 1 ? this.urlObj.query += "&" + t : this.urlObj.query = t
            }
        }
        ,
        t.prototype.setHeaders = function() {
            if ("POST" === this.options.type && ("json" === this.options.dataType ? this.xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8") : this.xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8")),
            this.options.headers)
                for (var t in this.options.headers)
                    this.options.headers.hasOwnProperty(t) && this.xhr.setRequestHeader(t, this.options.headers[t]);
            this.options.dataType && this.mimeTypes[this.options.dataType] && this.xhr.setRequestHeader("Accept", this.mimeTypes[this.options.dataType])
        }
        ,
        t.prototype.getXHR = function() {
            var e = new XMLHttpRequest;
            return t.isCors(this.urlObj.origin) && (o.a.debug("Enabling CORS"),
            e.withCredentials = !0),
            e
        }
        ,
        t.prototype.onAuthorizationFailureHandler = function() {
            var e = this;
            o.a.warn("Ajax call failed due to invalid authorization. Will invalidate application registration and access token!"),
            s.b.getInstance().setApplicationRegistration(null),
            s.b.getInstance().setAccessToken(null),
            c.a.getInstance().obtainAccessToken().then(function(n) {
                o.a.warn("Will retry the Ajax call with new access token!"),
                e.options.headers.Authorization = "Bearer " + n.getAccessToken(),
                new t(e.options,!1).send()
            }, function(t) {
                e.options.error(t, u.a.MISSING_REQUIRED_PREREQUISITES_ERROR_STATUS)
            })
        }
        ,
        t.globalOptions = {
            proxyURL: "AccessEnablerProxy.html"
        },
        t.globalHeaders = {},
        t.globalCookies = {
            client_type: "html5",
            client_version: "4.1.1"
        },
        t.globalData = {},
        t
    }()
}
, function(t, e, n) {
    "use strict";
    var r = n(1)
      , i = n(14)
      , o = n(7)
      , a = n(16)
      , s = n(0)
      , c = n(6)
      , u = n(3)
      , l = n(12)
      , h = n(4)
      , d = n(20)
      , g = n(15)
      , p = n(11)
      , f = n(21)
      , I = n(17)
      , E = function() {
        function t() {
            this.httpService = g.a.getInstance(),
            this.storageManager = c.b.getInstance(),
            this.identificationManager = a.a.getInstance()
        }
        return t.getInstance = function() {
            return this.instance || (this.instance = new t),
            this.instance
        }
        ,
        t.prototype.obtainRegCode = function(t) {
            var e = this;
            return new Promise(function(n, r) {
                var i = e.storageManager.getRegCode();
                i ? n(i) : e.retrieveRegCode(t).then(function(t) {
                    n(t)
                }, function(t) {
                    r(t)
                })
            }
            )
        }
        ,
        t.prototype.retrieveRegCode = function(e) {
            var n = this;
            return new Promise(function(i, o) {
                var a = function(t) {
                    var e = new f.a(t.data);
                    n.storageManager.setRegCode(e),
                    i(e)
                }
                  , s = function(a) {
                    t.RETRY_RETRIEVING_REG_CODE ? (t.RETRY_RETRIEVING_REG_CODE = !1,
                    n.retrieveRegCode(e).then(function(t) {
                        i(t)
                    }, function(t) {
                        o(t)
                    })) : a.status === r.a.MISSING_REQUIRED_PREREQUISITES_ERROR_STATUS ? o(a.data) : o(r.a.REG500)
                };
                n.identificationManager.getDeviceId().then(function(t) {
                    n.httpService.post("/reggie/v1/" + e + A.REG_CODE_ENDPOINT_PATH, {
                        requestor: e,
                        deviceId: t,
                        format: "json"
                    }, {
                        url: new I(p.a.serviceProviderURL,null,!0).origin,
                        dataType: "application/x-www-form-urlencoded"
                    }).then(a, s)
                }, function(t) {
                    o(t)
                })
            }
            )
        }
        ,
        t.RETRY_RETRIEVING_REG_CODE = !0,
        t
    }()
      , T = n(2)
      , v = n(10);
    n.d(e, "b", function() {
        return A
    }),
    n.d(e, "a", function() {
        return R
    });
    var A = function() {
        function t() {}
        return t.AUTHENTICATION_ENDPOINT_PATH = "/authenticate/saml?",
        t.AUTHENTICATION_TOKEN_ENDPOINT_PATH = "/session",
        t.AUTHORIZATION_TOKEN_ENDPOINT_PATH = "/authorize",
        t.MEDIA_TOKEN_ENDPOINT_PATH = "/shortAuthorize",
        t.PREAUTHORIZATION_ENDPOINT_PATH = "/preauthorize",
        t.LOGOUT_ENDPOINT_PATH = "/logout?",
        t.DEVICE_ID_ENDPOINT_PATH = "/getMetadata",
        t.USER_METADATA_ENDPOINT_PATH = "/usermetadata",
        t.CONFIG_ENDPOINT_PATH = "/config",
        t.INDIVIDUALIZATION_ENDPOINT_PATH = "/indiv/devices",
        t.CLIENT_REGISTRATION_ENDPOINT_PATH = "/o/client/register",
        t.ACCESS_TOKEN_ENDPOINT_PATH = "/o/client/token",
        t.REG_CODE_ENDPOINT_PATH = "/regcode",
        t.PASSIVE_AUTHENTICATION_REDIRECT_ENDPOINT_PATH = "/completePassiveAuthentication",
        t.BACKGROUND_LOGIN_COMPLETE = "completeBackgroundLogin.html",
        t.BACKGROUND_LOGOUT_COMPLETE = "completeBackgroundLogout.html",
        t
    }()
      , R = function() {
        function t(t, e) {
            this.spURL = t,
            this.requestorID = e,
            this.storageManager = c.b.getInstance(),
            this.identificationManager = a.a.getInstance(),
            this.clientRegistrationService = d.a.getInstance(),
            this.regCodeService = E.getInstance()
        }
        return t.prototype.goToLoginPage = function(t, e, r) {
            var i = u.a.clientInfo && u.a.clientInfo.isBackgroundLogin();
            this.getLoginPageUrl(!1, t, r, i && !t.tempPass).then(function(r) {
                if (i && (e = n.p + A.BACKGROUND_LOGIN_COMPLETE),
                i && t.tempPass)
                    return s.a.debug("Attempting background temp pass..."),
                    void new o.a({
                        url: r,
                        dataType: "text/html",
                        data: {
                            iframe_required: !0,
                            redirect_url: "about:blank"
                        },
                        success: function() {
                            return u.a.getInstance().completeBackgroundLogin()
                        },
                        error: function() {
                            return u.a.getInstance().completeBackgroundLogin()
                        }
                    }).send();
                !1 === i && v.a.setPendingAuthenticationCookieState(!0),
                t.iFrameRequired ? u.a.getInstance().callCallback("openIFrame", r, t.iFrameWidth, t.iFrameHeight, e) : u.a.getInstance().callCallback("navigateToURL", r, e, i)
            }, function(t) {
                u.a.getInstance().callbackManager.onErrorHandler(t.data),
                u.a.getInstance().callCallback("setAuthenticationStatus", 0, T.a.GENERIC_AUTHENTICATION_ERROR)
            })
        }
        ,
        t.prototype.getLoginPageUrl = function(t, e, n, a) {
            var s = this;
            return void 0 === n && (n = null),
            void 0 === a && (a = !1),
            new Promise(function(c, l) {
                s.regCodeService.obtainRegCode(s.requestorID).then(function(r) {
                    var l = {
                        reg_code: r.getCode(),
                        noflash: !0,
                        mso_id: e.id,
                        requestor_id: s.requestorID,
                        no_iframe: a ? "true" : "false",
                        domain_name: "adobe.com"
                    };
                    n && (l.generic_data = n),
                    t && (l.passive = "true",
                    l.redirect_url = s.spURL + A.PASSIVE_AUTHENTICATION_REDIRECT_ENDPOINT_PATH),
                    u.a.clientInfo && null !== u.a.clientInfo.isIFrameRequiredForMvpd(e.id) && (l.iframe_required = u.a.clientInfo.isIFrameRequiredForMvpd(e.id)),
                    l = h.a.extend(l, o.a.globalData);
                    var d = s.spURL + A.AUTHENTICATION_ENDPOINT_PATH + i.a.param(l);
                    c(d)
                }, function(t) {
                    l({
                        data: t,
                        status: r.a.MISSING_REQUIRED_PREREQUISITES_ERROR_STATUS
                    })
                })
            }
            )
        }
        ,
        t.prototype.retrieveAuthenticationToken = function(t, e) {
            var n = this;
            this.getRequiredHeaders(A.AUTHENTICATION_TOKEN_ENDPOINT_PATH).then(function(i) {
                n.regCodeService.obtainRegCode(n.requestorID).then(function(r) {
                    new o.a({
                        type: "POST",
                        url: n.spURL + A.AUTHENTICATION_TOKEN_ENDPOINT_PATH,
                        data: {
                            _method: "GET",
                            reg_code: r.getCode(),
                            requestor_id: n.requestorID
                        },
                        dataType: "xml",
                        success: t,
                        error: e,
                        headers: i
                    }).send()
                }, function(t) {
                    e(t, r.a.MISSING_REQUIRED_PREREQUISITES_ERROR_STATUS)
                })
            }, function(t) {
                e(t.data, t.status)
            })
        }
        ,
        t.prototype.retrieveAuthorizationToken = function(t, e, n, r) {
            var i = this;
            this.getRequiredHeaders(A.AUTHORIZATION_TOKEN_ENDPOINT_PATH).then(function(a) {
                var s = i.storageManager.getAuthenticationToken();
                new o.a({
                    type: "POST",
                    url: i.spURL + A.AUTHORIZATION_TOKEN_ENDPOINT_PATH,
                    data: {
                        resource_id: t,
                        requestor_id: i.requestorID,
                        authentication_token: s.getSource(),
                        mso_id: l.a.getInstance().getCurrentMvpdID(),
                        generic_data: e,
                        userMeta: 1
                    },
                    dataType: "text",
                    success: n,
                    error: r,
                    headers: a,
                    context: i
                }).send()
            }, function(t) {
                r(t.data, t.status)
            })
        }
        ,
        t.prototype.retrieveMediaToken = function(t, e, n, r) {
            var i = this;
            this.getRequiredHeaders(A.MEDIA_TOKEN_ENDPOINT_PATH).then(function(a) {
                var s = i.storageManager.getAuthenticationToken();
                new o.a({
                    type: "POST",
                    url: i.spURL + A.MEDIA_TOKEN_ENDPOINT_PATH,
                    data: {
                        authz_token: t.getSource(),
                        requestor_id: i.requestorID,
                        generic_data: e,
                        session_guid: s.getProperty("simpleTokenAuthenticationGuid"),
                        hashed_guid: "false"
                    },
                    dataType: "text",
                    success: n,
                    error: r,
                    headers: a,
                    context: i
                }).send()
            }, function(t) {
                r(t.data, t.status)
            })
        }
        ,
        t.prototype.retrieveDeviceIDHash = function(t, e, n) {
            var r = this;
            this.requestorID ? this.getRequiredHeaders(A.DEVICE_ID_ENDPOINT_PATH).then(function(i) {
                new o.a({
                    type: "POST",
                    url: r.spURL + A.DEVICE_ID_ENDPOINT_PATH,
                    data: {
                        requestor_id: r.requestorID,
                        device_id: t
                    },
                    dataType: "text/plain",
                    success: e,
                    error: n,
                    headers: i,
                    context: r
                }).send()
            }, function(t) {
                n(t.data, t.status)
            }) : n(null)
        }
        ,
        t.prototype.retrieveEncryptedMetadata = function(t, e, n) {
            var r = this
              , i = this.storageManager.getAuthenticationToken();
            this.requestorID && i ? this.getRequiredHeaders(A.USER_METADATA_ENDPOINT_PATH).then(function(a) {
                new o.a({
                    type: "POST",
                    url: r.spURL + A.USER_METADATA_ENDPOINT_PATH,
                    data: {
                        requestor: r.requestorID,
                        authn: i.getSource(),
                        metadata: JSON.stringify(t)
                    },
                    dataType: "text",
                    success: e,
                    error: n,
                    headers: a,
                    context: r
                }).send()
            }, function(t) {
                n(t.data, t.status)
            }) : n(null)
        }
        ,
        t.prototype.checkPreauthorizedResources = function(t, e, n) {
            var r = this
              , i = this.storageManager.getAuthenticationToken();
            i && i.isValid() && this.spURL && this.getRequiredHeaders(A.PREAUTHORIZATION_ENDPOINT_PATH).then(function(a) {
                new o.a({
                    type: "POST",
                    url: r.spURL + A.PREAUTHORIZATION_ENDPOINT_PATH,
                    data: {
                        authentication_token: i.getSource(),
                        requestor_id: r.requestorID,
                        resource_id: t,
                        noflash: !0
                    },
                    dataType: "xml",
                    success: e,
                    error: n,
                    headers: a,
                    context: r,
                    traditional: !0
                }).send()
            }, function(t) {
                n(t.data, t.status)
            })
        }
        ,
        t.prototype.logout = function(t) {
            var e = u.a.clientInfo && u.a.clientInfo.isBackgroundLogout();
            if (t && this.spURL) {
                var r = {
                    noflash: !0,
                    mso_id: t.getMVPDID(),
                    requestor_id: this.requestorID,
                    name_id: t.getProperty("simpleSamlNameID"),
                    session_index: t.getProperty("simpleSamlSessionIndex"),
                    pi: t.getProperty("simpleSamlNameID")
                }
                  , a = t.getProperty("simpleTransientPartOfGuid");
                a && (r.p1 = a),
                r = h.a.extend(r, o.a.globalData);
                var s = this.spURL + A.LOGOUT_ENDPOINT_PATH;
                e ? (r.redirect_url = n.p + A.BACKGROUND_LOGOUT_COMPLETE,
                u.a.getInstance().doBackgroundLogout(s + i.a.param(r))) : u.a.getInstance().callCallback("navigateToURL", s + i.a.param(r), null, null)
            } else
                e ? u.a.getInstance().completeBackgroundLogout() : u.a.getInstance().callCallback("reload")
        }
        ,
        t.prototype.getRequiredHeaders = function(e) {
            var n = this;
            return new Promise(function(i, o) {
                var a = JSON.parse(JSON.stringify(n.identificationManager.getDeviceInfo()))
                  , s = n.storageManager.getSAMLNameID();
                s && (a.ap_19 = s);
                var c = n.storageManager.getSAMLSessionIndex();
                c && (a.ap_23 = c);
                var u = function(t) {
                    for (var n = 0, r = t; n < r.length; n++) {
                        var i = r[n];
                        if (-1 !== e.indexOf(i))
                            return !0
                    }
                    return !1
                }
                  , l = u(t.ENDPOINTS_REQUIRING_DEVICE_ID_HEADER)
                  , h = u(t.ENDPOINTS_REQUIRING_ACCESS_TOKEN_HEADER)
                  , d = function() {
                    n.clientRegistrationService.obtainAccessToken().then(function(t) {
                        a.Authorization = "Bearer " + t.getAccessToken(),
                        i(a)
                    }, function(t) {
                        o({
                            data: t,
                            status: r.a.MISSING_REQUIRED_PREREQUISITES_ERROR_STATUS
                        })
                    })
                };
                l ? n.identificationManager.getDeviceId().then(function(t) {
                    a.ap_21 = t,
                    a.pass_sfp = n.storageManager.getSFP(),
                    h ? d() : i(a)
                }, function(t) {
                    o({
                        data: t,
                        status: r.a.MISSING_REQUIRED_PREREQUISITES_ERROR_STATUS
                    })
                }) : h ? d() : i(a)
            }
            )
        }
        ,
        t.ENDPOINTS_REQUIRING_DEVICE_ID_HEADER = [A.AUTHENTICATION_TOKEN_ENDPOINT_PATH, A.AUTHORIZATION_TOKEN_ENDPOINT_PATH, A.MEDIA_TOKEN_ENDPOINT_PATH],
        t.ENDPOINTS_REQUIRING_ACCESS_TOKEN_HEADER = [A.INDIVIDUALIZATION_ENDPOINT_PATH, A.CONFIG_ENDPOINT_PATH, A.AUTHENTICATION_ENDPOINT_PATH, A.AUTHENTICATION_TOKEN_ENDPOINT_PATH, A.AUTHORIZATION_TOKEN_ENDPOINT_PATH, A.MEDIA_TOKEN_ENDPOINT_PATH, A.PREAUTHORIZATION_ENDPOINT_PATH, A.LOGOUT_ENDPOINT_PATH, A.DEVICE_ID_ENDPOINT_PATH, A.USER_METADATA_ENDPOINT_PATH, A.REG_CODE_ENDPOINT_PATH],
        t
    }()
}
, function(t, e, n) {
    "use strict";
    var r = n(5)
      , i = n(0)
      , o = function() {
        function t(t) {
            this.xmlElement = t
        }
        return t.prototype.getAuthorizedResourceID = function() {
            return i.a.debug("Entered - AuthorizedResource::getAuthorizedResourceID()"),
            this.xmlElement ? this.xmlElement.getAttribute("simpleResourceID") : null
        }
        ,
        t
    }()
      , a = n(3)
      , s = n(4);
    n.d(e, "a", function() {
        return c
    });
    var c = function() {
        function t(t) {
            this.source = t,
            this.xmlData = s.c.parseXML(t.split("<signatureInfo>")[2])
        }
        return t.prototype.getSource = function() {
            return this.source
        }
        ,
        t.prototype.getExpiryDate = function() {
            var t = this.getProperty("simpleTokenExpires");
            if (t)
                t = new Date(s.b.convertServerDateToISO8601DateFormat(t));
            else {
                var e = void 0
                  , n = this.getProperty("issueTime");
                if (n) {
                    e = this.getProperty("ttl");
                    var r = new Date(s.b.convertServerDateToISO8601DateFormat(n)).getTime();
                    t = new Date(r + e)
                } else {
                    if (!(e = this.getProperty("simpleTokenTTL")))
                        throw {
                            message: "Invalid token format."
                        };
                    t = new Date(s.b.convertServerDateToISO8601DateFormat(e))
                }
            }
            return t
        }
        ,
        t.prototype.isExpired = function() {
            try {
                var t = this.getExpiryDate().getTime();
                return (new Date).getTime() > t
            } catch (t) {
                return i.a.error(t.message),
                !1
            }
        }
        ,
        t.prototype.isValid = function() {
            try {
                var t = !this.isExpired();
                return t && this.isAuthZAll() && (t = a.a.requestorID === this.getRequestorID()),
                t
            } catch (t) {
                return i.a.error(t.message),
                !1
            }
        }
        ,
        t.prototype.isAuthNAll = function() {
            var t = this.getProperty("simpleTokenAuthenticationGuid");
            return "d35b501e0385360feccc755c59f5767b46c54c7d" === t || 0 === t.indexOf("95cf93bcd183214a")
        }
        ,
        t.prototype.isAuthZAll = function() {
            return "true" === this.getProperty("zAll")
        }
        ,
        t.prototype.getProperty = function(t) {
            return r.a.getNodeText(t, this.xmlData)
        }
        ,
        t.prototype.getRequestorID = function() {
            return this.getProperty("simpleTokenRequestorID")
        }
        ,
        t.prototype.getResourceID = function() {
            var t = this.getProperty("simpleTokenResourceID");
            return t || this.getProperty("resourceID")
        }
        ,
        t.prototype.getMVPDID = function() {
            return this.getProperty("simpleTokenMsoID")
        }
        ,
        t.prototype.getSubMVPDID = function() {
            return this.getProperty("simpleTokenSubMvpdID")
        }
        ,
        t.prototype.getAuthorizedResources = function() {
            i.a.trace("Entered - Token::getAuthorizedResources()");
            var t = new Array(0);
            if (this.xmlData) {
                var e = this.xmlData.getElementsByTagName("simpleAuthorizedResource");
                t = new Array(e.length);
                for (var n = 0; n < t.length; n++) {
                    var r = new o(e[n]);
                    t[n] = r
                }
            }
            return t
        }
        ,
        t
    }()
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return i
    });
    var r = function() {
        function t() {}
        return t.SESSION_COOKIE_NAME = "ap_93",
        t.PENDING_AUTHENTICATION_COOKIE_NAME = "pend_authn",
        t
    }()
      , i = function() {
        function t() {}
        return t.setSessionCookie = function() {
            document.cookie = r.SESSION_COOKIE_NAME + "=" + (new Date).getTime() + ";path=/"
        }
        ,
        t.isSessionCookieSet = function() {
            return -1 !== document.cookie.indexOf(r.SESSION_COOKIE_NAME)
        }
        ,
        t.setPendingAuthenticationCookieState = function(t) {
            document.cookie = !0 === t ? r.PENDING_AUTHENTICATION_COOKIE_NAME + "= ;expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/" : r.PENDING_AUTHENTICATION_COOKIE_NAME + "= ;expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/"
        }
        ,
        t.isPendingAuthenticationCookieSet = function() {
            return -1 !== document.cookie.indexOf(r.PENDING_AUTHENTICATION_COOKIE_NAME)
        }
        ,
        t
    }()
}
, function(t, e, n) {
    "use strict";
    var r = n(3)
      , i = n(5)
      , o = n(26)
      , a = function() {
        function t(t) {
            this.TRUE = "true",
            this.ATTR_VISIBLE = "visible",
            this.VISIBLE_TRUE = "true",
            this.MVPD = "mvpd",
            this.MVPD_ID = "id",
            this.MVPD_LOGO_URL = "logoUrl",
            this.MVPD_DISPLAY_NAME = "displayName",
            this.MVPD_AUTH_PER_AGGREGATOR = "authPerAggregator",
            this.MVPD_PASSIVE_AUTHN = "passiveAuthnEnabled",
            this.MVPD_AUTH_PER_BROWER_SESSION = "authPerBrowserSession",
            this.MVPD_IFRAME_REQUIRED = "iFrameRequired",
            this.MVPD_IFRAME_HEIGHT = "iFrameHeight",
            this.MVPD_IFRAME_WIDTH = "iFrameWidth",
            this.TEMP_PASS = "tempPass",
            this.mvpds = null,
            this.config = t
        }
        return t.prototype.getMvpds = function() {
            var t = this;
            return this.mvpds || (this.mvpds = [],
            o(i.a.getNodes(this.MVPD, this.config), function(e) {
                var n = i.a.getNodeText(t.MVPD_ID, e)
                  , r = {
                    id: n,
                    displayName: t.extractMvpdConfig(t.MVPD_DISPLAY_NAME, n, e, !1),
                    logoUrl: t.extractMvpdConfig(t.MVPD_LOGO_URL, n, e, !1),
                    authPerAggregator: t.extractMvpdConfig(t.MVPD_AUTH_PER_AGGREGATOR, n, e, !0),
                    passiveAuthnEnabled: t.extractMvpdConfig(t.MVPD_PASSIVE_AUTHN, n, e, !0, !0),
                    authPerBrowserSession: t.extractMvpdConfig(t.MVPD_AUTH_PER_BROWER_SESSION, n, e, !0),
                    iFrameRequired: t.extractMvpdConfig(t.MVPD_IFRAME_REQUIRED, n, e, !0),
                    tempPass: i.a.getNodeText(t.TEMP_PASS, e).toLowerCase() === t.TRUE
                };
                r.iFrameRequired && (r.iFrameHeight = t.extractMvpdConfig(t.MVPD_IFRAME_HEIGHT, n, e, !1),
                r.iFrameWidth = t.extractMvpdConfig(t.MVPD_IFRAME_WIDTH, n, e, !1)),
                t.mvpds.push(r)
            })),
            this.mvpds
        }
        ,
        t.prototype.getConfigForProgrammer = function() {
            var t = null;
            if (this.config && this.config.documentElement) {
                var e = this.config.documentElement.cloneNode(!0);
                if (this.removeNonVisibleNode(e))
                    if (void 0 !== window.XMLSerializer)
                        try {
                            t = (new XMLSerializer).serializeToString(e)
                        } catch (n) {
                            t = e.xml
                        }
                    else
                        t = e.xml
            }
            return t
        }
        ,
        t.prototype.removeNonVisibleNode = function(t) {
            var e = !1;
            return t.getAttribute(this.ATTR_VISIBLE) === this.VISIBLE_TRUE ? (t.removeAttribute(this.ATTR_VISIBLE),
            e = !0) : t.hasChildNodes() && (e = this.removeNonVisibleChildNodes(t)) && this.removeAttributes(t),
            e
        }
        ,
        t.prototype.removeNonVisibleChildNodes = function(t) {
            for (var e = !1, n = t.childNodes, r = 0; r < n.length; r++) {
                var i = n[r];
                1 === i.nodeType && (this.removeNonVisibleNode(i) ? e = !0 : (t.removeChild(i),
                r--))
            }
            return e
        }
        ,
        t.prototype.removeAttributes = function(t) {
            for (var e = t.attributes.length - 1; e >= 0; e--) {
                var n = t.attributes.item(e);
                t.removeAttributeNode(n)
            }
        }
        ,
        t.prototype.extractMvpdConfig = function(t, e, n, o, a) {
            void 0 === a && (a = null);
            var s, c = r.a.clientInfo && r.a.clientInfo.getMvpdConfig() ? r.a.clientInfo.getMvpdConfig() : {}, u = null !== c[e] && void 0 !== c[e] && null !== c[e][t] && void 0 !== c[e][t], l = i.a.getNode(t, n);
            return u ? (s = c[e][t],
            l && (l.textContent = s),
            s) : null !== (s = i.a.getNodeText(t, n)) && void 0 !== s && "" !== s || void 0 === a ? o ? s === this.TRUE : s : a
        }
        ,
        t
    }()
      , s = n(1)
      , c = n(13)
      , u = n(2)
      , l = n(8)
      , h = n(0)
      , d = n(15)
      , g = n(12)
      , p = n(10);
    n.d(e, "a", function() {
        return f
    });
    var f = function() {
        function t(t, e, n) {
            this.initialized = !1,
            this.authenticationProviderURL = null,
            this.validRequestor = !1,
            this.configForProgrammer = null,
            this.instance = this,
            this.reqID = t,
            this.callSetConfig = e,
            this.completeHandler = n
        }
        return t.prototype.initialize = function(e) {
            var n = this;
            e && Array.isArray(e) && e.length > 0 && (t.serviceProviderURL = e[0]),
            t.numConfigCalls++,
            d.a.getInstance().get(l.b.CONFIG_ENDPOINT_PATH + "/" + this.reqID, {
                noflash: !0
            }, {
                url: t.serviceProviderURL,
                dataType: "xml"
            }).then(function(t) {
                return n.onConfig(t.data, t.status)
            }, function(t) {
                return n.onConfig(t.data, t.status)
            })
        }
        ,
        t.prototype.isValidRequestor = function() {
            return this.validRequestor
        }
        ,
        t.prototype.getConfigForProgrammer = function() {
            return this.configForProgrammer
        }
        ,
        t.prototype.retrieveAuthenticationToken = function() {
            this.instance.authenticationProviderURL || (this.instance.authenticationProviderURL = t.serviceProviderURL),
            h.a.debug("Pending authentication detected..."),
            new l.a(this.instance.authenticationProviderURL,r.a.requestorID).retrieveAuthenticationToken(function(t) {
                return r.a.getInstance().authnSuccess(t)
            }, function(t, e, n, i) {
                return r.a.getInstance().authnError(t, e, n, i)
            })
        }
        ,
        t.prototype.completeInitialization = function() {
            0 !== t.numConfigCalls || this.instance.authenticationProviderURL || (h.a.debug("Configuration INITIALIZED"),
            this.completeHandler())
        }
        ,
        t.prototype.resetAuthenticationProviderURL = function() {
            this.instance.authenticationProviderURL = null
        }
        ,
        t.prototype.onConfig = function(e, n) {
            if (200 !== n) {
                if (n === s.a.MISSING_REQUIRED_PREREQUISITES_ERROR_STATUS)
                    return void r.a.getInstance().callbackManager.onErrorHandler(e);
                if (h.a.error("Invalid configuration response: HTTP", n),
                r.a.getInstance().callbackManager.onErrorHandler(0 === n ? s.a.SEC420 : s.a.buildError(s.a.PREFIX_CFG + n)),
                410 === n)
                    return void r.a.getInstance().callCallback("setAuthenticationStatus", 0, u.a.SERVER_API_TOO_OLD)
            }
            c.a.checkPendingLogout(e) && r.a.getInstance().ditchTokens(),
            200 === n && (this.validRequestor = !0);
            var o = 0;
            i.a.getNode("time", e) && (o = parseInt(i.a.getNodeText("time", e), 10),
            h.a.debug("Server time:", o));
            var l = (new Date).getTime();
            if (o && o > 0) {
                var d = l - o;
                (d > 59e3 || d < -59e3) && r.a.getInstance().callbackManager.onErrorHandler(s.a.CFG100)
            }
            "" === r.a.deviceInfo.deviceType && (i.a.getNode("device", e) && (r.a.deviceInfo.deviceType = i.a.getNodeText("device", e)));
            "" === r.a.deviceInfo.clientType && (i.a.getNode("clientType", e) && (r.a.deviceInfo.clientType = i.a.getNodeText("clientType", e)));
            "" === r.a.deviceInfo.os && (i.a.getNode("os", e) && (r.a.deviceInfo.os = i.a.getNodeText("os", e)));
            var f = new a(e)
              , I = f.getMvpds();
            this.callSetConfig && (this.configForProgrammer = f.getConfigForProgrammer());
            for (var E = 0, T = I; E < T.length; E++) {
                T[E].serviceProvider = t.serviceProviderURL
            }
            g.a.getInstance().addMvpds(I),
            --t.numConfigCalls,
            !0 !== p.a.isPendingAuthenticationCookieSet() || this.instance.authenticationProviderURL ? this.instance.completeInitialization() : (p.a.setPendingAuthenticationCookieState(!1),
            this.instance.retrieveAuthenticationToken())
        }
        ,
        t.serviceProviderURL = null,
        t.numConfigCalls = 0,
        t
    }()
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return o
    });
    var r = n(6)
      , i = n(4)
      , o = function() {
        function t() {
            this.mvpds = {},
            this.storageManager = r.b.getInstance()
        }
        return t.getInstance = function() {
            return this.instance || (this.instance = new t),
            this.instance
        }
        ,
        t.prototype.getCurrentSP = function() {
            var t = null
              , e = this.getCurrentMvpdID();
            e && (this.getMVPDByID(e) && (t = this.getMVPDByID(e).serviceProvider));
            return t
        }
        ,
        t.prototype.setCurrentMvpdID = function(t) {
            this.switchToCurrentMvpdStorageType(t),
            this.storageManager.clearStorage(t !== this.getCurrentMvpdID()),
            this.storageManager.setMvpdID(t)
        }
        ,
        t.prototype.getCurrentMvpdID = function() {
            return this.storageManager.getMvpdID()
        }
        ,
        t.prototype.getRequestorMVPDs = function() {
            return this.mvpds
        }
        ,
        t.prototype.clearRequestorMVPDs = function() {
            this.mvpds = {}
        }
        ,
        t.prototype.addMvpds = function(t) {
            if (t && t.length > 0)
                for (var e = 0, n = t; e < n.length; e++) {
                    var r = n[e];
                    this.mvpds.hasOwnProperty(r.id) || (this.mvpds[r.id] = r)
                }
        }
        ,
        t.prototype.getMVPDByID = function(t) {
            return i.a.isEmpty(this.mvpds) ? null : this.mvpds.hasOwnProperty(t) ? this.mvpds[t] : null
        }
        ,
        t.prototype.isValidMVPD = function(t) {
            var e = this.getMVPDByID(t);
            return !!e && e.id === t
        }
        ,
        t.prototype.switchToCurrentMvpdStorageType = function(t) {
            if (t) {
                var e = this.getMVPDByID(t);
                e && (e.authPerBrowserSession ? this.storageManager.switchToSessionStorage() : this.storageManager.switchToLocalStorage())
            }
        }
        ,
        t.prototype.getCurrentMvpd = function() {
            var t = null
              , e = this.getCurrentMvpdID();
            return e && (t = this.getMVPDByID(e)),
            t
        }
        ,
        t
    }()
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return i
    });
    var r = n(5)
      , i = function() {
        function t() {}
        return t.checkPendingLogout = function(t) {
            if ("string" == typeof t)
                return new RegExp("<pendingLogout.*>(s)*true(s)*</pendingLogout>").test(t);
            var e = !1;
            return r.a.getNode("pendingLogout", t) && "true" === r.a.getNodeText("pendingLogout", t) && (e = !0),
            e
        }
        ,
        t.getPendingLogoutReason = function(t) {
            var e = null;
            if ("string" == typeof t)
                e = (e = new RegExp('<pendingLogout reason="(.*)">true</pendingLogout>').exec(t))[1] ? e[1] : null;
            else {
                var n = r.a.getNode("pendingLogout", t);
                n && "true" === r.a.getNodeText("pendingLogout", t) && (e = n.attr("reason"))
            }
            return e
        }
        ,
        t
    }()
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return i
    });
    var r = new (function() {
        function t() {
            this.r20 = /%20/g,
            this.class2type = {},
            this.rbracket = /\[\]$/,
            this.toString = this.class2type.toString
        }
        return t.prototype.type = function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? this.class2type[this.toString.call(t)] || "object" : typeof t
        }
        ,
        t.prototype.isFunction = function(t) {
            return "function" === this.type(t)
        }
        ,
        t.prototype.buildParams = function(t, e, n) {
            var r, i, o;
            if (Array.isArray(e))
                for (i in e)
                    e.hasOwnProperty(i) && (o = e[i],
                    this.rbracket.test(t) ? n(t, o) : this.buildParams(t + "[" + ("object" == typeof o ? i : "") + "]", o, n));
            else if ("object" === this.type(e))
                for (r in e)
                    e.hasOwnProperty(r) && this.buildParams(t + "[" + r + "]", e[r], n);
            else
                n(t, e)
        }
        ,
        t
    }())
      , i = function() {
        function t() {}
        return t.param = function(t, e) {
            var n, i;
            void 0 === e && (e = !1);
            var o = []
              , a = function(t, e) {
                e = r.isFunction(e) ? e() : null == e ? "" : e,
                o[o.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
            if (Array.isArray(t))
                for (i in t)
                    t.hasOwnProperty(i) && a(i, t[i]);
            else
                for (n in t)
                    t.hasOwnProperty(n) && r.buildParams(n, t[n], a);
            var s = o.join("&").replace(r.r20, "+");
            return e && (s = s.replace(/%5B%5D/g, "")),
            s
        }
        ,
        t
    }()
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return o
    });
    var r = n(7)
      , i = n(3)
      , o = function() {
        function t() {
            this.ajaxReference = r.a
        }
        return t.getInstance = function() {
            return this.instance || (this.instance = new t),
            this.instance
        }
        ,
        t.prototype.ajax = function(t, e, n) {
            var r, o = this;
            return void 0 === n && (n = {}),
            new Promise(function(a, s) {
                i.a.getInstance().getService().getRequiredHeaders(t).then(function(i) {
                    r = new o.ajaxReference({
                        type: n.method || "GET",
                        url: "" + n.url + t,
                        data: e,
                        dataType: n.dataType || "json",
                        success: function(t, e, n) {
                            a({
                                data: t,
                                status: e,
                                headers: n && n.responseHeaders ? n.responseHeaders : []
                            })
                        },
                        error: function(t, e) {
                            s({
                                data: t,
                                status: e
                            })
                        },
                        headers: i,
                        context: n.context || o
                    });
                    try {
                        r.send()
                    } catch (t) {
                        s(t)
                    }
                }, function(t) {
                    s(t)
                })
            }
            )
        }
        ,
        t.prototype.post = function(t, e, n) {
            return void 0 === n && (n = {}),
            n.method = "POST",
            this.ajax(t, e, n)
        }
        ,
        t.prototype.get = function(t, e, n) {
            return void 0 === e && (e = {}),
            void 0 === n && (n = {}),
            n.method = "GET",
            this.ajax(t, e, n)
        }
        ,
        t.prototype.delete = function(t, e, n) {
            return void 0 === e && (e = {}),
            void 0 === n && (n = {}),
            n.method = "DELETE",
            this.ajax(t, e, n)
        }
        ,
        t.prototype.put = function(t, e, n) {
            return void 0 === n && (n = {}),
            n.method = "PUT",
            this.ajax(t, e, n)
        }
        ,
        t
    }()
}
, function(t, e, n) {
    "use strict";
    var r = n(6)
      , i = n(1)
      , o = n(2)
      , a = n(0)
      , s = n(24)
      , c = function() {
        function t() {
            this.defaultFingerprint = s(navigator.userAgent)
        }
        return t.getInstance = function() {
            return this.instance || (this.instance = new t),
            this.instance
        }
        ,
        t.prototype.getFingerprint = function() {
            var t = this;
            return new Promise(function(e) {
                Promise.all([n.e(0), n.e(1)]).then(function() {
                    a.a.debug("default", t.defaultFingerprint, s)
                    try {
                        (new (0,
                        n(36).Fingerprint)).get(function(t) {
                            a.a.debug("default1", n)
                            a.a.debug("Fingerprinting result ", t),
                            e(t)
                        })
                    } catch (n) {
                        a.a.error("Error calculating fingerprint!", n),
                        e(t.defaultFingerprint)
                    }
                }
                .bind(null, n)).catch(function(n) {
                    a.a.error("Error loading fingerprint library", n),
                    a.a.debug("Using default fingerprinting value ", t.defaultFingerprint),
                    e(t.defaultFingerprint)
                })
            }
            )
        }
        ,
        t
    }()
      , u = n(15)
      , l = n(11)
      , h = n(8)
      , d = n(17)
      , g = function() {
        function t() {
            this.INDIVIDUALIZATION_DEVICE_ID_KEY = "deviceId",
            this.REQUIRED_INDIVIDUALIZATION_KEYS = [this.INDIVIDUALIZATION_DEVICE_ID_KEY],
            this.fingerprintService = c.getInstance(),
            this.httpService = u.a.getInstance()
        }
        return t.prototype.getIndividualizationData = function() {
            var t = this;
            return new Promise(function(e, n) {
                t.fingerprintService.getFingerprint().then(function(r) {
                    t.httpService.post(h.b.INDIVIDUALIZATION_ENDPOINT_PATH, {
                        fingerprint: r
                    }, {
                        url: new d(l.a.serviceProviderURL,null,!0).origin
                    }).then(function(r) {
                        try {
                            for (var a = JSON.parse(r.data), s = 0, c = t.REQUIRED_INDIVIDUALIZATION_KEYS; s < c.length; s++)
                                if (!a[c[s]])
                                    return void n(i.a.IS2XX("" + i.a.PREFIX_IS + r.status, o.a.MISSING_INDIVIDUALIZATION_KEY_ERROR));
                            e({
                                iid: a[t.INDIVIDUALIZATION_DEVICE_ID_KEY],
                                sfp: r.headers.pass_sfp
                            })
                        } catch (t) {
                            n(i.a.IS2XX("" + i.a.PREFIX_IS + r.status, o.a.INVALID_INDIVIDUALIZATION_DATA_ERROR))
                        }
                    }, function(t) {
                        n(i.a.buildError("" + i.a.PREFIX_IS + t.status))
                    })
                })
            }
            )
        }
        ,
        t
    }();
    n.d(e, "a", function() {
        return p
    });
    var p = function() {
        function t() {
            this.storageManager = r.b.getInstance(),
            this.individualizationService = new g
        }
        return t.getInstance = function() {
            return this.instance || (this.instance = new t),
            this.instance
        }
        ,
        t.prototype.getDeviceInfo = function() {
            return {
                ap_42: navigator.vendor ? navigator.vendor : "anonymous",
                ap_11: navigator.platform,
                ap_z: navigator.userAgent
            }
        }
        ,
        t.prototype.getDeviceId = function() {
            var t = this;
            return new Promise(function(e, n) {
                var r = t.storageManager.getDeviceId();
                r ? e(r) : t.individualizationService.getIndividualizationData().then(function(n) {
                    t.storageManager.setDeviceId(n.iid),
                    t.storageManager.setSFP(n.sfp),
                    e(n.iid)
                }, function(t) {
                    n(t)
                })
            }
            )
        }
        ,
        t
    }()
}
, function(t, e, n) {
    "use strict";
    (function(e) {
        var r = n(28)
          , i = n(27)
          , o = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i
          , a = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//
          , s = [["#", "hash"], ["?", "query"], ["/", "pathname"], ["@", "auth", 1], [NaN, "host", void 0, 1, 1], [/:(\d+)$/, "port", void 0, 1], [NaN, "hostname", void 0, 1, 1]]
          , c = {
            hash: 1,
            query: 1
        };
        function u(t) {
            var n, r = e && e.location || {}, i = {}, o = typeof (t = t || r);
            if ("blob:" === t.protocol)
                i = new h(unescape(t.pathname),{});
            else if ("string" === o)
                for (n in i = new h(t,{}),
                c)
                    delete i[n];
            else if ("object" === o) {
                for (n in t)
                    n in c || (i[n] = t[n]);
                void 0 === i.slashes && (i.slashes = a.test(t.href))
            }
            return i
        }
        function l(t) {
            var e = o.exec(t);
            return {
                protocol: e[1] ? e[1].toLowerCase() : "",
                slashes: !!e[2],
                rest: e[3]
            }
        }
        function h(t, e, n) {
            if (!(this instanceof h))
                return new h(t,e,n);
            var o, a, c, d, g, p, f = s.slice(), I = typeof e, E = this, T = 0;
            for ("object" !== I && "string" !== I && (n = e,
            e = null),
            n && "function" != typeof n && (n = i.parse),
            e = u(e),
            o = !(a = l(t || "")).protocol && !a.slashes,
            E.slashes = a.slashes || o && e.slashes,
            E.protocol = a.protocol || e.protocol || "",
            t = a.rest,
            a.slashes || (f[2] = [/(.*)/, "pathname"]); T < f.length; T++)
                c = (d = f[T])[0],
                p = d[1],
                c != c ? E[p] = t : "string" == typeof c ? ~(g = t.indexOf(c)) && ("number" == typeof d[2] ? (E[p] = t.slice(0, g),
                t = t.slice(g + d[2])) : (E[p] = t.slice(g),
                t = t.slice(0, g))) : (g = c.exec(t)) && (E[p] = g[1],
                t = t.slice(0, g.index)),
                E[p] = E[p] || o && d[3] && e[p] || "",
                d[4] && (E[p] = E[p].toLowerCase());
            n && (E.query = n(E.query)),
            o && e.slashes && "/" !== E.pathname.charAt(0) && ("" !== E.pathname || "" !== e.pathname) && (E.pathname = function(t, e) {
                for (var n = (e || "/").split("/").slice(0, -1).concat(t.split("/")), r = n.length, i = n[r - 1], o = !1, a = 0; r--; )
                    "." === n[r] ? n.splice(r, 1) : ".." === n[r] ? (n.splice(r, 1),
                    a++) : a && (0 === r && (o = !0),
                    n.splice(r, 1),
                    a--);
                return o && n.unshift(""),
                "." !== i && ".." !== i || n.push(""),
                n.join("/")
            }(E.pathname, e.pathname)),
            r(E.port, E.protocol) || (E.host = E.hostname,
            E.port = ""),
            E.username = E.password = "",
            E.auth && (d = E.auth.split(":"),
            E.username = d[0] || "",
            E.password = d[1] || ""),
            E.origin = E.protocol && E.host && "file:" !== E.protocol ? E.protocol + "//" + E.host : "null",
            E.href = E.toString()
        }
        h.prototype = {
            set: function(t, e, n) {
                var o = this;
                switch (t) {
                case "query":
                    "string" == typeof e && e.length && (e = (n || i.parse)(e)),
                    o[t] = e;
                    break;
                case "port":
                    o[t] = e,
                    r(e, o.protocol) ? e && (o.host = o.hostname + ":" + e) : (o.host = o.hostname,
                    o[t] = "");
                    break;
                case "hostname":
                    o[t] = e,
                    o.port && (e += ":" + o.port),
                    o.host = e;
                    break;
                case "host":
                    o[t] = e,
                    /:\d+$/.test(e) ? (e = e.split(":"),
                    o.port = e.pop(),
                    o.hostname = e.join(":")) : (o.hostname = e,
                    o.port = "");
                    break;
                case "protocol":
                    o.protocol = e.toLowerCase(),
                    o.slashes = !n;
                    break;
                case "pathname":
                case "hash":
                    if (e) {
                        var a = "pathname" === t ? "/" : "#";
                        o[t] = e.charAt(0) !== a ? a + e : e
                    } else
                        o[t] = e;
                    break;
                default:
                    o[t] = e
                }
                for (var c = 0; c < s.length; c++) {
                    var u = s[c];
                    u[4] && (o[u[1]] = o[u[1]].toLowerCase())
                }
                return o.origin = o.protocol && o.host && "file:" !== o.protocol ? o.protocol + "//" + o.host : "null",
                o.href = o.toString(),
                o
            },
            toString: function(t) {
                t && "function" == typeof t || (t = i.stringify);
                var e, n = this, r = n.protocol;
                r && ":" !== r.charAt(r.length - 1) && (r += ":");
                var o = r + (n.slashes ? "//" : "");
                return n.username && (o += n.username,
                n.password && (o += ":" + n.password),
                o += "@"),
                o += n.host + n.pathname,
                (e = "object" == typeof n.query ? t(n.query) : n.query) && (o += "?" !== e.charAt(0) ? "?" + e : e),
                n.hash && (o += n.hash),
                o
            }
        },
        h.extractProtocol = l,
        h.location = u,
        h.qs = i,
        t.exports = h
    }
    ).call(this, n(25))
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return s
    });
    var r = n(0)
      , i = n(7)
      , o = n(4)
      , a = n(10)
      , s = function() {
        function t(t, e) {
            void 0 === t && (t = null),
            void 0 === e && (e = parent),
            this.handlers = {},
            this.url = t,
            this.target = e,
            this.handlers = {}
        }
        return t.prototype.postMessage = function(t) {
            this.target.postMessage(t, this.url.replace(/([^:]+:\/\/[^\/]+).*/, "$1"))
        }
        ,
        t.prototype.postAjax = function(t) {
            var e = this;
            return new Promise(function(n) {
                try {
                    var i = o.a.extend({}, t);
                    i.proxyRequest = !1,
                    i.proxyResponse = !0,
                    delete i.context,
                    delete i.success,
                    delete i.error;
                    var a = "c.a.p.pm.xhr." + e.getOpId();
                    e.addEventListener(a, function(t) {
                        t.data.id === a && (r.a.debug("Proxy response event message received: ", t),
                        e.removeEventListener(t.data.id),
                        n(t.data))
                    });
                    var s = {
                        id: a,
                        payload: i
                    };
                    r.a.debug("Sending proxy request event message: ", s),
                    e.postMessage(s)
                } catch (t) {
                    r.a.error(t),
                    n({
                        error: t.toString()
                    })
                }
            }
            )
        }
        ,
        t.prototype.postStorage = function(t) {
            for (var e = this, n = [], i = 1; i < arguments.length; i++)
                n[i - 1] = arguments[i];
            return new Promise(function(i) {
                try {
                    var o = "c.a.p.pm.s." + e.getOpId();
                    e.addEventListener(o, function(t) {
                        t.data.id === o && (e.removeEventListener(t.data.id),
                        i(t.data.result))
                    });
                    var a = {
                        id: o,
                        operation: t,
                        params: n
                    };
                    e.postMessage(a)
                } catch (t) {
                    r.a.error(t),
                    i()
                }
            }
            )
        }
        ,
        t.prototype.handleAjax = function() {
            var t = this;
            this.addEventListener("ajax", function(e) {
                if (e && e.data && e.data.id && 0 === e.data.id.indexOf("c.a.p.pm.xhr.")) {
                    var n = e.data.payload;
                    n.success = n.error = function(n, i, o) {
                        var a = {
                            id: e.data.id,
                            status: i,
                            data: n,
                            xhr: o
                        };
                        r.a.debug("Sending proxy response event message: ", a),
                        t.postMessage(a)
                    }
                    ;
                    try {
                        r.a.debug("Handling proxy request event message: ", e),
                        new i.a(n).send()
                    } catch (t) {
                        r.a.error(t)
                    }
                }
            })
        }
        ,
        t.prototype.handleStorage = function() {
            var t = this;
            this.addEventListener("storage", function(e) {
                if (e && e.data && e.data.id && 0 === e.data.id.indexOf("c.a.p.pm.s.") && e.data.operation && e.data.params) {
                    var n = {
                        id: e.data.id
                    }
                      , i = e.data.params;
                    switch (e.data.operation) {
                    case "getItems":
                        if (n.result = {},
                        t.isLocalStorageSpaceEnabled())
                            for (var o = 0, s = i; o < s.length; o++) {
                                var c = s[o]
                                  , u = localStorage.getItem(c);
                                null !== u && (n.result[c] = u)
                            }
                        else
                            n.result.error = !0,
                            r.a.debug("Web localStorage is not available for 3rd parties for read operations");
                        break;
                    case "setItem":
                        t.isLocalStorageSpaceEnabled() ? 2 === i.length ? localStorage.setItem(i[0], i[1]) : r.a.error("Did not receive valid data to write!", i) : r.a.debug("Web localStorage is not available for 3rd parties for write operations");
                        break;
                    case "isSessionCookieSet":
                        n.result = {
                            isSessionCookieSet: a.a.isSessionCookieSet()
                        };
                        break;
                    case "setSessionCookie":
                        a.a.setSessionCookie();
                        break;
                    default:
                        r.a.error("Unsupported storage operation: ", e.data.operation)
                    }
                    t.postMessage(n)
                }
            })
        }
        ,
        t.prototype.addEventListener = function(t, e) {
            this.handlers[t] = e,
            window.addEventListener("message", e, !1)
        }
        ,
        t.prototype.removeEventListener = function(t) {
            window.removeEventListener("message", this.handlers[t], !1),
            delete this.handlers[t]
        }
        ,
        t.prototype.getOpId = function() {
            return t.opSeq > 1e3 && (t.opSeq = 0),
            +new Date + "." + t.opSeq++
        }
        ,
        t.prototype.isLocalStorageSpaceEnabled = function() {
            try {
                return localStorage.setItem("canWrite", "test"),
                localStorage.removeItem("canWrite"),
                !0
            } catch (t) {
                return !1
            }
        }
        ,
        t.opSeq = 0,
        t
    }()
}
, function(t, e, n) {
    "use strict";
    n.d(e, "b", function() {
        return i
    }),
    n.d(e, "a", function() {
        return a
    });
    var r = n(0)
      , i = function() {
        function t() {}
        return t.CLIENT_CREDENTIALS = "client_credentials",
        t
    }()
      , o = function() {
        function t() {}
        return t.CLIENT_ID = "client_id",
        t.CLIENT_SECRET = "client_secret",
        t.GRANT_TYPES = "grant_types",
        t.REDIRECT_URI = "redirect_uris",
        t.CREATED_AT = "client_id_issued_at",
        t
    }()
      , a = function() {
        function t(t) {
            if (this.clientId = null,
            this.clientSecret = null,
            this.grantTypes = null,
            this.redirectURI = null,
            this.createdAt = null,
            t)
                try {
                    var e = JSON.parse(t);
                    this.clientId = e[o.CLIENT_ID],
                    this.clientSecret = e[o.CLIENT_SECRET],
                    this.grantTypes = e[o.GRANT_TYPES],
                    this.redirectURI = e[o.REDIRECT_URI],
                    this.createdAt = e[o.CREATED_AT]
                } catch (t) {
                    r.a.error("Application registration response data has invalid JSON format!")
                }
        }
        return t.prototype.getClientId = function() {
            return this.clientId
        }
        ,
        t.prototype.getClientSecret = function() {
            return this.clientSecret
        }
        ,
        t.prototype.isValid = function() {
            return this && null != this.clientId && null != this.clientSecret && null != this.grantTypes && null != this.redirectURI && null != this.createdAt
        }
        ,
        t.prototype.copyFromJSONObject = function(t) {
            for (var e in t)
                t.hasOwnProperty(e) && (this[e] = t[e])
        }
        ,
        t
    }()
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return d
    });
    var r = n(15)
      , i = n(6)
      , o = n(22)
      , a = n(19)
      , s = n(3)
      , c = n(11)
      , u = n(8)
      , l = n(1)
      , h = n(17)
      , d = function() {
        function t() {
            this.httpService = r.a.getInstance(),
            this.storageManager = i.b.getInstance()
        }
        return t.getInstance = function() {
            return this.instance || (this.instance = new t),
            this.instance
        }
        ,
        t.prototype.obtainAccessToken = function() {
            var t = this;
            return new Promise(function(e, n) {
                var r = t.storageManager.getAccessToken();
                null != r ? e(r) : t.obtainApplicationRegistration().then(function(r) {
                    t.retrieveAccessToken(r).then(function(t) {
                        e(t)
                    }, function(t) {
                        n(t)
                    })
                }, function(t) {
                    n(t)
                })
            }
            )
        }
        ,
        t.prototype.obtainApplicationRegistration = function() {
            var t = this;
            return new Promise(function(e, n) {
                var r = t.storageManager.getApplicationRegistration();
                null != r ? e(r) : t.retrieveApplicationRegistration().then(function(t) {
                    e(t)
                }, function(t) {
                    n(t)
                })
            }
            )
        }
        ,
        t.prototype.retrieveAccessToken = function(e) {
            var n = this;
            return new Promise(function(r, i) {
                n.httpService.post(u.b.ACCESS_TOKEN_ENDPOINT_PATH, {
                    grant_type: a.b.CLIENT_CREDENTIALS,
                    client_id: e.getClientId(),
                    client_secret: e.getClientSecret()
                }, {
                    url: new h(c.a.serviceProviderURL,null,!0).origin,
                    dataType: "application/x-www-form-urlencoded"
                }).then(function(t) {
                    var e = new o.a(t.data);
                    n.storageManager.setAccessToken(e),
                    r(e)
                }, function() {
                    t.RETRY_RETRIEVING_ACCESS_TOKEN ? (t.RETRY_RETRIEVING_ACCESS_TOKEN = !1,
                    n.retrieveApplicationRegistration().then(function(t) {
                        n.retrieveAccessToken(t).then(function(t) {
                            r(t)
                        }, function(t) {
                            i(t)
                        })
                    }, function(t) {
                        i(t)
                    })) : i(l.a.R401)
                })
            }
            )
        }
        ,
        t.prototype.retrieveApplicationRegistration = function() {
            var e = this;
            return new Promise(function(n, r) {
                e.httpService.post(u.b.CLIENT_REGISTRATION_ENDPOINT_PATH, {
                    software_statement: s.a.getInstance().getSoftwareStatement()
                }, {
                    url: new h(c.a.serviceProviderURL,null,!0).origin,
                    dataType: "json"
                }).then(function(t) {
                    var r = new a.a(t.data);
                    e.storageManager.setApplicationRegistration(r),
                    n(r)
                }, function() {
                    t.RETRY_RETRIEVING_APPLICATION_REGISTRATION ? (t.RETRY_RETRIEVING_APPLICATION_REGISTRATION = !1,
                    e.retrieveApplicationRegistration().then(function(t) {
                        n(t)
                    }, function(t) {
                        r(t)
                    })) : r(l.a.R400)
                })
            }
            )
        }
        ,
        t.RETRY_RETRIEVING_ACCESS_TOKEN = !0,
        t.RETRY_RETRIEVING_APPLICATION_REGISTRATION = !0,
        t
    }()
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return o
    });
    var r = n(0)
      , i = function() {
        function t() {}
        return t.ID = "id",
        t.CODE = "code",
        t.REQUESTOR = "requestor",
        t.MVPD = "mvpd",
        t.GENERATED = "generated",
        t.EXPIRES = "expires",
        t.INFO = "info",
        t
    }()
      , o = function() {
        function t(t) {
            if (this.id = null,
            this.code = null,
            this.requestor = null,
            this.mvpd = null,
            this.generated = null,
            this.expires = null,
            this.info = null,
            t)
                try {
                    var e = JSON.parse(t);
                    this.id = e[i.ID],
                    this.code = e[i.CODE],
                    this.requestor = e[i.REQUESTOR],
                    this.mvpd = e[i.MVPD],
                    this.generated = e[i.GENERATED],
                    this.expires = e[i.EXPIRES],
                    this.info = e[i.INFO]
                } catch (t) {
                    r.a.error("Registration Code response data has invalid JSON format!")
                }
        }
        return t.prototype.getCode = function() {
            return this.code
        }
        ,
        t.prototype.isValid = function() {
            return this && null != this.id && null != this.code && null != this.requestor && null == this.mvpd && null != this.generated && null != this.expires && null != this.info && (new Date).getTime() < this.expires
        }
        ,
        t.prototype.copyFromJSONObject = function(t) {
            for (var e in t)
                t.hasOwnProperty(e) && (this[e] = t[e])
        }
        ,
        t
    }()
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return o
    });
    var r = n(0)
      , i = function() {
        function t() {}
        return t.ACCESS_TOKEN = "access_token",
        t.EXPIRES_IN = "expires_in",
        t.TOKEN_TYPE = "token_type",
        t.CREATED_AT = "created_at",
        t
    }()
      , o = function() {
        function t(t) {
            if (this.accessToken = null,
            this.expiresIn = null,
            this.tokenType = null,
            this.createdAt = null,
            t)
                try {
                    var e = JSON.parse(t);
                    this.accessToken = e[i.ACCESS_TOKEN],
                    this.expiresIn = e[i.EXPIRES_IN],
                    this.tokenType = e[i.TOKEN_TYPE],
                    this.createdAt = e[i.CREATED_AT]
                } catch (t) {
                    r.a.error("Access token response data has invalid JSON format!")
                }
        }
        return t.prototype.getAccessToken = function() {
            return this.accessToken
        }
        ,
        t.prototype.isValid = function() {
            return this && null != this.accessToken && null != this.tokenType && null != this.createdAt && null != this.expiresIn && (new Date).getTime() < this.createdAt + 1e3 * this.expiresIn
        }
        ,
        t.prototype.copyFromJSONObject = function(t) {
            for (var e in t)
                t.hasOwnProperty(e) && (this[e] = t[e])
        }
        ,
        t
    }()
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
        return r
    });
    var r = function() {
        function t() {}
        return t.get = function() {
            var t = this.findScript(document.getElementsByTagName("script"));
            return !t && window.$ && (t = this.findScript($("script"))),
            t || (t = this.findUsingStacktraces()),
            t && t.length > 0 ? t : this.DEFAULT_SCRIPT_URL
        }
        ,
        t.findScript = function(t) {
            for (var e, n = new RegExp("(.*)AccessEnabler.js(.*)"), r = 0, i = t; r < i.length; r++) {
                var o = i[r];
                if (o.src && o.src.match(n)) {
                    e = o.src;
                    break
                }
            }
            return e
        }
        ,
        t.findUsingStacktraces = function() {
            var t, e = function(e, n) {
                t = n
            };
            try {
                throw new Error
            } catch (n) {
                return "AccessEnabler.js"in n ? t = n["AccessEnabler.js"] : "stacktrace"in n ? n.stacktrace.replace(/called from line \d+, column \d+ in (.*):/gm, e) : "stack"in n && n.stack.replace(/at.*?\(?(\S+):\d+:\d+\)?$/g, e),
                t
            }
        }
        ,
        t.DEFAULT_SCRIPT_URL = "https://entitlement.auth.adobe.com/entitlement/AccessEnabler.js",
        t
    }()
}
, function(t, e, n) {
    var r;
    !function(i) {
        "use strict";
        function o(t, e) {
            var n = (65535 & t) + (65535 & e);
            return (t >> 16) + (e >> 16) + (n >> 16) << 16 | 65535 & n
        }
        function a(t, e, n, r, i, a) {
            return o((s = o(o(e, t), o(r, a))) << (c = i) | s >>> 32 - c, n);
            var s, c
        }
        function s(t, e, n, r, i, o, s) {
            return a(e & n | ~e & r, t, e, i, o, s)
        }
        function c(t, e, n, r, i, o, s) {
            return a(e & r | n & ~r, t, e, i, o, s)
        }
        function u(t, e, n, r, i, o, s) {
            return a(e ^ n ^ r, t, e, i, o, s)
        }
        function l(t, e, n, r, i, o, s) {
            return a(n ^ (e | ~r), t, e, i, o, s)
        }
        function h(t, e) {
            var n, r, i, a, h;
            t[e >> 5] |= 128 << e % 32,
            t[14 + (e + 64 >>> 9 << 4)] = e;
            var d = 1732584193
              , g = -271733879
              , p = -1732584194
              , f = 271733878;
            for (n = 0; n < t.length; n += 16)
                r = d,
                i = g,
                a = p,
                h = f,
                g = l(g = l(g = l(g = l(g = u(g = u(g = u(g = u(g = c(g = c(g = c(g = c(g = s(g = s(g = s(g = s(g, p = s(p, f = s(f, d = s(d, g, p, f, t[n], 7, -680876936), g, p, t[n + 1], 12, -389564586), d, g, t[n + 2], 17, 606105819), f, d, t[n + 3], 22, -1044525330), p = s(p, f = s(f, d = s(d, g, p, f, t[n + 4], 7, -176418897), g, p, t[n + 5], 12, 1200080426), d, g, t[n + 6], 17, -1473231341), f, d, t[n + 7], 22, -45705983), p = s(p, f = s(f, d = s(d, g, p, f, t[n + 8], 7, 1770035416), g, p, t[n + 9], 12, -1958414417), d, g, t[n + 10], 17, -42063), f, d, t[n + 11], 22, -1990404162), p = s(p, f = s(f, d = s(d, g, p, f, t[n + 12], 7, 1804603682), g, p, t[n + 13], 12, -40341101), d, g, t[n + 14], 17, -1502002290), f, d, t[n + 15], 22, 1236535329), p = c(p, f = c(f, d = c(d, g, p, f, t[n + 1], 5, -165796510), g, p, t[n + 6], 9, -1069501632), d, g, t[n + 11], 14, 643717713), f, d, t[n], 20, -373897302), p = c(p, f = c(f, d = c(d, g, p, f, t[n + 5], 5, -701558691), g, p, t[n + 10], 9, 38016083), d, g, t[n + 15], 14, -660478335), f, d, t[n + 4], 20, -405537848), p = c(p, f = c(f, d = c(d, g, p, f, t[n + 9], 5, 568446438), g, p, t[n + 14], 9, -1019803690), d, g, t[n + 3], 14, -187363961), f, d, t[n + 8], 20, 1163531501), p = c(p, f = c(f, d = c(d, g, p, f, t[n + 13], 5, -1444681467), g, p, t[n + 2], 9, -51403784), d, g, t[n + 7], 14, 1735328473), f, d, t[n + 12], 20, -1926607734), p = u(p, f = u(f, d = u(d, g, p, f, t[n + 5], 4, -378558), g, p, t[n + 8], 11, -2022574463), d, g, t[n + 11], 16, 1839030562), f, d, t[n + 14], 23, -35309556), p = u(p, f = u(f, d = u(d, g, p, f, t[n + 1], 4, -1530992060), g, p, t[n + 4], 11, 1272893353), d, g, t[n + 7], 16, -155497632), f, d, t[n + 10], 23, -1094730640), p = u(p, f = u(f, d = u(d, g, p, f, t[n + 13], 4, 681279174), g, p, t[n], 11, -358537222), d, g, t[n + 3], 16, -722521979), f, d, t[n + 6], 23, 76029189), p = u(p, f = u(f, d = u(d, g, p, f, t[n + 9], 4, -640364487), g, p, t[n + 12], 11, -421815835), d, g, t[n + 15], 16, 530742520), f, d, t[n + 2], 23, -995338651), p = l(p, f = l(f, d = l(d, g, p, f, t[n], 6, -198630844), g, p, t[n + 7], 10, 1126891415), d, g, t[n + 14], 15, -1416354905), f, d, t[n + 5], 21, -57434055), p = l(p, f = l(f, d = l(d, g, p, f, t[n + 12], 6, 1700485571), g, p, t[n + 3], 10, -1894986606), d, g, t[n + 10], 15, -1051523), f, d, t[n + 1], 21, -2054922799), p = l(p, f = l(f, d = l(d, g, p, f, t[n + 8], 6, 1873313359), g, p, t[n + 15], 10, -30611744), d, g, t[n + 6], 15, -1560198380), f, d, t[n + 13], 21, 1309151649), p = l(p, f = l(f, d = l(d, g, p, f, t[n + 4], 6, -145523070), g, p, t[n + 11], 10, -1120210379), d, g, t[n + 2], 15, 718787259), f, d, t[n + 9], 21, -343485551),
                d = o(d, r),
                g = o(g, i),
                p = o(p, a),
                f = o(f, h);
            return [d, g, p, f]
        }
        function d(t) {
            var e, n = "", r = 32 * t.length;
            for (e = 0; e < r; e += 8)
                n += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);
            return n
        }
        function g(t) {
            var e, n = [];
            for (n[(t.length >> 2) - 1] = void 0,
            e = 0; e < n.length; e += 1)
                n[e] = 0;
            var r = 8 * t.length;
            for (e = 0; e < r; e += 8)
                n[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
            return n
        }
        function p(t) {
            var e, n, r = "";
            for (n = 0; n < t.length; n += 1)
                e = t.charCodeAt(n),
                r += "0123456789abcdef".charAt(e >>> 4 & 15) + "0123456789abcdef".charAt(15 & e);
            return r
        }
        function f(t) {
            return unescape(encodeURIComponent(t))
        }
        function I(t) {
            return function(t) {
                return d(h(g(t), 8 * t.length))
            }(f(t))
        }
        function E(t, e) {
            return function(t, e) {
                var n, r, i = g(t), o = [], a = [];
                for (o[15] = a[15] = void 0,
                i.length > 16 && (i = h(i, 8 * t.length)),
                n = 0; n < 16; n += 1)
                    o[n] = 909522486 ^ i[n],
                    a[n] = 1549556828 ^ i[n];
                return r = h(o.concat(g(e)), 512 + 8 * e.length),
                d(h(a.concat(r), 640))
            }(f(t), f(e))
        }
        function T(t, e, n) {
            return e ? n ? E(e, t) : p(E(e, t)) : n ? I(t) : p(I(t))
        }
        void 0 === (r = function() {
            return T
        }
        .call(e, n, e, t)) || (t.exports = r)
    }()
}
, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0,
        eval)("this")
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}
, function(t, e, n) {
    "use strict";
    t.exports = function(t, e, n) {
        if (t.forEach)
            t.forEach(e, n);
        else
            for (var r = 0; r < t.length; r += 1)
                e.call(n, t[r], r, t)
    }
}
, function(t, e, n) {
    "use strict";
    var r = Object.prototype.hasOwnProperty;
    function i(t) {
        return decodeURIComponent(t.replace(/\+/g, " "))
    }
    e.stringify = function(t, e) {
        e = e || "";
        var n = [];
        for (var i in "string" != typeof e && (e = "?"),
        t)
            r.call(t, i) && n.push(encodeURIComponent(i) + "=" + encodeURIComponent(t[i]));
        return n.length ? e + n.join("&") : ""
    }
    ,
    e.parse = function(t) {
        for (var e, n = /([^=?&]+)=?([^&]*)/g, r = {}; e = n.exec(t); ) {
            var o = i(e[1])
              , a = i(e[2]);
            o in r || (r[o] = a)
        }
        return r
    }
}
, function(t, e, n) {
    "use strict";
    t.exports = function(t, e) {
        if (e = e.split(":")[0],
        !(t = +t))
            return !1;
        switch (e) {
        case "http":
        case "ws":
            return 80 !== t;
        case "https":
        case "wss":
            return 443 !== t;
        case "ftp":
            return 21 !== t;
        case "gopher":
            return 70 !== t;
        case "file":
            return !1
        }
        return 0 !== t
    }
}
, , , , , , function(t, e, n) {
    "use strict";
    n.r(e),
    n.d(e, "AccessEnabler", function() {
        return s
    });
    var r = n(3)
      , i = n(23)
      , o = n(0)
      , a = n(17)
      , s = function() {
        function t(t) {
            var e = this;
            o.a.setPrefix("AccessEnabler.js");
            var r = new a(i.a.get(),null,!0);
            if (n.p = r.protocol + "//" + r.host + r.pathname.replace("AccessEnabler.js", ""),
            "undefined" != typeof Promise && -1 !== Promise.toString().indexOf("[native code]"))
                this.loadAccessEnablerHelper(t);
            else {
                o.a.warn("Non standards compliant browser! Loading polyfills.");
                var s = document.createElement("script");
                s.src = n.p + "/polyfill.js",
                s.onload = function() {
                    e.loadAccessEnablerHelper(t)
                }
                ,
                s.onerror = function() {
                    o.a.error("Failed to load polyfills!"),
                    e.loadAccessEnablerHelper(t)
                }
                ,
                document.head.appendChild(s)
            }
        }
        return t.prototype.loadAccessEnablerHelper = function(t) {
            var e = r.a.getInstance(t)
              , n = function(t) {
                e._api_methods.hasOwnProperty(t) && (i[t] = function() {
                    for (var n = [], r = 0; r < arguments.length; r++)
                        n[r] = arguments[r];
                    e[t].apply(e, n)
                }
                )
            }
              , i = this;
            for (var o in e._api_methods)
                n(o);
            this.version = "4.1.1-fd6751b"
        }
        ,
        t
    }()
}
]);
//# sourceMappingURL=AccessEnabler.js.map
