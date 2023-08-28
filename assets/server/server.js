let api = 'https://api.themoviedb.org/3/movie/popular?api_key=da48657c7b1251891162e15cb4d8fc8f&language=es-ES';


const cargarPeliculas = ()=>{
    return fetch(api)
    .then(response => response.json())
}

export default cargarPeliculas;
