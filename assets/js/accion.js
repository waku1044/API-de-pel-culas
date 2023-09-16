import { service } from "../server/server.js";
const links = document.querySelector(".link");

let lista = "";
let template = "";
let article = document.querySelector("[data-article]");


service.muestraDeGenero().then((categoria) => {
  categoria.genres.forEach((gen) => {
    lista += `<li><a href='#' class='dropdown-item'>${gen.name}</a></li>`;
    if (gen.name == "Acción") {
      service.peliculaPorId(`${gen.id}`).then((pelicula) => {
        template += `
            <div class="card" style="width: 18rem;">
            <img src="https://image.tmdb.org/t/p/w500/${
              pelicula.poster_path
            }" class="card-img-top" alt="${pelicula.title}">
            <div class="card-body overflow-auto">
            <h5 class="card-title">${pelicula.title}</h5>
            <p><b>${pelicula.release_date.slice(0, 4)}</b></p>
            <a href='./pelicula.html?id=${
              pelicula.id
            }' target='_blank' class='btn btn-primary'>Ver mas</a>
            </div>
            </div>`;
        links.innerHTML = lista;
        article.innerHTML = template;
      });
    }
  });
});
