const input = document.querySelector('.text')
const ul = document.querySelector('.list')


$(".add").click(()=> {
    const li = document.createElement('li')
    li.setAttribute("class", "new-li")
    li.appendChild(document.createTextNode(input.value))
    li.innerHTML = `${input.value}`
    ul.appendChild(li)
    input.value = ""
    li.addEventListener('click', function(){
        li.style.textDecoration = "line-through"
    })
    li.addEventListener('dblclick', function(){
    ul.removeChild(li)
})
})

/* 
$(".delete").click(() => {
    const item = document.querySelector(".new-li")
    ul.removeChild(item)
})
 */