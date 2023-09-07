function get_pay(price,discount,shipping) {
    document.querySelector("#price").innerHTML = price + "원";
    document.querySelector("#discount").innerHTML = discount + "%";
    document.querySelector("#shipping").innerHTML = shipping + "원";
    let pay = price - (price * (discount/100)) + shipping;
    document.querySelector("#pay").innerHTML = pay + "원";
}

// 2시간 : 포트폴리오 평가 (홈페이지 만들기 : 소스파일 결과 캡쳐해서 전송)
// 문제풀이 시나리오 평가 : 자바스크립트 기본 문제 5개
// ppt 양식 : 문제해결 시나리오 풀이
// 문제 1) 1) 함수 get_pay 함수를 정의한다. (정답)
//         2) 공식 pay = price - (price * (discount/100)) + shipping;
//         적용해서 pay 변수에 넣는다.
//         3) 각각의 값을(pay, price, discount, shipping) 화면 div 출력한다.