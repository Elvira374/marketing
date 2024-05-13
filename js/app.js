"use strict";

(function initMobileMenu() {
  const openBtn = document.querySelector("#openBtn");
  const closeBtn = document.querySelector("#closeMobileMenuBtn");
  const mySidenav = document.querySelector("#mySidenav");

  openBtn.addEventListener("click", function () {
    mySidenav.classList.add("activeNav");
    document.body.classList.add("popup-opened");
  });

  closeBtn.addEventListener("click", function () {
    mySidenav.classList.remove("activeNav");
    document.body.classList.remove("popup-opened");
  });
})();

(function initTabs() {
  const tabsList = document.querySelector("#tabsList");
  const btns = document.querySelectorAll(".menu__btn");
  const portfolioBlocks = document.querySelectorAll(".portfolio__block");

  tabsList.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
      btns.forEach(function (btn) {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");
      portfolioBlocks.forEach(function (article) {
        article.classList.remove("show");
      });
      const element = document.querySelector(`#${id}`);
      element.classList.add("show");
    }
  });
})();

(function initModal() {
  const playBtn = document.querySelector("#playBtn");
  const closeVideoBtn = document.querySelector(".video__close-btn");
  const video__modal = document.querySelector(".video__modal");

  playBtn.addEventListener("click", function () {
    video__modal.showModal();
    document.body.classList.add("popup-opened");
  });

  closeVideoBtn.addEventListener("click", function () {
    video__modal.classList.add("hide");

    video__modal.addEventListener("animationend", function animHide() {
      this.classList.remove("hide");
      this.close();
      document.body.classList.remove("popup-opened");
      this.removeEventListener("animationend", animHide);
    });
  });
})();

(function scrollAnimation() {
  const boxes = document.querySelectorAll(".element-animation");

  const checkBoxes = () => {
    const triggerBottom = (window.innerHeight / 5) * 4;
    boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        box.classList.add("element-show");
      } else {
        box.classList.remove("element-show");
      }
    });
  };

  window.addEventListener("scroll", checkBoxes);
  checkBoxes();
})();

(function initSlider() {
  let swiper = new Swiper(".mySwiper", {
    speed: 1600,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
})();
