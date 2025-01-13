function test1() {
    // 배열 선언 및 초기화
    let arr = ["임성준", "인천", 26, true, [10, 20, 30], {}];

    console.log(arr[0]);
    console.log(arr[2]);
    console.log(arr[4][2]);

    for(let i = 0; i < arr.length; i++) {
        document.querySelector("#area1").innerText += arr[i] + "\n";
    }
}

function test2() {
    let arr1 = new Array();
    let arr2 = new Array(3);
    let arr3 = [];

    arr1[0] = "딸기";
    arr1[1] = "바나나";
    arr1[9] = "수박";

    console.log(arr1);

    arr2[0] = "짜장면";
    arr2[1] = "볶음밥";
    arr2[2] = "탕수육";
    arr2[3] = "고량주";
    // => 배열 선언 시 길이를 지정했지만, 데이터 추가에는 문제가 없다.

    console.log(arr2);

    let arr4 = new Array("아이유", "이홍기", "에일리", "빅뱅");
    let arr5 = ["아이유", "이홍기", "에일리", "빅뱅"];

    console.log(arr4);
    console.log(arr5);
}

function findFruit() {
    let fruits = ["사과", "오렌지", "바나나", "블루베리", "키위", "수박", "키위"];

    console.log(fruits.indexOf("키위"));
    console.log(fruits.indexOf("꽃"));

    // 사용자에게 찾는 과일은 무엇입니까? 하는 질문과 함께 알림창 표시
    // 사용자가 입력한 값에 따라 배열에 존재하면 찾았습니다.
    // 배열에 존재하지 않으면 찾지못했습니다.라는 알림창 표시
    const userFruit = prompt("찾는 과일은 무엇입니까?");

    // 메서드를 잘 활용하자
    if(fruits.indexOf(userFruit) > -1) {
        alert("찾았습니다.");
    }
    else {
        alert("찾지못했습니다.");
    }
}

function concatTest() {
    let arr1 = ["김밥", "빵", "라면"];
    let arr2 = ["버스", "전철", "도보", "자차"];

    const area2 = document.querySelector("#area2");

    area2.innerHTML = `
        arr1 : ${arr1}<br>
        arr2 : ${arr2}<br>
        arr1.concat(arr2) : ${arr1.concat(arr2)}<br>
        한번 더 : ${arr1.concat(arr2, [1, 2, 3], ["a", "b", "c"])}
    `;
}

function reverseTest() {
    let arr = [1, 2, 3, 4, 5];

    document.querySelector("#area3").innerHTML = `
        원본배열 : ${arr}<br>
        reverse 사용 : ${arr.reverse()}<br>
        후의 배열상태 : ${arr}
    `
}