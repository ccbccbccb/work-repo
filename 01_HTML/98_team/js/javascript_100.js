// TODO: 1001
// /C/C++언어에서 가장 기본적인 명령이 출력문이다.
// printf()를 이용해 다음 단어를 출력하시오.
// Hello

// console.log("Hello");

// TODO: 1002
// 이번에는 공백()을 포함한 문장을 출력한다.
// 다음 문장을 출력해보자.
// Hello World
// (대소문자에 주의한다.)

// console.log("Hello World");

// TODO: 1003
// 이번에는 줄을 바꿔 출력하는 출력문을 연습해보자.
// 다음과 같이 줄을 바꿔 출력해야 한다.
// Hello
// World
// (두 줄에 걸쳐 줄을 바꿔 출력)

// console.log("Hello\nWolrd");

// TODO: 1004
// 이번에는 작은 따옴표(single quotation mark)가 들어있는
// 특수한 형태의 출력문에 대한 연습을 해보자.
// 다음 문장을 출력하시오.
// 'Hello'

// console.log("'Hello'");

// TODO: 1005
// 이번에는 큰따옴표(double quotation mark)가 포함된 출력문을 연습해보자.
// 다음 문장을 출력하시오.
// "Hello World"
// (단, 큰따옴표도 함께 출력한다.)

// console.log('"Hello Wolrd"');

// TODO: 1006
// 이번에는 특수문자 출력에 도전하자!!
// 다음 문장을 출력하시오.
// "!@#$%^&*()"
// (단, 큰따옴표도 함께 출력한다.)

// console.log('"!@#$%^&*()"');

// TODO: 1007
// 윈도우 운영체제의 파일 경로를 출력하는 연습을 해보자.
// 파일 경로에는 특수문자들이 포함된다.
// 다음 경로를 출력하시오.
// "C:\Download\hello.cpp"
// (단, 큰따옴표도 함께 출력한다.)

// console.log('"C:\\Download\\hello.cpp"');

// TODO: 1008
// 이번에는 특수문자를 출력하는 연습을 해보자.
// 키보드로 입력할 수 없는 다음 모양을 출력해보자.
// (** 참고 : 운영체제의 문자 시스템에 따라 아래와 같은 모양이 출력되지 않을 수 있다.)
// console.log("┌┬┐\n├┼┤\n└┴┘"); 

// TODO: 1010
// 정수형(int)으로 변수를 선언하고, 변수에 정수값을 저장한 후
// 변수에 저장되어 있는 값을 그대로 출력해보자.

// let num = 5;
// console.log(num);

// TODO: 1011
// 문자형(char)으로 변수를 하나 선언하고, 변수에 문자를 저장한 후
// 변수에 저장되어 있는 문자를 그대로 출력해보자.

// let char = prompt();
// console.log(char);

// TODO: 1012
// 실수형(float)로 변수를 선언하고 그 변수에 실수값을 저장한 후
// 저장되어 있는 실수값을 출력해보자.

// let num = Number(prompt());
// console.log(num);

// TODO: 1013
// 정수(int) 2개를 입력받아 그대로 출력해보자.


// let num1 = Number(prompt());
// let num2 = Number(prompt());
// console.log(num1 + " " + num2);

// TODO: 1014
// 2개의 문자(ASCII CODE)를 입력받아서 순서를 바꿔 출력해보자.

// let str1 = prompt();
// str2 = str1.split(" ")
// console.log(str2[1] + " " + str2[0]);

// TODO: 1015
// 실수(float) 1개를 입력받아 저장한 후,
// 저장되어 있는 값을 소수점 셋 째 자리에서 반올림하여
// 소수점 이하 둘 째 자리까지 출력하시오.

// let num1 = Number(prompt());
// console.log((num1).toFixed(2));

// TODO: 1017
// int형 정수 1개를 입력받아 공백을 사이에 두고 3번 출력해보자.

// let num1 = Number(prompt());
// console.log(num1 + " " + num1 + " " + num1);

