// 1) 부호를 바꾸어 출력한다.
// 입력 : -1
// 출력 : 1
// let num = Number(prompt()); // 문자열 -> 숫자로 변경됨
// alert(num * -1); // 부호 변경됨 (양수 <-> 음수)

// 2) 입력 : -2147483649
//    출력 : -2147483649
// let num = prompt();
// alert(num);

// 3) 정수 2개 입력된다. a를 b로 나눈 몫을 출력한다.
// 입력 1(a) : 1
// 입력 2(b) : 3
// 출력 : 0
// 힌트 : parseInt(실수) ->, 정수 parseInt(문자열) -> 정수
// let numA = Number(prompt());
// let numB = Number(prompt());
// alert((numA/numB).toFixed(0));
// alert(parseInt(numA/numB));

// 4) 정수 2개 입련된다. a를 b로 나눈 나머지를 출력한다.
// 입력 1(a) : 10
// 입력 2(b) : 3
// 출력 : 1
// let numA = Number(prompt());
// let numB = Number(prompt());
// alert(numA%numB);

// 5) 입력된 정수에 1을 더해 출력한다.
// 입력 : 2147483647
// 출력 : 2147483648
// let num = Number(prompt());
// alert(num + 1);

// 6) 정수 2개 입력받아 자동 계산하기
// 첫 줄에 합
// 둘째 줄에 차(빼기),
// 셋째 줄에 곱,
// 넷째 줄에 몫,
// 다섯째 줄에 나머지,
// 입력 1: 10
// 입력 2: 3
// 출력 : 13
//   7
//   30
//   3
//   1

// let numA = Number(prompt());
// let numB = Number(prompt());
// let n1 = numA + numB + "\n";
// let n2 = numA - numB + "\n";
// let n3 = numA * numB + "\n";
// let n4 = (numA / numB).toFixed(0) + "\n";
// let n5 = numA % numB;
// let n6 = n1 + n2 + n3 + n4 + n5;
// alert(n6);

// 7) 정수 3개 입력받아 합과 평균 출력하기, (1라인 합, 2라인 평균 출력)
// 입력 1: 1
// 입력 2: 2
// 입력 3: 3
// 출력 : 6
//       2
// 공식 : 합 = 모든 숫자 더하기
//      평균 = 모든숫자합/개수
// let num = Number(prompt("숫자1"));  // 1
// let num2 = Number(prompt("숫자2")); // 2
// let num3 = Number(prompt("숫자3")); // 3

// 모든 숫자합
// let sumVal = num + num2 + num3; // 6
// 평균 변수
// let avgVal = sumVal/3; // 2

// 결과 출력
// alert(sumVal + "\n" + avgVal);

// 8) 정수 1개 입력 받아 2배 곱해 출력하기(설명)
// 입력 : 1024
// 출력 : 2048
// let num = Number(prompt());
// alert(num*2);

// 9) 두 정수(a,b) 입력받아 비교하기1(설명)
// a가 b보다 큰 경우 1을, 그렇지 않은 경우 0을 출력한다.
// 입력 1(a): 9
// 입력 2(b): 1
// 출력 : 1
// let numA = Number(prompt());
// let numB = Number(prompt());
// if (numA > numB) {
//   alert(1);
// } else {
//   alert(0);
// }

// 9) 두 정수 (a,b) 입력받아 비교하기2(설명)
// a와 b의 값이 같은 경우 1을, 그렇지 않은 경우 0을 출력한다.
// 입력 1: 0
// 입력 2: 0
// 출력 : 1

// let numA = Number(prompt());
// let numB = Number(prompt());
// if(numA == numB) {
//     alert(1);
// } else {
//     alert(0);
// }

// 10) // 참 거짓 바꾸기(설명)
// 입력된 값이 0이면 1, 1이면 0을 출력한다.
// (단, 0 또는 1 만 입력된다.)

// let numA = Number(prompt());
// if (numA == 0) {
//   alert(1);1
// } else if (numA == 1) {
//   alert(0);
// }

// 11) 정수 3개 입력받아 가장 작은 수 출력하기(설명)
// 가장 작은 값을 출력한다.
// 입력 1: 3
// 입력 2: -1
// 입력 3: 5
// 출력 : -1
// 힌트 : Math.min(값1,값2....) : 최소값, Math.max(값1,값2....) : 최대값

