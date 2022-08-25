const handleButton = document.querySelector(".change-color");
const fillSpan = document.querySelector('.color');
const changeColorBody = document.querySelector('body');

handleButton.addEventListener('click', () => {
  changeColorBody.style.backgroundColor = `${getRandomHexColor()}`;
  fillSpan.textContent = `${changeColorBody.style.backgroundColor}`;
})




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

