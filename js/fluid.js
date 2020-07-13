var view, scopes = [],
    // medias = [],
    ismobile = !1;

function addScope(e, i, t) {
    var o, s = new paper.PaperScope;
    switch (s.setup(i), scopes.push(s), s._id = e, t) {
        case "fluid":
            o = new Fluid;
            break;
        case "goo":
            o = new Goo
    }
    return s._instance = o, o
}
var main = addScope("fl", $("#fluid")[0], "fluid");

// function resetScopes() { scopes.splice(1, scopes.length), medias.splice(0, medias.length) }

function selectScope(e) { scopes[e].activate(), view = scopes[e].view }

// function addMedia(e, i, t) {
//     scopes[e] = new paper.PaperScope, scopes[e].setup(i);
//     var o = new Oil(e, t);
//     medias.push(o), scopes[e]._instance = o
// }

// function revealMedia(e, i) { medias[i] && (e.addClass("on"), medias[i]._revealed = !0, medias[i].flow()) }

function Fluid() {
    selectScope(0);
    var e = [],
        i = 0,
        t = 0,
        o = 0,
        s = [],
        n = 0,
        a = 0;

    function l() {
        TweenMax.killAll(), i = ismobile ? 0 : .16 * view.size.width > 211 ? Math.floor(.16 * view.size.width) : 211, end = ismobile ? 50 : 90, t = ismobile ? Math.ceil((view.size.width - i - end) / 2) : Math.ceil((view.size.width - i - end) / 3), o = ismobile ? Math.ceil(view.size.height / 3) : Math.ceil(.5 * view.size.height), s = [
            [0, 0],
            [t, 0],
            [t, 0],
            [.75 * t, 0],
            [.5 * t, 0],
            [.25 * t, 0],
            [0, 0]
        ];
        for (var n in e) {
            var a = e[n].firstChild.segments;
            for (var l in a) a[l].point = s[l];
            e[n].firstChild.smooth({ type: "continuous", from: 2, to: 6 }), e[n].pivot = [0, 0], e[n].position = ismobile ? [i + e[n]._xm * t, e[n]._ym * o] : [i + e[n]._x * t, e[n]._y * o]
        }
    }
    return l(),
        function() {
            for (var l = 0; l < 6; ++l) {
                var r = l - 3 * n,
                    c = l - 2 * a,
                    d = new paper.Group,
                    h = new paper.Path({ segments: s, fillColor: "#0000ff" });
                h.closed = !0, h.applyMatrix = !1, d.position = [r * t + i, n * o], d._x = r, d._xm = c, d._y = n, d._ym = a, d.pivot = [0, 0], d.addChild(h), e.push(d), 2 == l && n++, l % 2 == 1 && a++
            }
        }(), l(), {
            flow: function(i, t, s) {
                l();
                var n = i || "#ff0000",
                    a = s || !1;
                for (var r in e) {
                    e[r].fillColor = n;
                    for (var c = e[r].firstChild.segments, d = 2; d < c.length; ++d) {
                        var h = ismobile ? o + e[r]._ym * o : o + e[r]._y * o;
                        TweenMax.to(c[d].point, .4 * Math.random() + .6, { y: h, ease: Cubic.easeInOut })
                    }
                }
                setTimeout(t, 1e3), setTimeout(l, a ? 1e3 : 1700)
            },
            adjust: l
        }
}

// function Oil(e, i) {
//     var t = [],
//         o = 0,
//         s = 0,
//         n = [];

