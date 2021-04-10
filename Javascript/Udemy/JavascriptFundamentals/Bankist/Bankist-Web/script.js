"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");

const section1 = document.querySelector("#section--1");

// Tabbed Components
const tab = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabContent = document.querySelectorAll(".operations__content");

const openModal = function (event) {
	event.preventDefault();
	modal.classList.remove("hidden");
	overlay.classList.remove("hidden");
};

const closeModal = function () {
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (event) {
	if (event.key === "Escape" && !modal.classList.contains("hidden")) {
		closeModal();
	}
});

btnScrollTo.addEventListener("click", function (event) {
	section1.scrollIntoView({ behavior: "smooth" });
});

// DOM Delegation
document
	.querySelector(".nav__links")
	.addEventListener("click", function (event) {
		event.preventDefault();

		if (event.target.classList.contains("nav__link")) {
			const section = event.target.getAttribute("href");
			console.log(section);

			document.querySelector(section).scrollIntoView({ behavior: "smooth" });
		}
	});

// const tab = document.querySelectorAll(".operations__tab");
// const tabsContainer = document.querySelector(".operations__tab-container");
// const tabContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", function (event) {
	event.preventDefault();

	const btnClicked = event.target.closest(".operations__tab");

	// Guard clause
	if (!btnClicked) return;

	tab.forEach((btnTab) => {
		btnTab.classList.remove("operations__tab--active");
		console.log(btnTab);
		document
			.querySelector(`.operations__content--${btnClicked.dataset.tab}`)
			.classList.remove("operations__content--active");
	});
	btnClicked.classList.add("operations__tab--active");
	document
		.querySelector(`.operations__content--${btnClicked.dataset.tab}`)
		.classList.add("operations__content--active");
});
