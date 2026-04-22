document.addEventListener('DOMContentLoaded', () => {
  const current = document.body.dataset.page;
  document.querySelectorAll('.side-nav a, .bottom-nav a').forEach((link) => {
    if (link.getAttribute('href')?.includes(current) || (current === 'home' && link.getAttribute('href') === 'index.html')) {
      link.classList.add('active');
    }
  });
});
