const taneuh = document.querySelectorAll(".taneuh");
const oray = document.querySelectorAll(".oray");
const papanskor = document.querySelector(".papan-skor");

let taneuhSebelumnya;
let selesai = false;
let skor = 0;
let intervalId; // Deklarasikan variabel intervalId di luar fungsi mulai()

function randomTaneuh(taneuh) {
  const t = Math.floor(Math.random() * taneuh.length);
  const tRandom = taneuh[t];

  if (tRandom === taneuhSebelumnya) {
    return randomTaneuh(taneuh);
  }

  taneuhSebelumnya = tRandom;
  return tRandom;
}

function randomWaktu(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function munculkanOray() {
  const tRandom = randomTaneuh(taneuh);
  const wRandom = randomWaktu(300, 1000);

  tRandom.classList.add("muncul");
  setTimeout(() => {
    tRandom.classList.remove("muncul");
  }, wRandom);

  if (!selesai) {
    intervalId = setTimeout(munculkanOray, wRandom + 500); // Interval antara muncul dan hilang oray
  }
}

function mulai() {
  selesai = false;
  skor = 0;
  papanskor.textContent = 0;
  munculkanOray();
  setTimeout(() => {
    selesai = true;
    clearTimeout(intervalId); // Hentikan interval setelah waktu permainan berakhir
  }, 10000);
}

function pukul() {
  if (!selesai) {
    skor++;
    this.parentNode.classList.remove('muncul');
    papanskor.textContent = skor;
  }
}

oray.forEach(t => {
  t.addEventListener('click', pukul);
});
