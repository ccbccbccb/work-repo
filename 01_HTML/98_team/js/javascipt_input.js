// TODO: 1110
// 입력받은 정수를 그대로 출력한다.

// let input = Number(prompt());
// console.log(input);

// TODO: 1111
// 어떤 정수가 입력되면 %를 붙여 출력하시오.

// let input = Number(prompt());
// console.log(input+"%");

// TODO: 1112
// 입력 받은 두 정수를 출력한다.

// let input = prompt().split(" ");
// console.log(input[0] + " " + input[1]);

// TODO: 1113
// 두 정수를 입력받아 순서를 바꿔서 출력하시오.

// let input = prompt().split(" ");
// console.log(input[1] + " " + input[0]);

// TODO: 1114
// 두 정수를 입력받아 합을 출력한다.

// let input = prompt().split(" ").map(Number);
// console.log(input[0] + input[1]);

// TODO: 1115
// 두 정수의 덧셈의 결과를 출력한다.
// 두 수는 int 범위를 넘어선 64비트 정수형 값이다.

// let input = prompt().split(" ").map(Number);
// console.log(input[0] + input[1]);

// TODO: 1116
// 두 정수를 입력받아 아래와 같이 출력하시오.

// let input = prompt().split(" ").map(Number);
// console.log(input[0] + "+" +input[1] + "=" +(input[0]+input[1]));
// console.log(input[0] + "-" +input[1] + "=" +(input[0]-input[1]));
// console.log(input[0] + "*" +input[1] + "=" +(input[0]*input[1]));
// console.log(input[0] + "/" +input[1] + "=" +Math.floor((input[0]/input[1])));

// TODO: 1117
// 두 실수를 입력받아 두 실수의 곱을 출력하되 소수 둘째자리까지 출력하시오.

// let input = prompt().split(" ").map(Number);
// console.log((input[0]*input[1]).toFixed(2));

// TODO: 1118
// 삼각형의 넓이를 구하는 프로그램을 작성한다.
// 삼각형의 넓이 = 밑변 * 높이 / 

// let input = prompt().split(" ").map(Number);
// console.log((input[0]*input[1]/2).toFixed(1));

// TODO: 1119
// 하루는 24시간이다.
// 일(day)이 입력으로 주어지면 시간으로 변환하시오.

// let input = Number(prompt());
// console.log(input*24);

// TODO: 1120
// 세 정수가 입력되면 평균을 출력하시오.

// let input = prompt().split(" ").map(Number);
// let avr = (input[0]+input[1]+input[2])/3;
// console.log(avr.toFixed(2));

// TODO: 1121
// 정수 계산에서 나머지를 구하시오.
// 예를 들어
// 7 / 5 의 나머지는 2입니다.

// let input = prompt().split(" ").map(Number);
// console.log(input[0]%input[1]);

// TODO: 1122
// 초를 입력받아 분 / 초의 형태로 출력하시오.
// 예)
// 60  ====>   1 0    (1분 0초를 뜻함)
// 70    ====>    1  10       (1분 10초를 뜻함)

// let input = Number(prompt());
// let min = input/60;
// let second = input%60;

// console.log(Math.floor(min)+" "+second);

// TODO: 1123
// 섭씨 온도가 입력되면 화씨 온도로 변환하시오.
// 화씨 온도 = 9 / 5 * 섭씨온도 + 32

// let cTemp = Number(prompt());
// let fTemp = 9/5*cTemp+32;
// console.log(fTemp.toFixed(3));

// TODO: 1125
// 10진수 정수를 입력받아 8진수와 16진수로 출력한다.

// let input = Number(prompt());
// console.log(input.toString(8)+" "+(input.toString(16)).toUpperCase());

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

// TODO: 1135
// 두 정수(a, b)를 입력받아 a가 b보다 크거나 같으면(이상)1,
//  a가 b보다 작으면(미만) 0을 출력하는 프로그램을 작성해보자.

// let input = prompt().split(" ").map(Number);
// if(input[0]>=input[1]){
//     console.log(1);
// } else {
//     console.log(0);
// }

// TODO: 1136
// 두 정수(a, b)를 입력받아 a와 b가 같으면 1, 
// 같지 않으면 0을 출력하는 프로그램을 작성하시오.

// let input = prompt().split(" ").map(Number);
// if(input[0]==input[1]){
//     console.log(1);
// } else {
//     console.log(0);
// }

// TODO: 1137
// 두 정수(a, b)를 입력받아 a와 b가 같으면 0, 
// 같지 않으면 1을 출력하는 프로그램을 작성하시오.

// let input = prompt().split(" ").map(Number);
// if(input[0]!==input[1]){
//     console.log(1);
// } else {
//     console.log(0);
// }

// TODO: 1138
// 1(true, 참) 또는 0(false, 거짓) 이 입력되었을 때 
// 결과를 반대로 출력하는 프로그램을 작성해보자.

// let input = Number(prompt());
// if(input==1){
//     console.log(0);
// } else if (input==0) {
//     console.log(1);
// }

// TODO: 1139
// 두 가지의 참(1) 또는 거짓(0)이 입력될 때, 모두 참일 때는 1이, 
// 그렇지 않으면 0이 출력되는 프로그램을 작성해보자.

// let input = prompt().split(" ").map(Number);
// if(input[0]== 1 && input[1] == 1){
//     console.log(1);
// } else {
//     console.log(0);
// }

// TODO: 1140
// 두 가지의 참(1) 또는 거짓(0)이 입력될 때, 둘 중 하나라도 참일 경우 1이, 
// 그렇지 않으면 0이 출력되는 프로그램을 작성해보자.

// let input = prompt().split(" ").map(Number);
// if(input[0]== 1 || input[1] == 1){
//     console.log(1);
// } else {
//     console.log(0);
// }

// TODO: 1143
// 두 수를 입력받아 비트단위로 AND연산한 후 결과를 출력하시오.

// let input = prompt().split(" ").map(Number);
// console.log(input[0]&input[1]);

// TODO: 1144
// 두 수를 입력받아 비트단위로 OR연산한 후 결과를 출력하시오.

// let input = prompt().split(" ").map(Number);
// console.log(input[0]|input[1]);

// TODO: 1147
// 정수 a, x를 입력받아 a의 값을 x만큼 SHIFT(<<) 연산한 후 결과를 출력하시오.

// let input = prompt().split(" ").map(Number);
// console.log(input[0]<<input[1]);

// TODO: 1148
// 정수 a, x를 입력받아 a의 값을 x만큼 SHIFT(>>) 연산한 후 결과를 출력하시오.

// let input = prompt().split(" ").map(Number);
// console.log(input[0]>>input[1]);

// TODO: 1149
// 두 정수 중 큰 정수를 출력한다.

// let input = prompt().split(" ").map(Number);
// console.log(Math.max(input[0],input[1]));

// TODO: 1150
// 세 정수가 주어지면 그 중 가장 작은 수를 출력한다.

// let input = prompt().split(" ").map(Number);
// console.log(Math.min(input[0],input[1],input[2]));