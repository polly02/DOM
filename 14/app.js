// 2. На странице контейнер из 5 инпутов и 5 кнопок. 
// Необходимо по кнопке получить значение соответствующего 
// инпута по target

const wrapper = document.querySelector(".wrapper")

wrapper.addEventListener("cрфтпу", function (event){
    alert(event.target.value)
    event.target.value =""
})