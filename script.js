// Función para el carrusel automático
const carrusel = document.querySelector(".carousel-slide");
const slides = document.querySelectorAll(".carousel-slide .slide");
const totalSlides = slides.length;

// Clonar el primer slide y agregarlo al final
const primerSlide = slides[0].cloneNode(true);
carrusel.appendChild(primerSlide);

let index = 0;

// Función para cambiar de imagen
function cambiarImagen() {
    index++;
    carrusel.style.transition = "transform 1s ease-in-out";
    carrusel.style.transform = `translateX(-${index * 100}%)`;

    if (index === totalSlides) {
        setTimeout(() => {
            carrusel.style.transition = "none";
            carrusel.style.transform = `translateX(0%)`;
            index = 0;
        }, 1000);
    }
}

// Iniciar carrusel automático
setInterval(cambiarImagen, 5000);

// Función para el menú hamburguesa
function toggleMenu() {
    const menu = document.querySelector(".nav-links");
    menu.classList.toggle("active");
}

const track = document.querySelector(".carousel-track");
const items = document.querySelectorAll(".carousel-item");
let currentIndex = 0;
const totalItems = items.length;

// Función para actualizar el carrusel
function updateCarousel() {
    items.forEach((item, index) => {
        item.classList.remove("active");
        let newIndex = (index - currentIndex + totalItems) % totalItems;
        
        if (newIndex === Math.floor(totalItems / 2)) {
            item.classList.add("active");
        }
    });

    const offset = -currentIndex * (100 / totalItems);
    track.style.transform = `translateX(${offset}%)`;
}

// Función para mover el carrusel circularmente
function moveCarousel(direction) {
    currentIndex = (currentIndex + direction + totalItems) % totalItems;
    updateCarousel();
}

// Iniciar el carrusel en el centro
updateCarousel();

document.addEventListener("DOMContentLoaded", function () {
    console.log("Página cargada con éxito.");

    // Seleccionar todos los productos
    const productos = document.querySelectorAll(".producto");

    // Aplicar animación de entrada progresiva
    productos.forEach((producto, index) => {
        setTimeout(() => {
            producto.style.opacity = "1";
            producto.style.transform = "translateY(0)";
        }, index * 200); // Retraso progresivo en la animación
    });
});
// Función para redirigir a otra página
function irAPagina() {
    window.location.href = "otra-pagina.html"; // Reemplázalo con tu URL destino
}
