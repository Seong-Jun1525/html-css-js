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
    const hobbyList = document.getElementsByName("hobby");

    for(let h of hobbyList) {
        if(h.value === "all") continue;
        if(!h.checked) allChecked = false;
    }

    document.getElementById("all").checked = allChecked;
}

// 카테고리 선택 버튼 클릭시 선택된 카테고리 박스안에 출력력
function selectCategoryBtn() {
    let checkedHobbyList = [];
    
    // 취미 요소
    const hobbyList = document.getElementsByName("hobby");
    console.log(hobbyList);

    // 카테고리 출력 박스
    const categoryBox = document.querySelector("#categoryBox");
    // console.log(categoryBox);
    categoryBox.innerHTML = "";


    for(let h of hobbyList) {
        if(h.checked) checkedHobbyList.push(h);
    }

    for(let i of checkedHobbyList) {
        categoryBox.innerHTML += i.value + "&nbsp;";
    }
}