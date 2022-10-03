// 7. Вы вводите строку. Проверить является ли это слово палиндром. 
// Добавить проверки

const btn = document.querySelector(".btn")

function check(input) {
    if (!input) throw new Error("input is empty")
    if (!isNaN(input)) throw new Error("incorrect input")
    return true
}

btn.addEventListener("click", () => {
    let res = document.querySelector(".res")
    let input = document.querySelector(".inp")
    try {
        check(input.value)
        if (input.value.split("").reverse().join("") === input.value) {
            res.innerHTML = `Результат: \tЭто палиндром`
        } else {
            res.innerHTML = `Результат: \tЭто не палиндром`
        }
        input.value = ""
    } catch (error) {
        res.innerHTML = error.message
        input.value = ""
    }
})