"use strict";

const slidePrevBtn = document.querySelector(".project__prev"),
  slideNextBtn = document.querySelector(".project__next"),
  slideItem = document.querySelectorAll(".project__item");

let slideIndex = 0;

slidePrevBtn.addEventListener("click", () =>
  slideIndex > 0 ? moveSlide(slideIndex - 1) : moveSlide(slideItem.length - 1)
);

slideNextBtn.addEventListener("click", () =>
  slideIndex < slideItem.length - 1 ? moveSlide(slideIndex + 1) : moveSlide(0)
);

function moveSlide(num) {
  slideItem[slideIndex].classList.remove("active");
  slideItem[num].classList.add("active");
  slideIndex = num;
  // modal.js에서 사용할 버튼의 아이디 지정
  const modalOpenBtn = document.querySelector(".project__btn");
  modalOpenBtn.id = num;
}
