// JavaScript simple para toggle del menú hamburguesa
// Compatible con navegadores antiguos (IE9+)

document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.querySelector('.hamburger');
    var navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // Fallback para IE <9 (attachEvent)
        if (!hamburger.addEventListener) {
            hamburger.attachEvent('onclick', function() {
                if (navMenu.className.indexOf('active') > -1) {
                    navMenu.className = navMenu.className.replace(' active', '');
                } else {
                    navMenu.className += ' active';
                }
            });
        }
    }
});
