const topLogo = document.querySelector('.logo');
const smallLogo = document.querySelector('.small-logo');
const header = document.querySelector('#header');

function handleScroll() {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 0) {
        topLogo.classList.add('hidden');
        smallLogo.classList.add('visible');
        header.classList.add('sticky');
    } else {
        topLogo.classList.remove('hidden');
        smallLogo.classList.remove('visible');
        header.classList.remove('sticky');
    }
}

window.addEventListener('scroll', handleScroll);
