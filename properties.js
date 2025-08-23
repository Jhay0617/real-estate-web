//containers
const container = document.querySelector('.location');
const container2 = document.querySelector('.prop-type');
const container3 = document.querySelector('.pric-range');
const container4 = document.querySelector('.prop-size');
const container5 = document.querySelector('.build-year');

// drop down
const option = document.querySelector('.option-loc');
const option2 = document.querySelector('.option-prop');
const option3 = document.querySelector('.option-range');
const option4 = document.querySelector('.option-size');
const option5 = document.querySelector('.option-year');

let scrollAmount = 120;

let page = 1;
const maxPage = 6;

const counter = document.getElementById('value');
const counter1 = document.getElementById('value_mobile');
const btnPrev = document.querySelectorAll('.prev');
btnPrev.forEach(btn => {
  btn.addEventListener('click', function () {
    const container = document.querySelector('.featured-property-container');
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });

    if (page <= maxPage && page > 1) {
      page--;
      counter.textContent = page;
      counter1.textContent = page;
    }
  });
});
const btnNext = document.querySelectorAll('.next');

btnNext.forEach(btn => {
  btn.addEventListener('click', function () {
    const container = document.querySelector('.featured-property-container');
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });

    if (page < maxPage) {
      page++;
      counter.textContent = page;
      counter1.textContent = page;
    }
  });
});

container.addEventListener('click', function (e) {
  if (e.target.className === 'drop-down') {
    option.classList.toggle('active');
  }
});

container2.addEventListener('click', function (e) {
  if (e.target.className === 'drop-down') {
    option2.classList.toggle('active');
  }
});
container3.addEventListener('click', function (e) {
  if (e.target.className === 'drop-down') {
    option3.classList.toggle('active');
  }
});
container4.addEventListener('click', function (e) {
  if (e.target.className === 'drop-down') {
    option4.classList.toggle('active');
  }
});
container5.addEventListener('click', function (e) {
  if (e.target.className === 'drop-down') {
    option5.classList.toggle('active');
  }
});

function filterCards(category) {
  const cards = document.querySelectorAll('.feature-card');
  cards.forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.classList.remove('hidden');
    } else if (!card.classList.contains(category)) {
      card.classList.add('hidden');
    }
  });
}

const search = document.querySelector('.btn-container');

search.addEventListener('click', function (e) {
  e.preventDefault();
  const cards = document.querySelectorAll('.feature-card');
  const input = document.querySelector('.input-search');
  cards.forEach(card => {
    if (input.value === 'all' || card.classList.contains(input.value)) {
      card.classList.remove('hidden');
    } else if (!card.classList.contains(input.value)) {
      card.classList.add('hidden');
    }
  });
  input.textContent = input.value = '';
});
