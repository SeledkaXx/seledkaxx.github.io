// header

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".page__header");
  const headerWrapper = document.querySelector(".header__wrapper");
  const headerWrapperHeight = headerWrapper.offsetHeight;

  window.addEventListener("scroll", function () {
    if (window.scrollY > headerWrapperHeight) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  });
});

//

document.addEventListener("DOMContentLoaded", function () {
  const element = document.getElementById("animated-column");
  const delay = 500; // Задержка в миллисекундах

  setTimeout(() => {
    element.classList.add("visible");
  }, delay);
});

document.addEventListener("DOMContentLoaded", function () {
  const formWrapper = document.querySelector(".form__wrapper");
  const container = document.querySelector(".cards__form__container");
  const containerRect = container.getBoundingClientRect();
  const formWrapperRect = formWrapper.getBoundingClientRect();

  function updateFormWrapperPosition() {
    const scrollTop = window.scrollY;
    const containerBottom = containerRect.bottom + scrollTop;
    const formWrapperHeight = formWrapperRect.height;

    if (scrollTop + formWrapperHeight > containerBottom) {
      formWrapper.style.top = `${
        containerBottom - scrollTop - formWrapperHeight
      }px`;
    } else {
      formWrapper.style.top = "0px";
    }
  }

  window.addEventListener("scroll", updateFormWrapperPosition);
  updateFormWrapperPosition();
});

document.addEventListener("DOMContentLoaded", function () {
  const leftButton = document.querySelector(".carousel__left__circle");
  const rightButton = document.querySelector(".carousel__right__circle");
  const carouselWrapper = document.querySelector(".carousel__wrapper");

  const scrollAmount = 500;

  leftButton.addEventListener("click", () => {
    carouselWrapper.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  });

  rightButton.addEventListener("click", () => {
    carouselWrapper.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  });
});

// main
document.addEventListener("DOMContentLoaded", function () {
  var mainRightSection = document.querySelector(".main__right__section");
  var cards = document.querySelectorAll(".main__card");

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function checkVisibility() {
    if (isElementInViewport(mainRightSection)) {
      cards.forEach(function (card, index) {
        setTimeout(function () {
          card.classList.add("visible");
        }, index * 400); // Уменьшаем задержку между картами
      });
      // Отключаем обработчик события после того, как карты становятся видимыми (опционально)
      window.removeEventListener("scroll", checkVisibility);
    }
  }

  // Проверяем видимость при загрузке страницы
  checkVisibility();

  // Проверяем видимость при прокрутке
  window.addEventListener("scroll", checkVisibility);
});
