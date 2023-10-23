document.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 200) {
        navbar.style.background = 'rgb(27, 25, 25)';
    } else {
        navbar.style.background = 'transparent';
    }
})

const slides = document.querySelectorAll('.content');
var counter = 0;
slides.forEach( 
    (box_container, index ) => {
    box_container.style.left = `${index * 100}%`;
});

const goPrev = () => {
    counter--;
    if ( counter === -1 ) {
        counter = slides.length;
    } else {
        slideImages();
    }
}
const goNext = () => {
    counter++;
    if(counter === slides.length){
        counter = -1;
    } else {
        slideImages();
    }
}

const slideImages = () => {
    slides.forEach( (box_container) => {
        box_container.style.transform = `translateX(-${counter * 100}% )`;
    })
}