formEl = document.querySelector('.form');
delay = document.querySelector('input[name="delay"]');
step = document.querySelector('input[name="step"]');
amount = document.querySelector('input[name="amount"]');

const createPromise = (position, delay) => {

  const shouldResolve = Math.random() > 0.3;

  setTimeout (() => {
    
  })

  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}; 

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });