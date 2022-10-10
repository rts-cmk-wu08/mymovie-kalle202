



let params = new URLSearchParams(window.location.search)
let id = params.get("id")
const movies = document.querySelector('#movies')   
const castList = document.querySelector(".cast__container") 


fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5a42ea8b4fbbe41ccef094fe698dbb64`)
    .then(response => response.json())
    .then(data => {
        let ratingcoversion = data.vote_average;
        let rating = Math.round(ratingcoversion * 10) / 10;
        
        let article = document.createElement('article')
        article.classList.add('movie__container')
        article.innerHTML = `
      

        <div class="info__container" id="info__container">
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
            <div class="cast__title"><h3>Cast</h3>
            <button href="" class="master__button">See more</button></div>
            
            
        </div>
        `
        movies.append(article)

        const genreContainer = document.querySelector('.genre__container')
        data.genres.forEach(genre => {
            let createGenre = document.createElement('li')
            createGenre.classList.add('genre')
            createGenre.innerHTML = `
            <p>${genre.name.toUpperCase()}</p>
            `;
            genreContainer.append(createGenre);
        });

    })

    const trailer = document.querySelector('#trailer__container')

fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=5a42ea8b4fbbe41ccef094fe698dbb64`)
    .then(responseTwo => responseTwo.json())
    .then(data => {
        
        let lastVideo = data.results.pop()
        
        let iframe = document.createElement('iframe')
        iframe.setAttribute("src", `//www.youtube.com/embed/${lastVideo.key}`);
        iframe.classList.add("trailer__iframe")
        trailer.append(iframe);
    })


console.log(castList)

fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=5a42ea8b4fbbe41ccef094fe698dbb64`)
.then(response => response.json())
.then(data => {
    data.cast.forEach((actor,index) => {
        let castListItem = document.createElement('li')
        castListItem.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500/${actor.profile_path}">
        <h5>${actor.name}</h5>
        `
        if(index<4){castList.append(castListItem)
        }
        
        
       
    })
    
})


