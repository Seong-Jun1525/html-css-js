const test1 = () => {
    const area1 = document.querySelector("#area1");
    const str1 = "javascript jquery ajax";
    const str2 = "java oracle html css";

    // 정규표현식 객체 => 정규식 변수를 선언

    // 1) RegExp 객체 생성 -> script 패턴
    const regExp1 = new RegExp("script");
    // console.log(regExp1);

    // 2) //를 사용하여 생성 -> script 패턴
    const regExp2 = /script/;

    area1.innerHTML += `
        ${regExp1}<br>
        ${regExp2}<br><br>
    `;

    /**
     * 정규식 객체가 제공하는 메서드
     *      정규식변수.메서드명(문자열)
     * 
     * 1) test(문자열) 메서드
     *      - 문자열에서 정규식 값과 일치하는 값이 있으면 true 없으면 false
     * 
     * 2) exec(문자열) 메서드
     *      - 문자열에서 정규식 값과 일치하는 값 있으면 처음 배정된 값 반환 없으면 null 반환
     */

    area1.innerHTML += `
        str1 = javascript jquery ajax<br>
        str2 = java oracle html css<br><br>
        regExp1.test(str1) : ${regExp1.test(str1)}<br>
        regExp1.test(str2) : ${regExp1.test(str2)}<br><br>

        regExp1.exec(str1) : ${regExp1.exec(str1)}<br>
        regExp1.exec(str2) : ${regExp1.exec(str2)}<br><br>
        <hr>
    `;

    /**
     * 문자열 객체(String)에서 제공하는 메서드
     *      문자열변수.메서드명(정규식변수)
     * 
     * 1) match(정규식)
     *      - 문자열에서 정규식 값과 일치하는 값이 있으면 해당 값을 밚환 없으면 null 반환
     * 
     * 2) search(정규식)
     *      - 문자열에서 정규식 값과 일치하는 값이 있으면 해당 값의 시작 인덱스값을 반환 없으면 -1 반환
     * 
     * 3) replace(정규식, 바꿀값)
     *      - 문자열에서 정규식 값과 일치하는 부분을 바꿀값으로 변환
     * 
     * 4) split(정규식)
     *      - 문자열에서 정규식에 해당하는 부분을 기준으로 쪼개서 배열로 반환
     */

    area1.innerHTML += `
        str1.match(regExp2) : ${str1.match(regExp2)}<br>
        str2.match(regExp2) : ${str2.match(regExp2)}<br><br>

        str1.search(regExp2) : ${str1.search(regExp2)}<br>
        str2.search(regExp2) : ${str2.search(regExp2)}<br><br>
        
        str1.replace(regExp2, "스크립트") : ${str1.replace(regExp2, "스크립트")}<br>
        str1 : ${str1} <- <mark>원본 유지!</mark><br><br>

        str1.split(regExp2) : ${str1.split(regExp2)}<br>
    `;
}

const test2 = () => {
    const area2 = document.querySelector("#area2");
    const str = "javascript jquery ajax";

    // 1) ^ : 시작을 의미
    const regExp1 = /^j/; // j로 시작하는가?
    area2.innerHTML += `
        /^j/ test() : ${regExp1.test(str)}<br>
        /^j/ replace() : ${str.replace(regExp1, "k")}<br><br>
    `;

    // 2) [] : [] 내에 여러 문자들을 목록처럼 나열 -> 해당 문자들이 있는지
    const regExp2 = /[abc]/;
    area2.innerHTML += `
        /[abc]/ test : ${regExp2.test(str)}<br>
        /[abc]/ replace : ${str.replace(regExp2, "***")}<br><br>
    `;

    // 3) $ : 끝을 의미
    const regExp3 = /x$/;
    area2.innerHTML += `
        /x$/ test : ${regExp3.test(str)}<br>
        /x$/ replace : ${str.replace(regExp3, "@@")}<br><br>
    `;

    // j로 시작하고 x로 끝나는 패턴
    let regExp4 = /[^j-x$]/;
    area2.innerHTML += `
        /[^j-x$]/ test : ${regExp4.test(str)}<br>
        /[^j-x$]/ replace : ${str.replace(regExp4, "##")}<br><br>
    `;

    // 4) . : 개행문자(\n)를 제외한 모든 문자 하나를 의미(영문, 한글, 숫자, 특수문자, 공백)
    regExp4 = /^j.x$/; // .위치에 문자 하나가 꼭 있어야 함
    area2.innerHTML += `
        /^j.x$/ test : ${regExp4.test("jox")}<br>
        /^j.x$/ test : ${regExp4.test("jx")}<br>
        /^j.x$/ test : ${regExp4.test("j x")}<br>
        /^j.x$/ test : ${regExp4.test("j\nx")}<br><br>
    `;

    // 5) + : 앞의 패턴이 한 번 이상 반복됨을 의미
    regExp4 = /^j.+x$/;
    area2.innerHTML += `
        /^j.+x$/ test : ${regExp4.test("jox")}<br>
        /^j.+x$/ test : ${regExp4.test("joox")}<br>
        /^j.+x$/ test : ${regExp4.test("j x")}<br>
        /^j.+x$/ test : ${regExp4.test("j\nx")}<br>
        /^j.+x$/ test : ${regExp4.test(str)}<br><br>
    `;

    // 6) 숫자로만 이루어진 문자열 검사
    const regExp5 = /^[0-9]+$/; // 개수 상관없이, 적어도 한 글자 이상인 숫자로만 이루어진 문자열 검사
    area2.innerHTML += `
        /^[0-9]+$/ test : ${regExp5.test("12345")}<br><br>
    `;

    // 7) 한글로만 이루어진 문자열 검사(자음, 모음, 결합)
    const regExp6 = /^[ㄱ-ㅎㅏ-ㅣ가-힣]+$/;
    area2.innerHTML += `
        /^[ㄱ-ㅎㅏ-ㅣ가-힣]+$/ test : ${regExp6.test("안녕하세요")}<br>
        /^[ㄱ-ㅎㅏ-ㅣ가-힣]+$/ test : ${regExp6.test("안녕하세요?")}<br>
    `;

    // 8) 사용자에게 이름을 입력받아서 2글자 이상인 한글로만 이루어진 경우
    // "안녕하세요 반갑습니다!" 알림창 띄우기
    // 그렇지 않은 경우 "잘못 입력했습니다."
    const userName = prompt("이름을 입력해주세요");
    const regExp7 = /^[ㄱ-ㅎㅏ-ㅣ가-힣]{2,}$/;
    
    if(regExp7.test(userName)) {
        alert("안녕하세요 반갑습니다!");
    } else {
        alert("잘못 입력했습니다");
    }
}