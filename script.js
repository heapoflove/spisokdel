let userName = prompt("Введите свое имя:")

let myTitle = document.getElementById("title")

if (userName) {
    myTitle.innerHTML = "Привет, " + userName
} else {
    myTitle.innerHTML = "Привет, анонимный пользователь"
}
