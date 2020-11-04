"use strict";

const body = document.querySelector("body"),
  modal = body.querySelector("#modal"),
  modalOpenBtn = body.querySelector(".project__btn"),
  modalCodeBtn = modal.querySelector(".modal__code"),
  modalSiteBtn = modal.querySelector(".modal__site"),
  modalCloseBtn = modal.querySelector(".modal__close"),
  modalBg = modal.querySelector(".modal__bg"),
  modalItem = modal.querySelectorAll(".modal__item");

let modalIndex = 0;

modalOpenBtn.addEventListener("click", () => {
  modalIndex = modalOpenBtn.getAttribute("id");
  modalItem[modalIndex].classList.add("active");
  modal.classList.remove("none");
  body.classList.add("hidden");
});

modalCodeBtn.addEventListener("click", () => {
  switch (modalIndex) {
    case "0":
      window.open("https://github.com/990225/990225.github.io");
      break;
  }
});

modalSiteBtn.addEventListener("click", () => {
  switch (modalIndex) {
    case "0":
      window.open("https://990225.github.io/");
      break;
  }
});

modalCloseBtn.addEventListener("click", closeModal);

modalBg.addEventListener("click", closeModal);

function closeModal() {
  modalItem[modalIndex].classList.remove("active");
  modal.classList.add("none");
  body.classList.remove("hidden");
}
