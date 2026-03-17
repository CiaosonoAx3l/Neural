/* ── HAMBURGER MENU ── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileOverlay = document.getElementById('mobileOverlay');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.contains('active') ? closeMobile() : openMobile();
});

function openMobile() {
    hamburger.classList.add('open');
    mobileMenu.classList.add('active');
    mobileOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMobile() {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('active');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

function toggleMobileSub(e) {
    e.preventDefault();
    e.stopPropagation();
    const sub = document.querySelector('.mobile-sub');
    const link = e.currentTarget;
    sub.classList.toggle('open');
    link.textContent = sub.classList.contains('open') ? 'Servizi ▴' : 'Servizi ▾';
}