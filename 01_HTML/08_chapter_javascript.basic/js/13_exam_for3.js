// 1) for문 안에 if문으로 짝수 체크해서 더하기
// 입력 : 없음
// 출력 : 1 ~ 100 까지 합계 구하는데
//       짝수의 합계를 구해서 출력하세요
// 결과 : 2550
// let result = 0;
// for(let i = 1; i <=100; i++){
//     if(i%2 === 0) {
//         result += i;
//     }
// }
// document.querySelector("#output").innerHTML = result; // 2550

// 2) // 입력 : 없음
// 출력 : 1 ~ 100 까지 합계 구하는데
//       3의 배수의 합계를 구해서 출력하세요.
// 결과 : 1683

// let result = 0;
// for(let i = 1; i <=100; i++){
//     if(i%3 === 0) {
//         result += i;
//     }
// }
// document.querySelector("#output").innerHTML = result; // 1683

// 3) 1부터 n까지 합 구하기
// 입력예시 : 100
// 출력예시 : 5050
// let num = Number(prompt());
// let result = 0;
// for (let i = 1; i <= num; i++) {
//   result += i;
// }
// document.querySelector("#output").innerHTML = result;

// 4) First Special Judge (Test)
// 10개의 수 중 5의 배수가 있으면 그 중 하나만 출력하고, 없다면 0을 출력한다.
// 입력예시 : 1 2 3 4 5 6 7 8 9 10
// 출력예시 : 5
// let num = prompt().split(" ").map(Number); // <- 숫자배열

// let count = 0;
// for (let i = 0; i <= num.length; i++) {
//   if (num[i] % 5 === 0) {
//     document.querySelector("#output").innerHTML = num[i];
//     count++;
//     break;
//   }
// }
// if (count === 0) {
//   document.querySelector("#output").innerHTML = 0;
// }

// 5) 1부터 n까지 중 짝수의 합 구하기
// 입력예시 : 5
// 출력예시 : 6
// let num = Number(prompt());
// let result = 0;
// for (let i = 1; i <= num; i++) {
//   if (i % 2 === 0) {
//     result += i;
//   }
// }
// document.querySelector("#output").innerHTML = result;

// 6) 두 수 사이의 홀수 출력하기
// 입력   : 2
// 입력 2 : 7
// 출력예시 : 3 5 7

// let num1 = Number(prompt());
// let num2 = Number(prompt());
// result = "";
// if (num2 > num1) {
//   for (let i = num1; i <= num2; i++) {
//     if (i % 2 != 0) {
//       result = result + i + " ";
//     }
//   }
// } else if (num1 > num2) {
//   for (let i = num2; i <= num1; i++) {
//     if (i % 2 != 0) {
//       result = result + i + " ";
//     }
//   }
// }

// document.querySelector("#output").innerHTML = result;
