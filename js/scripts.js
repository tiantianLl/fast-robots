/*!
* Start Bootstrap - Freelancer v7.0.6 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});



// Function to increase image size
// function enlargeImg(id) {
//     // Get the img object using its Id
//     img = document.getElementById(id);
//     // Set image size to 1.5 times original
//     img.style.transform = "scale(1.5)";
//     // Animation effect
//     img.style.transition = "transform 0.25s ease";
// }
// // Function to reset image size
// function resetImg(id) {
//     // Get the img object using its Id
//     img = document.getElementById(id);
//     // Set image size to original
//     img.style.transform = "scale(1)";
//     img.style.transition = "transform 0.25s ease";
// }

function swap(img) {
    if (img.className !== "cte img-fluid img-centered") { img.style.transform = "scale(2.5)"; img.style.transition = "transform 0.25s ease"; img.className = "cte img-fluid img-centered"; }
    else {
        img.style.transform = "scale(1)";
        img.style.transition = "transform 0.25s ease";
        img.className = "img-fluid img-centered"
    }
}