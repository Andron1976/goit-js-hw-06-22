function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// const userRequest = prompt("Please enter a number!");
// const amountRequest = refs.inputParent.firstElementChild.addEventListener('input', (event) => {
//   event.target.value = Number(userRequest);
// })

const refs = {
  inputParent: document.querySelector('#controls'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  divBoxes: document.querySelector("#boxes"),
}

refs.createBtn.addEventListener('click', createBoxes);
let lastSize = null;
function createBoxes (amount){
  amount = Number(refs.inputParent.firstElementChild.value);
  const arrayBoxes = [];
  let size = lastSize || 30;
  for(let i=0; i<amount; i+=1){
    let oneBox = `<div style="width:${size + i*10}px; height:${size + i*10}px; background-color:${getRandomHexColor()};"></div>`
  arrayBoxes.push(oneBox);
  }
  lastSize = size + amount*10;
  refs.divBoxes.insertAdjacentHTML('beforeend', arrayBoxes.join(''));
};

refs.destroyBtn.addEventListener('click', destroyBoxes);
function destroyBoxes(){
  refs.divBoxes.innerHTML = "";
}
