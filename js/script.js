// ブラウザリサイズ時のリロード
$(function() {
  var timer = false;
  var prewidth = $(window).width();
  $(window).resize(function() {
    if (timer !== false) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      var nowWidth = $(window).width();
      if (prewidth !== nowWidth) {
        // リロード
        location.reload();
      }
      prewidth = nowWidth;
    }, 200);
  });
});

// グローバルナビゲーションのページ上部固定
$(function() {
  var menu = $('.top_b'),
  offset = menu.offset();
  $(window).scroll(function() {
    if($(window).scrollTop() > offset.top - 10) {
      menu.addClass('fixed');
    } else {
      menu.removeClass('fixed');
    }
  });
});

// グローバルナビゲーションのカレント表示とスムーススクロール
$(function() {
  var margin = 100,   //ウインドウ上部からどれぐらいの位置で変化させるか
  sectionTop = new Array, //sectionのTop位置格納用
  current = -1;   //現在のカレント位置
  //(1)各sectionの縦位置を取得
  $('section').each(function(i) {
    sectionTop[i] = $(this).offset().top;
  });
  //init
  changeNavCurrent(0);
  //スクロールした時の処理
  $(window).scroll(function() {
    scrollY = $(window).scrollTop();
    //(2)各セクションの位置とスクロール位置を比較して、条件にあったらchangeNavCurrentを実行
    for (var i = sectionTop.length - 1 ; i >= 0; i--) {
      if (scrollY > sectionTop[i] - margin) {
        changeNavCurrent(i);
        break;
      }
    };
  });
  //(3)ナビの処理
  function changeNavCurrent(curNum) {
    if (curNum != current) {
      current = curNum;
      curNum2 = curNum + 1;//HTML順序用
      $('.top_b ul li').removeClass('on').addClass('off');
      $('.top_b ul li:nth-child(' + curNum2 +')').addClass('on').removeClass('off');
    }
  };
  $('.top_b ul li a').click(function() {
    // アンカーの値を取得
    var href = $(this).attr('href');
    // 移動先を取得
    var target = $(href == '#' || href == '' ? 'html' : href);
    // 移動先を数値で取得
    var position = target.offset().top;
    // スムーススクロール
    $('body,html').animate({
      scrollTop: position
    }, 500);
    return false;
  });
});

// ページトップへ戻るボタンの設定
$(function() {
  var topBtn = $('.page-top');
  topBtn.hide();
  $(window).scroll(function() {
    if($(this).scrollTop() > 1000) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
  topBtn.click(function() {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});
