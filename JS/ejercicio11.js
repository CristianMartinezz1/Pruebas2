document.getElementById('btnConvertir').addEventListener('click', function(event) {
    event.preventDefault();

    const inputKm = document.getElementById('inputKm');
    const outputMillas = document.getElementById('outputMillas');
    const mensajeError = document.getElementById('mensajeError');

    const valorStr = inputKm.value.trim();

    if (valorStr === "" || isNaN(valorStr)) {
        mensajeError.style.display = 'block';
        inputKm.style.borderColor = '#000000';
        outputMillas.value = '';
        return;
    }

    mensajeError.style.display = 'none';
    inputKm.style.borderColor = '#000000'; 

    const km = parseFloat(valorStr);
    const millas = km * 0.621371;

    outputMillas.value = millas;
});