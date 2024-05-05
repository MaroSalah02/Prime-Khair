document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("header");

    document.addEventListener("mousemove", function(event) {
        const x = event.clientX;
        const y = event.clientY;
        header.style.transform = `translateY(${y}px)`;
    });

    window.addEventListener("scroll", function() {
        const scrollTop = window.scrollY;
        if (scrollTop > 0) {
            header.style.backgroundColor = "transparent"; // Change background color when scrolling starts
        } else {
            header.style.backgroundColor = "#2a3e36"; // Revert back to original color when at the top
        }
    });
});
