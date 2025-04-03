// Basic script file - can be expanded later
// Bootstrap's bundle takes care of navbar toggling and other components.

document.addEventListener('DOMContentLoaded', () => {
    console.log("Resume website with Bootstrap loaded.");

    // Optional: Add custom JS interactions if needed
    // Example: Smooth scrolling for navigation links (Bootstrap 5 might handle this differently or you might prefer a library)
     // Basic smooth scroll for anchor links
     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Check if it's a nav link within the collapsible menu
            if (!this.closest('.navbar-nav')) return;

            e.preventDefault();
            let targetId = this.getAttribute('href');
            let targetElement = document.querySelector(targetId);

            if (targetElement) {
                 // Calculate offset if using sticky nav
                 const navbarHeight = document.querySelector('.navbar').offsetHeight;
                 const elementPosition = targetElement.getBoundingClientRect().top;
                 const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                window.scrollTo({
                     top: offsetPosition,
                    behavior: "smooth"
                 });

                // Optional: Close mobile navbar after click
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                     new bootstrap.Collapse(navbarCollapse).hide();
                 }
             }
         });
     });
});