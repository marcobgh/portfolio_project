const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((item) =>
    item.addEventListener("click", function (event) {
        // só expande se o clique for no elemento com a classe .nav-toggler
        if (event.target.closest(".nav-toggler")) {
            this.classList.toggle("collapsible--expanded");
        }
    })
);