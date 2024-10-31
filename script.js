//aнимация нажатия кнопок внизу экрана
const telega = document.getElementById("telega");
const shop = document.getElementById("shop");
const youtube = document.getElementById("youtube");
const twitch = document.getElementById("twitch");

telega.addEventListener("click", function() {
    telega.style.animation = "colorChange2 0.1s";
    
    // Удаление анимации после завершения
    telega.addEventListener("animationend", () => {
        telega.style.animation = "none";
    });
});
shop.addEventListener("click", function() {
    shop.style.animation = "colorChange1 0.1s";
    
    // Удаление анимации после завершения
    shop.addEventListener("animationend", () => {
        shop.style.animation = "none";
    });
});
twitch.addEventListener("click", function() {
    twitch.style.animation = "colorChange3 0.1s";
    
    // Удаление анимации после завершения
    twitch.addEventListener("animationend", () => {
        twitch.style.animation = "none";
    });
});
youtube.addEventListener("click", function() {
    youtube.style.animation = "colorChange4 0.1s";
    
    // Удаление анимации после завершения
    youtube.addEventListener("animationend", () => {
        youtube.style.animation = "none";
    });
});

//код для работы health bar
let score = localStorage.getItem("score") || 0;//монеты сохраняются
let healthValue = localStorage.getItem("health") || 10//хп сохраняется
const scoreDisplay = document.getElementById("score");//монеты берутся из хтмл
scoreDisplay.textContent = score;//равняется
const healthElement = document.getElementById('health');

let pc = localStorage.getItem("pc") || 10;//значение сколько хп для некст уровня нужно тожн сохраняется
function decreaseHP() {
  score++;
  scoreDisplay.textContent = score;//меняется сумма монет
  localStorage.setItem("score", score);//монеты сохраняются

  if (healthValue > 0) {
    healthValue -= 1; // уменьшаем значение HP на 10
    if (healthValue <= 0) {
      healthValue =Math.round(pc * 1.3);
      pc =Math.round(pc *1.3); // увеличиваем значение HP в два раза, если healthValue меньше или равен 20
    }
    updateHealthBar();
  }
  localStorage.setItem("health", healthValue);//сохранение в базу хп
  localStorage.setItem("pc", pc);//сохранение в базу скок до некст уровня хп
}

function updateHealthBar() {
  let maxHealthValue = pc;
  let healthPercentage = (healthValue / maxHealthValue) * 100;
  healthElement.textContent =pc+'/'+healthValue ;
  healthElement.style.width = healthPercentage + '%'; // устанавливаем ширину Health Bar


  if (healthPercentage <= 30) {
    healthElement.style.backgroundColor = 'red';
  } else if (healthPercentage <= 70) {
    healthElement.style.backgroundColor = 'orange';
  } else {
    healthElement.style.backgroundColor = 'green';
  }
}
window.onload = function() {//Обновление всех данных при запуске
  updateHealthBar();
};
//код для анимации нажатия
const clickableImg = document.getElementById('clickable-img');
clickableImg.addEventListener('touchstart', () => {
  decreaseHP(); // Вызов функции уменьшения HP
  updateHealthBar(); // Вызов функции обновления Health Bar
  // Добавьте здесь вашу логику для показа цифр при нажатии, если это необходимо
});
// Добавляем обработчик для события начала касания (touchstart) на изображении
clickableImg.addEventListener('touchstart', (event) => {
    event.preventDefault(); // Предотвращаем стандартное событие браузера
    clickableImg.classList.add('clicked');
});

// Добавляем обработчик для события окончания касания (touchend) на изображении
clickableImg.addEventListener('touchend', (event) => {
    event.preventDefault(); // Предотвращаем стандартное событие браузера
    clickableImg.classList.remove('clicked');
});