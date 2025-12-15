'use strict';

document.addEventListener("DOMContentLoaded", function() {

    function iniciarCarrusel(idContenedor) {
        
        const contenedor = document.getElementById(idContenedor);
        
        if (!contenedor) return; 

        const track = contenedor.querySelector('.carrusel-track');
        const slides = Array.from(track.children);
        const dots = contenedor.querySelectorAll('.dot');
        const videos = contenedor.querySelectorAll('video');
        
        let currentIndex = 0;

        const moveToSlide = (index) => {
            track.style.transform = 'translateX(-' + (index * 100) + '%)';
            
            dots.forEach(d => d.classList.remove('active'));
            if(dots[index]) dots[index].classList.add('active');

            videos.forEach(v => {
                v.pause();
                v.currentTime = 0;
            });

            const currentVideo = videos[index];
            if (currentVideo) {
                currentVideo.play().catch(e => console.log("Esperando interacción user"));
            }
            
            currentIndex = index;
        };

        videos.forEach((video) => {
            video.loop = false;
            video.addEventListener('ended', () => {
                let nextIndex = currentIndex + 1;
                if (nextIndex >= slides.length) {
                    nextIndex = 0;
                }
                moveToSlide(nextIndex);
            });
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                moveToSlide(index);
            });
        });

        moveToSlide(0);
    }

    iniciarCarrusel('carrusel-videos');

    iniciarCarrusel('carrusel-videos-mobile');

});