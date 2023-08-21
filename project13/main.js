// Questions array
const questions = [
    { question: "Enter Your First Name" },
    { question: "Enter Your Last Name" },
    { question: "Enter Your Email", pattern: /\S+@\S+\.\S+/ },
    { question: "Create A Password", type: 'password' }
];

// Transition times
const shakeTime = 100;
const switchTime = 200;

// Init DOM elements
const formBox = document.querySelector('#form-box');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const inputGroup = document.querySelector('#input-group');
const inputField = document.querySelector('#input-field');
const inputLabel = document.querySelector('#input-label');
const inputProgress = document.querySelector('#input-progress');
const progressBar = document.querySelector('#progress-bar');

// Init position at First question
let position = 0;

// EVENTS ########################################################

// display question as DOM loads
document.addEventListener('DOMContentLoaded', getQuestion);

// Next Button Click
nextBtn.addEventListener('click', validate);

// Prev Button Click
prevBtn.addEventListener('click', getPrevQsn);

// inputField validate on Enter click
inputField.addEventListener('keyup', e => {
    if (e.keyCode == 13) {
        validate();
    }
})

// Functions ########################################################

// fetch questions from array
function getQuestion() {
    // get current question
    inputLabel.innerHTML = questions[position].question;

    // get current type
    inputField.type = questions[position].type || 'text';

    // get current answer
    inputField.value = questions[position].answer || '';

    // focus on element
    inputField.focus();

    // progressBar
    progressBar.style.width = (position * 100) / questions.length + "%";

    // add user icon OR back arrow
    if (!position) {
        prevBtn.classList.add('user-logo');
    }
    else {
        prevBtn.classList.remove('user-logo');
    }

    // display Question
    showQsn();
}

// display Questions to user
function showQsn() {
    inputGroup.style.opacity = 1;
    inputProgress.style.transition = '';
    inputProgress.style.width = '90%';
}

// Hide question from user
function hideQsn() {
    inputGroup.style.opacity = 0;
    inputProgress.style.transition = 'none';
    inputProgress.style.width = '0%';
    inputGroup.style.border = null;
}

// transform Function
function transform(x, y) {
    formBox.style.transform = `translate(${x}px, ${y}px)`;
}

// Validating the input
function validate() {
    // make sure the pattern matches if there is one
    if (!inputField.value.match(questions[position].pattern || /.+/)) {
        inputFail();
    }
    else {
        inputPass();
    }
}

// Input Validation Success
function inputPass() {
    inputProgress.className = '';
    setTimeout(transform, shakeTime * 0, 0, 10);
    setTimeout(transform, shakeTime * 1, 0, 0);

    // Store Answer before going to next question
    questions[position].answer = inputField.value;

    // Increment position
    position++;

    if (questions[position]) {
        hideQsn();
        getQuestion();
    }
    else {
        hideQsn();
        // make the form disappear
        formBox.className = 'close';
        prevBtn.classList.add('close');
        nextBtn.classList.add('close');
        progressBar.style.width = '100%';

        // Form Completed
        formComplete();
    }

}

// Input Validation Fail
function inputFail() {
    inputProgress.className = 'error';
    // shake Effect --> transform()
    for (let i = 0; i < 6; i++) {
        setTimeout(transform, shakeTime * i, ((i % 2) * 2 - 1) * 10, 0);
        setTimeout(transform, shakeTime * 6, 0, 0);
        inputField.focus();
    }
}

function getPrevQsn() {
    hideQsn();
    position--;
    getQuestion();
}

// Form complete
function formComplete() {
    console.log(questions);
    const h1 = document.createElement('h1');
    h1.classList.add('end');
    h1.appendChild(document.createTextNode(`Thanks ${questions[0].answer}. You are registered and will get an email shortly :) `))
    setTimeout(() => {
        formBox.parentElement.appendChild(h1);
        setTimeout(() => (h1.style.opacity = 1), 50)
    }, 1000);
}