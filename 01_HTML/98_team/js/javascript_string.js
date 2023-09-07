// TODO: 1131
// 입력된 문자를 그대로 출력한다.

// let input = prompt();
// console.log(input);

// TODO: 1132
// 한 단어를 입력받아 출력한다.

// let input = prompt();
// console.log(input);

// TODO: 1133
// 공백이 있는 문자열을 입력받아 출력해보자.

// let input = prompt();
// console.log(input);

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

// TODO: 1406
// 영단어 하나가 입력된다.
// 그 단어가 love이면 I love you. 를 출력하시오.

// let input = prompt();
// if(input == "love") {
//     console.log("I love you.")
// } 

// TODO: 1408
// 인터넷 서비스들은 대부분 아이디와 패스워드(password)를 이용한다.
// 이때 사용되는 패스워드는 여러 가지 방법으로 암호화되어 저장된다.
// [어떤 인터넷 서비스의 2가지 암호화 방법]
// - 입력받은 문자의 ASCII 코드값 + 2
// - (입력받은 문자의 ASCII 코드값 * 7) % 80 + 48
// 사용자의 패스워드를 2가지 방법으로 암호화한 결과를 출력하는 프로그램을 작성하시오.

// let input = prompt().split("");
// let result0 = "";
// let result1 = "";
// let result2 = "";
// let input1 = input;
// let result3 = "";
// let result4 = "";
// let result5 = "";

// for(let i=0; i<input.length; i++) {
//     result0 = result0 + input[i].charCodeAt() + ",";
// }
// result0 = result0.split(",").map(Number);
// for(let i=0; i<result0.length-1; i++) {
//     result1 = result1 + (result0[i]+2) + ",";
// }
// result1 = result1.split(",").map(Number);
// for(let i=0; i<result1.length; i++) {
//     result2 = result2 + (String.fromCharCode(result1[i]));
// }

// for(let i=0; i<input1.length; i++) {
//     result3 = result3 + input1[i].charCodeAt() + ",";
// }
// result3 = result3.split(",").map(Number);
// for(let i=0; i<result3.length-1; i++) {
//     result4 = result4 + ((result0[i]*7)%80 +48) + ",";
// }
// result4 = result4.split(",").map(Number);
// for(let i=0; i<result4.length; i++) {
//     result5 = result5 + (String.fromCharCode(result4[i]));
// }
// console.log(result2 + "\n" + result5);

// TODO: 1410
// 프로그래밍을 할 때 가장 중요한 것 중 하나가 괄호의 개수를 맞추는 것이다.
// 즉, 여는 괄호가 있으면 항상 닫는 괄호가 있고, 닫는 괄호가 있으면 여는 괄호도 있어야 한다.
// 올바른 괄호를 확인하기 위해 가장 기본적인 방법 중 하나는 여는 괄호와 닫는 괄호의 개수를 세는 것이다.
// 소괄호로 이루어진 문자열을 주어지면 괄호의 개수를 출력하는 프로그램을 작성하시오.

// let input = prompt().split("");
// let count1 = 0;
// let count2 = 0;

// for(let i=0; i<input.length; i++) {
//     if(input[i] == "(") {
//         count1++;
//     } else if(input[i] == ")") {
//         count2++;
//     }
// }

// console.log(count1 + " " + count2);

// TODO: 1414
// 길이가 100이하인 문자열을 입력받아, "c"라는 문자와 "CC"라는 문자가
//  각각 몇 개 존재하는지 알아내는 프로그램을 작성하시오.

// let input = prompt().split("");
// let count1 = 0;
// let count2 = 0;

// for(let i=0; i<input.length; i++) {
//     if(input[i] == "c" || input[i] == "C") {
//         count1++;
//     } 
// }
// for(let i=0; i<input.length-1; i++) {
//     if(input[i]+input[i+1] == "cc" || 
//     input[i]+input[i+1] == "cC" || 
//     input[i]+input[i+1] == "Cc" ||
//     input[i]+input[i+1] == "CC") {
//         count2++;
//     }
// }

// console.log(count1 + " " + count2);

// TODO: 1418
// 어떤 문자열이 있을 때 문자 t의 위치를 모두 찾아 출력하시오.

// let input = prompt().split("");
// let result = "";
// for(let i=0; i<input.length; i++) {
//    if(input[i] == "t") {
//     result = result + (i+1)
//    } else {
//     result = result + " "
//    }
// }

// console.log(result);

// TODO: 1419
// 영어 문장이 입력된다.
// 그 문장에서 love가 몇 번 나오는지 출력하시오.

// let input = prompt().split("");
// let count1 = 0;

// for(let i=0; i<input.length-3; i++) {
//     if(input[i]+input[i+1]+input[i+2]+input[i+3] == "love") {
//         count1++;
//     }
// }
// console.log(count1);

// TODO: 1733
// 입력으로 IOI 가 입력될 경우, IOI is the International Olympiad in Informatics.
// 를 출력하는 프로그램을 작성하시오. 만약 
// IOI가 아닌 다른 글자가 들어오는 경우, I don't care.를 출력한다.

// let input = prompt();
// if(input == "IOI") {
//     console.log("IOI is the International Olympiad in Informatics.")
// } else {
//     console.log("I don't care.")
// }

// TODO: 1734
// 당신은 웹사이트 제작자이다.
// ID를 입력하고 엔터를 누르면 환영 메시지를 띄우려고한다.
// 예를 들어 ID가 
// anaki 인 경우, welcome! anaki를 출력한다.
// 환영 메시지를 출력하는 프로그램을 작성하시오.

// let input = prompt();
// console.log("welcome! " + input);

// TODO: 1754
// 우리는 숫자를 int나 long long으로 숫자를 처리하였다.
// 이번엔 그보다 더 큰 숫자를 비교해보자.
// 최대 100자리의 두 숫자가 입력되면 작은수와 큰 수를 차례대로 출력하시오.

// let input = prompt().split(" ");
// if(input[0] > input[1]) {
//     console.log(input[1] + " " + input[0]);
// } else if(input[1] > input[0]) {
//     console.log(input[0] + " " + input[1]);
// }


// TODO: 1990
// 자연수 n이 입력되면 3의 배수인지 아닌지 판별하시오.

// let input = Number(prompt());
// if(input % 3 == 0 ) {
//     console.log(1);
// } else {
//     console.log(0);
// }

// TODO: 2721
// 영어 소문자로 구성된 단어 S1, S2, S3가 있을때,
// S1의 마지막 문자가 S2의 첫 글자와 같고,
// S2의 마지막 글자가 S3의 첫 글자와 같고,
// S3의 마지막 글자가 S1의 첫 글자와 같으면 순환 문자열이라고 한다.
// 예를 들어 turtle error robot 인 경우 순환 문자열이다.
// 세 단어가 주어졌을 때 순환 문자열이면 good을 출력, 아니면 bad를 출력하시오.

// let input = prompt().split("\n");
// let q1 = input[0].replace(/\n|\r|\s*/g, "").split("");
// let q2 = input[1].replace(/\n|\r|\s*/g, "").split("");
// let q3 = input[2].replace(/\n|\r|\s*/g, "").split("");

// if(q1.slice(-1)==(q2[0]) && q2.slice(-1)==(q3[0]) && q3.slice(-1)==(q1[0])){
//                 console.log("good");
//             } else {
//                 console.log("bad");
//             }