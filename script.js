// const darkMode = document.getElementById("dark-mode");
// const site = document.querySelectorAll("*");
// darkMode.addEventListener("click", () => {
//   if (darkMode.innerHTML == '<i class="fa-solid fa-sun" id="sun"></i>') {
//     darkMode.innerHTML = '<i class="fa-solid fa-moon" id="moon"></i>';
//     for (let i = 0; i < site.length; i++) {
//       site[i].classList.add("dark");
//     }
//   } else if (
//     darkMode.innerHTML == '<i class="fa-solid fa-moon" id="moon"></i>'
//   ) {
//     darkMode.innerHTML = '<i class="fa-solid fa-sun" id="sun"></i>';
//     for (let i = 0; i < site.length; i++) {
//       site[i].classList.remove("dark");
//     }
//   }
// });

// const darkModeMovie = document.getElementById("dark-mode-movie");
// const siteMovie = document.querySelectorAll("*");
// darkModeMovie.addEventListener("click", () => {
//   if (
//     darkModeMovie.innerHTML == '<i class="fa-solid fa-sun" id="sun-movie"></i>'
//   ) {
//     darkModeMovie.innerHTML =
//       '<i class="fa-solid fa-moon" id="moon-movie"></i>';
//     for (let i = 0; i < siteMovie.length; i++) {
//       siteMovie[i].classList.add("dark-movie");
//     }
//   } else if (
//     darkModeMovie.innerHTML ==
//     '<i class="fa-solid fa-moon" id="moon-movie"></i>'
//   ) {
//     darkModeMovie.innerHTML = '<i class="fa-solid fa-sun" id="sun-movie"></i>';
//     for (let i = 0; i < siteMovie.length; i++) {
//       siteMovie[i].classList.remove("dark-movie");
//     }
//   }
// });



const movieButton = document.getElementById("movie-btn");
const movieArea = document.querySelector("#movies");
const animeButton = document.getElementById("anime-btn");
const animeArea = document.querySelector("#animes");
const tabName = document.querySelector("title");

const fullBox = document.getElementById("box");
const fullBoxMovie = document.getElementById("box-movie");
const fullAbout = document.getElementById("full-about");
const scroll = document.querySelector(":root");

async function getMovie() {
  tabName.innerHTML = "Movies: Cineman - Movie Streaming Service";
  movieArea.style.display = "flex";
  animeArea.style.display = "none";
  movieArea.innerHTML = "";
  const data = await fetch("movies.json");
  const res = await data.json();
  const leni = Object.keys(res).length;
  for (let i = 0; i < leni; i++) {
    const movieCard = document.createElement("div");
    movieCard.classList.add("card");
    const inner = `
              <img
                class="img"
                src="${res[i].image}"
                alt="${res[i].title}"
              />
              <div class="content">
                <h2 class="head">${res[i].title}</h2>
                <span class="icon"><i class="play fa-solid fa-play"></i></span>
                <div class="description">
                  <ul class="des-headers">
                    <li class="len">Length</li>
                    <li class="lang">Language</li>
                    <li class="rate">Rating</li>
                  </ul>
                  <div class="des">
                    <h3 class="des1">${res[i].len}</h3>
                    <h3 class="des2">${res[i].lang}</h3>
                    <h3 class="des3">${res[i].rate}</h3>
                  </div>
                </div>
              </div>`;
    movieCard.innerHTML = inner;
    movieArea.appendChild(movieCard);

    const frame = document.getElementById("movie-frame");
    const movieDes = document.getElementById("movie-des");

    movieCard.addEventListener("click", () => {
      fullBox.style.display = "none";
      fullBoxMovie.style.display = "block";
      movieDes.innerHTML = `<img id="movie-img" src="${res[i].image}" alt="${res[i].title}" />
      <br />
      <br />
      <br />
      <h2 id="movie-title">${res[i].title}</h2>
      <br />
      <p id="movie-description">${res[i].desc}</p>
      <button>
        <span id="read-more">Read More</span>
      </button>
      <br />
      <br />
      <table>
        <tr>
          <td>Genres:</td>
          <td class="table-right" id="movie-genre">${res[i].genre}</td>
        </tr>
        <tr>
          <td>Cast:</td>
          <td class="table-right" id="movie-cast">${res[i].cast}</td>
        </tr>
        <tr>
          <td>Production:</td>
          <td class="table-right" id="movie-production">${res[i].production}</td>
        </tr>
        <tr>
          <td>Duration:</td>
          <td class="table-right" id="movie-duration">${res[i].len}</td>
        </tr>
      </table>`;
      tabName.innerHTML = `${res[i].title}`;
      frame.setAttribute("src", `${res[i].video}`);
      scroll.style.setProperty("--scroll-color", "rgba(72, 72, 72,0.8)");
    });
  }

  const card = document.getElementsByClassName("card");
  const img = document.getElementsByClassName("img");
  const cont = document.getElementsByClassName("content");

  for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("mouseover", () => {
      cont[i].style.display = "block";
      img[i].style.filter = "blur(5px)";
      img[i].style.opacity = "0.5";
    });
    card[i].addEventListener("mouseleave", () => {
      cont[i].style.display = "none";
      img[i].style.filter = "blur(0px)";
      img[i].style.opacity = "1.0";
    });
  }

  const aboutButton = document.getElementById("about-btn");
  const backButton = document.getElementById("back-btn");

  aboutButton.addEventListener("click",()=>{
    tabName.innerHTML = "About Us";
    fullBox.style.display = "none";
    fullAbout.style.display = "block";
    scroll.style.setProperty("--scroll-color","rgba(72, 72, 72,0.8)");
    scroll.style.setProperty("--scroll-color-hover","#2154ff80");
  })
  backButton.addEventListener("click",()=>{
    tabName.innerHTML = "Movies: Cineman - Movie Streaming Service";
    fullBox.style.display = "flex";
    fullAbout.style.display = "none";
    scroll.style.setProperty("--scroll-color","#2154ff");
    scroll.style.setProperty("--scroll-color-hover","#2154ff");
  })

  const logo = document.getElementById("logotxt-movie");
  logo.addEventListener("click", () => {
    fullBox.style.display = "flex";
    fullBoxMovie.style.display = "none";
    tabName.innerHTML = "Movies: Cineman - Movie Streaming Service";
    scroll.style.setProperty("--scroll-color", "#2154ff");
  });

  const homeButton = document.getElementById("home-btn");
  homeButton.addEventListener("click", () => {
    fullBox.style.display = "flex";
    fullBoxMovie.style.display = "none";
    tabName.innerHTML = "Movies: Cineman - Movie Streaming Service";
    scroll.style.setProperty("--scroll-color", "#2154ff");
  });
}
getMovie();
movieButton.addEventListener("click", getMovie);

