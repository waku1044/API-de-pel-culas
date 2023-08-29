const $btn_siguiente = document.querySelector('[data-siguiente]');
const $btn_anterior = document.querySelector('[data-anterior]');
const $count = document.querySelector('[data-count]');


let count = 1;
$count.innerText = count;
const siguiente = ()=>{
  if(count < 500){
    count ++;
    $count.innerText = count;
    return cargarPeliculas()
  }else{
    count == 1;
}
}
const anterior = ()=>{
  if(count > 1){
    count --;
    $count.innerText = count;
    return cargarPeliculas()
  }else{
    count == 1;
}
}


$btn_siguiente.addEventListener('click',siguiente)
$btn_anterior.addEventListener('click',anterior)
const cargarPeliculas = async()=>{
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