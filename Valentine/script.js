"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 10;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "See you in Sai Gon, my Beauty, my Honey, my Darling, my Sweetheart, my Baby, my Love ♥";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Mắc dì bấm No",
    "Dỡn mặt hẻee",
    "Sao em như con cua vậy Bảo Ngọc :Đ",
    "Đồ ngang ngượcc",
    "Em khoảiiii, chắc đồng ý đi với thằng khác",
    "Em hong thương anhhhh",
    "Còn con hai đứa mình em tính sao đây!!!",
    "Bộ bấm Yes khó lắm hả, to dùng",
    "Đừng kiếm nút này nữa, mất roài",
    "Ngon bấm tiếp anh coi, lêu lêu :P",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
