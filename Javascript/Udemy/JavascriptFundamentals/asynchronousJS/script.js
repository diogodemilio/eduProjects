"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
const renderCountry = function (country, className = "") {
	const html = `
  <article class="country ${className}">
    <img class="country__img" src="${country.flag}" />
    <div class="country__data">
      <h3 class="country__name">${country.name}</h3>
      <h4 class="country__region"${country.region}</h4>
      <p class="country__row"><span>👫</span>${(
				+country.population / 1000000
			).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${country.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${country.currencies[0].code}</p>
    </div>
  </article>
  `;

	countriesContainer.insertAdjacentHTML("beforeend", html);
	countriesContainer.style.opacity = 1;
};

// DESCRIPTION AJAX HTTP Request (XML data format)
const getCountryAndNeighbour = function (countryName) {
	const request = new XMLHttpRequest();
	request.open("GET", `https://restcountries.eu/rest/v2/name/${countryName}`);
	request.send();

	request.addEventListener("load", function () {
		const [country] = JSON.parse(this.responseText);

		// DESCRIPTION Render Country 1
		renderCountry(country);

		// DESCRIPTION Get neighbour country
		const [neighbour] = country.borders;

		if (!neighbour) return;

		const request1 = new XMLHttpRequest();
		request1.open("GET", `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
		request1.send();

		request1.addEventListener("load", function () {
			const country = JSON.parse(this.responseText);

			// DESCRIPTION Render Country 1
			renderCountry(country, "neighbour");
		});
	});
};

//getCountryAndNeighbour("Portugal");

// DESCRIPTION AJAX HTTP Request (JSON data format)
const getCountryData = function (country) {
	fetch(`https://restcountries.eu/rest/v2/name/${country}`)
		.then((response) => response.json())
		.then(([countryData]) => renderCountry(countryData));
};

getCountryData("Portugal");
