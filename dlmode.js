/* Event driven JS functions To make dark-light mode work */
document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('theme-toggle');
    const bulb = document.getElementById('bulb');
    const body = document.body;

    function setTheme(theme) {
        if(theme === 'dark') {
            body.classList.add('dark-mode');
            body.classList.remove('light-mode');
        } else {
            body.classList.add('light-mode');
            body.classList.remove('dark-mode');
        }
        localStorage.setItem('theme', theme);
    }

    (function initTheme() {
        let savedTheme = localStorage.getItem('theme');
        if(!savedTheme) {
            savedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        setTheme(savedTheme);
    })();

    toggleBtn.addEventListener('click', function() {
        bulb.classList.add('pulling');
        setTimeout(() => bulb.classList.remove('pulling'), 300);
        const newTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
        setTheme(newTheme);
    });
});
