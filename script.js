/* MOBILE MENU */
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  links.classList.toggle('active');
});

/* DARK MODE */
const themeBtn = document.getElementById('theme-toggle');

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem(
    'theme',
    document.body.classList.contains('dark') ? 'dark' : 'light'
  );
});

/* FADE-IN ON SCROLL */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
});

document.querySelectorAll('section').forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = 'translateY(30px)';
  sec.style.transition = 'all 0.6s ease';
  observer.observe(sec);
});

document.getElementById('year').textContent = new Date().getFullYear();