const watchInput = document.querySelector('#validation-input');

watchInput.addEventListener('blur', () => {
    if(watchInput.value.length === Number(watchInput.getAttribute("data-length"))){
        
        watchInput.classList.add("valid");
        watchInput.classList.remove("invalid");
    } else {
        watchInput.classList.add("invalid");
        watchInput.classList.remove("valid");
}});


