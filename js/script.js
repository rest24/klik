const taneuh = document.querySelectorAll(".taneuh");
const oray = document.querySelectorAll(".oray");

let taneuhSebelumnya;

function randomTaneuh(taneuh) {
  const t = Math.floor(Math.random() * taneuh.length);
  const tRandom = taneuh[t];

  if (tRandom == taneuhSebelumnya) {
    randomTaneuh(taneuh);
  }

  taneuhSebelumnya = tRandom;
  return tRandom;
}

function randomWaktu(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function munculkanOray(taneuh) {
  const tRandom = randomTaneuh(taneuh);
  const wRandom = randomWaktu(300, 1000);

  tRandom.classList.add("muncul");
  setTimeout(() => {
    tRandom.classList.remove("muncul");
    munculkanOray(taneuh);
  }, wRandom);
  
}
