$(document).ready(function () {
  const $trigger = $('#trigger');
  const $sidebar = $('.sidebar');
  const $overlay = $('.overlay');
  const $navClose = $('.nav-close');
  const $modalBtns = $('.modalBtn');
  const $modals = $('.modal');
  const $modalOverlay = $('.modalOverlay');
  const $modalClose = $('.btn-close');

  /* ===== 사이드바 토글 (모바일/태블릿) ===== */
  $trigger.on('change', function () {
    if ($trigger.is(':checked')) {
      $sidebar.addClass('active');
      $overlay.fadeIn(200);
      $('body').addClass('no-scroll');
    } else {
      $sidebar.removeClass('active');
      $overlay.fadeOut(200);
      $('body').removeClass('no-scroll');
    }
  });

  $navClose.on('click', function () {
    $sidebar.removeClass('active');
    $overlay.fadeOut(200);
    $trigger.prop('checked', false);
    $('body').removeClass('no-scroll');
  });

  $overlay.on('click', function () {
    $sidebar.removeClass('active');
    $overlay.fadeOut(200);
    $trigger.prop('checked', false);
    $('body').removeClass('no-scroll');
    closeAllModals();
  });

  /* ===== 모달 열기 ===== */
  $modalBtns.on('click', function () {
    const modalId = $(this).data('modal');
    $modalOverlay.fadeIn(200);
    $('#modal-' + modalId).fadeIn(200);
    $('body').addClass('no-scroll');
  });

  /* ===== 모달 닫기 ===== */
  $modalClose.on('click', closeAllModals);
  $modalOverlay.on('click', closeAllModals);

  function closeAllModals() {
    $modals.fadeOut(200);
    $modalOverlay.fadeOut(200);
    $('body').removeClass('no-scroll');
  }

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
});
