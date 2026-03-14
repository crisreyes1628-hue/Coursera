$(document).ready(function () {

    const modal = $('#miModal');
    const boton = $('#btnModal');

    // Cuando comienza a abrirse
    modal.on('show.bs.modal', function () {
        console.log("El modal comienza a abrirse");

        boton.prop('disabled', true);
        boton.removeClass('btn-warning');
        boton.addClass('btn-danger');
    });

    // Cuando terminó de abrirse
    modal.on('shown.bs.modal', function () {
        console.log("El modal terminó de abrirse");
    });

    // Cuando comienza a ocultarse
    modal.on('hide.bs.modal', function () {
        console.log("El modal comienza a cerrarse");
    });

    // Cuando terminó de ocultarse
    modal.on('hidden.bs.modal', function () {
        console.log("El modal terminó de cerrarse");

        boton.prop('disabled', false);
        boton.removeClass('btn-danger');
        boton.addClass('btn-warning');
    });

});