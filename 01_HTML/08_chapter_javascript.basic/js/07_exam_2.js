// 문제 풀이
// 1) 입력된 단어를 입력된 횟수만큼 반복해 출력하세요
// 입력 1 : love
// 입력 2 : 3
// 출력 : lovelovelove

// let char = prompt();
// let count = Number(prompt());
// let str = "";
// for(let i = 1; i <= count; i++){
//     str = str+char;
// }
// console.log(str);

// 2) 입력 : 없음
//    출력 : "!@#$%^&*()"
// 문자열 : "", '', 2개 모두 사용 가능
// alert('"!@#$%^&*()"');

// 3) 입력 : 없음
//    출력 : "C:\Download\hello.cpp"
// 힌트 : 특수문자 출력방법 : \\
// alert('"C:\\Download\\hello.cpp"');

// 4) 입력 : 1.414213
//    출력 : 1.414213
// let num = Number(prompt());
// alert(num);

// 5) 입력 : 1.59254
//    출력 : 1.59
// 힌트 : 소수점 자르기 함수 : 숫자.toFixed(자를자리수)
// let num = Number(prompt());
// alert(num.toFixed(2));

// 6) 입력 : 125
//    출력 : 125 125 125
// let num = Number(prompt());
// alert(num + " " + num + " " + num);

// 자료형 : 배열 (간략설명)
// 자료형 : 문자열(String), 숫자(number), 참/거짓(boolean/bool)
//           배열
// 변수 : 변하는 값을 저장하는 장소(1가지 값만 저장함) , let 변수명
// 배열 : 여러가지 값을 저장하는 장소 , 변수명 동일하게 사용
//        인덱스번호
// 사용법 : 변수명[인덱스번호]
// 보충설명 : a[0] == 0번방의 값, a[1]  == 1번방의 값
// 예) a[0] = 1, a[1] = 2, .....

// 예제 7) 입력 = 1 2
//         출력 = 2 1
// 자바스크립트에서 문자열 자르기 함수 : 문자열.split("자를문자");
// let arr = prompt("두 정수를 입력해 주세요").split(" ");
// arr(배열), arr[0] = 1 , arr[1] = 2
//     alert(arr[1] + " " + arr[0]); // 2 1

// 7) 입력 : A b
//    출력 : b A
// 힌트 : let 변수 = 문자열.split("자를문자") 사용할 것
// let arr = prompt().split(" "); // A b => 배열로 잘림
// arr[0] = "A" , arr[1] = "b"
// alert(arr[1] + " " + arr[0]);

// 8) 입력 : 3:16
//    출력 : 3:16
// let num = prompt();
// alert(num);

// 9) 입력 : 2013.8.5 (고정)
//    출력 : 2013.08.05
// 힌트 : 문자열 자르기 함수 : 문자열.split("자를문자");
// let num = prompt().split(".");
// alert(num[0] + ".0" + num[1] + ".0" + num[2]);
// 그냥 참고) .slice(-2) 끝자리 자르기

// 10) 입력 : 000907-1121112
// 10) 출력 : 0009071121112
// let num = prompt().split("-");
// alert(num[0] + num[1]);

// 11) 입력 : Programming is very fun!!
// 11) 출력 : Programming is very fun!!
// let str = prompt();
// alert(str);

// 12) 입력 : 1.414213
//     출력 : 1
// 문제가 실수라서 Number() 안됨 : split() 문자열만 잘림(숫자 안됨)
// let num = Number(prompt());
// alert(num.toFixed(0));

// 13) 입력 : Boy
//     출력 : 'B'
//            'o'
//            'y'
// 힌트 : Boy (문자열) : 1문자의 합 == 문자들의 배열
//      let arr = "Boy" -> arr[0] = "B" ,arr[2] = "o" arr[1] = "y";
// let boy = prompt();
// let arr = "'" + boy[0]+ "'\n'" + boy[1] + "'\n'" + boy[2] +"'";
// alert(arr);

// 14) 두 정수의 합을 출력한다.
// 입력 1 : 2147483648
// 입력 2 : 2147483648
// 출력   : 4294967296
// let num1 = Number(prompt());
// let num2 = Number(prompt());
// let num3 = num1 + num2;
// alert(num3);

// 15) 입력 : 75254
//           숫자문자열 : "75254"
//               "75254" == "7" + "5" + "2" + "5" + "4"
//                       배열[0] + 배열[1] ... + 배열[4]
//     let aaa = "75254";
//        aaa[0] == "7";
//        aaa[1] == "5";
//        alert(aaa[3]) // 5
//     출력 : [70000]
//            [5000]
//            [200]
//            [50]
//            [4]

// let aaa = prompt();
// let aaa0 = "[" + aaa[0] + "0000]\n";
// let aaa1 = "[" + aaa[1] + "000]\n";
// let aaa2 = "[" + aaa[2] + "00]\n";
// let aaa3 = "[" + aaa[3] + "0]\n";
// let aaa4 = "[" + aaa[4] + "]\n";
// let aaaa = (aaa0 + aaa1 + aaa2 + aaa3 + aaa4);
// alert(aaaa);


