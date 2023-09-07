// TODO: 1251
// 반복문 연습용 예제입니다.
// 입력은 없습니다.
// 1부터 100까지 공백으로 띄워 하나씩 출력하세요.

// let result = "";
// for(let i=1; i<=100; i++) {
//     result = result + i + " ";
// }
// console.log(result);

// TODO: 1252
// 어떤 수 n을 입력으로 받아 1부터 n까지의 숫자를 출력하시오.

// let input = Number(prompt());
// let result = "";
// for(let i = 1; i<=input; i++) {
//     result = result + i + " ";
// }
// console.log(result);

// TODO: 1253
// 어떤 두 수 a, b가 있을 때 두 수 사이의 모든 정수를 오름차순으로 출력하시오.
// 예를 들어, a=5 , b=10일 경우 5 6 7 8 9 10입니다.

// let input = prompt().split(" ").map(Number);
// let result = "";
// for(let i = Math.min(input[0],input[1]);
// i<=Math.max(input[0], input[1]); i++) {
//     result = result + i + " ";
// }
// console.log(result);

// TODO: 1254
// 시작 알파벳과 마지막 알파벳을 입력받아 그 두 알파벳 사이의 모든 알파벳을 출력하시오.
// 예)
// a f   ====> a b c d e f

// let input = prompt().split(" ");
// let result = "";
// for(let i =(input[0].charCodeAt()); i<=input[1].charCodeAt(); i++) {
//     result = result + String.fromCharCode(i) + " ";
// }
// console.log(result);

// TODO: 1255
// 소수 둘째 자리의 두 실수 a와 b가 입력으로 주어진다.
// a와 b사이의 수를 0.01간격으로 오름차순으로 출력하시오.

// let input = prompt().split(" ").map(Number);
// let result = "";
// num1 = Math.min(...input)*100;
// num2 = (Math.max(...input)*100).toFixed(0);
// for(let i = num1; i<=num2; i++){
//     if(num1<=num2) {
//     result = result + (i/100).toFixed(2) + " ";
//     }
// }
// console.log(result);

// TODO: 1256
// 별(*)을 n개 만큼 출력한다.

// let input = Number(prompt());
// let result = "";
// for(let i = 1; i<=input; i++) {
//     result = result + "*";
// }
// console.log(result);

// TODO: 1257
// 시작수와 마지막 수가 입력되면
// 시작수부터 마지막 수까지의 모든 홀수를 출력하시오.

// let input = prompt().split(" ").map(Number);
// let result = "";
// for (let i = input[0]; i <= input[1]; i++) {
//     if(i % 2 !== 0) {
//     result = result + i + " ";
//     }
// }
// console.log(result);

// TODO: 1258
// 정수 n이 입력으로 들어오면 1부터 n까지의 합을 구하시오.

// let input = Number(prompt());
// let result = 0;
// for(let i = 1; i<=input; i++){
//     result += i;
// }
// console.log(result);

// TODO: 1259
// 1부터 n까지의 수 중 짝수의 합을 구하시오.

// let input = Number(prompt());
// let result = 0;
// for (let i = 1; i <= input; i++) {
//     if(i % 2 == 0) {
//     result = result + i;
//     }
// }
// console.log(result);

// TODO: 1260
// 어떤 수 a, b가 주어진다.
// a와 b의 관계는 a <= b 이다.
// a에서 b까지의 수 중 3의 배수만 더하여 출력하시오.

// let input = prompt().split(" ").map(Number);
// let result = 0;
// for (let i = input[0]; i <= input[1]; i++) {
//     if(i % 3 == 0) {
//     result = result + i;
//     }
// }
// console.log(result);

// TODO: 1261
// 10개의 수가 입력된다.
// 10개의 수 중 5의 배수를 하나만 출력한다.
// 만약 5의 배수가 없다면 0을 출력한다.

// let input = prompt().split(" ").map(Number);
// for(let i = 0; i<input.length; i++) {
//     if(input[i] % 5 == 0) {
//         console.log(input[i]);
//         break;
//     }
// }

// TODO: 1265
// 구구단의 원하는 단을 입력하면 그 단의 구구단이 출력되게 하시오.
// 예) 3

// let input = Number(prompt());
// let result = "";
// for(let i = 1; i<=9; i++) {
//     console.log(input + "*" + i + "=" + input*i);
// }

// TODO: 1266
// 수의 개수  n이 주어지고, 그 다음 줄에 무작위로 n개의 정수가 입력된다.
// n개의 수의 합을 출력하시오.

// let input = prompt().split("\n")
// let input1 = input[1].split(" ").map(Number);
// let result = 0;
// for(let i = 0; i<input1.length; i++) {
//     result = result + input1[i];
// }
// console.log(result);

