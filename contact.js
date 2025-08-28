const buttons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.hq-cards');

console.log(cards);
buttons.forEach(button => {
  button.addEventListener('click', () => {
    console.log('click');
    // Remove active class from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');

    cards.forEach(card => {
      if (filter === 'all' || card.classList.contains(filter)) {
        card.classList.remove('hidden');
        setTimeout(() => card.classList.remove('display-none'), 300);
      } else {
        card.classList.add('hidden');
        setTimeout(() => card.classList.add('display-none'), 300);
      }
    });
  });
});
