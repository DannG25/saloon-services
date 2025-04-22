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
  //Servicios funcion
  

// funcion para carrucel de testigos
document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.testimonial-slider');
  const slides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const indicatorsContainer = document.querySelector('.carousel-indicators');
  let currentIndex = 0;
  let slideInterval;
  const slideDuration = 4000; // 4 segundos
  
  // Crear indicadores
  slides.forEach((slide, index) => {
    const indicator = document.createElement('span');
    indicator.addEventListener('click', () => goToSlide(index));
    indicatorsContainer.appendChild(indicator);
  });
  
  const indicators = document.querySelectorAll('.carousel-indicators span');
  indicators[0].classList.add('active');
  
  // Función para ir a un slide específico
  function goToSlide(index) {
    currentIndex = index;
    updateSlider();
    resetInterval();
  }
  
  // Actualizar el slider
  function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // Actualizar indicadores
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentIndex);
    });
  }
  
  // Slide anterior
  function prevSlide() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    updateSlider();
    resetInterval();
  }
  
  // Slide siguiente
  function nextSlide() {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    updateSlider();
    resetInterval();
  }
  
  // Reiniciar intervalo automático
  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, slideDuration);
  }
  
  // Event listeners
  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);
  
  // Iniciar intervalo automático
  slideInterval = setInterval(nextSlide, slideDuration);
  
  // Pausar al pasar el mouse
  slider.parentElement.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
  });
  
  slider.parentElement.addEventListener('mouseleave', () => {
    resetInterval();
  });
  
  // Touch events para móviles
  let touchStartX = 0;
  let touchEndX = 0;
  
  slider.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    clearInterval(slideInterval);
  }, {passive: true});
  
  slider.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
    resetInterval();
  }, {passive: true});
  
  function handleSwipe() {
    const difference = touchStartX - touchEndX;
    if (difference > 50) { // Swipe izquierda
      nextSlide();
    } else if (difference < -50) { // Swipe derecha
      prevSlide();
    }
  }
});


// funcion de manejo de formulario 

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('beautyContactForm');
  const submitBtn = contactForm.querySelector('.submit-btn');
  
  // Animación para los campos del formulario
  const formGroups = document.querySelectorAll('.form-group');
  formGroups.forEach(group => {
    const input = group.querySelector('input, select, textarea');
    
    // Comprobar si el campo tiene valor al cargar
    if (input.value) {
      group.querySelector('label').style.top = '-12px';
      group.querySelector('label').style.fontSize = '12px';
      group.querySelector('label').style.color = '#d14d72';
      group.querySelector('.underline').style.width = '100%';
    }
    
    // Efecto al enfocar
    input.addEventListener('focus', function() {
      group.querySelector('.underline').style.width = '100%';
    });
    
    // Efecto al perder el foco
    input.addEventListener('blur', function() {
      if (!this.value) {
        group.querySelector('.underline').style.width = '0';
      }
    });
  });
  
  // Manejo del envío del formulario
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Mostrar mensaje de éxito
    const originalBtnText = submitBtn.querySelector('span').textContent;
    submitBtn.querySelector('span').textContent = '¡Solicitud Enviada!';
    submitBtn.style.background = 'linear-gradient(45deg, #4CAF50, #8BC34A)';
    submitBtn.disabled = true;
    
    // Resetear después de 3 segundos
    setTimeout(() => {
      submitBtn.querySelector('span').textContent = originalBtnText;
      submitBtn.style.background = 'linear-gradient(45deg, #d14d72, #f8c6d5)';
      submitBtn.disabled = false;
      contactForm.reset();
      
      // Resetear las etiquetas
      formGroups.forEach(group => {
        const input = group.querySelector('input, select, textarea');
        if (!input.value) {
          group.querySelector('label').style.top = '15px';
          group.querySelector('label').style.fontSize = '16px';
          group.querySelector('label').style.color = '#999';
          group.querySelector('.underline').style.width = '0';
        }
      });
    }, 3000);
  });
});