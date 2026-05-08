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

const contactForm = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');

if (contactForm && feedback) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    feedback.className = 'form-feedback';

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const schoolName = document.getElementById('schoolName').value.trim();
    const message = document.getElementById('message').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!fullName || !email || !schoolName || !message) {
      feedback.textContent = 'Please complete all fields before submitting.';
      feedback.classList.add('error');
      return;
    }

    if (!emailRegex.test(email)) {
      feedback.textContent = 'Please enter a valid email address.';
      feedback.classList.add('error');
      return;
    }

    feedback.textContent = 'Thanks! Your request is ready. If this site is not yet connected to a support inbox, please share the same details through your school MindCare contact.';
    feedback.classList.add('success');
    contactForm.reset();
  });
}

const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealElements.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}

const backToTop = document.getElementById('backToTop');
if (backToTop) {
  const handleBackToTopVisibility = () => {
    backToTop.classList.toggle('show', window.scrollY > 420);
  };

  window.addEventListener('scroll', handleBackToTopVisibility, { passive: true });
  handleBackToTopVisibility();
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}
