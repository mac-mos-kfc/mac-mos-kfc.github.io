$(function() {
//スクロールボタン
    $(window).on('load scroll', function(){
        if ($(window).scrollTop() > 1) {
          $('#top-btn').fadeIn(400);
         }else{
            $('#top-btn').fadeOut(400);
         }
      });
      $('#top-btn').click(function(){
        $('html, body').animate({'scrollTop':0},500);
    });
//スクロールボタン
//ハンバーガーメニュー
$('.nav_toggle').on('click', function () {
    $('.nav_toggle, .nav').toggleClass('show');
});
//ハンバーガーメニュー
});