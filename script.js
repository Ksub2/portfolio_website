// script.js

const darkmodeToggle = document.getElementById('darkmodeToggle');


// Check local storage for dark mode preference on page load
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

// Toggle dark mode when the button is clicked
darkmodeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', null); // Remove preference from local storage
        // Optionally change the icon back to light mode
        darkmodeToggle.querySelector('img').src = "image/dark-mode-6682.svg"; // Change the image source
    } else {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled'); // Store preference in local storage
     
        darkmodeToggle.querySelector('img').src = "image/sun-8726.svg"; // Change the image source
    }
});