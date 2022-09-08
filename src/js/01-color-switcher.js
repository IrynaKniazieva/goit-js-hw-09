
// нахожу слушателя:
const body = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

// слушатели:
startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopColorClick);

// глобальная переменная:
let timerId = null;

// функция старт цвет:
function onStartBtnClick() {
    startBtn.disabled = true;
    stopBtn.disabled = false;

    timerId = setInterval(() => {
     color = getRandomHexColor;
     body.style.background = color;  
    }, 1000);
}

// функция стоп цвет
function onStopColorClick() {

}

//  функция рандомный цвет
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }


//   const startBtn = document.querySelector(".js-start");
// const stopBtn = document.querySelector(".js-stop");
// let timerId = null;

// startBtn.addEventListener("click", () => {
//   timerId = setInterval(() => {
//     console.log(`I love async JS!  ${Math.random()}`);
//   }, 1000);
// });


// stopBtn.addEventListener("click", () => {
//   clearInterval(timerId);
//   console.log(`Interval with id ${timerId} has stopped!`);
// });