document.addEventListener('DOMContentLoaded', function () {
    const numStars = 300; // Number of stars
    const background = document.getElementById('background');
    
    // Generate random stars
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.width = `${Math.random() * 4}px`; // Random star size
        star.style.height = star.style.width;
        star.style.top = `${Math.random() * 100}%`; // Random vertical position
        star.style.left = `${Math.random() * 100}%`; // Random horizontal position
        star.style.animationDelay = `${Math.random() * 5}s`; // Random animation delay
        background.appendChild(star);
    }
});
