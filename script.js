// Highlight the active navigation link
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});

// Optional: Smooth scroll for links with anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Modal functionality
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal-project2");
    const openModal = document.querySelector(".cta-button[href='#']");
    const closeModal = modal.querySelector(".close");

    openModal.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default link action
        modal.style.display = "flex";
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});

// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Highlight the active navigation link
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });

    // Toggle visibility of skill descriptions
    const skillCards = document.querySelectorAll(".skill-card");
    skillCards.forEach(card => {
        card.addEventListener("click", () => {
            const description = card.querySelector("ul, p");
            if (description) {
                const isHidden = description.style.display === "none";
                description.style.display = isHidden ? "block" : "none";
                card.classList.toggle("expanded", isHidden);
            }
        });
    });

    // Add smooth scrolling to anchor links (if any)
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").slice(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjust for header height
                    behavior: "smooth"
                });
            }
        });
    });
});
