const obtenerTareas = () => {
    let tareasGuardadas = localStorage.getItem('tareas');
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
};

const guardarTareas = (tareas) => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
};

const manejarTareas = () => {
    let tareas = obtenerTareas();

    const agregar = (textoTarea) => {
        tareas.push(textoTarea);
        guardarTareas(tareas);
        renderizar();
    };

    const eliminar = (indice) => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: 'Deseas eliminar esta tarea',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#000000',
            cancelButtonColor: '#555555',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                tareas.splice(indice, 1);
                guardarTareas(tareas);
                renderizar();
            }
        });
    };

    const renderizar = () => {
        const lista = document.getElementById('listaTareas');
        lista.innerHTML = '';
        tareas.forEach((tarea, index) => {
            const li = document.createElement('li');
            li.textContent = tarea;

            const btnEliminar = document.createElement('button');
            btnEliminar.textContent = 'Eliminar';
            btnEliminar.onclick = () => eliminar(index);

            li.appendChild(btnEliminar);
            lista.appendChild(li);
        });
    };

    return {
        agregar,
        renderizar
    };
};

const gestor = manejarTareas();

document.getElementById('btnAgregar').addEventListener('click', (event) => {
    event.preventDefault();
    const input = document.getElementById('inputTarea');
    const texto = input.value.trim();

    if (texto === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, ingresa una tarea.',
            confirmButtonColor: '#000000'
        });
        return;
    }

    gestor.agregar(texto);
    input.value = '';
});

window.onload = () => {
    gestor.renderizar();
};