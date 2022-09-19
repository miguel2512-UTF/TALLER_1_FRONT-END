const nombre=document.querySelector('.nombre')
const apellido=document.querySelector('.apellido')
const actividad=document.querySelector('.actividad')
const btn=document.querySelector('.btn')

let comprobar=()=>{
    if (nombre.options[nombre.selectedIndex].text=='Seleccionar') {
        alert("opción no valida")
    }
    else if (nombre.options[nombre.selectedIndex].value=='tatiana') {
        if (apellido.options[apellido.selectedIndex].text=='Seleccionar') {
            alert("opción no valida")
        }
        else if (apellido.options[apellido.selectedIndex].value=='cabrera') {
            if (actividad.options[actividad.selectedIndex].text=='Seleccionar') {
                alert("opción no valida")
            }
            else if (actividad.options[actividad.selectedIndex].value=='metricas' || actividad.options[actividad.selectedIndex].value=='frontend') {
                alert("Respuesta Correcta!")
            }
            else{
                alert("Respuesta Incorrecta!")
            }
        }
        else{
            alert("Respuesta Incorrecta!")
        }
    }
    else if (nombre.options[nombre.selectedIndex].value=='carolina') {
        if (apellido.options[apellido.selectedIndex].text=='Seleccionar') {
            alert("opción no valida")
        }
        else if (apellido.options[apellido.selectedIndex].value=='forero') {
            if (actividad.options[actividad.selectedIndex].text=='Seleccionar') {
                alert("opción no valida")
            }
            else if (actividad.options[actividad.selectedIndex].value=='proyecto') {
                alert("Respuesta Correcta!")
            }
            else{
                alert("Respuesta Incorrecta!")
            }
        }
        else{
            alert("Respuesta Incorrecta!")
        }
    }
    else if (nombre.options[nombre.selectedIndex].value=='adriana') {
        if (apellido.options[apellido.selectedIndex].text=='Seleccionar') {
            alert("opción no valida")
        }
        else if (apellido.options[apellido.selectedIndex].value=='duarte') {
            if (actividad.options[actividad.selectedIndex].text=='Seleccionar') {
                alert("opción no valida")
            }
            else if (actividad.options[actividad.selectedIndex].value=='diseño') {
                alert("Respuesta Correcta!")
            }
            else{
                alert("Respuesta Incorrecta!")
            }
        }
        else{
            alert("Respuesta Incorrecta!")
        }
    }
    else if (nombre.options[nombre.selectedIndex].value=='yaneth') {
        if (apellido.options[apellido.selectedIndex].text=='Seleccionar') {
            alert("opción no valida")
        }
        else if (apellido.options[apellido.selectedIndex].value=='castillo') {
            if (actividad.options[actividad.selectedIndex].text=='Seleccionar') {
                alert("opción no valida")
            }
            else if (actividad.options[actividad.selectedIndex].value=='ambiental') {
                alert("Respuesta Correcta!")
            }
            else{
                alert("Respuesta Incorrecta!")
            }
        }
        else{
            alert("Respuesta Incorrecta!")
        }
    }
    else if (nombre.options[nombre.selectedIndex].value=='jonathan') {
        if (apellido.options[apellido.selectedIndex].text=='Seleccionar') {
            alert("opción no valida")
        }
        else if (apellido.options[apellido.selectedIndex].value=='espitia') {
            if (actividad.options[actividad.selectedIndex].text=='Seleccionar') {
                alert("opción no valida")
            }
            else if (actividad.options[actividad.selectedIndex].value=='php') {
                alert("Respuesta Correcta!")
            }
            else{
                alert("Respuesta Incorrecta!")
            }
        }
        else{
            alert("Respuesta Incorrecta!")
        }
    }
    else if (nombre.options[nombre.selectedIndex].value=='luis') {
        if (apellido.options[apellido.selectedIndex].text=='Seleccionar') {
            alert("opción no valida")
        }
        else if (apellido.options[apellido.selectedIndex].value=='baquero') {
            if (actividad.options[actividad.selectedIndex].text=='Seleccionar') {
                alert("opción no valida")
            }
            else if (actividad.options[actividad.selectedIndex].value=='cfisica') {
                alert("Respuesta Correcta!")
            }
            else{
                alert("Respuesta Incorrecta!")
            }
        }
        else{
            alert("Respuesta Incorrecta!")
        }
    }
    else if (nombre.options[nombre.selectedIndex].value=='fernando') {
        if (apellido.options[apellido.selectedIndex].text=='Seleccionar') {
            alert("opción no valida")
        }
        else if (apellido.options[apellido.selectedIndex].value=='galindo') {
            if (actividad.options[actividad.selectedIndex].text=='Seleccionar') {
                alert("opción no valida")
            }
            else if (actividad.options[actividad.selectedIndex].value=='basesdedatos') {
                alert("Respuesta Correcta!")
            }
            else{
                alert("Respuesta Incorrecta!")
            }
        }
        else{
            alert("Respuesta Incorrecta!")
        }
    }
}

btn.addEventListener("click",comprobar)
