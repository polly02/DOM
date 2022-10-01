// 11. По нажатию на кнопку поменять местами значения 2 инпутов. 

const btn = document.querySelector(".btn")
const inp1 = document.querySelector(".inp-1")
const inp2 = document.querySelector(".inp-2")

btn.addEventListener("click", () => {
    inp1.value = inp2.value
    inp2.value = inp1.value
})