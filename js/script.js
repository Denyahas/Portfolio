// Скрытие header
let lastScrollY = window.scrollY;
let inactivityTimer;
const header = document.querySelector("header");
let isHeaderHiddenByButton = false;

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    // Если прокручиваем вниз, скрываем
    header.classList.add("hideHeader");
  }
  lastScrollY = window.scrollY;

  //Если находимся вверху страницы, то не скрываем
  if (window.scrollY === 0) {
    header.classList.remove("hideHeader");
    clearTimeout(inactivityTimer);
  }
});

//Если хедер бездействует 1 секунду - скрываем его.
function hideHeader() {
  header.classList.add("hideHeader");
}

function resetInactivityTimer() {
  header.classList.remove("hideHeader");
  clearTimeout(inactivityTimer);
  inactivityTimer = setTimeout(hideHeader, 1000);
}

window.addEventListener("mousemove", (event) => {
  if (event.clientY < 100 && window.scrollY > 0 && !isHeaderHiddenByButton) {
    resetInactivityTimer();
  }
});

//Отключение секций в навигации
const closeAbout = document.getElementById("closeAbout");
const closeProjects = document.getElementById("closeProjects");
const closeContacts = document.getElementById("closeContacts");

const about = document.getElementById("about");
const projects = document.getElementById("projects");
const contacts = document.getElementById("contacts");

const aboutLink = document.querySelector('a[href="#about"]');
const projectsLink = document.querySelector('a[href="#projects"]');
const contactsLink = document.querySelector('a[href="#contacts"]');

closeAbout.addEventListener("click", () => {
  about.classList.add("none");
  aboutLink.classList.add("none");
  closeAbout.classList.add("none");
  document.querySelector('a[href="#about"]').closest("li").style.marginRight =
    "0";
});

closeProjects.addEventListener("click", () => {
  projects.classList.add("none");
  projectsLink.classList.add("none");
  closeProjects.classList.add("none");
  document
    .querySelector('a[href="#projects"]')
    .closest("li").style.marginRight = "0";
});

closeContacts.addEventListener("click", () => {
  contacts.classList.add("none");
  contactsLink.classList.add("hidden");
  closeContacts.classList.add("hidden");
  document.querySelector("footer").classList.add("none");
});

//Обновление всех секций
const refreshPage = document.getElementById("refreshPage");
refreshPage.addEventListener("click", function () {
  about.classList.remove("none");
  aboutLink.classList.remove("none");
  closeAbout.classList.remove("none");
  document.querySelector('a[href="#about"]').closest("li").style.marginRight =
    "10px";
  projects.classList.remove("none");
  projectsLink.classList.remove("none");
  closeProjects.classList.remove("none");
  document
    .querySelector('a[href="#projects"]')
    .closest("li").style.marginRight = "10px";
  contacts.classList.remove("none");
  contactsLink.classList.remove("hidden");
  closeContacts.classList.remove("hidden");
  document.querySelector("footer").classList.remove("none");

  closeCardBtns.forEach((btn) => {
    btn.closest(".project-tile").classList.remove("none");
    swiper.update(); // обновление свайпера после скрытия карточки
  });
});

//Обновление проектов
const refreshProjects = document.getElementById("refreshProjects");
refreshProjects.addEventListener("click", function () {
  closeCardBtns.forEach((btn) => {
    btn.closest(".project-tile").classList.remove("none");
    swiper.update(); // обновление свайпера после скрытия карточки
  });
});

//Кнопка сворачивания header
document
  .getElementById("collapseWindowBtn")
  .addEventListener("click", function () {
    isHeaderHiddenByButton = true;
    header.classList.add("hideHeader");
    setTimeout(function () {
      isHeaderHiddenByButton = false;
    }, 1500);
  });

//Кнопка закрытия header
const popUpsBg = document.querySelector(".popUps");
const popUpsCloseWindow = document.querySelector(".popUpsCloseWindow");
const closeWindowYes = document.querySelector(".closeWindowYes");
let firstClick = false;

function moveButton() {
  const popUpsCloseWindowRect = popUpsCloseWindow.getBoundingClientRect();

  // Получаем размеры кнопки
  const buttonWidth = closeWindowYes.offsetWidth;
  const buttonHeight = closeWindowYes.offsetHeight;

  // Получаем максимально возможные координаты для кнопки, чтобы она не выходила за пределы блока
  const maxX = popUpsCloseWindowRect.width - buttonWidth;
  const maxY = popUpsCloseWindowRect.height - buttonHeight;

  // Генерируем случайные координаты в пределах поп-апа и отнимаем высоту текста
  let newX = Math.random() * maxX;
  let newY = Math.random() * maxY - 90;

  // Ограничиваем координаты, чтобы кнопка не выходила за пределы блока
  newX = Math.min(Math.max(newX, 0), maxX);
  newY = Math.min(Math.max(newY, 0), maxY);

  // Применяем новые координаты для кнопки
  closeWindowYes.style.transform = `translateX(0px)`;
  closeWindowYes.style.left = `${newX}px`;
  closeWindowYes.style.bottom = `${newY}px`;
}
function buttonInitialState() {
  closeWindowYes.style.transform = `translateX(-100%) translateX(-5px)`;
  closeWindowYes.style.left = `${50}%`;
  closeWindowYes.style.bottom = `${10}px`;
  closeWindowYes.style.backgroundColor = `#ed6a5f`;
  closeWindowYes.textContent = `Yes`;
  firstClick = false;
}

