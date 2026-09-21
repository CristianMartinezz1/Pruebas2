document.addEventListener('DOMContentLoaded', () => {
    const btnConvertir = document.getElementById('btnConvertir');
    const inputCelsius = document.getElementById('inputCelsius');
    const outputFahrenheit = document.getElementById('outputFahrenheit');
    const mensajeError = document.getElementById('mensajeError');

    btnConvertir.addEventListener('click', () => {
        const valorStr = inputCelsius.value.trim();

        if (valorStr === "" || isNaN(valorStr)) {
            mensajeError.style.display = 'block';
            inputCelsius.style.borderColor = '#000000';
            outputFahrenheit.value = '';
            return;
        }

        mensajeError.style.display = 'none';
        
        const celsius = parseFloat(valorStr);
        const fahrenheit = (celsius * 9/5) + 32;

        outputFahrenheit.value = fahrenheit.toFixed(2) + " °F";
    });

    
    inputCelsius.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            btnConvertir.click();
        }
    });
});