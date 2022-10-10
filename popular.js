import {genres} from"./genres.js";

let popular = document.querySelector(".popular");
fetch("https://api.themoviedb.org/3/movie/popular?api_key=5a42ea8b4fbbe41ccef094fe698dbb64")
.then(response => response.json())
.then(data => {
    data.results.forEach(result => {
        let createArticle = document.createElement('article')

        let ratingCoversion = result.vote_average;
        let rating = Math.round(ratingCoversion * 10) / 10;

        createArticle.classList.add('popular__movie')
        createArticle.innerHTML = `
        <a href="details.html?id=${result.id}">
        <img class="pop__poster" src="https://image.tmdb.org/t/p/w500/${result.poster_path}">
        </a>
        <div class="pop__info">
        <a href="details.html?id=${result.id}">
        <h3>${result.title}</h3>
        </a>
        <div class="rating"><i class="fa-solid fa-star star"></i><p class="imdb__rating"><span>${rating}</span>/10 IMDb</p></div>
        <ul class="genre__container"></ul>
       
        </div>
        `;
        popular.append(createArticle)

       
        const popGenres = createArticle.querySelector(".genre__container")
        result.genre_ids.forEach(id => {
            
            let currentGenre = genres.find(genre => genre.id == id)
            let makeGenre = document.createElement('li')
            makeGenre.classList.add('genre')
            makeGenre.innerHTML = `
            <p>${currentGenre.name.toUpperCase()}</p>
            `
            popGenres.append(makeGenre)
        })
  /*       const genreContainer = document.querySelector('.genre__container')
        data.genres.forEach(genre => {
            let createGenre = document.createElement('li')
            createGenre.classList.add('genre')
            createGenre.innerHTML = `
            <p>${genre.name.toUpperCase()}</p>
            `;
            genreContainer.append(createGenre);
        }); */
    })
})
