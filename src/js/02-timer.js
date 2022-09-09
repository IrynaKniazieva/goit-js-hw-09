import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    startBtn: document.querySelector('button[data-start]'),
    inputEl: document.querySelector('#datetime-picker'),
    daysEl: document.querySelector('[data-days]'),
    hoursEl: document.querySelector('[data-hours]'),
    minutesEl: document.querySelector('[data-minutes]'),
    secondsEl: document.querySelector('[data-seconds]'),
};

class Timer {
    constructor({onTick}) {
        this.intervalId = null;
        this.isActive = false;
        this. onTick = onTick;
    }

    start() {
        const startTime = Date.now();

        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = startTime - currentTime;
            const { days, hours, minutes, seconds } = convertMs(deltaTime);
            console.log(`${days}:${hours}:${minutes}:${seconds}`);
        }, 1000);
    }
    convertMs(ms) {
        // Number of milliseconds per unit of time
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
      
        // Remaining days
        const days = Math.floor(ms / day);
        // Remaining hours
        const hours = Math.floor((ms % day) / hour);
        // Remaining minutes
        const minutes = Math.floor(((ms % day) % hour) / minute);
        // Remaining seconds
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);
      
        return { days, hours, minutes, seconds };
      }

      addLeadingZero(value) {
        return String(value).addLeadingZeroStart(2, '0');
    }
};

// timer.start();
 

const currentDate =  Date.now('jan 1 2021 00:00:00');
let timerId = null;

refs.startBtn.setAttribute('disabled', true);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if(Date.parse.inputEl.value < Date.parse.currentDate) {
        window.alert("Please choose a date in the future"); 
      }else{
        refs.startBtn.setAttribute('disabled', false);
      }
      console.log(selectedDates[0]);
    },
};

flatpickr(refs.inputEl, {options});


// refs.startBtn.addEventListener('click',onBtnClickStart);


// function onStartBtnClick() {

// };


// копипаста из ТЗ
// function convertMs(ms) {
//     // Number of milliseconds per unit of time
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;
  
//     // Remaining days
//     const days = Math.floor(ms / day);
//     // Remaining hours
//     const hours = Math.floor((ms % day) / hour);
//     // Remaining minutes
//     const minutes = Math.floor(((ms % day) % hour) / minute);
//     // Remaining seconds
//     const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
//     return { days, hours, minutes, seconds };
//   }
  
//   console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
//   console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
//   console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}



// // форматирования, принимает число приводит к строке и добавляет в начало 0 если число меньше 2 символов:
// function addLeadingZero(value) {
//     return String(value).addLeadingZeroStart(2, '0');
// }
const timer = new Timer ({
    onTick: updateClockFace,
})
refs.startBtn.addEventListener('click', timer.start.bind(timer));

// // функция которая вычисляет сколько в милсек. дней, часов, минут, сек:
function updateClockFace ({ days, hours, minutes, seconds }) {
    refs.daysEl.textContent = `${days}`;
    refs.hoursEl.textContent = `${hours}`;
    refs.minutesEl.textContent = `${minutes}`;
    refs.secondsEl.textContent = `${seconds}`;
}














// const timer = new Timer();



