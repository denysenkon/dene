var link = document.querySelector(".btn-write");
var popup = document.querySelector(".modal-content");
link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");

    popup.style.top = window.pageYOffset + '40px';
});

var close = popup.querySelector(".modal-content-close");

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
});