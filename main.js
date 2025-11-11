// SP判定
const isSP = () => window.matchMedia('(max-width: 480px)').matches;


// ロード時の処理、アニメーション



window.addEventListener('DOMContentLoaded', () => {
  const nav = performance.getEntriesByType('navigation')[0];
  const isReload = nav && nav.type === 'reload';
  const hasHash = location.hash && location.hash.length > 1;



  document.body.classList.add('is-loaded');
});


// ヘッダーの高さをCSS変数にセット
function updateHeaderOffset() {
 

  const header = document.querySelector('.site-header');
  if (!header) return;
  const offset = header.getBoundingClientRect().height;
  document.documentElement.style.setProperty('--header-offset', `${offset}px`);
}


window.addEventListener('load', updateHeaderOffset);
window.addEventListener('resize', updateHeaderOffset);
const headerObserver = new MutationObserver(updateHeaderOffset);
const headerEl = document.querySelector('.site-header');
if (headerEl) headerObserver.observe(headerEl, { attributes: true, attributeFilter: ['class', 'style'] });



function updateHeaderByScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const hero = document.querySelector('#hero');
  const heroHeight = hero ? hero.offsetHeight : 0;
  if (window.scrollY > heroHeight - 100) header.classList.add('show');
  else header.classList.remove('show');
}

window.addEventListener('load', updateHeaderByScroll);
window.addEventListener('resize', updateHeaderByScroll);
window.addEventListener('scroll', updateHeaderByScroll);

//質問の開閉

const question1 = document.querySelector('.question_1');
const head1 = question1.querySelector('.question_1_faq-head');

head1.addEventListener('click', () => {
  question1.classList.toggle('is-open');
});

const question2 = document.querySelector('.question_2');
const head2 = question2.querySelector('.question_2_faq-head');

head2.addEventListener('click', () => {
  question2.classList.toggle('is-open');
});

const question3 = document.querySelector('.question_3');
const head3 = question3.querySelector('.question_3_faq-head');

head3.addEventListener('click', () => {
  question3.classList.toggle('is-open');
});

const question4 = document.querySelector('.question_4');
const head4 = question4.querySelector('.question_4_faq-head');

head4.addEventListener('click', () => {
  question4.classList.toggle('is-open');
});

const question5 = document.querySelector('.question_5');
const head5 = question5.querySelector('.question_5_faq-head');

head5.addEventListener('click', () => {
  question5.classList.toggle('is-open');
});

//ハンバーガーメニュー

const burger = document.querySelector('.hamburger');
const siteMenu = document.getElementById('site-menu');


function closeMenu() {
  document.body.classList.remove('nav-open');
  if (burger) burger.setAttribute('aria-expanded', 'false');
}

function openMenu() {
  document.body.classList.add('nav-open');
  if (burger) burger.setAttribute('aria-expanded', 'true');
}




if (burger && siteMenu) {
  burger.addEventListener('click', () => {
    const opened = document.body.classList.toggle('nav-open');
    burger.setAttribute('aria-expanded', opened ? 'true' : 'false');
  });



  siteMenu.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('a')) closeMenu();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 460) closeMenu();
  });
}

//三連カード

(function () {
  const section = document.querySelector('#app_examples');
  const track   = section.querySelector('.app_examples_track');
  const prevBtn = section.querySelector('.app_examples_nav.prev');
  const nextBtn = section.querySelector('.app_examples_nav.next');

  const slides  = Array.from(track.children);
  let index = 0;


  const isSP = () => window.matchMedia('(max-width: 768px)').matches;

  function update() {
    track.style.transform = `translateX(${-index * 100}%)`;
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === slides.length - 1;
  }

  function go(step) {
    if (!isSP()) return; 
    index = Math.max(0, Math.min(slides.length - 1, index + step));
    update();
  }

  prevBtn.addEventListener('click', () => go(-1));
  nextBtn.addEventListener('click', () => go(1));

  update();
})();


//三連カード


(function () {
  const section = document.querySelector('#merit');
  const track   = section.querySelector('.merit_track');
  const prevBtn = section.querySelector('.merit_nav.prev');
  const nextBtn = section.querySelector('.merit_nav.next');

  const slides  = Array.from(track.children);
  let index = 0;

  const isSP = () => window.matchMedia('(max-width: 768px)').matches;

  function update() {
    track.style.transform = `translateX(${-index * 100}%)`;
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === slides.length - 1;
  }

  function go(step) {
    if (!isSP()) return; 
    index = Math.max(0, Math.min(slides.length - 1, index + step));
    update();
  }

  prevBtn.addEventListener('click', () => go(-1));
  nextBtn.addEventListener('click', () => go(1));




  update();
})();




(function () {
  const section = document.querySelector('#introduce');
  const track   = section.querySelector('.introduce_track');
  const prevBtn = section.querySelector('.introduce_nav.prev');
  const nextBtn = section.querySelector('.introduce_nav.next');

  const slides  = Array.from(track.children);
  let index = 0;

  const isSP = () => window.matchMedia('(max-width: 768px)').matches;

  function update() {
    track.style.transform = `translateX(${-index * 100}%)`;
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === slides.length - 1;
  }

  function go(step) {
    if (!isSP()) return; 
    index = Math.max(0, Math.min(slides.length - 1, index + step));
    update();
  }

  prevBtn.addEventListener('click', () => go(-1));
  nextBtn.addEventListener('click', () => go(1));


  update();
})();
