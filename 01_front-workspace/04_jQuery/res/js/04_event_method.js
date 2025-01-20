$(function() {
    // 이벤트 메서드 이용 : click
    // $("#area1 > h6").click(() => {
    //     $("#area1").append("<h6>클릭된 h6요소 click</h6>");
    //     // => 동적으로 추가된 요소에는 이벤트가 적용되지 않음
    // });

    // on()
    // $("#area1 > h6").on("click", () => {
    //     $("#area1").append("<h6>클릭된 h6요소 on</h6>");
    // });
    // => 동적으로 추가된 요소에는 이벤트 적용 안됨

    $("#area1").on("click", " > h6", () => {
        $("#area1").append("<h6>클릭된 h6요소 부모요소 사용</h6>");
    });
    // => 동적으로 추가된 요소도 이벤트 적용 됨
});

// 키보드

// 글자 수
$(function() {
    $("#content").keyup(function() {
        let count = $(this).val().length;
        if(count > 150) {
            alert("더 이상 입력할 수 없습니다.");
            const content = $(this).val().slice(0, 150);
            $(this).val(content);
        } else {
            $("#count").text(count);
        }
    });
});

$(function() {
    $("#btn-fadeIn").click(() => {
        $("#img01").fadeIn();
    });

    $("#btn-fadeOut").click(() => {
        $("#img01").fadeOut();
    });

    $("#btn-fadeToggle").on("click", () => {
        $("#img01").fadeToggle(); // on-off 느낌
    });
});

$(function() {
    $(".qa_box div").click(function() {
        // $(this) 클릭 이벤트가 발생된 div 요소
        // $(this).next() : 해당 요소 바로 다음의 요소(-> p)

        const $p = $(this).next();
        // $를 붙이면 jQuery 방식으로 선택된 요소를 의미함(정해진 것은 아님)

        if($p.css("display") === "none") {
            // p요소의 display 스타일 속성의 값이 none인 경우
            $p.slideDown();
        } else {
            $p.slideUp();
        }
    });
});