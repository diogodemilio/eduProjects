"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const section1 = document.querySelector("#section--1");
const sections = document.querySelectorAll(".section");
const imgTargets = document.querySelectorAll("img[data-src]");

// Slider Components
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const dotContainer = document.querySelector(".dots");

// Tabbed Components
const tab = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

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
// const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", function (event) {
	event.preventDefault();

	const btnClicked = event.target.closest(".operations__tab");

	// Guard clause
	if (!btnClicked) return;

	// Remove active button
	tab.forEach((btnTab) => {
		btnTab.classList.remove("operations__tab--active");
	});

	// Remove active tab
	tabsContent.forEach((tabContent) => {
		tabContent.classList.remove("operations__content--active");
	});

	btnClicked.classList.add("operations__tab--active");
	document
		.querySelector(`.operations__content--${btnClicked.dataset.tab}`)
		.classList.add("operations__content--active");
});

// Menu fade animations
const handleHover = function (event, opacity = 1) {
	if (event.target.classList.contains("nav__link")) {
		const aElementClicked = event.target;
		const siblings = aElementClicked
			.closest(".nav")
			.querySelectorAll(".nav__link");
		const logo = aElementClicked.closest(".nav").querySelector("img");

		siblings.forEach((element) => {
			if (element !== aElementClicked) element.style.opacity = opacity;
		});
		logo.style.opacity = opacity;
	}
};

nav.addEventListener("mouseover", function (event) {
	handleHover(event, 0.5);
});

nav.addEventListener("mouseout", function (event) {
	handleHover(event);
});

// Sticky navigation
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
	const [entry] = entries;
	if (!entry.isIntersecting) nav.classList.add("sticky");
	else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
	root: null,
	threshold: 0,
	rootMargin: `${navHeight}px`,
});
headerObserver.observe(header);

// Reveal sections
const revealSection = function (entries, observer) {
	const [entry] = entries;

	if (!entry.isIntersecting) return;

	entry.target.classList.remove("section--hidden");
	observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
	root: null,
	threshold: 0.15,
});

sections.forEach((section) => {
	sectionObserver.observe(section);
	//	section.classList.add("section--hidden");
});

//const imgTargets = document.querySelectorAll("img[data-src]");
// Lazy loading images

console.log(imgTargets);

const loadImage = function (entries, observer) {
	const [entry] = entries;

	if (!entry.isIntersecting) return;

	entry.target.src = entry.target.dataset.src;

	entry.target.addEventListener("load", function () {
		entry.target.classList.remove("lazy-img");
	});

	observer.unobserve(entry.target);
};

const imageObserver = new IntersectionObserver(loadImage, {
	root: null,
	threshold: 0,
	rootMargin: "200px",
});

imgTargets.forEach((image) => {
	imageObserver.observe(image);
});

// Slider component
let currentSlide = 0;

const createDots = (function () {
	slides.forEach(function (_, index) {
		dotContainer.insertAdjacentHTML(
			"beforeend",
			`<button class="dots__dot" data-slide="${index}"></button>`
		);
	});
})();

const activeDot = function (slide) {
	document
		.querySelectorAll(".dots__dot")
		.forEach((dot) => dot.classList.remove("dots__dot--active"));

	document
		.querySelector(`.dots__dot[data-slide="${slide}"]`)
		.classList.add("dots__dot--active");
};

const goToSlide = function (slideNumber) {
	currentSlide += slideNumber;

	if (slideNumber > 0 && currentSlide >= slides.length) {
		currentSlide = 0;
	} else if (slideNumber < 0 && currentSlide < 0) {
		currentSlide = slides.length - 1;
	}

	console.log("Current slide: " + currentSlide);
	activeDot(currentSlide);
	slides.forEach(
		(slide, index) =>
			(slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`)
	);
};

goToSlide(0);

btnRight.addEventListener("click", function (event) {
	//event.preventDefault();
	goToSlide(+1);
});

btnLeft.addEventListener("click", function (event) {
	//event.preventDefault();
	goToSlide(-1);
});

document.addEventListener("keydown", function (event) {
	switch (event.key) {
		case "ArrowLeft":
			goToSlide(-1);
			break;
		case "ArrowRight":
			goToSlide(+1);
			break;
	}
});

dotContainer.addEventListener("click", function (event) {
	if (event.target.classList.contains("dots__dot")) {
		const { slide } = event.target.dataset;
		goToSlide(Number(slide) - currentSlide);
		activeDot(Number(slide));
	}
});

// const observerCallback = function (entries, observer) {
// 	entries.forEach((entry) => {
// 		console.log(entry);
// 	});
// };

// const observerOptions = {
// 	root: null,
// 	threshold: [0, 0.2]
// };
// new observer() = IntersectionObserver(observerCallback, observerOptions);

// observer.observe(section1);

// BAD PERFORMANCE ISSUES

// const section1InitialCoords = section1.getBoundingClientRect();
// window.addEventListener("scroll", function () {
// 	if (window.scrollY > section1InitialCoords.top) nav.classList.add("sticky");
// 	else nav.classList.remove("sticky");
// });
