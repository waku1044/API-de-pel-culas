import  popap   from './modal.js';

const $usuario = document.querySelector('[data-usuario]');
const $password = document.querySelector('[data-password]');
const $btn_registro = document.querySelector('[data-registrando]')

const $email = document.querySelector('[data-email]');
const $checkbox = document.getElementById('gridCheck');

$btn_registro.addEventListener('click',handleUser);
$usuario.focus();
const dataUsuario = {
    id:'',
    usuario : '',
    password:'',
    email:'',
    genero:''

}



function obtenerValorGenero() {
    let opcion = document.getElementById("inputGenero");
    let generoSeleccionado = opcion.value;
    console.log(generoSeleccionado)
    return generoSeleccionado;
}
function validarUsuario(){
    let valido = false;
    if($usuario.value.length >= 4){
        valido = true;
    }
    return valido;
}
function validarPassword(){
    let $repetirPassword = document.querySelector('[data-repetir-password]').value;
    let valido = false;
    if($password.value.length >= 6 && ($password.value == $repetirPassword)){
        valido = true;
    }
    return valido;
}
function validarEmail(){
    let valido = false;
    let expresion = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if(expresion.test($email.value)){
        valido = true;
    }
    return valido;
}
function validarCampos(){
    let esCorrecto = true;
    let msj = 'Corrija los siguientes campos: <br>';
    if(!validarUsuario()){
        msj += '- Usuario <br>';
        esCorrecto = false;
    }
    if(!validarPassword()){
        msj += '- Password / repetir Password <br>';
        esCorrecto = false;
    }
    if(!validarEmail()){
        msj += '- Email <br>';
        esCorrecto = false;
    }
    if(!$checkbox.checked){
        msj += '- Confirmacion de los datos ingresados.<br>';
        esCorrecto = false;
    }
    if(!esCorrecto){
        popap(msj,'danger');
        
    }else{
        popap('Los datos ingresados en el formulario fueron exitosos.','exit')
        setTimeout(()=>{
            dataUsuario.usuario = $usuario.value;
            localStorage.setItem('usuario',$usuario.value);
            dataUsuario.password = $password.value;
            localStorage.setItem('password',$password.value)
            dataUsuario.email = $email.value;
            localStorage.setItem('email',$email.value)
            dataUsuario.genero = obtenerValorGenero();
            localStorage.setItem('genero',dataUsuario.genero)
            window.location.href = './login.html'
            
        },3000)
}
}
function handleUser(e){
    e.preventDefault();
    validarCampos(); 
    
}