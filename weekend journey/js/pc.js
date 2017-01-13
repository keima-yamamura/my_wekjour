/*--------PC用JS------------*/
/*-----------------パララックス設定---------------------------*/
var s= skrollr.init({
  　　forceHeight: false,
  smoothScrolling: false,
  smoothScrollingDuration: 0
});


/*------------------背景画面幅修正-----------------------*/

// $(window).on('ready resize',function(){
//   var wj_pb = $('.weekend_journey').css('padding-bottom');
//   var width_src = $('.weekend_journey').css('width');
//   var height_src =$('.weekend_journey').innerHeight();
//   $('.wj_bg').css('width', function(){return width_src});
//   $('.wj_bg').css('height', function(){return height_src});
//   $('.wj_bg').css('position', 'absolute');
//   $('.wj_bg').css('z-index','-1');
// });

//wj_bg 読み込み時
$(function(){
  var wj_pb = $('.weekend_journey').css('padding-bottom');
  var width_src = $('.weekend_journey').css('width');
  var height_src =$('.weekend_journey').innerHeight();
  $('.wj_bg').css('width', function(){return width_src});
  $('.wj_bg').css('height', function(){return height_src});
  $('.wj_bg').css('position', 'absolute');
  $('.wj_bg').css('z-index','-1');
});

//resize時
$(window).resize(function(){
  var width_src = $('.weekend_journey').css('width');
  var height_src =$('.weekend_journey').innerHeight();
  $('.wj_bg').css('width', function(){return width_src});
  $('.wj_bg').css('height', function(){return height_src});
  $('.wj_bg').css('position', 'absolute');
  $('.wj_bg').css('z-index','-1');
});

/*------------背景画像フェードイン----------------------*/
$(".wj_bg").bgswitcher({
  images: ["image/bg_main_01@2x.png","image/bg_main_03@2x.png","image/bg_main_02@2x.png"],
});




