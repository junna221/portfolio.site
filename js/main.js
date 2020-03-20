var mql = window.matchMedia('screen and (max-width: 700px)');
  function checkBreakPoint(mql) {
    if (mql.matches) {
      // スマホ向け（700px以下のとき）
      $('.slider').not('.slick-initialized').slick({
        //スライドさせる
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true
      });
    } else {
      // PC向け
      $('.slider.slick-initialized').slick('unslick');
    }
  }

  // ブレイクポイントの瞬間に発火
  mql.addListener(checkBreakPoint);

  // 初回チェック
  checkBreakPoint(mql);