// let numA = Number(prompt());
// let numB = Number(prompt());
// let numC = Number(prompt());
// alert(Math.min(numA,numB,numC));

// 12) 정수 3개 입력받아 짝수만 출력하기(설명)
// 입력 1: 1
// 입력 2: 2
// 입력 3: 4
// 출력 : 2
//        4

// let numA = Number(prompt());
// let numB = Number(prompt());
// let numC = Number(prompt());
// if(numA%2 != 0) {
//     numA = "";
// }
// if(numB%2 != 0) {
//     numB = "";
// }
// if(numC%2 != 0) {
//     numC = "";
// }
// let answer = (numA + "\n" + numB +"\n" + numC)
// alert(numA + "\n" + numB +"\n" + numC);

// let num = Number(prompt("숫자1"));  // 1
// let num2 = Number(prompt("숫자2"));  // 2
// let num3 = Number(prompt("숫자3"));  // 4

// // 임시 결과 변수
// let result = ""; // 최초 빈문자 초기화

// // 조건문 판단 : num
// if(num % 2 === 0) {
//     // 짝수
//     result = result + num + "\n"; // result(문자열) + num(숫자) == 문자열
// }
// // 조건문 판단 : num
// if(num2 % 2 === 0) {
//     // 짝수
//     result = result + num2 + "\n"; // result(문자열) + num(숫자) == 문자열
// }
// // 조건문 판단 : num
// if(num3 % 2 === 0) {
//     // 짝수
//     result = result + num3 + "\n"; // result(문자열) + num(숫자) == 문자열
// }
// // 결과 출력
// alert(result);

// 13) 정수 3개 입력받아 짝/홀 출력하기(설명)
// odd(홀수), even(짝수)
// 입력 1: 1
// 입력 2: 2
// 입력 3: 8
// 출력 : odd
//       even
//       even

// let result = "";
// let numA = Number(prompt());
// let numB = Number(prompt());
// let numC = Number(prompt());
// if (numA % 2 === 0 ) {
//     // 짝수
//     result = result + "even" + "\n";
// } else {
//     result = result + "odd" + "\n";
// }
// if (numB % 2 === 0 ) {
//     // 짝수
//     result = result + "even" + "\n";
// } else {
//     result = result + "odd" + "\n";
// }
// if (numB % 2 === 0 ) {
//     // 짝수
//     result = result + "even" + "\n";
// } else {
//     result = result + "odd" + "\n";
// }
// alert(result);

// 14) 점수(정수, 0 ~ 100)를 입력받아 평가를 출력해보자.
// 평가 기준
// 점수 범위 : 평가
//  90 ~ 100 : A
//  70 ~   89 : B
//  40 ~   69 : C
//    0 ~   39 : D
// 로 평가되어야 한다.
// 입력 : 73
// 출력 : B

// let score = Number(prompt());

// if (score > 89 && score <= 100) {
//     alert("A")
// } else if (score > 69 && score < 90) {
//     alert("B")
// } else if (score > 39 && score < 70) {
//     alert("C")
// } else if (score >= 0 && score < 40) {
//     alert("D")
// }

// 15) 평가 출력
// 평가 : 내용
// A : best!!!
// B : good!!
// C : run!
// D : slowly~
// 나머지 문자들 : what?
// 입력 : A
// 출력 : best!!!

// let score = prompt();

// if (score === "A") {
//     alert("best!!!")
// } else if (score === "B") {
//     alert("good!!")
// } else if (score === "C") {
//     alert("run!")
// } else if (score === "A") {
//     alert("slowly~")
// } else {
//     alert("what?")
// }

// 16) 정수 판별
// 양수이면 "양수", 음수이면 "음수", 0이면 0을 출력하시오.
// 힌트 : 입력값 > 0 (양수)
// 입력 : 5
// 출력 : 양수

// let num = Number(prompt());
// if(num > 0) {
//     alert("양수");
// } else if {
//     alert("음수");
// } else
//     alert(0);

// 17) 비만도 측정 0
// BMI 수치   비만 판정
// ~10 이하   정상
// 11~20 이하   과체중
// 20 초과   비만
// 비만도를 입력받아서 위의 문자열로 출력하세요
// 입력 : 15 
// 출력 : 과체중

// let num = Number(prompt());
// if (num <= 10) {
//     alert("정상");
// } else if (num <= 20 && num >= 11) {
//     alert("과체중");
// } else {
//     alert("비만");
// }
