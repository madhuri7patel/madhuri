// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let id;
const myFunction = async () => {
  try {
    const q = document.querySelector("#search").value;
    const res = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=818ec820de5649575955663bd77e57cb&language=en-US&include_adult=false&query=${q}`
    );
    const data = await res.json();
    console.log(data.results);
    return data.results;
  } catch (err) {
    console.log(err);
  }
};

function append(data) {
  movies.innerHTML = null;
  data.forEach((ele) => {
    const box = document.createElement("div");
    box.addEventListener("click", () => {
      display(ele);
    });
    const p = document.createElement("p");
    p.innerText = ele.title;
    box.append(p);
    movies.append(box);
  });
}

async function main() {
  let data = await myFunction();
  if (data == undefined) return false;
  append(data);
  console.log("data:", data);
}

function debounce(func, delay) {
  if (id) clearTimeout(id);
  id = setTimeout(() => {
    func();
  }, delay);
}

function display(e) {
  document.querySelector("#container");
  console.log(e);
  let box = document.createElement("div");
  let img = document.createElement("img");
  img.src = "https://image.tmdb.org/t/p/w500" + e.poster_path;
  let tittle = document.createElement("h2");
  tittle.innerText = e.title;

  let btn = document.createElement("button");
  btn.innerText = "Book now";

  btn.addEventListener("click", function () {
    addmovie(e);
  });
  box.append(img, tittle, btn);
  document.querySelector("#movies").append(box);
}

let e = JSON.parse(localStorage.getItem("movie")) || [];
function addmovie(e) {
  localStorage.setItem("movie", JSON.stringify(e));
  window.location.href = "checkout.html";
}
