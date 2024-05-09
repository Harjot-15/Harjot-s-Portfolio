document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        const powder = document.querySelector('.magic-powder');
        powder.style.animation = 'none'; // This will stop the animation after 2 seconds.
    }, 2000);
});

// Toggle dark mode button

document.addEventListener("DOMContentLoaded", function() {
    // Enable dark mode by default
    document.body.classList.add('dark-mode');

    // Set the toggle to checked
    const toggleCheckbox = document.getElementById('toggle');
    toggleCheckbox.checked = true;

    // Listen for changes on the toggle
    toggleCheckbox.addEventListener('change', function() {
        document.body.classList.toggle('dark-mode', this.checked);
    });

    // Stop the magic powder animation after 2 seconds
    setTimeout(() => {
        const powder = document.querySelector('.magic-powder');
        powder.style.animation = 'none';
    }, 2000);
});
