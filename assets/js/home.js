import cargarPeliculas from '../server/server.js';
let usuarioRegistrado = localStorage.getItem('usuario');


document.querySelector('[data-usuario-registrado]').innerText = usuarioRegistrado;


cargarPeliculas()

