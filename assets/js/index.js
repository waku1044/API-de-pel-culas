import { service } from "../server/server.js";
import popap  from "./modal.js";
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
          <img  data-src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" class="card-img-top lazy" alt="${pelicula.title}">
          <div class="card-body overflow-auto">
            <h5 class="card-title">${pelicula.title}</h5>
            <p><b>${pelicula.release_date.slice(0, 4)}</b></p>
            
          </div>
        </div>`;
      });

      article.innerHTML = template;

        // Mover el observer aquí
        obtimisaImg();
        
    });
};





 function obtimisaImg() {
  const lazyImages = document.querySelectorAll('.lazy');

  const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
  };

  const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
            
              const img = entry.target;
              img.src = img.getAttribute('data-src');
              img.classList.add('loaded');
              observer.unobserve(img);
          }
      });
  }, options);

  lazyImages.forEach(image => {
      imageObserver.observe(image);
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
