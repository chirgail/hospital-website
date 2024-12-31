// script.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        const service = document.getElementById("service").value;
        const gender = document.getElementById("gender").value;
        const age = document.getElementById("age").value;
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const date = document.getElementById("date").value;
        const message = document.getElementById("message").value;

        // Validate the form fields
        if (!name || !phone || !email || !date) {
            alert("Please fill out all required fields.");
            return;
        }

        if (isNaN(age) || age <= 0) {
            alert("Please enter a valid age.");
            return;
        }

        // Display a success message or process the data
        alert(`Appointment booked successfully for ${name} on ${date}!`);
        form.reset(); // Reset the form fields
    });

    form.addEventListener("reset", () => {
        (confirm("Do you really want to clear the form?")) {
            form.reset();
        }
    });
});
