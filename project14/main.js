// Init DOM Elements
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');

// auto slide fields
const auto = true;
const intervalTime = 5000;
let slideInterval;

// EVENTS #########################################

// Next Click
nextBtn.addEventListener('click', nextImage);

// Previous Click
prevBtn.addEventListener('click', prevImage);

// Functions

/*
Uncomment from here <--------------------------------
incase of not using auto slide funtionality
*/

// Display Next Image when nextBtn is clicked
function nextImage() {
    // get the current element
    // check for next slide existence
    // add .current to next slide
    // hide nextBtn for last slide
    const current = document.querySelector('.current');
    current.classList.remove('current');

    if (current.nextElementSibling.nextElementSibling) {
        prevBtn.classList.remove('hide-btn');
        current.nextElementSibling.classList.add('current');
    }
    else {
        current.nextElementSibling.classList.add('current');
        nextBtn.classList.add('hide-btn');
    }
}

// Display Previous Image when prevBtn is clicked
function prevImage() {
    // get the current element
    // check for previous slide existence
    // open up prevBtn
    // add .current to previous slide
    const current = document.querySelector('.current');
    current.classList.remove('current');

    if (current.previousElementSibling.previousElementSibling) {
        prevBtn.classList.remove('hide-btn');
        nextBtn.classList.remove('hide-btn');
        current.previousElementSibling.classList.add('current');
    }
    else {
        current.previousElementSibling.classList.add('current');
        prevBtn.classList.add('hide-btn');
    }
}

/*
Uncomment to here ------------------------------------->
*/


/*
comment from here <------------------------------------
in case of not using auto side functionality
*/

// if (auto) {
//     slideInterval = setInterval(nextImage, intervalTime);
// }

// // un-hide prevBtn
// prevBtn.classList.remove('hide-btn');

// // Display Next Image when nextBtn is clicked
// function nextImage() {
//     const current = document.querySelector('.current');
//     current.classList.remove('current');

//     if (current.nextElementSibling) {
//         current.nextElementSibling.classList.add('current');
//     }
//     else {
//         slides[0].classList.add('current');
//     }
//     if (auto) {
//         clearInterval(slideInterval);
//         slideInterval = setInterval(nextImage, intervalTime);
//     }
// }

// // Display Previous Image when prevBtn is clicked
// function prevImage() {
//     const current = document.querySelector('.current');
//     current.classList.remove('current');

//     if (current.previousElementSibling) {
//         current.previousElementSibling.classList.add('current');
//     }
//     else {
//         slides[slides.length - 1].classList.add('current');
//     }
//     if (auto) {
//         clearInterval(slideInterval);
//         slideInterval = setInterval(nextImage, intervalTime);
//     }
// }

/*
comment to here --------------------------------------->
*/