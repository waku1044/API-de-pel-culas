let api = 'https://api.themoviedb.org/3/discover/movie';
let claveApi = 'da48657c7b1251891162e15cb4d8fc8f';


fetch(api)
.then(response=>response.json())
.then(data=>console.log(data))
.catch(error=>alert('Surgio un error '+error))