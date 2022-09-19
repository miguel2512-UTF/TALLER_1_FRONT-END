const form=document.getElementById('form-usuario')
const campos=document.querySelectorAll('#form-usuario input')

const reglas={
    numeros: /^[0-9]{5,}/,
    nombre: /^[a-zA-Z0-9]/,
    apellido: /^[a-zA-Z0-9]/,
    vacio: /^[a-z]{1,}/
}

const inputs={
    tipodoc: false,
    documento: false,
    nombre: false,
    apellido: false,
    correo: false,
    password: false
}

form.addEventListener("submit",e =>{
    e.preventDefault()

    const terminos=document.getElementById('terminos')

    if (inputs.tipodoc && inputs.documento && inputs.nombre && inputs.apellido && inputs.correo && inputs.password && terminos.checked) {
        alert("El usuario ha sido registrado correctamente")
        form.reset()
        document.querySelectorAll('.success').forEach((icono)=>{
            icono.classList.remove('success');
        })
    }else{
        document.querySelector('.form-no-enviado').classList.add('activo')
    }
})

const validarCampos=(e)=>{
    switch (e.target.name) {
        case "tipodoc":
            validarInput(reglas.vacio,e.target,e.target.name)
        break;
        case "documento":
            validarInput(reglas.numeros,e.target,e.target.name)
        break;
        case "nombre":
            validarInput(reglas.nombre,e.target,e.target.name)
        break;
        case "apellido":
            validarInput(reglas.apellido,e.target,e.target.name)
        break;
    }
}

campos.forEach((campo) => {
    campo.addEventListener("keyup", validarCampos)
    campo.addEventListener("blur", validarCampos)
});

const validarInput=(regla,input,grupo)=>{
    if (regla.test(input.value)) {
        document.querySelector(`.g-${grupo}`).classList.remove('error')
        document.querySelector(`.g-${grupo}`).classList.add('success')
        inputs[grupo]=true
    }else{
        document.querySelector(`.g-${grupo}`).classList.add('error')
        document.querySelector(`.g-${grupo}`).classList.remove('success')
        inputs[grupo]=false
    }
}

const validarPassword=()=>{
    const pass1=document.querySelector('.password')
    const pass2=document.querySelector('.password2')

    if (pass1.value===pass2.value) {
        document.querySelector(`.g-${grupo}`).classList.remove('error')
        document.querySelector(`.g-${grupo}`).classList.add('success')
        inputs['password']=true
    }else{
        document.querySelector(`.g-${grupo}`).classList.add('error')
        document.querySelector(`.g-${grupo}`).classList.remove('success')
        inputs['password']=false
    }
}