
const cargarPeliculas = async(count)=>{
  let api = `https://api.themoviedb.org/3/movie/popular?api_key=da48657c7b1251891162e15cb4d8fc8f&language=es-ES&page=${count}`;
  let template = '';
    await fetch(api)
    .then(response => response.json())
    .then(data => data.results.forEach(pelicula =>{
        let article = document.querySelector('#article');
        template += `<div class="card" style="width: 18rem;height:40rem">
        <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" class="card-img-top" alt="${pelicula.title}">
        <div class="card-body overflow-auto">
          <h5 class="card-title">${pelicula.title}</h5>
          <p class="card-text">${pelicula.overview}</p>
          <a href="#" class="btn btn-primary">Ver mas</a>
        </div>
        </div>`;
        article.innerHTML = template;
        
        
    }))
}

export default cargarPeliculas;