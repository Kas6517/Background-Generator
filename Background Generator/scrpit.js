const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const randomColor = document.querySelector(".random-color");

function linearBackground() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

function changeBackground() {
  body.style.background = `linear-gradient(to right,${getRandomHEXColor()},${getRandomHEXColor()})`;
}

function getRandomHEXColor() {
  const SEED = "0123456789abcdef";
  let output = "#";
  while (output.length < 7) {
    output += SEED[Math.floor(Math.random() * SEED.length)];
  }
  return output;
}

randomColor.addEventListener("click", changeBackground);

color1.addEventListener("input", linearBackground);

color2.addEventListener("input", linearBackground);
