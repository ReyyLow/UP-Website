window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {    // change 50 to whatever scroll distance you want
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

document.getElementById('show-all-ungraduate-btn').onclick = function(e) {
  e.preventDefault();
  document.querySelectorAll('.program-box.hidden').forEach(el => {
    el.classList.remove('hidden');
    el.classList.add('program-box');
  });
  this.style.display = 'none';
};

document.getElementById('show-all-graduate-btn').onclick = function(e) {
  e.preventDefault();
  document.querySelectorAll('.program-box-graduate.hidden').forEach(el => {
    el.classList.remove('hidden');
    el.classList.add('program-box-graduate');
  });
  this.style.display = 'none';
};
