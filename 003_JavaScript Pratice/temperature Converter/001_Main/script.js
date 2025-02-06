document.addEventListener('DOMContentLoaded', (event) => {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const resultDiv = document.getElementById('result');

    document.getElementById('toFahrenheit').addEventListener('click', () => {
        const celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9/5) + 32;
            resultDiv.textContent = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
        } else {
            resultDiv.textContent = 'Please enter a valid number';
        }
    });

    document.getElementById('toCelsius').addEventListener('click', () => {
        const fahrenheit = parseFloat(fahrenheitInput.value);
        if (!isNaN(fahrenheit)) {
            const celsius = (fahrenheit - 32) * 5/9;
            resultDiv.textContent = `${fahrenheit}°F is ${celsius.toFixed(2)}°C`;
        } else {
            resultDiv.textContent = 'Please enter a valid number';
        }
    });
});
