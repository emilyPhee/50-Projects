const loadingText = document.querySelector('.loading-text');
const background = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadingText.innerText = `${load}%`;
  loadingText.style.opacity = scale(load, 0, 100, 1, 0);
  background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

// ------------------------------------------------------------------

// -- My Trial version before the solution... --
// const loadingText = document.querySelector('.loading-text');
// const background = document.querySelector('.bg');

// let initialNum = 0;
// let blurValue = 30;
// let percentage = 1;

// const percentInterval = setInterval(increaseNum, 50);
// const blurInterval = setInterval(decreaseNum, 100);
// const percentFadeInterval = setInterval(decreasePercentage, 250);

// function increaseNum() {
//   if (initialNum < 99) {
//     initialNum++;
//     loadingText.innerHTML = `${initialNum}%`;
//   } else {
//     clearInterval(percentInterval);
//   }
// }

// function decreaseNum() {
//   if (blurValue > 0) {
//     blurValue--;
//     background.style.filter = `blur(${blurValue}px)`;
//   } else {
//     clearInterval(blurInterval);
//   }
// }

// function decreasePercentage() {
//   if (percentage > 0) {
//     percentage -= 0.1;
//     loadingText.style.opacity = `${percentage}`;
//   } else {
//     clearInterval(percentFadeInterval);
//   }
// }
