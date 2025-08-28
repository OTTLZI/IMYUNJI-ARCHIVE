'use strict';
$(document).ready(function () {
  // 모달 열기
  $(".modalBtn").on("click", function () {
    var index = $(this).find("img.pfThumnail").attr("id").replace("num", "");
    var $modal = $(".modal.num" + index);

    // 스크롤 위치 저장 후 body 고정
    const scrollY = window.scrollY || window.pageYOffset;
    $("body").addClass("no-scroll").css({
      top: -scrollY + "px"
    }).data("scrollY", scrollY);

    $modal.fadeIn(200).css("display", "flex");
  });

  // 모달 닫기
  $(".btn-close, .modal").on("click", function (e) {
    if ($(e.target).hasClass("modal") || $(e.target).hasClass("btn-close")) {
      var $modal = $(this).closest(".modal");
      const scrollY = $("body").data("scrollY") || 0;
      $("body").removeClass("no-scroll").css({
        top: ""
      });
      window.scrollTo(0, scrollY);
      $modal.fadeOut(150);
    }
  });

  // 새로고침 시 모든 모달 닫기
  $(".modal").hide();

  // 사이드바 토글
  $('#trigger').on('change', function () {
    if ($(this).is(':checked')) {
      $('.sidebar').css('left', '0');
      $('.overlay').fadeIn();
    } else {
      $('.sidebar').css('left', '-260px');
      $('.overlay').fadeOut();
      $('.sidebar .sub').slideUp();
    }
  });
  $('.overlay').on('click', function () {
    $('#trigger').prop('checked', false).trigger('change');
  });

  // 썸네일 hover 텍스트 (미리보기)
  $('#right_content>li').hover(function () {
    $(this).find('.thum_txt').css({
      transform: 'translateY(0)',
      opacity: 1
    });
  }, function () {
    $(this).find('.thum_txt').css({
      transform: 'translateY(100%)',
      opacity: 0
    });
  });
});