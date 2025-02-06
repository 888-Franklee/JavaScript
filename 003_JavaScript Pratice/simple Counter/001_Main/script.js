document.addEventListener('DOMContentLoaded', (event) => {
    let counter = 0;

    const counterElement = document.getElementById('counter');
    const increaseButton = document.getElementById('increase');
    const decreaseButton = document.getElementById('decrease');

    increaseButton.addEventListener('click', () => {
        counter++;
        counterElement.textContent = counter;
    });

    decreaseButton.addEventListener('click', () => {
        counter--;
        counterElement.textContent = counter;
    });
});