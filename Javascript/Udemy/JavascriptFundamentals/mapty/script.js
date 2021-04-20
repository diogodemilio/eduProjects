"use strict";

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

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
	constructor(coordinates, distance, duration) {
		this.coordinates = coordinates;
		this.distance = distance;
		this.duration = duration;
	}
}

class Running extends Workout {
	constructor(coordinates, distance, duration, cadence) {
		super(coordinates, distance, duration);
		this.cadence = cadence;
		this._calculatePace();
	}

	_calculatePace() {
		this.pace = this.duration / this.distance;
		return this.pace;
	}
}

class Cycling extends Workout {
	constructor(coordinates, distance, duration, elevationGain) {
		super(coordinates, distance, duration);
		this.elevationGain = elevationGain;
		this._calculateSpeed();
	}

	_calculateSpeed() {
		this.speed = this.distance / (this.duration / 60);
		return this.speed;
	}
}

class App {
	#map;
	#mapEvent;
	#workouts = [];

	constructor() {
		this._getposition();

		form.addEventListener("submit", this._newWorkout.bind(this));

		inputType.addEventListener("change", this._toggleElevationField);
	}

	_showForm(mapEvnt) {
		this.#mapEvent = mapEvnt;
		form.classList.remove("hidden");
		inputDistance.focus();
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
			workoutType = "workout--running";

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

			workoutType = "workout--cycling";

			workout = new Cycling([lat, lng], distance, duration, elevationGain);
		}

		this.#workouts.push(workout);

		L.marker([lat, lng])
			.addTo(this.#map)
			.bindPopup(
				L.popup({
					minWidth: 100,
					maxWidth: 250,
					autoClose: false,
					closeOnClick: false,
					className: workoutType,
				})
			)
			.setPopupContent("Workout")
			.openPopup();

		inputDistance.value = "";
		inputDuration.value = "";
		inputCadence.value = "";
		inputElevation.value = "";
	}
}

const app = new App();
const runningSession = new Running();
