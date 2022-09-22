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
