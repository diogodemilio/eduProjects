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

const renderError = function (message) {
	countriesContainer.insertAdjacentText("beforeend", message);
	countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMessage = "Something went wrong") {
	return fetch(url).then((response) => {
		if (!response.ok) throw new Error(`${errorMessage} (${response.status})`);

		return response.json();
	});
};

/*
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

//getCountryData("Portugal");

const getPosition = function () {
	return new Promise(function (resolve, reject) {
		navigator.geolocation.getCurrentPosition(resolve, reject);
	});
};

const whereAmI = async function (country) {
	try {
		// Geolocation
		const position = await getPosition();
		const { latitude: lat, longitude: lng } = position.coords;

		// Reverse geocoding
		const responseGeo = await fetch(
			`https://geocode.xyz/${lat},${lng}?geoit=json`
		);
		if (!responseGeo.ok) throw new Error("Problem getting location data");
		const geoData = await responseGeo.json();

		// Country data
		const response = await fetch(
			`https://restcountries.eu/rest/v2/name/${country}`
		);
		if (!response.ok) throw new Error("Problem getting country");
		const data = await response.json();

		renderCountry(data[0]);
	} catch (error) {
		renderCountry(`Something went wrong ${error.message}`);

		// Reject promise returned from async function
		throw error;
	}
};

console.log("1: Will get location");
// whereAmI()
// 	.then((city) => console.log(`2: ${city}`))
// 	.catch((error) => console.error(`2: ${error.message}`))
// 	.finally(() => console.log("3: Finished getting location"));

(async function () {
	try {
		const city = await whereAmI();
		console.log(`2: ${city}`);
	} catch (error) {
		console.error(`2: ${error.message}`);
	}
	console.log("3: Finished getting location");
})();

const get3Countries = async function (country1, country2, country3) {
	try {
		// const [dataCountry1] = await getJSON(
		// 	`https://restcountries.eu/rest/v2/name/${country1}`
		// );
		// const [dataCountry2] = await getJSON(
		// 	`https://restcountries.eu/rest/v2/name/${country2}`
		// );
		// const [dataCountry3] = await getJSON(
		// 	`https://restcountries.eu/rest/v2/name/${country3}`
		// );

		const data = Promise.all([
			getJSON(`https://restcountries.eu/rest/v2/name/${country1}`),
			getJSON(`https://restcountries.eu/rest/v2/name/${country2}`),
			getJSON(`https://restcountries.eu/rest/v2/name/${country3}`),
		]);

		const capitals = (await data).map((countryData) => countryData[0].capital);
		console.log(capitals);
	} catch (error) {
		console.error(error);
	}
};

get3Countries("Portugal", "Canada", "Tanzania");
*/