// TODO: 1018
// 어떤 형식에 맞추어 시간이 입력될 때, 그대로 출력하는 연습을 해보자.

// let time = prompt().split(":");
// console.log(time[0] + ":" + time[1]);

// TODO: 1019
// 년, 월, 일을 입력받아 지정된 형식으로 출력하는 연습을 해보자.

// let input = prompt().split(".");
// if (Number(input[1]) < 10) {
//     input[1] = "0" + input[1]; 
// }
// if (Number(input[2]) < 10) {
//     input[2] = "0" + input[2]; 
// }
// console.log(input[0] + "." + input[1] + "." + input[2]);

// TODO: 1020
// 주민번호는 다음과 같이 구성된다.

// XXXXXX-XXXXXXX

// 앞의 6자리는 생년월일(yymmdd)이고 뒤 7자리는 성별, 지역, 오류검출코드이다.
// 주민번호를 입력받아 형태를 바꿔 출력해보자.

// let regNum = prompt().split("-");
// console.log(regNum[0] + regNum[1]);

// TODO: 1021
// 1개의 단어를 입력받아 그대로 출력해보자.

// let str = prompt();
// console.log(str);

// TODO: 1022
// 공백 문자가 포함되어 있는 문장을 입력받고 그대로 출력하는 연습을 해보자.

// let str = prompt();
// console.log(str);

// TODO: 1023
// 실수 1개를 입력받아 정수 부분과 실수 부분으로 나누어 출력한다.

// let input = prompt().split(".");
// console.log(input[0] + "\n" + input[1]);

// TODO: 1024
// 단어를 1개 입력받는다.
// 입력받은 단어(영어)의 각 문자를
// 한줄에 한 문자씩 분리해 출력한다.

// let input = prompt();
// let result = "";
// for(let i = 0; i<input.length; i++) {
//     result = result + "'" + input[i] + "'" + "\n";
// }
// console.log(result);

// TODO: 1025
// 다섯 자리의 정수 1개를 입력받아 각 자리별로 나누어 출력한다.
// let input = prompt();
// let result = "";
// input[0] = input[0] + "]"
// console.log("[" + input[0] + "0000"+ "]\n[" + input[1] + "000"+ "]\n[" 
// + input[2] + "00"+ "]\n[" + input[3] + "0"+ "]\n[" + input[4] + "]");

// TODO: 1026
// 입력되는 시:분:초 에서 분만 출력해보자.

// let input = prompt().split(":");
// console.log(input[1]);


// TODO: 1027
// 년월일을 출력하는 방법은 나라마다, 형식마다 조금씩 다르다.
// 년월일(yyyy.mm.dd)를 입력받아,
// 일월년(dd-mm-yyyy)로 출력해보자.
// (단, 한 자리 일/월은 0을 붙여 두자리로, 년도도 0을 붙여 네자리로 출력한다.) 

// let input = prompt().split(".");
// console.log(input[2] + "-"+ input[1] + "-" + input[0]);

// TODO: 1028
// 정수 1개를 입력받아 그대로 출력해보자.
// (단, 입력되는 정수의 범위는 0 ~ 4,294,967,295 이다.)

// let input = prompt();
// console.log(input);

// TODO: 1029
// 실수 1개를 입력받아 그대로 출력해보자.
// (단, 입력되는 실수의 범위는 +- 1.7*10-308 ~ +- 1.7*10308 이다.)

// let input = prompt();
// console.log(input);

// TODO: 1030
// 정수 1개를 입력받아 그대로 출력해보자.
// 단, 입력되는 정수의 범위는
// -9,223,372,036,854,775,808 ~ +9,223,372,036,854,775,807 이다.

// let input = Number(prompt());
// console.log(input);

// TODO: 1031
// 10진수를 입력받아 8진수(octal)로 출력해보자.

// let input = Number(prompt());
// let num8 = input.toString(8);
// console.log(num8);

// TODO: 1032
// 10진수를 입력받아 16진수(hexadecimal)로 출력해보자.

// let input = Number(prompt());
// let num16 = input.toString(16);
// console.log(num16);

