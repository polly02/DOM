// 5. Вывести в строчку все вводимые значения через инпут в виде массива. Добавить
// проверку, что поле не пустое. После каждого клика очищать значение input. Если
// вводимое значение не проходит валидацию, то на месте массива вывести
// сообщение об ошибке красным цветом

const btn = document.querySelector(".btn")
const arr = []

function check(input) {
    if (!input) throw new Error("Пустое поле")
    return true
}

btn.addEventListener("click", () => {
    let res = document.querySelector(".res")
    try {
        const input = document.querySelector(".inp")
        check(input.value)
        arr.push(input.value)
        res.innerHTML = arr
        res.style = "color: black"
        input.value = ""

    } catch (error) {
        res.innerHTML = error.message
        res.style = "color: red"
    }
})