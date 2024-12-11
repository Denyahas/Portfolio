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
  "город",
  "мир",
  "дом",
  "путь",
  "лес",
  "стол",
  "мост",
  "парк",
  "вода",
  "день",
  "нора",
  "шаг",
  "рука",
  "знак",
  "круг",
  "ночь",
  "шум",
  "звон",
  "свет",
  "мрак",
  "зуб",
  "пес",
  "конь",
  "друг",
  "меч",
  "дым",
  "сад",
  "кресло",
  "лампа",
  "тропа",
  "лавка",
  "комод",
  "птица",
  "рыба",
  "кошка",
  "лиса",
  "сила",
  "мяч",
  "лук",
  "скрипка",
  "карта",
  "флаг",
  "маска",
  "корабль",
  "камень",
  "место",
  "зал",
  "песня",
  "полет",
  "шахта",
  "карман",
  "кактус",
  "берег",
  "солнце",
  "река",
  "голос",
  "цветок",
  "шапка",
  "платок",
  "сосна",
  "ветер",
  "поле",
  "доска",
  "окно",
  "чаша",
  "лавка",
  "крыша",
  "бочка",
  "луна",
  "беда",
  "камин",
  "свеча",
  "книга",
  "шторы",
  "ящик",
  "почка",
  "зима",
  "кора",
  "мука",
  "врата",
  "вино",
  "песок",
  "замок",
  "уголь",
  "прыть",
  "сон",
  "мороз",
  "кофе",
  "варка",
  "сердце",
  "плечо",
  "носок",
  "зебра",
  "кобра",
  "тундра",
  "масло",
  "шорох",
  "земля",
  "толпа",
  "час",
  "блеск",
  "птица",
  "волос",
  "грусть",
  "сапог",
  "груша",
  "кабан",
  "судно",
  "прилив",
  "плот",
  "пастух",
  "облако",
  "рюмка",
  "шторм",
  "арена",
  "сеть",
  "ладья",
  "соната",
  "кость",
  "водка",
  "скала",
  "русло",
  "валун",
  "кубик",
  "гора",
  "вулкан",
  "шорты",
  "осень",
  "кулак",
  "банка",
  "шкура",
  "галка",
  "врата",
  "лучик",
  "заяц",
  "розга",
  "весло",
  "волна",
  "прыжок",
  "голубь",
  "тетрадь",
  "паук",
  "сеть",
  "вершина",
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
