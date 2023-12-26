import { service } from "../server/server.js";

const links = document.querySelector(".link");
let lista = "";
let template = "";
let article = document.querySelector("[data-article]");
const $title = document.querySelector("[data-categoria-title]");

const url = new URL(window.location);
const id = url.searchParams.get("id");
const genero = url.searchParams.get("categoria");
console.log(id);
console.log(genero);

// console.log(genero)
$title.innerText = genero;
service.generoPorId(id).then((genero) => {
  genero.results.forEach((genero) => {
    template += `
          <div class="card" style="width: 18rem;">
          <img src="https://image.tmdb.org/t/p/w500/${
            genero.poster_path
          }" class="card-img-top" alt="${genero.title}">
          <div class="card-body overflow-auto">
          <h5 class="card-title">${genero.title}</h5>
          <p><b>${genero.release_date.slice(0, 4)}</b></p>
          <a href='./pelicula.html?id=${
            genero.id
          }' target='_blank' class='btn btn-primary'>Ver mas</a>
          </div>
          </div>`;
    article.innerHTML = template;
  });
});

service.muestraDeGenero().then((categoria) =>
  categoria.genres.forEach((gen) => {
    lista += `<li><a href='./categorias.html?id=${gen.id}&categoria=${gen.name}' class='dropdown-item'>${gen.name}</a></li>`;
    links.innerHTML = lista;
  })
);
