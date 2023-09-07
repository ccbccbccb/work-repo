function setToggle() {
    let content = document.querySelector("#content");
    let check = content.classList.contains("dark");
    console.log(check);
    if(check == true) {
        content.classList.remove("dark")
        content.classList.toggle("light");
    } else {
        content.classList.remove("light")
        content.classList.toggle("dark");
    }
}