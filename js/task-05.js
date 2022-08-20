const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

textInput.addEventListener('input', (event) => {
    if(textInput.value.length !== 0){
        return textOutput.textContent = event.currentTarget.value;  
    }
    
        return textOutput.textContent = 'Anonymous';

})
