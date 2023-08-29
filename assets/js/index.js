import cargarPeliculas from '../server/server.js';
const $btn_siguiente = document.querySelector('[data-siguiente]');
const $btn_anterior = document.querySelector('[data-anterior]');
const $count = document.querySelector('[data-count]');


let count = 1;
$count.innerText = count;
const siguiente = ()=>{
  if(count < 500){
    count += 1;
    $count.innerText = count;
    return cargarPeliculas(count)
  }else{
    count == 1;
}
}
const anterior = ()=>{
  if(count > 1){
    count -= 1;
    $count.innerText = count;
    return cargarPeliculas(count)
  }else{
    count == 1;
}
}


$btn_siguiente.addEventListener('click',siguiente)
$btn_anterior.addEventListener('click',anterior)
cargarPeliculas(count)

