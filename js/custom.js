$(document).ready(function () {
  const $trigger = $('#trigger');
  const $sidebar = $('.sidebar');
  const $overlay = $('.overlay');

  /* ===== 사이드바 닫기 함수 ===== */
  function closeSidebar() {
    $sidebar.removeClass('active'); // 사이드바 클래스 제거
    $overlay.fadeOut(200); // 오버레이 숨기기
    $trigger.prop('checked', false); // 체크박스 초기화
    $('body').removeClass('no-scroll'); // 스크롤 해제
  }

  /* ===== 햄버거 버튼 클릭 ===== */
  $trigger.on('change', function () {
    if ($trigger.is(':checked')) {
      $sidebar.addClass('active');
      $overlay.fadeIn(200);
      $('body').addClass('no-scroll');
    } else {
      closeSidebar();
    }
  });

  /* ===== 오버레이 클릭 시 사이드바 닫기 ===== */
  $overlay.on('click', closeSidebar);

  /* ===== PC에서 항상 사이드바 표시 ===== */
  function checkWidth() {
    if ($(window).width() > 1024) {
      $sidebar.addClass('active').css('transform', 'translateX(0)');
      $overlay.hide();
      $trigger.prop('checked', false);
      $('body').removeClass('no-scroll');
    } else {
      $sidebar.removeClass('active');
    }
  }
  checkWidth();
  $(window).resize(checkWidth);

  /* ===== Slick Slider 초기화 ===== */
  if ($('.slider-for').length && $('.slider-nav').length) {
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay: true,
      asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: true,
      centerMode: true,
      focusOnSelect: true,
      draggable: true,
      infinite: true,
      centerPadding: '0px',
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
});