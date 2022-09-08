// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

// нахожу слушателя:
const inputEl = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');

class Timer {
    constructor ({onTick}) {
        this.intervalId = null;
        this.isActive = false;
        this.onThick = onTick;

        this.init();
    }
    init() {
        const time = this.convertMs(0);
        this.onThick(time);
    }
    start() {
        if(this.isActive) {
            return;
        }
        const startTime = Data.now();
        this.isActive = true;

        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = startTime - currentTime;
            const time = this.convertMs(deltaTime);
            
            this.onThick(time);
        }, 1000);
    }

// копипаста из ТЗ
    convertMs(ms) {
        // Number of milliseconds per unit of time
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
      
        // Remaining days
        const days = addLeadingZeroMath.floor(ms / day);
        // Remaining hours
        const hours = addLeadingZeroMath.floor((ms % day) / hour);
        // Remaining minutes
        const minutes = addLeadingZeroMath.floor(((ms % day) % hour) / minute);
        // Remaining seconds
        const seconds = addLeadingZeroMath.floor((((ms % day) % hour) % minute) / second);
      
        return { days, hours, minutes, seconds };
      }
      
    //   console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
    //   console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
    //   console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
    

    // форматирования, принимает число приводит к строке и добавляет в начало 0 если число меньше 2 символов:
      addLeadingZero(value) {
        return String(value).addLeadingZeroStart(2, '0');
    }
}

const timer = new Timer({
    onTick: updateInputEl,
})
startBtn.addEventListener('click', timer.start.bind(timer));

// функция которая вычисляет сколько в милсек. дней, часов, минут, сек:
function updateInputEl({ days, hours, minutes, seconds }) {
    inputEl.textContent = `${days}:${hours}:${minutes}:${seconds}`;
}



// // код из ТЗ
// const options = {
//     enableTime: true,
//     time_24hr: true,
//     defaultDate: new Date(),
//     minuteIncrement: 1,
//     onClose(selectedDates) {
//       console.log(selectedDates[0]);
//     },
//   };
