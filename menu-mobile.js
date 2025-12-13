document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById('menuToggle');
    const siteNav = document.getElementById('siteNav');
    const menuOverlay = document.getElementById('menuOverlay');

    function toggleMenu() {
        siteNav.classList.toggle('active');
        menuOverlay.classList.toggle('active');

        if (siteNav.classList.contains('active')) {
            menuToggle.innerHTML = '✕';
        } else {
            menuToggle.innerHTML = '☰';
        }
    }

    menuToggle.addEventListener('click', toggleMenu);

    menuOverlay.addEventListener('click', toggleMenu);
    
    const enlaces = siteNav.querySelectorAll('a');
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', toggleMenu);
    });

});