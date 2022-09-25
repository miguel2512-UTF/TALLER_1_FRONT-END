const form=document.getElementById('form-login')
const campos=document.querySelectorAll('#form-login input')

const reglas={
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    contrasena: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
}

const inputs={
    correo: false,
    contrasena: false
}

form.addEventListener("submit",e =>{
    e.preventDefault()

    if (inputs.correo && inputs.contrasena) {
        alert("Inicio de sesión exitoso")
        location.href="principal.html";
        form.reset()
        document.querySelectorAll('.success').forEach((a)=>{
            a.classList.remove('success');
        })
    }else{
        document.querySelector('.form-error').classList.add('activo')
    }
})

const validarCampos=(e)=>{
    switch (e.target.name) {
        case "correo":
            validarInput(reglas.correo, e.target, e.target.name)
            break;
        case "contrasena":
            validarInput(reglas.contrasena, e.target, e.target.name)
            break;
    }
}

campos.forEach((input) => {
    input.addEventListener("keyup", validarCampos)
    input.addEventListener("blur", validarCampos)
});

const validarInput=(regla,input,nombre)=>{
    if (regla.test(input.value)) {
        document.querySelector(`#input-${nombre}`).classList.remove('error')
        document.querySelector(`#input-${nombre}`).classList.add('success')
        document.querySelector(`.grupo__${nombre} .validate__message`).classList.remove('activo')
        inputs[nombre]=true
    }else{
        document.querySelector(`#input-${nombre}`).classList.add('error')
        document.querySelector(`#input-${nombre}`).classList.remove('success')
        document.querySelector(`.grupo__${nombre} .validate__message`).classList.add('activo')
        inputs[nombre]=false
    }
}