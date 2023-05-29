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

const aboutButton = document.getElementById("about-btn");
const backButton = document.getElementById("back-btn");
const menuButton = document.querySelectorAll(".menu-btn");
const crossButton = document.getElementById("cross-btn");
const sideBar = document.getElementById("side");
const rightSection = document.getElementById("right");
const menuBtnMovie = document.querySelectorAll(".menu-btn-movie");
const crossBtnMovie = document.getElementById("cross-btn-movie");
const respNavMenuMovie = document.getElementById("nav-menu");

for (let i = 0; i < menuButton.length; ++i) {
  menuButton[i].addEventListener("click", () => {
    // sideBar.style.display = "block";
    sideBar.style.transform = "translateX(0)";
    menuButton[i].style.display = "none";
    rightSection.style.filter = "brightness(0.2)";
  });
}
for (let i = 0; i < menuButton.length; ++i) {
  crossButton.addEventListener("click", () => {
    // sideBar.style.display = "none";
    sideBar.style.transform = "translateX(-100%)";
    menuButton[i].style.display = "inline-block";
    rightSection.style.filter = "brightness(1)";
  });
}

for (let i = 0; i < menuBtnMovie.length; ++i) {
  menuBtnMovie[i].addEventListener("click", () => {
    respNavMenuMovie.style.transform = "translateY(0)";
    // rightSection.style.filter = "brightness(0.2)";
  });
}
for (let i = 0; i < menuBtnMovie.length; ++i) {
  crossBtnMovie.addEventListener("click", () => {
    respNavMenuMovie.style.transform = "translateY(-100%)";
    // rightSection.style.filter = "brightness(1)";
  });
}

const options = document.querySelectorAll(".resp-nav option");
const selectOption = document.getElementById("resp-nav");

