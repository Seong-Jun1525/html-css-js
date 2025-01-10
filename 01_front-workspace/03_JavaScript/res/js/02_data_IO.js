// alert("메시지");
console.log("콘솔");

// 데이터를 출력하는 구문
function documentWrite() {
    document.write("<b>자바스크립트</b>");
    document.write(`
        <table border="1">
            <tr>
                <td>1</td>
                <td>2</td>
            </tr>
            <tr>
                <td>3</td>
                <td>4</td>
            </tr>
        </table>
    `);
}

// 요소에 출력
function elementTest() {
    let divEl = document.getElementById("area1");
    console.log(divEl); // 출력 결과가 null인지 확인하기
    console.log(divEl.id);
    console.log(divEl.className);
    console.log(divEl.innerHTML); // 내용(태그 포함)
    console.log(divEl.innerText); // 내용(태그 미포함)

    divEl.innerHTML = `
        <h4>innerHTML을 사용하여 내용 변경</h4>
    `;
    // => HTML 태그가 포함된 내용을 반영하고자 할 때 사용

    divEl.innerText = "<h4>innerText를 사용하여 내용 변경</h4>";
    // => 텍스트만 있는 내용을 반영하고자 할 때
}

let resultEl = document.getElementById("result");

function test1() {
    alert(resultEl.innerHTML);
}
function test2() {
    alert(resultEl.innerText);
}
function test3() {
    resultEl.innerHTML = `
        <mark>벌써 3시네요</mark>
    `;
}
function test4() {
    resultEl.innerText = `
        <mark>벌써 3시네요</mark>
    `;
}

// 데이터를 입력 받는 구문(변수에 저장)
// [window.]confirm("질문 내용");
function confirmTest() {
    let area2El = document.getElementById("area2");
    let r = confirm("졸려요?");
    console.log(r);

    if(r) {
        area2El.innerHTML = `
            <h2>정신차려요</h2>
        `
    }
    else {
        area2El.innerHTML = `
            <h2>굳입니다.</h2>
        `
    }
}

// [window.]prompt("질문 내용");
function promptTest() {
    let area3El = document.getElementById("area3");

    let name = prompt("이름을 입력하세요?");
    let age = prompt("나이는 어떻게 되나요?");

    if(name !== null && age !== null) {
        area3El.innerHTML = `
            <p style="margin: 0;">이름 : ${name}</p>
            <p style="margin: 0;">나이 : ${age}</p>
        `;
    }
    else {
        area3El.innerHTML = `
            <b style="color: red;">아무것도 입력하지 않았습니다.</b>
        `;
    }
}

// 선택한 input 요소의 값(content) 접근
function loginTest() {
    let userId = document.getElementById("userId");
    let userPw = document.getElementById("userPw");

    console.log(userId.value);
    console.log(userPw.value);

    let area4El = document.getElementById("area4");

    if(userId.value !== "" && userPw.value !== "") {
        area4El.value = `${userId.value}, ${userPw.value}`;
        userId.value = "";
        userPw.value = "";
    }
    else {
        area4El.value = "둘중 하나가 입력되지 않았습니다."
    }
}