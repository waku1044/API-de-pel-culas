import  popap  from "./modal.js";

let $usuario = document.querySelector('#inputUsuario');
let $password = document.querySelector('#inputPassword');
let usuarioRegistrado = localStorage.getItem('usuario');
let passwordRegistrado = localStorage.getItem('password');
let btn_entrar = document.querySelector('[data-entrar]');

$usuario.focus();

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