const movieButton = document.getElementById("movie-btn");
const movieOption = document.getElementById("movie-option");
const movieArea = document.querySelector("#movies");
const animeButton = document.getElementById("anime-btn");
const animeOption = document.getElementById("anime-option");
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

    const frame = document.querySelector("#movie-frame iframe");
    const movieDes = document.getElementById("movie-des");

    movieCard.addEventListener("click", () => {
      fullBox.style.display = "none";
      fullBoxMovie.style.display = "block";
      const desc = res[i].desc;
      movieDes.innerHTML = `<img id="movie-img" src="${res[i].image}" alt="${
        res[i].title
      }" />
      <div>
      <h2 id="movie-title">${res[i].title}</h2>
      <p id="movie-description">${
        desc.length > 150 ? desc.substr(0, 150) + "..." : desc
      }</p>
      ${
        desc.length > 150
          ? `<button class="read-more">Read More</button><button class="read-less">Read Less</button>`
          : ``
      }
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
          <td class="table-right" id="movie-production">${
            res[i].production
          }</td>
        </tr>
        <tr>
          <td>Duration:</td>
          <td class="table-right" id="movie-duration">${res[i].len}</td>
        </tr>
      </table>
      </div>
      `;
      if (window.innerWidth <= 410) {
        document.getElementById(
          "resp-description"
        ).innerHTML = `<p id="movie-description">${
          desc.length > 150 ? desc.substr(0, 150) + "..." : desc
        }</p>
        ${
          desc.length > 150
            ? `<button class="read-more">Read More</button><button class="read-less">Read Less</button>`
            : ``
        }`;
      }
      tabName.innerHTML = `${res[i].title}`;
      frame.setAttribute("src", `${res[i].video}`);
      scroll.style.setProperty("--scroll-color", "rgba(72, 72, 72,0.8)");
      document.querySelector(".read-more").addEventListener("click", () => {
        document.querySelector("#movie-description").innerHTML = desc;
        document.querySelector(".read-more").style.display = "none";
        document.querySelector(".read-less").style.display = "inline-block";
      });
      document.querySelector(".read-less").addEventListener("click", () => {
        document.querySelector("#movie-description").innerHTML =
          desc.substr(0, 150) + "...";
        document.querySelector(".read-more").style.display = "inline-block";
        document.querySelector(".read-less").style.display = "none";
      });
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

  aboutButton.addEventListener("click", () => {
    tabName.innerHTML = "About Us";
    fullBox.style.display = "none";
    fullAbout.style.display = "block";
    scroll.style.setProperty("--scroll-color", "rgba(72, 72, 72,0.8)");
    scroll.style.setProperty("--scroll-color-hover", "#2154ff80");
  });
  backButton.addEventListener("click", () => {
    tabName.innerHTML = "Movies: Cineman - Movie Streaming Service";
    fullBox.style.display = "flex";
    fullAbout.style.display = "none";
    scroll.style.setProperty("--scroll-color", "#2154ff");
    scroll.style.setProperty("--scroll-color-hover", "#2154ff");
    selectOption.selectedIndex = "1";
  });

  const logo = document.getElementById("logotxt-movie");
  logo.addEventListener("click", () => {
    fullBox.style.display = "flex";
    fullBoxMovie.style.display = "none";
    tabName.innerHTML = "Movies: Cineman - Movie Streaming Service";
    scroll.style.setProperty("--scroll-color", "#2154ff");
  });

  const homeButton = document.querySelectorAll(".home-btn");
  for (let i = 0; i < homeButton.length; ++i) {
    homeButton[i].addEventListener("click", () => {
      fullBox.style.display = "flex";
      fullBoxMovie.style.display = "none";
      tabName.innerHTML = "Movies: Cineman - Movie Streaming Service";
      respNavMenuMovie.style.transform = "translateY(-100%)";
      scroll.style.setProperty("--scroll-color", "#2154ff");
    });
  }
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

    const frame = document.querySelector("#movie-frame iframe");
    const movieDes = document.getElementById("movie-des");

    animeCard.addEventListener("click", () => {
      fullBox.style.display = "none";
      fullBoxMovie.style.display = "block";
      const desc = res[i].desc;
      movieDes.innerHTML = `<img id="movie-img" src="${res[i].image}" alt="${
        res[i].title
      }" />
      <div>
      <h2 id="movie-title">${res[i].title}</h2>
      <p id="movie-description">${
        desc.length > 150 ? desc.substr(0, 150) + "..." : desc
      }</p>
      ${
        desc.length > 150
          ? `<button class="read-more">Read More</button><button class="read-less">Read Less</button>`
          : ``
      }
      <table>
        <tr>
          <td>Genres:</td>
          <td class="table-right" id="movie-genre">${res[i].genre}</td>
        </tr>
        <tr>
          <td>Production:</td>
          <td class="table-right" id="movie-production">${
            res[i].production
          }</td>
        </tr>
        <tr>
          <td>Duration:</td>
          <td class="table-right" id="movie-duration">${res[i].len}</td>
        </tr>
      </table>
      </div>
      `;
      if (window.innerWidth <= 410) {
        document.getElementById(
          "resp-description"
        ).innerHTML = `<p id="movie-description">${
          desc.length > 150 ? desc.substr(0, 150) + "..." : desc
        }</p>
        ${
          desc.length > 150
            ? `<button class="read-more">Read More</button><button class="read-less">Read Less</button>`
            : ``
        }`;
      }
      tabName.innerHTML = `${res[i].title}`;
      frame.setAttribute("src", `${res[i].video}`);
      scroll.style.setProperty("--scroll-color", "rgba(72, 72, 72,0.8)");
      document.querySelector(".read-more").addEventListener("click", () => {
        document.querySelector("#movie-description").innerHTML = desc;
        document.querySelector(".read-more").style.display = "none";
        document.querySelector(".read-less").style.display = "inline-block";
      });
      document.querySelector(".read-less").addEventListener("click", () => {
        document.querySelector("#movie-description").innerHTML =
          desc.substr(0, 150) + "...";
        document.querySelector(".read-more").style.display = "inline-block";
        document.querySelector(".read-less").style.display = "none";
      });
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

  aboutButton.addEventListener("click", () => {
    tabName.innerHTML = "About Us";
    fullBox.style.display = "none";
    fullAbout.style.display = "block";
    scroll.style.setProperty("--scroll-color", "rgba(72, 72, 72,0.8)");
    scroll.style.setProperty("--scroll-color-hover", "#2154ff80");
  });
  backButton.addEventListener("click", () => {
    tabName.innerHTML = "Animes: Cineman - Movie Streaming Service";
    fullBox.style.display = "flex";
    fullAbout.style.display = "none";
    scroll.style.setProperty("--scroll-color", "#2154ff");
    scroll.style.setProperty("--scroll-color-hover", "#2154ff");
    selectOption.selectedIndex = "2";
  });

  const logo = document.getElementById("logotxt-movie");
  logo.addEventListener("click", () => {
    fullBox.style.display = "flex";
    fullBoxMovie.style.display = "none";
    tabName.innerHTML = "Animes: Cineman - Movie Streaming Service";
    scroll.style.setProperty("--scroll-color", "#2154ff");
  });

  const homeButton = document.querySelectorAll(".home-btn");
  for (let i = 0; i < homeButton.length; ++i) {
    homeButton[i].addEventListener("click", () => {
      fullBox.style.display = "flex";
      fullBoxMovie.style.display = "none";
      tabName.innerHTML = "Animes: Cineman - Movie Streaming Service";
      respNavMenuMovie.style.transform = "translateY(-100%)";
      scroll.style.setProperty("--scroll-color", "#2154ff");
    });
  }
}
// getAnime();
animeButton.addEventListener("click", getAnime);

const showAbout = () => {
  fullBox.style.display = "none";
  fullAbout.style.display = "block";
  tabName.innerHTML = "About Us";
};
const getOption = () => {
  document.addEventListener("input", (event) => {
    if (event.target.id !== "resp-nav") {
      return;
    }
    if (event.target.selectedIndex == "2") {
      return getAnime();
    } else if (event.target.selectedIndex == "3") {
      return showAbout();
    } else {
      return getMovie();
    }
  });
};
getOption();

const footer = document.querySelector("footer div");
const d = new Date();
const currentYear = d.getFullYear();
footer.innerHTML = `<i class="fa-regular fa-copyright"></i> Copyright ${currentYear}
<br />
Designed and Developed By Dhruv Arora and Dipanshu Prasad`;
