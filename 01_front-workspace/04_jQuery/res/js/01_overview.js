// 순수 JavaScript
window.onload = () => {
    console.log("----모든 요소 생성 완료!----");
}

window.onload = () => {
    console.log("----모든 요소 생성 완료!2----");
}

// => 마지막에 작성된 onload만 실행됨

// jQuery 방식
/**
 * window.onload는 HTML의 모든 자원이 로딩된 후 동작함.
 * 이미지가 많은 경우 로딩 지연 발생.
 * 
 * 하지만 jQuery는 tag 정보가 로딩된 후 동작함.
 * 속도 측면에서 window.onload보다 빠르게 수행됨
 */
jQuery(document).ready(function() {
    // 실행할 코드
    console.log("jQuery 1");
});

$(document).ready(function() {
    // 실행할 코드
    console.log("jQuery 2");
});

$(function() {
    // 실행할 코드
    console.log("jQuery 3");

    // 순수 JS 방식
    // const h3List = document.getElementsByTagName("h3");

    // for(let h3 of h3List) {
    //     h3.style.backgroundColor = "plum";
    // }

    // jQuery 방식
    // * 요소 접근 $("선택자")

    $("h3").css("background-color", "purple");
    $("h3").css("color", "white");

    $("pre").css("background-color", "pink");
    $("pre").css("border", "0.2rem solid purple");
    $("pre").css("color", "purple");
    $("pre").css("padding", "0.5rem");
});