async function getAnime() {
  tabName.innerHTML = "Animes: Cineman - Movie Streaming Service";
  movieArea.style.display = "none";
  animeArea.style.display = "flex";
  animeArea.innerHTML = "";
  const data = await fetch("animes.json");
  const res = await data.json();
  const leni = Object.keys(res).length;
  for (let i = 0; i < leni; i++) {
    const animeCard = document.createElement("div");
    animeCard.classList.add("card");
    const inner = `
              <img
                class="img"
                src="${res[i].image}"
                alt="${res[i].title}"
              />
              <div class="content">
                <h2 class="head">${res[i].title}</h2>
                <span class="icon"><i class="play fa-solid fa-play"></i></span>
                <div class="description">
                  <ul class="des-headers">
                    <li class="len">Length</li>
                    <li class="lang">Language</li>
                    <li class="rate">Rating</li>
                  </ul>
                  <div class="des">
                    <h3 class="des1">${res[i].len}</h3>
                    <h3 class="des2">${res[i].lang}</h3>
                    <h3 class="des3">${res[i].rate}</h3>
                  </div>
                </div>
              </div>`;
    animeCard.innerHTML = inner;
    animeArea.appendChild(animeCard);

    const frame = document.getElementById("movie-frame");
    const movieDes = document.getElementById("movie-des");

    animeCard.addEventListener("click", () => {
      fullBox.style.display = "none";
      fullBoxMovie.style.display = "block";
      movieDes.innerHTML = `<img id="movie-img" src="${res[i].image}" alt="${res[i].title}" />
      <br />
      <br />
      <br />
      <h2 id="movie-title">${res[i].title}</h2>
      <br />
      <p id="movie-description">${res[i].desc}</p>
      <button>
        <span id="read-more">Read More</span>
      </button>
      <br />
      <br />
      <table>
        <tr>
          <td>Genres:</td>
          <td class="table-right" id="movie-genre">${res[i].genre}</td>
        </tr>
        <tr>
          <td>Production:</td>
          <td class="table-right" id="movie-production">${res[i].production}</td>
        </tr>
        <tr>
          <td>Duration:</td>
          <td class="table-right" id="movie-duration">${res[i].len}</td>
        </tr>
      </table>`;
      tabName.innerHTML = `${res[i].title}`;
      frame.setAttribute("src", `${res[i].video}`);
      scroll.style.setProperty("--scroll-color", "rgba(72, 72, 72,0.8)");
    });
  }

  const card = document.getElementsByClassName("card");
  const img = document.getElementsByClassName("img");
  const cont = document.getElementsByClassName("content");

  for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("mouseover", () => {
      cont[i].style.display = "block";
      img[i].style.filter = "blur(5px)";
      img[i].style.opacity = "0.5";
    });
    card[i].addEventListener("mouseleave", () => {
      cont[i].style.display = "none";
      img[i].style.filter = "blur(0px)";
      img[i].style.opacity = "1.0";
    });
  }

  const aboutButton = document.getElementById("about-btn");
  const backButton = document.getElementById("back-btn");

  aboutButton.addEventListener("click",()=>{
    tabName.innerHTML = "About Us";
    fullBox.style.display = "none";
    fullAbout.style.display = "block";
    scroll.style.setProperty("--scroll-color", "rgba(72, 72, 72,0.8)");
    scroll.style.setProperty("--scroll-color-hover","#2154ff80");
  })
  backButton.addEventListener("click",()=>{
    tabName.innerHTML = "Animes: Cineman - Movie Streaming Service";
    fullBox.style.display = "flex";
    fullAbout.style.display = "none";
    scroll.style.setProperty("--scroll-color", "#2154ff");
    scroll.style.setProperty("--scroll-color-hover","#2154ff");
  })

  const logo = document.getElementById("logotxt-movie");
  logo.addEventListener("click", () => {
    fullBox.style.display = "flex";
    fullBoxMovie.style.display = "none";
    tabName.innerHTML = "Animes: Cineman - Movie Streaming Service";
    scroll.style.setProperty("--scroll-color", "#2154ff");
  });

  const homeButton = document.getElementById("home-btn");
  homeButton.addEventListener("click", () => {
    fullBox.style.display = "flex";
    fullBoxMovie.style.display = "none";
    tabName.innerHTML = "Animes: Cineman - Movie Streaming Service";
    scroll.style.setProperty("--scroll-color", "#2154ff");
  });
}
// getAnime();
animeButton.addEventListener("click", getAnime);
