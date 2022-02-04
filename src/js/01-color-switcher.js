const startColorChangeBtnRef = document.querySelector('[data-start]');
const stopColorChangeBtnRef = document.querySelector('[data-stop]');

startColorChangeBtnRef.classList.add('color-switcher__start');
stopColorChangeBtnRef.classList.add('color-switcher__stop');

startColorChangeBtnRef.addEventListener('click', onStartColorChangeBtn);
stopColorChangeBtnRef.addEventListener('click', onStopColorChangeBtn);

const DELAY = 1000;
let timeoutId = null;

function onStartColorChangeBtn() {
  timeoutId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, DELAY);

  startColorChangeBtnRef.setAttribute('disabled', true);
  stopColorChangeBtnRef.removeAttribute('disabled');
}

function onStopColorChangeBtn() {
  clearInterval(timeoutId);
  stopColorChangeBtnRef.setAttribute('disabled', true);
  startColorChangeBtnRef.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
