document.getElementById('btnCalcular').addEventListener('click', function(event) {
    event.preventDefault();

    const inputNumeros = document.getElementById('inputNumeros');
    const outputMayor = document.getElementById('outputMayor');
    const outputMenor = document.getElementById('outputMenor');
    const outputPromedio = document.getElementById('outputPromedio');
    const mensajeError = document.getElementById('mensajeError');

    const valorStr = inputNumeros.value.trim();

    // Validar que el campo no esté vacío
    if (valorStr === "") {
        mensajeError.style.display = 'block';
        outputMayor.value = '';
        outputMenor.value = '';
        outputPromedio.value = '';
        return;
    }

    // Separar los valores por comas y convertirlos a un arreglo de números
    const partes = valorStr.split(',');
    const numeros = [];

    for (let i = 0; i < partes.length; i++) {
        const elemento = partes[i].trim();
        // Verificar si está vacío o no es un número válido
        if (elemento === "" || isNaN(elemento)) {
            mensajeError.style.display = 'block';
            outputMayor.value = '';
            outputMenor.value = '';
            outputPromedio.value = '';
            return;
        }
        numeros.push(parseFloat(elemento));
    }

    // Si el arreglo quedó vacío por alguna razón
    if (numeros.length === 0) {
        mensajeError.style.display = 'block';
        return;
    }

    // Ocultar error si todo es correcto
    mensajeError.style.display = 'none';

    // 1. Calcular el número mayor y 2. el número menor usando el arreglo
    let mayor = Math.max(...numeros);
    let menor = Math.min(...numeros);

    // 3. Calcular el promedio de todos los números
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    let promedio = suma / numeros.length;

    // Mostrar los resultados en las cajas de texto de solo lectura
    outputMayor.value = mayor;
    outputMenor.value = menor;
    outputPromedio.value = promedio.toFixed(2); // Formateado a 2 decimales para mayor claridad
});