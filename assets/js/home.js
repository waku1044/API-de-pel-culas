import {service} from '../server/server.js';
let usuarioRegistrado = localStorage.getItem('usuario');



document.querySelector('[data-usuario-registrado]').innerText = usuarioRegistrado;

service.cargarPeliculas(1)



