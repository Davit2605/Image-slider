const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const imgs = document.querySelector(".imgs");
const img = document.querySelectorAll(".imgs img");

//TWO DIFFERENT WORKING CODES BELOW

/*
let idx = 0;

let interval = setInterval(run, 2000);

function run() {
idx++;
updateSlider();
}

function updateSlider() {
if (idx > img.length - 1) {
idx = 0;
} else if (idx < 0) {
idx = img.length - 1;
}

imgs.style.transform = `translateX(${-idx * 400}px)`;
}

function resetInterval() {
clearInterval(interval);
interval = setInterval(run, 2000);
}

nextBtn.addEventListener("click", () => {
idx++;
updateSlider();
resetInterval();
});

prevBtn.addEventListener("click", () => {
idx--;
updateSlider();
resetInterval();
});

*/

let idx = 0;
let timeout;

updateImage();

nextBtn.addEventListener("click", () => {
  idx++;
  clearTimeout(timeout);
  updateImage();
});

prevBtn.addEventListener("click", () => {
  idx--;
  clearTimeout(timeout);
  updateImage();
});

function updateImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }

  imgs.style.transform = `translateX(${-idx * 400}px)`;
  timeout = setTimeout(() => {
    idx++;
    updateImage();
  }, 2000);
}
