const searchInput = document.getElementById("searchInput");
const searchResult = document.getElementById("result");
let timer;

// main debouncing logic
searchInput.addEventListener("input", () =>{
    clearTimeout(timer);
    timer = setTimeout(() => {
        getInfo();
    },500);
});


async function getInfo(){

    if( searchInput.value.trim() === ""){
        searchResult.textContent = "";
        return;
    }

    searchResult.textContent = "Loading....";
    
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchInput.value}`);

    const data = await response.json();

    // console.log(data);
    if( data.length === 0 ){
        searchResult.textContent = "No results found";
        return;
    }

    searchResult.textContent = "";

    data.forEach(elem => {

        const showDiv = document.createElement("div");
        showDiv.classList.add("show-container");

        const showImage = document.createElement("img");
        showImage.src =  elem.show.image.medium;
        showImage.alt = "fail to load image";

        const showTitle = document.createElement("p");
        showTitle.textContent =  "Title: " + elem.show.name;

        const showRating = document.createElement("p");
        showRating.textContent = "⭐" + elem.show.rating.average;

        const showGenre = document.createElement("p");
        showGenre.textContent = "Genre: " + [ ...elem.show.genres ].join(", ");

        const showDescription = document.createElement("p");
        showDescription.innerHTML = "Summary: " + elem.show.summary;

        showDiv.appendChild(showImage);
        showDiv.appendChild(showTitle);
        showDiv.appendChild(showRating);
        showDiv.appendChild(showGenre);
        showDiv.appendChild(showDescription);

        searchResult.appendChild(showDiv);
    });

}


