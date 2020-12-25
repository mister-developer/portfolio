let gallery = document.querySelector('.projecs-container');
let galleryList = gallery.querySelector('ul');

let width = 80;
let coll = 2;
let position = 0;

let prevButton = gallery.querySelector('.prev');
let nextButton = gallery.querySelector('.next');

prevButton.addEventListener('click', () => {
    position += width * coll;
    galleryList.style.marginLeft = position + 'px';
});

nextButton.addEventListener('click', () => {
    position -= width * coll;
    galleryList.style.marginLeft = position + 'px';
})
