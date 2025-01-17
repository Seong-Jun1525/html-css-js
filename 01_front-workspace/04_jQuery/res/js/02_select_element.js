$(function() {
    // 순수 JS 방식
    document.getElementById("id1").style.color = "red";
    document.getElementById("id2").innerHTML = "안녕하세요";

    // jQuery 방식
    setTimeout(() => {
        $("#id1").css("color", "yellow");
        $("#id2").html("잘가세요");
    }, 1500);
});

$(document).ready(function() {
    // 순수 JS 방식
    // p 요소 글자 색 변경
    const pList = document.querySelectorAll("p");
    // console.log(pList);
    
    for(let i = 0; i < pList.length; i++) {
        pList[i].style.color = "red";
    }

    // jQuery 방식
    $("p").css("color", "green");
    $("p, h5").css("background-color", "yellow");
});

$(document).ready(function() {
    // 순수 JS 방식
    // .cls인 요소의 글자색을 변경, 해당 요소 클릭시 console.log(".cls 클릭")
    const clsEleList = document.querySelectorAll(".cls");

    for(let i = 0; i < clsEleList.length; i++) {
        clsEleList[i].style.color = "red";
        clsEleList[i].addEventListener("click", () => {
            console.log(`${i+1}번째 .cls 클릭`);
        });
    }

    // jQuery 방식
    // console.log($(".select"));
    $(".select")
        // .css("background-color", "pink")
        // .css("cursor", "pointer")
        // 객체 형식으로 여러 css를 적용 가능
        .css({"background-color":"pink", "cursor": "pointer"})
        .click(() => {
            alert("클릭");
        });
});