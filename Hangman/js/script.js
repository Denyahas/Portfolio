const hiddenWord = document.querySelector(".hidden-word");
const buttons = document.querySelectorAll(".button");
const overlay = document.querySelector(".overlay");
const loseorWinPopup = document.querySelector(".loseOrWin");
const repeat = document.getElementById("repeat");

const parts = [
  "head",
  "body",
  "left-arm",
  "right-arm",
  "left-leg",
  "right-leg",
];

const words = [
  "год",
  "человек",
  "время",
  "дело",
  "жизнь",
  "день",
  "рука",
  "работа",
  "слово",
  "место",
  "вопрос",
  "лицо",
  "глаз",
  "страна",
  "друг",
  "сторона",
  "дом",
  "случай",
  "ребенок",
  "голова",
  "система",
  "вид",
  "конец",
  "город",
  "часть",
  "женщина",
  "земля",
  "решение",
  "власть",
  "машина",
  "закон",
  "час",
  "образ",
  "отец",
  "история",
  "нога",
  "вода",
  "война",
  "дверь",
  "бог",
  "народ",
  "область",
  "число",
  "голос",
  "группа",
  "жена",
  "процесс",
  "условие",
  "книга",
  "ночь",
  "суд",
  "деньга",
  "уровень",
  "начало",
  "стол",
  "связь",
  "имя",
  "форма",
  "путь",
  "статья",
  "школа",
  "душа",
  "дорога",
  "язык",
  "взгляд",
  "момент",
  "минута",
  "месяц",
  "порядок",
  "цель",
  "муж",
  "помощь",
  "мысль",
  "вечер",
  "орган",
  "рынок",
  "партия",
  "роль",
  "смысл",
  "мама",
  "мера",
  "улица",
  "задача",
  "театр",
  "труд",
  "тело",
  "письмо",
  "центр",
  "утро",
  "мать",
  "комната",
  "семья",
  "сын",
  "смерть",
  "интерес",
  "век",
  "идея",
  "автор",
  "окно",
  "ответ",
  "совет",
  "мужчина",
  "ряд",
  "счет",
  "мнение",
  "цена",
  "точка",
  "план",
  "проект",
  "глава",
  "основа",
  "причина",
  "сердце",
  "рубль",
  "наука",
  "неделя",
  "вещь",
  "чувство",
  "правило",
  "служба",
  "газета",
  "срок",
  "член",
  "ход",
  "стена",
  "плечо",
  "опыт",
  "встреча",
  "принцип",
  "событие",
  "товарищ",
  "объект",
  "очередь",
  "период",
  "состав",
  "пример",
  "лес",
  "девушка",
  "данные",
  "палец",
  "судьба",
  "тип",
  "метод",
  "армия",
  "брат",
  "борьба",
  "шаг",
  "игра",
  "участие",
  "край",
  "размер",
  "номер",
  "район",
  "банк",
  "класс",
  "зал",
  "кровь",
  "позиция",
  "герой",
  "течение",
  "девочка",
  "гость",
  "воздух",
  "мальчик",
  "фильм",
  "договор",
  "регион",
  "выбор",
  "свобода",
  "врач",
  "небо",
  "факт",
  "церковь",
  "завод",
  "фирма",
  "бизнес",
  "союз",
  "деньги",
  "род",
  "команда",
  "спина",
  "дух",
  "музыка",
  "способ",
  "хозяин",
  "поле",
  "доллар",
  "память",
  "природа",
  "дерево",
  "оценка",
  "объем",
  "картина",
  "процент",
  "сцена",
  "анализ",
  "повод",
  "вариант",
  "берег",
  "модель",
  "степень",
  "самолет",
  "телефон",
  "граница",
  "песня",
  "министр",
  "угол",
  "зрение",
  "предмет",
  "двор",
  "солнце",
  "журнал",
  "база",
  "защита",
  "стих",
  "море",
  "удар",
  "знание",
  "солдат",
  "миллион",
  "сон",
  "бумага",
  "реформа",
  "оружие",
  "линия",
  "текст",
  "выход",
  "ребята",
  "магазин",
  "участок",
  "услуга",
  "поэт",
  "желание",
  "пара",
  "успех",
  "среда",
  "возраст",
  "бюджет",
  "площадь",
  "генерал",
  "дочь",
  "понятие",
  "кабинет",
  "фонд",
  "сфера",
  "папа",
  "будущее",
  "продукт",
  "сумма",
  "парень",
  "ветер",
  "помочь",
  "курс",
  "губа",
  "река",
  "грудь",
  "огонь",
  "нос",
  "волос",
  "ухо",
  "радость",
  "сад",
  "доктор",
  "лето",
  "камень",
  "здание",
  "капитан",
  "собака",
  "итог",
  "рис",
  "техника",
  "элемент",
  "деревня",
  "депутат",
  "рот",
  "масса",
  "цвет",
  "рассказ",
  "функция",
  "мужик",
  "лист",
  "звезда",
  "гора",
  "победа",
  "товар",
  "воля",
  "зона",
  "предел",
  "целое",
  "офицер",
  "влияние",
  "цветок",
  "немец",
  "бой",
  "сестра",
  "господь",
  "учитель",
  "многое",
  "рамка",
  "метр",
  "войско",
  "снег",
  "комитет",
  "налог",
  "акт",
  "отдел",
  "карман",
  "вывод",
  "норма",
  "этап",
  "прошлое",
  "фамилия",
  "кухня",
  "доля",
  "пункт",
  "студент",
  "учет",
  "доход",
  "вирус",
  "клетка",
  "теория",
  "враг",
  "бутылка",
  "расчет",
  "режим",
  "клуб",
  "попытка",
  "зуб",
  "сеть",
  "семь",
  "прием",
  "боль",
  "кожа",
  "субъект",
  "знак",
  "актер",
  "ресурс",
  "акция",
  "газ",
  "звук",
  "болезнь",
  "детство",
  "мастер",
  "выборы",
  "зима",
  "подход",
  "поиск",
  "чистота",
  "педагог",
  "снятие",
  "система",
  "поиск",
  "жизнь",
  "поздно",
  "поклон",
  "поворот",
  "мера",
  "отдых",
  "объект",
  "система",
  "реакция",
  "память",
  "план",
  "день",
  "награда",
  "история",
  "выход",
  "статья",
  "система",
  "глубина",
  "путь",
  "семья",
  "субъект",
  "кафе",
  "суд",
  "страх",
  "отчет",
  "журнал",
  "расходы",
  "проект",
  "ошибка",
  "система",
  "стекло",
  "работа",
  "вопрос",
  "отчёт",
  "поклон",
  "автомат",
  "система",
  "режим",
  "долг",
  "школа",
  "одежда",
  "сектор",
  "новости",
  "сила",
  "место",
  "блок",
  "система",
  "боль",
  "влияние",
  "груз",
  "кофе",
  "письмо",
  "расходы",
  "система",
  "уровень",
  "поездка",
  "проект",
  "анализ",
  "тип",
  "рейтинг",
  "школа",
  "книга",
  "награда",
  "суд",
  "счёт",
  "метод",
  "анализ",
  "поток",
  "файл",
  "площадь",
  "тема",
  "тип",
  "акция",
];

