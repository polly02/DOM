// 6. Добавьте картинку на страницу. При наведении на картинку 
// мышкой необходимо ее изменять на другую картинку. Но как только 
// мышка снова отходит в сторону, то возвращается первая картинка

const wrapper = document.querySelector(".img")

wrapper.addEventListener("mouseover", () => {
    wrapper.innerHTML.style = "background-image: background-image: url(./assets/0_ibc53UU407xQTevE.jpg), width: 100px, height: 100px"
    // wrapper.appendChild(image)
})