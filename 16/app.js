// 4. По двойному клику на кнопку изменить цвет кнопки

// const btn = document.querySelector(".btn")

// const obj = {}
// let arr = []

// function isValid(input) {
//     if (!/^[a-z]{1,3}\/[0-9]{6}-[a-z]{3}$/g.test(input)) throw new Error("incorrect input")
// }

// btn.addEventListener("dblclick", () => {
//     try {
//         const input = document.querySelector(".inp")
//         isValid(input.value)

//         if (!arr.includes(input.value)) arr.push(input.value)

//         for (const item of arr) {
//             const newEl = document.createElement("p")
//             newEl.textContent = item
//             document.querySelector(".res").appendChild(newEl)
//         }
//         // document.querySelector(".res").innerHTML = arr
//         input.value = ""
//         arr = []

//     } catch (error) {
//         alert(error.message)
//     }
// })

const btn = document.querySelector(".btn")

let obj = {}

function isValid(input) {
    if (!/^[a-z]{1,3}\/[0-9]{6}-[a-z]{3}$/g.test(input)) throw new Error("incorrect input")
}

btn.addEventListener("dblclick", () => {
    try {
        const input = document.querySelector(".inp")
        isValid(input.value)

        for (const key in obj) {
            if (obj[key] === input.value) throw new Error("Такая группа уже есть")
        }
        obj = {}
        obj[Math.random() * 100] = input.value
        // document.querySelector(".res").innerHTML = JSON.stringify(obj)

        for (const key in obj) {
            const newEl = document.createElement("p")
            newEl.textContent = obj[key]
            document.querySelector(".res").appendChild(newEl)
        }
        document.querySelector(".res").style = "border: 1px solid red"
        input.value = ""
        // obj = {}

    } catch (error) {
        alert(error.message)
        input.value = ""
    }
})