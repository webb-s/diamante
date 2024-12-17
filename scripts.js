document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector(".image-nav");
    const headerHeight = document.querySelector("header").offsetHeight;

    window.addEventListener("scroll", function() {
        if (window.scrollY >= headerHeight) {
            nav.classList.add("visible");
        } else {
            nav.classList.remove("visible");
        }
    });
});
