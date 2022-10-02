// 1. На странице расположен маркированный список. Пользователь кликает на
// каждый item списка. Необъодимо отловить на какой из элементов нажал
// пользователь и отобразить

const ul = document.querySelector(".ul")
ul.addEventListener("click", (event) => {
    document.querySelector(".res").innerHTML = event.target.textContent
})