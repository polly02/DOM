// 7. Записать в результат удвоенное значение инпута. 
// Добавить проверки 

const btn = document.querySelector(".btn")

function check(value) {
    if (!/^-[0-9]+$/) throw new Error("value is not a number") //?
    return true
}

btn.addEventListener("click", () => {
    try {
        let inp = document.querySelector(".inp")
        if (check(inp)) {
            document.querySelector(".res").innerHTML = inp.value * 2
            inp.value = ""
        }
    } catch (error) {
        alert(error.message)
    }
})