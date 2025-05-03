// Function to toggle the visibility of the menu and change the icon state
function toggleMenu() {
    // Select the menu element with the class "menu-links"
    const menu = document.querySelector(".menu-links");
    
    // Select the hamburger icon element with the class "hamburger-icon"
    const icon = document.querySelector(".hamburger-icon");
    
    // Toggle the "open" class on the menu to show or hide it
    menu.classList.toggle("open");
    
    // Toggle the "open" class on the icon to change its appearance
    icon.classList.toggle("open");
}