import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const refs = {
  startBtn: document.querySelector('button[data-start]'),
  inputEl: document.querySelector('#datetime-picker'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

// const today = new Date();
intervalId = null;
let selectedTime = null;


refs.startBtn.addEventListener('click', onStartBtnClick);

refs.startBtn.disabled = true;

// инициализация библиотеки на элементе
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if(selectedDates[0] < Date.now()) {
          Notiflix.Notify.failure (`❌ Please choose a date in the future`);
            // window.alert("Please choose a date in the future"); 
            refs.startBtn.disabled = true;
          }
      
          if(selectedDates[0] > Date.now()) {
            selectedTime = selectedDates[0];
            refs.startBtn.disabled = false;
          }
        //   console.log(selectedDates[0]);
        },
      };
      
      flatpickr(refs.inputEl, options);

// функция клика на кнопку старт
function onStartBtnClick() {
    refs.startBtn.disabled = true;
    
  
    intervalId = setInterval(() => {
     const deltaTime =  selectedTime - Date.now();
     if(deltaTime <= 1000) {
      clearInterval(intervalId);
     }
     const { days, hours, minutes, seconds } = convertMs(deltaTime);
     console.log(`${days}:${hours}:${minutes}:${seconds}`);
  
      refs.days.textContent = addLeadingZero(days);
      refs.hours.textContent = addLeadingZero(hours);
      refs.minutes.textContent = addLeadingZero(minutes);
      refs.seconds.textContent = addLeadingZero(seconds);
      
    }, 1000);
   };

// копипаста из ТЗ
function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }
  
//   console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
//   console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
//   console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}


// // форматирования, принимает число приводит к строке и добавляет в начало 0 если число меньше 2 символов:  
function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}




