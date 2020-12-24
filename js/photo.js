let imgBlock = document.querySelector('.sidebar-img-list');

function changeImg(href, title) {
    let mainImg = document.querySelector('.sidebar-img');
    mainImg.src = href;
    mainImg.alt = title;
}

imgBlock.addEventListener('click', (event) => {
    let innerImg = event.target.closest('a');

    if (!innerImg) return;
    changeImg(innerImg.href, innerImg.title)
    event.preventDefault();
})