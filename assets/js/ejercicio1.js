let palabra=document.querySelector('.input-string')
let respuesta=document.querySelector('.respuesta')

let longitud=()=>{
    // respuesta.textContent=palabra.value.length
    alert(palabra.value.length)
}

function mayus(){
    // respuesta.textContent=palabra.value.toUpperCase()
    alert(palabra.value.toUpperCase())
}

let minus=function(){
    // respuesta.textContent=palabra.value.toLowerCase()
    alert(palabra.value.toLowerCase())
}

let primer_caracter=function caracter(){
    // respuesta.textContent=palabra.value.charAt(0)
    alert(palabra.value.charAt(0))
}