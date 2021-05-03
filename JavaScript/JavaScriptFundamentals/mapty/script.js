"use strict";

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

class Workout {
	date = new Date();
	id = (Date.now() + "").slice(-10);
	clicks;
	description;

	constructor(coordinates, distance, duration) {
		this.coordinates = coordinates;
		this.distance = distance;
		this.duration = duration;
	}

	_description() {
		// prettier-ignore
		const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

		this.description = `${this.type} on ${
			months[this.date.getMonth()]
		} ${this.date.getUTCDate()}`;
	}

	click() {
		this.clicks++;
	}
}

class Running extends Workout {
	type = "Running";

	constructor(coordinates, distance, duration, cadence) {
		super(coordinates, distance, duration);
		this.cadence = cadence;
		this._calculatePace();
		this._description();
	}

	_calculatePace() {
		this.pace = this.duration / this.distance;
		return this.pace;
	}
}

class Cycling extends Workout {
	type = "Cycling";

	constructor(coordinates, distance, duration, elevationGain) {
		super(coordinates, distance, duration);
		this.elevationGain = elevationGain;
		this._calculateSpeed();
		this._description();
	}

	_calculateSpeed() {
		this.speed = this.distance / (this.duration / 60);
		return this.speed;
	}
}

class App {
	#map;
	#mapEvent;
	#mapZoomLevel = 16;
	#workouts = [];
	#localStorageKey = "workout";

	constructor() {
		// NOTE Get user's position
		this._getposition();

		// NOTE Get data from local storage
		this._getDataStorage();

		// NOTE Attach event handlers
		form.addEventListener("submit", this._newWorkout.bind(this));
		inputType.addEventListener("change", this._toggleElevationField);
		containerWorkouts.addEventListener("click", this._moveToPopup.bind(this));
	}

	_showForm(mapEvnt) {
		this.#mapEvent = mapEvnt;
		form.classList.remove("hidden");
		inputDistance.focus();
	}

	_hideForm() {
		inputDistance.value = "";
		inputDuration.value = "";
		inputCadence.value = "";
		inputElevation.value = "";

		form.style.display = "none";
		form.classList.add("hidden");
		setTimeout(() => (form.style.display = "grid"), 1000);
	}

	_loadMap(position) {
		const { latitude } = position.coords;
		const { longitude } = position.coords;
		const coords = [latitude, longitude];

		this.#map = L.map("map").setView(coords, 16);

		L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
			attribution:
				'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		}).addTo(this.#map);

		this.#map.on("click", this._showForm.bind(this));

		this.#workouts.forEach((workout) => {
			this._renderWorkout(workout);
			this._renderWorkoutMap(workout);
		});
	}

	_getposition() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				this._loadMap.bind(this),
				function () {
					alert("Could not get your position");
				}
			);
		}
	}

	_toggleElevationField() {
		inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
		inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
	}

	_newWorkout(event) {
		event.preventDefault();

		const validInputs = (...inputs) =>
			inputs.every((input) => Number.isFinite(input));

		const allPositive = (...inputs) => inputs.every((input) => input > 0);

		const sessionType = inputType.value;
		const distance = Number(inputDistance.value);
		const duration = Number(inputDuration.value);
		const { lat, lng } = this.#mapEvent.latlng;
		let workout;
		let workoutType;

		if (sessionType === "running") {
			const cadence = Number(inputCadence.value);

			if (
				!validInputs(distance, duration, cadence) ||
				!allPositive(distance, duration, cadence)
			)
				return alert("Inputs have to be positive numbers!");

			workout = new Running([lat, lng], distance, duration, cadence);
		} else if (sessionType === "cycling") {
			const elevationGain = Number(inputElevation.value);

			if (
				!validInputs(distance, duration, elevationGain) ||
				!allPositive(distance, duration)
			)
				return alert("Inputs have to be positive numbers!");

			workout = new Cycling([lat, lng], distance, duration, elevationGain);
		}

		// NOTE Add new objects to workout array
		this.#workouts.push(workout);

		// NOTE Render workout on map as marker
		this._renderWorkoutMap(workout);

		// NOTE Render workout on list
		this._renderWorkout(workout);

		// NOTE Hide form + clear input fields
		this._hideForm();

		// NOTE Set local storage to all workouts
		this._setLocalStorage();
	}

	_renderWorkoutMap(workout) {
		L.marker(workout.coordinates)
			.addTo(this.#map)
			.bindPopup(
				L.popup({
					minWidth: 100,
					maxWidth: 250,
					autoClose: false,
					closeOnClick: false,
					className: `${
						workout.type === "Running" ? "running" : "cycling"
					}-popup`,
				})
			)
			.setPopupContent(`${workout.description}`)
			.openPopup();
	}

	_renderWorkout(workout) {
		let html = `
      <li class="workout workout--${workout.type}" data-id="${workout.id}">
        <h2 class="workout__title">${workout.description}</h2>
        <div class="workout__details">
          <span class="workout__icon">${
						workout.type === "Running" ? "🏃‍♂️" : "🚴‍♀️"
					}</span>
          <span class="workout__value">${workout.distance}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${workout.duration}</span>
          <span class="workout__unit">min</span>
        </div>
    `;

		if (workout.type == "Running") {
			html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.cadence}</span>
          <span class="workout__unit">min/km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">🦶🏼</span>
          <span class="workout__value">${workout.pace}</span>
          <span class="workout__unit">spm</span>
        </div>
      </li>
    `;
		} else {
			html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.speed.toFixed(1)}</span>
          <span class="workout__unit">km/h</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⛰</span>
          <span class="workout__value">${workout.elevationGain}</span>
          <span class="workout__unit">m</span>
        </div>
      </li>
      `;
		}

		form.insertAdjacentHTML("afterend", html);
	}

	_moveToPopup(event) {
		if (!this.#map) return;

		const workoutElement = event.target.closest(".workout");

		if (!workoutElement) return;

		const workout = this.#workouts.find(
			(workout) => workout.id === workoutElement.dataset.id
		);

		this.#map.setView(workout.coordinates, this.#mapZoomLevel, {
			animate: true,
			pan: { duration: 1 },
		});

		workout.click();
	}

	_setLocalStorage() {
		localStorage.setItem(this.#localStorageKey, JSON.stringify(this.#workouts));
	}

	_getDataStorage() {
		const data = JSON.parse(localStorage.getItem(this.#localStorageKey));

		if (!data) return;

		this.#workouts = data;

		this.#workouts.forEach((workout) => {
			this._renderWorkout(workout);
		});
	}

	reset() {
		localStorage.removeItem(this.#localStorageKey);
		location.reload();
	}
}

const app = new App();
const runningSession = new Running();
