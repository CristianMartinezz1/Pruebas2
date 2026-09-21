document.getElementById('btnVerificar').addEventListener('click', function(event) {
    event.preventDefault();

    const inputEdad = document.getElementById('inputEdad');
    const outputResultado = document.getElementById('outputResultado');
    const mensajeError = document.getElementById('mensajeError');

    const valorStr = inputEdad.value.trim();

    // Validaciones: verificar si está vacío, si no es un número válido, o si es negativo
    const edad = Number(valorStr);
    if (valorStr === "" || isNaN(edad) || edad < 0 || !Number.isInteger(edad)) {
        mensajeError.style.display = 'block';
        inputEdad.style.border = '1px solid #000000';
        outputResultado.value = '';
        return;
    }

    // Ocultar error si la validación es correcta
    mensajeError.style.display = 'none';
    inputEdad.style.border = '1px solid #000000';

    // Condición de votación
    if (edad >= 18) {
        outputResultado.value = "Puedes votar";
    } else {
        outputResultado.value = "No puedes votar";
    }
});