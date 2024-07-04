document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const countriesContainer = document.getElementById("countries-container");

  fetch("https://cars-pagination.onrender.com/all-countries")
    .then((response) => response.json())
    .then((data) => {
      loader.style.display = 'none';
      countriesContainer.style.display = 'flex';
      data.forEach((country) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<img src="${country.flag}"/> <h2>${country.country}</h2><p>${country.code}</p>`;
        card.addEventListener("click", () => {
          showModal(country);
        });
        countriesContainer.appendChild(card);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));

  const modal = document.getElementById("modal");
  const span = document.getElementsByClassName("close")[0];

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  function showModal(country) {
    document.querySelector("#img-flag").setAttribute("src", country.flag);
    document.getElementById("modal-country-name").textContent = country.country;
    document.getElementById("modal-country-code").textContent = country.code;
    modal.style.display = "block";
  }
});