// TODO: 1033
// 10진수를 입력받아 16진수(hexadecimal)로 출력해보자.

// let input = Number(prompt());
// let num16 = input.toString(16).toUpperCase();
// console.log(num16);

// TODO: 1034
// 8진수로 입력된 정수 1개를 10진수로 바꾸어 출력해보자.

// let input = Number(prompt());
// let num10 = parseInt(input, 8).toString(10);
// console.log(num10);

// TODO: 1035
// 16진수로 입력된 정수 1개를 8진수로 바꾸어 출력해보자.

// let input = prompt();
// let num16 = parseInt(input, 16).toString(8);
// console.log(num16);

// TODO: 1036
// 영문자 1개를 입력받아 아스키 코드표의 10진수 값으로 출력해보자.

// let input = prompt();
// console.log(input.charCodeAt(0));

// TODO: 1037
// 10진 정수 1개를 입력받아 아스키 문자로 출력해보자.
// 단, 0 ~ 255 범위의 정수만 입력된다.

// let input = prompt();
// console.log(String.fromCharCode(input));

// TODO: 1038
// 정수 2개를 입력받아 합을 출력하는 프로그램을 작성해보자.
// (단, 입력되는 정수는 -1073741824 ~ 1073741824 이다.)

// let input = prompt().split(" ");
// console.log(Number(input[0]) + Number(input[1]));

// TODO: 1039
// 정수 2개를 입력받아 합을 출력해보자.
// 단, 입력되는 정수는 -2147483648 ~ +2147483648 이다.

// let input = prompt().split(" ");
// console.log(Number(input[0]) + Number(input[1]));

// TODO: 1040
// 입력된 정수의 부호를 바꿔 출력해보자.
// 단, -2147483647 ~ +2147483647 범위의 정수가 입력된다.

// let input = Number(prompt());
// console.log(input * -1);

// TODO: 1041
// 영문자 1개를 입력받아 그 다음 문자를 출력해보자.
// 영문자 'A'의 다음 문자는 'B'이고, 영문자 '0'의 다음 문자는 '1'이다.

// let input = prompt();
// let result = (input.charCodeAt(0)) + 1;
// console.log(String.fromCharCode(result));

// TODO: 1042
// 정수 2개(a, b) 를 입력받아 a를 b로 나눈 몫을 출력해보자.
// 단, -2147483648 <= a <= b <= +2147483647, b는 0이 아니다.

// let input = prompt().split(" ");
// console.log((Number(input[0]) / Number(input[1])).toFixed(0));

// TODO: 1043
// 정수 2개(a, b) 를 입력받아 a를 b로 나눈 나머지를 출력해보자.
// 단, 0 <= a, b <= +2147483647, b는 0이 아니다.

// let input = prompt().split(" ");
// console.log((Number(input[0]) % Number(input[1])).toFixed(0));

// TODO: 1044
// 정수를 1개 입력받아 1만큼 더해 출력해보자.
// 단, -2147483648 ~ +2147483647 의 범위로 입력된다.

// let input = Number(prompt());
// console.log(input + 1);

// TODO: 1045

// 정수 2개(a, b)를 입력받아 합, 차, 곱, 몫, 나머지, 나눈 값을 자동으로 계산해보자.
// 단 0 <= a, b <= 2147483647, b는 0이 아니다.

// let input = prompt().split(" ");
// console.log(Number(input[0]) + Number(input[1]));
// console.log(Number(input[0]) - Number(input[1]));
// console.log(Number(input[0]) * Number(input[1]));
// console.log((Number(input[0]) / Number(input[1])).toFixed(0));
// console.log(Number(input[0]) % Number(input[1]));
// console.log((Number(input[0]) / Number(input[1])).toFixed(2));

// TODO: 1046
// 정수 3개를 입력받아 합과 평균을 출력해보자.
// 단, -2147483648 ~ +2147483647

// let input = prompt().split(" ");
// console.log(Number(input[0]) + Number(input[1]) + Number(input[2]));
// console.log(((Number(input[0]) + Number(input[1]) + Number(input[2]))/3).toFixed(1));

