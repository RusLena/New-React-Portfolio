document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById("navbar");

    // Remove the scroll event listener
    window.removeEventListener('scroll', scrollHandler);

    // Function to handle scrolling behavior
    function scrollHandler() {
        if (window.scrollY > 50) { // Adjust the threshold as needed
            navbar.classList.add('fixed'); // Add a class to make the navbar fixed
        } else {
            navbar.classList.remove('fixed'); // Remove the class to make the navbar not fixed
        }
    }

    // Initial call to the scroll handler
    scrollHandler();

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
});
