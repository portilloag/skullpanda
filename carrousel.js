'use strict';

document.addEventListener("DOMContentLoaded", function () {

      const track = document.querySelector('.carrusel-track');
      const slides = Array.from(track.children);
      const dots = document.querySelectorAll('.dot');
      const videos = document.querySelectorAll('.carrusel-slide video');

      let currentIndex = 0;

      const moveToSlide = (index) => {
        track.style.transform = 'translateX(-' + (index * 100) + '%)';

        dots.forEach(d => d.classList.remove('active'));
        dots[index].classList.add('active');

        videos.forEach(v => {
          v.pause();
          v.currentTime = 0;
        });

        const currentVideo = videos[index];
        currentVideo.play();

        currentIndex = index;
      };

      videos.forEach((video, index) => {
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

    });