let randomWord = getRandomWord(words);
let mistakes = 0;

function getRandomWord(words) {
  const randomWord = Math.floor(Math.random() * words.length);
  const splitedWord = words[randomWord].split("");
  return splitedWord;
}

//Обработчик алфавита
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const letter = button.textContent.toLowerCase();
    button.setAttribute("disabled", "true");

    const indexOfLetter = findLetterIndexes(randomWord, letter);
    //Если массив который возвращает функция не пустой, то меняем "_" на нажатую букву
    if (indexOfLetter.length) {
      indexOfLetter.forEach((index) => {
        const span = document.querySelector(
          `.hidden-word span[data-index='${index}']`
        );
        span.innerText = letter;
      });
      win();
    } else {
      addPart();
      lose();
    }
  });
});

function findLetterIndexes(randomWord, letter) {
  const indexes = [];

  randomWord.forEach((item, index) => {
    const span = document.querySelector(
      `.hidden-word span[data-index='${index}']`
    );

    //Если нашли букву и она не открыта изначально
    if (item === letter && !span.classList.contains("opened")) {
      indexes.push(index);
    }
  });

  return indexes;
}

function initialState() {
  mistakes = 0;

  for (let i = 6; i >= 0; --i) {
    const element = document.getElementById(parts[i]);
    if (element) {
      element.style.display = "none";
    }
  }

  buttons.forEach((button) => {
    button.removeAttribute("disabled");
  });

  randomWord = getRandomWord(words);
  hiddenWord.innerHTML = ``;
  showHiddenWord();
}

function win() {
  const guessedWord = Array.from(document.querySelectorAll(".hidden-word span"))
    .map((span) => span.innerText)
    .join("");

  if (guessedWord === randomWord.join("")) {
    loseOrWin();
    document.querySelector(".loseOrWin h2").innerText = "Ты выйграл!";
    document.querySelector(".loseOrWin h3").innerText =
      "Слово: " + randomWord.join("").toUpperCase();
  }
}

function lose() {
  if (mistakes > 5) {
    loseOrWin();
    document.querySelector(".loseOrWin h2").innerText = "Ты проиграл!";
    document.querySelector(".loseOrWin h3").innerText =
      "Слово: " + randomWord.join("").toUpperCase();
  }
}

function loseOrWin() {
  overlay.classList.remove("none");
  loseorWinPopup.classList.remove("none");
  repeat.addEventListener("click", () => {
    overlay.classList.add("none");
    loseorWinPopup.classList.add("none");
    initialState();
  });
}

//Открывает случайные буквы
function randomWordIndexes(arr) {
  let randomIndexes = [];
  while (randomIndexes.length < 2) {
    const randomIndex = Math.floor(Math.random() * randomWord.length);
    if (!randomIndexes.includes(randomIndex)) {
      randomIndexes.push(randomIndex);
    }
  }

  randomIndexes.forEach((index) => {
    arr[index] = randomWord[index];
  });

  return randomIndexes;
}

function showHiddenWord() {
  const hiddenWordArray = Array(randomWord.length).fill("_");

  const randomIndexes = randomWordIndexes(hiddenWordArray);

  //Отображает все буквы
  hiddenWordArray.forEach((char, index) => {
    const child = document.createElement("span");
    child.innerText = char;
    child.setAttribute("data-index", index);

    if (randomIndexes.includes(index)) {
      child.classList.add("opened");
    }

    hiddenWord.appendChild(child);
  });
}

function addPart() {
  if (mistakes < parts.length) {
    document.getElementById(parts[mistakes]).style.display = "block";
    mistakes++;
  }
}

showHiddenWord();
