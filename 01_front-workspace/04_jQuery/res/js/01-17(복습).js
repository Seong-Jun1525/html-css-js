$(document).ready(function() {
    $("#btnChange").click(() => {
        const colorValue = $("#selColor").val();
        $("#area1").css("background-color", colorValue);
    });

    // $("#halfSize").click(() => {
    //     $("#area2").css({"width":"50", "height":"50"});
    // });

    // $("#defaultSize").click(() => {
    //     $("#area2").css({"width":"100", "height":"100"});
    // });

    // $("#doubleSize").click(() => {
    //     $("#area2").css({"width":"200", "height":"200"});
    // });
});

const halfSize = () => {
    $("#area2").css({"width":"50", "height":"50", "background-color": "red"});

    // width 속성이 존재하기 때문에 width(숫자값) or width("숫자값단위") 이런식으로 해도 됨
    // height 이하동문
}

const defaultSize = () => {
    $("#area2").css({"width":"100", "height":"100", "background-color": "green"});
}

const doubleSize = () => {
    $("#area2").css({"width":"200", "height":"200", "background-color": "blue"});
}