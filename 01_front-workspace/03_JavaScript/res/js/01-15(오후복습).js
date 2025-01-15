const result = document.querySelector("#result");

const getAge = () => {
    const currentDate = new Date();

    const birthYear = parseInt(document.querySelector("#birthYear").value);
    const birthMonth = parseInt(document.querySelector("#birthMonth").value);
    const birthDate = parseInt(document.querySelector("#birthDate").value);

    const birth = new Date(birthYear, birthMonth - 1, birthDate);

    // 나이 계산
    // let age = currentDate.getFullYear() - birthYear;
    let age = parseInt((currentDate - birth) / (1000 * 60 * 60 * 24 * 365)) + 1;
    console.log(age);
    result.innerHTML = `올해 ${age}살입니다. `

    // 만 나이 계산
    if(
        (currentDate.getMonth()) >= birth.getMonth()
        && (currentDate.getDate() > birthDate)
    ) {
        result.innerHTML += `
            <b style="color: red">만 나이는 ${age - 1}</b>
        `;
    }
    else {
        result.innerHTML += `
            <b style="color: red">만 나이는 ${age - 2}</b>
        `;
    }
}

onload = setInterval(() => {
    result.style.borderColor = `
        rgb(${Math.floor(Math.random() * 256)}, 
        ${Math.floor(Math.random() * 256)}, 
        ${Math.floor(Math.random() * 256)})
    `;
}, 1000)