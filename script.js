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
let score = parseInt(localStorage.getItem("score"))  || 0;//монеты сохраняются
let healthValue = localStorage.getItem("health") || 10//хп сохраняется
const scoreDisplay = document.getElementById("score");//монеты берутся из хтмл
scoreDisplay.textContent = score;//равняется
const healthElement = document.getElementById('health');

let damage = parseInt(localStorage.getItem("damage")) || 1;// урон
let damaged = document.getElementById('damage1');
damaged.textContent = damage;
let money = parseInt(localStorage.getItem("money") )|| 1;
let imageChangeCounter = 0;
let pc = localStorage.getItem("pc") || 10;//значение сколько хп для некст уровня нужно тожн сохраняется
function decreaseHP() {
  score = score+ money;
  scoreDisplay.textContent = score;
  localStorage.setItem("score", score);//монеты сохраняются
  if (healthValue > 0) {
    healthValue -= damage; // уменьшаем значение HP на 10
    if (healthValue <= 0) {
      imageChangeCounter = imageChangeCounter +1;
      healthValue =Math.round(pc * 1.15);
      pc =Math.round(pc *1.3); // увеличиваем значение HP в два раза, если healthValue меньше или равен 20
    }
    updateHealthBar();
  }
  if (imageChangeCounter === 10) {
    document.getElementById("clickable-img").src = "083f643e956211efb9fe9ef20df65449_1.jpg"; // Изменяем изображение на новое при 10 нажатиях
} else if (imageChangeCounter === 20) {
    document.getElementById("clickable-img").src = "083f643e956211efb9fe9ef20df65449_1.jpg"; // Изменяем изображение на другое при 20 нажатиях
} 
else{
  document.getElementById("clickable-img").src = "photo_2024-10-29_16-09-07.png";
}// Продолжайте добавлять условия для других значений по необходимости
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
//код для улучшения
let erdcb = parseInt(localStorage.getItem("erdcb")) || 20000; // Убедитесь, что значение из localStorage преобразуется в число
const erdcd = document.getElementById("erdc");
erdcd.textContent = erdcb;

let lvl3 = parseInt(localStorage.getItem("lvl3")) || 0; // Убедитесь, что значение из localStorage преобразуется в число
const lvl3c = document.getElementById("lvl3");
lvl3c.textContent = lvl3;

const erdup = document.getElementById("erdup");
erdup.addEventListener("click", function () {
  if (score >= erdcb) {
    lvl3++; // Увеличиваем lvl3 на 1
    lvl3c.textContent = lvl3;

    score = score - erdcb;
    damage = damage + 5; // Где-то должна быть определена переменная damage
    erdcb = Math.round(erdcb * 1.8);
    erdcd.textContent = erdcb;
    damaged.textContent = damage;
    localStorage.setItem("erdcb", erdcb);
    localStorage.setItem("damage", damage); // Предполагается, что переменная damage определена ранее
    localStorage.setItem("lvl3", lvl3);
  }
});
let lircb = parseInt(localStorage.getItem("lircb")) || 1000; // Убедитесь, что значение из localStorage преобразуется в число
const lircd = document.getElementById("lirc");
lircd.textContent = lircb;
let lvl2 = parseInt(localStorage.getItem("lvl2")) || 0; // Убедитесь, что значение из localStorage преобразуется в число
const lvl2c = document.getElementById("lvl2");
lvl2c.textContent = lvl2;

const lirup = document.getElementById("lirup");
lirup.addEventListener("click", function () {
  if (score >= lircb) {
    lvl2++; // Увеличиваем lvl3 на 1
    lvl2c.textContent = lvl2;
    damaged.textContent = damage;
    score = score - lircb;
    damage = damage + 3; // Где-то должна быть определена переменная damage
    lircb = Math.round(lircb * 1.8);
    lircd.textContent = lircb;

    localStorage.setItem("lircb", lircb);
    localStorage.setItem("damage", damage); // Предполагается, что переменная damage определена ранее
    localStorage.setItem("lvl2", lvl2);
  }
});

let skycb = parseInt(localStorage.getItem("skycb")) || 100; // Убедитесь, что значение из localStorage преобразуется в число
const skycd = document.getElementById("skyc");
skycd.textContent = skycb;
let lvl1 = parseInt(localStorage.getItem("lvl1")) || 0; // Убедитесь, что значение из localStorage преобразуется в число
const lvl1c = document.getElementById("lvl1");
lvl1c.textContent = lvl1;

const skyup = document.getElementById("skyup");
skyup.addEventListener("click", function () {
  if (score >= skycb) {
    lvl1++; // Увеличиваем lvl3 на 1
    lvl1c.textContent = lvl1;
    score = score - skycb;
    damage = damage + 1; // Где-то должна быть определена переменная damage
    skycb = Math.round(skycb * 1.8);
    skycd.textContent = skycb;
    damaged.textContent = damage;
    localStorage.setItem("skycb", skycb);
    localStorage.setItem("damage", damage); // Предполагается, что переменная damage определена ранее
    localStorage.setItem("lvl1", lvl1);
  }
});

//код для увеличения заработка
let moneycb = parseInt(localStorage.getItem("moneycb")) || 50; // Убедитесь, что значение из localStorage преобразуется в число
const moneycd = document.getElementById("moneyc");
moneycd.textContent = moneycb;
let lvl4 = parseInt(localStorage.getItem("lvl4")) || 0;
const lvl4c = document.getElementById("lvl4");
lvl4c.textContent = lvl4;

const moneyup = document.getElementById("moneyup");
moneyup.addEventListener("click", function () {
  if (score >= moneycb) {
    lvl4++; 
    lvl4c.textContent = lvl4;
    money++; 
    score = score - moneycb;
    moneycb = Math.round(moneycb * 1.8);
    moneycd.textContent = moneycb;
    localStorage.setItem("moneycb", moneycb);
    localStorage.setItem("lvl4", lvl4); // Обновляем значение lvl4
    localStorage.setItem("money", money);
    decreaseHP()
  }
});
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
function convertToK(value) {
  if (value >= 1000) {
      let suffixes = ["", "k", "M", "B", "T"];
      let suffixNum = Math.floor(("" + value).length / 3) - 1;
      let shortValue = parseFloat((suffixNum !== 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(3));
      if (shortValue % 1 !== 0) {
          shortValue = shortValue.toFixed(1);
      }
      return shortValue + suffixes[suffixNum];
  }
  return value; // Возвращаем изначальное значение если оно меньше 1000
}