// TODO: 1047
// 정수 1개를 입력받아 2배 곱해 출력해보자.

// let input = Number(prompt());
// console.log(input * 2);

// TODO: 1048
// 정수 2개(a, b)를 입력받아 a를 2b배 곱한 값으로 출력해보자.
// 0 <= a <= 10, 0 <= b <= 10

// let input = prompt().split(" ");
// console.log(Number(input[0]) * Math.pow(2,(input[1])));

// TODO: 1049
// 두 정수(a, b)를 입력받아
// a가 b보다 크면 1을, a가 b보다 작거나 같으면 0을 출력하는 프로그램을 작성해보자.

// let input = prompt().split(" ");
// if(Number(input[0]>Number(input[1]))) {
//     console.log(1);
// } else {
//     console.log(0);
// }

// TODO: 1050
// 두 정수(a, b)를 입력받아
// a와 b가 같으면 1을, 같지 않으면 0을 출력하는 프로그램을 작성해보자.

// let input = prompt().split(" ");
// if(Number(input[0]==Number(input[1]))) {
//     console.log(1);
// } else {
//     console.log(0);
// }

// TODO: 1051
// 두 정수(a, b)를 입력받아
// b가 a보다 크거나 같으면 1을, 그렇지 않으면 0을 출력하는 프로그램을 작성해보자.

// let input = prompt().split(" ");
// if(Number(input[1]>=Number(input[0]))) {
//     console.log(1);
// } else {
//     console.log(0);
// }

// TODO: 1052
// 두 정수(a, b)를 입력받아
// a와 b가 서로 다르면 1을, 그렇지 않으면 0을 출력하는 프로그램을 작성해보자.

// let input = prompt().split(" ");
// if(Number(input[0]!=Number(input[1]))) {
//     console.log(1);
// } else {
//     console.log(0);
// }

// TODO: 1053
// 1(true, 참) 또는 0(false, 거짓) 이 입력되었을 때
// 반대로 출력하는 프로그램을 작성해보자.

// let input = prompt()
// if(input == 0) {
//     console.log(1);
// } else if(input == 1) {
//     console.log(0);
// }

// TODO: 1054
// 두 개의 참(1) 또는 거짓(0)이 입력될 때,
// 모두 참일 때에만 참을 출력하는 프로그램을 작성해보자.

// let input = prompt().split(" ");
// if(input[0]==1 && input[1]==1) {
//     console.log(1);
// } else {
//     console.log(0);
// }

// TODO: 1055
// 두 개의 참(1) 또는 거짓(0)이 입력될 때,
// 하나라도 참이면 참을 출력하는 프로그램을 작성해보자.

// let input = prompt().split(" ");
// if(input[0]==1 || input[1]==1) {
//     console.log(1);
// } else {
//     console.log(0);
// }



// TODO: 1056
// 두 가지의 참(1) 또는 거짓(0)이 입력될 때,
// 참/거짓이 서로 다를 때에만 참을 출력하는 프로그램을 작성해보자.

// let input = prompt().split(" ");
// if(input[0]==1 || input[1]==1) {
//     console.log(0);
// } else {
//     console.log(1);
// }

// TODO: 1057
// 두 개의 참(1) 또는 거짓(0)이 입력될 때,
// 모두 거짓일 때에만 참이 계산되는 프로그램을 작성해보자.

// let input = prompt().split(" ");
// if(input[0]==0 && input[1]==0) {
//     console.log(1);
// } else {
//     console.log(0);
// }

// TODO: 1058
// 두 개의 참(1) 또는 거짓(0)이 입력될 때,
// 모두 거짓일 때에만 참이 계산되는 프로그램을 작성해보자.

// let input = prompt().split(" ");
// if(input[0]==0 && input[1]==0) {
//     console.log(1);
// } else {
//     console.log(0);
// }

// TODO: 1059
// 입력 된 정수를 비트단위로 참/거짓을 바꾼 후 정수로 출력해보자.
// 비트단위(bitwise)연산자 ~ 를 붙이면 된다.(~ : tilde, 틸드라고 읽는다.)

