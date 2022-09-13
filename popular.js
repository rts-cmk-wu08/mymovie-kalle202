let nowShowing = document.querySelector(".popular");
fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=5a42ea8b4fbbe41ccef094fe698dbb64")
.then(response => response.json())
.then(data => {
    data.results.forEach(result => {
    let ratingcoversion = result.vote_average;
    let rating = Math.round(ratingcoversion * 10) / 10;
    const movieCard = document.createElement("article");
    movieCard.classList.add("movie__card");
    /* movieCard.classList.add("now__showing"); */
    movieCard.innerHTML = `
    <img class="poster__img" src="https://image.tmdb.org/t/p/w500${result.poster_path}">
    <h3>${result.title}</h3>
    <div class="rating"><i class="fa-solid fa-star star"></i><p class="imdb__rating"><span>${rating}</span>/10 IMDb</p></div>
    `
    nowShowing.append(movieCard);
    });
})
