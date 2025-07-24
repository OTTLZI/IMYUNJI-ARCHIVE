'use strict';


$(document).ready(function(){
    let pdNum = $(".updown input").val();
    let price = Number($(".option_price").text());
    let defaultPrice = 1;
    console.log(price);

    $("input[type=number]").on("click", function(){
        
        if(pdNum >= 1){
            pdNum++;
            defaultPrice++;
            $(".option_price").text(price*defaultPrice);
        }else if(pdNum <= 100){
            pdNum--;
            defaultPrice--;
            $(".option_price").text(price*defaultPrice);
        }

    });
    
});

// // 숫자 3자리 콤마찍기
// Number.prototype.formatNumber = function(){
//     if(this==0) return 0;
//     let regex = /(^[+-]?\d+)(\d{3})/;
//     let nstr = (this + '');
//     while (regex.test(nstr)) nstr = nstr.replace(regex, '$1' + ',' + '$2');
//     return nstr;
// };

// =================상세페이지 내부 4개 소메뉴=================
var pd_infor_nav = document.getElementsByClassName("pd_infor_nav");

    function handleClick(event) {
        console.log(event.target);
        // console.log(this);
        // 콘솔창을 보면 둘다 동일한 값이 나온다

        console.log(event.target.classList);

        if (event.target.classList[1] === "clicked") {
        event.target.classList.remove("clicked");
        } else {
        for (var i = 0; i < pd_infor_nav.length; i++) {
            pd_infor_nav[i].classList.remove("clicked");
        }

        event.target.classList.add("clicked");
        }
    }

    function init() {
        for (var i = 0; i < pd_infor_nav.length; i++) {
            pd_infor_nav[i].addEventListener("click", handleClick);
        }
    }

    init();