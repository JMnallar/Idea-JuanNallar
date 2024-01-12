var musicSimulator = {
    musicTypesSelect: document.getElementById('musicTypes'),
    btn: document.getElementById('btn'),

    init: function () {
        this.btn.addEventListener('click', this.mostrarCantidadSeleccionada.bind(this));
    },

    mostrarCantidadSeleccionada: function () {
        var numberSelected = this.obtenerNumeroSeleccionado();
        alert("Número de opciones seleccionadas: " + numberSelected);
        // Puedes realizar otras operaciones o mostrar el resultado de diferentes maneras según tus necesidades
    },

    obtenerNumeroSeleccionado: function () {
        var numberSelected = 0;
        for (var i = 0; i < this.musicTypesSelect.options.length; i++) {
            if (this.musicTypesSelect.options[i].selected) {
                numberSelected++;
            }
        }
        return numberSelected;
    }
};

musicSimulator.init();