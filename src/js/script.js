

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
			slidesOffsetBefore:290,
		},
        1025: {
			slidesOffsetBefore:290,
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

var div = document.getElementsByClassName('dropdown-menu');

  for(var  i =0;i<div.length;i++){

  for(var  j =0;j<div[i].children.length;j++){

   div[i].children[j].addEventListener('click',function(){

     this.parentNode.previousElementSibling.innerHTML = this.textContent;
   })
  }
  }

 var someTabTriggerEl = document.querySelector('#pill1')
  var tab = new bootstrap.Tab(someTabTriggerEl)

  tab.show()