// let input = Number(prompt());
// console.log(~input);

// TODO: 1060
// 입력된 정수 두 개를 비트단위로 and 연산한 후 그 결과를 정수로 출력해보자.
// 비트단위(bitwise)연산자 &를 사용하면 된다.(and, ampersand, 앰퍼센드라고 읽는다.)

// let input = prompt().split(" ").map(Number);
// console.log(input[0]&input[1]);

// TODO: 1061
// 입력된 정수 두 개를 비트단위로 or 연산한 후 그 결과를 정수로 출력해보자.
// 비트단위(bitwise) 연산자 |(or, vertical bar, 버티컬바)를 사용하면 된다.

// let input = prompt().split(" ").map(Number);
// console.log(input[0]|input[1]);

// TODO: 1062
// 입력된 정수 두 개를 비트단위로 xor 연산한 후 그 결과를 정수로 출력해보자.
// 비트단위(bitwise) 연산자 ^(xor, circumflex/caret, 서컴플렉스/카릿)를 사용하면 된다.

// let input = prompt().split(" ").map(Number);
// console.log(input[0]^input[1]);

// TODO: 1063
// 입력된 두 정수 a, b 중 큰 값을 출력하는 프로그램을 작성해보자.
// 단, 조건문을 사용하지 않고 3항 연산자 ? 를 사용한다.

// let input = prompt().split(" ").map(Number);
// let result = (input[0]>input[1] ? input[0]:input[1]);
// console.log(result);

// TODO: 1064
// 입력된 세 정수 a, b, c 중 가장 작은 값을 출력하는 프로그램을 작성해보자.
// 단, 조건문을 사용하지 않고 3항 연산자 ? 를 사용한다

// let input = prompt().split(" ").map(Number);
// let result =
// (input[0]<input[1] ? input[0]:input[1])<input[2] ? (input[0]<input[1] ? input[0]:input[1]):input[2];
// console.log(result);

// TODO: 1065
// 세 정수 a, b, c가 입력되었을 때, 짝수만 출력해보자.

// let input = prompt().split(" ").map(Number);
// let result = "";

// for (let i = 0; i < input.length; i++) {
//   if (input[i] % 2 == 0) {
//     result = result + input[i] + "\n";
//   }
// }
// console.log(result);

// TODO: 1066
// 세 정수 a, b, c가 입력되었을 때, 짝(even)/홀(odd)을 출력해보자.

// let input = prompt().split(" ").map(Number);
// let result = "";

// for (let i = 0; i < input.length; i++) {
//   if (input[i] % 2 == 0) {
//     input[i] = "even";
//     result = result + input[i] + "\n";
//   } else if (input[i] % 2 !== 0) {
//     input[i] = "odd";
//     result = result + input[i] + "\n";
//   }
// }
// console.log(result);

// TODO: 1067
// 정수 1개가 입력되었을 때, 음(minus)/양(plus)과 짝(even)/홀(odd)을 출력해보자.

// let input = Number(prompt());
// let result = "";

//   if (input > 0 && input % 2 == 0) {
//     input = "plus\nodd" ;
//     result = input;
//   } else if (input > 0 && input % 2!== 0) {
//     input = "plus\nodd";
//     result = input;
//   } else if (input < 0 && input % 2 == 0) {
//     input = "minus\neven" ;
//     result = input;
//   } else if (input < 0 && input % 2!== 0) {
//     input = "minus\nodd";
//     result = input;
//   }
// console.log(result);

// TODO: 1068
// 점수(정수, 0 ~ 100)를 입력받아 평가를 출력해보자.

// let input = Number(prompt());
// if(input >= 100 && input <= 90) {
//     console.log("A")
// } else if(input <= 89 && input >= 70) {
//     console.log("B")
// } else if(input <= 69 && input >= 40) {
//     console.log("C")
// } else if(input <= 39 && input >= 0) {
//     console.log("D")
// }

