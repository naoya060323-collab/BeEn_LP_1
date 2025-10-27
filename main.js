// ===== スクロール時のヘッダー出現 =====
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

// ===== リロード時にアンカーや復元スクロールで飛ばされるのを抑止 =====
// ブラウザのスクロール復元（前回位置へ自動スクロール）を無効化
try {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
} catch (_) {}

// 初回ロード時にヒーロー文字をふわっと表示 + ハッシュ復元対策
window.addEventListener('DOMContentLoaded', () => {
  const nav = performance.getEntriesByType('navigation')[0];
  const isReload = nav && nav.type === 'reload';
  const hasHash = location.hash && location.hash.length > 1;

  // リロードで #xxx が付いたままの場合はトップに固定してハッシュを除去
  if (isReload && hasHash) {
    // 一旦スムースをオフにして即時でトップへ
    const htmlEl = document.documentElement;
    const prevBehavior = htmlEl.style.scrollBehavior;
    htmlEl.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    // ハッシュを消して以後の予期せぬアンカースクロールを防止
    history.replaceState(null, '', location.pathname + location.search);
    // 元に戻す
    htmlEl.style.scrollBehavior = prevBehavior;
  }

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


  // スワイプ（タッチ）
  let startX = 0, deltaX = 0, dragging = false;
  const threshold = 50; // しきい値

  function onTouchStart(e) {
    if (!isSP()) return;
    dragging = true;
    startX = e.touches ? e.touches[0].clientX : e.clientX;
    deltaX = 0;
  }
  function onTouchMove(e) {
    if (!dragging || !isSP()) return;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    deltaX = x - startX;
  }
  function onTouchEnd() {
    if (!dragging || !isSP()) return;
    if (Math.abs(deltaX) > threshold) {
      if (deltaX < 0) go(1);  // 左へスワイプ→次へ
      else            go(-1); // 右へスワイプ→前へ
    } else {
      update(); // 元位置に戻す
    }
    dragging = false;
  }

  track.addEventListener('touchstart', onTouchStart, { passive: true });
  track.addEventListener('touchmove',  onTouchMove,  { passive: true });
  track.addEventListener('touchend',   onTouchEnd);
  // マウスドラッグも対応したいなら以下を有効化
  track.addEventListener('mousedown', onTouchStart);
  window.addEventListener('mousemove', onTouchMove);
  window.addEventListener('mouseup',   onTouchEnd);

  // 画面回転やリサイズ時に現在indexを反映
  window.addEventListener('resize', update);

  // 初期化
  update();
})();

