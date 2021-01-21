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

window.addEventListener('scroll', function() { 
    if(document.body.scrollTop > 100) {
        fixed.classList.add('fade-in');

    } else {
        fixed.classList.remove('fade-in'); 
    }
});

function visited() {
    //HbgBlock.classList.add('bgBlock');
    MbgBlock.classList.add('bgBlock');
    disP.classList.add('disP');
    setTimeout(function() {
        closeX.style.opacity = "1";
        fixed.classList.add('brandBg');
    }, 400);
    auSideNav.style.opacity = "1";
    auSideNav.style.left = "0";
}

function closeSideNav() {
    setTimeout(function() {
        closeX.style = closeXReset;
    }, 100);

    setTimeout(function() {
        auSideNav.style = auSideNavReset;
        //HbgBlock.style.filter = "blur(0px)";
        MbgBlock.style.filter = "blur(0px)";
        fixed.classList.remove('brandBg');
    }, 500);

    setTimeout(function() {
        //HbgBlock.classList.remove('bgBlock');
        MbgBlock.classList.remove('bgBlock');
        disP.classList.remove('disP');
    }, 700);

    setTimeout(function() {
        //HbgBlock.style = HbgBlockReset;
        MbgBlock.style = MbgBlockReset;
    }, 750);
}

$(document).ready(function(){
    $('.arg0_swiper').slick({
      autoplay: true,
      autoplaySpeed: 400000,
      arrows: false,
    });
    $('#arg0_swiper--prev').on('click', function() {
      $('.arg0_swiper').slick('slickPrev');
    });
    $('#arg0_swiper--next').on('click', function() {
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