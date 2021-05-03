"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnShowModal = document.querySelectorAll(".show-modal");

const removeHidden = () => {
	modal.classList.remove("hidden");
	overlay.classList.remove("hidden");
};

for (let index = 0; index < btnShowModal.length; index += 1) {
	btnShowModal[index].addEventListener("click", removeHidden);
}

const addHidden = () => {
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", addHidden);

overlay.addEventListener("click", addHidden);

document.addEventListener("keydown", function (event) {
	if (event.key === "Escape") {
		if (!modal.classList.contains("hidden")) {
			addHidden();
		}
	}
});
