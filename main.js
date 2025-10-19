window.addEventListener('scroll', () => {
  const header = document.querySelector('.site-header');
  const hero = document.querySelector('#hero'); // ファーストビューのid
  const heroHeight = hero.offsetHeight;

  if (window.scrollY > heroHeight - 60) {
    header.classList.add('show');
  } else {
    header.classList.remove('show');
  }
});



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