// TODO: 1267
// 수의 개수 n이 주어지고, 그 다음 줄에 무작위로 n개의 자연수가 입력된다.
// 그 n개의 수 중에서 5의 배수만 골라 합을 출력하시오.

// let input = prompt().split("\n")
// let input1 = input[1].split(" ").map(Number);
// let result = 0;
// for(let i = 0; i<input1.length; i++) {
//     if(input1[i] % 5 == 0) {
//     result = result + input1[i];
//     }
// }
// console.log(result);

// TODO: 1268
// 수의 개수 n이 주어지고, 그 다음 줄에 무작위로 n개의 정수가 입력된다.
// 그 n개의 수 중에서 홀수의 개수를 출력하시오.

// let input = prompt().split("\n")
// let input1 = input[1].split(" ").map(Number);
// let result = 0;
// for(let i = 0; i<input1.length; i++) {
//     if(input1[i] % 2 !== 0) {
//     result++;
//     }
// }
// console.log(result);

// TODO: 1269
// 시작 값(a), 곱할 값(b), 더할 값(c), 몇 번째 항인지 나타내는 정수(n)이 입력으로 주어질 때
// , 수열의 n번째 항의 값을 구하시오.

// let input = prompt().split(" ").map(Number);
// let result = 0;
// if (input[3] == 1) {
//   result = input[0];
// } else if (input[3] & 2 == 0) {
//   result = input[0] * input[1] + input[2];
// } else if (input[3] & 2 !== 0) {
//   result = 1 * input[1] + input[2];
// }
// console.log(result);

// TODO: 1270
// 어떤 수 n이 주어지면 1부터 n까지의 수 중 맨 마지막 자리에
//  1이 몇 번 들어 있는지 알아내는 프로그램을 작성하시오.

// let input = Number(prompt());
// let result = 0;
// let check = 1;
// let j = "";
// for (let i = 1; i<=input; i++) {
//     j = i + ""
//     if(j.substr(-1) == 1) {
//         result++;
//     }
// }
// console.log(result);

// TODO: 1271
// 입력의 개수 n이 입력되고 n개의  데이터가 입력된다.
// 이 n개의 데이터 중 최댓값을 출력한다.

// let input = prompt().split("\n");
// let input1 = input[1].split(" ").map(Number);
// console.log(Math.max(...input1));

// TODO: 1272
// 존의 번호(k), 밥의 번호(h)가 주어질때 존과 밥이 받는 기부금의 합을 구하시오.

// let input = prompt().split(" ").map(Number);
// let double0 = 0;
// let double1 = 0;

// if(input[0] % 2 == 0){
//    double0 = input[0] * 5;
// } else {
//    double0 = input[0]
// }
// if(input[1] % 2 == 0){
//    double1 = input[1] * 5;
// } else {
//     double1 = input[1]
// }
// console.log(double0+double1);

// TODO: 1273
// 자연수 N이 주어지면 N의 약수를 오름차순으로 모두 출력하시오.

// let input = Number(prompt());
// let result = "";
// for(let i=1; i<=input; i++) {
//     if(input % i == 0 ){
//     result = result + i + " ";
//     }
// }
// console.log(result)

// TODO: 1274
// 소수란, 약수가 1과 자기 자신 두 개 뿐인 수를 말한다.
// 어떤 수가 입력되면 그 수가 소수인지 판단하시오.

// let input = Number(prompt());
// for(let i=2; i<input; i++) {
//     if(input & i === 0) {
//         console.log("not prime")
//     } else {
//         console.log("prime")
//     }
// }

// TODO: 1275
// 어떤 수 n과 k가 있다.
// n과 k의 관계는 다음과 같다.
// nk
// nk는 n을 k번 곱한 것을 말한다.
// 입력으로 n과 k가 주어지면 결과를 출력한다.

// let input = prompt().split(" ").map(Number);
// let result = 1;
// for(let i=1; i<=input[1]; i++) {
//     result = result * input[0];
// }
// console.log(result);

// TODO: 1276
// 팩토리얼(!)은 다음과 같이 정의된다.
// n! = n * (n-1) * (n-2) * ... * 2 * 1
// 즉, 5! = 5 * 4 * 3 * 2 * 1 = 120 이다.
// n이 입력되면 n!의 값을 출력하시오.

// let input = Number(prompt());
// let result = 1;
// for(let i=input; i>0; i--) {
//   result = result * i;
// }
// console.log(result);

// TODO: 1277
// 첫 줄에 데이터의 개수 N(N은 홀수)이 입력되고, 그 다음 줄에 N개의 데이터가 입력된다.
// 여기서 첫번째 데이터, 중간 데이터, 마지막 데이터를 출력하시오.

