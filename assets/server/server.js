const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTQ4NjU3YzdiMTI1MTg5MTE2MmUxNWNiNGQ4ZmM4ZiIsInN1YiI6IjYyZTUyYjVmMWJmMjY2MDA2MDJjZDU1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c3ZANy79T45EZhluE4qBRm9iZ9dnKIwb4dtNi1woduM'
  }
  
};


// Mostrar las policulas populares

const cargarPeliculas = (count) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=da48657c7b1251891162e15cb4d8fc8f&language=es-ES&page=${count}`
    )
    .then(response=>response.json())
    // .then(data=>data.results.forEach((pelicula) => {
    //   template += `<div class="card" style="width: 18rem;">
    //     <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" class="card-img-top" alt="${pelicula.title}">
    //     <div class="card-body overflow-auto">
    //     <h5 class="card-title">${pelicula.title}</h5>
    //     <p><b>${pelicula.release_date.slice(0,4)
    //     }</b></p>
    //     <a href='./assets/pages/pelicula.html?id=${pelicula.id}' target='_blank' class='btn btn-primary'>Ver mas</a>
    //     </div>
    //     </div>`
    //     article.innerHTML = template;
    //   }))
};

// Muestra pelicula seleccionada por id

const peliculaPorId = async (id) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=es-ES`, options);
  return await res.json();
  
  };

  const buscarPelicula = async (query) => {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&language=es-ES`, options);
    return await res.json();
    
    };

  // Muestra genero y id 
  const muestraDeGenero = ()=>{
    return fetch('https://api.themoviedb.org/3/genre/movie/list?language=es-ES',options)
    .then(response=>response.json())
  }
  const generoPorId = (id)=>{
    return fetch(`https://api.themoviedb.org/3/genre/${id}/movies?language=es-ES`,options)
    .then(response=>response.json())
    
  }

export const service = {
  cargarPeliculas,
  peliculaPorId,
  muestraDeGenero,
  generoPorId,
  buscarPelicula
};
