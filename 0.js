webpackJsonp([0, 3, 5, 7, 12, 14], {
    109: function (e, t, i) {
        "use strict";

        function o(e) {
            i(619)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var a = i(610), l = i(618), n = i(26), s = o, r = n(a.a, l.a, !1, s, null, null);
        t.default = r.exports
    }, 110: function (e, t, i) {
        "use strict";

        function o(e) {
            i(624)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var a = i(611), l = i(622), n = i(26), s = o, r = n(a.a, l.a, !1, s, null, null);
        t.default = r.exports
    }, 111: function (e, t, i) {
        "use strict";

        function o(e) {
            i(625)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var a = i(612), l = i(623), n = i(26), s = o, r = n(a.a, l.a, !1, s, null, null);
        t.default = r.exports
    }, 113: function (e, t, i) {
        "use strict";

        function o(e) {
            i(638)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var a = i(627), l = i(635), n = i(26), s = o, r = n(a.a, l.a, !1, s, null, null);
        t.default = r.exports
    }, 114: function (e, t, i) {
        "use strict";

        function o(e) {
            i(637)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var a = i(628), l = i(634), n = i(26), s = o, r = n(a.a, l.a, !1, s, null, null);
        t.default = r.exports
    }, 115: function (e, t, i) {
        "use strict";

        function o(e) {
            i(679)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var a = i(640), l = i(668), n = i(26), s = o, r = n(a.a, l.a, !1, s, null, null);
        t.default = r.exports
    }, 610: function (e, t, i) {
        "use strict";
        t.a = {
            data: function () {
                return {
                    isstatic: !0,
                    loading: !0,
                    disabled: !1,
                    color: "red",
                    precolors: ["#ff0000", "#ffff00", "#00ff00", "#00ffff", "#0000ff", "#ff00ff", "#cc0019", "#ff2a00", "#ff7200", "#ffc000", "#f9ff00", "#8aff00", "#00ff4e", "#aa00ff", "#00a59b", "#14ae67", "#28a7e1", "#0d6fb8", "#122a88", "#171c61", "#601986", "#920783", "#a40a5e", "#800080", "#ff4500", "#00ced1", "#00c2ff", "#ff00aa", "#ffffff", "#000000"],
                    colorhex: "#FF0000",
                    hueh: 130,
                    huepostop: 0,
                    colorboxposright: 0,
                    colorboxpostop: 0,
                    colorbarmousedown: !1,
                    colorboxmousedown: !1,
                    issellcode: !1
                }
            }, props: [], created: function () {
            }, mounted: function () {
                this.initColorPicker()
            }, computed: {}, watch: {
                colorhex: function (e, t) {
                    e != t && (DEVICE.isEditStaticLE || this.triggerSelLeCode())
                }
            }, methods: {
                initColorPicker: function () {
                    this.hueh = this.$refs.colorpbox.querySelector(".color-bar").offsetHeight, this.huepostop = 0, this.colorboxposright = 0, this.colorboxpostop = 0
                }, getElementPageLeft: function (e) {
                    for (var t = e.offsetLeft, i = e.offsetParent; null != i;) t += i.offsetLeft + (i.offsetWidth - i.clientWidth) / 2, i = i.offsetParent;
                    return t
                }, getElementPageTop: function (e) {
                    for (var t = e.offsetTop, i = e.offsetParent; null != i;) t += i.offsetTop + (i.offsetHeight - i.clientHeight) / 2, i = i.offsetParent;
                    return t
                }, setHuePos: function (e) {
                    var t = this;
                    t.colorbarmousedown = !0, t.moveHuePos(e)
                }, moveHuePos: function (e) {
                    var t = this;
                    if (t.colorbarmousedown) {
                        var i = e.currentTarget.parentNode.parentNode, o = i.querySelector(".color-current"),
                            a = (i.querySelector("input"), t.getElementPageTop(i));
                        e.clientY - (a + 6) <= 0 ? t.huepostop = 0 : e.clientY - (a + 6) >= t.hueh ? t.huepostop = t.hueh : t.huepostop = e.clientY - (a + 6);
                        var l = parseInt(this.huepostop / t.hueh * 360);
                        o.style.background = "hsl(" + l + ",100%,50%)", t.resetColor()
                    }
                }, setColorBoxPos: function (e) {
                    var t = this;
                    t.colorboxmousedown = !0, t.moveColorBoxPos(e)
                }, moveColorBoxPos: function (e) {
                    var t = this;
                    if (t.colorboxmousedown) {
                        var i = e.currentTarget.parentNode.parentNode,
                            o = (i.querySelector(".color-current"), i.querySelector("input"), t.getElementPageTop(i)),
                            a = t.getElementPageLeft(i);
                        e.clientY - (o + 6) <= 0 ? t.colorboxpostop = 0 : e.clientY - (o + 6) >= t.hueh ? t.colorboxpostop = t.hueh : t.colorboxpostop = e.clientY - (o + 6), e.clientX - (a + 6) <= 0 ? t.colorboxposright = t.hueh : e.clientX - (a + 6) >= t.hueh ? t.colorboxposright = 0 : t.colorboxposright = t.hueh - (e.clientX - (a + 6)), t.resetColor()
                    }
                }, stopDrag: function () {
                    this.colorboxmousedown = !1, this.colorbarmousedown = !1
                }, resetColor: function () {
                    var e = this, t = parseInt(this.huepostop / e.hueh * 360),
                        i = 100 * (1 - this.colorboxposright / e.hueh), o = 100 * (1 - this.colorboxpostop / e.hueh),
                        a = window.fromRGB(window.fromHSB({h: t, s: i, b: o}));
                    e.colorhex = a, DEVICE.editStaticLEColor = a
                }, setCurrentColor: function (e) {
                    this.colorhex = e, DEVICE.editStaticLEColor = e
                }, triggerSelLeCode: function () {
                    this.issellcode = !this.issellcode, DEVICE.isEditStaticLE = this.issellcode
                }, alertInfo: function (e, t, i) {
                    this.$notify({title: e, type: t, duration: i, position: "bottom"})
                }
            }
        }
    }, 611: function (e, t, i) {
        "use strict";
        var o, a = i(614), l = i.n(a), n = i(64), s = i.n(n), r = document.getElementById("mainbox").offsetHeight,
            c = document.getElementById("mainbox").offsetWidth;
        t.a = {
            data: function () {
                return {
                    mainh: r,
                    mainw: c,
                    offsettop: 0,
                    offsetleft: 0,
                    isshowkeyset: !0,
                    showstdset: !1,
                    device: window.DEVICE,
                    ismutiselect: !1,
                    hasfnx: !1,
                    stdfnxval: "",
                    mutiselect: {
                        startpos: {x: 0, y: 0},
                        endpos: {x: 0, y: 0},
                        left: 0,
                        top: 0,
                        width: 0,
                        height: 0,
                        display: "none",
                        ismousedown: !1
                    },
                    mutiselecttype: 0,
                    mutiselectkeys: [],
                    quickselects: window.CMS.deviceConfig.QuickSelect,
                    isfnlayer: !1
                }
            },
            props: ["deviceid", "scale", "scaleplus", "keymap", "showbtn", "isfnkeyset", "isediting"],
            computed: {
                showkeymap: function () {
                    var e = this.scale, t = [];
                    this.offsetleft = this.scaleplus / 2 * 1200, this.offsettop = this.scaleplus / 2 * 600;
                    for (var i = 0; i < this.keymap.length; i++) {
                        var o = JSON.parse(s()(this.keymap[i]));
                        o.Position.Top = this.keymap[i].Position.Top * e - this.offsettop, o.Position.Left = this.keymap[i].Position.Left * e - this.offsetleft, o.Position.Width = this.keymap[i].Position.Width * e, o.Position.Height = this.keymap[i].Position.Height * e, t.push(o)
                    }
                    return t
                }, did: function () {
                    return this.deviceid
                }
            },
            mounted: function () {
            },
            watch: {
                deviceid: function (e) {
                    this.deviceid = e, this.hasfnx = !1
                }, "device.currentProfile.ModeIndex": function (e, t) {
                    var i = this, o = this;
                    1 == e ? (this.showstdset = !0, this.$nextTick(function () {
                        i.showStdBtns(), window.translateStdLelist(), window.readLE(DEVICE.currentProfile.DriverLE[0].GUID, function (e) {
                            e && (LeData = e, o.playLe())
                        }), $("std_conf_showbox").classList.add("key-breath"), setTimeout(function () {
                            $("std_conf_showbox") && $("std_conf_showbox").classList.remove("key-breath")
                        }, 2e3)
                    })) : this.showstdset = !1
                }, mutiselectkeys: function (e) {
                    console.log("selectkeys changed!"), console.log(s()(e), e.length);
                    var t = this;
                    t.$emit("selLeKeys", e, t.mutiselecttype)
                }
            },
            methods: (o = {
                initKeyset: function () {
                    var e = this, t = "KeySet";
                    e.isfnkeyset ? (t = "FnKeySet", e.isfnlayer = !0, DEVICE.currentProfile.KeySet.forEach(function (e, t) {
                        var i = document.getElementById("key" + e.Index);
                        i && (i.classList.remove("seted"), i.classList.remove("fnseted"), i.classList.remove("key-breath"), i.setAttribute("data-func", ""), i.setAttribute("data-le", ""), i.innerHTML = "<span></span>")
                    })) : e.isfnlayer = !1, DEVICE.currentProfile[t].forEach(function (i, o) {
                        var a = document.getElementById("key" + i.Index);
                        a && (a.classList.remove("seted"), a.classList.remove("fnseted"), a.setAttribute("data-func", ""), a.setAttribute("data-le", ""), a.innerHTML = "<span></span>", e.isfnkeyset && a.classList.add("fnseted"), DEVICE.currentProfile[t][o].MenuName && (a.children[0].classList.add("hasfunc"), a.classList.add("seted"), "0x0A010001" == DEVICE.currentProfile[t][o].DriverValue ? (a.children[0].innerHTML = i.MenuName, a.setAttribute("data-func", i.MenuName)) : (console.log(i.DriverValue), window.KeyFunc[i.DriverValue] ? (window.KeyFunc[i.DriverValue].hasOwnProperty("Icon") && a.children[0].classList.add(window.KeyFunc[i.DriverValue].Icon), window.KeyFunc[i.DriverValue].ShowClass && a.children[0].classList.add(window.KeyFunc[i.DriverValue].ShowClass), a.setAttribute("data-func", e.$t("keys")[window.KeyFunc[i.DriverValue].LangTitle]), window.KeyFunc[i.DriverValue].Icon ? a.children[0].innerHTML = "" : a.children[0].innerHTML = e.$t("keys")[window.KeyFunc[i.DriverValue].LangTitle]) : (a.setAttribute("data-func", i.MenuName), i.MenuName.length <= 5 ? a.children[0].innerHTML = i.MenuName : a.children[0].innerHTML = i.MenuName.substring(0, 4) + "..."))), DEVICE.currentProfile.KeySet[o].KeyLE && "" !== DEVICE.currentProfile.KeySet[o].KeyLE.GUID && (a.classList.add("seted"), a.setAttribute("data-le", DEVICE.currentProfile.KeySet[o].KeyLE.Name)))
                    })
                }, initStdKeyset: function () {
                    this.initKeyset()
                    // var e = this;
                    // window.DefaultProfiles[0].KeySet.forEach(function (e, t) {
                    //     var i = $("key" + e.Index);
                    //     i && (i.classList.remove("seted"), i.setAttribute("data-func", ""), i.setAttribute("data-le", ""), i.innerHTML = "<span></span>")
                    // }), CMS.deviceConfig.IsFnx && (e.hasfnx = !0, DEVICE.currentProfile.hasOwnProperty("KeySet") && (e.stdfnxval = e.device.currentProfile.KeySet[0].DriverValue.toString()))
                }, changeFnx: function (e) {
                    var t = this;
                    DEVICE.currentProfile.KeySet[0].DriverValue = e, t.$emit("fnxChange")
                }, handleRemoveLight: function () {
                    this.$emit("removeKeyLE")
                }, handleRemoveFunc: function () {
                    this.$emit("removeKeyFunc")
                }, showStdBtns: function () {
                    $("conf_showbox").style.setProperty("visibility", "hidden", "important");
                    var e = $("std_conf_showbox"), t = CMS.deviceConfig.DriverLEKey, i = $("key" + t);
                    i.offsetWidth, i.offsetLeft, i.offsetTop, e.offsetWidth, e.offsetHeight;
                    e.style.setProperty("left", "1rem", "important"), e.style.setProperty("bottom", "3rem", "important")
                }, showConfig: function (e) {
                    var t = $("conf_showbox");
                    // if (1 != DEVICE.currentProfile.ModeIndex) {
                        var i = $("key" + e), o = {KeyFUNC: "", KeyLE: ""};
                        o.KeyFUNC = i.getAttribute("data-func"), o.KeyLE = i.getAttribute("data-le"), $("config_key").innerText = o.KeyFUNC ? o.KeyFUNC : this.$t("common.key_func_no_config"), $("config_le") && ($("config_le").innerText = o.KeyLE ? o.KeyLE : this.$t("common.key_le_no_config")), $("config_key").setAttribute("data-key", e);
                        var a = i.offsetWidth, l = i.offsetLeft, n = i.offsetTop, s = t.offsetWidth, r = t.offsetHeight,
                            c = l + a / 2 - s / 2, d = n - r;
                        t.style.setProperty("left", c + "px", "important"), t.style.setProperty("top", d + "px", "important"), t.style.setProperty("visibility", "visible", "important")
                    // }
                }, hideConfig: function () {
                    var e = $("conf_showbox");
                    e && e.style.setProperty("visibility", "hidden", "important")
                }, handleKeyClick: function (e) {
                    var t = this;
                    if (0 === e) return void t.alertInfo(t.$t("common.fn_not_edit"), "warning", 1e3);
                    var i = !1, o = DEVICE.currentProfile.KeySet;
                    t.isfnkeyset && (o = DEVICE.currentProfile.FnKeySet);
                    for (var a = 0; a < o.length; a++) if (e == o[a].Index) {
                        i = !0;
                        break
                    }
                    if (i) {
                        DEVICE.editKeyCode = e;
                        var l = $("key" + e);
                        l.classList.add("key-breath"), window.removeClass(window.siblings(l), "key-breath")
                    } else t.alertInfo(t.$t("common.key_already_preset_func"), "warning", 1e3)
                }, handleSelectKeyLE: function () {
                    this.$emit("showKeyLeSelect")
                }, handleSelectStdLE: function (e) {
                    DEVICE.lestdindex = parseInt(e), this.$emit("selectStdLE")
                }, handleRemoveStdLE: function (e) {
                    DEVICE.lestdindex = parseInt(e), this.$emit("removeStdLE")
                }, renderFrame: function (e) {
                    for (var t = 0; t < DEVICE.keymap.length; t++) {
                        var i = DEVICE.keymap[t].LocationCode;
                        i = i.toString(), e[i] || $("le" + i) && $("le" + i).style.setProperty("background", "#000")
                    }
                    for (var o in e) {
                        var a = $("le" + o);
                        a && a.style.setProperty("background", window.toJS(e[o]))
                    }
                }, playLe: function () {
                    var e = this, t = 0, i = 0, o = 0, a = 0;
                    if (LeData.Canvases) for (var l = 0; l < LeData.Canvases.length; l++) if (LeData.Canvases[l].DeviceTypes.indexOf(CMS.deviceConfig.DeviceType.toString()) >= 0) {
                        LeData = JSON.parse(s()(LeData.Canvases[l]));
                        break
                    }
                    for (var n = 0; n < LeData.Frames.length; n++) a += LeData.Frames[n].Count;
                    DEVICE.timer && (clearInterval(DEVICE.timer), DEVICE.timer = null);
                    var r = 0;
                    DEVICE.timer = setInterval(function () {
                        ++o == a && (o = 0);
                        for (var l = JSON.parse(s()(LeData.LEConfigs)), n = {}, c = 0; c < l.length; c++) {
                            switch (l[c].Color || (l[c].Color = "0xffffff"), l[c].Type) {
                                case 0:
                                    l[c].Color = window.toJS(l[c].Color);
                                    break;
                                case 1:
                                    var d = window.toHSB(l[c].Color);
                                    d.h = (d.h + r % l[c].Count * (360 / l[c].Count)) % 360, l[c].Color = window.fromRGB(window.fromHSB(d));
                                    break;
                                case 2:
                                    var d = window.toHSB(l[c].Color);
                                    d.b = d.b - r % (l[c].Count + l[c].StayCount) / (l[c].Count + l[c].StayCount) * 100, l[c].Color = window.fromRGB(window.fromHSB(d))
                            }
                            for (var u in l[c].Keys) n[l[c].Keys[u]] = l[c].Color
                        }
                        var m = {};
                        for (var f in LeData.Frames[t].Data) n[f] ? m[f] = n[f] : m[f] = "0xffffff";
                        LeData.Frames[t].Count > 1 ? (i == LeData.Frames[t].Count - 1 && (t++, i = 0, t == LeData.Frames.length && (t = 0)), e.renderFrame(m), i++) : (LeData.Frames[t].Data && e.renderFrame(m), ++t == LeData.Frames.length && (t = 0)), r++
                    }, 100)
                }, drag: function (e) {
                    var t = this;
                    if (t.ismutiselect) {
                        var i = $("cms_header").offsetHeight;
                        t.mutiselect.startpos.x = e.pageX, t.mutiselect.startpos.y = e.pageY, t.mutiselect.display = "", t.mutiselect.left = e.pageX, t.mutiselect.top = e.pageY - i, t.mutiselect.ismousedown = !0, t.mutiselecttype = 0, $("device").onmousemove = function (e) {
                            t.mutiselect.ismousedown && (console.log("mouse move"), t.mutiselect.endpos.x = e.pageX, t.mutiselect.endpos.y = e.pageY, t.mutiselect.left = Math.min(e.pageX, t.mutiselect.startpos.x), t.mutiselect.top = Math.min(e.pageY - i, t.mutiselect.startpos.y - i), t.mutiselect.width = Math.abs(t.mutiselect.endpos.x - t.mutiselect.startpos.x), t.mutiselect.height = Math.abs(t.mutiselect.endpos.y - t.mutiselect.startpos.y))
                        }, document.onmouseup = function () {
                            if (t.mutiselect.ismousedown) {
                                console.log("mouse up"), t.mutiselect.ismousedown = !1, t.mutiselect.display = "none";
                                for (var e = [], o = 0; o < t.keymap.length; o++) {
                                    var a = $("le" + t.keymap[o].LocationCode);
                                    a && (t.mutiselect.width > 0 || t.mutiselect.height > 0) ? a.offsetLeft < Math.max(t.mutiselect.startpos.x, t.mutiselect.endpos.x) && a.offsetLeft + a.offsetWidth > Math.min(t.mutiselect.startpos.x, t.mutiselect.endpos.x) && a.offsetTop < Math.max(t.mutiselect.startpos.y - i, t.mutiselect.endpos.y - i) && a.offsetTop + a.offsetHeight > Math.min(t.mutiselect.startpos.y - i, t.mutiselect.endpos.y - i) && e.push(t.keymap[o].LocationCode) : 0 != t.mutiselect.width && 0 != t.mutiselect.height || t.mutiselect.startpos.x >= a.offsetLeft && t.mutiselect.startpos.x <= a.offsetLeft + a.offsetWidth && t.mutiselect.startpos.y - i >= a.offsetTop && t.mutiselect.startpos.y - i <= a.offsetTop + a.offsetHeight && e.push(t.keymap[o].LocationCode)
                                }
                                t.mutiselect.startpos.x = 0, t.mutiselect.startpos.y = 0, t.mutiselect.endpos.x = 0, t.mutiselect.endpos.y = 0, t.mutiselect.left = 0, t.mutiselect.top = 0, t.mutiselect.width = 0, t.mutiselect.height = 0, t.mutiselectkeys = e
                            }
                        }
                    }
                }, selectQuickKeys: function (e) {
                    console.log(e);
                    var t = this, i = [];
                    i = "all" == e ? window.getAllLocationCodes() : "none" == e ? [] : e, t.mutiselectkeys = i
                }
            }, l()(o, "selectQuickKeys", function (e) {
                console.log(e);
                var t = this, i = [];
                "all" == e ? i = window.getAllLocationCodes() : "none" == e ? (i = [], t.$emit("selLeKeys", [])) : i = e, t.mutiselecttype = 1, t.mutiselectkeys = i
            }), l()(o, "switchFnLayer", function () {
                DEVICE.currentProfile.FnKeySet && (this.isfnlayer = !this.isfnlayer, this.$emit("openFnLayer", this.isfnlayer))
            }), l()(o, "alertInfo", function (e, t, i) {
                this.$notify({title: e, type: t, duration: i, position: "bottom-left"})
            }), o)
        }
    }, 612: function (e, t, i) {
        "use strict";
        var o = i(64), a = i.n(o), l = i(109);
        t.a = {
            data: function () {
                return {
                    loading: !0,
                    schfilter: "",
                    lefilter: "",
                    activeName: "1",
                    filterlelist: [],
                    leselname: "",
                    isbreath: !1,
                    disabled: !1,
                    iseditloading: !1,
                    newle: {Name: "", GUID: "", LeType: "simple"}
                }
            }, props: ["title", "height", "lelist", "lesel", "leseltype", "isstaticle"], created: function () {
            }, components: {"cms-lestatic": l.default}, mounted: function () {
                var e = this;
                setTimeout(function () {
                    e.filterlelist = e.lelist, e.loading = !1, e.$nextTick(function () {
                        e.leSelected(e.lesel)
                    })
                }, 1e3)
            }, watch: {
                schfilter: function (e, t) {
                    var i = this;
                    this.filterlelist = this.lelist.filter(function (t) {
                        return ~t.Name.indexOf(e)
                    }), this.$nextTick(function () {
                        i.leSelected(i.lesel)
                    })
                }, lesel: function (e, t) {
                    e !== t && this.leSelected(e)
                }
            }, computed: {
                mode: function () {
                    return DEVICE.currentProfile ? DEVICE.currentProfile.ModeIndex : 1
                }, hasModeLe: function () {
                    return !!CMS.deviceConfig.hasModeLe
                }
            }, methods: {
                handleRowChange: function (e, t, i) {
                    var o = this;
                    1 == this.leseltype && DEVICE.currentProfile.ModeLE.GUID !== e.GUID ? ((0 == DEVICE.currentProfile.ModeIndex || this.hasModeLe && [2, 3, 4].indexOf(this.mode) >= 0) && (DEVICE.currentProfile.ModeLE.GUID = e.GUID, DEVICE.currentProfile.ModeLE.Name = e.Name), this.leSelected(e.GUID)) : 2 == this.leseltype && (DEVICE.leeditsel = e.GUID), o.playLE(e.GUID)
                }, handleSaveModeLE: function () {
                    DEVICE.isEditStaticLE && this.$refs.lestatic && this.$refs.lestatic.triggerSelLeCode(), 1 == this.leseltype && this.isbreath ? this.$emit("saveModeLE") : 2 == this.leseltype && console.log("灯效没有变更！")
                }, leSelected: function (e) {
                    var t = this;
                    if (this.hasModeLe || !([2, 3, 4].indexOf(DEVICE.currentProfile) >= 0) || "1" != this.leseltype) {
                        var i = this, o = i.filterlelist.length;
                        DEVICE.isEditStaticLE && i.$refs.lestatic && i.$refs.lestatic.triggerSelLeCode(), e ? (i.filterlelist.forEach(function (a, l) {
                            if (a.GUID === e) {
                                i.leselname = a.Name, i.$refs.lestable.setCurrentRow(a);
                                var n = i.$refs.lestable.bodyWrapper.scrollHeight, s = l / o;
                                1 === DEVICE.currentProfile.ModeIndex ? (i.$refs.lestable.bodyWrapper.scrollTop = n * s - 80, i.isbreath = !1) : e === window.cprofile.ModeLE.GUID ? (i.$refs.lestable.bodyWrapper.scrollTop = n * s - 80, i.isbreath = !1) : (0 === DEVICE.currentProfile.ModeIndex || t.hasModeLe && [2, 3, 4].indexOf(t.mode) >= 0) && (i.isbreath = !0)
                            }
                        }), i.playLE(e)) : i.leUnSelectAll()
                    }
                }, leUnSelectAll: function () {
                    this.$refs.lestable.setCurrentRow()
                }, playLE: function (e) {
                    var t = this;
                    window.readLE(e, function (e) {
                        DEVICE.timer && (clearInterval(DEVICE.timer), DEVICE.timer = null), window.LeData = e, t.$emit("playLE")
                    })
                }, editLe: function () {
                    this.$emit("editLE")
                }, addLe: function () {
                    var e = this;
                    if (e.newle.Name || (e.newle.Name = e.$t("le.le_name") + (CMS.les.length + 1)), e.isLeExist(e.newle.Name)) return void e.alertInfo(e.$t("le.le_already_exist"), "warning", 800);
                    e.newle.GUID = window.getGuid(), CMS.deviceConfig.LeCate ? e.newle.LeCate = CMS.deviceConfig.LeCate : delete e.newle.LeCate;
                    var t = JSON.parse(a()(e.newle));
                    t.Frames = [{Count: 1, Name: "frame0", Data: {}}], t.LEConfigs = [{
                        Type: 0,
                        Count: 1,
                        Color: "0xff0000",
                        Keys: []
                    }], window.writeLE(t.GUID, t, function (i) {
                        delete t.Frames, delete t.LEConfigs, CMS.les.push(t), window.writeLEList(CMS.les, function () {
                            e.alertInfo(e.$t("le.le_create_success"), "success", 500), e.$nextTick(function () {
                                e.$refs.lestable.bodyWrapper.scrollTop = e.$refs.lestable.bodyWrapper.scrollHeight, e.leSelected(t.GUID)
                            })
                        })
                    })
                }, copyLe: function () {
                    console.log("copyLe");
                    var e = this, t = JSON.parse(a()(LeData));
                    if (t.Name = t.Name + "_" + CMS.les.length, t.GUID = window.getGuid(), e.isLeExist(t.Name)) return void e.alertInfo(e.$t("le.le_already_exist"), "warning", 800);
                    window.writeLE(t.GUID, t, function (i) {
                        delete t.Frames, delete t.LEConfigs, CMS.les.push(t), window.writeLEList(CMS.les, function () {
                            e.alertInfo(e.$t("le.le_copy_success"), "success", 500), e.$nextTick(function () {
                                e.$refs.lestable.bodyWrapper.scrollTop = e.$refs.lestable.bodyWrapper.scrollHeight, e.leSelected(t.GUID)
                            })
                        })
                    })
                }, deleteLe: function () {
                    console.log("deleteLe");
                    var e = this;
                    e.$confirm(e.$t("le.le_confirm_delete"), e.$t("common.attention"), {
                        confirmButtonText: e.$t("common.confirm"),
                        cancelButtonText: e.$t("common.cancel"),
                        type: "warning"
                    }).then(function () {
                        var t = LeData.GUID;
                        window.deleteLE(t, function () {
                            for (var i = 0; i < CMS.les.length; i++) if (CMS.les[i].GUID == t) {
                                CMS.les.splice(i, 1);
                                break
                            }
                            window.writeLEList(CMS.les, function () {
                                e.alertInfo(e.$t("le.le_delete_success"), "success", 800)
                            })
                        })
                    }).catch(function () {
                        e.alertInfo(e.$t("le.le_delete_cancelled"), "info", 800)
                    })
                }, importLe: function () {
                    var e = this;
                    window.importLE(function (t) {
                        for (var i = JSON.parse(t), o = !0, a = 0; a < CMS.les.length; a++) CMS.les[a].GUID === i.GUID && (o = !1, i.Name = CMS.les[a].Name, e.$confirm(e.$t("le.le_aready_exist_confirm_overwrite"), e.$t("common.attention"), {
                            confirmButtonText: e.$t("common.confirm"),
                            cancelButtonText: e.$t("common.cancel"),
                            type: "warning"
                        }).then(function () {
                            window.writeLE(i.GUID, i, function (t) {
                                e.alertInfo(e.$t("le.le_import_success"), "success", 500)
                            })
                        }).catch(function () {
                            e.alertInfo(e.$t("le.le_import_cancelled"), "success", 500)
                        }));
                        o && window.writeLE(i.GUID, i, function (t) {
                            delete i.Frames, delete i.LEConfigs, delete i.Canvases, CMS.les.push(i), window.writeLEList(CMS.les, function () {
                                e.alertInfo(e.$t("le.le_import_success"), "success", 500)
                            })
                        })
                    })
                }, exportLe: function () {
                    var e = this;
                    window.exportLE(LeData, function (t) {
                        e.alertInfo(e.$t("le.le_export_success"), "success", 500)
                    })
                }, isLeExist: function (e) {
                    for (var t = 0; t < CMS.les.length; t++) if (CMS.les[t].Name == e) return !0;
                    return !1
                }, reNameLE: function () {
                    console.log("rename le")
                }, alertInfo: function (e, t, i) {
                    this.$notify({title: e, type: t, duration: i, position: "bottom-left"})
                }, disableLE: function () {
                    this.isbreath = !1, DEVICE.isEditStaticLE && this.$refs.lestatic && this.$refs.lestatic.triggerSelLeCode()
                }
            }
        }
    }, 613: function (e, t, i) {
        e.exports = {default: i(615), __esModule: !0}
    }, 614: function (e, t, i) {
        "use strict";
        t.__esModule = !0;
        var o = i(613), a = function (e) {
            return e && e.__esModule ? e : {default: e}
        }(o);
        t.default = function (e, t, i) {
            return t in e ? (0, a.default)(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e
        }
    }, 615: function (e, t, i) {
        i(616);
        var o = i(5).Object;
        e.exports = function (e, t, i) {
            return o.defineProperty(e, t, i)
        }
    }, 616: function (e, t, i) {
        var o = i(16);
        o(o.S + o.F * !i(8), "Object", {defineProperty: i(11).f})
    }, 617: function (e, t, i) {
        t = e.exports = i(10)(void 0), t.push([e.i, ".colorpicker,.predefine{height:32px;line-height:32px}.predefine,.predefine ul li{display:inline-block}.predefine ul li{float:left;width:24px;height:24px;background:blue;list-style:none;margin-left:.8rem}.color-picker{position:relative;z-index:10;padding:6px;box-sizing:content-box;background-color:#3a3939;border-radius:4px;box-shadow:0 2px 12px 0 rgba(0,0,0,.1);display:-ms-flexbox;display:flex;width:100%;box-sizing:border-box}.color-select{-ms-flex:3;flex:3}.color-preset{-ms-flex:2;flex:2;position:relative}.color-current{width:80%;padding-top:80%;float:left;background:red;position:relative}.color-black,.color-white{position:absolute;top:0;left:0;right:0;bottom:0}.color-white{background:linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.color-black{background:linear-gradient(0deg,#000,hsla(0,0%,100%,0))}.color-dot{position:absolute;right:0;top:0;width:4px;height:4px;border:1px solid #fff;margin:-3px;border-radius:2px;cursor:crosshair}.color-bar{float:right;position:relative;width:14%;margin-right:3%;padding-top:80%;background:linear-gradient(180deg,red 0,#ff0 16.7%,#0f0 33.4%,#0ff 50.1%,#00f 66.8%,#f0f 83.4%,red)}.color-bar-pos{position:absolute;cursor:pointer;box-sizing:border-box;left:0;top:100px;width:100%;height:4px;border-radius:1px;background:#fff;border:1px solid #f0f0f0;box-shadow:0 0 2px rgba(0,0,0,.6);z-index:1;margin-top:-2px;margin-bottom:-2px}.color-sets{display:-ms-flexbox;display:flex;width:100%;margin-block-start:0;margin-block-end:0;margin-inline-start:0;margin-inline-end:0;padding-inline-start:0;-webkit-margin-before:0;-webkit-margin-after:0;-webkit-margin-start:0;-webkit-margin-end:0;-webkit-padding-start:0;box-sizing:content-box;display:-webkit-flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}.color-sets li{margin:0 0 2%;padding:0;float:left;width:15%;min-width:15%;max-width:15%;padding-bottom:15%;border:1px solid #ccc;background:#00c2ff;list-style:none;display:inline-block;-ms-flex:1;flex:1;border-radius:10%;box-sizing:border-box;cursor:pointer}.color-sets li.selected{box-shadow:0 0 3px 2px #409eff}.color-val{clear:both;position:absolute;bottom:0;width:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.color-val,.color-val input{height:1.8rem;line-height:1.8rem;text-align:center}.color-val input{-ms-flex:5;flex:5;border:none;box-sizing:border-box}.color-val i{-ms-flex:2;flex:2}.color-state-btn{-ms-flex:3;flex:3;height:1.8rem;line-height:1.8rem;border-radius:.2rem;background-color:#333;border:1px solid #000;display:inline-block;color:red;cursor:pointer}.color-state-btn i{height:1.8rem;line-height:1.8rem;font-size:1.2rem}.color-state-btn.active{border-color:#00c2ff}.color-state-btn.active i{font-size:1.3rem;font-weight:700;color:#0f0}", ""])
    }, 618: function (e, t, i) {
        "use strict";
        var o = function () {
            var e = this, t = e.$createElement, i = e._self._c || t;
            return i("div", {
                ref: "colorpbox",
                staticClass: "color-picker",
                attrs: {id: "colorpbox"}
            }, [i("div", {
                staticClass: "color-select",
                on: {mouseup: e.stopDrag}
            }, [i("div", {
                staticClass: "color-current", on: {
                    mousedown: function (t) {
                        return e.setColorBoxPos(t)
                    }, mousemove: function (t) {
                        return e.moveColorBoxPos(t)
                    }
                }
            }, [i("div", {staticClass: "color-white"}), e._v(" "), i("div", {staticClass: "color-black"}), e._v(" "), i("div", {
                staticClass: "color-dot",
                style: {top: e.colorboxpostop + "px", right: e.colorboxposright + "px"}
            })]), e._v(" "), i("div", {
                staticClass: "color-bar", on: {
                    mousedown: function (t) {
                        return e.setHuePos(t)
                    }, mousemove: function (t) {
                        return e.moveHuePos(t)
                    }
                }
            }, [i("div", {
                staticClass: "color-bar-pos",
                style: {top: e.huepostop + "px"}
            })])]), e._v(" "), i("div", {staticClass: "color-preset"}, [i("ul", {staticClass: "color-sets"}, e._l(e.precolors, function (t, o) {
                return i("li", {
                    key: o,
                    class: {selected: e.colorhex == t},
                    style: {backgroundColor: t},
                    on: {
                        click: function (i) {
                            return e.setCurrentColor(t)
                        }
                    }
                })
            }), 0), e._v(" "), i("div", {staticClass: "color-val"}, [i("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.colorhex,
                    expression: "colorhex"
                }],
                style: {backgroundColor: e.colorhex},
                attrs: {type: ""},
                domProps: {value: e.colorhex},
                on: {
                    input: function (t) {
                        t.target.composing || (e.colorhex = t.target.value)
                    }
                }
            }), e._v(" "), i("i", {
                staticClass: "el-icon-back",
                staticStyle: {color: "green"}
            }), e._v(" "), i("div", {
                staticClass: "color-state-btn",
                class: {active: e.issellcode},
                on: {click: e.triggerSelLeCode}
            }, [i("i", {staticClass: "el-icon-kb-select"})])])]), e._v(" "), e._e()])
        }, a = [], l = {render: o, staticRenderFns: a};
        t.a = l
    }, 619: function (e, t, i) {
        var o = i(617);
        "string" == typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals);
        i(18)("4e1ffed3", o, !0, {})
    }, 620: function (e, t, i) {
        t = e.exports = i(10)(void 0), t.push([e.i, ".device{width:100%;height:100%;position:relative;z-index:2}.device .device-panel{position:absolute;z-index:0}.device .device-keycap{position:absolute;z-index:1}.device .device-outline{position:absolute;z-index:-1;-webkit-animation-timing-function:ease-in-out;-webkit-animation-name:device-outline;-webkit-animation-duration:1s;-webkit-animation-iteration-count:infinite;-webkit-animation-direction:alternate}.device-fn{position:absolute;z-index:11;cursor:pointer}.device-fn.active{border:2px solid red;border-radius:.4rem;box-shadow:inset 0 0 10px 10px rgba(0,194,255,.6)}@keyframes device-outline{0%{-webkit-filter:opacity(.2);transfrom:scale(.4)}to{-webkit-filter:opacity(1);transfrom:scale(1.2)}}.device-light{position:absolute;background-color:red;z-index:-1}.device-key{position:absolute;text-align:center;text-overflow:hidden;display:table;z-index:10;box-sizing:border-box}.device-key.noshowkeyset span{display:none}.device-key.seted{border-bottom:.3rem solid #00c2ff}.device-key span{display:table-cell;vertical-align:middle;text-align:center;width:100%;height:100%;z-index:12;cursor:pointer}.device-key span.hasfunc{color:#fff;background-color:hsla(0,0%,8%,.6)}.key-breath{border:1px solid #2b92d4;border-radius:2px;color:#fff;text-align:center;cursor:pointer;box-shadow:0 1px 2px rgba(0,0,0,.3);overflow:hidden;-webkit-animation-timing-function:ease-in-out;-webkit-animation-name:keybreathe;-webkit-animation-duration:.3s;-webkit-animation-iteration-count:infinite;-webkit-animation-direction:alternate}.custom.el-tooltip__popper{border:1px solid #00c2ff}.custom.el-tooltip__popper .popper__arrow{border-width:6px;bottom:-6px;left:calc(50% - 6px);margin-right:3px;border-bottom-width:0;border-top-color:#00c2ff}.custom.el-tooltip__popper .popper__arrow:after{bottom:1px;margin-left:-6px;border-top-color:#303133;border-bottom-width:0}.key-func{color:gray}.key-func tr td{padding:.1rem}.key-func tr td.cval{color:#eee}.key-func tr td i{color:red;font-size:1.2rem;cursor:pointer}.key-func tr td i.warning{color:#ff0}.dis-edit{color:red}#conf_showbox{position:absolute;display:block}#std_conf_showbox td{border:1px solid #00778a;padding:.2rem .3rem}.device-multiselect{position:absolute;z-index:2;border:2px dotted #0af;filter:alpha(opacity=50)}#quick_sel{position:absolute;text-align:center;z-index:2}", ""])
    }, 621: function (e, t, i) {
        t = e.exports = i(10)(void 0), t.push([e.i, ".el-input-group__prepend{width:3rem}.tb-lelist i{font-size:1.2rem;color:#888}", ""])
    }, 622: function (e, t, i) {
        "use strict";
        var o = function () {
            var e = this, t = e.$createElement, i = e._self._c || t;
            return i("div", {
                staticClass: "device", attrs: {id: "device"}, on: {
                    mousedown: function (t) {
                        return e.drag(t)
                    }
                }
            }, [i("img", {
                staticClass: "device-panel",
                style: {
                    width: 1200 * e.scale + "px",
                    height: 600 * e.scale + "px",
                    left: -e.offsetleft + "px",
                    top: -e.offsettop + "px"
                },
                attrs: {src: e.APPCFG.devices[e.did].img_panel, draggable: "false"}
            }), e._v(" "), i("img", {
                staticClass: "device-keycap",
                style: {
                    width: 1200 * e.scale + "px",
                    height: 600 * e.scale + "px",
                    left: -e.offsetleft + "px",
                    top: -e.offsettop + "px"
                },
                attrs: {src: e.APPCFG.devices[e.did].img_keycap, draggable: "false"},
                on: {mouseout: e.hideConfig}
            }), e._v(" "), i("img", {
                staticClass: "device-outline",
                style: {
                    width: 1200 * e.scale + "px",
                    height: 600 * e.scale + "px",
                    left: -e.offsetleft + "px",
                    top: -e.offsettop + "px"
                },
                attrs: {src: e.APPCFG.devices[e.did].img_outline, draggable: "false"}
            }), e._v(" "), e._l(e.showkeymap, function (e) {
                return i("div", {
                    staticClass: "device-light",
                    style: {
                        left: e.Position.Left + "px",
                        top: e.Position.Top + "px",
                        width: e.Position.Width + "px",
                        height: e.Position.Height + "px",
                        transform: "rotate(" + e.Position.Rotate + "deg)"
                    },
                    attrs: {id: "le" + e.LocationCode}
                })
            }), e._v(" "), e._l(e.showkeymap, function (t) {
                return 0 == t.LogicCode ? i("div", {
                    staticClass: "device-fn",
                    class: {active: e.isfnlayer},
                    style: {
                        left: t.Position.Left + "px",
                        top: t.Position.Top + "px",
                        width: t.Position.Width + "px",
                        height: t.Position.Height + "px",
                        transform: "rotate(" + t.Position.Rotate + "deg)"
                    },
                    on: {click: e.switchFnLayer}
                }) : e._e()
            }), e._v(" "), i("div", {staticClass: "keybox"}, e._l(e.showkeymap, function (t) {
                return e.showbtn && t.LogicCode > 0 ? i("div", {
                    staticClass: "device-key",
                    class: {noshowkeyset: !e.isshowkeyset},
                    style: {
                        left: t.Position.Left + "px",
                        top: t.Position.Top + "px",
                        width: t.Position.Width + "px",
                        height: t.Position.Height + "px",
                        transform: "rotate(" + t.Position.Rotate + "deg)"
                    },
                    attrs: {id: "key" + t.LogicCode, "data-logic": t.LogicCode},
                    on: {
                        mouseover: function (i) {
                            return e.showConfig(t.LogicCode)
                        }, click: function (i) {
                            return e.handleKeyClick(t.LogicCode)
                        }
                    }
                }) : e._e()
            }), 0), e._v(" "), i("div", {
                staticClass: "device-multiselect",
                style: {
                    left: e.mutiselect.left + "px",
                    top: e.mutiselect.top + "px",
                    width: e.mutiselect.width + "px",
                    height: e.mutiselect.height + "px",
                    display: e.mutiselect.display
                }
            }), e._v(" "), e.showbtn ? i("div", {
                staticClass: "custom el-tooltip__popper is-dark",
                staticStyle: {visibility: "hidden"},
                attrs: {id: "conf_showbox"}
            }, [i("div", [i("table", {staticClass: "key-func"}, [i("tr", [i("td", [e._v(e._s(e.$t("common.key_func")) + " :")]), e._v(" "), i("td", {
                staticClass: "cval",
                attrs: {id: "config_key", colspan: "2"}
            }, [e._v(e._s(e.$t("common.key_func_no_config")))]), e._v(" "), i("td", [i("i", {
                staticClass: "el-icon-delete",
                on: {click: e.handleRemoveFunc}
            })])]), e._v(" "), e.isfnkeyset ? e._e() : i("tr", [i("td", [e._v(e._s(e.$t("common.key_light")) + " :")]), e._v(" "), i("td", {
                staticClass: "cval",
                attrs: {id: "config_le"}
            }, [e._v(e._s(e.$t("common.key_le_no_config")))]), e._v(" "), i("td", [i("i", {
                staticClass: "el-icon-more-outline warning",
                on: {click: e.handleSelectKeyLE}
            })]), e._v(" "), i("td", [i("i", {
                staticClass: "el-icon-delete",
                on: {click: e.handleRemoveLight}
            })])])])]), e._v(" "), i("div", {staticClass: "popper__arrow"})]) : e._e(), e._v(" "), e.showstdset ? i("div", {
                staticClass: "custom el-tooltip__popper is-dark",
                staticStyle: {padding: "6px"},
                attrs: {id: "std_conf_showbox"}
            }, [i("div", [i("table", {staticClass: "key-func"}, [i("tr", {
                staticStyle: {
                    height: "1.8rem",
                    "line-height": "1.8rem"
                }
            }, [i("th", [e._v(e._s(e.$t("common.light_effect")) + ":")]), e._v(" "), e._l(e.device.currentProfile.DriverLE, function (t, o) {
                return i("td", {
                    key: o,
                    staticClass: "cval"
                }, [i("span", {attrs: {id: "std_le_" + o}}, [e._v(e._s(t.GUID ? t.Name : e.$t("common.key_le_no_config")))]), e._v(" "), i("i", {
                    staticClass: "el-icon-more-outline warning",
                    on: {
                        click: function (t) {
                            return e.handleSelectStdLE(o)
                        }
                    }
                }), e._v(" "), i("i", {
                    staticClass: "el-icon-delete error", on: {
                        click: function (t) {
                            return e.handleRemoveStdLE(o)
                        }
                    }
                })])
            })], 2), e._v(" "), e.hasfnx ? i("tr", [i("th", {staticStyle: {"text-align": "right"}}, [e._v("Fnx:")]), e._v(" "), i("td", {
                staticStyle: {
                    border: "none",
                    "text-align": "left"
                }, attrs: {colspan: "5"}
            }, [i("el-radio-group", {
                attrs: {size: "mini"},
                on: {change: e.changeFnx},
                model: {
                    value: e.stdfnxval, callback: function (t) {
                        e.stdfnxval = t
                    }, expression: "stdfnxval"
                }
            }, [i("el-radio-button", {attrs: {label: "0x0a070002"}}, [e._v(e._s(e.$t("keys.key_mode_offline_1")))]), e._v(" "), i("el-radio-button", {attrs: {label: "0x0a070003"}}, [e._v(e._s(e.$t("keys.key_mode_offline_2")))]), e._v(" "), i("el-radio-button", {attrs: {label: "0x0a070004"}}, [e._v(e._s(e.$t("keys.key_mode_offline_3")))])], 1)], 1)]) : e._e()])]), e._v(" "), i("div", {
                staticClass: "popper__arrow",
                staticStyle: {left: "2rem"}
            })]) : e._e(), e._v(" "), e.isediting ? i("div", {
                style: {
                    bottom: .4 * e.mainh + "px",
                    width: .76 * e.mainw + "px"
                }, attrs: {id: "quick_sel"}
            }, [i("el-row", [i("el-col", {attrs: {span: 24}}, [e._l(e.quickselects, function (t, o) {
                return i("el-button", {
                    key: o, attrs: {size: "mini"}, on: {
                        click: function (i) {
                            return e.selectQuickKeys(t.lcodes)
                        }
                    }, nativeOn: {
                        mouseenter: function (t) {
                            e.ismutiselect = !1
                        }, mouseleave: function (t) {
                            e.ismutiselect = !0
                        }
                    }
                }, [e._v(e._s(e.$t("common")[t.lang]))])
            }), e._v(" "), i("el-button", {
                attrs: {size: "mini"}, on: {
                    click: function (t) {
                        return e.selectQuickKeys("all")
                    }
                }, nativeOn: {
                    mouseenter: function (t) {
                        e.ismutiselect = !1
                    }, mouseleave: function (t) {
                        e.ismutiselect = !0
                    }
                }
            }, [e._v(e._s(e.$t("common.line_all")))]), e._v(" "), i("el-button", {
                attrs: {size: "mini"},
                on: {
                    click: function (t) {
                        return e.selectQuickKeys("none")
                    }
                },
                nativeOn: {
                    mouseenter: function (t) {
                        e.ismutiselect = !1
                    }, mouseleave: function (t) {
                        e.ismutiselect = !0
                    }
                }
            }, [e._v(e._s(e.$t("common.line_none")))])], 2)], 1)], 1) : e._e()], 2)
        }, a = [], l = {render: o, staticRenderFns: a};
        t.a = l
    }, 623: function (e, t, i) {
        "use strict";
        var o = function () {
            var e = this, t = e.$createElement, i = e._self._c || t;
            return i("el-row", {staticStyle: {"z-index": "4"}}, [i("el-col", {
                staticStyle: {padding: ".5rem"},
                attrs: {span: 24}
            }, [i("el-card", {
                staticStyle: {position: "relative"},
                attrs: {accordion: ""},
                model: {
                    value: e.activeName, callback: function (t) {
                        e.activeName = t
                    }, expression: "activeName"
                }
            }, [i("div", {
                // staticClass: "disablediv",
                // class: {disablehide: 0 == e.mode || e.hasModeLe && [2, 3, 4].indexOf(e.mode) >= 0 || "2" == e.leseltype}
            }), e._v(" "), i("template", {slot: "header"}, [i("i", {staticClass: "header-icon el-icon-kb-light3"}), e._v("  " + e._s(e.title) + " ( "), i("el-tag", [e._v(e._s(e.lelist.length))]), e._v(" )\n      ")], 1), e._v(" "), e.isstaticle ? i("div", {
                staticStyle: {width: "100%"},
                attrs: {id: "staticlebox"}
            }, [i("cms-lestatic", {ref: "lestatic"})], 1) : e._e(), e._v(" "), i("el-input", {
                staticClass: "input-with-select",
                attrs: {placeholder: e.$t("common.input_search_text"), size: "mini"},
                model: {
                    value: e.schfilter, callback: function (t) {
                        e.schfilter = t
                    }, expression: "schfilter"
                }
            }, [i("template", {slot: "prepend"}, [e._v(e._s(e.$t("menu.menu_le_lib")))]), e._v(" "), i("el-button", {
                attrs: {
                    slot: "append",
                    icon: "el-icon-search"
                }, slot: "append"
            })], 2), e._v(" "), i("el-table", {
                directives: [{
                    name: "loading",
                    rawName: "v-loading",
                    value: e.loading,
                    expression: "loading"
                }],
                ref: "lestable",
                staticClass: "tb-lelist",
                attrs: {
                    data: e.filterlelist,
                    "show-header": !1,
                    border: "",
                    height: e.height,
                    size: "mini",
                    "highlight-current-row": "",
                    setCurrentRow: e.leSelected,
                    "row-dblclick": e.reNameLE,
                    "empty-text": e.$t("common.no_data")
                },
                on: {"row-click": e.handleRowChange}
            }, [i("el-table-column", {
                attrs: {"show-overflow-tooltip": ""},
                scopedSlots: e._u([{
                    key: "default", fn: function (t) {
                        return ["combination" == t.row.LeType ? i("i", {staticClass: "el-icon-kb-cate1"}) : 80 == t.row.LeCate ? i("i", {staticClass: "el-icon-kb-mouse-left"}) : 1760 == t.row.LeCate ? i("i", {staticClass: "el-icon-kb-system"}) : i("i", {staticClass: "el-icon-kb-light1"}), e._v(" "), i("span", {staticStyle: {"margin-left": "10px"}}, [e._v(e._s(t.row.Name))])]
                    }
                }])
            })], 1), e._v(" "), 1 == e.leseltype ? i("div", {staticClass: "list-oper"}, [i("el-tag", {
                staticStyle: {
                    flex: "7",
                    overflow: "hidden",
                    "white-space": "nowrap",
                    "text-overflow": "ellipsis"
                }, attrs: {size: "small", type: "success"}
            }, [e._v(e._s(e.leselname || e.$t("common.unset")))]), e._v(" "), i("i", {
                staticClass: "el-icon-back",
                staticStyle: {color: "green", flex: "1", margin: "auto"}
            }), e._v(" "), i("el-button", {
                class: {"btn-breath": e.isbreath},
                staticStyle: {flex: "2"},
                attrs: {icon: "el-icon-view", loading: !1},
                on: {click: e.handleSaveModeLE}
            }, [e._v(e._s(e.$t("common.use")))]), e._v(" "), e._e()], 1) : 2 == e.leseltype ? i("div", {staticStyle: {padding: ".2rem .3rem .3rem"}}, [i("el-button-group", {staticStyle: {display: "flex"}}, [i("el-button", {
                staticStyle: {flex: "1"},
                attrs: {icon: "el-icon-edit", loading: e.iseditloading},
                on: {click: e.editLe}
            }), e._v(" "), i("el-popover", {
                attrs: {
                    placement: "left",
                    trigger: "click"
                }
            }, [i("el-form", {
                staticClass: "pop-form",
                attrs: {inline: !0}
            }, [i("el-form-item", [i("el-input", {
                model: {
                    value: e.newle.Name, callback: function (t) {
                        e.$set(e.newle, "Name", t)
                    }, expression: "newle.Name"
                }
            })], 1), e._v(" "), i("el-form-item", [i("el-button", {
                attrs: {icon: "el-icon-plus"},
                on: {click: e.addLe}
            }, [e._v(e._s(e.$t("common.create")))])], 1)], 1), e._v(" "), i("el-button", {
                staticStyle: {flex: "1"},
                attrs: {slot: "reference", icon: "el-icon-plus"},
                slot: "reference"
            })], 1), e._v(" "), i("el-button", {
                staticStyle: {flex: "1"},
                attrs: {icon: "el-icon-kb-copy"},
                on: {click: e.copyLe}
            }), e._v(" "), i("el-button", {
                staticStyle: {flex: "1"},
                attrs: {icon: "el-icon-delete", type: "danger"},
                on: {click: e.deleteLe}
            }), e._v(" "), i("el-button", {
                staticStyle: {flex: "1"},
                attrs: {icon: "el-icon-upload2"},
                on: {click: e.importLe}
            }), e._v(" "), i("el-button", {
                staticStyle: {flex: "1"},
                attrs: {icon: "el-icon-download"},
                on: {click: e.exportLe}
            })], 1)], 1) : e._e()], 2)], 1)], 1)
        }, a = [], l = {render: o, staticRenderFns: a};
        t.a = l
    }, 624: function (e, t, i) {
        var o = i(620);
        "string" == typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals);
        i(18)("64ff2c8c", o, !0, {})
    }, 625: function (e, t, i) {
        var o = i(621);
        "string" == typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals);
        i(18)("542aff16", o, !0, {})
    }, 627: function (e, t, i) {
        "use strict";
        var o = i(64), a = i.n(o), l = i(630), n = i.n(l), s = i(629), r = i.n(s);
        t.a = {
            data: function () {
                return {
                    keyset: n.a,
                    cms: window.CMS,
                    scale: .8,
                    system: "",
                    sizeForm: "",
                    combkeys: r.a,
                    curkeytext: "A",
                    curkeyval: "0x02000400",
                    combval: JSON.parse(a()(r.a.options[0].value)),
                    combtext: JSON.parse(a()(r.a.options[0].label)),
                    shortcutpath: "",
                    shortcutpathshow: "",
                    isdrivermode: !1,
                    ischange: !1,
                    isapply: !1,
                    disabled: !1,
                    islazy: !0
                }
            }, mounted: function () {
                var e = this, t = localStorage.system || "";
                e.system = t
            }, watch: {
                system: function (e, t) {
                    e != t && (localStorage.system = e.toString())
                }
            }, computed: {}, methods: {
                handleSetKeyFunc: function (e) {
                    e.IsCombFunc && (this.curkeytext = e.Name, this.curkeyval = e.DriverValue), this.$emit("changeKeyFunc", e.Name, e.DriverValue)
                }, combChange: function (e) {
                    var t = {};
                    t = this.combkeys.options.find(function (t) {
                        return t.value === e
                    }), this.combval = e, this.combtext = t.label
                }, alertInfo: function (e, t, i) {
                    this.$notify({title: e, type: t, duration: i, position: "bottom-left"})
                }, setCombFunc: function () {
                    var e = this.combtext + "+" + this.curkeytext,
                        t = "0x0" + (parseInt(this.combval) + parseInt(this.curkeyval) - parseInt(33554432)).toString(16);
                    console.log(e, t), this.$emit("changeKeyFunc", e, t)
                }, openFileDlg: function () {
                    var e = this;
                    window.openFileDialog(function (t) {
                        var i = t.lastIndexOf("/");
                        e.shortcutpath = t, e.shortcutpathshow = t.substring(i + 1), console.log(t)
                    })
                }, setShortcutFunc: function () {
                    this.$emit("changeKeyFunc", this.shortcutpathshow, this.shortcutpath)
                }, showTestInfo: function () {
                    this.alertInfo(this.$t("common.func_in_dev_info"), "warning", 1e3)
                }
            }
        }
    }, 628: function (e, t, i) {
        "use strict";
        var o = i(64), a = i.n(o);
        t.a = {
            data: function () {
                return {
                    loading: !0,
                    schfilter: "",
                    macrofilter: "",
                    filtermacrolist: [],
                    disabled: !1,
                    macroname: "",
                    macrocfg: {GUID: "", StopMode: 1, Repeats: 1}
                }
            }, props: ["height", "macrolist"], created: function () {
            }, mounted: function () {
                var e = this;
                setTimeout(function () {
                    e.filtermacrolist = e.macrolist[0].Data, e.loading = !1, e.macrofilter = e.macrolist[0].Name
                }, 1e3)
            }, watch: {
                schfilter: function (e, t) {
                    this.filtermacrolist = this.macrolist[0].Data.filter(function (t) {
                        return ~t.Name.indexOf(e)
                    })
                }
            }, methods: {
                changeMacroType: function (e) {
                    console.log("macro type changed " + e);
                    var t = this;
                    t.filtermacrolist = t.macrolist[e].Data
                }, handleCurrentChange: function (e) {
                    this.macroname = e.Name, this.macrocfg.GUID = e.GUID
                }, setMacro: function () {
                    var e = this;
                    if ("" == e.macrocfg.GUID) return void e.alertInfo("提示", "请先选择要设置的宏！", 800);
                    var t = JSON.parse(a()(this.macrocfg));
                    t.Repeats = parseInt(t.Repeats), console.log(a()(t), e.macroname), e.$emit("setKeyMacro", e.macroname, t)
                }, alertInfo: function (e, t, i) {
                    this.$notify({title: e, type: t, duration: i, position: "bottom"})
                }
            }
        }
    }, 629: function (e, t) {
        e.exports = {
            options: [{value: 33554433, label: "LCtrl"}, {value: 33554434, label: "LShift"}, {
                value: 33554440,
                label: "LWin"
            }, {value: 33554436, label: "LAlt"}, {value: 33554435, label: "LCtrl+LShift"}, {
                value: 33554437,
                label: "LCtrl+LAlt"
            }, {value: 33554441, label: "LCtrl+LWin"}, {value: 33554438, label: "LShift+LAlt"}, {
                value: 33554442,
                label: "LShift+LWin"
            }, {value: 33554444, label: "LAlt+LWin"}, {value: 33554439, label: "LCtrl+LShift+LAlt"}, {
                value: 33554443,
                label: "LCtrl+LShift+LWin"
            }, {value: 33554446, label: "LShift+LAlt+LWin"}, {
                value: 33554447,
                label: "LCtrl+LShift+LAlt+LWin"
            }, {value: 33554448, label: "RCtrl"}, {value: 33554464, label: "RShift"}, {
                value: 33554560,
                label: "RWin"
            }, {value: 33554496, label: "RAlt"}, {value: 33554480, label: "RCtrl+RShift"}, {
                value: 33554512,
                label: "RCtrl+RAlt"
            }, {value: 33554576, label: "RCtrl+RWin"}, {value: 33554528, label: "RShift+RAlt"}, {
                value: 33554592,
                label: "RShift+RWin"
            }, {value: 33554624, label: "RAlt+RWin"}, {value: 33554544, label: "RCtrl+RShift+RAlt"}, {
                value: 33554608,
                label: "RCtrl+RShift+RWin"
            }, {value: 33554656, label: "RShift+RAlt+RWin"}, {value: 33554672, label: "RCtrl+RShift+RAlt+RWin"}],
            selected: 33554433
        }
    }, 630: function (e, t) {
        e.exports = [{
            title: "基本功能",
            keytype: "primary",
            lang: "kb_primary",
            icon: "el-icon-kb-keyboard",
            pid: "0",
            pname: "singlebutton",
            keys: [{
                linekeys: [{
                    LocationCode: 0,
                    LogicCode: 47,
                    Name: "Esc",
                    LangTitle: "key_esc",
                    DriverValue: "0x02002900",
                    IsCombFunc: !0
                }, {
                    LocationCode: -1,
                    LogicCode: -1,
                    Name: "禁用",
                    LangTitle: "key_disable",
                    Icon: "el-icon-kb-disable",
                    DriverValue: "0x02000000",
                    Class: "el-button--danger"
                }, {
                    LocationCode: 2,
                    LogicCode: 63,
                    Name: "F1",
                    LangTitle: "key_f1",
                    DriverValue: "0x02003A00",
                    IsCombFunc: !0
                }, {
                    LocationCode: 3,
                    LogicCode: 64,
                    Name: "F2",
                    LangTitle: "key_f2",
                    DriverValue: "0x02003B00",
                    IsCombFunc: !0
                }, {
                    LocationCode: 4,
                    LogicCode: 65,
                    Name: "F3",
                    LangTitle: "key_f3",
                    DriverValue: "0x02003C00",
                    IsCombFunc: !0
                }, {
                    LocationCode: 5,
                    LogicCode: 66,
                    Name: "F4",
                    LangTitle: "key_f4",
                    DriverValue: "0x02003D00",
                    IsCombFunc: !0
                }, {
                    LocationCode: 7,
                    LogicCode: 67,
                    Name: "F5",
                    LangTitle: "key_f5",
                    DriverValue: "0x02003E00",
                    Class: "pad150",
                    IsCombFunc: !0
                }, {
                    LocationCode: 8,
                    LogicCode: 68,
                    Name: "F6",
                    LangTitle: "key_f6",
                    DriverValue: "0x02003F00",
                    IsCombFunc: !0
                }, {
                    LocationCode: 9,
                    LogicCode: 69,
                    Name: "F7",
                    LangTitle: "key_f7",
                    DriverValue: "0x02004000",
                    IsCombFunc: !0
                }, {
                    LocationCode: 10,
                    LogicCode: 70,
                    Name: "F8",
                    LangTitle: "key_f8",
                    DriverValue: "0x02004100",
                    IsCombFunc: !0
                }, {
                    LocationCode: 11,
                    LogicCode: 71,
                    Name: "F9",
                    LangTitle: "key_f9",
                    DriverValue: "0x02004200",
                    Class: "pad150",
                    IsCombFunc: !0
                }, {
                    LocationCode: 12,
                    LogicCode: 72,
                    Name: "F10",
                    LangTitle: "key_f10",
                    DriverValue: "0x02004300",
                    IsCombFunc: !0
                }, {
                    LocationCode: 13,
                    LogicCode: 73,
                    Name: "F11",
                    LangTitle: "key_f11",
                    DriverValue: "0x02004400",
                    IsCombFunc: !0
                }, {
                    LocationCode: 14,
                    LogicCode: 74,
                    Name: "F12",
                    LangTitle: "key_f12",
                    DriverValue: "0x02004500",
                    IsCombFunc: !0
                }, {
                    LocationCode: 15,
                    LogicCode: 75,
                    Name: "PS",
                    LangTitle: "key_printscreen",
                    DriverValue: "0x02004600",
                    IsCombFunc: !0
                }, {
                    LocationCode: 16,
                    LogicCode: 76,
                    Name: "SL",
                    LangTitle: "key_scrolllock",
                    DriverValue: "0x02004700",
                    IsCombFunc: !0
                }, {
                    LocationCode: 17,
                    LogicCode: 77,
                    Name: "PB",
                    LangTitle: "key_pause",
                    DriverValue: "0x02004800",
                    NewLine: !0,
                    IsCombFunc: !0
                }]
            }, {
                linekeys: [{
                    LocationCode: 22,
                    LogicCode: 58,
                    Name: "`",
                    LangTitle: "key_wave",
                    DriverValue: "0x02003500",
                    Class: "rowstart",
                    IsCombFunc: !0
                }, {
                    LocationCode: 23,
                    LogicCode: 36,
                    Name: "1",
                    LangTitle: "key_1",
                    DriverValue: "0x02001E00",
                    IsCombFunc: !0
                }, {
                    LocationCode: 24,
                    LogicCode: 37,
                    Name: "2",
                    LangTitle: "key_2",
                    DriverValue: "0x02001F00",
                    IsCombFunc: !0
                }, {
                    LocationCode: 25,
                    LogicCode: 38,
                    Name: "3",
                    LangTitle: "key_3",
                    DriverValue: "0x02002000",
                    IsCombFunc: !0
                }, {
                    LocationCode: 26,
                    LogicCode: 39,
                    Name: "4",
                    LangTitle: "key_4",
                    DriverValue: "0x02002100",
                    IsCombFunc: !0
                }, {
                    LocationCode: 27,
                    LogicCode: 40,
                    Name: "5",
                    LangTitle: "key_5",
                    DriverValue: "0x02002200",
                    IsCombFunc: !0
                }, {
                    LocationCode: 28,
                    LogicCode: 41,
                    Name: "6",
                    LangTitle: "key_6",
                    DriverValue: "0x02002300",
                    IsCombFunc: !0
                }, {
                    LocationCode: 29,
                    LogicCode: 42,
                    Name: "7",
                    LangTitle: "key_7",
                    DriverValue: "0x02002400",
                    IsCombFunc: !0
                }, {
                    LocationCode: 30,
                    LogicCode: 43,
                    Name: "8",
                    LangTitle: "key_8",
                    DriverValue: "0x02002500",
                    IsCombFunc: !0
                }, {
                    LocationCode: 31,
                    LogicCode: 44,
                    Name: "9",
                    LangTitle: "key_9",
                    DriverValue: "0x02002600",
                    IsCombFunc: !0
                }, {
                    LocationCode: 32,
                    LogicCode: 45,
                    Name: "0",
                    LangTitle: "key_0",
                    DriverValue: "0x02002700",
                    IsCombFunc: !0
                }, {
                    LocationCode: 33,
                    LogicCode: 51,
                    Name: "-",
                    LangTitle: "key_subtract",
                    DriverValue: "0x02002D00",
                    IsCombFunc: !0
                }, {
                    LocationCode: 34,
                    LogicCode: 52,
                    Name: "=",
                    LangTitle: "key_add",
                    DriverValue: "0x02002E00",
                    IsCombFunc: !0
                }, {
                    LocationCode: 36,
                    LogicCode: 48,
                    Name: "Backspace",
                    LangTitle: "key_backspace",
                    LangTitleMac: "key_backspace_mac",
                    DriverValue: "0x02002A00",
                    Class: "l200",
                    IsCombFunc: !0
                }, {
                    LocationCode: 37,
                    LogicCode: 78,
                    Name: "INS",
                    LangTitle: "key_insert",
                    DriverValue: "0x02004900",
                    IsCombFunc: !0
                }, {
                    LocationCode: 38,
                    LogicCode: 79,
                    Name: "HM",
                    LangTitle: "key_home",
                    DriverValue: "0x02004A00",
                    IsCombFunc: !0
                }, {
                    LocationCode: 39,
                    LogicCode: 80,
                    Name: "PU",
                    LangTitle: "key_pageup",
                    DriverValue: "0x02004B00",
                    NewLine: !0,
                    IsCombFunc: !0
                }]
            }, {
                linekeys: [{
                    LocationCode: 44,
                    LogicCode: 49,
                    Name: "Tab",
                    LangTitle: "key_tab",
                    DriverValue: "0x02002B00",
                    Class: "rowstart l150",
                    IsCombFunc: !0
                }, {
                    LocationCode: 45,
                    LogicCode: 26,
                    Name: "Q",
                    LangTitle: "key_q",
                    DriverValue: "0x02001400",
                    IsCombFunc: !0
                }, {
                    LocationCode: 46,
                    LogicCode: 32,
                    Name: "W",
                    LangTitle: "key_w",
                    DriverValue: "0x02001A00",
                    IsCombFunc: !0
                }, {
                    LocationCode: 47,
                    LogicCode: 14,
                    Name: "E",
                    LangTitle: "key_e",
                    DriverValue: "0x02000800",
                    IsCombFunc: !0
                }, {
                    LocationCode: 48,
                    LogicCode: 27,
                    Name: "R",
                    LangTitle: "key_r",
                    DriverValue: "0x02001500",
                    IsCombFunc: !0
                }, {
                    LocationCode: 49,
                    LogicCode: 29,
                    Name: "T",
                    LangTitle: "key_t",
                    DriverValue: "0x02001700",
                    IsCombFunc: !0
                }, {
                    LocationCode: 50,
                    LogicCode: 34,
                    Name: "Y",
                    LangTitle: "key_y",
                    DriverValue: "0x02001C00",
                    IsCombFunc: !0
                }, {
                    LocationCode: 51,
                    LogicCode: 30,
                    Name: "U",
                    LangTitle: "key_u",
                    DriverValue: "0x02001800",
                    IsCombFunc: !0
                }, {
                    LocationCode: 52,
                    LogicCode: 18,
                    Name: "I",
                    LangTitle: "key_i",
                    DriverValue: "0x02000C00",
                    IsCombFunc: !0
                }, {
                    LocationCode: 53,
                    LogicCode: 24,
                    Name: "O",
                    LangTitle: "key_o",
                    DriverValue: "0x02001200",
                    IsCombFunc: !0
                }, {
                    LocationCode: 54,
                    LogicCode: 25,
                    Name: "P",
                    LangTitle: "key_p",
                    DriverValue: "0x02001300",
                    IsCombFunc: !0
                }, {
                    LocationCode: 55,
                    LogicCode: 53,
                    Name: "[",
                    LangTitle: "key_square_bracket_left",
                    DriverValue: "0x02002F00",
                    IsCombFunc: !0
                }, {
                    LocationCode: 56,
                    LogicCode: 54,
                    Name: "]",
                    LangTitle: "key_square_bracket_right",
                    DriverValue: "0x02003000",
                    IsCombFunc: !0
                }, {
                    LocationCode: 58,
                    LogicCode: 55,
                    Name: "|\\",
                    LangTitle: "key_backslash",
                    DriverValue: "0x02003100",
                    Class: "l150",
                    IsCombFunc: !0
                }, {
                    LocationCode: 59,
                    LogicCode: 81,
                    Name: "DEL",
                    LangTitle: "key_delete",
                    DriverValue: "0x02004C00",
                    IsCombFunc: !0
                }, {
                    LocationCode: 60,
                    LogicCode: 82,
                    Name: "END",
                    LangTitle: "key_end",
                    DriverValue: "0x02004D00",
                    IsCombFunc: !0
                }, {
                    LocationCode: 61,
                    LogicCode: 83,
                    Name: "PD",
                    LangTitle: "key_pagedown",
                    DriverValue: "0x02004E00",
                    NewLine: !0,
                    IsCombFunc: !0
                }]
            }, {
                linekeys: [{
                    LocationCode: 66,
                    LogicCode: 62,
                    Name: "Caps",
                    LangTitle: "key_caps",
                    DriverValue: "0x02003900",
                    Class: "rowstart l175",
                    IsCombFunc: !0
                }, {
                    LocationCode: 67,
                    LogicCode: 10,
                    Name: "A",
                    LangTitle: "key_a",
                    DriverValue: "0x02000400",
                    IsCombFunc: !0
                }, {
                    LocationCode: 68,
                    LogicCode: 28,
                    Name: "S",
                    LangTitle: "key_s",
                    DriverValue: "0x02001600",
                    IsCombFunc: !0
                }, {
                    LocationCode: 69,
                    LogicCode: 13,
                    Name: "D",
                    LangTitle: "key_d",
                    DriverValue: "0x02000700",
                    IsCombFunc: !0
                }, {
                    LocationCode: 70,
                    LogicCode: 15,
                    Name: "F",
                    LangTitle: "key_f",
                    DriverValue: "0x02000900",
                    IsCombFunc: !0
                }, {
                    LocationCode: 71,
                    LogicCode: 16,
                    Name: "G",
                    LangTitle: "key_g",
                    DriverValue: "0x02000A00",
                    IsCombFunc: !0
                }, {
                    LocationCode: 72,
                    LogicCode: 17,
                    Name: "H",
                    LangTitle: "key_h",
                    DriverValue: "0x02000B00",
                    IsCombFunc: !0
                }, {
                    LocationCode: 73,
                    LogicCode: 19,
                    Name: "J",
                    LangTitle: "key_j",
                    DriverValue: "0x02000D00",
                    IsCombFunc: !0
                }, {
                    LocationCode: 74,
                    LogicCode: 20,
                    Name: "K",
                    LangTitle: "key_k",
                    DriverValue: "0x02000E00",
                    IsCombFunc: !0
                }, {
                    LocationCode: 75,
                    LogicCode: 21,
                    Name: "L",
                    LangTitle: "key_l",
                    DriverValue: "0x02000F00",
                    IsCombFunc: !0
                }, {
                    LocationCode: 76,
                    LogicCode: 56,
                    Name: ";",
                    LangTitle: "key_semicolon",
                    DriverValue: "0x02003300",
                    IsCombFunc: !0
                }, {
                    LocationCode: 77,
                    LogicCode: 57,
                    Name: "'",
                    LangTitle: "key_quotation_sign",
                    DriverValue: "0x02003400",
                    IsCombFunc: !0
                }, {
                    LocationCode: 79,
                    LogicCode: 46,
                    Name: "Enter",
                    LangTitle: "key_enter",
                    LangTitleMac: "key_enter_mac",
                    DriverValue: "0x02002800",
                    Class: "l225",
                    NewLine: !0,
                    IsCombFunc: !0
                }, {
                    LocationCode: -1,
                    LogicCode: -1,
                    Name: "Nothing",
                    LangTitle: "key_nothing",
                    DriverValue: "0",
                    Class: "hide"
                }, {
                    LocationCode: -1,
                    LogicCode: -1,
                    Name: "Nothing",
                    LangTitle: "key_nothing",
                    DriverValue: "0",
                    Class: "hide"
                }, {
                    LocationCode: -1,
                    LogicCode: -1,
                    Name: "Nothing",
                    LangTitle: "key_nothing",
                    DriverValue: "0",
                    Class: "hide"
                }]
            }, {
                linekeys: [{
                    LocationCode: 88,
                    LogicCode: 3,
                    Name: "LShift",
                    LangTitle: "key_l_shift",
                    DriverValue: "0x02000002",
                    Class: "rowstart l125"
                }, {
                    LocationCode: 89,
                    LogicCode: 111,
                    Name: ">|",
                    LangTitle: "key_backslash",
                    DriverValue: "0x02006400",
                    IsCombFunc: !0
                }, {
                    LocationCode: 90,
                    LogicCode: 35,
                    Name: "Z",
                    LangTitle: "key_z",
                    DriverValue: "0x02001D00",
                    IsCombFunc: !0
                }, {
                    LocationCode: 91,
                    LogicCode: 33,
                    Name: "X",
                    LangTitle: "key_x",
                    DriverValue: "0x02001B00",
                    IsCombFunc: !0
                }, {
                    LocationCode: 92,
                    LogicCode: 12,
                    Name: "C",
                    LangTitle: "key_c",
                    DriverValue: "0x02000600",
                    IsCombFunc: !0
                }, {
                    LocationCode: 93,
                    LogicCode: 31,
                    Name: "V",
                    LangTitle: "key_v",
                    DriverValue: "0x02001900",
                    IsCombFunc: !0
                }, {
                    LocationCode: 94,
                    LogicCode: 11,
                    Name: "B",
                    LangTitle: "key_b",
                    DriverValue: "0x02000500",
                    IsCombFunc: !0
                }, {
                    LocationCode: 95,
                    LogicCode: 23,
                    Name: "N",
                    LangTitle: "key_n",
                    DriverValue: "0x02001100",
                    IsCombFunc: !0
                }, {
                    LocationCode: 96,
                    LogicCode: 22,
                    Name: "M",
                    LangTitle: "key_m",
                    DriverValue: "0x02001000",
                    IsCombFunc: !0
                }, {
                    LocationCode: 97,
                    LogicCode: 59,
                    Name: ",",
                    LangTitle: "key_comma",
                    DriverValue: "0x02003600",
                    IsCombFunc: !0
                }, {
                    LocationCode: 98,
                    LogicCode: 60,
                    Name: ".",
                    LangTitle: "key_fullstop",
                    DriverValue: "0x02003700",
                    IsCombFunc: !0
                }, {
                    LocationCode: 99,
                    LogicCode: 61,
                    Name: "/",
                    LangTitle: "key_slash",
                    DriverValue: "0x02003800",
                    IsCombFunc: !0
                }, {
                    LocationCode: 102,
                    LogicCode: 7,
                    Name: "RShift",
                    LangTitle: "key_r_shift",
                    DriverValue: "0x02000020",
                    Class: "l275"
                }, {
                    LocationCode: -1,
                    LogicCode: -1,
                    Name: "Nothing",
                    LangTitle: "key_nothing",
                    DriverValue: "0",
                    Class: "hide"
                }, {
                    LocationCode: 104,
                    LogicCode: 87,
                    Name: "↑",
                    LangTitle: "key_arrow_up",
                    DriverValue: "0x02005200",
                    NewLine: !0,
                    IsCombFunc: !0
                }, {
                    LocationCode: -1,
                    LogicCode: -1,
                    Name: "Nothing",
                    LangTitle: "key_nothing",
                    DriverValue: "0",
                    Class: "hide"
                }]
            }, {
                linekeys: [{
                    LocationCode: 110,
                    LogicCode: 2,
                    Name: "LCtl",
                    LangTitle: "key_l_control",
                    DriverValue: "0x02000001",
                    Class: "rowstart l125"
                }, {
                    LocationCode: 111,
                    LogicCode: 5,
                    Name: "Win",
                    LangTitle: "key_l_win",
                    LangTitleMac: "key_l_cmd",
                    LangTitleLinux: "key_l_win",
                    DriverValue: "0x02000008",
                    Class: "l125"
                }, {
                    LocationCode: 112,
                    LogicCode: 4,
                    Name: "LAlt",
                    LangTitle: "key_l_alt",
                    LangTitleMac: "key_l_option",
                    LangTitleLinux: "key_l_alt",
                    DriverValue: "0x02000004",
                    Class: "l125"
                }, {
                    LocationCode: 116,
                    LogicCode: 50,
                    Name: "Space",
                    LangTitle: "key_space",
                    DriverValue: "0x02002C00",
                    Class: "l625",
                    IsCombFunc: !0
                }, {
                    LocationCode: 120,
                    LogicCode: 8,
                    Name: "RAlt",
                    LangTitle: "key_r_alt",
                    LangTitleMac: "key_r_option",
                    LangTitleLinux: "key_r_alt",
                    DriverValue: "0x02000040",
                    Class: "l125"
                }, {
                    LocationCode: 121,
                    LogicCode: 9,
                    Name: "RWin",
                    LangTitle: "key_r_win",
                    LangTitleMac: "key_r_cmd",
                    LangTitleLinux: "key_r_win",
                    DriverValue: "0x02000080",
                    Class: "1125"
                }, {
                    LocationCode: 122,
                    LogicCode: 1,
                    Name: "App",
                    LangTitle: "key_menu",
                    DriverValue: "0x02006500",
                    Class: "l125",
                    IsCombFunc: !0
                }, {
                    LocationCode: 124,
                    LogicCode: 6,
                    Name: "RCtl",
                    LangTitle: "key_r_control",
                    DriverValue: "0x02000010",
                    Class: "l125"
                }, {
                    LocationCode: 125,
                    LogicCode: 85,
                    Name: "←",
                    LangTitle: "key_arrow_left",
                    DriverValue: "0x02005000",
                    IsCombFunc: !0
                }, {
                    LocationCode: 126,
                    LogicCode: 86,
                    Name: "↓",
                    LangTitle: "key_arrow_down",
                    DriverValue: "0x02005100",
                    IsCombFunc: !0
                }, {
                    LocationCode: 127,
                    LogicCode: 84,
                    Name: "→",
                    LangTitle: "key_arrow_right",
                    DriverValue: "0x02004F00",
                    IsCombFunc: !0
                }]
            }]
        }, {
            title: "小键盘数字键区域",
            keytype: "pad",
            lang: "kb_pad",
            icon: "el-icon-kb-key-calc",
            pid: "0",
            pname: "singlebutton",
            keys: [{
                linekeys: [{
                    LocationCode: 40,
                    LogicCode: 88,
                    Name: "NumLk",
                    LangTitle: "key_num_lock",
                    DriverValue: "0x02005300",
                    Class: "l150",
                    IsCombFunc: !0
                }, {
                    LocationCode: 41,
                    LogicCode: 89,
                    Name: "Num/",
                    LangTitle: "key_num_decimal",
                    DriverValue: "0x02005400",
                    Class: "l150",
                    IsCombFunc: !0
                }, {
                    LocationCode: 42,
                    LogicCode: 90,
                    Name: "Num*",
                    LangTitle: "key_num_multiply",
                    DriverValue: "0x02005500",
                    Class: "l150",
                    IsCombFunc: !0
                }, {
                    LocationCode: 43,
                    LogicCode: 91,
                    Name: "Num-",
                    LangTitle: "key_num_subtract",
                    DriverValue: "0x02005600",
                    Class: "l150",
                    IsCombFunc: !0
                }]
            }, {
                linekeys: [{
                    LocationCode: 62,
                    LogicCode: 100,
                    Name: "Num7",
                    LangTitle: "key_num_7",
                    DriverValue: "0x02005F00",
                    Class: "l150",
                    IsCombFunc: !0
                }, {
                    LocationCode: 63,
                    LogicCode: 101,
                    Name: "Num8",
                    LangTitle: "key_num_8",
                    DriverValue: "0x02006000",
                    Class: "l150",
                    IsCombFunc: !0
                }, {
                    LocationCode: 64,
                    LogicCode: 102,
                    Name: "Num9",
                    LangTitle: "key_num_9",
                    DriverValue: "0x02006100",
                    Class: "l150",
                    IsCombFunc: !0
                }, {
                    LocationCode: 65,
                    LogicCode: 92,
                    Name: "Num+",
                    LangTitle: "key_num_add",
                    DriverValue: "0x02005700",
                    Class: "l150",
                    IsCombFunc: !0
                }]
            }, {
                linekeys: [{
                    LocationCode: 84,
                    LogicCode: 97,
                    Name: "Num4",
                    LangTitle: "key_num_4",
                    DriverValue: "0x02005C00",
                    Class: "l150",
                    IsCombFunc: !0
                }, {
                    LocationCode: 85,
                    LogicCode: 98,
                    Name: "Num5",
                    LangTitle: "key_num_5",
                    DriverValue: "0x02005D00",
                    Class: "l150",
                    IsCombFunc: !0
                }, {
                    LocationCode: 86,
                    LogicCode: 99,
                    Name: "Num6",
                    LangTitle: "key_num_6",
                    DriverValue: "0x02005E00",
                    Class: "l150",
                    IsCombFunc: !0
                }]
            }, {
                linekeys: [{
                    LocationCode: 106,
                    LogicCode: 94,
                    Name: "Num1",
                    LangTitle: "key_num_1",
                    DriverValue: "0x02005900",
                    Class: "l150",
                    IsCombFunc: !0
                }, {
                    LocationCode: 107,
                    LogicCode: 95,
                    Name: "Num2",
                    LangTitle: "key_num_2",
                    DriverValue: "0x02005A00",
                    Class: "l150",
                    IsCombFunc: !0
                }, {
                    LocationCode: 108,
                    LogicCode: 96,
                    Name: "Num3",
                    LangTitle: "key_num_3",
                    DriverValue: "0x02005B00",
                    Class: "l150",
                    IsCombFunc: !0
                }]
            }, {
                linekeys: [{
                    LocationCode: 128,
                    LogicCode: 103,
                    Name: "Num0",
                    LangTitle: "key_num_0",
                    DriverValue: "0x02006200",
                    Class: "l300",
                    IsCombFunc: !0
                }, {
                    LocationCode: 130,
                    LogicCode: 104,
                    Name: "Num.",
                    LangTitle: "key_num_fullstop",
                    DriverValue: "0x02006300",
                    Class: "l150",
                    IsCombFunc: !0
                }, {
                    LocationCode: 109,
                    LogicCode: 93,
                    Name: "Num←",
                    LangTitle: "key_num_enter",
                    DriverValue: "0x02005800",
                    Class: "l150",
                    IsCombFunc: !0
                }]
            }]
        }, {
            title: "多媒体",
            keytype: "media",
            lang: "kb_media",
            icon: "el-icon-kb-key-media",
            pid: "4",
            pname: "media",
            keys: [{
                linekeys: [{
                    Name: "媒体播放器",
                    LangTitle: "key_media_player",
                    DriverValue: "0x03000183",
                    Class: "l225"
                }, {
                    Name: "播放/暂停",
                    LangTitle: "key_media_play_pause",
                    DriverValue: "0x030000CD",
                    Class: "l225"
                }, {Name: "停止", LangTitle: "key_media_stop", DriverValue: "0x030000B7", Class: "l225"}]
            }, {
                linekeys: [{
                    Name: "上一曲",
                    LangTitle: "key_media_prev",
                    DriverValue: "0x030000B6",
                    Class: "rowstart l225"
                }, {Name: "下一曲", LangTitle: "key_media_next", DriverValue: "0x030000B5", Class: "l225"}]
            }, {
                linekeys: [{
                    Name: "音量加",
                    LangTitle: "key_media_volume_inc",
                    DriverValue: "0x030000E9",
                    Class: "rowstart l225"
                }, {
                    Name: "音量减",
                    LangTitle: "key_media_volume_dec",
                    DriverValue: "0x030000EA",
                    Class: "l225"
                }, {Name: "静音", LangTitle: "key_media_volume_mute", DriverValue: "0x030000E2", Class: "l225"}]
            }]
        }, {
            title: "系统",
            keytype: "system",
            lang: "kb_system",
            icon: "el-icon-kb-computer2",
            pid: "5",
            pname: "system",
            keys: [{
                linekeys: [{
                    Name: "浏览器后退",
                    LangTitle: "key_brower_back",
                    DriverValue: "0x03000224",
                    Class: "l225"
                }, {
                    Name: "浏览器前进",
                    LangTitle: "key_brower_advance",
                    DriverValue: "0x03000225",
                    Class: "l225"
                }, {
                    Name: "浏览器刷新",
                    LangTitle: "key_brower_refresh",
                    DriverValue: "0x03000227",
                    Class: "l225"
                }, {
                    Name: "浏览器收藏",
                    LangTitle: "key_brower_collection",
                    DriverValue: "0x0300022A",
                    Class: "l225"
                }, {Name: "浏览器主页", LangTitle: "key_brower_home", DriverValue: "0x03000223", Class: "l225"}]
            }, {
                linekeys: [{
                    LocationCode: -1,
                    LogicCode: -1,
                    Name: "Email",
                    LangTitle: "key_email",
                    DriverValue: "0x0300018A",
                    Class: "l225"
                }, {
                    LocationCode: -1,
                    LogicCode: -1,
                    Name: "我的电脑",
                    LangTitle: "key_my_computer",
                    DriverValue: "0x03000194",
                    Class: "l225"
                }, {
                    LocationCode: -1,
                    LogicCode: -1,
                    Name: "计算器",
                    LangTitle: "key_calculator",
                    DriverValue: "0x03000192",
                    Class: "l225"
                }]
            }, {
                linekeys: [{Name: "复制", DriverValue: "0x02000601", LangTitle: "key_copy", Class: "l225"}, {
                    Name: "粘贴",
                    DriverValue: "0x02001901",
                    LangTitle: "key_paste",
                    Class: "l225"
                }, {Name: "截屏", DriverValue: "0x02004600", LangTitle: "key_screenshot", Class: "l225"}]
            }, {
                linekeys: [{
                    LocationCode: -1,
                    LogicCode: -1,
                    Name: "F13",
                    LangTitle: "key_f13",
                    DriverValue: "0x02006800"
                }, {
                    LocationCode: -1,
                    LogicCode: -1,
                    Name: "F14",
                    LangTitle: "key_f14",
                    DriverValue: "0x02006900"
                }, {
                    LocationCode: -1,
                    LogicCode: -1,
                    Name: "F15",
                    LangTitle: "key_f15",
                    DriverValue: "0x02006A00"
                }, {
                    LocationCode: -1,
                    LogicCode: -1,
                    Name: "F16",
                    LangTitle: "key_f16",
                    DriverValue: "0x02006B00"
                }, {
                    LocationCode: -1,
                    LogicCode: -1,
                    Name: "F17",
                    LangTitle: "key_f17",
                    DriverValue: "0x02006C00"
                }, {
                    LocationCode: -1,
                    LogicCode: -1,
                    Name: "F18",
                    LangTitle: "key_f18",
                    DriverValue: "0x02006D00"
                }, {
                    LocationCode: -1,
                    LogicCode: -1,
                    Name: "F19",
                    LangTitle: "key_f19",
                    DriverValue: "0x02006E00"
                }, {
                    LocationCode: -1,
                    LogicCode: -1,
                    Name: "F20",
                    LangTitle: "key_f20",
                    DriverValue: "0x02006F00"
                }, {
                    LocationCode: -1,
                    LogicCode: -1,
                    Name: "F21",
                    LangTitle: "key_f21",
                    DriverValue: "0x02007000"
                }, {
                    LocationCode: -1,
                    LogicCode: -1,
                    Name: "F22",
                    LangTitle: "key_f22",
                    DriverValue: "0x02007100"
                }, {
                    LocationCode: -1,
                    LogicCode: -1,
                    Name: "F23",
                    LangTitle: "key_f23",
                    DriverValue: "0x02007200"
                }, {LocationCode: -1, LogicCode: -1, Name: "F24", LangTitle: "key_f24", DriverValue: "0x02007300"}]
            }]
        }, {
            title: "鼠标",
            keytype: "mouse",
            lang: "kb_mouse",
            icon: "el-icon-kb-mouse4",
            pid: "3",
            pname: "mouse",
            keys: [{
                linekeys: [{
                    Name: "单击左键",
                    LangTitle: "key_mouse_left_click",
                    DriverValue: "0x01010001",
                    Class: "l225"
                }, {
                    Name: "单机右键",
                    LangTitle: "key_mouse_right_click",
                    DriverValue: "0x01010002",
                    Class: "l225"
                }, {
                    Name: "单机滚轮",
                    LangTitle: "key_mouse_middle_click",
                    DriverValue: "0x01010004",
                    Class: "l225"
                }, {Name: "后退", LangTitle: "key_mouse_back", DriverValue: "0x01010008", Class: "l225"}, {
                    Name: "前进",
                    LangTitle: "key_mouse_advance",
                    DriverValue: "0x01010010",
                    Class: "l225"
                }]
            }]
        }, {
            title: "禁用",
            keytype: "disable",
            lang: "kb_disable",
            icon: "el-icon-kb-disabled1",
            pid: "6",
            pname: "disable",
            keys: [{
                linekeys: [{
                    Name: "禁用",
                    LangTitle: "key_disable",
                    DriverValue: "0x02000000",
                    Class: "l250"
                }, {
                    Name: "禁用全部",
                    LangTitle: "key_disable_all",
                    DriverValue: "disable_all",
                    Class: "l250"
                }, {Name: "取消禁用", LangTitle: "key_disable_cancel", DriverValue: "disable_enable", Class: "l250"}]
            }, {
                linekeys: [{
                    Name: "禁用数字键",
                    LangTitle: "key_disable_num",
                    DriverValue: "disable_num",
                    Class: "l250"
                }, {
                    Name: "禁用pad",
                    LangTitle: "key_disable_pad",
                    DriverValue: "disable_pad",
                    Class: "l250"
                }, {
                    Name: "禁用F1-F12",
                    LangTitle: "key_disable_fx",
                    DriverValue: "disable_fx",
                    Class: "l250"
                }, {Name: "禁用字母", LangTitle: "key_disable_letter", DriverValue: "disable_letter", Class: "l250"}]
            }, {
                linekeys: [{
                    Name: "禁用符号",
                    LangTitle: "key_disable_symbol",
                    DriverValue: "disable_symbol",
                    Class: "rowstart l250"
                }, {
                    Name: "禁用控制键",
                    LangTitle: "key_disable_ctrls",
                    DriverValue: "disable_ctrls",
                    Class: "l250"
                }, {
                    Name: "禁用九键",
                    LangTitle: "key_disable_funcs",
                    DriverValue: "disable_func9",
                    Class: "l250"
                }, {Name: "禁用方向键", LangTitle: "key_disable_direction", DriverValue: "disable_direction", Class: "l250"}]
            }]
        }, {
            title: "层瞬时开关",
            keytype: "mode-layer-temp-switch",
            lang: "mode_layer_temp_switch",
            icon: "el-icon-kb-copy1",
            pid: "7",
            pname: "Fnx",
            keys: [{
                linekeys: [{
                    Name: "标准模式",
                    LangTitle: "key_mode_std",
                    DriverValue: "0x0a070001",
                    Class: "l225"
                }, {
                    Name: "离线1",
                    LangTitle: "key_mode_offline_1",
                    DriverValue: "0x0a070002",
                    Class: "l225"
                }, {
                    Name: "离线2",
                    LangTitle: "key_mode_offline_2",
                    DriverValue: "0x0a070003",
                    Class: "l225"
                }, {Name: "离线3", LangTitle: "key_mode_offline_3", DriverValue: "0x0a070004", Class: "l225"}]
            }]
        }]
    }, 631: function (e, t, i) {
        t = e.exports = i(10)(void 0), t.push([e.i, ".el-input-group__prepend{width:3rem}.macrolist-oper{padding:.4rem 1rem}.edit-cell{background:#333;-webkit-appearance:none;background-image:none;border-radius:4px;border:1px solid #111;box-sizing:border-box;color:#aaa;display:inline-block;font-size:inherit;height:1.6rem;line-height:1.6rem;outline:0;padding:0 1rem;transition:border-color .2s cubic-bezier(.645,.045,.355,1);width:100%}.edit-cell.mini{width:3rem;padding:0 .2rem;text-align:center}", ""])
    }, 632: function (e, t, i) {
        t = e.exports = i(10)(void 0), t.push([e.i, ".tab-icon i{font-size:1rem}.keyset-foot{background-color:rgba(1,1,1,.5);padding:.4vw 2vw}.keyset-foot .el-form-item{margin-bottom:.2vw}.el-tabs__content{padding:1.5vw;height:17vw}.el-tabs--border-card .el-tabs__content{padding:1vw}.el-button--mini.is-round{padding:.6vw .8vw}.key-btn.el-button--danger{color:red;border-color:red}.key-btn{width:3.5vw;padding:.6vw 0}.key-btn.l125{width:4.375vw}.key-btn.l150{width:5.5vw}.key-btn.l175{width:6.625vw}.key-btn.l200{width:7.5vw}.key-btn.l225{width:8.375vw}.key-btn.l250{width:10vw}.key-btn.l275{width:10.625vw}.key-btn.l300{width:11.5vw}.key-btn.l625{width:26.225vw}.key-btn.hide{visibility:hidden}.key-btn.noedit{width:8.375vw;cursor:not-allowed;color:#888}.keyset-tab .el-button{margin-left:.5vw;margin-bottom:.6vw}.keyset-tab .el-button.pad150{margin-left:2.5vw}", ""])
    }, 634: function (e, t, i) {
        "use strict";
        var o = function () {
            var e = this, t = e.$createElement, i = e._self._c || t;
            return i("el-row", [i("el-col", {
                staticStyle: {padding: ".5rem"},
                attrs: {span: 24}
            }, [i("el-card", {staticStyle: {position: "relative"}}, [i("div", {
                // staticClass: "disablediv",
                // class: {disablehide: !e.disabled}
            }), e._v(" "), i("template", {slot: "header"}, [i("i", {staticClass: "header-icon el-icon-document"}), e._v(" " + e._s(e.$t("macro.macro_setting_title")) + "\n      ")]), e._v(" "), i("el-input", {
                staticClass: "input-with-select",
                attrs: {placeholder: e.$t("common.input_search_text"), size: "mini"},
                model: {
                    value: e.schfilter, callback: function (t) {
                        e.schfilter = t
                    }, expression: "schfilter"
                }
            }, [i("el-select", {
                staticStyle: {width: "7rem"},
                attrs: {slot: "prepend", placeholder: e.$t("common.please_select")},
                on: {change: e.changeMacroType},
                slot: "prepend",
                model: {
                    value: e.macrofilter, callback: function (t) {
                        e.macrofilter = t
                    }, expression: "macrofilter"
                }
            }, e._l(e.macrolist, function (e, t) {
                return i("el-option", {key: e.index, attrs: {label: e.Name, value: t}})
            }), 1), e._v(" "), i("el-button", {
                attrs: {slot: "append", icon: "el-icon-search"},
                slot: "append"
            })], 1), e._v(" "), i("el-table", {
                directives: [{
                    name: "loading",
                    rawName: "v-loading",
                    value: e.loading,
                    expression: "loading"
                }],
                attrs: {
                    data: e.filtermacrolist,
                    "show-header": !1,
                    border: "",
                    height: e.height,
                    size: "mini",
                    "highlight-current-row": "",
                    "empty-text": e.$t("common.no_data")
                },
                on: {"current-change": e.handleCurrentChange}
            }, [i("el-table-column", {
                scopedSlots: e._u([{
                    key: "default", fn: function (t) {
                        return [i("i", {staticClass: "el-icon-document"}), e._v(" "), i("span", {staticStyle: {"margin-left": "10px"}}, [e._v(e._s(t.row.Name))])]
                    }
                }])
            })], 1), e._v(" "), i("div", {staticClass: "macrolist-oper"}, [i("el-radio", {
                attrs: {label: 1},
                model: {
                    value: e.macrocfg.StopMode, callback: function (t) {
                        e.$set(e.macrocfg, "StopMode", t)
                    }, expression: "macrocfg.StopMode"
                }
            }, [e._v(e._s(e.$t("macro.macro_btn_execute"))), i("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.macrocfg.Repeats,
                    expression: "macrocfg.Repeats"
                }], staticClass: "edit-cell mini", domProps: {value: e.macrocfg.Repeats}, on: {
                    input: function (t) {
                        t.target.composing || e.$set(e.macrocfg, "Repeats", t.target.value)
                    }
                }
            }), e._v(e._s(e.$t("macro.n_times_stop")))]), i("br"), e._v(" "), i("el-radio", {
                attrs: {label: 2},
                model: {
                    value: e.macrocfg.StopMode, callback: function (t) {
                        e.$set(e.macrocfg, "StopMode", t)
                    }, expression: "macrocfg.StopMode"
                }
            }, [e._v(e._s(e.$t("macro.macro_btn_execute_release_to_stop")))]), i("br"), e._v(" "), i("el-radio", {
                attrs: {label: 3},
                model: {
                    value: e.macrocfg.StopMode, callback: function (t) {
                        e.$set(e.macrocfg, "StopMode", t)
                    }, expression: "macrocfg.StopMode"
                }
            }, [e._v(e._s(e.$t("macro.macro_btn_execute_pressagain_to_stop")))]), e._v(" "), i("el-button", {
                staticStyle: {
                    position: "absolute",
                    right: ".3rem",
                    bottom: ".4rem"
                }, attrs: {icon: "el-icon-view", loading: !1}, on: {click: e.setMacro}
            }, [e._v(e._s(e.$t("common.use")))])], 1)], 2)], 1)], 1)
        }, a = [], l = {render: o, staticRenderFns: a};
        t.a = l
    }, 635: function (e, t, i) {
        "use strict";
        var o = function () {
            var e = this, t = e.$createElement, i = e._self._c || t;
            return i("el-row", {
                staticStyle: {
                    width: "100%",
                    position: "absolute",
                    bottom: "0"
                }
            }, [i("div", {
                // staticClass: "disablediv",
                // class: {disablehide: !e.disabled}
            }), e._v(" "), i("el-col", {attrs: {span: 24}}, [i("el-row", [i("el-col", {attrs: {span: 24}}, [i("el-tabs", {
                staticClass: "keyset-tab",
                attrs: {type: "border-card", loading: "true"}
            }, [e._l(e.keyset, function (t) {
                return i("el-tab-pane", {key: t.index, attrs: {lazy: e.islazy}}, [i("span", {
                    staticClass: "tab-icon",
                    attrs: {slot: "label"},
                    slot: "label"
                }, [i("i", {class: t.icon}), e._v(" " + e._s(e.$t("keyset")[t.lang]) + "\r\n          ")]), e._v(" "), e._l(t.keys, function (t) {
                    return i("div", {key: t.index}, e._l(t.linekeys, function (t) {
                        return i("el-button", {
                            key: t.index,
                            staticClass: "key-btn",
                            class: t.Class,
                            attrs: {icon: t.Icon},
                            on: {
                                click: function (i) {
                                    return e.handleSetKeyFunc(t)
                                }
                            }
                        }, [t.Icon ? e._e() : ["" != e.system && e.$t("keys")[t["LangTitle" + e.system]] ? [e._v("\r\n                  " + e._s(e.$t("keys")[t["LangTitle" + e.system]]) + "\r\n                ")] : [e._v("\r\n                  " + e._s(e.$t("keys")[t.LangTitle]) + "\r\n                ")]]], 2)
                    }), 1)
                })], 2)
            }), e._v(" "), i("el-tab-pane", [i("span", {
                staticClass: "tab-icon",
                attrs: {slot: "label"},
                slot: "label"
            }, [i("i", {staticClass: "el-icon-tickets"}), e._v(" " + e._s(e.$t("common.user_manual")) + "\r\n          ")]), e._v(" "), i("el-tabs", {
                staticStyle: {height: "200px"},
                attrs: {"tab-position": "left"}
            }, e._l(e.cms.deviceConfig.UserManual, function (t) {
                return i("el-tab-pane", {
                    key: t.index,
                    attrs: {label: e.$t("common")[t.title_lang]}
                }, e._l(t.items, function (t) {
                    return i("div", {
                        key: t.index,
                        staticStyle: {padding: ".4rem", color: "#888"}
                    }, [i("el-tag", {
                        staticStyle: {width: "8rem", "text-align": "center"},
                        attrs: {size: "small", type: "primary"}
                    }, [e._v(e._s(t.key))]), e._v(" "), i("i", {staticClass: "el-icon-back"}), e._v("\r\n                " + e._s(e.$t("common")[t.desc_lang]) + "\r\n              ")], 1)
                }), 0)
            }), 1)], 1)], 2)], 1)], 1), e._v(" "), i("el-row", [i("div", {staticClass: "keyset-foot"}, [i("el-form", {
                attrs: {
                    inline: !0,
                    size: "mini"
                }
            }, [i("el-form-item", {attrs: {label: ""}}, [i("el-radio-group", {
                model: {
                    value: e.system,
                    callback: function (t) {
                        e.system = t
                    },
                    expression: "system"
                }
            }, [i("el-radio-button", {attrs: {label: "Win"}}, [i("i", {staticClass: "el-icon-kb-windows"})]), e._v(" "), i("el-radio-button", {attrs: {label: "Mac"}}, [i("i", {staticClass: "el-icon-kb-mac"})])], 1)], 1), e._v(" "), i("el-form-item", {attrs: {label: e.$t("common.comb_func")}}, [i("el-select", {
                staticStyle: {width: "10rem"},
                attrs: {placeholder: e.$t("common.please_select")},
                on: {change: e.combChange},
                model: {
                    value: e.combval, callback: function (t) {
                        e.combval = t
                    }, expression: "combval"
                }
            }, e._l(e.combkeys.options, function (e) {
                return i("el-option", {key: e.value, attrs: {label: e.label, value: e.value}})
            }), 1), e._v(" "), i("span", {staticStyle: {color: "white"}}, [e._v("+")]), e._v(" "), i("el-input", {
                staticStyle: {width: "5rem"},
                attrs: {placeholder: e.$t("common.please_select"), disabled: ""},
                model: {
                    value: e.curkeytext, callback: function (t) {
                        e.curkeytext = t
                    }, expression: "curkeytext"
                }
            }), e._v(" \r\n            "), i("el-button", {
                attrs: {icon: "el-icon-view"},
                on: {click: e.setCombFunc}
            }, [e._v(e._s(e.$t("common.use")))])], 1), e._v(" "), e.isdrivermode ? i("el-form-item", {attrs: {label: e.$t("common.shortcut")}}, [i("el-input", {
                staticStyle: {width: "10rem"},
                attrs: {placeholder: e.$t("common.please_select"), readonly: ""},
                model: {
                    value: e.shortcutpathshow, callback: function (t) {
                        e.shortcutpathshow = t
                    }, expression: "shortcutpathshow"
                }
            }, [i("el-button", {
                attrs: {slot: "append", icon: "el-icon-menu"},
                on: {click: e.openFileDlg},
                slot: "append"
            })], 1), e._v(" \r\n            "), i("el-button", {
                attrs: {icon: "el-icon-view"},
                on: {click: e.setShortcutFunc}
            }, [e._v(e._s(e.$t("common.use")))])], 1) : e._e()], 1)], 1)])], 1)], 1)
        }, a = [], l = {render: o, staticRenderFns: a};
        t.a = l
    }, 637: function (e, t, i) {
        var o = i(631);
        "string" == typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals);
        i(18)("61a3b411", o, !0, {})
    }, 638: function (e, t, i) {
        var o = i(632);
        "string" == typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals);
        i(18)("dbe8ea64", o, !0, {})
    }, 640: function (e, t, i) {
        "use strict";
        var o = i(64), a = i.n(o), l = i(110), n = i(113), s = i(111), r = i(109), c = i(114), d = i(652), u = i.n(d),
            m = document.getElementById("mainbox").offsetHeight, f = document.getElementById("mainbox").offsetWidth;
        window.KeyFunc = u.a, t.a = {
            data: function () {
                return {
                    cms: window.CMS,
                    device: window.DEVICE,
                    mainh: m,
                    mainw: f,
                    scale: f / 24 * 18 / 1200,
                    layerguid: 0,
                    layeroper: "",
                    isapplying: !1,
                    isrestoring: !1,
                    isclearing: !1,
                    iskeysetchange: !1,
                    ismodelechange: !1,
                    isapplied: !1,
                    isshowkeyset: !0,
                    hasfnkeyset: !1,
                    isfnkeyset: !1,
                    disimportprofile: !1,
                    disexportprofile: !1,
                    dialog: {visible: !1, isshowclose: !1, title: "", content: "", dtype: 0},
                    dialogkeylesel: {visible: !1, isshowclose: !1, title: "", content: ""},
                    staticleh: 150
                }
            },
            components: {
                "cms-device": l.default,
                "cms-keyset": n.default,
                "cms-lelist": s.default,
                "cms-lestatic": r.default,
                "cms-macrolist": c.default
            },
            mounted: function () {
                var e = this;
                window.onresize = function () {
                    return function () {
                        e.mainh = document.getElementById("mainbox").offsetHeight, e.mainw = document.getElementById("mainbox").offsetWidth
                    }()
                }, setTimeout(function () {
                    window.getProfileGuidByModeIndex(CMS.userConfig.ModelInit[CMS.deviceID].Mode, function (t) {
                        e.changeProfile(t)
                    })
                }, 200), e.$refs.device.isshowkeyset = e.isshowkeyset, e.staticleh = document.querySelector("#colorpbox").offsetHeight, document.querySelector("#staticlebox").style.height = document.querySelector("#colorpbox").offsetHeight + "px", DEVICE.isEditStaticLE = !1, DEVICE.editStaticLEColor = "#ff0000"
            },
            watch: {
                mainh: function (e) {
                    this.mainh = e
                }, mainw: function (e) {
                    this.mainw = e
                }, "cms.deviceID": function (e, t) {
                    var i = this;
                    e !== t && 0 !== e && setTimeout(function () {
                        window.getProfileGuidByModeIndex(CMS.userConfig.ModelInit[e].Mode, function (e) {
                            i.changeProfile(e)
                        })
                    }, 200)
                }, "device.modeIndex": function (e, t) {
                    var i = this;
                    e !== t && i.changeProfile(DEVICE.profiles[e - 1].GUID)
                }, "device.isEditStaticLE": function (e, t) {
                    var i = this;
                    e !== t && (i.$refs.device.ismutiselect = e, DEVICE.isEditStaticLE && i.renderStaticLE(), window.isModeLEChange() ? i.$refs.lelist.isbreath = !0 : i.$refs.lelist.isbreath = !1)
                }
            },
            computed: {
                mode: function () {
                    return DEVICE.currentProfile ? DEVICE.currentProfile.ModeIndex : 1
                }, hasModeLe: function () {
                    return !!CMS.deviceConfig.hasModeLe
                }, lay_show_scale: function () {
                    return CMS.deviceConfig.hasOwnProperty("ShowScalePlus") ? this.mainw / 24 * 18 / 1200 + CMS.deviceConfig.ShowScalePlus : this.mainw / 24 * 18 / 1200
                }, lay_show_scale_plus: function () {
                    return CMS.deviceConfig.hasOwnProperty("ShowScalePlus") ? CMS.deviceConfig.ShowScalePlus : 0
                }, lay_h_show: function () {
                    return this.mainh / 5 * 3
                }, lay_h_keys: function () {
                    return this.mainh / 5 * 2
                }, lay_h_les: function () {
                    return this.mainh / 5 * 3
                }, lay_h_macros: function () {
                    return this.mainh / 5 * 2
                }, lay_h_les_list: function () {
                    return this.mainh / 5 * 3 - 48 - 84 + 16 - this.staticleh + 10
                }, lay_h_macros_list: function () {
                    return this.mainh / 5 * 2 - 48 - 84 - 24
                }, showdevbtn: function () {
                    return 0 === CMS.deviceConfig.DeviceType
                }, filterkeylelist: function () {
                    return this.cms.les
                }
            },
            methods: {
                changeProfile: function (e) {
                    var t = this;
                    if (t.layerguid = e, t.iskeysetchange = !1, t.isapplied = !1, t.isapplying = !1, t.hasfnkeyset = !1, t.isfnkeyset = !1, DEVICE.editKeyCode) {
                        $("key" + DEVICE.editKeyCode).classList.remove("key-breath"), DEVICE.editKeyCode = 0
                    }
                    readProfile(CMS.deviceID, e, function (e) {
                        e ? (DEVICE.currentProfile = e, window.cprofile = JSON.parse(a()(e)), window.changeMode(CMS.deviceID, e.ModeIndex), t.$refs.keysets.isdrivermode = !1, t.$refs.device.isfnlayer = !1, 0 === e.ModeIndex && (t.applyProfile(), t.$refs.keysets.isdrivermode = !0), 1 == e.ModeIndex ? (t.$refs.device.initStdKeyset(), t.disimportprofile = !0, t.disexportprofile = !0, DEVICE.stdlesel = e.DriverLE[0].GUID, t.$refs.lelist.disabled = !0, t.$refs.macrolist.disabled = !0, t.$refs.keysets.disabled = !0) : (t.$refs.device.initKeyset(), t.disimportprofile = !0, t.disexportprofile = !0, e.ModeLE.GUID ? t.$refs.lelist.leSelected(e.ModeLE.GUID) : t.renderStaticLE(), DEVICE.lesel = e.ModeLE.GUID, t.$refs.lelist.disabled = !1, t.$refs.macrolist.disabled = !1, t.$refs.keysets.disabled = !1, DEVICE.currentProfile.hasOwnProperty("FnKeySet") && (t.hasfnkeyset = !0)), CMS.userConfig.ModelInit[CMS.deviceID].Mode !== e.ModeIndex && (CMS.userConfig.ModelInit[CMS.deviceID].Mode = e.ModeIndex, window.writeUserConfig(CMS.userConfig))) : t.alertInfo("Read profile failed!", "fail", 800)
                    })
                }, changeStdProfile: function () {
                }, changeKeyFunc: function (e, t) {
                    console.log(t);
                    var i = this, o = [];
                    if (o = i.isfnkeyset ? DEVICE.currentProfile.FnKeySet : DEVICE.currentProfile.KeySet, "disable_enable" == t) {
                        for (var a = 0; a < o.length; a++) "0x02000000" == o[a].DriverValue.toString() && window.getDefaultKeySetByLcode(o[a].Index, function (e) {
                            console.log(e);
                            var t = $("key" + o[a].Index);
                            t && (o[a].MenuName = "", o[a].DriverValue = e.DriverValue, t.innerHTML = "<span></span>", t.setAttribute("data-func", i.$t("common.key_func_no_config")), t.classList.remove("seted"), o[a].KeyLE && "" !== o[a].KeyLE.GUID && t.classList.add("seted"))
                        });
                        window.isKeySetChange() ? this.iskeysetchange = !0 : this.iskeysetchange = !1
                    } else if ("disable_all" == t || "disable_num" == t || "disable_fx" == t || "disable_pad" == t || "disable_letter" == t || "disable_symbol" == t || "disable_ctrls" == t || "disable_func9" == t || "disable_direction" == t) {
                        var l = window.KeyFunc[t].DriverValue.split(",");
                        if ("disable_all" == t) {
                            l = [];
                            for (var a = 0; a < o.length; a++) l.push(o[a].Index.toString())
                        }
                        console.log(l);
                        for (var a = 0; a < o.length; a++) if (l.indexOf(o[a].Index.toString()) >= 0) {
                            o[a].MenuName = window.KeyFunc["0x02000000"].Name, o[a].DriverValue = window.KeyFunc["0x02000000"].DriverValue;
                            var n = $("key" + o[a].Index);
                            n && (n.innerHTML = "<span class='hasfunc'></span>", n.classList.add("seted"), n.children[0].classList.add(window.KeyFunc["0x02000000"].Icon), n.children[0].classList.add(window.KeyFunc["0x02000000"].ShowClass), n.setAttribute("data-func", i.$t("keys")[window.KeyFunc["0x02000000"].LangTitle]))
                        }
                        window.isKeySetChange() ? this.iskeysetchange = !0 : this.iskeysetchange = !1
                    } else if (DEVICE.editKeyCode) {
                        var s = $("key" + DEVICE.editKeyCode);
                        s && (window.KeyFunc[t] ? (s.innerHTML = "<span class='hasfunc'>" + i.$t("keys")[window.KeyFunc[t].LangTitle] + "</span>", s.setAttribute("data-func", i.$t("keys")[window.KeyFunc[t].LangTitle]), window.KeyFunc[t].Icon && (s.children[0].classList.add(window.KeyFunc[t].Icon), s.children[0].innerHTML = ""), window.KeyFunc[t].ShowClass && s.children[0].classList.add(window.KeyFunc[t].ShowClass)) : (e.length <= 5 ? s.innerHTML = "<span class='hasfunc'>" + e + "</span>" : s.innerHTML = "<span class='hasfunc'>" + e.substring(0, 4) + "...</span>", s.setAttribute("data-func", e)), s.classList.add("seted"));
                        for (var a = 0; a < o.length; a++) o[a].Index === DEVICE.editKeyCode && (o[a].MenuName = e, o[a].DriverValue = t, e.indexOf(".exe") > 0 && (o[a].DriverValue = "0x0A030001", o[a].Task = {}, o[a].Task.Type = "OpenURL", o[a].Task.Data = {AppPath: t}), window.isKeySetChange() ? this.iskeysetchange = !0 : this.iskeysetchange = !1)
                    } else i.alertInfo(i.$t("common.key_select_attention"), "warning", 1e3)
                }, setKeyMacro: function (e, t) {
                    var i = this, o = DEVICE.currentProfile.KeySet;
                    if (i.isfnkeyset && (o = DEVICE.currentProfile.FnKeySet), DEVICE.editKeyCode) {
                        var a = $("key" + DEVICE.editKeyCode);
                        a && (a.innerHTML = "<span class='hasfunc'>" + e + "</span>", a.classList.add("seted"), a.setAttribute("data-func", e));
                        for (var l = 0; l < o.length; l++) o[l].Index === DEVICE.editKeyCode && (o[l].MenuPID = 1, o[l].MenuName = e, o[l].DriverValue = "0x0A010001", o[l].Task = {
                            Type: "Macro",
                            Data: {}
                        }, o[l].Task.Data = t, window.isKeySetChange() ? i.iskeysetchange = !0 : i.iskeysetchange = !1)
                    } else i.alertInfo(i.$t("common.key_select_attention"), "warning", 1e3)
                }, removeKeyFunc: function () {
                    var e = this, t = $("config_key").getAttribute("data-key"), i = [];
                    i = e.isfnkeyset ? DEVICE.currentProfile.FnKeySet : DEVICE.currentProfile.KeySet;
                    for (var o = 0; o < i.length; o++) if (i[o].Index == t) {
                        window.getDefaultKeySetByLcode(parseInt(t), function (a) {
                            i[o].MenuPID = "", i[o].MenuID = "", i[o].MenuName = "", i[o].DriverValue = a.DriverValue, delete i[o].Task, $("config_key").innerHTML = e.$t("common.key_func_no_config"), $("key" + t).innerHTML = "<span></span>", $("key" + t).setAttribute("data-func", e.$t("common.key_func_no_config")), i[o].KeyLE ? "" == i[o].KeyLE.GUID && $("key" + t).classList.remove("seted") : $("key" + t).classList.remove("seted"), window.isKeySetChange() ? e.iskeysetchange = !0 : e.iskeysetchange = !1
                        });
                        break
                    }
                }, changeKeyLE: function (e, t, i) {
                    if (0 !== e) {
                        $("key" + e).classList.add("seted");
                        for (var o = 0; o < DEVICE.currentProfile.KeySet.length; o++) DEVICE.currentProfile.KeySet[o].Index == e && (DEVICE.currentProfile.KeySet[o].KeyLE = {
                            Name: t,
                            GUID: i
                        }, $("key" + e).setAttribute("data-le", t), window.isKeySetChange() ? this.iskeysetchange = !0 : this.iskeysetchange = !1)
                    }
                }, removeKeyLE: function () {
                    console.log("remove key le");
                    for (var e = $("config_key").getAttribute("data-key"), t = 0; t < DEVICE.currentProfile.KeySet.length; t++) if (DEVICE.currentProfile.KeySet[t].Index == e) {
                        DEVICE.currentProfile.KeySet[t].KeyLE && "" !== DEVICE.currentProfile.KeySet[t].KeyLE.GUID && (delete DEVICE.currentProfile.KeySet[t].KeyLE, $("config_le").innerHTML = this.$t("common.key_le_no_config"), $("key" + e).setAttribute("data-le", this.$t("common.key_le_no_config")), "" == DEVICE.currentProfile.KeySet[t].MenuName && $("key" + e).classList.remove("seted"), window.isKeySetChange() ? this.iskeysetchange = !0 : this.iskeysetchange = !1);
                        break
                    }
                }, saveProfile: function () {
                    var e = this;
                    window.writeProfile(CMS.deviceID, DEVICE.currentProfile.GUID, window.cprofile, function (t) {
                        0 === DEVICE.currentProfile.ModeIndex && window.apply(CMS.deviceID, DEVICE.currentProfile.GUID, function (t) {
                            var i = "", o = "success";
                            t ? i = e.$t("common.apply_success") : (i = e.$t("common.apply_fail"), o = "error"), e.alertInfo(i, o, 1e3)
                        })
                    })
                }, saveKeySet: function () {
                    var e = this;
                    1 != DEVICE.currentProfile.ModeIndex ? (window.cprofile.KeySet = JSON.parse(a()(DEVICE.currentProfile.KeySet)), DEVICE.currentProfile.FnKeySet && (window.cprofile.FnKeySet = JSON.parse(a()(DEVICE.currentProfile.FnKeySet))), e.saveProfile()) : (window.cprofile.KeySet = JSON.parse(a()(DEVICE.currentProfile.KeySet)), console.log("标准配置灯效保存"), e.saveStdLE(), e.saveProfile()), e.iskeysetchange = !1, e.isapplied = !0
                }, saveModeLE: function () {
                    var e = this;
                    1 != DEVICE.currentProfile.ModeIndex ? (console.log(a()(DEVICE.currentProfile.ModeLE)), window.cprofile.ModeLE = JSON.parse(a()(DEVICE.currentProfile.ModeLE)), e.saveProfile(), e.$refs.lelist.isbreath = !1, e.isapplied = !0) : console.log("标准配置无modelle")
                }, applyProfile: function () {
                    var e = this;
                    e.isapplying = !0, window.apply(CMS.deviceID, DEVICE.currentProfile.GUID, function (t) {
                        var i = "", o = "success";
                        t ? i = e.$t("common.apply_success") : (i = e.$t("common.apply_fail"), o = "error"), e.alertInfo(i, o, 1e3), DEVICE.editKeyCode && ($("key" + DEVICE.editKeyCode).classList.remove("key-breath"), DEVICE.editKeyCode = ""), e.isapplying = !1, e.isapplied = !1
                    })
                }, handleIsShowKeySet: function (e) {
                    var t = this;
                    window.localStorage.isshowkeyset = e, this.$refs.device.isshowkeyset = e, setTimeout(function () {
                        1 == DEVICE.currentProfile.ModeIndex ? t.$refs.device.initStdKeyset() : t.$refs.device.initKeyset()
                    }, 100)
                }, handleIsFnKeySet: function (e) {
                    var t = this;
                    setTimeout(function () {
                        1 == DEVICE.currentProfile.ModeIndex ? t.$refs.device.initStdKeyset() : t.$refs.device.initKeyset()
                    }, 100)
                }, openFnLayer: function (e) {
                    var t = this;
                    this.isfnkeyset = e, this.$nextTick(function () {
                        t.handleIsFnKeySet(e)
                    })
                }, selectStdLE: function () {
                    this.dialogkeylesel.title = this.$t("common.key_le_select_attention"), this.dialogkeylesel.visible = !0
                }, saveStdLE: function () {
                    DEVICE.currentProfile.hasOwnProperty("KeySet") && (window.cprofile.KeySet = JSON.parse(a()(DEVICE.currentProfile.KeySet))), window.cprofile.DriverLE = JSON.parse(a()(DEVICE.currentProfile.DriverLE)), this.saveProfile()
                }, removeStdLE: function () {
                    var e = this;
                    DEVICE.currentProfile.DriverLE[DEVICE.lestdindex].Name = "", DEVICE.currentProfile.DriverLE[DEVICE.lestdindex].GUID = "", $("std_le_" + DEVICE.lestdindex).innerHTML = e.$t("common.key_le_no_config"), window.isStdLEChange() ? e.iskeysetchange = !0 : e.iskeysetchange = !1
                }, handleFnxChange: function () {
                    console.log("changed");
                    var e = this;
                    window.isKeySetChange() ? e.iskeysetchange = !0 : e.iskeysetchange = !1
                }, handleShowRestoreProfileConfirm: function () {
                    var e = this;
                    e.dialog.visible = !0, e.dialog.title = e.$t("common.attention"), e.dialog.content = e.$t("common.restore_currentprofile_confirm"), e.dialog.dtype = 1
                }, restoreCurrentProfile: function () {
                    var e = this;
                    window.restoreLayer(DEVICE.currentProfile.Index, !0).then(function (t) {
                        var i = "", o = "success";
                        "0" == t ? (i = e.$t("common.apply_fail"), o = "error") : "1" == t ? i = e.$t("common.profile_save_success") : "2" == t && (i = e.$t("common.apply_success")), e.changeProfile(DEVICE.currentProfile.GUID), e.alertInfo(i, o, 1e3), e.isrestoring = !1
                    })
                }, handleShowClearProfile: function () {
                    var e = this;
                    e.dialog.visible = !0, e.dialog.title = e.$t("common.attention"), e.dialog.content = e.$t("common.clear_currentprofile_confirm"), e.dialog.dtype = 2
                }, clearCurrentProfile: function () {
                    var e = this;
                    window.clearLayer(DEVICE.currentProfile.ModeIndex, !0).then(function (t) {
                        var i = "", o = "success";
                        "0" == t ? (i = e.$t("common.apply_fail"), o = "error") : "1" == t ? i = e.$t("common.profile_save_success") : "2" == t && (i = e.$t("common.apply_success")), e.changeProfile(DEVICE.currentProfile.GUID), e.alertInfo(i, o, 1e3), e.isclearing = !1
                    })
                }, handleConfirm: function () {
                    var e = this;
                    1 == e.dialog.dtype ? (e.isrestoring = !0, e.restoreCurrentProfile()) : 2 == e.dialog.dtype && (e.isclearing = !0, e.clearCurrentProfile()), e.dialog.visible = !1
                }, handleImportProfile: function () {
                    console.log("导入配置"), this.showTestInfo()
                }, handleExportProfile: function () {
                    console.log("导出配置"), this.showTestInfo()
                }, handleCloseDialog: function () {
                    console.log("关闭对话框！")
                }, showKeyLeSelect: function () {
                    this.dialogkeylesel.title = this.$t("common.key_le_select_attention"), this.dialogkeylesel.visible = !0
                }, handleKeyLeRowChange: function (e, t, i) {
                    DEVICE.keylesel.Name = e.Name, DEVICE.keylesel.GUID = e.GUID
                }, handleKeyLeConfirm: function () {
                    var e = this;
                    if (1 == DEVICE.currentProfile.ModeIndex) DEVICE.currentProfile.DriverLE[DEVICE.lestdindex].Name = DEVICE.keylesel.Name, DEVICE.currentProfile.DriverLE[DEVICE.lestdindex].GUID = DEVICE.keylesel.GUID, $("std_le_" + DEVICE.lestdindex).innerHTML = DEVICE.keylesel.Name, window.isStdLEChange() ? e.iskeysetchange = !0 : e.iskeysetchange = !1; else {
                        var t = $("config_key").getAttribute("data-key");
                        $("config_le").innerHTML = DEVICE.keylesel.Name, e.changeKeyLE(t, DEVICE.keylesel.Name, DEVICE.keylesel.GUID)
                    }
                    e.dialogkeylesel.visible = !1
                }, playLE: function () {
                    this.$refs.device.playLe()
                }, stopLe: function () {
                    DEVICE.timer && (clearInterval(DEVICE.timer), DEVICE.timer = null);
                    for (var e = 0; e < DEVICE.keymap.length; e++) {
                        var t = DEVICE.keymap[e].LocationCode.toString();
                        $("le" + t) && $("le" + t).style.setProperty("background", "#000")
                    }
                }, renderFrame: function (e) {
                    for (var t in e) {
                        var i = $("le" + t);
                        i && i.style.setProperty("background", window.toJS(e[t]))
                    }
                }, renderStaticLE: function () {
                    var e = this;
                    e.stopLe(), e.$refs.lelist.leUnSelectAll(), e.$refs.lelist.leselname = e.$t("le.diy_static_le"), DEVICE.currentProfile.ModeLE.GUID = "", DEVICE.currentProfile.ModeLE.Name = e.$t("le.diy_static_le"), DEVICE.currentProfile.ModeLE.hasOwnProperty("LEData") || (DEVICE.currentProfile.ModeLE.LEData = {}), e.renderFrame(DEVICE.currentProfile.ModeLE.LEData)
                }, selStaticLeKeys: function (e, t) {
                    var i = this;
                    DEVICE.currentProfile.ModeLE.hasOwnProperty("LEData") || (DEVICE.currentProfile.ModeLE.LEData = {}), e.forEach(function (e) {
                        "#000000" === DEVICE.editStaticLEColor ? DEVICE.currentProfile.ModeLE.LEData.hasOwnProperty(e) && (delete DEVICE.currentProfile.ModeLE.LEData[e], $("le" + e).style.setProperty("background", "#000000")) : DEVICE.currentProfile.ModeLE.LEData[e] = window.to16(DEVICE.editStaticLEColor)
                    }), i.renderFrame(DEVICE.currentProfile.ModeLE.LEData), window.isModeLEChange() ? i.$refs.lelist.isbreath = !0 : i.$refs.lelist.isbreath = !1
                }, alertInfo: function (e, t, i) {
                    this.$notify({title: e, type: t, duration: i, position: "bottom-left"})
                }, showTestInfo: function () {
                    this.alertInfo(this.$t("common.func_in_dev_info"), "warning", 1e3)
                }
            },
            beforeRouteEnter: function (e, t, i) {
                console.log("KB loading..."), CMS.isLoaded = !1, setTimeout(function () {
                    i(function (e) {
                        console.log("KB loaded!"), setTimeout(function () {
                            CMS.isLoaded = !0
                        }, 500)
                    })
                }, 5)
            }
        }
    }, 652: function (e, t) {
        e.exports = {
            "0x02002900": {Name: "Esc", LangTitle: "key_esc", DriverValue: "0x02002900"},
            "0x02000000": {
                Name: "禁用",
                LangTitle: "key_disable",
                Class: "l250",
                Icon: "el-icon-kb-disable",
                ShowClass: "key-danger",
                DriverValue: "0x02000000"
            },
            "0x02003A00": {Name: "F1", LangTitle: "key_f1", DriverValue: "0x02003A00"},
            "0x02003B00": {Name: "F2", LangTitle: "key_f2", DriverValue: "0x02003B00"},
            "0x02003C00": {Name: "F3", LangTitle: "key_f3", DriverValue: "0x02003C00"},
            "0x02003D00": {Name: "F4", LangTitle: "key_f4", DriverValue: "0x02003D00"},
            "0x02003E00": {Name: "F5", LangTitle: "key_f5", Class: "pad150", DriverValue: "0x02003E00"},
            "0x02003F00": {Name: "F6", LangTitle: "key_f6", DriverValue: "0x02003F00"},
            "0x02004000": {Name: "F7", LangTitle: "key_f7", DriverValue: "0x02004000"},
            "0x02004100": {Name: "F8", LangTitle: "key_f8", DriverValue: "0x02004100"},
            "0x02004200": {Name: "F9", LangTitle: "key_f9", Class: "pad150", DriverValue: "0x02004200"},
            "0x02004300": {Name: "F10", LangTitle: "key_f10", DriverValue: "0x02004300"},
            "0x02004400": {Name: "F11", LangTitle: "key_f11", DriverValue: "0x02004400"},
            "0x02004500": {Name: "F12", LangTitle: "key_f12", DriverValue: "0x02004500"},
            "0x02006800": {Name: "F13", LangTitle: "key_f13", DriverValue: "0x02006800"},
            "0x02006900": {Name: "F14", LangTitle: "key_f14", DriverValue: "0x02006900"},
            "0x02006A00": {Name: "F15", LangTitle: "key_f15", DriverValue: "0x02006A00"},
            "0x02006B00": {Name: "F16", LangTitle: "key_f16", DriverValue: "0x02006B00"},
            "0x02006C00": {Name: "F17", LangTitle: "key_f17", DriverValue: "0x02006C00"},
            "0x02006D00": {Name: "F18", LangTitle: "key_f18", DriverValue: "0x02006D00"},
            "0x02006E00": {Name: "F19", LangTitle: "key_f19", DriverValue: "0x02006E00"},
            "0x02006F00": {Name: "F20", LangTitle: "key_f20", DriverValue: "0x02006F00"},
            "0x02007000": {Name: "F21", LangTitle: "key_f21", DriverValue: "0x02007000"},
            "0x02007100": {Name: "F22", LangTitle: "key_f22", DriverValue: "0x02007100"},
            "0x02007200": {Name: "F23", LangTitle: "key_f23", DriverValue: "0x02007200"},
            "0x02007300": {Name: "F24", LangTitle: "key_f24", DriverValue: "0x02007300"},
            "0x02004600": {Name: "截屏", LangTitle: "key_screenshot", DriverValue: "0x02004600"},
            "0x02004700": {Name: "SL", LangTitle: "key_scrolllock", DriverValue: "0x02004700"},
            "0x02004800": {Name: "PB", LangTitle: "key_pause", DriverValue: "0x02004800"},
            "0x02003500": {Name: "`", LangTitle: "key_wave", Class: "rowstart", DriverValue: "0x02003500"},
            "0x02001E00": {Name: "1", LangTitle: "key_1", DriverValue: "0x02001E00"},
            "0x02001F00": {Name: "2", LangTitle: "key_2", DriverValue: "0x02001F00"},
            "0x02002000": {Name: "3", LangTitle: "key_3", DriverValue: "0x02002000"},
            "0x02002100": {Name: "4", LangTitle: "key_4", DriverValue: "0x02002100"},
            "0x02002200": {Name: "5", LangTitle: "key_5", DriverValue: "0x02002200"},
            "0x02002300": {Name: "6", LangTitle: "key_6", DriverValue: "0x02002300"},
            "0x02002400": {Name: "7", LangTitle: "key_7", DriverValue: "0x02002400"},
            "0x02002500": {Name: "8", LangTitle: "key_8", DriverValue: "0x02002500"},
            "0x02002600": {Name: "9", LangTitle: "key_9", DriverValue: "0x02002600"},
            "0x02002700": {Name: "0", LangTitle: "key_0", DriverValue: "0x02002700"},
            "0x02002D00": {Name: "-", LangTitle: "key_subtract", DriverValue: "0x02002D00"},
            "0x02002E00": {Name: "=", LangTitle: "key_add", DriverValue: "0x02002E00"},
            "0x02002A00": {Name: "Backspace", LangTitle: "key_backspace", Class: "l200", DriverValue: "0x02002A00"},
            "0x02004900": {Name: "INS", LangTitle: "key_insert", DriverValue: "0x02004900"},
            "0x02004A00": {Name: "HM", LangTitle: "key_home", DriverValue: "0x02004A00"},
            "0x02004B00": {Name: "PU", LangTitle: "key_pageup", DriverValue: "0x02004B00"},
            "0x02002B00": {Name: "Tab", LangTitle: "key_tab", Class: "rowstart l150", DriverValue: "0x02002B00"},
            "0x02001400": {Name: "Q", LangTitle: "key_q", DriverValue: "0x02001400"},
            "0x02001A00": {Name: "W", LangTitle: "key_w", DriverValue: "0x02001A00"},
            "0x02000800": {Name: "E", LangTitle: "key_e", DriverValue: "0x02000800"},
            "0x02001500": {Name: "R", LangTitle: "key_r", DriverValue: "0x02001500"},
            "0x02001700": {Name: "T", LangTitle: "key_t", DriverValue: "0x02001700"},
            "0x02001C00": {Name: "Y", LangTitle: "key_y", DriverValue: "0x02001C00"},
            "0x02001800": {Name: "U", LangTitle: "key_u", DriverValue: "0x02001800"},
            "0x02000C00": {Name: "I", LangTitle: "key_i", DriverValue: "0x02000C00"},
            "0x02001200": {Name: "O", LangTitle: "key_o", DriverValue: "0x02001200"},
            "0x02001300": {Name: "P", LangTitle: "key_p", DriverValue: "0x02001300"},
            "0x02002F00": {Name: "[", LangTitle: "key_square_bracket_left", DriverValue: "0x02002F00"},
            "0x02003000": {Name: "]", LangTitle: "key_square_bracket_right", DriverValue: "0x02003000"},
            "0x02003100": {Name: "|\\", LangTitle: "key_backslash", Class: "l150", DriverValue: "0x02003100"},
            "0x02004C00": {Name: "DEL", LangTitle: "key_delete", DriverValue: "0x02004C00"},
            "0x02004D00": {Name: "END", LangTitle: "key_end", DriverValue: "0x02004D00"},
            "0x02004E00": {Name: "PD", LangTitle: "key_pagedown", DriverValue: "0x02004E00"},
            "0x02003900": {Name: "Caps", LangTitle: "key_caps", Class: "rowstart l175", DriverValue: "0x02003900"},
            "0x02000400": {Name: "A", LangTitle: "key_a", DriverValue: "0x02000400"},
            "0x02001600": {Name: "S", LangTitle: "key_s", DriverValue: "0x02001600"},
            "0x02000700": {Name: "D", LangTitle: "key_d", DriverValue: "0x02000700"},
            "0x02000900": {Name: "F", LangTitle: "key_f", DriverValue: "0x02000900"},
            "0x02000A00": {Name: "G", LangTitle: "key_g", DriverValue: "0x02000A00"},
            "0x02000B00": {Name: "H", LangTitle: "key_h", DriverValue: "0x02000B00"},
            "0x02000D00": {Name: "J", LangTitle: "key_j", DriverValue: "0x02000D00"},
            "0x02000E00": {Name: "K", LangTitle: "key_k", DriverValue: "0x02000E00"},
            "0x02000F00": {Name: "L", LangTitle: "key_l", DriverValue: "0x02000F00"},
            "0x02003300": {Name: ";", LangTitle: "key_semicolon", DriverValue: "0x02003300"},
            "0x02003400": {Name: "'", LangTitle: "key_quotation_sign", DriverValue: "0x02003400"},
            "0x02002800": {Name: "Enter", LangTitle: "key_enter", Class: "l225", DriverValue: "0x02002800"},
            "0x02000002": {Name: "LShift", LangTitle: "key_l_shift", Class: "rowstart l125", DriverValue: "0x02000002"},
            "0x02006400": {Name: ">|", LangTitle: "key_backslash", DriverValue: "0x02006400"},
            "0x02001D00": {Name: "Z", LangTitle: "key_z", DriverValue: "0x02001D00"},
            "0x02001B00": {Name: "X", LangTitle: "key_x", DriverValue: "0x02001B00"},
            "0x02000600": {Name: "C", LangTitle: "key_c", DriverValue: "0x02000600"},
            "0x02001900": {Name: "V", LangTitle: "key_v", DriverValue: "0x02001900"},
            "0x02000500": {Name: "B", LangTitle: "key_b", DriverValue: "0x02000500"},
            "0x02001100": {Name: "N", LangTitle: "key_n", DriverValue: "0x02001100"},
            "0x02001000": {Name: "M", LangTitle: "key_m", DriverValue: "0x02001000"},
            "0x02003600": {Name: ",", LangTitle: "key_comma", DriverValue: "0x02003600"},
            "0x02003700": {Name: ".", LangTitle: "key_fullstop", DriverValue: "0x02003700"},
            "0x02003800": {Name: "/", LangTitle: "key_slash", DriverValue: "0x02003800"},
            "0x02000020": {Name: "RShift", LangTitle: "key_r_shift", Class: "l275", DriverValue: "0x02000020"},
            "0x02005200": {Name: "↑", LangTitle: "key_arrow_up", DriverValue: "0x02005200"},
            "0x02000001": {Name: "LCtl", LangTitle: "key_l_control", Class: "rowstart l125", DriverValue: "0x02000001"},
            "0x02000008": {
                Name: "Win",
                LangTitle: "key_l_win",
                LangTitleMac: "key_l_cmd",
                LangTitleLinux: "key_l_win",
                Class: "l125",
                DriverValue: "0x02000008"
            },
            "0x02000004": {Name: "LAlt", LangTitle: "key_l_alt", Class: "l125", DriverValue: "0x02000004"},
            "0x02002C00": {Name: "Space", LangTitle: "key_space", Class: "l625", DriverValue: "0x02002C00"},
            "0x02000040": {Name: "RAlt", LangTitle: "key_r_alt", Class: "l125", DriverValue: "0x02000040"},
            "0x02000080": {
                Name: "RWin",
                LangTitle: "key_r_win",
                LangTitleMac: "key_r_cmd",
                LangTitleLinux: "key_r_win",
                Class: "1125",
                DriverValue: "0x02000080"
            },
            "0x02006500": {Name: "App", LangTitle: "key_menu", Class: "l125", DriverValue: "0x02006500"},
            "0x02000010": {Name: "RCtl", LangTitle: "key_r_control", Class: "l125", DriverValue: "0x02000010"},
            "0x02005000": {Name: "←", LangTitle: "key_arrow_left", DriverValue: "0x02005000"},
            "0x02005100": {Name: "↓", LangTitle: "key_arrow_down", DriverValue: "0x02005100"},
            "0x02004F00": {Name: "→", LangTitle: "key_arrow_right", DriverValue: "0x02004F00"},
            "0x02005300": {Name: "NumLk", LangTitle: "key_num_lock", Class: "l150", DriverValue: "0x02005300"},
            "0x02005400": {Name: "Num/", LangTitle: "key_num_decimal", Class: "l150", DriverValue: "0x02005400"},
            "0x02005500": {Name: "Num*", LangTitle: "key_num_multiply", Class: "l150", DriverValue: "0x02005500"},
            "0x02005600": {Name: "Num-", LangTitle: "key_num_subtract", Class: "l150", DriverValue: "0x02005600"},
            "0x02005F00": {Name: "Num7", LangTitle: "key_num_7", Class: "l150", DriverValue: "0x02005F00"},
            "0x02006000": {Name: "Num8", LangTitle: "key_num_8", Class: "l150", DriverValue: "0x02006000"},
            "0x02006100": {Name: "Num9", LangTitle: "key_num_9", Class: "l150", DriverValue: "0x02006100"},
            "0x02005700": {Name: "Num+", LangTitle: "key_num_add", Class: "l150", DriverValue: "0x02005700"},
            "0x02005C00": {Name: "Num4", LangTitle: "key_num_4", Class: "l150", DriverValue: "0x02005C00"},
            "0x02005D00": {Name: "Num5", LangTitle: "key_num_5", Class: "l150", DriverValue: "0x02005D00"},
            "0x02005E00": {Name: "Num6", LangTitle: "key_num_6", Class: "l150", DriverValue: "0x02005E00"},
            "0x02005900": {Name: "Num1", LangTitle: "key_num_1", Class: "l150", DriverValue: "0x02005900"},
            "0x02005A00": {Name: "Num2", LangTitle: "key_num_2", Class: "l150", DriverValue: "0x02005A00"},
            "0x02005B00": {Name: "Num3", LangTitle: "key_num_3", Class: "l150", DriverValue: "0x02005B00"},
            "0x02006200": {Name: "Num0", LangTitle: "key_num_0", Class: "l300", DriverValue: "0x02006200"},
            "0x02006300": {Name: "Num.", LangTitle: "key_num_fullstop", Class: "l150", DriverValue: "0x02006300"},
            "0x02005800": {Name: "Num←", LangTitle: "key_num_enter", Class: "l150", DriverValue: "0x02005800"},
            "0x03000183": {
                Name: "媒体播放器",
                LangTitle: "key_media_player",
                Icon: "el-icon-kb-key-media",
                ShowClass: "showicon",
                Class: "l225",
                DriverValue: "0x03000183"
            },
            "0x030000CD": {
                Name: "播放/暂停",
                LangTitle: "key_media_play_pause",
                Icon: "el-icon-kb-key-play-pause",
                ShowClass: "showicon",
                Class: "l225",
                DriverValue: "0x030000CD"
            },
            "0x030000B7": {
                Name: "停止",
                LangTitle: "key_media_stop",
                Icon: "el-icon-kb-key-stop",
                ShowClass: "showicon",
                Class: "l225",
                DriverValue: "0x030000B7"
            },
            "0x030000B6": {
                Name: "上一曲",
                LangTitle: "key_media_prev",
                Icon: "el-icon-kb-key-prev",
                ShowClass: "showicon",
                Class: "rowstart l225",
                DriverValue: "0x030000B6"
            },
            "0x030000B5": {
                Name: "下一曲",
                LangTitle: "key_media_next",
                Icon: "el-icon-kb-key-next",
                ShowClass: "showicon",
                Class: "l225",
                DriverValue: "0x030000B5"
            },
            "0x030000E9": {
                Name: "音量加",
                LangTitle: "key_media_volume_inc",
                Icon: "el-icon-kb-key-volume-inc",
                ShowClass: "showicon",
                Class: "rowstart l225",
                DriverValue: "0x030000E9"
            },
            "0x030000EA": {
                Name: "音量减",
                LangTitle: "key_media_volume_dec",
                Icon: "el-icon-kb-key-volume-dec",
                ShowClass: "showicon",
                Class: "l225",
                DriverValue: "0x030000EA"
            },
            "0x030000E2": {
                Name: "静音",
                LangTitle: "key_media_volume_mute",
                Icon: "el-icon-kb-key-volume-mute",
                ShowClass: "showicon",
                Class: "l225",
                DriverValue: "0x030000E2"
            },
            "0x03000224": {
                Name: "浏览器后退",
                LangTitle: "key_brower_back",
                Icon: "el-icon-kb-key-browser-backward",
                ShowClass: "showicon",
                Class: "l225",
                DriverValue: "0x03000224"
            },
            "0x03000225": {
                Name: "浏览器前进",
                LangTitle: "key_brower_advance",
                Icon: "el-icon-kb-key-browser-forward",
                ShowClass: "showicon",
                Class: "l225",
                DriverValue: "0x03000225"
            },
            "0x03000227": {
                Name: "浏览器刷新",
                LangTitle: "key_brower_refresh",
                Icon: "el-icon-kb-key-browser-refresh",
                ShowClass: "showicon",
                Class: "l225",
                DriverValue: "0x03000227"
            },
            "0x0300022A": {
                Name: "浏览器收藏",
                LangTitle: "key_brower_collection",
                Icon: "el-icon-kb-key-collection",
                ShowClass: "showicon",
                Class: "l225",
                DriverValue: "0x0300022A"
            },
            "0x03000223": {
                Name: "浏览器主页",
                LangTitle: "key_brower_home",
                Icon: "el-icon-kb-key-home",
                ShowClass: "showicon",
                Class: "l225",
                DriverValue: "0x03000223"
            },
            "0x0300018A": {
                Name: "Email",
                LangTitle: "key_email",
                Icon: "el-icon-kb-key-email",
                ShowClass: "showicon",
                Class: "l225",
                DriverValue: "0x0300018A"
            },
            "0x03000194": {
                Name: "我的电脑",
                LangTitle: "key_my_computer",
                Icon: "el-icon-kb-computer2",
                ShowClass: "showicon",
                Class: "l225",
                DriverValue: "0x03000194"
            },
            "0x03000192": {
                Name: "计算器",
                LangTitle: "key_calculator",
                Icon: "el-icon-kb-key-calc",
                ShowClass: "showicon",
                Class: "l225",
                DriverValue: "0x03000192"
            },
            "0x02000601": {
                Name: "复制",
                LangTitle: "key_copy",
                Icon: "el-icon-kb-key-copy",
                ShowClass: "showicon",
                Class: "l225",
                DriverValue: "0x02000601"
            },
            "0x02001901": {
                Name: "粘贴",
                LangTitle: "key_paste",
                Icon: "el-icon-kb-key-paste",
                ShowClass: "showicon",
                Class: "l225",
                DriverValue: "0x02001901"
            },
            "0x01010001": {
                Name: "单击左键",
                LangTitle: "key_mouse_left_click",
                Icon: "el-icon-kb-key-mouse-left",
                ShowClass: "showicon",
                Class: "l225",
                DriverValue: "0x01010001"
            },
            "0x01010002": {
                Name: "单机右键",
                LangTitle: "key_mouse_right_click",
                Icon: "el-icon-kb-key-mouse-right",
                ShowClass: "showicon",
                Class: "l225",
                DriverValue: "0x01010002"
            },
            "0x01010004": {
                Name: "单机滚轮",
                LangTitle: "key_mouse_middle_click",
                Icon: "el-icon-kb-key-mouse-mid",
                ShowClass: "showicon",
                Class: "l225",
                DriverValue: "0x01010004"
            },
            "0x01010008": {
                Name: "后退",
                LangTitle: "key_mouse_back",
                Icon: "el-icon-kb-key-backward",
                ShowClass: "showicon",
                Class: "l225",
                DriverValue: "0x01010008"
            },
            "0x01010010": {
                Name: "前进",
                LangTitle: "key_mouse_advance",
                Icon: "el-icon-kb-key-forward",
                ShowClass: "showicon",
                Class: "l225",
                DriverValue: "0x01010010"
            },
            "0x0a070001": {
                Name: "标准模式",
                LangTitle: "key_mode_std",
                Icon: "el-icon-kb-key-std",
                ShowClass: "showiconlayer",
                Class: "l225",
                DriverValue: "0x0a070001"
            },
            "0x0a070002": {
                Name: "离线模式1",
                LangTitle: "key_mode_offline_1_change",
                Icon: "el-icon-kb-key-layer1",
                ShowClass: "showiconlayer",
                Class: "noedit",
                DriverValue: "0x0a070002"
            },
            "0x0a070003": {
                Name: "离线模式2",
                LangTitle: "key_mode_offline_2_change",
                Icon: "el-icon-kb-key-layer2",
                ShowClass: "showiconlayer",
                Class: "noedit",
                DriverValue: "0x0a070003"
            },
            "0x0a070004": {
                Name: "离线模式3",
                LangTitle: "key_mode_offline_3_change",
                Icon: "el-icon-kb-key-layer3",
                ShowClass: "showiconlayer",
                Class: "noedit",
                DriverValue: "0x0a070004"
            },
            disable_key: {
                Name: "禁用",
                LangTitle: "key_disable",
                DriverValue: "0x02000000",
                Icon: "el-icon-kb-disable",
                ShowClass: "el-icon-kb-disable",
                Class: "l250"
            },
            disable_all: {Name: "禁用全部", LangTitle: "key_disable_all", Class: "l250", DriverValue: "1"},
            disable_enable: {Name: "取消禁用", LangTitle: "key_disable_cancel", Class: "l250", DriverValue: "0"},
            disable_num: {
                Name: "禁用数字键",
                LangTitle: "key_disable_num",
                Class: "l250",
                DriverValue: "36,37,38,39,40,41,42,43,44,45"
            },
            disable_pad: {
                Name: "禁用pad",
                LangTitle: "key_disable_pad",
                Class: "l250",
                DriverValue: "88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104"
            },
            disable_fx: {
                Name: "禁用F1-F12",
                LangTitle: "key_disable_fx",
                Class: "l250",
                DriverValue: "63,64,65,66,67,68,69,70,71,72,73,74"
            },
            disable_letter: {
                Name: "禁用字母",
                LangTitle: "key_disable_letter",
                Class: "l250",
                DriverValue: "10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35"
            },
            disable_symbol: {
                Name: "禁用符号",
                LangTitle: "key_disable_symbol",
                Class: "rowstart l250",
                DriverValue: "51,52,53,54,55,56,57,58,59,60,61"
            },
            disable_ctrls: {
                Name: "禁用控制键",
                LangTitle: "key_disable_ctrls",
                Class: "l250",
                DriverValue: "1,2,3,4,5,6,7,8,46,47,48,49,50,62"
            },
            disable_func9: {
                Name: "禁用九键",
                LangTitle: "key_disable_funcs",
                Class: "l250",
                DriverValue: "75,76,77,78,79,80,81,82,83"
            },
            disable_direction: {
                Name: "禁用方向键",
                LangTitle: "key_disable_direction",
                Class: "l250",
                DriverValue: "84,85,86,87"
            },
            "0x0a080002": {
                Name: "Fnx1",
                LangTitle: "key_change_fnx1",
                Class: "l250",
                ShowClass: "key-danger",
                DriverValue: "0x02000000"
            }
        }
    }, 657: function (e, t, i) {
        t = e.exports = i(10)(void 0), t.push([e.i, ".el-radio-button__orig-radio:disabled+.el-radio-button__inner{color:#67696d;cursor:not-allowed;background-image:none;background-color:#383838;border-color:#111;box-shadow:none}.devinfo{position:absolute;display:inline-block;left:1rem;color:#0090cc;line-height:1.5rem;font-weight:700}.devinfo span{color:#ababab;font-weight:700}.dia-keyle .el-dialog__body{padding:0}", ""])
    }, 668: function (e, t, i) {
        "use strict";
        var o = function () {
            var e = this, t = e.$createElement, i = e._self._c || t;
            return i("el-row", {staticClass: "tac"}, [i("el-col", {attrs: {span: 18}}, [i("el-row", {
                style: {height: e.lay_h_show + "px"},
                attrs: {id: "device-show-box"}
            }, [i("cms-device", {
                ref: "device",
                attrs: {
                    deviceid: e.cms.deviceID,
                    keymap: e.device.keymap,
                    scale: e.lay_show_scale,
                    scaleplus: e.lay_show_scale_plus,
                    showbtn: e.showdevbtn,
                    isfnkeyset: e.isfnkeyset,
                    isediting: !1,
                    disabled: ""
                },
                on: {
                    removeKeyFunc: e.removeKeyFunc,
                    removeKeyLE: e.removeKeyLE,
                    showKeyLeSelect: e.showKeyLeSelect,
                    selectStdLE: e.selectStdLE,
                    removeStdLE: e.removeStdLE,
                    fnxChange: e.handleFnxChange,
                    openFnLayer: e.openFnLayer,
                    selLeKeys: e.selStaticLeKeys
                }
            }), e._v(" "), i("div", {
                staticStyle: {
                    width: "100%",
                    position: "absolute",
                    bottom: "0rem",
                    "z-index": "3"
                }
            }, [i("el-radio-group", {
                staticStyle: {"margin-left": "1rem"},
                on: {change: e.changeProfile},
                model: {
                    value: e.layerguid, callback: function (t) {
                        e.layerguid = t
                    }, expression: "layerguid"
                }
            }, e._l(e.device.profiles, function (t, o) {
                return i("el-radio-button", {
                    key: o,
                    attrs: {label: t.GUID, "data-guid": t.GUID}
                }, [1 == t.ModeIndex ? i("span", [e._v(e._s(e.$t("common.layer_std")))]) : e._e(), e._v(" "), 2 == t.ModeIndex || 3 == t.ModeIndex || 4 == t.ModeIndex ? i("span", [e._v(e._s(e.$t("common")["layer_onboard_" + (t.ModeIndex - 1)]))]) : e._e(), e._v(" "), 0 == t.ModeIndex ? i("span", [e._v(e._s(e.$t("common")["layer_driver_" + (o - 3)]))]) : e._e()])
            }), 1), e._v(" "), i("el-button-group", {staticStyle: {"margin-left": ".5rem"}}, [i("el-tooltip", {
                staticClass: "item",
                attrs: {effect: "dark", content: e.$t("common.is_restore_current_layer_to_default"), placement: "top"}
            }, [i("el-button", {
                attrs: {icon: "el-icon-refresh", loading: e.isrestoring},
                on: {click: e.handleShowRestoreProfileConfirm}
            })], 1), e._v(" "), i("el-tooltip", {
                staticClass: "item",
                attrs: {effect: "dark", content: e.$t("common.is_clear_current_config"), placement: "top"}
            }, [i("el-button", {
                attrs: {icon: "el-icon-delete", loading: e.isclearing, type: "danger"},
                on: {click: e.handleShowClearProfile}
            })], 1), e._v(" "), i("el-tooltip", {
                staticClass: "item",
                attrs: {effect: "dark", content: e.$t("common.is_import_profile_to_current_layer"), placement: "top"}
            }, [i("el-button", {
                attrs: {icon: "el-icon-upload2", disabled: e.disimportprofile},
                on: {click: e.handleImportProfile}
            })], 1), e._v(" "), i("el-tooltip", {
                staticClass: "item",
                attrs: {effect: "dark", content: e.$t("common.is_export_current_layer"), placement: "top"}
            }, [i("el-button", {
                attrs: {icon: "el-icon-download", disabled: e.disexportprofile},
                on: {click: e.handleExportProfile}
            })], 1)], 1), e._v(" "), i("div", {
                staticStyle: {
                    position: "absolute",
                    right: "1rem",
                    display: "inline-block"
                }
            }, [i("el-button-group", {staticStyle: {"margin-right": ".5rem"}}, [i("el-button", {
                class: {"btn-breath": e.iskeysetchange},
                attrs: {icon: "el-icon-check"},
                on: {click: e.saveKeySet}
            }, [e._v(e._s(e.$t("common.save")))])], 1), e._v(" "), i("el-button-group", [i("el-button", {
                class: {"btn-breath": e.isapplied},
                attrs: {icon: "el-icon-download", loading: e.isapplying},
                on: {click: e.applyProfile}
            }, [e._v(e._s(e.$t("common.apply")))])], 1)], 1)], 1), e._v(" "), i("div", {
                staticStyle: {
                    width: "100%",
                    position: "absolute",
                    top: "1rem",
                    "z-index": "1"
                }
            }, [i("div", {staticClass: "devinfo"}, [i("span", [e._v(e._s(e.$t("common.model")) + ": ")]), e._v(e._s(e.device.modelInfo.Name)), i("br"), e._v(" "), i("span", [e._v(e._s(e.$t("common.firm_version")) + ": ")]), e._v(e._s(e.device.FWVersion) + "\n        ")]), e._v(" "), i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !1,
                    expression: "false"
                }], staticStyle: {position: "absolute", right: "1rem"}
            }, [e.hasfnkeyset ? i("el-switch", {
                staticStyle: {"margin-left": "1rem"},
                attrs: {"active-color": "#00A0DD", "inactive-color": "#666", "active-text": "Fn+X"},
                on: {change: e.handleIsFnKeySet},
                model: {
                    value: e.isfnkeyset, callback: function (t) {
                        e.isfnkeyset = t
                    }, expression: "isfnkeyset"
                }
            }) : e._e()], 1)]), e._v(" "), i("el-dialog", {
                attrs: {
                    visible: e.dialog.visible,
                    width: "30%",
                    "show-close": e.dialog.isshowclose,
                    "before-close": e.handleCloseDialog,
                    center: ""
                }, on: {
                    "update:visible": function (t) {
                        return e.$set(e.dialog, "visible", t)
                    }
                }
            }, [i("p", {
                attrs: {slot: "title"},
                slot: "title"
            }, [i("i", {staticClass: "el-icon-warning"}), e._v(" " + e._s(e.dialog.title))]), e._v(" "), i("span", [e._v(e._s(e.dialog.content))]), e._v(" "), i("span", {
                staticClass: "dialog-footer",
                attrs: {slot: "footer"},
                slot: "footer"
            }, [i("el-button", {
                attrs: {icon: "el-icon-back"}, on: {
                    click: function (t) {
                        e.dialog.visible = !1
                    }
                }
            }, [e._v(e._s(e.$t("common.cancel")))]), e._v(" "), i("el-button", {
                attrs: {
                    type: "primary",
                    icon: "el-icon-check"
                }, on: {click: e.handleConfirm}
            }, [e._v(e._s(e.$t("common.confirm")))])], 1)]), e._v(" "), i("el-dialog", {
                staticClass: "dia-keyle",
                attrs: {
                    visible: e.dialogkeylesel.visible,
                    width: "25%",
                    "show-close": e.dialogkeylesel.isshowclose,
                    center: ""
                },
                on: {
                    "update:visible": function (t) {
                        return e.$set(e.dialogkeylesel, "visible", t)
                    }
                }
            }, [i("p", {
                attrs: {slot: "title"},
                slot: "title"
            }, [i("i", {staticClass: "el-icon-circle-check"}), e._v(" " + e._s(e.dialogkeylesel.title))]), e._v(" "), i("span", [i("el-table", {
                ref: "keylestable",
                attrs: {
                    data: e.filterkeylelist,
                    "show-header": !1,
                    border: "",
                    height: "250",
                    size: "mini",
                    "highlight-current-row": ""
                },
                on: {"row-click": e.handleKeyLeRowChange}
            }, [i("el-table-column", {
                scopedSlots: e._u([{
                    key: "default", fn: function (t) {
                        return [i("i", {staticClass: "el-icon-kb-light"}), e._v(" "), i("span", {staticStyle: {"margin-left": "10px"}}, [e._v(e._s(t.row.Name))])]
                    }
                }])
            })], 1)], 1), e._v(" "), i("span", {
                staticClass: "dialog-footer",
                attrs: {slot: "footer"},
                slot: "footer"
            }, [i("el-button", {
                attrs: {icon: "el-icon-back"}, on: {
                    click: function (t) {
                        e.dialogkeylesel.visible = !1
                    }
                }
            }, [e._v(e._s(e.$t("common.cancel")))]), e._v(" "), i("el-button", {
                attrs: {
                    type: "primary",
                    icon: "el-icon-check"
                }, on: {click: e.handleKeyLeConfirm}
            }, [e._v(e._s(e.$t("common.confirm")))])], 1)])], 1), e._v(" "), i("el-row", {
                style: {height: e.lay_h_keys + "px"},
                attrs: {id: "device-keys-box"}
            }, [i("cms-keyset", {
                ref: "keysets",
                on: {changeKeyFunc: e.changeKeyFunc, saveProfile: e.saveProfile}
            })], 1)], 1), e._v(" "), i("el-col", {attrs: {span: 6}}, [i("el-row", {
                style: {height: e.lay_h_les + "px"},
                attrs: {id: "device-le-box"}
            }, [i("cms-lelist", {
                ref: "lelist",
                attrs: {
                    lelist: e.cms.les,
                    height: e.lay_h_les_list,
                    lesel: e.device.lesel,
                    leseltype: "1",
                    title: e.$t("le.le_setting_title"),
                    isstaticle: "true"
                },
                on: {saveModeLE: e.saveModeLE, playLE: e.playLE}
            })], 1), e._v(" "), i("el-row", {
                style: {height: e.lay_h_macros + "px"},
                attrs: {id: "device-macro-box"}
            }, [i("cms-macrolist", {
                ref: "macrolist",
                staticStyle: {position: "absolute", bottom: "0", width: "100%"},
                attrs: {macrolist: e.cms.macros, height: e.lay_h_macros_list},
                on: {setKeyMacro: e.setKeyMacro}
            })], 1)], 1)], 1)
        }, a = [], l = {render: o, staticRenderFns: a};
        t.a = l
    }, 679: function (e, t, i) {
        var o = i(657);
        "string" == typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals);
        i(18)("1b658ff1", o, !0, {})
    }
});