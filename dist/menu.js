var _____WB$wombat$assign$function_____ = function (name) {
    return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name)) || globalThis[name];
};
if (!globalThis.__WB_pmw) {
    globalThis.__WB_pmw = function (obj) {
        this.__WB_source = obj;
        return this;
    };
}
{
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");
    var timeout = 0;
    var closetimer = 0;
    var ddmenuitem = 0;
    function getCheckedValue(radioObj) {
        if (!radioObj)
            return "";
        var radioLength = radioObj.length;
        if (radioLength == undefined)
            if (radioObj.checked)
                return radioObj.value;
            else
                return "";
        for (var i = 0; i < radioLength; i++) {
            if (radioObj[i].checked) {
                return radioObj[i].value;
            }
        }
        return "";
    }
    // open hidden layer
    function mopen(id) {
        // cancel close timer
        mcancelclosetime();
        // close old layer
        if (ddmenuitem)
            ddmenuitem.style.visibility = 'hidden';
        // get new layer and show it
        ddmenuitem = document.getElementById(id);
        ddmenuitem.style.visibility = 'visible';
    }
    // close showed layer
    function mclose() {
        if (ddmenuitem)
            ddmenuitem.style.visibility = 'hidden';
    }
    // go close timer
    function mclosetime() {
        closetimer = window.setTimeout(mclose, timeout);
    }
    // cancel close timer
    function mcancelclosetime() {
        if (closetimer) {
            window.clearTimeout(closetimer);
            closetimer = null;
        }
    }
    // close layer when click-out
    document.onclick = mclose;
    function getElementsByClassName(classname, node) {
        if (!node)
            node = document.getElementsByTagName("body")[0];
        var a = [];
        var re = new RegExp('\\b' + classname + '\\b');
        var els = node.getElementsByTagName("*");
        for (var i = 0, j = els.length; i < j; i++)
            if (re.test(els[i].className))
                a.push(els[i]);
        return a;
    }
    var GlobalSpeachBubbledViewed = 0;
    var preloadPics = new Array();
    var preloadPics_names = ["img/speech-bubble01.png", "img/speech-bubble02.png", "img/speech-bubble03.png", "img/speech-bubble04.png", "img/bubble-about.png", "img/bubble-about-small.png"];
    function loadHandler() {
        if (document.images) {
            var hiddenDiv = document.createElement("div");
            //hiddenDiv.setAttribute("style", "display:none;");
            var X;
            for (var i = 0; i < preloadPics_names.length; i++) {
                //preloadPics[i] = new Image(100,25);
                //preloadPics[i].src=preloadPics_names[i];
                X = document.createElement("img");
                X.setAttribute("src", preloadPics_names[i]);
                X.setAttribute("display", "none");
                //document.body.appendChild(X);
            }
            // document.body.appendChild(hiddenDiv);
        }
        try {
            if (getElementsByClassName("h-bubble01")) {
                getElementsByClassName("h-bubble01")[0].style.display = "";
                getElementsByClassName("h-bubble02")[0].style.display = "none";
                getElementsByClassName("h-bubble03")[0].style.display = "none";
                getElementsByClassName("h-bubble04")[0].style.display = "none";
                setInterval(function () {
                    GlobalSpeachBubbledViewed++;
                    if (GlobalSpeachBubbledViewed == 5) {
                        GlobalSpeachBubbledViewed = 1;
                    }
                    getElementsByClassName("h-bubble01")[0].style.display = "none";
                    getElementsByClassName("h-bubble02")[0].style.display = "none";
                    getElementsByClassName("h-bubble03")[0].style.display = "none";
                    getElementsByClassName("h-bubble04")[0].style.display = "none";
                    getElementsByClassName("h-bubble0" + GlobalSpeachBubbledViewed)[0].style.display = "";
                }, 6000);
            }
        }
        catch (e) {
        }
        $("input[name=sendlink]").bind("click", function () {
            $(".activeBox").addClass("disabled");
            if (undefined != selectManager) {
                selectManager.setEnableState(false);
            }
            $(".selectHolder").css({
                "overflow": "hidden"
            });
            $(".selectHolder").removeClass("activeSelect").addClass("disabled");
            $(".formBox input[type=text]").attr("disabled", "true");
            $(".activeBox", $(this).parent()).removeClass("disabled");
            $(".activeBox input[type=text]", $(this).parent()).removeAttr("disabled");
            if ($(".selectHolder", $(this).parent()).length > 0) {
                $(".selectHolder", $(this).parent()).removeClass("disabled");
                $(".selectHolder", $(this).parent()).css({
                    "overflow": "hidden"
                });
                $(".selectHolder", $(this).parent()).removeClass("activeSelect");
                selectManager.setEnableState(true);
            }
        });
    }
    if (window.addEventListener) {
        window.addEventListener("load", loadHandler, false);
    }
    else {
        window.attachEvent("onload", loadHandler);
    }
}
export {};
/*
     FILE ARCHIVED ON 20:26:01 Jun 28, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:05:01 Sep 01, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.729
  load_resource: 166.826
  PetaboxLoader3.resolve: 79.394
  PetaboxLoader3.datanode: 31.839
*/
//# sourceMappingURL=menu.js.map