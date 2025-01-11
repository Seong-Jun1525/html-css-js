function calc() {
    const firstNum = parseInt(document.getElementById("first_num").value);
    const secondNum = parseInt(document.getElementById("second_num").value);
    const operator = document.getElementById("operator").value;

    const resultBox = document.getElementById("result");
    resultBox.style.backgroundColor = "#FFFFFF";
    resultBox.style.color = "#000000";
    resultBox.value = "";
    
    let result;

    switch (operator) {
        case "plus":
            result = firstNum + secondNum;
            resultBox.value = result;
            break;
        case "minus":
            result = firstNum - secondNum;
            resultBox.value = result;
            break;
        case "multiply":
            result = firstNum * secondNum;
            resultBox.value = result;
            break;
        case "divide":
            if(secondNum > 0) {
                result = firstNum / secondNum;
                resultBox.value = result;
            }
            else {
                resultBox.style.backgroundColor = "#FF0000";
                resultBox.style.color = "#FFFFFF";
                resultBox.value = "연산불가";
            }
            break;
        case "remain":
            if(secondNum > 0) {
                result = firstNum % secondNum;
                resultBox.value = result;
            }
            else {
                resultBox.style.backgroundColor = "#FF0000";
                resultBox.style.color = "#FFFFFF";
                resultBox.value = "연산불가";
            }
            break;
    }
    console.log(result);
}