// 문제 풀이
// 1) 증감연산자를 활용해서 화면 출력하세요
// 출력방법 : alert(), console.log()
// 입력 : 없음
// 출력 : 10
//        11
//        12
// let x = 10;
// console.log(x);
// x++;
// console.log(x);
// x++;
// console.log(x);

// 2) 공식 : price(개당가격) = 1500, num(구매개수) = 3, pay(지불금액) = 10000
//    잔돈계산 공식 = pay - price * num;
//    입력 : 없음
//    출력 : - 개당 가격 : 1500원
//           - 구매 개수 : 3개
//           - 지불 금액 : 10000원
//           - 거스름돈은 : 5500원입니다.

// 공식 적용 : 거스름돈 계산 공식 
// let change = pay - price * num;
// 출력방법 : console.log
// TODO: 문자열 붙이기 : 문자열 + 숫자 => 문자열 + 문자열 변경됨
// let price = 1500;
// let num = 3;
// let pay = 10000;
// let change = pay - price * num;
// let q1  = "- 개당 가격 : " + price + "원\n- 구매 개수 : " + num + "개\n- 지불 금액 : " + pay + "원\n- 거스름돈은 : " + change + "원 입니다.";
// console.log(q1);

// 3) 입력함수 : prompt() 이용해서 입력받기
// 아래 코딩을 완성하세요
// 입력 1 : a
// 입력 2 : b
// 출력 : b a

// 사용법 : let 변수명 = prompt("문자열"); 문자열 (입력대화상자의 문구)
//         입력받은 글자가 변수명에 저장됨
// let char1 = prompt("1개의 문자가 입력된다."); // a
// alert(char1); // a

// 결과 출력 : char2 + " " + char1 

// let char1 = prompt(); // a
// let char2 = prompt(); // b
// alert(char2 + " " + char1); // b a

// 4) 입력받은 정수를 줄을 바꿔 3번 출력한다.
// 단, 줄바꿈 특수문자(\n)를 사용해서 한번에 출력하세요.
//    (alert, console.log 1번만 사용)
// 힌트 : "\n"(줄바꿈), 문자열 붙이기(+)
// 입력 : 3
// 출력 : 3
//        3
//        3
// let char1 = prompt(); // 3
// alert(char1+ "\n" + char1 + "\n" + char1 ); // 3 , 3 , 3

// 5) 단어 2개가 입력된다.
// 2개를 거꾸로 붙여서 출력하세요
// 입력 1 : hello
// 입력 2 : world
// 출력   : worldhello
// 힌트 : 문자열붙이기 (+)
// let char1 = prompt(); // hello
// let char2 = prompt(); // world
// alert(char2 + char1);

// 6) 입력 1 : Hello
//    입력 2 : World
//    출력 : Hello
//           World
// 힌트 : \n (줄바꿈)
// let char1 = prompt(); // Hello
// let char2 = prompt(); // World
// alert(char1 + "\n" + char2);

// 7) 두 정수의 합을 출력하세요
// 입력 1 : 123
// 입력 2 : -123
// 출력 : 0
// 힌트 : Number(prompt()) (문자열 -> 숫자)
let num1 = Number(prompt()); // 123
let num2 = Number(prompt()); // -123
alert(num1 + num2); // 0


