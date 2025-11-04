document.addEventListener("DOMContentLoaded", () => {
  
  const fondo = document.querySelector('.fondo-degradado');
  const secciones = document.querySelectorAll('.section');

  const opcionesObserver = {
    root: null,
    threshold: 0.5 
  };

  const observador = new IntersectionObserver((entradas, observador) => {
    entradas.forEach(entrada => {
      
      if (entrada.isIntersecting) {
        
        const nuevoColor = entrada.target.dataset.color;
        
        fondo.style.backgroundColor = nuevoColor;
      }
    });
  }, opcionesObserver);

  secciones.forEach(section => {
    observador.observe(section);
  });

});