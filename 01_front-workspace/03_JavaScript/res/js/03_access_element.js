// HTML 요소에 접근하기
// 1) id 속성을 사용하여 요소 가져오기
function accessId() {
    // "area1"이라는 아이디 속성을 가진 요소 접근
    let areaEl = document.getElementById("area1");
    // {let 변수명 = }은 변수에 접근한 요소 객체를 저장

    // 선택된 요소의 속성값을 조회하거나 변경하고자 할 때
    // 선택된 요소.속성명

    // 선택된 요소의 내용 변경
    // input 태그 -> value 속성
    // 그 외 태그 -> innerHTML 또는 innerText

    areaEl.innerHTML = `
        ${areaEl.innerHTML}<br>아이디로 접근 성공
    `;

    // areaEl.innerHTML += "<br>아이디로 접근 성공";

    // 랜덤 출력
    areaEl.style.color = `rgb(
        ${Math.floor(Math.random() * 256)}, 
        ${Math.floor(Math.random() * 256)}, 
        ${Math.floor(Math.random() * 256)})
    `;

    areaEl.style.backgroundColor = `rgb(
        ${Math.floor(Math.random() * 256)}, 
        ${Math.floor(Math.random() * 256)}, 
        ${Math.floor(Math.random() * 256)})
    `;
    areaEl.style.width = `${Math.floor(Math.random() * 500)}px`;
    areaEl.style.height = `${Math.floor(Math.random() * 700)}px`;

    // areaEl.style.backgroundColor = areaEl.style.backgroundColor === "skyblue" ? "yellow" : "skyblue";

    // areaEl.style.width = "100px";
    // areaEl.style.height = "200px";
}

// 2) 태그명으로 요소 가져오기
function accessTagName() {
    let listItem = document.getElementsByTagName("li");
    
    // console.log(listItem);
    // console.log(listItem.length);

    // console.log(listItem[0].innerHTML);
    console.log(listItem[0].innerText);
    console.log(listItem[3].innerHTML);

    for(let i = 0; i < listItem.length; i++) {
        listItem[i].innerHTML = `${i}번째 요소입니다.`;
        console.log(listItem[i].innerHTML);
    }
}

// 3) name 속성을 이용하여 요소 가져오기
// 전체선택 항목 체크 시 취미항목 전체 항목 체크
function checkAll() {
    let checkAllInput = document.getElementById("all");
    let hobbyList = document.getElementsByName("hobby");
    // console.log(checkAllInput.checked);
    if(checkAllInput.checked) {
        for(let i of hobbyList) {
            i.checked = true;
        }
    }
    else {
        for(let i of hobbyList) {
            i.checked = false;
        }
    }
}

// 다른 항목의 상태가 변경되었을 때 전체선택상태변환
function checkBoxTrigger() {
    let allChecked = true;
    let hobbyList = document.getElementsByName("hobby");

    for(let hobby of hobbyList) {
        if(hobby.value === "all") continue;
        if(!hobby.checked) allChecked = false;
    }

    console.log(allChecked);

    document.getElementById("all").checked = allChecked;
}

// 4) class 속성을 이용하여 요소 가져오기
function accessClass() {
    // class 속성의 값이 test인 요소들에 접근하기
    let testList = document.getElementsByClassName("test");
    console.log(testList);

    for(let test of testList) {
        // 내용 변경 ---> innerHTML 또는 innerText 사용
        test.innerHTML = "test 클래스를 가진 요소";
    }
}

// 5) 내 마음대로 접근하기(선택자 활용)
function accessSelector() {
    // id속성이 tmp1인 요소 접근
    let tmpOne = document.querySelector("#tmp1");
    let tmpTwo = document.querySelectorAll("#tmp2 h3");

    console.log(tmpOne);

    for(let i of tmpTwo) console.log(i);

    document.querySelector("#tmp2 span").innerText = "재밌는 숏박스";

    document.querySelector("#tmp2 + h3").innerText = "출연자 : 김원훈";
}

let age = 4;

if(age < 8) console.log("어린이");
else if(age <= 19) console.log("청소년");
else if(age >= 20) console.log("성인");