const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const root = document.documentElement;

const savedTheme = localStorage.getItem('data-theme');
if(savedTheme) {
    root.setAttribute('data-theme', savedTheme);
    updateIcon(savedTheme);
}

if (themeToggle) {
    themeToggle.addEventListener('click', (e) => {
        if (e && typeof e.preventDefault === 'function') e.preventDefault();

        const currentTheme = localStorage.getItem('data-theme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        root.setAttribute('data-theme', newTheme);
        localStorage.setItem('data-theme', newTheme);
        updateIcon(newTheme);
    });
}

function updateIcon(theme){
    if(theme === "dark") {
        themeIcon.classList.remove('sun');
        themeIcon.classList.add('moon');
    } else {
        themeIcon.classList.remove('moon');
        themeIcon.classList.add('sun');
    }
}

const navToggle = document.getElementById('nav-toggle');
const navi = document.querySelector('.navi');

if (navToggle && navi) {
  navToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const opened = navi.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', opened ? 'true' : 'false');
  });

  navi.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navi.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }));

  document.addEventListener('click', (e) => {
    if (!navi.contains(e.target) && e.target !== navToggle) {
      navi.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}