// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Optional: animate hamburger bars
    hamburger.classList.toggle('toggle');
});



const carousel = document.querySelector('.gallery-carousel');
let scrollAmount = 0;

function autoScroll() {
    scrollAmount += 1; // speed of scroll
    if(scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
        scrollAmount = 0; // reset to start
    }
    carousel.scrollLeft = scrollAmount;
    requestAnimationFrame(autoScroll);
}

autoScroll();



// Select all elements with 'reveal' class
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 150; // Trigger a bit before reaching top
        if (elementTop < windowHeight - revealPoint) {
            el.classList.add('active');
        } else {
            el.classList.remove('active'); // Optional: remove when out of view
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Trigger once on page load
revealOnScroll();



document.addEventListener('DOMContentLoaded', function() {
    // Only active on index.html
    if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
        console.log("Owner cheat code listener active on this page");

        document.addEventListener('keydown', function(e) {
            console.log("Key pressed:", e.code, "Alt:", e.altKey, "Ctrl:", e.ctrlKey);

            // Secret cheat code: Ctrl + Alt + B
            if (e.altKey && e.ctrlKey && e.code === 'KeyB') {
                console.log("Secret cheat code triggered!");

                // Show password prompt
                let password = prompt("Enter Owner Password:");
                if(password === "@1313") {
                    console.log("Password correct! Redirecting to owner page...");
                    window.location.href = "owner.html"; // Redirect
                } else {
                    console.log("Incorrect password");
                    alert("Incorrect Password!");
                }
            }
        });
    }
});
