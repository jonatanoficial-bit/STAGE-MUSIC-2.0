document.addEventListener('DOMContentLoaded', () => {
  const current = document.body.dataset.page;
  document.querySelectorAll('.side-nav a, .bottom-nav a').forEach((link) => {
    const href = link.getAttribute('href') || '';
    if ((current === 'home' && href === 'index.html') || href.includes(current)) {
      link.classList.add('active');
    }
  });

  const optionCards = document.querySelectorAll('.option-card');
  optionCards.forEach((card) => {
    card.addEventListener('click', () => {
      optionCards.forEach((item) => item.classList.remove('active'));
      card.classList.add('active');
    });
  });
});
