// 함수 문제 풀이
// 연습문제 1
// 함수를 사용해서 출력하세요
// 입력 : 10
// 출력 : 20
// let num = Number(prompt());
// function double(num) {
//      alert(num*2);
// }
// double(num);

// 연습문제 2
// 함수를 사용해서 출력하세요.
// 짝수이면 "even" 출력하고, 홀수이면 "odd" 출력하세요.
// 입력 : 2
// 출력 : even

// let num = Number(prompt());
// function or(num) {
//     if(num%2 == 0){
//         alert("even");
//     }else{
//         alert("odd");
//     }
// }
// or(num);

// 연습문제 3
// 함수를 이용해서 아래를 작성하세요.
// 1 ~ 10 까지의 합을 출력하세요.
// 입력 : 10
// 출력 : 55

// let num = Number(prompt());
// let result = 0;
// function sum(num) {
//   for (let i = 1; i <= num; i++) {
//     result += i;
//   }
//   return result;
// }
// sum(num);
// console.log(result);

// 4) 함수로 만들어서 풀기(1st, 2nd, 3rd 아무거나)
// 입력 1: 1
// 입력 2: 2
// 입력 3: 3
// 최소값 구하기

// let num1 = Number(prompt());
// let num2 = Number(prompt());
// let num3 = Number(prompt());
// function minNum(num1,num2,num3){
//    console.log(Math.min(num1,num2,num3));
// }
// minNum(num1,num2,num3);

// 5) 함수로 만들어서 풀기(1st, 2nd, 3rd 아무거나)
// 5의 배수이면 "5의 배수이다" 출력하고,
// 아니면 "5의 배수가 아니다" 라고 출력하세요.
// 입력 : 5
// 출력 : 5의 배수이다.
// 입력값 : 5

// let num = Number(prompt());
// function five(num) {
//     if(num%5 == 0){
//         alert("5의 배수이다");
//     }else{
//         alert("5의 배수가 아니다");
//     }
// }
// five(num);

// 6) 함수를 이용해서 코딩하세요
// 3가지 숫자를 입력받아 합계와 평균 구하기
// 입력 : 80
// 입력2 : 90
// 입력3 : 100
// 결과 : 270
//        90

// let num1 = Number(prompt());
// let num2 = Number(prompt());
// let num3 = Number(prompt());

// function sumAve(num1,num2,num3) {
//     sum = (num1+num2+num3);
//     aver = ((num1+num2+num3)/3);
//     alert(sum+"\n"+aver);
// }
// sumAve(num1,num2,num3);