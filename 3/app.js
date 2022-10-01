// 3. Необходимо отобразить кнопку с надписью «Нажми на меня» и пустой инпут. По
// клику на кнопку вызвать alert и отобразить сообщение из значения инпута

const btn = document.querySelector(".btn")


function isValid(value) {
    if (!value) throw new Error("input is empty")
    if (!/^\+[0-9]{3}\([0-9]{2}\)[0-9]{3}-[0-9]{2}-[0-9]{2}$/g.test(value)) throw new Error("incorrect input")
    return true
}

btn.addEventListener("click", () => {
    let input = document.querySelector(".inp");
    try {
        if (isValid(input.value)) {
            input.style = "border: 1px solid black"
            alert(input.value)
            input.value = " "
        }
    } catch (error) {
        alert(error.message)
        input.value = " "
    }
})