document
  .getElementById("closeWindowBtn")
  .addEventListener("click", function () {
    popUpsBg.classList.remove("none");
    popUpsCloseWindow.classList.remove("none");
    document.documentElement.classList.add("noScroll");
  });

document.querySelector(".closeWindowNo").addEventListener("click", function () {
  popUpsBg.classList.add("none");
  popUpsCloseWindow.classList.add("none");
  document.documentElement.classList.remove("noScroll");
  buttonInitialState();
});

closeWindowYes.addEventListener("mouseover", function () {
  if (firstClick) {
    closeWindowYes.style.backgroundColor = `#71e462`;
  }
});

closeWindowYes.addEventListener("mouseleave", function () {
  if (firstClick) {
    closeWindowYes.style.backgroundColor = `#62c554`;
  }
});

closeWindowYes.addEventListener("mouseover", moveButton);
closeWindowYes.addEventListener("click", function () {
  if (!firstClick) {
    firstClick = true;
    closeWindowYes.style.backgroundColor = `#62c554`;
    closeWindowYes.textContent = `No`;
    closeWindowYes.removeEventListener("mouseover", moveButton);
    closeWindowYes.style.transform = `translateX(-100%) translateX(-5px)`;
    closeWindowYes.style.left = `${50}%`;
    closeWindowYes.style.bottom = `${10}px`;
  } else {
    popUpsBg.classList.add("none");
    popUpsCloseWindow.classList.add("none");
    document.documentElement.classList.remove("noScroll");
    buttonInitialState();
    closeWindowYes.addEventListener("mouseover", moveButton);
  }
});

//Кнопка полноэкранного режима header
document.getElementById("fullScreenBtn").addEventListener("click", function () {
  if (document.fullscreenElement) {
    // Если уже в полноэкранном режиме, выходим из него
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      // Для Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      // Для Chrome, Safari, Opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      // Для IE/Edge
      document.msExitFullscreen();
    }
  } else {
    // Если не в полноэкранном режиме, переходим в него
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      // Для Firefox
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      // Для Chrome, Safari, Opera
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      // Для IE/Edge
      document.documentElement.msRequestFullscreen();
    }
  }
});

// Обработчик фото
const photos = document.querySelectorAll(".photo");
photos.forEach((photo) => {
  photo.addEventListener("click", function () {
    photos.forEach((img) => img.classList.remove("bigPhoto"));
    photo.classList.add("bigPhoto");
  });
});

//Закрытие окна проекта

const closeCardBtns = document.querySelectorAll(".closeCardBtn");

closeCardBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    btn.closest(".project-tile").classList.add("none");
    swiper.update(); // обновление свайпера после скрытия карточки
  });
});

//Сворачивание окна проекта
const collapseCardBtns = document.querySelectorAll(".collapseCardBtn");

collapseCardBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const card = btn.closest(".project-tile");
    const returnProject = card.querySelector(".returnTheProject"); // Каждый блок returnProject для каждой карточки
    const cardImg = card.querySelector(".cardImg");
    const returnProjectBtn = returnProject.querySelector("button"); // Кнопка внутри текущей карточки

    const isOpen = card.classList.contains("open");

    if (!isOpen) {
      // Если карточка закрыта, открываем её
      if (cardImg) {
        cardImg.style.opacity = "0";
        cardImg.style.transform = "scale(0)";
        returnProject.classList.remove("hidden");
      }
      card.classList.add("open");

      // Обработчик для кнопки возврата
      returnProjectBtn.addEventListener("click", function () {
        cardImg.style.opacity = "1";
        cardImg.style.transform = "scale(1)";
        card.classList.remove("open");
        returnProject.classList.add("hidden");
      });
    } else {
      // Если карточка уже открыта, сворачиваем её
      cardImg.style.opacity = "1";
      cardImg.style.transform = "scale(1)";
      card.classList.remove("open");
      returnProject.classList.add("hidden");
    }
  });
});

//Swiper
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: false,
  spaceBetween: 10,
  speed: 700,
  autoplay: true,

  navigation: {
    nextEl: ".nextCard",
    prevEl: ".prevCard",
  },

  breakpoints: {
    768: {
      spaceBetween: 20, // Отступы увеличиваются для ширины от 768px и больше
    },
  },
});

//Animation
const the_animation = document.querySelectorAll(".anim");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("scrollAnim");
    }
  });
});
//
for (let i = 0; i < the_animation.length; i++) {
  const elements = the_animation[i];

  observer.observe(elements);
}
