const cargarPeliculas = (destino)=>{
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
        destino.appendChild(article)
        
    }))
}

export default cargarPeliculas;