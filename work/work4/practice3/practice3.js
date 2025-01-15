let userIdFlag = false;
let userPwFlag = false;

function checkUserId() {
    const userId = document.getElementById("userId").value;
    const checkIdMessage = document.querySelector(".checkIdMessage");
    let msg = "";

    if(userId !== "") {
        if(userId === "user01") {
            msg = "이미 존재하는 아이디입니다."
            checkIdMessage.style.color = "red";
            checkIdMessage.innerText = msg;
            userIdFlag = false;
        }
        else {
            msg = "사용가능한 아이디입니다."
            checkIdMessage.style.color = "green";
            checkIdMessage.innerText = msg;
            userIdFlag = true;
        }
    }
}

function checkUserPw() {
    const userPw = document.getElementById("userPw").value;
    const userPw2 = document.getElementById("userPw2").value;
    const checkPwMessage = document.querySelector(".checkPwMessage");
    let msg = "";

    if(userPw !== "" && userPw2 !== "") {
        if(userPw === userPw2) {
            msg = "비밀번호가 일치합니다."
            checkPwMessage.style.color = "green";
            checkPwMessage.innerText = msg;
            userPwFlag = true;
        }
        else {
            msg = "비밀번호가 일치하지 않습니다."
            checkPwMessage.style.color = "red";
            checkPwMessage.innerText = msg;
            userPwFlag = false;
        }
    }
}

function register() {
    const formItemInput = document.querySelectorAll(".form-item-input");
    const userName = document.getElementById("userName").value;
    const checkIdMessage = document.querySelector(".checkIdMessage");
    const checkPwMessage = document.querySelector(".checkPwMessage");
    let text = "";
    // console.log(formItemInput);

    for(let i of formItemInput) {
        if(i.value === "") {
            if(i.getAttribute("id") === "userId") text = "아이디";
            else if((i.getAttribute("id") === "userPw") || i.getAttribute("id") === "userPw2") text = "비밀번호";
            else if(i.getAttribute("id") === "userName") text = "이름";

            alert(`${text}를 입력해주세요`);
            i.focus();
            return;
        }
    }

    if(!userIdFlag) {
        alert("사용할 수 없는 아이디입니다.");
        formItemInput[0].value = "";
        formItemInput[0].focus();
    }
    else if(!userPwFlag) {
        alert("비밀번호가 일치하지 않습니다.");
        formItemInput[1].value = "";
        formItemInput[2].value = "";
        formItemInput[1].focus();
    }
    else {
        alert(`${userName}님, 회원가입이 성공적으로 완료되었습니다^^`);
        for(let i of formItemInput) {
            i.value = "";
            checkIdMessage.innerText = "";
            checkPwMessage.innerText = "";
        }
    }
}