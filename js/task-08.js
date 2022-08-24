const formSending = document.querySelector('.login-form');

formSending.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    const {
        elements: {email, password}} = event.currentTarget;
 if (email.value === '' || password.value === ''){
    return alert('Please, Fill in all the fields')
 }

 const formElements = event.currentTarget.elements;
 const emailInput = formElements.email.value;
 const passwordInput = formElements.password.value;

 const formData = {
    emailInput,
    passwordInput,
 }
 console.log(formData);

  event.currentTarget.reset();

}
