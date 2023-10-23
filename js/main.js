document.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 200) {
        navbar.style.background = 'rgb(27, 25, 25)';
    } else {
        navbar.style.background = 'transparent';
    }
})