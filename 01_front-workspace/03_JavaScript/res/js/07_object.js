// var puppy = {
//     name: "뽀삐",
//     type: "푸들",
//     age: 5
// };

// var porkCutlet = {
//     porkCutletName: "왕돈가스",
//     porkCutletPrice: 7000
// };

// if("porkCutletPrice" in porkCutlet) {
//     console.log("속성이 있다.")
// }
// else {
//     console.log("속성이 없다.")
// }

function test1() {
    // 객체 선언
    let product = {
        name: "망고",
        price: 10000,
        madeIn: "필리핀산",
        size: {width: 10, height: 15},
        "product number": 100,
        etc: [1, 2, 3]
    }

    console.log(product);
    console.log(typeof product);

    document.querySelector("#area1").innerHTML = `
        <p>제품번호 : ${product["product number"]}</p>
        <p>제품명 : ${product.name}</p>
        <p>제품명 : ${product["name"]}</p>
        <p>제품가격 : ${product.price}원</p>
        <p>제품가격 : ${product["price"]}원</p>
        <p>원산지 : ${product.madeIn}</p>
        <p>제품크기 : ${product.size.width} X ${product.size.height}</p>
        <p>제품크기 : ${product["size"]["width"]} X ${product["size"]["height"]}</p>
        <p>기타 : ${product.etc[1]}</p>
    `;
}

function test2() {
    const area2 = document.querySelector("#area2");
    const arr = ["공유", 40, true];

    for(let a of arr) {
        area2.innerHTML += a + "<br>";
    }

    area2.innerHTML += "<hr>";

    const person = {
        name: "공유",
        age: 40,
        etc: true
    }

    // 객체는 for of문을 사용할 수 없다
    // for in문을 사용해서 key값을 출력
    // key값이 문자열로 출력되기 때문에 값을 찾으려면 []를 사용해야함
    for(let p in person) {
        // console.log(p);
        area2.innerHTML += `${p} : ${person[p]}<br>`;
    }
}

function test3() {
    const area3 = document.querySelector("#area3");
    // 객체 정의
    const dog = {
        name: "찬이",
        kind: "웰시코기",
        eat: function(food) {
            console.log(`${food}를 먹는다`);
            area3.innerHTML += `
                <em>
                    ${this.name}가 ${food}를 먹는다
                </em>
            `;
        }
    };

    dog.eat("간식");
}