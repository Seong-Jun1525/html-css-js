const area1 = document.querySelector("#area1");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");

btn1.onclick = () => {
    console.log("btn1이 출력됨");
    area1.innerHTML += `btn1이 클릭됨<br>`;
}

btn2.onclick = () => {
    console.log("btn2이 출력됨");
    area1.innerHTML += `btn2이 클릭됨<br>`;
    btn1.onclick = null;
}


// btn2.addEventListener("click", () => {
//     console.log("btn2이 출력됨 (addEventListener 사용)");
//     area1.innerHTML += `btn2이 클릭됨 addEventListener 사용<br>`;
// });

const inlineTest = () => {
    document.querySelector("#area2").innerHTML += "인라인 2 클릭<br>";
}

const btn3 = document.querySelector("#btn3");
// 선택한요소.addEventListener

// on을 제외한 이벤트명
btn3.addEventListener("click", () => {
    alert("마지막 시간입니다.");
});

btn3.addEventListener("mouseenter", () => {
    btn3.style.backgroundColor = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`;
    btn3.style.cursor = "pointer";
});

btn3.addEventListener("mouseout", () => {
    btn3.style.backgroundColor = `
    rgb(${Math.floor(Math.random() * 256)}, 
        ${Math.floor(Math.random() * 256)}, 
        ${Math.floor(Math.random() * 256)})`;
});

// 고전 이벤트 방식 버튼이 클릭되었을 때 고전 방식으로 이벤트 등록
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
btn4.onclick = (e) => {
    // console.log(e);
    e.target.style.backgroundColor = `
        rgb(${Math.floor(Math.random() * 256)}, 
            ${Math.floor(Math.random() * 256)}, 
            ${Math.floor(Math.random() * 256)})`;
}

btn5.addEventListener("click", (e) => {
    // console.log(e);
    e.target.style.backgroundColor = `
        rgb(${Math.floor(Math.random() * 256)}, 
            ${Math.floor(Math.random() * 256)}, 
            ${Math.floor(Math.random() * 256)})`;
});

// e => 이벤트 객체 : 발생된 이벤트 정보
// -target 이벤트가 발생된 해당 요소 객체에 접근할 수 있는 속성
const changeColor = (target) => {
    target.style.backgroundColor = `
        rgb(${Math.floor(Math.random() * 256)}, 
            ${Math.floor(Math.random() * 256)}, 
            ${Math.floor(Math.random() * 256)})`;
}

// TODO
const test1 = (target) => {
    // 이동하시겠습니까? 질문을 표시하고
    // 사용자 확인 버튼을 누르면 페이지 이동
    // 취소 버튼을 누르면 페이지 이동 x
    const value = confirm("이동하시겠습니까?");

    return value;
}