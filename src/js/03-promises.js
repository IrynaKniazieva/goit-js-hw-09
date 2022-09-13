import Notiflix from 'notiflix';

const refs = {
  formEl:document.querySelector('.form'),
  delay:document.querySelector('input[name="delay"]'),
  step:document.querySelector('input[name="step"]'),
  amount:document.querySelector('input[name="amount"]'),
}

refs.formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
evt.preventDefault ()

let delay = Number(refs.delay.value);
let step = Number(refs.step.value);
let amount = Number(refs.amount.value);

for(let position = 1; position <= amount; position += 1) 
{
  createPromise(position, delay)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure (`❌ Rejected promise ${position} in ${delay}ms`);
  });
delay += step;
}
}


function createPromise(position, delay) {
  return new Promise ((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout (() => {

    if (shouldResolve) {
      resolve ({ position, delay });
    } else {
      reject ({ position, delay });
    }
  }, delay);
});
}


