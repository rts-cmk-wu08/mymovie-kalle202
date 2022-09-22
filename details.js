<<<<<<< HEAD
let params = new URLSearchParams(window.location.search);
    let movieId = params.get("id");
    let div = document.querySelector("#movies");


    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=5a42ea8b4fbbe41ccef094fe698dbb64`)
    .then(response => response.json())
    .then(data => {
        let article = document.createElement("section")
        article.innerHTML = `
       <img src="${response.backdrop_path}">
        
        `
        div.append(section)
    })
=======
let params = new URLSearchParams(window.location.search)
let id = params.get("id")
const movies = document.querySelector('#movies')

console.log(id)

fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5a42ea8b4fbbe41ccef094fe698dbb64`)
    .then(response => response.json())
    .then(data => {
        let ratingcoversion = data.vote_average;
        let rating = Math.round(ratingcoversion * 10) / 10;
        console.log(data)
        let article = document.createElement('article')
        article.classList.add('movie__container')
        article.innerHTML = `
        <img class="movie__backdrop" src="https://image.tmdb.org/t/p/w500${data.backdrop_path}" alt="Backdrop for ${data.title}">
        <div class="info__container">
            <h2 class="movie__title">${data.title}<div class="rating"><i class="fa-solid fa-star star"></i><p class="imdb__rating"><span>${rating}</span>/10 IMDb</p></div></h2>
            
            <ul class="genre__container"></ul>
            <div class="info">
            <p>
            Length <span>${data.runtime} minutes</span>
            </p>
            <p>
            Language <span>${data.original_language}</span>
            </p>
            <p>
            Rating <span>PG-13</span>
            </p>
            </div>
            <h3 class="movie__desc">Description</h3>
            <p class="movie__overview">${data.overview}</p>
            <h3 class="cast__title">Cast</h3>
            <button href="" class="master__button">See more</button>
            <ul class="cast__container"></ul>
            
        </div>
        `
        movies.append(article)

        const genreContainer = document.querySelector('.genre__container')
        data.genres.forEach(genre => {
            let createGenre = document.createElement('li')
            createGenre.classList.add('genre')
            createGenre.innerHTML = `
            <p>${genre.name}</p>
            `;
            genreContainer.append(createGenre);
        });

    })
>>>>>>> 149800ccd23dd389fd0adfc0d3afe2b93587aee9
