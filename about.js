const value = document.getElementById('client-value');
const valueM = document.getElementById('cli-counter_mobile');
const prev = document.getElementById('client-prev');
const prevM = document.getElementById('prev-client_mobile');
const nextM = document.getElementById('next-client_mobile');
const next = document.getElementById('client-next');
const container = document.querySelector('.client-card-container');

/////
const menu = document.querySelector('.menu');
const nav = document.querySelector('.primary-navigation');

menu.addEventListener('click', function () {
  menu.classList.toggle('active');
  nav.classList.toggle('active');
});
const scrollAmount = 120;
let page = 1;
const maxPage = 6;
function prevScroll(container) {
  container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
}
function nextScroll(container) {
  container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}

prev.addEventListener('click', function () {
  prevScroll(container);
  if (page <= maxPage && page > 1) {
    page--;
    value.textContent = page;
  }
});

next.addEventListener('click', function () {
  nextScroll(container);

  if (page < maxPage) {
    page++;
    value.textContent = page;
  }
});

prevM.addEventListener('click', function () {
  prevScroll(container);
  if (page <= maxPage && page > 1) {
    page--;
    valueM.textContent = page;
  }
});
nextM.addEventListener('click', function () {
  nextScroll(container);
  if (page < maxPage) {
    page++;
    valueM.textContent = page;
  }
});
