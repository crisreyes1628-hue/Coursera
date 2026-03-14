// ACTIVAR TOOLTIPS
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
tooltipTriggerList.forEach(el => {
    new bootstrap.Tooltip(el);
});

// MODIFICAR VELOCIDAD DEL CAROUSEL
const myCarousel = document.querySelector('#mainCarousel');

new bootstrap.Carousel(myCarousel,{
    interval: 2500,  // velocidad personalizada
    ride: 'carousel'
});

// COMPORTAMIENTO DINÁMICO DEL FORMULARIO
document.getElementById("formRegistro").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Registro enviado correctamente 🎉");
});
