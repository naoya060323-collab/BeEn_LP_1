window.addEventListener('scroll', () => {
  const header = document.querySelector('.site-header');
  const hero = document.querySelector('#hero'); // ファーストビューのid
  const heroHeight = hero.offsetHeight;

  if (window.scrollY > heroHeight - 100) {
    header.classList.add('show');
  } else {
    header.classList.remove('show');
  }
});


// 初回ロード時にヒーロー文字をふわっと表示 + ハッシュ復元対策
window.addEventListener('DOMContentLoaded', () => {
  const nav = performance.getEntriesByType('navigation')[0];
  const isReload = nav && nav.type === 'reload';
  const hasHash = location.hash && location.hash.length > 1;



  // ヒーロー演出のトリガ
  document.body.classList.add('is-loaded');
});

// 固定ヘッダーの高さに合わせて、アンカー到達位置を自動調整
function updateHeaderOffset() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const offset = header.getBoundingClientRect().height;
  document.documentElement.style.setProperty('--header-offset', `${offset}px`);
}

// 初期化とイベントでの更新
window.addEventListener('load', updateHeaderOffset);
window.addEventListener('resize', updateHeaderOffset);
// ヘッダーの表示/非表示クラスが変わるケースにも対応
const headerObserver = new MutationObserver(updateHeaderOffset);
const headerEl = document.querySelector('.site-header');
if (headerEl) headerObserver.observe(headerEl, { attributes: true, attributeFilter: ['class', 'style'] });



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

// ===== ハンバーガーメニュー =====
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
  // メニュー内リンクをクリックしたら閉じる
  siteMenu.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('a')) closeMenu();
  });
  // ESCで閉じる
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
  // リサイズでPC幅になったら閉じる
  window.addEventListener('resize', () => {
    if (window.innerWidth > 480) closeMenu();
  });
}


(function () {
  const section = document.querySelector('#app_examples');
  const track   = section.querySelector('.app_examples_track');
  const prevBtn = section.querySelector('.app_examples_nav.prev');
  const nextBtn = section.querySelector('.app_examples_nav.next');

  const slides  = Array.from(track.children);
  let index = 0;

  // SPだけスライダー挙動にする（768px以下）
  const isSP = () => window.matchMedia('(max-width: 768px)').matches;

  function update() {
    // 1枚 = 100% 幅で移動
    track.style.transform = `translateX(${-index * 100}%)`;
    // 端で矢印無効
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === slides.length - 1;
  }

  function go(step) {
    if (!isSP()) return; // PC時は無視
    index = Math.max(0, Math.min(slides.length - 1, index + step));
    update();
  }

  prevBtn.addEventListener('click', () => go(-1));
  nextBtn.addEventListener('click', () => go(1));

  update();
})();



(function () {
  const section = document.querySelector('#merit');
  const track   = section.querySelector('.merit_track');
  const prevBtn = section.querySelector('.merit_nav.prev');
  const nextBtn = section.querySelector('.merit_nav.next');

  const slides  = Array.from(track.children);
  let index = 0;

  // SPだけスライダー挙動にする（768px以下）
  const isSP = () => window.matchMedia('(max-width: 768px)').matches;

  function update() {
    // 1枚 = 100% 幅で移動
    track.style.transform = `translateX(${-index * 100}%)`;
    // 端で矢印無効
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === slides.length - 1;
  }

  function go(step) {
    if (!isSP()) return; // PC時は無視
    index = Math.max(0, Math.min(slides.length - 1, index + step));
    update();
  }

  prevBtn.addEventListener('click', () => go(-1));
  nextBtn.addEventListener('click', () => go(1));




  // 初期化
  update();
})();




(function () {
  const section = document.querySelector('#introduce');
  const track   = section.querySelector('.introduce_track');
  const prevBtn = section.querySelector('.introduce_nav.prev');
  const nextBtn = section.querySelector('.introduce_nav.next');

  const slides  = Array.from(track.children);
  let index = 0;

  // SPだけスライダー挙動にする（768px以下）
  const isSP = () => window.matchMedia('(max-width: 768px)').matches;

  function update() {
    // 1枚 = 100% 幅で移動
    track.style.transform = `translateX(${-index * 100}%)`;
    // 端で矢印無効
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === slides.length - 1;
  }

  function go(step) {
    if (!isSP()) return; // PC時は無視
    index = Math.max(0, Math.min(slides.length - 1, index + step));
    update();
  }

  prevBtn.addEventListener('click', () => go(-1));
  nextBtn.addEventListener('click', () => go(1));




  // 初期化
  update();
})();
