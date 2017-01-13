/*--------PC用JS------------*/
/*-----------------パララックス設定---------------------------*/
var s= skrollr.init({
  　　forceHeight: false,
  smoothScrolling: false,
  smoothScrollingDuration: 0
});

$('.weekend_journy').css('background','blue');





/*------------------背景画面幅修正-----------------------*/
//wj_bg
      var width_src = $('.weekend_journy').css('width');
      var height_src =$('.weekend_journy').css('height');

      $('.wj_bg').css('background','red');
      $('.wj_bg').css('z-index','1');
      $('.wj_bg').css('top','0');
$(window).resize(function(){
    var w = $('.weekend_journy').css('width');
    var h = $('.weekend_journy').css('height');
    var pb = $('.weekend_journy').css('padding-bottom');

      var rs_width_src = $('.wj_bg').css('width',function(){
        return w;
      });
      var rs_height_src = $('.wj_bg').css('height',function(){
        return h + pb;
      })
      // $('.wj_bg').css('z-index','-1');
  });


/*--------------背景画像変更（仮）-----------------------*/
// $(window).ready(function(){
// var images = ['image/bg_main_01@2x.png','image/bg_main_03@2x.png','bg_main_02@2x.png'];
// var i = 0;
// setInterval(function(){

//     $('.weekend_journy').css('background-image', function() {
//         if (i >= images.length-1) {
//             i=0;
//         }
//         return 'url(' + images[i++] + ')';      
//     });
// }, 3000);
// });






