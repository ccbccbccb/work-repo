// 연습문제
// h1 태그 1개만 선택해서 아래와 같이 변경하세요
// style.color = "orange"
// style.background = "red"
// innerHTML = "From JavaScript"

// let h1 = document.querySelector("h1");
// h1.style.color = "orange";
// h1.style.backgroundColor = "red";
// h1.innerHTML = "From JavaScript";

// 2) h1 태그 모두 선택해서 아래와 같이 조작하세요
// style.color = "orange"
// style.background = "red"
// innerHTML = "From JavaScript"

// css (있는 html 태그에만 디자인 적용)
// js (없는 것을 다른 것으로 조작할때 주로 사용)

let h1 = document.querySelectorAll("h1");
for (let i = 0; i < h1.length; i++) {
  h1[i].style.color = "orange";
  h1[i].style.backgroundColor = "red";
  h1[i].innerHTML = "From JavaScript";
}
