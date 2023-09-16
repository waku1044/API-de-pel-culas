import { service } from "../server/server.js";
const $count = document.querySelector("[data-count]");
let count = 1;
const $btn_siguiente = document.querySelector("[data-siguiente]");
const $btn_anterior = document.querySelector("[data-anterior]");
const links = document.querySelector('.link');

$count.innerText = count;
let lista = '';
service.muestraDeGenero()
  .then(categoria => categoria.genres.forEach(gen => {
    lista += `<li><a href='./assets/pages/categoria${gen.name}.html' class='dropdown-item'>${gen.name}</a></li>`
    links.innerHTML = lista;
  }))

const article = document.querySelector('[data-article]');

const cargarPeliculas = (pageNumber) => {
  service.cargarPeliculas(pageNumber)
    .then(data => {
      let template = '';
      data.results.forEach((pelicula) => {
        template += `<div class="card" style="width: 18rem;">
          <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" class="card-img-top" alt="${pelicula.title}">
          <div class="card-body overflow-auto">
            <h5 class="card-title">${pelicula.title}</h5>
            <p><b>${pelicula.release_date.slice(0, 4)}</b></p>
            
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