//     function a() {
//         o = ismobile ? Math.ceil(view.size.width / 2) : Math.ceil(view.size.width / i), s = view.size.height, n = [
//             [0, 0],
//             [.25 * o, 0],
//             [.5 * o, 0],
//             [.75 * o, 0],
//             [o, 0],
//             [o, s],
//             [0, s]
//         ];
//         for (var e in t) {
//             var a = t[e].firstChild.segments;
//             for (var l in a) a[l].point = n[l];
//             t[e].pivot = [0, 0], t[e].position = [t[e]._x * o, t[e]._y * s]
//         }
//     }
//     return a(),
//         function() {
//             for (var e = 0; e < i; ++e) {
//                 var s = new paper.Group,
//                     a = new paper.Path({ segments: n, fillColor: "#fff" });
//                 a.closed = !0, a.smooth({ type: "continuous", from: 1, to: 3 }), a.applyMatrix = !1, s.position = [e * o, 0], s._x = e, s._y = 0, s.pivot = [0, 0], s.addChild(a), t.push(s)
//             }
//         }(), a(), { flow: function() { for (var e in t) { t[e].firstChild; for (var i = t[e].firstChild.segments, o = 0; o < i.length - 2; ++o) TweenMax.to(i[o].point, 1 * Math.random() + .5 + .3 * e, { y: s + 80, ease: Cubic.easeInOut }) } setTimeout(function() { for (var e in t) t[e].firstChild.smooth({ type: "continuous", from: 1, to: 3 }) }, 1800) }, adjust: a }
// }

function Goo() {
    selectScope(1);
    var e = [],
        i = 0,
        t = 0,
        o = 0,
        s = [],
        n = 0,
        a = 0;

    function l(n) {
        TweenMax.killAll(),
            // console.log(.10 * view.size.width); 
            // console.log($('.rgtHeader').outerWidth(true)); 
            // i = ismobile ? 0 : .16 * view.size.width > 211 ? Math.floor(.16 * view.size.width) : 211,

            //Start Point
            i = $('.lftHeader').outerWidth(true),
            //End Point
            end = ismobile ? 50 : $('.rgtHeader').outerWidth(true),

            
            t = ismobile ? Math.ceil((view.size.width - i - end) / 2) : Math.ceil((view.size.width - i - end) / 3),
            o = ismobile ? Math.ceil(view.size.height / 3) : Math.ceil(.5 * view.size.height);
        var a = "down" == n ? o : 0;
        s = [
            [0, a],
            [.25 * t, a],
            [.5 * t, a],
            [.75 * t, a],
            [t, a],
            [t, a],
            [.75 * t, a],
            [.5 * t, a],
            [.25 * t, a],
            [0, a]
        ];
        for (var l in e) {
            var r = e[l].firstChild.segments;
            for (var c in r) r[c].point = s[c];
            e[l].firstChild.smooth({ type: "continuous", from: 1, to: 3 }), e[l].firstChild.smooth({ type: "continuous", from: 6, to: 8 }), e[l].pivot = [0, 0], e[l].position = ismobile ? [i + e[l]._xm * t, e[l]._ym * o] : [i + e[l]._x * t, e[l]._y * o]
        }
    }
    return l(),
        function() {
            for (var l = 0; l < 3; ++l) {
                var r = l - 3 * n,
                    c = l - 2 * a,
                    d = new paper.Group,
                    h = new paper.Path({ segments: s, fillColor: "#0000ff" });
                h.closed = !0, h.applyMatrix = !1, d.position = [r * t + i, n * o], d._x = r, d._xm = c, d._y = 1, d._ym = 1, d.pivot = [0, 0], d.addChild(h), e.push(d), 2 == l && n++, l % 2 == 1 && a++
            }
        }(), l(), {
            flow: function(i, t, s) {
                "in" == t && l(s);
                for (var n in e) {
                    i && (e[n].fillColor = i);
                    var a, r, c, d = e[n].firstChild.segments;
                    "down" == s && "in" == t ? (a = 0, r = 0, c = 5) : "down" == s && "out" == t ? (a = 0, r = o, c = 5) : "up" == s && "in" == t ? (a = 5, r = o, c = d.length) : "up" == s && "out" == t && (a = 5, r = 0, c = d.length);
                    for (var h = a; h < c; ++h) {
                        var u = r + e[n]._y * o;
                        TweenMax.to(d[h].point, .4 * Math.random() + .6, { y: u, ease: Cubic.easeInOut })
                    }
                }
            },
            adjust: l
        }
}
view.onMouseUp = function() { main.flow() };
var ss = "in",
    dd = "up";

