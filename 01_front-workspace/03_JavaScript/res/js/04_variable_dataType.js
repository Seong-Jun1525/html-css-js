function checkOne() {
    var userId = 'user01'; // 변수 선언 및 할당(초기화)
    // console.log(userId);

    var userId = 'user02';
    // console.log(userId);

    // 재할당
    userId = "user03";
    console.log(userId);
    console.log("=======================");

    let userPW = "pass01";
    // console.log(userPW);

    userPW = "pass02";
    console.log(userPW);
    console.log("=======================");

    // let userPW = "pass02"; 중복 선언 X

    const userName = "userName";
    console.log(userName);           
    
    /**
     * var
     * - 자유롭게 변수 선언, 할당하여 사용 가능
     *   자유로운 만큼 중볻된 변수가 남발할 수 있고 의도치 않게 값이 변경될 수 있음
     * 
     * * 권장사항 : let const 사용
     */
}

function checkTwo() {
    // number형 타입 선언
    const num = 10;
    const num2 = -30;
    const num3 = 3.14159265;

    // string형 타입 선언
    const str = "Rei";
    const str2 = "안녕하세요 Rei입니다. \n \t 반갑습니다."

    // boolean형 타입 선언
    const isTrue = true;
    const isFalse = false;

    // undefined 테스트
    let num4;

    // null 테스트
    // 값이 없다. 명시적으로 없는 값으로 초기화하고자 할 때 사용
    // null은 객체의 기본 값. 즉, null형은 object 타입이다.
    let num5 = null;

    // object
    // key: value 한 쌍으로 이루어짐
    const dictionary = {
        red: "빨강",
        yellow: "노랑",
        blue: "파랑"
    };

    // Array
    const arr = [1, 2, 3];

    // 타입 확인 -> typeof

    // number형 타입 확인
    console.log(typeof num);
    console.log(typeof num2);
    console.log(typeof typeof num3); // string
    console.log(typeof num == "number");
    console.log("=======================");

    // string형 타입 확인
    console.log(typeof str);
    console.log(str2);
    console.log(`안녕하세요 ${str}입니다.`);
    console.log("=======================");

    // boolean형 타입 확인
    console.log(typeof isTrue);
    console.log(typeof isFalse);
    console.log("=======================");

    // undefined 테스트
    console.log(typeof num4);
    console.log("=======================");

    // null
    console.log(num5);
    console.log(typeof num5);
    console.log("=======================");

    // object
    console.log(dictionary);
    console.log(typeof dictionary);
    // . => 연결 연산자
    console.log(dictionary.red);
    console.log(dictionary.yellow);
    console.log(dictionary.blue);
    console.log(dictionary["blue"]);

    dictionary.red = "붉은색";
    dictionary["yellow"] = "형광색";
    
    console.log(dictionary.red);
    console.log(dictionary.yellow);

    console.log("=======================");
    
    // array
    console.log(arr);
    console.log("=======================");
}