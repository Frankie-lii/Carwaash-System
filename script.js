document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('mobile-menu-icon');
    const navMenu = document.getElementById('nav-menu');

    // Toggle mobile menu visibility
    menuIcon.addEventListener('click', function(e) {
        navMenu.classList.toggle('active');
        e.stopPropagation(); // Prevents event bubbling to the window
    });

    // Close menu when clicking outside of it
    window.addEventListener('click', function() {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });

    // Prevent closing when clicking inside the menu
    navMenu.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});


// Smooth Scroll Function
const smoothScroll = () => {
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
};

// Sticky Header on Scroll
const stickyHeader = () => {
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
};

// Booking Form Validation
const validateBookingForm = () => {
    const form = document.querySelector('.booking-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const service = document.getElementById('service').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();

        if (!service || !date || !time || !name || !email || !phone) {
            alert('Please fill in all the required fields.');
            return;
        }

        alert('Booking Confirmed!');
        form.reset();
    });
};

// See the Difference Image Hover Effect
const initImageHoverEffect = () => {
    const beforeImage = document.querySelector('.before-image');
    const afterImage = document.querySelector('.after-image');

    beforeImage.addEventListener('mouseenter', () => {
        afterImage.style.opacity = '1';
    });

    beforeImage.addEventListener('mouseleave', () => {
        afterImage.style.opacity = '0';
    });
};

// Initialize Functions
document.addEventListener('DOMContentLoaded', () => {
    smoothScroll();
    stickyHeader();
    validateBookingForm();
    initImageHoverEffect();
});

// Contact Form Submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Your message has been sent!');
    contactForm.reset();
});

// Mobile Menu Toggle
const mobileMenuIcon = document.getElementById('mobile-menu-icon');
const navMenu = document.getElementById('nav-menu');

document.addEventListener('click', (event) => {
    if (!navMenu.contains(event.target) && !mobileMenuIcon.contains(event.target)) {
        navMenu.classList.remove('open');
    }
});

mobileMenuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

// User Form Handling
const userForm = document.getElementById('user-form');
const userProfile = document.getElementById('user-profile');

userForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const avatar = document.getElementById('avatar').files[0];
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    if (avatar) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profile-avatar').src = e.target.result;
        };
        reader.readAsDataURL(avatar);
    }

    document.getElementById('profile-name').textContent = username;
    document.getElementById('profile-email').textContent = email;

    userForm.classList.add('hidden');
    userProfile.classList.remove('hidden');
});