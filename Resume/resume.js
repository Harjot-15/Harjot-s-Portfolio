document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        const powder = document.querySelector('.magic-powder');
        powder.style.animation = 'none'; // This will stop the animation after 2 seconds.
    }, 2000);
});

// Toggle dark mode button

document.addEventListener("DOMContentLoaded", function() {
    const toggleCheckbox = document.getElementById('toggle');
    toggleCheckbox.addEventListener('change', function() {
        document.body.classList.toggle('dark-mode', this.checked);
    });
});

