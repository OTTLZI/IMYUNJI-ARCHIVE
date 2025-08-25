'use strict';

//=======포트폴리오 홈 화면 썸네일==========//
$(function () {
  var modalOpen;
  // 	이미지 클릭시 해당 이미지 모달
  $(".modalBtn").click(function () {
    modalOpen = $(this).children().attr("id");
    $("." + modalOpen).show();
    console.log(modalOpen);

    // 해당 이미지 가져오기
    var imgSrc = $(this).children(".pfThumnail").attr("src");
    $(".modalContent").attr("src", imgSrc);
  });

  //.modal안에 button을 클릭하면 .modal닫기
  $(".btn-close").click(function () {
    $("." + modalOpen).hide();
  });

  //.modal밖에 클릭시 닫힘
  $(".modal").click(function (e) {
    if (e.target.className != `modal ${modalOpen}`) {
      // return false;
    } else {
      $("." + modalOpen).hide();
    }
  });

  //메뉴 버튼 클릭시 사이드바+오버레이 보이기
  $('#trigger').on('click', function () {
    $('.sidebar').toggleClass('active');
    if ($('.sidebar').hasClass('active')) {
      $('.overlay').fadeIn(1000);
    } else {
      $('.overlay').fadeOut(1000);
    }
  });
  //배경(오버레이 부분)클릭시 사이드바 숨기기
  $('.overlay').on('click', function () {
    $('.sidebar').toggleClass('active');
    if ($('.sidebar').hasClass('active')) {
      $('.overlay').fadeIn(1000);
    } else {
      $('.overlay').fadeOut(1000);
      $("input:checkbox[id='trigger']").prop("checked", false);
    }
  });

});


// 모바일 네비 햄버거 동작
$(document).ready(function () {
  // li 클릭 시 서브 메뉴 토글
  $('.sidebar > ul > li > a').on('click', function (e) {
    if ($(window).width() <= 768) {
      e.preventDefault();
      $(this).next('.sub').slideToggle();
      $(this).parent().siblings().find('.sub').slideUp();
    }
  });

  // 햄버거 체크박스 클릭 시 sidebar & overlay
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

  // 오버레이 클릭 시 메뉴 닫기
  $('.overlay').on('click', function () {
    $('#trigger').prop('checked', false).trigger('change');
  });
});