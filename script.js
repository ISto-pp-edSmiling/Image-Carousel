
const carousel = document.querySelector('.carousel'),
firstImg = carousel.querySelectorAll('img')[0];
arrowIcons = document.querySelectorAll('.wrapper i');

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14; 
    // getting first img width & adding 14 margin value

arrowIcons.forEach(icon => {
    icon.addEventListener('click', () => { 
        carousel.scrollLeft += icon.id == 'left' ? -firstImgWidth : firstImgWidth;
    });
})

const dragStart = (e) => {
        //updating global variables values on mouse down event.
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
        // scrolling images/carousel to the left according to the mouse pointer.
    if(!isDragStart) return;
    e.preventDefault();
    carousel.classList.add('dragging')
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    console.log(e.pageX)
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove('dragging');
}

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('mouseup', dragStop);
