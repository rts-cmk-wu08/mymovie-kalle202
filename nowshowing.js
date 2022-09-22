let nowShowing = document.querySelector(".now__showing");
fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=5a42ea8b4fbbe41ccef094fe698dbb64")
.then(response => response.json())
.then(data => {
    data.results.forEach(result => {

    let ratingCoversion = result.vote_average;
    let rating = Math.round(ratingCoversion * 10) / 10;
    const movieCard = document.createElement("article");

    movieCard.classList.add("movie__card");
    /* movieCard.classList.add("now__showing"); */
    movieCard.innerHTML = `

    <a href="details.html?id=${result.id}">
    <img class="poster__img" src="https://image.tmdb.org/t/p/w500${result.poster_path}">
    </a>
    <h3>${result.title}</h3>
    <div class="rating"><i class="fa-solid fa-star star"></i><p class="imdb__rating"><span>${rating}</span>/10 IMDb</p></div>
    `;

    nowShowing.append(movieCard);

    });
});

// movie id: https://api.themoviedb.org/3/movie/616037?api_key=5a42ea8b4fbbe41ccef094fe698dbb64

/* document.addEventListener("DOMContentLoaded", () => {
    let list = document.querySelector(".pokedex");
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => response.json())
        .then(data => {
            data.results.forEach(result => {
                let listItem = document.createElement("li");
                listItem.innerHTML = `
                <h2 class="pokename">${result.name}</h2>
                <a class="pokelink" href="pokedetails.html?name=${result.name}">Read more...</a>
                `
                list.append(listItem);
            })
    
    
        })
    
    
    }) 
    
    document.addEventListener("DOMContentLoaded", () =>{
    
    let params = new URLSearchParams(window.location.search)
    let id = params.get("id")

    let isFavorite = localStorage.getItem(id)

    console.log(id)

    fetch(`/data/${id}.json`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let article = document.createElement("article")
            article.innerHTML = `
                <div class="image__container">
                <img src="/img/${data.image}">
                <i class="fa-regular fa-heart ${isFavorite ? "fa-solid" : null}"></i>
                </div>
                <h2>${data.destination}</h2>
                <h3>${data.title}</h3>
                <p>${data.subtitle}</p>
                <p>${data.text}</p>
                <h3>Facilities</h3>
                <ul class="facilities"></ul>
            `
            
            document.body.append(article)

            let list = document.querySelector(".facilities")
            
            data.facilities.forEach(facility => {
                let item = document.createElement("li")
                item.innerText = facility;
                list.append(item)
            });
           

        })


   
    
 


    })



    
    */