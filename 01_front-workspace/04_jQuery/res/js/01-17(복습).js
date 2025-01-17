$(document).ready(function() {
    $("#btnChange").click(() => {
        const colorValue = $("#selColor").val();
        $("#area1").css("background-color", colorValue);
    });
});

const halfSize = () => {
    $("#area2").css({"width":"50", "height":"50"});
}

const defaultSize = () => {
    $("#area2").css({"width":"100", "height":"100"});
}

const doubleSize = () => {
    $("#area2").css({"width":"200", "height":"200"});
}