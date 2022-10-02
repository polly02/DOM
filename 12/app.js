// 12. Вывести в строчку все вводимые значения через инпут в виде
// массива. Добавить проверку, что поле не пустое

const btn = document.querySelector(".btn")
const arr = []

function check(input){
    if(!input.value) throw new Error("input is empty")
    return true
}

btn.addEventListener("click", () => {
let input = document.querySelector(".inp")
try {
    check(input)
    arr.push(input.value)
    document.querySelector(".res").innerHTML = `[${arr}]`
    input.value = " "
} catch (error) {
    alert(error.message)
    input.value = " "
}
})