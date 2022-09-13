
// нахожу слушателя:
const bodyEl = document.querySelector('body');
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
    //  color = getRandomHexColor();
     bodyEl.style.background = getRandomHexColor();  
    }, 1000);
}

// функция стоп цвет
function onStopColorClick() {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  clearInterval(timerId);
}

//  функция рандомный цвет
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
