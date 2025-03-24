//función para imagen de fondo del inicio 

document.addEventListener("DOMContentLoaded", () => {
    const heroSection = document.querySelector(".hero");
    
    // Lista de imágenes de fondo
    const images = [
      "img/facial.jpg",
      "img/uñas_services.jpg",
      "img/corte_cabello_belleza.jpg"
    ];
    
    let index = 0;
  
    function changeBackground() {
      heroSection.style.backgroundImage = `url(${images[index]})`;
      heroSection.classList.add("fade");
  
      index = (index + 1) % images.length;
  
      setTimeout(() => {
        heroSection.classList.remove("fade");
      }, 1000); // Quita la clase después de la animación
    }
  
    // Cambia la imagen cada 7 segundos
    changeBackground();
    setInterval(changeBackground, 7000);
  });
  

// funcion para carrucel de testigos

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

// Auto-play the carousel
setInterval(nextSlide, 5000);

