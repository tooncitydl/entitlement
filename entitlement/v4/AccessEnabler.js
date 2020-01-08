var Adobe = AccessEnabler = function(gunee) {
    function docoo(japol) {
        for (var inig, sweequi, heba = japol[0], hunu = japol[1], rooter = 0, utar = []; rooter < heba.length; rooter++) sweequi = heba[rooter],
        pukaze[sweequi] && utar.push(pukaze[sweequi][0]), pukaze[sweequi] = 0;
        for (inig in hunu) Object.prototype.hasOwnProperty.call(hunu, inig) && (gunee[inig] = hunu[inig]);
        for (biki && biki(japol); utar.length; ) utar.shift()();
    }
    var rokil = {}, pukaze = {
        3: 0
    };
    function paja(jafu) {
        if (rokil[jafu]) return rokil[jafu].exports;
        var ayoos = rokil[jafu] = {
            i: jafu,
            l: !1,
            exports: {}
        };
        return gunee[jafu].call(ayoos.exports, ayoos, ayoos.exports, paja), ayoos.l = !0,
        ayoos.exports;
    }
    paja.e = function(amoog) {
        var rume = [], finey = pukaze[amoog];
        if (0 !== finey) if (finey) rume.push(finey[2]); else {
            var foubo = new Promise(function(mege, foha) {
                finey = pukaze[amoog] = [ mege, foha ];
            });
            rume.push(finey[2] = foubo);
            var nached, ulon = document.getElementsByTagName("head")[0], habrif = document.createElement("script");
            habrif.charset = "utf-8", habrif.timeout = 120, paja.nc && habrif.setAttribute("nonce", paja.nc),
            habrif.src = function(lueru) {
                return paja.p + "" + ({}[lueru] || lueru) + ".js";
            }(amoog), nached = function(enueb) {
                habrif.onerror = habrif.onload = null, clearTimeout(heesnou);
                var tifes = pukaze[amoog];
                if (0 !== tifes) {
                    if (tifes) {
                        var bedus = enueb && ("load" === enueb.type ? "missing" : enueb.type), kode = enueb && enueb.target && enueb.target.src, meelou = new Error("Loading chunk " + amoog + " failed.\n(" + bedus + ": " + kode + ")");
                        meelou.type = bedus, meelou.request = kode, tifes[1](meelou);
                    }
                    pukaze[amoog] = void 0;
                }
            };
            var heesnou = setTimeout(function() {
                nached({
                    type: "timeout",
                    target: habrif
                });
            }, 12e4);
            habrif.onerror = habrif.onload = nached, ulon.appendChild(habrif);
        }
        return Promise.all(rume);
    }, paja.m = gunee, paja.c = rokil, paja.d = function(quima, bobmut, nocif) {
        paja.o(quima, bobmut) || Object.defineProperty(quima, bobmut, {
            enumerable: !0,
            get: nocif
        });
    }, paja.r = function(scilgeb) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(scilgeb, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(scilgeb, "__esModule", {
            value: !0
        });
    }, paja.t = function(quega, yubub) {
        if (1 & yubub && (quega = paja(quega)), 8 & yubub) return quega;
        if (4 & yubub && "object" == typeof quega && quega && quega.__esModule) return quega;
        var nuje = Object.create(null);
        if (paja.r(nuje), Object.defineProperty(nuje, "default", {
            enumerable: !0,
            value: quega
        }), 2 & yubub && "string" != typeof quega) for (var quatag in quega) paja.d(nuje, quatag, function(purker) {
            return quega[purker];
        }.bind(null, quatag));
        return nuje;
    }, paja.n = function(jiefu) {
        var cadie = jiefu && jiefu.__esModule ? function() {
            return jiefu.default;
        } : function() {
            return jiefu;
        };
        return paja.d(cadie, "a", cadie), cadie;
    }, paja.o = function(uchud, quoju) {
        return Object.prototype.hasOwnProperty.call(uchud, quoju);
    }, paja.p = "", paja.oe = function(nasug) {
        throw console.error(nasug), nasug;
    }, paja.h = "b6a6358cc8b3f82348ab", paja.cn = "AccessEnablerProxy";
    var quaba = window.webpackJsonpAdobe_AccessEnabler = window.webpackJsonpAdobe_AccessEnabler || [], ukag = quaba.push.bind(quaba);
    quaba.push = docoo, quaba = quaba.slice();
    for (var rukor = 0; rukor < quaba.length; rukor++) docoo(quaba[rukor]);
    var biki = ukag;
    return paja(paja.s = 33);
}([ function(kudut, udfoch, nopif) {
    "use strict";
    var tifa;
    !function(dapo) {
        dapo[dapo.TRACE = 0] = "TRACE", dapo[dapo.DEBUG = 1] = "DEBUG", dapo[dapo.INFO = 2] = "INFO",
        dapo[dapo.WARN = 3] = "WARN", dapo[dapo.ERROR = 4] = "ERROR", dapo[dapo.SILENT = 5] = "SILENT";
    }(tifa || (tifa = {}));
    var lugi = function() {
        function lafout() {
            this.level = 2, this.prefix = "", this.logMethods = [ "trace", "debug", "info", "warn", "error" ],
            this.bindConsoleLog();
        }
        return lafout.prototype.debug = function(sipil) {
            for (var blufe = [], sofel = 1; sofel < arguments.length; sofel++) blufe[sofel - 1] = arguments[sofel];
        }, lafout.prototype.warn = function(nopbrat) {
            for (var rugla = [], imueb = 1; imueb < arguments.length; imueb++) rugla[imueb - 1] = arguments[imueb];
        }, lafout.prototype.error = function(casek) {
            for (var mice = [], pisi = 1; pisi < arguments.length; pisi++) mice[pisi - 1] = arguments[pisi];
        }, lafout.prototype.info = function(mason) {
            for (var keeki = [], pralur = 1; pralur < arguments.length; pralur++) keeki[pralur - 1] = arguments[pralur];
        }, lafout.prototype.log = function(akey) {
            for (var hoquo = [], bifcid = 1; bifcid < arguments.length; bifcid++) hoquo[bifcid - 1] = arguments[bifcid];
        }, lafout.prototype.trace = function(kefo) {
            for (var gopo = [], bibip = 1; bibip < arguments.length; bibip++) gopo[bibip - 1] = arguments[bibip];
        }, lafout.prototype.setLevel = function(latag) {
            this.level = latag, this.bindConsoleLog();
        }, lafout.prototype.setPrefix = function(jano) {
            this.prefix = "[" + jano + "]", this.bindConsoleLog();
        }, lafout.prototype.bindConsoleLog = function() {
            if (console) for (var ogfak in console) if (console.hasOwnProperty(ogfak)) {
                var wuhuck = "function" == typeof console[ogfak];
                this.logMethods.indexOf(ogfak) >= this.level ? this[ogfak] = console[wuhuck ? ogfak : "log"].bind(window.console, this.prefix + "[" + ogfak.toString() + "]") : this[ogfak] = function() {};
            }
        }, lafout;
    }();
    udfoch.a = new lugi();
}, function(cheesu, fufu, deda) {
    "use strict";
    deda.d(fufu, "a", function() {
        return quagon;
    });
    var rofin = deda(2), rieren = deda(0), tecath = deda(4), daner = "error", quagon = function() {
        function ingos() {}
        return ingos.Z500 = function(sougou) {
            return {
                errorId: "Z500",
                level: daner,
                resource: sougou
            };
        }, ingos.Z010 = function(omtes) {
            return {
                errorId: "Z010",
                level: "warning",
                resource: omtes
            };
        }, ingos.Z011 = function(naru) {
            return {
                errorId: "Z011",
                level: "info",
                resource: naru
            };
        }, ingos.Z100 = function(uter, sipo) {
            return {
                errorId: "Z100",
                level: daner,
                message: uter,
                resource: sipo
            };
        }, ingos.Z110 = function(bodee, kosu) {
            return {
                errorId: "Z110",
                level: daner,
                message: bodee,
                resource: kosu
            };
        }, ingos.Z120 = function(irod) {
            return {
                errorId: "Z120",
                level: daner,
                message: "network error",
                resource: irod
            };
        }, ingos.Z130 = function(quofou, masro) {
            return {
                errorId: "Z130",
                level: daner,
                message: "" === quofou ? "invalid resource" : quofou,
                resource: masro
            };
        }, ingos.Z169 = function(lila, etod) {
            return {
                errorId: "Z169",
                level: daner,
                message: lila,
                resource: etod
            };
        }, ingos.IS2XX = function(nueying, ciba) {
            return {
                errorId: nueying,
                level: daner,
                message: ciba
            };
        }, ingos.buildError = function(roobo, sonoo, trehu, krura, senu) {
            return void 0 === sonoo && (sonoo = daner), void 0 === trehu && (trehu = null),
            void 0 === krura && (krura = null), void 0 === senu && (senu = {}), senu.level = sonoo,
            trehu && (senu.message = trehu), krura && (senu.subErrorId = krura), tecath.a.extend({
                errorId: roobo
            }, senu);
        }, ingos.fromAuthzErrorResponse = function(tuque, jimib) {
            var grosne;
            if ("code" in tuque && "message" in tuque) rieren.a.warn("Received a non xhr object!"),
            grosne = tuque; else {
                if (!tuque.responseText) return ingos.Z120(jimib);
                var lodtag = tuque.responseText.split("details")[1];
                lodtag && lodtag.length > 2 && (lodtag = lodtag.substring(1, lodtag.length - 2));
                var gasi = tuque.responseHeaders["authzf-error-code"], paloul = tuque.responseHeaders["authzf-sub-error-code"];
                grosne = paloul && "1010" === paloul ? {
                    code: rofin.a.USER_NOT_AUTHORIZED_ERROR,
                    subErrorCode: paloul,
                    message: lodtag
                } : {
                    code: rofin.a.USER_NOT_AUTHORIZED_ERROR,
                    shortErrorCode: gasi,
                    message: lodtag
                };
            }
            if ("authzNone" === grosne.shortErrorCode) return ingos.Z169(grosne.message, jimib);
            if ("invalid" === grosne.shortErrorCode) return ingos.Z130(grosne.message, jimib);
            if ("1010" === grosne.subErrorCode) return ingos.Z110(grosne.message, jimib);
            switch (grosne.code) {
              case rofin.a.USER_NOT_AUTHORIZED_ERROR:
                switch (grosne.message) {
                  case rofin.a.USER_NOT_AUTHORIZED_NETWORK_ERROR:
                    return ingos.Z120(jimib);

                  default:
                    return ingos.Z100(grosne.message, jimib);
                }

              case rofin.a.USER_NOT_AUTHENTICATED_ERROR:
                return ingos.N000;

              default:
                return ingos.Z500(jimib);
            }
        }, ingos.getReasonFromErrorResponse = function(pagu) {
            var traqui = null, ziro = pagu.indexOf("<reason>");
            if (ziro >= 0) {
                var nuker = pagu.indexOf("</reason>");
                nuker >= 0 && (traqui = pagu.substring(ziro + "<reason>".length, nuker));
            }
            return traqui;
        }, ingos.MISSING_REQUIRED_PREREQUISITES_ERROR_STATUS = -1, ingos.PREFIX_IS = "IS",
        ingos.PREFIX_CFG = "CFG", ingos.SEC420 = {
            errorId: "SEC420",
            level: daner
        }, ingos.SEC412 = {
            errorId: "SEC412",
            level: "warning"
        }, ingos.CFG100 = {
            errorId: "CFG100",
            level: "warning",
            message: "incorrect time"
        }, ingos.R400 = {
            errorId: "R400",
            level: daner,
            message: "application is not registered"
        }, ingos.R401 = {
            errorId: "R401",
            level: daner,
            message: "error fetching access token"
        }, ingos.REG500 = {
            errorId: "REG500",
            level: daner,
            message: "error fetching registration code"
        }, ingos.N000 = {
            errorId: "N000",
            level: "info",
            message: "user not authenticated"
        }, ingos.N010 = {
            errorId: "N010",
            level: "warning"
        }, ingos.N011 = {
            errorId: "N011",
            level: "info",
            message: "authenticated with temp pass"
        }, ingos.N111 = {
            errorId: "N111",
            level: "warning"
        }, ingos.N005 = {
            errorId: "N005",
            level: "info",
            message: "authentication cancelled"
        }, ingos.N500 = {
            errorId: "N500",
            level: daner
        }, ingos.N130 = {
            errorId: "N130",
            level: daner
        }, ingos.LS011 = {
            errorId: "LS011",
            level: "warning",
            message: "using volatile storage"
        }, ingos.N001 = {
            errorId: "N001",
            level: "info",
            message: "passive authentication"
        }, ingos.P100 = {
            errorId: "P100",
            level: daner
        }, ingos;
    }();
}, function(emug, terug, milam) {
    "use strict";
    milam.d(terug, "a", function() {
        return toque;
    });
    var toque = function() {
        function quesad() {}
        return quesad.SERVER_API_TOO_OLD = "API version too old. Please update your application.",
        quesad.USER_AUTHENTICATED = "User Authenticated", quesad.USER_NOT_AUTHENTICATED_ERROR = "User Not Authenticated Error",
        quesad.GENERIC_AUTHENTICATION_ERROR = "Generic Authentication Error", quesad.USER_NOT_AUTHORIZED_ERROR = "User not Authorized Error",
        quesad.GENERIC_AUTHORIZATION_ERROR = "Generic Authorization Error", quesad.USER_NOT_AUTHORIZED_NETWORK_ERROR = 'A network error occured when communicating with the provider"s authorization service',
        quesad.PROVIDER_NOT_SELECTED_ERROR = "Provider not Selected Error", quesad.PROVIDER_ALREADY_AUTHENTICATED = "You are already authenticated with this Provider",
        quesad.PROVIDER_NOT_AVAILABLE_ERROR = "Provider not Available Error", quesad.TRACK_AUTHORIZATION_DETECTION = "authorizationDetection",
        quesad.TRACK_AUTHENTICATION_DETECTION = "authenticationDetection", quesad.TRACK_MVPD_SELECTION = "mvpdSelection",
        quesad.BACKGROUND_LOGIN_IE_COOKIE = "apass-ie-background-login-cookie", quesad.MISSING_INDIVIDUALIZATION_KEY_ERROR = "Missing Individualization Key Error",
        quesad.INVALID_INDIVIDUALIZATION_DATA_ERROR = "Invalid Individualization Data Error",
        quesad;
    }();
}, function(jigri, gooco, bukon) {
    "use strict";
    var enuln = bukon(2), stoystish = bukon(8), sreefa = function() {
        function scetay(doquo, heged) {
            for (var deno = [], liere = 2; liere < arguments.length; liere++) deno[liere - 2] = arguments[liere];
            this.thisArg = doquo, this.fn = heged, this.params = [], deno && (this.params = Array.isArray(deno) ? deno : [ deno ]);
        }
        return scetay.prototype.execute = function() {
            return this.fn.apply(this.thisArg, this.params);
        }, scetay;
    }(), frouho = bukon(11), ipes = bukon(9), dohi = bukon(6), olob = bukon(12), coscud = bukon(1), erus = bukon(0), rinkied = function() {
        function dufun(ipbrax) {
            this.callbackMap = {}, this.callbackFacade = ipbrax;
        }
        return dufun.prototype.bind = function(tugli, macu) {
            this.validate(tugli), this.validate(macu), this.callbackMap[tugli] && Array.isArray(this.callbackMap[tugli]) || (this.callbackMap[tugli] = []),
            this.callbackMap[tugli].push(macu);
        }, dufun.prototype.unbind = function(kasisk, nuta) {
            if (this.validate(kasisk), nuta && this.validate(nuta), this.callbackMap[kasisk] && Array.isArray(this.callbackMap[kasisk])) if (nuta) {
                var croga = this.callbackMap[kasisk].indexOf(nuta);
                croga > -1 && this.callbackMap[kasisk].splice(croga, 1);
            } else delete this.callbackMap[kasisk];
        }, dufun.prototype.executeCallbacks = function(aruk, quisu) {
            if (this.callbackMap[aruk] && Array.isArray(this.callbackMap[aruk])) for (var imug = 0, roneg = this.callbackMap[aruk]; imug < roneg.length; imug++) {
                var uram = roneg[imug], lebi = quisu ? [ uram ].concat(quisu) : [ uram ];
                this.callbackFacade.callCallback.apply(this.callbackFacade, lebi);
            }
        }, dufun.prototype.onErrorHandler = function(hoglee) {
            erus.a.debug("Sending", hoglee), this.executeCallbacks("errorEvent", hoglee);
        }, dufun.prototype.validate = function(jagey) {
            if (jagey.length > 1024) throw new TypeError("InvalidArgumentError");
            if (null == jagey.match(/^[0-9a-zA-Z][-._a-zA-Z0-9]*$/)) throw new TypeError("InvalidArgumentError");
        }, dufun;
    }(), egey = bukon(4), ebaf = bukon(5), nezi = bukon(13), jega = function(biescin, midred, neemeb) {
        return biescin._api_methods || (biescin._api_methods = {}), biescin._api_methods[midred] = midred,
        neemeb;
    }, onar = bukon(16), bome = function() {
        function fevi() {}
        return fevi.getValue = function(data, clofog) {
            var fehu = quefub.getInstance().callCallback;
            switch (data) {
              case "TTL_AUTHN":
                dobi.getAuthnTTL();
                break;

              case "TTL_AUTHZ":
                dobi.getAuthzTTL(clofog);
                break;

              case "DEVICEID":
                dobi.getDeviceID();
                break;

              default:
                try {
                    var lohi = dohi.b.getInstance().getUserMetadata(), nobey = dobi.CACHE;
                    if (!data) return void fehu("setMetadataStatus", data, null, null);
                    if (dobi.isMetadataValid(lohi)) if (dobi.isMetadataValid(nobey) && nobey.updated >= lohi.updated) {
                        var tiese = nobey.data[data], mipe = tiese ? nobey.encrypted && egey.b.inArray(data, nobey.encrypted) > -1 : null;
                        fehu("setMetadataStatus", data, mipe, tiese);
                    } else {
                        quefub.getInstance().getService().retrieveEncryptedMetadata(lohi, function(gale) {
                            return function(quipil) {
                                try {
                                    quipil = JSON.parse(quipil), fesi.CACHE = quipil;
                                    var dase = quipil && quipil.data && quipil.data[data] ? quipil.data[data] : null, soupe = quipil && quipil.encrypted && egey.b.inArray(data, quipil.encrypted) > -1;
                                    fehu("setMetadataStatus", data, null != dase ? soupe : null, dase);
                                } catch (fesi) {
                                    erus.a.error(fesi), fehu("setMetadataStatus", data, null, null);
                                }
                            }(gale);
                        }, function(phate, fodu) {
                            return function(caki, teri) {
                                teri === coscud.a.MISSING_REQUIRED_PREREQUISITES_ERROR_STATUS ? quefub.getInstance().callbackManager.onErrorHandler(data) : fehu("setMetadataStatus", data, null, null);
                            }(0, fodu);
                        });
                    } else fehu("setMetadataStatus", data, null, null);
                } catch (dobi) {
                    fehu("setMetadataStatus", data, null, null);
                }
            }
        }, fevi.getAuthnTTL = function() {
            var egek = null, jenog = dohi.b.getInstance().getAuthenticationToken();
            jenog && jenog.isValid() && (egek = jenog.getExpiryDate().getTime()), quefub.getInstance().callCallback("setMetadataStatus", "TTL_AUTHN", null, egek);
        }, fevi.getAuthzTTL = function(trequa) {
            var quadu = null, puku = Array.isArray(trequa) && trequa.length > 0 ? trequa[0] : null;
            if (puku) {
                var fetu = dohi.b.getInstance().getAuthorizationToken(quefub.requestorID, puku);
                fetu && fetu.isValid() && (quadu = fetu.getExpiryDate().getTime());
            }
            quefub.getInstance().callCallback("setMetadataStatus", "TTL_AUTHZ", trequa, quadu);
        }, fevi.getDeviceID = function() {
            var teha = quefub.getInstance().callCallback, cushoos = function(quazan, ceiku) {
                ceiku === coscud.a.MISSING_REQUIRED_PREREQUISITES_ERROR_STATUS && quefub.getInstance().callbackManager.onErrorHandler(quazan),
                teha("setMetadataStatus", "DEVICEID", null, null);
            };
            onar.a.getInstance().getDeviceId().then(function(bashag) {
                quefub.getInstance().getService().retrieveDeviceIDHash(bashag, function(ogun) {
                    return function(quacou) {
                        nezi.a.checkPendingLogout(quacou) ? (quefub.getInstance().ditchTokens(), teha("setMetadataStatus", "DEVICEID", null, null)) : teha("setMetadataStatus", "DEVICEID", null, quacou);
                    }(ogun);
                }, function(hisham, bague) {
                    return cushoos(hisham, bague);
                });
            }, function(bigu) {
                cushoos(bigu, coscud.a.MISSING_REQUIRED_PREREQUISITES_ERROR_STATUS);
            });
        }, fevi.isMetadataValid = function(ipuf) {
            return ipuf && ipuf.data && ipuf.updated;
        }, fevi.CACHE = null, fevi;
    }(), quehou = function() {
        function cooro(gomib) {
            this.info = gomib, this.clientInfo = {
                callSetConfig: !1,
                backgroundLogin: !1,
                backgroundLogout: !1,
                visitorID: ""
            }, this.mvpdConfigs = {}, this.mvpdConfigDefault = {
                iFrameRequired: !1,
                iFrameWidth: 0,
                iFrameHeight: 0
            }, this.parseClientInfo(gomib), this.parseMvpdConfig(gomib), erus.a.debug("Parsed ClientInfo data", this.clientInfo, this.mvpdConfigs);
        }
        return cooro.prototype.callSetConfig = function() {
            return this.clientInfo.callSetConfig;
        }, cooro.prototype.getVisitorID = function() {
            return this.clientInfo.visitorID;
        }, cooro.prototype.isBackgroundLogin = function() {
            return this.clientInfo.backgroundLogin;
        }, cooro.prototype.isBackgroundLogout = function() {
            return this.clientInfo.backgroundLogout;
        }, cooro.prototype.getMvpdConfig = function() {
            return this.mvpdConfigs;
        }, cooro.prototype.isIFrameRequiredForMvpd = function(quajo) {
            var strinoy = this.mvpdConfigs[quajo];
            return strinoy ? strinoy.iFrameRequired : null;
        }, cooro.prototype.parseClientInfo = function(bubef) {
            for (var quero in this.clientInfo) bubef && bubef.hasOwnProperty(quero) && typeof this.clientInfo[quero] == typeof bubef[quero] && (this.clientInfo[quero] = bubef[quero]);
        }, cooro.prototype.parseMvpdConfig = function(uckcob) {
            var resu = uckcob && uckcob.mvpdConfig;
            if (!egey.a.isEmpty(resu)) for (var teepbet in erus.a.error(resu), resu) if (resu.hasOwnProperty(teepbet)) {
                var quopi = resu[teepbet], rebi = {};
                for (var dore in this.mvpdConfigDefault) quopi && quopi.hasOwnProperty(dore) && typeof this.mvpdConfigDefault[dore] == typeof quopi[dore] && (rebi[dore] = quopi[dore]);
                rebi !== {} && (this.mvpdConfigs[teepbet] = egey.a.extend({}, this.mvpdConfigDefault, rebi));
            }
        }, cooro;
    }(), ayom = bukon(23), iket = bukon(7), quique = function() {
        function nekuth() {}
        return nekuth.KEY_VISITOR_ID = "ap_vi", nekuth;
    }(), goja = bukon(14);
    bukon.d(gooco, "a", function() {
        return quefub;
    });
    var iltock = function(fagut, loodar, febot, ceethhoog) {
        var hosro, hece = arguments.length, rackpoy = hece < 3 ? loodar : null === ceethhoog ? ceethhoog = Object.getOwnPropertyDescriptor(loodar, febot) : ceethhoog;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) rackpoy = Reflect.decorate(fagut, loodar, febot, ceethhoog); else for (var chuku = fagut.length - 1; chuku >= 0; chuku--) (hosro = fagut[chuku]) && (rackpoy = (hece < 3 ? hosro(rackpoy) : hece > 3 ? hosro(loodar, febot, rackpoy) : hosro(loodar, febot)) || rackpoy);
        return hece > 3 && rackpoy && Object.defineProperty(loodar, febot, rackpoy), rackpoy;
    }, tipug = bukon(26), quonol = bukon(24), drifob = bukon(17), quefub = function() {
        function etug(meeme) {
            var buches = this;
            this.callbackManager = new rinkied(this), this.spHost = "sp.auth.adobe.com", this.methodInvokingAuthorization = null,
            this.cachedAuthorization = !1, this.cachedAuthentication = !0, this.authenticationInProgress = !1,
            this.pendingAuthorizationInProgress = !1, this.authorizationExtraParameters = null,
            this.authenticationExtraParameters = null, this.resourceID = null, this.redirectURL = null,
            this.pendingCallsQueue = [], this.backgroundLoginInProgress = null, this.configuration = null,
            this.retryDueToInvalidIndividualization = !0, this.softwareStatement = meeme;
            var tudscoud = new drifob(ayom.a.get(), null, !0);
            erus.a.info("Version: 4.1.1-fd6751b " + (this.isDebug(tudscoud) ? "DEBUG" : "RELEASE")),
            erus.a.setLevel(this.isDebug(tudscoud) ? 1 : 4), this.loadProxy(tudscoud), this.configureApassEndpoints(tudscoud),
            this.addGenericEvent("message", function(bite) {
                return buches.passiveAuthnHandler(bite);
            }), this.addGenericEvent("message", function(luto) {
                return buches.receiveMessage(luto);
            });
        }
        return etug.getInstance = function(dogi) {
            return this.instance || (this.instance = new etug(dogi)), this.instance;
        }, etug.prototype.completeBackgroundLogout = function() {
            erus.a.debug("completeBackgroundLogout"), this.callCallback("setAuthenticationStatus", 0, ""),
            this.callbackManager.onErrorHandler(coscud.a.N000);
        }, etug.prototype.doBackgroundLogout = function(lediek) {
            erus.a.debug("Performing background logout..."), this.callCallback("doBackgroundLogout", lediek);
        }, etug.prototype.ditchTokens = function() {
            this.storageManager.switchToSessionStorage(), this.storageManager.resetStorage(),
            this.storageManager.switchToLocalStorage(), this.storageManager.resetStorage(),
            bome.CACHE = null;
        }, etug.prototype.authnSuccess = function(pivi) {
            var osbun;
            if (nezi.a.checkPendingLogout(pivi)) this.ditchTokens(); else {
                this.configuration.resetAuthenticationProviderURL();
                var cowi = ebaf.a.getNodeText("authnToken", pivi);
                osbun = new ipes.a(cowi);
            }
            if (this.storageManager.setRegCode(null), osbun && osbun.isValid()) {
                erus.a.debug("Successfully retrieved authn token"), this.cachedAuthentication = !1;
                var saknuf = osbun.getMVPDID(), pebhim = this.mvpdManager.getMVPDByID(saknuf);
                this.mvpdManager.setCurrentMvpdID(saknuf), pebhim && !pebhim.tempPass && this.storageManager.setCanAuthenticate(!0),
                this.storageManager.setAuthenticationToken(osbun);
                var naha = ebaf.a.getNodeText("userMeta", pivi);
                this.storageManager.setUserMetadata(naha), bome.CACHE = null, this.backgroundLoginInProgress && this.backgroundLoginSuccessHelper(osbun, pebhim),
                this.configuration.initialized || this.configurationInitializedHelper();
            } else this.authnError(pivi, null, null, osbun);
        }, etug.prototype.authnError = function(fooru, ugas, reede, dipe) {
            var tajo = this;
            if (void 0 === dipe && (dipe = null), ugas === coscud.a.MISSING_REQUIRED_PREREQUISITES_ERROR_STATUS) return erus.a.warn("Authentication token retrieval failed due to missing required prerequisites!"),
            this.callbackManager.onErrorHandler(fooru), void this.completeAuthnError();
            if (400 === ugas && this.retryDueToInvalidIndividualization && ("34763" === coscud.a.getReasonFromErrorResponse(reede.responseText) || "34764" === coscud.a.getReasonFromErrorResponse(reede.responseText))) return erus.a.warn("Authentication token retrieval failed due to invalid individualization. Will retry the call!"),
            this.retryDueToInvalidIndividualization = !1, this.storageManager.clearDeviceId(),
            void this.service.retrieveAuthenticationToken(function(itask) {
                return tajo.authnSuccess(itask);
            }, function(josaf, bleme, duelo) {
                return tajo.authnError(josaf, bleme, duelo);
            });
            if (this.configuration.resetAuthenticationProviderURL(), 401 === ugas || 400 === ugas && "34763" === coscud.a.getReasonFromErrorResponse(reede.responseText) ? this.callbackManager.onErrorHandler(coscud.a.N130) : this.callbackManager.onErrorHandler(coscud.a.N000),
            dipe) {
                if (dipe.isExpired()) {
                    var ulkey = this.mvpdManager.getCurrentMvpdID();
                    if (ulkey) {
                        var itmeg = this.mvpdManager.getMVPDByID(ulkey);
                        itmeg && itmeg.tempPass && this.callbackManager.onErrorHandler(coscud.a.N111);
                    }
                }
            } else erus.a.error("Error retrieving authentication token:", fooru);
            this.completeAuthnError();
        }, etug.prototype.completeBackgroundLogin = function() {
            erus.a.debug("completeBackgroundLogin");
            var judes = this.mvpdManager.getCurrentMvpdID();
            if (judes) {
                var biro = this.mvpdManager.getMVPDByID(judes);
                biro && biro.iFrameRequired && (erus.a.debug("Calling destroyIFrame."), this.callCallback("destroyIFrame"));
            }
            this.configuration.retrieveAuthenticationToken();
        }, etug.prototype.callCallback = function(suekir) {
            for (var quele = this, gopra = [], feetep = 1; feetep < arguments.length; feetep++) gopra[feetep - 1] = arguments[feetep];
            setTimeout(function() {
                switch (erus.a.debug("Callback: " + suekir + "()"), suekir) {
                  case "reload":
                    location.reload();
                    break;

                  case "openIFrame":
                    createIFrame(gopra[1], gopra[2]);
                    var defi = gopra[0] + "&" + goja.a.param({
                        redirect_url: quele.getRedirectURL(gopra[3])
                    }), meeta = document.getElementsByName("mvpdframe");
                    meeta.length > 0 ? (erus.a.debug("iframe url: ", defi), meeta[0].setAttribute("src", defi)) : (erus.a.debug("popup url: ", defi),
                    quele.openLoginWindow(defi, "mvpdframe"));
                    break;

                  case "navigateToURL":
                    var drufal = gopra[0] + "&" + goja.a.param({
                        redirect_url: quele.getRedirectURL(gopra[1])
                    });
                    erus.a.debug("navigateToUrl:", drufal), gopra[2] ? quele.openLoginWindow(drufal, "mvpdwindow") : window.location.href = drufal;
                    break;

                  case "doBackgroundLogout":
                    quele.createHiddenIframe("com_adobe_pass_background_logout", gopra[0]);
                    break;

                  default:
                    var kafe = window.eval.call(window, suekir);
                    if (void 0 === kafe) return void erus.a.warn("Callback < " + suekir + " > is NOT implemented");
                    kafe.apply(window, gopra);
                }
            }, 4);
        }, etug.prototype.bind = function(sniti, sietize) {
            void 0 === sietize && (sietize = void 0), erus.a.debug("bind(" + sniti + ", " + sietize + ")"),
            this.callbackManager.bind(sniti, sietize);
        }, etug.prototype.unbind = function(uries, fomay) {
            void 0 === fomay && (fomay = void 0), this.callbackManager.unbind(uries, fomay);
        }, etug.prototype.getProxyMVPD = function() {
            var quimo = null, ipuln = this.storageManager.getAuthenticationToken();
            if (ipuln) {
                var sojuep = ipuln.getMVPDID(), tece = ipuln.getSubMVPDID();
                sojuep && tece && "" !== sojuep && "" !== tece && (quimo = sojuep);
            }
            this.callCallback("proxyMVPD", quimo);
        }, etug.prototype.setRequestor = function(booycuel) {
            var doupu = this;
            void 0 === booycuel && (booycuel = "");
            for (var daca = [], dage = 1; dage < arguments.length; dage++) daca[dage - 1] = arguments[dage];
            egey.a.isEmpty(dohi.b.error) || (this.callbackManager.onErrorHandler(dohi.b.error),
            dohi.b.error = null);
            var tufkay = null, ubey = {};
            tipug(daca, function(beelu) {
                Array.isArray(beelu) ? tufkay = beelu : ubey = beelu;
            }), ubey.callSetConfig = "function" == typeof setConfig, etug.clientInfo = new quehou(ubey);
            var guebo = etug.clientInfo.getVisitorID();
            egey.a.isEmpty(guebo) || (iket.a.globalData[quique.KEY_VISITOR_ID] = guebo), bome.CACHE = null,
            etug.requestorID = String(booycuel), erus.a.debug("processing setRequestor(" + etug.requestorID + "," + tufkay + ")"),
            this.service = new stoystish.a(frouho.a.serviceProviderURL, etug.requestorID), this.mvpdManager.clearRequestorMVPDs(),
            this.configuration = new frouho.a(etug.requestorID, null != etug.clientInfo && etug.clientInfo.callSetConfig(), function() {
                return doupu.onConfigurationInitialized();
            }), this.configuration.initialize(tufkay), this.retryDueToInvalidIndividualization = !0;
        }, etug.prototype.getSelectedProvider = function() {
            if (this.configuration && this.configuration.initialized) {
                erus.a.debug("Processing getSelectedProvider()");
                var boru = "New User", jeno = this.mvpdManager.getCurrentMvpdID();
                if (jeno) {
                    var duebraln = this.storageManager.getAuthenticationToken();
                    if (duebraln) {
                        var neehi = duebraln.getSubMVPDID();
                        neehi && "" !== neehi && (jeno = neehi), boru = duebraln.isValid() ? "User Authenticated" : "User Not Authenticated";
                    }
                }
                this.callCallback("selectedProvider", {
                    MVPD: jeno,
                    AE_State: boru
                });
            } else erus.a.debug("put getSelectedProvider() in call queue"), this.pendingCallsQueue.push(new sreefa(this, this.getSelectedProvider));
        }, etug.prototype.setSelectedProvider = function(tubal) {
            this.configuration && this.configuration.initialized ? (erus.a.debug("Processing setSelectedProvider()", tubal),
            tubal && tubal.length > 0 ? this.authenticationInProgress ? (this.mvpdManager.setCurrentMvpdID(tubal),
            this.service = new stoystish.a(this.mvpdManager.getCurrentSP(), etug.requestorID),
            this.sendTrackingData(enuln.a.TRACK_MVPD_SELECTION), this.isRedirectedToMvpdLoginPage() || (this.callbackManager.onErrorHandler(coscud.a.N500),
            this.callCallback("setAuthenticationStatus", 0, enuln.a.GENERIC_AUTHENTICATION_ERROR))) : String(tubal) === this.mvpdManager.getCurrentMvpdID() ? this.callCallback("setAuthenticationStatus", 1, enuln.a.PROVIDER_ALREADY_AUTHENTICATED) : (this.callbackManager.onErrorHandler(coscud.a.N500),
            this.callCallback("setAuthenticationStatus", 0, enuln.a.GENERIC_AUTHENTICATION_ERROR)) : (this.mvpdManager.setCurrentMvpdID(null),
            this.authenticationInProgress = !1, this.backgroundLoginInProgress = !1, this.pendingAuthorizationInProgress && this.completeAuthorizationInternalFlow(),
            this.callbackManager.onErrorHandler(coscud.a.N005), this.callCallback("setAuthenticationStatus", 0, enuln.a.PROVIDER_NOT_SELECTED_ERROR),
            this.sendTrackingData(enuln.a.TRACK_AUTHENTICATION_DETECTION, !1))) : (erus.a.debug("put setSelectedProvider() in call queue"),
            this.pendingCallsQueue.push(new sreefa(this, this.setSelectedProvider, tubal)));
        }, etug.prototype.getAuthorization = function(luqua, gaki, keeson) {
            void 0 === gaki && (gaki = void 0), void 0 === keeson && (keeson = void 0), this.configuration && this.configuration.initialized ? (this.resourceID = luqua,
            this.authorizationExtraParameters = keeson, this.methodInvokingAuthorization = "getAuthorization",
            this.getAuthenticationInternalStatusMessages() === enuln.a.USER_AUTHENTICATED ? this.startAuthorizationInternalFlow(this.resourceID, this.authorizationExtraParameters) : (this.pendingAuthorizationInProgress = !0,
            this.getAuthentication([ gaki, this.authorizationExtraParameters ]))) : (erus.a.debug("put getAuthorization() in call queue"),
            this.pendingCallsQueue.push(new sreefa(this, this.getAuthorization, luqua, gaki, keeson)));
        }, etug.prototype.checkAuthorization = function(kihou, lique) {
            void 0 === lique && (lique = void 0), this.configuration && this.configuration.initialized ? (this.resourceID = kihou,
            this.authorizationExtraParameters = lique, this.methodInvokingAuthorization = "checkAuthorization",
            this.getAuthenticationInternalStatusMessages() === enuln.a.USER_AUTHENTICATED ? this.startAuthorizationInternalFlow(this.resourceID, this.authorizationExtraParameters) : this.onAuthorizationError(null, null, {
                code: enuln.a.USER_NOT_AUTHENTICATED_ERROR,
                message: "",
                resourceID: kihou
            })) : (erus.a.debug("put checkAuthorization() in call queue"), this.pendingCallsQueue.push(new sreefa(this, this.checkAuthorization, kihou, lique)));
        }, etug.prototype.getAuthentication = function(ugan, hamif) {
            void 0 === ugan && (ugan = void 0), void 0 === hamif && (hamif = void 0), this.configuration && this.configuration.initialized ? (erus.a.debug("Processing getAuthentication()!"),
            ugan && (this.redirectURL = ugan), hamif && (this.authenticationExtraParameters = hamif),
            this.getAuthenticationInternalStatusMessages() === enuln.a.USER_AUTHENTICATED ? (this.callCallback("setAuthenticationStatus", 1, ""),
            this.sendTrackingData(enuln.a.TRACK_AUTHENTICATION_DETECTION, !0)) : this.startAuthenticationInternalFlow()) : (erus.a.debug("put getAuthentication() in call queue"),
            this.pendingCallsQueue.push(new sreefa(this, this.getAuthentication, ugan, hamif)));
        }, etug.prototype.checkAuthentication = function() {
            if (this.configuration && this.configuration.initialized) {
                var frohey;
                erus.a.debug("Processing checkAuthentication()!");
                var lifi = this.getAuthenticationInternalStatusMessages();
                if (lifi === enuln.a.USER_AUTHENTICATED) frohey = 1, lifi = "", this.mvpdManager.getMVPDByID(this.storageManager.getMvpdID()).tempPass && this.callbackManager.onErrorHandler(coscud.a.N011),
                this.storageManager.getAuthenticationToken().isAuthNAll() && this.callbackManager.onErrorHandler(coscud.a.N010),
                this.sendTrackingData(enuln.a.TRACK_AUTHENTICATION_DETECTION, !0); else frohey = 0,
                this.sendTrackingData(enuln.a.TRACK_AUTHENTICATION_DETECTION, !1), this.callbackManager.onErrorHandler(lifi === enuln.a.USER_NOT_AUTHENTICATED_ERROR ? coscud.a.N000 : coscud.a.N500);
                this.callCallback("setAuthenticationStatus", frohey, lifi);
            } else erus.a.debug("put checkAuthentication() in call queue"), this.pendingCallsQueue.push(new sreefa(this, this.checkAuthentication));
        }, etug.prototype.getMetadata = function(tisay, hetit) {
            void 0 === hetit && (hetit = []), this.configuration && this.configuration.initialized ? this.storageManager.getAuthenticationToken() ? bome.getValue(tisay, hetit) : this.callCallback("setMetadataStatus", tisay, null, null) : (erus.a.debug("put getMetadata() in call queue"),
            this.pendingCallsQueue.push(new sreefa(this, this.getMetadata, tisay, hetit)));
        }, etug.prototype.checkPreauthorizedResources = function(krufa, quekud) {
            var likfieb = this;
            if (void 0 === krufa && (krufa = []), void 0 === quekud && (quekud = !0), this.configuration && this.configuration.initialized) {
                var pedee = this.storageManager.getAuthenticationToken();
                if (pedee && pedee.isValid()) {
                    var dapa = pedee.getAuthorizedResources();
                    if (dapa && dapa.length > 0) {
                        for (var tuda = new Array(), hiru = 0, fluevi = dapa.length; hiru < fluevi; hiru++) tuda.push(dapa[hiru].getAuthorizedResourceID().toUpperCase());
                        var lura = this.intersectPreflight(krufa, tuda);
                        this.callCallback("preauthorizedResources", lura);
                    } else if (quekud && this.requestedResourcesEqualsPreauthorizationCache(krufa)) this.callCallback("preauthorizedResources", this.getAuthorizedResourcesFromPreauthorizationCache()); else {
                        var quoke = function(swemo, mesap) {
                            mesap === coscud.a.MISSING_REQUIRED_PREREQUISITES_ERROR_STATUS ? (erus.a.warn("/preauthorize call was not made - returning empty preauthorizedResources array"),
                            likfieb.callCallback("preauthorizedResources", []), likfieb.callbackManager.onErrorHandler(swemo)) : (erus.a.warn("/preauthorize call failed - returning empty preauthorizedResources array"),
                            likfieb.callCallback("preauthorizedResources", []), likfieb.callbackManager.onErrorHandler(coscud.a.P100));
                        };
                        this.service.checkPreauthorizedResources(krufa, function(atil, queno) {
                            if (200 === queno) {
                                var nosi = [], kobek = [];
                                if (atil) {
                                    var gano = ebaf.a.getNodes("resource", atil);
                                    tipug(gano, function(bludo) {
                                        var hopu = {
                                            id: ebaf.a.getNodeText("id", bludo),
                                            authorized: "true" === ebaf.a.getNodeText("authorized", bludo).toLowerCase()
                                        };
                                        nosi.push(hopu), hopu.authorized && kobek.push(hopu.id);
                                    });
                                }
                                likfieb.storageManager.setPreauthorizationCache(nosi), likfieb.callCallback("preauthorizedResources", kobek);
                            } else quoke(atil, queno);
                        }, quoke);
                    }
                }
            } else erus.a.debug("put checkPreauthorizedResources() in call queue"), this.pendingCallsQueue.push(new sreefa(this, this.checkPreauthorizedResources, krufa, quekud));
        }, etug.prototype.logout = function() {
            if (this.configuration && this.configuration.initialized) {
                erus.a.debug("Processing logout()!"), this.authenticationInProgress = !1;
                var kequi = this.storageManager.getAuthenticationToken();
                this.configuration.isValidRequestor() && this.ditchTokens(), this.service.logout(kequi);
            } else erus.a.debug("put logout() in call queue"), this.pendingCallsQueue.push(new sreefa(this, this.logout));
        }, etug.prototype.getStorageData = function() {
            this.callCallback("storageData", this.storageManager.getStorageData());
        }, etug.prototype.sendTrackingData = function(juli, klookosk, silnquich, ayoud) {
            void 0 === klookosk && (klookosk = !1), void 0 === silnquich && (silnquich = null),
            void 0 === ayoud && (ayoud = null);
            var sico = null, fefli = this.mvpdManager.getCurrentMvpdID(), riquo = null, sijud = this.storageManager.getAuthenticationToken();
            switch (sijud && sijud.getSubMVPDID() && (riquo = fefli, fefli = sijud.getSubMVPDID()),
            juli) {
              case enuln.a.TRACK_MVPD_SELECTION:
                sico = [ this.mvpdManager.getCurrentMvpdID(), etug.deviceInfo.deviceType, etug.deviceInfo.clientType, etug.deviceInfo.os ];
                break;

              case enuln.a.TRACK_AUTHENTICATION_DETECTION:
                klookosk ? (sico = [ !0, fefli, quonol(sijud.getProperty("simpleTokenAuthenticationGuid")), this.cachedAuthentication, etug.deviceInfo.deviceType, etug.deviceInfo.clientType, etug.deviceInfo.os, riquo ],
                this.cachedAuthentication = !0) : sico = [ !1, null, null, null, etug.deviceInfo.deviceType, etug.deviceInfo.clientType, etug.deviceInfo.os, null ];
                break;

              case enuln.a.TRACK_AUTHORIZATION_DETECTION:
                sico = klookosk ? [ !0, fefli, quonol(sijud.getProperty("simpleTokenAuthenticationGuid")), this.cachedAuthorization, silnquich, ayoud, etug.deviceInfo.deviceType, etug.deviceInfo.clientType, etug.deviceInfo.os, riquo ] : [ !1, fefli, sijud ? quonol(sijud.getProperty("simpleTokenAuthenticationGuid")) : null, this.cachedAuthorization, silnquich, ayoud, etug.deviceInfo.deviceType, etug.deviceInfo.clientType, etug.deviceInfo.os, riquo ];
            }
            this.callCallback("sendTrackingData", juli, sico);
        }, etug.prototype.getService = function() {
            return this.service;
        }, etug.prototype.getSoftwareStatement = function() {
            return this.softwareStatement;
        }, etug.prototype.intersectPreflight = function(osfir, quori) {
            var ipbey = [];
            if (osfir && quori) for (var tuta = 0, soco = osfir; tuta < soco.length; tuta++) {
                var reeque = soco[tuta];
                quori.indexOf(reeque.toUpperCase()) >= 0 && ipbey.push(reeque);
            }
            return ipbey;
        }, etug.prototype.getAuthorizedResourcesFromPreauthorizationCache = function() {
            for (var atlog = this.storageManager.getPreauthorizationCache(), quefo = new Array(), foyer = 0, fulo = atlog.length; foyer < fulo; foyer++) !0 === atlog[foyer].authorized && quefo.push(atlog[foyer].id);
            return quefo;
        }, etug.prototype.requestedResourcesEqualsPreauthorizationCache = function(fuplu) {
            var husom = this.storageManager.getPreauthorizationCache();
            if (husom.length !== fuplu.length) return !1;
            for (var jati = 0, niefoo = fuplu; jati < niefoo.length; jati++) {
                var ilis = niefoo[jati];
                if (-1 === egey.b.inArray(ilis, husom)) return !1;
            }
            return !0;
        }, etug.prototype.getAuthenticationInternalStatusMessages = function() {
            var rago = this.storageManager.getAuthenticationToken();
            return rago && rago.isValid() ? this.mvpdManager.isValidMVPD(rago.getMVPDID()) ? enuln.a.USER_AUTHENTICATED : enuln.a.GENERIC_AUTHENTICATION_ERROR : this.configuration.isValidRequestor() ? enuln.a.USER_NOT_AUTHENTICATED_ERROR : enuln.a.GENERIC_AUTHENTICATION_ERROR;
        }, etug.prototype.isRedirectedToMvpdLoginPage = function() {
            var beyoom = !1;
            if (this.authenticationInProgress) {
                var woso = this.mvpdManager.getCurrentMvpdID();
                if (woso) {
                    var sitol = this.mvpdManager.getMVPDByID(woso);
                    sitol && (this.backgroundLoginInProgress = etug.clientInfo && etug.clientInfo.isBackgroundLogin(),
                    this.service.goToLoginPage(sitol, this.redirectURL, this.authenticationExtraParameters),
                    beyoom = !0);
                }
            }
            return beyoom;
        }, etug.prototype.backgroundLoginSuccessHelper = function(delid, gubo) {
            this.backgroundLoginInProgress = !1, delid && delid.isAuthNAll() && this.callbackManager.onErrorHandler(coscud.a.N010),
            gubo && gubo.tempPass && this.callbackManager.onErrorHandler(coscud.a.N011), this.pendingAuthorizationInProgress ? null !== this.resourceID ? (erus.a.debug("Performing authorization for pending resource: " + this.resourceID + " and extra parameters: " + this.authorizationExtraParameters),
            this.getAuthorization(this.resourceID, null, this.authorizationExtraParameters)) : (this.callbackManager.onErrorHandler(coscud.a.Z100),
            this.callCallback("tokenRequestFailed", this.resourceID, enuln.a.GENERIC_AUTHORIZATION_ERROR, ""),
            this.sendTrackingData(enuln.a.TRACK_AUTHORIZATION_DETECTION, !1, enuln.a.GENERIC_AUTHORIZATION_ERROR, ""),
            this.completeAuthorizationInternalFlow()) : (this.callCallback("setAuthenticationStatus", "1", ""),
            this.sendTrackingData(enuln.a.TRACK_AUTHENTICATION_DETECTION, !0));
        }, etug.prototype.completeAuthorizationInternalFlow = function() {
            this.pendingAuthorizationInProgress = !1, this.methodInvokingAuthorization = null,
            this.authorizationExtraParameters = null, this.resourceID = null;
        }, etug.prototype.onAuthorizationComplete = function(kudun, crayo, slupar) {
            var toho = this;
            if (nezi.a.checkPendingLogout(kudun)) return this.ditchTokens(), "34764" === nezi.a.getPendingLogoutReason(kudun) && (erus.a.warn("Device id mismatch!"),
            this.callbackManager.onErrorHandler(coscud.a.SEC412), this.storageManager.clearDeviceId()),
            void ("getAuthorization" === this.methodInvokingAuthorization ? this.getAuthorization(this.resourceID) : this.checkAuthorization(this.resourceID));
            try {
                kudun = egey.c.parseXML(kudun);
            } catch (toho) {
                return erus.a.warn("Authorization failed"), void this.onAuthorizationError(kudun, crayo, slupar);
            }
            var srotru = ebaf.a.getNodeText("authzToken", kudun);
            if (!srotru) return erus.a.warn("Authorization failed"), void this.onAuthorizationError(kudun, crayo, slupar);
            var lueho = new ipes.a(srotru);
            if (lueho && lueho.isValid()) {
                erus.a.debug("Successfully retrieved authorization token!"), this.storageManager.setAuthorizationToken(lueho);
                var katue = ebaf.a.getNodeText("userMeta", kudun);
                katue && (erus.a.debug("Merging user metadata tokens."), this.storageManager.mergeUserMetadata(katue),
                bome.CACHE = null), this.service.retrieveMediaToken(lueho, JSON.stringify({}), function(pelnum, miphe, pura) {
                    return toho.onMediaTokenComplete(pelnum, miphe, pura);
                }, function(enkken, oset, pacie) {
                    return toho.onMediaTokenError(enkken, oset, pacie);
                });
            } else this.onAuthorizationError(kudun, crayo, slupar);
        }, etug.prototype.onMediaTokenComplete = function(nigiesh, noso, chales) {
            var quotoy = new ipes.a(nigiesh).getResourceID();
            if (nezi.a.checkPendingLogout(nigiesh)) this.ditchTokens(), "58772" === nezi.a.getPendingLogoutReason(nigiesh) && (erus.a.warn("Device id mismatch!"),
            this.callbackManager.onErrorHandler(coscud.a.SEC412), this.storageManager.clearDeviceId()),
            "getAuthorization" === this.methodInvokingAuthorization ? this.getAuthorization(quotoy) : this.checkAuthorization(quotoy); else {
                erus.a.debug("Successfully retrieved media token!"), this.callCallback("setToken", quotoy, nigiesh),
                this.sendTrackingData(enuln.a.TRACK_AUTHORIZATION_DETECTION, !0);
                var faney = this.storageManager.getAuthorizationToken(etug.requestorID, quotoy);
                faney && faney.isAuthZAll() && this.callbackManager.onErrorHandler(coscud.a.Z010(quotoy));
                var tastil = this.mvpdManager.getCurrentMvpd();
                tastil && tastil.tempPass && this.callbackManager.onErrorHandler(coscud.a.Z011(quotoy)),
                this.completeAuthorizationInternalFlow();
            }
        }, etug.prototype.onAuthorizationError = function(dique, pitree, deje) {
            var sufi = deje.resourceID;
            if (pitree === coscud.a.MISSING_REQUIRED_PREREQUISITES_ERROR_STATUS) erus.a.warn("Authorization token retrieval failed due to missing required prerequisites!"),
            this.callbackManager.onErrorHandler(dique), this.callCallback("tokenRequestFailed", sufi, enuln.a.GENERIC_AUTHORIZATION_ERROR, ""),
            this.sendTrackingData(enuln.a.TRACK_AUTHORIZATION_DETECTION, !1, enuln.a.GENERIC_AUTHORIZATION_ERROR, ""),
            this.completeAuthorizationInternalFlow(); else if (400 === pitree && "34763" === coscud.a.getReasonFromErrorResponse(deje.responseText)) this.storageManager.clearDeviceId(),
            this.retryDueToInvalidIndividualization ? (erus.a.warn("Authorization token retrieval failed due to invalid individualization. Will retry the call!"),
            this.retryDueToInvalidIndividualization = !1, this.startAuthorizationInternalFlow(sufi, this.authorizationExtraParameters)) : (this.callbackManager.onErrorHandler(coscud.a.N130),
            this.completeAuthorizationInternalFlow()); else {
                var ilned = this.parseErrorResponse(deje);
                this.callbackManager.onErrorHandler(coscud.a.fromAuthzErrorResponse(deje, sufi)),
                this.callCallback("tokenRequestFailed", sufi, ilned.code, ilned.message), this.sendTrackingData(enuln.a.TRACK_AUTHORIZATION_DETECTION, !1, ilned.code, ilned.message),
                this.completeAuthorizationInternalFlow();
            }
        }, etug.prototype.onMediaTokenError = function(doqua, lucay, quoda) {
            if (lucay === coscud.a.MISSING_REQUIRED_PREREQUISITES_ERROR_STATUS) erus.a.warn("Media token retrieval failed due to missing required prerequisites!"),
            this.callbackManager.onErrorHandler(doqua), this.callCallback("tokenRequestFailed", this.resourceID, enuln.a.GENERIC_AUTHORIZATION_ERROR, ""),
            this.sendTrackingData(enuln.a.TRACK_AUTHORIZATION_DETECTION, !1, enuln.a.GENERIC_AUTHORIZATION_ERROR, ""),
            this.completeAuthorizationInternalFlow(); else if (400 === lucay && "34763" === coscud.a.getReasonFromErrorResponse(quoda.responseText)) this.storageManager.clearDeviceId(),
            this.retryDueToInvalidIndividualization ? (erus.a.warn("Media token retrieval failed due to invalid individualization. Will retry the call!"),
            this.retryDueToInvalidIndividualization = !1, this.startAuthorizationInternalFlow(this.resourceID, this.authorizationExtraParameters)) : (this.callbackManager.onErrorHandler(coscud.a.N130),
            this.completeAuthorizationInternalFlow()); else {
                var disuf = this.parseErrorResponse(quoda);
                this.callCallback("tokenRequestFailed", this.resourceID, enuln.a.USER_NOT_AUTHORIZED_ERROR, disuf.message),
                this.sendTrackingData(enuln.a.TRACK_AUTHORIZATION_DETECTION, !1, enuln.a.USER_NOT_AUTHORIZED_ERROR, disuf.message),
                this.completeAuthorizationInternalFlow();
            }
        }, etug.prototype.startAuthorizationInternalFlow = function(fasa, joploo) {
            var doje = this, fuped = this.storageManager.getAuthorizationToken(etug.requestorID, fasa);
            fuped && fuped.isValid() ? (erus.a.debug("Authorization token found and valid!"),
            this.cachedAuthorization = !0, this.service.retrieveMediaToken(fuped, JSON.stringify({}), function(bisne, quehub, beglu) {
                return doje.onMediaTokenComplete(bisne, quehub, beglu);
            }, function(quopes, jeper, kaki) {
                return doje.onMediaTokenError(quopes, jeper, kaki);
            })) : (erus.a.debug("Authorization token not found or invalid!"), this.cachedAuthorization = !1,
            this.service.retrieveAuthorizationToken(Array.isArray(fasa) ? fasa[0] : fasa, joploo, function(sike, enek, mieki) {
                return doje.onAuthorizationComplete(sike, enek, mieki);
            }, function(ibot, teho, pifo) {
                return doje.onAuthorizationError(ibot, teho, pifo);
            }));
        }, etug.prototype.completeAuthnError = function() {
            this.backgroundLoginInProgress && this.backgroundLoginFailHelper(), this.configuration.initialized || this.configurationInitializedHelper(),
            this.storageManager.setRegCode(null);
        }, etug.prototype.backgroundLoginFailHelper = function() {
            this.backgroundLoginInProgress = !1, this.pendingAuthorizationInProgress ? (this.callCallback("tokenRequestFailed", this.resourceID, enuln.a.GENERIC_AUTHORIZATION_ERROR, ""),
            this.sendTrackingData(enuln.a.TRACK_AUTHORIZATION_DETECTION, !1, enuln.a.GENERIC_AUTHORIZATION_ERROR, ""),
            this.completeAuthorizationInternalFlow()) : (this.callCallback("setAuthenticationStatus", "0", enuln.a.USER_NOT_AUTHENTICATED_ERROR),
            this.sendTrackingData(enuln.a.TRACK_AUTHENTICATION_DETECTION, !1));
        }, etug.prototype.mustRetrieveAuthenticationPerRequestorForMvpd = function(raki) {
            return raki && raki.authPerAggregator && raki.passiveAuthnEnabled && null === this.storageManager.getAuthenticationToken() && this.storageManager.searchForFirstValidAuthenticationTokenForCurrentMvpd();
        }, etug.prototype.onConfigurationInitialized = function() {
            var dojo = this.mvpdManager.getCurrentSP();
            egey.a.isEmpty(dojo) || (this.service = new stoystish.a(dojo, etug.requestorID));
            var java = this.mvpdManager.getCurrentMvpdID(), luepa = this.mvpdManager.getMVPDByID(java);
            this.mvpdManager.switchToCurrentMvpdStorageType(java), this.mustRetrieveAuthenticationPerRequestorForMvpd(luepa) ? (erus.a.debug("Attempt to retrieve authn per requestor token."),
            this.doPassiveAuthentication(), this.callbackManager.onErrorHandler(coscud.a.N001)) : this.configurationInitializedHelper();
        }, etug.prototype.configurationInitializedHelper = function() {
            this.removeGenericEvent("configInit", this.onConfigurationInitialized);
            var jigoo = this.mvpdManager.getCurrentSP();
            if (egey.a.isEmpty(jigoo) || (this.service = new stoystish.a(jigoo, etug.requestorID)),
            this.configuration.initialized = !0, etug.clientInfo && etug.clientInfo.callSetConfig()) {
                var askuem = this.configuration.getConfigForProgrammer();
                askuem || (askuem = ""), this.callCallback("setConfig", askuem);
            }
            for (var hacu = 0, nepo = this.pendingCallsQueue; hacu < nepo.length; hacu++) {
                var lihay = nepo[hacu];
                erus.a.debug("Executing pending call: "), lihay.execute();
            }
            this.pendingCallsQueue.length = 0;
        }, etug.prototype.startAuthenticationInternalFlow = function() {
            this.authenticationInProgress = !0;
            var hirig = !1;
            if (this.storageManager.getCanAuthenticate() && (this.storageManager.setCanAuthenticate(!1),
            hirig = this.isRedirectedToMvpdLoginPage()), !hirig) {
                this.storageManager.setCanAuthenticate(!1);
                var cuglo = [], egur = this.mvpdManager.getRequestorMVPDs();
                for (var taho in egur) if (egur.hasOwnProperty(taho)) {
                    var dute = egur[taho];
                    cuglo.push({
                        ID: dute.id,
                        displayName: dute.displayName,
                        logoURL: dute.logoUrl
                    });
                }
                cuglo.length > 0 ? this.callCallback("displayProviderDialog", cuglo) : (this.callbackManager.onErrorHandler(coscud.a.N500),
                this.callCallback("setAuthenticationStatus", 0, enuln.a.GENERIC_AUTHENTICATION_ERROR));
            }
        }, etug.prototype.doPassiveAuthentication = function() {
            var deeju = this;
            erus.a.debug("Performing passive authentication...");
            var tufrou = this.mvpdManager.getCurrentMvpdID(), chama = this.mvpdManager.getMVPDByID(tufrou);
            this.service.getLoginPageUrl(!0, chama, this.authenticationExtraParameters, !1).then(function(paque) {
                deeju.backgroundLoginInProgress = etug.clientInfo && etug.clientInfo.isBackgroundLogin(),
                egey.b.createHiddenIframe("com_adobe_pass_passive_authn", paque);
            });
        }, etug.prototype.completePassiveAuthentication = function() {
            var quicou = this;
            erus.a.debug("completePassiveAuthentication"), this.service.retrieveAuthenticationToken(function(jiro) {
                return quicou.authnSuccess(jiro);
            }, function(mago, home, sihe) {
                return quicou.authnError(mago, home, sihe);
            });
        }, etug.prototype.configureApassEndpoints = function(cluerub) {
            cluerub && cluerub.host && cluerub.host.match(/(.*)-staging.(.*)/) && (this.spHost = "sp.auth-staging.adobe.com"),
            frouho.a.serviceProviderURL = "https://" + this.spHost + "/adobe-services", erus.a.info("Running against: " + this.spHost);
        }, etug.prototype.addGenericEvent = function(jubir, lofe) {
            window.addEventListener ? window.addEventListener(jubir, lofe, !1) : window.attachEvent("on" + jubir, lofe);
        }, etug.prototype.removeGenericEvent = function(fahu, ribon) {
            window.removeEventListener ? window.removeEventListener(fahu, ribon, !1) : window.detachEvent("on" + fahu, ribon);
        }, etug.prototype.passiveAuthnHandler = function(heha) {
            heha && "PASSIVE_AUTHN_COMPLETE" === heha.data && this.completePassiveAuthentication();
        }, etug.prototype.isDebug = function(scakeln) {
            return -1 !== document.cookie.indexOf("debug") || scakeln && scakeln.hasOwnProperty("query") && scakeln.query.hasOwnProperty("debug");
        }, etug.prototype.getRedirectURL = function(bonif) {
            return bonif && "null" !== bonif && bonif.length > 4 ? bonif : window.location.href;
        }, etug.prototype.createHiddenIframe = function(peene, struka) {
            var cisa = document.querySelector("iframe[name=" + peene + "]");
            if (cisa) cisa.setAttribute("src", struka); else {
                var imuf = document.createElement("iframe");
                imuf.setAttribute("name", peene), imuf.setAttribute("src", struka), imuf.setAttribute("style", "display:none"),
                document.body.appendChild(imuf);
            }
        }, etug.prototype.receiveMessage = function(tohak) {
            var kume = this;
            if (!tohak.origin || /auth.*\.adobe\.com/.test(tohak.origin)) {
                var oyuem = {
                    PROXY_LOADED: function() {
                        return kume.completeInitialization();
                    },
                    LOGIN_COMPLETE: this.completeBackgroundLogin,
                    LOGOUT_COMPLETE: this.completeBackgroundLogout
                }[tohak.data];
                oyuem && oyuem.call(this);
            } else erus.a.trace("Ignoring postmessage from origin " + tohak.origin);
        }, etug.prototype.completeInitialization = function() {
            var beque = this;
            this.mvpdManager = olob.a.getInstance(), this.storageManager = dohi.b.getInstance(),
            this.storageManager.syncStorage().then(function() {
                erus.a.debug("Initial storage sync complete!"), beque.callCallback("entitlementLoaded");
            });
        }, etug.prototype.loadProxy = function(deget) {
            var chotu = this.determineProxyHost(deget);
            erus.a.info("Loading proxy from: " + chotu);
            var datir = deget.pathname.replace("AccessEnabler.js", "");
            iket.a.globalOptions.proxyURL = "https://" + chotu + datir + "AccessEnablerProxy.html";
            var loque = iket.a.globalOptions.proxyURL + "?" + bukon.h;
            this.isDebug(deget) && (loque += "&debug"), loque += "#" + encodeURIComponent(document.location.href),
            window.accessEnablerProxy = document.createElement("iframe"), accessEnablerProxy.setAttribute("name", "adobeIFrame"),
            accessEnablerProxy.setAttribute("id", "adobeIFrame"), accessEnablerProxy.setAttribute("style", "display:none"),
            accessEnablerProxy.setAttribute("src", loque), ebaf.a.appendChild(accessEnablerProxy);
        }, etug.prototype.determineProxyHost = function(muce) {
            if (muce) switch (muce.hostname) {
              case "test.auth.adobe.com":
                return erus.a.info("Environment: PRODUCTION"), "sp.auth.adobe.com";

              case "entitlement.auth-staging.adobe.com":
                return erus.a.info("Environment: STAGING"), "sp.auth-staging.adobe.com";

              default:
                return erus.a.info("Environment: CUSTOM"), muce.host;
            }
        }, etug.prototype.parseErrorResponse = function(bahenk) {
            var fy, mita;
            return "code" in bahenk && "message" in bahenk ? (erus.a.warn("Received a non xhr object!"),
            fy = bahenk) : 400 === bahenk.status ? (dohi.b.getInstance().clearStorage(), fy = {
                code: enuln.a.GENERIC_AUTHORIZATION_ERROR,
                message: bahenk.statusText
            }) : bahenk.responseText ? ((mita = bahenk.responseText.split("details")[1]) && mita.length > 2 && (mita = mita.substring(1, mita.length - 2)),
            fy = {
                code: enuln.a.USER_NOT_AUTHORIZED_ERROR,
                message: mita
            }) : fy = {
                code: enuln.a.GENERIC_AUTHORIZATION_ERROR,
                message: ""
            }, fy;
        }, etug.prototype.openLoginWindow = function(egap, quece) {
            var kieci = this;
            setTimeout(function() {
                var lapu = window.open(egap, quece);
                if (egey.b.isIE()) {
                    erus.a.warn("Internet Explorer 11 or older detected: using a timer to handle login completion...");
                    var neti = setInterval(function() {
                        lapu.closed && (erus.a.debug("Login window closed"), clearInterval(neti), kieci.completeBackgroundLogin());
                    }, 200);
                }
            }, 150);
        }, etug.clientInfo = null, etug.deviceInfo = {
            deviceType: "",
            clientType: "",
            os: ""
        }, etug.requestorID = null, iltock([ jega ], etug.prototype, "completeBackgroundLogout", null),
        iltock([ jega ], etug.prototype, "doBackgroundLogout", null), iltock([ jega ], etug.prototype, "ditchTokens", null),
        iltock([ jega ], etug.prototype, "authnSuccess", null), iltock([ jega ], etug.prototype, "authnError", null),
        iltock([ jega ], etug.prototype, "completeBackgroundLogin", null), iltock([ jega ], etug.prototype, "callCallback", null),
        iltock([ jega ], etug.prototype, "bind", null), iltock([ jega ], etug.prototype, "unbind", null),
        iltock([ jega ], etug.prototype, "getProxyMVPD", null), iltock([ jega ], etug.prototype, "setRequestor", null),
        iltock([ jega ], etug.prototype, "getSelectedProvider", null), iltock([ jega ], etug.prototype, "setSelectedProvider", null),
        iltock([ jega ], etug.prototype, "getAuthorization", null), iltock([ jega ], etug.prototype, "checkAuthorization", null),
        iltock([ jega ], etug.prototype, "getAuthentication", null), iltock([ jega ], etug.prototype, "checkAuthentication", null),
        iltock([ jega ], etug.prototype, "getMetadata", null), iltock([ jega ], etug.prototype, "checkPreauthorizedResources", null),
        iltock([ jega ], etug.prototype, "logout", null), iltock([ jega ], etug.prototype, "getStorageData", null),
        etug;
    }();
}, function(creri, bezo, boco) {
    "use strict";
    boco.d(bezo, "c", function() {
        return sumig;
    }), boco.d(bezo, "a", function() {
        return areb;
    }), boco.d(bezo, "b", function() {
        return wohi;
    });
    var sumig = function() {
        function keque() {}
        return keque.parseXML = function(swore) {
            return swore && "string" == typeof swore ? new DOMParser().parseFromString(swore, "text/xml") : null;
        }, keque;
    }(), areb = function() {
        function kafu() {}
        return kafu.extend = function() {
            for (var tezbrof = [], cigob = 0; cigob < arguments.length; cigob++) tezbrof[cigob] = arguments[cigob];
            for (var cride = 1; cride < tezbrof.length; cride++) for (var quomod in tezbrof[cride]) tezbrof[cride].hasOwnProperty(quomod) && (tezbrof[0][quomod] = tezbrof[cride][quomod]);
            return tezbrof[0];
        }, kafu.isEmpty = function(alas) {
            if (!alas || kafu.isUndefined(alas) || null === alas) return !0;
            if (alas.length) return !alas.length;
            if (alas.size) return !alas.size;
            for (var imurn in alas) if (alas.hasOwnProperty(imurn)) return !1;
            return !0;
        }, kafu.isUndefined = function(duje) {
            return void 0 === duje;
        }, kafu;
    }(), wohi = function() {
        function fohi() {}
        return fohi.inArray = function(butri, lidi) {
            if (lidi.indexOf) return lidi.indexOf(butri);
            for (var hiqui in lidi) if (lidi[hiqui] === butri) return hiqui;
            return -1;
        }, fohi.createHiddenIframe = function(ebuem, depe) {
            var jege, jagof = document.getElementsByTagName("iframe");
            if (jagof.length > 0) for (var starid = 0; starid < jagof.length; starid++) if (jagof[starid].getAttribute("name") === ebuem) {
                jege = jagof[starid];
                break;
            }
            jege || ((jege = document.createElement("iframe")).setAttribute("name", ebuem),
            jege.setAttribute("id", ebuem), jege.setAttribute("style", "display:none"), document.body.appendChild(jege)),
            jege.setAttribute("src", depe);
        }, fohi.convertServerDateToISO8601DateFormat = function(drosar) {
            var beso = drosar.split(" "), kisap = beso[0], quatgar = beso[1], desin = beso[3];
            kisap = kisap.split("/").join("-");
            var ofuch = desin.length - 2;
            return kisap + "T" + quatgar + (desin = desin.substr(0, ofuch) + ":" + desin.substr(ofuch));
        }, fohi.isIE = function() {
            var dilo = navigator.userAgent.toLowerCase().match(/(msie) ([\w.]+)/), febon = !(!navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/MSIE/));
            return dilo || febon;
        }, fohi;
    }();
}, function(meke, hankey, jepi) {
    "use strict";
    jepi.d(hankey, "a", function() {
        return ogey;
    });
    var ogey = function() {
        function fastim() {}
        return fastim.getNodeText = function(negu, umes) {
            return this._getNode(negu, umes, "textContent");
        }, fastim.getNode = function(sadrel, simif) {
            return this._getNode(sadrel, simif);
        }, fastim.getNodes = function(suefu, roogub) {
            return this._getNode(suefu, roogub, void 0, !0);
        }, fastim.appendChild = function(nila) {
            "interactive" === document.readyState || "complete" === document.readyState ? document.body.appendChild(nila) : (this.createDOMContentLoadedListener(),
            this.elementsToBeAppended.push(nila));
        }, fastim.createDOMContentLoadedListener = function() {
            var looke = this;
            if (!this.DOMContentLoadedListenerCreated) {
                this.DOMContentLoadedListenerCreated = !0;
                var nisib = function() {
                    for (;looke.elementsToBeAppended.length > 0; ) document.body.appendChild(looke.elementsToBeAppended.pop());
                    document.removeEventListener ? document.removeEventListener("DOMContentLoaded", nisib, !1) : document.detachEvent("onDOMContentLoaded", nisib);
                };
                document.addEventListener ? document.addEventListener("DOMContentLoaded", nisib, !1) : document.attachEvent("onDOMContentLoaded", nisib);
            }
        }, fastim._getNode = function(ceku, konkuk, quegog, joho) {
            if (void 0 === quegog && (quegog = null), void 0 === joho && (joho = !1), konkuk) {
                var pasee = konkuk.getElementsByTagName(ceku);
                if (pasee.length > 0) return joho ? pasee : quegog ? pasee[0][quegog] : pasee[0];
            }
            return "";
        }, fastim.elementsToBeAppended = [], fastim.DOMContentLoadedListenerCreated = !1,
        fastim;
    }();
}, function(troko, upood, camin) {
    "use strict";
    var tuju = camin(9), bakis = camin(1), hohoy = function() {
        function seyien() {
            this.memoryStorageContent = {};
        }
        return seyien.prototype.setItem = function(situs, atan) {
            this.memoryStorageContent[situs] = atan;
        }, seyien.prototype.getItem = function(pheenom) {
            return this.memoryStorageContent[pheenom];
        }, seyien.prototype.removeItem = function(bieti) {
            delete this.memoryStorageContent[bieti];
        }, seyien;
    }(), gidu = camin(4), cifhil = function() {
        function krezu() {}
        return krezu.AUTHN_TOKEN = "authenticationToken", krezu.AUTHZ_TOKEN = "authorizationToken",
        krezu.USER_METADATA = "userMeta", krezu.MVPD = "mvpd", krezu.CAN_AUTHN = "canAuthenticate",
        krezu.PREAUTHORIZATION_CACHE = "preauthorizationCache", krezu;
    }(), mibi = function() {
        function keenoy() {
            this.authenticationToken = [], this.authorizationToken = [], this.userMeta = {},
            this.mvpd = null, this.canAuthenticate = !1, this.preauthorizationCache = [];
        }
        return keenoy.prototype.setAuthenticationTokens = function(nosu) {
            this.authenticationToken = nosu;
        }, keenoy.prototype.getAuthenticationTokens = function() {
            return this.authenticationToken;
        }, keenoy.prototype.setAuthorizationTokens = function(padi) {
            this.authorizationToken = padi;
        }, keenoy.prototype.getAuthorizationTokens = function() {
            return this.authorizationToken;
        }, keenoy.prototype.setUserMetadata = function(nasli) {
            this.userMeta = nasli;
        }, keenoy.prototype.getUserMetadata = function() {
            return this.userMeta;
        }, keenoy.prototype.setMvpdID = function(slepo) {
            this.mvpd = slepo;
        }, keenoy.prototype.getMvpdID = function() {
            return this.mvpd;
        }, keenoy.prototype.setCanAuthenticate = function(bekeef) {
            this.canAuthenticate = bekeef;
        }, keenoy.prototype.getCanAuthenticate = function() {
            return this.canAuthenticate;
        }, keenoy.prototype.setPreauthorizationCache = function(jatoug) {
            this.preauthorizationCache = jatoug;
        }, keenoy.prototype.getPreauthorizationCache = function() {
            return this.preauthorizationCache;
        }, keenoy.prototype.loadEntitlementTokenFromJSONObject = function(srique) {
            this.authenticationToken = srique[cifhil.AUTHN_TOKEN], this.authorizationToken = srique[cifhil.AUTHZ_TOKEN],
            this.userMeta = srique[cifhil.USER_METADATA], this.mvpd = srique[cifhil.MVPD], this.canAuthenticate = srique[cifhil.CAN_AUTHN],
            this.preauthorizationCache = srique[cifhil.PREAUTHORIZATION_CACHE];
        }, keenoy.prototype.isEntitlementTokenContentValid = function() {
            return this && !gidu.a.isUndefined(this.authenticationToken) && !gidu.a.isUndefined(this.authorizationToken) && !gidu.a.isUndefined(this.mvpd) && !gidu.a.isUndefined(this.canAuthenticate) && Array.isArray(this.authenticationToken) && Array.isArray(this.authorizationToken);
        }, keenoy;
    }(), exul = camin(10), jihie = camin(0), tumo = camin(12), dibi = camin(3), gapag = camin(18), quenor = camin(7), ufuesh = camin(19), omaf = camin(22), mupok = camin(21), fayay = function() {
        function ikud() {}
        return ikud.createEmptyDataObject = function(rima) {
            switch (rima) {
              case kijo.APPLICATION_REGISTRATION:
                return new ufuesh.a();

              case kijo.ACCESS_TOKEN:
                return new omaf.a();

              case kijo.REG_CODE:
                return new mupok.a();

              default:
                return null;
            }
        }, ikud;
    }();
    camin.d(upood, "a", function() {
        return kijo;
    }), camin.d(upood, "b", function() {
        return denguf;
    });
    var kijo = function() {
        function cofoul() {}
        return cofoul.LOCAL_STORAGE_PRIMARY_KEY = "entitlementToken", cofoul.SESSION_STORAGE_PRIMARY_KEY = "sessionStorage",
        cofoul.MEMORY_STORAGE_PRIMARY_KEY = "memoryStorage", cofoul.STORAGE_VERSION_KEY = "storageVersion",
        cofoul.GENERIC_REQUESTOR = "GenericRequestor", cofoul.DEVICE_IID_KEY = "iid", cofoul.DEVICE_SFP_KEY = "sfp",
        cofoul.APPLICATION_REGISTRATION = "applicationRegistration", cofoul.ACCESS_TOKEN = "accessToken",
        cofoul.REG_CODE = "regCode", cofoul;
    }(), cusree = function() {
        function otheck() {}
        return otheck.LOCAL_STORAGE = "local", otheck.SESSION_STORAGE = "session", otheck.MEMORY_STORAGE = "memory",
        otheck;
    }(), denguf = function() {
        function prukue() {
            this.internalMemoryStorage = new hohoy(), this.pm = new gapag.a(quenor.a.globalOptions.proxyURL, window.accessEnablerProxy.contentWindow),
            this.isLocalStorageSpaceEnabled() && this.isLocalStorageSpaceAvailable() ? (this.storageType = cusree.LOCAL_STORAGE,
            this.storagePrimaryKey = kijo.LOCAL_STORAGE_PRIMARY_KEY, this.storage = this.internalLocalStorage) : (jihie.a.warn("Web localStorage is not enabled or not available, switch to using memory storage!"),
            this.storageType = cusree.MEMORY_STORAGE, this.storagePrimaryKey = kijo.MEMORY_STORAGE_PRIMARY_KEY,
            this.storage = this.internalMemoryStorage), this.storage.setItem(kijo.STORAGE_VERSION_KEY, 2),
            this.storageType !== cusree.MEMORY_STORAGE && this.pm.postStorage("setItem", kijo.STORAGE_VERSION_KEY, 2);
        }
        return prukue.getInstance = function() {
            return this.instance || (this.instance = new prukue()), this.instance;
        }, prukue.prototype.getEntitlementToken = function() {
            return this.entitlementToken = this.loadEntitlementTokenFromStorage(), this.entitlementToken;
        }, prukue.prototype.syncStorage = function() {
            var jasor = this;
            return new Promise(function(gigo) {
                jasor.pm.postStorage("getItems", kijo.STORAGE_VERSION_KEY, kijo.DEVICE_IID_KEY, kijo.GENERIC_REQUESTOR, kijo.LOCAL_STORAGE_PRIMARY_KEY, kijo.SESSION_STORAGE_PRIMARY_KEY).then(function(amoug) {
                    if (!mifink.isDirty && !gidu.a.isEmpty(amoug) && !amoug.error) for (var rime in amoug) if (amoug[rime] !== localStorage.getItem(rime) && (localStorage.setItem(rime, amoug[rime]),
                    rime === mifink.storagePrimaryKey)) try {
                        mifink.entitlementToken = JSON.parse(amoug[rime]);
                    } catch (mifink) {
                        jihie.a.error("Error parsing value from SSO storage", mifink);
                    }
                    mifink.pm.postStorage("isSessionCookieSet").then(function(fuja) {
                        mifink.isDirty || gidu.a.isEmpty(amoug) || fuja.isSessionCookieSet && exul.a.setSessionCookie();
                    }), mifink.startTimer(), gigo();
                });
            });
        }, prukue.prototype.getStorageData = function() {
            return [ this.internalLocalStorage.getItem(kijo.LOCAL_STORAGE_PRIMARY_KEY), this.internalLocalStorage.getItem(kijo.SESSION_STORAGE_PRIMARY_KEY) ];
        }, prukue.prototype.switchToSessionStorage = function() {
            this.isLocalStorageSpaceEnabled() && (jihie.a.warn("Switch to using session storage!"),
            this.storageType = cusree.SESSION_STORAGE, this.storagePrimaryKey = kijo.SESSION_STORAGE_PRIMARY_KEY,
            this.storage = this.internalLocalStorage), this.entitlementToken = this.loadEntitlementTokenFromStorage();
        }, prukue.prototype.switchToLocalStorage = function() {
            this.isLocalStorageSpaceEnabled() && (jihie.a.warn("Switch to using local storage!"),
            this.storageType = cusree.LOCAL_STORAGE, this.storagePrimaryKey = kijo.LOCAL_STORAGE_PRIMARY_KEY,
            this.storage = this.internalLocalStorage), this.entitlementToken = this.loadEntitlementTokenFromStorage();
        }, prukue.prototype.setApplicationRegistration = function(hufe) {
            this.saveDataToStorage(hufe, kijo.APPLICATION_REGISTRATION);
        }, prukue.prototype.getApplicationRegistration = function() {
            return this.loadDataFromStorage(kijo.APPLICATION_REGISTRATION);
        }, prukue.prototype.setAccessToken = function(buhum) {
            this.saveDataToStorage(buhum, kijo.ACCESS_TOKEN);
        }, prukue.prototype.getAccessToken = function() {
            return this.loadDataFromStorage(kijo.ACCESS_TOKEN);
        }, prukue.prototype.setRegCode = function(trosa) {
            this.saveDataToStorage(trosa, kijo.REG_CODE);
        }, prukue.prototype.getRegCode = function() {
            return this.loadDataFromStorage(kijo.REG_CODE);
        }, prukue.prototype.setAuthenticationToken = function(hihi) {
            this.isDirty = !0, this.entitlementToken = this.loadEntitlementTokenFromStorage();
            for (var pothen = this.entitlementToken.getAuthenticationTokens(), crequo = 0; crequo < pothen.length; ) new tuju.a(pothen[crequo]).getRequestorID() === hihi.getRequestorID() ? pothen.splice(crequo, 1) : crequo++;
            pothen.push(hihi.getSource()), this.saveEntitlementTokenToStorage(this.entitlementToken);
        }, prukue.prototype.getAuthenticationToken = function() {
            var geque = this.getMvpdID(), ugus = null;
            if (geque) {
                var ceija = tumo.a.getInstance().getMVPDByID(geque);
                ceija && (ugus = ceija.authPerAggregator ? this.searchForAuthenticationTokenForRequestor(dibi.a.requestorID) : this.searchForFirstValidAuthenticationToken());
            }
            return ugus;
        }, prukue.prototype.searchForFirstValidAuthenticationTokenForCurrentMvpd = function() {
            var dabas = this.getMvpdID(), soore = null;
            if (dabas) {
                this.entitlementToken = this.loadEntitlementTokenFromStorage();
                for (var duju = void 0, trisod = 0, thizi = this.entitlementToken.getAuthenticationTokens(); trisod < thizi.length; trisod++) {
                    var esuk = thizi[trisod];
                    if ((duju = new tuju.a(esuk)).getMVPDID() === dabas && duju.isValid()) {
                        soore = duju;
                        break;
                    }
                }
            }
            return soore;
        }, prukue.prototype.setAuthorizationToken = function(igteer) {
            this.isDirty = !0, this.entitlementToken = this.loadEntitlementTokenFromStorage();
            for (var clako, jadram = this.entitlementToken.getAuthorizationTokens(), huha = 0; huha < jadram.length; ) (clako = new tuju.a(jadram[huha])).getRequestorID() === igteer.getResourceID() && clako.getResourceID() === igteer.getResourceID() ? jadram.splice(huha, 1) : huha++;
            jadram.push(igteer.getSource()), this.saveEntitlementTokenToStorage(this.entitlementToken);
        }, prukue.prototype.getAuthorizationToken = function(kigu, adurn) {
            this.entitlementToken = this.loadEntitlementTokenFromStorage();
            for (var wese, peda = null, pehue = 0, ginus = this.entitlementToken.getAuthorizationTokens(); pehue < ginus.length; pehue++) {
                var nepab = ginus[pehue];
                if ((wese = new tuju.a(nepab)).getRequestorID() === kigu && wese.getResourceID() === adurn) {
                    peda = wese;
                    break;
                }
            }
            return peda;
        }, prukue.prototype.setUserMetadata = function(sremo) {
            if (this.isDirty = !0, gidu.a.isEmpty(sremo)) jihie.a.warn("Received empty userMetadata"); else if (dibi.a.requestorID) {
                var krojad = this.getMvpdID();
                this.entitlementToken = this.loadEntitlementTokenFromStorage();
                try {
                    if (this.entitlementToken.getUserMetadata() || this.entitlementToken.setUserMetadata({}),
                    krojad) {
                        var petu = tumo.a.getInstance().getMVPDByID(krojad);
                        if (petu) {
                            var jidi = JSON.parse(sremo), queki = petu.authPerAggregator ? dibi.a.requestorID : kijo.GENERIC_REQUESTOR;
                            this.entitlementToken.getUserMetadata()[queki] = jidi, this.saveEntitlementTokenToStorage(this.entitlementToken);
                        } else jihie.a.warn("Cannot set user metadata token: invalid MVPD selected.");
                    } else jihie.a.warn("Cannot set user metadata token: no MVPD selected.");
                } catch (sremo) {
                    jihie.a.error(sremo);
                }
            } else jihie.a.warn("Cannot set user metadata: requestor is not configured.");
        }, prukue.prototype.mergeUserMetadata = function(soke) {
            var nonur = this.getUserMetadata();
            try {
                var eguep = JSON.parse(soke), dubi = parseInt(eguep.updated, 10);
                if (parseInt(nonur.updated, 10) < dubi && eguep.data) try {
                    nonur.updated = dubi;
                    var lougu = eguep.data;
                    for (var poda in lougu) lougu.hasOwnProperty(poda) && (nonur.data[poda] = lougu[poda]);
                    this.setUserMetadata(JSON.stringify(nonur));
                } catch (nonur) {
                    jihie.a.warn("Error merging user metadata tokens."), this.setUserMetadata(soke);
                } else jihie.a.warn("The metadata token received from the server has invalid properties.");
            } catch (soke) {
                jihie.a.warn("The metadata token received from the server cannot be parsed.");
            }
        }, prukue.prototype.getUserMetadata = function() {
            var bueke = this.getMvpdID(), asom = null;
            if (bueke) {
                var daknak = tumo.a.getInstance().getMVPDByID(bueke);
                if (daknak) {
                    this.entitlementToken = this.loadEntitlementTokenFromStorage();
                    var biquo = this.entitlementToken.getUserMetadata();
                    biquo && (asom = daknak.authPerAggregator ? biquo[dibi.a.requestorID] : biquo[kijo.GENERIC_REQUESTOR]);
                }
            }
            return asom;
        }, prukue.prototype.setMvpdID = function(duni) {
            this.isDirty = !0, this.storageType === cusree.SESSION_STORAGE && (this.storagePrimaryKey = kijo.LOCAL_STORAGE_PRIMARY_KEY),
            this.entitlementToken = this.loadEntitlementTokenFromStorage(), this.entitlementToken.setMvpdID(null === duni ? null : String(duni)),
            this.saveEntitlementTokenToStorage(this.entitlementToken), this.storageType === cusree.SESSION_STORAGE && (this.storagePrimaryKey = kijo.SESSION_STORAGE_PRIMARY_KEY);
        }, prukue.prototype.getMvpdID = function() {
            return this.storageType === cusree.SESSION_STORAGE && (this.storagePrimaryKey = kijo.LOCAL_STORAGE_PRIMARY_KEY),
            this.entitlementToken = this.loadEntitlementTokenFromStorage(), this.storageType === cusree.SESSION_STORAGE && (this.storagePrimaryKey = kijo.SESSION_STORAGE_PRIMARY_KEY),
            this.entitlementToken.getMvpdID();
        }, prukue.prototype.setCanAuthenticate = function(kubo) {
            this.isDirty = !0, this.storageType === cusree.SESSION_STORAGE && (this.storagePrimaryKey = kijo.LOCAL_STORAGE_PRIMARY_KEY),
            this.entitlementToken = this.loadEntitlementTokenFromStorage(), this.entitlementToken.setCanAuthenticate(Boolean(kubo)),
            this.saveEntitlementTokenToStorage(this.entitlementToken), this.storageType === cusree.SESSION_STORAGE && (this.storagePrimaryKey = kijo.SESSION_STORAGE_PRIMARY_KEY);
        }, prukue.prototype.getCanAuthenticate = function() {
            return this.storageType === cusree.SESSION_STORAGE && (this.storagePrimaryKey = kijo.LOCAL_STORAGE_PRIMARY_KEY),
            this.entitlementToken = this.loadEntitlementTokenFromStorage(), this.storageType === cusree.SESSION_STORAGE && (this.storagePrimaryKey = kijo.SESSION_STORAGE_PRIMARY_KEY),
            Boolean(this.entitlementToken.getCanAuthenticate());
        }, prukue.prototype.setPreauthorizationCache = function(grire) {
            this.isDirty = !0, this.entitlementToken = this.loadEntitlementTokenFromStorage(),
            this.entitlementToken.setPreauthorizationCache(grire.concat()), this.saveEntitlementTokenToStorage(this.entitlementToken);
        }, prukue.prototype.getPreauthorizationCache = function() {
            return this.entitlementToken = this.loadEntitlementTokenFromStorage(), this.entitlementToken.getPreauthorizationCache();
        }, prukue.prototype.setDeviceId = function(laso) {
            var buefen = this;
            this.isDirty = !0, this.storage.setItem(kijo.DEVICE_IID_KEY, laso), this.storageType !== cusree.MEMORY_STORAGE && this.pm.postStorage("setItem", kijo.DEVICE_IID_KEY, laso).then(function() {
                return buefen.isDirty = !1;
            });
        }, prukue.prototype.setSFP = function(poga) {
            var buki = this;
            this.isDirty = !0, this.storage.setItem(kijo.DEVICE_SFP_KEY, poga), this.storageType !== cusree.MEMORY_STORAGE && this.pm.postStorage("setItem", kijo.DEVICE_SFP_KEY, poga).then(function() {
                return buki.isDirty = !1;
            });
        }, prukue.prototype.getDeviceId = function() {
            return this.storage.getItem(kijo.DEVICE_IID_KEY);
        }, prukue.prototype.getSFP = function() {
            return this.storage.getItem(kijo.DEVICE_SFP_KEY);
        }, prukue.prototype.clearDeviceId = function() {
            this.storage.removeItem(kijo.DEVICE_IID_KEY);
        }, prukue.prototype.getSAMLNameID = function() {
            this.entitlementToken = this.loadEntitlementTokenFromStorage();
            var olosk = this.searchForFirstValidAuthenticationToken();
            return olosk ? olosk.getProperty("simpleSamlNameID") : null;
        }, prukue.prototype.getSAMLSessionIndex = function() {
            this.entitlementToken = this.loadEntitlementTokenFromStorage();
            var majud = this.searchForFirstValidAuthenticationToken();
            return majud ? majud.getProperty("simpleSamlSessionIndex") : null;
        }, prukue.prototype.clearStorage = function(rotor) {
            void 0 === rotor && (rotor = !0), this.isDirty = !0, this.entitlementToken = this.loadEntitlementTokenFromStorage(),
            this.entitlementToken.setMvpdID(null), this.entitlementToken.setCanAuthenticate(!1),
            rotor && (jihie.a.warn("Storage content was reset!"), this.entitlementToken.setAuthenticationTokens([]),
            this.entitlementToken.setUserMetadata({})), this.entitlementToken.setAuthorizationTokens([]),
            this.saveEntitlementTokenToStorage(this.entitlementToken);
        }, prukue.prototype.resetStorage = function() {
            this.isDirty = !0, jihie.a.warn("Storage content was reset!"), this.saveDataToStorage(null, kijo.APPLICATION_REGISTRATION),
            this.saveDataToStorage(null, kijo.ACCESS_TOKEN), this.saveDataToStorage(null, kijo.REG_CODE),
            this.entitlementToken = new mibi(), this.saveEntitlementTokenToStorage(this.entitlementToken);
        }, prukue.prototype.searchForAuthenticationTokenForRequestor = function(pieleg) {
            this.entitlementToken = this.loadEntitlementTokenFromStorage();
            for (var ofponk, piquem = null, stotan = 0, refa = this.entitlementToken.getAuthenticationTokens(); stotan < refa.length; stotan++) {
                var swuque = refa[stotan];
                if ((ofponk = new tuju.a(swuque)).getRequestorID() === pieleg) {
                    piquem = ofponk;
                    break;
                }
            }
            return piquem;
        }, prukue.prototype.searchForFirstValidAuthenticationToken = function() {
            this.entitlementToken = this.loadEntitlementTokenFromStorage();
            for (var miha, uxon = null, buli = 0, nistru = this.entitlementToken.getAuthenticationTokens(); buli < nistru.length; buli++) {
                var strebrief = nistru[buli];
                if ((miha = new tuju.a(strebrief)).isValid()) {
                    uxon = miha;
                    break;
                }
            }
            return uxon;
        }, prukue.prototype.loadEntitlementTokenFromStorage = function() {
            var pankbon = this, aras = null, iltap = new mibi();
            try {
                var juqua = this.storage.getItem(this.storagePrimaryKey);
                juqua && (aras = JSON.parse(juqua));
            } catch (pankbon) {
                jihie.a.error(pankbon), jihie.a.warn("Storage content was invalid when trying to convert from String to JSON Object!");
            }
            if (!aras) return jihie.a.warn("Storage content was missing, null or couldn't be parsed!"),
            this.resetStorage(), new mibi();
            if (gidu.a.isEmpty(aras)) return jihie.a.warn("Storage content was an empty JSON Object!"),
            this.resetStorage(), new mibi();
            if (iltap.loadEntitlementTokenFromJSONObject(aras), !iltap.isEntitlementTokenContentValid()) return jihie.a.warn("Storage content was invalid when trying to validate entitlement token content!"),
            this.resetStorage(), new mibi();
            if (this.storageType === cusree.SESSION_STORAGE && !exul.a.isSessionCookieSet()) {
                jihie.a.warn("New authentication session! Session storage was reset!"), this.isDirty = !0,
                exul.a.setSessionCookie(), this.pm.postStorage("setSessionCookie").then(function() {
                    pankbon.isDirty = !1;
                });
                var okob = new mibi();
                return this.storagePrimaryKey = kijo.SESSION_STORAGE_PRIMARY_KEY, this.saveEntitlementTokenToStorage(okob),
                okob;
            }
            return iltap;
        }, prukue.prototype.saveEntitlementTokenToStorage = function(luga) {
            var buja = this;
            try {
                this.storageType === cusree.MEMORY_STORAGE && this.isLocalStorageSpaceEnabled() && (this.storagePrimaryKeyBeforeSwitchingToMemoryStorage === kijo.LOCAL_STORAGE_PRIMARY_KEY ? (jihie.a.warn("Switch to local storage from memory storage!"),
                this.storageType = cusree.LOCAL_STORAGE, this.storagePrimaryKey = kijo.LOCAL_STORAGE_PRIMARY_KEY,
                this.storage = this.internalLocalStorage) : (jihie.a.warn("Switch to session storage from memory storage!"),
                this.storageType = cusree.SESSION_STORAGE, this.storagePrimaryKey = kijo.SESSION_STORAGE_PRIMARY_KEY,
                this.storage = this.internalLocalStorage)), this.storage.setItem(this.storagePrimaryKey, JSON.stringify(luga)),
                this.storageType !== cusree.MEMORY_STORAGE && this.pm.postStorage("setItem", this.storagePrimaryKey, JSON.stringify(luga)).then(function() {
                    var peeper = buja.getDeviceId();
                    gidu.a.isEmpty(peeper) || buja.pm.postStorage("setItem", kijo.DEVICE_IID_KEY, peeper),
                    buja.isDirty = !1;
                });
            } catch (jutie) {
                jihie.a.error(jutie), luga = this.sanitizeEntitlementToken(luga);
                try {
                    this.storage.setItem(this.storagePrimaryKey, JSON.stringify(luga)), this.pm.postStorage("setItem", this.storagePrimaryKey, JSON.stringify(luga)).then(function() {
                        var poju = buja.getDeviceId();
                        gidu.a.isEmpty(poju) || buja.pm.postStorage("setItem", kijo.DEVICE_IID_KEY, poju),
                        buja.isDirty = !1;
                    });
                } catch (buja) {
                    jihie.a.error(buja), jihie.a.warn("Web browser localStorage space is still exceeded, switch to using memory storage!"),
                    this.storagePrimaryKeyBeforeSwitchingToMemoryStorage = this.storagePrimaryKey, this.storageType = cusree.MEMORY_STORAGE,
                    this.storagePrimaryKey = kijo.MEMORY_STORAGE_PRIMARY_KEY, this.storage = this.internalMemoryStorage,
                    this.storage.setItem(this.storagePrimaryKey, JSON.stringify(luga));
                }
            }
        }, prukue.prototype.loadDataFromStorage = function(sodip) {
            var hugig = null, cabu = fayay.createEmptyDataObject(sodip);
            try {
                var ilun = this.storage.getItem(sodip);
                ilun && (hugig = JSON.parse(ilun));
            } catch (hugig) {
                return jihie.a.warn("Storage data was invalid when trying to convert from String to JSON Object!", sodip),
                null;
            }
            return hugig ? (cabu.copyFromJSONObject(hugig), cabu.isValid() ? cabu : (jihie.a.warn("Storage data was invalid when trying to validate content!", sodip),
            null)) : (jihie.a.warn("Storage data was missing, null or couldn't be parsed!", sodip),
            null);
        }, prukue.prototype.saveDataToStorage = function(muci, alaf) {
            try {
                this.storage.setItem(alaf, JSON.stringify(muci));
            } catch (bidi) {
                jihie.a.error(bidi), jihie.a.warn("Web browser localStorage space is exceeded, switch to using memory storage!"),
                this.storagePrimaryKeyBeforeSwitchingToMemoryStorage = this.storagePrimaryKey, this.storageType = cusree.MEMORY_STORAGE,
                this.storagePrimaryKey = kijo.MEMORY_STORAGE_PRIMARY_KEY, this.storage = this.internalMemoryStorage,
                this.storage.setItem(alaf, JSON.stringify(muci));
            }
        }, prukue.prototype.isLocalStorageSpaceEnabled = function() {
            try {
                return this.internalLocalStorage = localStorage, !0;
            } catch (sokich) {
                return prukue.error = bakis.a.LS011, !1;
            }
        }, prukue.prototype.isLocalStorageSpaceAvailable = function() {
            try {
                return this.internalLocalStorage.setItem("canWrite", "test"), this.internalLocalStorage.removeItem("canWrite"),
                this.internalLocalStorage.setItem("canWrite", "yes"), "yes" === this.internalLocalStorage.getItem("canWrite") || (prukue.error = bakis.a.LS011,
                !1);
            } catch (marnar) {
                return prukue.error = bakis.a.LS011, !1;
            }
        }, prukue.prototype.startTimer = function() {
            var siba = this;
            setTimeout(function() {
                return siba.syncStorage();
            }, 1e3);
        }, prukue.prototype.sanitizeEntitlementToken = function(doston) {
            for (var riefat = doston.getAuthenticationTokens(), ised = 0; ised < riefat.length; ) new tuju.a(riefat[ised]).isValid() ? ised++ : riefat.splice(ised, 1);
            var niro = doston.getAuthorizationTokens();
            for (ised = 0; ised < niro.length; ) new tuju.a(niro[ised]).isValid() ? ised++ : niro.splice(ised, 1);
            return doston;
        }, prukue;
    }();
}, function(kumi, mise, tilnod) {
    "use strict";
    tilnod.d(mise, "a", function() {
        return hupay;
    });
    var tastra = tilnod(14), dirug = tilnod(4), eyug = tilnod(0), lafu = tilnod(18), gusey = tilnod(6), kucup = tilnod(20), otag = tilnod(1), brufey = tilnod(17), hupay = function() {
        function quabu(friqui, rewe) {
            void 0 === rewe && (rewe = !0);
            var quepo = this;
            if (this.defaultOptions = {
                url: window.location.href,
                async: !0,
                cache: !1,
                type: "GET",
                context: this,
                dataType: "xml",
                timeout: 3e4,
                data: quabu.globalData,
                headers: quabu.globalHeaders,
                cookies: quabu.globalCookies,
                traditional: !1,
                proxyRequest: !(navigator.vendor && navigator.vendor.match(/Apple/)),
                proxyResponse: !1
            }, this.mimeTypes = {
                xml: "application/xml",
                json: "application/json",
                text: "*/*"
            }, this.retrialAjax = !0, this.options = this.processOptions(friqui), this.urlObj = new brufey(this.options.url, null, !1),
            this.retrialAjax = rewe, this.options.proxyRequest) {
                var nikre = this.options.proxyURL + "#" + encodeURIComponent(document.location.href);
                this.postMesager = new lafu.a(nikre, window.accessEnablerProxy.contentWindow);
            } else this.setCookies(), this.setCache(), this.setData(), this.xhr = this.getXHR(),
            this.xhr.onreadystatechange = function(fateln) {
                var niti = fateln.target;
                if (friqui.data && friqui.data.resource_id && (niti.resourceID = friqui.data.resource_id),
                4 === niti.readyState) {
                    eyug.a.debug("XHR response received: ", niti);
                    var sipli = niti.status >= 200 && niti.status < 400 ? quepo.options.success : quepo.options.error, feje = "xml" !== quepo.options.dataType || quepo.options.proxyResponse ? niti.responseText : niti.responseXML;
                    !1 === quepo.options.proxyResponse && 401 === niti.status && quepo.retrialAjax ? quepo.onAuthorizationFailureHandler() : sipli.apply(quepo.options.context, [ feje, fateln.target.status, quabu.xhrToObject(niti) ]);
                }
            }, this.options.url = this.options.url = this.urlObj.toString(), this.xhr.open(this.options.type, this.options.url, this.options.async),
            this.options.async && (this.xhr.timeout = this.options.timeout), this.setHeaders();
        }
        return quabu.xhrToObject = function(brayub) {
            if (brayub.getAllResponseHeaders) {
                var onguck = {};
                brayub.getAllResponseHeaders().split("\r\n").map(function(fular) {
                    var joube = fular.split(": ");
                    2 === joube.length && (onguck[joube[0].toLowerCase()] = joube[1]);
                });
                var jiri = {
                    status: brayub.status,
                    statusText: brayub.statusText,
                    responseText: brayub.responseText,
                    responseHeaders: onguck
                };
                return brayub.resourceID && (jiri.resourceID = brayub.resourceID), eyug.a.debug("Converted xhr into serializable object", brayub, jiri),
                jiri;
            }
            return eyug.a.warn("trying to objectify a non xhr!", brayub), brayub;
        }, quabu.isCors = function(slabeb) {
            var neco = new brufey(slabeb, null, !1);
            return 0 !== window.location.href.indexOf(neco.origin);
        }, quabu.prototype.send = function() {
            var idag = this;
            this.options.proxyRequest ? (eyug.a.debug("Sending proxy request: ", this.options),
            this.postMesager.postAjax(this.options).then(function(enuf) {
                eyug.a.debug("Proxy response received: ", enuf);
                var loquo = enuf.status, krudi = enuf.data, jeme = enuf.status >= 200 && enuf.status < 400 ? idag.options.success : idag.options.error;
                krudi = "xml" === idag.options.dataType ? dirug.c.parseXML(krudi) : krudi, 401 === enuf.status && idag.retrialAjax ? idag.onAuthorizationFailureHandler() : jeme.apply(idag.options.context, [ krudi, loquo, enuf.xhr ]);
            })) : (eyug.a.debug("Sending request: ", this.options), this.xhr.send(this.options.data));
        }, quabu.prototype.processOptions = function(jimo) {
            var toowu = dirug.a.extend(Object.create(quabu.globalOptions), this.defaultOptions, jimo);
            return jimo.data && (toowu.data = dirug.a.extend({}, this.defaultOptions.data, jimo.data)),
            jimo.headers && (toowu.headers = dirug.a.extend({}, this.defaultOptions.headers, jimo.headers)),
            toowu;
        }, quabu.prototype.setData = function() {
            if (!dirug.a.isEmpty(this.options.data)) {
                var enggot = tastra.a.param(this.options.data, this.options.traditional);
                "POST" === this.options.type ? "json" === this.options.dataType ? this.options.data = JSON.stringify(this.options.data) : this.options.data = enggot : (this.urlObj.query && this.urlObj.query.length > 1 ? this.urlObj.query += "&" + enggot : this.urlObj.query = enggot,
                this.options.data = null);
            }
        }, quabu.prototype.setCookies = function() {
            var nuri = "https:" === this.urlObj.protocol ? ";secure" : "";
            for (var fogra in this.options.cookies) dirug.a.isEmpty(fogra) ? document.cookie = fogra + "=;path=/" + nuri + "; expires=Thu, 01 Jan 1970 00:00:00 UTC;" : document.cookie = fogra + "=" + this.options.cookies[fogra] + ";path=/" + nuri;
        }, quabu.prototype.setCache = function() {
            if (!this.options.cache) {
                eyug.a.debug("busting cache!");
                var morscam = "_=" + new Date().getTime();
                this.urlObj.query && this.urlObj.query.length > 1 ? this.urlObj.query += "&" + morscam : this.urlObj.query = morscam;
            }
        }, quabu.prototype.setHeaders = function() {
            if ("POST" === this.options.type && ("json" === this.options.dataType ? this.xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8") : this.xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8")),
            this.options.headers) for (var reegul in this.options.headers) this.options.headers.hasOwnProperty(reegul) && this.xhr.setRequestHeader(reegul, this.options.headers[reegul]);
            this.options.dataType && this.mimeTypes[this.options.dataType] && this.xhr.setRequestHeader("Accept", this.mimeTypes[this.options.dataType]);
        }, quabu.prototype.getXHR = function() {
            var geeto = new XMLHttpRequest();
            return quabu.isCors(this.urlObj.origin) && (eyug.a.debug("Enabling CORS"), geeto.withCredentials = !0),
            geeto;
        }, quabu.prototype.onAuthorizationFailureHandler = function() {
            var beemo = this;
            eyug.a.warn("Ajax call failed due to invalid authorization. Will invalidate application registration and access token!"),
            gusey.b.getInstance().setApplicationRegistration(null), gusey.b.getInstance().setAccessToken(null),
            kucup.a.getInstance().obtainAccessToken().then(function(kiesro) {
                eyug.a.warn("Will retry the Ajax call with new access token!"), beemo.options.headers.Authorization = "Bearer " + kiesro.getAccessToken(),
                new quabu(beemo.options, !1).send();
            }, function(caca) {
                beemo.options.error(caca, otag.a.MISSING_REQUIRED_PREREQUISITES_ERROR_STATUS);
            });
        }, quabu.globalOptions = {
            proxyURL: "AccessEnablerProxy.html"
        }, quabu.globalHeaders = {}, quabu.globalCookies = {
            client_type: "html5",
            client_version: "4.1.1"
        }, quabu.globalData = {}, quabu;
    }();
}, function(sokien, moquun, kurack) {
    "use strict";
    var kaneck = kurack(1), gipo = kurack(14), fouluenk = kurack(7), meyob = kurack(16), castuf = kurack(0), cicet = kurack(6), ochum = kurack(3), denub = kurack(12), quogu = kurack(4), bula = kurack(20), jonin = kurack(15), quefa = kurack(11), jephoo = kurack(21), quede = kurack(17), tade = function() {
        function mieque() {
            this.httpService = jonin.a.getInstance(), this.storageManager = cicet.b.getInstance(),
            this.identificationManager = meyob.a.getInstance();
        }
        return mieque.getInstance = function() {
            return this.instance || (this.instance = new mieque()), this.instance;
        }, mieque.prototype.obtainRegCode = function(decu) {
            var luna = this;
            return new Promise(function(quubli, eyjef) {
                var kombob = luna.storageManager.getRegCode();
                kombob ? quubli(kombob) : luna.retrieveRegCode(decu).then(function(luta) {
                    quubli(luta);
                }, function(hapey) {
                    eyjef(hapey);
                });
            });
        }, mieque.prototype.retrieveRegCode = function(rusna) {
            var gestam = this;
            return new Promise(function(triflo, sume) {
                var sheje = function(ludoorn) {
                    var oleck = new jephoo.a(ludoorn.data);
                    gestam.storageManager.setRegCode(oleck), triflo(oleck);
                }, gapod = function(oyay) {
                    mieque.RETRY_RETRIEVING_REG_CODE ? (mieque.RETRY_RETRIEVING_REG_CODE = !1, gestam.retrieveRegCode(rusna).then(function(hife) {
                        triflo(hife);
                    }, function(kaju) {
                        sume(kaju);
                    })) : oyay.status === kaneck.a.MISSING_REQUIRED_PREREQUISITES_ERROR_STATUS ? sume(oyay.data) : sume(kaneck.a.REG500);
                };
                gestam.identificationManager.getDeviceId().then(function(arit) {
                    gestam.httpService.post("/reggie/v1/" + rusna + minol.REG_CODE_ENDPOINT_PATH, {
                        requestor: rusna,
                        deviceId: arit,
                        format: "json"
                    }, {
                        url: new quede(quefa.a.serviceProviderURL, null, !0).origin,
                        dataType: "application/x-www-form-urlencoded"
                    }).then(sheje, gapod);
                }, function(hipob) {
                    sume(hipob);
                });
            });
        }, mieque.RETRY_RETRIEVING_REG_CODE = !0, mieque;
    }(), mufi = kurack(2), liepoo = kurack(10);
    kurack.d(moquun, "b", function() {
        return minol;
    }), kurack.d(moquun, "a", function() {
        return duhug;
    });
    var minol = function() {
        function femok() {}
        return femok.AUTHENTICATION_ENDPOINT_PATH = "/authenticate/saml?", femok.AUTHENTICATION_TOKEN_ENDPOINT_PATH = "/session",
        femok.AUTHORIZATION_TOKEN_ENDPOINT_PATH = "/authorize", femok.MEDIA_TOKEN_ENDPOINT_PATH = "/shortAuthorize",
        femok.PREAUTHORIZATION_ENDPOINT_PATH = "/preauthorize", femok.LOGOUT_ENDPOINT_PATH = "/logout?",
        femok.DEVICE_ID_ENDPOINT_PATH = "/getMetadata", femok.USER_METADATA_ENDPOINT_PATH = "/usermetadata",
        femok.CONFIG_ENDPOINT_PATH = "/config", femok.INDIVIDUALIZATION_ENDPOINT_PATH = "/indiv/devices",
        femok.CLIENT_REGISTRATION_ENDPOINT_PATH = "/o/client/register", femok.ACCESS_TOKEN_ENDPOINT_PATH = "/o/client/token",
        femok.REG_CODE_ENDPOINT_PATH = "/regcode", femok.PASSIVE_AUTHENTICATION_REDIRECT_ENDPOINT_PATH = "/completePassiveAuthentication",
        femok.BACKGROUND_LOGIN_COMPLETE = "completeBackgroundLogin.html", femok.BACKGROUND_LOGOUT_COMPLETE = "completeBackgroundLogout.html",
        femok;
    }(), duhug = function() {
        function cokod(dule, robmit) {
            this.spURL = dule, this.requestorID = robmit, this.storageManager = cicet.b.getInstance(),
            this.identificationManager = meyob.a.getInstance(), this.clientRegistrationService = bula.a.getInstance(),
            this.regCodeService = tade.getInstance();
        }
        return cokod.prototype.goToLoginPage = function(puce, joge, date) {
            var horib = ochum.a.clientInfo && ochum.a.clientInfo.isBackgroundLogin();
            this.getLoginPageUrl(!1, puce, date, horib && !puce.tempPass).then(function(cloge) {
                if (horib && (joge = kurack.p + minol.BACKGROUND_LOGIN_COMPLETE), horib && puce.tempPass) return castuf.a.debug("Attempting background temp pass..."),
                void new fouluenk.a({
                    url: cloge,
                    dataType: "text/html",
                    data: {
                        iframe_required: !0,
                        redirect_url: "about:blank"
                    },
                    success: function() {
                        return ochum.a.getInstance().completeBackgroundLogin();
                    },
                    error: function() {
                        return ochum.a.getInstance().completeBackgroundLogin();
                    }
                }).send();
                !1 === horib && liepoo.a.setPendingAuthenticationCookieState(!0), puce.iFrameRequired ? ochum.a.getInstance().callCallback("openIFrame", cloge, puce.iFrameWidth, puce.iFrameHeight, joge) : ochum.a.getInstance().callCallback("navigateToURL", cloge, joge, horib);
            }, function(nedib) {
                ochum.a.getInstance().callbackManager.onErrorHandler(nedib.data), ochum.a.getInstance().callCallback("setAuthenticationStatus", 0, mufi.a.GENERIC_AUTHENTICATION_ERROR);
            });
        }, cokod.prototype.getLoginPageUrl = function(inpieck, vohe, domi, irud) {
            var gulie = this;
            return void 0 === domi && (domi = null), void 0 === irud && (irud = !1), new Promise(function(oged, kekik) {
                gulie.regCodeService.obtainRegCode(gulie.requestorID).then(function(cihu) {
                    var renu = {
                        reg_code: cihu.getCode(),
                        noflash: !0,
                        mso_id: vohe.id,
                        requestor_id: gulie.requestorID,
                        no_iframe: irud ? "true" : "false",
                        domain_name: "adobe.com"
                    };
                    domi && (renu.generic_data = domi), inpieck && (renu.passive = "true", renu.redirect_url = gulie.spURL + minol.PASSIVE_AUTHENTICATION_REDIRECT_ENDPOINT_PATH),
                    ochum.a.clientInfo && null !== ochum.a.clientInfo.isIFrameRequiredForMvpd(vohe.id) && (renu.iframe_required = ochum.a.clientInfo.isIFrameRequiredForMvpd(vohe.id)),
                    renu = quogu.a.extend(renu, fouluenk.a.globalData);
                    var sreni = gulie.spURL + minol.AUTHENTICATION_ENDPOINT_PATH + gipo.a.param(renu);
                    oged(sreni);
                }, function(jusi) {
                    kekik({
                        data: jusi,
                        status: kaneck.a.MISSING_REQUIRED_PREREQUISITES_ERROR_STATUS
                    });
                });
            });
        }, cokod.prototype.retrieveAuthenticationToken = function(swato, epet) {
            var jurad = this;
            this.getRequiredHeaders(minol.AUTHENTICATION_TOKEN_ENDPOINT_PATH).then(function(grastre) {
                jurad.regCodeService.obtainRegCode(jurad.requestorID).then(function(siso) {
                    new fouluenk.a({
                        type: "POST",
                        url: jurad.spURL + minol.AUTHENTICATION_TOKEN_ENDPOINT_PATH,
                        data: {
                            _method: "GET",
                            reg_code: siso.getCode(),
                            requestor_id: jurad.requestorID
                        },
                        dataType: "xml",
                        success: swato,
                        error: epet,
                        headers: grastre
                    }).send();
                }, function(irir) {
                    epet(irir, kaneck.a.MISSING_REQUIRED_PREREQUISITES_ERROR_STATUS);
                });
            }, function(gitu) {
                epet(gitu.data, gitu.status);
            });
        }, cokod.prototype.retrieveAuthorizationToken = function(tiri, cestdrot, phasri, culi) {
            var tagli = this;
            this.getRequiredHeaders(minol.AUTHORIZATION_TOKEN_ENDPOINT_PATH).then(function(aray) {
                var keckqued = tagli.storageManager.getAuthenticationToken();
                new fouluenk.a({
                    type: "POST",
                    url: tagli.spURL + minol.AUTHORIZATION_TOKEN_ENDPOINT_PATH,
                    data: {
                        resource_id: tiri,
                        requestor_id: tagli.requestorID,
                        authentication_token: keckqued.getSource(),
                        mso_id: denub.a.getInstance().getCurrentMvpdID(),
                        generic_data: cestdrot,
                        userMeta: 1
                    },
                    dataType: "text",
                    success: phasri,
                    error: culi,
                    headers: aray,
                    context: tagli
                }).send();
            }, function(isim) {
                culi(isim.data, isim.status);
            });
        }, cokod.prototype.retrieveMediaToken = function(umis, seplad, gusis, jetood) {
            var bagop = this;
            this.getRequiredHeaders(minol.MEDIA_TOKEN_ENDPOINT_PATH).then(function(gomap) {
                var mato = bagop.storageManager.getAuthenticationToken();
                new fouluenk.a({
                    type: "POST",
                    url: bagop.spURL + minol.MEDIA_TOKEN_ENDPOINT_PATH,
                    data: {
                        authz_token: umis.getSource(),
                        requestor_id: bagop.requestorID,
                        generic_data: seplad,
                        session_guid: mato.getProperty("simpleTokenAuthenticationGuid"),
                        hashed_guid: "false"
                    },
                    dataType: "text",
                    success: gusis,
                    error: jetood,
                    headers: gomap,
                    context: bagop
                }).send();
            }, function(pugu) {
                jetood(pugu.data, pugu.status);
            });
        }, cokod.prototype.retrieveDeviceIDHash = function(houstun, grutel, melad) {
            var fator = this;
            this.requestorID ? this.getRequiredHeaders(minol.DEVICE_ID_ENDPOINT_PATH).then(function(meso) {
                new fouluenk.a({
                    type: "POST",
                    url: fator.spURL + minol.DEVICE_ID_ENDPOINT_PATH,
                    data: {
                        requestor_id: fator.requestorID,
                        device_id: houstun
                    },
                    dataType: "text/plain",
                    success: grutel,
                    error: melad,
                    headers: meso,
                    context: fator
                }).send();
            }, function(rego) {
                melad(rego.data, rego.status);
            }) : melad(null);
        }, cokod.prototype.retrieveEncryptedMetadata = function(scetad, shimu, amol) {
            var swema = this, sharu = this.storageManager.getAuthenticationToken();
            this.requestorID && sharu ? this.getRequiredHeaders(minol.USER_METADATA_ENDPOINT_PATH).then(function(nunaze) {
                new fouluenk.a({
                    type: "POST",
                    url: swema.spURL + minol.USER_METADATA_ENDPOINT_PATH,
                    data: {
                        requestor: swema.requestorID,
                        authn: sharu.getSource(),
                        metadata: JSON.stringify(scetad)
                    },
                    dataType: "text",
                    success: shimu,
                    error: amol,
                    headers: nunaze,
                    context: swema
                }).send();
            }, function(quined) {
                amol(quined.data, quined.status);
            }) : amol(null);
        }, cokod.prototype.checkPreauthorizedResources = function(nuhu, hator, kesa) {
            var ninis = this, juple = this.storageManager.getAuthenticationToken();
            juple && juple.isValid() && this.spURL && this.getRequiredHeaders(minol.PREAUTHORIZATION_ENDPOINT_PATH).then(function(blona) {
                new fouluenk.a({
                    type: "POST",
                    url: ninis.spURL + minol.PREAUTHORIZATION_ENDPOINT_PATH,
                    data: {
                        authentication_token: juple.getSource(),
                        requestor_id: ninis.requestorID,
                        resource_id: nuhu,
                        noflash: !0
                    },
                    dataType: "xml",
                    success: hator,
                    error: kesa,
                    headers: blona,
                    context: ninis,
                    traditional: !0
                }).send();
            }, function(gifee) {
                kesa(gifee.data, gifee.status);
            });
        }, cokod.prototype.logout = function(eyif) {
            var juegra = ochum.a.clientInfo && ochum.a.clientInfo.isBackgroundLogout();
            if (eyif && this.spURL) {
                var scushnon = {
                    noflash: !0,
                    mso_id: eyif.getMVPDID(),
                    requestor_id: this.requestorID,
                    name_id: eyif.getProperty("simpleSamlNameID"),
                    session_index: eyif.getProperty("simpleSamlSessionIndex"),
                    pi: eyif.getProperty("simpleSamlNameID")
                }, ayos = eyif.getProperty("simpleTransientPartOfGuid");
                ayos && (scushnon.p1 = ayos), scushnon = quogu.a.extend(scushnon, fouluenk.a.globalData);
                var lulmut = this.spURL + minol.LOGOUT_ENDPOINT_PATH;
                juegra ? (scushnon.redirect_url = kurack.p + minol.BACKGROUND_LOGOUT_COMPLETE, ochum.a.getInstance().doBackgroundLogout(lulmut + gipo.a.param(scushnon))) : ochum.a.getInstance().callCallback("navigateToURL", lulmut + gipo.a.param(scushnon), null, null);
            } else juegra ? ochum.a.getInstance().completeBackgroundLogout() : ochum.a.getInstance().callCallback("reload");
        }, cokod.prototype.getRequiredHeaders = function(peblu) {
            var darooy = this;
            return new Promise(function(cejer, fodar) {
                var juma = JSON.parse(JSON.stringify(darooy.identificationManager.getDeviceInfo())), jeemnob = darooy.storageManager.getSAMLNameID();
                jeemnob && (juma.ap_19 = jeemnob);
                var ayib = darooy.storageManager.getSAMLSessionIndex();
                ayib && (juma.ap_23 = ayib);
                var salu = function(erques) {
                    for (var eyor = 0, nadu = erques; eyor < nadu.length; eyor++) {
                        var kousted = nadu[eyor];
                        if (-1 !== peblu.indexOf(kousted)) return !0;
                    }
                    return !1;
                }, joufuf = salu(cokod.ENDPOINTS_REQUIRING_DEVICE_ID_HEADER), pamu = salu(cokod.ENDPOINTS_REQUIRING_ACCESS_TOKEN_HEADER), ceique = function() {
                    darooy.clientRegistrationService.obtainAccessToken().then(function(hihag) {
                        juma.Authorization = "Bearer " + hihag.getAccessToken(), cejer(juma);
                    }, function(pefa) {
                        fodar({
                            data: pefa,
                            status: kaneck.a.MISSING_REQUIRED_PREREQUISITES_ERROR_STATUS
                        });
                    });
                };
                joufuf ? darooy.identificationManager.getDeviceId().then(function(lelie) {
                    juma.ap_21 = lelie, juma.pass_sfp = darooy.storageManager.getSFP(), pamu ? ceique() : cejer(juma);
                }, function(nofe) {
                    fodar({
                        data: nofe,
                        status: kaneck.a.MISSING_REQUIRED_PREREQUISITES_ERROR_STATUS
                    });
                }) : pamu ? ceique() : cejer(juma);
            });
        }, cokod.ENDPOINTS_REQUIRING_DEVICE_ID_HEADER = [ minol.AUTHENTICATION_TOKEN_ENDPOINT_PATH, minol.AUTHORIZATION_TOKEN_ENDPOINT_PATH, minol.MEDIA_TOKEN_ENDPOINT_PATH ],
        cokod.ENDPOINTS_REQUIRING_ACCESS_TOKEN_HEADER = [ minol.INDIVIDUALIZATION_ENDPOINT_PATH, minol.CONFIG_ENDPOINT_PATH, minol.AUTHENTICATION_ENDPOINT_PATH, minol.AUTHENTICATION_TOKEN_ENDPOINT_PATH, minol.AUTHORIZATION_TOKEN_ENDPOINT_PATH, minol.MEDIA_TOKEN_ENDPOINT_PATH, minol.PREAUTHORIZATION_ENDPOINT_PATH, minol.LOGOUT_ENDPOINT_PATH, minol.DEVICE_ID_ENDPOINT_PATH, minol.USER_METADATA_ENDPOINT_PATH, minol.REG_CODE_ENDPOINT_PATH ],
        cokod;
    }();
}, function(dujo, inor, letre) {
    "use strict";
    var gusna = letre(5), gooca = letre(0), gulug = function() {
        function yuebis(sala) {
            this.xmlElement = sala;
        }
        return yuebis.prototype.getAuthorizedResourceID = function() {
            return gooca.a.debug("Entered - AuthorizedResource::getAuthorizedResourceID()"),
            this.xmlElement ? this.xmlElement.getAttribute("simpleResourceID") : null;
        }, yuebis;
    }(), peknad = letre(3), casu = letre(4);
    letre.d(inor, "a", function() {
        return athad;
    });
    var athad = function() {
        function guda(esok) {
            this.source = esok, this.xmlData = casu.c.parseXML(esok.split("<signatureInfo>")[2]);
        }
        return guda.prototype.getSource = function() {
            return this.source;
        }, guda.prototype.getExpiryDate = function() {
            var kouka = this.getProperty("simpleTokenExpires");
            if (kouka) kouka = new Date(casu.b.convertServerDateToISO8601DateFormat(kouka)); else {
                var dunie = void 0, naku = this.getProperty("issueTime");
                if (naku) {
                    dunie = this.getProperty("ttl");
                    var gaba = new Date(casu.b.convertServerDateToISO8601DateFormat(naku)).getTime();
                    kouka = new Date(gaba + dunie);
                } else {
                    if (!(dunie = this.getProperty("simpleTokenTTL"))) throw {
                        message: "Invalid token format."
                    };
                    kouka = new Date(casu.b.convertServerDateToISO8601DateFormat(dunie));
                }
            }
            return kouka;
        }, guda.prototype.isExpired = function() {
            try {
                var quako = this.getExpiryDate().getTime();
                return new Date().getTime() > quako;
            } catch (quako) {
                return gooca.a.error(quako.message), !1;
            }
        }, guda.prototype.isValid = function() {
            try {
                var pashay = !this.isExpired();
                return pashay && this.isAuthZAll() && (pashay = peknad.a.requestorID === this.getRequestorID()),
                pashay;
            } catch (pashay) {
                return gooca.a.error(pashay.message), !1;
            }
        }, guda.prototype.isAuthNAll = function() {
            var foothu = this.getProperty("simpleTokenAuthenticationGuid");
            return "d35b501e0385360feccc755c59f5767b46c54c7d" === foothu || 0 === foothu.indexOf("95cf93bcd183214a");
        }, guda.prototype.isAuthZAll = function() {
            return "true" === this.getProperty("zAll");
        }, guda.prototype.getProperty = function(igan) {
            return gusna.a.getNodeText(igan, this.xmlData);
        }, guda.prototype.getRequestorID = function() {
            return this.getProperty("simpleTokenRequestorID");
        }, guda.prototype.getResourceID = function() {
            var yesha = this.getProperty("simpleTokenResourceID");
            return yesha || this.getProperty("resourceID");
        }, guda.prototype.getMVPDID = function() {
            return this.getProperty("simpleTokenMsoID");
        }, guda.prototype.getSubMVPDID = function() {
            return this.getProperty("simpleTokenSubMvpdID");
        }, guda.prototype.getAuthorizedResources = function() {
            gooca.a.trace("Entered - Token::getAuthorizedResources()");
            var dena = new Array(0);
            if (this.xmlData) {
                var kreeben = this.xmlData.getElementsByTagName("simpleAuthorizedResource");
                dena = new Array(kreeben.length);
                for (var bebum = 0; bebum < dena.length; bebum++) {
                    var cipour = new gulug(kreeben[bebum]);
                    dena[bebum] = cipour;
                }
            }
            return dena;
        }, guda;
    }();
}, function(dayer, sisum, peefi) {
    "use strict";
    peefi.d(sisum, "a", function() {
        return quodos;
    });
    var tapet = function() {
        function lisno() {}
        return lisno.SESSION_COOKIE_NAME = "ap_93", lisno.PENDING_AUTHENTICATION_COOKIE_NAME = "pend_authn",
        lisno;
    }(), quodos = function() {
        function tetir() {}
        return tetir.setSessionCookie = function() {
            document.cookie = tapet.SESSION_COOKIE_NAME + "=" + new Date().getTime() + ";path=/";
        }, tetir.isSessionCookieSet = function() {
            return -1 !== document.cookie.indexOf(tapet.SESSION_COOKIE_NAME);
        }, tetir.setPendingAuthenticationCookieState = function(ikoth) {
            document.cookie = !0 === ikoth ? tapet.PENDING_AUTHENTICATION_COOKIE_NAME + "= ;expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/" : tapet.PENDING_AUTHENTICATION_COOKIE_NAME + "= ;expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/";
        }, tetir.isPendingAuthenticationCookieSet = function() {
            return -1 !== document.cookie.indexOf(tapet.PENDING_AUTHENTICATION_COOKIE_NAME);
        }, tetir;
    }();
}, function(cona, utust, usuf) {
    "use strict";
    var klosad = usuf(3), subrink = usuf(5), lepes = usuf(26), sceyieg = function() {
        function sina(tuquo) {
            this.TRUE = "true", this.ATTR_VISIBLE = "visible", this.VISIBLE_TRUE = "true", this.MVPD = "mvpd",
            this.MVPD_ID = "id", this.MVPD_LOGO_URL = "logoUrl", this.MVPD_DISPLAY_NAME = "displayName",
            this.MVPD_AUTH_PER_AGGREGATOR = "authPerAggregator", this.MVPD_PASSIVE_AUTHN = "passiveAuthnEnabled",
            this.MVPD_AUTH_PER_BROWER_SESSION = "authPerBrowserSession", this.MVPD_IFRAME_REQUIRED = "iFrameRequired",
            this.MVPD_IFRAME_HEIGHT = "iFrameHeight", this.MVPD_IFRAME_WIDTH = "iFrameWidth",
            this.TEMP_PASS = "tempPass", this.mvpds = null, this.config = tuquo;
        }
        return sina.prototype.getMvpds = function() {
            var moyom = this;
            return this.mvpds || (this.mvpds = [], lepes(subrink.a.getNodes(this.MVPD, this.config), function(doba) {
                var osis = subrink.a.getNodeText(moyom.MVPD_ID, doba), bupa = {
                    id: osis,
                    displayName: moyom.extractMvpdConfig(moyom.MVPD_DISPLAY_NAME, osis, doba, !1),
                    logoUrl: moyom.extractMvpdConfig(moyom.MVPD_LOGO_URL, osis, doba, !1),
                    authPerAggregator: moyom.extractMvpdConfig(moyom.MVPD_AUTH_PER_AGGREGATOR, osis, doba, !0),
                    passiveAuthnEnabled: moyom.extractMvpdConfig(moyom.MVPD_PASSIVE_AUTHN, osis, doba, !0, !0),
                    authPerBrowserSession: moyom.extractMvpdConfig(moyom.MVPD_AUTH_PER_BROWER_SESSION, osis, doba, !0),
                    iFrameRequired: moyom.extractMvpdConfig(moyom.MVPD_IFRAME_REQUIRED, osis, doba, !0),
                    tempPass: subrink.a.getNodeText(moyom.TEMP_PASS, doba).toLowerCase() === moyom.TRUE
                };
                bupa.iFrameRequired && (bupa.iFrameHeight = moyom.extractMvpdConfig(moyom.MVPD_IFRAME_HEIGHT, osis, doba, !1),
                bupa.iFrameWidth = moyom.extractMvpdConfig(moyom.MVPD_IFRAME_WIDTH, osis, doba, !1)),
                moyom.mvpds.push(bupa);
            })), this.mvpds;
        }, sina.prototype.getConfigForProgrammer = function() {
            var opget = null;
            if (this.config && this.config.documentElement) {
                var gliqua = this.config.documentElement.cloneNode(!0);
                if (this.removeNonVisibleNode(gliqua)) if (void 0 !== window.XMLSerializer) try {
                    opget = new XMLSerializer().serializeToString(gliqua);
                } catch (apet) {
                    opget = gliqua.xml;
                } else opget = gliqua.xml;
            }
            return opget;
        }, sina.prototype.removeNonVisibleNode = function(teti) {
            var geldob = !1;
            return teti.getAttribute(this.ATTR_VISIBLE) === this.VISIBLE_TRUE ? (teti.removeAttribute(this.ATTR_VISIBLE),
            geldob = !0) : teti.hasChildNodes() && (geldob = this.removeNonVisibleChildNodes(teti)) && this.removeAttributes(teti),
            geldob;
        }, sina.prototype.removeNonVisibleChildNodes = function(mougi) {
            for (var pechu = !1, quepi = mougi.childNodes, hubip = 0; hubip < quepi.length; hubip++) {
                var coufcoy = quepi[hubip];
                1 === coufcoy.nodeType && (this.removeNonVisibleNode(coufcoy) ? pechu = !0 : (mougi.removeChild(coufcoy),
                hubip--));
            }
            return pechu;
        }, sina.prototype.removeAttributes = function(hienek) {
            for (var juna = hienek.attributes.length - 1; juna >= 0; juna--) {
                var olieg = hienek.attributes.item(juna);
                hienek.removeAttributeNode(olieg);
            }
        }, sina.prototype.extractMvpdConfig = function(bowi, scirklog, nite, nena, nudi) {
            void 0 === nudi && (nudi = null);
            var siga, bemu = klosad.a.clientInfo && klosad.a.clientInfo.getMvpdConfig() ? klosad.a.clientInfo.getMvpdConfig() : {}, menun = null !== bemu[scirklog] && void 0 !== bemu[scirklog] && null !== bemu[scirklog][bowi] && void 0 !== bemu[scirklog][bowi], nojo = subrink.a.getNode(bowi, nite);
            return menun ? (siga = bemu[scirklog][bowi], nojo && (nojo.textContent = siga),
            siga) : null !== (siga = subrink.a.getNodeText(bowi, nite)) && void 0 !== siga && "" !== siga || void 0 === nudi ? nena ? siga === this.TRUE : siga : nudi;
        }, sina;
    }(), bete = usuf(1), pralue = usuf(13), numu = usuf(2), nouged = usuf(8), mutu = usuf(0), gijo = usuf(15), exot = usuf(12), oyed = usuf(10);
    usuf.d(utust, "a", function() {
        return giho;
    });
    var giho = function() {
        function quocu(fema, rogub, swipi) {
            this.initialized = !1, this.authenticationProviderURL = null, this.validRequestor = !1,
            this.configForProgrammer = null, this.instance = this, this.reqID = fema, this.callSetConfig = rogub,
            this.completeHandler = swipi;
        }
        return quocu.prototype.initialize = function(peegof) {
            var bucue = this;
            peegof && Array.isArray(peegof) && peegof.length > 0 && (quocu.serviceProviderURL = peegof[0]),
            quocu.numConfigCalls++, gijo.a.getInstance().get(nouged.b.CONFIG_ENDPOINT_PATH + "/" + this.reqID, {
                noflash: !0
            }, {
                url: quocu.serviceProviderURL,
                dataType: "xml"
            }).then(function(kebam) {
                return bucue.onConfig(kebam.data, kebam.status);
            }, function(mima) {
                return bucue.onConfig(mima.data, mima.status);
            });
        }, quocu.prototype.isValidRequestor = function() {
            return this.validRequestor;
        }, quocu.prototype.getConfigForProgrammer = function() {
            return this.configForProgrammer;
        }, quocu.prototype.retrieveAuthenticationToken = function() {
            this.instance.authenticationProviderURL || (this.instance.authenticationProviderURL = quocu.serviceProviderURL),
            mutu.a.debug("Pending authentication detected..."), new nouged.a(this.instance.authenticationProviderURL, klosad.a.requestorID).retrieveAuthenticationToken(function(pikrue) {
                return klosad.a.getInstance().authnSuccess(pikrue);
            }, function(seyoug, nekoot, sumey, suka) {
                return klosad.a.getInstance().authnError(seyoug, nekoot, sumey, suka);
            });
        }, quocu.prototype.completeInitialization = function() {
            0 !== quocu.numConfigCalls || this.instance.authenticationProviderURL || (mutu.a.debug("Configuration INITIALIZED"),
            this.completeHandler());
        }, quocu.prototype.resetAuthenticationProviderURL = function() {
            this.instance.authenticationProviderURL = null;
        }, quocu.prototype.onConfig = function(tetho, cogo) {
            if (200 !== cogo) {
                if (cogo === bete.a.MISSING_REQUIRED_PREREQUISITES_ERROR_STATUS) return void klosad.a.getInstance().callbackManager.onErrorHandler(tetho);
                if (mutu.a.error("Invalid configuration response: HTTP", cogo), klosad.a.getInstance().callbackManager.onErrorHandler(0 === cogo ? bete.a.SEC420 : bete.a.buildError(bete.a.PREFIX_CFG + cogo)),
                410 === cogo) return void klosad.a.getInstance().callCallback("setAuthenticationStatus", 0, numu.a.SERVER_API_TOO_OLD);
            }
            pralue.a.checkPendingLogout(tetho) && klosad.a.getInstance().ditchTokens(), 200 === cogo && (this.validRequestor = !0);
            var kuehe = 0;
            subrink.a.getNode("time", tetho) && (kuehe = parseInt(subrink.a.getNodeText("time", tetho), 10),
            mutu.a.debug("Server time:", kuehe));
            var stashid = new Date().getTime();
            if (kuehe && kuehe > 0) {
                var briroos = stashid - kuehe;
                (briroos > 59e3 || briroos < -59e3) && klosad.a.getInstance().callbackManager.onErrorHandler(bete.a.CFG100);
            }
            "" === klosad.a.deviceInfo.deviceType && (subrink.a.getNode("device", tetho) && (klosad.a.deviceInfo.deviceType = subrink.a.getNodeText("device", tetho)));
            "" === klosad.a.deviceInfo.clientType && (subrink.a.getNode("clientType", tetho) && (klosad.a.deviceInfo.clientType = subrink.a.getNodeText("clientType", tetho)));
            "" === klosad.a.deviceInfo.os && (subrink.a.getNode("os", tetho) && (klosad.a.deviceInfo.os = subrink.a.getNodeText("os", tetho)));
            var cumir = new sceyieg(tetho), quefe = cumir.getMvpds();
            this.callSetConfig && (this.configForProgrammer = cumir.getConfigForProgrammer());
            for (var brunan = 0, caji = quefe; brunan < caji.length; brunan++) {
                caji[brunan].serviceProvider = quocu.serviceProviderURL;
            }
            exot.a.getInstance().addMvpds(quefe), --quocu.numConfigCalls, !0 !== oyed.a.isPendingAuthenticationCookieSet() || this.instance.authenticationProviderURL ? this.instance.completeInitialization() : (oyed.a.setPendingAuthenticationCookieState(!1),
            this.instance.retrieveAuthenticationToken());
        }, quocu.serviceProviderURL = null, quocu.numConfigCalls = 0, quocu;
    }();
}, function(jicie, kipu, pudir) {
    "use strict";
    pudir.d(kipu, "a", function() {
        return quacu;
    });
    var fleese = pudir(6), utaln = pudir(4), quacu = function() {
        function imur() {
            this.mvpds = {}, this.storageManager = fleese.b.getInstance();
        }
        return imur.getInstance = function() {
            return this.instance || (this.instance = new imur()), this.instance;
        }, imur.prototype.getCurrentSP = function() {
            var laja = null, mifack = this.getCurrentMvpdID();
            mifack && (this.getMVPDByID(mifack) && (laja = this.getMVPDByID(mifack).serviceProvider));
            return laja;
        }, imur.prototype.setCurrentMvpdID = function(toofi) {
            this.switchToCurrentMvpdStorageType(toofi), this.storageManager.clearStorage(toofi !== this.getCurrentMvpdID()),
            this.storageManager.setMvpdID(toofi);
        }, imur.prototype.getCurrentMvpdID = function() {
            return this.storageManager.getMvpdID();
        }, imur.prototype.getRequestorMVPDs = function() {
            return this.mvpds;
        }, imur.prototype.clearRequestorMVPDs = function() {
            this.mvpds = {};
        }, imur.prototype.addMvpds = function(hele) {
            if (hele && hele.length > 0) for (var osan = 0, takug = hele; osan < takug.length; osan++) {
                var lida = takug[osan];
                this.mvpds.hasOwnProperty(lida.id) || (this.mvpds[lida.id] = lida);
            }
        }, imur.prototype.getMVPDByID = function(nicu) {
            return utaln.a.isEmpty(this.mvpds) ? null : this.mvpds.hasOwnProperty(nicu) ? this.mvpds[nicu] : null;
        }, imur.prototype.isValidMVPD = function(siemi) {
            var duthif = this.getMVPDByID(siemi);
            return !!duthif && duthif.id === siemi;
        }, imur.prototype.switchToCurrentMvpdStorageType = function(saza) {
            if (saza) {
                var palof = this.getMVPDByID(saza);
                palof && (palof.authPerBrowserSession ? this.storageManager.switchToSessionStorage() : this.storageManager.switchToLocalStorage());
            }
        }, imur.prototype.getCurrentMvpd = function() {
            var edis = null, jako = this.getCurrentMvpdID();
            return jako && (edis = this.getMVPDByID(jako)), edis;
        }, imur;
    }();
}, function(stienpap, bamo, emid) {
    "use strict";
    emid.d(bamo, "a", function() {
        return vuka;
    });
    var pitiey = emid(5), vuka = function() {
        function tama() {}
        return tama.checkPendingLogout = function(dide) {
            if ("string" == typeof dide) return new RegExp("<pendingLogout.*>(s)*true(s)*</pendingLogout>").test(dide);
            var gusar = !1;
            return pitiey.a.getNode("pendingLogout", dide) && "true" === pitiey.a.getNodeText("pendingLogout", dide) && (gusar = !0),
            gusar;
        }, tama.getPendingLogoutReason = function(nushi) {
            var lojap = null;
            if ("string" == typeof nushi) lojap = (lojap = new RegExp('<pendingLogout reason="(.*)">true</pendingLogout>').exec(nushi))[1] ? lojap[1] : null; else {
                var jipu = pitiey.a.getNode("pendingLogout", nushi);
                jipu && "true" === pitiey.a.getNodeText("pendingLogout", nushi) && (lojap = jipu.attr("reason"));
            }
            return lojap;
        }, tama;
    }();
}, function(quaqui, duke, jolil) {
    "use strict";
    jolil.d(duke, "a", function() {
        return hefor;
    });
    var ateb = new (function() {
        function beboo() {
            this.r20 = /%20/g, this.class2type = {}, this.rbracket = /\[\]$/, this.toString = this.class2type.toString;
        }
        return beboo.prototype.type = function(supo) {
            return null == supo ? supo + "" : "object" == typeof supo || "function" == typeof supo ? this.class2type[this.toString.call(supo)] || "object" : typeof supo;
        }, beboo.prototype.isFunction = function(upep) {
            return "function" === this.type(upep);
        }, beboo.prototype.buildParams = function(steyub, scigath, gonue) {
            var puetum, saqua, hetu;
            if (Array.isArray(scigath)) for (saqua in scigath) scigath.hasOwnProperty(saqua) && (hetu = scigath[saqua],
            this.rbracket.test(steyub) ? gonue(steyub, hetu) : this.buildParams(steyub + "[" + ("object" == typeof hetu ? saqua : "") + "]", hetu, gonue)); else if ("object" === this.type(scigath)) for (puetum in scigath) scigath.hasOwnProperty(puetum) && this.buildParams(steyub + "[" + puetum + "]", scigath[puetum], gonue); else gonue(steyub, scigath);
        }, beboo;
    }())(), hefor = function() {
        function koji() {}
        return koji.param = function(opol, quoxus) {
            var quewe, lare;
            void 0 === quoxus && (quoxus = !1);
            var fino = [], poofak = function(pudig, duge) {
                duge = ateb.isFunction(duge) ? duge() : null == duge ? "" : duge, fino[fino.length] = encodeURIComponent(pudig) + "=" + encodeURIComponent(duge);
            };
            if (Array.isArray(opol)) for (lare in opol) opol.hasOwnProperty(lare) && poofak(lare, opol[lare]); else for (quewe in opol) opol.hasOwnProperty(quewe) && ateb.buildParams(quewe, opol[quewe], poofak);
            var raboor = fino.join("&").replace(ateb.r20, "+");
            return quoxus && (raboor = raboor.replace(/%5B%5D/g, "")), raboor;
        }, koji;
    }();
}, function(gugu, marim, disu) {
    "use strict";
    disu.d(marim, "a", function() {
        return juqui;
    });
    var tashal = disu(7), mufouk = disu(3), juqui = function() {
        function heebo() {
            this.ajaxReference = tashal.a;
        }
        return heebo.getInstance = function() {
            return this.instance || (this.instance = new heebo()), this.instance;
        }, heebo.prototype.ajax = function(opid, esif, coner) {
            var ladron, sisu = this;
            return void 0 === coner && (coner = {}), new Promise(function(rumo, fruere) {
                mufouk.a.getInstance().getService().getRequiredHeaders(opid).then(function(quehol) {
                    ladron = new sisu.ajaxReference({
                        type: coner.method || "GET",
                        url: "" + coner.url + notoop,
                        data: esif,
                        dataType: coner.dataType || "json",
                        success: function(quegbob, jothue, omop) {
                            rumo({
                                data: quegbob,
                                status: jothue,
                                headers: omop && omop.responseHeaders ? omop.responseHeaders : []
                            });
                        },
                        error: function(cebe, koufla) {
                            fruere({
                                data: cebe,
                                status: koufla
                            });
                        },
                        headers: quehol,
                        context: coner.context || sisu
                    });
                    try {
                        ladron.send();
                    } catch (notoop) {
                        fruere(notoop);
                    }
                }, function(tosi) {
                    fruere(tosi);
                });
            });
        }, heebo.prototype.post = function(deyoo, dafi, baquet) {
            return void 0 === baquet && (baquet = {}), baquet.method = "POST", this.ajax(deyoo, dafi, baquet);
        }, heebo.prototype.get = function(tubul, dielo, hidi) {
            return void 0 === dielo && (dielo = {}), void 0 === hidi && (hidi = {}), hidi.method = "GET",
            this.ajax(tubul, dielo, hidi);
        }, heebo.prototype.delete = function(mueru, jipri, ofstiel) {
            return void 0 === jipri && (jipri = {}), void 0 === ofstiel && (ofstiel = {}), ofstiel.method = "DELETE",
            this.ajax(mueru, jipri, ofstiel);
        }, heebo.prototype.put = function(sice, ulnum, cekloy) {
            return void 0 === cekloy && (cekloy = {}), cekloy.method = "PUT", this.ajax(sice, ulnum, cekloy);
        }, heebo;
    }();
}, function(nugi, nuebi, zoquoy) {
    "use strict";
    var dibon = zoquoy(6), quepa = zoquoy(1), lofu = zoquoy(2), ertob = zoquoy(0), dalo = zoquoy(24), imom = function() {
        function kake() {
            this.defaultFingerprint = dalo(navigator.userAgent);
        }
        return kake.getInstance = function() {
            return this.instance || (this.instance = new kake()), this.instance;
        }, kake.prototype.getFingerprint = function() {
            var nofi = this;
            return new Promise(function(klunnorn) {
                Promise.all([ zoquoy.e(0), zoquoy.e(1) ]).then(function() {
                    try {
                        document.write(tukad)(new (0, tukad(36).Fingerprint)()).get(function(kudu) {
                            document.write(tukad);
                            ertob.a.debug("Fingerprinting result ", kudu), klunnorn(kudu);
                        });
                    } catch (tukad) {
                        ertob.a.error("Error calculating fingerprint!", tukad), klunnorn(nofi.defaultFingerprint);
                    }
                }.bind(null, zoquoy)).catch(function(quufu) {
                    ertob.a.error("Error loading fingerprint library", quufu), ertob.a.error("Using default fingerprinting value ", nofi.defaultFingerprint),
                    klunnorn(nofi.defaultFingerprint);
                });
            });
        }, kake;
    }(), suke = zoquoy(15), gusa = zoquoy(11), hoftey = zoquoy(8), nemi = zoquoy(17), kame = function() {
        function lomo() {
            this.INDIVIDUALIZATION_DEVICE_ID_KEY = "deviceId", this.REQUIRED_INDIVIDUALIZATION_KEYS = [ this.INDIVIDUALIZATION_DEVICE_ID_KEY ],
            this.fingerprintService = imom.getInstance(), this.httpService = suke.a.getInstance();
        }
        return lomo.prototype.getIndividualizationData = function() {
            var nokip = this;
            return new Promise(function(biesa, fason) {
                nokip.fingerprintService.getFingerprint().then(function(jiejo) {
                    nokip.httpService.post(hoftey.b.INDIVIDUALIZATION_ENDPOINT_PATH, {
                        fingerprint: jiejo
                    }, {
                        url: new nemi(gusa.a.serviceProviderURL, null, !0).origin
                    }).then(function(pica) {
                        try {
                            for (var ligu = JSON.parse(pica.data), aloey = 0, fali = perir.REQUIRED_INDIVIDUALIZATION_KEYS; aloey < fali.length; aloey++) if (!ligu[fali[aloey]]) return void fason(quepa.a.IS2XX("" + quepa.a.PREFIX_IS + pica.status, lofu.a.MISSING_INDIVIDUALIZATION_KEY_ERROR));
                            biesa({
                                iid: ligu[perir.INDIVIDUALIZATION_DEVICE_ID_KEY],
                                sfp: pica.headers.pass_sfp
                            });
                        } catch (perir) {
                            fason(quepa.a.IS2XX("" + quepa.a.PREFIX_IS + pica.status, lofu.a.INVALID_INDIVIDUALIZATION_DATA_ERROR));
                        }
                    }, function(huker) {
                        fason(quepa.a.buildError("" + quepa.a.PREFIX_IS + huker.status));
                    });
                });
            });
        }, lomo;
    }();
    zoquoy.d(nuebi, "a", function() {
        return proucla;
    });
    var proucla = function() {
        function dibueb() {
            this.storageManager = dibon.b.getInstance(), this.individualizationService = new kame();
        }
        return dibueb.getInstance = function() {
            return this.instance || (this.instance = new dibueb()), this.instance;
        }, dibueb.prototype.getDeviceInfo = function() {
            return {
                ap_42: navigator.vendor ? navigator.vendor : "anonymous",
                ap_11: navigator.platform,
                ap_z: navigator.userAgent
            };
        }, dibueb.prototype.getDeviceId = function() {
            var bonu = this;
            return new Promise(function(nape, libe) {
                var urab = bonu.storageManager.getDeviceId();
                urab ? nape(urab) : bonu.individualizationService.getIndividualizationData().then(function(dona) {
                    bonu.storageManager.setDeviceId(dona.iid), bonu.storageManager.setSFP(dona.sfp),
                    nape(dona.iid);
                }, function(retit) {
                    libe(retit);
                });
            });
        }, dibueb;
    }();
}, function(nopro, jooha, miso) {
    "use strict";
    (function(drukaf) {
        var sabe = miso(28), pocee = miso(27), hiefo = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i, diluk = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, daso = [ [ "#", "hash" ], [ "?", "query" ], [ "/", "pathname" ], [ "@", "auth", 1 ], [ NaN, "host", void 0, 1, 1 ], [ /:(\d+)$/, "port", void 0, 1 ], [ NaN, "hostname", void 0, 1, 1 ] ], quascek = {
            hash: 1,
            query: 1
        };
        function echbod(mutree) {
            var gase, gagoo = drukaf && drukaf.location || {}, kosa = {}, stoper = typeof (mutree = mutree || gagoo);
            if ("blob:" === mutree.protocol) kosa = new gere(unescape(mutree.pathname), {}); else if ("string" === stoper) for (gase in kosa = new gere(mutree, {}),
            quascek) delete kosa[gase]; else if ("object" === stoper) {
                for (gase in mutree) gase in quascek || (kosa[gase] = mutree[gase]);
                void 0 === kosa.slashes && (kosa.slashes = diluk.test(mutree.href));
            }
            return kosa;
        }
        function muro(vica) {
            var jickad = hiefo.exec(vica);
            return {
                protocol: jickad[1] ? jickad[1].toLowerCase() : "",
                slashes: !!jickad[2],
                rest: jickad[3]
            };
        }
        function gere(nuthe, kriega, fare) {
            if (!(this instanceof gere)) return new gere(nuthe, kriega, fare);
            var daqui, dubot, agal, jogo, ciklaf, ritie, siega = daso.slice(), hueyun = typeof kriega, slebu = this, nekog = 0;
            for ("object" !== hueyun && "string" !== hueyun && (fare = kriega, kriega = null),
            fare && "function" != typeof fare && (fare = pocee.parse), kriega = echbod(kriega),
            daqui = !(dubot = muro(nuthe || "")).protocol && !dubot.slashes, slebu.slashes = dubot.slashes || daqui && kriega.slashes,
            slebu.protocol = dubot.protocol || kriega.protocol || "", nuthe = dubot.rest, dubot.slashes || (siega[2] = [ /(.*)/, "pathname" ]); nekog < siega.length; nekog++) agal = (jogo = siega[nekog])[0],
            ritie = jogo[1], agal != agal ? slebu[ritie] = nuthe : "string" == typeof agal ? ~(ciklaf = nuthe.indexOf(agal)) && ("number" == typeof jogo[2] ? (slebu[ritie] = nuthe.slice(0, ciklaf),
            nuthe = nuthe.slice(ciklaf + jogo[2])) : (slebu[ritie] = nuthe.slice(ciklaf), nuthe = nuthe.slice(0, ciklaf))) : (ciklaf = agal.exec(nuthe)) && (slebu[ritie] = ciklaf[1],
            nuthe = nuthe.slice(0, ciklaf.index)), slebu[ritie] = slebu[ritie] || daqui && jogo[3] && kriega[ritie] || "",
            jogo[4] && (slebu[ritie] = slebu[ritie].toLowerCase());
            fare && (slebu.query = fare(slebu.query)), daqui && kriega.slashes && "/" !== slebu.pathname.charAt(0) && ("" !== slebu.pathname || "" !== kriega.pathname) && (slebu.pathname = function(tola, sebo) {
                for (var reko = (sebo || "/").split("/").slice(0, -1).concat(tola.split("/")), cupet = reko.length, pegam = reko[cupet - 1], grurol = !1, rata = 0; cupet--; ) "." === reko[cupet] ? reko.splice(cupet, 1) : ".." === reko[cupet] ? (reko.splice(cupet, 1),
                rata++) : rata && (0 === cupet && (grurol = !0), reko.splice(cupet, 1), rata--);
                return grurol && reko.unshift(""), "." !== pegam && ".." !== pegam || reko.push(""),
                reko.join("/");
            }(slebu.pathname, kriega.pathname)), sabe(slebu.port, slebu.protocol) || (slebu.host = slebu.hostname,
            slebu.port = ""), slebu.username = slebu.password = "", slebu.auth && (jogo = slebu.auth.split(":"),
            slebu.username = jogo[0] || "", slebu.password = jogo[1] || ""), slebu.origin = slebu.protocol && slebu.host && "file:" !== slebu.protocol ? slebu.protocol + "//" + slebu.host : "null",
            slebu.href = slebu.toString();
        }
        gere.prototype = {
            set: function(cibli, kukey, dregin) {
                var noopoy = this;
                switch (cibli) {
                  case "query":
                    "string" == typeof kukey && kukey.length && (kukey = (dregin || pocee.parse)(kukey)),
                    noopoy[cibli] = kukey;
                    break;

                  case "port":
                    noopoy[cibli] = kukey, sabe(kukey, noopoy.protocol) ? kukey && (noopoy.host = noopoy.hostname + ":" + kukey) : (noopoy.host = noopoy.hostname,
                    noopoy[cibli] = "");
                    break;

                  case "hostname":
                    noopoy[cibli] = kukey, noopoy.port && (kukey += ":" + noopoy.port), noopoy.host = kukey;
                    break;

                  case "host":
                    noopoy[cibli] = kukey, /:\d+$/.test(kukey) ? (kukey = kukey.split(":"), noopoy.port = kukey.pop(),
                    noopoy.hostname = kukey.join(":")) : (noopoy.hostname = kukey, noopoy.port = "");
                    break;

                  case "protocol":
                    noopoy.protocol = kukey.toLowerCase(), noopoy.slashes = !dregin;
                    break;

                  case "pathname":
                  case "hash":
                    if (kukey) {
                        var giqui = "pathname" === cibli ? "/" : "#";
                        noopoy[cibli] = kukey.charAt(0) !== giqui ? giqui + kukey : kukey;
                    } else noopoy[cibli] = kukey;
                    break;

                  default:
                    noopoy[cibli] = kukey;
                }
                for (var rihe = 0; rihe < daso.length; rihe++) {
                    var quetoosh = daso[rihe];
                    quetoosh[4] && (noopoy[quetoosh[1]] = noopoy[quetoosh[1]].toLowerCase());
                }
                return noopoy.origin = noopoy.protocol && noopoy.host && "file:" !== noopoy.protocol ? noopoy.protocol + "//" + noopoy.host : "null",
                noopoy.href = noopoy.toString(), noopoy;
            },
            toString: function(quija) {
                quija && "function" == typeof quija || (quija = pocee.stringify);
                var humek, sede = this, jinan = sede.protocol;
                jinan && ":" !== jinan.charAt(jinan.length - 1) && (jinan += ":");
                var hornroun = jinan + (sede.slashes ? "//" : "");
                return sede.username && (hornroun += sede.username, sede.password && (hornroun += ":" + sede.password),
                hornroun += "@"), hornroun += sede.host + sede.pathname, (humek = "object" == typeof sede.query ? quija(sede.query) : sede.query) && (hornroun += "?" !== humek.charAt(0) ? "?" + humek : humek),
                sede.hash && (hornroun += sede.hash), hornroun;
            }
        }, gere.extractProtocol = muro, gere.location = echbod, gere.qs = pocee, nopro.exports = gere;
    }).call(this, miso(25));
}, function(doubu, batie, nema) {
    "use strict";
    nema.d(batie, "a", function() {
        return bifof;
    });
    var dula = nema(0), usay = nema(7), erlum = nema(4), isos = nema(10), bifof = function() {
        function fetteg(ifur, ponu) {
            void 0 === ifur && (ifur = null), void 0 === ponu && (ponu = parent), this.handlers = {},
            this.url = ifur, this.target = ponu, this.handlers = {};
        }
        return fetteg.prototype.postMessage = function(luege) {
            this.target.postMessage(luege, this.url.replace(/([^:]+:\/\/[^\/]+).*/, "$1"));
        }, fetteg.prototype.postAjax = function(dreyhoun) {
            var dego = this;
            return new Promise(function(anin) {
                try {
                    var deki = erlum.a.extend({}, etkal);
                    deki.proxyRequest = !1, deki.proxyResponse = !0, delete deki.context, delete deki.success,
                    delete deki.error;
                    var cohud = "c.a.p.pm.xhr." + dego.getOpId();
                    dego.addEventListener(cohud, function(bato) {
                        bato.data.id === cohud && (dula.a.debug("Proxy response event message received: ", bato),
                        dego.removeEventListener(bato.data.id), anin(bato.data));
                    });
                    var ladu = {
                        id: cohud,
                        payload: deki
                    };
                    dula.a.debug("Sending proxy request event message: ", ladu), dego.postMessage(ladu);
                } catch (etkal) {
                    dula.a.error(etkal), anin({
                        error: etkal.toString()
                    });
                }
            });
        }, fetteg.prototype.postStorage = function(nitul) {
            for (var dayoon = this, nido = [], nihe = 1; nihe < arguments.length; nihe++) nido[nihe - 1] = arguments[nihe];
            return new Promise(function(bapee) {
                try {
                    var leque = "c.a.p.pm.s." + dayoon.getOpId();
                    dayoon.addEventListener(leque, function(reroog) {
                        reroog.data.id === leque && (dayoon.removeEventListener(reroog.data.id), bapee(reroog.data.result));
                    });
                    var histri = {
                        id: leque,
                        operation: dotue,
                        params: nido
                    };
                    dayoon.postMessage(histri);
                } catch (dotue) {
                    dula.a.error(dotue), bapee();
                }
            });
        }, fetteg.prototype.handleAjax = function() {
            var vega = this;
            this.addEventListener("ajax", function(soret) {
                if (soret && soret.data && soret.data.id && 0 === soret.data.id.indexOf("c.a.p.pm.xhr.")) {
                    var nifo = soret.data.payload;
                    nifo.success = nifo.error = function(nobu, dakos, grufi) {
                        var mocie = {
                            id: soret.data.id,
                            status: dakos,
                            data: nobu,
                            xhr: grufi
                        };
                        dula.a.debug("Sending proxy response event message: ", mocie), ufiel.postMessage(mocie);
                    };
                    try {
                        dula.a.debug("Handling proxy request event message: ", soret), new usay.a(nifo).send();
                    } catch (ufiel) {
                        dula.a.error(ufiel);
                    }
                }
            });
        }, fetteg.prototype.handleStorage = function() {
            var hiduck = this;
            this.addEventListener("storage", function(ziri) {
                if (ziri && ziri.data && ziri.data.id && 0 === ziri.data.id.indexOf("c.a.p.pm.s.") && ziri.data.operation && ziri.data.params) {
                    var kapol = {
                        id: ziri.data.id
                    }, gesub = ziri.data.params;
                    switch (ziri.data.operation) {
                      case "getItems":
                        if (kapol.result = {}, hiduck.isLocalStorageSpaceEnabled()) for (var cunue = 0, bare = gesub; cunue < bare.length; cunue++) {
                            var jefak = bare[cunue], swoupi = localStorage.getItem(jefak);
                            null !== swoupi && (kapol.result[jefak] = swoupi);
                        } else kapol.result.error = !0, dula.a.debug("Web localStorage is not available for 3rd parties for read operations");
                        break;

                      case "setItem":
                        hiduck.isLocalStorageSpaceEnabled() ? 2 === gesub.length ? localStorage.setItem(gesub[0], gesub[1]) : dula.a.error("Did not receive valid data to write!", gesub) : dula.a.debug("Web localStorage is not available for 3rd parties for write operations");
                        break;

                      case "isSessionCookieSet":
                        kapol.result = {
                            isSessionCookieSet: isos.a.isSessionCookieSet()
                        };
                        break;

                      case "setSessionCookie":
                        isos.a.setSessionCookie();
                        break;

                      default:
                        dula.a.error("Unsupported storage operation: ", ziri.data.operation);
                    }
                    hiduck.postMessage(kapol);
                }
            });
        }, fetteg.prototype.addEventListener = function(otof, tenue) {
            this.handlers[otof] = tenue, window.addEventListener("message", tenue, !1);
        }, fetteg.prototype.removeEventListener = function(snite) {
            window.removeEventListener("message", this.handlers[snite], !1), delete this.handlers[snite];
        }, fetteg.prototype.getOpId = function() {
            return fetteg.opSeq > 1e3 && (fetteg.opSeq = 0), +new Date() + "." + fetteg.opSeq++;
        }, fetteg.prototype.isLocalStorageSpaceEnabled = function() {
            try {
                return localStorage.setItem("canWrite", "test"), localStorage.removeItem("canWrite"),
                !0;
            } catch (fifu) {
                return !1;
            }
        }, fetteg.opSeq = 0, fetteg;
    }();
}, function(letud, bostax, engop) {
    "use strict";
    engop.d(bostax, "b", function() {
        return orof;
    }), engop.d(bostax, "a", function() {
        return tala;
    });
    var baga = engop(0), orof = function() {
        function swuto() {}
        return swuto.CLIENT_CREDENTIALS = "client_credentials", swuto;
    }(), gelo = function() {
        function deta() {}
        return deta.CLIENT_ID = "client_id", deta.CLIENT_SECRET = "client_secret", deta.GRANT_TYPES = "grant_types",
        deta.REDIRECT_URI = "redirect_uris", deta.CREATED_AT = "client_id_issued_at", deta;
    }(), tala = function() {
        function etog(vehim) {
            if (this.clientId = null, this.clientSecret = null, this.grantTypes = null, this.redirectURI = null,
            this.createdAt = null, vehim) try {
                var guru = JSON.parse(vehim);
                this.clientId = guru[gelo.CLIENT_ID], this.clientSecret = guru[gelo.CLIENT_SECRET],
                this.grantTypes = guru[gelo.GRANT_TYPES], this.redirectURI = guru[gelo.REDIRECT_URI],
                this.createdAt = guru[gelo.CREATED_AT];
            } catch (vehim) {
                baga.a.error("Application registration response data has invalid JSON format!");
            }
        }
        return etog.prototype.getClientId = function() {
            return this.clientId;
        }, etog.prototype.getClientSecret = function() {
            return this.clientSecret;
        }, etog.prototype.isValid = function() {
            return this && null != this.clientId && null != this.clientSecret && null != this.grantTypes && null != this.redirectURI && null != this.createdAt;
        }, etog.prototype.copyFromJSONObject = function(jesre) {
            for (var quesag in jesre) jesre.hasOwnProperty(quesag) && (this[quesag] = jesre[quesag]);
        }, etog;
    }();
}, function(lihu, bucu, jafo) {
    "use strict";
    jafo.d(bucu, "a", function() {
        return geheeg;
    });
    var flakeb = jafo(15), izol = jafo(6), kaswo = jafo(22), nuscay = jafo(19), drakhey = jafo(3), blekue = jafo(11), rodie = jafo(8), laquich = jafo(1), krocue = jafo(17), geheeg = function() {
        function glire() {
            this.httpService = flakeb.a.getInstance(), this.storageManager = izol.b.getInstance();
        }
        return glire.getInstance = function() {
            return this.instance || (this.instance = new glire()), this.instance;
        }, glire.prototype.obtainAccessToken = function() {
            var duepab = this;
            return new Promise(function(scapdup, jadoo) {
                var gokuk = duepab.storageManager.getAccessToken();
                null != gokuk ? scapdup(gokuk) : duepab.obtainApplicationRegistration().then(function(osuet) {
                    duepab.retrieveAccessToken(osuet).then(function(wira) {
                        scapdup(wira);
                    }, function(sibos) {
                        jadoo(sibos);
                    });
                }, function(swihur) {
                    jadoo(swihur);
                });
            });
        }, glire.prototype.obtainApplicationRegistration = function() {
            var nonith = this;
            return new Promise(function(muquo, tesla) {
                var froli = nonith.storageManager.getApplicationRegistration();
                null != froli ? muquo(froli) : nonith.retrieveApplicationRegistration().then(function(yed) {
                    muquo(yed);
                }, function(joupey) {
                    tesla(joupey);
                });
            });
        }, glire.prototype.retrieveAccessToken = function(tenobbey) {
            var kaxostuze = this;
            return new Promise(function(jafotern, nookukou) {
                kaxostuze.httpService.post(rodie.b.ACCESS_TOKEN_ENDPOINT_PATH, {
                    grant_type: nuscay.b.CLIENT_CREDENTIALS,
                    client_id: tenobbey.getClientId(),
                    client_secret: tenobbey.getClientSecret()
                }, {
                    url: new krocue(blekue.a.serviceProviderURL, null, !0).origin,
                    dataType: "application/x-www-form-urlencoded"
                }).then(function(noduto) {
                    var pakarnuf = new kaswo.a(noduto.data);
                    kaxostuze.storageManager.setAccessToken(pakarnuf), jafotern(pakarnuf);
                }, function() {
                    glire.RETRY_RETRIEVING_ACCESS_TOKEN ? (glire.RETRY_RETRIEVING_ACCESS_TOKEN = !1,
                    kaxostuze.retrieveApplicationRegistration().then(function(husele) {
                        kaxostuze.retrieveAccessToken(husele).then(function(mimupru) {
                            jafotern(mimupru);
                        }, function(hiraho) {
                            nookukou(hiraho);
                        });
                    }, function(denibpil) {
                        nookukou(denibpil);
                    })) : nookukou(laquich.a.R401);
                });
            });
        }, glire.prototype.retrieveApplicationRegistration = function() {
            var quisomos = this;
            return new Promise(function(esiteb, sropogi) {
                quisomos.httpService.post(rodie.b.CLIENT_REGISTRATION_ENDPOINT_PATH, {
                    software_statement: drakhey.a.getInstance().getSoftwareStatement()
                }, {
                    url: new krocue(blekue.a.serviceProviderURL, null, !0).origin,
                    dataType: "json"
                }).then(function(strikeka) {
                    var eyosoong = new nuscay.a(strikeka.data);
                    quisomos.storageManager.setApplicationRegistration(eyosoong), esiteb(eyosoong);
                }, function() {
                    glire.RETRY_RETRIEVING_APPLICATION_REGISTRATION ? (glire.RETRY_RETRIEVING_APPLICATION_REGISTRATION = !1,
                    quisomos.retrieveApplicationRegistration().then(function(ebienef) {
                        esiteb(ebienef);
                    }, function(ditquefip) {
                        sropogi(ditquefip);
                    })) : sropogi(laquich.a.R400);
                });
            });
        }, glire.RETRY_RETRIEVING_ACCESS_TOKEN = !0, glire.RETRY_RETRIEVING_APPLICATION_REGISTRATION = !0,
        glire;
    }();
}, function(queplaho, cessogest, quocuka) {
    "use strict";
    quocuka.d(cessogest, "a", function() {
        return abumum;
    });
    var sloscidor = quocuka(0), ebrukob = function() {
        function huplogut() {}
        return huplogut.ID = "id", huplogut.CODE = "code", huplogut.REQUESTOR = "requestor",
        huplogut.MVPD = "mvpd", huplogut.GENERATED = "generated", huplogut.EXPIRES = "expires",
        huplogut.INFO = "info", huplogut;
    }(), abumum = function() {
        function sefeskuck(achathet) {
            if (this.id = null, this.code = null, this.requestor = null, this.mvpd = null, this.generated = null,
            this.expires = null, this.info = null, achathet) try {
                var ogimag = JSON.parse(achathet);
                this.id = ogimag[ebrukob.ID], this.code = ogimag[ebrukob.CODE], this.requestor = ogimag[ebrukob.REQUESTOR],
                this.mvpd = ogimag[ebrukob.MVPD], this.generated = ogimag[ebrukob.GENERATED], this.expires = ogimag[ebrukob.EXPIRES],
                this.info = ogimag[ebrukob.INFO];
            } catch (achathet) {
                sloscidor.a.error("Registration Code response data has invalid JSON format!");
            }
        }
        return sefeskuck.prototype.getCode = function() {
            return this.code;
        }, sefeskuck.prototype.isValid = function() {
            return this && null != this.id && null != this.code && null != this.requestor && null == this.mvpd && null != this.generated && null != this.expires && null != this.info && new Date().getTime() < this.expires;
        }, sefeskuck.prototype.copyFromJSONObject = function(reswiquer) {
            for (var nakihi in reswiquer) reswiquer.hasOwnProperty(nakihi) && (this[nakihi] = reswiquer[nakihi]);
        }, sefeskuck;
    }();
}, function(quepuhu, muhaques, punehue) {
    "use strict";
    punehue.d(muhaques, "a", function() {
        return slepilo;
    });
    var kugulcob = punehue(0), bipeteg = function() {
        function katupal() {}
        return katupal.ACCESS_TOKEN = "access_token", katupal.EXPIRES_IN = "expires_in",
        katupal.TOKEN_TYPE = "token_type", katupal.CREATED_AT = "created_at", katupal;
    }(), slepilo = function() {
        function emefur(gruleni) {
            if (this.accessToken = null, this.expiresIn = null, this.tokenType = null, this.createdAt = null,
            gruleni) try {
                var sifabax = JSON.parse(gruleni);
                this.accessToken = sifabax[bipeteg.ACCESS_TOKEN], this.expiresIn = sifabax[bipeteg.EXPIRES_IN],
                this.tokenType = sifabax[bipeteg.TOKEN_TYPE], this.createdAt = sifabax[bipeteg.CREATED_AT];
            } catch (gruleni) {
                kugulcob.a.error("Access token response data has invalid JSON format!");
            }
        }
        return emefur.prototype.getAccessToken = function() {
            return this.accessToken;
        }, emefur.prototype.isValid = function() {
            return this && null != this.accessToken && null != this.tokenType && null != this.createdAt && null != this.expiresIn && new Date().getTime() < this.createdAt + 1e3 * this.expiresIn;
        }, emefur.prototype.copyFromJSONObject = function(barasoob) {
            for (var gogigjal in barasoob) barasoob.hasOwnProperty(gogigjal) && (this[gogigjal] = barasoob[gogigjal]);
        }, emefur;
    }();
}, function(mesloqui, boufogask, bobecoy) {
    "use strict";
    bobecoy.d(boufogask, "a", function() {
        return sigaka;
    });
    var sigaka = function() {
        function coslenee() {}
        return coslenee.get = function() {
            var ilagmig = this.findScript(document.getElementsByTagName("script"));
            return !ilagmig && window.$ && (ilagmig = this.findScript($("script"))), ilagmig || (ilagmig = this.findUsingStacktraces()),
            ilagmig && ilagmig.length > 0 ? ilagmig : this.DEFAULT_SCRIPT_URL;
        }, coslenee.findScript = function(akobof) {
            for (var geyigap, bebutuze = new RegExp("(.*)AccessEnabler.js(.*)"), dequegi = 0, kriesekup = akobof; dequegi < kriesekup.length; dequegi++) {
                var dehoca = kriesekup[dequegi];
                if (dehoca.src && dehoca.src.match(bebutuze)) {
                    geyigap = dehoca.src;
                    break;
                }
            }
            return geyigap;
        }, coslenee.findUsingStacktraces = function() {
            var efafun, nikeehi = function(obgurup, luhibe) {
                efafun = luhibe;
            };
            try {
                throw new Error();
            } catch (sroogriejo) {
                return "AccessEnabler.js" in sroogriejo ? efafun = sroogriejo["AccessEnabler.js"] : "stacktrace" in sroogriejo ? sroogriejo.stacktrace.replace(/called from line \d+, column \d+ in (.*):/gm, nikeehi) : "stack" in sroogriejo && sroogriejo.stack.replace(/at.*?\(?(\S+):\d+:\d+\)?$/g, nikeehi),
                efafun;
            }
        }, coslenee.DEFAULT_SCRIPT_URL = "https://entitlement.auth.adobe.com/entitlement/AccessEnabler.js",
        coslenee;
    }();
}, function(abimon, gurila, sozoto) {
    var meeposwi;
    !function(younalep) {
        "use strict";
        function toneso(kejeja, lipustre) {
            var cascutin = (65535 & kejeja) + (65535 & lipustre);
            return (kejeja >> 16) + (lipustre >> 16) + (cascutin >> 16) << 16 | 65535 & cascutin;
        }
        function drapefout(querahak, eyoupquith, lotequa, yalousoo, quaswirom, odefouk) {
            return toneso((donade = toneso(toneso(eyoupquith, querahak), toneso(yalousoo, odefouk))) << (rueluto = quaswirom) | donade >>> 32 - rueluto, lotequa);
            var donade, rueluto;
        }
        function reeciqua(queracue, mutrelo, inomief, nusnoudid, quiprasu, bomeked, memije) {
            return drapefout(mutrelo & inomief | ~mutrelo & nusnoudid, queracue, mutrelo, quiprasu, bomeked, memije);
        }
        function lamubcug(baquehu, asungjup, huraso, aparal, ceigokam, queslefo, kumatu) {
            return drapefout(asungjup & aparal | huraso & ~aparal, baquehu, asungjup, ceigokam, queslefo, kumatu);
        }
        function quejubol(esasob, susuebu, jinikig, umashoom, fukusa, grofarib, regoga) {
            return drapefout(susuebu ^ jinikig ^ umashoom, esasob, susuebu, fukusa, grofarib, regoga);
        }
        function flohalal(dilistan, clorehi, leplisi, tafadum, pogeykud, jotieting, pruehobo) {
            return drapefout(leplisi ^ (clorehi | ~tafadum), dilistan, clorehi, pogeykud, jotieting, pruehobo);
        }
        function mefrafa(jorscyem, clipenak) {
            var cosoqueg, meyirnuf, enudod, niepofab, bonuegaln;
            jorscyem[clipenak >> 5] |= 128 << clipenak % 32, jorscyem[14 + (clipenak + 64 >>> 9 << 4)] = clipenak;
            var lejessuet = 1732584193, jowafo = -271733879, fenabom = -1732584194, hacasu = 271733878;
            for (cosoqueg = 0; cosoqueg < jorscyem.length; cosoqueg += 16) meyirnuf = lejessuet,
            enudod = jowafo, niepofab = fenabom, bonuegaln = hacasu, jowafo = flohalal(jowafo = flohalal(jowafo = flohalal(jowafo = flohalal(jowafo = quejubol(jowafo = quejubol(jowafo = quejubol(jowafo = quejubol(jowafo = lamubcug(jowafo = lamubcug(jowafo = lamubcug(jowafo = lamubcug(jowafo = reeciqua(jowafo = reeciqua(jowafo = reeciqua(jowafo = reeciqua(jowafo, fenabom = reeciqua(fenabom, hacasu = reeciqua(hacasu, lejessuet = reeciqua(lejessuet, jowafo, fenabom, hacasu, jorscyem[cosoqueg], 7, -680876936), jowafo, fenabom, jorscyem[cosoqueg + 1], 12, -389564586), lejessuet, jowafo, jorscyem[cosoqueg + 2], 17, 606105819), hacasu, lejessuet, jorscyem[cosoqueg + 3], 22, -1044525330), fenabom = reeciqua(fenabom, hacasu = reeciqua(hacasu, lejessuet = reeciqua(lejessuet, jowafo, fenabom, hacasu, jorscyem[cosoqueg + 4], 7, -176418897), jowafo, fenabom, jorscyem[cosoqueg + 5], 12, 1200080426), lejessuet, jowafo, jorscyem[cosoqueg + 6], 17, -1473231341), hacasu, lejessuet, jorscyem[cosoqueg + 7], 22, -45705983), fenabom = reeciqua(fenabom, hacasu = reeciqua(hacasu, lejessuet = reeciqua(lejessuet, jowafo, fenabom, hacasu, jorscyem[cosoqueg + 8], 7, 1770035416), jowafo, fenabom, jorscyem[cosoqueg + 9], 12, -1958414417), lejessuet, jowafo, jorscyem[cosoqueg + 10], 17, -42063), hacasu, lejessuet, jorscyem[cosoqueg + 11], 22, -1990404162), fenabom = reeciqua(fenabom, hacasu = reeciqua(hacasu, lejessuet = reeciqua(lejessuet, jowafo, fenabom, hacasu, jorscyem[cosoqueg + 12], 7, 1804603682), jowafo, fenabom, jorscyem[cosoqueg + 13], 12, -40341101), lejessuet, jowafo, jorscyem[cosoqueg + 14], 17, -1502002290), hacasu, lejessuet, jorscyem[cosoqueg + 15], 22, 1236535329), fenabom = lamubcug(fenabom, hacasu = lamubcug(hacasu, lejessuet = lamubcug(lejessuet, jowafo, fenabom, hacasu, jorscyem[cosoqueg + 1], 5, -165796510), jowafo, fenabom, jorscyem[cosoqueg + 6], 9, -1069501632), lejessuet, jowafo, jorscyem[cosoqueg + 11], 14, 643717713), hacasu, lejessuet, jorscyem[cosoqueg], 20, -373897302), fenabom = lamubcug(fenabom, hacasu = lamubcug(hacasu, lejessuet = lamubcug(lejessuet, jowafo, fenabom, hacasu, jorscyem[cosoqueg + 5], 5, -701558691), jowafo, fenabom, jorscyem[cosoqueg + 10], 9, 38016083), lejessuet, jowafo, jorscyem[cosoqueg + 15], 14, -660478335), hacasu, lejessuet, jorscyem[cosoqueg + 4], 20, -405537848), fenabom = lamubcug(fenabom, hacasu = lamubcug(hacasu, lejessuet = lamubcug(lejessuet, jowafo, fenabom, hacasu, jorscyem[cosoqueg + 9], 5, 568446438), jowafo, fenabom, jorscyem[cosoqueg + 14], 9, -1019803690), lejessuet, jowafo, jorscyem[cosoqueg + 3], 14, -187363961), hacasu, lejessuet, jorscyem[cosoqueg + 8], 20, 1163531501), fenabom = lamubcug(fenabom, hacasu = lamubcug(hacasu, lejessuet = lamubcug(lejessuet, jowafo, fenabom, hacasu, jorscyem[cosoqueg + 13], 5, -1444681467), jowafo, fenabom, jorscyem[cosoqueg + 2], 9, -51403784), lejessuet, jowafo, jorscyem[cosoqueg + 7], 14, 1735328473), hacasu, lejessuet, jorscyem[cosoqueg + 12], 20, -1926607734), fenabom = quejubol(fenabom, hacasu = quejubol(hacasu, lejessuet = quejubol(lejessuet, jowafo, fenabom, hacasu, jorscyem[cosoqueg + 5], 4, -378558), jowafo, fenabom, jorscyem[cosoqueg + 8], 11, -2022574463), lejessuet, jowafo, jorscyem[cosoqueg + 11], 16, 1839030562), hacasu, lejessuet, jorscyem[cosoqueg + 14], 23, -35309556), fenabom = quejubol(fenabom, hacasu = quejubol(hacasu, lejessuet = quejubol(lejessuet, jowafo, fenabom, hacasu, jorscyem[cosoqueg + 1], 4, -1530992060), jowafo, fenabom, jorscyem[cosoqueg + 4], 11, 1272893353), lejessuet, jowafo, jorscyem[cosoqueg + 7], 16, -155497632), hacasu, lejessuet, jorscyem[cosoqueg + 10], 23, -1094730640), fenabom = quejubol(fenabom, hacasu = quejubol(hacasu, lejessuet = quejubol(lejessuet, jowafo, fenabom, hacasu, jorscyem[cosoqueg + 13], 4, 681279174), jowafo, fenabom, jorscyem[cosoqueg], 11, -358537222), lejessuet, jowafo, jorscyem[cosoqueg + 3], 16, -722521979), hacasu, lejessuet, jorscyem[cosoqueg + 6], 23, 76029189), fenabom = quejubol(fenabom, hacasu = quejubol(hacasu, lejessuet = quejubol(lejessuet, jowafo, fenabom, hacasu, jorscyem[cosoqueg + 9], 4, -640364487), jowafo, fenabom, jorscyem[cosoqueg + 12], 11, -421815835), lejessuet, jowafo, jorscyem[cosoqueg + 15], 16, 530742520), hacasu, lejessuet, jorscyem[cosoqueg + 2], 23, -995338651), fenabom = flohalal(fenabom, hacasu = flohalal(hacasu, lejessuet = flohalal(lejessuet, jowafo, fenabom, hacasu, jorscyem[cosoqueg], 6, -198630844), jowafo, fenabom, jorscyem[cosoqueg + 7], 10, 1126891415), lejessuet, jowafo, jorscyem[cosoqueg + 14], 15, -1416354905), hacasu, lejessuet, jorscyem[cosoqueg + 5], 21, -57434055), fenabom = flohalal(fenabom, hacasu = flohalal(hacasu, lejessuet = flohalal(lejessuet, jowafo, fenabom, hacasu, jorscyem[cosoqueg + 12], 6, 1700485571), jowafo, fenabom, jorscyem[cosoqueg + 3], 10, -1894986606), lejessuet, jowafo, jorscyem[cosoqueg + 10], 15, -1051523), hacasu, lejessuet, jorscyem[cosoqueg + 1], 21, -2054922799), fenabom = flohalal(fenabom, hacasu = flohalal(hacasu, lejessuet = flohalal(lejessuet, jowafo, fenabom, hacasu, jorscyem[cosoqueg + 8], 6, 1873313359), jowafo, fenabom, jorscyem[cosoqueg + 15], 10, -30611744), lejessuet, jowafo, jorscyem[cosoqueg + 6], 15, -1560198380), hacasu, lejessuet, jorscyem[cosoqueg + 13], 21, 1309151649), fenabom = flohalal(fenabom, hacasu = flohalal(hacasu, lejessuet = flohalal(lejessuet, jowafo, fenabom, hacasu, jorscyem[cosoqueg + 4], 6, -145523070), jowafo, fenabom, jorscyem[cosoqueg + 11], 10, -1120210379), lejessuet, jowafo, jorscyem[cosoqueg + 2], 15, 718787259), hacasu, lejessuet, jorscyem[cosoqueg + 9], 21, -343485551),
            lejessuet = toneso(lejessuet, meyirnuf), jowafo = toneso(jowafo, enudod), fenabom = toneso(fenabom, niepofab),
            hacasu = toneso(hacasu, bonuegaln);
            return [ lejessuet, jowafo, fenabom, hacasu ];
        }
        function udnoftern(sculamip) {
            var bogfupscam, nidefer = "", vupoolu = 32 * sculamip.length;
            for (bogfupscam = 0; bogfupscam < vupoolu; bogfupscam += 8) nidefer += String.fromCharCode(sculamip[bogfupscam >> 5] >>> bogfupscam % 32 & 255);
            return nidefer;
        }
        function giplafree(denoogla) {
            var gojekorn, kepgapunk = [];
            for (kepgapunk[(denoogla.length >> 2) - 1] = void 0, gojekorn = 0; gojekorn < kepgapunk.length; gojekorn += 1) kepgapunk[gojekorn] = 0;
            var budarot = 8 * denoogla.length;
            for (gojekorn = 0; gojekorn < budarot; gojekorn += 8) kepgapunk[gojekorn >> 5] |= (255 & denoogla.charCodeAt(gojekorn / 8)) << gojekorn % 32;
            return kepgapunk;
        }
        function cabadou(potrele) {
            var igoopjir, gicufe, fubivo = "";
            for (gicufe = 0; gicufe < potrele.length; gicufe += 1) igoopjir = potrele.charCodeAt(gicufe),
            fubivo += "0123456789abcdef".charAt(igoopjir >>> 4 & 15) + "0123456789abcdef".charAt(15 & igoopjir);
            return fubivo;
        }
        function snadeke(ostiernan) {
            return unescape(encodeURIComponent(ostiernan));
        }
        function karifo(mosetax) {
            return function(houdifo) {
                return udnoftern(mefrafa(giplafree(houdifo), 8 * houdifo.length));
            }(snadeke(mosetax));
        }
        function bosuqui(mirired, garsoyal) {
            return function(gadupe, sopunie) {
                var jomsobag, lipami, budagun = giplafree(gadupe), sierooli = [], wookigo = [];
                for (sierooli[15] = wookigo[15] = void 0, budagun.length > 16 && (budagun = mefrafa(budagun, 8 * gadupe.length)),
                jomsobag = 0; jomsobag < 16; jomsobag += 1) sierooli[jomsobag] = 909522486 ^ budagun[jomsobag],
                wookigo[jomsobag] = 1549556828 ^ budagun[jomsobag];
                return lipami = mefrafa(sierooli.concat(giplafree(sopunie)), 512 + 8 * sopunie.length),
                udnoftern(mefrafa(wookigo.concat(lipami), 640));
            }(snadeke(mirired), snadeke(garsoyal));
        }
        function slomagod(darujat, ayinil, codasiey) {
            return ayinil ? codasiey ? bosuqui(ayinil, darujat) : cabadou(bosuqui(ayinil, darujat)) : codasiey ? karifo(darujat) : cabadou(karifo(darujat));
        }
        void 0 === (meeposwi = function() {
            return slomagod;
        }.call(gurila, sozoto, gurila, abimon)) || (abimon.exports = meeposwi);
    }();
}, function(luboji, pifisa) {
    var tokleyhiy;
    tokleyhiy = function() {
        return this;
    }();
    try {
        tokleyhiy = tokleyhiy || Function("return this")() || (0, eval)("this");
    } catch (luboji) {
        "object" == typeof window && (tokleyhiy = window);
    }
    luboji.exports = tokleyhiy;
}, function(pathipeb, batenu, tojetu) {
    "use strict";
    pathipeb.exports = function(mociklep, himgeyut, pistreto) {
        if (mociklep.forEach) mociklep.forEach(himgeyut, pistreto); else for (var juebina = 0; juebina < mociklep.length; juebina += 1) himgeyut.call(pistreto, mociklep[juebina], juebina, mociklep);
    };
}, function(reyilap, cituyet, mohone) {
    "use strict";
    var mutakoy = Object.prototype.hasOwnProperty;
    function gutipleb(chejutut) {
        return decodeURIComponent(chejutut.replace(/\+/g, " "));
    }
    cituyet.stringify = function(dugeyat, gikjutoup) {
        gikjutoup = gikjutoup || "";
        var lulujad = [];
        for (var saloskey in "string" != typeof gikjutoup && (gikjutoup = "?"), dugeyat) mutakoy.call(dugeyat, saloskey) && lulujad.push(encodeURIComponent(saloskey) + "=" + encodeURIComponent(dugeyat[saloskey]));
        return lulujad.length ? gikjutoup + lulujad.join("&") : "";
    }, cituyet.parse = function(etifay) {
        for (var kyenie, vupogoo = /([^=?&]+)=?([^&]*)/g, lexuchob = {}; kyenie = vupogoo.exec(etifay); ) {
            var sitholoul = gutipleb(kyenie[1]), lofakue = gutipleb(kyenie[2]);
            sitholoul in lexuchob || (lexuchob[sitholoul] = lofakue);
        }
        return lexuchob;
    };
}, function(eporil, irosap, izjumlas) {
    "use strict";
    eporil.exports = function(pubaho, sicure) {
        if (sicure = sicure.split(":")[0], !(pubaho = +pubaho)) return !1;
        switch (sicure) {
          case "http":
          case "ws":
            return 80 !== pubaho;

          case "https":
          case "wss":
            return 443 !== pubaho;

          case "ftp":
            return 21 !== pubaho;

          case "gopher":
            return 70 !== pubaho;

          case "file":
            return !1;
        }
        return 0 !== pubaho;
    };
}, , , , , function(hoteeho, segomes, tobuepi) {
    "use strict";
    tobuepi.r(segomes);
    var pasudcog = tobuepi(0), akenres = tobuepi(18), pukumen = -1 !== window.location.search.indexOf("debug");
    if (pasudcog.a.setPrefix("AccessEnablerProxy.js"), pasudcog.a.info("Version: 4.1.1-fd6751b" + (pukumen ? " DEBUG" : " RELEASE")),
    "undefined" != typeof Promise && -1 !== Promise.toString().indexOf("[native code]")) yoguje(); else {
        pasudcog.a.warn("Non standards compliant browser! Loading polyfills.");
        var kesnasue = document.createElement("script");
        kesnasue.src = "polyfill.js", kesnasue.onload = function() {
            return yoguje();
        }, kesnasue.onerror = function() {
            pasudcog.a.error("Failed to load polyfills"), yoguje();
        }, document.head.appendChild(kesnasue);
    }
    function yoguje() {
        pasudcog.a.setLevel(pukumen ? 1 : 4);
        var tyeskdig = decodeURIComponent(window.location.hash.slice(1)), blimifa = new akenres.a(tyeskdig);
        blimifa.handleAjax(), blimifa.handleStorage(), blimifa.postMessage("PROXY_LOADED");
    }
} ]);
