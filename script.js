const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('primaryNav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('is-open');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

document.querySelectorAll('.faq-question').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    const isOpen = item.classList.contains('active');
    item.classList.toggle('active');
    button.setAttribute('aria-expanded', String(!isOpen));
  });
});

const contactForm = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');

if (contactForm && feedback) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    feedback.className = 'form-feedback';

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!fullName || !email || !message) {
      feedback.textContent = 'Please fill in all fields.';
      feedback.classList.add('error');
      return;
    }

    if (!emailRegex.test(email)) {
      feedback.textContent = 'Please enter a valid email address.';
      feedback.classList.add('error');
      return;
    }

    feedback.textContent = 'Thanks! This demo form is front-end only. Connect a backend before launch.';
    feedback.classList.add('success');
    contactForm.reset();
  });
}

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());