// let input = prompt().split("\n");
// let input1 = input[1].split(" ").map(Number);
// let first = input1.slice(0,1);
// let middle = input1[(input[0]-1)/2];
// let last = input1.slice(-1);;
// console.log(first + " " + middle + " " + last)

// TODO: 1278
// 어떤 숫자가 입력되면 그 숫자가 몇 자릿수 숫자인지 알아내는 프로그램을 작성하시오.
// 예)
// 7   ----> 1   (1자릿수)
// 10  ----> 2   (2자릿수)
// 4322 ----> 4   (4자릿수)

// let input = prompt();
// let input1 = input.length;
// console.log(input1);

// TODO: 1279
// 두 자연수 a, b 사이의 구간에 대해서
// 홀수는 더하고 짝수는 뺀다음의 합을 출력하시오.
// 예)
// a = 5, b=10 일 경우, 5 - 6 + 7 - 8 + 9 - 10 = -3

// let input = prompt().split(" ").map(Number);
// let result = 0;

// for(let i=input[0]; i<=input[1]; i++) {
//     if(i%2 !== 0) {
//         result = result + i;
//     } else if (i%2 ==0) {
//         result = result - i
//     }
// }
// console.log(result);

// TODO: 1280
// 두 자연수 a, b 사이의 구간에 대해서
// 홀수는 더하고 짝수는 빼는 식을 보여준 후 결과를 출력하시오.
// 단, 결과가 양수이면 +를 붙이지 않는다.

// let input = prompt().split(" ").map(Number);
// let result = 0;
// let result0 = "";

// for(let i=input[0]; i<=input[1]; i++) {
//     if(i%2 !== 0) {
//         result = result + i;
//         result0 = result0 + "+" + i
//     } else if (i%2 ==0) {
//         result = result - i
//         result0 = result0 + "-" + i
//     }
// }
// console.log(result0+"="+result);

// TODO: 1281
// 자연수 a, b 사이의 구간에 대해서 홀수는 더하고 짝수는 빼는 식을 보여준 후 결과를 출력하시오.

// let input = prompt().split(" ").map(Number);
// let result = 0;
// let result0 = "";

// if (input[0] < input[1]) {
//   for (let i = input[0]; i <= input[1]; i++) {
//     if (i % 2 !== 0) {
//       result = result + i;
//       result0 = result0 + "+" + i;
//     } else if (i % 2 == 0) {
//       result = result - i;
//       result0 = result0 + "-" + i;
//     }
//   }
//   console.log(result0 + "=" + result);
// } else if (input[1] < input[0]) {
//   for (let i = input[1]; i <= input[0]; i++) {
//     if (i % 2 !== 0) {
//       result = result + i;
//       result0 = result0 + "+" + i;
//     } else if (i % 2 == 0) {
//       result = result - i;
//       result0 = result0 + "-" + i;
//     }
//   }
//   console.log(result0 + "=" + result);
// } else if (input[0]==input[1]) {
//     console.log(0);
// }

// TODO: 1282
// n이 입력되면 k를 빼서 제곱수를 만들 수 있는 k를 구하고,
// 그 제곱수에 루트를 씌운 수(제곱근) t를 구하여라.
// 이 때 k는 여러가지가 될 수 있는데 가장 작은 k를 출력한다.

// let input = Number(prompt());
// let k = 0;
// for (let i=input; i>0; i--) {
//     if(i*i<input) {
//         k = input - (i*i);
//         console.log(k + " " + i);
//         break;
//     }
// }

// TODO: 1283
// gbs라는 개미 투자자가 주식에 투자하려고 합니다.
// 이 사람이 투자한 돈의 액수와, 그 주식의 하루간의 변동을 퍼센트로 알 때,
//  이 사람의 순수익과 이득/손해 판단을 출력하세요.

// let input = prompt().split("\n");
// let seed = Number(input[0]);
// let day = Number(input[1]);
// let per = input[2].split(" ").map(Number);
// let result = seed;
// let answer = "";
// for(let i=0; i<day; i++) {
//     result = result + (result*per[i]/100);
// }
// if(seed<result) {
//     answer = "good";
// } else {
//     answer = "bad";
// }
// console.log((result-seed).toFixed(0)+"\n"+answer);

// TODO: 1284
// 두 소수의 곱을 암호로 사용하는 알고리즘은 큰 수의 소인수분해가 어렵기 때문에 안전하다고 알려져있다.
// 그렇지만, 만약 두 소수를 잊어버리면 어떻게 될까? 굉장히 난감할 것이다.
// 이에 대비해 어떤 수(n)가 입력되면 두 소수의 곱으로 나타낼 수 있으면 두 소수를 오름차순으로 출력하고,
// 그렇지 않으면 "wrong number"를 출력하는 프로그램을 작성하시오.

