import  popap  from "./modal.js";

let $usuario = document.querySelector('#inputUsuario');
let $password = document.querySelector('#inputPassword');
let usuarioRegistrado = localStorage.getItem('usuario');
let passwordRegistrado = localStorage.getItem('password');
let btn_entrar = document.querySelector('[data-entrar]');
const eye = document.querySelector('.eye');

$usuario.focus();

function handleEye(){
    if($password.type == 'password'){
        $password.type = 'text';
        eye.attributes.name.value ='eye-off-outline';
    }else{
        $password.type = 'password';
        eye.attributes.name.value = 'eye-outline';
    }
}
eye.addEventListener('click',handleEye);
function validarRegistro(e){
    e.preventDefault();
    
    if($usuario.value == usuarioRegistrado && $password.value == passwordRegistrado){
        popap('Bienvenido a Cyrak-Movie','exit');
        setTimeout(()=>{window.location.href = './home.html';},3000)
        
    }else{
        popap(`Usuario / Password.<br>No se encuentra en nuestra base de datos.`, 'danger')
    }
}
btn_entrar.addEventListener('click',validarRegistro);
