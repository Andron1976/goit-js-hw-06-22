
const minusButton = document.querySelector('button[data-action="decrement"]');
const plusButton = document.querySelector('button[data-action="increment"]');
const viewValue = document.querySelector('#value');
let counterValue = 0;

minusButton.addEventListener('click', () => {
    viewValue.textContent = counterValue;
    counterValue -= 1;  
});
plusButton.addEventListener('click', () => {
    viewValue.textContent = counterValue;
    counterValue += 1;
});
