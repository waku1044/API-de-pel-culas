let $usuario = document.querySelector('#inputUsuario');
let $password = document.querySelector('#inputPassword');
let usuarioRegistrado = localStorage.getItem('usuario');
let passwordRegistrado = localStorage.getItem('password');
let btn_entrar = document.querySelector('[data-entrar]');

function validarRegistro(e){
    e.preventDefault();
    
    if($usuario.value == usuarioRegistrado && $password.value == passwordRegistrado){
        alert('Bienvenido a Cyrak-Movie');
        window.location.href = './home.html';
    }else{
        alert('Usuario / Password.\nNo se encuentra en nuestra base de datos.')
    }
}
btn_entrar.addEventListener('click',validarRegistro);
