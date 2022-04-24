// SECLTORS
const slides = document.querySelectorAll(".veiw__thumbnail__sub");
const thumbnail = document.querySelector(".veiw__thumbnail__main");
const orderdecrease = document.querySelector(".order__btn--1");
const orderincrease = document.querySelector(".order__btn--2");
const orderNumber = document.querySelector(".order__number");
const price = document.querySelector(".price__h2");
const totalAmount = document.querySelector(".popup__content__info__span");
const popupCon = document.querySelector(".popup--con");
const popup = document.querySelector(".popup");
const cartIcon = document.querySelector(".header__profile__cart");
// FUNCTIONS change thummails into onther image
let order = 1;
orderNumber.textContent = order;

function wrapper() {
  selecteImage();
  increment();
  decrement();
  modalOpen();
  modalclose();
  totalPrice();
}

const selecteImage = () => {
  thumbnail.src = slides[0].src;
  addEventListener("click", function (e) {
    if (e.target.classList.contains("veiw__thumbnail__sub")) {
      slides.forEach((slide) => {
        const Id = e.target.getAttribute("data-id");
        console.log(Id);
        if (slide.classList.contains("veiw__thumbnail__sub--active")) {
          slide.classList.remove("veiw__thumbnail__sub--active");
          for (let i = 0; i < slides.length; i++) {
            if (slides[i].getAttribute("data-id") === Id) {
              thumbnail.src = e.target.src;
              slides[i].classList.add("veiw__thumbnail__sub--active");
            }
          }
        }
      });
    }
  });
};


const increment = () => {
  orderincrease.addEventListener("click", () => {
    order++;
    orderNumber.textContent = order;
  });
};

const decrement = () => {
  orderdecrease.addEventListener("click", () => {
    order--;
    if (order < 1) {
      orderNumber.textContent = 1;
    } else {
      orderNumber.innerHTML = order;
    }
  });
};


const totalPrice = () => {
  console.log(order);
};

const modalOpen = () => {
  cartIcon.addEventListener("click", () => {
    popupCon.classList.add("popup--open");
    popup.classList.add("popup--open");
  });
};
const modalclose = () => {
  popupCon.addEventListener("click", () => {
    popupCon.classList.remove("popup--open");
    popup.classList.remove("popup--close");
  });
};

wrapper();
