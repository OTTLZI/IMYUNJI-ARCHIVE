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

const arrImg = [];
for (let i = 0; i < galleryLi.length; i++) {
    arrImg.push('url(../img/gallery_' + i + '.jpg) no-repeat 50% /cover');
    galleryLi[i].style.background = arrImg[i];
}
const galleryGoLeftFunc = key => {
    let gab = galleryLi[1].offsetLeft - galleryLi[0].offsetLeft;
    let goto = (-gab * key) + 'px';
    gallery.style.left = goto;
    gallery.style.transition = "all .5s"
};
const addOnClassFunc = key => {
    itemsUlLi.forEach((el, idx) => {
        if (key == idx) {
            el.classList.add('on');
        } else {
            el.classList.remove('on');
        }
    });
};

let i = -1

function autoGallery() {
    if (i >= galleryLi.length - 1) i = -1
    i++;
    galleryGoLeftFunc(i);
    addOnClassFunc(i)
    if (i >= galleryLi.length - 1) i = -1;
}
let setIn = setInterval(autoGallery, 4000);


const overOut = mainBanner.querySelectorAll('.overOut');
overOut.forEach(el => {
    el.addEventListener('mouseover', () => clearInterval(setIn));
    el.addEventListener('mouseout', () => setIn = setInterval(autoGallery, 4000));
});


itemsUl.addEventListener('click', () => {
    let _target = event.target;
    itemsUlLi.forEach((el, idx) => {
        if (el == _target) {
            el.classList.add('on');
            galleryGoLeftFunc(i);
            i = idx;
        } else {
            el.classList.remove('on');
        }
    });
});

centerBtn.addEventListener('click', () => {
    let _target = event.target;
    spanArrow.forEach((el, idx) => {
        if (el == _target) {
            if (el.classList.contains('arrowLeft')) {
                i--;
                if (i < 0) i = itemsUlLi.length - 1;
                galleryGoLeftFunc(i);
                addOnClassFunc(i);
            } else {
                i++;
                if (i > itemsUlLi.length - 1) i = 0;
                galleryGoLeftFunc(i);
                addOnClassFunc(i);
            }
        }
    });
});

(() => autoGallery())();
