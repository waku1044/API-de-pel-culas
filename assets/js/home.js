
let usuarioRegistrado = localStorage.getItem('usuario');
let $section = document.querySelector('#section');

document.querySelector('[data-usuario-registrado]').innerText = usuarioRegistrado;

let api = 'https://api.themoviedb.org/3/movie/popular?api_key=da48657c7b1251891162e15cb4d8fc8f&language=es-ES';

const cargarPeliculas = ()=>{
    return fetch(api)
    .then(response => response.json())
    .then(data => data.results.forEach(pelicula =>{
        let article = document.createElement('article');
        let template = `<div class="card" style="width: 18rem;">
        <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${pelicula.title}</h5>
          <p class="card-text">${pelicula.overview}</p>
          <a href="#" class="btn btn-primary">Ver mas</a>
        </div>
        </div>`;
        article.innerHTML += template;
        $section.appendChild(article)

    }))
}



cargarPeliculas()    

