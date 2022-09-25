const form=document.getElementById('form-usuario')
const campos=document.querySelectorAll('#form-usuario input')

const reglas={
    numeros: /^[0-9]{10,10}$/,
    nombre: /^[A-Za-zñÀ-ÿ ]{1,20}$/,
    apellido: /^[A-Za-zñÀ-ÿ ]{1,20}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
}

const inputs={
    documento: false,
    nombre: false,
    apellido: false,
    correo: false,
    password: false
}

form.addEventListener("submit",e =>{
    e.preventDefault()

    const terminos=document.getElementById('terminos')

    if (inputs.documento && inputs.nombre && inputs.apellido && inputs.correo && inputs.password && terminos.checked) {
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
        case "documento":
            validarInput(reglas.numeros,e.target,e.target.name)
        break;
        case "nombre":
            validarInput(reglas.nombre,e.target,e.target.name)
        break;
        case "apellido":
            validarInput(reglas.apellido,e.target,e.target.name)
        break;
        case "correo":
            validarInput(reglas.correo,e.target,e.target.name)
        break;
        case "password":
            validarInput(reglas.password,e.target,e.target.name)
        break;
        case "password2":
            validarPassword()
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
        document.querySelector(`#grupo__${grupo} .error__message`).classList.remove('activo')
        inputs[grupo]=true
    }else{
        document.querySelector(`.g-${grupo}`).classList.add('error')
        document.querySelector(`.g-${grupo}`).classList.remove('success')
        document.querySelector(`#grupo__${grupo} .error__message`).classList.add('activo')
        inputs[grupo]=false
    }
}

const validarPassword=()=>{
    const pass1=document.querySelector('.g-password')
    const pass2=document.querySelector('.g-password2')

    if (pass1.value===pass2.value) {
        document.querySelector(`.g-password2`).classList.remove('error')
        document.querySelector(`.g-password2`).classList.add('success')
        document.querySelector(`#grupo__password2 .error__message`).classList.remove('activo')
        inputs['password']=true
    }else{
        document.querySelector(`.g-password2`).classList.add('error')
        document.querySelector(`.g-password2`).classList.remove('success')
        document.querySelector(`#grupo__password2 .error__message`).classList.add('activo')
        inputs['password']=false
    }
}