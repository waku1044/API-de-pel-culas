import { service } from "../server/server.js";


let url = new URL(window.location);
let id = url.searchParams.get('id');
console.log('new URL(windowLocation): '+url)
console.log('url.searchParams.get(id): '+id)

service.peliculaPorId(id)
.then(pelicula =>{
    let article = document.querySelector('[data-article]')
   let  template = `<div class="card mb-3 bg-warning mx-auto w-50">
   <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" class="card-img-top mx-auto" alt="${pelicula.title}">
   <div class="card-body">
     <h5 class="card-title">${pelicula.title}</h5>
     <p>${pelicula.release_date
     }</p>
     <p class="card-text"><i>${pelicula.overview}</i></p>
     <p class="card-text"><small class="text-body-secondary">Última actualización: 3 mins ago</small></p>
   </div>
 </div>`
      article.innerHTML = template
    })
    

