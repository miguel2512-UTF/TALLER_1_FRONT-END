const btnTrianguloArea=document.querySelector('.triangulo-a')
const btnTrianguloPerimetro=document.querySelector('.triangulo-p')
const btnCirculoPerimetro=document.querySelector('.circulo-p')
const btnCirculoArea=document.querySelector('.circulo-a')
const btnRectanguloPerimetro=document.querySelector('.rectangulo-p')
const btnRectanguloArea=document.querySelector('.rectangulo-a')
const btnCuadradoPerimetro=document.querySelector('.cuadrado-p')
const btnCuadradoArea=document.querySelector('.cuadrado-a')

const lado1=document.querySelector('.lado1')
const lado2=document.querySelector('.lado2')
const lado3=document.querySelector('.lado3')
const base=document.querySelector('.base')
const altura=document.querySelector('.altura')
const radio=document.querySelector('.radio')
const radioA=document.querySelector('.radio-a')
const lado1R=document.querySelector('.lado1-r')
const lado2R=document.querySelector('.lado2-r')
const lado3R=document.querySelector('.lado3-r')
const lado4R=document.querySelector('.lado4-r')
const baseR=document.querySelector('.base-r')
const alturaR=document.querySelector('.altura-r')
const ladoC=document.querySelector('.lado-c')
const ladoCA=document.querySelector('.lado-c-a')

const resTrianguloArea=document.querySelector('.resultado-t-a')
const resTrianguloPerimetro=document.querySelector('.resultado-t-p')
const resCirculoPerimetro=document.querySelector('.resultado-ci-p')
const resCirculoArea=document.querySelector('.resultado-ci-a')
const resRectanguloPerimetro=document.querySelector('.resultado-r-p')
const resRectanguloArea=document.querySelector('.resultado-r-a')
const resCuadradoPerimetro=document.querySelector('.resultado-c-p')
const resCuadradoArea=document.querySelector('.resultado-c-a')


function trianguloPerimetro(){   
    resTrianguloPerimetro.textContent=parseFloat(lado1.value)+parseFloat(lado2.value)+parseFloat(lado3.value)
}

function trianguloArea(){   
    resTrianguloArea.textContent=(parseFloat(base.value)*parseFloat(altura.value))/2
}

function circuloPerimetro(){
    resCirculoPerimetro.textContent=2*3.16*parseFloat(radio.value)
}

function circuloArea(){
    resCirculoArea.textContent=3.16*parseFloat(radioA.value)*parseFloat(radioA.value)
}

function rectanguloPerimetro(){
    resRectanguloPerimetro.textContent=parseFloat(lado1R.value)+parseFloat(lado2R.value)+parseFloat(lado3R.value)+parseFloat(lado4R.value)
}

function rectanguloArea(){
    resRectanguloArea.textContent=parseFloat(baseR.value)*parseFloat(alturaR.value)
}

function cuadradoPerimetro(){
    resCuadradoPerimetro.textContent=parseFloat(ladoC.value)*4
}

function cuadradoArea(){
    resCuadradoArea.textContent=parseFloat(ladoCA.value)*parseFloat(ladoCA.value)
}

btnTrianguloPerimetro.addEventListener("click",trianguloPerimetro)
btnTrianguloArea.addEventListener("click",trianguloArea)
btnCirculoPerimetro.addEventListener("click",circuloPerimetro)
btnCirculoArea.addEventListener("click",circuloArea)
btnRectanguloPerimetro.addEventListener("click",rectanguloPerimetro)
btnRectanguloArea.addEventListener("click",rectanguloArea)
btnCuadradoPerimetro.addEventListener("click",cuadradoPerimetro)
btnCuadradoArea.addEventListener("click",cuadradoArea)