// Premium Link Hub Script

document.querySelectorAll(".link").forEach(link => {
    link.addEventListener("click", function () {
        this.style.transform = "scale(0.98)";

        setTimeout(() => {
            this.style.transform = "";
        }, 150);
    });
});

// Fade-in Animation
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});