// TODO: 1069
// 평가를 문자(A, B, C, D, ...)로 입력받아 내용을 다르게 출력해보자.

// let input = prompt();

// if(input == "A") {
//     console.log("best!!!");
// } else if(input == "B") {
//     console.log("good!!");
// } else if(input == "C") {
//     console.log("run!");
// } else if(input == "D") {
//     console.log("slowly~");
// } else {
//     console.log("what");
// }

// TODO: 1070
// 월이 입력될 때 계절 이름이 출력되도록 해보자.

// let input = Number(prompt());
// if(input > 0 && input < 13 ) {
//     console.log("winter");
// } else if(input > 2 && input < 6) {
//     console.log("spring");
// } else if(input > 5 && input < 9) {
//     console.log("winter");
// } else if(input > 8 && input < 12 ) {
//     console.log("fall");
// }

// TODO: 1071
// 정수가 순서대로 입력된다.
// -2147483648 ~ +2147483647, 단 개수는 알 수 없다.
// 0이 아니면 입력된 정수를 출력하고, 0이 입력되면 출력을 중단해보자.
// while( ), for( ), do~while( ) 등의 반복문을 사용할 수 없다.

// let input = prompt().split(" ");
// i = 0;
// function check(i) {
//   if (input[i] !== "0") {
//     console.log(input[i]);
//     i++;
//     check(i);
//   }
// }
// check(i);

// TODO: 1072
// n개의 정수가 순서대로 입력된다.
// -2147483648 ~ +2147483647, 단 n의 최대 개수는 알 수 없다.
// n개의 입력된 정수를 순서대로 출력해보자.

// let input = prompt().split("\n");
// let input0 = Number(input[0]);
// let input1 = input[1].split(" ");
// let i = 0;
// function check(i) {
//   if (i < input0) {
//     console.log(input1[i]);
//     i++;
//     check(i);
//   }
// }
// check(i);

// TODO: 1074
// 정수(1 ~ 100) 1개가 입력되었을 때 카운트다운을 출력해보자.

// let input = Number(prompt());
// for(let i = input; i > 0; i--) {
//     console.log(input);
//     input--;
// }

// TODO: 1075
// 정수(1 ~ 100) 1개가 입력되었을 때 카운트다운을 출력해보자.

// let input = Number(prompt());
// for(let i = input; i > 0; i--) {
//     console.log(input-1);
//     input--;
// }

// TODO: 1076
// 영문자(a ~ z) 1개가 입력되었을 때 그 문자까지의 알파벳을 순서대로 출력해보자.

// let input = prompt().charCodeAt();
// result = "";
// for(let i = 97; i <= input; i++) {
//     result = result + String.fromCodePoint(i) + " "
// }
// console.log(result);

// TODO: 1077
// 정수(0 ~ 100) 1개를 입력받아 0부터 그 수까지 순서대로 출력해보자.

// let input = prompt();
// result = "";
// for(let i = 0; i <= input; i++) {
//     result = result + i + "\n"
// }
// console.log(result);

// TODO: 1078
// 정수(1 ~ 100) 1개를 입력받아 1부터 그 수까지 짝수의 합을 구해보자.

// let input = Number(prompt());
// let result = 0;
// for (let i = 1; i <= input; i++) {
//   if (i % 2 == 0) {
//     result = result + i;
//   }
// }
// console.log(result);

// TODO: 1079
// 'q'가 입력될 때까지 입력한 문자를 계속 출력하는 프로그램을 작성해보자.

// let input = prompt().split(" ");
// for (let i = 0; i < input.length; i++) {
//   if (input[i] !== "q") {
//     console.log(input[i]);
//   } else {
//     console.log(input[i]);
//     break;
//   }
// }

// TODO: 1080
// 1, 2, 3 ... 을 계속 더해 나갈 때,
// 그 합이 입력한 정수(0 ~ 1000)보다 같거나 작을 때까지
// 계속 더하는 프로그램을 작성해보자.

