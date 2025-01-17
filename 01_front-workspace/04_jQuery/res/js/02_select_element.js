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

$(document).ready(() => {
    // input 요소의 값 : input.value = "값"     // JS
    // input 요소의 값 : input.val("값")        // jQuery

    // 속성 선택자 사용
    $("input[type=text]").val("초기값@!#@");
    // $("input[type=radio]").prop("checked", true);
    $("input[type=radio]").attr("checked", true);
    // $("input[type=button]").width(100).height(100).val("BIG BUTTON");
    $("input[type=button]").css({"width":"100", "height":"100"}).val("BIG BUTTON");

    // 첨부파일 버튼의 배경색을 연두색
    $(":file").css("background-color", "lightgreen");
    
    // 비밀번호 부분의 배경색을 파란색
    $(":password").css("background-color", "blue");

    // 체크박스 부분을 체크된 상태로 가로 50 세로 50으로 변경
    // $(":checkbox").attr("checked", true).width(50).height(50);

    // 초기화버튼 배경색 하늘색, 글자색 흰색, 테두리 제거, 내용을 취소로 변경
    $(":reset").css({"color": "white", "border" : "none", "background-color": "skyblue"}).val("취소");

    // 제출버튼 클릭 시 "ㅋㅋㅋㅋㅋ" 알림창 표시
    $(":submit").width(100).height(100).click(() => {
        alert("ㅋㅋㅋㅋㅋ");
    });
    
    // $(":submit").mouseenter(function() {
    //     // this, arguments나 super에 대한 자체 바인딩이 없고, 메서드로 사용해서는 안 됨
    //     // 즉 화살표 함수일 경우 this 사용 불가
    //     // console.log("asd");
    //     $(this).addClass("bg_pink");
    // });

    // $(":submit").mouseout(function() {
    //     $(this).removeClass("bg_pink");
    // });

    // hover : mouseenter + mouseout
    $(":submit").hover(function() {
        // mouseenter인 경우
        $(this).addClass("bg_pink");
    }, function() {
        // mouseout인 경우
        $(this).removeClass("bg_pink");
    });
});

$(function() {
    // 체크된 상태의 요소에만 스타일 적용
    // => 체크박스의 체크 상태가 변경될 때 

    $(":checkbox").change(function() {
        // 상태를 조회할 때는 attr이 아니라 prop를 사용
        // attr과 prop의 차이점 찾아보기
        // console.log($(this).prop("checked"));

        if($(this).prop("checked")) {
            $(this).width(50).height(50).css("accent-color", "red");
        } else {
            $(this).width("").height(""); // 기본값 적용
        }
    })
})