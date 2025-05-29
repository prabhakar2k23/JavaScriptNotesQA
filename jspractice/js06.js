
  const movies = [
    { title: "Inception", rating: 8.8, available: true },
    { title: "The Room", rating: 3.7, available: true },
    { title: "Interstellar", rating: 8.6, available: false },
    { title: "Parasite", rating: 8.6, available: true }
  ];


  function getMovieTitle(movie){
    let result = movie.filter(p=> p.available && p.rating > 8).map(l=>`${l.title} - ${l.rating}`);
    return result.length>0 ? result : "No highly rated movies available."
 }

    let res = getMovieTitle(movies);
    document.getElementById('show').innerHTML = Array.isArray(res)? res.join('<br>') : res; 
     
  