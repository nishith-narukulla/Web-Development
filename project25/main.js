// INTI DOM
const signInBtn = document.querySelector('#signin-btn')
const signUpBtn = document.querySelector('#signup-btn')
const closeBtn = document.querySelectorAll('.close-btn')

// EVENTS
signInBtn.addEventListener('click', showModal)
signUpBtn.addEventListener('click', showModal)
closeBtn.forEach(item => item.addEventListener('click', closeModal))
window.addEventListener('click', closeAllModals)

// FUNCTIONS
function showModal(e) {
    if (e.target.id === 'signin-btn') {
        document.querySelector('#signin-modal').style.display = 'block'
    } else {
        document.querySelector('#signup-modal').style.display = 'block'
    }
}

function closeModal(e) {
    const modalType = e.target.parentElement.parentElement.id
    if (modalType === 'signin-modal') {
        document.querySelector('#signin-modal').style.display = 'none'
    } else {
        document.querySelector('#signup-modal').style.display = 'none'
    }
}

function closeAllModals(e) {
    if (e.target.className === 'modal') {
        document.querySelector('#signin-modal').style.display = 'none'
        document.querySelector('#signup-modal').style.display = 'none'
    }
}