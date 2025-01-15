const test1 = () => {
    open("http://www.naver.com", "네이버열기", "width=500, height=500");
    /**
     * window.open(매개변수1, 매개변수2[, 매개변수3]);
     * 
     * - 매개변수1 : 새 창에서 열고자 하는 url 주소
     * - 매개변수2 : 창 이름. 해당 창 이름으로 같은 창이 열려있으면 새로 열리지 않고 열려있는 창을 표시
     * - 매개변수3 : 새 창의 너비, 높이, 주소창 여부, 툴바 여부 등 설정
     *                  - width, height(기본단위 px)
     *                  - location (주소창 여부)
     *                  - toolbar (툴바 여부)
    *                   - scrollbars (스크롤바 여부)
    *                   - status(상태표시줄)
     */
}

const test2 = () => {
    // console.log("===================시작===================");

    // setTimeout(() => {
    //     console.log("##### setTimeout 실행 #####");
    // }, 5000);

    // console.log("===================종료===================");

    // 팝업창을 하나 띄우고 해당 팝업에서 알림창을 띄운다

    const myNaver = open();
    myNaver.alert("메롱"); // 확인 버튼 누른 후 3초 후 종료
    myNaver.console.log("###");

    setTimeout(() => {
        myNaver.close();
    }, 3000);

}

let timer;

const test3 = () => {
    const area1 = document.getElementById("area1");

        
    timer = setInterval(() => {
        const currentDate = new Date();
        let timeFormat = `${currentDate.getHours()}:${currentDate.getMinutes() < 10 ? "0" + currentDate.getMinutes() : currentDate.getMinutes()}:${currentDate.getSeconds() < 10 ? "0" + currentDate.getSeconds() : currentDate.getSeconds()}`;
        console.log(timeFormat);
        area1.innerHTML = timeFormat;
    }, 1000);
}

const stop = () => {
    clearInterval(timer);
    area1.innerHTML += " 종료";
    console.log("종료");
}

onload = () => {
    setTimeout(() => {
        document.getElementById("area2").innerHTML = "오늘은 수요일 입니다.";
    }, 3000);
}