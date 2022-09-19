const btn=document.querySelector('.btn')
const lado1=document.querySelector('.lado1')
const lado2=document.querySelector('.lado2')
const lado3=document.querySelector('.lado3')
const res=document.querySelector('.resultado')

function determinarTipo(){
    if (lado1.value==0 && lado2.value==0 && lado3.value==0) {
        alert("opción no valida")
    }
    else if (lado1.value==lado2.value && lado1.value==lado3.value) {
        alert("Triángulo equilátero")
    }else if (lado1.value==lado2.value && lado2.value!=lado3.value || lado3.value==lado2.value && lado2.value!=lado1.value || lado1.value==lado3.value && lado3.value!=lado2.value) {
        alert("Triángulo isósceles")
    }else if(lado1.value!=lado2.value && lado2.value!=lado3.value && lado3.value!=lado1.value){
        alert("Triángulo escaleno")
    }
}

btn.addEventListener("click",determinarTipo)
