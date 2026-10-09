const gallery = document.querySelector(".gallery");
const wrap = document.querySelector(".project-thumbnail");

function updateFades() {
    const maxScroll = gallery.scrollWidth - gallery.clientWidth;
    wrap.classList.toggle("can-scroll-left", gallery.scrollLeft > 1);
    wrap.classList.toggle("can-scroll-right", gallery.scrollLeft < maxScroll - 1);
}

gallery.addEventListener("scroll", updateFades, { passive: true });
window.addEventListener("resize", updateFades);
window.addEventListener("load", updateFades);
updateFades();