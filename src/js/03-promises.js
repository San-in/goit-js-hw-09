import Notify from './nofify-config';

refs = {
  firstDelay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  btnCreate: document.querySelector('button[type="submit"]'),
  form: document.querySelector('.form')
};

refs.form.addEventListener('submit', handlerOnCreateBtn);

function handlerOnCreateBtn (event) {
  event.preventDefault();

  let position = 0;
  let delay = Number(event.target[0].value);
  const amount = event.target[2].value;
  const step = Number(event.target[1].value);
  

  for (let i = 0; i < amount; i += 1) {
    position += 1;
    createPromise (position, delay)
    .then((value) => Notify.success(value))
    .catch((error) => Notify.warning(error));
    delay += step;
    }
    refs.form.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      const shouldResolve = Math.random() > 0.3;
          if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    },delay);
  });
}
function createOnePromise(position,delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      const shouldResolve = Math.random() > 0.3;
          if (shouldResolve) {
        resolve({position,delay});
      } else {
        reject({position,delay});
      }
    },delay);
  });
}

createOnePromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });