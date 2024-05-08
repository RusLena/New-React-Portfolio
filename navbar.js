document.addEventListener('DOMContentLoaded', function() {
    let prevScrollPos = window.pageYOffset;
    const navbar = document.getElementById("navbar");

    window.addEventListener('scroll', function() {
        let currentScrollPos = window.pageYOffset;

        if (prevScrollPos > currentScrollPos) {
            navbar.style.top = "0"; // Show navbar when scrolling up
        } else {
            navbar.style.top = `-${navbar.offsetHeight}px`; // Hide navbar when scrolling down
        }
        prevScrollPos = currentScrollPos;
    });
});

// Get all menu items
var menuItems = document.querySelectorAll('.menu');

// Loop through each menu item and add event listener
menuItems.forEach(function(menuItem) {
    menuItem.addEventListener('click', function() {
        // Remove 'active' class from all menu items
        menuItems.forEach(function(item) {
            item.classList.remove('active');
        });

        // Add 'active' class to clicked menu item
        menuItem.classList.add('active');
    });
});













// function scrollToRecentWork() {
//     var recentWorkSection = document.getElementById('projects');
//     recentWorkSection.scrollIntoView({ behavior: 'smooth' });
// }

