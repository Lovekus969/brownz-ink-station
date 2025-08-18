document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("booking-form");
    const confirmation = document.getElementById("confirmation-message");

    // Function to save booking data to localStorage
    function saveBooking(data) {
        let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
        bookings.push(data);
        localStorage.setItem("bookings", JSON.stringify(bookings));
    }

    // Form submission
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const data = {
            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            date: form.date.value,
            time: form.time.value,
            artist: form.artist.value,
            notes: form.notes.value
        };

        saveBooking(data);

        // Show confirmation message
        form.style.display = "none";
        confirmation.style.display = "block";
    });

    // Owner shortcut: Alt + Ctrl + O
    document.addEventListener('keydown', function(e) {
        if(e.altKey && e.ctrlKey && e.key.toLowerCase() === 'o') {
            let password = prompt("Enter Owner Password:");
            if(password === "@1313") {
                window.location.href = "owner.html";
            } else {
                alert("Incorrect Password!");
            }
        }
    });
});
