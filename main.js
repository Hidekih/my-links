const navLinkEls = document.querySelectorAll('.nav-link');
        
navLinkEls.forEach((e) => {
    e.addEventListener('mouseenter', (link) => {
        const arrowIconEl = link.target.querySelector('.btn-arrow');
        arrowIconEl.classList.add('visible')
        arrowIconEl.setAttribute('aria-hidden', 'false');
    });

    e.addEventListener('mouseleave', (link) => {
        const arrowIconEl = link.target.querySelector('.btn-arrow');
        arrowIconEl.classList.remove('visible')
        arrowIconEl.setAttribute('aria-hidden', 'true');
    });
})

window.onclose = () => {
    navLinkEls.forEach((e) => {
        e.removeEventListener('mouseenter');

        e.removeEventListener('mouseleave');
    })
}