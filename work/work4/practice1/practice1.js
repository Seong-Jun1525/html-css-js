// 전체선택 클릭 시 모든 체크박스 true 다시 클릭 시 모드 false
function checkAll() {
    const checkBoxAll = document.getElementById("all");
    const hobbyList = document.getElementsByName("hobby");

    if(checkBoxAll.checked) {
        for(let l of hobbyList) {
            l.checked = true;
        }
    }
    else {
        for(let l of hobbyList) {
            l.checked = false;
        }
    }
}

// 전체 선택 제외 모두 true일 시 전체선택도 true
function checkBoxTrigger() {
    let allChecked = true;
    let hobbyList = document.getElementsByName("hobby");

    for(let h of hobbyList) {
        // input의 value값 영어 -> 한국어로 변경한 부분 반영안했음.. 이 부분 수정
        // 항상 검토를 잘하자!
        if(h.value === "전체선택") continue;
        if(!h.checked) {
            allChecked = false;

            // ★ 검사해야할 항목이 많지만
            // 이미 false가 되었으면 뒤에 항목은 검사할 필요가 없음
            // 효율적인 코드를 작성하도록 하자
            break;
        }
    }

    console.log(allChecked);
    document.getElementById("all").checked = allChecked;
}

// 카테고리 선택 버튼 클릭시 선택된 카테고리 박스안에 출력력
function selectCategoryBtn() {
    let checkedHobbyList = [];
    
    // 취미 요소
    const hobbyList = document.getElementsByName("hobby");
    // console.log(hobbyList);

    // 카테고리 출력 박스
    const categoryBox = document.querySelector("#categoryBox");
    // console.log(categoryBox);
    categoryBox.innerHTML = "";

    // for(let h of hobbyList) {
    //     // "전체 선택"의 텍스트는 출력하는게 아니였음.. 이 부분 수정
    //     // 다음부턴 문제를 잘 읽자..
    //     if(h.value === "전체선택") continue; // 이 부분 추가

    //     if(h.checked) checkedHobbyList.push(h.value);
    // }
    // console.log(checkedHobbyList);

    // 크롬을 제외한 대부분의 브라우저에서 push() 메소드를 사용해 데이터를 할당하는 방법보다
    // 접근자 []를 사용해 데이터를 할당하는 코드의 실행 속도가 2배 정도 더 빠름.
    for(let i = 0; i < hobbyList.length; i++) {
        if(hobbyList[i].value === "전체선택") continue; // 이 부분 추가
        if(hobbyList[i].checked) checkedHobbyList.push(hobbyList[i].value);
    }
    categoryBox.innerHTML = checkedHobbyList.join(" ");

    // 쓸데없는 for문은 효율성이 떨어진다
    // for(let i of checkedHobbyList) {
    //     categoryBox.innerHTML += i.value + "&nbsp;";
    // }
}