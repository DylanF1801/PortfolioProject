/*Makes images in the portfolio section expand when hovered over*/
const images = document.querySelectorAll('#projects img');

images.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)';
    });
    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
    });
});
