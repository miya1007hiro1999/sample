

  $(".hamburger").on("click", function () {
    ($("#header").toggleClass("open"));
  });

  $("#navi a").on("click", function () {
    ($("#header").toggleClass("open"));
  });


  // accordion

  $('.live-top').on('click', function() {//タイトル要素をクリックしたら
    var findElm = $(this).next(".accordion-box");//直後のアコーディオンを行うエリアを取得し
    $(findElm).slideToggle();//アコーディオンの上下動作
      
    if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
      $(this).removeClass('close');//クラス名を除去し
    }else{//それ以外は
      $(this).addClass('close');//クラス名closeを付与
   
    }
  });

  $('.news-top').on('click', function() {//タイトル要素をクリックしたら
    var findElm = $(this).next(".news-detail");//直後のアコーディオンを行うエリアを取得し
    $(findElm).slideToggle();//アコーディオンの上下動作
      
    if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
      $(this).removeClass('close');//クラス名を除去し
    }else{//それ以外は
      $(this).addClass('close');//クラス名closeを付与
    }
  });




  $(".slick-area").slick({
    arrows: false,
    centerMode: true,
    centerPadding: "100px",
    slidesToShow:3 ,
    autoplay: true,
    autoplaySpeed:3000 ,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "50px",
          slidesToShow: 1,
        },
      },
    ],
  });

  // $(function(){
  //   $('.slick-item').each(function() {
  //     var iframe = $(this).children('iframe');
  //     var url = iframe.attr('data-src');
  //     var id = url.match(/[\/?=]([a-zA-Z0-9_-]{11})[&\?]?/)[1];
  //     iframe.before('<img src="http://img.youtube.com/vi/'+id+'/mqdefault.jpg" />').remove();
  //     $(this).on('click', function() {
  //       $(this).after('<div class="youtube"><iframe src="https://www.youtube.com/embed/'+id+'?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>').remove();
  //     });
  //   });
  // });


  // scroll
  //スクロールした際の動きを関数でまとめる
function PageTopCheck(){
  var winScrollTop = $(this).scrollTop();
  var secondTop =  $("#MOVIE").offset().top - 150; //#area-2の上から150pxの位置まで来たら
  if(winScrollTop >= secondTop){
  $('.js-scroll').removeClass('scroll-view');//.js-scrollからscroll-viewというクラス名を除去
  $('.js-pagetop').addClass('scroll-view');//.js-pagetopにscroll-viewというクラス名を付与
} else {//元に戻ったら
  $('.js-scroll').addClass('scroll-view');//.js-scrollからscroll-viewというクラス名を付与
  $('.js-pagetop').removeClass('scroll-view');//.js-pagetopからscroll-viewというクラス名を除去
}

}

//クリックした際の動き
$('.scroll-top a').click(function () {
var elmHash = $(this).attr('href'); //hrefの内容を取得
if (elmHash == "#MOVIE") {//もし、リンク先のhref の後が#area-2の場合
  var pos = $(elmHash).offset().top;
  $('body,html').animate({scrollTop: pos}, pos); //#area-2にスクロール
}else{
  $('body,html').animate({scrollTop: 0}, 500); //それ以外はトップへスクロール。数字が大きくなるほどゆっくりスクロール
}
  return false;//リンク自体の無効化
});

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	PageTopCheck();/* スクロールした際の動きの関数を呼ぶ*/
});


$(window).scroll(function () {
  $(".release-list").each(function () {

    var scroll = $(window).scrollTop();

    var target = $(this).offset().top;

    var windowHeight = $(window).height();

    if (scroll > target - windowHeight + $(this).outerHeight()) {
      // outerHeight()はpaddingを含めた高さを取得する
      $(this).addClass("slide");
    }
  });
});


//logoの表示
$(window).on('load',function(){
  $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  $("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
});