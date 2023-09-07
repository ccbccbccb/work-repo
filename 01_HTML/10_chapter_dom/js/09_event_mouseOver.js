// js 함수정의
function changeText(event) {
    // event.target == 현재 클릭한 태그
    // 클릭하면 문자열 변경 : 클릭해 보세요! -> 클릭하셨네요!
    event.target.innerHTML = "클릭하셨네요!";
}

// 마우스 위로 함수 : 배경색 변경 (오렌지)
function mouseOver(event) {
    // event.target == 현재 마우스 위로 올라간 태그
    event.target.style.backgroundColor = "orange";
}

// 마우스 나갔을떄 함수 : 배경색 변경 (하늘색)
function mouseOut(event) {
    // event.target == 현재 마우스 위로 올라간 태그
    event.target.style.backgroundColor = "skyblue";
}