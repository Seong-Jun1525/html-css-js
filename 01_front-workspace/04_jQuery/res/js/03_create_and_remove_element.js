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
        $("#item1").remove();
        alert('안녕');
    });

    $("#detach").click(() => {
        $("#item1").detach();
        alert('안녕');
    })
});