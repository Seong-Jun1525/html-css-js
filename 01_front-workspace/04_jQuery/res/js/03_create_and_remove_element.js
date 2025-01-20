$(function() {
    // id 속성이 test1인 요소 내에 뒷 부분에 요소를 추가
    $("#test1").append("<span class='addItem'>B</span>");

    // id 속성이 test2인 요소 내에 앞 부분에 요소를 추가
    $("#test2").prepend("<span class='addItem'>B</span>");

    // id 속성이 test2인 요소 다음에 요소를 추가
    $("#test3").after("<span class='addItem'>B</span>");
    
    // id 속성이 test2인 요소 전에 요소를 추가
    $("#test4").before("<span class='addItem'>B</span>");

    // $(B).appendTo(A) 선택된 요소(B)를 타겟 요소(A)에 추가
    // $("#test1").appendTo("<span class='addItem'>C</span>"); // 없는 곳에 추가하려고 하면 없어짐
    $("<span class='addItem'>C</span>").appendTo("#test1");
});

$(function() {
    $("#item1").hover(function() {
        // mouseenter
        $(this).addClass("bgPink");
    }, function() {
        // mouseout
        $(this).removeClass("bgPink");
    });

    $("#empty").click(() => {
        // #item1 요소의 하위 요소 제거
        $("#item1").empty();
    });

    $("#remove").click(() => {
        const item1 = $("#item1").remove(); // 이벤트는 따로 가져오지 않음
        $("#result").append(item1);
    });

    $("#detach").click(() => {
        const item1 = $("#item1").detach();
        $("#result").append(item1); // 이벤트 요소도 가져옴
    });
});