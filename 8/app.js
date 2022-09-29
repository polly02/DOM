// 8. У вас есть кнопка. После нажатия поменять background.

const btn = document.querySelector(".btn")
const obj = {
    1: "black",
    2: "red",
    3: "white",
    4: "blue",
    5: "yellow"
}

btn.addEventListener("click", () => {
    btn.style = `background-color: ${obj[Math.ceil(Math.random() * Object.entries(obj).length)]}`
})