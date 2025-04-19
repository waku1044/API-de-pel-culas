import { service } from "../server/server.js";

let usuarioRegistrado = localStorage.getItem('usuario');
document.querySelector('[data-usuario-registrado]').innerText = usuarioRegistrado;

const $count = document.querySelector("[data-count]");
const count = 1;
const $btn_siguiente = document.querySelector("[data-siguiente]");
const $btn_anterior = document.querySelector("[data-anterior]");
const links = document.querySelector('.link');
const $input_search = document.querySelector('[data-search]');

$count.innerText = count;
let lista = '';
service.muestraDeGenero()
  .then(categoria => categoria.genres.forEach(gen => {
    lista += `<li><a href='./categorias.html?id=${gen.id}&categoria=${gen.name}' class='dropdown-item'>${gen.name}</a></li>`
    links.innerHTML = lista;
  }))

  // service.generoPorId(18) 
  // .then(genero => console.log(genero))
const article = document.querySelector('[data-article]');

// Busqueda

$input_search.addEventListener("keyup", async(e) => {
  if (e.key === "Enter") {
    let resultado = await service.buscarPelicula($input_search.value)
    let template = '';
    resultado.results.forEach((pelicula) => {
      template += `<div class="card" style="width: 18rem;">
      <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" class="card-img-top h-75" alt="${pelicula.title}">
      <div class="card-body overflow-auto">
        <h5 class="card-title">${pelicula.title}</h5>
        <p><b>${pelicula.release_date.slice(0, 4)}</b></p>
        <a href='./pelicula.html?id=${pelicula.id}' target='_blank' class='btn btn-primary'>Ver mas</a>
      </div>
    </div>`;
    })
    article.innerHTML = template;
}
})


const cargarPeliculas = (pageNumber) => {
  service.cargarPeliculas(pageNumber)
    .then(data => {
      let template = '';
      data.results.forEach((pelicula) => {
        // console.log(pelicula.genre_ids.forEach(id => service.generoPorId(id).then(genero =>{ return genero.name}))
        //     )
        template += `<div class="card" style="width: 18rem;">
          <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" class="card-img-top h-75" alt="${pelicula.title}">
          <div class="card-body overflow-auto">
            <h5 class="card-title">${pelicula.title}</h5>
            <p><b>${pelicula.release_date.slice(0, 4)}</b></p>
            <a href='./pelicula.html?id=${pelicula.id}' target='_blank' class='btn btn-primary'>Ver mas</a>
          </div>
        </div>`;
      });

      article.innerHTML = template;
    });
};

cargarPeliculas(count);

const siguiente = () => {
  if (count < 500) {
    count++;
  } else {
    count = 1;
  }
  $count.innerText = count;
  cargarPeliculas(count);
};

const anterior = () => {
  if (count > 1) {
    count--;
  } else {
    count = 500;
  }
  $count.innerText = count;
  cargarPeliculas(count);
};

$btn_siguiente.addEventListener("click", siguiente);
$btn_anterior.addEventListener("click", anterior);
