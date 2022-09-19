const temperatura=document.querySelector('.temperatura')
const btn=document.querySelector('.convertir')
const opcion1=document.querySelector('.convertirDe')
const opcion2=document.querySelector('.deseaConvertir')
let resultado=document.querySelector('.resultado');

function calcularTemp(){
    if (opcion1.options[opcion1.selectedIndex].text=='Seleccionar') {
        alert('opción no valida')
    }
    else if (opcion1.options[opcion1.selectedIndex].value=='fahrenheit') {
        if (opcion2.options[opcion2.selectedIndex].textContent=="Seleccionar") {
            alert('opción no valida')
        }else if (opcion2.options[opcion2.selectedIndex].value=="fahrenheit") {
            alert("No puedes pasar de fahrenheit a fahrenheit")
        }else if (opcion2.options[opcion2.selectedIndex].value=="celsius") {
            resultado.textContent=(temperatura.value-32)/1.8+"°C"
        }else if (opcion2.options[opcion2.selectedIndex].value=="kelvin") {
            resultado.textContent=(temperatura.value-32)/1.8+273.15+"°K"
        }
    }
    else if (opcion1.options[opcion1.selectedIndex].value=='celsius') {
        if (opcion2.options[opcion2.selectedIndex].textContent=="Seleccionar") {
            alert('opción no valida')
        }else if (opcion2.options[opcion2.selectedIndex].value=="fahrenheit") {
            resultado.textContent=temperatura.value*1.8+32+"°F"
        }else if (opcion2.options[opcion2.selectedIndex].value=="celsius") {
            alert('No puedes pasar de celsius a celsius')
        }else if (opcion2.options[opcion2.selectedIndex].value=="kelvin") {
            resultado.textContent=parseFloat(temperatura.value)+273.15+"°K"
        }
    } 
    else if (opcion1.options[opcion1.selectedIndex].value=='kelvin') {
        if (opcion2.options[opcion2.selectedIndex].textContent=="Seleccionar") {
            alert('opción no valida')
        }else if (opcion2.options[opcion2.selectedIndex].value=="fahrenheit") {
            resultado.textContent=(temperatura.value-273.15)*1.8+32+"°F"
        }else if (opcion2.options[opcion2.selectedIndex].value=="celsius") {
            resultado.textContent=temperatura.value-273.15+"°C"
        }else if (opcion2.options[opcion2.selectedIndex].value=="kelvin") {
            alert('No puedes pasar de kelvin a kelvin')
        }
    } 
}

btn.addEventListener('click',calcularTemp)
temperatura.addEventListener('keypress', function(event){
    if (event.key === "Enter") {
        btn.click();
    }
})