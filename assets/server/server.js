const $btn_siguiente = document.querySelector('[data-siguiente]');
const $btn_anterior = document.querySelector('[data-anterior]');
const $count = document.querySelector('[data-count]');

let verMas;


let count = 1;
$count.innerText = count;
const siguiente = ()=>{
  if(count < 500){
    count ++;
    $count.innerText = count;
    return service.cargarPeliculas(count)
  }else{
    count = 1;
}
}
const anterior = ()=>{
  if(count > 1){
    count --;
    $count.innerText = count;
    return service.cargarPeliculas(count)
  }else{
    count = 1;
}
}


$btn_siguiente.addEventListener('click',siguiente)
$btn_anterior.addEventListener('click',anterior)

// Mostrar las policulas populares
const cargarPeliculas =(count)=>{
  let template = '';
  let verMas;
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=da48657c7b1251891162e15cb4d8fc8f&language=es-ES&page=${count}`)
    .then(response => response.json()) 
    .then(data => data.results.forEach(pelicula =>{
      let article = document.querySelector('#article');
      template += `<div class="card" style="width: 18rem;">
      <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" class="card-img-top" alt="${pelicula.title}">
      <div class="card-body overflow-auto">
        <h5 class="card-title">${pelicula.title}</h5>
        <a href="#" class="btn btn-primary" data-pelicula-id>Ver mas</a>
      </div>
      </div>`;
      verMas = document.querySelectorAll('[data-pelicula-id]') 
      article.innerHTML = template;
      
    }))     
  }
  
    
// Muestra pelicula seleccionada por id

const peliculaPorId = (id)=>{
  fetch(`
  https://api.themoviedb.org/3/movie/?api_key=da48657c7b1251891162e15cb4d8fc8f&language=es-ES/${id}?`)
  .then(response => response.json())
  .then(data=> console.log(data))
}
export const service = {
  cargarPeliculas,
  peliculaPorId
};