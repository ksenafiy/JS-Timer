const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

let interval;

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl

const createTimerAnimator = (seconds) => {
  return (seconds) => {
    clearInterval(interval); // Предотвращаем поломку таймера
    interval = setInterval(() => {
      sec = seconds % 60; // Получаем секунды
      sec = sec < 10 ? "0" + sec : sec; // Если число секунд/минут/часов меньше 10, то приписываем в начале 0, иначе оставляем как было
      minutes = Math.floor(seconds / 60) % 60; // Получаем минуты
      minutes = minutes < 10 ? "0" + minutes : minutes;
      hours = Math.floor(seconds / 60 / 60) % 60; // Получаем часы
      hours = hours < 10 ? "0" + hours : hours;
      // Условие. Если время закнчилось, ...
      if (seconds < 0) {
        // Таймер удаляется
        clearInterval(interval);
        // Возвращаем все как было
        timerEl.innerHTML = `hh:mm:ss`;
        inputEl.placeholder = "Seconds";
      } else {
        // Иначе ...
        timerEl.innerHTML = `${hours}:${minutes}:${sec}`; // Создаем строку с выводом времени
      }
      seconds--; // Уменьшаем таймер
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.placeholder = inputEl.value;
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = "";
});
