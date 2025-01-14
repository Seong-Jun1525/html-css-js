// 함수 선언
function test1() {
    document.getElementById("area1").innerHTML += "test1() 함수 호출<br>";
}

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");

// 이벤트 속성(onclick)에 익명함수 대입
btn1.onclick = function() {
    document.querySelector("#area2").innerHTML += "이벤트 핸들러 실행!<br>"
}

btn2.onclick = function() {
    const area2 = document.querySelector("#area2");

    area2.style.backgroundColor = area2.style.backgroundColor == "yellow" ?
                                    "purple" :
                                    "yellow";

    // area2.style.backgroundColor = `
    //     rgb(${Math.floor(Math.random() * 256)},
    //     ${Math.floor(Math.random() * 256)},
    //     ${Math.floor(Math.random() * 256)})
    // `;
    // area2.style.color = `
    //     rgb(${Math.floor(Math.random() * 256)},
    //     ${Math.floor(Math.random() * 256)},
    //     ${Math.floor(Math.random() * 256)})
    // `;
}

// 버튼이 클릭된것처럼 동작시키고자 할 때
btn2.click();

function test2(value) {
    document.getElementById("area3").innerHTML += value + "<br>"
}

function test3() {
    console.log(arguments);
    console.log(arguments[2]);

    let sum = 0;

    for(let a of arguments) {
        sum += a;
    }

    document.getElementById("area4").innerHTML = "총합 : " + sum;
}

function test4(target) {
    // => id 속성으로 접근한 요소 객체와 같은 정보를 전달받을 수 있음
    target.value = "클릭됨!";
    target.innerText = "클릭됨@";

    target.style.backgroundColor = "yellow";
}

function test5() {
    document.getElementById("area5").innerHTML = random();
}

function sample() {
    return "Hello?!";
}

function random() {
    // 1 ~ 100 사이의 랜덤값을 반환
    // Math.random() 0 ~ 0.9999...
    // parseInt() 정수로 변환
    return parseInt(Math.random() * 100 + 1);
}

function test6() {
    // const userName = document.querySelector("#userName").value;
    // console.log(userName);

    const getName = function() {
        const userName = document.querySelector("#userName").value;
        console.log(userName);
    }

    return getName; // test6() 자체가 getName이다. 왜냐 getName이 함수이기 때문이다.
}