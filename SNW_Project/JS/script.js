const themeToggle = document.getElementById('themeToggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  themeToggle.textContent = '🌞';
} else {
  body.classList.remove('dark');
  themeToggle.textContent = '🌙';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
    themeToggle.textContent = '🌞';
  } else {
    localStorage.setItem('theme', 'light');
    themeToggle.textContent = '🌙';
  }
});
