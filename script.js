const previousImage = document.querySelector(".change__photo.previous");
const nextImage = document.querySelector(".change__photo.next");
const minusAmount = document.querySelector(".change__amount.minus");
const plusAmount = document.querySelector(".change__amount.plus");

let sliderPosition = 0;
let buyingAmount = 0;
let cartAmount = 0;

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

checkSlideDisabled();
checkChangeAmountDisabled();

function checkCartAmount() {
  if (cartAmount == 0) cartContainer.setAttribute("cart-show", "none");
}

// change cart quantity in before element to simple div

checkCartAmount();

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
  cartAmount += buyingAmount;
  buyingAmount = 0;
  amount.textContent = buyingAmount;
  console.log(cartContainer);
  cartContainer.setAttribute("cart-amount", cartAmount);
  checkChangeAmountDisabled();
});
