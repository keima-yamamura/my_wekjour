/*--------PC用JS------------*/
/*-----------------パララックス設定---------------------------*/
var s= skrollr.init({
  　　forceHeight: false,
  smoothScrolling: false,
  smoothScrollingDuration: 0
});


/*------------------背景画面幅修正-----------------------*/


//wj_bg 読み込み時
var wj_bg = $('.wj_bg');
$(function(){
    $('html').css('overflow-x','hidden');
    var width_src = $('.weekend_journey').css('width');
    var height_src =$('.weekend_journey').innerHeight();

    wj_bg.css('width', function(){return width_src});
    wj_bg.css('height', function(){return height_src});
    wj_bg.css('position', 'absolute');
    wj_bg.css('z-index','-1');

    var retinaSwitch = window.devicePixelRatio;
    if(retinaSwitch == 1) {
     $(".wj_bg").bgswitcher({
       images: ["assets/image/bg_main_01.png",
                "assets/image/bg_main_03.png",
                "assets/image/bg_main_02.png",
               ],
       interval: 6000,
       duration: 3000
     });
    } else if(retinaSwitch == 2) {
      $(".wj_bg").bgswitcher({
        images: ["assets/image/bg_main_01@2x.png",
                 "assets/image/bg_main_03@2x.png",
                 "assets/image/bg_main_02@2x.png",
                ],
        interval: 6000,
        duration: 3000
      });
    }
});

//resize時
$(window).resize(function(){
  var width_src = $('.weekend_journey').css('width');
  var height_src =$('.weekend_journey').innerHeight();
  var wj_bg = $('.wj_bg').prev();
  wj_bg.css('width', function(){return width_src});
  wj_bg.css('height', function(){return height_src});
  wj_bg.css('position', 'absolute');
  wj_bg.css('z-index','-1');
});

/*------------背景画像フェードイン----------------------*/
// $(document).ready(function(){
// $(".wj_bg").bgswitcher({
//   images: ["image/bg_main_01@2x.png",
//            "image/bg_main_03@2x.png",
//            "image/bg_main_02@2x.png",
//           ],
//   interval: 6000,
//   duration: 3000
// });
// });

// $(document).ready(function(){
// $(".box").bgswitcher({
// images: [
// "images/bg1.png",
// "images/bg2.png",
// "images/bg3.png",
// ],
// effect: "fade",
// easing: "swing",
// interval: 5000,
// loop: true
// });
// });




