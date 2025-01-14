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

            // this : 객체 내부에서 사용 시 해당 객체를 가리킴
            area3.innerHTML += `
                <em>
                    ★${this.name}가 ${food}를 먹었습니다★<br>
                </em>
            `;
        }
    };

    area3.innerHTML += `
        이름 : ${dog.name}<br>
        종류 : ${dog.kind}<br>
    `

    dog.eat("고구마");
    dog.eat("사료");
}

function test4() {
    // 학생 정보 저장 객체
    // value 속성으로 값을 꺼내올 때는 문자열이다
    const userName = document.getElementById("userName").value;
    const kor = document.getElementById("kor").value;
    const math = document.getElementById("math").value;
    const eng = document.getElementById("eng").value;

    const area4 = document.getElementById("area4");

    const student = {
        studentName: userName,
        korScore: parseInt(kor),
        mathScore: parseInt(math),
        engScore: parseInt(eng),
        toString: function() {
            return `
                ${this.studentName} : ${this.korScore} 점 ${this.mathScore} 점 ${this.engScore} 점<br>
            `;
        },
        getSum: function() {
            let total = 0;
            // input 타입이 number이여도 데이터 타입은 문자열이다.
            // 즉, 형변환을 해줘야 함
            total = this.korScore + this.mathScore + this.engScore;
            return total;
        },
        getAvg: function() {
            return this.getSum() / 3;
        }
    };

    area4.innerHTML = `
        ★학생정보★<br>
        ${student.toString()}
    `;

    // for in 사용
    area4.innerHTML += `
        studentName 속성이 있는가? 
        ${"studentName" in student ? "있다" : "없다"}<br>

        age 속성이 있는가? 
        ${"age" in student ? "있다" : "없다"}<br>
    `;

    // with 사용
    with(student) {
        area4.innerHTML += `
            이름 : ${studentName}<br>
            국어 : ${korScore}<br>
            수학 : ${mathScore}<br>
            영어 : ${engScore}<br>

            총점 : ${getSum()}<br>
            평균 : ${getAvg()}<br>
        `
    }
}

function test5() {
    const area5 = document.getElementById("area5");

    let student = {};

    // 속성 추가하기
    student.name = "임성준";
    student.hobby = ["알고리즘 공부", "YouTube 시청"];
    student.toString = function() {
        return `이름 : ${this.name}, 취미 : ${this.hobby}<br>`
    }

    console.log(student);
    
    area5.innerHTML += `
        이름 : ${student.name}<br>
        취미 : ${student.hobby}<br>
        student => ${student}
    `;

    // 학생 이름 속성 제거
    delete(student.name); // 속성 자체를 삭제
    console.log(student);

    // 학생 취미 속성값만 제거
    student.hobby = null; // 속성 유지 값만 삭제
    console.log(student);
}

const test6 = () => {
    const area6 = document.getElementById("area6");
    area6.innerHTML = "";
    const student0 = {name: "구세연", age: 27, gender: "여"};
    const student1 = {name: "임성준", age: 26, gender: "남"};
    const student2 = {name: "김일현", age: 25, gender: "남"};
    const student3 = {name: "유성재", age: 26, gender: "남"};

    const stdArr = [];
    stdArr.push(student0);
    stdArr.push(student1);
    stdArr.push(student2);
    stdArr.push(student3);

    console.log(stdArr[2]);
    console.log(stdArr[2].name);
    console.log(stdArr[2]["age"]);

    // for(let s of stdArr) {
    //     area6.innerHTML += `${s.name}<br>`;
    // }
    for(let i = 0; i < stdArr.length; i++) {
        area6.innerHTML += `${stdArr[i].name}<br>`;
    }
    area6.innerHTML += "<hr>"

    for(let i = 0; i < stdArr.length; i++) {
        stdArr[i].point = 0;
    }
    
    console.log(stdArr);

    for(let i = 0; i < stdArr.length; i++) {
        stdArr[i].toString = function() {
            return `name: ${this.name}, gender: ${this.gender}, age: ${this.age}, point: ${this.point}`;
        };
    }

    for(let i = 0; i < stdArr.length; i++) {
        console.log(stdArr[i].toString());
    }

    for(let i = 0; i < stdArr.length; i++) {
        area6.innerHTML += `${stdArr[i]}<br>`;
    }
}

// 사람의 정보를 담는 객체(생성자 함수)
// class Person {
//     constructor(name, age, gender, point) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.point = point;
//         this.toString = function () {
//             return `${this.name}_${this.age}_${this.gender}_${this.point}`;
//         };
//     }
// }

function Person(name, age, gender, point) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.point = point;
    this.toString = function () {
        return `${this.name}_${this.age}_${this.gender}_${this.point}`;
    };
}

const test7 = () => {
    const area7 = document.getElementById("area7");
    const person = new Person("성준", 26, "남", 1000);
    const person2 = new Person("공유", 40, "남", 1000);

    console.log(person.toString());
    console.log(person2.toString());

    area7.innerHTML += `
        ${person.toString()}<br>
        ${person2.toString()}<br>
    `
}