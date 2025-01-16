function check() {
    const sel1List = document.querySelectorAll("#sel1 li");
    const regExp1 = /^r/;
    const result = [];

    for(let i of sel1List) {
        // console.log(i.textContent);
        if(regExp1.test(i.textContent)) {
            result.push(i.textContent);
        }
    }

    console.log(result);
}

const check2 = () => {
    const sel2List = document.querySelectorAll("#sel2 li");
    const regExp2 = /e$/;
    const result = [];

    for(let i of sel2List) {
        // console.log(i.textContent);
        if(regExp2.test(i.textContent)) {
            result.push(i.textContent);
        }
    }

    console.log(result);
}

const check3 = () => {
    const sel3List = document.querySelectorAll("#sel3 li");
    const regExp3 = /^a..a$/;
    const result = [];

    for(let i of sel3List) {
        // console.log(i.textContent);
        if(regExp3.test(i.textContent)) {
            result.push(i.textContent);
        }
    }

    console.log(result);
}

const check4 = () => {
    const sel4List = document.querySelectorAll("#sel4 li");
    const regExp4 = /^[0-9]+$/;
    const result = [];

    for(let i of sel4List) {
        // console.log(i.textContent);
        if(regExp4.test(i.textContent)) {
            result.push(i.textContent);
        }
    }

    console.log(result);
}