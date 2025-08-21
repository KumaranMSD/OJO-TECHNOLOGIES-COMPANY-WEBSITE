// Get current page filename
const currentPage = window.location.pathname.split("/").pop();

// Get all nav links
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
    // If href matches current page, add 'active' class
    if(link.getAttribute("href") === currentPage) {
    link.classList.add("active");
    }
});


function toggleMenu() {
    const menu = document.getElementById("chatMenu");
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}