function onResize() { ismobile = view.size.width < 901; for (var e in scopes) 1 != scopes[e]._instance._revealed && scopes[e]._instance.adjust() } view.onMouseUp = function() { goo.flow() }, view.onResize = onResize(), onResize();
var s, w, h, os, mainvideo, myScroll, isScrolling = !1,
    intimer = 0,
    outtimer = 0,
    inside = !1,
    n = 0,
    mobileWidth = 768,
    footerIsUp = !1,
    paperscript = {},
    menuIsClickable = !0,
    loadingtimer = null,
    currentPath = null,
    int = null,
    oy = null,
    y = 0,
    focused = null,
    goo = null,
    m99 = {
        init: function() {
            var e = this;
            os = $(window).scrollTop(), $(window).resize(function() { e.resize() }).resize(), $(window).scroll(function() { e.scroll() }).scroll(), e.activate(),
                /*e.menu.init(), $("body").removeClass("hold"),
                           $(".up").click(function() { window.scrollTo(0, 200), $("html, body").stop().animate({ scrollTop: 0 }, 333, "swing") }),*/
                window.onpopstate = function() { e.open({ url: document.location.href, title: "", ID: "" }) }
        },
        resize: function() { w = window.innerWidth, h = window.innerHeight, this.adjust() },
        adjust: function() {
            mobile.detect() ? (
                $(".project .visual > div div.video-perspective").css({ perspective: $(".project").outerWidth() - 30, height: .75 * $(".project").outerWidth() })
                // $(".grid").css("height", h), 
                // $("footer").css("height", .66667 * h)
            ) : (
                $(".project").css({ height: h })
                // $(".project .visual").css({ width: .6666 * $(".project").outerWidth(), bottom: .5 * h - .5 * $(".project").outerWidth() * .7 + .5 * $(".project").outerWidth() * .3, "margin-left": .3333 * $(".project").outerWidth() }), 
                // $(".project .visual > div div.video-perspective").css({ perspective: .6666 * $(".project").outerWidth() - 30, height: .6666 * $(".project").outerWidth() * .75 }), 
                // $(".cover").css("height", h), 
                // $("footer, .cover-wrapper, .intro").css("height", .5 * h), 
                // $(".grid").css("height", "")
            )
        },
        scroll: function() {
            var e = this;
            s = $(window).scrollTop(), 0 == isScrolling && null == int && (isScrolling = !0, int = window.requestAnimationFrame(loop)), e.glide(), clearTimeout($.data(this, "scrollCheck")), $.data(this, "scrollCheck", setTimeout(function() { isScrolling = !1, os = $(window).scrollTop(), e.halt() }, 11))
        },
        halt: function() { window.cancelAnimationFrame(int), int = null, int = null, $(".skew").css("transform", "skewY(0deg)"), $(".skew canvas").css("transform", "translateY(0)") },
        glide: function() {
            if (
                s > os + 40 ? $("body").addClass("asce").removeClass("desc") : $("body").addClass("desc").removeClass("asce"),
                s > 200 ? $("header .up").addClass("show") : $("header .up").removeClass("show"),
                detectEl($(".random")) && $(".random > li").each(function() { s > $(this).offset().top - h + 200 && $(this).addClass("on") }), !mobile.detect()) {
                var e = os - s > 200 ? 200 : os - s < -200 ? -200 : os - s;
                if ($("body:not(.hold) .skew").css("transform", "skewY(" + -.1 * e + "deg)"), $(".cap").each(function() { s > $(this).offset().top - 80 && s < $(this).offset().top + $(this).outerHeight() - 80 ? $(this).addClass("focused") : $(this).removeClass("focused") }), $(".media").each(function() { s > $(this).offset().top - h + 200 && !$(this).hasClass("on") && revealMedia($(this), $(this).index("body .media")) }), detectEl($(".parallel")))
                    if (s > $(".parallel").offset().top - .5 * h && s < $(".parallel").offset().top + $(".parallel").outerHeight()) {
                        var i = (s - $(".parallel").offset().top + .5 * h) / ($(".parallel").outerHeight() + .5 * h);
                        $(".parallel > li:eq(0)").css("transform", "translateY(-" + 100 * i + "px)"), $(".parallel > li:eq(1)").css("transform", "translateY(" + 100 * i + "px)")
                    } else $(".parallel li").css("transform", "translateY(0)")
            }!mobile.detect() && $("section#content").hasClass("home") ? $(".project").each(function() {
                var e = $(this).offset().top - .5 * h + .5 * $(this).outerWidth() * .3,
                    i = $(this).offset().top + $(this).outerHeight() - h,
                    t = $(this).attr("color");
                if (s > e && s < i) {
                    $(this).hasClass("focused") || (focused = $(this).index(), null != goo && goo.flow(t, "in", $(this).hasClass("up") ? "up" : "down"), $(this).removeClass("up down").addClass("focused"), $("video", this).length > 0 && $("video", this)[0].play());
                    var o = (s - e) / (i - e);
                    $(".visual", this).css({
                        transform: "translateY(" + (70 - 30 * o) + "%)"
                    }), s >= $(this).offset().top ? $(this).addClass("half") : $(this).removeClass("half")
                } else s < e ? ($(this).index() == focused && $(this).hasClass("focused") && null != goo && goo.flow(null, "out", "down"), $(this).removeClass("focused up half").addClass("down"), $(".visual", this).css({ transform: "translateY(70%)" })) : ($(this).index() == focused && $(this).hasClass("focused") && null != goo && goo.flow(null, "out", "up"), $(this).removeClass("focused down half").addClass("up"), $(".visual", this).css({ transform: "translateY(40%)" }))
            }) : $(".project").each(function() {
                var e = $(this).offset().top - .6666 * h,
                    i = $(this).offset().top;
                s > e && s < i ? $(this).addClass("focused") : $(this).removeClass("focused")
            })
        },
        // menu: {
        //     init: function() {
        //         var e = this;
        //         $("header button").bind("click", function() { menuIsClickable && (menuIsClickable = !1, $("body").hasClass("menu-open") ? e.close() : e.open()) })
        //     },
        //     close: function(e) { $("canvas#fluid").css("z-index", 8), main.flow("#000000", function() { e && e(), $("body").removeClass("menu-open"), setTimeout(function() { menuIsClickable = !0 }, 1e3) }, !0) },
        //     open: function() { $("canvas#fluid").css("z-index", 8), main.flow("#ffffff", function() { $("canvas#fluid").css("z-index", 2), $("body").addClass("menu-open"), setTimeout(function() { menuIsClickable = !0 }, 1e3) }) }
        // },
        activate: function(e) { for (i in this.actions) this.actions[i](e) },
        actions: {
            links: function(e) {
                var i = m99;
                // $((e || "") + " a").each(function() {
                //     "blank" != $(this).attr("target") && "_blank" != $(this).attr("target") && $(this).attr("href").indexOf("#") < 0 && $(this).attr("href").indexOf("mailto:") < 0 && $(this).attr("href").indexOf("tel:") < 0 && $(this).attr("href").indexOf("javascript:void") < 0 && $(this).unbind("click").click(function(e) {
                //         e.preventDefault(), i.open({
                //             url: $(this).attr("href"),
                //             title: $(this).attr("title"),
                //             ID: $(this).attr("data-id")
                //         })
                //     })
                // })
            },
            // featured: function(e) { $((e || "") + " .project").each(function() {}) },
            // footer: function() { $("a.credits").bind("click", function() { $("footer").toggleClass("show-credits") }) },
            // scroller: function() {},
            home: function(e) { $("#content").hasClass("home") && (goo = addScope("goo", $("#goo")[0], "goo")) },
            // parallel: function(e) {
            //     var i = e || "",
            //         t = null,
            //         o = mobile.detect() ? 2 : 3;
            //     $(i + " .parallel").each(function() { t = $("li ul li.thumb", this).detach(), $(this).html(""); for (var e = 0; e < o; ++e) $(this).append("<li><ul></ul></li>"); for (var i = 0; i < t.length; ++i) { $(">li:eq(" + i % o + ") ul", this).append(t[i]) } })
            // },
            // media: function(e) {
            //     var i = e || "";
            //     $(i + " .media").each(function(e, t) {
            //         if (!mobile.detect()) {
            //             $(t).append('<canvas resize="true" stats hidpi="on" id="n' + e + '" class="oil"></canvas>');
            //             var o = $(t).is(".right, .left") ? 2 : 3;
            //             addMedia(e, $(i + " .media canvas#n" + e)[0], o)
            //         }
            //     })
            // },
            // video: function(e) {},
            // animableImage: function(e) {
            //     $((e || "") + " .image").each(function() {
            //         var e = document.createElement("canvas"),
            //             i = e.getContext("2d"),
            //             t = new Image;
            //         t.onload = function() { e.width = .5 * t.width, e.height = t.height, i.drawImage(t, .5 * -t.width, 0) }, t.src = $("img", this).attr("src"), $(this).append(e)
            //     })
            // }
        },
        // open: function(e) {
        //     var i = this;
        //     e.url != currentPath && ($("body").hasClass("menu-open") ? i.menu.close(function() { $("body").addClass("hold"), $(".frame").html(""), setTimeout(function() { i.load(e.url), $("body").addClass("loading"), window.scrollTo(0, 0) }, 500) }) : (menuIsClickable = !1, main.flow("#fff", function() { $("body").addClass("hold"), setTimeout(function() { i.load(e.url), $("body").addClass("loading"), window.scrollTo(0, 0) }, 500) }, !1)))
        // },
        // load: function(e, i) {
        //     $.ajax({
        //         type: "GET",
        //         dataType: "html",
        //         url: e,
        //         data: { new: 1, referrer: window.location.pathname },
        //         cache: !1,
        //         error: function(e, i, t) { alert(e.responseText), alert(t) },
        //         xhr: function() { var e = new window.XMLHttpRequest; return e.addEventListener("progress", function(e) { if (e.lengthComputable) e.loaded, e.total }, !1), e },
        //         beforeSend: function() { $("body").addClass("loading"), clearTimeout(loadingtimer), loadingtimer = setTimeout(function() { $("body").addClass("loading") }, 2e3), resetScopes() },
        //         complete: function() { clearTimeout(loadingtimer), setTimeout(function() { m99.adjust(), m99.activate(), setTimeout(function() { $("body").removeClass("loading"), $("body").removeClass("hold"), m99.glide() }, 500), registerHistory(i, e) }, 500) },
        //         success: function(e) {
        //             menuIsClickable = !0;
        //             var i = $(e).find("section#content");
        //             $(".frame").html(i);
        //             var t = $(e).filter("title#proje");
        //             $("title").text(t.text())
        //         }
        //     })
        // },
        // slideTo: function(e) { slider && slider.slide(e) }
    };

