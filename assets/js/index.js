import { service } from "../server/server.js";
const $count = document.querySelector("[data-count]");
let count = 1;
const $btn_siguiente = document.querySelector("[data-siguiente]");
const $btn_anterior = document.querySelector("[data-anterior]");




$count.innerText = count;

const article = document.querySelector('[data-article]')
let template;
service.cargarPeliculas(count)


const siguiente = () => {
  if (count < 500) {
    count++;
    $count.innerText = count;
    console.log(template)
    service.cargarPeliculas(count)
    .then(data=>data.results.forEach((pelicula) => {
      template += `<div class="card" style="width: 18rem;">
        <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" class="card-img-top" alt="${pelicula.title}">
        <div class="card-body overflow-auto">
        <h5 class="card-title">${pelicula.title}</h5>
        <p><b>${pelicula.release_date.slice(0,4)
        }</b></p>
        <a href='./pelicula.html?id=${pelicula.id}' target='_blank' class='btn btn-primary'>Ver mas</a>
        </div>
        </div>`
        article.innerHTML = template;
      }))
    } else {
      count = 1;
    }
};

const anterior = () => {
  if (count > 1) {
    count--;
    $count.innerText = count;
    service.cargarPeliculas(count)
    .then(data=>data.results.forEach((pelicula) => {
      template += `<div class="card" style="width: 18rem;">
        <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" class="card-img-top" alt="${pelicula.title}">
        <div class="card-body overflow-auto">
        <h5 class="card-title">${pelicula.title}</h5>
        <p><b>${pelicula.release_date.slice(0,4)
        }</b></p>
        <a href='./assets/pages/pelicula.html?id=${pelicula.id}' target='_blank' class='btn btn-primary'>Ver mas</a>
        </div>
        </div>`
        article.innerHTML = template;
      }))
  } else{
    count = 1;
  }
};
$btn_siguiente.addEventListener("click", siguiente);
$btn_anterior.addEventListener("click", anterior);


