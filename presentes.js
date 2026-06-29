const elements = document.querySelectorAll('.gift-card, .info-card, h1, h2, p');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.15
});

elements.forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});