// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add any additional JavaScript functionality you may need


    // Change header background image every 5 seconds (replace with your image URLs)
const header = document.querySelector('header');
const images = ['Digital Marketing Skills.png', 'Design2.png', 'Design3.png']; // Replace with your image URLs
let index = 0;

function changeBackground() {
    header.style.backgroundImage = `url('${images[index]}')`;
    index = (index + 1) % images.length;
}

setInterval(changeBackground, 5000); // Change image every 5 seconds
});

// script.js

// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Form submission handling
    const contactForm = document.querySelector('.contact-form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get the form data
        const formData = new FormData(contactForm);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

        // Log the form data (for demonstration purposes)
        console.log(formDataObject);

        // You can send the form data to a server using AJAX or fetch here
        // Example: Use fetch API to send data to a server
        /*
        fetch('your-server-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formDataObject),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Optionally, you can display a success message to the user
        })
        .catch(error => {
            console.error('Error:', error);
            // Optionally, you can display an error message to the user
        });
        */
        
        // Display a success message (for demonstration purposes)
        alert('Form submitted successfully!');
    });
});
