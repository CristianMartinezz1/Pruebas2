
let estudiantes = [];

document.getElementById('btnAgregar').addEventListener('click', function(event) {
    event.preventDefault();

    const inputNombre = document.getElementById('inputNombre');
    const inputCalificacion = document.getElementById('inputCalificacion');
    const mensajeError = document.getElementById('mensajeError');
    const mensajeExito = document.getElementById('mensajeExito');

    const nombre = inputNombre.value.trim();
    const calificacionStr = inputCalificacion.value.trim();
    const calificacion = parseFloat(calificacionStr);

    
    if (nombre === "" || calificacionStr === "" || isNaN(calificacion)) {
        mensajeError.style.display = 'block';
        mensajeExito.style.display = 'none';
        return;
    }

    
    mensajeError.style.display = 'none';
    mensajeExito.style.display = 'block';

    
    let nuevoEstudiante = {
        nombre: nombre,
        calificacion: calificacion
    };

    estudiantes.push(nuevoEstudiante);

    
    inputNombre.value = '';
    inputCalificacion.value = '';
});


document.getElementById('btnCalcular').addEventListener('click', function(event) {
    event.preventDefault();

    const outputPromedio = document.getElementById('outputPromedio');
    const outputAlta = document.getElementById('outputAlta');
    const outputBaja = document.getElementById('outputBaja');
    const mensajeError = document.getElementById('mensajeError');

    
    if (estudiantes.length === 0) {
        mensajeError.textContent = "Primero debes agregar al menos un estudiante.";
        mensajeError.style.display = 'block';
        return;
    }

    mensajeError.style.display = 'none';

    
    let sumaCalificaciones = estudiantes.reduce((total, estudiante) => total + estudiante.calificacion, 0);
    let promedio = sumaCalificaciones / estudiantes.length;

    let calificacionMaxima = Math.max(...estudiantes.map(e => e.calificacion));
    let calificacionMinima = Math.min(...estudiantes.map(e => e.calificacion));

    let estudianteMasAlto = estudiantes.find(e => e.calificacion === calificacionMaxima);
    let estudianteMasBajo = estudiantes.find(e => e.calificacion === calificacionMinima);

    outputPromedio.value = promedio.toFixed(2);
    outputAlta.value = `${estudianteMasAlto.nombre} (${estudianteMasAlto.calificacion})`;
    outputBaja.value = `${estudianteMasBajo.nombre} (${estudianteMasBajo.calificacion})`;
});