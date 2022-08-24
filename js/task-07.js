const handleChangeSlider = document.querySelector('#font-size-control');
const fontChange = document.querySelector('#text');

handleChangeSlider.addEventListener("input", event => {
    fontChange.style.fontSize = `${event.target.value}px`;
});
