document.addEventListener('DOMContentLoaded', function () {
    const musicForm = document.getElementById('musicForm');
    const musicTypesSelect = document.getElementById('musicTypes');
    const btn = document.getElementById('btn');
    const resultElement = document.getElementById('result');

    // Cargar datos almacenados al inicio
    cargarDatos();

    btn.addEventListener('click', function () {
        const numberSelected = obtenerNumeroSeleccionado(musicTypesSelect);
        mostrarCantidadSeleccionada(numberSelected);
        // Guardar datos al hacer clic en el botón
        guardarDatos(numberSelected);
    });

    function obtenerNumeroSeleccionado(selectObject) {
        return [...selectObject.options].filter(option => option.selected).length;
    }

    function mostrarCantidadSeleccionada(numberSelected) {
        resultElement.textContent = `Número de opciones seleccionadas: ${numberSelected}`;
    }

    function guardarDatos(data) {
        // Almacenar en el LocalStorage
        localStorage.setItem('musicData', JSON.stringify({ numberSelected: data }));
    }

    function cargarDatos() {
        // Recuperar datos del LocalStorage
        const { numberSelected } = JSON.parse(localStorage.getItem('musicData')) || { numberSelected: 0 };
        mostrarCantidadSeleccionada(numberSelected);
    }

});