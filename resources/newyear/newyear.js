$(function () {
    // Funcția pentru redarea sunetului MP3
    var playSound = function () {
        var audio = new Audio('https://www.mihailungu.com/resources/newyear/ny2012.mp3');
        audio.play();
    };

    // Atașăm un eveniment "mouseenter" la elementele cu clasa ".b-ball_bounce"
    $(document).on("mouseenter", ".b-ball_bounce", function () {
        b(this);
        m(this);
        playSound(); // Apelăm funcția pentru a reda sunetul
    }).on("mouseenter", ".b-ball_bounce .b-ball__right", function (i) {
        i.stopPropagation();
        b(this);
        m(this);
        playSound(); // Apelăm funcția pentru a reda sunetul
    });

    // Funcția pentru încorporarea SWF-ului (lasată aici pentru compatibilitate, dar nu mai este necesară)
    function f() {
        var i = "https://www.mihailungu.com/resources/newyear/ny2012.swf";
        i = i + "?nc=" + (new Date().getTime());
        swfobject.embedSWF(i, "z-audio__player", "1", "1", "9.0.0", null, {}, {
            allowScriptAccess: "always",
            hasPriority: "true"
        });
    }

    // Funcția pentru a returna un element din document (nu mai este necesară)
    function h(i) {
        if ($.browser.msie) {
            return window[i];
        } else {
            return document[i];
        }
    }

    // Funcția care se va apela când obiectul Flash este inițializat (nu mai este necesară)
    window.flashInited = function () {
        d = function (j) {
            try {
                h("z-audio__player").playSound(j);
            } catch (i) {}
        };
    };

    // Verificăm dacă există obiectul swfobject în fereastra globală și îl încorporăm (nu mai este necesară)
    if (window.swfobject) {
        window.setTimeout(function () {
            $("body").append('<div class="g-invisible"><div id="z-audio__player"></div></div>');
            f(); // Apelăm funcția pentru a încorpora SWF-ul
        }, 100);
    }

    // Restul codului rămâne neschimbat

    var l = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "\\"];
    var k = ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"];
    var g = 36;
    var a = {};

    for (var e = 0, c = l.length; e < c; e++) {
        a[l[e].charCodeAt(0)] = e;
    }

    for (var e = 0, c = k.length; e < c; e++) {
        a[k[e].charCodeAt(0)] = e;
    }

    $(document).keypress(function (j) {
        var i = $(j.target);
        if (!i.is("input") && j.which in a) {
            d(a[j.which]);
        }
    });

    function b(n) {
        if (n.className.indexOf("b-ball__right") > -1) {
            n = n.parentNode
        }
        var i = /b-ball_n(\d+)/.exec(n.className);
        var j = /b-head-decor__inner_n(\d+)/.exec(n.parentNode.className);
        if (i && j) {
            i = parseInt(i[1], 10) - 1;
            j = parseInt(j[1], 10) - 1;
            d((i + j * 9) % g)
        }
    }
    function m(j) {
        var i = $(j);
        if (j.className.indexOf(" bounce") > -1) {
            return
        }
        i.addClass("bounce");

        function n() {
            i.removeClass("bounce").addClass("bounce1");

            function o() {
                i.removeClass("bounce1").addClass("bounce2");

                function p() {
                    i.removeClass("bounce2").addClass("bounce3");

                    function q() {
                        i.removeClass("bounce3")
                    }
                    setTimeout(q, 300)
                }
                setTimeout(p, 300)
            }
            setTimeout(o, 300)
        }
        setTimeout(n, 300)
    }
});
