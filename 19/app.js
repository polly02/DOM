// 6. Добавьте картинку на страницу. При наведении на картинку 
// мышкой необходимо ее изменять на другую картинку. Но как только 
// мышка снова отходит в сторону, то возвращается первая картинка

const wrapper = document.querySelector(".img")

wrapper.addEventListener("mouseover", ()=>{
    image.src = "./assets/0_ibc53UU407xQTevE.jpg"
    wrapper.appendChild(image)
})