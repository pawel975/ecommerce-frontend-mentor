const previousImage = document.querySelector(".change__photo.previous");
const nextImage = document.querySelector(".change__photo.next");
const minusAmount = document.querySelector(".change__amount.minus");
const plusAmount = document.querySelector(".change__amount.plus");

let sliderPosition = 0;
let buyingAmount = 0;
let cartAmount = 0;
let isCartActive = false;
let isDrawerActive = false;

amount.textContent = buyingAmount;

function checkSlideDisabled() {
  if (sliderPosition == -300) nextImage.style.opacity = 0.3;
  else if (sliderPosition > -300) nextImage.style.opacity = 1;
  if (sliderPosition == 0) previousImage.style.opacity = 0.3;
  else previousImage.style.opacity = 1;
}

function checkChangeAmountDisabled() {
  if (buyingAmount == 0) {
    minusAmount.style.opacity = 0.3;
    minusAmount.style.pointerEvents = "none";
  } else {
    minusAmount.style.opacity = 1;
    minusAmount.style.pointerEvents = "all";
  }
  if (buyingAmount == 10) {
    plusAmount.style.opacity = 0.3;
    plusAmount.style.pointerEvents = "none";
  } else {
    plusAmount.style.opacity = 1;
    plusAmount.style.pointerEvents = "all";
  }
}

function updateCartSummary() {
  cartAmount += buyingAmount;
  content__amount.textContent = cartAmount;
  content__final__price.textContent = "$" + content__amount.textContent * 125;
  cart__amount.textContent = cartAmount;
  buyingAmount = 0;
  amount.textContent = buyingAmount;
  if (cartAmount == 0) cart__amount.style.display = "none";
  else cart__amount.style.display = "initial";
}

function checkCart() {
  if (cartAmount == 0) {
    cart__content.style.display = "none";
    cart__content__empty.style.display = "initial";
  } else {
    cart__content.style.display = "grid";
    cart__content__empty.style.display = "none";
  }
}

function checkCartActive() {
  if (isCartActive) {
    cart__modal.style.display = "initial";
  } else {
    cart__modal.style.display = "none";
  }
}

function activateDrawer() {
  isDrawerActive = !isDrawerActive;
  if (isDrawerActive) {
    side__drawer__background.style.display = "initial";
    side__drawer.style.left = "0%";
  } else {
    side__drawer__background.style.display = "none";
    side__drawer.style.left = "-70%";
  }
}

checkSlideDisabled();
checkChangeAmountDisabled();
updateCartSummary();
checkCart();
checkCartActive();

nextImage.addEventListener("click", function () {
  if (sliderPosition > -300) {
    sliderPosition -= 100;
    slider.style.left = sliderPosition + "%";
    checkSlideDisabled();
  }
});

previousImage.addEventListener("click", function () {
  if (sliderPosition < 0) {
    sliderPosition += 100;
    slider.style.left = sliderPosition + "%";
    checkSlideDisabled();
  }
});

minusAmount.addEventListener("click", function () {
  buyingAmount--;
  amount.textContent = buyingAmount;
  checkChangeAmountDisabled();
});

plusAmount.addEventListener("click", function () {
  buyingAmount++;
  amount.textContent = buyingAmount;
  checkChangeAmountDisabled();
});

add__to__cart.addEventListener("click", function () {
  updateCartSummary();
  checkChangeAmountDisabled();
  checkCart();
});

cart.addEventListener("click", function () {
  isCartActive = !isCartActive;
  checkCartActive();
});

document.addEventListener("click", function (e) {
  const idList = [
    "add__to__cart",
    "cart",
    "cart__modal",
    "title__modal",
    "shopping__area",
    "cart__content__empty",
    "cart__content__empty__info",
    "cart__content",
    "content__name",
    "content__price",
    "content__amount",
    "content__final__price",
    "content__checkout",
    "delete__content",
  ];
  if (e.target.classList[0] == "change__amount") return;
  else if (idList.indexOf(e.target.id) !== -1) return;
  else {
    isCartActive = false;
    checkCartActive();
  }
});

delete__content.addEventListener("click", function () {
  cartAmount = 0;
  checkCart();
  updateCartSummary();
});

hamburger__menu.addEventListener("click", activateDrawer);

document.addEventListener("click", function (e) {
  if (e.target.id == "side__drawer__background") activateDrawer();
  else return;
});