// let input = Number(prompt());
// let result = 0;
// for(let i =0; i<=1000; i++){
//     if(result < input) {
//    result = result + i;
//     } else if (result >= input) {
//         console.log(i-1);
//         break;
//     }
// }

// TODO: 1081
// 1부터 n까지, 1부터 m까지 숫자가 적힌
// 서로 다른 주사위 2개를 던졌을 때 나올 수 있는 모든 경우를 출력해보자.

// let input = prompt().split(" ").map(Number)
// for(let i = 1; i<=input[0]; i ++) {
//     for (let j = 1; j<=input[1]; j++){
//         console.log(i + " " + j)
//     }
// }

// TODO: 1082
// 16진수(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F)를 배운
// 영일(01)이는 16진수끼리 곱하는 16진수 구구단?에 대해서 궁금해졌다.
// A, B, C, D, E, F 중 하나가 입력될 때,
// 1부터 F까지 곱한 16진수 구구단의 내용을 출력해보자.
// (단, A ~ F 까지만 입력된다.)

// let input = prompt();
// for(let i =1; i<=15; i++) {
//     console.log((input+"*"+i.toString(16)+"="+(parseInt(input,16)*i).toString(16)).toUpperCase())
// }

// TODO: 1083
// 3 6 9 게임을 하던 영일이는 3 6 9 게임에서 잦은 실수로 계속해서 벌칙을 받게 되었다.
// 3 6 9 게임의 왕이 되기 위한 마스터 프로그램을 작성해 보자.

// let input = Number(prompt());
// let result = "";
// for (let i = 1; i <= input; i++) {
//   if (i == 3 || i == 6 || i == 9) {
//     result = result + "X" + " ";
//   } else {
//     result = result + i + " ";
//   }
// }
// console.log(result);

// TODO: 1084
// 빨강(red), 초록(green), 파랑(blue) 빛을 섞어
// 여러 가지 빛의 색을 만들어 내려고 한다.

// 빨강(r), 초록(g), 파랑(b) 각각의 빛의 개수가 주어질 때,
// (빛의 강약에 따라 0 ~ n-1 까지 n가지의 빛 색깔을 만들 수 있다.)

// 주어진 rgb 빛들을 다르게 섞어 만들 수 있는 모든 경우의 조합(r g b)과
// 총 가짓 수를 계산해보자.

// let input = prompt().split(" ").map(Number);
// let count = 0;

// for(let i = 0; i<input[0]; i++) {
//     for(let j = 0; j<input[1]; j++) {
//         for(let k = 0; k<input[2]; k++) {
//             console.log(i+" "+j+" " +k);
//             count++;
//         }
//     }
// }
// console.log(count);

// TODO: 1085
// 1초 동안 마이크로 소리강약을 체크하는 수를 h
// (헤르쯔, Hz 는 1초에 몇 번? 체크하는가를 의미한다.)
// 한 번 체크한 결과를 저장하는 비트 b
// (2비트를 사용하면 0 또는 1 두 가지, 16비트를 사용하면 65536가지..)
// 좌우 등 소리를 저장할 트랙 개수인 채널 c
// (모노는 1개, 스테레오는 2개의 트랙으로 저장함을 의미한다.)
// 녹음할 시간 s가 주어질 때,
// 필요한 저장 용량을 계산하는 프로그램을 작성해보

// let input = prompt().split(" ").map(Number);
// let bit = input[0]*input[1]*input[2]*input[3];
// console.log((bit/8/1024/1024).toFixed(1) + " MB");

// TODO: 1086
// 이미지의 가로 해상도 w, 세로 해상도 h, 한 픽셀을 저장하기 위한 비트 b 가 주어질 때,
// 압축하지 않고 저장하기 위해 필요한 저장 용량을 계산하는 프로그램을 작성해 보자.

// let input = prompt().split(" ").map(Number);
// let bit = input[0]*input[1]*input[2];
// console.log((bit/8/1024/1024).toFixed(2) + " MB");

// TODO: 1087
// 1, 2, 3 ... 을 순서대로 계속 더해나갈 때,
// 그 합이 입력한 정수보다 작을 동안만 계속 더하는 프로그램을 작성해보자.

