const menu = document.querySelector('.menu');
const nav = document.querySelector('.primary-navigation');

//feature properties
const prev = document.getElementById('properties-prev');
const next = document.getElementById('properties-next');
const prevMobile = document.getElementById('prev-mobile');
const nextMobile = document.getElementById('next-mobile');
const counter = document.getElementById('properties-value');
const counterMobile = document.getElementById('properties-value_mobile');
const container = document.querySelector('.featured-property-container');

//testimonials
const prevT = document.getElementById('t-prev');
const nextT = document.getElementById('t-next');
const prevTMobile = document.getElementById('t-prev-mob');
const nextTMobile = document.getElementById('t-next-mob');
const counterT = document.getElementById('t-val');
const counterTMobile = document.getElementById('t-counter-mobile');
const containerT = document.querySelector('.testimonial-card-container');

//faq

const prevF = document.getElementById('faq-prev');
const nextF = document.getElementById('faq-next');
const prevFMob = document.getElementById('prev-faq-mobile');
const nextFMob = document.getElementById('next-faq-mobile');
const counterF = document.getElementById('faq-value');
const counterFMob = document.getElementById('faq-mobile-val');
const containerFaq = document.querySelector('.faq-card-container');

menu.addEventListener('click', function (e) {
  e.preventDefault();
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
    counter.textContent = page;
  }
  console.log('click');
});

next.addEventListener('click', function () {
  nextScroll(container);
  if (page < maxPage) {
    page++;
    counter.textContent = page;
  }
});

prevMobile.addEventListener('click', function () {
  prevScroll(container);
  if (page <= maxPage && page > 1) {
    page--;
    counterMobile.textContent = page;
  }
});

nextMobile.addEventListener('click', function () {
  nextScroll(container);
  if (page < maxPage) {
    page++;
    counterMobile.textContent = page;
  }
});

//testimonials

prevT.addEventListener('click', function () {
  prevScroll(containerT);
  if (page <= maxPage && page > 1) {
    page--;
    counterT.textContent = page;
  }
});

nextT.addEventListener('click', function () {
  nextScroll(containerT);
  if (page < maxPage) {
    page++;
    counterT.textContent = page;
  }
});
prevTMobile.addEventListener('click', function () {
  prevScroll(containerT);
  if (page <= maxPage && page > 1) {
    page--;
    counterMobile.textContent = page;
  }
});

nextTMobile.addEventListener('click', function () {
  nextScroll(containerT);
  if (page < maxPage) {
    page++;
    counterMobile.textContent = page;
  }
});

//faq

prevF.addEventListener('click', function (e) {
  prevScroll(containerFaq);
  if (page <= maxPage && page > 1) {
    page--;
    counterF.textContent = page;
  }
});
nextF.addEventListener('click', function (e) {
  nextScroll(containerFaq);
  if (page < maxPage) {
    page++;
    counterF.textContent = page;
  }
});
prevFMob.addEventListener('click', function (e) {
  prevScroll(containerFaq);
  if (page <= maxPage && page > 1) {
    page--;
    counterFMob.textContent = page;
  }
});
nextFMob.addEventListener('click', function (e) {
  nextScroll(containerFaq);
  if (page < maxPage) {
    page++;
    counterFMob.textContent = page;
  }
});
