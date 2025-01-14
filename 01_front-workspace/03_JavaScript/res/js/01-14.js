let arr = ["KH정보교육원", "A강의장", "24/12/31", "개강"];

let str;
// 위의 배열을 하나의 문자열로 변환
str = arr.join(" ");

console.log(str); // 출력 예) "KH정보교육원 A강의장 24/12/31 개강"

/* 배열의 평균 계산 */
function calcAverage(numbers) {
    // 이곳에 코드를 작성하세요
    let sum = 0;

    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

console.log(calcAverage([10, 20, 30, 40])); // 결과: 25
console.log(calcAverage([5, 15, 25, 35, 45])); // 결과: 25

// -------------------------