script.js
// Before/after slider
const slider = document.querySelector(".ba-slider");
const afterWrapper = document.querySelector(".ba-image-after-wrapper");

if (slider && afterWrapper) {
  const updateSlider = () => {
    const value = slider.value;
    afterWrapper.style.width = value + "%";
  };

  slider.addEventListener("input", updateSlider);
  updateSlider();
}

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
