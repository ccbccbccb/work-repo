let picture = document.querySelector("#container");

picture.addEventListener("mouseover", function () {
  document.querySelector("#cover").src = "./img/boy.jpg";
})

picture.addEventListener("mouseout", function () {
  document.querySelector("#cover").src = "./img/girl.jpg";
})
