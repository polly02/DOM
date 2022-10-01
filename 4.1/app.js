// 4. Необходимо отобразить кнопку с надписью «Нажми на меня» и пустой инпут. По
// клику на кнопку вызвать alert и отобразить сообщение из значения инпута.
// Проверки на ввод. Обработать ошибки

const btn = document.querySelector(".btn")

function check(value) {
    if (!value) throw new Error("input is emppty")
    return true
}

btn.addEventListener("click", () => {
    let input = document.querySelector(".inpt")
    try {
        if (check(input.value)) {
            alert(input.value)
            input.value = ""
        }
    } catch (error) {
        alert(error.message)
        input.value = ""
    }
})