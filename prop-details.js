const clickImg = document.querySelectorAll('.img-clicked');
const randomImg = document.querySelectorAll('.replace-img');
const container = document.querySelector('.scroll-img');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const bar = document.querySelectorAll('.steps');

let currentStep = 1;
const scrollAmount = 120;

function prevScroll(container) {
  container.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth',
  });
}
function nextScroll(container) {
  container.scrollBy({
    left: scrollAmount,
    behavior: 'smooth',
  });
}
function stepIndicator() {
  bar.forEach((step, index) => {
    if (index < currentStep) {
      step.classList.add('color');
    } else {
      step.classList.remove('color');
    }
  });
  prev.disabled = currentStep === 1;
  next.disabled = currentStep === bar.length;
}

prev.addEventListener('click', () => {
  prevScroll(container);
  if (currentStep > 1) {
    currentStep--;
    stepIndicator();
  }
});

next.addEventListener('click', () => {
  nextScroll(container);
  if (currentStep < bar.length) {
    currentStep++;
    stepIndicator();
  }
});
const random = [
  'assets/display-1.png',
  'assets/display-2.png',
  'assets/display-2.png',
  'assets/display-1.png',
  'assets/display-2.png',
  'assets/display-1.png',
];

clickImg.forEach(img => {
  img.addEventListener('click', () => {
    clickImg.forEach(img => img.classList.remove('active'));
    img.classList.add('active');

    randomImg.forEach(image => {
      const img = Math.floor(Math.random() * random.length);
      image.src = random[img];
    });
  });
});
