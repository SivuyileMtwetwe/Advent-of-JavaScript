// const eye = document.getElementById("eye");
// const password = document.getElementById("pwd");

// eye.addEventListener('click', () => {
//     const type = password.type === 'password' ? 'text' : 'password';
//     password.type = type;

//     if (type === 'text') {
//         eye.src = "assets/eye.svg";
//     } else {
//         eye.src = "assets/eye.svg";
//     }
// });

// Challenge #2

document.addEventListener("DOMContentLoaded", () => {
    const dropdownButton = document.getElementById("dropdown-button");
    const dropdown = document.getElementById("dropdown");
    const searchBox = document.getElementById("search-box");
    const dropdownList = document.getElementById("dropdown-list");
  
    let movies = [];
  
    fetch("https://sivuyilemtwetwe.github.io/Advent-of-JavaScript/")
      .then(response => response.json())
      .then(data => {
        movies = data;
        displayMovies(movies);
      })
      .catch(error => console.error("Error fetching data:", error));
  
    dropdownButton.addEventListener("click", () => {
      dropdown.classList.toggle("hidden");
      searchBox.focus();
    });
  
    function displayMovies(movies) {
      dropdownList.innerHTML = movies
        .map(
          movie => `
          <li class="movie-item">
            <img src="${movie.Image}" alt="${movie["Image Alt"]}" class="thumbnail">
            <div class="movie-details">
              <p class="movie-title">${movie.Title}</p>
              <p class="movie-year">${movie.Year}</p>
            </div>
          </li>
        `
        )
        .join("");
  
      document.searchSelectorAll(".movie-item").forEach((item, index) => {
        item.addEventListener("click", () => {
          selectMovie(movies[index]);
        });
      });
    }
  
    searchBox.addEventListener("input", () => {
      const search = searchBox.value.toLowerCase();
      const filteredMovies = movies.filter(
        movie =>
          movie.Title.toLowerCase().includes(search) || movie.Year.includes(search)
      );
      displayMovies(filteredMovies);
    });
  

    document.addEventListener("click", item => {
      if (!dropdown.contains(item.target) && !dropdownButton.contains(item.target)) {
        dropdown.classList.add("hidden");
      }
    });
  });
  
