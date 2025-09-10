'use strict';

// 메인배너 이미지 슬라이드
const mainBanner = document.querySelector('.mainBanner');
const gallery = mainBanner.querySelector('.autogallery');
const galleryLi = gallery.querySelectorAll('ul>li');
const centerBtn = mainBanner.querySelector('.centerBtn');
const spanArrow = centerBtn.querySelectorAll('span.arrow');
const bcon = mainBanner.querySelector('.bcon');
const items = bcon.querySelector('.items');
const itemsUl = items.querySelector('ul');
const itemsUlLi = itemsUl.querySelectorAll('li');

let i = -1;
let setIn;

// PC / 모바일 이미지 경로
const pcImages = [];
const mobileImages = [];
for (let j = 0; j < galleryLi.length; j++) {
    pcImages.push(`url(../img/gallery_${j}.jpg) no-repeat 50% / cover`);
    mobileImages.push(`url(../img/gallery_m_${j}.jpg) no-repeat bottom center / cover`);
}

// 이미지 적용 함수
function setGalleryImages() {
    const isMobile = window.innerWidth <= 768;
    galleryLi.forEach((li, idx) => {
        li.style.background = isMobile ? mobileImages[idx] : pcImages[idx];
    });
}

// 슬라이드 이동 함수
const galleryGoLeftFunc = key => {
    const gab = galleryLi[1].offsetLeft - galleryLi[0].offsetLeft;
    const goto = (-gab * key) + 'px';
    gallery.style.left = goto;
    gallery.style.transition = "all .5s";
};

// 페이지 점 표시
const addOnClassFunc = key => {
    itemsUlLi.forEach((el, idx) => {
        el.classList.toggle('on', key === idx);
    });
};

// 자동 슬라이드
function autoGallery() {
    if (i >= galleryLi.length - 1) i = -1;
    i++;
    galleryGoLeftFunc(i);
    addOnClassFunc(i);
}

function startAutoGallery() {
    setIn = setInterval(autoGallery, 4000);
}

function stopAutoGallery() {
    clearInterval(setIn);
}

// 점 클릭
itemsUl.addEventListener('click', event => {
    const _target = event.target;
    itemsUlLi.forEach((el, idx) => {
        if (el === _target) {
            i = idx;
            galleryGoLeftFunc(i);
            addOnClassFunc(i);
        }
    });
});

// 화살표 클릭
centerBtn.addEventListener('click', event => {
    const _target = event.target;
    spanArrow.forEach(el => {
        if (el === _target) {
            if (el.classList.contains('arrowLeft')) {
                i = (i - 1 + galleryLi.length) % galleryLi.length;
            } else {
                i = (i + 1) % galleryLi.length;
            }
            galleryGoLeftFunc(i);
            addOnClassFunc(i);
        }
    });
});

// 마우스 오버 시 자동 슬라이드 멈춤
mainBanner.querySelectorAll('.overOut').forEach(el => {
    el.addEventListener('mouseover', stopAutoGallery);
    el.addEventListener('mouseout', startAutoGallery);
});

// 화면 로드 + 리사이즈 시 이미지 적용
window.addEventListener('load', () => {
    setGalleryImages();
    autoGallery();
    startAutoGallery();
});
window.addEventListener('resize', setGalleryImages);