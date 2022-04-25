// SECLTORS
const slides = document.querySelectorAll(".veiw__thumbnail__sub");
const thumbnail = document.querySelector(".veiw__thumbnail__main");
const orderdecrease = document.querySelector(".order__btn--1");
const orderincrease = document.querySelector(".order__btn--2");
let orderNumber = document.querySelector(".order__number");
const price = document.querySelector(".price__h2");
const totalAmount = document.querySelector(".popup__content__info__span");
const popupCon = document.querySelector(".popup--con");
const popup = document.querySelector(".popup");
const cartIcon = document.querySelector(".header__profile__cart");
// FUNCTIONS change thummails into onther image

// init function
var order = 1;
orderNumber.textContent = order;
let NumberOrder = 0;
console.log(orderNumber);
function wrapper() {
  selecteImage();
  increment();
  decrement();
  totalPrice();
}

// SELECT IMAGE
const selecteImage = () => {
  thumbnail.src = slides[0].src;
  addEventListener("click", function (e) {
    if (e.target.classList.contains("veiw__thumbnail__sub")) {
      slides.forEach((slide) => {
        const Id = e.target.getAttribute("data-id");
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

// INCREMENT OR DECREMENT ORDER NUMBER
const increment = () => {
  order++;
  orderNumber = order;
};

const decrement = () => {
  order--;
  if (order < 1) {
    orderNumber.textContent = 1;
  } else {
    orderNumber = order;
  }
};

// EVENT LISTENERS
orderincrease.addEventListener("click", increment);
orderdecrease.addEventListener("click", decrement);

const totalPrice = () => {
  console.log(NumberOrder);
};

//MODAL

const modalOpen = () => {
  popup.classList.remove("hidden");
  popupCon.classList.remove("hidden");
};
const modalclose = () => {
  popup.classList.add("hidden");
  popupCon.classList.add("hidden");
};

//EVENT LISTENERS
cartIcon.addEventListener("click", modalOpen);
popupCon.addEventListener("click", modalclose);

wrapper();
