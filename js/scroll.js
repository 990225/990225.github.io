"use strict";

window.addEventListener("scroll", () => {
  const appearItem = document.querySelector("#project > .container"),
    itemPosition = appearItem.getBoundingClientRect().top,
    screenPosition = window.innerHeight;
  if (itemPosition < screenPosition / 1.2) {
    appearItem.style = "opacity: 1;";
  }
});
