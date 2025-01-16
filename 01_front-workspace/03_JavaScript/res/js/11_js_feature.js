const hoisting = () => {
    // var 타입 확인
    console.log(name); // 결과 undefined => 따로 선언하지 않았어도 변수가 선언된 것처럼 보임
    var name = "에일리";
    console.log(name);

    // let 타입 확인
    // console.log(name2); // 참조에러 => 초기화를 설정하지 않았는데 접근하려고 해서 접근할 수 없다는 에러
    let name2 = "공유";
    console.log(name2);

    // const 타입 확인
    // console.log(name3); // 참조에러 => 초기화를 설정하지 않았는데 접근하려고 해서 접근할 수 없다는 에러
    const name3 = "임성준";
    console.log(name3);
}

const functionalScope = () => {
    // var 타입 확인
    var nick = "보라돌이";

    const test1 = () => {
        console.log(nick);
    }

    test1();
    // test2(); // nick이 해당 함수를 벗어 나서 오류 발생 => 매개변수로 보내줘야함

    if(true) {
        var age = 20;

        console.log(age);
    }
    console.log(age); // age는 같은 함수 내부이므로 출력 가능

    for(var i = 0; i < 5; i++) {

    }
    console.log(i);
}

const test2 = () => {
    console.log(nick);
}

const blockScope = () => {
    if(true) {
        let height = 182;
        const blood = "A형";

        console.log(height);
        console.log(blood);
    }

    // block을 벗어나서 오류가 난다
    // console.log(height);
    // console.log(blood);
}

// 전역 변수 선언
// => 함수 내에 선언하는 것이 아닌 스크립트 상에 선언된 변수
var declareVar = "var 타입으로 선언된 전역 변수";
let declareLet = "let 타입으로 선언된 전역 변수";
const declareConst = "const 타입으로 선언된 전역 변수";

// [window].declareTemp 로 선언한 것으로 됨
declareTemp = "그냥 선언한 전역 변수"; // 타입이 따로 없으면 기본적으로 전역 변수로 선언됨

onload = () => {
    // 이곳에서 선언한 변수는 지역 변수
    var declareVar = "var 타입으로 선언된 지역 변수";
    let declareLet = "let 타입으로 선언된 지역 변수";
    const declareConst = "const 타입으로 선언된 지역 변수";
    declareTemp = "그냥 선언한 지역 변수"; // <= 전역 변수의 값을 바꾼것으로 됨

    // console.log(declareVar);
    // console.log(declareLet);
    // console.log(declareConst);
    // console.log(declareTemp);
    // 전역 변수와 지역 변수의 이름이 같을 경우 지역 변수를 찾아서 사용

    // 전역 변수의 값을 사용하고자 할 경우
    // window 객체 또는 this를 사용하여 접근
    
    // console.log(window.declareVar);
    // console.log(window.declareLet);
    // console.log(window.declareConst);
    // console.log(window.declareTemp);
    
    // console.log(this.declareVar);
    // console.log(this.declareLet);
    // console.log(this.declareConst);
    // console.log(this.declareTemp);

    // let, const 전역 변수로 접근이 불가! => undefined
    // 재선언이 불가능하기 때문에 전역으로 생성한 변수명과 같은 명의 지역변수가 있다면
    // 전역 변수는 없애고 지역 변수로 생성함
}

const mapTest = () => {
    let students = [
        "에일리",
        "이홍기",
        "엘리자베스올슨",
        "권지용"
    ];

    // 학생 이름이 4글자 이상인 경우 {이름} [유학생]
    // 그렇지 않으면 {이름} [일반학생] 형태의 배열 만들기

    let newStudents = students.map((i) => {
        // console.log(i);
        if(i.length >= 4) {
            return `{${i}} [유학생]`;
        } else {
            return `{${i}} [일반학생]`;
        }
    });

    console.log(newStudents);

    newStudents.map((i) => {
        console.log(i);
    });
}

const filterTest = () => {
    let numbers = [1, 50, 31, 27, 14, 6];

    let newArr1 = [];
    for(let i of numbers) {
        if(i % 2 === 0) {
            newArr1.push(i);
        }
    }
    console.log(newArr1);

    // filter 사용
    const evenNum = numbers.filter((i) => i % 2 === 0); // 짝수 배열
    const oddNum = numbers.filter((i) => i % 2 !== 0); // 홀수 배열

    console.log(`짝수 배열 : ${evenNum}`);
    console.log(`홀수 배열 : ${oddNum}`);
}

const reduceTest = () => {
    let numbers = [1, 2, 3, 4, 5, 6, 7];

    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum);

    const result = numbers.reduce((a, b) => a + b, 0);
    console.log(result);
}