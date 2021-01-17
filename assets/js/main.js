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

window.addEventListener('scroll', function() { 
    if(document.body.scrollTop > 100) {
        fixed.classList.add('fixed-top'); 
        fixed.classList.add('shadow'); 
    } else {
        fixed.classList.remove('fixed-top'); 
        fixed.classList.remove('shadow'); 
    }
});

function visited() {
    HbgBlock.classList.add('bgBlock');
    MbgBlock.classList.add('bgBlock');
    disP.classList.add('disP');
    setTimeout(function() {
        closeX.style.opacity = "1";
    }, 400);
    auSideNav.style.opacity = "1";
    auSideNav.style.width = "430px";
}

function closeSideNav() {
    setTimeout(function() {
        closeX.style = closeXReset;
    }, 100);

    setTimeout(function() {
        auSideNav.style = auSideNavReset;
        HbgBlock.style.filter = "blur(0px)";
        MbgBlock.style.filter = "blur(0px)";
    }, 500);

    setTimeout(function() {
        HbgBlock.classList.remove('bgBlock');
        MbgBlock.classList.remove('bgBlock');
        disP.classList.remove('disP');
    }, 700);

    setTimeout(function() {
        HbgBlock.style = HbgBlockReset;
        MbgBlock.style = MbgBlockReset;
    }, 750);
}