function loop() { int = window.requestAnimationFrame(loop), os = s } paperscript = {};
var registerHistory = function(e, i) {
        if (e = e || "", history && history.pushState) {
            var t = { Page: e, Url: i };
            window.history.pushState(t, t.Page, t.Url), currentPath = t.Url
        } else window.open(i, "_self");
    },
    mobile = {
        detect: function() {
            if (window.innerWidth > mobileWidth)
                for (var e = navigator.userAgent.toLowerCase(), i = this.mobiles, t = !1, o = 0; o < i.length; o += 1) - 1 != e.indexOf(i[o]) && (t = !0);
            else t = !0;
            return t
        },
        mobiles: ["midp", "240x320", "blackberry", "netfront", "nokia", "panasonic", "portalmmm", "sharp", "sie-", "sonyericsson", "symbian", "windows ce", "benq", "mda", "mot-", "opera mini", "philips", "pocket pc", "sagem", "samsung", "sda", "sgh-", "vodafone", "xda", "palm", "iphone", "ipod", "android", "ipad"]
    },
    detectEl = function(e) { return e.length > 0 };
m99.init(),
    function(e) {
        e(function() {
            var i = e("#output");
            e(window).scroll(function() { i.html("<span id='scrolling'>Scrolling</span>"), clearTimeout(e.data(this, "scrollCheck")), e.data(this, "scrollCheck", setTimeout(function() { i.html("<span id='stopped'>Stopped</span>") }, 250)) })
        })
    }(jQuery);