// DOM Elements
var header = document.getElementById('header');
var hamburger = document.querySelector('.hamburger');
var navLinks = document.querySelector('.nav-links');
var navLink = document.querySelectorAll('.nav-link');
var backToTop = document.querySelector('.back-to-top');

// Scroll Event Listener
window.addEventListener('scroll', function() {
    // Sticky Header
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Back to Top Button
    if (window.scrollY > 500) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

// Hamburger Menu Toggle
hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close Mobile Menu When Link is Clicked
for (var i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', function() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
}

// Top Button Click Event
backToTop.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth Scrolling for Internal Links
var anchors = document.querySelectorAll('a[href^="#"]');
for (var i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener('click', function(e) {
        e.preventDefault();
        
        var targetId = this.getAttribute('href');
        var targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Offset for header height
                behavior: 'smooth'
            });
        }
    });
}

// Prevent Default on External Links
var externalLinks = document.querySelectorAll('a[target="_blank"]');
for (var i = 0; i < externalLinks.length; i++) {
    externalLinks[i].addEventListener('click', function(e) {
        // This allows external links to open in a new tab
        e.stopPropagation();
    });
}

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', function() {
    // Set first nav link as active by default
    if (navLink.length > 0) {
        navLink[0].classList.add('active');
    }
});
