'use strict';

function Tabs() {
    var bindAll = function () {
        var menuElements = document.querySelectorAll('[data-tab]');
        for (var i = 0; i < menuElements.length; i++) {
            menuElements[i].addEventListener('click', change, false);
        }
    }

    var clear = function () {
        var menuElements = document.querySelectorAll('[data-tab]');
        for (var i = 0; i < menuElements.length; i++) {
            menuElements[i].classList.remove('active');
            var id = menuElements[i].getAttribute('data-tab');
            document.getElementById(id).classList.remove('active');
        }
    }

    var change = function (e) {
        clear();
        e.target.classList.add('active');
        var id = e.currentTarget.getAttribute('data-tab');
        document.getElementById(id).classList.add('active');
    }

    bindAll();
}

var connectTabs = new Tabs();

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
   slidesOffsetAfter:1620,
    spaceBetween: 30,
    mousewheel: {
        sensitivity: 1,
    },
    breakpoints: {
		1920: {
			slidesOffsetBefore:290,
		},
        1025: {
			slidesOffsetBefore:280,
		},
		800: {
			slidesOffsetBefore:120,
		}
        
	},
    scrollbar:{
        el:".swiper-scrollbar",
        draggable:true,
},
});

var slider = new Swiper(".swiperPartner",{
    slidesPerView: 'auto',
   slidesOffsetAfter:780,
    spaceBetween: 30,
    mousewheel: {
        sensitivity: 1,
    },
    breakpoints: {
		1920: {
			slidesOffsetBefore:292,
		},
        1025: {
			slidesOffsetBefore:270,
		},
		800: {
			slidesOffsetBefore:120,
		},
        
        800: {
			slidesOffsetBefore:120,
		},
	},
    scrollbar:{
        el:".swiper-scrollbar1",
        draggable:true,
},
});

$(".c").on('click', function (event) {
    $(event.currentTarget).toggleClass("c1")
});
    $(".slider-AN").on('click', function (event) {
    $(event.currentTarget).toggleClass("slider-AN1"),
        $(".ant",event.currentTarget).toggleClass("ant1")
});