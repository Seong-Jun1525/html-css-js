// TODO: 추가 버튼 클릭 이벤트 핸들러 추가 : 표준 이벤트 방식 사용

/*
    * 추가 버튼 클릭 시 수행할 내용 *

    입력된 할 일 정보를 확인하여 값이 없을 경우 "할 일을 입력하세요!" 알림창 표시
    값이 있을 경우 ul#taskList 요소 영역에 아래와 같은 노드 추가

    <li class="task-item"><span>{입력된값}</span><button>삭제</button></li>
    * 요소노드(Element) : 태그 자체
    * 텍스트노드(TextNode) : 내용 부분
    * 요소객체.className : 태그에서의 class 속성

    그 후, 할 일을 입력하는 요소를 초기화 (''으로 변경)
*/

// 요소 가져오기
const taskInput = document.querySelector("#taskInput");
const addTaskButton = document.querySelector("#addTaskButton");
const taskList = document.querySelector("#taskList");

// 전체삭제
const delAll = document.querySelector("#delAll");
delAll.addEventListener("click", (e) => {
    const taskList = document.querySelectorAll("#taskList li");
    for(let i of taskList) {
        i.remove();
    }
})

// 할일 추가 기능
addTaskButton.addEventListener("click", () => {
    if(taskInput.value === "") alert("할 일을 입력하세요!");
    else {
        const liEle = document.createElement("li");
        const spanEle = document.createElement("span");
        const buttonEle = document.createElement("button");

        liEle.className = "task-item";
        buttonEle.className = "delBtn";

        // 할일 삭제 기능
        buttonEle.addEventListener("click", (e) => {
            e.target.parentNode.remove();
        })

        const spanTextNode = document.createTextNode(taskInput.value);
        const buttonTextNode = document.createTextNode("삭제");

        spanEle.appendChild(spanTextNode);
        buttonEle.appendChild(buttonTextNode);
        console.log(buttonEle);

        liEle.appendChild(spanEle);
        liEle.appendChild(buttonEle);
        
        taskList.appendChild(liEle);

        taskInput.value = "";

        // console.log(liEle);
    }
});


// document.addEventListener("click", (e) => {
//     if(e.target && e.target.className === "delBtn"){
//         e.target.parentNode.remove();
//     }
// });