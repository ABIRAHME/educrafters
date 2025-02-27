document.addEventListener('DOMContentLoaded', function() {
    // Navbar toggle functionality
    const button = document.querySelector('[data-collapse-toggle="navbar-sticky"]');
    const menu = document.getElementById('navbar-sticky');

    button.addEventListener('click', function() {
        const expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !expanded);
        menu.classList.toggle('hidden');
    });

   
});