function toggleHamburgerMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Function to toggle the hamburger menu
function toggleMenu() {
    const menuLinks = document.querySelector('.menu-links');
    menuLinks.classList.toggle('active');
    console.log(5 + 6);
}

// Example of handling external links (Optional, remove if not needed)
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default anchor behavior
            const targetPage = this.getAttribute('href');
            window.location.href = targetPage; // Navigate to the linked page
        });
    });
});

document.getElementById('linkedin-profile').addEventListener('click', function() {
    window.open('https://www.linkedin.com/in/zhengnan-zhu-51a486164/', '_blank');
});

document.getElementById('github-profile').addEventListener('click', function() {
    window.open('https://github.com/beckman9191', '_blank');
});
