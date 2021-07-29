let btnAumentar = document.querySelector(".btn-info")
let btnDisminuir = document.querySelector(".btn-danger")
let span = document.getElementById("span")
let contador = 0

btnAumentar.addEventListener("click",()=>{
  span.textContent = contador++

} )
btnDisminuir.addEventListener("click",()=>{
  span.textContent = contador--
})

//stopPropagation() detiene una propagacion