import cargarPeliculas from '../server/server.js';
let usuarioRegistrado = localStorage.getItem('usuario');
let $section = document.querySelector('#section');

document.querySelector('[data-usuario-registrado]').innerText = usuarioRegistrado;


cargarPeliculas($section)

