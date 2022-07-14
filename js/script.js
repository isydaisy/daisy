


// loading page
$(window).load(function(){
   setTimeout(function() {
      $('.loading').fadeOut();
    }, 500);
});


 // Scroll Naviagation Background Change 1-2-3-4 page
 $(document).ready(function(){

 var about =  $('#about').offset().top;
 var work =  $('#work').offset().top;
 var portfolio =  $('#portfolio').offset().top;
 var contact =  $('#contact').offset().top;

   $(window).scroll(function () {
      if(  $(window).scrollTop() >= about && $(window).scrollTop() < work){
            $('.introTop').addClass('navigationBgBlack');
            console.log(1);
      }else{
            $('.introTop').removeClass('navigationBgBlack');
            console.log(2);
      }
   });
   $(window).on('scroll', function () {
      if(  $(window).scrollTop() >= work && $(window).scrollTop() <portfolio){
            $('.introTop').addClass('navigationBgPure');

      }else{
            $('.introTop').removeClass('navigationBgPure');
      }
   });
   $(window).on('scroll', function () {
      if( $(window).scrollTop() >= portfolio && $(window).scrollTop() <contact){
            $('.introTop').addClass('navigationBgWhite');
      }else{
            $('.introTop').removeClass('navigationBgWhite');
      }
   });
   $(window).on('scroll', function () {
   if($(window).scrollTop() >= contact){
         $('.introTop').addClass('navigationBgGrey');
   }else{
         $('.introTop').removeClass('navigationBgGrey');
   }
   });
})
// $(window).scrollTop() > 1000 && $(window).scrollTop() <2500

const content = "기본기에 특별함이 조금 더해진 \n 그런 보통통한 개발자가 되고 싶습니다. ";
const text = document.querySelector(".mytext");
let i = 0;

function typing(){
    let txt = content[i++];
    text.innerHTML += txt=== "\n" ? "<br/>": txt;
    if (i > content.length) {
        text.textContent = "";
        i = 0;
    }
}
setInterval(typing, 150)



// 3Page auto blink
let at = 1;
setInterval(function() {
   if( at == 1 ){
      $('.aboutMe').addClass('talkShadow');
      at = 0;
   }else{
      $('.aboutMe').removeClass('talkShadow');
      at = 1;
   }
}, 1000);

// mouseover
$('.my').on('mouseover', function () {
   $('.my').addClass('line');
});
$('.my').on('mouseleave', function () {
      $('.my').removeClass('line');
});

$('.history').on('mouseover', function () {
   $('.history').addClass('line');
});
$('.history').on('mouseleave', function () {
      $('.history').removeClass('line');
});

$('.license').on('mouseover', function () {
   $('.license').addClass('line');
});
$('.license').on('mouseleave', function () {
      $('.license').removeClass('line');
});

$('.skil').on('mouseover', function () {
   $('.skil').addClass('line');
});
$('.skil').on('mouseleave', function () {
      $('.skil').removeClass('line');
});

// // page auto slide
// var wheelDelta= 0;
// var browser= 0;
// var cnt=0;
// var that=null;
//
//
// $('.page').each(function(index){
//    $(this).on('mousewheel DOMMouseScroll', function(event){
//       event.preventDefault();
//       browser=window.navigator.userAgent.toLowerCase().indexOf('firefox');
//       if(browser>=0){
//          wheelDelta=-event.detail*40
//       }else{
//          wheelDelta = event.originalEvent.wheelDelta;
//       }
//       console.log(wheelDelta);
//
//       if(wheelDelta < 0){
//          if(index<$('.page').length-1){
//             if(index !=6){
//                $('html').stop().animate({scrollTop: $(this).next().offset().top});
//             }else{
//                that=$(this);
//                nextSlide();
//             }
//          }
//       }else{
//          if(index>0){
//             if(index !=6){
//                $('html').stop().animate({scrollTop: $(this).prev().offset().top });
//             }else{
//                that=$(this);
//                prevSlide();
//             }
//          }
//       }
//    });
// });

// portfolio

$(".option").click(function(){
   $(".option").removeClass("active");
   $(this).addClass("active");
});
   
   