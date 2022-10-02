// 5. Необходимо отобразить числовой инпут и кнопку. После нажатия на кнопку
// необходимо получить значение из инпута. Проверить, что это число > 0. Если
// проверка true, то вывести в Результат ряд Фибоначчи. Рекурсия

const btn = document.querySelector(".btn")

function check(value) {
    if (value.value <= 0) throw new Error("incorrect input")
    return true
}

function getFibonacci(n){
    if(n == 1) return 0;  
    if(n == 2) return 1;  
    return getFibonacci(n-1) + getFibonacci(n-2); 
  }

btn.addEventListener("click", () => {
    let input = document.querySelector(".input")
    try {
        if (check(input)) {
            const arr = [];
            for(let i = 1; i <= input.value; i++) {
                arr[i-1] = getFibonacci(i); 
            }
            document.querySelector(".res").innerHTML = `Результат: \t${arr}`
            input.value = ""
        }
    } catch (error) {
        alert(error.message)
    }
})