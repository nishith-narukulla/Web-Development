// Init DOM Elements
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');


// Mouse EVENTS
left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
})

left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left');
})

right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
})

right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right');
})