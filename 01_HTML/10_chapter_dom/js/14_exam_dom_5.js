let i = prompt();

if (i == "y") {
  document.querySelector("#app").innerHTML = "<button>글쓰기</button>";
} else {
  document.querySelector("#app").innerHTML = "<button>글수정</button>";
}
