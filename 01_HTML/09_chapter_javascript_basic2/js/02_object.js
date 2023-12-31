// 객체 : 실생활에서 보이는 모든 것을 객체라고 함
//    예) 사람, 사물 등
// 객체의 요소 : 1) 속성(특징나타냄, 90%), 2) 함수(행동, 동작)
// 비교) css 사용법
// 선택자 {
//    속성: 값;
//    속성2: 값2;
//    ...
// }

// TODO: 객체 사용법
// let 변수명 = {
//    속성: 값,
//    속성2: 값2,
//    ...
// }

// 예제 ) 안지영 이라는 사람의 속성을 나열하고 객체를 만드세요.
// 객체 정의
// let member = {
//     name: "안지영",
//     email: "hong@naver.com",
//     phone: "010-1234-5678",
//     age: 24,
//     job: true
// }
// 객체 속성 출력
// 사용법 : 객체명.속성명 => 값이 출력됨
// console.log("name" , member.name);
// console.log("email" , member.email);
// console.log("phone" , member.phone);
// console.log("age" , member.age);
// console.log("job" , member.job);

// 연습문제 1)
// 객체 정의하고, 객체 출력하기
// 고양이에 대한 특징을 alert를 이용해서 화면에 출력하세요
// 속성 :
//     이름: 나비
//     색깔: 황토색
//     무게: 10kg
//  코드번호: 1234
//  전화번호: 010-1234-5678

// let cat = {
//   name: "나비",
//   color: "황토색",
//   weight: "10kg",
//   codeNum: "1234",
//   callNum: "010-1234-5678",
// }
// let catInfo =
//   "이름 : " +
//   cat.name +
//   "\n색깔 : " +
//   cat.color +
//   "\n무게 : " +
//   cat.weight +
//   "\n코드번호 : " +
//   cat.codeNum +
//   "\n전화번호 : " +
//   cat.callNum;
// alert(catInfo);

// 연습문제 2)
// 토끼 객체를 만들어서 화면에 출력해 보세요
// 속성 :
//     이름 : 삼식이
//     색깔 : 갈색
//     무게 : 5kg
// 코드번호 : 1234

// let bunny = {
//   name: "삼식이",
//   color: "갈색",
//   weight: "5kg",
//   codeNum: "1234" // 자료형 모두 사용가능(문자열, 숫자, 참/거짓 등)
// }
// let bunnyInfo =
//   "이름 : " +
//   bunny.name +
//   "\n색깔 : " +
//   bunny.color +
//   "\n무게 : " +
//   bunny.weight +
//   "\n코드번호 : " +
//   bunny.codeNum
// alert(bunnyInfo);

// 자료형 : 문자열(string), 숫자(number), 참/거짓(bool/boolean)
//          배열(객체), null, undefined, 참고)symbol(1%)
// 총 6개
// TODO: null 자료형 : 변수는 있으나 공간이 비어 있는 것(js, 자바, c/c++ 등)
// 예제) 변수에 null 넣기
// let char1 = null; // 사용법, 과거코딩(변수 초기화에 많이 사용)
// 현재는 null 초기화 권장하지 않음(버그가 많이 발생함)
// let char2 = ""; // 빈 문자열 초기화
// let num = 0; // 숫자 초기화

// 메모리 : 프로그램 실행시키면 -> 컴퓨터 메모리에 올라감
// TODO: undefined 자료형 : (js 만 있음, 다른 언어는 없음)
//     : 객체의 속성명이 정의되지 않은 것(않은 상태)
// 객체 정의
// let dog = {
    // name: "삼순이",
    // age: 2
// }
// console.log("name", dog.name);
// console.log("age", dog.age);
// undefined 에러가 발생함
// console.log("code", dog.code); // code 속성 정의되지 않았음

