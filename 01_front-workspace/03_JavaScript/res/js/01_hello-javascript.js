function test() {
    window.alert("알림창 출력!");
}

window.onload = function init() {
    let btn = document.getElementById("btn2");
    btn.onclick = function () {
        console.log("콘솔에 출력!");
    }
}