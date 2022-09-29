const btn = document.querySelector(".btn")
const arr = []

function check(input) {
    if (!input.value) throw new Error("error")
    if(isNaN(input.value)) throw new Error("not a number")
}

btn.addEventListener("click", () => {
    let input = document.querySelector(".inp") //здесь value не пишем, 
    // т.к. прерывается связь с домом
    // ведь value это значение, а не элемент дома
    try {
        check(input)
        arr.push(input.value)
        document.querySelector(".res").innerHTML = `Вы ввели:${arr}`
        input.style = "border: 1px solid black"
        input.value = " "
    } catch (error) {
        alert(error.message)
        input.style = "border: 1px solid red"
        input.value = " "
    }
})