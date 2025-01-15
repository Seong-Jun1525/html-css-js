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
    // setInterval은 무한으로 돌기 때문에 꼭 clearInterval을 해줘야함
    clearInterval(timer);
    area1.innerHTML += " 종료";
    console.log("종료");
}

onload = () => {
    setTimeout(() => {
        document.getElementById("area2").innerHTML = "오늘은 수요일 입니다.";
    }, 3000);
}

const test4 = () => {
    const area4 = document.querySelector("#area4");

    // innerHTML 사용해서 노드 추가
    // area4.innerHTML = "<h4>안녕? 반가워!</h4>";

    // document 객체 사용하여 노드 추가
    const element = document.createElement("h4"); // => <시작태그></종료태그>
    const textNode = document.createTextNode("안녕? 반가워!"); // => "안녕?반가워!" 라는 텍스트 생성

    element.appendChild(textNode);
    console.log(element);
    // <h4>안녕?반가워!</h4> object로 되어 있으므로 innerHTML이 아닌 appendChild로 추가해야함

    area4.appendChild(element);

    // <mark><b>강조태그!</b></mark>
    const markElement = document.createElement("mark");
    const bElement = document.createElement("b");
    const markTextNode = document.createTextNode("강조태그!");

    // area4에 한번에 appendChild를 해주면 mark 태그가 안먹힘
    // => 이유 : 이동한 자식 노드를 반환합니다. MDN 사이트 참조
    bElement.appendChild(markTextNode);
    markElement.appendChild(bElement);
    console.log(markElement);

    area4.appendChild(markElement);
    // area4.appendChild(markElement.appendChild(markTextNode)); // <- No
}

const area5 = document.querySelector("#area5");
const test5 = () => {
    const imgEle = document.createElement("img");

    imgEle.src = "./res/image/tree.jpg";
    imgEle.alt = "이미지 찾지 못함(나무이미지)";
    imgEle.width = "300";
    imgEle.height = "300";

    area5.appendChild(imgEle);
}

const test6 = () => {
    const imgList = document.querySelectorAll("#area5 img");

    // 전체 삭제
    for(let i of imgList) i.remove();
}