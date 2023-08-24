const themeSlectors = document.querySelectorAll('.theme-dot');

// look in localStorage for previous session theme data
const theme = localStorage.getItem('theme');

if (theme == null) {
    setTheme('light');
}
else {
    setTheme(theme);
}
// EVENTS
themeSlectors.forEach(item => item.addEventListener('click', function () {
    setTheme(this.dataset.mode);
}))

// Functions

function setTheme(mode) {
    const styleSrc = document.querySelector('#theme-style');

    if (mode == 'green') {
        styleSrc.href = 'green.css';
    }

    else if (mode == 'blue') {
        styleSrc.href = 'blue.css';
    }

    else if (mode == 'purple') {
        styleSrc.href = 'purple.css';
    }

    else {
        styleSrc.href = 'default.css';
    }

    localStorage.setItem('theme', mode);
}