// let input = Number(prompt());
// let result = 0;
// for(let i =1; i>0; i++){
//     if(result < input) {
//         result = result + i;
//     } else if (result >= input){
//         break;
//     }
// }
// console.log(result);

// TODO: 1088
// 1부터 입력한 정수까지 1씩 증가시켜 출력하는 프로그램을 작성하되,
// 3의 배수인 경우는 출력하지 않도록 만들어보자.

// let input = Number(prompt());
// let result = "";
// for(let i =1; i<=input; i++) {
//     if(i%3 == 0){
//         i == "";
//     } else {
//     result = result + i + " ";
//     }
// }
// console.log(result);

// TODO: 1089
// 시작 값(a), 등차(d), 몇 번째인지를 나타내는 정수(n)가 입력될 때
// n번째 수를 출력하는 프로그램을 만들어보자.

// let input = prompt().split(" ").map(Number);
// let result = 0;
// for(let i = 1; i<input[2]; i++) {
//     result = result + input[1];
// }
// console.log(input[0] + result);

// TODO: 1090
// 시작 값(a), 등비(r), 몇 번째인지를 나타내는 정수(n)가 입력될 때
// n번째 수를 출력하는 프로그램을 만들어보자.

// let input = prompt().split(" ").map(Number);
// let result = input[0];
// for(let i = 1; i<input[2]; i++) {
//     result = result * input[1];
// }
// console.log(result);

// TODO: 1091
// 시작 값(a), 곱할 값(m), 더할 값(d), 몇 번째인지를 나타내는 정수(n)가 입력될 때,
// n번째 수를 출력하는 프로그램을 만들어보자.

// let input = prompt().split(" ").map(Number);
// let result = input[0];
// for(let i = 1; i<input[3]; i++) {
//     result = result * input[1] + input[2];
// }
// console.log(result);

// TODO: 1092
// 온라인 채점시스템에는 초등학생, 중고등학생, 대학생, 대학원생,
// 일반인, 군인, 프로그래머, 탑코더 등 아주 많은 사람들이 들어와 문제를 풀고 있는데,

// 실시간 채점 정보는 메뉴의 채점기록(Judge Status)을 통해 살펴볼 수 있다.

// 자! 여기서...잠깐..
// 같은 날 동시에 가입한 3명의 사람들이 온라인 채점시스템에 들어와 문제를 푸는 날짜가
// 매우 규칙적이라고 할 때, 다시 모두 함께 문제를 풀게 되는 그날은 언제일까?

// let input = prompt().split(" ").map(Number);
// let result = 0;
// for (let i = 1; i>0; i++) {
//     if(i%input[0] ==0 && i%input[1]==0 && i%input[2]==0) {
//         result = result + i;
//         break;
//     }
// }
// console.log(result);

// TODO: 1093
// 출석 번호를 n번 무작위로 불렀을 때, 각 번호(1 ~ 23)가 불린 횟수를 각각 출력해보자.
// let input = prompt().split("\n");
// call1 = input[0];
// call2 = input[1].split(" ").map(Number);
// let num = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
// let result = "";
// for(let i = 0; i<call2.length; i++) {
//     num[call2[i]-1]++;
// }

// for(let i =0; i<num.length; i++) {
//     result = result + num[i] + " ";
// }
// console.log(result);

// TODO: 1094
// 출석 번호를 n번 무작위로 불렀을 때, 부른 번호를 거꾸로 출력해 보자.

// let input = prompt().split("\n");
// call1 = input[0];
// call2 = input[1].split(" ").map(Number);
// let result = "";
// for(let i =call1; i>0; i--) {
//     result = result + call2[i-1] + " ";
// }
// console.log(result);

// TODO: 1095
// 출석 번호를 n번 무작위로 불렀을 때, 가장 빠른 번호를 출력해 보자.

// let input = prompt().split("\n");
// call1 = input[0];
// call2 = input[1].split(" ").map(Number);

// console.log(Math.min(...call2));




