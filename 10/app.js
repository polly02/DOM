// 10. После нажатия на кнопку «Разблокировать» мы можем вносить изменения в
// инпут. После нажатия на заблокировать данное действие запрещается, тем
// самым выключая возможность редактирования значения инпута

const btnBlock = document.querySelector(".btn-block")
const btnUnblock = document.querySelector(".btn-unblock")
const input = document.querySelector(".inp")

btnBlock.addEventListener("click", () => {
    input.disabled = true
})

btnUnblock.addEventListener("click", () => {
    input.disabled = false
})