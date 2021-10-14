const previousImage = document.querySelector(".change__photo.previous");
const nextImage = document.querySelector(".change__photo.next");

let sliderPosition = 0;

nextImage.addEventListener("click", function () {
  if (sliderPosition == -300) nextImage.style.opacity = 0.3;
  else if (sliderPosition > -300) nextImage.style.opacity = 1;
  if (sliderPosition > -300) {
    sliderPosition -= 100;
    console.log(sliderPosition);
    slider.style.left = sliderPosition + "%";
  }
});
previousImage.addEventListener("click", function () {
  //   if (sliderPosition == 0) previousImage.style.opacity = 0.3;
  //   else previousImage.style.opacity = 1;
  if (sliderPosition < 0) {
    sliderPosition += 100;
    console.log(sliderPosition);
    slider.style.left = sliderPosition + "%";
  }
});

console.log(slider);
