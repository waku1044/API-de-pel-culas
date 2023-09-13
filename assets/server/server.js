

// Mostrar las policulas populares

const cargarPeliculas = async (count) => {
  const article = document.querySelector("#article");
  let template = '';
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=da48657c7b1251891162e15cb4d8fc8f&language=es-ES&page=${count}`
    );
    const data = await response.json();
  data.results.forEach((pelicula) => {
    template += `<div class="card" style="width: 18rem;">
      <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" class="card-img-top" alt="${pelicula.title}">
      <div class="card-body overflow-auto">
      <h5 class="card-title">${pelicula.title}</h5>
      <p><b>${pelicula.release_date.slice(0,4)
      }</b></p>
      <a href='./assets/pages/pelicula.html?id=${pelicula.id}' target='_blank' class='btn btn-primary'>Ver mas</a>
      </div>
      </div>`
      console.log(pelicula)
    })
    article.innerHTML = template;
};

// Muestra pelicula seleccionada por id

const peliculaPorId = async (id) => {
  const response = await fetch(`
  https://api.themoviedb.org/3/movie/?api_key=da48657c7b1251891162e15cb4d8fc8f&language=es-ES/${id}?`);
  return await response.json();
};

export const service = {
  cargarPeliculas,
  peliculaPorId,
};