// let input = Number(prompt());
// let result1 = 0;
// let result2 = 0;
// for(let i=2; i<=input; i++){
//     for(let j=2; j<=input; j++){
//         if(input%(i*j)==0){
//            result1 = i;
//            result2 = j;
//         }
//     }
// }
// for(let i=2; result1>i; i++){
//     if(result1 % i == 0) {
//         result1 = "not"
//     }
// }
// for(let i=2; result2>i; i++){
//     if(result2 % i == 0) {
//         result2 = "not"
//     }
// }

// if (result1 == "not" || result2 == "not"){
//     console.log("wrong number")
// } else if (result1>result2){
//     console.log(result2 + " " + result1);
// } else if (result2>result1) {
//     console.log(result1 + " " + result2);
// }

// TODO: 1286
// 5개의 정수들의 최댓값과 최솟값을 구하는 프로그램을 작성하라.

// let input = prompt().split("\n").map(Number);
// console.log(Math.max(...input)+"\n"+Math.min(...input));

// TODO: 1294
// 대현이는 씨저의 암호 방식을 이용하여 문장을 만들려고 한다.
// never trust brutus 를 씨저의 암호로 바꾸면 qhyhu wuxvw euxwxv 이다.
// 그런데 집중력이 약한 대현이는 하나 하나 찾아서 암호로 바꾸는데 어려움을 겪고 있다.
// 우리가 대현이를 위해 평문을 씨저의 암호문으로 바꾸는 프로그램을 만들어주자.

// let input = prompt();
// let input1 = input.split("");
// let result = 0;
// let result2 = "";
// let result3 = "";
// for(let i=0; i<input.length; i++) {
//     result = result + input[i].charCodeAt(0) + ",";
// }
// result = result.split(",").map(Number);
// for(let i=0; i<result.length; i++) {
//     if(result[i] == 32) {
//         result[i] = 32
//         result2 = result2 + result[i] + ",";
//     } else if(result[i]==120){
//         result[i] = 97
//         result2 = result2 + result[i] + ","; 
//     } else if(result[i]==121) {
//         result[i] = 98
//         result2 = result2 + result[i] + ",";
//     } else if(result[i]==122) {
//         result[i] = 99
//         result2 = result2 + result[i] + ",";
//     } else {
//         result2 = result2 + (result[i]+3) + ",";
//     }
// }
// result2 = result2.split(",");
// for(let i=0; i<result2.length; i++) {
//     result3 = result3 + String.fromCharCode(result2[i]);
// }
// console.log(result3);

// TODO: 1295
// 주어지는 문장의 대문자를 소문자로, 소문자를 대문자로 변경하는 프로그램을 작성하라.

// let input = prompt().split("");
// let result = "";
// let result1 = "";
// let result2 = "";
// let result3 = "";
// let result4 = "";
// for(let i=0; i<input.length; i++) {
//     result = result + input[i].charCodeAt() + ",";
// }
// result1 = result.split(",");
// for(let i=0; i<result1.length; i++) {
//       result1[i] = Number(result1[i])
//     if(result1[i]>=65 && result1[i]<=90){
//         result1[i] = result1[i] + 32
//     } else if(result1[i]>=97 && result1[i]<=122){
//         result1[i] = result1[i] - 32
//     } 
//     result2 = result2 + result1[i] + ",";   
// }

// result3 = result2.split(",");
// for(let i=0; i<result3.length; i++){
//    result4 = result4 + String.fromCharCode(result3[i]);
// }
// console.log(result4);

// TODO: 1675
// 시저의 암호문이 입력되면 원문으로 복원하는 프로그램을 작성하시오.

let input = prompt();
let input1 = input.split("");
let result = 0;
let result2 = "";
let result3 = "";
for(let i=0; i<input.length; i++) {
    result = result + input[i].charCodeAt(0) + ",";
}
result = result.split(",").map(Number);
for(let i=0; i<result.length; i++) {
    if(result[i] == 32) {
        result[i] = 32
        result2 = result2 + result[i] + ",";
    } else if(result[i]==97){
        result[i] = 120
        result2 = result2 + result[i] + ","; 
    } else if(result[i]==98) {
        result[i] = 121
        result2 = result2 + result[i] + ",";
    } else if(result[i]==99) {
        result[i] = 122
        result2 = result2 + result[i] + ",";
    } else {
        result2 = result2 + (result[i]-3) + ",";
    }
}
result2 = result2.split(",");
for(let i=0; i<result2.length; i++) {
    result3 = result3 + String.fromCharCode(result2[i]);
}
console.log(result3);

