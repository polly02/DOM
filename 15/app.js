// 3. По наведению на кнопку вывести сообщение «Hi». Когда 
// мышка выходит за
// границы кнопки сновка скрывать

const btn = document.querySelector(".btn")

btn.addEventListener("mouseover", () => {
    document.querySelector(".res").innerHTML = "Hi"
})

btn.addEventListener("mouseout", ()=>{
    document.querySelector(".res").innerHTML = ""
})