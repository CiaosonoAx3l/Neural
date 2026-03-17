
/* CURSOR */
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
});

(function animateRing() {
    rx += (mx - rx) * .12;
    ry += (my - ry) * .12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animateRing);
})();

document.querySelectorAll('a, button, .service-item').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.width = '6px';
        cursor.style.height = '6px';
        ring.style.width = '54px';
        ring.style.height = '54px';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.width = '12px';
        cursor.style.height = '12px';
        ring.style.width = '36px';
        ring.style.height = '36px';
    });
});

/* SCROLL PROGRESS */
const scrollBar = document.getElementById('scrollBar');
window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
    scrollBar.style.width = pct + '%';
});

/* INTERSECTION REVEAL */
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
        }
    });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


// Send the message via email
function handleSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const dest = 'sofia.detogni04@gmail.com';
    const subject = 'NEURAL-S.H. — Nuovo contatto da ' + name;
    const body = 'Nome: ' + name + '\nEmail: ' + email + '\n\nMessaggio:\n' + message;

    window.location.href = 'mailto:' + dest
        + '?subject=' + encodeURIComponent(subject)
        + '&body=' + encodeURIComponent(body);

    const btn = document.getElementById('submitBtn');
    btn.textContent = 'Inviato ✓';
    btn.style.background = '#22c55e';
    setTimeout(() => {
        btn.textContent = 'Invia →';
        btn.style.background = '';
        e.target.reset();
    }, 3000);
}