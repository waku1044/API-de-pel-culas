import { service } from "../server/server.js";


let url = new URL(window.location);
let id = url.searchParams.get('id');

service.peliculaPorId(id)
.then(pelicula=> {
//     let content = document.querySelector('.container-fluid');
//     let template = `<div class="card mb-3">
//     <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}." class="card-img-top" alt="${pelicula.title}" />
//     <div class="card-body">
//       <h5 class="card-title">${pelicula.title}</h5>
//       <p class="card-text">
//         ${pelicula.o}
//       </p>
//       <p class="card-text">
//         <small class="text-body-secondary">Last updated 3 mins ago</small>
//       </p>
//     </div>
//   </div>`
//     content.innerHTML = template
console.log(pelicula)
})

