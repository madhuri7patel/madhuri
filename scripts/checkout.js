// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let movies = JSON.parse(localStorage.getItem("movie")) || [];

//console.log(movies.results);

let img = document.createElement("img");
img.src = "https://image.tmdb.org/t/p/w500" + movies.poster_path;
let tittle = document.createElement("h2");
tittle.innerText = movies.title;

movie.append(img, tittle);
console.log(img, tittle);
