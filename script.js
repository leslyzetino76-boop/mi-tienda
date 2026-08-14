// Se ejecuta cuando todo el contenido de la página se ha cargado
document.addEventListener('DOMContentLoaded', () => {

    // 1. Marcar automáticamente el botón activo de la navegación
    const paginaActual = window.location.pathname.split('/').pop() || 'index.html';
    const enlacesNavegacion = document.querySelectorAll('.nav-item a, .btn-nav');

    enlacesNavegacion.forEach(enlace => {
        const enlaceHref = enlace.getAttribute('href');
        if (enlaceHref === paginaActual) {
            enlace.style.backgroundColor = '#a19be8';
            enlace.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.2)';
        }
    });

    // 2. Animación de entrada suave para las tarjetas del menú y contenidos
    const elementosAnimados = document.querySelectorAll('.tarjeta-plato, .history-card, .reservation-section');
    
    elementosAnimados.forEach((elemento, index) => {
        elemento.style.opacity = '0';
        elemento.style.transform = 'translateY(15px)';
        elemento.style.transition = 'opacity 0.4s ease, transform 0.4s ease';

        setTimeout(() => {
            elemento.style.opacity = '1';
            elemento.style.transform = 'translateY(0)';
        }, 80 * index); // Aparecen una por una en cascada
    });

    // 3. Confirmación interactiva al enviar el formulario de reservas
    const formularioReserva = document.querySelector('.reservation-section form, form');
    if (formularioReserva) {
        formularioReserva.addEventListener('submit', (evento) => {
            evento.preventDefault(); // Evita que la página se recargue
            alert('¡Gracias! Tu reserva en La Trattoria del Sol ha sido recibida con éxito.');
            formularioReserva.reset(); // Limpia los campos del formulario
        });
    }

});