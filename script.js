const scrollToTopBtn = document.getElementById('scrollToTop');

window.onscroll = function () {
    scrollToTopBtn.classList.toggle('show', window.pageYOffset > 700);
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
