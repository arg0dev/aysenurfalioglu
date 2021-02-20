var closeX = document.getElementById('closeX');
var closeXReset = document.getElementById('closeX').style;
var auSideNav = document.getElementById('auSideNav');
var auSideNavReset = document.getElementById('auSideNav').style;
var HbgBlock = document.getElementById('HbgBlock');
var HbgBlockReset = document.getElementById('HbgBlock').style;
var MbgBlock = document.getElementById('MbgBlock');
var MbgBlockReset = document.getElementById('MbgBlock').style;
var disP = document.getElementById('disP');
var fixed = document.getElementById('fixed');
var contrast = document.getElementById('contrast');
var auH = document.getElementById('auH');
var triggerBrand = document.getElementById('triggerBrand');
var triggerBrandDef = document.getElementById('triggerBrand').innerHTML;
var navbarBrand = document.querySelector('.navbar-brand');
var scrollBtn = document.getElementById("scrollBtn");
var chkRect = document.getElementById('chkRect');
var chkSOne = document.getElementById('chkS--One');
var chkSTwo = document.getElementById('chkS--Two');
var chkSThree = document.getElementById('chkS--Three');
var bSChk = document.getElementById('bS--Chk');
triggerBrand.innerHTML = triggerBrandDef;


var SIF1 = setInterval(function () {
    navbarBrand.style.opacity = "0";
}, 1500);

var SIF2 = setInterval(function () {
    triggerBrand.innerHTML = "// VISUAL ARTS";
    navbarBrand.style.opacity = "1";
}, 3000);

var SIF3 = setInterval(function () {
    navbarBrand.style.opacity = "0";
}, 4500);

var SIF4 = setInterval(function () {
    navbarBrand.style.opacity = "1";
    triggerBrand.innerHTML = triggerBrandDef;
}, 6000);

clearInterval(SIF1);
clearInterval(SIF2);
clearInterval(SIF3);
clearInterval(SIF4);

let mQuAu = window.matchMedia("(max-width: 767px)");
matchMediaQuery(mQuAu)
mQuAu.addListener(matchMediaQuery)

function matchMediaQuery(mQuAu) {
    repatTrigger();
    function repatTrigger() {
        if (mQuAu.matches) {
            auH.classList.add('hider');
            SIF1 = setTimeout(function () {
                navbarBrand.style.opacity = "0";
                console.log('test1');
            }, 1500);
    
            SIF2 = setTimeout(function () {
                triggerBrand.innerHTML = "// VISUAL ARTS";
                navbarBrand.style.opacity = "1";
                console.log('test2');
            }, 3000);

            SIF3 = setTimeout(function () {
                navbarBrand.style.opacity = "0";
                console.log('test3');
            }, 4500);
    
            SIF4 = setTimeout(function () {
                navbarBrand.style.opacity = "1";
                triggerBrand.innerHTML = triggerBrandDef;
                console.log('test4');
                repatTrigger();
            }, 6000);
        }
        else {
            auH.classList.remove('hider');
            clearInterval(SIF1);
            clearInterval(SIF2);
            clearInterval(SIF3);
            clearInterval(SIF4);
            triggerBrand.innerHTML = triggerBrandDef;
            navbarBrand.style.opacity = "1";
        }
    }

}

window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 100) {
        fixed.classList.add('fade-in');
        scrollBtn.style.opacity = "1";
        scrollBtn.style.visibility = "visible";

    } else {
        fixed.classList.remove('fade-in');
        scrollBtn.style.opacity = "0";
        scrollBtn.style.visibility = "hidden";
    }
    if (document.body.scrollTop > 500) {
        chkSTwo.classList.add('ltr');
        chkSTwo.style.opacity = "1";
        setTimeout(function () {
            chkRect.classList.add('recT--enabler');
        }, 1000);

    } else {
        chkSTwo.style.opacity = "0";
        chkSTwo.classList.remove('ltr');
        chkRect.classList.remove('recT--enabler');
    }


    if (document.body.scrollTop > 1000) {
        chkSThree.classList.add('ltr');
        chkSThree.style.opacity = "1";
        setTimeout(function () {
            bSChk.classList.add('bS--enabler');
        }, 1000);

    } else {
        chkSThree.style.opacity = "0";
        chkSThree.classList.remove('ltr');
        bSChk.classList.remove('bS--enabler');
    }
});

function visited() {
    MbgBlock.classList.add('bgBlock');
    disP.classList.add('disP');
    setTimeout(function () {
        closeX.style.opacity = "1";
        fixed.classList.add('brandBg');
        scrollBtn.style.opacity = "0";
        scrollBtn.style.visibility = "hidden";
    }, 400);
    auSideNav.style.opacity = "1";
    auSideNav.style.left = "0";
}

function closeSideNav() {
        if (document.body.scrollTop > 100) {
            scrollBtn.style.opacity = "1";
            scrollBtn.style.visibility = "visible";
        } else {

        }

    setTimeout(function () {
        closeX.style = closeXReset;
    }, 100);

    setTimeout(function () {
        auSideNav.style = auSideNavReset;
        MbgBlock.style.filter = "blur(0px)";
        fixed.classList.remove('brandBg');
    }, 500);

    setTimeout(function () {
        MbgBlock.classList.remove('bgBlock');
        disP.classList.remove('disP');
    }, 700);

    setTimeout(function () {
        MbgBlock.style = MbgBlockReset;
    }, 750);
}

$(document).ready(function () {
    $('.arg0_swiper').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        lazyLoad: 'ondemand',
        adaptiveHeight: true,
    });
    $('#arg0_swiper--prev').on('click', function () {
        $('.arg0_swiper').slick('slickPrev');
    });
    $('#arg0_swiper--next').on('click', function () {
        $('.arg0_swiper').slick('slickNext');
    });
});

// smoothScroll-Es5.js | Start |

"use strict";
window.addEventListener("load", function () {
    function scrollIt(destination, duration, easing) {
        if (destination == null) {
            console.log("scroll destination: " + destination);
            return;
        }
        var easings = {
            "linear": function (t) {
                return t;
            },
            "smooth": function (t) {
                return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            }
        };

        var start = window.pageYOffset;
        var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

        var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
        var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
        var destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
        var destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

        if ('requestAnimationFrame' in window === false) {
            window.scroll(0, destinationOffsetToScroll);
            return;
        }

        function scroll() {
            var now = 'now' in window.performance ? performance.now() : new Date().getTime();
            var time = Math.min(1, ((now - startTime) / duration));
            var timeFunction = easings[easing](time);
            window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

            if (Math.abs(window.pageYOffset - destinationOffsetToScroll) < 1) {
                return;
            }
            requestAnimationFrame(scroll);
        }
        scroll();
    }

    var all_scroll_on_click_elements = document.getElementsByClassName("scrollOnClick");
    if (all_scroll_on_click_elements.length != 0) {
        for (var i = 0; i < all_scroll_on_click_elements.length; i++)
            all_scroll_on_click_elements[i].addEventListener('click',
                function (e) {
                    var d = e.currentTarget;
                    var duration = d.getAttribute("duration");
                    if (duration == "" || duration == null) duration = 500;
                    duration = parseInt(duration);
                    var easing = d.getAttribute("easing");
                    if (easing == "" || easing == null) easing = "smooth";
                    var id = d.getAttribute("scrollTo");
                    scrollIt(
                        document.getElementById(id),
                        duration,
                        easing
                    );
                });
    } else {
        console.log("WARNING: No elements with class scrollOnClick found.");
    }
});

// smoothScroll-Es5.js | End |